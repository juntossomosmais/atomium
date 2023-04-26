/* eslint-disable no-param-reassign,@typescript-eslint/no-shadow */
import type { FileInfo } from 'jscodeshift';
import { babelParse, babelParseExpression } from '@storybook/csf-tools';
import { remark } from 'remark';
import type { Root } from 'remark-mdx';
import remarkMdx from 'remark-mdx';
import { SKIP, visit } from 'unist-util-visit';
import { is } from 'unist-util-is';
import type {
  MdxJsxAttribute,
  MdxJsxExpressionAttribute,
  MdxJsxFlowElement,
  MdxJsxTextElement,
} from 'mdast-util-mdx-jsx';
import type { MdxjsEsm } from 'mdast-util-mdxjs-esm';
import * as t from '@babel/types';
import type { BabelFile } from '@babel/core';
import * as babel from '@babel/core';
import * as recast from 'recast';
import * as path from 'node:path';
import prettier from 'prettier';
import * as fs from 'node:fs';
import camelCase from 'lodash/camelCase';
import type { MdxFlowExpression } from 'mdast-util-mdx-expression';

const mdxProcessor = remark().use(remarkMdx) as ReturnType<typeof remark>;

export default function jscodeshift(info: FileInfo) {
  const parsed = path.parse(info.path);

  let baseName = path.join(
    parsed.dir,
    parsed.name.replace('.mdx', '').replace('.stories', '').replace('.story', '')
  );

  // make sure the new csf file we are going to create exists
  while (fs.existsSync(`${baseName}.stories.js`)) {
    baseName += '_';
  }

  const result = transform(info.source, path.basename(baseName));

  const [mdx, csf] = result;

  if (csf != null) {
    fs.writeFileSync(`${baseName}.stories.js`, csf);
  }

  return mdx;
}

export function transform(source: string, baseName: string): [mdx: string, csf: string] {
  const root = mdxProcessor.parse(source);
  const storyNamespaceName = nameToValidExport(`${baseName}Stories`);

  const metaAttributes: Array<MdxJsxAttribute | MdxJsxExpressionAttribute> = [];
  const storiesMap = new Map<
    string,
    | {
        type: 'value';
        attributes: Array<MdxJsxAttribute | MdxJsxExpressionAttribute>;
        children: (MdxJsxFlowElement | MdxJsxTextElement)['children'];
      }
    | {
        type: 'reference';
      }
    | {
        type: 'id';
      }
  >();

  // rewrite addon docs import
  visit(root, ['mdxjsEsm'], (node: MdxjsEsm) => {
    node.value = node.value
      .replaceAll('@storybook/addon-docs/blocks', '@storybook/blocks')
      .replaceAll('@storybook/addon-docs', '@storybook/blocks');
  });

  const file = getEsmAst(root);

  visit(
    root,
    ['mdxJsxFlowElement', 'mdxJsxTextElement'],
    (node: MdxJsxFlowElement | MdxJsxTextElement, index, parent) => {
      if (is(node, { name: 'Meta' })) {
        metaAttributes.push(...node.attributes);
        node.attributes = [
          {
            type: 'mdxJsxAttribute',
            name: 'of',
            value: {
              type: 'mdxJsxAttributeValueExpression',
              value: storyNamespaceName,
            },
          },
        ];
      }
      if (is(node, { name: 'Story' })) {
        const nameAttribute = node.attributes.find(
          (it) => it.type === 'mdxJsxAttribute' && it.name === 'name'
        );
        const idAttribute = node.attributes.find(
          (it) => it.type === 'mdxJsxAttribute' && it.name === 'id'
        );
        const storyAttribute = node.attributes.find(
          (it) => it.type === 'mdxJsxAttribute' && it.name === 'story'
        );
        if (typeof nameAttribute?.value === 'string') {
          let name = nameToValidExport(nameAttribute.value);
          while (variableNameExists(name)) name += '_';

          storiesMap.set(name, {
            type: 'value',
            attributes: node.attributes,
            children: node.children,
          });
          node.attributes = [
            {
              type: 'mdxJsxAttribute',
              name: 'of',
              value: {
                type: 'mdxJsxAttributeValueExpression',
                value: `${storyNamespaceName}.${name}`,
              },
            },
          ];
          node.children = [];
        } else if (idAttribute?.value) {
          // e.g. <Story id="button--primary" />
          // should be migrated manually as it is very hard to find out where the definition of such a string id is located
          const nodeString = mdxProcessor.stringify({ type: 'root', children: [node] }).trim();
          const newNode: MdxFlowExpression = {
            type: 'mdxFlowExpression',
            value: `/* ${nodeString} is deprecated, please migrate it to <Story of={referenceToStory} /> see: https://storybook.js.org/migration-guides/7.0 */`,
          };
          storiesMap.set(idAttribute.value as string, { type: 'id' });
          parent.children.splice(index, 0, newNode);
          // current index is the new comment, and index + 1 is current node
          // SKIP traversing current node, and continue with the node after that
          return [SKIP, index + 2];
        } else if (
          storyAttribute?.type === 'mdxJsxAttribute' &&
          typeof storyAttribute.value === 'object' &&
          storyAttribute.value.type === 'mdxJsxAttributeValueExpression'
        ) {
          // e.g. <Story story={Primary} />

          const name = storyAttribute.value.value;
          node.attributes = [
            {
              type: 'mdxJsxAttribute',
              name: 'of',
              value: {
                type: 'mdxJsxAttributeValueExpression',
                value: `${storyNamespaceName}.${name}`,
              },
            },
          ];
          node.children = [];

          storiesMap.set(name, { type: 'reference' });
        } else {
          parent.children.splice(index, 1);
          // Do not traverse `node`, continue at the node *now* at `index`.
          return [SKIP, index];
        }
      }
      return undefined;
    }
  );

  const metaProperties = metaAttributes.flatMap((attribute) => {
    if (attribute.type === 'mdxJsxAttribute') {
      if (typeof attribute.value === 'string') {
        return [t.objectProperty(t.identifier(attribute.name), t.stringLiteral(attribute.value))];
      }
      return [
        t.objectProperty(
          t.identifier(attribute.name),
          babelParseExpression(attribute.value.value) as any as t.Expression
        ),
      ];
    }
    return [];
  });

  file.path.traverse({
    // remove mdx imports from csf
    ImportDeclaration(path) {
      if (path.node.source.value === '@storybook/blocks') {
        path.remove();
      }
    },
    // remove exports from csf file
    ExportNamedDeclaration(path) {
      path.replaceWith(path.node.declaration);
    },
  });

  if (storiesMap.size === 0 && metaAttributes.length === 0) {
    // A CSF file must have at least one story, so skip migrating if this is the case.
    return [mdxProcessor.stringify(root), null];
  }

  addStoriesImport(root, baseName, storyNamespaceName);

  const newStatements: t.Statement[] = [
    t.exportDefaultDeclaration(t.objectExpression(metaProperties)),
  ];

  function mapChildrenToRender(children: (MdxJsxFlowElement | MdxJsxTextElement)['children']) {
    const child = children[0];

    if (!child) return undefined;

    if (child.type === 'text') {
      return t.arrowFunctionExpression([], t.stringLiteral(child.value));
    }
    if (child.type === 'mdxFlowExpression' || child.type === 'mdxTextExpression') {
      const expression = babelParseExpression(child.value) as any as t.Expression;

      // Recreating those lines: https://github.com/storybookjs/mdx1-csf/blob/f408fc97e9a63097ca1ee577df9315a3cccca975/src/sb-mdx-plugin.ts#L185-L198
      const BIND_REGEX = /\.bind\(.*\)/;
      if (BIND_REGEX.test(child.value)) {
        return expression;
      }
      if (t.isIdentifier(expression)) {
        return expression;
      }
      if (t.isArrowFunctionExpression(expression)) {
        return expression;
      }
      return t.arrowFunctionExpression([], expression);
    }

    const expression = babelParseExpression(
      mdxProcessor.stringify({ type: 'root', children: [child] })
    ) as any as t.Expression;
    return t.arrowFunctionExpression([], expression);
  }

  function variableNameExists(name: string) {
    let found = false;
    file.path.traverse({
      VariableDeclarator: (path) => {
        const lVal = path.node.id;
        if (t.isIdentifier(lVal) && lVal.name === name) found = true;
      },
    });
    return found;
  }

  newStatements.push(
    ...[...storiesMap].flatMap(([key, value]) => {
      if (value.type === 'id') return [];
      if (value.type === 'reference') {
        return [
          t.exportNamedDeclaration(null, [t.exportSpecifier(t.identifier(key), t.identifier(key))]),
        ];
      }
      const renderProperty = mapChildrenToRender(value.children);
      const newObject = t.objectExpression([
        ...(renderProperty
          ? [t.objectProperty(t.identifier('render'), mapChildrenToRender(value.children))]
          : []),
        ...value.attributes.flatMap((attribute) => {
          if (attribute.type === 'mdxJsxAttribute') {
            if (typeof attribute.value === 'string') {
              return [
                t.objectProperty(t.identifier(attribute.name), t.stringLiteral(attribute.value)),
              ];
            }
            return [
              t.objectProperty(
                t.identifier(attribute.name),
                babelParseExpression(attribute.value.value) as any as t.Expression
              ),
            ];
          }
          return [];
        }),
      ]);

      return [
        t.exportNamedDeclaration(
          t.variableDeclaration('const', [t.variableDeclarator(t.identifier(key), newObject)])
        ),
      ];
    })
  );

  file.path.node.body = [...file.path.node.body, ...newStatements];

  const newMdx = mdxProcessor.stringify(root);
  let output = recast.print(file.path.node).code;

  const prettierConfig = prettier.resolveConfig.sync('.', { editorconfig: true }) || {
    printWidth: 100,
    tabWidth: 2,
    bracketSpacing: true,
    trailingComma: 'es5',
    singleQuote: true,
  };

  output = prettier.format(output, { ...prettierConfig, filepath: `file.jsx` });

  return [newMdx, output];
}

function getEsmAst(root: Root) {
  const esm: string[] = [];
  visit(root, ['mdxjsEsm'], (node: MdxjsEsm) => {
    esm.push(node.value);
  });
  const esmSource = `${esm.join('\n\n')}`;

  // @ts-expect-error File is not yet exposed, see https://github.com/babel/babel/issues/11350#issuecomment-644118606
  const file: BabelFile = new babel.File(
    { filename: 'info.path' },
    { code: esmSource, ast: babelParse(esmSource) }
  );
  return file;
}

function addStoriesImport(root: Root, baseName: string, storyNamespaceName: string): void {
  let found = false;

  visit(root, ['mdxjsEsm'], (node: MdxjsEsm) => {
    if (!found) {
      node.value += `\nimport * as ${storyNamespaceName} from './${baseName}.stories';`;
      found = true;
    }
  });
}

export function nameToValidExport(name: string) {
  const [first, ...rest] = Array.from(camelCase(name));

  return `${first.match(/[a-zA-Z_$]/) ? first.toUpperCase() : `$${first}`}${rest.join('')}`;
}

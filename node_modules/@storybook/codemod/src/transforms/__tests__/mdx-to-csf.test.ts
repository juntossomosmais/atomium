import * as fs_ from 'node:fs';
import { expect, test } from '@jest/globals';
import dedent from 'ts-dedent';
import jscodeshift, { nameToValidExport } from '../mdx-to-csf';

expect.addSnapshotSerializer({
  print: (val: any) => (typeof val === 'string' ? val : JSON.stringify(val, null, 2) ?? ''),
  test: () => true,
});

jest.mock('node:fs');
const fs = fs_ as jest.Mocked<typeof import('node:fs')>;

beforeEach(() => {
  fs.existsSync.mockImplementation(() => false);
});

test('update import even when no stories can be extracted', () => {
  const input = dedent`
      import { Heading } from '@storybook/addon-docs';

      <Heading />     
    `;

  const mdx = jscodeshift({ source: input, path: 'Foobar.stories.mdx' });

  expect(mdx).toMatchInlineSnapshot(`
    import { Heading } from '@storybook/blocks';

    <Heading />

  `);
});

test('drop invalid story nodes', () => {
  const input = dedent`
      import { Meta, Story } from '@storybook/addon-docs';

      <Meta title="Foobar" />
      
      <Story>No name!</Story>  
      
      <Story name="Primary">Story</Story>     
    `;

  const mdx = jscodeshift({ source: input, path: 'Foobar.stories.mdx' });

  expect(mdx).toMatchInlineSnapshot(`
    import { Meta, Story } from '@storybook/blocks';
    import * as FoobarStories from './Foobar.stories';

    <Meta of={FoobarStories} />



    <Story of={FoobarStories.Primary} />

  `);
});

test('convert story re-definition', () => {
  const input = dedent`
      import { Meta, Story } from '@storybook/addon-docs';
      import { Primary } from './Foobar.stories';

      <Meta title="Foobar" />
      
      <Story story={Primary} />
    `;

  fs.existsSync.mockImplementation((path) => path === 'Foobar.stories.js');

  const mdx = jscodeshift({ source: input, path: 'Foobar.stories.mdx' });

  expect(mdx).toMatchInlineSnapshot(`
    import { Meta, Story } from '@storybook/blocks';
    import { Primary } from './Foobar.stories';
    import * as FoobarStories from './Foobar_.stories';

    <Meta of={FoobarStories} />

    <Story of={FoobarStories.Primary} />

  `);
  const [csfFileName, csf] = fs.writeFileSync.mock.calls[0];
  expect(csfFileName).toMatchInlineSnapshot(`Foobar_.stories.js`);
  expect(csf).toMatchInlineSnapshot(`
    import { Primary } from './Foobar.stories';

    export default {
      title: 'Foobar',
    };

    export { Primary };

  `);
});

test('Comment out story nodes with id', () => {
  const input = dedent`
      import { Meta, Story } from '@storybook/addon-docs';

      <Meta title="Foobar" />
      
      <Story id="button--primary" />
    `;

  const mdx = jscodeshift({ source: input, path: 'Foobar.stories.mdx' });

  expect(mdx).toMatchInlineSnapshot(`
    import { Meta, Story } from '@storybook/blocks';
    import * as FoobarStories from './Foobar.stories';

    <Meta of={FoobarStories} />

    {/* <Story id="button--primary" /> is deprecated, please migrate it to <Story of={referenceToStory} /> see: https://storybook.js.org/migration-guides/7.0 */}

    <Story id="button--primary" />

  `);
});

test('convert correct story nodes', () => {
  const input = dedent`
      import { Meta, Story } from '@storybook/addon-docs';

      <Meta title="Foobar" />
      
      <Story name="Primary">Story</Story>
    `;

  const mdx = jscodeshift({ source: input, path: 'Foobar.stories.mdx' });

  expect(mdx).toMatchInlineSnapshot(`
    import { Meta, Story } from '@storybook/blocks';
    import * as FoobarStories from './Foobar.stories';

    <Meta of={FoobarStories} />

    <Story of={FoobarStories.Primary} />

  `);

  const [, csf] = fs.writeFileSync.mock.calls[0];
  expect(csf).toMatchInlineSnapshot(`
    export default {
      title: 'Foobar',
    };

    export const Primary = {
      render: () => 'Story',
      name: 'Primary',
    };

  `);
});

test('convert addon-docs imports', () => {
  const input = dedent`
      import { Meta } from '@storybook/addon-docs';
      import { Story } from '@storybook/addon-docs/blocks';

      <Meta title="Foobar" />
      
      <Story name="Primary">Story</Story>
    `;

  const mdx = jscodeshift({ source: input, path: 'Foobar.stories.mdx' });

  expect(mdx).toMatchInlineSnapshot(`
    import { Meta } from '@storybook/blocks';
    import { Story } from '@storybook/blocks';
    import * as FoobarStories from './Foobar.stories';

    <Meta of={FoobarStories} />

    <Story of={FoobarStories.Primary} />

  `);
});

test('convert story nodes with spaces', () => {
  const input = dedent`
      import { Meta, Story } from '@storybook/addon-docs';

      <Meta title="Foobar" />
      
      <Story name="Primary Space">Story</Story>
    `;

  const mdx = jscodeshift({ source: input, path: 'Foobar.stories.mdx' });

  expect(mdx).toMatchInlineSnapshot(`
    import { Meta, Story } from '@storybook/blocks';
    import * as FoobarStories from './Foobar.stories';

    <Meta of={FoobarStories} />

    <Story of={FoobarStories.PrimarySpace} />

  `);

  const [, csf] = fs.writeFileSync.mock.calls[0];
  expect(csf).toMatchInlineSnapshot(`
    export default {
      title: 'Foobar',
    };

    export const PrimarySpace = {
      render: () => 'Story',
      name: 'Primary Space',
    };

  `);
});

test('extract esm into csf head code', () => {
  const input = dedent`
      import { Meta, Story } from '@storybook/addon-docs';
      import { Button } from './Button';

      # hello

      export const args = { bla: 1 };
      export const Template = (args) => <Button {...args} />;

      <Meta title="foobar" />

      world {2 + 1}

      <Story name="foo">bar</Story>
      
      <Story 
        name="Unchecked"
        args={{
          ...args,
          label: 'Unchecked',
        }}>
        {Template.bind({})}
      </Story>
    `;

  const mdx = jscodeshift({ source: input, path: 'Foobar.stories.mdx' });

  expect(mdx).toMatchInlineSnapshot(`
    import { Meta, Story } from '@storybook/blocks';
    import { Button } from './Button';
    import * as FoobarStories from './Foobar.stories';

    # hello

    export const args = { bla: 1 };
    export const Template = (args) => <Button {...args} />;

    <Meta of={FoobarStories} />

    world {2 + 1}

    <Story of={FoobarStories.Foo} />

    <Story of={FoobarStories.Unchecked} />

  `);

  const [csfFileName, csf] = fs.writeFileSync.mock.calls[0];
  expect(csfFileName).toMatchInlineSnapshot(`Foobar.stories.js`);
  expect(csf).toMatchInlineSnapshot(`
    import { Button } from './Button';

    const args = { bla: 1 };
    const Template = (args) => <Button {...args} />;

    export default {
      title: 'foobar',
    };

    export const Foo = {
      render: () => 'bar',
      name: 'foo',
    };

    export const Unchecked = {
      render: Template.bind({}),
      name: 'Unchecked',

      args: {
        ...args,
        label: 'Unchecked',
      },
    };

  `);
});

test('extract all meta parameters', () => {
  const input = dedent`
      import { Meta, Story } from '@storybook/addon-docs';

      export const args = { bla: 1 };
      
      <Meta title="foobar" args={{...args}} parameters={{a: '1'}} />
      
      <Story name="foo">bar</Story>
    `;

  jscodeshift({ source: input, path: 'Foobar.stories.mdx' });

  const [, csf] = fs.writeFileSync.mock.calls[0];

  expect(csf).toMatchInlineSnapshot(`
    const args = { bla: 1 };

    export default {
      title: 'foobar',

      args: {
        ...args,
      },

      parameters: {
        a: '1',
      },
    };

    export const Foo = {
      render: () => 'bar',
      name: 'foo',
    };

  `);
});

test('extract all story attributes', () => {
  const input = dedent`
      import { Meta, Story } from '@storybook/addon-docs';
      import { Button } from './Button';

      export const args = { bla: 1 };
      export const Template = (args) => <Button {...args} />;
      
      <Meta title="foobar" />

      <Story name="foo">bar</Story>
      
      <Story 
        name="Unchecked"
        args={{
          ...args,
          label: 'Unchecked',
        }}>    
        {Template.bind({})}
      </Story>
      
      <Story name="Second">{Template.bind({})}</Story>
      
    `;

  jscodeshift({ source: input, path: 'Foobar.stories.mdx' });

  const [, csf] = fs.writeFileSync.mock.calls[0];

  expect(csf).toMatchInlineSnapshot(`
    import { Button } from './Button';

    const args = { bla: 1 };
    const Template = (args) => <Button {...args} />;

    export default {
      title: 'foobar',
    };

    export const Foo = {
      render: () => 'bar',
      name: 'foo',
    };

    export const Unchecked = {
      render: Template.bind({}),
      name: 'Unchecked',

      args: {
        ...args,
        label: 'Unchecked',
      },
    };

    export const Second = {
      render: Template.bind({}),
      name: 'Second',
    };

  `);
});

test('duplicate story name', () => {
  const input = dedent`
      import { Meta, Story } from '@storybook/addon-docs';
      import { Button } from './Button';

      export const Default = (args) => <Button {...args} />;
      
      <Meta title="Button" />

      <Story name="Default">    
        {Default.bind({})}
      </Story>
      
      <Story name="Second">{Default.bind({})}</Story>
      
    `;

  const mdx = jscodeshift({ source: input, path: 'Foobar.stories.mdx' });
  const [, csf] = fs.writeFileSync.mock.calls[0];

  expect(mdx).toMatchInlineSnapshot(`
    import { Meta, Story } from '@storybook/blocks';
    import { Button } from './Button';
    import * as FoobarStories from './Foobar.stories';

    export const Default = (args) => <Button {...args} />;

    <Meta of={FoobarStories} />

    <Story of={FoobarStories.Default_} />

    <Story of={FoobarStories.Second} />

  `);
  expect(csf).toMatchInlineSnapshot(`
    import { Button } from './Button';

    const Default = (args) => <Button {...args} />;

    export default {
      title: 'Button',
    };

    export const Default_ = {
      render: Default.bind({}),
      name: 'Default',
    };

    export const Second = {
      render: Default.bind({}),
      name: 'Second',
    };

  `);
});

test('kebab case file name', () => {
  const input = dedent`
      import { Meta, Story } from '@storybook/addon-docs';
      import { Kebab } from './my-component/some-kebab-case';

      export const Template = (args) => <Kebab {...args} />;
      
      <Meta title="Kebab" />

      <Story name="Much-Kebab">    
        {Template.bind({})}
      </Story>
      
      <Story name="Really-Much-Kebab">{Template.bind({})}</Story>
      
    `;

  const mdx = jscodeshift({ source: input, path: 'some-kebab-case.stories.mdx' });

  expect(mdx).toMatchInlineSnapshot(`
    import { Meta, Story } from '@storybook/blocks';
    import { Kebab } from './my-component/some-kebab-case';
    import * as SomeKebabCaseStories from './some-kebab-case.stories';

    export const Template = (args) => <Kebab {...args} />;

    <Meta of={SomeKebabCaseStories} />

    <Story of={SomeKebabCaseStories.MuchKebab} />

    <Story of={SomeKebabCaseStories.ReallyMuchKebab} />

  `);

  const [, csf] = fs.writeFileSync.mock.calls[0];

  expect(csf).toMatchInlineSnapshot(`
    import { Kebab } from './my-component/some-kebab-case';

    const Template = (args) => <Kebab {...args} />;

    export default {
      title: 'Kebab',
    };

    export const MuchKebab = {
      render: Template.bind({}),
      name: 'Much-Kebab',
    };

    export const ReallyMuchKebab = {
      render: Template.bind({}),
      name: 'Really-Much-Kebab',
    };

  `);
});

test('story child is jsx', () => {
  const input = dedent`
      import { Canvas, Meta, Story } from '@storybook/addon-docs';
      import { Button } from './button';
      
      <Story name="Primary">
        <Button>
          <div>Hello!</div>
        </Button>
      </Story>
    `;

  jscodeshift({ source: input, path: 'Foobar.stories.mdx' });

  const [, csf] = fs.writeFileSync.mock.calls[0];

  expect(csf).toMatchInlineSnapshot(`
      import { Button } from './button';
      export default {};

      export const Primary = {
        render: () => (
          <Button>
            <div>Hello!</div>
          </Button>
        ),

        name: 'Primary',
      };

    `);
});

test('story child is CSF3', () => {
  const input = dedent`
      import { Story } from '@storybook/addon-docs';
      import { Button } from './button';
             
      <Story name="Primary" render={(args) => <Button {...args}></Button> } args={{label: 'Hello' }} />
    `;

  jscodeshift({ source: input, path: 'Foobar.stories.mdx' });

  const [, csf] = fs.writeFileSync.mock.calls[0];

  expect(csf).toMatchInlineSnapshot(`
    import { Button } from './button';
    export default {};

    export const Primary = {
      name: 'Primary',
      render: (args) => <Button {...args}></Button>,

      args: {
        label: 'Hello',
      },
    };

  `);
});

test('story child is arrow function', () => {
  const input = dedent`
      import { Canvas, Meta, Story } from '@storybook/addon-docs';
      import { Button } from './button';
      
      <Story name="Primary">
        {(args) => <Button />}
      </Story>
    `;

  jscodeshift({ source: input, path: 'Foobar.stories.mdx' });

  const [, csf] = fs.writeFileSync.mock.calls[0];

  expect(csf).toMatchInlineSnapshot(`
      import { Button } from './button';
      export default {};

      export const Primary = {
        render: (args) => <Button />,
        name: 'Primary',
      };

    `);
});

test('story child is identifier', () => {
  const input = dedent`
      import { Canvas, Meta, Story } from '@storybook/addon-docs';
      import { Button } from './button';
      
      <Story name="Primary">
        {Button}
      </Story>
    `;

  jscodeshift({ source: input, path: 'Foobar.stories.mdx' });

  const [, csf] = fs.writeFileSync.mock.calls[0];

  expect(csf).toMatchInlineSnapshot(`
      import { Button } from './button';
      export default {};

      export const Primary = {
        render: Button,
        name: 'Primary',
      };

    `);
});

test('nameToValidExport', () => {
  expect(nameToValidExport('1 starts with digit')).toMatchInlineSnapshot(`$1StartsWithDigit`);
  expect(nameToValidExport('name')).toMatchInlineSnapshot(`Name`);
  expect(nameToValidExport('Multi words')).toMatchInlineSnapshot(`MultiWords`);
  // Unicode is valid in JS variable names
  expect(nameToValidExport('Keep unicode 😅')).toMatchInlineSnapshot(`KeepUnicode😅`);
});

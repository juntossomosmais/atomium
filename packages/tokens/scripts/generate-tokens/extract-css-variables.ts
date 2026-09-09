import postcss from 'postcss'
import type { Declaration } from 'postcss'

// A minimal shape for walking the ancestor chain. postcss's own node types
// (Root, Rule, AtRule, Document) each type `.parent` slightly differently,
// which makes a single loop variable typed against them directly fight the
// compiler; every one of them satisfies this shape at runtime.
interface AncestorNode {
  parent?: AncestorNode
  type: string
}

function hasAtRuleAncestor(decl: Declaration): boolean {
  let node = decl.parent as AncestorNode | undefined

  while (node) {
    if (node.type === 'atrule') return true

    node = node.parent
  }

  return false
}

/**
 * Extracts every `--<prefix><name>: <value>` custom property declaration
 * from `cssContent`, skipping any declaration nested inside an at-rule
 * (@media, @supports, @charset, @import, @namespace, ...). A value declared
 * inside an at-rule is conditional, so it cannot be represented in a flat
 * map of one value per token; a statement at-rule (one that ends in `;`
 * with no block of its own) contributes nothing to skip in the first
 * place.
 *
 * Parsed with postcss rather than scanned by hand: a hand-rolled scanner
 * that treats every `@` as the start of a `{ }` block misidentifies the
 * next, unrelated rule's `{` as that at-rule's block on any statement
 * at-rule, deleting that rule's declarations along with it. Dart Sass
 * emits `@charset "UTF-8";` ahead of any non-ASCII character in the
 * source (including inside a comment) and cssnano preserves it, so this
 * is reachable through this package's own build.
 */
export function matchCssVariables(cssContent: string, prefix: string) {
  const prefixPattern = new RegExp(`^${prefix}[\\w-]+$`)
  const matches: { variable: string; value: string }[] = []

  postcss.parse(cssContent).walkDecls((decl) => {
    if (!decl.prop.startsWith('--')) return

    if (hasAtRuleAncestor(decl)) return

    const variable = decl.prop.slice(2)

    if (prefixPattern.test(variable)) {
      matches.push({ variable, value: decl.value.trim() })
    }
  })

  return matches
}

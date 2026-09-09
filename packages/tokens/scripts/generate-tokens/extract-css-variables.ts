function findBlockEnd(cssContent: string, openBraceIndex: number) {
  let depth = 0

  for (let index = openBraceIndex; index < cssContent.length; index++) {
    if (cssContent[index] === '{') depth++

    if (cssContent[index] === '}') {
      depth--

      if (depth === 0) return index + 1
    }
  }

  return cssContent.length
}

/**
 * Drops every at-rule block (e.g. @media, @supports), keeping only the
 * declarations that always apply. Values declared inside an at-rule are
 * conditional, so they cannot be represented in a flat map of one value
 * per token.
 *
 * Scans the string manually rather than with a regex: an unbounded
 * quantifier immediately before a brace literal is flagged as a
 * super-linear-backtracking risk by this repo's linting.
 */
export function selectUnconditionalCss(cssContent: string) {
  let result = ''
  let cursor = 0

  let atRuleIndex = cssContent.indexOf('@', cursor)

  while (atRuleIndex !== -1) {
    const openBraceIndex = cssContent.indexOf('{', atRuleIndex)

    if (openBraceIndex === -1) {
      cursor = cssContent.length
      break
    }

    result += cssContent.slice(cursor, atRuleIndex)
    cursor = findBlockEnd(cssContent, openBraceIndex)

    atRuleIndex = cssContent.indexOf('@', cursor)
  }

  return result + cssContent.slice(cursor)
}

/**
 * Matches `--<prefix><name>: <value>` declarations. The value stops at `;`
 * or `}` because a minified stylesheet omits the semicolon of the last
 * declaration in a block, and treating `}` as an ordinary character lets
 * the match run past the block boundary into whatever follows.
 */
export function matchCssVariables(cssContent: string, prefix: string) {
  const cssVariablePattern = new RegExp(
    `--(${prefix}[\\w-]+):\\s*([^;}]+)`,
    'g'
  )

  return Array.from(cssContent.matchAll(cssVariablePattern)).map(
    ([, variable, value]) => ({ value: value.trim(), variable })
  )
}

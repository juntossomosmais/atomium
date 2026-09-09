import fs from 'fs'

import { TOKENS_DIR, variablePrefixes } from '..'
import {
  OUTPUT_DIR,
  extractTokensFromCss,
  generateJsTokensFromCssFile,
} from '../generate-javascript-tokens'

const ORIGINAL_CSS = `
    --color-primary: #ff0000;
    --spacing-small: 4px;
    --screen-mobile: 480px;
  `

// Reproduces the shape cssnano actually emits: minified, no trailing
// semicolon on the last declaration of the :root block, followed by a
// @media block that overrides some of the same tokens.
const MINIFIED_CSS = `::backdrop,:root{--color-primary:#ff0000;--spacing-small:4px;--screen-mobile:480px;--font-family:"Roboto",sans-serif;--border-radius:4px;--zindex-1:1;--grid-gap:16px;--title-giant:var(--font-weight-bold) 52px/68px var(--font-family);--text-color:var(--color-neutral-regular);--button-color:#ffffff;--elevation-1:0 1px 1px #00000024;--transition-duration:0.25s}@media only screen and (max-width:575px){::backdrop,:root{--title-giant:var(--font-weight-bold) 30px/40px var(--font-family);--grid-gap:8px;--transition-duration:0.1s}}body{color:var(--text-color)}`

// A statement at-rule (no block of its own, ends in `;`) that a build tool
// such as Dart Sass emits ahead of any non-ASCII character in the source.
const CHARSET_PREFIXED_CSS = `@charset "UTF-8";${MINIFIED_CSS}`

// A value containing a closing brace inside a quoted string, and a url()
// value containing braces, both on an unterminated last declaration.
const BRACE_IN_VALUE_CSS = `::backdrop,:root{--color-background:url("a{b}.png");--text-brace:"}"}`

jest.mock('fs', () => ({
  readFileSync: jest.fn().mockReturnValue(''),
  writeFileSync: jest.fn(),
}))

const writtenModule = () => {
  const [, contents] = (fs.writeFileSync as jest.Mock).mock.calls[0]

  return contents as string
}

describe('Generate JavaScript tokens', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should extract tokens from CSS content', () => {
    ;(fs.readFileSync as jest.Mock).mockReturnValueOnce(ORIGINAL_CSS)

    generateJsTokensFromCssFile(TOKENS_DIR, variablePrefixes)
    expect(fs.readFileSync).toHaveBeenCalledWith(TOKENS_DIR, 'utf8')
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      `${OUTPUT_DIR}/index.ts`,
      `export const colorPrimary = '#ff0000';\nexport const spacingSmall = '4px';\nexport const screenMobile = '480px';`,
      'utf8'
    )
  })

  it('should ignore CSS content without prefix tokens', () => {
    const cssContent = `
      --any-variable: any_value;
    `

    expect(extractTokensFromCss(cssContent, 'color')).toEqual({})
  })

  it('should end the value of the last declaration of a minified block at the closing brace', () => {
    ;(fs.readFileSync as jest.Mock).mockReturnValueOnce(MINIFIED_CSS)

    generateJsTokensFromCssFile(TOKENS_DIR, variablePrefixes)

    expect(writtenModule()).toContain(
      "export const transitionDuration = '0.25s';"
    )
  })

  it('should keep the unconditional value of a token overridden inside a media query', () => {
    ;(fs.readFileSync as jest.Mock).mockReturnValueOnce(MINIFIED_CSS)

    generateJsTokensFromCssFile(TOKENS_DIR, variablePrefixes)

    expect(writtenModule()).toContain(
      "export const titleGiant = 'var(--font-weight-bold) 52px/68px var(--font-family)';"
    )
  })

  it('should include tokens for every newly added prefix', () => {
    ;(fs.readFileSync as jest.Mock).mockReturnValueOnce(MINIFIED_CSS)

    generateJsTokensFromCssFile(TOKENS_DIR, variablePrefixes)

    const module = writtenModule()

    expect(module).toContain("export const gridGap = '16px';")
    expect(module).toContain(
      "export const textColor = 'var(--color-neutral-regular)';"
    )
    expect(module).toContain("export const buttonColor = '#ffffff';")
    expect(module).toContain("export const elevation1 = '0 1px 1px #00000024';")
  })

  it('should still extract every token when the stylesheet starts with a statement at-rule', () => {
    ;(fs.readFileSync as jest.Mock).mockReturnValueOnce(CHARSET_PREFIXED_CSS)

    generateJsTokensFromCssFile(TOKENS_DIR, variablePrefixes)

    const module = writtenModule()

    expect(module).toContain("export const transitionDuration = '0.25s';")
    expect(module).toContain(
      "export const titleGiant = 'var(--font-weight-bold) 52px/68px var(--font-family)';"
    )
    expect(module.length).toBeGreaterThan(0)
  })

  it('should extract a url() value containing braces', () => {
    ;(fs.readFileSync as jest.Mock).mockReturnValueOnce(BRACE_IN_VALUE_CSS)

    generateJsTokensFromCssFile(TOKENS_DIR, variablePrefixes)

    expect(writtenModule()).toContain(
      `export const colorBackground = 'url("a{b}.png")';`
    )
  })

  it('should extract a value containing a closing brace inside a quoted string', () => {
    ;(fs.readFileSync as jest.Mock).mockReturnValueOnce(BRACE_IN_VALUE_CSS)

    generateJsTokensFromCssFile(TOKENS_DIR, variablePrefixes)

    expect(writtenModule()).toContain(`export const textBrace = '"}"';`)
  })
})

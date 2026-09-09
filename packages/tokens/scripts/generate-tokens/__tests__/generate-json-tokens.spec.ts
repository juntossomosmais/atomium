import fs from 'fs'
import path from 'path'

import { TOKENS_DIR, variablePrefixes } from '..'
import {
  OUTPUT_DIR,
  extractTokensFromCss,
  generateJsonTokensFromCssFile,
} from '../generate-json-tokens'

const ORIGINAL_CSS = `
    --color-neutral-black: #000;
    --color-contextual-success-dark-1: #106105;
    --color-brand-primary-dark-1: #b85000;
    --spacing-small: 4px;
    --zindex-1: 1;
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

const writtenTokens = () => {
  const [, contents] = (fs.writeFileSync as jest.Mock).mock.calls[0]

  return JSON.parse(contents as string) as Record<string, string>
}

describe('Generate tokens.json', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should generate JSON file with tokens', () => {
    ;(fs.readFileSync as jest.Mock).mockReturnValueOnce(ORIGINAL_CSS)

    generateJsonTokensFromCssFile(TOKENS_DIR, variablePrefixes)

    const expectedTokens = `{\n  "color-neutral-black\": \"#000\",\n  "color-contextual-success-dark-1\": \"#106105\",\n  "color-brand-primary-dark-1\": \"#b85000\",\n  "spacing-small\": \"4px\",\n  "zindex-1\": \"1\"\n}`

    expect(fs.readFileSync).toHaveBeenCalledWith(TOKENS_DIR, 'utf8')
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      path.join(`${OUTPUT_DIR}/tokens.json`),
      expectedTokens,
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

    generateJsonTokensFromCssFile(TOKENS_DIR, variablePrefixes)

    expect(writtenTokens()['transition-duration']).toBe('0.25s')
  })

  it('should keep the unconditional value of a token overridden inside a media query', () => {
    ;(fs.readFileSync as jest.Mock).mockReturnValueOnce(MINIFIED_CSS)

    generateJsonTokensFromCssFile(TOKENS_DIR, variablePrefixes)

    const tokens = writtenTokens()

    expect(tokens['title-giant']).toBe(
      'var(--font-weight-bold) 52px/68px var(--font-family)'
    )
    expect(tokens['grid-gap']).toBe('16px')
  })

  it('should include tokens for every newly added prefix', () => {
    ;(fs.readFileSync as jest.Mock).mockReturnValueOnce(MINIFIED_CSS)

    generateJsonTokensFromCssFile(TOKENS_DIR, variablePrefixes)

    expect(writtenTokens()).toMatchObject({
      'grid-gap': '16px',
      'title-giant': 'var(--font-weight-bold) 52px/68px var(--font-family)',
      'text-color': 'var(--color-neutral-regular)',
      'button-color': '#ffffff',
      'elevation-1': '0 1px 1px #00000024',
    })
  })

  it('should still extract every token when the stylesheet starts with a statement at-rule', () => {
    ;(fs.readFileSync as jest.Mock).mockReturnValueOnce(CHARSET_PREFIXED_CSS)

    generateJsonTokensFromCssFile(TOKENS_DIR, variablePrefixes)

    const tokens = writtenTokens()

    expect(tokens['transition-duration']).toBe('0.25s')
    expect(tokens['title-giant']).toBe(
      'var(--font-weight-bold) 52px/68px var(--font-family)'
    )
    expect(Object.keys(tokens).length).toBeGreaterThan(0)
  })

  it('should extract a url() value containing braces', () => {
    ;(fs.readFileSync as jest.Mock).mockReturnValueOnce(BRACE_IN_VALUE_CSS)

    generateJsonTokensFromCssFile(TOKENS_DIR, variablePrefixes)

    expect(writtenTokens()['color-background']).toBe('url("a{b}.png")')
  })

  it('should extract a value containing a closing brace inside a quoted string', () => {
    ;(fs.readFileSync as jest.Mock).mockReturnValueOnce(BRACE_IN_VALUE_CSS)

    generateJsonTokensFromCssFile(TOKENS_DIR, variablePrefixes)

    expect(writtenTokens()['text-brace']).toBe('"}"')
  })
})

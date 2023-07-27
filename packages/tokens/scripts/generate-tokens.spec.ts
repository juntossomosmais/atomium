import fs from 'fs'
import path from 'path'

import {
  OUTPUT_DIR,
  TOKENS_DIR,
  extractTokensFromCss,
  generateJsonFile,
} from './generate-tokens'

jest.mock('fs', () => ({
  readFileSync: jest.fn().mockReturnValue(`
    --color-primary: #ff0000;
    --spacing-small: 4px;
    --screen-mobile: 480px;
  `),
  writeFileSync: jest.fn(),
}))

describe('Generate Tokens', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should extract tokens from CSS content', () => {
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
    const tokens: Record<string, string> = {}
    extractTokensFromCss(cssContent, 'color')
    expect(tokens).toEqual({})
  })

  it('should generate JSON file with tokens', () => {
    generateJsonFile(`
      --color-neutral-black: #000;
      --color-contextual-success-dark-1: #106105;
      --color-brand-primary-dark-1: #b85000;
      --color-neutral-black-rgb: 0 0 0;
      --spacing-small: 4px;
      --zindex-1: 1;
    `)

    const expectedTokens = `{\n  "spacing-small\": \"4px\",\n  "color-neutral-black\": \"#000\",\n  "color-contextual-success-dark-1\": \"#106105\",\n  "color-brand-primary-dark-1\": \"#b85000\",\n  "zindex-1\": \"1\"\n}`

    expect(fs.writeFileSync).toHaveBeenCalledWith(
      path.join(__dirname, '../../dist/tokens.json'),
      expectedTokens,
      'utf8'
    )
  })
})

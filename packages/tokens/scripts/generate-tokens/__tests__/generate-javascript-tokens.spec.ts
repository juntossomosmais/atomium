import fs from 'fs'

import { TOKENS_DIR } from '..'
import {
  OUTPUT_DIR,
  extractTokensFromCss,
  generateJsTokensFromCssFile,
} from '../generate-javascript-tokens'

jest.mock('fs', () => ({
  readFileSync: jest.fn().mockReturnValue(`
    --color-primary: #ff0000;
    --spacing-small: 4px;
    --screen-mobile: 480px;
  `),
  writeFileSync: jest.fn(),
}))

describe('Generate JavaScript tokens', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should extract tokens from CSS content', () => {
    generateJsTokensFromCssFile(TOKENS_DIR)
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
})

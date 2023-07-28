import fs from 'fs'
import path from 'path'

import { TOKENS_DIR, variablePrefixes } from '..'
import {
  OUTPUT_DIR,
  extractTokensFromCss,
  generateJsonTokensFromCssFile,
} from '../generate-json-tokens'

jest.mock('fs', () => ({
  readFileSync: jest.fn().mockReturnValue(`
    --color-neutral-black: #000;
    --color-contextual-success-dark-1: #106105;
    --color-brand-primary-dark-1: #b85000;
    --spacing-small: 4px;
    --zindex-1: 1;
  `),
  writeFileSync: jest.fn(),
}))

describe('Generate tokens.json', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should generate JSON file with tokens', () => {
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
    const tokens: Record<string, string> = {}
    extractTokensFromCss(cssContent, 'color')
    expect(tokens).toEqual({})
  })
})

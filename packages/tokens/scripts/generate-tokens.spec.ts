import fs from 'fs'
import { OUTPUT_DIR, TOKENS_DIR } from './generate-tokens'

jest.mock('fs', () => ({
  readFileSync: jest.fn().mockReturnValue(`
    --color-primary: #ff0000;
    --spacing-small: 4px;
    --screen-mobile: 480px;
  `),
  writeFileSync: jest.fn(),
}))

describe('Generate Tokens', () => {
  it('should extract tokens from CSS content', () => {
    expect(fs.readFileSync).toHaveBeenCalledWith(TOKENS_DIR, 'utf8')
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      `${OUTPUT_DIR}/index.ts`,
      `export const colorPrimary = '#ff0000';\nexport const spacingSmall = '4px';\nexport const screenMobile = '480px';`,
      'utf8'
    )
  })
})

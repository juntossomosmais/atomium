import path from 'path'

import { generateJsTokensFromCssFile } from './generate-javascript-tokens'
import { generateJsonTokensFromCssFile } from './generate-json-tokens'

const CURRENT_DIR = __dirname

export const TOKENS_DIR = path.resolve(CURRENT_DIR, '../../dist/tokens.css')

export const variablePrefixes = [
  'color',
  'spacing',
  'screen',
  'font',
  'border',
  'zindex',
  'transition',
  'grid',
  'title',
  'text',
  'button',
  'elevation',
]

export function generateTokens() {
  generateJsTokensFromCssFile(TOKENS_DIR, variablePrefixes)
  generateJsonTokensFromCssFile(TOKENS_DIR, variablePrefixes)
}

// The exports map makes this file importable ("./*" -> "./dist/*"), so generate only
// when run directly. Needs the build's `tsc --module commonjs` for `require.main`.
if (require.main === module) {
  generateTokens()
}

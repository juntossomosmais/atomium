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
]

generateJsTokensFromCssFile(TOKENS_DIR, variablePrefixes)
generateJsonTokensFromCssFile(TOKENS_DIR, variablePrefixes)

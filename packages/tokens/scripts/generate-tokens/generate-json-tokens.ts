import fs from 'fs'
import path from 'path'

import { matchCssVariables } from './extract-css-variables'

const CURRENT_DIR = __dirname

export const OUTPUT_DIR = path.resolve(CURRENT_DIR, '../../dist')

export function extractTokensFromCss(cssContent: string, prefix: string) {
  const tokens: Record<string, string> = {}

  matchCssVariables(cssContent, prefix).forEach(({ value, variable }) => {
    const variableKebabCase = variable
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .toLowerCase()

    tokens[variableKebabCase] = value
  })

  return tokens
}

export function generateJsonFile(
  outputFilePath: string,
  tokens: Record<string, string>
) {
  const jsonOutput = JSON.stringify(tokens, null, 2)

  fs.writeFileSync(outputFilePath, jsonOutput, 'utf8')
}

export function generateJsonTokensFromCssFile(
  cssFilePath: string,
  variablePrefixes: string[]
) {
  const cssContent = fs.readFileSync(cssFilePath, 'utf8')

  const tokens = variablePrefixes.reduce(
    (accumulated, prefix) => ({
      ...accumulated,
      ...extractTokensFromCss(cssContent, prefix),
    }),
    {} as Record<string, string>
  )

  const outputFileName = 'tokens.json'
  const outputFilePath = path.join(OUTPUT_DIR, outputFileName)

  generateJsonFile(outputFilePath, tokens)
}

import fs from 'fs'
import path from 'path'

import { matchCssVariables } from './extract-css-variables'

const CURRENT_DIR = __dirname

export const OUTPUT_DIR = path.resolve(CURRENT_DIR, '../../')

export function extractTokensFromCss(cssContent: string, prefix: string) {
  const tokens: Record<string, string> = {}

  matchCssVariables(cssContent, prefix).forEach(({ value, variable }) => {
    const variableParts = variable.split('-')
    const variableCamelCase = variableParts
      .map((part, index) =>
        index !== 0 ? part.charAt(0).toUpperCase() + part.slice(1) : part
      )
      .join('')

    tokens[variableCamelCase] = value
  })

  return tokens
}

export function generateJsFile(
  outputFilePath: string,
  tokens: Record<string, string>
) {
  const jsCode = Object.entries(tokens)
    .map(([variable, value]) => `export const ${variable} = '${value}';`)
    .join('\n')

  fs.writeFileSync(outputFilePath, jsCode, 'utf8')
}

export function generateJsTokensFromCssFile(
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

  const outputFileName = 'index.ts'
  const outputFilePath = path.join(OUTPUT_DIR, outputFileName)

  generateJsFile(outputFilePath, tokens)
}

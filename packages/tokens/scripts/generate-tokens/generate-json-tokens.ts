import fs from 'fs'
import path from 'path'

const CURRENT_DIR = __dirname
export const OUTPUT_DIR = path.resolve(CURRENT_DIR, '../../dist')

const tokens: Record<string, string> = {}

export function extractTokensFromCss(cssContent: string, prefix: string) {
  const cssVariablePattern = new RegExp(`--(${prefix}[\\w-]+):\\s*([^;]+)`, 'g')

  cssContent.replace(
    cssVariablePattern,
    (_, variable: string, value: string) => {
      const variableKebabCase = variable
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase()

      tokens[variableKebabCase] = value.trim()
      return ''
    }
  )
}

export function generateJsonFile(outputFilePath: string) {
  const jsonOutput = JSON.stringify(tokens, null, 2)

  fs.writeFileSync(outputFilePath, jsonOutput, 'utf8')
}

export function generateJsonTokensFromCssFile(
  cssFilePath: string,
  variablePrefixes: string[]
) {
  const cssContent = fs.readFileSync(cssFilePath, 'utf8')

  variablePrefixes.forEach((prefix) => extractTokensFromCss(cssContent, prefix))

  const outputFileName = 'tokens.json'
  const outputFilePath = path.join(OUTPUT_DIR, outputFileName)

  generateJsonFile(outputFilePath)
}

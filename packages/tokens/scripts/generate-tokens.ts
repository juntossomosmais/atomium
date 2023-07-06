import fs from 'fs'
import path from 'path'

const CURRENT_DIR = __dirname
export const TOKENS_DIR = path.resolve(CURRENT_DIR, '../tokens.css')
export const OUTPUT_DIR = path.resolve(CURRENT_DIR, '../../')

const variablePrefixes = ['color', 'spacing', 'screen']
const tokens: Record<string, string> = {}

export function extractTokensFromCss(cssContent: string, prefix: string) {
  const cssVariablePattern = new RegExp(`--(${prefix}[\\w-]+):\\s*([^;]+)`, 'g')

  cssContent.replace(
    cssVariablePattern,
    (_, variable: string, value: string) => {
      const variableParts = variable.split('-')
      const variableCamelCase = variableParts
        .map((part, index) =>
          index !== 0 ? part.charAt(0).toUpperCase() + part.slice(1) : part
        )
        .join('')

      tokens[variableCamelCase] = value.trim()
      return ''
    }
  )
}

export function generateJavaScriptFile(outputFilePath: string) {
  const jsCode = Object.entries(tokens)
    .map(([variable, value]) => `export const ${variable} = '${value}';`)
    .join('\n')

  fs.writeFileSync(outputFilePath, jsCode, 'utf8')
}

function processCssFileByTokenPrefix(cssFilePath: string) {
  const cssContent = fs.readFileSync(cssFilePath, 'utf8')

  variablePrefixes.forEach((prefix) => extractTokensFromCss(cssContent, prefix))

  const outputFileName = 'index.ts'
  const outputFilePath = path.join(OUTPUT_DIR, outputFileName)

  generateJavaScriptFile(outputFilePath)
}

export const generateTokens = processCssFileByTokenPrefix(TOKENS_DIR)

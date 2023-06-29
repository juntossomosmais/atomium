import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const CURRENT_DIR = path.dirname(fileURLToPath(import.meta.url))
const TOKENS_DIR = path.resolve(CURRENT_DIR, '../tokens.css')
const OUTPUT_DIR = path.resolve(CURRENT_DIR, '../../')

const prefixes = ['color', 'spacing', 'screen']
const tokens = []

function extractTokensFromCss(cssContent: string, prefix: string) {
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

function generateJavaScriptFile(outputFilePath: string) {
  const jsCode = Object.entries(tokens)
    .map(([variable, value]) => `export const ${variable} = '${value}';`)
    .join('\n')

  fs.writeFileSync(outputFilePath, jsCode, 'utf8')
}

function processCssFileByTokenPrefix(cssFilePath: string) {
  const cssContent = fs.readFileSync(cssFilePath, 'utf8')

  prefixes.forEach((prefix) => extractTokensFromCss(cssContent, prefix))

  const outputFileName = 'index.ts'
  const outputFilePath = path.join(OUTPUT_DIR, outputFileName)

  generateJavaScriptFile(outputFilePath)
}

processCssFileByTokenPrefix(TOKENS_DIR)

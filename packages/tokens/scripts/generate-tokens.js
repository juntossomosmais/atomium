import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const CURRENT_DIR = path.dirname(fileURLToPath(import.meta.url))
const TOKENS_DIR = path.resolve(CURRENT_DIR, '../src/tokens.scss')
const OUTPUT_DIR = path.resolve(CURRENT_DIR, '../dist/')

const prefixes = ['color', 'spacing', 'screen']
const exportStatements = []

function extractTokensFromCss(cssContent, prefix) {
  const cssVariablePattern = new RegExp(`--(${prefix}[\\w-]+):\\s*([^;]+)`, 'g')
  const tokens = {}

  cssContent.replace(cssVariablePattern, (_, variable, value) => {
    const variableParts = variable.split('-')
    const variableCamelCase = variableParts
      .map((part, index) =>
        index !== 0 ? part.charAt(0).toUpperCase() + part.slice(1) : part
      )
      .join('')

    tokens[variableCamelCase] = value.trim()
  })

  return tokens
}

function generateJavaScriptFile(tokens, outputFilePath) {
  const jsCode = Object.entries(tokens)
    .map(([variable, value]) => `export const ${variable} = '${value}';`)
    .join('\n')

  fs.writeFileSync(outputFilePath, jsCode, 'utf8')
}

function processCssFileByTokenPrefix(cssFilePath, prefix) {
  const cssContent = fs.readFileSync(cssFilePath, 'utf8')
  const tokens = extractTokensFromCss(cssContent, prefix)

  const outputFileName = `${prefix}.js`
  const outputFilePath = path.join(OUTPUT_DIR, outputFileName)

  generateJavaScriptFile(tokens, outputFilePath)
  exportStatements.push(`export * from './${prefix}';`)
}

function generateIndexFile() {
  const outputFileName = 'index.js'
  const outputFilePath = path.join(OUTPUT_DIR, outputFileName)
  fs.writeFileSync(outputFilePath, exportStatements.join('\n'), 'utf8')
}

prefixes.forEach((prefix) => {
  processCssFileByTokenPrefix(TOKENS_DIR, prefix)
})

generateIndexFile()

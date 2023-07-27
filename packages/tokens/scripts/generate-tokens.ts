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

export function generateJsonFile(cssContent: string) {
  const spacingRegex = /--spacing-(\w+):\s*([\d\w.#]+);/g
  const colorRegex =
    /--color-((?:neutral|brand|contextual)-\w+(?:-\w+)*)(?:-(rgb))?:\s*(#(?:[a-fA-F0-9]{3}){1,2})?;?/g
  const zIndexRegex = /--zindex-(\w+):\s*([\d]+);/g

  function extractValues(css: string, regex: RegExp) {
    const values: Record<string, string> = {}
    let match
    while ((match = regex.exec(css)) !== null) {
      const [, name, value] = match
      values[name] = value
    }
    return values
  }

  function extractColorValues(css: string, regex: RegExp) {
    const values: Record<string, string> = {}
    let match
    while ((match = regex.exec(css)) !== null) {
      const [, name, rgb, value] = match
      values[name] = rgb ? `rgb(${value})` : value
    }
    return values
  }

  const spacingValues = extractValues(cssContent, spacingRegex)
  const zIndexValues = extractValues(cssContent, zIndexRegex)
  const colorValues = extractColorValues(cssContent, colorRegex)

  const spacingOutput = Object.fromEntries(
    Object.entries(spacingValues).map(([name, value]) => [
      `spacing-${name}`,
      value,
    ])
  )
  const colorOutput = Object.fromEntries(
    Object.entries(colorValues).map(([name, value]) => [`color-${name}`, value])
  )
  const zIndexOutput = Object.fromEntries(
    Object.entries(zIndexValues).map(([name, value]) => [
      `zindex-${name}`,
      value,
    ])
  )
  const output = {
    ...spacingOutput,
    ...colorOutput,
    ...zIndexOutput,
  }

  const jsonOutputFileName = 'tokens.json'
  const jsonOutputFilePath = path.join(`${OUTPUT_DIR}/dist`, jsonOutputFileName)
  fs.writeFileSync(jsonOutputFilePath, JSON.stringify(output, null, 2), 'utf8')
}

function processCssFileByTokenPrefix(cssFilePath: string) {
  const cssContent = fs.readFileSync(cssFilePath, 'utf8')

  variablePrefixes.forEach((prefix) => extractTokensFromCss(cssContent, prefix))

  const outputFileName = 'index.ts'
  const outputFilePath = path.join(OUTPUT_DIR, outputFileName)

  generateJavaScriptFile(outputFilePath)
  generateJsonFile(cssContent)
}

processCssFileByTokenPrefix(TOKENS_DIR)

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

export const getCurrentDirPath = (currentUrl = import.meta.url) =>
  path.dirname(fileURLToPath(currentUrl))

export const readSvg = (path: string) => fs.readFileSync(path, 'utf-8')

export const readSvgDirectory = (directory: string, fileExtension = '.svg') =>
  fs
    .readdirSync(directory)
    .filter((file) => path.extname(file) === fileExtension)

export const writeSvgFile = (
  outputDirectory: string,
  fileName: string,
  content: string
) => {
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory)
  }

  return fs.writeFileSync(
    path.join(outputDirectory, fileName),
    content,
    'utf-8'
  )
}

export const writeTypeDefinitionFile = (
  svgFiles: string[],
  outputPath = getCurrentDirPath()
) => {
  const types = svgFiles.map((file) => `'${path.basename(file, '.svg')}'`)
  const typeDef = `export type IconProps = ${types.join(' | ')};\n`
  fs.writeFileSync(path.join(outputPath, '..', 'index.d.ts'), typeDef)
}

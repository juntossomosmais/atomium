import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

export const getCurrentDirPath = (currentUrl = import.meta.url) =>
  path.dirname(fileURLToPath(currentUrl))

const ICONS_DIR = path.resolve(getCurrentDirPath(), '../../svg')
const DIST_DIR = path.resolve(getCurrentDirPath(), '../svg')

export const readSvg = (path: string) => fs.readFileSync(path, 'utf-8')

export const readSvgDirectories = (
  directory = ICONS_DIR,
  fileExtension = '.svg'
) => {
  const allSvgFiles: string[] = []

  const folders = fs.readdirSync(directory).filter((folder) => {
    return fs.lstatSync(path.join(directory, folder)).isDirectory()
  })

  for (const folder of folders) {
    const folderPath = path.join(directory, folder)
    const files = fs.readdirSync(folderPath)

    for (const file of files) {
      if (path.extname(file) !== fileExtension) continue
      const filePath = path.join(folderPath, file)
      allSvgFiles.push(filePath)
    }
  }

  return allSvgFiles
}

export const writeSvgFile = (
  fileName: string,
  content: string,
  outputDirectory = DIST_DIR
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
  const typeDef = `export type IconProps = ${types.join('\n | ')};`
  fs.writeFileSync(path.join(outputPath, '..', 'icons.d.ts'), typeDef)
}

export const writeListFile = (
  svgFiles: string[],
  outputPath = getCurrentDirPath()
) => {
  const list = svgFiles.reduce((acc, file) => {
    const category = path.basename(path.dirname(file))
    const name = path.basename(file, '.svg')

    if (!acc[category]) {
      acc[category] = []
    }

    acc[category].push(name)

    return acc
  }, {} as Record<'custom' | 'mdi', string[]>)

  const output = `export const iconList = ${JSON.stringify(list)}`
  fs.writeFileSync(
    path.join(outputPath, '../../../..', 'apps/docs/utils', 'icon-list.ts'),
    output
  )
}

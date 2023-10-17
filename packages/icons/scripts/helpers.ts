import fs from 'fs'
import path from 'path'

const CURRENT_DIR = __dirname
const ICONS_DIR = path.resolve(CURRENT_DIR, '../../svg')
const DIST_DIR = path.resolve(CURRENT_DIR, '../svg')

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
  outputPath = CURRENT_DIR
) => {
  const types = svgFiles.map((file) => `'${path.basename(file, '.svg')}'`)
  const typeDef = `export type IconProps =\n  | ${types.join('\n  | ')}\n`

  fs.writeFileSync(path.join(outputPath, '..', 'icons.d.ts'), typeDef)
}

export const writeListFile = (svgFiles: string[], outputPath = CURRENT_DIR) => {
  const list = svgFiles.reduce(
    (acc, file) => {
      const category = path.basename(path.dirname(file))
      const name = path.basename(file, '.svg')

      if (!acc[category]) {
        acc[category] = []
      }

      acc[category].push(name)

      return acc
    },
    {} as Record<'custom' | 'mdi', string[]>
  )

  const output = [
    '// THIS FILE IS GENERATED AUTOMATICALLY DO NOT EDIT MANUALLY\n\n',
    `export const iconsList = ${JSON.stringify(list, null, 2)}`,
  ]

  fs.writeFileSync(path.join(outputPath, '../..', 'index.ts'), output.join(''))
}

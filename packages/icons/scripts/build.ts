import path from 'path'
import { optimize } from 'svgo'

import {
  getCurrentDirPath,
  readSvg,
  readSvgDirectory,
  writeSvgFile,
  writeTypeDefinitionFile,
} from './helpers.js'

const ICONS_DIR = path.resolve(getCurrentDirPath(), '../../svg')
const DIST_DIR = path.resolve(getCurrentDirPath(), '../svg')

function build() {
  const svgFiles = readSvgDirectory(ICONS_DIR)

  console.log(`Optimizing SVGs...`)

  for (const svgFile of svgFiles) {
    const pathFile = path.join(ICONS_DIR, svgFile)
    const content = readSvg(pathFile)

    const optimizedFile = optimize(content, {
      path: pathFile,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              convertShapeToPath: false,
              mergePaths: false,
            },
          },
        },
      ],
    }).data

    writeSvgFile(DIST_DIR, svgFile, optimizedFile)
  }

  console.log(`Generating types...`)

  writeTypeDefinitionFile(svgFiles)
}

build()

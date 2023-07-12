import path from 'path'
import { optimize } from 'svgo'

import {
  getCurrentDirPath,
  readSvg,
  readSvgDirectories,
  writeSvgFile,
  writeTypeDefinitionFile,
} from './helpers.js'

const ICONS_DIR = path.resolve(getCurrentDirPath(), '../../svg')
const DIST_DIR = path.resolve(getCurrentDirPath(), '../svg')

function optimizeSvg(path: string, svg: string) {
  const config = [
    {
      name: 'preset-default',
      params: {
        overrides: {
          convertShapeToPath: false,
          mergePaths: false,
          removeViewBox: false,
        },
      },
    },
  ]
  const optimizedSvg = optimize(svg, { path, plugins: config })
  return optimizedSvg.data
}

function build() {
  const files = readSvgDirectories(ICONS_DIR)

  console.log(`Optimizing SVGs...`)
  for (const file of files) {
    const basename = path.basename(file)
    const content = readSvg(file)
    const optimizedFile = optimizeSvg(file, content)
    writeSvgFile(DIST_DIR, basename, optimizedFile)
  }

  console.log(`Generating types...`)
  writeTypeDefinitionFile(files, DIST_DIR)
}

build()

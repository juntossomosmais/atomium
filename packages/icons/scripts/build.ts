import path from 'path'

import { optimize } from 'svgo'

import { readSvg, readSvgDirectories, writeSvgFile } from './helpers.js'

function optimizeSvg(filePath: string, svg: string) {
  const optimizedSvg = optimize(svg, {
    path: filePath,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
    ],
  })

  return optimizedSvg.data
}

function build() {
  const files = readSvgDirectories()

  console.log(`Optimizing SVGs...`)
  for (const file of files) {
    const basename = path.basename(file)
    const content = readSvg(file)
    const optimizedFile = optimizeSvg(file, content)

    writeSvgFile(basename, optimizedFile)
  }
}

build()

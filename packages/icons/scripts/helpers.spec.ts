import fs from 'fs'
import path from 'path'

import {
  readSvgDirectories,
  writeListFile,
  writeSvgFile,
  writeTypeDefinitionFile,
} from './helpers'

const MOCK_SVG_DIR = path.resolve(__dirname, './__mocks__/svg')

describe('readSvgDirectories', () => {
  it('should return an array of all SVG files in the specified directory', () => {
    const svgFiles = readSvgDirectories(MOCK_SVG_DIR)

    expect(svgFiles).toHaveLength(2)
    expect(svgFiles).toContain(path.join(MOCK_SVG_DIR, 'custom/icon.svg'))
    expect(svgFiles).toContain(path.join(MOCK_SVG_DIR, 'mdi/icon.svg'))
  })
})

describe('writeSvgFile', () => {
  it('should mock the fs.writeFileSync function', () => {
    jest.mock('fs')
    const mockWriteFileSync = jest.fn()

    fs.writeFileSync = mockWriteFileSync

    const fileName = 'test.svg'
    const content = '<svg viewBox="0 0 100 100"></svg>'
    const outputDirectory = './dist'

    writeSvgFile(fileName, content, outputDirectory)

    expect(mockWriteFileSync).toHaveBeenCalledWith(
      path.join(outputDirectory, fileName),
      content,
      'utf-8'
    )
  })
})

describe('writeTypeDefinitionFile', () => {
  it('should write the type definition file for the specified SVG files', () => {
    jest.mock('fs')
    const mockWriteFileSync = jest.fn()

    fs.writeFileSync = mockWriteFileSync

    const svgFiles = ['./svg/custom/customIcon.svg', './svg/mdi/mdiIcon.svg']
    const outputPath = './'
    const output = `export type IconProps =\n  | ${[
      `'customIcon'`,
      `'mdiIcon'`,
    ].join('\n  | ')}\n`

    writeTypeDefinitionFile(svgFiles, outputPath)

    expect(mockWriteFileSync).toHaveBeenCalledWith('../icons.d.ts', output)
  })
})

describe('writeListFile', () => {
  it('should mock the fs.writeFileSync function', () => {
    jest.mock('fs')
    const mockWriteFileSync = jest.fn()

    fs.writeFileSync = mockWriteFileSync

    const svgFiles = ['./svg/custom/icon.svg', './svg/mdi/icon.svg']
    const outputPath = './'
    const list = {
      custom: ['icon'],
      mdi: ['icon'],
    }
    const output = [
      '// THIS FILE IS GENERATED AUTOMATICALLY DO NOT EDIT MANUALLY\n\n',
      `export const iconsList = ${JSON.stringify(list, null, 2)}`,
    ]

    writeListFile(svgFiles, outputPath)

    expect(mockWriteFileSync).toHaveBeenCalledWith(
      path.join(outputPath, '../..', 'index.ts'),
      output.join('')
    )
  })
})

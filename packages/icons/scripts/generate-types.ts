import {
  readSvgDirectories,
  writeListFile,
  writeTypeDefinitionFile,
} from './helpers.js'

function generateTypes() {
  console.log(`Generating types...`)
  const files = readSvgDirectories()
  writeListFile(files)
  writeTypeDefinitionFile(files)
}

generateTypes()

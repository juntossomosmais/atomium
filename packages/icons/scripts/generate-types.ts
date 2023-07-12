import { readSvgDirectories, writeTypeDefinitionFile } from './helpers.js'

function generateTypes() {
  console.log(`Generating types...`)
  const files = readSvgDirectories()
  writeTypeDefinitionFile(files)
}

generateTypes()

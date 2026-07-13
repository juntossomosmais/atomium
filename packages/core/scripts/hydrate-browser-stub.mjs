import { writeFileSync } from 'fs'

const THROW_MESSAGE =
  '@juntossomosmais/atomium/hydrate is server-only and cannot run in the browser'

export function buildHydrateBrowserStub(exportNames) {
  const exportsBlock = exportNames
    .map((name) => `export const ${name} = serverOnly`)
    .join('\n')

  return `/* auto-generated — browser no-op for the Node-only hydrate app. See scripts/write-hydrate-browser-stub.mjs */
const serverOnly = () => {
  throw new Error('${THROW_MESSAGE}')
}
${exportsBlock}
`
}

export function writeHydrateBrowserStub(exportNames, targetPath, writeFile = writeFileSync) {
  writeFile(targetPath, buildHydrateBrowserStub(exportNames))
}

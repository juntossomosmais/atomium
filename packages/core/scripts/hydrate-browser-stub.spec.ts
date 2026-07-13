import { readFileSync } from 'fs'
import { resolve } from 'path'

import {
  buildHydrateBrowserStub,
  writeHydrateBrowserStub,
} from './hydrate-browser-stub.mjs'

describe('buildHydrateBrowserStub', () => {
  it('exports every given name as a throwing serverOnly function', () => {
    const stub = buildHydrateBrowserStub(['renderToString', 'streamToString'])

    expect(stub).toContain('export const renderToString = serverOnly')
    expect(stub).toContain('export const streamToString = serverOnly')
    expect(stub).toContain(
      "throw new Error('@juntossomosmais/atomium/hydrate is server-only and cannot run in the browser')"
    )
  })

  it('exports exactly the given names — no more, no fewer, so it can never silently drift from the real hydrate module', () => {
    const names = ['renderToString', 'hydrateDocument', 'transformTag']
    const stub = buildHydrateBrowserStub(names)

    const exported = [...stub.matchAll(/export const (\w+) = serverOnly/g)].map(
      (match) => match[1]
    )

    expect(exported.sort()).toEqual([...names].sort())
  })

  it('contains no import or require, so no Node builtin (e.g. stream) can be pulled into a browser bundle through it', () => {
    const stub = buildHydrateBrowserStub(['renderToString'])

    expect(stub).not.toMatch(/\bimport\b/)
    expect(stub).not.toMatch(/\brequire\s*\(/)
  })
})

describe('writeHydrateBrowserStub', () => {
  it('writes the generated stub to the given path', () => {
    const writeFile = jest.fn()

    writeHydrateBrowserStub(
      ['renderToString'],
      '/tmp/hydrate/index.browser.mjs',
      writeFile
    )

    expect(writeFile).toHaveBeenCalledWith(
      '/tmp/hydrate/index.browser.mjs',
      buildHydrateBrowserStub(['renderToString'])
    )
  })
})

describe('package.json ./hydrate export map', () => {
  it('declares a browser condition distinct from the server targets, so client bundlers never resolve the Node-only hydrate module', () => {
    const pkg = JSON.parse(
      readFileSync(resolve(__dirname, '../package.json'), 'utf-8')
    )
    const hydrateExport = pkg.exports['./hydrate']

    expect(hydrateExport.browser).toBeDefined()
    expect(hydrateExport.browser).not.toBe(hydrateExport.import)
    expect(hydrateExport.browser).not.toBe(hydrateExport.require)
  })
})

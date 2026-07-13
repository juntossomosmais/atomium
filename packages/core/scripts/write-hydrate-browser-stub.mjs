/**
 * Writes `hydrate/index.browser.mjs`, a browser-safe no-op counterpart to the
 * Node-only hydrate app produced by the `dist-hydrate-script` output target.
 *
 * Why this exists: the Vue/React proxies reference the hydrate module in their
 * server-only branch as `import('@juntossomosmais/atomium/hydrate')`. Bundlers
 * statically bundle every `import()` regardless of which branch runs at runtime,
 * so a client-only consumer (SPA / `ssr: false`) ends up pulling the real
 * hydrate app, which imports Node's `stream` and breaks the browser build
 * (`"Readable" is not exported by "__vite-browser-external"`).
 *
 * The `browser` export condition on `./hydrate` (see package.json) points here,
 * so client builds resolve this stub while server builds keep the real module.
 * These functions are never invoked in a browser (the branch that uses them only
 * runs when `globalThis.window` is falsy), so they throw to surface any misuse.
 *
 * Runs as part of `npm run build`, after `stencil build` has generated `hydrate/`.
 */
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const target = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '../hydrate/index.browser.mjs',
)

const stub = `/* auto-generated — browser no-op for the Node-only hydrate app. See scripts/write-hydrate-browser-stub.mjs */
const serverOnly = () => {
  throw new Error('@juntossomosmais/atomium/hydrate is server-only and cannot run in the browser')
}
export const renderToString = serverOnly
export const streamToString = serverOnly
export const hydrateDocument = serverOnly
export const createWindowFromHtml = serverOnly
export const serializeDocumentToString = serverOnly
export const serializeProperty = serverOnly
export const deserializeProperty = serverOnly
export const setTagTransformer = serverOnly
export const transformTag = serverOnly
`

writeFileSync(target, stub)
console.log('Wrote hydrate/index.browser.mjs (browser no-op)')

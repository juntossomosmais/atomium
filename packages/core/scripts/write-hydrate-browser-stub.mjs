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
 * Export names are derived from the real hydrate module (not hand-duplicated),
 * so this stub can never drift from whatever Stencil generates.
 *
 * Runs as part of `npm run build`, after `stencil build` has generated `hydrate/`.
 */
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

import { writeHydrateBrowserStub } from './hydrate-browser-stub.mjs'
import * as realHydrateModule from '../hydrate/index.mjs'

const exportNames = Object.keys(realHydrateModule).sort()
const targetPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '../hydrate/index.browser.mjs',
)

writeHydrateBrowserStub(exportNames, targetPath)

console.log(
  `Wrote hydrate/index.browser.mjs (browser no-op) mirroring ${exportNames.length} export(s): ${exportNames.join(', ')}`,
)

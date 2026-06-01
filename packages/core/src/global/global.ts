import { setMode } from '@stencil/core'
import '@ionic/core'
// Polyfill need to make form.requestSubmit work in Safari < 16.
import '../polyfills/form-request-submit.js'

// Force Ionic's "md" mode. The dist-custom-elements output consumed by the
// React wrappers never runs global scripts, so the mode resolver must be set
// as a module side-effect here, otherwise Ionic-backed components render
// unstyled (see stenciljs/output-targets#552).
//
// In the lazy `dist` runtime (used by the Core/Vue Storybook) `setMode` is
// defined later in the same bundle, so calling it at module-eval time throws
// "setMode is not a function". Defer until it is available; in that runtime
// Ionic already sets the mode on its own, so the deferred call is only a
// best-effort override and never blocks startup.
const forceMdMode = (): void => setMode(() => 'md')

if (typeof setMode === 'function') {
  forceMdMode()
} else {
  queueMicrotask(forceMdMode)
}

export default function globalScript() {
  // Global script initialization
}

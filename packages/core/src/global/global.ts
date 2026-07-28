import { setMode } from '@stencil/core'
import '@ionic/core'
// Polyfill need to make form.requestSubmit work in Safari < 16.
import '../polyfills/form-request-submit.js'

declare global {
  interface Window {
    __atomiumDismissPopoversOnScroll?: boolean
  }
}

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

// ion-select's popover interface (and any other Ionic overlay using
// `interface="popover"`) teleports its content to `ion-app` on present so the
// app root can reposition/dismiss it as the page scrolls. Hosts that don't
// mount an `<ion-app>` (e.g. a Next.js app consuming Atomium components
// directly) get the fallback teleport target instead: `document.body`
// (see Ionic's `getAppRoot`). Nothing then dismisses the overlay on scroll,
// so it stays pinned at the viewport coordinates where it opened and floats
// over unrelated content as the page scrolls underneath it. Since there is
// no `ion-app` to patch, dismiss any body-level popover here instead — this
// module runs as a side effect on import, unlike `globalScript` below, which
// the dist-custom-elements/React output target never invokes (see comment
// above). Guarded so re-importing this module (multiple lazy chunks in the
// legacy `dist` runtime) only ever registers one listener.
if (typeof window !== 'undefined' && !window.__atomiumDismissPopoversOnScroll) {
  window.__atomiumDismissPopoversOnScroll = true

  window.addEventListener(
    'scroll',
    () => {
      if (document.querySelector('ion-app')) return

      document.body
        .querySelectorAll(':scope > ion-popover')
        .forEach((popover) => (popover as HTMLIonPopoverElement).dismiss())
    },
    { passive: true }
  )
}

export default function globalScript() {
  // Global script initialization
}

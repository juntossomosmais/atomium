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
// legacy `dist` runtime) only ever registers one set of listeners.
if (typeof window !== 'undefined' && !window.__atomiumDismissPopoversOnScroll) {
  window.__atomiumDismissPopoversOnScroll = true

  // Only Atomium's own popovers are dismissed, so a host pairing Atomium with
  // another Ionic-based library keeps control of its own overlays. The marker
  // class is applied through `interfaceOptions.cssClass` (see select.tsx).
  const ATOMIUM_POPOVER = 'ion-popover.atomium-popover'
  const BODY_POPOVERS = `:scope > ${ATOMIUM_POPOVER}`

  // `capture: true` so scroll events from descendant `overflow:auto`
  // containers are observed too — `scroll` doesn't bubble, but a capture
  // listener on `window` still sees it during the capture phase.
  const SCROLL_OPTIONS: AddEventListenerOptions = {
    capture: true,
    passive: true,
  }

  let scheduled = false
  let lastScrollTarget: EventTarget | null = null
  let isListening = false

  const getBodyPopovers = () =>
    document.body.querySelectorAll<HTMLIonPopoverElement>(BODY_POPOVERS)

  // Duck-typed rather than `instanceof Element`: an event target can originate
  // from another realm (an iframe's document), where `instanceof` is false for
  // a genuine element. `window`/`document` targets correctly yield null.
  const asElement = (target: EventTarget | null): Element | null =>
    typeof (target as Element | null)?.matches === 'function'
      ? (target as Element)
      : null

  // rAF-throttled so the DOM queries below run at most once per frame
  // instead of on every `scroll` event fired during a gesture.
  const dismissBodyPopoversOnScroll = (): void => {
    scheduled = false

    // Read and release: holding the reference past this frame would keep a
    // detached node alive for the lifetime of the page.
    const scrollTarget = lastScrollTarget

    lastScrollTarget = null

    if (document.querySelector('ion-app')) return

    // A scroll whose target lives inside the popover itself (e.g. paging
    // through a long select's option list) is the intended interaction, not
    // a page scroll — dismissing here would close the list mid-scroll.
    if (asElement(scrollTarget)?.closest(ATOMIUM_POPOVER)) return

    getBodyPopovers().forEach((popover) => popover.dismiss().catch(() => {}))
  }

  const handleScroll = (event: Event): void => {
    lastScrollTarget = event.target

    if (scheduled) return

    scheduled = true
    requestAnimationFrame(dismissBodyPopoversOnScroll)
  }

  const startListening = (): void => {
    if (isListening) return

    isListening = true
    window.addEventListener('scroll', handleScroll, SCROLL_OPTIONS)
  }

  const stopListening = (): void => {
    if (!isListening) return

    isListening = false
    scheduled = false
    lastScrollTarget = null
    window.removeEventListener('scroll', handleScroll, SCROLL_OPTIONS)
  }

  const isAtomiumPopover = (target: EventTarget | null): boolean =>
    asElement(target)?.matches(ATOMIUM_POPOVER) === true

  // The scroll listener exists only while one of our popovers is open, so a
  // page that never opens one pays nothing on scroll. `ionPopoverDidPresent`
  // and `ionPopoverDidDismiss` both bubble and are composed, so `document`
  // sees them wherever Ionic teleported the overlay to.
  document.addEventListener('ionPopoverDidPresent', (event) => {
    if (isAtomiumPopover(event.target)) startListening()
  })

  document.addEventListener('ionPopoverDidDismiss', (event) => {
    if (!isAtomiumPopover(event.target)) return

    // Ionic emits `didDismiss` before detaching the element, so the DOM is
    // only authoritative one microtask later — the removal is synchronous
    // after the emit. Re-querying (instead of counting opens) means a missed
    // event can never leave the listener attached to a closed popover.
    queueMicrotask(() => {
      if (getBodyPopovers().length === 0) stopListening()
    })
  })
}

export default function globalScript() {
  // Global script initialization
}

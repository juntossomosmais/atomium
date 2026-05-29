import { setMode } from '@stencil/core'
import '@ionic/core'
// Polyfill need to make form.requestSubmit work in Safari < 16.
import '../polyfills/form-request-submit.js'

// Force Ionic's "md" mode. The dist-custom-elements output consumed by the
// React wrappers does not run global scripts per component, so Ionic's own
// global mode initialization never fires and component shadow styles are not
// applied (see stenciljs/output-targets#552). Setting the mode resolver here
// guarantees the correct mode-specific stylesheet is attached.
setMode(() => 'md')

export default function globalScript() {
  // Global script initialization
}

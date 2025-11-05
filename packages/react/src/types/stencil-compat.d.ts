/**
 * Type compatibility fix for @stencil/react-output-target@0.5.3 with Stencil v4
 *
 * Stencil v4 expects HTMLStencilElement to omit 'autocorrect', but the old
 * react-output-target extends HTMLElement which includes it. This global
 * override removes autocorrect from HTMLElement to make them compatible.
 */

declare global {
  interface HTMLElement {
    // Override autocorrect to never, removing it from the interface
    autocorrect?: never
  }
}

export {}

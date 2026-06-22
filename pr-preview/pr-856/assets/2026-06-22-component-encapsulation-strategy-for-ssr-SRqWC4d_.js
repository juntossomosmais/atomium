import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{D as t,G as n,T as r,U as i,q as a}from"./storybook-Cx8aC74N.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Docs/Architecture Decision Records/2026-06-22: Component Encapsulation Strategy for SSR`}),`
`,(0,c.jsx)(t.h1,{id:`2026-06-22-component-encapsulation-strategy-for-ssr`,children:`2026-06-22: Component Encapsulation Strategy for SSR`}),`
`,(0,c.jsxs)(t.p,{children:[`🗓️ 2026-06-22 · ✍️ `,(0,c.jsx)(t.a,{href:`https://twitter.com/felipefialho_`,rel:`nofollow`,children:`@felipefialho`})]}),`
`,(0,c.jsx)(t.h2,{id:`context`,children:`Context`}),`
`,(0,c.jsxs)(t.p,{children:[`After `,(0,c.jsx)(t.a,{href:`./2026-06-12-server-side-rendering-hydration.mdx`,children:`SSR hydration`}),` shipped, a consumer app reported that `,(0,c.jsx)(t.code,{children:`atom-input`}),` was inert under SSR (Next.js): the mask never applied, the value never reached the form library (React Hook Form), and the submit button stayed disabled because it enables via `,(0,c.jsx)(t.code,{children:`onAtomInput`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The first instinct was to flip `,(0,c.jsx)(t.code,{children:`atom-input`}),` from `,(0,c.jsx)(t.code,{children:`scoped: true`}),` to `,(0,c.jsx)(t.code,{children:`shadow: true`}),`. Investigation showed that decision is not component-local: `,(0,c.jsxs)(t.strong,{children:[`three components were `,(0,c.jsx)(t.code,{children:`scoped: true`})]}),` (`,(0,c.jsx)(t.code,{children:`atom-input`}),`, `,(0,c.jsx)(t.code,{children:`atom-modal`}),`, `,(0,c.jsx)(t.code,{children:`atom-datetime`}),`) plus `,(0,c.jsx)(t.code,{children:`atom-steps-modal`}),` (no encapsulation / light DOM). Flipping all of them to `,(0,c.jsx)(t.code,{children:`shadow`}),` blindly `,(0,c.jsx)(t.strong,{children:`breaks the overlays`}),`. Two independent mechanisms are in tension, and the right encapsulation depends on the component's role.`]}),`
`,(0,c.jsx)(t.h3,{id:`why-shadow-is-required-for-ssr-interactivity`,children:`Why shadow is required for SSR interactivity`}),`
`,(0,c.jsxs)(t.p,{children:[`Under `,(0,c.jsx)(t.a,{href:`https://www.npmjs.com/package/@stencil/ssr`,rel:`nofollow`,children:(0,c.jsx)(t.code,{children:`@stencil/ssr`})}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`a `,(0,c.jsx)(t.code,{children:`shadow`}),` component is emitted as a `,(0,c.jsx)(t.code,{children:`<template shadowrootmode="open">`}),` (Declarative Shadow DOM) with `,(0,c.jsx)(t.code,{children:`s-id`}),`/`,(0,c.jsx)(t.code,{children:`hydrated`}),` markers, and the Stencil runtime hydrates it to interactive — even when nested inside another Stencil component;`]}),`
`,(0,c.jsxs)(t.li,{children:[`a `,(0,c.jsx)(t.code,{children:`scoped`}),` component is emitted as static `,(0,c.jsx)(t.code,{children:`dangerouslySetInnerHTML`}),`. When nested in another Stencil component's light DOM it cannot take the client-only `,(0,c.jsx)(t.code,{children:`dynamic({ ssr: false })`}),` path, so it never hydrates and stays `,(0,c.jsx)(t.strong,{children:`inert`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`That nested-scoped case is exactly what made `,(0,c.jsx)(t.code,{children:`atom-input`}),` dead inside a server-rendered form.`]}),`
`,(0,c.jsx)(t.h3,{id:`why-shadow-breaks-the-overlays`,children:`Why shadow breaks the overlays`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`atom-modal`}),`/`,(0,c.jsx)(t.code,{children:`atom-datetime`}),` render Ionic overlays (`,(0,c.jsx)(t.code,{children:`ion-modal`}),`/`,(0,c.jsx)(t.code,{children:`ion-popover`}),`). On present, Ionic's framework delegate `,(0,c.jsx)(t.strong,{children:`physically teleports`}),` the overlay content to `,(0,c.jsx)(t.code,{children:`ion-app`}),`/`,(0,c.jsx)(t.code,{children:`body`}),` (leaving an `,(0,c.jsx)(t.code,{children:`ionic teleport`}),` comment placeholder).`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`In `,(0,c.jsx)(t.code,{children:`scoped`}),` mode, Stencil's slot polyfill has already physically relocated the host's light-DOM children into the slot, so they travel with the teleport.`]}),`
`,(0,c.jsxs)(t.li,{children:[`In `,(0,c.jsx)(t.code,{children:`shadow`}),` mode, `,(0,c.jsx)(t.code,{children:`<slot>`}),` is a virtual projection: the projected children stay behind in the host while the `,(0,c.jsx)(t.code,{children:`<slot>`}),` element teleports away, so the content disappears. Confirmed in the browser (slotted modal content is visible only in `,(0,c.jsx)(t.code,{children:`scoped`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`This is a client-side runtime conflict, not an SSR artifact, and no Stencil/Ionic option fixes it — slot projection is a browser primitive.`}),`
`,(0,c.jsx)(t.h2,{id:`decision`,children:`Decision`}),`
`,(0,c.jsxs)(t.p,{children:[`Choose encapsulation by component role, and make overlays client-only `,(0,c.jsx)(t.strong,{children:`inside the package`}),` so consumers need no per-project configuration.`]}),`
`,(0,c.jsxs)(t.h3,{id:`1-interactive-in-flow-components--shadow`,children:[`1. Interactive in-flow components → `,(0,c.jsx)(t.code,{children:`shadow`})]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`atom-input`}),` (and any other in-flow interactive component) uses `,(0,c.jsx)(t.code,{children:`shadow: true`}),`. DSD hydrates reliably under SSR. The change does not regress the native input validity behaviour from PR #223 (`,(0,c.jsx)(t.code,{children:`required`}),`, `,(0,c.jsx)(t.code,{children:`type`}),`, value propagation and the `,(0,c.jsx)(t.code,{children:`onIonInput → atomInput`}),` bridge were verified identical to `,(0,c.jsx)(t.code,{children:`scoped`}),` in the browser).`]}),`
`,(0,c.jsxs)(t.h3,{id:`2-overlay--teleporting-components--scopedlight-dom-excluded-from-ssr`,children:[`2. Overlay / teleporting components → `,(0,c.jsx)(t.code,{children:`scoped`}),`/light DOM, excluded from SSR`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`atom-modal`}),`, `,(0,c.jsx)(t.code,{children:`atom-datetime`}),` and `,(0,c.jsx)(t.code,{children:`atom-steps-modal`}),` keep their non-shadow encapsulation and are rendered client-only via `,(0,c.jsx)(t.code,{children:`excludeServerSideRenderingFor`}),` on the React output target:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// packages/core/stencil.config.ts
export const ssrExcludedComponents = [
  'atom-modal',
  'atom-datetime',
  'atom-steps-modal',
]

reactOutputTarget({
  // ...existing options
  excludeServerSideRenderingFor: ssrExcludedComponents,
})
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Overlays are closed at first paint, so they gain nothing from SSR. Rendering them client-only avoids both the inert-scoped problem and the shadow-teleport breakage. The decision ships in the package — consumers import normally and never need `,(0,c.jsx)(t.code,{children:`next/dynamic({ ssr: false })`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`3-server-barrel-keeps-a-complete-export-surface`,children:`3. Server barrel keeps a complete export surface`}),`
`,(0,c.jsxs)(t.p,{children:[`The output target still emits a `,(0,c.jsx)(t.code,{children:`*.server.ts`}),` for excluded components, but it is a stub that only exports `,(0,c.jsx)(t.code,{children:`serializeShadowRoot`}),` (no component wrapper). `,(0,c.jsx)(t.code,{children:`packages/react/scripts/generate-server-barrel.mjs`}),` detects those stubs and re-exports their `,(0,c.jsx)(t.strong,{children:`client`}),` wrapper, so `,(0,c.jsx)(t.code,{children:`@juntossomosmais/atomium/react/next`}),` still exports every component while overlays resolve to the client-only version:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// index.server.ts (generated)
export { AtomInput } from './components/atom-input.server.js' // SSR (DSD)
export { AtomModal } from './components/atom-modal.js' // client-only
export { AtomDatetime } from './components/atom-datetime.js' // client-only
export { AtomStepsModal } from './components/atom-steps-modal.js' // client-only
`})}),`
`,(0,c.jsx)(t.h3,{id:`4-vue-needs-no-equivalent`,children:`4. Vue needs no equivalent`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@stencil/vue-output-target`}),` proxies branch at runtime (`,(0,c.jsx)(t.code,{children:`globalThis.window ? defineContainer : defineStencilSSRComponent`}),`), so the client always mounts a real custom element that bootstraps. Vue therefore does not have the nested-scoped inert problem, and since the overlays stay non-shadow there is no teleport breakage. No Vue-side exclusion exists or is needed.`]}),`
`,(0,c.jsx)(t.h2,{id:`consequences`,children:`Consequences`}),`
`,(0,c.jsx)(t.h3,{id:`positive`,children:`Positive`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`✅ `,(0,c.jsx)(t.code,{children:`atom-input`}),` is interactive under SSR (mask, value, validation), fixing the reported regression.`]}),`
`,(0,c.jsx)(t.li,{children:`✅ Overlays are robust under SSR by construction, with zero consumer configuration.`}),`
`,(0,c.jsx)(t.li,{children:`✅ The encapsulation rule is explicit and documented, so future components can be classified on sight.`}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`neutral`,children:`Neutral`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`🔄 `,(0,c.jsx)(t.code,{children:`excludeServerSideRenderingFor`}),` governs the runtime server-barrel path (`,(0,c.jsx)(t.code,{children:`@juntossomosmais/atomium/react/next`}),`). The `,(0,c.jsx)(t.code,{children:`@stencil/ssr`}),` `,(0,c.jsx)(t.strong,{children:`compiler`}),` plugin (configured in a consumer's `,(0,c.jsx)(t.code,{children:`next.config.js`}),` against `,(0,c.jsx)(t.code,{children:`@juntossomosmais/atomium/react`}),`) has no exclusion option; under it, top-level overlays already fall back to client-only `,(0,c.jsx)(t.code,{children:`dynamic({ ssr: false })`}),`, and the `,(0,c.jsx)(t.code,{children:`atom-input`}),` shadow change is what resolves the reported bug. To inherit the package's overlay decision, consumers should consume via the `,(0,c.jsx)(t.code,{children:`react/next`}),` barrel entry.`]}),`
`,(0,c.jsx)(t.li,{children:`🔄 Overlays render only on the client, so their content is not present in the initial server HTML (acceptable: they are closed at first paint).`}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`notes-for-consumers`,children:`Notes for consumers`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Non-breaking: same import paths, same public API.`}),`
`,(0,c.jsx)(t.li,{children:`Apps that render client-side only are unaffected.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`references`,children:`References`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`./2026-06-12-server-side-rendering-hydration.mdx`,children:`ADR: Server-Side Rendering (SSR) Hydration`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://stenciljs.com/docs/server-side-rendering`,rel:`nofollow`,children:`Stencil: Server-Side Rendering`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsxs)(t.a,{href:`https://www.npmjs.com/package/@stencil/ssr`,rel:`nofollow`,children:[(0,c.jsx)(t.code,{children:`@stencil/ssr`}),` package`]})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots`,rel:`nofollow`,children:`MDN: Using templates and slots`})}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=a(),i(),t()}))();export{s as default};
import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{D as t,G as n,T as r,U as i,q as a}from"./storybook-Cx8aC74N.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Docs/Architecture Decision Records/2026-06-12: Server-Side Rendering (SSR) Hydration`}),`
`,(0,c.jsx)(t.h1,{id:`2026-06-12-server-side-rendering-ssr-hydration`,children:`2026-06-12: Server-Side Rendering (SSR) Hydration`}),`
`,(0,c.jsxs)(t.p,{children:[`🗓️ 2026-06-12 · ✍️ `,(0,c.jsx)(t.a,{href:`https://twitter.com/felipefialho_`,rel:`nofollow`,children:`@felipefialho`})]}),`
`,(0,c.jsx)(t.h2,{id:`context`,children:`Context`}),`
`,(0,c.jsxs)(t.p,{children:[`Consumer apps that render on the server (Next.js, Nuxt) received bare `,(0,c.jsx)(t.code,{children:`<atom-*>`}),` tags in the server HTML: no styles, no shadow DOM, with the visual result arriving only after the client JavaScript registered the custom elements. That meant FOUC and layout shift on every server-rendered page.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Everything required to fix this was already in place: Stencil supports a `,(0,c.jsx)(t.a,{href:`https://stenciljs.com/docs/hydrate-app`,rel:`nofollow`,children:`hydrate app`}),` output target, and the output target versions adopted in the React and Vue migrations (`,(0,c.jsx)(t.code,{children:`@stencil/react-output-target@1.x`}),`, `,(0,c.jsx)(t.code,{children:`@stencil/vue-output-target@0.13.x`}),`) both support a `,(0,c.jsx)(t.code,{children:`hydrateModule`}),` option for server-side rendering.`]}),`
`,(0,c.jsx)(t.h2,{id:`decision`,children:`Decision`}),`
`,(0,c.jsxs)(t.p,{children:[`Add the `,(0,c.jsx)(t.code,{children:`dist-hydrate-script`}),` output target and wire `,(0,c.jsx)(t.code,{children:`hydrateModule`}),` into the React and Vue output targets, so components are serialized as `,(0,c.jsx)(t.a,{href:`https://web.dev/articles/declarative-shadow-dom`,rel:`nofollow`,children:`Declarative Shadow DOM`}),` (DSD) on the server and hydrated on the client.`]}),`
`,(0,c.jsx)(t.h3,{id:`1-stencil-configuration`,children:`1. Stencil configuration`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`outputTargets: [
  {
    type: 'dist-hydrate-script',
    dir: 'hydrate',
  },
  vueOutputTarget({
    // ...existing options
    hydrateModule: '@juntossomosmais/atomium/hydrate',
  }),
  reactOutputTarget({
    // ...existing options
    hydrateModule: '@juntossomosmais/atomium/hydrate',
    clientModule: '@juntossomosmais/atomium/react',
  }),
]
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The hydrate app is published as the `,(0,c.jsx)(t.code,{children:`./hydrate`}),` export of the core package (ESM + CJS). It exposes `,(0,c.jsx)(t.code,{children:`renderToString()`}),`, which renders any markup containing Atomium components in Node and returns the HTML with each component's shadow root serialized as a `,(0,c.jsx)(t.code,{children:`<template shadowrootmode="open">`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`2-ionic-internals-render-fully-on-the-server`,children:`2. Ionic internals render fully on the server`}),`
`,(0,c.jsxs)(t.p,{children:[`Because `,(0,c.jsx)(t.code,{children:`src/global/global.ts`}),` imports `,(0,c.jsx)(t.code,{children:`@ionic/core`}),`, the Ionic runtime is bundled into the hydrate app and executes against the same mock DOM during `,(0,c.jsx)(t.code,{children:`renderToString()`}),`. The `,(0,c.jsx)(t.code,{children:`ion-*`}),` elements inside Atomium shadow roots are therefore also server-rendered, with their own DSD, resolved `,(0,c.jsx)(t.code,{children:`md`}),` mode and styles. SSR output is complete, not just the Atomium shells.`]}),`
`,(0,c.jsxs)(t.h3,{id:`3-react-the-reactnext-server-entry`,children:[`3. React: the `,(0,c.jsx)(t.code,{children:`/react/next`}),` server entry`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@stencil/react-output-target`}),` with `,(0,c.jsx)(t.code,{children:`hydrateModule`}),` + `,(0,c.jsx)(t.code,{children:`esModules: true`}),` generates one `,(0,c.jsx)(t.code,{children:`atom-*.server.ts`}),` wrapper per component, but no server barrel. `,(0,c.jsx)(t.code,{children:`packages/react/scripts/generate-server-barrel.mjs`}),` creates `,(0,c.jsx)(t.code,{children:`src/index.server.ts`}),` at build time, published as `,(0,c.jsx)(t.code,{children:`@juntossomosmais/atomium/react/next`}),` (the same subpath convention used by the official `,(0,c.jsx)(t.a,{href:`https://github.com/stenciljs/output-targets/tree/main/example-project`,rel:`nofollow`,children:`output-targets example`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:`Next.js consumers have two options:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Runtime-based`}),`: import server components directly in React Server Components:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { AtomButton } from '@juntossomosmais/atomium/react/next'
`})}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Compiler-based`}),`: keep importing from `,(0,c.jsx)(t.code,{children:`@juntossomosmais/atomium/react`}),` and wrap the Next config with `,(0,c.jsx)(t.a,{href:`https://www.npmjs.com/package/@stencil/ssr`,rel:`nofollow`,children:(0,c.jsx)(t.code,{children:`@stencil/ssr`})}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// next.config.mjs
import stencilSSR from '@stencil/ssr/next'

export default stencilSSR({
  module: import('@juntossomosmais/atomium/react'),
  from: '@juntossomosmais/atomium/react',
  hydrateModule: import('@juntossomosmais/atomium/hydrate'),
})(nextConfig)
`})}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Build note: the generated server wrappers import `,(0,c.jsx)(t.code,{children:`@juntossomosmais/atomium/react`}),` (the `,(0,c.jsx)(t.code,{children:`clientModule`}),`), a self-reference that resolves to the package's own `,(0,c.jsx)(t.code,{children:`tsc`}),` output. `,(0,c.jsx)(t.code,{children:`packages/react/tsconfig.json`}),` maps that import back to `,(0,c.jsx)(t.code,{children:`./src/index.ts`}),` (and `,(0,c.jsx)(t.code,{children:`./hydrate`}),` to core's built declarations), otherwise `,(0,c.jsx)(t.code,{children:`tsc`}),` picks its own output as input and fails with TS5055.`]}),`
`,(0,c.jsx)(t.h3,{id:`4-vue-ssr-on-the-same-entry`,children:`4. Vue: SSR on the same entry`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@stencil/vue-output-target`}),` needs no extra entry point. Each generated proxy branches at runtime:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`export const AtomBadge = globalThis.window
  ? defineContainer('atom-badge', defineAtomBadge, ['type'])
  : defineStencilSSRComponent({
      tagName: 'atom-badge',
      hydrateModule: import('@juntossomosmais/atomium/hydrate'),
    })
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Nuxt consumers may need a Vite alias so the hydrate module's Node dependencies do not leak into the client bundle (see the `,(0,c.jsx)(t.a,{href:`https://github.com/stenciljs/output-targets/tree/main/example-project/nuxt-app`,rel:`nofollow`,children:`nuxt-app example`}),`), and `,(0,c.jsx)(t.code,{children:`compilerOptions.isCustomElement`}),` should match `,(0,c.jsx)(t.code,{children:`atom-*`}),` and `,(0,c.jsx)(t.code,{children:`ion-*`}),` tags to silence resolution warnings during SSR.`]}),`
`,(0,c.jsxs)(t.h3,{id:`5-server-safe-components-and-the-buildisserver-gotcha`,children:[`5. Server-safe components and the `,(0,c.jsx)(t.code,{children:`Build.isServer`}),` gotcha`]}),`
`,(0,c.jsxs)(t.p,{children:[`Lifecycle hooks (`,(0,c.jsx)(t.code,{children:`connectedCallback`}),`, `,(0,c.jsx)(t.code,{children:`componentWillLoad`}),`, `,(0,c.jsx)(t.code,{children:`componentDidLoad`}),`, `,(0,c.jsx)(t.code,{children:`render`}),`) all run during server hydration. Two classes of fixes were needed:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`globalThis`}),` escapes the mock DOM.`]}),` Stencil's hydrate app patches bare `,(0,c.jsx)(t.code,{children:`window`}),`/`,(0,c.jsx)(t.code,{children:`document`}),` references with mock-doc, but `,(0,c.jsx)(t.code,{children:`globalThis.matchMedia`}),` reaches the real Node global and crashes. `,(0,c.jsx)(t.code,{children:`utils/screens.ts`}),` now falls back to the desktop variant when `,(0,c.jsx)(t.code,{children:`matchMedia`}),` is unavailable (same pattern `,(0,c.jsx)(t.code,{children:`atom-col`}),` already used).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Layout-dependent code is guarded.`}),` `,(0,c.jsx)(t.code,{children:`atom-tooltip`}),` only creates its Popper instance on the client, and `,(0,c.jsx)(t.code,{children:`atom-tag`}),` skips `,(0,c.jsx)(t.code,{children:`getComputedStyle`}),` resolution on the server (the client render resolves the CSS variable afterwards).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`The guards use `,(0,c.jsx)(t.code,{children:`Build.isServer && !Build.isTesting`}),`, not `,(0,c.jsx)(t.code,{children:`Build.isServer`}),` alone: Stencil substitutes `,(0,c.jsx)(t.code,{children:`Build`}),` flags at compile time per output target (the hydrate bundle compiles the guard away entirely), but the Jest spec platform runs with `,(0,c.jsx)(t.code,{children:`isServer: true`}),` `,(0,c.jsx)(t.strong,{children:`and`}),` `,(0,c.jsx)(t.code,{children:`isTesting: true`}),` at runtime, so unit tests keep exercising the client path.`]}),`
`,(0,c.jsxs)(t.p,{children:[`To keep every component server-safe, `,(0,c.jsx)(t.code,{children:`packages/core/scripts/ssr-smoke.mjs`}),` runs on every core build and renders all components through the hydrate module, failing the build on any server-side error.`]}),`
`,(0,c.jsx)(t.h2,{id:`consequences`,children:`Consequences`}),`
`,(0,c.jsx)(t.h3,{id:`positive`,children:`Positive`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`✅ Server-rendered pages ship styled components with Declarative Shadow DOM: no FOUC, no layout shift, including the Ionic internals.`}),`
`,(0,c.jsx)(t.li,{children:`✅ Both Next.js consumption modes (runtime-based and compiler-based) and Nuxt are supported with the official Stencil tooling.`}),`
`,(0,c.jsx)(t.li,{children:`✅ The SSR smoke test prevents future components from silently breaking server rendering.`}),`
`,(0,c.jsx)(t.li,{children:`✅ The tooltip teardown null guards also fix a long-standing crash on jsdom unmounts in consumer test suites.`}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`neutral`,children:`Neutral`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`🔄 The published package grows by the `,(0,c.jsx)(t.code,{children:`hydrate/`}),` directory (a self-contained Node bundle of all components).`]}),`
`,(0,c.jsxs)(t.li,{children:[`🔄 Components that branch on `,(0,c.jsx)(t.code,{children:`matchMedia`}),` (`,(0,c.jsx)(t.code,{children:`atom-meter`}),`, `,(0,c.jsx)(t.code,{children:`atom-stepper`}),`, `,(0,c.jsx)(t.code,{children:`atom-tooltip`}),`) deterministically render the desktop variant on the server and adjust after client hydration.`]}),`
`,(0,c.jsxs)(t.li,{children:[`🔄 React server wrappers set `,(0,c.jsx)(t.code,{children:`suppressHydrationWarning`}),`, since the client runtime re-renders the shadow root after hydration.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`notes-for-consumers`,children:`Notes for consumers`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Additive change (new export paths, no API changes): shipped as a minor release.`}),`
`,(0,c.jsx)(t.li,{children:`SSR is opt-in. Apps that render client-side only are unaffected.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`references`,children:`References`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://stenciljs.com/docs/server-side-rendering`,rel:`nofollow`,children:`Stencil: Server-Side Rendering`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://stenciljs.com/docs/hydrate-app`,rel:`nofollow`,children:`Stencil: Hydrate App`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsxs)(t.a,{href:`https://www.npmjs.com/package/@stencil/ssr`,rel:`nofollow`,children:[(0,c.jsx)(t.code,{children:`@stencil/ssr`}),` package`]})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://github.com/stenciljs/output-targets/tree/main/example-project`,rel:`nofollow`,children:`stenciljs/output-targets example project`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`./2024-05-why-do-we-transpile-web-components-for-react-and-vue.mdx`,children:`ADR: Why do we transpile Web Components for React and Vue?`})}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=a(),i(),t()}))();export{s as default};
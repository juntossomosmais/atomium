import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{D as t,G as n,T as r,U as i,q as a}from"./storybook-DZEUUYC3.js";function o(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Docs/Architecture Decision Records/2025-11-04: React Output Target Update`}),`
`,(0,c.jsx)(t.h1,{id:`2025-11-04-react-output-target-update`,children:`2025-11-04: React Output Target Update`}),`
`,(0,c.jsxs)(t.p,{children:[`🗓️ 2025-11-04 · ✍️ `,(0,c.jsx)(t.a,{href:`https://twitter.com/felipefialho_`,rel:`nofollow`,children:`@felipefialho`})]}),`
`,(0,c.jsx)(t.h2,{id:`context`,children:`Context`}),`
`,(0,c.jsxs)(t.p,{children:[`For a long time the project was locked to `,(0,c.jsx)(t.code,{children:`@stencil/react-output-target@0.5.3`}),`. That version generated a local `,(0,c.jsx)(t.code,{children:`react-component-lib`}),` folder with our own copies of the wrapper helpers (`,(0,c.jsx)(t.code,{children:`createComponent`}),`, `,(0,c.jsx)(t.code,{children:`createOverlayComponent`}),`, `,(0,c.jsx)(t.code,{children:`attachProps`}),`, etc.). Because we could not move forward, we accumulated two custom build-time patch output targets to fix bugs in that generated code:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`reactBooleanFixOutputTarget`}),` (see ADR 0010): rewrote `,(0,c.jsx)(t.code,{children:`attachProps.ts`}),` so boolean props followed the HTML spec (`,(0,c.jsx)(t.code,{children:`disabled=""`}),` / attribute removed) instead of being serialized as the strings `,(0,c.jsx)(t.code,{children:`"true"`}),` / `,(0,c.jsx)(t.code,{children:`"false"`}),`, which Web Components read as truthy.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`react19FixOutputTarget`}),` (see ADR `,(0,c.jsx)(t.em,{children:`Why React 19 compatibility patch?`}),`): rewrote `,(0,c.jsx)(t.code,{children:`createOverlayComponent.tsx`}),` and `,(0,c.jsx)(t.code,{children:`utils/index.tsx`}),` so the generated `,(0,c.jsx)(t.code,{children:`forwardRef`}),` usage compiled under React 19.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Both patches were workarounds for limitations of the old generator, and both depended on a locally generated `,(0,c.jsx)(t.code,{children:`react-component-lib`}),` that only the `,(0,c.jsx)(t.code,{children:`0.x`}),` line produces. This made every dependency bump risky and blocked React 19 adoption (`,(0,c.jsx)(t.a,{href:`https://github.com/stenciljs/output-targets/issues/552`,rel:`nofollow`,children:`output-targets#552`}),`, `,(0,c.jsx)(t.a,{href:`https://github.com/stenciljs/output-targets/issues/645`,rel:`nofollow`,children:`output-targets#645`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`decision`,children:`Decision`}),`
`,(0,c.jsxs)(t.p,{children:[`Update to `,(0,c.jsx)(t.code,{children:`@stencil/react-output-target@^1.5.3`}),` and adopt its runtime-based API, removing both custom patch output targets.`]}),`
`,(0,c.jsx)(t.h3,{id:`1-stencil-configuration`,children:`1. Stencil configuration`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`reactOutputTarget({
  outDir: '../react/src/components',
  stencilPackageName: '@juntossomosmais/atomium',
  customElementsDir: 'dist/components',
  excludeComponents, // Ionic components remain excluded
  esModules: true,
})
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The Ionic components stay in the `,(0,c.jsx)(t.code,{children:`excludeComponents`}),` list, exactly as before, so we do not emit React wrappers for raw `,(0,c.jsx)(t.code,{children:`ion-*`}),` elements. Atomium's own components (which wrap Ionic internally) are generated against the `,(0,c.jsx)(t.code,{children:`dist-custom-elements`}),` output. `,(0,c.jsx)(t.code,{children:`esModules: true`}),` makes the generator emit one file per component plus a `,(0,c.jsx)(t.code,{children:`components.ts`}),` barrel, which is what enables per-component tree-shaking (see section 5).`]}),`
`,(0,c.jsxs)(t.h3,{id:`2-runtime-instead-of-a-local-react-component-lib`,children:[`2. Runtime instead of a local `,(0,c.jsx)(t.code,{children:`react-component-lib`})]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`1.x`}),` generator no longer emits a local `,(0,c.jsx)(t.code,{children:`react-component-lib`}),`. Each component is generated as its own file (`,(0,c.jsx)(t.code,{children:`atom-button.ts`}),`, `,(0,c.jsx)(t.code,{children:`atom-input.ts`}),`, ...) plus a `,(0,c.jsx)(t.code,{children:`components.ts`}),` barrel, and every file imports from the published runtime:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { createComponent } from '@stencil/react-output-target/runtime'
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime'
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Internally that runtime delegates to `,(0,c.jsx)(t.a,{href:`https://www.npmjs.com/package/@lit/react`,rel:`nofollow`,children:(0,c.jsx)(t.code,{children:`@lit/react`})}),`, which assigns values as DOM `,(0,c.jsx)(t.strong,{children:`properties`}),` (`,(0,c.jsx)(t.code,{children:`el.disabled = false`}),`) rather than stringified attributes.`]}),`
`,(0,c.jsx)(t.h3,{id:`3-both-custom-patches-are-now-obsolete`,children:`3. Both custom patches are now obsolete`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Boolean fix is no longer needed.`}),` Because `,(0,c.jsx)(t.code,{children:`@lit/react`}),` sets properties instead of attributes, the boolean-as-string bug from ADR 0010 cannot happen.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`React 19 fix is no longer needed.`}),` There is no local `,(0,c.jsx)(t.code,{children:`react-component-lib`}),` to patch, and the runtime declares `,(0,c.jsx)(t.code,{children:`react: ^18 || ^19`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`packages/core/output-target/`}),` folder (`,(0,c.jsx)(t.code,{children:`react-19-fix.ts`}),`, `,(0,c.jsx)(t.code,{children:`react-boolean.ts`}),`) was removed. This ADR supersedes ADR 0010 and the `,(0,c.jsx)(t.em,{children:`Why React 19 compatibility patch?`}),` ADR.`]}),`
`,(0,c.jsx)(t.h3,{id:`4-ionic-styling-fix-output-targets552`,children:`4. Ionic styling fix (output-targets#552)`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`1.x`}),` model registers components through the `,(0,c.jsx)(t.code,{children:`dist-custom-elements`}),` output, with each wrapper importing its own `,(0,c.jsx)(t.code,{children:`dist/components/atom-*.js`}),` and calling `,(0,c.jsx)(t.code,{children:`defineCustomElement`}),` individually. `,(0,c.jsx)(t.strong,{children:`This path never runs Stencil global scripts`}),`, so Ionic's own global initialization (which sets the default `,(0,c.jsx)(t.code,{children:`mode`}),`) does not fire. Without a resolved `,(0,c.jsx)(t.code,{children:`mode`}),`, Ionic's mode-specific stylesheet (`,(0,c.jsx)(t.code,{children:`button.md`}),` / `,(0,c.jsx)(t.code,{children:`button.ios`}),`) is never attached and Ionic-backed components render unstyled. This is the root cause of the long-standing `,(0,c.jsx)(t.a,{href:`https://github.com/stenciljs/output-targets/issues/552`,rel:`nofollow`,children:`output-targets#552`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`The fix is to set the mode resolver explicitly in the core global script, so it is compiled into the shared Stencil runtime chunk every component imports:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// packages/core/src/global/global.ts
import { setMode } from '@stencil/core'

setMode(() => 'md')
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Mode is forced to `,(0,c.jsx)(t.code,{children:`md`}),` for consistency across platforms. Atomium is a Material-based design system, so we deliberately do not want per-OS Ionic styling (`,(0,c.jsx)(t.code,{children:`ios`}),` on Apple devices). This also makes the Vue / `,(0,c.jsx)(t.code,{children:`defineCustomElements()`}),` loader path deterministic.`]}),`
`,(0,c.jsx)(t.h3,{id:`5-build-output-package-exports-and-tree-shaking`,children:`5. Build output, package exports and tree-shaking`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`packages/react`}),` compiles with `,(0,c.jsx)(t.code,{children:`tsc`}),` into `,(0,c.jsx)(t.code,{children:`packages/core/react/dist`}),` and is published through the core package's `,(0,c.jsx)(t.code,{children:`./react`}),` export.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Flat ESM output.`}),` `,(0,c.jsx)(t.code,{children:`packages/react/tsconfig.json`}),` sets an explicit `,(0,c.jsx)(t.code,{children:`rootDir: "src"`}),` and `,(0,c.jsx)(t.code,{children:`moduleResolution: "Bundler"`}),` (required to resolve the `,(0,c.jsx)(t.code,{children:`@stencil/react-output-target/runtime`}),` subpath). It does `,(0,c.jsx)(t.strong,{children:`not`}),` use `,(0,c.jsx)(t.code,{children:`paths`}),` mappings: an earlier attempt mapped the bare `,(0,c.jsx)(t.code,{children:`@juntossomosmais/atomium`}),` import to `,(0,c.jsx)(t.code,{children:`../core/src`}),`, which dragged core source into `,(0,c.jsx)(t.code,{children:`tsc`}),`'s emit set and nested the output (`,(0,c.jsx)(t.code,{children:`react/dist/react/src/index.js`}),`), breaking the `,(0,c.jsx)(t.code,{children:`@juntossomosmais/atomium/react`}),` resolution. The bare import now resolves through the workspace symlink to core's built declarations instead.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`ESM-only export.`}),` The `,(0,c.jsx)(t.code,{children:`./react`}),` export ships `,(0,c.jsx)(t.code,{children:`import`}),` + `,(0,c.jsx)(t.code,{children:`types`}),` only (no `,(0,c.jsx)(t.code,{children:`require`}),`/CJS condition):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-jsonc`,children:`"./react": {
  "types": "./react/dist/index.d.ts",
  "import": "./react/dist/index.js"
}
`})}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`./dist/components`}),` export.`]}),` Added to `,(0,c.jsx)(t.code,{children:`packages/core/package.json`}),` because the generated proxies import the `,(0,c.jsx)(t.code,{children:`dist/components`}),` directory, which the `,(0,c.jsx)(t.code,{children:`./dist/*`}),` pattern does not resolve under Node `,(0,c.jsx)(t.code,{children:`exports`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Tree-shaking.`}),` The react package declares `,(0,c.jsx)(t.code,{children:`"sideEffects": false`}),`. Combined with the per-component files from `,(0,c.jsx)(t.code,{children:`esModules: true`}),`, importing a single component no longer pulls the whole library (a single `,(0,c.jsx)(t.code,{children:`AtomButton`}),` import dropped from ~880 KB to ~93 KB in an esbuild check).`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`6-dependency-management`,children:`6. Dependency management`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@stencil/react-output-target`}),` is a dev dependency at the root (used to generate the wrappers at build time) `,(0,c.jsxs)(t.strong,{children:[`and a runtime `,(0,c.jsx)(t.code,{children:`dependency`}),` of the published `,(0,c.jsx)(t.code,{children:`@juntossomosmais/atomium`}),` (`,(0,c.jsx)(t.code,{children:`packages/core`}),`)`]}),` so its `,(0,c.jsx)(t.code,{children:`/runtime`}),` import resolves in consumer apps. `,(0,c.jsx)(t.code,{children:`react`}),` and `,(0,c.jsx)(t.code,{children:`react-dom`}),` are declared as optional peer dependencies. Consuming apps do not need to install the runtime directly.`]}),`
`,(0,c.jsx)(t.h2,{id:`consequences`,children:`Consequences`}),`
`,(0,c.jsx)(t.h3,{id:`positive`,children:`Positive`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`✅ No more custom patch output targets to maintain.`}),`
`,(0,c.jsx)(t.li,{children:`✅ React 19 supported natively, dependency bumps are no longer blocked.`}),`
`,(0,c.jsx)(t.li,{children:`✅ Ionic-backed components render correctly in React again (closes the long-standing #552).`}),`
`,(0,c.jsxs)(t.li,{children:[`✅ Per-component files plus `,(0,c.jsx)(t.code,{children:`sideEffects: false`}),` make imports genuinely tree-shakeable.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`neutral`,children:`Neutral`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`🔄 Internal change in how wrappers are generated (not visible at the import-path level).`}),`
`,(0,c.jsxs)(t.li,{children:[`🔄 `,(0,c.jsx)(t.code,{children:`@stencil/react-output-target/runtime`}),` (and `,(0,c.jsx)(t.code,{children:`@lit/react`}),`) ship in the bundle.`]}),`
`,(0,c.jsxs)(t.li,{children:[`🔄 Ionic `,(0,c.jsx)(t.code,{children:`mode`}),` is now always `,(0,c.jsx)(t.code,{children:`md`}),`, including on the Vue / loader path (previously platform-adaptive).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`breaking-major-release`,children:`Breaking (major release)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`💥 `,(0,c.jsxs)(t.strong,{children:[`ESM-only `,(0,c.jsx)(t.code,{children:`./react`}),` export.`]}),` The `,(0,c.jsx)(t.code,{children:`require`}),`/CJS condition was removed. Consumers that load the wrappers as CommonJS (notably Jest with `,(0,c.jsx)(t.code,{children:`jest-environment-jsdom`}),`, which resolves the `,(0,c.jsx)(t.code,{children:`require`}),` condition) must allowlist `,(0,c.jsx)(t.code,{children:`@juntossomosmais/atomium`}),` in `,(0,c.jsx)(t.code,{children:`transformIgnorePatterns`}),`, or set `,(0,c.jsx)(t.code,{children:`testEnvironmentOptions.customExportConditions: ['import']`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`💥 `,(0,c.jsxs)(t.strong,{children:[`React `,(0,c.jsx)(t.code,{children:`>=18`}),` required.`]}),` `,(0,c.jsx)(t.code,{children:`@stencil/react-output-target@1.x`}),` dropped React 16/17 support.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`references`,children:`References`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://stenciljs.com/docs/react`,rel:`nofollow`,children:`Stencil React Output Target Documentation`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://github.com/stenciljs/output-targets/issues/552`,rel:`nofollow`,children:`output-targets#552: React output target not wrapping Ionic components`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://github.com/stenciljs/output-targets/issues/645`,rel:`nofollow`,children:`output-targets#645: Cannot find module '@stencil/react-output-target/runtime'`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`./0007-why-do-we-transpile-web-components-for-react-and-vue.mdx`,children:`ADR 0007: Why do we transpile Web Components for React and Vue?`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`./0010-why-do-we-need-react-fix.mdx`,children:`ADR 0010: Why do we need a fix in React?`})}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=a(),i(),t()}))();export{s as default};
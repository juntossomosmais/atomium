import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{D as t,G as n,T as r,U as i,q as a}from"./storybook-CL38ptUc.js";function o(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Docs/Architecture Decision Records/2026-06-11: Vue Output Target Update`}),`
`,(0,c.jsx)(t.h1,{id:`2026-06-11-vue-output-target-update`,children:`2026-06-11: Vue Output Target Update`}),`
`,(0,c.jsxs)(t.p,{children:[`🗓️ 2026-06-11 · ✍️ `,(0,c.jsx)(t.a,{href:`https://twitter.com/felipefialho_`,rel:`nofollow`,children:`@felipefialho`})]}),`
`,(0,c.jsx)(t.h2,{id:`context`,children:`Context`}),`
`,(0,c.jsxs)(t.p,{children:[`After the React output target migration (see ADR `,(0,c.jsx)(t.em,{children:`2025-11-04: React Output Target Update`}),`), the Vue output was the last wrapper still on the old model: `,(0,c.jsx)(t.code,{children:`@stencil/vue-output-target@0.8.9`}),` generated a single proxies file backed by a vendored `,(0,c.jsx)(t.code,{children:`vue-component-lib`}),`, and registration depended on the lazy loader through the `,(0,c.jsx)(t.code,{children:`ComponentLibrary`}),` plugin (which also converted camelCase Stencil events to kebab-case DOM events). That model had no per-component tree-shaking: a single `,(0,c.jsx)(t.code,{children:`AtomButton`}),` import pulled the entire lazy loader (~1.1 MB in an esbuild check).`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@stencil/vue-output-target@0.13.x`}),` brings the Vue output in line with the React `,(0,c.jsx)(t.code,{children:`1.x`}),` model: per-component ES modules (`,(0,c.jsx)(t.code,{children:`esModules`}),`), proxies generated against the `,(0,c.jsx)(t.code,{children:`dist-custom-elements`}),` output (`,(0,c.jsx)(t.code,{children:`includeImportCustomElements`}),`), and a published `,(0,c.jsx)(t.code,{children:`/runtime`}),` subpath instead of vendored helpers.`]}),`
`,(0,c.jsx)(t.h2,{id:`decision`,children:`Decision`}),`
`,(0,c.jsxs)(t.p,{children:[`Update to `,(0,c.jsx)(t.code,{children:`@stencil/vue-output-target@^0.13.2`}),`, generate the wrappers from `,(0,c.jsx)(t.code,{children:`dist-custom-elements`}),`, and remove the `,(0,c.jsx)(t.code,{children:`ComponentLibrary`}),` plugin.`]}),`
`,(0,c.jsx)(t.h3,{id:`1-stencil-configuration`,children:`1. Stencil configuration`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`vueOutputTarget({
  componentCorePackage: '@juntossomosmais/atomium',
  proxiesFile: '../vue/src/components/index.ts',
  includeImportCustomElements: true,
  customElementsDir: 'dist/components',
  esModules: true,
  excludeComponents, // Ionic components remain excluded
  componentModels: [
    {
      elements: ['atom-input', 'atom-textarea', 'atom-select', 'atom-datetime'],
      targetAttr: 'value',
      event: 'atomChange',
    },
  ],
})
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`esModules: true`}),` emits one file per component (`,(0,c.jsx)(t.code,{children:`atom-button.ts`}),`, `,(0,c.jsx)(t.code,{children:`atom-input.ts`}),`, ...) plus an `,(0,c.jsx)(t.code,{children:`index.ts`}),` barrel. Each file imports its own `,(0,c.jsx)(t.code,{children:`dist/components/atom-*.js`}),` custom element and self-registers via `,(0,c.jsx)(t.code,{children:`defineCustomElement`}),`, reusing the same `,(0,c.jsx)(t.code,{children:`dist-custom-elements`}),` output (and the `,(0,c.jsx)(t.code,{children:`setMode(() => 'md')`}),` global fix) introduced by the React migration.`]}),`
`,(0,c.jsxs)(t.h3,{id:`2-runtime-instead-of-a-vendored-vue-component-lib`,children:[`2. Runtime instead of a vendored `,(0,c.jsx)(t.code,{children:`vue-component-lib`})]}),`
`,(0,c.jsxs)(t.p,{children:[`The generator no longer emits a local `,(0,c.jsx)(t.code,{children:`vue-component-lib`}),`. Every wrapper imports `,(0,c.jsx)(t.code,{children:`defineContainer`}),` from the published runtime:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { defineContainer } from '@stencil/vue-output-target/runtime'
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@stencil/vue-output-target`}),` is therefore a dev dependency at the root (wrapper generation at build time) `,(0,c.jsxs)(t.strong,{children:[`and a runtime `,(0,c.jsx)(t.code,{children:`dependency`}),` of the published `,(0,c.jsx)(t.code,{children:`@juntossomosmais/atomium`}),` (`,(0,c.jsx)(t.code,{children:`packages/core`}),`)`]}),`, exactly like `,(0,c.jsx)(t.code,{children:`@stencil/react-output-target`}),`. `,(0,c.jsx)(t.code,{children:`vue`}),` is declared as an optional peer dependency of core.`]}),`
`,(0,c.jsxs)(t.h3,{id:`3-componentlibrary-plugin-removed`,children:[`3. `,(0,c.jsx)(t.code,{children:`ComponentLibrary`}),` plugin removed`]}),`
`,(0,c.jsx)(t.p,{children:`The plugin existed for two reasons, both gone:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Registration:`}),` it called the lazy loader's `,(0,c.jsx)(t.code,{children:`defineCustomElements()`}),`. Wrappers now self-register on import.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Event casing:`}),` its `,(0,c.jsx)(t.code,{children:`ael`}),`/`,(0,c.jsx)(t.code,{children:`rel`}),`/`,(0,c.jsx)(t.code,{children:`ce`}),` overrides converted camelCase Stencil events (`,(0,c.jsx)(t.code,{children:`atomChange`}),`) to kebab-case DOM events (`,(0,c.jsx)(t.code,{children:`atom-change`}),`) so raw `,(0,c.jsx)(t.code,{children:`<atom-*>`}),` tags could use `,(0,c.jsx)(t.code,{children:`@atom-change`}),` in templates. The new runtime listens to the camelCase DOM event and re-emits it as a Vue component event, and Vue camelizes `,(0,c.jsx)(t.code,{children:`v-on`}),` arguments on components — so `,(0,c.jsx)(t.code,{children:`@atom-change`}),` on a `,(0,c.jsx)(t.strong,{children:`wrapper`}),` keeps working without any conversion.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Raw `,(0,c.jsx)(t.code,{children:`<atom-*>`}),` tags used without the wrappers now dispatch camelCase DOM events only. Those consumers must either migrate to the wrappers or listen to the camelCase events directly.`]}),`
`,(0,c.jsx)(t.h3,{id:`4-v-model-support`,children:`4. v-model support`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`componentModels`}),` binds `,(0,c.jsx)(t.code,{children:`v-model`}),` on `,(0,c.jsx)(t.code,{children:`AtomInput`}),`, `,(0,c.jsx)(t.code,{children:`AtomTextarea`}),`, `,(0,c.jsx)(t.code,{children:`AtomSelect`}),` and `,(0,c.jsx)(t.code,{children:`AtomDatetime`}),` to the `,(0,c.jsx)(t.code,{children:`value`}),` prop, updated on `,(0,c.jsx)(t.code,{children:`atomChange`}),`. Note the event name is the camelCase DOM event, matching the new runtime semantics.`]}),`
`,(0,c.jsx)(t.h3,{id:`5-build-output-package-exports-and-tree-shaking`,children:`5. Build output, package exports and tree-shaking`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`packages/vue`}),` compiles with `,(0,c.jsx)(t.code,{children:`tsc`}),` into `,(0,c.jsx)(t.code,{children:`packages/core/vue/dist`}),` and is published through the core package's `,(0,c.jsx)(t.code,{children:`./vue`}),` export.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Flat ESM output.`}),` `,(0,c.jsx)(t.code,{children:`packages/vue`}),` now declares `,(0,c.jsx)(t.code,{children:`"type": "module"`}),` and `,(0,c.jsx)(t.code,{children:`"sideEffects": false`}),`, and its tsconfig mirrors `,(0,c.jsx)(t.code,{children:`packages/react`}),`: `,(0,c.jsx)(t.code,{children:`moduleResolution: "Bundler"`}),` plus explicit `,(0,c.jsx)(t.code,{children:`paths`}),` into `,(0,c.jsx)(t.code,{children:`../core/dist`}),` so the build resolves on a fresh CI runner where the workspace symlink resolution fails.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Declarations co-located.`}),` The separate `,(0,c.jsx)(t.code,{children:`dist/types`}),` directory is gone; `,(0,c.jsx)(t.code,{children:`.d.ts`}),` files sit next to the `,(0,c.jsx)(t.code,{children:`.js`}),` output and the `,(0,c.jsx)(t.code,{children:`./vue`}),` export's `,(0,c.jsx)(t.code,{children:`types`}),` condition points at `,(0,c.jsx)(t.code,{children:`./vue/dist/index.d.ts`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Explicit extensions.`}),` `,(0,c.jsx)(t.code,{children:`src/index.ts`}),` re-exports with the `,(0,c.jsx)(t.code,{children:`.js`}),` extension (`,(0,c.jsx)(t.code,{children:`export * from './components/index.js'`}),`) so plain-Node ESM and SSR consumers resolve it (same lesson as atomium#846 on the React side).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tree-shaking.`}),` Importing a single `,(0,c.jsx)(t.code,{children:`AtomButton`}),` dropped from ~1.1 MB to ~75 KB in an esbuild check (−93%).`]}),`
`]}),`
`,(0,c.jsxs)(t.h3,{id:`6-storybook-note-vueserver-renderer`,children:[`6. Storybook note (`,(0,c.jsx)(t.code,{children:`vue/server-renderer`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`The 0.13 runtime contains an SSR helper that dynamically imports `,(0,c.jsx)(t.code,{children:`vue/server-renderer`}),`. Storybook's `,(0,c.jsx)(t.code,{children:`vue3-vite`}),` framework aliases `,(0,c.jsx)(t.code,{children:`vue`}),` to the browser `,(0,c.jsx)(t.code,{children:`esm-bundler`}),` build, and that alias prefix-matches the subpath, producing an unresolvable id. `,(0,c.jsx)(t.code,{children:`apps/docs-vue/.storybook/main.ts`}),` pins an exact `,(0,c.jsx)(t.code,{children:`vue/server-renderer`}),` alias ahead of the framework's, resolving it to the real module.`]}),`
`,(0,c.jsx)(t.h2,{id:`consequences`,children:`Consequences`}),`
`,(0,c.jsx)(t.h3,{id:`positive`,children:`Positive`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`✅ Per-component files plus `,(0,c.jsx)(t.code,{children:`sideEffects: false`}),` make Vue imports genuinely tree-shakeable (−93% for a single-component import).`]}),`
`,(0,c.jsxs)(t.li,{children:[`✅ No more vendored `,(0,c.jsx)(t.code,{children:`vue-component-lib`}),`; wrapper helpers come from the maintained runtime.`]}),`
`,(0,c.jsxs)(t.li,{children:[`✅ `,(0,c.jsx)(t.code,{children:`v-model`}),` works on the form components.`]}),`
`,(0,c.jsxs)(t.li,{children:[`✅ React and Vue outputs now share the same `,(0,c.jsx)(t.code,{children:`dist-custom-elements`}),` pipeline and styling fix.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`neutral`,children:`Neutral`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`🔄 `,(0,c.jsx)(t.code,{children:`@stencil/vue-output-target/runtime`}),` ships in the bundle.`]}),`
`,(0,c.jsx)(t.li,{children:`🔄 Components register eagerly per import instead of lazily via the loader; component styles ship inside the JS bundles.`}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`behavior-changes-for-consumers`,children:`Behavior changes for consumers`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`💥 `,(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`ComponentLibrary`}),` plugin removed.`]}),` Wrapper users only delete the `,(0,c.jsx)(t.code,{children:`install()`}),` call. Raw `,(0,c.jsx)(t.code,{children:`<atom-*>`}),` tag users lose the kebab-case DOM event conversion and must migrate to wrappers or camelCase listeners.`]}),`
`,(0,c.jsxs)(t.li,{children:[`💥 `,(0,c.jsxs)(t.strong,{children:[`ESM-only `,(0,c.jsx)(t.code,{children:`./vue`}),` export with `,(0,c.jsx)(t.code,{children:`vue >= 3.4.38`})]}),` (runtime peer range). CJS test runners need the same allowlisting as the React output; Vitest handles it natively.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`references`,children:`References`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://stenciljs.com/docs/vue`,rel:`nofollow`,children:`Stencil Vue Output Target Documentation`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://github.com/stenciljs/output-targets/tree/main/packages/vue`,rel:`nofollow`,children:`stenciljs/output-targets — vue-output-target`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`./2024-05-why-do-we-transpile-web-components-for-react-and-vue.mdx`,children:`ADR: Why do we transpile Web Components for React and Vue?`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`./2025-11-04-react-output-target-update.mdx`,children:`ADR 2025-11-04: React Output Target Update`})}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=a(),i(),t()}))();export{s as default};
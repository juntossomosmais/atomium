import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{D as t,G as n,T as r,U as i,q as a}from"./storybook-BXfsGf_B.js";function o(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Docs/Architecture Decision Records/2025-11-04: React Output Target Update`}),`
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
`,(0,c.jsxs)(t.p,{children:[`The Ionic components stay in the `,(0,c.jsx)(t.code,{children:`excludeComponents`}),` list, exactly as before. They are registered globally through `,(0,c.jsx)(t.code,{children:`global.ts`}),` / `,(0,c.jsx)(t.code,{children:`defineCustomElements()`}),`, so React consumers keep using them as they always have. This is what keeps the Ionic wrappers working and addresses the wrapping problem from `,(0,c.jsx)(t.a,{href:`https://github.com/stenciljs/output-targets/issues/552`,rel:`nofollow`,children:`output-targets#552`}),`.`]}),`
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
`,(0,c.jsx)(t.h3,{id:`4-dependency-management`,children:`4. Dependency management`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@stencil/react-output-target`}),` is a dev dependency at the root (used to generate the wrappers at build time) and a regular dependency of `,(0,c.jsx)(t.code,{children:`packages/react`}),` (the runtime ships with the published package). Consuming apps do not need to install it directly.`]}),`
`,(0,c.jsx)(t.h3,{id:`5-typescript-configuration`,children:`5. TypeScript configuration`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`packages/react/tsconfig.json`}),` uses `,(0,c.jsx)(t.code,{children:`moduleResolution: "Bundler"`}),` with path mappings so the generated proxies resolve against the local core build during compilation:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "compilerOptions": {
    "moduleResolution": "Bundler",
    "paths": {
      "@juntossomosmais/atomium": ["../core/src/index.ts"],
      "@juntossomosmais/atomium/*": ["../core/*"]
    }
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`consequences`,children:`Consequences`}),`
`,(0,c.jsx)(t.h3,{id:`positive`,children:`Positive`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`✅ No more custom patch output targets to maintain.`}),`
`,(0,c.jsx)(t.li,{children:`✅ React 19 supported natively, dependency bumps are no longer blocked.`}),`
`,(0,c.jsx)(t.li,{children:`✅ Per-component files are easier to tree-shake.`}),`
`,(0,c.jsxs)(t.li,{children:[`✅ Ionic components keep working exactly as before (global registration + `,(0,c.jsx)(t.code,{children:`excludeComponents`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[`✅ No changes required in consuming apps — import paths stay `,(0,c.jsx)(t.code,{children:`@juntossomosmais/atomium/react`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`neutral`,children:`Neutral`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`🔄 Internal change in how wrappers are generated (not visible to consumers).`}),`
`,(0,c.jsxs)(t.li,{children:[`🔄 `,(0,c.jsx)(t.code,{children:`@stencil/react-output-target/runtime`}),` (and `,(0,c.jsx)(t.code,{children:`@lit/react`}),`) ship in the bundle.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`references`,children:`References`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://stenciljs.com/docs/react`,rel:`nofollow`,children:`Stencil React Output Target Documentation`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://github.com/stenciljs/output-targets/issues/552`,rel:`nofollow`,children:`output-targets#552: React output target not wrapping Ionic components`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://github.com/stenciljs/output-targets/issues/645`,rel:`nofollow`,children:`output-targets#645: Cannot find module '@stencil/react-output-target/runtime'`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`./0007-why-do-we-transpile-web-components-for-react-and-vue.mdx`,children:`ADR 0007: Why do we transpile Web Components for React and Vue?`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`./0010-why-do-we-need-react-fix.mdx`,children:`ADR 0010: Why do we need a fix in React?`})}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=a(),i(),t()}))();export{s as default};
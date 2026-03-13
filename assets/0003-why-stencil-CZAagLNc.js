import{S as e,l as t,w as n}from"./storybook-CfikGCXO.js";var r=n();function i(n){let i={a:`a`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{title:`Docs/Architecture Decision Records/ADR 0003: Why Stencil?`}),`
`,(0,r.jsx)(i.h1,{id:`adr-0003-why-stencil`,children:`ADR 0003: Why Stencil?`}),`
`,(0,r.jsxs)(i.p,{children:[`🗓️ 2023-03 · ✍️ `,(0,r.jsx)(i.a,{href:`https://twitter.com/felipefialho_`,rel:`nofollow`,children:`@felipefialho`})]}),`
`,(0,r.jsx)(i.h2,{id:`context`,children:`Context`}),`
`,(0,r.jsx)(i.p,{children:`We need to choose a framework to build our web components library`}),`
`,(0,r.jsx)(i.h2,{id:`decision-drivers`,children:`Decision Drivers`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:`We need to build a web components library that is lightweight and performant.`}),`
`,(0,r.jsx)(i.li,{children:`We need a solution that is framework agnostic, so we can use it with any JavaScript framework.`}),`
`,(0,r.jsx)(i.li,{children:`We want to use a compiler to generate web components, to make development easier and more efficient.`}),`
`,(0,r.jsx)(i.li,{children:`We want to use a framework that has a good community, so we can get support and contribute to the ecosystem.`}),`
`,(0,r.jsx)(i.li,{children:`We need good integration with Ionic, React, and Vue, as these are the frameworks we use in our projects.`}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:`considered-options`,children:`Considered Options`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.a,{href:`https://lit.dev/`,rel:`nofollow`,children:`Lit`})}),`: A library for building fast, lightweight web components. Not a compiler, so we would need to use a separate tool to generate web components.`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.a,{href:`https://svelte.dev/`,rel:`nofollow`,children:`Svelte`})}),`: A framework that shifts most of the work to a compile step, making it fast and lightweight. Not a compiler for web components, so we would need to use a separate tool to generate them.`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.a,{href:`https://stenciljs.com/`,rel:`nofollow`,children:`Stencil`})}),`: A compiler for generating web components and progressive web apps. Framework agnostic with a good community and good integrations with Ionic, React, and Vue.`]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:`decision`,children:`Decision`}),`
`,(0,r.jsxs)(i.p,{children:[`After evaluating our options, we decided to choose `,(0,r.jsx)(i.strong,{children:`Stencil`}),` as our framework for building our web components library. Stencil is a robust and reliable compiler that generates web components, making it easy to develop reusable, platform-agnostic components. Additionally, Stencil is framework-agnostic, which means that it can work with different frameworks such as Ionic, React, and Vue. Stencil has a strong community, providing us with ample support for any issues that we may face.`]}),`
`,(0,r.jsx)(i.p,{children:`One of the key features of Stencil is its native transpiler, which allows us to generate web components from React and Vue. This capability will make it easier for us to integrate our new components into our existing projects, leveraging the power of our current technology stack. Another key feature of Stencil is its ability to hydrate components to run with SSR (Server-Side Rendering). This feature will allow us to use our components in projects that use SSR, such as Next.js.`}),`
`,(0,r.jsx)(i.p,{children:`Stencil also have a good DX (Developer Experience), providing us with a set of tools that will make it easier to develop and maintain our components. Stencil also has a good documentation, which will help us to get started quickly and easily.`}),`
`,(0,r.jsx)(i.p,{children:`Overall, we believe that Stencil is the right choice for our web components library, providing us with the flexibility, support, and functionality that we need to build high-quality components.`})]})}function a(t={}){let{wrapper:n}={...e(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(i,{...t})}):i(t)}export{a as default};
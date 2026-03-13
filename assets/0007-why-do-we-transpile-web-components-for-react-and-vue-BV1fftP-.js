import"./components-sxD-Pwkd.js";import{i as e}from"./chunk-YKABRMAI-rQu7s1e9.js";import"./react-DFKUFpG3.js";import"./chunk-242VQQM5-BH6EcrRQ.js";import{m as t,u as n}from"./iframe-D71TlG5e.js";var r=e();function i(e){let i={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{title:`Docs/Architecture Decision Records/ADR 0007: Why do we transpile Web Components for React and Vue?`}),`
`,(0,r.jsx)(i.h1,{id:`adr-0007-why-do-we-transpile-web-components-for-react-and-vue`,children:`ADR 0007: Why do we transpile Web Components for React and Vue?`}),`
`,(0,r.jsxs)(i.p,{children:[`🗓️ ~2023-04~ 2024-05 · ✍️ `,(0,r.jsx)(i.a,{href:`https://twitter.com/felipefialho_`,rel:`nofollow`,children:`@felipefialho`})]}),`
`,(0,r.jsx)(i.h2,{id:`context`,children:`Context`}),`
`,(0,r.jsx)(i.p,{children:`We need to use Web Components in our projects built with Vue and React (Next.js) while maintaining a good Developer Experience (DX).`}),`
`,(0,r.jsx)(i.h2,{id:`problems`,children:`Problems`}),`
`,(0,r.jsx)(i.h3,{id:`react`,children:`React`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[`We need to use `,(0,r.jsx)(i.code,{children:`Event Listeners`}),` to handle events and methods when using Web Components`]}),`
`,(0,r.jsxs)(i.li,{children:[`React `,(0,r.jsxs)(i.a,{href:`https://legacy.reactjs.org/docs/events.html`,rel:`nofollow`,children:[`use `,(0,r.jsx)(i.code,{children:`SyntheticEvent`}),` to handle events`]}),`, and we need to convert it to `,(0,r.jsx)(i.code,{children:`CustomEvent`}),` to use Web Components`]}),`
`,(0,r.jsxs)(i.li,{children:[`Props that use `,(0,r.jsx)(i.code,{children:`array`}),` or `,(0,r.jsx)(i.code,{children:`object`}),` need to be converted to JSON for compatibility`]}),`
`,(0,r.jsxs)(i.li,{children:[`We need to use `,(0,r.jsx)(i.code,{children:`ref`}),` to access the Web Component API in React`]}),`
`,(0,r.jsx)(i.li,{children:`Sometimes, we need to create wrappers to effectively use Web Components in React`}),`
`,(0,r.jsx)(i.li,{children:`Overall, the Developer Experience in React is not optimal when working with Web Components`}),`
`]}),`
`,(0,r.jsx)(i.h3,{id:`vue`,children:`Vue`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[`Props that use `,(0,r.jsx)(i.code,{children:`array`}),` or `,(0,r.jsx)(i.code,{children:`object`}),` need to be converted to JSON for compatibility`]}),`
`,(0,r.jsxs)(i.li,{children:[`We need to use `,(0,r.jsx)(i.code,{children:`ref`}),` to access the Web Component API in Vue`]}),`
`,(0,r.jsx)(i.li,{children:`We need to create wrappers to effectively use Web Components in Vue and it is not always straightforward`}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:`decision`,children:`Decision`}),`
`,(0,r.jsx)(i.p,{children:`~To address these challenges, we have decided to use Stencil to create a transpiled version of Web Components specifically for React, while keeping the original version for Vue.~`}),`
`,(0,r.jsx)(i.p,{children:`~Currently, we are using Vue 2 (as of April 2022), and the transpiler of Stencil is not compatible with Vue 2, however, Vue provides a good DX and seamless compatibility with Web Components.~`}),`
`,(0,r.jsx)(i.p,{children:`~In the future, when we migrate to Vue 3, we may reevaluate this decision and consider transpiling Web Components for Vue as well.~`}),`
`,(0,r.jsx)(i.h3,{id:`update`,children:`Update`}),`
`,(0,r.jsx)(i.p,{children:`Now we are using Vue 3, and we have decided to transpile Web Components for both React and Vue to provide a better Developer Experience (DX) and to ensure compatibility with the latest versions of both libraries.`})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};
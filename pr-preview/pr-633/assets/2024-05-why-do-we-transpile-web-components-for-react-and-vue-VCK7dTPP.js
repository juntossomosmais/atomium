import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{D as t,G as n,T as r,U as i,q as a}from"./storybook-BXAm_t_n.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Docs/Architecture Decision Records/2024-05: Why do we transpile Web Components for React and Vue?`}),`
`,(0,c.jsx)(t.h1,{id:`2024-05-why-do-we-transpile-web-components-for-react-and-vue`,children:`2024-05: Why do we transpile Web Components for React and Vue?`}),`
`,(0,c.jsxs)(t.p,{children:[`🗓️ ~2023-04~ 2024-05 · ✍️ `,(0,c.jsx)(t.a,{href:`https://twitter.com/felipefialho_`,rel:`nofollow`,children:`@felipefialho`})]}),`
`,(0,c.jsx)(t.h2,{id:`context`,children:`Context`}),`
`,(0,c.jsx)(t.p,{children:`We need to use Web Components in our projects built with Vue and React (Next.js) while maintaining a good Developer Experience (DX).`}),`
`,(0,c.jsx)(t.h2,{id:`problems`,children:`Problems`}),`
`,(0,c.jsx)(t.h3,{id:`react`,children:`React`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`We need to use `,(0,c.jsx)(t.code,{children:`Event Listeners`}),` to handle events and methods when using Web Components`]}),`
`,(0,c.jsxs)(t.li,{children:[`React `,(0,c.jsxs)(t.a,{href:`https://legacy.reactjs.org/docs/events.html`,rel:`nofollow`,children:[`use `,(0,c.jsx)(t.code,{children:`SyntheticEvent`}),` to handle events`]}),`, and we need to convert it to `,(0,c.jsx)(t.code,{children:`CustomEvent`}),` to use Web Components`]}),`
`,(0,c.jsxs)(t.li,{children:[`Props that use `,(0,c.jsx)(t.code,{children:`array`}),` or `,(0,c.jsx)(t.code,{children:`object`}),` need to be converted to JSON for compatibility`]}),`
`,(0,c.jsxs)(t.li,{children:[`We need to use `,(0,c.jsx)(t.code,{children:`ref`}),` to access the Web Component API in React`]}),`
`,(0,c.jsx)(t.li,{children:`Sometimes, we need to create wrappers to effectively use Web Components in React`}),`
`,(0,c.jsx)(t.li,{children:`Overall, the Developer Experience in React is not optimal when working with Web Components`}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`vue`,children:`Vue`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Props that use `,(0,c.jsx)(t.code,{children:`array`}),` or `,(0,c.jsx)(t.code,{children:`object`}),` need to be converted to JSON for compatibility`]}),`
`,(0,c.jsxs)(t.li,{children:[`We need to use `,(0,c.jsx)(t.code,{children:`ref`}),` to access the Web Component API in Vue`]}),`
`,(0,c.jsx)(t.li,{children:`We need to create wrappers to effectively use Web Components in Vue and it is not always straightforward`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`decision`,children:`Decision`}),`
`,(0,c.jsx)(t.p,{children:`~To address these challenges, we have decided to use Stencil to create a transpiled version of Web Components specifically for React, while keeping the original version for Vue.~`}),`
`,(0,c.jsx)(t.p,{children:`~Currently, we are using Vue 2 (as of April 2022), and the transpiler of Stencil is not compatible with Vue 2, however, Vue provides a good DX and seamless compatibility with Web Components.~`}),`
`,(0,c.jsx)(t.p,{children:`~In the future, when we migrate to Vue 3, we may reevaluate this decision and consider transpiling Web Components for Vue as well.~`}),`
`,(0,c.jsx)(t.h3,{id:`update`,children:`Update`}),`
`,(0,c.jsx)(t.p,{children:`Now we are using Vue 3, and we have decided to transpile Web Components for both React and Vue to provide a better Developer Experience (DX) and to ensure compatibility with the latest versions of both libraries.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=a(),i(),t()}))();export{s as default};
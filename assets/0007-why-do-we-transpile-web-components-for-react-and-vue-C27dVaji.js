import{u as i,j as e,M as s}from"./iframe-Cu97PxhQ.js";import"./preload-helper-PPVm8Dsz.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Docs/Architecture Decision Records/ADR 0007: Why do we transpile Web Components for React and Vue?"}),`
`,e.jsx(n.h1,{id:"adr-0007-why-do-we-transpile-web-components-for-react-and-vue",children:"ADR 0007: Why do we transpile Web Components for React and Vue?"}),`
`,e.jsxs(n.p,{children:["🗓️ ~2023-04~ 2024-05 · ✍️ ",e.jsx(n.a,{href:"https://twitter.com/felipefialho_",rel:"nofollow",children:"@felipefialho"})]}),`
`,e.jsx(n.h2,{id:"context",children:"Context"}),`
`,e.jsx(n.p,{children:"We need to use Web Components in our projects built with Vue and React (Next.js) while maintaining a good Developer Experience (DX)."}),`
`,e.jsx(n.h2,{id:"problems",children:"Problems"}),`
`,e.jsx(n.h3,{id:"react",children:"React"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["We need to use ",e.jsx(n.code,{children:"Event Listeners"})," to handle events and methods when using Web Components"]}),`
`,e.jsxs(n.li,{children:["React ",e.jsxs(n.a,{href:"https://legacy.reactjs.org/docs/events.html",rel:"nofollow",children:["use ",e.jsx(n.code,{children:"SyntheticEvent"})," to handle events"]}),", and we need to convert it to ",e.jsx(n.code,{children:"CustomEvent"})," to use Web Components"]}),`
`,e.jsxs(n.li,{children:["Props that use ",e.jsx(n.code,{children:"array"})," or ",e.jsx(n.code,{children:"object"})," need to be converted to JSON for compatibility"]}),`
`,e.jsxs(n.li,{children:["We need to use ",e.jsx(n.code,{children:"ref"})," to access the Web Component API in React"]}),`
`,e.jsx(n.li,{children:"Sometimes, we need to create wrappers to effectively use Web Components in React"}),`
`,e.jsx(n.li,{children:"Overall, the Developer Experience in React is not optimal when working with Web Components"}),`
`]}),`
`,e.jsx(n.h3,{id:"vue",children:"Vue"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Props that use ",e.jsx(n.code,{children:"array"})," or ",e.jsx(n.code,{children:"object"})," need to be converted to JSON for compatibility"]}),`
`,e.jsxs(n.li,{children:["We need to use ",e.jsx(n.code,{children:"ref"})," to access the Web Component API in Vue"]}),`
`,e.jsx(n.li,{children:"We need to create wrappers to effectively use Web Components in Vue and it is not always straightforward"}),`
`]}),`
`,e.jsx(n.h2,{id:"decision",children:"Decision"}),`
`,e.jsx(n.p,{children:"~To address these challenges, we have decided to use Stencil to create a transpiled version of Web Components specifically for React, while keeping the original version for Vue.~"}),`
`,e.jsx(n.p,{children:"~Currently, we are using Vue 2 (as of April 2022), and the transpiler of Stencil is not compatible with Vue 2, however, Vue provides a good DX and seamless compatibility with Web Components.~"}),`
`,e.jsx(n.p,{children:"~In the future, when we migrate to Vue 3, we may reevaluate this decision and consider transpiling Web Components for Vue as well.~"}),`
`,e.jsx(n.h3,{id:"update",children:"Update"}),`
`,e.jsx(n.p,{children:"Now we are using Vue 3, and we have decided to transpile Web Components for both React and Vue to provide a better Developer Experience (DX) and to ensure compatibility with the latest versions of both libraries."})]})}function d(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{d as default};

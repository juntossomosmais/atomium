import{u as s,j as e,M as i}from"./iframe-kKClsnpn.js";import"./preload-helper-PPVm8Dsz.js";function t(o){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Docs/Architecture Decision Records/ADR 0006: Why that component creation definition?"}),`
`,e.jsx(n.h1,{id:"adr-0006-why-that-component-creation-definition",children:"ADR 0006: Why that component creation definition?"}),`
`,e.jsxs(n.p,{children:["🗓️ 2023-03 · ✍️ ",e.jsx(n.a,{href:"https://twitter.com/felipefialho_",rel:"nofollow",children:"@felipefialho"})]}),`
`,e.jsx(n.h2,{id:"context",children:"Context"}),`
`,e.jsx(n.p,{children:"We need to create new components and modify existing Ionic components for use in our projects."}),`
`,e.jsx(n.h2,{id:"decision-drivers",children:"Decision Drivers"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"We need to create wrappers to facilitate the reuse of modified Ionic components."}),`
`,e.jsx(n.li,{children:"We need to create new components for our projects."}),`
`,e.jsx(n.li,{children:"We need to use CSS variables as tokens to ensure consistency across projects."}),`
`,e.jsx(n.li,{children:"We will only create new components if the Ionic components do not meet our needs."}),`
`,e.jsx(n.li,{children:"We will only create a component once and use it across all projects."}),`
`,e.jsx(n.li,{children:"We need a way to create new components and modify Ionic components without changing the Ionic codebase."}),`
`]}),`
`,e.jsx(n.h2,{id:"decision",children:"Decision"}),`
`,e.jsxs(n.p,{children:["We have had positive experiences using our old Design System called ",e.jsx(n.a,{href:"https://github.com/juntossomosmais/venice",rel:"nofollow",children:"Venice"}),", but in the past (2020), we encountered issues using Web Components in our projects. As a result, we decided to create React and Vue components separately and share the CSS code using the monorepo."]}),`
`,e.jsxs(n.p,{children:["Another positive experience we had was using Material Design System across our projects. We typically used ",e.jsx(n.a,{href:"https://vuetifyjs.com/",rel:"nofollow",children:"Vuetify"})," for Vue and ",e.jsx(n.a,{href:"https://material-ui.com/",rel:"nofollow",children:"Material UI"})," for React, but we modified the components separately in each project, in the other words, we create the same components a lot of times."]}),`
`,e.jsxs(n.p,{children:["In 2023, we are using ",e.jsx(n.a,{href:"https://stenciljs.com/",rel:"nofollow",children:"Stencil"})," to create the Web Components and ",e.jsx(n.a,{href:"https://ionicframework.com/",rel:"nofollow",children:"Ionic"})," as our UI framework using Material Design. We will follow the same concept and architecture used in Venice for our new Design System."]}),`
`,e.jsx(n.p,{children:"The new Design System will allow us to create a library of reusable components, which will make it easier to maintain consistency across all of our projects. We will create wrappers to make it easier to reuse modified Ionic components, and we will create new components as needed."}),`
`,e.jsx(n.p,{children:"If the Ionic components do not solve our problems, we will create new components, but only when necessary. We will be able to create new components and modify the Ionic components without changing the Ionic codebase. This will allow us to make changes as needed without introducing unnecessary complexity."}),`
`,e.jsx(n.p,{children:"To ensure consistency we will use tokens with CSS variables that can be shared across projects."}),`
`,e.jsx(n.p,{children:"Overall, we believe that this architecture and approach will enable us to create a flexible, scalable, and consistent Design System that will serve us well for years to come."})]})}function a(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{a as default};

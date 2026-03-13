import"./components-sxD-Pwkd.js";import{i as e}from"./chunk-YKABRMAI-rQu7s1e9.js";import"./react-DFKUFpG3.js";import"./chunk-242VQQM5-BH6EcrRQ.js";import{m as t,u as n}from"./iframe-Dm0EU4CU.js";var r=e();function i(e){let i={a:`a`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{title:`Docs/Architecture Decision Records/ADR 0006: Why that component creation definition?`}),`
`,(0,r.jsx)(i.h1,{id:`adr-0006-why-that-component-creation-definition`,children:`ADR 0006: Why that component creation definition?`}),`
`,(0,r.jsxs)(i.p,{children:[`🗓️ 2023-03 · ✍️ `,(0,r.jsx)(i.a,{href:`https://twitter.com/felipefialho_`,rel:`nofollow`,children:`@felipefialho`})]}),`
`,(0,r.jsx)(i.h2,{id:`context`,children:`Context`}),`
`,(0,r.jsx)(i.p,{children:`We need to create new components and modify existing Ionic components for use in our projects.`}),`
`,(0,r.jsx)(i.h2,{id:`decision-drivers`,children:`Decision Drivers`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:`We need to create wrappers to facilitate the reuse of modified Ionic components.`}),`
`,(0,r.jsx)(i.li,{children:`We need to create new components for our projects.`}),`
`,(0,r.jsx)(i.li,{children:`We need to use CSS variables as tokens to ensure consistency across projects.`}),`
`,(0,r.jsx)(i.li,{children:`We will only create new components if the Ionic components do not meet our needs.`}),`
`,(0,r.jsx)(i.li,{children:`We will only create a component once and use it across all projects.`}),`
`,(0,r.jsx)(i.li,{children:`We need a way to create new components and modify Ionic components without changing the Ionic codebase.`}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:`decision`,children:`Decision`}),`
`,(0,r.jsxs)(i.p,{children:[`We have had positive experiences using our old Design System called `,(0,r.jsx)(i.a,{href:`https://github.com/juntossomosmais/venice`,rel:`nofollow`,children:`Venice`}),`, but in the past (2020), we encountered issues using Web Components in our projects. As a result, we decided to create React and Vue components separately and share the CSS code using the monorepo.`]}),`
`,(0,r.jsxs)(i.p,{children:[`Another positive experience we had was using Material Design System across our projects. We typically used `,(0,r.jsx)(i.a,{href:`https://vuetifyjs.com/`,rel:`nofollow`,children:`Vuetify`}),` for Vue and `,(0,r.jsx)(i.a,{href:`https://material-ui.com/`,rel:`nofollow`,children:`Material UI`}),` for React, but we modified the components separately in each project, in the other words, we create the same components a lot of times.`]}),`
`,(0,r.jsxs)(i.p,{children:[`In 2023, we are using `,(0,r.jsx)(i.a,{href:`https://stenciljs.com/`,rel:`nofollow`,children:`Stencil`}),` to create the Web Components and `,(0,r.jsx)(i.a,{href:`https://ionicframework.com/`,rel:`nofollow`,children:`Ionic`}),` as our UI framework using Material Design. We will follow the same concept and architecture used in Venice for our new Design System.`]}),`
`,(0,r.jsx)(i.p,{children:`The new Design System will allow us to create a library of reusable components, which will make it easier to maintain consistency across all of our projects. We will create wrappers to make it easier to reuse modified Ionic components, and we will create new components as needed.`}),`
`,(0,r.jsx)(i.p,{children:`If the Ionic components do not solve our problems, we will create new components, but only when necessary. We will be able to create new components and modify the Ionic components without changing the Ionic codebase. This will allow us to make changes as needed without introducing unnecessary complexity.`}),`
`,(0,r.jsx)(i.p,{children:`To ensure consistency we will use tokens with CSS variables that can be shared across projects.`}),`
`,(0,r.jsx)(i.p,{children:`Overall, we believe that this architecture and approach will enable us to create a flexible, scalable, and consistent Design System that will serve us well for years to come.`})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};
import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{D as t,G as n,T as r,U as i,q as a}from"./storybook-BXAm_t_n.js";function o(e){let t={a:`a`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Docs/Architecture Decision Records/2023-03: Why that component creation definition?`}),`
`,(0,c.jsx)(t.h1,{id:`2023-03-why-that-component-creation-definition`,children:`2023-03: Why that component creation definition?`}),`
`,(0,c.jsxs)(t.p,{children:[`🗓️ 2023-03 · ✍️ `,(0,c.jsx)(t.a,{href:`https://twitter.com/felipefialho_`,rel:`nofollow`,children:`@felipefialho`})]}),`
`,(0,c.jsx)(t.h2,{id:`context`,children:`Context`}),`
`,(0,c.jsx)(t.p,{children:`We need to create new components and modify existing Ionic components for use in our projects.`}),`
`,(0,c.jsx)(t.h2,{id:`decision-drivers`,children:`Decision Drivers`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`We need to create wrappers to facilitate the reuse of modified Ionic components.`}),`
`,(0,c.jsx)(t.li,{children:`We need to create new components for our projects.`}),`
`,(0,c.jsx)(t.li,{children:`We need to use CSS variables as tokens to ensure consistency across projects.`}),`
`,(0,c.jsx)(t.li,{children:`We will only create new components if the Ionic components do not meet our needs.`}),`
`,(0,c.jsx)(t.li,{children:`We will only create a component once and use it across all projects.`}),`
`,(0,c.jsx)(t.li,{children:`We need a way to create new components and modify Ionic components without changing the Ionic codebase.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`decision`,children:`Decision`}),`
`,(0,c.jsxs)(t.p,{children:[`We have had positive experiences using our old Design System called `,(0,c.jsx)(t.a,{href:`https://github.com/juntossomosmais/venice`,rel:`nofollow`,children:`Venice`}),`, but in the past (2020), we encountered issues using Web Components in our projects. As a result, we decided to create React and Vue components separately and share the CSS code using the monorepo.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Another positive experience we had was using Material Design System across our projects. We typically used `,(0,c.jsx)(t.a,{href:`https://vuetifyjs.com/`,rel:`nofollow`,children:`Vuetify`}),` for Vue and `,(0,c.jsx)(t.a,{href:`https://material-ui.com/`,rel:`nofollow`,children:`Material UI`}),` for React, but we modified the components separately in each project, in the other words, we create the same components a lot of times.`]}),`
`,(0,c.jsxs)(t.p,{children:[`In 2023, we are using `,(0,c.jsx)(t.a,{href:`https://stenciljs.com/`,rel:`nofollow`,children:`Stencil`}),` to create the Web Components and `,(0,c.jsx)(t.a,{href:`https://ionicframework.com/`,rel:`nofollow`,children:`Ionic`}),` as our UI framework using Material Design. We will follow the same concept and architecture used in Venice for our new Design System.`]}),`
`,(0,c.jsx)(t.p,{children:`The new Design System will allow us to create a library of reusable components, which will make it easier to maintain consistency across all of our projects. We will create wrappers to make it easier to reuse modified Ionic components, and we will create new components as needed.`}),`
`,(0,c.jsx)(t.p,{children:`If the Ionic components do not solve our problems, we will create new components, but only when necessary. We will be able to create new components and modify the Ionic components without changing the Ionic codebase. This will allow us to make changes as needed without introducing unnecessary complexity.`}),`
`,(0,c.jsx)(t.p,{children:`To ensure consistency we will use tokens with CSS variables that can be shared across projects.`}),`
`,(0,c.jsx)(t.p,{children:`Overall, we believe that this architecture and approach will enable us to create a flexible, scalable, and consistent Design System that will serve us well for years to come.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=a(),i(),t()}))();export{s as default};
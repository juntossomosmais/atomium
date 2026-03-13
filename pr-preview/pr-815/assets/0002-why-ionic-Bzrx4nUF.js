import"./components-sxD-Pwkd.js";import{i as e}from"./chunk-YKABRMAI-rQu7s1e9.js";import"./react-DFKUFpG3.js";import"./chunk-242VQQM5-BH6EcrRQ.js";import{m as t,u as n}from"./iframe-Dm0EU4CU.js";var r=e();function i(e){let i={a:`a`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{title:`Docs/Architecture Decision Records/ADR 0002: Why Ionic?`}),`
`,(0,r.jsx)(i.h1,{id:`adr-0002-why-ionic`,children:`ADR 0002: Why Ionic?`}),`
`,(0,r.jsxs)(i.p,{children:[`🗓️ 2023-03 · ✍️ `,(0,r.jsx)(i.a,{href:`https://twitter.com/felipefialho_`,rel:`nofollow`,children:`@felipefialho`})]}),`
`,(0,r.jsx)(i.h2,{id:`context`,children:`Context`}),`
`,(0,r.jsx)(i.p,{children:`We need to choose a Material's framework UI to build our web components design system to avoid reinventing the wheel and focus on our business.`}),`
`,(0,r.jsx)(i.h2,{id:`decision-drivers`,children:`Decision Drivers`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:`We need to build UI components using web components`}),`
`,(0,r.jsx)(i.li,{children:`We need a framework with Material Design components`}),`
`,(0,r.jsx)(i.li,{children:`We need a complete suite of components`}),`
`,(0,r.jsx)(i.li,{children:`We need a framework that is easy to integrate with other frameworks`}),`
`,(0,r.jsx)(i.li,{children:`We need a framework with good documentation`}),`
`,(0,r.jsx)(i.li,{children:`We need a framework with a good community`}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:`considered-options`,children:`Considered Options`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.a,{href:`https://github.com/material-components/material-web`,rel:`nofollow`,children:`Material Web Components`})}),`: a web component library that implements the Material Design guidelines. It provides a set of pre-built components that can be used with any web framework. Material Web Components are built using modern web technologies and are designed to work across different platforms and browsers. However, it is still in beta version, and some components may not be available.`]}),`
`]}),`
`,(0,r.jsxs)(i.li,{children:[`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.a,{href:`https://getmdl.io/`,rel:`nofollow`,children:`Material Design Lite`})}),`: a front-end framework that implements Material Design guidelines. It provides a set of pre-built components and styles to help developers create web applications with a consistent look and feel. Material Design Lite is a lightweight framework that is easy to use and can be customized to fit the needs of different projects. However, it doesn't use web components, which may limit its compatibility with certain frameworks.`]}),`
`]}),`
`,(0,r.jsxs)(i.li,{children:[`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.a,{href:`https://ionicframework.com/`,rel:`nofollow`,children:`Ionic`})}),`: a complete framework for building hybrid mobile and web applications. It provides a set of pre-built UI components, tools, and services to help developers create high-quality applications faster and more efficiently. Ionic is based on Angular, but it can also be used with other frameworks like React and Vue. It uses web technologies like HTML, CSS, and JavaScript to create cross-platform applications that work on different devices and operating systems. Ionic has a large community and a well-documented API, making it a popular choice for developers. However, it may not be the best fit for projects that do not require a full-featured framework.`]}),`
`]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:`decision`,children:`Decision`}),`
`,(0,r.jsxs)(i.p,{children:[`After evaluating our options, we have decided to choose `,(0,r.jsx)(i.strong,{children:`Ionic as our Material's framework UI`}),` to build our web components design system. Ionic is a comprehensive framework that provides a complete suite of components designed to work seamlessly together. It also supports Material Design, making it an excellent choice for our needs.`]}),`
`,(0,r.jsx)(i.p,{children:`Ionic offers several benefits that align with our decision drivers. Firstly, it's easy to use and maintain, which will allow us to focus on our business needs instead of spending time dealing with framework issues. It also has a good community, so we can rely on their support if we encounter any problems. Additionally, Ionic is easy to customize, which will allow us to tailor the framework to our specific needs and branding. It also supports web components, which is a requirement for our design system.`}),`
`,(0,r.jsx)(i.p,{children:`Furthermore, Ionic is easy to integrate with other frameworks. This is important as we have existing projects that use different frameworks, and we need to ensure that our design system can be integrated into these projects seamlessly. Finally, Ionic has excellent documentation and a large community, which will make it easier for us to learn how to use the framework and find answers to our questions, which will allow us to onboard new team members quickly and ensure that everyone is using the framework correctly.`}),`
`,(0,r.jsx)(i.p,{children:`Overall, we believe that Ionic is the best choice for our needs, and we're confident that it will help us build a high-quality web components design system that aligns with Material Design.`})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};
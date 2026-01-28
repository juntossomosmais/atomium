import{u as o,j as e,M as s}from"./iframe-kKClsnpn.js";import"./preload-helper-PPVm8Dsz.js";function t(i){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Docs/Architecture Decision Records/ADR 0002: Why Ionic?"}),`
`,e.jsx(n.h1,{id:"adr-0002-why-ionic",children:"ADR 0002: Why Ionic?"}),`
`,e.jsxs(n.p,{children:["🗓️ 2023-03 · ✍️ ",e.jsx(n.a,{href:"https://twitter.com/felipefialho_",rel:"nofollow",children:"@felipefialho"})]}),`
`,e.jsx(n.h2,{id:"context",children:"Context"}),`
`,e.jsx(n.p,{children:"We need to choose a Material's framework UI to build our web components design system to avoid reinventing the wheel and focus on our business."}),`
`,e.jsx(n.h2,{id:"decision-drivers",children:"Decision Drivers"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"We need to build UI components using web components"}),`
`,e.jsx(n.li,{children:"We need a framework with Material Design components"}),`
`,e.jsx(n.li,{children:"We need a complete suite of components"}),`
`,e.jsx(n.li,{children:"We need a framework that is easy to integrate with other frameworks"}),`
`,e.jsx(n.li,{children:"We need a framework with good documentation"}),`
`,e.jsx(n.li,{children:"We need a framework with a good community"}),`
`]}),`
`,e.jsx(n.h2,{id:"considered-options",children:"Considered Options"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://github.com/material-components/material-web",rel:"nofollow",children:"Material Web Components"})}),": a web component library that implements the Material Design guidelines. It provides a set of pre-built components that can be used with any web framework. Material Web Components are built using modern web technologies and are designed to work across different platforms and browsers. However, it is still in beta version, and some components may not be available."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://getmdl.io/",rel:"nofollow",children:"Material Design Lite"})}),": a front-end framework that implements Material Design guidelines. It provides a set of pre-built components and styles to help developers create web applications with a consistent look and feel. Material Design Lite is a lightweight framework that is easy to use and can be customized to fit the needs of different projects. However, it doesn't use web components, which may limit its compatibility with certain frameworks."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://ionicframework.com/",rel:"nofollow",children:"Ionic"})}),": a complete framework for building hybrid mobile and web applications. It provides a set of pre-built UI components, tools, and services to help developers create high-quality applications faster and more efficiently. Ionic is based on Angular, but it can also be used with other frameworks like React and Vue. It uses web technologies like HTML, CSS, and JavaScript to create cross-platform applications that work on different devices and operating systems. Ionic has a large community and a well-documented API, making it a popular choice for developers. However, it may not be the best fit for projects that do not require a full-featured framework."]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"decision",children:"Decision"}),`
`,e.jsxs(n.p,{children:["After evaluating our options, we have decided to choose ",e.jsx(n.strong,{children:"Ionic as our Material's framework UI"})," to build our web components design system. Ionic is a comprehensive framework that provides a complete suite of components designed to work seamlessly together. It also supports Material Design, making it an excellent choice for our needs."]}),`
`,e.jsx(n.p,{children:"Ionic offers several benefits that align with our decision drivers. Firstly, it's easy to use and maintain, which will allow us to focus on our business needs instead of spending time dealing with framework issues. It also has a good community, so we can rely on their support if we encounter any problems. Additionally, Ionic is easy to customize, which will allow us to tailor the framework to our specific needs and branding. It also supports web components, which is a requirement for our design system."}),`
`,e.jsx(n.p,{children:"Furthermore, Ionic is easy to integrate with other frameworks. This is important as we have existing projects that use different frameworks, and we need to ensure that our design system can be integrated into these projects seamlessly. Finally, Ionic has excellent documentation and a large community, which will make it easier for us to learn how to use the framework and find answers to our questions, which will allow us to onboard new team members quickly and ensure that everyone is using the framework correctly."}),`
`,e.jsx(n.p,{children:"Overall, we believe that Ionic is the best choice for our needs, and we're confident that it will help us build a high-quality web components design system that aligns with Material Design."})]})}function l(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{l as default};

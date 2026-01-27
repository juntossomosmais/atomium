import{u as i,j as e,M as t}from"./iframe-kKClsnpn.js";import"./preload-helper-PPVm8Dsz.js";function o(s){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Docs/Architecture Decision Records/ADR 0011: Why host our own icon library and why CDN?"}),`
`,e.jsx(n.h1,{id:"adr-0011-why-host-our-own-icon-library-and-why-cdn",children:"ADR 0011: Why host our own icon library and why CDN?"}),`
`,e.jsxs(n.p,{children:["🗓️ 2023-07 · ✍️ ",e.jsx(n.a,{href:"https://twitter.com/mauriciomutte",rel:"nofollow",children:"@mauriciomutte"})]}),`
`,e.jsx(n.h2,{id:"context",children:"Context"}),`
`,e.jsx(n.p,{children:"The Design System uses Web Components to be framework-agnostic. This means that the icons must also be served in a framework-agnostic way. This is important because the Design System is designed to ensure visual consistency across all products, including the icons."}),`
`,e.jsx(n.p,{children:"We use Material Design Icons as our icon library, but we also have our own custom icons. We need to find a way to serve both of these icon sets in a framework-agnostic way."}),`
`,e.jsx(n.h2,{id:"decision-drivers",children:"Decision Drivers"}),`
`,e.jsx(n.p,{children:"The following factors were considered when making the decision about how to serve icons:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Framework agnostic:"})," The icons must be able to be used in any framework or technology."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Consistency:"})," The icons must have a consistent look across all products."]}),`
`]}),`
`,e.jsx(n.h2,{id:"considered-options",children:"Considered Options"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use Ionic Icons library:"})," This would be a good option because the Ionic Icons library is built with Web Components and is easy to use. However, the Ionic Icons library does not contain all of the icons that we need."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Publish an icon library:"})," This would be a very good option because it would ensure that we have access to all of the icons that we need. However, it would be a significant amount of work to create and maintain a published library."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use icons from CDN:"})," We already have a CDN infrastructure in place to serve our static assets. We can use this infrastructure to serve our icons in a framework-agnostic way."]}),`
`]}),`
`,e.jsx(n.h2,{id:"decision",children:"Decision"}),`
`,e.jsx(n.p,{children:"We have decided to use Ionic components as our default component library. Ionic has a built-in icon component that is based on Web Components and can download and render SVGs from a CDN."}),`
`,e.jsx(n.p,{children:"We already have a CDN infrastructure in place to serve our static assets. This infrastructure can be used to serve our icons in a framework-agnostic way."}),`
`,e.jsx(n.p,{children:"To make it easy to manage and deploy our icons, we will create a package that includes a list of SVGs. This package will be uploaded to the CDN through our CI/CD pipeline."})]})}function c(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{c as default};

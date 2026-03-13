import{S as e,l as t,w as n}from"./storybook-CfikGCXO.js";var r=n();function i(n){let i={a:`a`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{title:`Docs/Architecture Decision Records/ADR 0011: Why host our own icon library and why CDN?`}),`
`,(0,r.jsx)(i.h1,{id:`adr-0011-why-host-our-own-icon-library-and-why-cdn`,children:`ADR 0011: Why host our own icon library and why CDN?`}),`
`,(0,r.jsxs)(i.p,{children:[`🗓️ 2023-07 · ✍️ `,(0,r.jsx)(i.a,{href:`https://twitter.com/mauriciomutte`,rel:`nofollow`,children:`@mauriciomutte`})]}),`
`,(0,r.jsx)(i.h2,{id:`context`,children:`Context`}),`
`,(0,r.jsx)(i.p,{children:`The Design System uses Web Components to be framework-agnostic. This means that the icons must also be served in a framework-agnostic way. This is important because the Design System is designed to ensure visual consistency across all products, including the icons.`}),`
`,(0,r.jsx)(i.p,{children:`We use Material Design Icons as our icon library, but we also have our own custom icons. We need to find a way to serve both of these icon sets in a framework-agnostic way.`}),`
`,(0,r.jsx)(i.h2,{id:`decision-drivers`,children:`Decision Drivers`}),`
`,(0,r.jsx)(i.p,{children:`The following factors were considered when making the decision about how to serve icons:`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`Framework agnostic:`}),` The icons must be able to be used in any framework or technology.`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`Consistency:`}),` The icons must have a consistent look across all products.`]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:`considered-options`,children:`Considered Options`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`Use Ionic Icons library:`}),` This would be a good option because the Ionic Icons library is built with Web Components and is easy to use. However, the Ionic Icons library does not contain all of the icons that we need.`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`Publish an icon library:`}),` This would be a very good option because it would ensure that we have access to all of the icons that we need. However, it would be a significant amount of work to create and maintain a published library.`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`Use icons from CDN:`}),` We already have a CDN infrastructure in place to serve our static assets. We can use this infrastructure to serve our icons in a framework-agnostic way.`]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:`decision`,children:`Decision`}),`
`,(0,r.jsx)(i.p,{children:`We have decided to use Ionic components as our default component library. Ionic has a built-in icon component that is based on Web Components and can download and render SVGs from a CDN.`}),`
`,(0,r.jsx)(i.p,{children:`We already have a CDN infrastructure in place to serve our static assets. This infrastructure can be used to serve our icons in a framework-agnostic way.`}),`
`,(0,r.jsx)(i.p,{children:`To make it easy to manage and deploy our icons, we will create a package that includes a list of SVGs. This package will be uploaded to the CDN through our CI/CD pipeline.`})]})}function a(t={}){let{wrapper:n}={...e(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(i,{...t})}):i(t)}export{a as default};
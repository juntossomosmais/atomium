import{u as s,j as e,M as i}from"./iframe-BElrKgc3.js";import"./preload-helper-PPVm8Dsz.js";function t(o){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Docs/Architecture Decision Records/ADR 0001: Why Web Components?"}),`
`,e.jsx(n.h1,{id:"adr-0001-why-web-components",children:"ADR 0001: Why Web Components?"}),`
`,e.jsxs(n.p,{children:["🗓️ 2023-03 · ✍️ ",e.jsx(n.a,{href:"https://twitter.com/felipefialho_",rel:"nofollow",children:"@felipefialho"})]}),`
`,e.jsx(n.h2,{id:"context",children:"Context"}),`
`,e.jsx(n.p,{children:"We need to decide which technology and architecture to use for building components for our new design system."}),`
`,e.jsx(n.h2,{id:"decision-drivers",children:"Decision Drivers"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Reusability: We need our components to be reusable across different projects."}),`
`,e.jsx(n.li,{children:"Framework agnostic: We need our components to be usable in different frameworks, such as React, Vue, and Angular."}),`
`,e.jsx(n.li,{children:"Platform agnostic: We need our components to be usable on different platforms, such as web, mobile, and desktop."}),`
`,e.jsx(n.li,{children:"Device agnostic: We need our components to be usable on different devices, such as desktops, laptops, tablets, and mobile phones."}),`
`,e.jsx(n.li,{children:"Browser compatibility: We need our components to work on different browsers, such as Chrome, Firefox, Safari, and Edge."}),`
`]}),`
`,e.jsx(n.h2,{id:"decision",children:"Decision"}),`
`,e.jsxs(n.p,{children:["After carefully evaluating our options, we have concluded that ",e.jsx(n.strong,{children:"Web Components"})," provide the most suitable solution for building our components. Web Components offer a framework-agnostic approach, enabling us to build reusable components that can be used across different platforms and devices, and work seamlessly across different browsers. Moreover, features to support Web Components are being added to the HTML and DOM specs, which will make it easier for us to extend HTML with new elements with encapsulated styling and custom behavior."]}),`
`,e.jsx(n.p,{children:"One of the advantages of using Web Components is that they enjoy broad browser support, with 100% of modern browsers supporting the technology. This makes it a reliable and consistent technology for building our components."}),`
`,e.jsx(n.p,{children:"Finally, it's worth noting that Web Components are a W3C standard, which gives us confidence in the technology's long-term viability. Overall, we believe that Web Components provide a solid foundation for building our components, both now and in the future."})]})}function c(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{c as default};

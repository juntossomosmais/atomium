import"./components-sxD-Pwkd.js";import{i as e}from"./chunk-YKABRMAI-rQu7s1e9.js";import"./react-DFKUFpG3.js";import"./chunk-242VQQM5-BH6EcrRQ.js";import{m as t,u as n}from"./iframe-D71TlG5e.js";var r=e();function i(e){let i={a:`a`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{title:`Docs/Architecture Decision Records/ADR 0001: Why Web Components?`}),`
`,(0,r.jsx)(i.h1,{id:`adr-0001-why-web-components`,children:`ADR 0001: Why Web Components?`}),`
`,(0,r.jsxs)(i.p,{children:[`🗓️ 2023-03 · ✍️ `,(0,r.jsx)(i.a,{href:`https://twitter.com/felipefialho_`,rel:`nofollow`,children:`@felipefialho`})]}),`
`,(0,r.jsx)(i.h2,{id:`context`,children:`Context`}),`
`,(0,r.jsx)(i.p,{children:`We need to decide which technology and architecture to use for building components for our new design system.`}),`
`,(0,r.jsx)(i.h2,{id:`decision-drivers`,children:`Decision Drivers`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:`Reusability: We need our components to be reusable across different projects.`}),`
`,(0,r.jsx)(i.li,{children:`Framework agnostic: We need our components to be usable in different frameworks, such as React, Vue, and Angular.`}),`
`,(0,r.jsx)(i.li,{children:`Platform agnostic: We need our components to be usable on different platforms, such as web, mobile, and desktop.`}),`
`,(0,r.jsx)(i.li,{children:`Device agnostic: We need our components to be usable on different devices, such as desktops, laptops, tablets, and mobile phones.`}),`
`,(0,r.jsx)(i.li,{children:`Browser compatibility: We need our components to work on different browsers, such as Chrome, Firefox, Safari, and Edge.`}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:`decision`,children:`Decision`}),`
`,(0,r.jsxs)(i.p,{children:[`After carefully evaluating our options, we have concluded that `,(0,r.jsx)(i.strong,{children:`Web Components`}),` provide the most suitable solution for building our components. Web Components offer a framework-agnostic approach, enabling us to build reusable components that can be used across different platforms and devices, and work seamlessly across different browsers. Moreover, features to support Web Components are being added to the HTML and DOM specs, which will make it easier for us to extend HTML with new elements with encapsulated styling and custom behavior.`]}),`
`,(0,r.jsx)(i.p,{children:`One of the advantages of using Web Components is that they enjoy broad browser support, with 100% of modern browsers supporting the technology. This makes it a reliable and consistent technology for building our components.`}),`
`,(0,r.jsx)(i.p,{children:`Finally, it's worth noting that Web Components are a W3C standard, which gives us confidence in the technology's long-term viability. Overall, we believe that Web Components provide a solid foundation for building our components, both now and in the future.`})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};
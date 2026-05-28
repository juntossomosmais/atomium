import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{D as t,G as n,T as r,U as i,q as a}from"./storybook-Zaq70kOf.js";function o(e){let t={a:`a`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Docs/Architecture Decision Records/ADR 0001: Why Web Components?`}),`
`,(0,c.jsx)(t.h1,{id:`adr-0001-why-web-components`,children:`ADR 0001: Why Web Components?`}),`
`,(0,c.jsxs)(t.p,{children:[`🗓️ 2023-03 · ✍️ `,(0,c.jsx)(t.a,{href:`https://twitter.com/felipefialho_`,rel:`nofollow`,children:`@felipefialho`})]}),`
`,(0,c.jsx)(t.h2,{id:`context`,children:`Context`}),`
`,(0,c.jsx)(t.p,{children:`We need to decide which technology and architecture to use for building components for our new design system.`}),`
`,(0,c.jsx)(t.h2,{id:`decision-drivers`,children:`Decision Drivers`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Reusability: We need our components to be reusable across different projects.`}),`
`,(0,c.jsx)(t.li,{children:`Framework agnostic: We need our components to be usable in different frameworks, such as React, Vue, and Angular.`}),`
`,(0,c.jsx)(t.li,{children:`Platform agnostic: We need our components to be usable on different platforms, such as web, mobile, and desktop.`}),`
`,(0,c.jsx)(t.li,{children:`Device agnostic: We need our components to be usable on different devices, such as desktops, laptops, tablets, and mobile phones.`}),`
`,(0,c.jsx)(t.li,{children:`Browser compatibility: We need our components to work on different browsers, such as Chrome, Firefox, Safari, and Edge.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`decision`,children:`Decision`}),`
`,(0,c.jsxs)(t.p,{children:[`After carefully evaluating our options, we have concluded that `,(0,c.jsx)(t.strong,{children:`Web Components`}),` provide the most suitable solution for building our components. Web Components offer a framework-agnostic approach, enabling us to build reusable components that can be used across different platforms and devices, and work seamlessly across different browsers. Moreover, features to support Web Components are being added to the HTML and DOM specs, which will make it easier for us to extend HTML with new elements with encapsulated styling and custom behavior.`]}),`
`,(0,c.jsx)(t.p,{children:`One of the advantages of using Web Components is that they enjoy broad browser support, with 100% of modern browsers supporting the technology. This makes it a reliable and consistent technology for building our components.`}),`
`,(0,c.jsx)(t.p,{children:`Finally, it's worth noting that Web Components are a W3C standard, which gives us confidence in the technology's long-term viability. Overall, we believe that Web Components provide a solid foundation for building our components, both now and in the future.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=a(),i(),t()}))();export{s as default};
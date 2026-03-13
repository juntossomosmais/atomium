import"./components-sxD-Pwkd.js";import{i as e}from"./chunk-YKABRMAI-rQu7s1e9.js";import"./react-DFKUFpG3.js";import"./chunk-242VQQM5-BH6EcrRQ.js";import{m as t,u as n}from"./iframe-D71TlG5e.js";var r=e();function i(e){let i={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{title:`Docs/Architecture Decision Records/ADR 0014: Why PopperJS`}),`
`,(0,r.jsx)(i.h1,{id:`adr-0014-why-popperjs`,children:`ADR 0014: Why PopperJS`}),`
`,(0,r.jsxs)(i.p,{children:[`🗓️ 2024-11 · ✍️ `,(0,r.jsx)(i.a,{href:`https://github.com/igorwessel`,rel:`nofollow`,children:`@igorwessel`})]}),`
`,(0,r.jsx)(i.h2,{id:`context`,children:`Context`}),`
`,(0,r.jsxs)(i.p,{children:[`It was necessary due to the complexity of modifying the `,(0,r.jsx)(i.code,{children:`ion-popover`}),` to meet the tooltip requirements. This involved many changes to the `,(0,r.jsx)(i.code,{children:`ion-popover`}),` component to make it behave like a tooltip.`]}),`
`,(0,r.jsx)(i.h2,{id:`problems`,children:`Problems`}),`
`,(0,r.jsx)(i.p,{children:`These changes included things like:`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[`Removing a class that locks the scroll on the site (added to the body) when using the `,(0,r.jsx)(i.code,{children:`ion-popover`}),`;`]}),`
`,(0,r.jsx)(i.li,{children:`Adding scroll tracking;`}),`
`,(0,r.jsx)(i.li,{children:`Ensuring responsiveness in terms of automatically changing side/direction.`}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:`decision-drivers`,children:`Decision Drivers`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:`Bundle Size: The size of the library was considered. If the size was too large, it would be a NO-GO for inclusion in the project. As the entire library currently (2024/11/05) only 8.9KB, we understood that the size would not negatively impact the user experience;`}),`
`,(0,r.jsx)(i.li,{children:`Popularity and Maintenance: PopperJS is the most well-known library for handling this type of work. Many libraries that implement some type of "popper" use it to provide this functionality.`}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:`decision`,children:`Decision`}),`
`,(0,r.jsx)(i.p,{children:`Based on this, we understood that it does not make sense to spend effort recreating many of the functionalities that PopperJS offers. Given that the library size is small, we decided to add the library to the project to implement our tooltip.`})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};
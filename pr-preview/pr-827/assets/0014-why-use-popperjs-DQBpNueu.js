import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{D as t,T as n,k as r,l as i,s as a}from"./storybook-C7ONeEzR.js";function o(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`Docs/Architecture Decision Records/ADR 0014: Why PopperJS`}),`
`,(0,c.jsx)(n.h1,{id:`adr-0014-why-popperjs`,children:`ADR 0014: Why PopperJS`}),`
`,(0,c.jsxs)(n.p,{children:[`🗓️ 2024-11 · ✍️ `,(0,c.jsx)(n.a,{href:`https://github.com/igorwessel`,rel:`nofollow`,children:`@igorwessel`})]}),`
`,(0,c.jsx)(n.h2,{id:`context`,children:`Context`}),`
`,(0,c.jsxs)(n.p,{children:[`It was necessary due to the complexity of modifying the `,(0,c.jsx)(n.code,{children:`ion-popover`}),` to meet the tooltip requirements. This involved many changes to the `,(0,c.jsx)(n.code,{children:`ion-popover`}),` component to make it behave like a tooltip.`]}),`
`,(0,c.jsx)(n.h2,{id:`problems`,children:`Problems`}),`
`,(0,c.jsx)(n.p,{children:`These changes included things like:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Removing a class that locks the scroll on the site (added to the body) when using the `,(0,c.jsx)(n.code,{children:`ion-popover`}),`;`]}),`
`,(0,c.jsx)(n.li,{children:`Adding scroll tracking;`}),`
`,(0,c.jsx)(n.li,{children:`Ensuring responsiveness in terms of automatically changing side/direction.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`decision-drivers`,children:`Decision Drivers`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Bundle Size: The size of the library was considered. If the size was too large, it would be a NO-GO for inclusion in the project. As the entire library currently (2024/11/05) only 8.9KB, we understood that the size would not negatively impact the user experience;`}),`
`,(0,c.jsx)(n.li,{children:`Popularity and Maintenance: PopperJS is the most well-known library for handling this type of work. Many libraries that implement some type of "popper" use it to provide this functionality.`}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`decision`,children:`Decision`}),`
`,(0,c.jsx)(n.p,{children:`Based on this, we understood that it does not make sense to spend effort recreating many of the functionalities that PopperJS offers. Given that the library size is small, we decided to add the library to the project to implement our tooltip.`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),n(),i()}))();export{s as default};
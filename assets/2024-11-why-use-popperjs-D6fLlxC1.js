import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{D as t,G as n,T as r,U as i,q as a}from"./storybook-DZfjrrNX.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Docs/Architecture Decision Records/2024-11: Why PopperJS`}),`
`,(0,c.jsx)(t.h1,{id:`2024-11-why-popperjs`,children:`2024-11: Why PopperJS`}),`
`,(0,c.jsxs)(t.p,{children:[`🗓️ 2024-11 · ✍️ `,(0,c.jsx)(t.a,{href:`https://github.com/igorwessel`,rel:`nofollow`,children:`@igorwessel`})]}),`
`,(0,c.jsx)(t.h2,{id:`context`,children:`Context`}),`
`,(0,c.jsxs)(t.p,{children:[`It was necessary due to the complexity of modifying the `,(0,c.jsx)(t.code,{children:`ion-popover`}),` to meet the tooltip requirements. This involved many changes to the `,(0,c.jsx)(t.code,{children:`ion-popover`}),` component to make it behave like a tooltip.`]}),`
`,(0,c.jsx)(t.h2,{id:`problems`,children:`Problems`}),`
`,(0,c.jsx)(t.p,{children:`These changes included things like:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Removing a class that locks the scroll on the site (added to the body) when using the `,(0,c.jsx)(t.code,{children:`ion-popover`}),`;`]}),`
`,(0,c.jsx)(t.li,{children:`Adding scroll tracking;`}),`
`,(0,c.jsx)(t.li,{children:`Ensuring responsiveness in terms of automatically changing side/direction.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`decision-drivers`,children:`Decision Drivers`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Bundle Size: The size of the library was considered. If the size was too large, it would be a NO-GO for inclusion in the project. As the entire library currently (2024/11/05) only 8.9KB, we understood that the size would not negatively impact the user experience;`}),`
`,(0,c.jsx)(t.li,{children:`Popularity and Maintenance: PopperJS is the most well-known library for handling this type of work. Many libraries that implement some type of "popper" use it to provide this functionality.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`decision`,children:`Decision`}),`
`,(0,c.jsx)(t.p,{children:`Based on this, we understood that it does not make sense to spend effort recreating many of the functionalities that PopperJS offers. Given that the library size is small, we decided to add the library to the project to implement our tooltip.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=a(),i(),t()}))();export{s as default};
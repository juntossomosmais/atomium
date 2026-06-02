import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{D as t,G as n,T as r,U as i,q as a}from"./storybook-DZfjrrNX.js";import{n as o,t as s}from"./Table-lP-wEEJr.js";import{n as c,r as l,t as u}from"./Box-jIxlfQ-l.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,strong:`strong`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{title:`Tokens/Misc`}),`
`,(0,p.jsx)(t.h1,{id:`miscellaneous`,children:`Miscellaneous`}),`
`,(0,p.jsx)(t.h2,{id:`border-radius`,children:`border-radius`}),`
`,(0,p.jsx)(t.p,{children:`In our Design System, most components have rounded edges. Depending on the size of the component, this rounding can vary between 4px, 8px, 12px and fully rounded.`}),`
`,(0,p.jsx)(t.h3,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(s,{headers:[`Variable`,`Value`,`Description`],rows:[[`var(--border-radius)`,`4px`,`Used in smaller components like tooltips, alerts, text fields.`],[`var(--border-radius-medium)`,`8px`,`Used in larger components like dialogs, cards and dropdown menu.`],[`var(--border-radius-large)`,`12px`,`Depending on the context, this border radius can also be used on larger components like cards and images.`],[`var(--border-radius-full)`,`50%`,`The fully rounded edge is used for specific components like buttons, badges and avatars.`]]}),`
`,(0,p.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,p.jsxs)(t.p,{children:[`This token must be used `,(0,p.jsx)(t.strong,{children:`only`}),` with `,(0,p.jsx)(t.code,{children:`border-radius`}),` CSS property.`]}),`
`,(0,p.jsx)(t.h3,{id:`example`,children:`Example`}),`
`,(0,p.jsxs)(c,{children:[(0,p.jsx)(u,{borderRadius:`var(--border-radius)`}),(0,p.jsx)(u,{borderRadius:`var(--border-radius-medium)`}),(0,p.jsx)(u,{borderRadius:`var(--border-radius-large)`}),(0,p.jsx)(u,{borderRadius:`var(--border-radius-full)`})]}),`
`,(0,p.jsx)(t.h2,{id:`transition-duration`,children:`transition-duration`}),`
`,(0,p.jsxs)(t.p,{children:[`The default `,(0,p.jsx)(t.code,{children:`transition-duration`}),` for all transitions`]}),`
`,(0,p.jsx)(s,{headers:[`Variable`,`Value`],rows:[[`var(--transition-duration)`,`0.25s`]]}),`
`,(0,p.jsx)(t.h2,{id:`z-index`,children:`z-index`}),`
`,(0,p.jsxs)(t.p,{children:[`All `,(0,p.jsx)(t.code,{children:`z-index`}),` variables to keep consistency`]}),`
`,(0,p.jsx)(s,{headers:[`Variable`,`Value`],rows:[[1,`var(--zindex-1)`],[10,`var(--zindex-100)`],[100,`var(--zindex-100)`],[1e3,`var(--zindex-1000)`],[1e4,`var(--zindex-overlay)`]]})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=a(),i(),t(),l(),o()}))();export{f as default};
import"./components-sxD-Pwkd.js";import{i as e}from"./chunk-YKABRMAI-rQu7s1e9.js";import"./react-DFKUFpG3.js";import"./chunk-242VQQM5-BH6EcrRQ.js";import{m as t,u as n}from"./iframe-Dm0EU4CU.js";import{t as r}from"./Table-DxtczWVa.js";import{n as i,t as a}from"./Box-BIimqu8U.js";var o=e();function s(e){let s={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,strong:`strong`,...t(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{title:`Tokens/Misc`}),`
`,(0,o.jsx)(s.h1,{id:`miscellaneous`,children:`Miscellaneous`}),`
`,(0,o.jsx)(s.h2,{id:`border-radius`,children:`border-radius`}),`
`,(0,o.jsx)(s.p,{children:`In our Design System, most components have rounded edges. Depending on the size of the component, this rounding can vary between 4px, 8px, 12px and fully rounded.`}),`
`,(0,o.jsx)(s.h3,{id:`variants`,children:`Variants`}),`
`,(0,o.jsx)(r,{headers:[`Variable`,`Value`,`Description`],rows:[[`var(--border-radius)`,`4px`,`Used in smaller components like tooltips, alerts, text fields.`],[`var(--border-radius-medium)`,`8px`,`Used in larger components like dialogs, cards and dropdown menu.`],[`var(--border-radius-large)`,`12px`,`Depending on the context, this border radius can also be used on larger components like cards and images.`],[`var(--border-radius-full)`,`50%`,`The fully rounded edge is used for specific components like buttons, badges and avatars.`]]}),`
`,(0,o.jsx)(s.h3,{id:`usage`,children:`Usage`}),`
`,(0,o.jsxs)(s.p,{children:[`This token must be used `,(0,o.jsx)(s.strong,{children:`only`}),` with `,(0,o.jsx)(s.code,{children:`border-radius`}),` CSS property.`]}),`
`,(0,o.jsx)(s.h3,{id:`example`,children:`Example`}),`
`,(0,o.jsxs)(i,{children:[(0,o.jsx)(a,{borderRadius:`var(--border-radius)`}),(0,o.jsx)(a,{borderRadius:`var(--border-radius-medium)`}),(0,o.jsx)(a,{borderRadius:`var(--border-radius-large)`}),(0,o.jsx)(a,{borderRadius:`var(--border-radius-full)`})]}),`
`,(0,o.jsx)(s.h2,{id:`transition-duration`,children:`transition-duration`}),`
`,(0,o.jsxs)(s.p,{children:[`The default `,(0,o.jsx)(s.code,{children:`transition-duration`}),` for all transitions`]}),`
`,(0,o.jsx)(r,{headers:[`Variable`,`Value`],rows:[[`var(--transition-duration)`,`0.25s`]]}),`
`,(0,o.jsx)(s.h2,{id:`z-index`,children:`z-index`}),`
`,(0,o.jsxs)(s.p,{children:[`All `,(0,o.jsx)(s.code,{children:`z-index`}),` variables to keep consistency`]}),`
`,(0,o.jsx)(r,{headers:[`Variable`,`Value`],rows:[[1,`var(--zindex-1)`],[10,`var(--zindex-100)`],[100,`var(--zindex-100)`],[1e3,`var(--zindex-1000)`],[1e4,`var(--zindex-overlay)`]]})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}export{c as default};
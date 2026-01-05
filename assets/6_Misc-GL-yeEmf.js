import{u as a,j as e,M as o}from"./iframe-BElrKgc3.js";import{B as t,a as s}from"./Box-x4scTR7P.js";import{T as d}from"./Table-DBovkHPu.js";import"./preload-helper-PPVm8Dsz.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Tokens/Misc"}),`
`,e.jsx(r.h1,{id:"miscellaneous",children:"Miscellaneous"}),`
`,e.jsx(r.h2,{id:"border-radius",children:"border-radius"}),`
`,e.jsx(r.p,{children:"In our Design System, most components have rounded edges. Depending on the size of the component, this rounding can vary between 4px, 8px, 12px and fully rounded."}),`
`,e.jsx(r.h3,{id:"variants",children:"Variants"}),`
`,e.jsx(d,{headers:["Variable","Value","Description"],rows:[["var(--border-radius)","4px","Used in smaller components like tooltips, alerts, text fields."],["var(--border-radius-medium)","8px","Used in larger components like dialogs, cards and dropdown menu."],["var(--border-radius-large)","12px","Depending on the context, this border radius can also be used on larger components like cards and images."],["var(--border-radius-full)","50%","The fully rounded edge is used for specific components like buttons, badges and avatars."]]}),`
`,e.jsx(r.h3,{id:"usage",children:"Usage"}),`
`,e.jsxs(r.p,{children:["This token must be used ",e.jsx(r.strong,{children:"only"})," with ",e.jsx(r.code,{children:"border-radius"})," CSS property."]}),`
`,e.jsx(r.h3,{id:"example",children:"Example"}),`
`,e.jsxs(t,{children:[e.jsx(s,{borderRadius:"var(--border-radius)"}),e.jsx(s,{borderRadius:"var(--border-radius-medium)"}),e.jsx(s,{borderRadius:"var(--border-radius-large)"}),e.jsx(s,{borderRadius:"var(--border-radius-full)"})]}),`
`,e.jsx(r.h2,{id:"transition-duration",children:"transition-duration"}),`
`,e.jsxs(r.p,{children:["The default ",e.jsx(r.code,{children:"transition-duration"})," for all transitions"]}),`
`,e.jsx(d,{headers:["Variable","Value"],rows:[["var(--transition-duration)","0.25s"]]}),`
`,e.jsx(r.h2,{id:"z-index",children:"z-index"}),`
`,e.jsxs(r.p,{children:["All ",e.jsx(r.code,{children:"z-index"})," variables to keep consistency"]}),`
`,e.jsx(d,{headers:["Variable","Value"],rows:[[1,"var(--zindex-1)"],[10,"var(--zindex-100)"],[100,"var(--zindex-100)"],[1e3,"var(--zindex-1000)"],[1e4,"var(--zindex-overlay)"]]})]})}function h(n={}){const{wrapper:r}={...a(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{h as default};

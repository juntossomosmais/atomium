import{u as o,j as e,M as s}from"./iframe-Csm4GGMy.js";import"./preload-helper-PPVm8Dsz.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Docs/Architecture Decision Records/ADR 0014: Why PopperJS"}),`
`,e.jsx(n.h1,{id:"adr-0014-why-popperjs",children:"ADR 0014: Why PopperJS"}),`
`,e.jsxs(n.p,{children:["🗓️ 2024-11 · ✍️ ",e.jsx(n.a,{href:"https://github.com/igorwessel",rel:"nofollow",children:"@igorwessel"})]}),`
`,e.jsx(n.h2,{id:"context",children:"Context"}),`
`,e.jsxs(n.p,{children:["It was necessary due to the complexity of modifying the ",e.jsx(n.code,{children:"ion-popover"})," to meet the tooltip requirements. This involved many changes to the ",e.jsx(n.code,{children:"ion-popover"})," component to make it behave like a tooltip."]}),`
`,e.jsx(n.h2,{id:"problems",children:"Problems"}),`
`,e.jsx(n.p,{children:"These changes included things like:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Removing a class that locks the scroll on the site (added to the body) when using the ",e.jsx(n.code,{children:"ion-popover"}),";"]}),`
`,e.jsx(n.li,{children:"Adding scroll tracking;"}),`
`,e.jsx(n.li,{children:"Ensuring responsiveness in terms of automatically changing side/direction."}),`
`]}),`
`,e.jsx(n.h2,{id:"decision-drivers",children:"Decision Drivers"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Bundle Size: The size of the library was considered. If the size was too large, it would be a NO-GO for inclusion in the project. As the entire library currently (2024/11/05) only 8.9KB, we understood that the size would not negatively impact the user experience;"}),`
`,e.jsx(n.li,{children:'Popularity and Maintenance: PopperJS is the most well-known library for handling this type of work. Many libraries that implement some type of "popper" use it to provide this functionality.'}),`
`]}),`
`,e.jsx(n.h2,{id:"decision",children:"Decision"}),`
`,e.jsx(n.p,{children:"Based on this, we understood that it does not make sense to spend effort recreating many of the functionalities that PopperJS offers. Given that the library size is small, we decided to add the library to the project to implement our tooltip."})]})}function h(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{h as default};

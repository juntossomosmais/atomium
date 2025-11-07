import{u as a,j as e,M as t}from"./iframe-Blq1RBz-.js";import"./preload-helper-PPVm8Dsz.js";function i(o){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Docs/Architecture Decision Records/ADR 0004: Why a Monorepo?"}),`
`,e.jsx(n.h1,{id:"adr-0004-why-a-monorepo",children:"ADR 0004: Why a Monorepo?"}),`
`,e.jsxs(n.p,{children:["🗓️ 2023-03 · ✍️ ",e.jsx(n.a,{href:"https://twitter.com/felipefialho_",rel:"nofollow",children:"@felipefialho"})]}),`
`,e.jsx(n.h2,{id:"context",children:"Context"}),`
`,e.jsx(n.p,{children:"We need to choose an architecture for our project that enables us to efficiently manage our codebase and share resources between packages."}),`
`,e.jsx(n.h2,{id:"decision-drivers",children:"Decision Drivers"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"We need to be able to independently version each package."}),`
`,e.jsx(n.li,{children:"We need to share code and configuration between packages."}),`
`,e.jsx(n.li,{children:"We need to share dependencies between packages."}),`
`,e.jsx(n.li,{children:"We need a centralized documentation for our Design System."}),`
`]}),`
`,e.jsx(n.h2,{id:"considered-options",children:"Considered Options"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://monorepo.tools/",rel:"nofollow",children:"Monorepo"})}),": A monorepo is a software development practice where multiple projects are stored in the same repository. In the context of a design system, this means that all the packages (e.g., UI components, typography, color scheme, etc.) are kept in a single repository and versioned together. This approach allows for easy sharing of code, configuration, and dependencies between packages, and provides a centralized location for documentation and tooling. It can also simplify the development workflow by enabling atomic commits, shared testing, and a unified deployment pipeline."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Separate Repositories"}),": This refers to the practice of keeping each package (e.g., UI components, typography, color scheme, etc.) in a separate repository. Each package has its own versioning and development lifecycle, and can be developed and deployed independently of the others. However, this approach can lead to code duplication, configuration fragmentation, and dependency management issues, especially if multiple packages need to share common code or dependencies. It also makes it harder to maintain a centralized documentation and tooling, as these would need to be replicated across multiple repositories."]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"decision",children:"Decision"}),`
`,e.jsxs(n.p,{children:["We have decided to use a ",e.jsx(n.strong,{children:"Monorepo as our architecture of choice"}),". With a Monorepo, we can easily share code, configuration, and dependencies between packages while also allowing for independent versioning of each package. Additionally, a Monorepo enables us to maintain a centralized documentation for our Design System."]}),`
`,e.jsx(n.p,{children:"In contrast, using separate repositories for each package and documentation would lead to duplication of code and configuration and make maintenance more difficult."}),`
`,e.jsx(n.p,{children:"Overall, a Monorepo aligns well with our needs for an efficient and scalable architecture."})]})}function c(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{c as default};

import{u as t,j as e,M as s}from"./iframe-Csm4GGMy.js";import"./preload-helper-PPVm8Dsz.js";function i(o){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Docs/Architecture Decision Records/ADR 0005: Why NX?"}),`
`,e.jsx(n.h1,{id:"adr-0005-why-nx",children:"ADR 0005: Why NX?"}),`
`,e.jsxs(n.p,{children:["🗓️ 2023-03 · ✍️ ",e.jsx(n.a,{href:"https://twitter.com/felipefialho_",rel:"nofollow",children:"@felipefialho"})]}),`
`,e.jsx(n.h2,{id:"context",children:"Context"}),`
`,e.jsx(n.p,{children:"We need to select a tool to help manage our monorepo for our design system."}),`
`,e.jsx(n.h2,{id:"decision-drivers",children:"Decision Drivers"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"We need a robust and well-tested tool."}),`
`,e.jsx(n.li,{children:"We require a tool with comprehensive documentation."}),`
`,e.jsx(n.li,{children:"We need a tool with a large and active community for long-term support."}),`
`,e.jsx(n.li,{children:"We need a tool that can integrate well with other essential tools like Storybook, Jest, Typescript, etc."}),`
`]}),`
`,e.jsx(n.h2,{id:"considered-options",children:"Considered Options"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://classic.yarnpkg.com/en/docs/workspaces/",rel:"nofollow",children:"Pnpm/Yarn Workspaces"})}),": A tool for managing JavaScript projects with multiple packages. It allows you to manage dependencies and run commands across packages in a monorepo, while still allowing each package to have its own version and dependencies. Both Pnpm and Yarn have been tested and widely used in the JavaScript community."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://lerna.js.org/",rel:"nofollow",children:"Lerna"})}),": A popular tool for managing JavaScript projects with multiple packages. It provides tools for managing versioning, publishing, and running commands across packages in a monorepo. It has a large community and is well-documented."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://turborepo.com/",rel:"nofollow",children:"Turborepo"})}),": A new tool for managing JavaScript projects with multiple packages. It provides features for fast and scalable builds, dependency management, and developer workflows in a monorepo. It's relatively new, but it has already received positive feedback from some developers."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://bit.dev/",rel:"nofollow",children:"Bit.dev"})}),": A platform for building, distributing, and collaborating on individual components. It allows you to share and reuse components across different projects and teams. It also has tools for managing dependencies and versioning, and it integrates with popular frameworks and tools like React, Vue, and Storybook."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://nx.dev/",rel:"nofollow",children:"NX"})}),": A set of extensible dev tools for monorepos. It provides features for managing dependencies, building and testing code, and generating code scaffolding. It also has plugins for popular frameworks like React, Angular, and Vue, and it integrates with popular tools like Jest and Cypress. It has a large and active community, and it's well-documented."]}),`
`]}),`
`,e.jsx(n.h2,{id:"decision",children:"Decision"}),`
`,e.jsxs(n.p,{children:["After carefully considering the available options, we have decided to use ",e.jsx(n.strong,{children:"NX as our tool for managing our monorepo"}),"."]}),`
`,e.jsx(n.p,{children:"We believe that NX is the best choice because of its proven reliability, extensive community support, and comprehensive documentation. Our positive experiences using NX in past internal projects also played a significant role in our decision. Furthermore, we appreciate NX's ability to seamlessly integrate with other important tools, making it an excellent fit for our needs."}),`
`,e.jsx(n.p,{children:"We are confident that choosing NX will help us manage our monorepo effectively and efficiently over the long term."})]})}function l(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{l as default};

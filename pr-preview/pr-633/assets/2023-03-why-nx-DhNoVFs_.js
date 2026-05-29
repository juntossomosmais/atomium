import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{D as t,G as n,T as r,U as i,q as a}from"./storybook-BXfsGf_B.js";function o(e){let t={a:`a`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Docs/Architecture Decision Records/2023-03: Why NX?`}),`
`,(0,c.jsx)(t.h1,{id:`2023-03-why-nx`,children:`2023-03: Why NX?`}),`
`,(0,c.jsxs)(t.p,{children:[`🗓️ 2023-03 · ✍️ `,(0,c.jsx)(t.a,{href:`https://twitter.com/felipefialho_`,rel:`nofollow`,children:`@felipefialho`})]}),`
`,(0,c.jsx)(t.h2,{id:`context`,children:`Context`}),`
`,(0,c.jsx)(t.p,{children:`We need to select a tool to help manage our monorepo for our design system.`}),`
`,(0,c.jsx)(t.h2,{id:`decision-drivers`,children:`Decision Drivers`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`We need a robust and well-tested tool.`}),`
`,(0,c.jsx)(t.li,{children:`We require a tool with comprehensive documentation.`}),`
`,(0,c.jsx)(t.li,{children:`We need a tool with a large and active community for long-term support.`}),`
`,(0,c.jsx)(t.li,{children:`We need a tool that can integrate well with other essential tools like Storybook, Jest, Typescript, etc.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`considered-options`,children:`Considered Options`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`https://classic.yarnpkg.com/en/docs/workspaces/`,rel:`nofollow`,children:`Pnpm/Yarn Workspaces`})}),`: A tool for managing JavaScript projects with multiple packages. It allows you to manage dependencies and run commands across packages in a monorepo, while still allowing each package to have its own version and dependencies. Both Pnpm and Yarn have been tested and widely used in the JavaScript community.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`https://lerna.js.org/`,rel:`nofollow`,children:`Lerna`})}),`: A popular tool for managing JavaScript projects with multiple packages. It provides tools for managing versioning, publishing, and running commands across packages in a monorepo. It has a large community and is well-documented.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`https://turborepo.com/`,rel:`nofollow`,children:`Turborepo`})}),`: A new tool for managing JavaScript projects with multiple packages. It provides features for fast and scalable builds, dependency management, and developer workflows in a monorepo. It's relatively new, but it has already received positive feedback from some developers.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`https://bit.dev/`,rel:`nofollow`,children:`Bit.dev`})}),`: A platform for building, distributing, and collaborating on individual components. It allows you to share and reuse components across different projects and teams. It also has tools for managing dependencies and versioning, and it integrates with popular frameworks and tools like React, Vue, and Storybook.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`https://nx.dev/`,rel:`nofollow`,children:`NX`})}),`: A set of extensible dev tools for monorepos. It provides features for managing dependencies, building and testing code, and generating code scaffolding. It also has plugins for popular frameworks like React, Angular, and Vue, and it integrates with popular tools like Jest and Cypress. It has a large and active community, and it's well-documented.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`decision`,children:`Decision`}),`
`,(0,c.jsxs)(t.p,{children:[`After carefully considering the available options, we have decided to use `,(0,c.jsx)(t.strong,{children:`NX as our tool for managing our monorepo`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`We believe that NX is the best choice because of its proven reliability, extensive community support, and comprehensive documentation. Our positive experiences using NX in past internal projects also played a significant role in our decision. Furthermore, we appreciate NX's ability to seamlessly integrate with other important tools, making it an excellent fit for our needs.`}),`
`,(0,c.jsx)(t.p,{children:`We are confident that choosing NX will help us manage our monorepo effectively and efficiently over the long term.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=a(),i(),t()}))();export{s as default};
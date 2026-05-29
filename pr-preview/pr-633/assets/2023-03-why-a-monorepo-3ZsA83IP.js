import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{D as t,G as n,T as r,U as i,q as a}from"./storybook-BXAm_t_n.js";function o(e){let t={a:`a`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Docs/Architecture Decision Records/2023-03: Why a Monorepo?`}),`
`,(0,c.jsx)(t.h1,{id:`2023-03-why-a-monorepo`,children:`2023-03: Why a Monorepo?`}),`
`,(0,c.jsxs)(t.p,{children:[`🗓️ 2023-03 · ✍️ `,(0,c.jsx)(t.a,{href:`https://twitter.com/felipefialho_`,rel:`nofollow`,children:`@felipefialho`})]}),`
`,(0,c.jsx)(t.h2,{id:`context`,children:`Context`}),`
`,(0,c.jsx)(t.p,{children:`We need to choose an architecture for our project that enables us to efficiently manage our codebase and share resources between packages.`}),`
`,(0,c.jsx)(t.h2,{id:`decision-drivers`,children:`Decision Drivers`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`We need to be able to independently version each package.`}),`
`,(0,c.jsx)(t.li,{children:`We need to share code and configuration between packages.`}),`
`,(0,c.jsx)(t.li,{children:`We need to share dependencies between packages.`}),`
`,(0,c.jsx)(t.li,{children:`We need a centralized documentation for our Design System.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`considered-options`,children:`Considered Options`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`https://monorepo.tools/`,rel:`nofollow`,children:`Monorepo`})}),`: A monorepo is a software development practice where multiple projects are stored in the same repository. In the context of a design system, this means that all the packages (e.g., UI components, typography, color scheme, etc.) are kept in a single repository and versioned together. This approach allows for easy sharing of code, configuration, and dependencies between packages, and provides a centralized location for documentation and tooling. It can also simplify the development workflow by enabling atomic commits, shared testing, and a unified deployment pipeline.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Separate Repositories`}),`: This refers to the practice of keeping each package (e.g., UI components, typography, color scheme, etc.) in a separate repository. Each package has its own versioning and development lifecycle, and can be developed and deployed independently of the others. However, this approach can lead to code duplication, configuration fragmentation, and dependency management issues, especially if multiple packages need to share common code or dependencies. It also makes it harder to maintain a centralized documentation and tooling, as these would need to be replicated across multiple repositories.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`decision`,children:`Decision`}),`
`,(0,c.jsxs)(t.p,{children:[`We have decided to use a `,(0,c.jsx)(t.strong,{children:`Monorepo as our architecture of choice`}),`. With a Monorepo, we can easily share code, configuration, and dependencies between packages while also allowing for independent versioning of each package. Additionally, a Monorepo enables us to maintain a centralized documentation for our Design System.`]}),`
`,(0,c.jsx)(t.p,{children:`In contrast, using separate repositories for each package and documentation would lead to duplication of code and configuration and make maintenance more difficult.`}),`
`,(0,c.jsx)(t.p,{children:`Overall, a Monorepo aligns well with our needs for an efficient and scalable architecture.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=a(),i(),t()}))();export{s as default};
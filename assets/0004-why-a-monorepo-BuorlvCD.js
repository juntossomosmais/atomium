import"./components-sxD-Pwkd.js";import{i as e}from"./chunk-YKABRMAI-rQu7s1e9.js";import"./react-DFKUFpG3.js";import"./chunk-242VQQM5-BH6EcrRQ.js";import{m as t,u as n}from"./iframe-D71TlG5e.js";var r=e();function i(e){let i={a:`a`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{title:`Docs/Architecture Decision Records/ADR 0004: Why a Monorepo?`}),`
`,(0,r.jsx)(i.h1,{id:`adr-0004-why-a-monorepo`,children:`ADR 0004: Why a Monorepo?`}),`
`,(0,r.jsxs)(i.p,{children:[`🗓️ 2023-03 · ✍️ `,(0,r.jsx)(i.a,{href:`https://twitter.com/felipefialho_`,rel:`nofollow`,children:`@felipefialho`})]}),`
`,(0,r.jsx)(i.h2,{id:`context`,children:`Context`}),`
`,(0,r.jsx)(i.p,{children:`We need to choose an architecture for our project that enables us to efficiently manage our codebase and share resources between packages.`}),`
`,(0,r.jsx)(i.h2,{id:`decision-drivers`,children:`Decision Drivers`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:`We need to be able to independently version each package.`}),`
`,(0,r.jsx)(i.li,{children:`We need to share code and configuration between packages.`}),`
`,(0,r.jsx)(i.li,{children:`We need to share dependencies between packages.`}),`
`,(0,r.jsx)(i.li,{children:`We need a centralized documentation for our Design System.`}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:`considered-options`,children:`Considered Options`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.a,{href:`https://monorepo.tools/`,rel:`nofollow`,children:`Monorepo`})}),`: A monorepo is a software development practice where multiple projects are stored in the same repository. In the context of a design system, this means that all the packages (e.g., UI components, typography, color scheme, etc.) are kept in a single repository and versioned together. This approach allows for easy sharing of code, configuration, and dependencies between packages, and provides a centralized location for documentation and tooling. It can also simplify the development workflow by enabling atomic commits, shared testing, and a unified deployment pipeline.`]}),`
`]}),`
`,(0,r.jsxs)(i.li,{children:[`
`,(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:`Separate Repositories`}),`: This refers to the practice of keeping each package (e.g., UI components, typography, color scheme, etc.) in a separate repository. Each package has its own versioning and development lifecycle, and can be developed and deployed independently of the others. However, this approach can lead to code duplication, configuration fragmentation, and dependency management issues, especially if multiple packages need to share common code or dependencies. It also makes it harder to maintain a centralized documentation and tooling, as these would need to be replicated across multiple repositories.`]}),`
`]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:`decision`,children:`Decision`}),`
`,(0,r.jsxs)(i.p,{children:[`We have decided to use a `,(0,r.jsx)(i.strong,{children:`Monorepo as our architecture of choice`}),`. With a Monorepo, we can easily share code, configuration, and dependencies between packages while also allowing for independent versioning of each package. Additionally, a Monorepo enables us to maintain a centralized documentation for our Design System.`]}),`
`,(0,r.jsx)(i.p,{children:`In contrast, using separate repositories for each package and documentation would lead to duplication of code and configuration and make maintenance more difficult.`}),`
`,(0,r.jsx)(i.p,{children:`Overall, a Monorepo aligns well with our needs for an efficient and scalable architecture.`})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};
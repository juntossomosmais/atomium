import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{D as t,G as n,T as r,U as i,q as a}from"./storybook-Zaq70kOf.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Docs/Architecture Decision Records/ADR 0015: Why use a CDN for Atomium distribution`}),`
`,(0,c.jsx)(t.h1,{id:`adr-0015-why-use-a-cdn-for-atomium-distribution`,children:`ADR 0015: Why use a CDN for Atomium distribution`}),`
`,(0,c.jsxs)(t.p,{children:[`🗓️ 2025-03 · ✍️ `,(0,c.jsx)(t.a,{href:`https://twitter.com/felipefialho_`,rel:`nofollow`,children:`@felipefialho`})]}),`
`,(0,c.jsx)(t.h2,{id:`context`,children:`Context`}),`
`,(0,c.jsx)(t.p,{children:`Atomium needs to be accessible in projects that do not use Node.js, such as Django applications or simple HTML projects. In these cases, installing the library via npm is not an option, making a CDN the most practical way to distribute and integrate Atomium.`}),`
`,(0,c.jsx)(t.h2,{id:`challenges`,children:`Challenges`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Ensuring seamless access to Atomium for non-Node projects.`}),`
`,(0,c.jsx)(t.li,{children:`Managing versioning effectively to prevent breaking changes.`}),`
`,(0,c.jsx)(t.li,{children:`Automating deployment to the CDN to maintain consistency and reduce manual effort.`}),`
`,(0,c.jsx)(t.li,{children:`Keeping the process simple and scalable.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`decision-drivers`,children:`Decision Drivers`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Broader Accessibility`}),`: Atomium should be usable in any project, regardless of its tech stack.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Controlled Releases`}),`: Since only a few projects rely on the CDN version, frequent updates are unnecessary.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Semantic Versioning (SEMVER)`}),`: Versions should follow SEMVER to ensure stability and predictability.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ease of Integration`}),`: Developers should be able to quickly and reliably include Atomium in their projects.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`decision`,children:`Decision`}),`
`,(0,c.jsx)(t.p,{children:`To support non-Node projects, Atomium will be distributed via a CDN with the following structure:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`https://atomium.juntossomosmais.com.br/core/SEMVER/
https://atomium.juntossomosmais.com.br/tokens/SEMVER/
`})}),`
`,(0,c.jsxs)(t.p,{children:[`This approach ensures that developers can integrate Atomium using standard `,(0,c.jsx)(t.code,{children:`<script>`}),` or `,(0,c.jsx)(t.code,{children:`<link>`}),` tags without requiring Node.js.`]}),`
`,(0,c.jsx)(t.p,{children:`However, to prevent excessive versioning on the CDN, we will not deploy every new release automatically. Instead, we will use a manual trigger in GitHub Actions to publish a new version only when necessary.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=a(),i(),t()}))();export{s as default};
import{S as e,l as t,w as n}from"./storybook-CfikGCXO.js";var r=n();function i(n){let i={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...e(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{title:`Docs/Architecture Decision Records/ADR 0015: Why use a CDN for Atomium distribution`}),`
`,(0,r.jsx)(i.h1,{id:`adr-0015-why-use-a-cdn-for-atomium-distribution`,children:`ADR 0015: Why use a CDN for Atomium distribution`}),`
`,(0,r.jsxs)(i.p,{children:[`🗓️ 2025-03 · ✍️ `,(0,r.jsx)(i.a,{href:`https://twitter.com/felipefialho_`,rel:`nofollow`,children:`@felipefialho`})]}),`
`,(0,r.jsx)(i.h2,{id:`context`,children:`Context`}),`
`,(0,r.jsx)(i.p,{children:`Atomium needs to be accessible in projects that do not use Node.js, such as Django applications or simple HTML projects. In these cases, installing the library via npm is not an option, making a CDN the most practical way to distribute and integrate Atomium.`}),`
`,(0,r.jsx)(i.h2,{id:`challenges`,children:`Challenges`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:`Ensuring seamless access to Atomium for non-Node projects.`}),`
`,(0,r.jsx)(i.li,{children:`Managing versioning effectively to prevent breaking changes.`}),`
`,(0,r.jsx)(i.li,{children:`Automating deployment to the CDN to maintain consistency and reduce manual effort.`}),`
`,(0,r.jsx)(i.li,{children:`Keeping the process simple and scalable.`}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:`decision-drivers`,children:`Decision Drivers`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`Broader Accessibility`}),`: Atomium should be usable in any project, regardless of its tech stack.`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`Controlled Releases`}),`: Since only a few projects rely on the CDN version, frequent updates are unnecessary.`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`Semantic Versioning (SEMVER)`}),`: Versions should follow SEMVER to ensure stability and predictability.`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`Ease of Integration`}),`: Developers should be able to quickly and reliably include Atomium in their projects.`]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:`decision`,children:`Decision`}),`
`,(0,r.jsx)(i.p,{children:`To support non-Node projects, Atomium will be distributed via a CDN with the following structure:`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-sh`,children:`https://atomium.juntossomosmais.com.br/core/SEMVER/
https://atomium.juntossomosmais.com.br/tokens/SEMVER/
`})}),`
`,(0,r.jsxs)(i.p,{children:[`This approach ensures that developers can integrate Atomium using standard `,(0,r.jsx)(i.code,{children:`<script>`}),` or `,(0,r.jsx)(i.code,{children:`<link>`}),` tags without requiring Node.js.`]}),`
`,(0,r.jsx)(i.p,{children:`However, to prevent excessive versioning on the CDN, we will not deploy every new release automatically. Instead, we will use a manual trigger in GitHub Actions to publish a new version only when necessary.`})]})}function a(t={}){let{wrapper:n}={...e(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(i,{...t})}):i(t)}export{a as default};
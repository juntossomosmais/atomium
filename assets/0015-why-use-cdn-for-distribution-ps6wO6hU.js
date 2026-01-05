import{u as t,j as e,M as o}from"./iframe-Csm4GGMy.js";import"./preload-helper-PPVm8Dsz.js";function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/Architecture Decision Records/ADR 0015: Why use a CDN for Atomium distribution"}),`
`,e.jsx(n.h1,{id:"adr-0015-why-use-a-cdn-for-atomium-distribution",children:"ADR 0015: Why use a CDN for Atomium distribution"}),`
`,e.jsxs(n.p,{children:["🗓️ 2025-03 · ✍️ ",e.jsx(n.a,{href:"https://twitter.com/felipefialho_",rel:"nofollow",children:"@felipefialho"})]}),`
`,e.jsx(n.h2,{id:"context",children:"Context"}),`
`,e.jsx(n.p,{children:"Atomium needs to be accessible in projects that do not use Node.js, such as Django applications or simple HTML projects. In these cases, installing the library via npm is not an option, making a CDN the most practical way to distribute and integrate Atomium."}),`
`,e.jsx(n.h2,{id:"challenges",children:"Challenges"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensuring seamless access to Atomium for non-Node projects."}),`
`,e.jsx(n.li,{children:"Managing versioning effectively to prevent breaking changes."}),`
`,e.jsx(n.li,{children:"Automating deployment to the CDN to maintain consistency and reduce manual effort."}),`
`,e.jsx(n.li,{children:"Keeping the process simple and scalable."}),`
`]}),`
`,e.jsx(n.h2,{id:"decision-drivers",children:"Decision Drivers"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Broader Accessibility"}),": Atomium should be usable in any project, regardless of its tech stack."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Controlled Releases"}),": Since only a few projects rely on the CDN version, frequent updates are unnecessary."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Semantic Versioning (SEMVER)"}),": Versions should follow SEMVER to ensure stability and predictability."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ease of Integration"}),": Developers should be able to quickly and reliably include Atomium in their projects."]}),`
`]}),`
`,e.jsx(n.h2,{id:"decision",children:"Decision"}),`
`,e.jsx(n.p,{children:"To support non-Node projects, Atomium will be distributed via a CDN with the following structure:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`https://atomium.juntossomosmais.com.br/core/SEMVER/
https://atomium.juntossomosmais.com.br/tokens/SEMVER/
`})}),`
`,e.jsxs(n.p,{children:["This approach ensures that developers can integrate Atomium using standard ",e.jsx(n.code,{children:"<script>"})," or ",e.jsx(n.code,{children:"<link>"})," tags without requiring Node.js."]}),`
`,e.jsx(n.p,{children:"However, to prevent excessive versioning on the CDN, we will not deploy every new release automatically. Instead, we will use a manual trigger in GitHub Actions to publish a new version only when necessary."})]})}function a(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{a as default};

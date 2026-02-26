import{u as o,j as e,M as r}from"./iframe-CEyGnNHL.js";import"./preload-helper-PPVm8Dsz.js";function s(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Architecture Decision Records/ADR 0010: Why do we need a fix in React?"}),`
`,e.jsx(n.h1,{id:"adr-0010-why-do-we-need-a-fix-in-react",children:"ADR 0010: Why do we need a fix in React?"}),`
`,e.jsxs(n.p,{children:["🗓️ 2023-07 · ✍️ ",e.jsx(n.a,{href:"https://twitter.com/igor_wessel",rel:"nofollow",children:"@igorwessel"})]}),`
`,e.jsx(n.h2,{id:"context",children:"Context"}),`
`,e.jsx(n.p,{children:"In order to achieve a better DX with boolean props in React."}),`
`,e.jsx(n.h2,{id:"problems",children:"Problems"}),`
`,e.jsx(n.p,{children:"Today (07/19/2023) the Stencil does not follow the HTML spec for boolean props, which caused problems in testing/styling because expected to not have a attribute in HTML when is false."}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`
<AtomButton disabled={false} />

// output in html

<atom-button disabled="false" />
`})}),`
`,e.jsx(n.p,{children:"So it affects styles, and tests where the boolean attribute shouldn't exist"}),`
`,e.jsx(n.p,{children:"Examples:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// regardless if disabled is false/true will still be applied.
atom-button[disabled] {
  background-color: red;
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// regardless if disabled is false/true will throw a false-positive because expects the attribute does not exist.
expect(atom - button).toBeDisabled()
`})}),`
`,e.jsx(n.h2,{id:"decision",children:"Decision"}),`
`,e.jsx(n.p,{children:"After we consider the options:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Living with the problem for possibly in the near future react will offer better ",e.jsx(n.a,{href:"https://github.com/facebook/react/issues/11347",rel:"nofollow",children:"support"})," for web-components.",`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["We can see ",e.jsx(n.a,{href:"https://custom-elements-everywhere.com/libraries/react-experimental/results/results.html",rel:"nofollow",children:"tests in a experimental branch here"})]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"We are already transpiling the web-component to React, could use a workaround."}),`
`]}),`
`,e.jsxs(n.p,{children:["Based on these options, we decide to use workaround which will basically set/remove attributes after ",e.jsx(n.a,{href:"https://react.dev/reference/react/Component#componentdidupdate",rel:"nofollow",children:"occurs a update in component."})]})]})}function a(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{a as default};

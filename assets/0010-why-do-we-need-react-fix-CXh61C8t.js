import{S as e,l as t,w as n}from"./storybook-CfikGCXO.js";var r=n();function i(n){let i={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...e(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{title:`Docs/Architecture Decision Records/ADR 0010: Why do we need a fix in React?`}),`
`,(0,r.jsx)(i.h1,{id:`adr-0010-why-do-we-need-a-fix-in-react`,children:`ADR 0010: Why do we need a fix in React?`}),`
`,(0,r.jsxs)(i.p,{children:[`🗓️ 2023-07 · ✍️ `,(0,r.jsx)(i.a,{href:`https://twitter.com/igor_wessel`,rel:`nofollow`,children:`@igorwessel`})]}),`
`,(0,r.jsx)(i.h2,{id:`context`,children:`Context`}),`
`,(0,r.jsx)(i.p,{children:`In order to achieve a better DX with boolean props in React.`}),`
`,(0,r.jsx)(i.h2,{id:`problems`,children:`Problems`}),`
`,(0,r.jsx)(i.p,{children:`Today (07/19/2023) the Stencil does not follow the HTML spec for boolean props, which caused problems in testing/styling because expected to not have a attribute in HTML when is false.`}),`
`,(0,r.jsx)(i.p,{children:`Example:`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-jsx`,children:`
<AtomButton disabled={false} />

// output in html

<atom-button disabled="false" />
`})}),`
`,(0,r.jsx)(i.p,{children:`So it affects styles, and tests where the boolean attribute shouldn't exist`}),`
`,(0,r.jsx)(i.p,{children:`Examples:`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-css`,children:`// regardless if disabled is false/true will still be applied.
atom-button[disabled] {
  background-color: red;
}
`})}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-js`,children:`// regardless if disabled is false/true will throw a false-positive because expects the attribute does not exist.
expect(atom - button).toBeDisabled()
`})}),`
`,(0,r.jsx)(i.h2,{id:`decision`,children:`Decision`}),`
`,(0,r.jsx)(i.p,{children:`After we consider the options:`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[`Living with the problem for possibly in the near future react will offer better `,(0,r.jsx)(i.a,{href:`https://github.com/facebook/react/issues/11347`,rel:`nofollow`,children:`support`}),` for web-components.`,`
`,(0,r.jsxs)(i.blockquote,{children:[`
`,(0,r.jsxs)(i.p,{children:[`We can see `,(0,r.jsx)(i.a,{href:`https://custom-elements-everywhere.com/libraries/react-experimental/results/results.html`,rel:`nofollow`,children:`tests in a experimental branch here`})]}),`
`]}),`
`]}),`
`,(0,r.jsx)(i.li,{children:`We are already transpiling the web-component to React, could use a workaround.`}),`
`]}),`
`,(0,r.jsxs)(i.p,{children:[`Based on these options, we decide to use workaround which will basically set/remove attributes after `,(0,r.jsx)(i.a,{href:`https://react.dev/reference/react/Component#componentdidupdate`,rel:`nofollow`,children:`occurs a update in component.`})]})]})}function a(t={}){let{wrapper:n}={...e(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(i,{...t})}):i(t)}export{a as default};
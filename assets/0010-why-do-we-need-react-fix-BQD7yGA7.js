import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{D as t,T as n,k as r,l as i,s as a}from"./storybook-AbPZ34TI.js";function o(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`Docs/Architecture Decision Records/ADR 0010: Why do we need a fix in React?`}),`
`,(0,c.jsx)(n.h1,{id:`adr-0010-why-do-we-need-a-fix-in-react`,children:`ADR 0010: Why do we need a fix in React?`}),`
`,(0,c.jsxs)(n.p,{children:[`🗓️ 2023-07 · ✍️ `,(0,c.jsx)(n.a,{href:`https://twitter.com/igor_wessel`,rel:`nofollow`,children:`@igorwessel`})]}),`
`,(0,c.jsx)(n.h2,{id:`context`,children:`Context`}),`
`,(0,c.jsx)(n.p,{children:`In order to achieve a better DX with boolean props in React.`}),`
`,(0,c.jsx)(n.h2,{id:`problems`,children:`Problems`}),`
`,(0,c.jsx)(n.p,{children:`Today (07/19/2023) the Stencil does not follow the HTML spec for boolean props, which caused problems in testing/styling because expected to not have a attribute in HTML when is false.`}),`
`,(0,c.jsx)(n.p,{children:`Example:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-jsx`,children:`
<AtomButton disabled={false} />

// output in html

<atom-button disabled="false" />
`})}),`
`,(0,c.jsx)(n.p,{children:`So it affects styles, and tests where the boolean attribute shouldn't exist`}),`
`,(0,c.jsx)(n.p,{children:`Examples:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-css`,children:`// regardless if disabled is false/true will still be applied.
atom-button[disabled] {
  background-color: red;
}
`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-js`,children:`// regardless if disabled is false/true will throw a false-positive because expects the attribute does not exist.
expect(atom - button).toBeDisabled()
`})}),`
`,(0,c.jsx)(n.h2,{id:`decision`,children:`Decision`}),`
`,(0,c.jsx)(n.p,{children:`After we consider the options:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Living with the problem for possibly in the near future react will offer better `,(0,c.jsx)(n.a,{href:`https://github.com/facebook/react/issues/11347`,rel:`nofollow`,children:`support`}),` for web-components.`,`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`We can see `,(0,c.jsx)(n.a,{href:`https://custom-elements-everywhere.com/libraries/react-experimental/results/results.html`,rel:`nofollow`,children:`tests in a experimental branch here`})]}),`
`]}),`
`]}),`
`,(0,c.jsx)(n.li,{children:`We are already transpiling the web-component to React, could use a workaround.`}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Based on these options, we decide to use workaround which will basically set/remove attributes after `,(0,c.jsx)(n.a,{href:`https://react.dev/reference/react/Component#componentdidupdate`,rel:`nofollow`,children:`occurs a update in component.`})]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),n(),i()}))();export{s as default};
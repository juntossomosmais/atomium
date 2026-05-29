import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{D as t,G as n,T as r,U as i,q as a}from"./storybook-BXfsGf_B.js";function o(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Docs/Architecture Decision Records/2023-07: Why do we need a fix in React?`}),`
`,(0,c.jsx)(t.h1,{id:`2023-07-why-do-we-need-a-fix-in-react`,children:`2023-07: Why do we need a fix in React?`}),`
`,(0,c.jsxs)(t.p,{children:[`🗓️ 2023-07 · ✍️ `,(0,c.jsx)(t.a,{href:`https://twitter.com/igor_wessel`,rel:`nofollow`,children:`@igorwessel`})]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`⚠️ `,(0,c.jsxs)(t.strong,{children:[`Superseded by `,(0,c.jsx)(t.a,{href:`./2025-11-04-react-output-target-update.mdx`,children:`2025-11-04: React Output Target Update`}),`.`]}),` The `,(0,c.jsx)(t.code,{children:`reactBooleanFixOutputTarget`}),` patch was removed when we moved to `,(0,c.jsx)(t.code,{children:`@stencil/react-output-target@^1.5.3`}),`, whose runtime (`,(0,c.jsx)(t.code,{children:`@lit/react`}),`) sets DOM properties instead of stringified attributes, so the boolean bug described here no longer occurs. This ADR is kept for historical context.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`context`,children:`Context`}),`
`,(0,c.jsx)(t.p,{children:`In order to achieve a better DX with boolean props in React.`}),`
`,(0,c.jsx)(t.h2,{id:`problems`,children:`Problems`}),`
`,(0,c.jsx)(t.p,{children:`Today (07/19/2023) the Stencil does not follow the HTML spec for boolean props, which caused problems in testing/styling because expected to not have a attribute in HTML when is false.`}),`
`,(0,c.jsx)(t.p,{children:`Example:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-jsx`,children:`
<AtomButton disabled={false} />

// output in html

<atom-button disabled="false" />
`})}),`
`,(0,c.jsx)(t.p,{children:`So it affects styles, and tests where the boolean attribute shouldn't exist`}),`
`,(0,c.jsx)(t.p,{children:`Examples:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`// regardless if disabled is false/true will still be applied.
atom-button[disabled] {
  background-color: red;
}
`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`// regardless if disabled is false/true will throw a false-positive because expects the attribute does not exist.
expect(atom - button).toBeDisabled()
`})}),`
`,(0,c.jsx)(t.h2,{id:`decision`,children:`Decision`}),`
`,(0,c.jsx)(t.p,{children:`After we consider the options:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Living with the problem for possibly in the near future react will offer better `,(0,c.jsx)(t.a,{href:`https://github.com/facebook/react/issues/11347`,rel:`nofollow`,children:`support`}),` for web-components.`,`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`We can see `,(0,c.jsx)(t.a,{href:`https://custom-elements-everywhere.com/libraries/react-experimental/results/results.html`,rel:`nofollow`,children:`tests in a experimental branch here`})]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.li,{children:`We are already transpiling the web-component to React, could use a workaround.`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Based on these options, we decide to use workaround which will basically set/remove attributes after `,(0,c.jsx)(t.a,{href:`https://react.dev/reference/react/Component#componentdidupdate`,rel:`nofollow`,children:`occurs a update in component.`})]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=a(),i(),t()}))();export{s as default};
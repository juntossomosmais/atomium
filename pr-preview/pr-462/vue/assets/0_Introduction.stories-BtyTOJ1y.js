import"./chunk-HLWAVYOI-B6vHBBYv.js";import{M as c}from"./index-C_ZXXQk-.js";import{j as e}from"./jsx-runtime-BWxHtzvs.js";import{u as s}from"./index-CZmFo0D7.js";import"./iframe-BlaZyy6T.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./doctrine-Z_8G-UDG.js";import"./index-DrFu-skq.js";function r(t){const o=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",pre:"pre",code:"code"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Introduction"}),`
`,e.jsx(o.h1,{id:"about-vue-components",children:"About Vue Components"}),`
`,e.jsxs(o.p,{children:["All ",e.jsx(o.a,{href:"https://stenciljs.com/docs/vue",target:"_blank",rel:"nofollow noopener noreferrer",children:"Vue Components is generated by Stencil"})," using ",e.jsx(o.a,{href:"https://stenciljs.com/docs/vue#output-targets",target:"_blank",rel:"nofollow noopener noreferrer",children:"Stencil's output target"})," to automatically generate Vue components from our Atomium's web components."]}),`
`,e.jsx(o.p,{children:"The target of this stories is run Atomium's web components in Vue environment and show how to use the components."}),`
`,e.jsx(o.p,{children:e.jsx(o.strong,{children:"!important"})}),`
`,e.jsxs(o.p,{children:["There is a problem to render the code of ",e.jsx(o.a,{href:"https://github.com/storybookjs/storybook/issues/22287",target:"_blank",rel:"nofollow noopener noreferrer",children:"Vue's components outputed by Stencil in Storybook"}),", so the code of the components is not shown correctly in the stories."]}),`
`,e.jsxs(o.p,{children:["Example, in ",e.jsx(o.a,{href:"?path=/docs/react_components-button--docs",children:"Button component"}),":"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`{
  render: args => createButton(args),
  args: {
    ...ButtonComponentArgs
  }
}
`})}),`
`,e.jsx(o.p,{children:"The code above is not shown correctly in the stories, but it is correct in the source code:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<AtomButton color='primary' fill='solid' mode='md' shape='round' type='button'>
  Button
</AtomButton>
`})}),`
`,e.jsx(o.p,{children:"Just keep in mind that when check the code of the components inside Storybook"})]})}function i(t={}){const{wrapper:o}=Object.assign({},s(),t.components);return o?e.jsx(o,{...t,children:e.jsx(r,{...t})}):r(t)}const a=()=>{throw new Error("Docs-only story")};a.parameters={docsOnly:!0};const n={title:"Introduction",tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:i};const f=["__page"];export{f as __namedExportsOrder,a as __page,n as default};

import{s}from"./index-COQCOSZI.js";import{C as e}from"./table-D060eKuu.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-TDIWI4TJ.js";import"../sb-preview/runtime.js";const i={parameters:{docs:{description:{component:""}}},argTypes:{page:{control:"number",description:"The current page.",table:{category:e.PROPERTIES}},count:{control:"number",description:"Total pages.",table:{category:e.PROPERTIES}}}},p={page:1,count:10},l={title:"Components/Pagination",component:s,...i},c=t=>({components:{AtomPagination:s},setup(){return{args:t}},template:`
    <AtomPagination
      page="${t.page}"
      count="${t.count}"
    />
  `}),o={render:t=>c(t),args:{...p}};var n,a,r;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => createPagination(args),
  args: {
    ...PaginationComponentArgs
  }
}`,...(r=(a=o.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const f=["Default"];export{o as Default,f as __namedExportsOrder,l as default};

import{n as s}from"./index-BI0Gaphq.js";import"./index-CsJWRV96.js";import{C as n}from"./table-D060eKuu.js";import"./vue.esm-bundler-cJVerQom.js";import"./iframe-CQ63PS9t.js";const i={parameters:{docs:{description:{component:"A pagination component is an interface that allows users to navigate through large amounts of content that has been split into multiple pages"}}},argTypes:{page:{control:"number",description:"Current page.",table:{category:n.PROPERTIES}},count:{control:"number",description:"Total pages.",table:{category:n.PROPERTIES}}}},p={page:1,count:10},P={title:"Components/Pagination",component:s,...i},c=t=>({components:{AtomPagination:s},setup(){return{args:t}},template:`
    <AtomPagination
      page="${t.page}"
      count="${t.count}"
    />
  `}),o={render:t=>c(t),args:{...p}};var e,a,r;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: args => createPagination(args),
  args: {
    ...PaginationComponentArgs
  }
}`,...(r=(a=o.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const f=["Default"];export{o as Default,f as __namedExportsOrder,P as default};

import{a1 as e}from"./iframe-BWC7Cn59.js";import{C as n}from"./table-D060eKuu.js";import"./preload-helper-PPVm8Dsz.js";const a={parameters:{docs:{description:{component:"A pagination component is an interface that allows users to navigate through large amounts of content that has been split into multiple pages"}}},argTypes:{page:{control:"number",description:"Current page.",table:{category:n.PROPERTIES}},count:{control:"number",description:"Total pages.",table:{category:n.PROPERTIES}}}},r={page:1,count:10},g={title:"Components/Pagination",component:e,...a},s=t=>({components:{AtomPagination:e},setup(){return{args:t}},template:`
    <AtomPagination
      page="${t.page}"
      count="${t.count}"
    />
  `}),o={render:t=>s(t),args:{...r}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createPagination(args),
  args: {
    ...PaginationComponentArgs
  }
}`,...o.parameters?.docs?.source}}};const m=["Default"];export{o as Default,m as __namedExportsOrder,g as default};

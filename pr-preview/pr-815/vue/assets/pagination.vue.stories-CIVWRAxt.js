import{L as e}from"./iframe-Br9ztWDk.js";import{t}from"./table-DZkiv1k4.js";var n={parameters:{docs:{description:{component:`A pagination component is an interface that allows users to navigate through large amounts of content that has been split into multiple pages`}}},argTypes:{page:{control:`number`,description:`Current page.`,table:{category:t.PROPERTIES}},count:{control:`number`,description:`Total pages.`,table:{category:t.PROPERTIES}}}},r={page:1,count:10},i={title:`Components/Pagination`,component:e,...n},a=t=>({components:{AtomPagination:e},setup(){return{args:t}},template:`
    <AtomPagination
      page="${t.page}"
      count="${t.count}"
    />
  `}),o={render:e=>a(e),args:{...r}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createPagination(args),
  args: {
    ...PaginationComponentArgs
  }
}`,...o.parameters?.docs?.source}}};var s=[`Default`];export{o as Default,s as __namedExportsOrder,i as default};
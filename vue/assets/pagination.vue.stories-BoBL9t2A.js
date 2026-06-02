import{i as e}from"./preload-helper-xPQekRTU.js";import{t,z as n}from"./iframe-DSSaSMby.js";import{n as r,t as i}from"./table-CVkdcsHV.js";var a,o,s=e((()=>{r(),a={parameters:{docs:{description:{component:`A pagination component is an interface that allows users to navigate through large amounts of content that has been split into multiple pages`}}},argTypes:{page:{control:`number`,description:`Current page.`,table:{category:i.PROPERTIES}},count:{control:`number`,description:`Total pages.`,table:{category:i.PROPERTIES}}}},o={page:1,count:10}})),c,l,u,d;e((()=>{t(),s(),c={title:`Components/Pagination`,component:n,...a},l=e=>({components:{AtomPagination:n},setup(){return{args:e}},template:`
    <AtomPagination
      page="${e.page}"
      count="${e.count}"
    />
  `}),u={render:e=>l(e),args:{...o}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createPagination(args),
  args: {
    ...PaginationComponentArgs
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`]}))();export{u as Default,d as __namedExportsOrder,c as default};
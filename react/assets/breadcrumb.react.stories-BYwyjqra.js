import{j as r}from"./iframe-D1tf9FLi.js";import{m as o}from"./index-DCGZOIrA.js";import{C as i}from"./table-D060eKuu.js";import"./preload-helper-PPVm8Dsz.js";const s={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Breadcrumbs are navigation items that are used to indicate where a user is on site. Read the [Ionic documentation](https://ionicframework.com/docs/api/breadcrumbs) for more information about this component."}}},argTypes:{items:{description:"This is the list of items that will be displayed in the breadcrumb. Items must have `title` and `text` and optionally a `redirect` function when clicking on the item.",table:{category:i.PROPERTIES}}}},d={title:"Components/Breadcrumb",...s},n=t=>r.jsx(o,{items:t.items}),e={render:t=>n(t),args:{items:[{text:"First level",title:"Go to first level",redirect:()=>console.log("/first")},{text:"Intermediary level",title:"Go to intermediary level",redirect:()=>console.log("/intermediary")},{text:"Current level",title:"This is the current level"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => createBreadcrumb(args),
  args: {
    items: [{
      text: 'First level',
      title: 'Go to first level',
      redirect: () => console.log('/first')
    }, {
      text: 'Intermediary level',
      title: 'Go to intermediary level',
      redirect: () => console.log('/intermediary')
    }, {
      text: 'Current level',
      title: 'This is the current level'
    }]
  }
}`,...e.parameters?.docs?.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,d as default};

import{I as r}from"./iframe-zABJLAdj.js";import{C as o}from"./table-D060eKuu.js";import"./preload-helper-PPVm8Dsz.js";const i={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Breadcrumbs are navigation items that are used to indicate where a user is on site. Read the [Ionic documentation](https://ionicframework.com/docs/api/breadcrumbs) for more information about this component."}}},argTypes:{items:{description:"This is the list of items that will be displayed in the breadcrumb. Items must have `title` and `text` and optionally a `redirect` function when clicking on the item.",table:{category:o.PROPERTIES}}}},c={title:"Components/Breadcrumb",...i},s=t=>({components:{AtomBreadcrumb:r},setup(){return{args:t}},template:'<AtomBreadcrumb :items="args.items" />'}),e={render:t=>s(t),args:{items:[{text:"First level",title:"Go to first level",redirect:()=>console.log("/first")},{text:"Intermediary level",title:"Go to intermediary level",redirect:()=>console.log("/intermediary")},{text:"Current level",title:"This is the current level"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,c as default};

import{b as e}from"./iframe-DHKEqBzE.js";import{t}from"./table-DZkiv1k4.js";var n={title:`Components/Breadcrumb`,decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`Breadcrumbs are navigation items that are used to indicate where a user is on site. Read the [Ionic documentation](https://ionicframework.com/docs/api/breadcrumbs) for more information about this component.`}}},argTypes:{items:{description:"This is the list of items that will be displayed in the breadcrumb. Items must have `title` and `text` and optionally a `redirect` function when clicking on the item.",table:{category:t.PROPERTIES}}}},r=t=>({components:{AtomBreadcrumb:e},setup(){return{args:t}},template:`<AtomBreadcrumb :items="args.items" />`}),i={render:e=>r(e),args:{items:[{text:`First level`,title:`Go to first level`,redirect:()=>console.log(`/first`)},{text:`Intermediary level`,title:`Go to intermediary level`,redirect:()=>console.log(`/intermediary`)},{text:`Current level`,title:`This is the current level`}]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};var a=[`Default`];export{i as Default,a as __namedExportsOrder,n as default};
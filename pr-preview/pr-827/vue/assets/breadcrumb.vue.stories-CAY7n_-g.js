import{i as e}from"./preload-helper-xPQekRTU.js";import{S as t,t as n}from"./iframe-DXL-kbP2.js";import{n as r,t as i}from"./table-CVkdcsHV.js";var a,o=e((()=>{r(),a={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`Breadcrumbs are navigation items that are used to indicate where a user is on site. Read the [Ionic documentation](https://ionicframework.com/docs/api/breadcrumbs) for more information about this component.`}}},argTypes:{items:{description:"This is the list of items that will be displayed in the breadcrumb. Items must have `title` and `text` and optionally a `redirect` function when clicking on the item.",table:{category:i.PROPERTIES}}}}})),s,c,l,u;e((()=>{n(),o(),s={title:`Components/Breadcrumb`,...a},c=e=>({components:{AtomBreadcrumb:t},setup(){return{args:e}},template:`<AtomBreadcrumb :items="args.items" />`}),l={render:e=>c(e),args:{items:[{text:`First level`,title:`Go to first level`,redirect:()=>console.log(`/first`)},{text:`Intermediary level`,title:`Go to intermediary level`,redirect:()=>console.log(`/intermediary`)},{text:`Current level`,title:`This is the current level`}]}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Default`]}))();export{l as Default,u as __namedExportsOrder,s as default};
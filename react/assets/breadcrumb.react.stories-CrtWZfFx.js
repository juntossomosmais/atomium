import"./chunk-DseTPa7n.js";import{t as e}from"./react-BeYaFARg.js";import{t}from"./jsx-runtime-DsGsusFP.js";import"./react-dom-BaYUCVRd.js";import"./index--pUmmU2V-CE9k8Uy1.js";import{r as n}from"./esm-BiOou3EM.js";import{t as r}from"./table-jqz5s6A8.js";e();var i={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`Breadcrumbs are navigation items that are used to indicate where a user is on site. Read the [Ionic documentation](https://ionicframework.com/docs/api/breadcrumbs) for more information about this component.`}}},argTypes:{items:{description:"This is the list of items that will be displayed in the breadcrumb. Items must have `title` and `text` and optionally a `redirect` function when clicking on the item.",table:{category:r.PROPERTIES}}}},a=t(),o={title:`Components/Breadcrumb`,...i},s=e=>(0,a.jsx)(n,{items:e.items}),c={render:e=>s(e),args:{items:[{text:`First level`,title:`Go to first level`,redirect:()=>console.log(`/first`)},{text:`Intermediary level`,title:`Go to intermediary level`,redirect:()=>console.log(`/intermediary`)},{text:`Current level`,title:`This is the current level`}]}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};var l=[`Default`];export{c as Default,l as __namedExportsOrder,o as default};
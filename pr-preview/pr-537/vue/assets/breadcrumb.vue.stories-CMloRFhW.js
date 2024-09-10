import{k as s}from"./index-DTMuCNwM.js";import{C as n}from"./table-D060eKuu.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-DLo2CLfl.js";import"../sb-preview/runtime.js";const a={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Breadcrumbs are navigation items that are used to indicate where a user is on site. Read the [Ionic documentation](https://ionicframework.com/docs/api/breadcrumbs) for more information about this component."}}},argTypes:{items:{description:"This is the list of items that will be displayed in the breadcrumb. Items must have `title` and `text` and optionally a `redirect` function when clicking on the item.",table:{category:n.PROPERTIES}}}},h={title:"Components/Breadcrumb",...a},l=t=>({components:{AtomBreadcrumb:s},setup(){return{args:t}},template:'<AtomBreadcrumb :items="args.items" />'}),e={render:t=>l(t),args:{items:[{text:"First level",title:"Go to first level",redirect:()=>console.log("/first")},{text:"Intermediary level",title:"Go to intermediary level",redirect:()=>console.log("/intermediary")},{text:"Current level",title:"This is the current level"}]}};var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,h as default};

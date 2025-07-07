import{m as s}from"./index-RhM5Kf0-.js";import{C as n}from"./table-D060eKuu.js";import"./vue.esm-bundler-UQm0beuB.js";import"./iframe-ypJoz2hp.js";const a={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Breadcrumbs are navigation items that are used to indicate where a user is on site. Read the [Ionic documentation](https://ionicframework.com/docs/api/breadcrumbs) for more information about this component."}}},argTypes:{items:{description:"This is the list of items that will be displayed in the breadcrumb. Items must have `title` and `text` and optionally a `redirect` function when clicking on the item.",table:{category:n.PROPERTIES}}}},p={title:"Components/Breadcrumb",...a},l=t=>({components:{AtomBreadcrumb:s},setup(){return{args:t}},template:'<AtomBreadcrumb :items="args.items" />'}),e={render:t=>l(t),args:{items:[{text:"First level",title:"Go to first level",redirect:()=>console.log("/first")},{text:"Intermediary level",title:"Go to intermediary level",redirect:()=>console.log("/intermediary")},{text:"Current level",title:"This is the current level"}]}};var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const h=["Default"];export{e as Default,h as __namedExportsOrder,p as default};

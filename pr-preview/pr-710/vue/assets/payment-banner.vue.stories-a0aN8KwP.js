import{j as n}from"./index-Djb2GwGQ.js";import"./vue.esm-bundler-cJVerQom.js";import"./iframe-091OgD4O.js";const s={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Badges are inline block elements that usually appear near another element. Read the [Ionic documentation](https://ionicframework.com/docs/api/Badge) for more information about this component."}}},argTypes:{type:{control:"select",options:["primary","secondary","info","success","warning","danger","neutral","dark"],defaultValue:{summary:"primary"},description:"The type of the badge, the component will receive the color according to its type."},label:{control:"text",description:"The label of the badge"}}},d={title:"Components/Payment Banner",...s},c=e=>({components:{AtomBadge:n},setup(){return{args:e}},template:`
    <AtomBadge type="${e.type}">{{ args.label }}</AtomBadge>
  `}),r={render:e=>c(e),args:{type:"primary",label:"Badge"}};var a,t,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    type: 'primary',
    label: 'Badge'
  }
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const l=["Primary"];export{r as Primary,l as __namedExportsOrder,d as default};

import{m as d}from"./index-CYPV5ngz.js";import"./vue.esm-bundler-D6ApT1Ci.js";import"./iframe-BCmO2hXq.js";import"../sb-preview/runtime.js";const m={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Badges are inline block elements that usually appear near another element. Read the [Ionic documentation](https://ionicframework.com/docs/api/Badge) for more information about this component."}}},argTypes:{type:{control:"select",options:["up","down"],defaultValue:{summary:"down"},description:"The type of the badge, the component will receive the color according to its type."}}},h={title:"Components/Divider",...m},c=e=>({components:{AtomDivider:d},setup(){return{args:e}},template:`<AtomDivider type="${e.type}" />`}),r={render:e=>c(e),args:{type:"up"}},o={render:e=>c(e),args:{type:"down"}};var t,a,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => createDivider(args),
  args: {
    type: 'up'
  }
}`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var s,i,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => createDivider(args),
  args: {
    type: 'down'
  }
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const v=["Up","Down"];export{o as Down,r as Up,v as __namedExportsOrder,h as default};

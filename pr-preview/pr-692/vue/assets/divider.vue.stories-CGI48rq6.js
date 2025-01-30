import{p as c}from"./index-C6o0C08N.js";import"./vue.esm-bundler-D6ApT1Ci.js";import"./iframe-zZR8IJ-C.js";import"../sb-preview/runtime.js";const m={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"The Divider is a thin line that helps separate and group content in the interface. This component can also be used to define rhythm and order."}}},argTypes:{type:{control:"select",options:["down","up"],defaultValue:{summary:"down"},description:"The type of the divider, will change your anatomy. The component can be used to separate content in two directions, up or down."}}},v={title:"Components/Divider",...m},d=e=>({components:{AtomDivider:c},setup(){return{args:e}},template:`
  <div v-if="args.type === 'up'" style="height: 100px">
    <AtomDivider :type="args.type" />
  </div>
  <AtomDivider v-else :type="args.type" />
  `}),r={render:e=>d(e),args:{type:"down"}},t={render:e=>d(e),args:{type:"up"}};var o,s,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => createDivider(args),
  args: {
    type: 'down'
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var a,i,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => createDivider(args),
  args: {
    type: 'up'
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const h=["Down","Up"];export{r as Down,t as Up,h as __namedExportsOrder,v as default};

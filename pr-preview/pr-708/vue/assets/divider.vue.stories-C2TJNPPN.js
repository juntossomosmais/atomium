import{g as d}from"./index-DMIr1GWi.js";import"./index-LwuSNJVC.js";import"./vue.esm-bundler-cJVerQom.js";import"./iframe-C7v5Ov2Q.js";const l={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"The Divider is a thin line that helps separate and group content in the interface. This component can also be used to define rhythm and order."}}},argTypes:{type:{control:"select",options:["horizontal","vertical"],defaultValue:{summary:"horizontal"},description:"The type of the divider, will change your anatomy. The component can be used to separate content in two directions, vertical or horizontal."}}},y={title:"Components/Divider",...l},p=e=>({components:{AtomDivider:d},setup(){return{args:e}},template:`
  <div v-if="args.type === 'vertical'" style="height: 100px">
    <AtomDivider :type="args.type" />
  </div>
  <AtomDivider v-else :type="args.type" />
  `}),r={render:e=>p(e),args:{type:"horizontal"}},t={render:e=>p(e),args:{type:"vertical"}};var o,a,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => createDivider(args),
  args: {
    type: 'horizontal'
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var s,n,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => createDivider(args),
  args: {
    type: 'vertical'
  }
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const u=["Horizontal","Vertical"];export{r as Horizontal,t as Vertical,u as __namedExportsOrder,y as default};

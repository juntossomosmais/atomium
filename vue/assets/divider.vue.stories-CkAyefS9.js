import{t as a}from"./index-D9gi79PD.js";import"./vue.esm-bundler-X36X5nj_.js";import"./iframe-DdQc9Zgb.js";const i={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"The Divider is a thin line that helps separate and group content in the interface. This component can also be used to define rhythm and order."}}},argTypes:{type:{control:"select",options:["horizontal","vertical"],defaultValue:{summary:"horizontal"},description:"The type of the divider, will change your anatomy. The component can be used to separate content in two directions, vertical or horizontal."}}},d={title:"Components/Divider",...i},o=e=>({components:{AtomDivider:a},setup(){return{args:e}},template:`
  <div v-if="args.type === 'vertical'" style="height: 100px">
    <AtomDivider :type="args.type" />
  </div>
  <AtomDivider v-else :type="args.type" />
  `}),r={render:e=>o(e),args:{type:"horizontal"}},t={render:e=>o(e),args:{type:"vertical"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => createDivider(args),
  args: {
    type: 'horizontal'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => createDivider(args),
  args: {
    type: 'vertical'
  }
}`,...t.parameters?.docs?.source}}};const p=["Horizontal","Vertical"];export{r as Horizontal,t as Vertical,p as __namedExportsOrder,d as default};

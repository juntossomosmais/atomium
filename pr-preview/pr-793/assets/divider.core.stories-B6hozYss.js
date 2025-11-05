import{N as o}from"./iframe-DPKEHp6z.js";import"./preload-helper-PPVm8Dsz.js";const i={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"The Divider is a thin line that helps separate and group content in the interface. This component can also be used to define rhythm and order."}}},argTypes:{type:{control:"select",options:["horizontal","vertical"],defaultValue:{summary:"horizontal"},description:"The type of the divider, will change your anatomy. The component can be used to separate content in two directions, vertical or horizontal."}}},c={title:"Components/Divider",...i},a=e=>e.type==="vertical"?o`<div style="height: 100px;">
        <atom-divider type="${e.type}" />
      </div>`:o`<atom-divider type="${e.type}" />`,r={render:e=>a(e),args:{type:"horizontal"}},t={render:e=>a(e),args:{type:"vertical"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => createDivider(args),
  args: {
    type: 'horizontal'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => createDivider(args),
  args: {
    type: 'vertical'
  }
}`,...t.parameters?.docs?.source}}};const d=["Horizontal","Vertical"];export{r as Horizontal,t as Vertical,d as __namedExportsOrder,c as default};

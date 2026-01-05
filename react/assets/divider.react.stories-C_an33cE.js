import{j as o}from"./iframe-Y5q5_7iz.js";import{t as a}from"./index-DrDfSPuT.js";import"./preload-helper-PPVm8Dsz.js";const s={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"The Divider is a thin line that helps separate and group content in the interface. This component can also be used to define rhythm and order."}}},argTypes:{type:{control:"select",options:["horizontal","vertical"],defaultValue:{summary:"horizontal"},description:"The type of the divider, will change your anatomy. The component can be used to separate content in two directions, vertical or horizontal."}}},d={title:"Components/Divider",component:a,...s},n=e=>e.type==="vertical"?o.jsx("div",{style:{height:"100px"},children:o.jsx(a,{type:e.type})}):o.jsx(a,{type:e.type}),r={render:e=>n(e),args:{type:"horizontal"}},t={render:e=>n(e),args:{type:"vertical"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => createDivider(args),
  args: {
    type: 'horizontal'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => createDivider(args),
  args: {
    type: 'vertical'
  }
}`,...t.parameters?.docs?.source}}};const l=["Horizontal","Vertical"];export{r as Horizontal,t as Vertical,l as __namedExportsOrder,d as default};

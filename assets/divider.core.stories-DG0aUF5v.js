import{P as e}from"./iframe-D71TlG5e.js";var t={title:`Components/Divider`,decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`The Divider is a thin line that helps separate and group content in the interface. This component can also be used to define rhythm and order.`}}},argTypes:{type:{control:`select`,options:[`horizontal`,`vertical`],defaultValue:{summary:`horizontal`},description:`The type of the divider, will change your anatomy. The component can be used to separate content in two directions, vertical or horizontal.`}}},n=t=>t.type===`vertical`?e`<div style="height: 100px;">
        <atom-divider type="${t.type}" />
      </div>`:e`<atom-divider type="${t.type}" />`,r={render:e=>n(e),args:{type:`horizontal`}},i={render:e=>n(e),args:{type:`vertical`}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => createDivider(args),
  args: {
    type: 'horizontal'
  }
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => createDivider(args),
  args: {
    type: 'vertical'
  }
}`,...i.parameters?.docs?.source}}};var a=[`Horizontal`,`Vertical`];export{r as Horizontal,i as Vertical,a as __namedExportsOrder,t as default};
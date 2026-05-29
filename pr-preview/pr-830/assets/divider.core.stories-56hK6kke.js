import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{at as t,st as n}from"./storybook-BGas7WAn.js";var r,i=e((()=>{r={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`The Divider is a thin line that helps separate and group content in the interface. This component can also be used to define rhythm and order.`}}},argTypes:{type:{control:`select`,options:[`horizontal`,`vertical`],defaultValue:{summary:`horizontal`},description:`The type of the divider, will change your anatomy. The component can be used to separate content in two directions, vertical or horizontal.`}}}})),a,o,s,c,l;e((()=>{t(),i(),a={title:`Components/Divider`,...r},o=e=>e.type===`vertical`?n`<div style="height: 100px;">
        <atom-divider type="${e.type}" />
      </div>`:n`<atom-divider type="${e.type}" />`,s={render:e=>o(e),args:{type:`horizontal`}},c={render:e=>o(e),args:{type:`vertical`}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createDivider(args),
  args: {
    type: 'horizontal'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createDivider(args),
  args: {
    type: 'vertical'
  }
}`,...c.parameters?.docs?.source}}},l=[`Horizontal`,`Vertical`]}))();export{s as Horizontal,c as Vertical,l as __namedExportsOrder,a as default};
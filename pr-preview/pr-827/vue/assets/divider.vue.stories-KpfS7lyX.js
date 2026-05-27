import{i as e}from"./preload-helper-xPQekRTU.js";import{A as t,t as n}from"./iframe-DXL-kbP2.js";var r,i=e((()=>{r={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`The Divider is a thin line that helps separate and group content in the interface. This component can also be used to define rhythm and order.`}}},argTypes:{type:{control:`select`,options:[`horizontal`,`vertical`],defaultValue:{summary:`horizontal`},description:`The type of the divider, will change your anatomy. The component can be used to separate content in two directions, vertical or horizontal.`}}}})),a,o,s,c,l;e((()=>{n(),i(),a={title:`Components/Divider`,...r},o=e=>({components:{AtomDivider:t},setup(){return{args:e}},template:`
  <div v-if="args.type === 'vertical'" style="height: 100px">
    <AtomDivider :type="args.type" />
  </div>
  <AtomDivider v-else :type="args.type" />
  `}),s={render:e=>o(e),args:{type:`horizontal`}},c={render:e=>o(e),args:{type:`vertical`}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
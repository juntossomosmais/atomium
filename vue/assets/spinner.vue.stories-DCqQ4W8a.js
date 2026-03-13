import{B as e}from"./iframe-DHKEqBzE.js";import{t}from"./table-DZkiv1k4.js";var n={title:`Components/Spinner`,decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`The Spinner component is a loading indicator that can be used to indicate that a process is running.`}}},argTypes:{type:{control:`select`,options:[`primary`,`secondary`,`dark`],defaultValue:{summary:`primary`},description:`The type of the Spinner, the component will receive the color according to its type.`,table:{category:t.PROPERTIES}},size:{control:`number`,defaultValue:{summary:40},description:`The size of the Spinner.`,table:{category:t.PROPERTIES}}}},r=t=>({components:{AtomSpinner:e},setup(){return{args:t}},template:`<AtomSpinner type="${t.type}" size="${t.size}" />`}),i={render:e=>r(e),args:{size:40,type:`primary`}},a={render:e=>r(e),args:{...i.args,type:`secondary`}},o={render:e=>r(e),args:{...i.args,type:`dark`}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => createSpinner(args),
  args: {
    size: 40,
    type: 'primary'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => createSpinner(args),
  args: {
    ...Primary.args,
    type: 'secondary'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createSpinner(args),
  args: {
    ...Primary.args,
    type: 'dark'
  }
}`,...o.parameters?.docs?.source}}};var s=[`Primary`,`Secondary`,`Dark`];export{o as Dark,i as Primary,a as Secondary,s as __namedExportsOrder,n as default};
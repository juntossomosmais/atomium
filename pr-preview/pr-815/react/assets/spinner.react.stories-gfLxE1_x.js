import"./chunk-DseTPa7n.js";import{t as e}from"./react-BeYaFARg.js";import{t}from"./jsx-runtime-DsGsusFP.js";import"./react-dom-BaYUCVRd.js";import"./index--pUmmU2V-CE9k8Uy1.js";import{C as n}from"./esm-BiOou3EM.js";import{t as r}from"./table-jqz5s6A8.js";e();var i={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`The Spinner component is a loading indicator that can be used to indicate that a process is running.`}}},argTypes:{type:{control:`select`,options:[`primary`,`secondary`,`dark`],defaultValue:{summary:`primary`},description:`The type of the Spinner, the component will receive the color according to its type.`,table:{category:r.PROPERTIES}},size:{control:`number`,defaultValue:{summary:40},description:`The size of the Spinner.`,table:{category:r.PROPERTIES}}}},a=t(),o={title:`Components/Spinner`,component:n,...i},s=e=>(0,a.jsx)(n,{type:e.type,number:e.number}),c={render:e=>s(e),args:{number:40,type:`primary`}},l={render:e=>s(e),args:{...c.args,type:`secondary`}},u={render:e=>s(e),args:{...c.args,type:`dark`}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createSpinner(args),
  args: {
    number: 40,
    type: 'primary'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createSpinner(args),
  args: {
    ...Primary.args,
    type: 'secondary'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createSpinner(args),
  args: {
    ...Primary.args,
    type: 'dark'
  }
}`,...u.parameters?.docs?.source}}};var d=[`Primary`,`Secondary`,`Dark`];export{u as Dark,c as Primary,l as Secondary,d as __namedExportsOrder,o as default};
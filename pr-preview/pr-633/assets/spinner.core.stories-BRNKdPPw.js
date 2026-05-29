import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{at as t,st as n}from"./storybook-BXAm_t_n.js";import{n as r,t as i}from"./table-DMN4TomJ.js";var a,o=e((()=>{r(),a={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`The Spinner component is a loading indicator that can be used to indicate that a process is running.`}}},argTypes:{type:{control:`select`,options:[`primary`,`secondary`,`dark`],defaultValue:{summary:`primary`},description:`The type of the Spinner, the component will receive the color according to its type.`,table:{category:i.PROPERTIES}},size:{control:`number`,defaultValue:{summary:40},description:`The size of the Spinner.`,table:{category:i.PROPERTIES}}}}})),s,c,l,u,d,f;e((()=>{t(),o(),s={title:`Components/Spinner`,...a},c=e=>n`<atom-spinner type="${e.type}" size="${e.size}" />`,l={render:e=>c(e),args:{size:40,type:`primary`}},u={render:e=>c(e),args:{...l.args,type:`secondary`}},d={render:e=>c(e),args:{...l.args,type:`dark`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createSpinner(args),
  args: {
    size: 40,
    type: 'primary'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createSpinner(args),
  args: {
    ...Primary.args,
    type: 'secondary'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createSpinner(args),
  args: {
    ...Primary.args,
    type: 'dark'
  }
}`,...d.parameters?.docs?.source}}},f=[`Primary`,`Secondary`,`Dark`]}))();export{d as Dark,l as Primary,u as Secondary,f as __namedExportsOrder,s as default};
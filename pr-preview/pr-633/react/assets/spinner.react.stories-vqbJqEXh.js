import{i as e}from"./preload-helper-xPQekRTU.js";import{U as t,X as n}from"./iframe-BPQKd2BW.js";import{f as r,t as i}from"./dist-CjNPGhlR.js";import{n as a,t as o}from"./table-CVkdcsHV.js";var s,c=e((()=>{a(),s={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`The Spinner component is a loading indicator that can be used to indicate that a process is running.`}}},argTypes:{type:{control:`select`,options:[`primary`,`secondary`,`dark`],defaultValue:{summary:`primary`},description:`The type of the Spinner, the component will receive the color according to its type.`,table:{category:o.PROPERTIES}},size:{control:`number`,defaultValue:{summary:40},description:`The size of the Spinner.`,table:{category:o.PROPERTIES}}}}})),l,u,d,f,p,m,h;e((()=>{i(),n(),c(),l=t(),u={title:`Components/Spinner`,component:r,...s},d=e=>(0,l.jsx)(r,{type:e.type,number:e.number}),f={render:e=>d(e),args:{number:40,type:`primary`}},p={render:e=>d(e),args:{...f.args,type:`secondary`}},m={render:e=>d(e),args:{...f.args,type:`dark`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createSpinner(args),
  args: {
    number: 40,
    type: 'primary'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createSpinner(args),
  args: {
    ...Primary.args,
    type: 'secondary'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createSpinner(args),
  args: {
    ...Primary.args,
    type: 'dark'
  }
}`,...m.parameters?.docs?.source}}},h=[`Primary`,`Secondary`,`Dark`]}))();export{m as Dark,f as Primary,p as Secondary,h as __namedExportsOrder,u as default};
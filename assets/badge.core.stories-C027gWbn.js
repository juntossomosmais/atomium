import{N as p}from"./iframe-6kEofrSV.js";import"./preload-helper-PPVm8Dsz.js";const m={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Badges are inline block elements that usually appear near another element. Read the [Ionic documentation](https://ionicframework.com/docs/api/Badge) for more information about this component."}}},argTypes:{type:{control:"select",options:["primary","secondary","info","success","warning","danger","neutral","dark"],defaultValue:{summary:"primary"},description:"The type of the badge, the component will receive the color according to its type."},label:{control:"text",description:"The label of the badge"}}},y={title:"Components/Badge",...m},a=r=>p` <atom-badge type="${r.type}"> ${r.label} </atom-badge> `,e={render:r=>a(r),args:{type:"primary",label:"Badge"}},s={render:r=>a(r),args:{...e.args,type:"secondary"}},n={render:r=>a(r),args:{...e.args,type:"info"}},o={render:r=>a(r),args:{...e.args,type:"success"}},t={render:r=>a(r),args:{...e.args,type:"warning"}},c={render:r=>a(r),args:{...e.args,type:"danger"}},g={render:r=>a(r),args:{...e.args,type:"neutral"}},d={render:r=>a(r),args:{...e.args,type:"dark"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    type: 'primary',
    label: 'Badge'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'secondary'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'info'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'success'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'warning'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'danger'
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'neutral'
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'dark'
  }
}`,...d.parameters?.docs?.source}}};const l=["Primary","Secondary","Info","Success","Warning","Danger","Neutral","Dark"];export{c as Danger,d as Dark,n as Info,g as Neutral,e as Primary,s as Secondary,o as Success,t as Warning,l as __namedExportsOrder,y as default};

import{j as m}from"./iframe-D1tf9FLi.js";import{l as p}from"./index-DCGZOIrA.js";import"./preload-helper-PPVm8Dsz.js";const i={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Badges are inline block elements that usually appear near another element. Read the [Ionic documentation](https://ionicframework.com/docs/api/Badge) for more information about this component."}}},argTypes:{type:{control:"select",options:["primary","secondary","info","success","warning","danger","neutral","dark"],defaultValue:{summary:"primary"},description:"The type of the badge, the component will receive the color according to its type."},label:{control:"text",description:"The label of the badge"}}},B={title:"Components/Badge",component:p,...i},a=r=>m.jsx(p,{color:r.color,children:r.label}),e={render:r=>a(r),args:{type:"primary",label:"Badge"}},s={render:r=>a(r),args:{...e.args,type:"secondary"}},n={render:r=>a(r),args:{...e.args,type:"success"}},o={render:r=>a(r),args:{...e.args,type:"warning"}},t={render:r=>a(r),args:{...e.args,type:"danger"}},c={render:r=>a(r),args:{...e.args,type:"neutral"}},d={render:r=>a(r),args:{...e.args,type:"dark"}},g={render:r=>a(r),args:{...e.args,type:"info"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    type: 'success'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'warning'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'danger'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'neutral'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'dark'
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'info'
  }
}`,...g.parameters?.docs?.source}}};const f=["Primary","Secondary","Success","Warning","Danger","Neutral","Dark","Info"];export{t as Danger,d as Dark,g as Info,c as Neutral,e as Primary,s as Secondary,n as Success,o as Warning,f as __namedExportsOrder,B as default};

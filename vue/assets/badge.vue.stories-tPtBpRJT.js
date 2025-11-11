import{G as p}from"./iframe-DRqdK8Tb.js";import"./preload-helper-PPVm8Dsz.js";const m={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Badges are inline block elements that usually appear near another element. Read the [Ionic documentation](https://ionicframework.com/docs/api/Badge) for more information about this component."}}},argTypes:{type:{control:"select",options:["primary","secondary","info","success","warning","danger","neutral","dark"],defaultValue:{summary:"primary"},description:"The type of the badge, the component will receive the color according to its type."},label:{control:"text",description:"The label of the badge"}}},y={title:"Components/Badge",...m},a=r=>({components:{AtomBadge:p},setup(){return{args:r}},template:`
    <AtomBadge type="${r.type}">{{ args.label }}</AtomBadge>
  `}),e={render:r=>a(r),args:{type:"primary",label:"Badge"}},s={render:r=>a(r),args:{...e.args,type:"secondary"}},n={render:r=>a(r),args:{...e.args,type:"success"}},t={render:r=>a(r),args:{...e.args,type:"warning"}},o={render:r=>a(r),args:{...e.args,type:"danger"}},c={render:r=>a(r),args:{...e.args,type:"neutral"}},g={render:r=>a(r),args:{...e.args,type:"dark"}},d={render:r=>a(r),args:{...e.args,type:"info"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'warning'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'danger'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'neutral'
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'dark'
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'info'
  }
}`,...d.parameters?.docs?.source}}};const l=["Primary","Secondary","Success","Warning","Danger","Neutral","Dark","Info"];export{o as Danger,g as Dark,d as Info,c as Neutral,e as Primary,s as Secondary,n as Success,t as Warning,l as __namedExportsOrder,y as default};

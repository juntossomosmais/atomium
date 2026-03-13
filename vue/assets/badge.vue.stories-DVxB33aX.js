import{y as e}from"./iframe-DHKEqBzE.js";var t={title:`Components/Badge`,decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`Badges are inline block elements that usually appear near another element. Read the [Ionic documentation](https://ionicframework.com/docs/api/Badge) for more information about this component.`}}},argTypes:{type:{control:`select`,options:[`primary`,`secondary`,`info`,`success`,`warning`,`danger`,`neutral`,`dark`],defaultValue:{summary:`primary`},description:`The type of the badge, the component will receive the color according to its type.`},label:{control:`text`,description:`The label of the badge`}}},n=t=>({components:{AtomBadge:e},setup(){return{args:t}},template:`
    <AtomBadge type="${t.type}">{{ args.label }}</AtomBadge>
  `}),r={render:e=>n(e),args:{type:`primary`,label:`Badge`}},i={render:e=>n(e),args:{...r.args,type:`secondary`}},a={render:e=>n(e),args:{...r.args,type:`success`}},o={render:e=>n(e),args:{...r.args,type:`warning`}},s={render:e=>n(e),args:{...r.args,type:`danger`}},c={render:e=>n(e),args:{...r.args,type:`neutral`}},l={render:e=>n(e),args:{...r.args,type:`dark`}},u={render:e=>n(e),args:{...r.args,type:`info`}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    type: 'primary',
    label: 'Badge'
  }
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'secondary'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'success'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'warning'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'danger'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'neutral'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'dark'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'info'
  }
}`,...u.parameters?.docs?.source}}};var d=[`Primary`,`Secondary`,`Success`,`Warning`,`Danger`,`Neutral`,`Dark`,`Info`];export{s as Danger,l as Dark,u as Info,c as Neutral,r as Primary,i as Secondary,a as Success,o as Warning,d as __namedExportsOrder,t as default};
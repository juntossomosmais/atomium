import{H as e}from"./storybook-CfikGCXO.js";var t={title:`Components/Badge`,decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`Badges are inline block elements that usually appear near another element. Read the [Ionic documentation](https://ionicframework.com/docs/api/Badge) for more information about this component.`}}},argTypes:{type:{control:`select`,options:[`primary`,`secondary`,`info`,`success`,`warning`,`danger`,`neutral`,`dark`],defaultValue:{summary:`primary`},description:`The type of the badge, the component will receive the color according to its type.`},label:{control:`text`,description:`The label of the badge`}}},n=t=>e` <atom-badge type="${t.type}"> ${t.label} </atom-badge> `,r={render:e=>n(e),args:{type:`primary`,label:`Badge`}},i={render:e=>n(e),args:{...r.args,type:`secondary`}},a={render:e=>n(e),args:{...r.args,type:`info`}},o={render:e=>n(e),args:{...r.args,type:`success`}},s={render:e=>n(e),args:{...r.args,type:`warning`}},c={render:e=>n(e),args:{...r.args,type:`danger`}},l={render:e=>n(e),args:{...r.args,type:`neutral`}},u={render:e=>n(e),args:{...r.args,type:`dark`}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    type: 'info'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'success'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'warning'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'danger'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'neutral'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'dark'
  }
}`,...u.parameters?.docs?.source}}};var d=[`Primary`,`Secondary`,`Info`,`Success`,`Warning`,`Danger`,`Neutral`,`Dark`];export{c as Danger,u as Dark,a as Info,l as Neutral,r as Primary,i as Secondary,o as Success,s as Warning,d as __namedExportsOrder,t as default};
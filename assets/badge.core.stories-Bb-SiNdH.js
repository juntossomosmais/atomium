import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{at as t,st as n}from"./storybook-QNCAwT6t.js";var r,i=e((()=>{r={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`Badges are inline block elements that usually appear near another element. Read the [Ionic documentation](https://ionicframework.com/docs/api/Badge) for more information about this component.`}}},argTypes:{type:{control:`select`,options:[`primary`,`secondary`,`info`,`success`,`warning`,`danger`,`neutral`,`dark`],defaultValue:{summary:`primary`},description:`The type of the badge, the component will receive the color according to its type.`},label:{control:`text`,description:`The label of the badge`}}}})),a,o,s,c,l,u,d,f,p,m,h;e((()=>{t(),i(),a={title:`Components/Badge`,...r},o=e=>n` <atom-badge type="${e.type}"> ${e.label} </atom-badge> `,s={render:e=>o(e),args:{type:`primary`,label:`Badge`}},c={render:e=>o(e),args:{...s.args,type:`secondary`}},l={render:e=>o(e),args:{...s.args,type:`info`}},u={render:e=>o(e),args:{...s.args,type:`success`}},d={render:e=>o(e),args:{...s.args,type:`warning`}},f={render:e=>o(e),args:{...s.args,type:`danger`}},p={render:e=>o(e),args:{...s.args,type:`neutral`}},m={render:e=>o(e),args:{...s.args,type:`dark`}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    type: 'primary',
    label: 'Badge'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'secondary'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'info'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'success'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'warning'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'danger'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'neutral'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'dark'
  }
}`,...m.parameters?.docs?.source}}},h=[`Primary`,`Secondary`,`Info`,`Success`,`Warning`,`Danger`,`Neutral`,`Dark`]}))();export{f as Danger,m as Dark,l as Info,p as Neutral,s as Primary,c as Secondary,u as Success,d as Warning,h as __namedExportsOrder,a as default};
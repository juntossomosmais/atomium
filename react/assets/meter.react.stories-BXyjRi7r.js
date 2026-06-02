import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./react-CnPKFcMr.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{S as r,t as i}from"./dist-BxD50d_r.js";var a,o=e((()=>{a={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`Meters are visual representations of a quantity or an achievement. Their progress is determined by the actions of the user, not by the actions of the  system. This last point is what differentiates them from the progress bar.`}}},argTypes:{type:{control:`select`,options:[`neutral`,`success`,`warning`,`danger`],defaultValue:{summary:`neutral`},description:`The type of the Meter, the component will receive the color according to its type.`},size:{control:`select`,options:[`large`,`small`],defaultValue:{summary:`large`},description:`The size of the Meter, the componente will receive the size according to its prop.`},title:{control:`text`,description:`Top title of the Meter, at the top left of the component.`},hasCenterTitle:{control:`boolean`,defaultValue:{summary:!1},description:`The prop to center the title.`},min:{control:`number`,description:`Minimum value for progression calculation.`},max:{control:`number`,description:`Max value for progression calculation.`},actual:{control:`number`,description:`Actual value for progression calculation.`},content:{control:`text`,description:`This prop is a children, used to fill the slot of the component.`}}}})),s,c,l,u,d,f,p,m,h;e((()=>{t(),i(),o(),s=n(),c={title:`Components/Meter`,component:r,...a},l=e=>(0,s.jsx)(r,{type:e.type,size:e.size,title:e.title,hasCenterTitle:e.hasCenterTitle,min:e.min,max:e.max,actual:e.actual,children:`Children`}),u={render:e=>l(e),args:{title:`Meter`,type:`neutral`,hasCenterTitle:!1,size:`large`,min:1,max:6,actual:4,content:``}},d={render:e=>l(e),args:{...u.args,type:`success`}},f={render:e=>l(e),args:{...u.args,type:`warning`}},p={render:e=>l(e),args:{...u.args,type:`danger`}},m={render:e=>l(e),args:{...u.args,title:`Small Meter`,size:`small`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    title: 'Meter',
    type: 'neutral',
    hasCenterTitle: false,
    size: 'large',
    min: 1,
    max: 6,
    actual: 4,
    content: ''
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Neutral.args,
    type: 'success'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Neutral.args,
    type: 'warning'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Neutral.args,
    type: 'danger'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Neutral.args,
    title: 'Small Meter',
    size: 'small'
  }
}`,...m.parameters?.docs?.source}}},h=[`Neutral`,`Success`,`Warning`,`Danger`,`Small`]}))();export{p as Danger,u as Neutral,m as Small,d as Success,f as Warning,h as __namedExportsOrder,c as default};
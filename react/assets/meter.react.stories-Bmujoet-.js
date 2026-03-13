import"./chunk-DseTPa7n.js";import{t as e}from"./react-BeYaFARg.js";import{t}from"./jsx-runtime-DsGsusFP.js";import"./react-dom-BaYUCVRd.js";import"./index--pUmmU2V-CE9k8Uy1.js";import{v as n}from"./esm-BiOou3EM.js";e();var r={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`Meters are visual representations of a quantity or an achievement. Their progress is determined by the actions of the user, not by the actions of the  system. This last point is what differentiates them from the progress bar.`}}},argTypes:{type:{control:`select`,options:[`neutral`,`success`,`warning`,`danger`],defaultValue:{summary:`neutral`},description:`The type of the Meter, the component will receive the color according to its type.`},size:{control:`select`,options:[`large`,`small`],defaultValue:{summary:`large`},description:`The size of the Meter, the componente will receive the size according to its prop.`},title:{control:`text`,description:`Top title of the Meter, at the top left of the component.`},hasCenterTitle:{control:`boolean`,defaultValue:{summary:!1},description:`The prop to center the title.`},min:{control:`number`,description:`Minimum value for progression calculation.`},max:{control:`number`,description:`Max value for progression calculation.`},actual:{control:`number`,description:`Actual value for progression calculation.`},content:{control:`text`,description:`This prop is a children, used to fill the slot of the component.`}}},i=t(),a={title:`Components/Meter`,component:n,...r},o=e=>(0,i.jsx)(n,{type:e.type,size:e.size,title:e.title,hasCenterTitle:e.hasCenterTitle,min:e.min,max:e.max,actual:e.actual,children:`Children`}),s={render:e=>o(e),args:{title:`Meter`,type:`neutral`,hasCenterTitle:!1,size:`large`,min:1,max:6,actual:4,content:``}},c={render:e=>o(e),args:{...s.args,type:`success`}},l={render:e=>o(e),args:{...s.args,type:`warning`}},u={render:e=>o(e),args:{...s.args,type:`danger`}},d={render:e=>o(e),args:{...s.args,title:`Small Meter`,size:`small`}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Neutral.args,
    type: 'success'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Neutral.args,
    type: 'warning'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Neutral.args,
    type: 'danger'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Neutral.args,
    title: 'Small Meter',
    size: 'small'
  }
}`,...d.parameters?.docs?.source}}};var f=[`Neutral`,`Success`,`Warning`,`Danger`,`Small`];export{u as Danger,s as Neutral,d as Small,c as Success,l as Warning,f as __namedExportsOrder,a as default};
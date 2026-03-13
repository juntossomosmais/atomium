import{H as e}from"./storybook-CfikGCXO.js";var t={title:`Components/Meter`,decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`Meters are visual representations of a quantity or an achievement. Their progress is determined by the actions of the user, not by the actions of the  system. This last point is what differentiates them from the progress bar.`}}},argTypes:{type:{control:`select`,options:[`neutral`,`success`,`warning`,`danger`],defaultValue:{summary:`neutral`},description:`The type of the Meter, the component will receive the color according to its type.`},size:{control:`select`,options:[`large`,`small`],defaultValue:{summary:`large`},description:`The size of the Meter, the componente will receive the size according to its prop.`},title:{control:`text`,description:`Top title of the Meter, at the top left of the component.`},hasCenterTitle:{control:`boolean`,defaultValue:{summary:!1},description:`The prop to center the title.`},min:{control:`number`,description:`Minimum value for progression calculation.`},max:{control:`number`,description:`Max value for progression calculation.`},actual:{control:`number`,description:`Actual value for progression calculation.`},content:{control:`text`,description:`This prop is a children, used to fill the slot of the component.`}}},n=t=>e`<atom-meter
    .type=${t.type}
    .size=${t.size}
    .title=${t.title}
    .hasCenterTitle=${t.hasCenterTitle}
    .min=${t.min}
    .max=${t.max}
    .actual=${t.actual}
  >
    <div>${t.content||`${t.actual} of ${t.max}`}</div>
  </atom-meter>`,r={render:e=>n(e),args:{title:`Meter`,type:`neutral`,hasCenterTitle:!1,size:`large`,min:1,max:6,actual:4,content:``}},i={render:e=>n(e),args:{...r.args,type:`success`}},a={render:e=>n(e),args:{...r.args,type:`warning`}},o={render:e=>n(e),args:{...r.args,type:`danger`}},s={render:e=>n(e),args:{...r.args,title:`Small Meter`,size:`small`}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Neutral.args,
    type: 'success'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Neutral.args,
    type: 'warning'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Neutral.args,
    type: 'danger'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Neutral.args,
    title: 'Small Meter',
    size: 'small'
  }
}`,...s.parameters?.docs?.source}}};var c=[`Neutral`,`Success`,`Warning`,`Danger`,`Small`];export{o as Danger,r as Neutral,s as Small,i as Success,a as Warning,c as __namedExportsOrder,t as default};
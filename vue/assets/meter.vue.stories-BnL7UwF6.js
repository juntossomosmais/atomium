import{a1 as c}from"./iframe-D2cqz6gf.js";import"./preload-helper-PPVm8Dsz.js";const i={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Meters are visual representations of a quantity or an achievement. Their progress is determined by the actions of the user, not by the actions of the  system. This last point is what differentiates them from the progress bar."}}},argTypes:{type:{control:"select",options:["neutral","success","warning","danger"],defaultValue:{summary:"neutral"},description:"The type of the Meter, the component will receive the color according to its type."},size:{control:"select",options:["large","small"],defaultValue:{summary:"large"},description:"The size of the Meter, the componente will receive the size according to its prop."},title:{control:"text",description:"Top title of the Meter, at the top left of the component."},hasCenterTitle:{control:"boolean",defaultValue:{summary:!1},description:"The prop to center the title."},min:{control:"number",description:"Minimum value for progression calculation."},max:{control:"number",description:"Max value for progression calculation."},actual:{control:"number",description:"Actual value for progression calculation."},content:{control:"text",description:"This prop is a children, used to fill the slot of the component."}}},m={title:"Components/Meter",...i},t=e=>({components:{AtomMeter:c},setup(){return{args:e}},template:`
    <AtomMeter
      type="${e.type}"
      size="${e.size}"
      title="${e.title}"
      hasCenterTitle="${e.hasCenterTitle}"
      min="${e.min}"
      max="${e.max}"
      actual="${e.actual}"
    >
      Children
    </AtomMeter>
  `}),r={render:e=>t(e),args:{title:"Meter",type:"neutral",hasCenterTitle:!1,size:"large",min:1,max:6,actual:4,content:""}},a={render:e=>t(e),args:{...r.args,type:"success"}},s={render:e=>t(e),args:{...r.args,type:"warning"}},n={render:e=>t(e),args:{...r.args,type:"danger"}},o={render:e=>t(e),args:{...r.args,title:"Small Meter",size:"small"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Neutral.args,
    type: 'success'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Neutral.args,
    type: 'warning'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Neutral.args,
    type: 'danger'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Neutral.args,
    title: 'Small Meter',
    size: 'small'
  }
}`,...o.parameters?.docs?.source}}};const u=["Neutral","Success","Warning","Danger","Small"];export{n as Danger,r as Neutral,o as Small,a as Success,s as Warning,u as __namedExportsOrder,m as default};

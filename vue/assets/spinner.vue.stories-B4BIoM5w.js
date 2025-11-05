import{I as o}from"./index-D9gi79PD.js";import{C as t}from"./table-D060eKuu.js";import"./vue.esm-bundler-X36X5nj_.js";import"./iframe-DdQc9Zgb.js";const p={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"The Spinner component is a loading indicator that can be used to indicate that a process is running."}}},argTypes:{type:{control:"select",options:["primary","secondary","dark"],defaultValue:{summary:"primary"},description:"The type of the Spinner, the component will receive the color according to its type.",table:{category:t.PROPERTIES}},size:{control:"number",defaultValue:{summary:40},description:"The size of the Spinner.",table:{category:t.PROPERTIES}}}},y={title:"Components/Spinner",...p},s=r=>({components:{AtomSpinner:o},setup(){return{args:r}},template:`<AtomSpinner type="${r.type}" size="${r.size}" />`}),e={render:r=>s(r),args:{size:40,type:"primary"}},a={render:r=>s(r),args:{...e.args,type:"secondary"}},n={render:r=>s(r),args:{...e.args,type:"dark"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => createSpinner(args),
  args: {
    size: 40,
    type: 'primary'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => createSpinner(args),
  args: {
    ...Primary.args,
    type: 'secondary'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createSpinner(args),
  args: {
    ...Primary.args,
    type: 'dark'
  }
}`,...n.parameters?.docs?.source}}};const g=["Primary","Secondary","Dark"];export{n as Dark,e as Primary,a as Secondary,g as __namedExportsOrder,y as default};

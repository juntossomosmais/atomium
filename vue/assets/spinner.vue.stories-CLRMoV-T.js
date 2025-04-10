import{D as l}from"./index-Bu8Hsbg3.js";import{C as t}from"./table-D060eKuu.js";import"./vue.esm-bundler-UQm0beuB.js";import"./iframe-87RGVhWz.js";const S={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"The Spinner component is a loading indicator that can be used to indicate that a process is running."}}},argTypes:{type:{control:"select",options:["primary","secondary","dark"],defaultValue:{summary:"primary"},description:"The type of the Spinner, the component will receive the color according to its type.",table:{category:t.PROPERTIES}},size:{control:"number",defaultValue:{summary:40},description:"The size of the Spinner.",table:{category:t.PROPERTIES}}}},T={title:"Components/Spinner",...S},s=r=>({components:{AtomSpinner:l},setup(){return{args:r}},template:`<AtomSpinner type="${r.type}" size="${r.size}" />`}),e={render:r=>s(r),args:{size:40,type:"primary"}},a={render:r=>s(r),args:{...e.args,type:"secondary"}},n={render:r=>s(r),args:{...e.args,type:"dark"}};var o,p,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => createSpinner(args),
  args: {
    size: 40,
    type: 'primary'
  }
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var c,m,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => createSpinner(args),
  args: {
    ...Primary.args,
    type: 'secondary'
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var y,g,u;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => createSpinner(args),
  args: {
    ...Primary.args,
    type: 'dark'
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const k=["Primary","Secondary","Dark"];export{n as Dark,e as Primary,a as Secondary,k as __namedExportsOrder,T as default};

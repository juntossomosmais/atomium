import{t as u}from"./index-DVdXa43r.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-CZ2Tkf3r.js";import"../sb-preview/runtime.js";const g={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Spinners are inline block elements that usually appear near another element. Read the [Ionic documentation](https://ionicframework.com/docs/api/Spinner) for more information about this component."}}},argTypes:{type:{control:"select",options:["primary","secondary","dark"],defaultValue:{summary:"primary"},description:"The type of the Spinner, the component will receive the color according to its type."},size:{control:"text",defaultValue:{summary:20},description:"The type of the Spinner, the component will receive the color according to its type."}}},_={title:"Components/Spinner",...g},o=e=>({components:{AtomSpinner:u},setup(){return{args:e}},template:`<AtomSpinner type="${e.type}"/>`}),r={render:e=>o(e),args:{type:"primary"}},n={render:e=>o(e),args:{type:"secondary"}},t={render:e=>o(e),args:{type:"dark"}};var a,s,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => createSpinner(args),
  args: {
    type: 'primary'
  }
}`,...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,i,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => createSpinner(args),
  args: {
    type: 'secondary'
  }
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,y,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => createSpinner(args),
  args: {
    type: 'dark'
  }
}`,...(l=(y=t.parameters)==null?void 0:y.docs)==null?void 0:l.source}}};const v=["Primary","Secondary","Dark"];export{t as Dark,r as Primary,n as Secondary,v as __namedExportsOrder,_ as default};

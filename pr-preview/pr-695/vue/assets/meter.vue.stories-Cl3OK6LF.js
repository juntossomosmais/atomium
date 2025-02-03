import{u as i}from"./index-DE-xml85.js";import"./vue.esm-bundler-cJVerQom.js";import"./iframe-Df2YDEQf.js";const l={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Meter"}}},argTypes:{type:{control:"select",options:["success","neutral","warning","danger"],defaultValue:{summary:"neutral"},description:"Meter"},size:{control:"select",options:["large","small"],defaultValue:{summary:"large"},description:"Meter"},title:{control:"text",description:"Meter"},value:{control:"text",defaultValue:{summary:"Lesgo"},description:"Meter"}}},g={title:"Components/Meter",...l},m=e=>({components:{AtomMeter:i},setup(){return{args:e}},template:`
    <AtomMeter type="${e.type}" />
  `}),r={render:e=>m(e),args:{type:"primary",label:"Meter"}},t={render:e=>m(e),args:{...r.args,type:"secondary"}};var a,s,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    type: 'primary',
    label: 'Meter'
  }
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var n,c,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Primary.args,
    type: 'secondary'
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const M=["Primary","Secondary"];export{r as Primary,t as Secondary,M as __namedExportsOrder,g as default};

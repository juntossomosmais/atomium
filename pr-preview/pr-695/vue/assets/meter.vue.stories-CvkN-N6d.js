import{u as i}from"./index-B3wovv9C.js";import"./vue.esm-bundler-cJVerQom.js";import"./iframe-DyGmooWK.js";const l={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Meter"}}},argTypes:{type:{control:"select",options:["horizontal","vertical"],defaultValue:{summary:"horizontal"},description:"Meter"},title:{control:"text",description:"Meter"},size:{control:"select",options:["small","large"],defaultValue:{summary:"large"},description:"Meter"},value:{control:"text",defaultValue:{summary:"Lesgo"},description:"Meter"}}},g={title:"Components/Meter",...l},m=e=>({components:{AtomMeter:i},setup(){return{args:e}},template:`
    <AtomMeter type="${e.type}" />
  `}),r={render:e=>m(e),args:{type:"primary",label:"Meter"}},t={render:e=>m(e),args:{...r.args,type:"secondary"}};var a,o,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    type: 'primary',
    label: 'Meter'
  }
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var n,c,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Primary.args,
    type: 'secondary'
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const M=["Primary","Secondary"];export{r as Primary,t as Secondary,M as __namedExportsOrder,g as default};

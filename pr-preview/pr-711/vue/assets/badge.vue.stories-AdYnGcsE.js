import{j as V}from"./index-CX4817rH.js";import"./vue.esm-bundler-cJVerQom.js";import"./iframe-BHffrrvX.js";const W={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Badges are inline block elements that usually appear near another element. Read the [Ionic documentation](https://ionicframework.com/docs/api/Badge) for more information about this component."}}},argTypes:{type:{control:"select",options:["primary","secondary","info","success","warning","danger","neutral","dark"],defaultValue:{summary:"primary"},description:"The type of the badge, the component will receive the color according to its type."},label:{control:"text",description:"The label of the badge"},size:{control:"select",options:["default","medium","large"],defaultValue:{summary:"default"},description:"The size of the badge.",table:{category:"Properties"}},shape:{control:"select",options:["round","rectangle"],description:"The shape of the badge.",table:{category:"Properties"}}}},O={title:"Components/Badge",...W},a=e=>({components:{AtomBadge:V},setup(){return{args:e}},template:`
    <AtomBadge type="${e.type} shape='${e.shape}'" size="${e.size}">
    >{{ args.label }}</AtomBadge>
  `}),r={render:e=>a(e),args:{type:"primary",label:"Badge",shape:"rounded",size:"default"}},s={render:e=>a(e),args:{...r.args,type:"secondary"}},n={render:e=>a(e),args:{...r.args,type:"success"}},t={render:e=>a(e),args:{...r.args,type:"warning"}},o={render:e=>a(e),args:{...r.args,type:"danger"}},c={render:e=>a(e),args:{...r.args,type:"neutral"}},d={render:e=>a(e),args:{...r.args,type:"dark"}},g={render:e=>a(e),args:{...r.args,type:"info"}};var p,i,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    type: 'primary',
    label: 'Badge',
    shape: 'rounded',
    size: 'default'
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,l,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'secondary'
  }
}`,...(y=(l=s.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var h,f,B;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'success'
  }
}`,...(B=(f=n.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var b,S,P;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'warning'
  }
}`,...(P=(S=t.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var k,z,w;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'danger'
  }
}`,...(w=(z=o.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var T,A,D;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'neutral'
  }
}`,...(D=(A=c.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var _,x,I;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'dark'
  }
}`,...(I=(x=d.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var $,v,N;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'info'
  }
}`,...(N=(v=g.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const R=["Primary","Secondary","Success","Warning","Danger","Neutral","Dark","Info"];export{o as Danger,d as Dark,g as Info,c as Neutral,r as Primary,s as Secondary,n as Success,t as Warning,R as __namedExportsOrder,O as default};

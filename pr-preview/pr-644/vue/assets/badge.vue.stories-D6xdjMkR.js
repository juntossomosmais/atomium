import{j as C}from"./index-Dp61JX1A.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-B-BqYba3.js";import"../sb-preview/runtime.js";const E={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Badges are inline block elements that usually appear near another element. Read the [Ionic documentation](https://ionicframework.com/docs/api/Badge) for more information about this component."}}},argTypes:{type:{control:"select",options:["primary","secondary","info","success","warning","danger","neutral","dark"],defaultValue:{summary:"primary"},description:"The type of the badge, the component will receive the color according to its type."},label:{control:"text",description:"The label of the badge"}}},q={title:"Components/Badge",...E},a=r=>({components:{AtomBadge:C},setup(){return{args:r}},template:`
    <AtomBadge type="${r.type}">{{ args.label }}</AtomBadge>
  `}),e={render:r=>a(r),args:{type:"primary",label:"Badge"}},s={render:r=>a(r),args:{...e.args,type:"secondary"}},n={render:r=>a(r),args:{...e.args,type:"success"}},t={render:r=>a(r),args:{...e.args,type:"warning"}},o={render:r=>a(r),args:{...e.args,type:"danger"}},c={render:r=>a(r),args:{...e.args,type:"neutral"}},g={render:r=>a(r),args:{...e.args,type:"dark"}},d={render:r=>a(r),args:{...e.args,type:"info"}};var p,m,i;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    type: 'primary',
    label: 'Badge'
  }
}`,...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var u,y,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'secondary'
  }
}`,...(l=(y=s.parameters)==null?void 0:y.docs)==null?void 0:l.source}}};var B,f,S;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'success'
  }
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var h,b,P;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'warning'
  }
}`,...(P=(b=t.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var k,w,A;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'danger'
  }
}`,...(A=(w=o.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var D,_,x;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'neutral'
  }
}`,...(x=(_=c.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var I,T,v;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'dark'
  }
}`,...(v=(T=g.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var N,W,j;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => createBadge(args),
  args: {
    ...Primary.args,
    type: 'info'
  }
}`,...(j=(W=d.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};const z=["Primary","Secondary","Success","Warning","Danger","Neutral","Dark","Info"];export{o as Danger,g as Dark,d as Info,c as Neutral,e as Primary,s as Secondary,n as Success,t as Warning,z as __namedExportsOrder,q as default};

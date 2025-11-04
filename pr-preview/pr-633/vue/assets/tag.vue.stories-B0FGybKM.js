import{L as rr}from"./index-DMJf9uqQ.js";import"./vue.esm-bundler-DtkqgEDl.js";import"./iframe-_1omw286.js";const er={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`Tags are non-interactive elements used to categorize, highlight or organize items in the interface. Because they have short keywords, they help in the quick recognition of a category or element. 
 
 Wrapper of Ionic Badge component. Read the [Ionic documentation](https://ionicframework.com/docs/api/badge) for more information about the available properties and possibilities.`}}},argTypes:{color:{control:"select",options:["success","warning","danger","neutral","dark","light"],defaultValue:{summary:"success"},description:"The type of the tag, the component will receive the color according to its type."},icon:{control:"text",description:"The name of the icon to use."},label:{control:"text",description:"The label of the tag"},customBackgroundColor:{control:"text",description:"The background color"},customTextColor:{control:"text",description:"The text and icon (if exists) color"}}},sr={title:"Components/Tag",...er},e=r=>({components:{AtomTag:rr},setup(){return{args:r}},template:`
    <AtomTag
      icon="${r.icon}"
      customBackgroundColor="${r.customBackgroundColor}"
      customTextColor="${r.customTextColor}"
      color="${r.color}"
    >
      {{ args.label }}
    </AtomTag>
  `}),o={render:r=>e(r),args:{color:"success",label:"Promotion",icon:""}},a={render:r=>e(r),args:{color:"success",label:"Promotion",icon:"tag"}},n={render:r=>e(r),args:{color:"danger",label:"Canceled",icon:""}},s={render:r=>e(r),args:{color:"danger",label:"Canceled",icon:"close-circle-outline"}},c={render:r=>e(r),args:{color:"warning",label:"In Progress",icon:""}},t={render:r=>e(r),args:{color:"warning",label:"In Progress",icon:"timer-outline"}},i={render:r=>e(r),args:{color:"info",label:"Partial Delivery",icon:""}},l={render:r=>e(r),args:{color:"info",label:"Partial Delivery",icon:"truck"}},g={render:r=>e(r),args:{color:"dark",label:"Most rescued",icon:""}},d={render:r=>e(r),args:{color:"dark",label:"Most rescued",icon:"wallet-giftcard"}},m={render:r=>e(r),args:{color:"light",label:"More Points",icon:""}},u={render:r=>e(r),args:{color:"light",label:"More Points",icon:"plus-thick"}},p={render:r=>e(r),args:{label:"Most Loved",icon:"heart",customBackgroundColor:"#a006fa",customTextColor:"#00ff95"}};var h,b,T;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'success',
    label: 'Promotion',
    icon: ''
  }
}`,...(T=(b=o.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var f,k,I;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'success',
    label: 'Promotion',
    icon: 'tag'
  }
}`,...(I=(k=a.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var C,S,W;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'danger',
    label: 'Canceled',
    icon: ''
  }
}`,...(W=(S=n.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var P,x,y;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'danger',
    label: 'Canceled',
    icon: 'close-circle-outline'
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var D,v,w;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'warning',
    label: 'In Progress',
    icon: ''
  }
}`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var M,B,L;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'warning',
    label: 'In Progress',
    icon: 'timer-outline'
  }
}`,...(L=(B=t.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var A,_,$;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'info',
    label: 'Partial Delivery',
    icon: ''
  }
}`,...($=(_=i.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var z,q,E;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'info',
    label: 'Partial Delivery',
    icon: 'truck'
  }
}`,...(E=(q=l.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var O,R,V;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'dark',
    label: 'Most rescued',
    icon: ''
  }
}`,...(V=(R=g.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var j,F,G;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'dark',
    label: 'Most rescued',
    icon: 'wallet-giftcard'
  }
}`,...(G=(F=d.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,K;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'light',
    label: 'More Points',
    icon: ''
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,U;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'light',
    label: 'More Points',
    icon: 'plus-thick'
  }
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    label: 'Most Loved',
    icon: 'heart',
    customBackgroundColor: '#a006fa',
    customTextColor: '#00ff95'
  }
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const cr=["Success","SuccessWithIcon","Danger","DangerWithIcon","Warning","WarningWithIcon","Info","InfoWithIcon","Dark","DarkWithIcon","Light","LightWithIcon","CustomColor"];export{p as CustomColor,n as Danger,s as DangerWithIcon,g as Dark,d as DarkWithIcon,i as Info,l as InfoWithIcon,m as Light,u as LightWithIcon,o as Success,a as SuccessWithIcon,c as Warning,t as WarningWithIcon,cr as __namedExportsOrder,sr as default};

import{u as z}from"./index-HNhRIiAL.js";import"./vue.esm-bundler-cJVerQom.js";import"./iframe-CK_fbFLs.js";const v={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Meters are visual representations of a quantity or an achievement. Their progress is determined by the actions of the user, not by the actions of the  system. This last point is what differentiates them from the progress bar."}}},argTypes:{type:{control:"select",options:["neutral","success","warning","danger"],defaultValue:{summary:"neutral"},description:"The type of the Meter, the component will receive the color according to its type."},size:{control:"select",options:["large","small"],defaultValue:{summary:"large"},description:"The size of the Meter, the componente will receive the size according to its prop."},title:{control:"text",description:"Top title of the Meter, at the top left of the component."},centerTitle:{control:"boolean",defaultValue:{summary:!1},description:"The prop to center the title."},min:{control:"number",defaultValue:{summary:"0"},description:"Minimum value for progression calculation."},max:{control:"number",description:"Max value for progression calculation."},actual:{control:"number",defaultValue:{summary:"0"},description:"Actual value for progression calculation."},content:{control:"text",description:"This prop is a children, used to fill the slot of the component."}}},N={title:"Components/Meter",...v},t=e=>({components:{AtomMeter:z},setup(){return{args:e}},template:`
    <AtomMeter
      type="${e.type}"
      size="${e.size}"
      title="${e.title}"
      centerTitle="${e.centerTitle}"
      min="${e.min}"
      max="${e.max}"
      actual="${e.actual}"
    >
      Children
    </AtomMeter>
  `}),r={render:e=>t(e),args:{title:"Meter",type:"neutral",centerTitle:!1,size:"large",min:1,max:6,actual:4,content:""}},a={render:e=>t(e),args:{...r.args,type:"success"}},s={render:e=>t(e),args:{...r.args,type:"warning"}},n={render:e=>t(e),args:{...r.args,type:"danger"}},o={render:e=>t(e),args:{...r.args,title:"Small Meter",size:"small"}};var c,i,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    title: 'Meter',
    type: 'neutral',
    centerTitle: false,
    size: 'large',
    min: 1,
    max: 6,
    actual: 4,
    content: ''
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Neutral.args,
    type: 'success'
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,g,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Neutral.args,
    type: 'warning'
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,y,M;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Neutral.args,
    type: 'danger'
  }
}`,...(M=(y=n.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var T,S,x;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Neutral.args,
    title: 'Small Meter',
    size: 'small'
  }
}`,...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const A=["Neutral","Success","Warning","Danger","Small"];export{n as Danger,r as Neutral,o as Small,a as Success,s as Warning,A as __namedExportsOrder,N as default};

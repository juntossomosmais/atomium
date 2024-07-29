import{p as g}from"./index-xHZwO10H.js";import"./vue.esm-bundler-DLYZ4EJx.js";import"./iframe-DwiQIVkZ.js";import"../sb-preview/runtime.js";const k={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Link components are link children styled components. They are used to navigate to different pages (when used inside router components, such as router-link(Vue) and Link(Next)) or used to trigger user actions."}}},argTypes:{color:{control:"select",options:["primary","secondary"],defaultValue:{summary:"primary"},description:"The link color."},type:{control:"select",options:["anchor","button"],defaultValue:{summary:"anchor"},description:"The link type. Use anchor for navigation (combined with router-link or Link) and button for user actions."}}},t=(r,y="It should be used inside router components")=>({components:{AtomLink:g},setup(){return{args:r}},template:`
    <AtomLink color=${r.color} type=${r.type}>
    ${y}
  </AtomLink>
  `}),S={title:"Components/Link",component:g,...k},e={render:r=>t(r),args:{type:"anchor",color:"primary"}},o={render:r=>t(r),args:{...e.args,color:"secondary"}},n={render:r=>t(r,"It should be used to trigger user actions"),args:{...e.args,type:"button"}};var s,a,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    type: 'anchor',
    color: 'primary'
  }
}`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var i,p,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    ...Primary.args,
    color: 'secondary'
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => createLink(args, 'It should be used to trigger user actions'),
  args: {
    ...Primary.args,
    type: 'button'
  }
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const A=["Primary","Secondary","Button"];export{n as Button,e as Primary,o as Secondary,A as __namedExportsOrder,S as default};

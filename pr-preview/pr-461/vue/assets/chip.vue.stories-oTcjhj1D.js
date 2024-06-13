import{n as R}from"./index-Dm_uV4nZ.js";import{w as S}from"./decorator-DZmxGtIB.js";import{C as r}from"./table-D060eKuu.js";import"./vue.esm-bundler-Cotndkpi.js";import"./iframe-BSPFFnl-.js";import"../sb-preview/runtime.js";import"./preview-errors-B42RpLod.js";import"./index-DrFu-skq.js";const P={decorators:[S],parameters:{actions:{handles:["atomClick"]},docs:{description:{component:"Wrapper of Ionic Chip component. Read the [Ionic documentation](https://ionicframework.com/docs/api/chip) for more information about the available properties and possibilities."}}},argTypes:{disabled:{control:"boolean",defaultValue:{summary:!1},description:"If true, the user cannot interact with the chip.",table:{category:r.PROPERTIES}},activated:{control:"boolean",defaultValue:{summary:!1},description:"If true, the chip will be activated.",table:{category:r.PROPERTIES}},icon:{control:"text",description:"If have an value, the chip will have an icon.",table:{category:r.PROPERTIES}},close:{control:"boolean",defaultValue:{summary:!1},description:"If true, the chip will have a close button.",table:{category:r.PROPERTIES}},mode:{control:"select",options:["md","ios"],defaultValue:{summary:"md"},description:"The mode determines which platform styles to use.",table:{category:r.PROPERTIES}},atomClick:{action:"atomClick",description:"Emitted when the chip is clicked.",table:{category:"Events"}}}},o={mode:"md",disabled:!1,activated:!1,close:!1,label:"Label"},_={title:"Components/Chip",...P},t=e=>({components:{AtomChip:R},setup(){return{args:e}},template:`
    <AtomChip
      color="${e.color}"
      disabled="${e.disabled}"
      activated="${e.activated}"
      focus="${e.focus}"
      mode="${e.mode}"
      icon="${e.icon}"
      close="${e.close}"
    >
      {{ args.label }}
    </AtomChip>
  `}),a={render:e=>t(e),args:{...o}},s={render:e=>t(e),args:{...o,disabled:!0}},c={render:e=>t(e),args:{...o,activated:!0}},n={render:e=>t(e),args:{...o,icon:"check"}},i={render:e=>t(e),args:{...o,close:!0}};var p,d,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,h,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    disabled: true
  }
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,C,f;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    activated: true
  }
}`,...(f=(C=c.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var b,v,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    icon: 'check'
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var A,E,I;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    close: true
  }
}`,...(I=(E=i.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const x=["Default","Disabled","Activated","WithIcon","WithClose"];export{c as Activated,a as Default,s as Disabled,i as WithClose,n as WithIcon,x as __namedExportsOrder,_ as default};

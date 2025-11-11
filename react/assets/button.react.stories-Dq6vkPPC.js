import{j as r}from"./iframe-wKUWCn2k.js";import{C as n,u as g}from"./index-WfMu5e0C.js";import{C as o}from"./table-D060eKuu.js";import{w as h}from"./decorator-Bs__kt7a.js";import"./preload-helper-PPVm8Dsz.js";const b={parameters:{actions:{handles:["click"]},docs:{description:{component:"Wrapper of Ionic Button component. Read the [Ionic documentation](https://ionicframework.com/docs/api/button) for more information about the available properties and possibilities."}}},decorators:[h],argTypes:{label:{control:"text",description:"The label of the button"},color:{control:"select",options:["primary","secondary","white","custom"],defaultValue:{summary:"primary"},description:"The color to use from your application's color palette.",table:{category:o.PROPERTIES}},fill:{control:"select",options:["solid","clear","outline","outline-filled"],defaultValue:{summary:"solid"},description:'Set to `"clear"` for a transparent button that resembles a flat button, to `"outline"` for a transparent button with a border, or to `"solid"` for a button with a filled background. The default fill is "solid" except inside of a toolbar, where the default is `"clear"`.',table:{category:o.PROPERTIES}},expand:{control:"select",options:["none","block"],description:'Set to `"block"` for a full-width button.',table:{category:o.PROPERTIES}},size:{control:"select",options:["small","default","large"],defaultValue:{summary:"default"},description:"The size of the button.",table:{category:o.PROPERTIES}},disabled:{control:"boolean",description:"If `true`, the user cannot interact with the button.",table:{category:o.PROPERTIES}},loading:{control:"boolean",description:"If `true`, the button will be show a loading indicator.",table:{category:o.PROPERTIES}},href:{description:"Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.",table:{category:o.PROPERTIES}},rel:{description:"The relationship of the linked URL as space-separated link types.",table:{category:o.PROPERTIES}},target:{description:'Specifies where to display the linked URL. Only applies when an href is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.',table:{category:o.PROPERTIES}},download:{description:"This attribute instructs browsers to download a URL.",table:{category:o.PROPERTIES}},type:{control:"select",options:["none","submit","reset","button"],defaultValue:{summary:"button"},description:"The type of the button.",table:{category:o.PROPERTIES}},shape:{control:"select",options:["round","circle"],description:"The shape of the button.",table:{category:o.PROPERTIES}},mode:{control:"select",options:["md","ios"],defaultValue:{summary:"md"},description:"The mode determines which platform styles to use.",table:{category:o.PROPERTIES}},"--atom-button-color":{description:'Custom color of the button. It just works with `color="custom"`.',table:{category:o.CSS_CUSTOM_PROPERTIES}},"--atom-button-color-contrast":{description:'Custom color contrast of the button. It just works with `color="custom"`.',table:{category:o.CSS_CUSTOM_PROPERTIES}}}},y={label:"Button",color:"primary",fill:"solid",size:"default",type:"button",mode:"md",expand:void 0,disabled:!1,loading:!1},T={title:"Components/Button",component:n,...b},a=(e,f="light")=>r.jsx("div",{className:`theme-${f}`,children:r.jsx(n,{className:"button",color:e.color,fill:e.fill,size:e.size,disabled:e.disabled,loading:e.loading,type:e.type,mode:e.mode,expand:e.expand,children:e.label})}),t={render:e=>a(e),args:{...y}},s={render:e=>a(e),args:{...t.args,color:"secondary",fill:"outline"}},l={render:e=>a(e,"dark"),args:{...t.args,fill:"outline-filled",color:"secondary"}},i={render:e=>a(e,"dark"),args:{...t.args,color:"white",fill:"outline"}},d={render:e=>a(e),args:{...t.args,color:"secondary",fill:"clear"}},c={render:e=>r.jsx(n,{color:e.color,fill:e.fill,size:e.size,disabled:e.disabled,loading:e.loading,type:e.type,mode:e.mode,expand:e.expand,shape:e.shape,children:r.jsx(g,{icon:"heart"})}),args:{...t.args,color:"secondary",fill:"outline",shape:"circle"}},p={render:e=>a(e),args:{...t.args,disabled:!0}},m={render:e=>r.jsxs(n,{color:e.color,fill:e.fill,size:e.size,disabled:e.disabled,loading:e.loading,type:e.type,mode:e.mode,expand:e.expand,shape:e.shape,children:[r.jsx(g,{icon:"heart"}),e.label]}),args:{...t.args}},u={render:e=>r.jsx(n,{color:e.color,fill:e.fill,size:e.size,disabled:e.disabled,loading:e.loading,type:e.type,mode:e.mode,expand:e.expand,shape:e.shape,download:e.download,href:e.href,target:e.target,children:e.label}),args:{...t.args,href:void 0,download:void 0,target:void 0},argTypes:{href:{options:["Download","Navigate"],mapping:{Download:"/custom/jsm.svg",Navigate:"https://www.juntossomosmais.com.br"}},download:{control:"text"},target:{options:["_blank","_self","_parent","_top"]}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...ButtonComponentArgs
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'outline'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args, 'dark'),
  args: {
    ...Primary.args,
    fill: 'outline-filled',
    color: 'secondary'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args, 'dark'),
  args: {
    ...Primary.args,
    color: 'white',
    fill: 'outline'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'clear'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <AtomButton color={args.color} fill={args.fill} size={args.size} disabled={args.disabled} loading={args.loading} type={args.type} mode={args.mode} expand={args.expand} shape={args.shape}>
      <AtomIcon icon='heart' />
    </AtomButton>,
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'outline',
    shape: 'circle'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <AtomButton color={args.color} fill={args.fill} size={args.size} disabled={args.disabled} loading={args.loading} type={args.type} mode={args.mode} expand={args.expand} shape={args.shape}>
      <AtomIcon icon='heart' />
      {args.label}
    </AtomButton>,
  args: {
    ...Primary.args
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <AtomButton color={args.color} fill={args.fill} size={args.size} disabled={args.disabled} loading={args.loading} type={args.type} mode={args.mode} expand={args.expand} shape={args.shape} download={args.download} href={args.href} target={args.target}>
      {args.label}
    </AtomButton>,
  args: {
    ...Primary.args,
    href: undefined,
    download: undefined,
    target: undefined
  },
  argTypes: {
    href: {
      options: ['Download', 'Navigate'],
      mapping: {
        Download: '/custom/jsm.svg',
        Navigate: 'https://www.juntossomosmais.com.br'
      }
    },
    download: {
      control: 'text'
    },
    target: {
      options: ['_blank', '_self', '_parent', '_top']
    }
  }
}`,...u.parameters?.docs?.source}}};const E=["Primary","Secondary","OutlineFilled","Ghost","Text","CircleButton","Disabled","IconAndText","Link"];export{c as CircleButton,p as Disabled,i as Ghost,m as IconAndText,u as Link,l as OutlineFilled,t as Primary,s as Secondary,d as Text,E as __namedExportsOrder,T as default};

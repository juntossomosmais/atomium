import"./chunk-DseTPa7n.js";import{t as e}from"./react-BeYaFARg.js";import{t}from"./jsx-runtime-DsGsusFP.js";import"./react-dom-BaYUCVRd.js";import"./index-BIuA1NfB-Jxohl6WW.js";import{i as n,p as r}from"./esm-AmgW3jIi.js";import{t as i}from"./table-jqz5s6A8.js";import{t as a}from"./decorator-Ce3Kjdma.js";e();var o={parameters:{actions:{handles:[`click`]},docs:{description:{component:`Wrapper of Ionic Button component. Read the [Ionic documentation](https://ionicframework.com/docs/api/button) for more information about the available properties and possibilities.`}}},decorators:[a],argTypes:{label:{control:`text`,description:`The label of the button`},color:{control:`select`,options:[`primary`,`secondary`,`white`,`custom`],defaultValue:{summary:`primary`},description:`The color to use from your application's color palette.`,table:{category:i.PROPERTIES}},fill:{control:`select`,options:[`solid`,`clear`,`outline`,`outline-filled`],defaultValue:{summary:`solid`},description:'Set to `"clear"` for a transparent button that resembles a flat button, to `"outline"` for a transparent button with a border, or to `"solid"` for a button with a filled background. The default fill is "solid" except inside of a toolbar, where the default is `"clear"`.',table:{category:i.PROPERTIES}},expand:{control:`select`,options:[`none`,`block`],description:'Set to `"block"` for a full-width button.',table:{category:i.PROPERTIES}},size:{control:`select`,options:[`small`,`default`,`large`],defaultValue:{summary:`default`},description:`The size of the button.`,table:{category:i.PROPERTIES}},disabled:{control:`boolean`,description:"If `true`, the user cannot interact with the button.",table:{category:i.PROPERTIES}},loading:{control:`boolean`,description:"If `true`, the button will be show a loading indicator.",table:{category:i.PROPERTIES}},href:{description:`Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.`,table:{category:i.PROPERTIES}},rel:{description:`The relationship of the linked URL as space-separated link types.`,table:{category:i.PROPERTIES}},target:{description:'Specifies where to display the linked URL. Only applies when an href is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.',table:{category:i.PROPERTIES}},download:{description:`This attribute instructs browsers to download a URL.`,table:{category:i.PROPERTIES}},type:{control:`select`,options:[`none`,`submit`,`reset`,`button`],defaultValue:{summary:`button`},description:`The type of the button.`,table:{category:i.PROPERTIES}},shape:{control:`select`,options:[`round`,`circle`],description:`The shape of the button.`,table:{category:i.PROPERTIES}},mode:{control:`select`,options:[`md`,`ios`],defaultValue:{summary:`md`},description:`The mode determines which platform styles to use.`,table:{category:i.PROPERTIES}},"--atom-button-color":{description:'Custom color of the button. It just works with `color="custom"`.',table:{category:i.CSS_CUSTOM_PROPERTIES}},"--atom-button-color-contrast":{description:'Custom color contrast of the button. It just works with `color="custom"`.',table:{category:i.CSS_CUSTOM_PROPERTIES}}}},s={label:`Button`,color:`primary`,fill:`solid`,size:`default`,type:`button`,mode:`md`,expand:void 0,disabled:!1,loading:!1},c=t(),l={title:`Components/Button`,component:n,...o},u=(e,t=`light`)=>(0,c.jsx)(`div`,{className:`theme-${t}`,children:(0,c.jsx)(n,{className:`button`,color:e.color,fill:e.fill,size:e.size,disabled:e.disabled,loading:e.loading,type:e.type,mode:e.mode,expand:e.expand,children:e.label})}),d={render:e=>u(e),args:{...s}},f={render:e=>u(e),args:{...d.args,color:`secondary`,fill:`outline`}},p={render:e=>u(e,`dark`),args:{...d.args,fill:`outline-filled`,color:`secondary`}},m={render:e=>u(e,`dark`),args:{...d.args,color:`white`,fill:`outline`}},h={render:e=>u(e),args:{...d.args,color:`secondary`,fill:`clear`}},g={render:e=>(0,c.jsx)(n,{color:e.color,fill:e.fill,size:e.size,disabled:e.disabled,loading:e.loading,type:e.type,mode:e.mode,expand:e.expand,shape:e.shape,children:(0,c.jsx)(r,{icon:`heart`})}),args:{...d.args,color:`secondary`,fill:`outline`,shape:`circle`}},_={render:e=>u(e),args:{...d.args,disabled:!0}},v={render:e=>(0,c.jsxs)(n,{color:e.color,fill:e.fill,size:e.size,disabled:e.disabled,loading:e.loading,type:e.type,mode:e.mode,expand:e.expand,shape:e.shape,children:[(0,c.jsx)(r,{icon:`heart`}),e.label]}),args:{...d.args}},y={render:e=>(0,c.jsx)(n,{color:e.color,fill:e.fill,size:e.size,disabled:e.disabled,loading:e.loading,type:e.type,mode:e.mode,expand:e.expand,shape:e.shape,download:e.download,href:e.href,target:e.target,children:e.label}),args:{...d.args,href:void 0,download:void 0,target:void 0},argTypes:{href:{options:[`Download`,`Navigate`],mapping:{Download:`/custom/jsm.svg`,Navigate:`https://www.juntossomosmais.com.br`}},download:{control:`text`},target:{options:[`_blank`,`_self`,`_parent`,`_top`]}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...ButtonComponentArgs
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'outline'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args, 'dark'),
  args: {
    ...Primary.args,
    fill: 'outline-filled',
    color: 'secondary'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args, 'dark'),
  args: {
    ...Primary.args,
    color: 'white',
    fill: 'outline'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'clear'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <AtomButton color={args.color} fill={args.fill} size={args.size} disabled={args.disabled} loading={args.loading} type={args.type} mode={args.mode} expand={args.expand} shape={args.shape}>
      <AtomIcon icon='heart' />
    </AtomButton>,
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'outline',
    shape: 'circle'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <AtomButton color={args.color} fill={args.fill} size={args.size} disabled={args.disabled} loading={args.loading} type={args.type} mode={args.mode} expand={args.expand} shape={args.shape}>
      <AtomIcon icon='heart' />
      {args.label}
    </AtomButton>,
  args: {
    ...Primary.args
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};var b=[`Primary`,`Secondary`,`OutlineFilled`,`Ghost`,`Text`,`CircleButton`,`Disabled`,`IconAndText`,`Link`];export{g as CircleButton,_ as Disabled,m as Ghost,v as IconAndText,y as Link,p as OutlineFilled,d as Primary,f as Secondary,h as Text,b as __namedExportsOrder,l as default};
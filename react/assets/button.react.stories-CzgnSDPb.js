import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./react-CnPKFcMr.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{M as r,X as i,t as a}from"./dist-DnkTHVup.js";import{n as o,t as s}from"./table-CVkdcsHV.js";import{n as c,t as l}from"./decorator-Z7QTrh8B.js";var u,d,f=e((()=>{o(),l(),u={parameters:{actions:{handles:[`click`]},docs:{description:{component:`Wrapper of Ionic Button component. Read the [Ionic documentation](https://ionicframework.com/docs/api/button) for more information about the available properties and possibilities.`}}},decorators:[c],argTypes:{label:{control:`text`,description:`The label of the button`},color:{control:`select`,options:[`primary`,`secondary`,`white`,`custom`,`danger`],defaultValue:{summary:`primary`},description:"The color to use from your application's color palette. Use `danger` for destructive actions.",table:{category:s.PROPERTIES}},fill:{control:`select`,options:[`solid`,`clear`,`outline`,`outline-filled`],defaultValue:{summary:`solid`},description:'Set to `"clear"` for a transparent button that resembles a flat button, to `"outline"` for a transparent button with a border, or to `"solid"` for a button with a filled background. The default fill is "solid" except inside of a toolbar, where the default is `"clear"`.',table:{category:s.PROPERTIES}},expand:{control:`select`,options:[`none`,`block`],description:'Set to `"block"` for a full-width button.',table:{category:s.PROPERTIES}},size:{control:`select`,options:[`small`,`default`,`large`],defaultValue:{summary:`default`},description:`The size of the button.`,table:{category:s.PROPERTIES}},disabled:{control:`boolean`,description:"If `true`, the user cannot interact with the button.",table:{category:s.PROPERTIES}},loading:{control:`boolean`,description:"If `true`, the button will be show a loading indicator.",table:{category:s.PROPERTIES}},href:{description:`Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.`,table:{category:s.PROPERTIES}},rel:{description:`The relationship of the linked URL as space-separated link types.`,table:{category:s.PROPERTIES}},target:{description:'Specifies where to display the linked URL. Only applies when an href is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.',table:{category:s.PROPERTIES}},download:{description:`This attribute instructs browsers to download a URL.`,table:{category:s.PROPERTIES}},type:{control:`select`,options:[`none`,`submit`,`reset`,`button`],defaultValue:{summary:`button`},description:`The type of the button.`,table:{category:s.PROPERTIES}},shape:{control:`select`,options:[`round`,`circle`],description:`The shape of the button.`,table:{category:s.PROPERTIES}},mode:{control:`select`,options:[`md`,`ios`],defaultValue:{summary:`md`},description:`The mode determines which platform styles to use.`,table:{category:s.PROPERTIES}},"--atom-button-color":{description:'Custom color of the button. It just works with `color="custom"`.',table:{category:s.CSS_CUSTOM_PROPERTIES}},"--atom-button-color-contrast":{description:'Custom color contrast of the button. It just works with `color="custom"`.',table:{category:s.CSS_CUSTOM_PROPERTIES}}}},d={label:`Button`,color:`primary`,fill:`solid`,size:`default`,type:`button`,mode:`md`,expand:void 0,disabled:!1,loading:!1}})),p=e((()=>{})),m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{t(),a(),f(),p(),m=n(),h={title:`Components/Button`,component:i,...u},g=(e,t=`light`)=>(0,m.jsx)(`div`,{className:`theme-${t}`,children:(0,m.jsx)(i,{className:`button`,color:e.color,fill:e.fill,size:e.size,disabled:e.disabled,loading:e.loading,type:e.type,mode:e.mode,expand:e.expand,children:e.label})}),_={render:e=>g(e),args:{...d}},v={render:e=>g(e),args:{..._.args,color:`secondary`,fill:`outline`}},y={render:e=>g(e),args:{..._.args,color:`danger`}},b={render:e=>g(e,`dark`),args:{..._.args,fill:`outline-filled`,color:`secondary`}},x={render:e=>g(e,`dark`),args:{..._.args,color:`white`,fill:`outline`}},S={render:e=>g(e),args:{..._.args,color:`secondary`,fill:`clear`}},C={render:e=>(0,m.jsx)(i,{color:e.color,fill:e.fill,size:e.size,disabled:e.disabled,loading:e.loading,type:e.type,mode:e.mode,expand:e.expand,shape:e.shape,children:(0,m.jsx)(r,{icon:`heart`})}),args:{..._.args,color:`secondary`,fill:`outline`,shape:`circle`}},w={render:e=>g(e),args:{..._.args,disabled:!0}},T={render:e=>(0,m.jsxs)(i,{color:e.color,fill:e.fill,size:e.size,disabled:e.disabled,loading:e.loading,type:e.type,mode:e.mode,expand:e.expand,shape:e.shape,children:[(0,m.jsx)(r,{icon:`heart`}),e.label]}),args:{..._.args}},E={render:e=>(0,m.jsx)(i,{color:e.color,fill:e.fill,size:e.size,disabled:e.disabled,loading:e.loading,type:e.type,mode:e.mode,expand:e.expand,shape:e.shape,download:e.download,href:e.href,target:e.target,children:e.label}),args:{..._.args,href:void 0,download:void 0,target:void 0},argTypes:{href:{options:[`Download`,`Navigate`],mapping:{Download:`/custom/jsm.svg`,Navigate:`https://www.juntossomosmais.com.br`}},download:{control:`text`},target:{options:[`_blank`,`_self`,`_parent`,`_top`]}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...ButtonComponentArgs
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'outline'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    color: 'danger'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args, 'dark'),
  args: {
    ...Primary.args,
    fill: 'outline-filled',
    color: 'secondary'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args, 'dark'),
  args: {
    ...Primary.args,
    color: 'white',
    fill: 'outline'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'clear'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <AtomButton color={args.color} fill={args.fill} size={args.size} disabled={args.disabled} loading={args.loading} type={args.type} mode={args.mode} expand={args.expand} shape={args.shape}>
      <AtomIcon icon='heart' />
    </AtomButton>,
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'outline',
    shape: 'circle'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <AtomButton color={args.color} fill={args.fill} size={args.size} disabled={args.disabled} loading={args.loading} type={args.type} mode={args.mode} expand={args.expand} shape={args.shape}>
      <AtomIcon icon='heart' />
      {args.label}
    </AtomButton>,
  args: {
    ...Primary.args
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Primary`,`Secondary`,`Danger`,`OutlineFilled`,`Ghost`,`Text`,`CircleButton`,`Disabled`,`IconAndText`,`Link`]}))();export{C as CircleButton,y as Danger,w as Disabled,x as Ghost,T as IconAndText,E as Link,b as OutlineFilled,_ as Primary,v as Secondary,S as Text,D as __namedExportsOrder,h as default};
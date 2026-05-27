import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{at as t,st as n}from"./storybook-C7ONeEzR.js";import{n as r,t as i}from"./table-DMN4TomJ.js";import{n as a,t as o}from"./decorator-Bjp1CqEW.js";var s,c,l=e((()=>{r(),o(),s={parameters:{actions:{handles:[`click`]},docs:{description:{component:`Wrapper of Ionic Button component. Read the [Ionic documentation](https://ionicframework.com/docs/api/button) for more information about the available properties and possibilities.`}}},decorators:[a],argTypes:{label:{control:`text`,description:`The label of the button`},color:{control:`select`,options:[`primary`,`secondary`,`white`,`custom`],defaultValue:{summary:`primary`},description:`The color to use from your application's color palette.`,table:{category:i.PROPERTIES}},fill:{control:`select`,options:[`solid`,`clear`,`outline`,`outline-filled`],defaultValue:{summary:`solid`},description:'Set to `"clear"` for a transparent button that resembles a flat button, to `"outline"` for a transparent button with a border, or to `"solid"` for a button with a filled background. The default fill is "solid" except inside of a toolbar, where the default is `"clear"`.',table:{category:i.PROPERTIES}},expand:{control:`select`,options:[`none`,`block`],description:'Set to `"block"` for a full-width button.',table:{category:i.PROPERTIES}},size:{control:`select`,options:[`small`,`default`,`large`],defaultValue:{summary:`default`},description:`The size of the button.`,table:{category:i.PROPERTIES}},disabled:{control:`boolean`,description:"If `true`, the user cannot interact with the button.",table:{category:i.PROPERTIES}},loading:{control:`boolean`,description:"If `true`, the button will be show a loading indicator.",table:{category:i.PROPERTIES}},href:{description:`Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.`,table:{category:i.PROPERTIES}},rel:{description:`The relationship of the linked URL as space-separated link types.`,table:{category:i.PROPERTIES}},target:{description:'Specifies where to display the linked URL. Only applies when an href is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.',table:{category:i.PROPERTIES}},download:{description:`This attribute instructs browsers to download a URL.`,table:{category:i.PROPERTIES}},type:{control:`select`,options:[`none`,`submit`,`reset`,`button`],defaultValue:{summary:`button`},description:`The type of the button.`,table:{category:i.PROPERTIES}},shape:{control:`select`,options:[`round`,`circle`],description:`The shape of the button.`,table:{category:i.PROPERTIES}},mode:{control:`select`,options:[`md`,`ios`],defaultValue:{summary:`md`},description:`The mode determines which platform styles to use.`,table:{category:i.PROPERTIES}},"--atom-button-color":{description:'Custom color of the button. It just works with `color="custom"`.',table:{category:i.CSS_CUSTOM_PROPERTIES}},"--atom-button-color-contrast":{description:'Custom color contrast of the button. It just works with `color="custom"`.',table:{category:i.CSS_CUSTOM_PROPERTIES}}}},c={label:`Button`,color:`primary`,fill:`solid`,size:`default`,type:`button`,mode:`md`,expand:void 0,disabled:!1,loading:!1}})),u=e((()=>{})),d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{t(),l(),u(),d={title:`Components/Button`,...s},f=(e,t=`light`)=>n`
    <div class="theme-${t}">
      <atom-button
        class="button"
        color="${e.color}"
        fill="${e.fill}"
        expand="${e.expand}"
        size="${e.size}"
        disabled="${e.disabled}"
        loading="${e.loading}"
        type="${e.type}"
        mode="${e.mode}"
        shape="${e.shape}"
      >
        ${e.label}
      </atom-button>
    </div>
  `,p={render:e=>f(e),args:{...c}},m={render:e=>f(e),args:{...p.args,color:`secondary`,fill:`outline`}},h={render:e=>f(e,`dark`),args:{...p.args,fill:`outline-filled`,color:`secondary`}},g={render:e=>f(e,`dark`),args:{...p.args,color:`white`,fill:`outline`}},_={render:e=>f(e),args:{...p.args,color:`secondary`,fill:`clear`}},v={render:e=>n`
    <atom-button
      color="${e.color}"
      fill="${e.fill}"
      expand="${e.expand}"
      size="${e.size}"
      disabled="${e.disabled}"
      loading="${e.loading}"
      type="${e.type}"
      mode="${e.mode}"
      shape="${e.shape}"
    >
      <atom-icon icon="heart"></atom-icon>
    </atom-button>
  `,args:{...p.args,color:`secondary`,fill:`outline`,shape:`circle`}},y={render:e=>f(e),args:{...p.args,disabled:!0}},b={render:e=>n`
    <atom-button
      color="${e.color}"
      fill="${e.fill}"
      expand="${e.expand}"
      size="${e.size}"
      disabled="${e.disabled}"
      loading="${e.loading}"
      type="${e.type}"
      mode="${e.mode}"
      shape="${e.shape}"
    >
      <atom-icon icon="heart"></atom-icon>
      ${e.label}
    </atom-button>
  `,args:{...p.args}},x={render:e=>n`
    <atom-button
      color="${e.color}"
      fill="${e.fill}"
      expand="${e.expand}"
      size="${e.size}"
      disabled="${e.disabled}"
      loading="${e.loading}"
      type="${e.type}"
      mode="${e.mode}"
      shape="${e.shape}"
      download="${e.download}"
      href="${e.href}"
      target="${e.target}"
    >
      ${e.label}
    </atom-button>
  `,args:{...p.args,href:void 0,download:void 0,target:void 0},argTypes:{href:{options:[`Download`,`Navigate`],mapping:{Download:`/custom/jsm.svg`,Navigate:`https://www.juntossomosmais.com.br`}},download:{control:`text`},target:{options:[`_blank`,`_self`,`_parent`,`_top`]}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...ButtonComponentArgs
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'outline'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args, 'dark'),
  args: {
    ...Primary.args,
    fill: 'outline-filled',
    color: 'secondary'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args, 'dark'),
  args: {
    ...Primary.args,
    color: 'white',
    fill: 'outline'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'clear'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <atom-button
      color="\${args.color}"
      fill="\${args.fill}"
      expand="\${args.expand}"
      size="\${args.size}"
      disabled="\${args.disabled}"
      loading="\${args.loading}"
      type="\${args.type}"
      mode="\${args.mode}"
      shape="\${args.shape}"
    >
      <atom-icon icon="heart"></atom-icon>
    </atom-button>
  \`,
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'outline',
    shape: 'circle'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <atom-button
      color="\${args.color}"
      fill="\${args.fill}"
      expand="\${args.expand}"
      size="\${args.size}"
      disabled="\${args.disabled}"
      loading="\${args.loading}"
      type="\${args.type}"
      mode="\${args.mode}"
      shape="\${args.shape}"
    >
      <atom-icon icon="heart"></atom-icon>
      \${args.label}
    </atom-button>
  \`,
  args: {
    ...Primary.args
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <atom-button
      color="\${args.color}"
      fill="\${args.fill}"
      expand="\${args.expand}"
      size="\${args.size}"
      disabled="\${args.disabled}"
      loading="\${args.loading}"
      type="\${args.type}"
      mode="\${args.mode}"
      shape="\${args.shape}"
      download="\${args.download}"
      href="\${args.href}"
      target="\${args.target}"
    >
      \${args.label}
    </atom-button>
  \`,
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
}`,...x.parameters?.docs?.source}}},S=[`Primary`,`Secondary`,`OutlineFilled`,`Ghost`,`Text`,`CircleButton`,`Disabled`,`IconAndText`,`Link`]}))();export{v as CircleButton,y as Disabled,g as Ghost,b as IconAndText,x as Link,h as OutlineFilled,p as Primary,m as Secondary,_ as Text,S as __namedExportsOrder,d as default};
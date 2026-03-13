import{H as e}from"./storybook-CfikGCXO.js";import{t}from"./table-CBo0-gV-.js";import{t as n}from"./decorator-DapEhatt.js";var r={parameters:{actions:{handles:[`click`]},docs:{description:{component:`Wrapper of Ionic Button component. Read the [Ionic documentation](https://ionicframework.com/docs/api/button) for more information about the available properties and possibilities.`}}},decorators:[n],argTypes:{label:{control:`text`,description:`The label of the button`},color:{control:`select`,options:[`primary`,`secondary`,`white`,`custom`],defaultValue:{summary:`primary`},description:`The color to use from your application's color palette.`,table:{category:t.PROPERTIES}},fill:{control:`select`,options:[`solid`,`clear`,`outline`,`outline-filled`],defaultValue:{summary:`solid`},description:'Set to `"clear"` for a transparent button that resembles a flat button, to `"outline"` for a transparent button with a border, or to `"solid"` for a button with a filled background. The default fill is "solid" except inside of a toolbar, where the default is `"clear"`.',table:{category:t.PROPERTIES}},expand:{control:`select`,options:[`none`,`block`],description:'Set to `"block"` for a full-width button.',table:{category:t.PROPERTIES}},size:{control:`select`,options:[`small`,`default`,`large`],defaultValue:{summary:`default`},description:`The size of the button.`,table:{category:t.PROPERTIES}},disabled:{control:`boolean`,description:"If `true`, the user cannot interact with the button.",table:{category:t.PROPERTIES}},loading:{control:`boolean`,description:"If `true`, the button will be show a loading indicator.",table:{category:t.PROPERTIES}},href:{description:`Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.`,table:{category:t.PROPERTIES}},rel:{description:`The relationship of the linked URL as space-separated link types.`,table:{category:t.PROPERTIES}},target:{description:'Specifies where to display the linked URL. Only applies when an href is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.',table:{category:t.PROPERTIES}},download:{description:`This attribute instructs browsers to download a URL.`,table:{category:t.PROPERTIES}},type:{control:`select`,options:[`none`,`submit`,`reset`,`button`],defaultValue:{summary:`button`},description:`The type of the button.`,table:{category:t.PROPERTIES}},shape:{control:`select`,options:[`round`,`circle`],description:`The shape of the button.`,table:{category:t.PROPERTIES}},mode:{control:`select`,options:[`md`,`ios`],defaultValue:{summary:`md`},description:`The mode determines which platform styles to use.`,table:{category:t.PROPERTIES}},"--atom-button-color":{description:'Custom color of the button. It just works with `color="custom"`.',table:{category:t.CSS_CUSTOM_PROPERTIES}},"--atom-button-color-contrast":{description:'Custom color contrast of the button. It just works with `color="custom"`.',table:{category:t.CSS_CUSTOM_PROPERTIES}}}},i={label:`Button`,color:`primary`,fill:`solid`,size:`default`,type:`button`,mode:`md`,expand:void 0,disabled:!1,loading:!1},a={title:`Components/Button`,...r},o=(t,n=`light`)=>e`
    <div class="theme-${n}">
      <atom-button
        class="button"
        color="${t.color}"
        fill="${t.fill}"
        expand="${t.expand}"
        size="${t.size}"
        disabled="${t.disabled}"
        loading="${t.loading}"
        type="${t.type}"
        mode="${t.mode}"
        shape="${t.shape}"
      >
        ${t.label}
      </atom-button>
    </div>
  `,s={render:e=>o(e),args:{...i}},c={render:e=>o(e),args:{...s.args,color:`secondary`,fill:`outline`}},l={render:e=>o(e,`dark`),args:{...s.args,fill:`outline-filled`,color:`secondary`}},u={render:e=>o(e,`dark`),args:{...s.args,color:`white`,fill:`outline`}},d={render:e=>o(e),args:{...s.args,color:`secondary`,fill:`clear`}},f={render:t=>e`
    <atom-button
      color="${t.color}"
      fill="${t.fill}"
      expand="${t.expand}"
      size="${t.size}"
      disabled="${t.disabled}"
      loading="${t.loading}"
      type="${t.type}"
      mode="${t.mode}"
      shape="${t.shape}"
    >
      <atom-icon icon="heart"></atom-icon>
    </atom-button>
  `,args:{...s.args,color:`secondary`,fill:`outline`,shape:`circle`}},p={render:e=>o(e),args:{...s.args,disabled:!0}},m={render:t=>e`
    <atom-button
      color="${t.color}"
      fill="${t.fill}"
      expand="${t.expand}"
      size="${t.size}"
      disabled="${t.disabled}"
      loading="${t.loading}"
      type="${t.type}"
      mode="${t.mode}"
      shape="${t.shape}"
    >
      <atom-icon icon="heart"></atom-icon>
      ${t.label}
    </atom-button>
  `,args:{...s.args}},h={render:t=>e`
    <atom-button
      color="${t.color}"
      fill="${t.fill}"
      expand="${t.expand}"
      size="${t.size}"
      disabled="${t.disabled}"
      loading="${t.loading}"
      type="${t.type}"
      mode="${t.mode}"
      shape="${t.shape}"
      download="${t.download}"
      href="${t.href}"
      target="${t.target}"
    >
      ${t.label}
    </atom-button>
  `,args:{...s.args,href:void 0,download:void 0,target:void 0},argTypes:{href:{options:[`Download`,`Navigate`],mapping:{Download:`/custom/jsm.svg`,Navigate:`https://www.juntossomosmais.com.br`}},download:{control:`text`},target:{options:[`_blank`,`_self`,`_parent`,`_top`]}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...ButtonComponentArgs
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'outline'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args, 'dark'),
  args: {
    ...Primary.args,
    fill: 'outline-filled',
    color: 'secondary'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args, 'dark'),
  args: {
    ...Primary.args,
    color: 'white',
    fill: 'outline'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'clear'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};var g=[`Primary`,`Secondary`,`OutlineFilled`,`Ghost`,`Text`,`CircleButton`,`Disabled`,`IconAndText`,`Link`];export{f as CircleButton,p as Disabled,u as Ghost,m as IconAndText,h as Link,l as OutlineFilled,s as Primary,c as Secondary,d as Text,g as __namedExportsOrder,a as default};
import{A as e,x as t}from"./iframe-DHKEqBzE.js";import{t as n}from"./table-DZkiv1k4.js";import{t as r}from"./decorator-tF45y5qF.js";var i={parameters:{actions:{handles:[`click`]},docs:{description:{component:`Wrapper of Ionic Button component. Read the [Ionic documentation](https://ionicframework.com/docs/api/button) for more information about the available properties and possibilities.`}}},decorators:[r],argTypes:{label:{control:`text`,description:`The label of the button`},color:{control:`select`,options:[`primary`,`secondary`,`white`,`custom`],defaultValue:{summary:`primary`},description:`The color to use from your application's color palette.`,table:{category:n.PROPERTIES}},fill:{control:`select`,options:[`solid`,`clear`,`outline`,`outline-filled`],defaultValue:{summary:`solid`},description:'Set to `"clear"` for a transparent button that resembles a flat button, to `"outline"` for a transparent button with a border, or to `"solid"` for a button with a filled background. The default fill is "solid" except inside of a toolbar, where the default is `"clear"`.',table:{category:n.PROPERTIES}},expand:{control:`select`,options:[`none`,`block`],description:'Set to `"block"` for a full-width button.',table:{category:n.PROPERTIES}},size:{control:`select`,options:[`small`,`default`,`large`],defaultValue:{summary:`default`},description:`The size of the button.`,table:{category:n.PROPERTIES}},disabled:{control:`boolean`,description:"If `true`, the user cannot interact with the button.",table:{category:n.PROPERTIES}},loading:{control:`boolean`,description:"If `true`, the button will be show a loading indicator.",table:{category:n.PROPERTIES}},href:{description:`Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.`,table:{category:n.PROPERTIES}},rel:{description:`The relationship of the linked URL as space-separated link types.`,table:{category:n.PROPERTIES}},target:{description:'Specifies where to display the linked URL. Only applies when an href is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.',table:{category:n.PROPERTIES}},download:{description:`This attribute instructs browsers to download a URL.`,table:{category:n.PROPERTIES}},type:{control:`select`,options:[`none`,`submit`,`reset`,`button`],defaultValue:{summary:`button`},description:`The type of the button.`,table:{category:n.PROPERTIES}},shape:{control:`select`,options:[`round`,`circle`],description:`The shape of the button.`,table:{category:n.PROPERTIES}},mode:{control:`select`,options:[`md`,`ios`],defaultValue:{summary:`md`},description:`The mode determines which platform styles to use.`,table:{category:n.PROPERTIES}},"--atom-button-color":{description:'Custom color of the button. It just works with `color="custom"`.',table:{category:n.CSS_CUSTOM_PROPERTIES}},"--atom-button-color-contrast":{description:'Custom color contrast of the button. It just works with `color="custom"`.',table:{category:n.CSS_CUSTOM_PROPERTIES}}}},a={label:`Button`,color:`primary`,fill:`solid`,size:`default`,type:`button`,mode:`md`,expand:void 0,disabled:!1,loading:!1},o={title:`Components/Button`,...i},s=(e,n=`light`)=>({components:{AtomButton:t},setup(){return{args:e,themeColor:n}},template:`
    <div :class="'theme-' + themeColor">
      <AtomButton
        class="button"
        color="${e.color}"
        fill="${e.fill}"
        size="${e.size}"
        disabled="${e.disabled}"
        loading="${e.loading}"
        type="${e.type}"
        mode="${e.mode}"
        expand="${e.expand}"
      >
        {{ args.label }}
      </AtomButton>
    </div>
  `}),c={render:e=>s(e),args:{...a}},l={render:e=>s(e),args:{...c.args,color:`secondary`,fill:`outline`}},u={render:e=>s(e,`dark`),args:{...c.args,fill:`outline-filled`,color:`secondary`}},d={render:e=>s(e,`dark`),args:{...c.args,color:`white`,fill:`outline`}},f={render:e=>s(e),args:{...c.args,color:`secondary`,fill:`clear`}},p={render:n=>({components:{AtomButton:t,AtomIcon:e},setup(){return{args:n}},template:`
      <AtomButton
        color="${n.color}"
        fill="${n.fill}"
        size="${n.size}"
        disabled="${n.disabled}"
        loading="${n.loading}"
        type="${n.type}"
        mode="${n.mode}"
        expand="${n.expand}"
        shape="${n.shape}"
      >
        <AtomIcon :icon="'heart'" />
      </AtomButton>
    `}),args:{...c.args,color:`secondary`,fill:`outline`,shape:`circle`}},m={render:e=>s(e),args:{...c.args,disabled:!0}},h={render:n=>({components:{AtomButton:t,AtomIcon:e},setup(){return{args:n}},template:`
      <AtomButton
        color="${n.color}"
        fill="${n.fill}"
        size="${n.size}"
        disabled="${n.disabled}"
        loading="${n.loading}"
        type="${n.type}"
        mode="${n.mode}"
        expand="${n.expand}"
        shape="${n.shape}"
      >
        <AtomIcon :icon="'heart'" />
        {{ args.label }}
      </AtomButton>
    `}),args:{...c.args}},g={render:e=>({components:{AtomButton:t},setup(){return{args:e}},template:`
      <AtomButton
        color="${e.color}"
        fill="${e.fill}"
        size="${e.size}"
        disabled="${e.disabled}"
        loading="${e.loading}"
        type="${e.type}"
        mode="${e.mode}"
        expand="${e.expand}"
        shape="${e.shape}"
        download="${e.download}"
        href="${e.href}"
        target="${e.target}"
      >
        {{ args.label }}
      </AtomButton>
    `}),argTypes:{href:{options:[`Download`,`Navigate`],mapping:{Download:`/custom/jsm.svg`,Navigate:`https://www.juntossomosmais.com.br`}},download:{control:`text`},target:{options:[`_blank`,`_self`,`_parent`,`_top`]}},args:{...c.args,href:void 0,download:void 0,target:void 0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...ButtonComponentArgs
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'outline'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args, 'dark'),
  args: {
    ...Primary.args,
    fill: 'outline-filled',
    color: 'secondary'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args, 'dark'),
  args: {
    ...Primary.args,
    color: 'white',
    fill: 'outline'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'clear'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AtomButton,
      AtomIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <AtomButton
        color="\${args.color}"
        fill="\${args.fill}"
        size="\${args.size}"
        disabled="\${args.disabled}"
        loading="\${args.loading}"
        type="\${args.type}"
        mode="\${args.mode}"
        expand="\${args.expand}"
        shape="\${args.shape}"
      >
        <AtomIcon :icon="'heart'" />
      </AtomButton>
    \`
  }),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'outline',
    shape: 'circle'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AtomButton,
      AtomIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <AtomButton
        color="\${args.color}"
        fill="\${args.fill}"
        size="\${args.size}"
        disabled="\${args.disabled}"
        loading="\${args.loading}"
        type="\${args.type}"
        mode="\${args.mode}"
        expand="\${args.expand}"
        shape="\${args.shape}"
      >
        <AtomIcon :icon="'heart'" />
        {{ args.label }}
      </AtomButton>
    \`
  }),
  args: {
    ...Primary.args
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AtomButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <AtomButton
        color="\${args.color}"
        fill="\${args.fill}"
        size="\${args.size}"
        disabled="\${args.disabled}"
        loading="\${args.loading}"
        type="\${args.type}"
        mode="\${args.mode}"
        expand="\${args.expand}"
        shape="\${args.shape}"
        download="\${args.download}"
        href="\${args.href}"
        target="\${args.target}"
      >
        {{ args.label }}
      </AtomButton>
    \`
  }),
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
  },
  args: {
    ...Primary.args,
    href: undefined,
    download: undefined,
    target: undefined
  }
}`,...g.parameters?.docs?.source}}};var _=[`Primary`,`Secondary`,`OutlineFilled`,`Ghost`,`Text`,`CircleButton`,`Disabled`,`IconAndText`,`Link`];export{p as CircleButton,m as Disabled,d as Ghost,h as IconAndText,g as Link,u as OutlineFilled,c as Primary,l as Secondary,f as Text,_ as __namedExportsOrder,o as default};
import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,M as n,t as r}from"./iframe-saX0dVvA.js";import{n as i,t as a}from"./table-CVkdcsHV.js";import{n as o,t as s}from"./decorator-C7CYVIVy.js";var c,l,u=e((()=>{i(),s(),c={parameters:{actions:{handles:[`click`]},docs:{description:{component:`Wrapper of Ionic Button component. Read the [Ionic documentation](https://ionicframework.com/docs/api/button) for more information about the available properties and possibilities.`}}},decorators:[o],argTypes:{label:{control:`text`,description:`The label of the button`},color:{control:`select`,options:[`primary`,`secondary`,`white`,`custom`],defaultValue:{summary:`primary`},description:`The color to use from your application's color palette.`,table:{category:a.PROPERTIES}},fill:{control:`select`,options:[`solid`,`clear`,`outline`,`outline-filled`],defaultValue:{summary:`solid`},description:'Set to `"clear"` for a transparent button that resembles a flat button, to `"outline"` for a transparent button with a border, or to `"solid"` for a button with a filled background. The default fill is "solid" except inside of a toolbar, where the default is `"clear"`.',table:{category:a.PROPERTIES}},expand:{control:`select`,options:[`none`,`block`],description:'Set to `"block"` for a full-width button.',table:{category:a.PROPERTIES}},size:{control:`select`,options:[`small`,`default`,`large`],defaultValue:{summary:`default`},description:`The size of the button.`,table:{category:a.PROPERTIES}},disabled:{control:`boolean`,description:"If `true`, the user cannot interact with the button.",table:{category:a.PROPERTIES}},loading:{control:`boolean`,description:"If `true`, the button will be show a loading indicator.",table:{category:a.PROPERTIES}},href:{description:`Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.`,table:{category:a.PROPERTIES}},rel:{description:`The relationship of the linked URL as space-separated link types.`,table:{category:a.PROPERTIES}},target:{description:'Specifies where to display the linked URL. Only applies when an href is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.',table:{category:a.PROPERTIES}},download:{description:`This attribute instructs browsers to download a URL.`,table:{category:a.PROPERTIES}},type:{control:`select`,options:[`none`,`submit`,`reset`,`button`],defaultValue:{summary:`button`},description:`The type of the button.`,table:{category:a.PROPERTIES}},shape:{control:`select`,options:[`round`,`circle`],description:`The shape of the button.`,table:{category:a.PROPERTIES}},mode:{control:`select`,options:[`md`,`ios`],defaultValue:{summary:`md`},description:`The mode determines which platform styles to use.`,table:{category:a.PROPERTIES}},"--atom-button-color":{description:'Custom color of the button. It just works with `color="custom"`.',table:{category:a.CSS_CUSTOM_PROPERTIES}},"--atom-button-color-contrast":{description:'Custom color contrast of the button. It just works with `color="custom"`.',table:{category:a.CSS_CUSTOM_PROPERTIES}}}},l={label:`Button`,color:`primary`,fill:`solid`,size:`default`,type:`button`,mode:`md`,expand:void 0,disabled:!1,loading:!1}})),d=e((()=>{})),f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{r(),u(),d(),f={title:`Components/Button`,...c},p=(e,n=`light`)=>({components:{AtomButton:t},setup(){return{args:e,themeColor:n}},template:`
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
  `}),m={render:e=>p(e),args:{...l}},h={render:e=>p(e),args:{...m.args,color:`secondary`,fill:`outline`}},g={render:e=>p(e,`dark`),args:{...m.args,fill:`outline-filled`,color:`secondary`}},_={render:e=>p(e,`dark`),args:{...m.args,color:`white`,fill:`outline`}},v={render:e=>p(e),args:{...m.args,color:`secondary`,fill:`clear`}},y={render:e=>({components:{AtomButton:t,AtomIcon:n},setup(){return{args:e}},template:`
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
      >
        <AtomIcon :icon="'heart'" />
      </AtomButton>
    `}),args:{...m.args,color:`secondary`,fill:`outline`,shape:`circle`}},b={render:e=>p(e),args:{...m.args,disabled:!0}},x={render:e=>({components:{AtomButton:t,AtomIcon:n},setup(){return{args:e}},template:`
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
      >
        <AtomIcon :icon="'heart'" />
        {{ args.label }}
      </AtomButton>
    `}),args:{...m.args}},S={render:e=>({components:{AtomButton:t},setup(){return{args:e}},template:`
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
    `}),argTypes:{href:{options:[`Download`,`Navigate`],mapping:{Download:`/custom/jsm.svg`,Navigate:`https://www.juntossomosmais.com.br`}},download:{control:`text`},target:{options:[`_blank`,`_self`,`_parent`,`_top`]}},args:{...m.args,href:void 0,download:void 0,target:void 0}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...ButtonComponentArgs
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'outline'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args, 'dark'),
  args: {
    ...Primary.args,
    fill: 'outline-filled',
    color: 'secondary'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args, 'dark'),
  args: {
    ...Primary.args,
    color: 'white',
    fill: 'outline'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'clear'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Primary`,`Secondary`,`OutlineFilled`,`Ghost`,`Text`,`CircleButton`,`Disabled`,`IconAndText`,`Link`]}))();export{y as CircleButton,b as Disabled,_ as Ghost,x as IconAndText,S as Link,g as OutlineFilled,m as Primary,h as Secondary,v as Text,C as __namedExportsOrder,f as default};
import{l as p,m as L}from"./index-DfX5o9eu.js";import{C as o}from"./table-D060eKuu.js";import{w as U}from"./decorator-DZmxGtIB.js";import"./vue.esm-bundler-Cotndkpi.js";import"./iframe-v84MXO84.js";import"../sb-preview/runtime.js";import"./preview-errors-B42RpLod.js";import"./index-DrFu-skq.js";const V={parameters:{actions:{handles:["click"]},docs:{description:{component:"Wrapper of Ionic Button component. Read the [Ionic documentation](https://ionicframework.com/docs/api/button) for more information about the available properties and possibilities."}}},decorators:[U],argTypes:{label:{control:"text",description:"The label of the button"},color:{control:"select",options:["primary","secondary","white"],defaultValue:{summary:"primary"},description:"The color to use from your application's color palette.",table:{category:o.PROPERTIES}},fill:{control:"select",options:["solid","clear","outline"],defaultValue:{summary:"solid"},description:'Set to `"clear"` for a transparent button that resembles a flat button, to `"outline"` for a transparent button with a border, or to `"solid"` for a button with a filled background. The default fill is "solid" except inside of a toolbar, where the default is `"clear"`.',table:{category:o.PROPERTIES}},expand:{control:"select",options:["none","block"],description:'Set to `"block"` for a full-width button.',table:{category:o.PROPERTIES}},size:{control:"select",options:["small","default","large"],defaultValue:{summary:"default"},description:"The size of the button.",table:{category:o.PROPERTIES}},disabled:{control:"boolean",description:"If `true`, the user cannot interact with the button.",table:{category:o.PROPERTIES}},loading:{control:"boolean",description:"If `true`, the button will be show a loading indicator.",table:{category:o.PROPERTIES}},href:{description:"Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.",table:{category:o.PROPERTIES}},rel:{description:"The relationship of the linked URL as space-separated link types.",table:{category:o.PROPERTIES}},target:{description:'Specifies where to display the linked URL. Only applies when an href is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.',table:{category:o.PROPERTIES}},download:{description:"This attribute instructs browsers to download a URL.",table:{category:o.PROPERTIES}},type:{control:"select",options:["none","submit","reset","button"],defaultValue:{summary:"button"},description:"The type of the button.",table:{category:o.PROPERTIES}},shape:{control:"select",options:["round","circle"],description:"The shape of the button.",table:{category:o.PROPERTIES}},mode:{control:"select",options:["md","ios"],defaultValue:{summary:"md"},description:"The mode determines which platform styles to use.",table:{category:o.PROPERTIES}}}},j={label:"Button",color:"primary",fill:"solid",size:"default",type:"button",mode:"md",expand:void 0,disabled:!1,loading:!1},M={title:"Components/Button",...V},n=(e,D="light")=>({components:{AtomButton:p},setup(){return{args:e,themeColor:D}},template:`
    <div :class="'theme-' + themeColor">
      <AtomButton
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
  `}),t={render:e=>n(e),args:{...j}},r={render:e=>n(e),args:{...t.args,color:"secondary",fill:"outline"}},a={render:e=>n(e,"dark"),args:{...t.args,color:"white",fill:"outline"}},s={render:e=>n(e),args:{...t.args,color:"secondary",fill:"clear"}},l={render:e=>({components:{AtomButton:p,AtomIcon:L},setup(){return{args:e}},template:`
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
    `}),args:{...t.args,color:"secondary",fill:"outline",shape:"circle"}},i={render:e=>n(e),args:{...t.args,disabled:!0}},d={render:e=>({components:{AtomButton:p,AtomIcon:L},setup(){return{args:e}},template:`
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
    `}),args:{...t.args}},c={render:e=>({components:{AtomButton:p},setup(){return{args:e}},template:`
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
    `}),argTypes:{href:{options:["Download","Navigate"],mapping:{Download:"/custom/jsm.svg",Navigate:"https://www.juntossomosmais.com.br"}},download:{control:"text"},target:{options:["_blank","_self","_parent","_top"]}},args:{...t.args,href:void 0,download:void 0,target:void 0}};var m,u,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...ButtonComponentArgs
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,h,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'outline'
  }
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,$,w;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => createButton(args, 'dark'),
  args: {
    ...Primary.args,
    color: 'white',
    fill: 'outline'
  }
}`,...(w=($=a.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var P,B,R;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'clear'
  }
}`,...(R=(B=s.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var A,T,S;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(S=(T=l.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var E,I,x;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...(x=(I=i.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var k,z,_;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(_=(z=d.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var v,O,C;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(O=c.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};const Q=["Primary","Secondary","White","Text","CircleButton","Disabled","IconAndText","Link"];export{l as CircleButton,i as Disabled,d as IconAndText,c as Link,t as Primary,r as Secondary,s as Text,a as White,Q as __namedExportsOrder,M as default};

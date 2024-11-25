import{q as m,m as V}from"./index-CGgX53MI.js";import{C as o}from"./table-D060eKuu.js";import{w as F}from"./decorator-DZmxGtIB.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-brYnVtxm.js";import"../sb-preview/runtime.js";import"./preview-errors-B42RpLod.js";import"./index-DrFu-skq.js";const G={parameters:{actions:{handles:["click"]},docs:{description:{component:"Wrapper of Ionic Button component. Read the [Ionic documentation](https://ionicframework.com/docs/api/button) for more information about the available properties and possibilities."}}},decorators:[F],argTypes:{label:{control:"text",description:"The label of the button"},color:{control:"select",options:["primary","secondary","white","custom"],defaultValue:{summary:"primary"},description:"The color to use from your application's color palette.",table:{category:o.PROPERTIES}},fill:{control:"select",options:["solid","clear","outline","outline-filled"],defaultValue:{summary:"solid"},description:'Set to `"clear"` for a transparent button that resembles a flat button, to `"outline"` for a transparent button with a border, or to `"solid"` for a button with a filled background. The default fill is "solid" except inside of a toolbar, where the default is `"clear"`.',table:{category:o.PROPERTIES}},expand:{control:"select",options:["none","block"],description:'Set to `"block"` for a full-width button.',table:{category:o.PROPERTIES}},size:{control:"select",options:["small","default","large"],defaultValue:{summary:"default"},description:"The size of the button.",table:{category:o.PROPERTIES}},disabled:{control:"boolean",description:"If `true`, the user cannot interact with the button.",table:{category:o.PROPERTIES}},loading:{control:"boolean",description:"If `true`, the button will be show a loading indicator.",table:{category:o.PROPERTIES}},href:{description:"Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.",table:{category:o.PROPERTIES}},rel:{description:"The relationship of the linked URL as space-separated link types.",table:{category:o.PROPERTIES}},target:{description:'Specifies where to display the linked URL. Only applies when an href is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.',table:{category:o.PROPERTIES}},download:{description:"This attribute instructs browsers to download a URL.",table:{category:o.PROPERTIES}},type:{control:"select",options:["none","submit","reset","button"],defaultValue:{summary:"button"},description:"The type of the button.",table:{category:o.PROPERTIES}},shape:{control:"select",options:["round","circle"],description:"The shape of the button.",table:{category:o.PROPERTIES}},mode:{control:"select",options:["md","ios"],defaultValue:{summary:"md"},description:"The mode determines which platform styles to use.",table:{category:o.PROPERTIES}},"--atom-button-color":{description:'Custom color of the button. It just works with `color="custom"`.',table:{category:o.CSS_CUSTOM_PROPERTIES}},"--atom-button-color-contrast":{description:'Custom color contrast of the button. It just works with `color="custom"`.',table:{category:o.CSS_CUSTOM_PROPERTIES}}}},M={label:"Button",color:"primary",fill:"solid",size:"default",type:"button",mode:"md",expand:void 0,disabled:!1,loading:!1},Z={title:"Components/Button",...G},n=(e,N="light")=>({components:{AtomButton:m},setup(){return{args:e,themeColor:N}},template:`
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
  `}),t={render:e=>n(e),args:{...M}},r={render:e=>n(e),args:{...t.args,color:"secondary",fill:"outline"}},a={render:e=>n(e,"dark"),args:{...t.args,fill:"outline-filled",color:"secondary"}},s={render:e=>n(e,"dark"),args:{...t.args,color:"white",fill:"outline"}},l={render:e=>n(e),args:{...t.args,color:"secondary",fill:"clear"}},i={render:e=>({components:{AtomButton:m,AtomIcon:V},setup(){return{args:e}},template:`
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
    `}),args:{...t.args,color:"secondary",fill:"outline",shape:"circle"}},d={render:e=>n(e),args:{...t.args,disabled:!0}},c={render:e=>({components:{AtomButton:m,AtomIcon:V},setup(){return{args:e}},template:`
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
    `}),args:{...t.args}},p={render:e=>({components:{AtomButton:m},setup(){return{args:e}},template:`
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
    `}),argTypes:{href:{options:["Download","Navigate"],mapping:{Download:"/custom/jsm.svg",Navigate:"https://www.juntossomosmais.com.br"}},download:{control:"text"},target:{options:["_blank","_self","_parent","_top"]}},args:{...t.args,href:void 0,download:void 0,target:void 0}};var u,g,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...ButtonComponentArgs
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,h,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'outline'
  }
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var $,w,P;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => createButton(args, 'dark'),
  args: {
    ...Primary.args,
    fill: 'outline-filled',
    color: 'secondary'
  }
}`,...(P=(w=a.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var S,R,B;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => createButton(args, 'dark'),
  args: {
    ...Primary.args,
    color: 'white',
    fill: 'outline'
  }
}`,...(B=(R=s.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var T,A,E;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'clear'
  }
}`,...(E=(A=l.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var I,x,k;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(k=(x=i.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var O,_,z;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => createButton(args),
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...(z=(_=d.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var v,C,L;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(L=(C=c.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var U,j,D;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(D=(j=p.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};const ee=["Primary","Secondary","OutlineFilled","Ghost","Text","CircleButton","Disabled","IconAndText","Link"];export{i as CircleButton,d as Disabled,s as Ghost,c as IconAndText,p as Link,a as OutlineFilled,t as Primary,r as Secondary,l as Text,ee as __namedExportsOrder,Z as default};

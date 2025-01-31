import{q as s}from"./index-B3wovv9C.js";import{C as t}from"./table-D060eKuu.js";import"./vue.esm-bundler-cJVerQom.js";import"./iframe-DyGmooWK.js";const a={parameters:{docs:{description:{component:"Wrapper of Ionic Icon component. Read the [Ionic documentation](https://ionicframework.com/docs/api/icon) for more information about the available properties and possibilities."}}},argTypes:{icon:{control:"text",description:"The name of the icon to use.",table:{category:t.PROPERTIES}},color:{control:"select",description:"The color to use from your application palette.",options:["primary","secondary","tertiary","success","warning","danger","light","medium","dark","white"],table:{category:t.PROPERTIES}},size:{control:"text",description:"The size of the icon. Use large or small to change the size of the icon or pass a number to set the font-size in pixels.",table:{category:t.PROPERTIES}}}},i={icon:"heart",color:"secondary",size:""},g={title:"Components/Icon",component:s,...a},p=o=>({components:{AtomIcon:s},setup(){return{args:o}},template:`
    <AtomIcon
      icon="${o.icon}"
      color="${o.color}"
      size="${o.size}"
    />
  `}),e={render:o=>p(o),args:{...i}};var r,n,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => createIcon(args),
  args: {
    ...IconComponentArgs
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const h=["Default"];export{e as Default,h as __namedExportsOrder,g as default};

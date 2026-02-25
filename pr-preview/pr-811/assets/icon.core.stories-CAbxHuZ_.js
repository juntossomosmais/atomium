import{U as t}from"./iframe-CEyGnNHL.js";import{C as r}from"./table-D060eKuu.js";import"./preload-helper-PPVm8Dsz.js";const n={parameters:{docs:{description:{component:"Wrapper of Ionic Icon component. Read the [Ionic documentation](https://ionicframework.com/docs/api/icon) for more information about the available properties and possibilities."}}},argTypes:{icon:{control:"text",description:"The name of the icon to use.",table:{category:r.PROPERTIES}},color:{control:"select",description:"The color to use from your application palette.",options:["primary","secondary","tertiary","success","warning","danger","light","medium","dark","white"],table:{category:r.PROPERTIES}},size:{control:"text",description:"The size of the icon. Use large or small to change the size of the icon or pass a number to set the font-size in pixels.",table:{category:r.PROPERTIES}}}},c={icon:"heart",color:"secondary",size:""},m={title:"Components/Icon",...n},s=o=>t`
    <atom-icon icon=${o.icon} color=${o.color} size=${o.size} />
  `,e={render:o=>s(o),args:{...c}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => createIcon(args),
  args: {
    ...IconComponentArgs
  }
}`,...e.parameters?.docs?.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,m as default};

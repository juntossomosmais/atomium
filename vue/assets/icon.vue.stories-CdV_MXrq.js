import{u as r}from"./index-D9gi79PD.js";import{C as t}from"./table-D060eKuu.js";import"./vue.esm-bundler-X36X5nj_.js";import"./iframe-DdQc9Zgb.js";const n={parameters:{docs:{description:{component:"Wrapper of Ionic Icon component. Read the [Ionic documentation](https://ionicframework.com/docs/api/icon) for more information about the available properties and possibilities."}}},argTypes:{icon:{control:"text",description:"The name of the icon to use.",table:{category:t.PROPERTIES}},color:{control:"select",description:"The color to use from your application palette.",options:["primary","secondary","tertiary","success","warning","danger","light","medium","dark","white"],table:{category:t.PROPERTIES}},size:{control:"text",description:"The size of the icon. Use large or small to change the size of the icon or pass a number to set the font-size in pixels.",table:{category:t.PROPERTIES}}}},c={icon:"heart",color:"secondary",size:""},l={title:"Components/Icon",component:r,...n},s=o=>({components:{AtomIcon:r},setup(){return{args:o}},template:`
    <AtomIcon
      icon="${o.icon}"
      color="${o.color}"
      size="${o.size}"
    />
  `}),e={render:o=>s(o),args:{...c}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => createIcon(args),
  args: {
    ...IconComponentArgs
  }
}`,...e.parameters?.docs?.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,l as default};

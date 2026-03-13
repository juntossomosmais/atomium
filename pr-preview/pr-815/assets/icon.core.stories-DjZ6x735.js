import{P as e}from"./iframe-Dm0EU4CU.js";import{t}from"./table-7jAh1EVy.js";var n={parameters:{docs:{description:{component:`Wrapper of Ionic Icon component. Read the [Ionic documentation](https://ionicframework.com/docs/api/icon) for more information about the available properties and possibilities.`}}},argTypes:{icon:{control:`text`,description:`The name of the icon to use.`,table:{category:t.PROPERTIES}},color:{control:`select`,description:`The color to use from your application palette.`,options:[`primary`,`secondary`,`tertiary`,`success`,`warning`,`danger`,`light`,`medium`,`dark`,`white`],table:{category:t.PROPERTIES}},size:{control:`text`,description:`The size of the icon. Use large or small to change the size of the icon or pass a number to set the font-size in pixels.`,table:{category:t.PROPERTIES}}}},r={icon:`heart`,color:`secondary`,size:``},i={title:`Components/Icon`,...n},a=t=>e`
    <atom-icon icon=${t.icon} color=${t.color} size=${t.size} />
  `,o={render:e=>a(e),args:{...r}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createIcon(args),
  args: {
    ...IconComponentArgs
  }
}`,...o.parameters?.docs?.source}}};var s=[`Default`];export{o as Default,s as __namedExportsOrder,i as default};
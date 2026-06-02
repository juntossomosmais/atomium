import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{at as t,st as n}from"./storybook-D-TQ6ufp.js";import{n as r,t as i}from"./table-DMN4TomJ.js";var a,o,s=e((()=>{r(),a={parameters:{docs:{description:{component:`Wrapper of Ionic Icon component. Read the [Ionic documentation](https://ionicframework.com/docs/api/icon) for more information about the available properties and possibilities.`}}},argTypes:{icon:{control:`text`,description:`The name of the icon to use.`,table:{category:i.PROPERTIES}},color:{control:`select`,description:`The color to use from your application palette.`,options:[`primary`,`secondary`,`tertiary`,`success`,`warning`,`danger`,`light`,`medium`,`dark`,`white`],table:{category:i.PROPERTIES}},size:{control:`text`,description:`The size of the icon. Use large or small to change the size of the icon or pass a number to set the font-size in pixels.`,table:{category:i.PROPERTIES}}}},o={icon:`heart`,color:`secondary`,size:``}})),c,l,u,d;e((()=>{t(),s(),c={title:`Components/Icon`,...a},l=e=>n`
    <atom-icon icon=${e.icon} color=${e.color} size=${e.size} />
  `,u={render:e=>l(e),args:{...o}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createIcon(args),
  args: {
    ...IconComponentArgs
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`]}))();export{u as Default,d as __namedExportsOrder,c as default};
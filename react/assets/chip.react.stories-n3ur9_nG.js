import"./chunk-DseTPa7n.js";import{t as e}from"./react-BeYaFARg.js";import{t}from"./jsx-runtime-DsGsusFP.js";import"./react-dom-BaYUCVRd.js";import"./index-BIuA1NfB-Jxohl6WW.js";import{s as n}from"./esm-AmgW3jIi.js";import{t as r}from"./table-jqz5s6A8.js";import{t as i}from"./decorator-Ce3Kjdma.js";e();var a={decorators:[i],parameters:{actions:{handles:[`atomClick`]},docs:{description:{component:`Wrapper of Ionic Chip component. Read the [Ionic documentation](https://ionicframework.com/docs/api/chip) for more information about the available properties and possibilities.`}}},argTypes:{disabled:{control:`boolean`,defaultValue:{summary:!1},description:`If true, the user cannot interact with the chip.`,table:{category:r.PROPERTIES}},activated:{control:`boolean`,defaultValue:{summary:!1},description:`If true, the chip will be activated.`,table:{category:r.PROPERTIES}},icon:{control:`text`,description:`If have an value, the chip will have an icon.`,table:{category:r.PROPERTIES}},close:{control:`boolean`,defaultValue:{summary:!1},description:`If true, the chip will have a close button.`,table:{category:r.PROPERTIES}},mode:{control:`select`,options:[`md`,`ios`],defaultValue:{summary:`md`},description:`The mode determines which platform styles to use.`,table:{category:r.PROPERTIES}},atomClick:{action:`atomClick`,description:`Emitted when the chip is clicked.`,table:{category:`Events`}}}},o={mode:`md`,disabled:!1,activated:!1,close:!1,label:`Label`},s=t(),c={title:`Components/Chip`,components:[n],...a},l=e=>(0,s.jsx)(n,{color:e.color,disabled:e.disabled,activated:e.activated,focus:e.focus,mode:e.mode,icon:e.icon,close:e.close,children:e.label}),u={render:e=>l(e),args:{...o}},d={render:e=>l(e),args:{...o,disabled:!0}},f={render:e=>l(e),args:{...o,activated:!0}},p={render:e=>l(e),args:{...o,icon:`check`}},m={render:e=>l(e),args:{...o,close:!0}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    activated: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    icon: 'check'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    close: true
  }
}`,...m.parameters?.docs?.source}}};var h=[`Default`,`Disabled`,`Activated`,`WithIcon`,`WithClose`];export{f as Activated,u as Default,d as Disabled,m as WithClose,p as WithIcon,h as __namedExportsOrder,c as default};
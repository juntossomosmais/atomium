import{i as e}from"./preload-helper-xPQekRTU.js";import{U as t,X as n}from"./iframe-m4nl3XFf.js";import{W as r,t as i}from"./dist-Cqn0MxZv.js";import{n as a,t as o}from"./table-CVkdcsHV.js";import{n as s,t as c}from"./decorator-DZM0saJy.js";var l,u,d=e((()=>{a(),c(),l={decorators:[s],parameters:{actions:{handles:[`atomClick`]},docs:{description:{component:`Wrapper of Ionic Chip component. Read the [Ionic documentation](https://ionicframework.com/docs/api/chip) for more information about the available properties and possibilities.`}}},argTypes:{disabled:{control:`boolean`,defaultValue:{summary:!1},description:`If true, the user cannot interact with the chip.`,table:{category:o.PROPERTIES}},activated:{control:`boolean`,defaultValue:{summary:!1},description:`If true, the chip will be activated.`,table:{category:o.PROPERTIES}},icon:{control:`text`,description:`If have an value, the chip will have an icon.`,table:{category:o.PROPERTIES}},close:{control:`boolean`,defaultValue:{summary:!1},description:`If true, the chip will have a close button.`,table:{category:o.PROPERTIES}},mode:{control:`select`,options:[`md`,`ios`],defaultValue:{summary:`md`},description:`The mode determines which platform styles to use.`,table:{category:o.PROPERTIES}},atomClick:{action:`atomClick`,description:`Emitted when the chip is clicked.`,table:{category:`Events`}}}},u={mode:`md`,disabled:!1,activated:!1,close:!1,label:`Label`}})),f,p,m,h,g,_,v,y,b;e((()=>{n(),i(),d(),f=t(),p={title:`Components/Chip`,components:[r],...l},m=e=>(0,f.jsx)(r,{color:e.color,disabled:e.disabled,activated:e.activated,focus:e.focus,mode:e.mode,icon:e.icon,close:e.close,children:e.label}),h={render:e=>m(e),args:{...u}},g={render:e=>m(e),args:{...u,disabled:!0}},_={render:e=>m(e),args:{...u,activated:!0}},v={render:e=>m(e),args:{...u,icon:`check`}},y={render:e=>m(e),args:{...u,close:!0}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    activated: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    icon: 'check'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    close: true
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Disabled`,`Activated`,`WithIcon`,`WithClose`]}))();export{_ as Activated,h as Default,g as Disabled,y as WithClose,v as WithIcon,b as __namedExportsOrder,p as default};
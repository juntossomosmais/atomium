import{i as e}from"./preload-helper-xPQekRTU.js";import{E as t,t as n}from"./iframe-Tx0ARXFJ.js";import{n as r,t as i}from"./table-CVkdcsHV.js";import{n as a,t as o}from"./decorator-B6X5ztZ_.js";var s,c,l=e((()=>{r(),o(),s={decorators:[a],parameters:{actions:{handles:[`atomClick`]},docs:{description:{component:`Wrapper of Ionic Chip component. Read the [Ionic documentation](https://ionicframework.com/docs/api/chip) for more information about the available properties and possibilities.`}}},argTypes:{disabled:{control:`boolean`,defaultValue:{summary:!1},description:`If true, the user cannot interact with the chip.`,table:{category:i.PROPERTIES}},activated:{control:`boolean`,defaultValue:{summary:!1},description:`If true, the chip will be activated.`,table:{category:i.PROPERTIES}},icon:{control:`text`,description:`If have an value, the chip will have an icon.`,table:{category:i.PROPERTIES}},close:{control:`boolean`,defaultValue:{summary:!1},description:`If true, the chip will have a close button.`,table:{category:i.PROPERTIES}},mode:{control:`select`,options:[`md`,`ios`],defaultValue:{summary:`md`},description:`The mode determines which platform styles to use.`,table:{category:i.PROPERTIES}},atomClick:{action:`atomClick`,description:`Emitted when the chip is clicked.`,table:{category:`Events`}}}},c={mode:`md`,disabled:!1,activated:!1,close:!1,label:`Label`}})),u,d,f,p,m,h,g,_;e((()=>{n(),l(),u={title:`Components/Chip`,...s},d=e=>({components:{AtomChip:t},setup(){return{args:e}},template:`
    <AtomChip
      color="${e.color}"
      disabled="${e.disabled}"
      activated="${e.activated}"
      focus="${e.focus}"
      mode="${e.mode}"
      icon="${e.icon}"
      close="${e.close}"
    >
      {{ args.label }}
    </AtomChip>
  `}),f={render:e=>d(e),args:{...c}},p={render:e=>d(e),args:{...c,disabled:!0}},m={render:e=>d(e),args:{...c,activated:!0}},h={render:e=>d(e),args:{...c,icon:`check`}},g={render:e=>d(e),args:{...c,close:!0}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    activated: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    icon: 'check'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    close: true
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Disabled`,`Activated`,`WithIcon`,`WithClose`]}))();export{m as Activated,f as Default,p as Disabled,g as WithClose,h as WithIcon,_ as __namedExportsOrder,u as default};
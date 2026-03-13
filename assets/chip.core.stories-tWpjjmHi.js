import{P as e}from"./iframe-D71TlG5e.js";import{t}from"./table-7jAh1EVy.js";import{t as n}from"./decorator-B7evQOcP.js";var r={decorators:[n],parameters:{actions:{handles:[`atomClick`]},docs:{description:{component:`Wrapper of Ionic Chip component. Read the [Ionic documentation](https://ionicframework.com/docs/api/chip) for more information about the available properties and possibilities.`}}},argTypes:{disabled:{control:`boolean`,defaultValue:{summary:!1},description:`If true, the user cannot interact with the chip.`,table:{category:t.PROPERTIES}},activated:{control:`boolean`,defaultValue:{summary:!1},description:`If true, the chip will be activated.`,table:{category:t.PROPERTIES}},icon:{control:`text`,description:`If have an value, the chip will have an icon.`,table:{category:t.PROPERTIES}},close:{control:`boolean`,defaultValue:{summary:!1},description:`If true, the chip will have a close button.`,table:{category:t.PROPERTIES}},mode:{control:`select`,options:[`md`,`ios`],defaultValue:{summary:`md`},description:`The mode determines which platform styles to use.`,table:{category:t.PROPERTIES}},atomClick:{action:`atomClick`,description:`Emitted when the chip is clicked.`,table:{category:`Events`}}}},i={mode:`md`,disabled:!1,activated:!1,close:!1,label:`Label`},a={title:`Components/Chip`,...r},o=t=>e`
    <atom-chip
      color=${t.color}
      disabled=${t.disabled}
      activated=${t.activated}
      focus=${t.focus}
      mode=${t.mode}
      icon=${t.icon}
      close=${t.close}
    >
      ${t.label}
    </atom-chip>
  `,s={render:e=>o(e),args:{...i}},c={render:e=>o(e),args:{...i,disabled:!0}},l={render:e=>o(e),args:{...i,activated:!0}},u={render:e=>o(e),args:{...i,icon:`check`}},d={render:e=>o(e),args:{...i,close:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    disabled: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    activated: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    icon: 'check'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    close: true
  }
}`,...d.parameters?.docs?.source}}};var f=[`Default`,`Disabled`,`Activated`,`WithIcon`,`WithClose`];export{l as Activated,s as Default,c as Disabled,d as WithClose,u as WithIcon,f as __namedExportsOrder,a as default};
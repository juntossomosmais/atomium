import{N as d}from"./iframe-DPKEHp6z.js";import{w as l}from"./decorator-C48CrKmc.js";import{C as r}from"./table-D060eKuu.js";import"./preload-helper-PPVm8Dsz.js";const p={decorators:[l],parameters:{actions:{handles:["atomClick"]},docs:{description:{component:"Wrapper of Ionic Chip component. Read the [Ionic documentation](https://ionicframework.com/docs/api/chip) for more information about the available properties and possibilities."}}},argTypes:{disabled:{control:"boolean",defaultValue:{summary:!1},description:"If true, the user cannot interact with the chip.",table:{category:r.PROPERTIES}},activated:{control:"boolean",defaultValue:{summary:!1},description:"If true, the chip will be activated.",table:{category:r.PROPERTIES}},icon:{control:"text",description:"If have an value, the chip will have an icon.",table:{category:r.PROPERTIES}},close:{control:"boolean",defaultValue:{summary:!1},description:"If true, the chip will have a close button.",table:{category:r.PROPERTIES}},mode:{control:"select",options:["md","ios"],defaultValue:{summary:"md"},description:"The mode determines which platform styles to use.",table:{category:r.PROPERTIES}},atomClick:{action:"atomClick",description:"Emitted when the chip is clicked.",table:{category:"Events"}}}},o={mode:"md",disabled:!1,activated:!1,close:!1,label:"Label"},C={title:"Components/Chip",...p},a=e=>d`
    <atom-chip
      color=${e.color}
      disabled=${e.disabled}
      activated=${e.activated}
      focus=${e.focus}
      mode=${e.mode}
      icon=${e.icon}
      close=${e.close}
    >
      ${e.label}
    </atom-chip>
  `,t={render:e=>a(e),args:{...o}},s={render:e=>a(e),args:{...o,disabled:!0}},c={render:e=>a(e),args:{...o,activated:!0}},n={render:e=>a(e),args:{...o,icon:"check"}},i={render:e=>a(e),args:{...o,close:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    activated: true
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    icon: 'check'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => createChip(args),
  args: {
    ...ChipComponentArgs,
    close: true
  }
}`,...i.parameters?.docs?.source}}};const f=["Default","Disabled","Activated","WithIcon","WithClose"];export{c as Activated,t as Default,s as Disabled,i as WithClose,n as WithIcon,f as __namedExportsOrder,C as default};

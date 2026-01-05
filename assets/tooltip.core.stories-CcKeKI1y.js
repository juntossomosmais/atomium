import{N as s}from"./iframe-BElrKgc3.js";import{C as t}from"./table-D060eKuu.js";import{w as i}from"./decorator-BAL2BGux.js";import"./preload-helper-PPVm8Dsz.js";const p={parameters:{actions:{handles:["atomOpen","atomClose"]},decorators:[i],docs:{description:{component:"Tooltip is a small pop-up box that appears when a user moves a mouse over an element"}},layout:"centered"},argTypes:{placement:{control:"select",defaultValue:{summary:"top"},options:["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"],description:"Determines placement for tooltip",table:{category:t.PROPERTIES}},action:{control:"select",defaultValue:{summary:"hover"},options:["hover","click"],description:"Determines the trigger action for the tooltip: `hover` or `click`.",table:{category:t.PROPERTIES}},element:{control:"text",description:"Specifies the element responsible for opening/closing the tooltip.",table:{category:t.PROPERTIES}},open:{control:"boolean",description:"Controls whether the tooltip is open or closed.",table:{category:t.PROPERTIES}},text:{control:"text",description:"Determines a text for tooltip.",table:{category:t.PROPERTIES}},atomOpen:{description:"Event emitted when hover element, but for mobile when click in element.",table:{category:t.EVENTS}},atomClose:{description:"Event emitted when the tooltip is closed.",table:{category:t.EVENTS}},"--background":{description:"Custom background variable to tooltip.",table:{category:t.CSS_CUSTOM_PROPERTIES}}}},a={element:"atomium-element",placement:"top",text:"Tooltip",action:"hover",open:!1},l=(e,c="hover")=>s`
    <atom-button
      fill="solid"
      size="large"
      id="${e.element}"
      aria-describedby="atom-tooltip"
    >
      ${c}
    </atom-button>

    <atom-tooltip
      id="atom-tooltip"
      placement="${e.placement}"
      element="${e.element}"
      action="${e.action}"
      open="${e.open}"
    >
      ${e.text}
    </atom-tooltip>
  `,h={title:"Components/Tooltip",component:"atom-tooltip",...p},o={render:e=>l(e,"Hover"),args:{...a,element:"hover",placement:"top",open:!1}},n={render:e=>l(e,"Click"),args:{...a,element:"click",placement:"top",action:"click",open:!1}},r={render:e=>l(e,"Opened"),args:{...a,element:"opened",placement:"left",action:"click",open:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Hover'),
  args: {
    ...TooltipComponentArgs,
    element: 'hover',
    placement: 'top',
    open: false
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Click'),
  args: {
    ...TooltipComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click',
    open: false
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Opened'),
  args: {
    ...TooltipComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...r.parameters?.docs?.source}}};const b=["Hover","Click","Opened"];export{n as Click,o as Hover,r as Opened,b as __namedExportsOrder,h as default};

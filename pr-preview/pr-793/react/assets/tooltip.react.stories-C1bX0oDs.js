import{C as c,N as s}from"./index-Dcgwn9tW.js";import{R as p}from"./iframe-Ao1sNE2_.js";import{C as t}from"./table-D060eKuu.js";import{w as m}from"./decorator-CgMHT-je.js";import"./preload-helper-PPVm8Dsz.js";const d={parameters:{actions:{handles:["atomOpen","atomClose"]},decorators:[m],docs:{description:{component:"Tooltip is a small pop-up box that appears when a user moves a mouse over an element"}},layout:"centered"},argTypes:{placement:{control:"select",defaultValue:{summary:"top"},options:["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"],description:"Determines placement for tooltip",table:{category:t.PROPERTIES}},action:{control:"select",defaultValue:{summary:"hover"},options:["hover","click"],description:"Determines the trigger action for the tooltip: `hover` or `click`.",table:{category:t.PROPERTIES}},element:{control:"text",description:"Specifies the element responsible for opening/closing the tooltip.",table:{category:t.PROPERTIES}},open:{control:"boolean",description:"Controls whether the tooltip is open or closed.",table:{category:t.PROPERTIES}},text:{control:"text",description:"Determines a text for tooltip.",table:{category:t.PROPERTIES}},atomOpen:{description:"Event emitted when hover element, but for mobile when click in element.",table:{category:t.EVENTS}},atomClose:{description:"Event emitted when the tooltip is closed.",table:{category:t.EVENTS}},"--background":{description:"Custom background variable to tooltip.",table:{category:t.CSS_CUSTOM_PROPERTIES}}}},a={element:"atomium-element",placement:"top",text:"Tooltip",action:"hover",open:!1},E={title:"Components/Tooltip",...d},l=(e,i="Hover")=>h(p.Fragment,null,h(c,{fill:"solid",size:"large",id:e.element,"aria-describedby":"atom-tooltip"},i),h(s,{id:"atom-tooltip",placement:e.placement,element:e.element,action:e.action,open:e.open},h("div",null,e.text))),o={render:e=>l(e),args:{...a,element:"hover"}},r={render:e=>l(e,"Click"),args:{...a,element:"click",placement:"top",action:"click"}},n={render:e=>l(e,"Opened"),args:{...a,element:"opened",placement:"left",action:"click",open:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args),
  args: {
    ...TooltipComponentArgs,
    element: 'hover'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Click'),
  args: {
    ...TooltipComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Opened'),
  args: {
    ...TooltipComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...n.parameters?.docs?.source}}};const C=["Hover","Click","Opened"];export{r as Click,o as Hover,n as Opened,C as __namedExportsOrder,E as default};

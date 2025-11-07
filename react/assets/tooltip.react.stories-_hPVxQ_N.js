import{j as o}from"./iframe-D1tf9FLi.js";import{C as c,N as p}from"./index-DCGZOIrA.js";import{C as t}from"./table-D060eKuu.js";import{w as m}from"./decorator-C-4D3IDP.js";import"./preload-helper-PPVm8Dsz.js";const d={parameters:{actions:{handles:["atomOpen","atomClose"]},decorators:[m],docs:{description:{component:"Tooltip is a small pop-up box that appears when a user moves a mouse over an element"}},layout:"centered"},argTypes:{placement:{control:"select",defaultValue:{summary:"top"},options:["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"],description:"Determines placement for tooltip",table:{category:t.PROPERTIES}},action:{control:"select",defaultValue:{summary:"hover"},options:["hover","click"],description:"Determines the trigger action for the tooltip: `hover` or `click`.",table:{category:t.PROPERTIES}},element:{control:"text",description:"Specifies the element responsible for opening/closing the tooltip.",table:{category:t.PROPERTIES}},open:{control:"boolean",description:"Controls whether the tooltip is open or closed.",table:{category:t.PROPERTIES}},text:{control:"text",description:"Determines a text for tooltip.",table:{category:t.PROPERTIES}},atomOpen:{description:"Event emitted when hover element, but for mobile when click in element.",table:{category:t.EVENTS}},atomClose:{description:"Event emitted when the tooltip is closed.",table:{category:t.EVENTS}},"--background":{description:"Custom background variable to tooltip.",table:{category:t.CSS_CUSTOM_PROPERTIES}}}},s={element:"atomium-element",placement:"top",text:"Tooltip",action:"hover",open:!1},f={title:"Components/Tooltip",...d},i=(e,l="Hover")=>o.jsxs(o.Fragment,{children:[o.jsx(c,{fill:"solid",size:"large",id:e.element,"aria-describedby":"atom-tooltip",children:l}),o.jsx(p,{id:"atom-tooltip",placement:e.placement,element:e.element,action:e.action,open:e.open,children:o.jsx("div",{children:e.text})})]}),r={render:e=>i(e),args:{...s,element:"hover"}},n={render:e=>i(e,"Click"),args:{...s,element:"click",placement:"top",action:"click"}},a={render:e=>i(e,"Opened"),args:{...s,element:"opened",placement:"left",action:"click",open:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args),
  args: {
    ...TooltipComponentArgs,
    element: 'hover'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Click'),
  args: {
    ...TooltipComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Opened'),
  args: {
    ...TooltipComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...a.parameters?.docs?.source}}};const E=["Hover","Click","Opened"];export{n as Click,r as Hover,a as Opened,E as __namedExportsOrder,f as default};

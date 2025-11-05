import{C as s,E as i}from"./index-Dcgwn9tW.js";import{R as l}from"./iframe-Ao1sNE2_.js";import{C as o}from"./table-D060eKuu.js";import{w as m}from"./decorator-CgMHT-je.js";import"./preload-helper-PPVm8Dsz.js";const d={parameters:{actions:{handles:["atomOpen","atomClose"]},decorators:[m],docs:{description:{component:"Popover is a component that provides more information to the user and allows them to perform quick actions within the context of the problem."}},layout:"centered"},argTypes:{placement:{control:"select",defaultValue:{summary:"top"},options:["top","top-start","top-end","bottom","bottom-start","bottom-end","right","left"],description:"Determines placement for popover",table:{category:o.PROPERTIES}},action:{control:"select",defaultValue:{summary:"hover"},options:["hover","click"],description:"Determines the trigger action for the popover: `hover` or `click`.",table:{category:o.PROPERTIES}},element:{control:"text",description:"Specifies the element responsible for opening/closing the popover.",table:{category:o.PROPERTIES}},open:{control:"boolean",description:"Controls whether the popover is open or closed.",table:{category:o.PROPERTIES}},label:{control:"text",description:"Determines a title for popover.",table:{category:o.PROPERTIES}},text:{control:"text",description:"Determines a text for popover.",table:{category:o.PROPERTIES}},actionText:{control:"text",description:"Determines a text for action button.",table:{category:o.PROPERTIES}},buttonAction:{description:"Event emitted when the action button is clicked. Action needs to be click to show the button.",table:{category:o.EVENTS}},atomOpen:{description:"Event emitted when hover element, but for mobile when click in element.",table:{category:o.EVENTS}},atomClose:{description:"Event emitted when the popover is closed.",table:{category:o.EVENTS}}}},c={element:"atomium-element",placement:"top",text:"Supporting line text lorem ipsum dolor sit amet, consectetur",action:"hover",label:"Title",actionText:"Action Button",open:!1},P={title:"Components/Popover",...d},p=(e,a="Hover")=>h(l.Fragment,null,h(s,{fill:"solid",size:"large",id:a,"aria-describedby":"atom-popover"},a),h(i,{id:"atom-popover",placement:e.placement,element:a,label:e.label,action:e.action,actionText:e.actionText,open:e.open},e.text)),t={render:e=>p(e,"Hover"),args:{...c,element:"hover",placement:"top",open:!1}},r={render:e=>p(e,"Click"),args:{...c,element:"click",placement:"top",action:"click",open:!1}},n={render:e=>p(e,"Opened"),args:{...c,element:"opened",placement:"left",action:"click",open:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Hover'),
  args: {
    ...PopoverComponentArgs,
    element: 'hover',
    placement: 'top',
    open: false
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Click'),
  args: {
    ...PopoverComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click',
    open: false
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Opened'),
  args: {
    ...PopoverComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...n.parameters?.docs?.source}}};const E=["Hover","Click","Opened"];export{r as Click,t as Hover,n as Opened,E as __namedExportsOrder,P as default};

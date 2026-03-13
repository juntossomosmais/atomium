import"./chunk-DseTPa7n.js";import{t as e}from"./react-BeYaFARg.js";import{t}from"./jsx-runtime-DsGsusFP.js";import"./react-dom-BaYUCVRd.js";import"./index--pUmmU2V-CE9k8Uy1.js";import{O as n,i as r}from"./esm-BiOou3EM.js";import{t as i}from"./table-jqz5s6A8.js";import{t as a}from"./decorator-Ce3Kjdma.js";e();var o={parameters:{actions:{handles:[`atomOpen`,`atomClose`]},decorators:[a],docs:{description:{component:`Tooltip is a small pop-up box that appears when a user moves a mouse over an element`}},layout:`centered`},argTypes:{placement:{control:`select`,defaultValue:{summary:`top`},options:[`auto`,`auto-start`,`auto-end`,`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`right`,`right-start`,`right-end`,`left`,`left-start`,`left-end`],description:`Determines placement for tooltip`,table:{category:i.PROPERTIES}},action:{control:`select`,defaultValue:{summary:`hover`},options:[`hover`,`click`],description:"Determines the trigger action for the tooltip: `hover` or `click`.",table:{category:i.PROPERTIES}},element:{control:`text`,description:`Specifies the element responsible for opening/closing the tooltip.`,table:{category:i.PROPERTIES}},open:{control:`boolean`,description:`Controls whether the tooltip is open or closed.`,table:{category:i.PROPERTIES}},text:{control:`text`,description:`Determines a text for tooltip.`,table:{category:i.PROPERTIES}},atomOpen:{description:`Event emitted when hover element, but for mobile when click in element.`,table:{category:i.EVENTS}},atomClose:{description:`Event emitted when the tooltip is closed.`,table:{category:i.EVENTS}},"--background":{description:`Custom background variable to tooltip.`,table:{category:i.CSS_CUSTOM_PROPERTIES}}}},s={element:`atomium-element`,placement:`top`,text:`Tooltip`,action:`hover`,open:!1},c=t(),l={title:`Components/Tooltip`,...o},u=(e,t=`Hover`)=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{fill:`solid`,size:`large`,id:e.element,"aria-describedby":`atom-tooltip`,children:t}),(0,c.jsx)(n,{id:`atom-tooltip`,placement:e.placement,element:e.element,action:e.action,open:e.open,children:(0,c.jsx)(`div`,{children:e.text})})]}),d={render:e=>u(e),args:{...s,element:`hover`}},f={render:e=>u(e,`Click`),args:{...s,element:`click`,placement:`top`,action:`click`}},p={render:e=>u(e,`Opened`),args:{...s,element:`opened`,placement:`left`,action:`click`,open:!0}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args),
  args: {
    ...TooltipComponentArgs,
    element: 'hover'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Click'),
  args: {
    ...TooltipComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Opened'),
  args: {
    ...TooltipComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...p.parameters?.docs?.source}}};var m=[`Hover`,`Click`,`Opened`];export{f as Click,d as Hover,p as Opened,m as __namedExportsOrder,l as default};
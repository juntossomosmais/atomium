import"./chunk-DseTPa7n.js";import{t as e}from"./react-BeYaFARg.js";import{t}from"./jsx-runtime-DsGsusFP.js";import"./react-dom-BaYUCVRd.js";import"./index--pUmmU2V-CE9k8Uy1.js";import{i as n,x as r}from"./esm-BiOou3EM.js";import{t as i}from"./table-jqz5s6A8.js";import{t as a}from"./decorator-Ce3Kjdma.js";e();var o={parameters:{actions:{handles:[`atomOpen`,`atomClose`]},decorators:[a],docs:{description:{component:`Popover is a component that provides more information to the user and allows them to perform quick actions within the context of the problem.`}},layout:`centered`},argTypes:{placement:{control:`select`,defaultValue:{summary:`top`},options:[`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`right`,`left`],description:`Determines placement for popover`,table:{category:i.PROPERTIES}},action:{control:`select`,defaultValue:{summary:`hover`},options:[`hover`,`click`],description:"Determines the trigger action for the popover: `hover` or `click`.",table:{category:i.PROPERTIES}},element:{control:`text`,description:`Specifies the element responsible for opening/closing the popover.`,table:{category:i.PROPERTIES}},open:{control:`boolean`,description:`Controls whether the popover is open or closed.`,table:{category:i.PROPERTIES}},label:{control:`text`,description:`Determines a title for popover.`,table:{category:i.PROPERTIES}},text:{control:`text`,description:`Determines a text for popover.`,table:{category:i.PROPERTIES}},actionText:{control:`text`,description:`Determines a text for action button.`,table:{category:i.PROPERTIES}},buttonAction:{description:`Event emitted when the action button is clicked. Action needs to be click to show the button.`,table:{category:i.EVENTS}},atomOpen:{description:`Event emitted when hover element, but for mobile when click in element.`,table:{category:i.EVENTS}},atomClose:{description:`Event emitted when the popover is closed.`,table:{category:i.EVENTS}}}},s={element:`atomium-element`,placement:`top`,text:`Supporting line text lorem ipsum dolor sit amet, consectetur`,action:`hover`,label:`Title`,actionText:`Action Button`,open:!1},c=t(),l={title:`Components/Popover`,...o},u=(e,t=`Hover`)=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{fill:`solid`,size:`large`,id:t,"aria-describedby":`atom-popover`,children:t}),(0,c.jsx)(r,{id:`atom-popover`,placement:e.placement,element:t,label:e.label,action:e.action,actionText:e.actionText,open:e.open,children:e.text})]}),d={render:e=>u(e,`Hover`),args:{...s,element:`hover`,placement:`top`,open:!1}},f={render:e=>u(e,`Click`),args:{...s,element:`click`,placement:`top`,action:`click`,open:!1}},p={render:e=>u(e,`Opened`),args:{...s,element:`opened`,placement:`left`,action:`click`,open:!0}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Hover'),
  args: {
    ...PopoverComponentArgs,
    element: 'hover',
    placement: 'top',
    open: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Click'),
  args: {
    ...PopoverComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click',
    open: false
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Opened'),
  args: {
    ...PopoverComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...p.parameters?.docs?.source}}};var m=[`Hover`,`Click`,`Opened`];export{f as Click,d as Hover,p as Opened,m as __namedExportsOrder,l as default};
import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./react-CnPKFcMr.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{X as r,g as i,t as a}from"./dist-BxD50d_r.js";import{n as o,t as s}from"./table-CVkdcsHV.js";import{n as c,t as l}from"./decorator-zvi3SD6J.js";var u,d,f=e((()=>{o(),l(),u={parameters:{actions:{handles:[`atomOpen`,`atomClose`]},decorators:[c],docs:{description:{component:`Popover is a component that provides more information to the user and allows them to perform quick actions within the context of the problem.`}},layout:`centered`},argTypes:{placement:{control:`select`,defaultValue:{summary:`top`},options:[`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`right`,`left`],description:`Determines placement for popover`,table:{category:s.PROPERTIES}},action:{control:`select`,defaultValue:{summary:`hover`},options:[`hover`,`click`],description:"Determines the trigger action for the popover: `hover` or `click`.",table:{category:s.PROPERTIES}},element:{control:`text`,description:`Specifies the element responsible for opening/closing the popover.`,table:{category:s.PROPERTIES}},open:{control:`boolean`,description:`Controls whether the popover is open or closed.`,table:{category:s.PROPERTIES}},label:{control:`text`,description:`Determines a title for popover.`,table:{category:s.PROPERTIES}},text:{control:`text`,description:`Determines a text for popover.`,table:{category:s.PROPERTIES}},actionText:{control:`text`,description:`Determines a text for action button.`,table:{category:s.PROPERTIES}},buttonAction:{description:`Event emitted when the action button is clicked. Action needs to be click to show the button.`,table:{category:s.EVENTS}},atomOpen:{description:`Event emitted when hover element, but for mobile when click in element.`,table:{category:s.EVENTS}},atomClose:{description:`Event emitted when the popover is closed.`,table:{category:s.EVENTS}}}},d={element:`atomium-element`,placement:`top`,text:`Supporting line text lorem ipsum dolor sit amet, consectetur`,action:`hover`,label:`Title`,actionText:`Action Button`,open:!1}})),p,m,h,g,_,v,y;e((()=>{t(),a(),f(),p=n(),m={title:`Components/Popover`,...u},h=(e,t=`Hover`)=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{fill:`solid`,size:`large`,id:t,"aria-describedby":`atom-popover`,children:t}),(0,p.jsx)(i,{id:`atom-popover`,placement:e.placement,element:t,label:e.label,action:e.action,actionText:e.actionText,open:e.open,children:e.text})]}),g={render:e=>h(e,`Hover`),args:{...d,element:`hover`,placement:`top`,open:!1}},_={render:e=>h(e,`Click`),args:{...d,element:`click`,placement:`top`,action:`click`,open:!1}},v={render:e=>h(e,`Opened`),args:{...d,element:`opened`,placement:`left`,action:`click`,open:!0}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Hover'),
  args: {
    ...PopoverComponentArgs,
    element: 'hover',
    placement: 'top',
    open: false
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Click'),
  args: {
    ...PopoverComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click',
    open: false
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Opened'),
  args: {
    ...PopoverComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...v.parameters?.docs?.source}}},y=[`Hover`,`Click`,`Opened`]}))();export{_ as Click,g as Hover,v as Opened,y as __namedExportsOrder,m as default};
import{i as e}from"./preload-helper-xPQekRTU.js";import{U as t,X as n}from"./iframe-DzLKyHdf.js";import{a as r,k as i,t as a}from"./esm-BEOjjh0U.js";import{n as o,t as s}from"./table-CVkdcsHV.js";import{n as c,t as l}from"./decorator-C3U0UClq.js";var u,d,f=e((()=>{o(),l(),u={parameters:{actions:{handles:[`atomOpen`,`atomClose`]},decorators:[c],docs:{description:{component:`Tooltip is a small pop-up box that appears when a user moves a mouse over an element`}},layout:`centered`},argTypes:{placement:{control:`select`,defaultValue:{summary:`top`},options:[`auto`,`auto-start`,`auto-end`,`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`right`,`right-start`,`right-end`,`left`,`left-start`,`left-end`],description:`Determines placement for tooltip`,table:{category:s.PROPERTIES}},action:{control:`select`,defaultValue:{summary:`hover`},options:[`hover`,`click`],description:"Determines the trigger action for the tooltip: `hover` or `click`.",table:{category:s.PROPERTIES}},element:{control:`text`,description:`Specifies the element responsible for opening/closing the tooltip.`,table:{category:s.PROPERTIES}},open:{control:`boolean`,description:`Controls whether the tooltip is open or closed.`,table:{category:s.PROPERTIES}},text:{control:`text`,description:`Determines a text for tooltip.`,table:{category:s.PROPERTIES}},atomOpen:{description:`Event emitted when hover element, but for mobile when click in element.`,table:{category:s.EVENTS}},atomClose:{description:`Event emitted when the tooltip is closed.`,table:{category:s.EVENTS}},"--background":{description:`Custom background variable to tooltip.`,table:{category:s.CSS_CUSTOM_PROPERTIES}}}},d={element:`atomium-element`,placement:`top`,text:`Tooltip`,action:`hover`,open:!1}})),p,m,h,g,_,v,y;e((()=>{a(),n(),f(),p=t(),m={title:`Components/Tooltip`,...u},h=(e,t=`Hover`)=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{fill:`solid`,size:`large`,id:e.element,"aria-describedby":`atom-tooltip`,children:t}),(0,p.jsx)(i,{id:`atom-tooltip`,placement:e.placement,element:e.element,action:e.action,open:e.open,children:(0,p.jsx)(`div`,{children:e.text})})]}),g={render:e=>h(e),args:{...d,element:`hover`}},_={render:e=>h(e,`Click`),args:{...d,element:`click`,placement:`top`,action:`click`}},v={render:e=>h(e,`Opened`),args:{...d,element:`opened`,placement:`left`,action:`click`,open:!0}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args),
  args: {
    ...TooltipComponentArgs,
    element: 'hover'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Click'),
  args: {
    ...TooltipComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Opened'),
  args: {
    ...TooltipComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...v.parameters?.docs?.source}}},y=[`Hover`,`Click`,`Opened`]}))();export{_ as Click,g as Hover,v as Opened,y as __namedExportsOrder,m as default};
import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{at as t,st as n}from"./storybook-Zaq70kOf.js";import{n as r,t as i}from"./table-DMN4TomJ.js";import{n as a,t as o}from"./decorator-C9F_eGsK.js";var s,c,l=e((()=>{r(),o(),s={parameters:{actions:{handles:[`atomOpen`,`atomClose`]},decorators:[a],docs:{description:{component:`Tooltip is a small pop-up box that appears when a user moves a mouse over an element`}},layout:`centered`},argTypes:{placement:{control:`select`,defaultValue:{summary:`top`},options:[`auto`,`auto-start`,`auto-end`,`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`right`,`right-start`,`right-end`,`left`,`left-start`,`left-end`],description:`Determines placement for tooltip`,table:{category:i.PROPERTIES}},action:{control:`select`,defaultValue:{summary:`hover`},options:[`hover`,`click`],description:"Determines the trigger action for the tooltip: `hover` or `click`.",table:{category:i.PROPERTIES}},element:{control:`text`,description:`Specifies the element responsible for opening/closing the tooltip.`,table:{category:i.PROPERTIES}},open:{control:`boolean`,description:`Controls whether the tooltip is open or closed.`,table:{category:i.PROPERTIES}},text:{control:`text`,description:`Determines a text for tooltip.`,table:{category:i.PROPERTIES}},atomOpen:{description:`Event emitted when hover element, but for mobile when click in element.`,table:{category:i.EVENTS}},atomClose:{description:`Event emitted when the tooltip is closed.`,table:{category:i.EVENTS}},"--background":{description:`Custom background variable to tooltip.`,table:{category:i.CSS_CUSTOM_PROPERTIES}}}},c={element:`atomium-element`,placement:`top`,text:`Tooltip`,action:`hover`,open:!1}})),u,d,f,p,m,h;e((()=>{t(),l(),u=(e,t=`hover`)=>n`
    <atom-button
      fill="solid"
      size="large"
      id="${e.element}"
      aria-describedby="atom-tooltip"
    >
      ${t}
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
  `,d={title:`Components/Tooltip`,component:`atom-tooltip`,...s},f={render:e=>u(e,`Hover`),args:{...c,element:`hover`,placement:`top`,open:!1}},p={render:e=>u(e,`Click`),args:{...c,element:`click`,placement:`top`,action:`click`,open:!1}},m={render:e=>u(e,`Opened`),args:{...c,element:`opened`,placement:`left`,action:`click`,open:!0}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Hover'),
  args: {
    ...TooltipComponentArgs,
    element: 'hover',
    placement: 'top',
    open: false
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Click'),
  args: {
    ...TooltipComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click',
    open: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Opened'),
  args: {
    ...TooltipComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...m.parameters?.docs?.source}}},h=[`Hover`,`Click`,`Opened`]}))();export{p as Click,f as Hover,m as Opened,h as __namedExportsOrder,d as default};
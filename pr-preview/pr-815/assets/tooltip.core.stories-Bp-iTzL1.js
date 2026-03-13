import{P as e}from"./iframe-Dm0EU4CU.js";import{t}from"./table-7jAh1EVy.js";import{t as n}from"./decorator-B7evQOcP.js";var r={parameters:{actions:{handles:[`atomOpen`,`atomClose`]},decorators:[n],docs:{description:{component:`Tooltip is a small pop-up box that appears when a user moves a mouse over an element`}},layout:`centered`},argTypes:{placement:{control:`select`,defaultValue:{summary:`top`},options:[`auto`,`auto-start`,`auto-end`,`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`right`,`right-start`,`right-end`,`left`,`left-start`,`left-end`],description:`Determines placement for tooltip`,table:{category:t.PROPERTIES}},action:{control:`select`,defaultValue:{summary:`hover`},options:[`hover`,`click`],description:"Determines the trigger action for the tooltip: `hover` or `click`.",table:{category:t.PROPERTIES}},element:{control:`text`,description:`Specifies the element responsible for opening/closing the tooltip.`,table:{category:t.PROPERTIES}},open:{control:`boolean`,description:`Controls whether the tooltip is open or closed.`,table:{category:t.PROPERTIES}},text:{control:`text`,description:`Determines a text for tooltip.`,table:{category:t.PROPERTIES}},atomOpen:{description:`Event emitted when hover element, but for mobile when click in element.`,table:{category:t.EVENTS}},atomClose:{description:`Event emitted when the tooltip is closed.`,table:{category:t.EVENTS}},"--background":{description:`Custom background variable to tooltip.`,table:{category:t.CSS_CUSTOM_PROPERTIES}}}},i={element:`atomium-element`,placement:`top`,text:`Tooltip`,action:`hover`,open:!1},a=(t,n=`hover`)=>e`
    <atom-button
      fill="solid"
      size="large"
      id="${t.element}"
      aria-describedby="atom-tooltip"
    >
      ${n}
    </atom-button>

    <atom-tooltip
      id="atom-tooltip"
      placement="${t.placement}"
      element="${t.element}"
      action="${t.action}"
      open="${t.open}"
    >
      ${t.text}
    </atom-tooltip>
  `,o={title:`Components/Tooltip`,component:`atom-tooltip`,...r},s={render:e=>a(e,`Hover`),args:{...i,element:`hover`,placement:`top`,open:!1}},c={render:e=>a(e,`Click`),args:{...i,element:`click`,placement:`top`,action:`click`,open:!1}},l={render:e=>a(e,`Opened`),args:{...i,element:`opened`,placement:`left`,action:`click`,open:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Hover'),
  args: {
    ...TooltipComponentArgs,
    element: 'hover',
    placement: 'top',
    open: false
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Click'),
  args: {
    ...TooltipComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click',
    open: false
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Opened'),
  args: {
    ...TooltipComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...l.parameters?.docs?.source}}};var u=[`Hover`,`Click`,`Opened`];export{c as Click,s as Hover,l as Opened,u as __namedExportsOrder,o as default};
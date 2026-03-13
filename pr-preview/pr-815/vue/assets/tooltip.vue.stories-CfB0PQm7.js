import{G as e,x as t}from"./iframe-Br9ztWDk.js";import{t as n}from"./table-DZkiv1k4.js";import{t as r}from"./decorator-tF45y5qF.js";var i={parameters:{actions:{handles:[`atomOpen`,`atomClose`]},decorators:[r],docs:{description:{component:`Tooltip is a small pop-up box that appears when a user moves a mouse over an element`}},layout:`centered`},argTypes:{placement:{control:`select`,defaultValue:{summary:`top`},options:[`auto`,`auto-start`,`auto-end`,`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`right`,`right-start`,`right-end`,`left`,`left-start`,`left-end`],description:`Determines placement for tooltip`,table:{category:n.PROPERTIES}},action:{control:`select`,defaultValue:{summary:`hover`},options:[`hover`,`click`],description:"Determines the trigger action for the tooltip: `hover` or `click`.",table:{category:n.PROPERTIES}},element:{control:`text`,description:`Specifies the element responsible for opening/closing the tooltip.`,table:{category:n.PROPERTIES}},open:{control:`boolean`,description:`Controls whether the tooltip is open or closed.`,table:{category:n.PROPERTIES}},text:{control:`text`,description:`Determines a text for tooltip.`,table:{category:n.PROPERTIES}},atomOpen:{description:`Event emitted when hover element, but for mobile when click in element.`,table:{category:n.EVENTS}},atomClose:{description:`Event emitted when the tooltip is closed.`,table:{category:n.EVENTS}},"--background":{description:`Custom background variable to tooltip.`,table:{category:n.CSS_CUSTOM_PROPERTIES}}}},a={element:`atomium-element`,placement:`top`,text:`Tooltip`,action:`hover`,open:!1},o={title:`Components/Tooltip`,...i},s=(n,r=`Hover`)=>({components:{AtomTooltip:e,AtomButton:t},setup(){return{args:n}},template:`
   <AtomButton
      fill='solid'
      size='large'
      id="${n.element}"
      aria-describedby='atom-tooltip'
    >
      ${r}
    </AtomButton>

    <AtomTooltip
      id='atom-tooltip'
      placement="${n.placement}"
      element="${n.element}"
      action="${n.action}"
      open="${n.open}"
    >
      <div>${n.text}</div>
    </AtomTooltip>
  `}),c={render:e=>s(e),args:{...a,element:`hover`}},l={render:e=>s(e,`Click`),args:{...a,element:`click`,placement:`top`,action:`click`}},u={render:e=>s(e,`Opened`),args:{...a,element:`opened`,placement:`left`,action:`click`,open:!0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args),
  args: {
    ...TooltipComponentArgs,
    element: 'hover'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Click'),
  args: {
    ...TooltipComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Opened'),
  args: {
    ...TooltipComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...u.parameters?.docs?.source}}};var d=[`Hover`,`Click`,`Opened`];export{l as Click,c as Hover,u as Opened,d as __namedExportsOrder,o as default};
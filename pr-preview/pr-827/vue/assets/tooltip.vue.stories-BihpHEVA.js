import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,q as n,t as r}from"./iframe-Bh0p7hu1.js";import{n as i,t as a}from"./table-CVkdcsHV.js";import{n as o,t as s}from"./decorator-CbEWp_u4.js";var c,l,u=e((()=>{i(),s(),c={parameters:{actions:{handles:[`atomOpen`,`atomClose`]},decorators:[o],docs:{description:{component:`Tooltip is a small pop-up box that appears when a user moves a mouse over an element`}},layout:`centered`},argTypes:{placement:{control:`select`,defaultValue:{summary:`top`},options:[`auto`,`auto-start`,`auto-end`,`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`right`,`right-start`,`right-end`,`left`,`left-start`,`left-end`],description:`Determines placement for tooltip`,table:{category:a.PROPERTIES}},action:{control:`select`,defaultValue:{summary:`hover`},options:[`hover`,`click`],description:"Determines the trigger action for the tooltip: `hover` or `click`.",table:{category:a.PROPERTIES}},element:{control:`text`,description:`Specifies the element responsible for opening/closing the tooltip.`,table:{category:a.PROPERTIES}},open:{control:`boolean`,description:`Controls whether the tooltip is open or closed.`,table:{category:a.PROPERTIES}},text:{control:`text`,description:`Determines a text for tooltip.`,table:{category:a.PROPERTIES}},atomOpen:{description:`Event emitted when hover element, but for mobile when click in element.`,table:{category:a.EVENTS}},atomClose:{description:`Event emitted when the tooltip is closed.`,table:{category:a.EVENTS}},"--background":{description:`Custom background variable to tooltip.`,table:{category:a.CSS_CUSTOM_PROPERTIES}}}},l={element:`atomium-element`,placement:`top`,text:`Tooltip`,action:`hover`,open:!1}})),d,f,p,m,h,g;e((()=>{r(),u(),d={title:`Components/Tooltip`,...c},f=(e,r=`Hover`)=>({components:{AtomTooltip:n,AtomButton:t},setup(){return{args:e}},template:`
   <AtomButton
      fill='solid'
      size='large'
      id="${e.element}"
      aria-describedby='atom-tooltip'
    >
      ${r}
    </AtomButton>

    <AtomTooltip
      id='atom-tooltip'
      placement="${e.placement}"
      element="${e.element}"
      action="${e.action}"
      open="${e.open}"
    >
      <div>${e.text}</div>
    </AtomTooltip>
  `}),p={render:e=>f(e),args:{...l,element:`hover`}},m={render:e=>f(e,`Click`),args:{...l,element:`click`,placement:`top`,action:`click`}},h={render:e=>f(e,`Opened`),args:{...l,element:`opened`,placement:`left`,action:`click`,open:!0}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args),
  args: {
    ...TooltipComponentArgs,
    element: 'hover'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Click'),
  args: {
    ...TooltipComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Opened'),
  args: {
    ...TooltipComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...h.parameters?.docs?.source}}},g=[`Hover`,`Click`,`Opened`]}))();export{m as Click,p as Hover,h as Opened,g as __namedExportsOrder,d as default};
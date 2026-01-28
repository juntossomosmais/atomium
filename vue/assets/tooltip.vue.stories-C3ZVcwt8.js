import{a2 as c,ac as s}from"./iframe-GF_XawOv.js";import{C as t}from"./table-D060eKuu.js";import{w as p}from"./decorator-BhkEaMCP.js";import"./preload-helper-PPVm8Dsz.js";const m={parameters:{actions:{handles:["atomOpen","atomClose"]},decorators:[p],docs:{description:{component:"Tooltip is a small pop-up box that appears when a user moves a mouse over an element"}},layout:"centered"},argTypes:{placement:{control:"select",defaultValue:{summary:"top"},options:["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"],description:"Determines placement for tooltip",table:{category:t.PROPERTIES}},action:{control:"select",defaultValue:{summary:"hover"},options:["hover","click"],description:"Determines the trigger action for the tooltip: `hover` or `click`.",table:{category:t.PROPERTIES}},element:{control:"text",description:"Specifies the element responsible for opening/closing the tooltip.",table:{category:t.PROPERTIES}},open:{control:"boolean",description:"Controls whether the tooltip is open or closed.",table:{category:t.PROPERTIES}},text:{control:"text",description:"Determines a text for tooltip.",table:{category:t.PROPERTIES}},atomOpen:{description:"Event emitted when hover element, but for mobile when click in element.",table:{category:t.EVENTS}},atomClose:{description:"Event emitted when the tooltip is closed.",table:{category:t.EVENTS}},"--background":{description:"Custom background variable to tooltip.",table:{category:t.CSS_CUSTOM_PROPERTIES}}}},a={element:"atomium-element",placement:"top",text:"Tooltip",action:"hover",open:!1},T={title:"Components/Tooltip",...m},i=(e,l="Hover")=>({components:{AtomTooltip:s,AtomButton:c},setup(){return{args:e}},template:`
   <AtomButton
      fill='solid'
      size='large'
      id="${e.element}"
      aria-describedby='atom-tooltip'
    >
      ${l}
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
  `}),o={render:e=>i(e),args:{...a,element:"hover"}},r={render:e=>i(e,"Click"),args:{...a,element:"click",placement:"top",action:"click"}},n={render:e=>i(e,"Opened"),args:{...a,element:"opened",placement:"left",action:"click",open:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args),
  args: {
    ...TooltipComponentArgs,
    element: 'hover'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Click'),
  args: {
    ...TooltipComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Opened'),
  args: {
    ...TooltipComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...n.parameters?.docs?.source}}};const b=["Hover","Click","Opened"];export{r as Click,o as Hover,n as Opened,b as __namedExportsOrder,T as default};

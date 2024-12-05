import{z as b,q as f}from"./index-Cb1HsLgW.js";import{C as t}from"./table-D060eKuu.js";import{w as v}from"./decorator-DZmxGtIB.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-C0m2_v1e.js";import"../sb-preview/runtime.js";import"./preview-errors-B42RpLod.js";import"./index-DrFu-skq.js";const E={parameters:{actions:{handles:["atomOpen","atomClose"]},decorators:[v],docs:{description:{component:"Tooltip is a small pop-up box that appears when a user moves a mouse over an element"}},layout:"centered"},argTypes:{placement:{control:"select",defaultValue:{summary:"top"},options:["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","left"],description:"Determines placement for tooltip",table:{category:t.PROPERTIES}},action:{control:"select",defaultValue:{summary:"hover"},options:["hover","click"],description:"Determines the trigger action for the tooltip: `hover` or `click`.",table:{category:t.PROPERTIES}},element:{control:"text",description:"Specifies the element responsible for opening/closing the tooltip.",table:{category:t.PROPERTIES}},open:{control:"boolean",description:"Controls whether the tooltip is open or closed.",table:{category:t.PROPERTIES}},text:{control:"text",description:"Determines a text for tooltip.",table:{category:t.PROPERTIES}},atomOpen:{description:"Event emitted when hover element, but for mobile when click in element.",table:{category:t.EVENTS}},atomClose:{description:"Event emitted when the tooltip is closed.",table:{category:t.EVENTS}}}},a={element:"atomium-element",placement:"top",text:"Tooltip",action:"hover",open:!1},x={title:"Components/Tooltip",...E},i=(e,T="Hover")=>({components:{AtomTooltip:b,AtomButton:f},setup(){return{args:e}},template:`
   <AtomButton
      fill='solid'
      size='large'
      id="${e.element}"
      aria-describedby='atom-tooltip'
    >
      ${T}
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
  `}),o={render:e=>i(e),args:{...a,element:"hover"}},r={render:e=>i(e,"Click"),args:{...a,element:"click",placement:"top",action:"click"}},n={render:e=>i(e,"Opened"),args:{...a,element:"opened",placement:"left",action:"click",open:!0}};var l,p,s;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => createTooltip(args),
  args: {
    ...TooltipComponentArgs,
    element: 'hover'
  }
}`,...(s=(p=o.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};var c,m,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Click'),
  args: {
    ...TooltipComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click'
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,g,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Opened'),
  args: {
    ...TooltipComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const w=["Hover","Click","Opened"];export{r as Click,o as Hover,n as Opened,w as __namedExportsOrder,x as default};

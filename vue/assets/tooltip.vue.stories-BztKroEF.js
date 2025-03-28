import{v,G as b}from"./index-DivYdEX9.js";import{C as t}from"./table-D060eKuu.js";import{w as f}from"./decorator-DFROgT0E.js";import"./vue.esm-bundler-UQm0beuB.js";import"./iframe-3VZcyeil.js";import"./v4-CtRu48qb.js";const E={parameters:{actions:{handles:["atomOpen","atomClose"]},decorators:[f],docs:{description:{component:"Tooltip is a small pop-up box that appears when a user moves a mouse over an element"}},layout:"centered"},argTypes:{placement:{control:"select",defaultValue:{summary:"top"},options:["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","left"],description:"Determines placement for tooltip",table:{category:t.PROPERTIES}},action:{control:"select",defaultValue:{summary:"hover"},options:["hover","click"],description:"Determines the trigger action for the tooltip: `hover` or `click`.",table:{category:t.PROPERTIES}},element:{control:"text",description:"Specifies the element responsible for opening/closing the tooltip.",table:{category:t.PROPERTIES}},open:{control:"boolean",description:"Controls whether the tooltip is open or closed.",table:{category:t.PROPERTIES}},text:{control:"text",description:"Determines a text for tooltip.",table:{category:t.PROPERTIES}},atomOpen:{description:"Event emitted when hover element, but for mobile when click in element.",table:{category:t.EVENTS}},atomClose:{description:"Event emitted when the tooltip is closed.",table:{category:t.EVENTS}}}},a={element:"atomium-element",placement:"top",text:"Tooltip",action:"hover",open:!1},P={title:"Components/Tooltip",...E},i=(e,T="Hover")=>({components:{AtomTooltip:b,AtomButton:v},setup(){return{args:e}},template:`
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
  `}),o={render:e=>i(e),args:{...a,element:"hover"}},n={render:e=>i(e,"Click"),args:{...a,element:"click",placement:"top",action:"click"}},r={render:e=>i(e,"Opened"),args:{...a,element:"opened",placement:"left",action:"click",open:!0}};var l,s,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => createTooltip(args),
  args: {
    ...TooltipComponentArgs,
    element: 'hover'
  }
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var p,m,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Click'),
  args: {
    ...TooltipComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click'
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,g,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Opened'),
  args: {
    ...TooltipComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const R=["Hover","Click","Opened"];export{n as Click,o as Hover,r as Opened,R as __namedExportsOrder,P as default};

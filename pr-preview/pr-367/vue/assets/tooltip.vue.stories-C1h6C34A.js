import{x as f,l as b}from"./index-CgrS_DD9.js";import{C as t}from"./table-D060eKuu.js";import{w as E}from"./decorator-DZmxGtIB.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-DtyUQs8y.js";import"../sb-preview/runtime.js";import"./preview-errors-B42RpLod.js";import"./index-DrFu-skq.js";const y={parameters:{actions:{handles:["atomOpen","atomClose"]},decorators:[E],docs:{description:{component:"Tooltip is a small pop-up box that appears when a user moves a mouse over an element"}},layout:"centered"},argTypes:{placement:{control:"select",defaultValue:{summary:"top"},options:["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","left"],description:"Determines placement for tooltip",table:{category:t.PROPERTIES}},action:{control:"select",defaultValue:{summary:"hover"},options:["hover","click"],description:"Determines the trigger action for the tooltip: `hover` or `click`.",table:{category:t.PROPERTIES}},element:{control:"text",description:"Specifies the element responsible for opening/closing the tooltip.",table:{category:t.PROPERTIES}},open:{control:"boolean",description:"Controls whether the tooltip is open or closed.",table:{category:t.PROPERTIES}},text:{control:"text",description:"Determines a text for tooltip.",table:{category:t.PROPERTIES}},atomOpen:{description:"Event emitted when hover element, but for mobile when click in element.",table:{category:t.EVENTS}},atomClose:{description:"Event emitted when the tooltip is closed.",table:{category:t.EVENTS}}}},a={element:"atomium-element",placement:"top",text:"Tooltip",action:"hover",open:!1},R={title:"Components/Tooltip",...y},l=(e,h="Hover")=>({components:{AtomTooltip:f,AtomButton:b},setup(){return{args:e}},template:`
   <AtomButton
      fill='solid'
      size='large'
      id="${e.element}"
      aria-describedby='atom-tooltip'
    >
      ${h}
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
  `}),o={render:e=>l(e),args:{...a}},n={render:e=>l(e,"Click"),args:{...a,element:"elementId",placement:"top",action:"click"}},r={render:e=>l(e,"Opened"),args:{...a,element:"elementId",placement:"left",action:"click",open:!0}};var i,s,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => createTooltip(args),
  args: {
    ...TooltipComponentArgs
  }
}`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Click'),
  args: {
    ...TooltipComponentArgs,
    element: 'elementId',
    placement: 'top',
    action: 'click'
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,g,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => createTooltip(args, 'Opened'),
  args: {
    ...TooltipComponentArgs,
    element: 'elementId',
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const I=["Default","Click","Opened"];export{n as Click,o as Default,r as Opened,I as __namedExportsOrder,R as default};

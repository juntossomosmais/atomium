import{z as h,v as P}from"./index-0vaxJ40l.js";import{C as e}from"./table-D060eKuu.js";import{w as f}from"./decorator-DFROgT0E.js";import"./vue.esm-bundler-UQm0beuB.js";import"./iframe-BBUta1zs.js";import"./v4-CtRu48qb.js";const E={parameters:{actions:{handles:["atomOpen","atomClose"]},decorators:[f],docs:{description:{component:"Popover is a component that provides more information to the user and allows them to perform quick actions within the context of the problem."}},layout:"centered"},argTypes:{placement:{control:"select",defaultValue:{summary:"top"},options:["top","top-start","top-end","bottom","bottom-start","bottom-end","right","left"],description:"Determines placement for popover",table:{category:e.PROPERTIES}},action:{control:"select",defaultValue:{summary:"hover"},options:["hover","click"],description:"Determines the trigger action for the popover: `hover` or `click`.",table:{category:e.PROPERTIES}},element:{control:"text",description:"Specifies the element responsible for opening/closing the popover.",table:{category:e.PROPERTIES}},open:{control:"boolean",description:"Controls whether the popover is open or closed.",table:{category:e.PROPERTIES}},label:{control:"text",description:"Determines a title for popover.",table:{category:e.PROPERTIES}},text:{control:"text",description:"Determines a text for popover.",table:{category:e.PROPERTIES}},actionText:{control:"text",description:"Determines a text for action button.",table:{category:e.PROPERTIES}},buttonAction:{description:"Event emitted when the action button is clicked. Action needs to be click to show the button.",table:{category:e.EVENTS}},atomOpen:{description:"Event emitted when hover element, but for mobile when click in element.",table:{category:e.EVENTS}},atomClose:{description:"Event emitted when the popover is closed.",table:{category:e.EVENTS}}}},a={element:"atomium-element",placement:"top",text:"Supporting line text lorem ipsum dolor sit amet, consectetur",action:"hover",label:"Title",actionText:"Action Button",open:!1},C={title:"Components/Popover",...E},c=(t,b="Hover")=>({components:{AtomButton:P,AtomPopover:h},setup(){return{args:t,buttonText:b}},template:`
    <AtomButton
      fill="solid"
      size="large"
      :id="buttonText"
      aria-describedby="atom-popover"
    >
      {{ buttonText }}
    </AtomButton>

    <AtomPopover
      id="atom-popover"
      :placement="args.placement"
      :element="buttonText"
      :label="args.label"
      :action="args.action"
      :actionText="args.actionText"
      :open="args.open"
    >
      {{ args.text }}
    </AtomPopover>
  `}),o={render:t=>c(t,"Hover"),args:{...a,element:"hover",placement:"top",open:!1}},r={render:t=>c(t,"Click"),args:{...a,element:"click",placement:"top",action:"click",open:!1}},n={render:t=>c(t,"Opened"),args:{...a,element:"opened",placement:"left",action:"click",open:!0}};var s,p,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Hover'),
  args: {
    ...PopoverComponentArgs,
    element: 'hover',
    placement: 'top',
    open: false
  }
}`,...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var l,m,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Click'),
  args: {
    ...PopoverComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click',
    open: false
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,v,u;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Opened'),
  args: {
    ...PopoverComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...(u=(v=n.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};const O=["Hover","Click","Opened"];export{r as Click,o as Hover,n as Opened,O as __namedExportsOrder,C as default};

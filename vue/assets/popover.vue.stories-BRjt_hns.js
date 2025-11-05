import{E as p,z as i}from"./index-D9gi79PD.js";import{C as e}from"./table-D060eKuu.js";import{w as l}from"./decorator-DdMupD64.js";import"./vue.esm-bundler-X36X5nj_.js";import"./iframe-DdQc9Zgb.js";import"./v4-CtRu48qb.js";const m={parameters:{actions:{handles:["atomOpen","atomClose"]},decorators:[l],docs:{description:{component:"Popover is a component that provides more information to the user and allows them to perform quick actions within the context of the problem."}},layout:"centered"},argTypes:{placement:{control:"select",defaultValue:{summary:"top"},options:["top","top-start","top-end","bottom","bottom-start","bottom-end","right","left"],description:"Determines placement for popover",table:{category:e.PROPERTIES}},action:{control:"select",defaultValue:{summary:"hover"},options:["hover","click"],description:"Determines the trigger action for the popover: `hover` or `click`.",table:{category:e.PROPERTIES}},element:{control:"text",description:"Specifies the element responsible for opening/closing the popover.",table:{category:e.PROPERTIES}},open:{control:"boolean",description:"Controls whether the popover is open or closed.",table:{category:e.PROPERTIES}},label:{control:"text",description:"Determines a title for popover.",table:{category:e.PROPERTIES}},text:{control:"text",description:"Determines a text for popover.",table:{category:e.PROPERTIES}},actionText:{control:"text",description:"Determines a text for action button.",table:{category:e.PROPERTIES}},buttonAction:{description:"Event emitted when the action button is clicked. Action needs to be click to show the button.",table:{category:e.EVENTS}},atomOpen:{description:"Event emitted when hover element, but for mobile when click in element.",table:{category:e.EVENTS}},atomClose:{description:"Event emitted when the popover is closed.",table:{category:e.EVENTS}}}},a={element:"atomium-element",placement:"top",text:"Supporting line text lorem ipsum dolor sit amet, consectetur",action:"hover",label:"Title",actionText:"Action Button",open:!1},P={title:"Components/Popover",...m},c=(t,s="Hover")=>({components:{AtomButton:i,AtomPopover:p},setup(){return{args:t,buttonText:s}},template:`
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
  `}),o={render:t=>c(t,"Hover"),args:{...a,element:"hover",placement:"top",open:!1}},r={render:t=>c(t,"Click"),args:{...a,element:"click",placement:"top",action:"click",open:!1}},n={render:t=>c(t,"Opened"),args:{...a,element:"opened",placement:"left",action:"click",open:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Hover'),
  args: {
    ...PopoverComponentArgs,
    element: 'hover',
    placement: 'top',
    open: false
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Click'),
  args: {
    ...PopoverComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click',
    open: false
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Opened'),
  args: {
    ...PopoverComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...n.parameters?.docs?.source}}};const f=["Hover","Click","Opened"];export{r as Click,o as Hover,n as Opened,f as __namedExportsOrder,P as default};

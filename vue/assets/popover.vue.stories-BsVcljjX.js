import{R as e,x as t}from"./iframe-DHKEqBzE.js";import{t as n}from"./table-DZkiv1k4.js";import{t as r}from"./decorator-tF45y5qF.js";var i={parameters:{actions:{handles:[`atomOpen`,`atomClose`]},decorators:[r],docs:{description:{component:`Popover is a component that provides more information to the user and allows them to perform quick actions within the context of the problem.`}},layout:`centered`},argTypes:{placement:{control:`select`,defaultValue:{summary:`top`},options:[`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`right`,`left`],description:`Determines placement for popover`,table:{category:n.PROPERTIES}},action:{control:`select`,defaultValue:{summary:`hover`},options:[`hover`,`click`],description:"Determines the trigger action for the popover: `hover` or `click`.",table:{category:n.PROPERTIES}},element:{control:`text`,description:`Specifies the element responsible for opening/closing the popover.`,table:{category:n.PROPERTIES}},open:{control:`boolean`,description:`Controls whether the popover is open or closed.`,table:{category:n.PROPERTIES}},label:{control:`text`,description:`Determines a title for popover.`,table:{category:n.PROPERTIES}},text:{control:`text`,description:`Determines a text for popover.`,table:{category:n.PROPERTIES}},actionText:{control:`text`,description:`Determines a text for action button.`,table:{category:n.PROPERTIES}},buttonAction:{description:`Event emitted when the action button is clicked. Action needs to be click to show the button.`,table:{category:n.EVENTS}},atomOpen:{description:`Event emitted when hover element, but for mobile when click in element.`,table:{category:n.EVENTS}},atomClose:{description:`Event emitted when the popover is closed.`,table:{category:n.EVENTS}}}},a={element:`atomium-element`,placement:`top`,text:`Supporting line text lorem ipsum dolor sit amet, consectetur`,action:`hover`,label:`Title`,actionText:`Action Button`,open:!1},o={title:`Components/Popover`,...i},s=(n,r=`Hover`)=>({components:{AtomButton:t,AtomPopover:e},setup(){return{args:n,buttonText:r}},template:`
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
  `}),c={render:e=>s(e,`Hover`),args:{...a,element:`hover`,placement:`top`,open:!1}},l={render:e=>s(e,`Click`),args:{...a,element:`click`,placement:`top`,action:`click`,open:!1}},u={render:e=>s(e,`Opened`),args:{...a,element:`opened`,placement:`left`,action:`click`,open:!0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Hover'),
  args: {
    ...PopoverComponentArgs,
    element: 'hover',
    placement: 'top',
    open: false
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Click'),
  args: {
    ...PopoverComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click',
    open: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Opened'),
  args: {
    ...PopoverComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...u.parameters?.docs?.source}}};var d=[`Hover`,`Click`,`Opened`];export{l as Click,c as Hover,u as Opened,d as __namedExportsOrder,o as default};
import{i as e}from"./preload-helper-xPQekRTU.js";import{B as t,C as n,t as r}from"./iframe-Bh0p7hu1.js";import{n as i,t as a}from"./table-CVkdcsHV.js";import{n as o,t as s}from"./decorator-CbEWp_u4.js";var c,l,u=e((()=>{i(),s(),c={parameters:{actions:{handles:[`atomOpen`,`atomClose`]},decorators:[o],docs:{description:{component:`Popover is a component that provides more information to the user and allows them to perform quick actions within the context of the problem.`}},layout:`centered`},argTypes:{placement:{control:`select`,defaultValue:{summary:`top`},options:[`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`right`,`left`],description:`Determines placement for popover`,table:{category:a.PROPERTIES}},action:{control:`select`,defaultValue:{summary:`hover`},options:[`hover`,`click`],description:"Determines the trigger action for the popover: `hover` or `click`.",table:{category:a.PROPERTIES}},element:{control:`text`,description:`Specifies the element responsible for opening/closing the popover.`,table:{category:a.PROPERTIES}},open:{control:`boolean`,description:`Controls whether the popover is open or closed.`,table:{category:a.PROPERTIES}},label:{control:`text`,description:`Determines a title for popover.`,table:{category:a.PROPERTIES}},text:{control:`text`,description:`Determines a text for popover.`,table:{category:a.PROPERTIES}},actionText:{control:`text`,description:`Determines a text for action button.`,table:{category:a.PROPERTIES}},buttonAction:{description:`Event emitted when the action button is clicked. Action needs to be click to show the button.`,table:{category:a.EVENTS}},atomOpen:{description:`Event emitted when hover element, but for mobile when click in element.`,table:{category:a.EVENTS}},atomClose:{description:`Event emitted when the popover is closed.`,table:{category:a.EVENTS}}}},l={element:`atomium-element`,placement:`top`,text:`Supporting line text lorem ipsum dolor sit amet, consectetur`,action:`hover`,label:`Title`,actionText:`Action Button`,open:!1}})),d,f,p,m,h,g;e((()=>{r(),u(),d={title:`Components/Popover`,...c},f=(e,r=`Hover`)=>({components:{AtomButton:n,AtomPopover:t},setup(){return{args:e,buttonText:r}},template:`
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
  `}),p={render:e=>f(e,`Hover`),args:{...l,element:`hover`,placement:`top`,open:!1}},m={render:e=>f(e,`Click`),args:{...l,element:`click`,placement:`top`,action:`click`,open:!1}},h={render:e=>f(e,`Opened`),args:{...l,element:`opened`,placement:`left`,action:`click`,open:!0}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Hover'),
  args: {
    ...PopoverComponentArgs,
    element: 'hover',
    placement: 'top',
    open: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Click'),
  args: {
    ...PopoverComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click',
    open: false
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Opened'),
  args: {
    ...PopoverComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...h.parameters?.docs?.source}}},g=[`Hover`,`Click`,`Opened`]}))();export{m as Click,p as Hover,h as Opened,g as __namedExportsOrder,d as default};
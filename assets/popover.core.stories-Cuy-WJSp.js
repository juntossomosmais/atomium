import{H as e}from"./storybook-CfikGCXO.js";import{t}from"./table-CBo0-gV-.js";import{t as n}from"./decorator-DapEhatt.js";var r={parameters:{actions:{handles:[`atomOpen`,`atomClose`]},decorators:[n],docs:{description:{component:`Popover is a component that provides more information to the user and allows them to perform quick actions within the context of the problem.`}},layout:`centered`},argTypes:{placement:{control:`select`,defaultValue:{summary:`top`},options:[`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`right`,`left`],description:`Determines placement for popover`,table:{category:t.PROPERTIES}},action:{control:`select`,defaultValue:{summary:`hover`},options:[`hover`,`click`],description:"Determines the trigger action for the popover: `hover` or `click`.",table:{category:t.PROPERTIES}},element:{control:`text`,description:`Specifies the element responsible for opening/closing the popover.`,table:{category:t.PROPERTIES}},open:{control:`boolean`,description:`Controls whether the popover is open or closed.`,table:{category:t.PROPERTIES}},label:{control:`text`,description:`Determines a title for popover.`,table:{category:t.PROPERTIES}},text:{control:`text`,description:`Determines a text for popover.`,table:{category:t.PROPERTIES}},actionText:{control:`text`,description:`Determines a text for action button.`,table:{category:t.PROPERTIES}},buttonAction:{description:`Event emitted when the action button is clicked. Action needs to be click to show the button.`,table:{category:t.EVENTS}},atomOpen:{description:`Event emitted when hover element, but for mobile when click in element.`,table:{category:t.EVENTS}},atomClose:{description:`Event emitted when the popover is closed.`,table:{category:t.EVENTS}}}},i={element:`atomium-element`,placement:`top`,text:`Supporting line text lorem ipsum dolor sit amet, consectetur`,action:`hover`,label:`Title`,actionText:`Action Button`,open:!1},a={title:`Components/Popover`,...r},o=(t,n=`hover`)=>e`
    <div style="height: 300px; display: flex; align-items: center;">
      <atom-button
        fill="solid"
        size="large"
        id="${n}"
        aria-describedby="atom-popover"
      >
        ${n}
      </atom-button>
      <atom-popover
        id="atom-popover"
        placement="${t.placement}"
        element="${n}"
        label="${t.label}"
        action="${t.action}"
        action-text="${t.actionText}"
        open="${t.open}"
      >
        ${t.text}
      </atom-popover>
    </div>
  `,s={render:e=>o(e,`Hover`),args:{...i,placement:`top`,open:!1}},c={render:e=>o(e,`Click`),args:{...i,placement:`right`,action:`click`,open:!1}},l={render:e=>o(e,`Opened`),args:{...i,placement:`left`,action:`click`,open:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Hover'),
  args: {
    ...PopoverComponentArgs,
    placement: 'top',
    open: false
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Click'),
  args: {
    ...PopoverComponentArgs,
    placement: 'right',
    action: 'click',
    open: false
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Opened'),
  args: {
    ...PopoverComponentArgs,
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...l.parameters?.docs?.source}}};var u=[`Hover`,`Click`,`Opened`];export{c as Click,s as Hover,l as Opened,u as __namedExportsOrder,a as default};
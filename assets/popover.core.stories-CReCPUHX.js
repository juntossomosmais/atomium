import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{at as t,st as n}from"./storybook-Dn2APg4h.js";import{n as r,t as i}from"./table-DMN4TomJ.js";import{n as a,t as o}from"./decorator-DOC64JaB.js";var s,c,l=e((()=>{r(),o(),s={parameters:{actions:{handles:[`atomOpen`,`atomClose`]},decorators:[a],docs:{description:{component:`Popover is a component that provides more information to the user and allows them to perform quick actions within the context of the problem.`}},layout:`centered`},argTypes:{placement:{control:`select`,defaultValue:{summary:`top`},options:[`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`right`,`left`],description:`Determines placement for popover`,table:{category:i.PROPERTIES}},action:{control:`select`,defaultValue:{summary:`hover`},options:[`hover`,`click`],description:"Determines the trigger action for the popover: `hover` or `click`.",table:{category:i.PROPERTIES}},element:{control:`text`,description:`Specifies the element responsible for opening/closing the popover.`,table:{category:i.PROPERTIES}},open:{control:`boolean`,description:`Controls whether the popover is open or closed.`,table:{category:i.PROPERTIES}},label:{control:`text`,description:`Determines a title for popover.`,table:{category:i.PROPERTIES}},text:{control:`text`,description:`Determines a text for popover.`,table:{category:i.PROPERTIES}},actionText:{control:`text`,description:`Determines a text for action button.`,table:{category:i.PROPERTIES}},buttonAction:{description:`Event emitted when the action button is clicked. Action needs to be click to show the button.`,table:{category:i.EVENTS}},atomOpen:{description:`Event emitted when hover element, but for mobile when click in element.`,table:{category:i.EVENTS}},atomClose:{description:`Event emitted when the popover is closed.`,table:{category:i.EVENTS}}}},c={element:`atomium-element`,placement:`top`,text:`Supporting line text lorem ipsum dolor sit amet, consectetur`,action:`hover`,label:`Title`,actionText:`Action Button`,open:!1}})),u,d,f,p,m,h;e((()=>{t(),l(),u={title:`Components/Popover`,...s},d=(e,t=`hover`)=>n`
    <div style="height: 300px; display: flex; align-items: center;">
      <atom-button
        fill="solid"
        size="large"
        id="${t}"
        aria-describedby="atom-popover"
      >
        ${t}
      </atom-button>
      <atom-popover
        id="atom-popover"
        placement="${e.placement}"
        element="${t}"
        label="${e.label}"
        action="${e.action}"
        action-text="${e.actionText}"
        open="${e.open}"
      >
        ${e.text}
      </atom-popover>
    </div>
  `,f={render:e=>d(e,`Hover`),args:{...c,placement:`top`,open:!1}},p={render:e=>d(e,`Click`),args:{...c,placement:`right`,action:`click`,open:!1}},m={render:e=>d(e,`Opened`),args:{...c,placement:`left`,action:`click`,open:!0}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Hover'),
  args: {
    ...PopoverComponentArgs,
    placement: 'top',
    open: false
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Click'),
  args: {
    ...PopoverComponentArgs,
    placement: 'right',
    action: 'click',
    open: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createPopover(args, 'Opened'),
  args: {
    ...PopoverComponentArgs,
    placement: 'left',
    action: 'click',
    open: true
  }
}`,...m.parameters?.docs?.source}}},h=[`Hover`,`Click`,`Opened`]}))();export{p as Click,f as Hover,m as Opened,h as __namedExportsOrder,u as default};
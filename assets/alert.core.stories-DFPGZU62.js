import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{at as t,st as n}from"./storybook-AbPZ34TI.js";import{n as r,t as i}from"./table-DMN4TomJ.js";import{n as a,t as o}from"./decorator-Cz27MBtZ.js";var s,c,l=e((()=>{r(),o(),s={decorators:[a],parameters:{actions:{handles:[`atomClose`,`atomAction`,`atom-close`,`atom-action`]},docs:{description:{component:`Alerts are used to provide feedback to the user about the status of a task or process. Alerts can be used to notify the user about information or errors, success or warnings, or to confirm an action.`}}},argTypes:{messageTitle:{control:`text`,description:`The title of the alert, this property accepts HTML strings.`,table:{category:i.PROPERTIES}},messageText:{control:`text`,description:`The text message of the alert, this property accepts HTML strings.`,table:{category:i.PROPERTIES}},actionText:{control:`text`,description:`The text of the action button.`,table:{category:i.PROPERTIES}},color:{control:`select`,description:`The color to use from your application palette.`,options:[`info`,`success`,`warning`,`danger`,`neutral`],defaultValue:{summary:`neutral`},table:{category:i.PROPERTIES}},icon:{control:`text`,description:`The name of the icon to use.`,table:{category:i.PROPERTIES}},close:{control:`boolean`,description:"If `true`, the alert can be closed.",defaultValue:{summary:!1},table:{category:i.PROPERTIES}},atomAction:{description:`Event emitted when the action button is clicked.`,table:{category:i.EVENTS}},atomClose:{description:`Event emitted when the alert is closed.`,table:{category:i.EVENTS}}}},c={color:`neutral`,close:!1,messageTitle:`Title example of alert`,messageText:`Nice message example`,actionText:`Action example`}})),u,d,f,p,m,h,g,_,v;e((()=>{t(),l(),u={title:`Components/Alert`,...s},d=e=>n`
    <atom-alert
      message-title=${e.messageTitle}
      message-text=${e.messageText}
      icon=${e.icon}
      color=${e.color}
      close=${e.close}
      action-text=${e.actionText}
    >
    </atom-alert>
  `,f={render:e=>d(e),args:{...c}},p={render:e=>d(e),args:{...c,color:`info`,icon:`account-multiple`}},m={render:e=>d(e),args:{...c,color:`success`,icon:`heart`}},h={render:e=>d(e),args:{...c,color:`warning`,icon:`alert`}},g={render:e=>d(e),args:{...c,color:`danger`,icon:`account-multiple`}},_={render:e=>d(e),args:{...c,close:!0}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'info',
    icon: 'account-multiple'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'success',
    icon: 'heart'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'warning',
    icon: 'alert'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'danger',
    icon: 'account-multiple'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    close: true
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Info`,`Success`,`Warning`,`Danger`,`Close`]}))();export{_ as Close,g as Danger,f as Default,p as Info,m as Success,h as Warning,v as __namedExportsOrder,u as default};
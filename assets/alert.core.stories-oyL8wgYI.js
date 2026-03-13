import{P as e}from"./iframe-D71TlG5e.js";import{t}from"./table-7jAh1EVy.js";import{t as n}from"./decorator-B7evQOcP.js";var r={decorators:[n],parameters:{actions:{handles:[`atomClose`,`atomAction`,`atom-close`,`atom-action`]},docs:{description:{component:`Alerts are used to provide feedback to the user about the status of a task or process. Alerts can be used to notify the user about information or errors, success or warnings, or to confirm an action.`}}},argTypes:{messageTitle:{control:`text`,description:`The title of the alert, this property accepts HTML strings.`,table:{category:t.PROPERTIES}},messageText:{control:`text`,description:`The text message of the alert, this property accepts HTML strings.`,table:{category:t.PROPERTIES}},actionText:{control:`text`,description:`The text of the action button.`,table:{category:t.PROPERTIES}},color:{control:`select`,description:`The color to use from your application palette.`,options:[`info`,`success`,`warning`,`danger`,`neutral`],defaultValue:{summary:`neutral`},table:{category:t.PROPERTIES}},icon:{control:`text`,description:`The name of the icon to use.`,table:{category:t.PROPERTIES}},close:{control:`boolean`,description:"If `true`, the alert can be closed.",defaultValue:{summary:!1},table:{category:t.PROPERTIES}},atomAction:{description:`Event emitted when the action button is clicked.`,table:{category:t.EVENTS}},atomClose:{description:`Event emitted when the alert is closed.`,table:{category:t.EVENTS}}}},i={color:`neutral`,close:!1,messageTitle:`Title example of alert`,messageText:`Nice message example`,actionText:`Action example`},a={title:`Components/Alert`,...r},o=t=>e`
    <atom-alert
      message-title=${t.messageTitle}
      message-text=${t.messageText}
      icon=${t.icon}
      color=${t.color}
      close=${t.close}
      action-text=${t.actionText}
    >
    </atom-alert>
  `,s={render:e=>o(e),args:{...i}},c={render:e=>o(e),args:{...i,color:`info`,icon:`account-multiple`}},l={render:e=>o(e),args:{...i,color:`success`,icon:`heart`}},u={render:e=>o(e),args:{...i,color:`warning`,icon:`alert`}},d={render:e=>o(e),args:{...i,color:`danger`,icon:`account-multiple`}},f={render:e=>o(e),args:{...i,close:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'info',
    icon: 'account-multiple'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'success',
    icon: 'heart'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'warning',
    icon: 'alert'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'danger',
    icon: 'account-multiple'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    close: true
  }
}`,...f.parameters?.docs?.source}}};var p=[`Default`,`Info`,`Success`,`Warning`,`Danger`,`Close`];export{f as Close,d as Danger,s as Default,c as Info,l as Success,u as Warning,p as __namedExportsOrder,a as default};
import"./chunk-DseTPa7n.js";import{t as e}from"./react-BeYaFARg.js";import{t}from"./jsx-runtime-DsGsusFP.js";import"./react-dom-BaYUCVRd.js";import"./index--pUmmU2V-CE9k8Uy1.js";import{t as n}from"./esm-BiOou3EM.js";import{t as r}from"./table-jqz5s6A8.js";import{t as i}from"./decorator-Ce3Kjdma.js";e();var a={decorators:[i],parameters:{actions:{handles:[`atomClose`,`atomAction`,`atom-close`,`atom-action`]},docs:{description:{component:`Alerts are used to provide feedback to the user about the status of a task or process. Alerts can be used to notify the user about information or errors, success or warnings, or to confirm an action.`}}},argTypes:{messageTitle:{control:`text`,description:`The title of the alert, this property accepts HTML strings.`,table:{category:r.PROPERTIES}},messageText:{control:`text`,description:`The text message of the alert, this property accepts HTML strings.`,table:{category:r.PROPERTIES}},actionText:{control:`text`,description:`The text of the action button.`,table:{category:r.PROPERTIES}},color:{control:`select`,description:`The color to use from your application palette.`,options:[`info`,`success`,`warning`,`danger`,`neutral`],defaultValue:{summary:`neutral`},table:{category:r.PROPERTIES}},icon:{control:`text`,description:`The name of the icon to use.`,table:{category:r.PROPERTIES}},close:{control:`boolean`,description:"If `true`, the alert can be closed.",defaultValue:{summary:!1},table:{category:r.PROPERTIES}},atomAction:{description:`Event emitted when the action button is clicked.`,table:{category:r.EVENTS}},atomClose:{description:`Event emitted when the alert is closed.`,table:{category:r.EVENTS}}}},o={color:`neutral`,close:!1,messageTitle:`Title example of alert`,messageText:`Nice message example`,actionText:`Action example`},s=t(),c={title:`Components/Alert`,...a},l=e=>(0,s.jsx)(`div`,{children:(0,s.jsx)(n,{"message-title":e.messageTitle,"message-text":e.messageText,"action-text":e.actionText,icon:e.icon,color:e.color,close:e.close})}),u={render:e=>l(e),args:{...o}},d={render:e=>l(e),args:{...o,color:`info`,icon:`account-multiple`}},f={render:e=>l(e),args:{...o,color:`success`,icon:`heart`}},p={render:e=>l(e),args:{...o,color:`warning`,icon:`alert`}},m={render:e=>l(e),args:{...o,color:`danger`,icon:`account-multiple`}},h={render:e=>l(e),args:{...o,close:!0}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'info',
    icon: 'account-multiple'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'success',
    icon: 'heart'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'warning',
    icon: 'alert'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'danger',
    icon: 'account-multiple'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    close: true
  }
}`,...h.parameters?.docs?.source}}};var g=[`Default`,`Info`,`Success`,`Warning`,`Danger`,`Close`];export{h as Close,m as Danger,u as Default,d as Info,f as Success,p as Warning,g as __namedExportsOrder,c as default};
import{A as m}from"./index-Dcgwn9tW.js";import{C as r}from"./table-D060eKuu.js";import{w as p}from"./decorator-CgMHT-je.js";import"./iframe-Ao1sNE2_.js";import"./preload-helper-PPVm8Dsz.js";const g={decorators:[p],parameters:{actions:{handles:["atomClose","atomAction","atom-close","atom-action"]},docs:{description:{component:"Alerts are used to provide feedback to the user about the status of a task or process. Alerts can be used to notify the user about information or errors, success or warnings, or to confirm an action."}}},argTypes:{messageTitle:{control:"text",description:"The title of the alert, this property accepts HTML strings.",table:{category:r.PROPERTIES}},messageText:{control:"text",description:"The text message of the alert, this property accepts HTML strings.",table:{category:r.PROPERTIES}},actionText:{control:"text",description:"The text of the action button.",table:{category:r.PROPERTIES}},color:{control:"select",description:"The color to use from your application palette.",options:["info","success","warning","danger","neutral"],defaultValue:{summary:"neutral"},table:{category:r.PROPERTIES}},icon:{control:"text",description:"The name of the icon to use.",table:{category:r.PROPERTIES}},close:{control:"boolean",description:"If `true`, the alert can be closed.",defaultValue:{summary:!1},table:{category:r.PROPERTIES}},atomAction:{description:"Event emitted when the action button is clicked.",table:{category:r.EVENTS}},atomClose:{description:"Event emitted when the alert is closed.",table:{category:r.EVENTS}}}},t={color:"neutral",close:!1,messageTitle:"Title example of alert",messageText:"Nice message example",actionText:"Action example"},x={title:"Components/Alert",...g},o=e=>h("div",null,h(m,{"message-title":e.messageTitle,"message-text":e.messageText,"action-text":e.actionText,icon:e.icon,color:e.color,close:e.close})),s={render:e=>o(e),args:{...t}},a={render:e=>o(e),args:{...t,color:"info",icon:"account-multiple"}},n={render:e=>o(e),args:{...t,color:"success",icon:"heart"}},c={render:e=>o(e),args:{...t,color:"warning",icon:"alert"}},l={render:e=>o(e),args:{...t,color:"danger",icon:"account-multiple"}},i={render:e=>o(e),args:{...t,close:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'info',
    icon: 'account-multiple'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'success',
    icon: 'heart'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'warning',
    icon: 'alert'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'danger',
    icon: 'account-multiple'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    close: true
  }
}`,...i.parameters?.docs?.source}}};const E=["Default","Info","Success","Warning","Danger","Close"];export{i as Close,l as Danger,s as Default,a as Info,n as Success,c as Warning,E as __namedExportsOrder,x as default};

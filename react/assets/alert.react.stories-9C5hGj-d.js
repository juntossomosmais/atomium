import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./react-H9AhGIcj.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{nt as r,t as i}from"./dist-DdZohfOh.js";import{n as a,t as o}from"./table-CVkdcsHV.js";import{n as s,t as c}from"./decorator-BaTbPrS6.js";var l,u,d=e((()=>{a(),c(),l={decorators:[s],parameters:{actions:{handles:[`atomClose`,`atomAction`,`atom-close`,`atom-action`]},docs:{description:{component:`Alerts are used to provide feedback to the user about the status of a task or process. Alerts can be used to notify the user about information or errors, success or warnings, or to confirm an action.`}}},argTypes:{messageTitle:{control:`text`,description:`The title of the alert, this property accepts HTML strings.`,table:{category:o.PROPERTIES}},messageText:{control:`text`,description:`The text message of the alert, this property accepts HTML strings.`,table:{category:o.PROPERTIES}},actionText:{control:`text`,description:`The text of the action button.`,table:{category:o.PROPERTIES}},color:{control:`select`,description:`The color to use from your application palette.`,options:[`info`,`success`,`warning`,`danger`,`neutral`],defaultValue:{summary:`neutral`},table:{category:o.PROPERTIES}},icon:{control:`text`,description:`The name of the icon to use.`,table:{category:o.PROPERTIES}},close:{control:`boolean`,description:"If `true`, the alert can be closed.",defaultValue:{summary:!1},table:{category:o.PROPERTIES}},atomAction:{description:`Event emitted when the action button is clicked.`,table:{category:o.EVENTS}},atomClose:{description:`Event emitted when the alert is closed.`,table:{category:o.EVENTS}}}},u={color:`neutral`,close:!1,messageTitle:`Title example of alert`,messageText:`Nice message example`,actionText:`Action example`}})),f,p,m,h,g,_,v,y,b,x;e((()=>{t(),i(),d(),f=n(),p={title:`Components/Alert`,...l},m=e=>(0,f.jsx)(`div`,{children:(0,f.jsx)(r,{"message-title":e.messageTitle,"message-text":e.messageText,"action-text":e.actionText,icon:e.icon,color:e.color,close:e.close})}),h={render:e=>m(e),args:{...u}},g={render:e=>m(e),args:{...u,color:`info`,icon:`account-multiple`}},_={render:e=>m(e),args:{...u,color:`success`,icon:`heart`}},v={render:e=>m(e),args:{...u,color:`warning`,icon:`alert`}},y={render:e=>m(e),args:{...u,color:`danger`,icon:`account-multiple`}},b={render:e=>m(e),args:{...u,close:!0}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'info',
    icon: 'account-multiple'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'success',
    icon: 'heart'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'warning',
    icon: 'alert'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'danger',
    icon: 'account-multiple'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    close: true
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Info`,`Success`,`Warning`,`Danger`,`Close`]}))();export{b as Close,y as Danger,h as Default,g as Info,_ as Success,v as Warning,x as __namedExportsOrder,p as default};
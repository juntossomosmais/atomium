import{A as w}from"./index-BijlpmNX.js";import{C as r}from"./table-D060eKuu.js";import{w as O}from"./decorator-DFROgT0E.js";import"./vue.esm-bundler-UQm0beuB.js";import"./iframe-Cg1UaQK0.js";import"./v4-CtRu48qb.js";const $={decorators:[O],parameters:{actions:{handles:["atomClose","atomAction","atom-close","atom-action"]},docs:{description:{component:"Alerts are used to provide feedback to the user about the status of a task or process. Alerts can be used to notify the user about information or errors, success or warnings, or to confirm an action."}}},argTypes:{messageTitle:{control:"text",description:"The title of the alert, this property accepts HTML strings.",table:{category:r.PROPERTIES}},messageText:{control:"text",description:"The text message of the alert, this property accepts HTML strings.",table:{category:r.PROPERTIES}},actionText:{control:"text",description:"The text of the action button.",table:{category:r.PROPERTIES}},color:{control:"select",description:"The color to use from your application palette.",options:["info","success","warning","danger","neutral"],defaultValue:{summary:"neutral"},table:{category:r.PROPERTIES}},icon:{control:"text",description:"The name of the icon to use.",table:{category:r.PROPERTIES}},close:{control:"boolean",description:"If `true`, the alert can be closed.",defaultValue:{summary:!1},table:{category:r.PROPERTIES}},atomAction:{description:"Event emitted when the action button is clicked.",table:{category:r.EVENTS}},atomClose:{description:"Event emitted when the alert is closed.",table:{category:r.EVENTS}}}},t={color:"neutral",close:!1,messageTitle:"Title example of alert",messageText:"Nice message example",actionText:"Action example"},H={title:"Components/Alert",...$},o=e=>({components:{AtomAlert:w},setup(){return{args:e}},template:`
    <AtomAlert
      message-title="${e.messageTitle}"
      message-text="${e.messageText}"
      color="${e.color}"
      close="${e.close}"
      icon="${e.icon}"
      action-text="${e.actionText}"
      @atom-action="handleAction"
    />
    `,methods:{handleAction(){console.log("Action clicked")}}}),s={render:e=>o(e),args:{...t,icon:""}},a={render:e=>o(e),args:{...t,color:"info",icon:"account-multiple"}},n={render:e=>o(e),args:{...t,color:"success",icon:"heart"}},c={render:e=>o(e),args:{...t,color:"warning",icon:"alert"}},l={render:e=>o(e),args:{...t,color:"danger",icon:"account-multiple"}},i={render:e=>o(e),args:{...t,close:!0,icon:""}};var m,p,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    icon: ''
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var d,u,A;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'info',
    icon: 'account-multiple'
  }
}`,...(A=(u=a.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};var f,h,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'success',
    icon: 'heart'
  }
}`,...(T=(h=n.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var x,E,y;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'warning',
    icon: 'alert'
  }
}`,...(y=(E=c.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var S,b,C;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'danger',
    icon: 'account-multiple'
  }
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var P,R,I;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    close: true,
    icon: ''
  }
}`,...(I=(R=i.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};const L=["Default","Info","Success","Warning","Danger","Close"];export{i as Close,l as Danger,s as Default,a as Info,n as Success,c as Warning,L as __namedExportsOrder,H as default};

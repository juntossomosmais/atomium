import{A as P}from"./index-273e4037.js";import{C as r}from"./table-de46f45e.js";import{w as R}from"./decorator-e53fb076.js";import"./vue.esm-bundler-8a51a326.js";import"./iframe-85a0e6a4.js";import"../sb-preview/runtime.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const C={decorators:[R],parameters:{actions:{handles:["atomClose","atomAction","atom-close","atom-action"]},docs:{description:{component:"Alerts are used to provide feedback to the user about the status of a task or process. Alerts can be used to notify the user about information or errors, success or warnings, or to confirm an action."}}},argTypes:{messageTitle:{control:"text",description:"The title of the alert, this property accepts HTML strings.",table:{category:r.PROPERTIES}},messageText:{control:"text",description:"The text message of the alert, this property accepts HTML strings.",table:{category:r.PROPERTIES}},actionText:{control:"text",description:"The text of the action button.",table:{category:r.PROPERTIES}},color:{control:"select",description:"The color to use from your application palette.",options:["info","success","warning","danger","neutral"],defaultValue:{summary:"neutral"},table:{category:r.PROPERTIES}},icon:{control:"text",description:"The name of the icon to use.",table:{category:r.PROPERTIES}},close:{control:"boolean",description:"If `true`, the alert can be closed.",defaultValue:{summary:!1},table:{category:r.PROPERTIES}},atomAction:{description:"Event emitted when the action button is clicked.",table:{category:r.EVENTS}},atomClose:{description:"Event emitted when the alert is closed.",table:{category:r.EVENTS}}}},t={color:"neutral",close:!1,messageTitle:"Title example of alert",messageText:"Nice message example",actionText:"Action example"},k={title:"Components/Alert",...C},o=e=>({components:{AtomAlert:P},setup(){return{args:e}},template:`
    <AtomAlert
      messageTitle="${e.messageTitle}"
      messageText="${e.messageText}"
      color="${e.color}"
      icon="${e.icon}"
    />
    `}),a={render:e=>o(e),args:{...t}},s={render:e=>o(e),args:{...t,color:"info",icon:"account-multiple"}},n={render:e=>o(e),args:{...t,color:"success",icon:"heart"}},c={render:e=>o(e),args:{...t,color:"warning",icon:"alert"}},l={render:e=>o(e),args:{...t,color:"danger",icon:"account-multiple"}};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,u,d;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'info',
    icon: 'account-multiple'
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var A,f,T;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'success',
    icon: 'heart'
  }
}`,...(T=(f=n.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var h,E,x;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'warning',
    icon: 'alert'
  }
}`,...(x=(E=c.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var y,b,S;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => createAlert(args),
  args: {
    ...AlertComponentArgs,
    color: 'danger',
    icon: 'account-multiple'
  }
}`,...(S=(b=l.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const N=["Default","Info","Success","Warning","Danger"];export{l as Danger,a as Default,s as Info,n as Success,c as Warning,N as __namedExportsOrder,k as default};

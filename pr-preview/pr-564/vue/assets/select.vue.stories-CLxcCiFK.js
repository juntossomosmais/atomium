import{q as N}from"./index-DacyWqBw.js";import{C as t}from"./table-D060eKuu.js";import{w as B}from"./decorator-DZmxGtIB.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-M_6YKOTv.js";import"../sb-preview/runtime.js";import"./preview-errors-B42RpLod.js";import"./index-DrFu-skq.js";const W={parameters:{docs:{description:{component:"Wrapper of Ionic Select component. Read the [Ionic documentation](https://ionicframework.com/docs/api/select) for more information about the available properties and possibilities."}},actions:{handles:["atomChange","atomFocus","atomBlur","atomCancel","atomDismiss","atom-change","atom-focus","atom-blur","atom-cancel","atom-dismiss"]}},decorators:[B],argTypes:{label:{control:"text",description:"The label of the select",table:{category:t.PROPERTIES}},placeholder:{control:"text",description:"The placeholder of the select",table:{category:t.PROPERTIES}},multiple:{control:"boolean",defaultValue:{summary:!1},description:"If true, the user can select multiple values at once.",table:{category:t.PROPERTIES}},disabled:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the user cannot interact with the select.",table:{category:t.PROPERTIES}},readonly:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the user cannot modify the value.",table:{category:t.PROPERTIES}},icon:{control:"text",description:"The icon of the select",table:{category:t.PROPERTIES}},helperText:{control:"text",description:"The helper text of the select",table:{category:t.PROPERTIES}},value:{control:"text",description:"The value of native select",table:{category:t.PROPERTIES}},errorText:{description:"The error text of the select",table:{category:t.PROPERTIES}},fill:{control:"select",options:["outline","solid"],defaultValue:{summary:"solid"},description:"The fill type of the select",table:{category:t.PROPERTIES}},mode:{control:"select",options:["md","ios"],defaultValue:{summary:"md"},description:"The mode determines which platform styles to use.",table:{category:t.PROPERTIES}},atomChange:{action:"atomChange",description:"Emitted when the value has changed. This is the main event to listen to if you are doing any manual form validation.",table:{category:t.EVENTS}},atomFocus:{action:"atomFocus",description:"Emitted when the select has focus.",table:{category:t.EVENTS}},atomBlur:{action:"atomBlur",description:"Emitted when the select has blur.",table:{category:t.EVENTS}},atomCancel:{action:"atomCancel",description:'Emitted when the select has cancel. Only applies when the select interface is "action-sheet".',table:{category:t.EVENTS}},atomDismiss:{action:"atomDismiss",description:'Emitted when the select has dismiss. Only applies when the select interface is "action-sheet".',table:{category:t.EVENTS}}}},r={disabled:!1,readonly:!1,multiple:!1,label:"Select example",placeholder:"Select an option",mode:"md",fill:"solid",value:"",icon:"",helperText:"",errorText:""},J={title:"Components/Select",...W},V=[{id:"1",value:"Red",disabled:!1},{id:"2",value:"Green",disabled:!1},{id:"3",value:"Blue",disabled:!1},{id:"4",value:"nice_blue",disabled:!1,label:"Nice Blue"},{id:"5",value:"Disabled example",disabled:!0}],o=(e,D=V)=>({components:{AtomSelect:N},setup(){return{args:e,options:D}},template:`
    <AtomSelect
      placeholder="${e.placeholder}"
      fill="${e.fill}"
      disabled="${e.disabled}"
      readonly="${e.readonly}"
      multiple="${e.multiple}"
      label="${e.label}"
      helperText="${e.helperText}"
      errorText="${e.errorText}"
      ${e.icon?`icon="${e.icon}"`:""}
      mode="${e.mode}"
      value="${e.value}"
      :options="options"
    />
  `}),a={render:e=>o(e),args:{...r}},s={render:e=>o(e),args:{...r,disabled:!0}},l={render:e=>o(e),args:{...r,icon:"account-multiple"}},c={render:e=>o(e),args:{...r,helperText:"Example of helper text"}},n={render:e=>o(e),args:{...r,errorText:"Example of error text"}},i={render:e=>o(e),args:{...r,multiple:!0}},_=[...V,{id:"3",value:"Nice Green",disabled:!1,tag:{color:"success",label:"New "}}],d={render:e=>o(e,_),args:{...r}};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,g,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    disabled: true
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var S,b,T;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    icon: 'account-multiple'
  }
}`,...(T=(b=l.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var E,x,y;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    helperText: 'Example of helper text'
  }
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var R,P,v;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    errorText: 'Example of error text'
  }
}`,...(v=(P=n.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var I,C,O;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    multiple: true
  }
}`,...(O=(C=i.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var w,A,$;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => createSelect(args, optionWithTag),
  args: {
    ...SelectComponentArgs
  }
}`,...($=(A=d.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};const K=["Default","Disabled","SelectIcon","HelperText","ErrorText","Multiple","WithTag"];export{a as Default,s as Disabled,n as ErrorText,c as HelperText,i as Multiple,l as SelectIcon,d as WithTag,K as __namedExportsOrder,J as default};
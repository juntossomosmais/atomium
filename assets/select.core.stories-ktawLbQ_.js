import{N as h}from"./iframe-BElrKgc3.js";import{C as t}from"./table-D060eKuu.js";import{w as g}from"./decorator-BAL2BGux.js";import"./preload-helper-PPVm8Dsz.js";const f={parameters:{docs:{description:{component:"Wrapper of Ionic Select component. Read the [Ionic documentation](https://ionicframework.com/docs/api/select) for more information about the available properties and possibilities."}},actions:{handles:["atomChange","atomFocus","atomBlur","atomCancel","atomDismiss","atom-change","atom-focus","atom-blur","atom-cancel","atom-dismiss"]}},decorators:[g],argTypes:{label:{control:"text",description:"The label of the select",table:{category:t.PROPERTIES}},placeholder:{control:"text",description:"The placeholder of the select",table:{category:t.PROPERTIES}},multiple:{control:"boolean",defaultValue:{summary:!1},description:"If true, the user can select multiple values at once.",table:{category:t.PROPERTIES}},disabled:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the user cannot interact with the select.",table:{category:t.PROPERTIES}},readonly:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the user cannot modify the value.",table:{category:t.PROPERTIES}},icon:{control:"text",description:"The icon of the select",table:{category:t.PROPERTIES}},helperText:{control:"text",description:"The helper text of the select",table:{category:t.PROPERTIES}},value:{control:"text",description:"The value of native select",table:{category:t.PROPERTIES}},errorText:{description:"The error text of the select",table:{category:t.PROPERTIES}},fill:{control:"select",options:["outline","solid"],defaultValue:{summary:"solid"},description:"The fill type of the select",table:{category:t.PROPERTIES}},mode:{control:"select",options:["md","ios"],defaultValue:{summary:"md"},description:"The mode determines which platform styles to use.",table:{category:t.PROPERTIES}},atomChange:{action:"atomChange",description:"Emitted when the value has changed. This is the main event to listen to if you are doing any manual form validation.",table:{category:t.EVENTS}},atomFocus:{action:"atomFocus",description:"Emitted when the select has focus.",table:{category:t.EVENTS}},atomBlur:{action:"atomBlur",description:"Emitted when the select has blur.",table:{category:t.EVENTS}},atomCancel:{action:"atomCancel",description:'Emitted when the select has cancel. Only applies when the select interface is "action-sheet".',table:{category:t.EVENTS}},atomDismiss:{action:"atomDismiss",description:'Emitted when the select has dismiss. Only applies when the select interface is "action-sheet".',table:{category:t.EVENTS}},"--select-max-height":{description:"Add a custom max-height to the select list options.",defaultValue:{summary:"250px"},table:{category:t.CSS_CUSTOM_PROPERTIES}}}},a={disabled:!1,readonly:!1,multiple:!1,label:"Select example",placeholder:"Select an option",mode:"md",fill:"solid",value:"",icon:"",helperText:"",errorText:""};var p=Object.freeze,S=Object.defineProperty,E=(e,m)=>p(S(e,"raw",{value:p(e.slice())})),u;const P={title:"Components/Select",...f},b=[{id:"1",value:"Red",disabled:!1},{id:"2",value:"Green",disabled:!1},{id:"3",value:"Blue",disabled:!1},{id:"4",value:"nice_blue",disabled:!1,label:"Nice Blue"},{id:"5",value:"Disabled example",disabled:!0}],r=(e,m=b)=>h(u||(u=E([`
    <atom-select
      placeholder=`,`
      fill=`,`
      disabled=`,`
      readonly=`,`
      multiple=`,`
      label=`,`
      value=`,`
      helper-text=`,`
      error-text=`,`
      icon=`,`
      mode=`,`
    />

    <script>
      ;(function () {
        const atomSelectElements = document.querySelectorAll('atom-select')
        const lastElement = atomSelectElements[atomSelectElements.length - 1]

        lastElement.options = `,`

        lastElement.addEventListener('atomChange', (event) => {
          console.log('atomChange', event)
        })
      })()
    <\/script>
  `])),e.placeholder,e.fill,e.disabled,e.readonly,e.multiple,e.label,e.value,e.helperText,e.errorText,e.icon,e.mode,JSON.stringify(m)),o={render:e=>r(e),args:{...a}},l={render:e=>r(e),args:{...a,disabled:!0}},s={render:e=>r(e),args:{...a,icon:"account-multiple"}},n={render:e=>r(e),args:{...a,helperText:"Example of helper text"}},c={render:e=>r(e),args:{...a,errorText:"Example of error text"}},i={render:e=>r(e),args:{...a,multiple:!0}},T=[{id:"1",value:"Nice Green",disabled:!1,tag:{color:"success",label:"New "}},{id:"2",value:"Nice Red",disabled:!1,tag:{color:"danger",label:"Old "}}],d={render:e=>r(e,T),args:{...a}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    icon: 'account-multiple'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    helperText: 'Example of helper text'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    errorText: 'Example of error text'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    multiple: true
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args, optionWithTag),
  args: {
    ...SelectComponentArgs
  }
}`,...d.parameters?.docs?.source}}};const C=["Default","Disabled","SelectIcon","HelperText","ErrorText","Multiple","WithTag"];export{o as Default,l as Disabled,c as ErrorText,n as HelperText,i as Multiple,s as SelectIcon,d as WithTag,C as __namedExportsOrder,P as default};

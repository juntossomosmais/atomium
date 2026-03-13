import"./chunk-DseTPa7n.js";import{t as e}from"./react-BeYaFARg.js";import{t}from"./jsx-runtime-DsGsusFP.js";import"./react-dom-BaYUCVRd.js";import"./index--pUmmU2V-CE9k8Uy1.js";import{S as n}from"./esm-BiOou3EM.js";import{t as r}from"./table-jqz5s6A8.js";import{t as i}from"./decorator-Ce3Kjdma.js";e();var a={parameters:{docs:{description:{component:`Wrapper of Ionic Select component. Read the [Ionic documentation](https://ionicframework.com/docs/api/select) for more information about the available properties and possibilities.`}},actions:{handles:[`atomChange`,`atomFocus`,`atomBlur`,`atomCancel`,`atomDismiss`,`atom-change`,`atom-focus`,`atom-blur`,`atom-cancel`,`atom-dismiss`]}},decorators:[i],argTypes:{label:{control:`text`,description:`The label of the select`,table:{category:r.PROPERTIES}},placeholder:{control:`text`,description:`The placeholder of the select`,table:{category:r.PROPERTIES}},multiple:{control:`boolean`,defaultValue:{summary:!1},description:`If true, the user can select multiple values at once.`,table:{category:r.PROPERTIES}},disabled:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the user cannot interact with the select.",table:{category:r.PROPERTIES}},readonly:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the user cannot modify the value.",table:{category:r.PROPERTIES}},icon:{control:`text`,description:`The icon of the select`,table:{category:r.PROPERTIES}},helperText:{control:`text`,description:`The helper text of the select`,table:{category:r.PROPERTIES}},value:{control:`text`,description:`The value of native select`,table:{category:r.PROPERTIES}},errorText:{description:`The error text of the select`,table:{category:r.PROPERTIES}},fill:{control:`select`,options:[`outline`,`solid`],defaultValue:{summary:`solid`},description:`The fill type of the select`,table:{category:r.PROPERTIES}},mode:{control:`select`,options:[`md`,`ios`],defaultValue:{summary:`md`},description:`The mode determines which platform styles to use.`,table:{category:r.PROPERTIES}},atomChange:{action:`atomChange`,description:`Emitted when the value has changed. This is the main event to listen to if you are doing any manual form validation.`,table:{category:r.EVENTS}},atomFocus:{action:`atomFocus`,description:`Emitted when the select has focus.`,table:{category:r.EVENTS}},atomBlur:{action:`atomBlur`,description:`Emitted when the select has blur.`,table:{category:r.EVENTS}},atomCancel:{action:`atomCancel`,description:`Emitted when the select has cancel. Only applies when the select interface is "action-sheet".`,table:{category:r.EVENTS}},atomDismiss:{action:`atomDismiss`,description:`Emitted when the select has dismiss. Only applies when the select interface is "action-sheet".`,table:{category:r.EVENTS}},"--select-max-height":{description:`Add a custom max-height to the select list options.`,defaultValue:{summary:`250px`},table:{category:r.CSS_CUSTOM_PROPERTIES}}}},o={disabled:!1,readonly:!1,multiple:!1,label:`Select example`,placeholder:`Select an option`,mode:`md`,fill:`solid`,value:``,icon:``,helperText:``,errorText:``},s=t(),c={title:`Components/Select`,component:n,...a},l=[{id:`1`,value:`Red`,disabled:!1},{id:`2`,value:`Green`,disabled:!1},{id:`3`,value:`Blue`,disabled:!1},{id:`4`,value:`nice_blue`,disabled:!1,label:`Nice Blue`},{id:`5`,value:`Disabled example`,disabled:!0}],u=(e,t=l)=>(0,s.jsx)(n,{placeholder:e.placeholder,fill:e.fill,disabled:e.disabled,readonly:e.readonly,multiple:e.multiple,label:e.label,"helper-text":e.helperText,"error-text":e.errorText,icon:e.icon,mode:e.mode,value:e.value,options:t}),d={render:e=>u(e),args:{...o}},f={render:e=>u(e),args:{...o,disabled:!0}},p={render:e=>u(e),args:{...o,icon:`account-multiple`}},m={render:e=>u(e),args:{...o,helperText:`Example of helper text`}},h={render:e=>u(e),args:{...o,errorText:`Example of error text`}},g={render:e=>u(e),args:{...o,multiple:!0}},_=[{id:`1`,value:`Nice Green`,disabled:!1,tag:{color:`success`,label:`New `}},{id:`2`,value:`Nice Red`,disabled:!1,tag:{color:`danger`,label:`Old `}}],v={render:e=>u(e,_),args:{...o}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    icon: 'account-multiple'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    helperText: 'Example of helper text'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    errorText: 'Example of error text'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    multiple: true
  }
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args, optionWithTag),
  args: {
    ...SelectComponentArgs
  }
}`,...v.parameters?.docs?.source}}};var y=[`Default`,`Disabled`,`SelectIcon`,`HelperText`,`ErrorText`,`Multiple`,`WithTag`];export{d as Default,f as Disabled,h as ErrorText,m as HelperText,g as Multiple,p as SelectIcon,v as WithTag,y as __namedExportsOrder,c as default};
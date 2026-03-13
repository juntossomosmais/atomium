import{z as e}from"./iframe-Br9ztWDk.js";import{t}from"./table-DZkiv1k4.js";import{t as n}from"./decorator-tF45y5qF.js";var r={parameters:{docs:{description:{component:`Wrapper of Ionic Select component. Read the [Ionic documentation](https://ionicframework.com/docs/api/select) for more information about the available properties and possibilities.`}},actions:{handles:[`atomChange`,`atomFocus`,`atomBlur`,`atomCancel`,`atomDismiss`,`atom-change`,`atom-focus`,`atom-blur`,`atom-cancel`,`atom-dismiss`]}},decorators:[n],argTypes:{label:{control:`text`,description:`The label of the select`,table:{category:t.PROPERTIES}},placeholder:{control:`text`,description:`The placeholder of the select`,table:{category:t.PROPERTIES}},multiple:{control:`boolean`,defaultValue:{summary:!1},description:`If true, the user can select multiple values at once.`,table:{category:t.PROPERTIES}},disabled:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the user cannot interact with the select.",table:{category:t.PROPERTIES}},readonly:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the user cannot modify the value.",table:{category:t.PROPERTIES}},icon:{control:`text`,description:`The icon of the select`,table:{category:t.PROPERTIES}},helperText:{control:`text`,description:`The helper text of the select`,table:{category:t.PROPERTIES}},value:{control:`text`,description:`The value of native select`,table:{category:t.PROPERTIES}},errorText:{description:`The error text of the select`,table:{category:t.PROPERTIES}},fill:{control:`select`,options:[`outline`,`solid`],defaultValue:{summary:`solid`},description:`The fill type of the select`,table:{category:t.PROPERTIES}},mode:{control:`select`,options:[`md`,`ios`],defaultValue:{summary:`md`},description:`The mode determines which platform styles to use.`,table:{category:t.PROPERTIES}},atomChange:{action:`atomChange`,description:`Emitted when the value has changed. This is the main event to listen to if you are doing any manual form validation.`,table:{category:t.EVENTS}},atomFocus:{action:`atomFocus`,description:`Emitted when the select has focus.`,table:{category:t.EVENTS}},atomBlur:{action:`atomBlur`,description:`Emitted when the select has blur.`,table:{category:t.EVENTS}},atomCancel:{action:`atomCancel`,description:`Emitted when the select has cancel. Only applies when the select interface is "action-sheet".`,table:{category:t.EVENTS}},atomDismiss:{action:`atomDismiss`,description:`Emitted when the select has dismiss. Only applies when the select interface is "action-sheet".`,table:{category:t.EVENTS}},"--select-max-height":{description:`Add a custom max-height to the select list options.`,defaultValue:{summary:`250px`},table:{category:t.CSS_CUSTOM_PROPERTIES}}}},i={disabled:!1,readonly:!1,multiple:!1,label:`Select example`,placeholder:`Select an option`,mode:`md`,fill:`solid`,value:``,icon:``,helperText:``,errorText:``},a={title:`Components/Select`,...r},o=[{id:`1`,value:`Red`,disabled:!1},{id:`2`,value:`Green`,disabled:!1},{id:`3`,value:`Blue`,disabled:!1},{id:`4`,value:`nice_blue`,disabled:!1,label:`Nice Blue`},{id:`5`,value:`Disabled example`,disabled:!0}],s=(t,n=o)=>({components:{AtomSelect:e},setup(){return{args:t,options:n}},template:`
    <AtomSelect
      placeholder="${t.placeholder}"
      fill="${t.fill}"
      disabled="${t.disabled}"
      readonly="${t.readonly}"
      multiple="${t.multiple}"
      label="${t.label}"
      helperText="${t.helperText}"
      errorText="${t.errorText}"
      ${t.icon?`icon="${t.icon}"`:``}
      mode="${t.mode}"
      value="${t.value}"
      :options="options"
    />
  `}),c={render:e=>s(e),args:{...i}},l={render:e=>s(e),args:{...i,disabled:!0}},u={render:e=>s(e),args:{...i,icon:`account-multiple`}},d={render:e=>s(e),args:{...i,helperText:`Example of helper text`}},f={render:e=>s(e),args:{...i,errorText:`Example of error text`}},p={render:e=>s(e),args:{...i,multiple:!0}},m=[{id:`1`,value:`Nice Green`,disabled:!1,tag:{color:`success`,label:`New `}},{id:`2`,value:`Nice Red`,disabled:!1,tag:{color:`danger`,label:`Old `}}],h={render:e=>s(e,m),args:{...i}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    disabled: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    icon: 'account-multiple'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    helperText: 'Example of helper text'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    errorText: 'Example of error text'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    multiple: true
  }
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args, optionWithTag),
  args: {
    ...SelectComponentArgs
  }
}`,...h.parameters?.docs?.source}}};var g=[`Default`,`Disabled`,`SelectIcon`,`HelperText`,`ErrorText`,`Multiple`,`WithTag`];export{c as Default,l as Disabled,f as ErrorText,d as HelperText,p as Multiple,u as SelectIcon,h as WithTag,g as __namedExportsOrder,a as default};
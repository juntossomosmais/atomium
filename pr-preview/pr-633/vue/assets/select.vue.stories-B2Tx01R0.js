import{i as e}from"./preload-helper-xPQekRTU.js";import{V as t,t as n}from"./iframe-CrDCJsep.js";import{n as r,t as i}from"./table-CVkdcsHV.js";import{n as a,t as o}from"./decorator-CwzIKdXM.js";var s,c,l=e((()=>{r(),o(),s={parameters:{docs:{description:{component:`Wrapper of Ionic Select component. Read the [Ionic documentation](https://ionicframework.com/docs/api/select) for more information about the available properties and possibilities.`}},actions:{handles:[`atomChange`,`atomFocus`,`atomBlur`,`atomCancel`,`atomDismiss`,`atom-change`,`atom-focus`,`atom-blur`,`atom-cancel`,`atom-dismiss`]}},decorators:[a],argTypes:{label:{control:`text`,description:`The label of the select`,table:{category:i.PROPERTIES}},placeholder:{control:`text`,description:`The placeholder of the select`,table:{category:i.PROPERTIES}},multiple:{control:`boolean`,defaultValue:{summary:!1},description:`If true, the user can select multiple values at once.`,table:{category:i.PROPERTIES}},disabled:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the user cannot interact with the select.",table:{category:i.PROPERTIES}},readonly:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the user cannot modify the value.",table:{category:i.PROPERTIES}},icon:{control:`text`,description:`The icon of the select`,table:{category:i.PROPERTIES}},helperText:{control:`text`,description:`The helper text of the select`,table:{category:i.PROPERTIES}},value:{control:`text`,description:`The value of native select`,table:{category:i.PROPERTIES}},errorText:{description:`The error text of the select`,table:{category:i.PROPERTIES}},fill:{control:`select`,options:[`outline`,`solid`],defaultValue:{summary:`solid`},description:`The fill type of the select`,table:{category:i.PROPERTIES}},mode:{control:`select`,options:[`md`,`ios`],defaultValue:{summary:`md`},description:`The mode determines which platform styles to use.`,table:{category:i.PROPERTIES}},atomChange:{action:`atomChange`,description:`Emitted when the value has changed. This is the main event to listen to if you are doing any manual form validation.`,table:{category:i.EVENTS}},atomFocus:{action:`atomFocus`,description:`Emitted when the select has focus.`,table:{category:i.EVENTS}},atomBlur:{action:`atomBlur`,description:`Emitted when the select has blur.`,table:{category:i.EVENTS}},atomCancel:{action:`atomCancel`,description:`Emitted when the select has cancel. Only applies when the select interface is "action-sheet".`,table:{category:i.EVENTS}},atomDismiss:{action:`atomDismiss`,description:`Emitted when the select has dismiss. Only applies when the select interface is "action-sheet".`,table:{category:i.EVENTS}},"--select-max-height":{description:`Add a custom max-height to the select list options.`,defaultValue:{summary:`250px`},table:{category:i.CSS_CUSTOM_PROPERTIES}}}},c={disabled:!1,readonly:!1,multiple:!1,label:`Select example`,placeholder:`Select an option`,mode:`md`,fill:`solid`,value:``,icon:``,helperText:``,errorText:``}})),u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{n(),l(),u={title:`Components/Select`,...s},d=[{id:`1`,value:`Red`,disabled:!1},{id:`2`,value:`Green`,disabled:!1},{id:`3`,value:`Blue`,disabled:!1},{id:`4`,value:`nice_blue`,disabled:!1,label:`Nice Blue`},{id:`5`,value:`Disabled example`,disabled:!0}],f=(e,n=d)=>({components:{AtomSelect:t},setup(){return{args:e,options:n}},template:`
    <AtomSelect
      placeholder="${e.placeholder}"
      fill="${e.fill}"
      disabled="${e.disabled}"
      readonly="${e.readonly}"
      multiple="${e.multiple}"
      label="${e.label}"
      helperText="${e.helperText}"
      errorText="${e.errorText}"
      ${e.icon?`icon="${e.icon}"`:``}
      mode="${e.mode}"
      value="${e.value}"
      :options="options"
    />
  `}),p={render:e=>f(e),args:{...c}},m={render:e=>f(e),args:{...c,disabled:!0}},h={render:e=>f(e),args:{...c,icon:`account-multiple`}},g={render:e=>f(e),args:{...c,helperText:`Example of helper text`}},_={render:e=>f(e),args:{...c,errorText:`Example of error text`}},v={render:e=>f(e),args:{...c,multiple:!0}},y=[{id:`1`,value:`Nice Green`,disabled:!1,tag:{color:`success`,label:`New `}},{id:`2`,value:`Nice Red`,disabled:!1,tag:{color:`danger`,label:`Old `}}],b={render:e=>f(e,y),args:{...c}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    disabled: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    icon: 'account-multiple'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    helperText: 'Example of helper text'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    errorText: 'Example of error text'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    multiple: true
  }
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args, optionWithTag),
  args: {
    ...SelectComponentArgs
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Disabled`,`SelectIcon`,`HelperText`,`ErrorText`,`Multiple`,`WithTag`]}))();export{p as Default,m as Disabled,_ as ErrorText,g as HelperText,v as Multiple,h as SelectIcon,b as WithTag,x as __namedExportsOrder,u as default};
import{i as e}from"./preload-helper-xPQekRTU.js";import{U as t,X as n}from"./iframe-BUHKmaMN.js";import{m as r,t as i}from"./dist-BK4tPckK.js";import{n as a,t as o}from"./table-CVkdcsHV.js";import{n as s,t as c}from"./decorator-OztTuGhc.js";var l,u,d=e((()=>{a(),c(),l={parameters:{docs:{description:{component:`Wrapper of Ionic Select component. Read the [Ionic documentation](https://ionicframework.com/docs/api/select) for more information about the available properties and possibilities.`}},actions:{handles:[`atomChange`,`atomFocus`,`atomBlur`,`atomCancel`,`atomDismiss`,`atom-change`,`atom-focus`,`atom-blur`,`atom-cancel`,`atom-dismiss`]}},decorators:[s],argTypes:{label:{control:`text`,description:`The label of the select`,table:{category:o.PROPERTIES}},placeholder:{control:`text`,description:`The placeholder of the select`,table:{category:o.PROPERTIES}},multiple:{control:`boolean`,defaultValue:{summary:!1},description:`If true, the user can select multiple values at once.`,table:{category:o.PROPERTIES}},disabled:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the user cannot interact with the select.",table:{category:o.PROPERTIES}},readonly:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the user cannot modify the value.",table:{category:o.PROPERTIES}},icon:{control:`text`,description:`The icon of the select`,table:{category:o.PROPERTIES}},helperText:{control:`text`,description:`The helper text of the select`,table:{category:o.PROPERTIES}},value:{control:`text`,description:`The value of native select`,table:{category:o.PROPERTIES}},errorText:{description:`The error text of the select`,table:{category:o.PROPERTIES}},fill:{control:`select`,options:[`outline`,`solid`],defaultValue:{summary:`solid`},description:`The fill type of the select`,table:{category:o.PROPERTIES}},mode:{control:`select`,options:[`md`,`ios`],defaultValue:{summary:`md`},description:`The mode determines which platform styles to use.`,table:{category:o.PROPERTIES}},atomChange:{action:`atomChange`,description:`Emitted when the value has changed. This is the main event to listen to if you are doing any manual form validation.`,table:{category:o.EVENTS}},atomFocus:{action:`atomFocus`,description:`Emitted when the select has focus.`,table:{category:o.EVENTS}},atomBlur:{action:`atomBlur`,description:`Emitted when the select has blur.`,table:{category:o.EVENTS}},atomCancel:{action:`atomCancel`,description:`Emitted when the select has cancel. Only applies when the select interface is "action-sheet".`,table:{category:o.EVENTS}},atomDismiss:{action:`atomDismiss`,description:`Emitted when the select has dismiss. Only applies when the select interface is "action-sheet".`,table:{category:o.EVENTS}},"--select-max-height":{description:`Add a custom max-height to the select list options.`,defaultValue:{summary:`250px`},table:{category:o.CSS_CUSTOM_PROPERTIES}}}},u={disabled:!1,readonly:!1,multiple:!1,label:`Select example`,placeholder:`Select an option`,mode:`md`,fill:`solid`,value:``,icon:``,helperText:``,errorText:``}})),f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{n(),i(),d(),f=t(),p={title:`Components/Select`,component:r,...l},m=[{id:`1`,value:`Red`,disabled:!1},{id:`2`,value:`Green`,disabled:!1},{id:`3`,value:`Blue`,disabled:!1},{id:`4`,value:`nice_blue`,disabled:!1,label:`Nice Blue`},{id:`5`,value:`Disabled example`,disabled:!0}],h=(e,t=m)=>(0,f.jsx)(r,{placeholder:e.placeholder,fill:e.fill,disabled:e.disabled,readonly:e.readonly,multiple:e.multiple,label:e.label,"helper-text":e.helperText,"error-text":e.errorText,icon:e.icon,mode:e.mode,value:e.value,options:t}),g={render:e=>h(e),args:{...u}},_={render:e=>h(e),args:{...u,disabled:!0}},v={render:e=>h(e),args:{...u,icon:`account-multiple`}},y={render:e=>h(e),args:{...u,helperText:`Example of helper text`}},b={render:e=>h(e),args:{...u,errorText:`Example of error text`}},x={render:e=>h(e),args:{...u,multiple:!0}},S=[{id:`1`,value:`Nice Green`,disabled:!1,tag:{color:`success`,label:`New `}},{id:`2`,value:`Nice Red`,disabled:!1,tag:{color:`danger`,label:`Old `}}],C={render:e=>h(e,S),args:{...u}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    icon: 'account-multiple'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    helperText: 'Example of helper text'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    errorText: 'Example of error text'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    multiple: true
  }
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args, optionWithTag),
  args: {
    ...SelectComponentArgs
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Disabled`,`SelectIcon`,`HelperText`,`ErrorText`,`Multiple`,`WithTag`]}))();export{g as Default,_ as Disabled,b as ErrorText,y as HelperText,x as Multiple,v as SelectIcon,C as WithTag,w as __namedExportsOrder,p as default};
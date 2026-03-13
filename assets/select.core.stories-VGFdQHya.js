import{P as e}from"./iframe-D71TlG5e.js";import{t}from"./table-7jAh1EVy.js";import{t as n}from"./decorator-B7evQOcP.js";import{t as r}from"./taggedTemplateLiteral-C4L4koID.js";var i={parameters:{docs:{description:{component:`Wrapper of Ionic Select component. Read the [Ionic documentation](https://ionicframework.com/docs/api/select) for more information about the available properties and possibilities.`}},actions:{handles:[`atomChange`,`atomFocus`,`atomBlur`,`atomCancel`,`atomDismiss`,`atom-change`,`atom-focus`,`atom-blur`,`atom-cancel`,`atom-dismiss`]}},decorators:[n],argTypes:{label:{control:`text`,description:`The label of the select`,table:{category:t.PROPERTIES}},placeholder:{control:`text`,description:`The placeholder of the select`,table:{category:t.PROPERTIES}},multiple:{control:`boolean`,defaultValue:{summary:!1},description:`If true, the user can select multiple values at once.`,table:{category:t.PROPERTIES}},disabled:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the user cannot interact with the select.",table:{category:t.PROPERTIES}},readonly:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the user cannot modify the value.",table:{category:t.PROPERTIES}},icon:{control:`text`,description:`The icon of the select`,table:{category:t.PROPERTIES}},helperText:{control:`text`,description:`The helper text of the select`,table:{category:t.PROPERTIES}},value:{control:`text`,description:`The value of native select`,table:{category:t.PROPERTIES}},errorText:{description:`The error text of the select`,table:{category:t.PROPERTIES}},fill:{control:`select`,options:[`outline`,`solid`],defaultValue:{summary:`solid`},description:`The fill type of the select`,table:{category:t.PROPERTIES}},mode:{control:`select`,options:[`md`,`ios`],defaultValue:{summary:`md`},description:`The mode determines which platform styles to use.`,table:{category:t.PROPERTIES}},atomChange:{action:`atomChange`,description:`Emitted when the value has changed. This is the main event to listen to if you are doing any manual form validation.`,table:{category:t.EVENTS}},atomFocus:{action:`atomFocus`,description:`Emitted when the select has focus.`,table:{category:t.EVENTS}},atomBlur:{action:`atomBlur`,description:`Emitted when the select has blur.`,table:{category:t.EVENTS}},atomCancel:{action:`atomCancel`,description:`Emitted when the select has cancel. Only applies when the select interface is "action-sheet".`,table:{category:t.EVENTS}},atomDismiss:{action:`atomDismiss`,description:`Emitted when the select has dismiss. Only applies when the select interface is "action-sheet".`,table:{category:t.EVENTS}},"--select-max-height":{description:`Add a custom max-height to the select list options.`,defaultValue:{summary:`250px`},table:{category:t.CSS_CUSTOM_PROPERTIES}}}},a={disabled:!1,readonly:!1,multiple:!1,label:`Select example`,placeholder:`Select an option`,mode:`md`,fill:`solid`,value:``,icon:``,helperText:``,errorText:``},o,s={title:`Components/Select`,...i},c=[{id:`1`,value:`Red`,disabled:!1},{id:`2`,value:`Green`,disabled:!1},{id:`3`,value:`Blue`,disabled:!1},{id:`4`,value:`nice_blue`,disabled:!1,label:`Nice Blue`},{id:`5`,value:`Disabled example`,disabled:!0}],l=(t,n=c)=>e(o||=r([`
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
  `]),t.placeholder,t.fill,t.disabled,t.readonly,t.multiple,t.label,t.value,t.helperText,t.errorText,t.icon,t.mode,JSON.stringify(n)),u={render:e=>l(e),args:{...a}},d={render:e=>l(e),args:{...a,disabled:!0}},f={render:e=>l(e),args:{...a,icon:`account-multiple`}},p={render:e=>l(e),args:{...a,helperText:`Example of helper text`}},m={render:e=>l(e),args:{...a,errorText:`Example of error text`}},h={render:e=>l(e),args:{...a,multiple:!0}},g=[{id:`1`,value:`Nice Green`,disabled:!1,tag:{color:`success`,label:`New `}},{id:`2`,value:`Nice Red`,disabled:!1,tag:{color:`danger`,label:`Old `}}],_={render:e=>l(e,g),args:{...a}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    icon: 'account-multiple'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    helperText: 'Example of helper text'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    errorText: 'Example of error text'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args),
  args: {
    ...SelectComponentArgs,
    multiple: true
  }
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => createSelect(args, optionWithTag),
  args: {
    ...SelectComponentArgs
  }
}`,..._.parameters?.docs?.source}}};var v=[`Default`,`Disabled`,`SelectIcon`,`HelperText`,`ErrorText`,`Multiple`,`WithTag`];export{u as Default,d as Disabled,m as ErrorText,p as HelperText,h as Multiple,f as SelectIcon,_ as WithTag,v as __namedExportsOrder,s as default};
import{S as p,U as m}from"./iframe-C1Vxc--v.js";import{C as e}from"./table-D060eKuu.js";import{w as h}from"./decorator-D6BEzr_b.js";import"./preload-helper-PPVm8Dsz.js";const g={parameters:{docs:{description:{component:"Wrapper of Ionic Input component. Read the [Ionic documentation](https://ionicframework.com/docs/api/input) for more information about the available properties and possibilities."}},actions:{handles:["atomChange","atomFocus","atomBlur","atomInput","atom-change","atom-focus","atom-blur","atom-input"]}},decorators:[h],argTypes:{labelPlacement:{control:"select",options:["floating","stacked"],defaultValue:{summary:"floating"},description:"To control how the label is placed relative to the control",table:{category:e.PROPERTIES}},color:{control:"select",options:["primary","secondary","danger"],defaultValue:{summary:"secondary"},description:"The color to use from your application's color palette.",table:{category:e.PROPERTIES}},fill:{control:"select",options:["outline","solid"],defaultValue:{summary:"solid"},description:"The fill type of the input",table:{category:e.PROPERTIES}},shape:{control:"select",options:["round","undefined"],defaultValue:{summary:"round"},description:'The shape of the input, if "round" it will be rounded, if "undefined" it will be square',table:{category:e.PROPERTIES}},mode:{control:"select",options:["md","ios"],defaultValue:{summary:"md"},description:"The mode determines which platform styles to use.",table:{category:e.PROPERTIES}},type:{control:"select",options:["date","datetime-local","email","month","number","password","search","tel","text","time","url","week"],defaultValue:{summary:"text"},description:"The type of control to display.",table:{category:e.PROPERTIES}},disabled:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the user cannot interact with the input.",table:{category:e.PROPERTIES}},readonly:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the user cannot modify the value.",table:{category:e.PROPERTIES}},clearInput:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.",table:{category:e.PROPERTIES}},passwordToggle:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, a password toggle icon will appear in the input. Clicking it will reveal the password.",table:{category:e.PROPERTIES}},icon:{control:"text",description:"The icon of the input",table:{category:e.PROPERTIES}},value:{control:"text",description:"The value of native input",table:{category:e.PROPERTIES}},helperText:{control:"text",description:"The helper text of the input",table:{category:e.PROPERTIES}},label:{description:"The label of the input",table:{category:e.PROPERTIES}},placeholder:{description:"The placeholder of the input",table:{category:e.PROPERTIES}},errorText:{description:"The error text of the input",table:{category:e.PROPERTIES}},hasError:{description:"If `true`, the input will be in an error state.",table:{category:e.PROPERTIES}},multiple:{description:'If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to "email", otherwise it is ignored.',table:{category:e.PROPERTIES}},max:{description:"The maximum value, which must not be less than its minimum (min attribute) value.",table:{category:e.PROPERTIES}},min:{description:"The minimum value, which must not be greater than its maximum (max attribute) value.",table:{category:e.PROPERTIES}},maxLength:{description:"The maximum value length for an input.",table:{category:e.PROPERTIES}},minLength:{description:"The minimum value length for an input.",table:{category:e.PROPERTIES}},counter:{description:"If `true`, a counter will be shown counting the number of characters.",table:{category:e.PROPERTIES}},counterFormatter:{description:"Function that accepts a current value of the input, and returns the string to be displayed in the input counter. Note that the returned string must contain the current value within it somewhere, otherwise the counter will not update as the user types. `(inputLength: number, maxLength: number) => string | undefined`",table:{category:e.PROPERTIES}},clearOnEdit:{description:'If `true`, the value will be cleared after focus upon edit. Defaults to true when type is "password", false for all other types.',table:{category:e.PROPERTIES}},enterKeyHint:{defaultValue:{summary:"enter"},description:'A hint to the browser for which enter key to display. Possible values: "enter", "done", "go", "next", "previous", "search", and "send".',table:{category:e.PROPERTIES}},pattern:{description:'A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is "text", "search", "tel", "url", "email", "date", or "password", otherwise it is ignored. When the type attribute is "date", pattern will only be used in browsers that do not support the "date" input type natively.',table:{category:e.PROPERTIES}},required:{description:"If `true`, the input is required.",control:"boolean",defaultValue:{summary:"false"},table:{category:e.PROPERTIES}},inputmode:{description:"A hint to the browser for which keyboard to display. Accepts the following values: - `none` - `text` - `tel` - `url` - `email` - `numeric` - `decimal` - `search`",table:{category:e.PROPERTIES}},debounce:{description:"The amount of time, in milliseconds, to wait to trigger the `atomChange` event after each keystroke.",table:{category:e.PROPERTIES}},atomChange:{action:"atomChange",description:'Depending on the way the users interacts with the element, the `atomChange` event fires at a different moment: - When the user commits the change explicitly (e.g. by selecting a date from a date picker for `<atom-input type="date">`, pressing the "Enter" key, etc.). - When the element loses focus after its value has changed: for elements where the users interaction is typing.',table:{category:e.EVENTS}},atomInput:{action:"atomInput",description:"Event fires when the value of an `<atom-input>` element has been changed. For elements that accept text input (`type=text`, `type=tel`, etc.), the interface is InputEvent; for others, the interface is Event. If the input is cleared on edit, the type is null.",table:{category:e.EVENTS}},atomFocus:{action:"atomFocus",description:"Emitted when the input has focus.",table:{category:e.EVENTS}},atomBlur:{action:"atomBlur",description:"Emitted when the input has blur.",table:{category:e.EVENTS}},setFocus:{description:"`setFocus()` sets focus on the specified `atom-input`. Use this method instead of the global `input.focus()`.",table:{category:e.METHODS}},getInputElement:{description:"`getInputElement()` returns the native `<input>` element used under the hood. A common use-case is to access the native input when using a `HTMLInputElement` object is necessary.",table:{category:e.METHODS}}}},a={color:"secondary",labelPlacement:"floating",fill:"solid",shape:"round",mode:"md",type:"text",disabled:!1,clearInput:!1,readonly:!1,passwordToggle:!1,value:"",helperText:""},I={title:"Components/Input",...g},r=t=>({components:{AtomInput:p},setup(){return{args:t}},template:`
    <AtomInput
      label='Label example'
      placeholder='Placeholder Text'
      clearInput="${t.clearInput}"
      color="${t.color}"
      disabled="${t.disabled}"
      fill="${t.fill}"
      labelPlacement="${t.labelPlacement}"
      mode="${t.mode}"
      readonly="${t.readonly}"
      shape="${t.shape}"
      type="${t.type}"
      passwordToggle="${t.passwordToggle}"
      value="${t.value}"
      ${t.icon?`icon="${t.icon}"`:""}
      helperText="${t.helperText}"
    />
  `}),n={render:t=>r(t),args:{...a}},s={render:t=>r(t),args:{...a,type:"password",passwordToggle:!0}},i={render:t=>r(t),args:{...a,disabled:!0}},l={render:t=>r(t),args:{...a,icon:"magnify"}},c={render:t=>r(t),args:{...a,helperText:"This is a helper text example"}},u={render:()=>({components:{AtomInput:p},setup(){const t=m(!1),d=o=>o.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);return{hasError:t,validate:o=>{if(t.value=!1,o!=="")return d(o)?t.value=!1:t.value=!0}}},template:`
      <AtomInput
        label="Email"
        placeholder="Type your email"
        color="danger"
        :hasError="hasError"
        @input="validate($event.target.value)"
      />
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createInput(args),
  args: {
    ...InputComponentArgs
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createInput(args),
  args: {
    ...InputComponentArgs,
    type: 'password',
    passwordToggle: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => createInput(args),
  args: {
    ...InputComponentArgs,
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createInput(args),
  args: {
    ...InputComponentArgs,
    icon: 'magnify'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createInput(args),
  args: {
    ...InputComponentArgs,
    helperText: 'This is a helper text example'
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomInput
    },
    setup() {
      const hasError = ref(false);
      const validateEmail = email => {
        return email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/);
      };
      const validate = value => {
        hasError.value = false;
        if (value === '') return;
        return validateEmail(value) ? hasError.value = false : hasError.value = true;
      };
      return {
        hasError,
        validate
      };
    },
    template: \`
      <AtomInput
        label="Email"
        placeholder="Type your email"
        color="danger"
        :hasError="hasError"
        @input="validate($event.target.value)"
      />
    \`
  })
}`,...u.parameters?.docs?.source}}};const P=["Default","Password","Disabled","InputIcon","HelperText","ErrorState"];export{n as Default,i as Disabled,u as ErrorState,c as HelperText,l as InputIcon,s as Password,P as __namedExportsOrder,I as default};

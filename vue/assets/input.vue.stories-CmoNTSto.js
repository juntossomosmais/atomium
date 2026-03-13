import{j as e,tt as t}from"./iframe-DHKEqBzE.js";import{t as n}from"./table-DZkiv1k4.js";import{t as r}from"./decorator-tF45y5qF.js";var i={parameters:{docs:{description:{component:`Wrapper of Ionic Input component. Read the [Ionic documentation](https://ionicframework.com/docs/api/input) for more information about the available properties and possibilities.`}},actions:{handles:[`atomChange`,`atomFocus`,`atomBlur`,`atomInput`,`atom-change`,`atom-focus`,`atom-blur`,`atom-input`]}},decorators:[r],argTypes:{labelPlacement:{control:`select`,options:[`floating`,`stacked`],defaultValue:{summary:`floating`},description:`To control how the label is placed relative to the control`,table:{category:n.PROPERTIES}},color:{control:`select`,options:[`primary`,`secondary`,`danger`],defaultValue:{summary:`secondary`},description:`The color to use from your application's color palette.`,table:{category:n.PROPERTIES}},fill:{control:`select`,options:[`outline`,`solid`],defaultValue:{summary:`solid`},description:`The fill type of the input`,table:{category:n.PROPERTIES}},shape:{control:`select`,options:[`round`,`undefined`],defaultValue:{summary:`round`},description:`The shape of the input, if "round" it will be rounded, if "undefined" it will be square`,table:{category:n.PROPERTIES}},mode:{control:`select`,options:[`md`,`ios`],defaultValue:{summary:`md`},description:`The mode determines which platform styles to use.`,table:{category:n.PROPERTIES}},type:{control:`select`,options:[`date`,`datetime-local`,`email`,`month`,`number`,`password`,`search`,`tel`,`text`,`time`,`url`,`week`],defaultValue:{summary:`text`},description:`The type of control to display.`,table:{category:n.PROPERTIES}},disabled:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the user cannot interact with the input.",table:{category:n.PROPERTIES}},readonly:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the user cannot modify the value.",table:{category:n.PROPERTIES}},clearInput:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.",table:{category:n.PROPERTIES}},passwordToggle:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, a password toggle icon will appear in the input. Clicking it will reveal the password.",table:{category:n.PROPERTIES}},icon:{control:`text`,description:`The icon of the input`,table:{category:n.PROPERTIES}},value:{control:`text`,description:`The value of native input`,table:{category:n.PROPERTIES}},helperText:{control:`text`,description:`The helper text of the input`,table:{category:n.PROPERTIES}},label:{description:`The label of the input`,table:{category:n.PROPERTIES}},placeholder:{description:`The placeholder of the input`,table:{category:n.PROPERTIES}},errorText:{description:`The error text of the input`,table:{category:n.PROPERTIES}},hasError:{description:"If `true`, the input will be in an error state.",table:{category:n.PROPERTIES}},multiple:{description:'If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to "email", otherwise it is ignored.',table:{category:n.PROPERTIES}},max:{description:`The maximum value, which must not be less than its minimum (min attribute) value.`,table:{category:n.PROPERTIES}},min:{description:`The minimum value, which must not be greater than its maximum (max attribute) value.`,table:{category:n.PROPERTIES}},maxLength:{description:`The maximum value length for an input.`,table:{category:n.PROPERTIES}},minLength:{description:`The minimum value length for an input.`,table:{category:n.PROPERTIES}},counter:{description:"If `true`, a counter will be shown counting the number of characters.",table:{category:n.PROPERTIES}},counterFormatter:{description:"Function that accepts a current value of the input, and returns the string to be displayed in the input counter. Note that the returned string must contain the current value within it somewhere, otherwise the counter will not update as the user types. `(inputLength: number, maxLength: number) => string | undefined`",table:{category:n.PROPERTIES}},clearOnEdit:{description:'If `true`, the value will be cleared after focus upon edit. Defaults to true when type is "password", false for all other types.',table:{category:n.PROPERTIES}},enterKeyHint:{defaultValue:{summary:`enter`},description:`A hint to the browser for which enter key to display. Possible values: "enter", "done", "go", "next", "previous", "search", and "send".`,table:{category:n.PROPERTIES}},pattern:{description:`A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is "text", "search", "tel", "url", "email", "date", or "password", otherwise it is ignored. When the type attribute is "date", pattern will only be used in browsers that do not support the "date" input type natively.`,table:{category:n.PROPERTIES}},required:{description:"If `true`, the input is required.",control:`boolean`,defaultValue:{summary:`false`},table:{category:n.PROPERTIES}},inputmode:{description:"A hint to the browser for which keyboard to display. Accepts the following values: - `none` - `text` - `tel` - `url` - `email` - `numeric` - `decimal` - `search`",table:{category:n.PROPERTIES}},debounce:{description:"The amount of time, in milliseconds, to wait to trigger the `atomChange` event after each keystroke.",table:{category:n.PROPERTIES}},atomChange:{action:`atomChange`,description:'Depending on the way the users interacts with the element, the `atomChange` event fires at a different moment: - When the user commits the change explicitly (e.g. by selecting a date from a date picker for `<atom-input type="date">`, pressing the "Enter" key, etc.). - When the element loses focus after its value has changed: for elements where the users interaction is typing.',table:{category:n.EVENTS}},atomInput:{action:`atomInput`,description:"Event fires when the value of an `<atom-input>` element has been changed. For elements that accept text input (`type=text`, `type=tel`, etc.), the interface is InputEvent; for others, the interface is Event. If the input is cleared on edit, the type is null.",table:{category:n.EVENTS}},atomFocus:{action:`atomFocus`,description:`Emitted when the input has focus.`,table:{category:n.EVENTS}},atomBlur:{action:`atomBlur`,description:`Emitted when the input has blur.`,table:{category:n.EVENTS}},setFocus:{description:"`setFocus()` sets focus on the specified `atom-input`. Use this method instead of the global `input.focus()`.",table:{category:n.METHODS}},getInputElement:{description:"`getInputElement()` returns the native `<input>` element used under the hood. A common use-case is to access the native input when using a `HTMLInputElement` object is necessary.",table:{category:n.METHODS}}}},a={color:`secondary`,labelPlacement:`floating`,fill:`solid`,shape:`round`,mode:`md`,type:`text`,disabled:!1,clearInput:!1,readonly:!1,passwordToggle:!1,value:``,helperText:``},o={title:`Components/Input`,...i},s=t=>({components:{AtomInput:e},setup(){return{args:t}},template:`
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
      ${t.icon?`icon="${t.icon}"`:``}
      helperText="${t.helperText}"
    />
  `}),c={render:e=>s(e),args:{...a}},l={render:e=>s(e),args:{...a,type:`password`,passwordToggle:!0}},u={render:e=>s(e),args:{...a,disabled:!0}},d={render:e=>s(e),args:{...a,icon:`magnify`}},f={render:e=>s(e),args:{...a,helperText:`This is a helper text example`}},p={render:()=>({components:{AtomInput:e},setup(){let e=t(!1),n=e=>e.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);return{hasError:e,validate:t=>{if(e.value=!1,t!==``)return n(t)?e.value=!1:e.value=!0}}},template:`
      <AtomInput
        label="Email"
        placeholder="Type your email"
        color="danger"
        :hasError="hasError"
        @input="validate($event.target.value)"
      />
    `})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createInput(args),
  args: {
    ...InputComponentArgs
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createInput(args),
  args: {
    ...InputComponentArgs,
    type: 'password',
    passwordToggle: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createInput(args),
  args: {
    ...InputComponentArgs,
    disabled: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createInput(args),
  args: {
    ...InputComponentArgs,
    icon: 'magnify'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createInput(args),
  args: {
    ...InputComponentArgs,
    helperText: 'This is a helper text example'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};var m=[`Default`,`Password`,`Disabled`,`InputIcon`,`HelperText`,`ErrorState`];export{c as Default,u as Disabled,p as ErrorState,f as HelperText,d as InputIcon,l as Password,m as __namedExportsOrder,o as default};
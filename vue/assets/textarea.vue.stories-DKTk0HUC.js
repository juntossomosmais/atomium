import{W as e,tt as t}from"./iframe-Br9ztWDk.js";import{t as n}from"./table-DZkiv1k4.js";import{t as r}from"./decorator-tF45y5qF.js";var i={parameters:{docs:{description:{component:`Wrapper of Ionic Textarea component. Read the [Ionic documentation](https://ionicframework.com/docs/api/textarea) for more information about the available properties and possibilities.`}},actions:{handles:[`atomChange`,`atomFocus`,`atomBlur`,`atomInput`,`atom-change`,`atom-focus`,`atom-blur`,`atom-input`]}},decorators:[r],argTypes:{labelPlacement:{control:`select`,options:[`floating`,`stacked`],defaultValue:{summary:`floating`},description:`To control how the label is placed relative to the control`,table:{category:n.PROPERTIES}},color:{control:`select`,options:[`primary`,`secondary`,`danger`],defaultValue:{summary:`secondary`},description:`The color to use from your application's color palette.`,table:{category:n.PROPERTIES}},fill:{control:`select`,options:[`outline`,`solid`],defaultValue:{summary:`solid`},description:`The fill type of the input`,table:{category:n.PROPERTIES}},shape:{control:`select`,options:[`round`,`undefined`],defaultValue:{summary:`round`},description:`The shape of the input, if "round" it will be rounded, if "undefined" it will be square`,table:{category:n.PROPERTIES}},rows:{control:`number`,defaultValue:{summary:4},description:`The number of rows to display by default.`,table:{category:n.PROPERTIES}},wrap:{control:`select`,options:[`hard`,`soft`,`off`],description:`How the text in the textarea is wrapped.`,table:{category:n.PROPERTIES}},mode:{control:`select`,options:[`md`,`ios`],defaultValue:{summary:`md`},description:`The mode determines which platform styles to use.`,table:{category:n.PROPERTIES}},autoGrow:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the element height will increase based on the value.",table:{category:n.PROPERTIES}},disabled:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the user cannot interact with the input.",table:{category:n.PROPERTIES}},readonly:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the user cannot modify the value.",table:{category:n.PROPERTIES}},icon:{control:`text`,description:`The icon of the input`,table:{category:n.PROPERTIES}},value:{control:`text`,description:`The value of native input`,table:{category:n.PROPERTIES}},helperText:{control:`text`,description:`The helper text of the input`,table:{category:n.PROPERTIES}},label:{description:`The label of the input`,table:{category:n.PROPERTIES}},placeholder:{description:`The placeholder of the input`,table:{category:n.PROPERTIES}},errorText:{description:`The error text of the input`,table:{category:n.PROPERTIES}},hasError:{description:"If `true`, the input will be in an error state.",table:{category:n.PROPERTIES}},cols:{description:`The number of cols to display by default.`,table:{category:n.PROPERTIES}},maxLength:{description:`The maximum value length for an input.`,table:{category:n.PROPERTIES}},minLength:{description:`The minimum value length for an input.`,table:{category:n.PROPERTIES}},counter:{description:"If `true`, a counter will be shown counting the number of characters.",table:{category:n.PROPERTIES}},counterFormatter:{description:"Function that accepts a current value of the input, and returns the string to be displayed in the input counter. Note that the returned string must contain the current value within it somewhere, otherwise the counter will not update as the user types. `(inputLength: number, maxLength: number) => string | undefined`",table:{category:n.PROPERTIES}},clearOnEdit:{description:'If `true`, the value will be cleared after focus upon edit. Defaults to true when type is "password", false for all other types.',table:{category:n.PROPERTIES}},enterKeyHint:{defaultValue:{summary:`enter`},description:`A hint to the browser for which enter key to display. Possible values: "enter", "done", "go", "next", "previous", "search", and "send".`,table:{category:n.PROPERTIES}},required:{description:"If `true`, the input is required.",table:{category:n.PROPERTIES}},inputmode:{description:"A hint to the browser for which keyboard to display. Accepts the following values: - `none` - `text` - `tel` - `url` - `email` - `numeric` - `decimal` - `search`",table:{category:n.PROPERTIES}},debounce:{description:"The amount of time, in milliseconds, to wait to trigger the `atomChange` event after each keystroke.",table:{category:n.PROPERTIES}},atomChange:{action:`atomChange`,description:'Depending on the way the users interacts with the element, the `atomChange` event fires at a different moment: - When the user commits the change explicitly (e.g. by selecting a date from a date picker for `<atom-input type="date">`, pressing the "Enter" key, etc.). - When the element loses focus after its value has changed: for elements where the users interaction is typing.',table:{category:n.EVENTS}},atomInput:{action:`atomInput`,description:"Event fires when the value of an `<atom-input>` element has been changed. For elements that accept text input (`type=text`, `type=tel`, etc.), the interface is InputEvent; for others, the interface is Event. If the input is cleared on edit, the type is null.",table:{category:n.EVENTS}},atomFocus:{action:`atomFocus`,description:`Emitted when the input has focus.`,table:{category:n.EVENTS}},atomBlur:{action:`atomBlur`,description:`Emitted when the input has blur.`,table:{category:n.EVENTS}},setFocus:{description:"`setFocus()` sets focus on the specified `atom-input`. Use this method instead of the global `input.focus()`.",table:{category:n.METHODS}},getInputElement:{description:"`getInputElement()` returns the native `<input>` element used under the hood. A common use-case is to access the native input when using a `HTMLInputElement` object is necessary.",table:{category:n.METHODS}}}},a={color:`secondary`,labelPlacement:`floating`,fill:`solid`,shape:`round`,rows:4,mode:`md`,disabled:!1,readonly:!1,value:``,helperText:``,icon:``},o={title:`Components/Textarea`,...i},s=t=>({components:{AtomTextarea:e},setup(){return{args:t}},template:`
    <AtomTextarea
      label='Example Textarea'
      placeholder='Placeholder Text'
      color="${t.color}"
      disabled="${t.disabled}"
      fill="${t.fill}"
      labelPlacement="${t.labelPlacement}"
      mode="${t.mode}"
      readonly="${t.readonly}"
      autoGrow="${t.autoGrow}"
      shape="${t.shape}"
      rows="${t.rows}"
      cols="${t.cols}"
      wrap="${t.wrap}"
      value="${t.value}"
      icon="${t.icon}"
      helperText="${t.helperText}"
    />
  `}),c={render:e=>s(e),args:{...a}},l={render:e=>s(e),args:{...a,disabled:!0}},u={render:e=>s(e),args:{...a,icon:`account-multiple`}},d={render:e=>s(e),args:{...a,helperText:`This is a helper text example`}},f={render:()=>({components:{AtomTextarea:e},setup(){let e=t(!1),n=e=>e.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);return{hasError:e,validate:t=>{if(e.value=!1,t!==``)return n(t)?e.value=!1:e.value=!0}}},template:`
      <AtomTextarea
        label='Email'
        placeholder='Enter a valid email'
        helperText='Example: atomium@juntossomosmais.com.br'
        errorText='Invalid email'
        type='email'
        @input="validate($event.target.value)"
        :hasError="hasError"
        value="invalid-email"
      />
    `})},p={render:()=>({components:{AtomTextarea:e},methods:{counterFormatter(e,t){return`${e}/300`}},template:`
      <AtomTextarea
        label='Counter example'
        placeholder='Start typing...'
        counter="true"
        maxlength="300"
        :counterFormatter="counterFormatter"
      />
    `})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
    disabled: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
    icon: 'account-multiple'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
    helperText: 'This is a helper text example'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomTextarea
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
      <AtomTextarea
        label='Email'
        placeholder='Enter a valid email'
        helperText='Example: atomium@juntossomosmais.com.br'
        errorText='Invalid email'
        type='email'
        @input="validate($event.target.value)"
        :hasError="hasError"
        value="invalid-email"
      />
    \`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomTextarea
    },
    methods: {
      counterFormatter(inputLength, maxLength) {
        return \`\${inputLength}/300\`;
      }
    },
    template: \`
      <AtomTextarea
        label='Counter example'
        placeholder='Start typing...'
        counter="true"
        maxlength="300"
        :counterFormatter="counterFormatter"
      />
    \`
  })
}`,...p.parameters?.docs?.source}}};var m=[`Default`,`Disabled`,`TextareaIcon`,`HelperText`,`ErrorState`,`WithCounter`];export{c as Default,l as Disabled,f as ErrorState,d as HelperText,u as TextareaIcon,p as WithCounter,m as __namedExportsOrder,o as default};
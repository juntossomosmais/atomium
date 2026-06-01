import{i as e}from"./preload-helper-xPQekRTU.js";import{Ht as t,K as n,qt as r,t as i}from"./iframe-Tx0ARXFJ.js";import{n as a,t as o}from"./table-CVkdcsHV.js";import{n as s,t as c}from"./decorator-B6X5ztZ_.js";var l,u,d=e((()=>{a(),c(),l={parameters:{docs:{description:{component:`Wrapper of Ionic Textarea component. Read the [Ionic documentation](https://ionicframework.com/docs/api/textarea) for more information about the available properties and possibilities.`}},actions:{handles:[`atomChange`,`atomFocus`,`atomBlur`,`atomInput`,`atom-change`,`atom-focus`,`atom-blur`,`atom-input`]}},decorators:[s],argTypes:{labelPlacement:{control:`select`,options:[`floating`,`stacked`],defaultValue:{summary:`floating`},description:`To control how the label is placed relative to the control`,table:{category:o.PROPERTIES}},color:{control:`select`,options:[`primary`,`secondary`,`danger`],defaultValue:{summary:`secondary`},description:`The color to use from your application's color palette.`,table:{category:o.PROPERTIES}},fill:{control:`select`,options:[`outline`,`solid`],defaultValue:{summary:`solid`},description:`The fill type of the input`,table:{category:o.PROPERTIES}},shape:{control:`select`,options:[`round`,`undefined`],defaultValue:{summary:`round`},description:`The shape of the input, if "round" it will be rounded, if "undefined" it will be square`,table:{category:o.PROPERTIES}},rows:{control:`number`,defaultValue:{summary:4},description:`The number of rows to display by default.`,table:{category:o.PROPERTIES}},wrap:{control:`select`,options:[`hard`,`soft`,`off`],description:`How the text in the textarea is wrapped.`,table:{category:o.PROPERTIES}},mode:{control:`select`,options:[`md`,`ios`],defaultValue:{summary:`md`},description:`The mode determines which platform styles to use.`,table:{category:o.PROPERTIES}},autoGrow:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the element height will increase based on the value.",table:{category:o.PROPERTIES}},disabled:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the user cannot interact with the input.",table:{category:o.PROPERTIES}},readonly:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the user cannot modify the value.",table:{category:o.PROPERTIES}},icon:{control:`text`,description:`The icon of the input`,table:{category:o.PROPERTIES}},value:{control:`text`,description:`The value of native input`,table:{category:o.PROPERTIES}},helperText:{control:`text`,description:`The helper text of the input`,table:{category:o.PROPERTIES}},label:{description:`The label of the input`,table:{category:o.PROPERTIES}},placeholder:{description:`The placeholder of the input`,table:{category:o.PROPERTIES}},errorText:{description:`The error text of the input`,table:{category:o.PROPERTIES}},hasError:{description:"If `true`, the input will be in an error state.",table:{category:o.PROPERTIES}},cols:{description:`The number of cols to display by default.`,table:{category:o.PROPERTIES}},maxLength:{description:`The maximum value length for an input.`,table:{category:o.PROPERTIES}},minLength:{description:`The minimum value length for an input.`,table:{category:o.PROPERTIES}},counter:{description:"If `true`, a counter will be shown counting the number of characters.",table:{category:o.PROPERTIES}},counterFormatter:{description:"Function that accepts a current value of the input, and returns the string to be displayed in the input counter. Note that the returned string must contain the current value within it somewhere, otherwise the counter will not update as the user types. `(inputLength: number, maxLength: number) => string | undefined`",table:{category:o.PROPERTIES}},clearOnEdit:{description:'If `true`, the value will be cleared after focus upon edit. Defaults to true when type is "password", false for all other types.',table:{category:o.PROPERTIES}},enterKeyHint:{defaultValue:{summary:`enter`},description:`A hint to the browser for which enter key to display. Possible values: "enter", "done", "go", "next", "previous", "search", and "send".`,table:{category:o.PROPERTIES}},required:{description:"If `true`, the input is required.",table:{category:o.PROPERTIES}},inputmode:{description:"A hint to the browser for which keyboard to display. Accepts the following values: - `none` - `text` - `tel` - `url` - `email` - `numeric` - `decimal` - `search`",table:{category:o.PROPERTIES}},debounce:{description:"The amount of time, in milliseconds, to wait to trigger the `atomChange` event after each keystroke.",table:{category:o.PROPERTIES}},atomChange:{action:`atomChange`,description:'Depending on the way the users interacts with the element, the `atomChange` event fires at a different moment: - When the user commits the change explicitly (e.g. by selecting a date from a date picker for `<atom-input type="date">`, pressing the "Enter" key, etc.). - When the element loses focus after its value has changed: for elements where the users interaction is typing.',table:{category:o.EVENTS}},atomInput:{action:`atomInput`,description:"Event fires when the value of an `<atom-input>` element has been changed. For elements that accept text input (`type=text`, `type=tel`, etc.), the interface is InputEvent; for others, the interface is Event. If the input is cleared on edit, the type is null.",table:{category:o.EVENTS}},atomFocus:{action:`atomFocus`,description:`Emitted when the input has focus.`,table:{category:o.EVENTS}},atomBlur:{action:`atomBlur`,description:`Emitted when the input has blur.`,table:{category:o.EVENTS}},setFocus:{description:"`setFocus()` sets focus on the specified `atom-input`. Use this method instead of the global `input.focus()`.",table:{category:o.METHODS}},getInputElement:{description:"`getInputElement()` returns the native `<input>` element used under the hood. A common use-case is to access the native input when using a `HTMLInputElement` object is necessary.",table:{category:o.METHODS}}}},u={color:`secondary`,labelPlacement:`floating`,fill:`solid`,shape:`round`,rows:4,mode:`md`,disabled:!1,readonly:!1,value:``,helperText:``,icon:``}})),f,p,m,h,g,_,v,y,b;e((()=>{t(),i(),d(),f={title:`Components/Textarea`,...l},p=e=>({components:{AtomTextarea:n},setup(){return{args:e}},template:`
    <AtomTextarea
      label='Example Textarea'
      placeholder='Placeholder Text'
      color="${e.color}"
      disabled="${e.disabled}"
      fill="${e.fill}"
      labelPlacement="${e.labelPlacement}"
      mode="${e.mode}"
      readonly="${e.readonly}"
      autoGrow="${e.autoGrow}"
      shape="${e.shape}"
      rows="${e.rows}"
      cols="${e.cols}"
      wrap="${e.wrap}"
      value="${e.value}"
      icon="${e.icon}"
      helperText="${e.helperText}"
    />
  `}),m={render:e=>p(e),args:{...u}},h={render:e=>p(e),args:{...u,disabled:!0}},g={render:e=>p(e),args:{...u,icon:`account-multiple`}},_={render:e=>p(e),args:{...u,helperText:`This is a helper text example`}},v={render:()=>({components:{AtomTextarea:n},setup(){let e=r(!1),t=e=>e.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);return{hasError:e,validate:n=>{if(e.value=!1,n!==``)return t(n)?e.value=!1:e.value=!0}}},template:`
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
    `})},y={render:()=>({components:{AtomTextarea:n},methods:{counterFormatter(e,t){return`${e}/300`}},template:`
      <AtomTextarea
        label='Counter example'
        placeholder='Start typing...'
        counter="true"
        maxlength="300"
        :counterFormatter="counterFormatter"
      />
    `})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
    icon: 'account-multiple'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
    helperText: 'This is a helper text example'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomTextarea
    },
    methods: {
      counterFormatter(inputLength, _maxLength) {
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
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Disabled`,`TextareaIcon`,`HelperText`,`ErrorState`,`WithCounter`]}))();export{m as Default,h as Disabled,v as ErrorState,_ as HelperText,g as TextareaIcon,y as WithCounter,b as __namedExportsOrder,f as default};
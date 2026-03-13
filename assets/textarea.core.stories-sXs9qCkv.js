import{H as e}from"./storybook-CfikGCXO.js";import{t}from"./table-CBo0-gV-.js";import{t as n}from"./decorator-DapEhatt.js";import{t as r}from"./taggedTemplateLiteral-D9Q4odv2.js";var i={parameters:{docs:{description:{component:`Wrapper of Ionic Textarea component. Read the [Ionic documentation](https://ionicframework.com/docs/api/textarea) for more information about the available properties and possibilities.`}},actions:{handles:[`atomChange`,`atomFocus`,`atomBlur`,`atomInput`,`atom-change`,`atom-focus`,`atom-blur`,`atom-input`]}},decorators:[n],argTypes:{labelPlacement:{control:`select`,options:[`floating`,`stacked`],defaultValue:{summary:`floating`},description:`To control how the label is placed relative to the control`,table:{category:t.PROPERTIES}},color:{control:`select`,options:[`primary`,`secondary`,`danger`],defaultValue:{summary:`secondary`},description:`The color to use from your application's color palette.`,table:{category:t.PROPERTIES}},fill:{control:`select`,options:[`outline`,`solid`],defaultValue:{summary:`solid`},description:`The fill type of the input`,table:{category:t.PROPERTIES}},shape:{control:`select`,options:[`round`,`undefined`],defaultValue:{summary:`round`},description:`The shape of the input, if "round" it will be rounded, if "undefined" it will be square`,table:{category:t.PROPERTIES}},rows:{control:`number`,defaultValue:{summary:4},description:`The number of rows to display by default.`,table:{category:t.PROPERTIES}},wrap:{control:`select`,options:[`hard`,`soft`,`off`],description:`How the text in the textarea is wrapped.`,table:{category:t.PROPERTIES}},mode:{control:`select`,options:[`md`,`ios`],defaultValue:{summary:`md`},description:`The mode determines which platform styles to use.`,table:{category:t.PROPERTIES}},autoGrow:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the element height will increase based on the value.",table:{category:t.PROPERTIES}},disabled:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the user cannot interact with the input.",table:{category:t.PROPERTIES}},readonly:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the user cannot modify the value.",table:{category:t.PROPERTIES}},icon:{control:`text`,description:`The icon of the input`,table:{category:t.PROPERTIES}},value:{control:`text`,description:`The value of native input`,table:{category:t.PROPERTIES}},helperText:{control:`text`,description:`The helper text of the input`,table:{category:t.PROPERTIES}},label:{description:`The label of the input`,table:{category:t.PROPERTIES}},placeholder:{description:`The placeholder of the input`,table:{category:t.PROPERTIES}},errorText:{description:`The error text of the input`,table:{category:t.PROPERTIES}},hasError:{description:"If `true`, the input will be in an error state.",table:{category:t.PROPERTIES}},cols:{description:`The number of cols to display by default.`,table:{category:t.PROPERTIES}},maxLength:{description:`The maximum value length for an input.`,table:{category:t.PROPERTIES}},minLength:{description:`The minimum value length for an input.`,table:{category:t.PROPERTIES}},counter:{description:"If `true`, a counter will be shown counting the number of characters.",table:{category:t.PROPERTIES}},counterFormatter:{description:"Function that accepts a current value of the input, and returns the string to be displayed in the input counter. Note that the returned string must contain the current value within it somewhere, otherwise the counter will not update as the user types. `(inputLength: number, maxLength: number) => string | undefined`",table:{category:t.PROPERTIES}},clearOnEdit:{description:'If `true`, the value will be cleared after focus upon edit. Defaults to true when type is "password", false for all other types.',table:{category:t.PROPERTIES}},enterKeyHint:{defaultValue:{summary:`enter`},description:`A hint to the browser for which enter key to display. Possible values: "enter", "done", "go", "next", "previous", "search", and "send".`,table:{category:t.PROPERTIES}},required:{description:"If `true`, the input is required.",table:{category:t.PROPERTIES}},inputmode:{description:"A hint to the browser for which keyboard to display. Accepts the following values: - `none` - `text` - `tel` - `url` - `email` - `numeric` - `decimal` - `search`",table:{category:t.PROPERTIES}},debounce:{description:"The amount of time, in milliseconds, to wait to trigger the `atomChange` event after each keystroke.",table:{category:t.PROPERTIES}},atomChange:{action:`atomChange`,description:'Depending on the way the users interacts with the element, the `atomChange` event fires at a different moment: - When the user commits the change explicitly (e.g. by selecting a date from a date picker for `<atom-input type="date">`, pressing the "Enter" key, etc.). - When the element loses focus after its value has changed: for elements where the users interaction is typing.',table:{category:t.EVENTS}},atomInput:{action:`atomInput`,description:"Event fires when the value of an `<atom-input>` element has been changed. For elements that accept text input (`type=text`, `type=tel`, etc.), the interface is InputEvent; for others, the interface is Event. If the input is cleared on edit, the type is null.",table:{category:t.EVENTS}},atomFocus:{action:`atomFocus`,description:`Emitted when the input has focus.`,table:{category:t.EVENTS}},atomBlur:{action:`atomBlur`,description:`Emitted when the input has blur.`,table:{category:t.EVENTS}},setFocus:{description:"`setFocus()` sets focus on the specified `atom-input`. Use this method instead of the global `input.focus()`.",table:{category:t.METHODS}},getInputElement:{description:"`getInputElement()` returns the native `<input>` element used under the hood. A common use-case is to access the native input when using a `HTMLInputElement` object is necessary.",table:{category:t.METHODS}}}},a={color:`secondary`,labelPlacement:`floating`,fill:`solid`,shape:`round`,rows:4,mode:`md`,disabled:!1,readonly:!1,value:``,helperText:``,icon:``},o,s,c={title:`Components/Textarea`,...i},l=t=>e`
    <atom-textarea
      label="Label example"
      placeholder="Placeholder example"
      color=${t.color}
      disabled=${t.disabled}
      fill=${t.fill}
      label-placement=${t.labelPlacement}
      mode=${t.mode}
      readonly=${t.readonly}
      auto-grow=${t.autoGrow}
      shape=${t.shape}
      rows=${t.rows}
      cols=${t.cols}
      wrap=${t.wrap}
      value=${t.value}
      icon=${t.icon}
      helper-text=${t.helperText}
    ></atom-textarea>
  `,u={render:e=>l(e),args:{...a}},d={render:e=>l(e),args:{...a,disabled:!0}},f={render:e=>l(e),args:{...a,icon:`account-multiple`}},p={render:e=>l(e),args:{...a,helperText:`This is a helper text example`}},m={render:()=>e(o||=r([`
    <atom-textarea
      class="atom-textarea--error-example"
      label="Email"
      placeholder="Enter a valid email"
      helper-text="Example: atomium@juntossomosmais.com.br"
      error-text="Invalid email"
      value="invalid-email"
      has-error="true"
    ></atom-textarea>

    <script>
      ;(function () {
        const textareaEl = document.querySelector(
          '.atom-textarea--error-example'
        )
        textareaEl.addEventListener('atomChange', function (ev) {
          validate(ev.target.value)
        })

        function validateEmail(email) {
          return email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/)
        }

        function validate(value) {
          const hasError = value !== '' && !validateEmail(value)
          textareaEl.setAttribute('has-error', hasError)
        }
      })()
    <\/script>
  `])),parameters:{docs:{description:{story:`To check this behavior working you need to look the [canvas of component](/story/components-input--error-text)`}}}},h={render:()=>e(s||=r([`
    <atom-textarea
      class="atom-textarea--counter-example"
      label="Counter example"
      placeholder="Start typing..."
      counter="true"
      maxlength="300"
    ></atom-textarea>

    <script>
      ;(function () {
        const formatter =  () => {
          const customTextarea = document.querySelector(
            '.atom-textarea--counter-example'
          )
          customTextarea.counterFormatter = (inputLength, maxLength) =>
            inputLength + '/300'
        })
        formatter()
      })()
    <\/script>
  `]))};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
    icon: 'account-multiple'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
    helperText: 'This is a helper text example'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <atom-textarea
      class="atom-textarea--error-example"
      label="Email"
      placeholder="Enter a valid email"
      helper-text="Example: atomium@juntossomosmais.com.br"
      error-text="Invalid email"
      value="invalid-email"
      has-error="true"
    ></atom-textarea>

    <script>
      ;(function () {
        const textareaEl = document.querySelector(
          '.atom-textarea--error-example'
        )
        textareaEl.addEventListener('atomChange', function (ev) {
          validate(ev.target.value)
        })

        function validateEmail(email) {
          return email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/)
        }

        function validate(value) {
          const hasError = value !== '' && !validateEmail(value)
          textareaEl.setAttribute('has-error', hasError)
        }
      })()
    <\/script>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'To check this behavior working you need to look the [canvas of component](/story/components-input--error-text)'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <atom-textarea
      class="atom-textarea--counter-example"
      label="Counter example"
      placeholder="Start typing..."
      counter="true"
      maxlength="300"
    ></atom-textarea>

    <script>
      ;(function () {
        const formatter =  () => {
          const customTextarea = document.querySelector(
            '.atom-textarea--counter-example'
          )
          customTextarea.counterFormatter = (inputLength, maxLength) =>
            inputLength + '/300'
        })
        formatter()
      })()
    <\/script>
  \`
}`,...h.parameters?.docs?.source}}};var g=[`Default`,`Disabled`,`TextareaIcon`,`HelperText`,`ErrorState`,`WithCounter`];export{u as Default,d as Disabled,m as ErrorState,p as HelperText,f as TextareaIcon,h as WithCounter,g as __namedExportsOrder,c as default};
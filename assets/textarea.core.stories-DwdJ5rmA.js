import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{at as t,st as n}from"./storybook-AbPZ34TI.js";import{n as r,t as i}from"./table-DMN4TomJ.js";import{n as a,t as o}from"./decorator-Cz27MBtZ.js";import{n as s,t as c}from"./taggedTemplateLiteral-DJvUgAmF.js";var l,u,d=e((()=>{r(),o(),l={parameters:{docs:{description:{component:`Wrapper of Ionic Textarea component. Read the [Ionic documentation](https://ionicframework.com/docs/api/textarea) for more information about the available properties and possibilities.`}},actions:{handles:[`atomChange`,`atomFocus`,`atomBlur`,`atomInput`,`atom-change`,`atom-focus`,`atom-blur`,`atom-input`]}},decorators:[a],argTypes:{labelPlacement:{control:`select`,options:[`floating`,`stacked`],defaultValue:{summary:`floating`},description:`To control how the label is placed relative to the control`,table:{category:i.PROPERTIES}},color:{control:`select`,options:[`primary`,`secondary`,`danger`],defaultValue:{summary:`secondary`},description:`The color to use from your application's color palette.`,table:{category:i.PROPERTIES}},fill:{control:`select`,options:[`outline`,`solid`],defaultValue:{summary:`solid`},description:`The fill type of the input`,table:{category:i.PROPERTIES}},shape:{control:`select`,options:[`round`,`undefined`],defaultValue:{summary:`round`},description:`The shape of the input, if "round" it will be rounded, if "undefined" it will be square`,table:{category:i.PROPERTIES}},rows:{control:`number`,defaultValue:{summary:4},description:`The number of rows to display by default.`,table:{category:i.PROPERTIES}},wrap:{control:`select`,options:[`hard`,`soft`,`off`],description:`How the text in the textarea is wrapped.`,table:{category:i.PROPERTIES}},mode:{control:`select`,options:[`md`,`ios`],defaultValue:{summary:`md`},description:`The mode determines which platform styles to use.`,table:{category:i.PROPERTIES}},autoGrow:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the element height will increase based on the value.",table:{category:i.PROPERTIES}},disabled:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the user cannot interact with the input.",table:{category:i.PROPERTIES}},readonly:{control:`boolean`,defaultValue:{summary:`false`},description:"If `true`, the user cannot modify the value.",table:{category:i.PROPERTIES}},icon:{control:`text`,description:`The icon of the input`,table:{category:i.PROPERTIES}},value:{control:`text`,description:`The value of native input`,table:{category:i.PROPERTIES}},helperText:{control:`text`,description:`The helper text of the input`,table:{category:i.PROPERTIES}},label:{description:`The label of the input`,table:{category:i.PROPERTIES}},placeholder:{description:`The placeholder of the input`,table:{category:i.PROPERTIES}},errorText:{description:`The error text of the input`,table:{category:i.PROPERTIES}},hasError:{description:"If `true`, the input will be in an error state.",table:{category:i.PROPERTIES}},cols:{description:`The number of cols to display by default.`,table:{category:i.PROPERTIES}},maxLength:{description:`The maximum value length for an input.`,table:{category:i.PROPERTIES}},minLength:{description:`The minimum value length for an input.`,table:{category:i.PROPERTIES}},counter:{description:"If `true`, a counter will be shown counting the number of characters.",table:{category:i.PROPERTIES}},counterFormatter:{description:"Function that accepts a current value of the input, and returns the string to be displayed in the input counter. Note that the returned string must contain the current value within it somewhere, otherwise the counter will not update as the user types. `(inputLength: number, maxLength: number) => string | undefined`",table:{category:i.PROPERTIES}},clearOnEdit:{description:'If `true`, the value will be cleared after focus upon edit. Defaults to true when type is "password", false for all other types.',table:{category:i.PROPERTIES}},enterKeyHint:{defaultValue:{summary:`enter`},description:`A hint to the browser for which enter key to display. Possible values: "enter", "done", "go", "next", "previous", "search", and "send".`,table:{category:i.PROPERTIES}},required:{description:"If `true`, the input is required.",table:{category:i.PROPERTIES}},inputmode:{description:"A hint to the browser for which keyboard to display. Accepts the following values: - `none` - `text` - `tel` - `url` - `email` - `numeric` - `decimal` - `search`",table:{category:i.PROPERTIES}},debounce:{description:"The amount of time, in milliseconds, to wait to trigger the `atomChange` event after each keystroke.",table:{category:i.PROPERTIES}},atomChange:{action:`atomChange`,description:'Depending on the way the users interacts with the element, the `atomChange` event fires at a different moment: - When the user commits the change explicitly (e.g. by selecting a date from a date picker for `<atom-input type="date">`, pressing the "Enter" key, etc.). - When the element loses focus after its value has changed: for elements where the users interaction is typing.',table:{category:i.EVENTS}},atomInput:{action:`atomInput`,description:"Event fires when the value of an `<atom-input>` element has been changed. For elements that accept text input (`type=text`, `type=tel`, etc.), the interface is InputEvent; for others, the interface is Event. If the input is cleared on edit, the type is null.",table:{category:i.EVENTS}},atomFocus:{action:`atomFocus`,description:`Emitted when the input has focus.`,table:{category:i.EVENTS}},atomBlur:{action:`atomBlur`,description:`Emitted when the input has blur.`,table:{category:i.EVENTS}},setFocus:{description:"`setFocus()` sets focus on the specified `atom-input`. Use this method instead of the global `input.focus()`.",table:{category:i.METHODS}},getInputElement:{description:"`getInputElement()` returns the native `<input>` element used under the hood. A common use-case is to access the native input when using a `HTMLInputElement` object is necessary.",table:{category:i.METHODS}}}},u={color:`secondary`,labelPlacement:`floating`,fill:`solid`,shape:`round`,rows:4,mode:`md`,disabled:!1,readonly:!1,value:``,helperText:``,icon:``}})),f,p,m,h,g,_,v,y,b,x,S;e((()=>{t(),d(),s(),m={title:`Components/Textarea`,...l},h=e=>n`
    <atom-textarea
      label="Label example"
      placeholder="Placeholder example"
      color=${e.color}
      disabled=${e.disabled}
      fill=${e.fill}
      label-placement=${e.labelPlacement}
      mode=${e.mode}
      readonly=${e.readonly}
      auto-grow=${e.autoGrow}
      shape=${e.shape}
      rows=${e.rows}
      cols=${e.cols}
      wrap=${e.wrap}
      value=${e.value}
      icon=${e.icon}
      helper-text=${e.helperText}
    ></atom-textarea>
  `,g={render:e=>h(e),args:{...u}},_={render:e=>h(e),args:{...u,disabled:!0}},v={render:e=>h(e),args:{...u,icon:`account-multiple`}},y={render:e=>h(e),args:{...u,helperText:`This is a helper text example`}},b={render:()=>n(f||=c([`
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
  `])),parameters:{docs:{description:{story:`To check this behavior working you need to look the [canvas of component](/story/components-input--error-text)`}}}},x={render:()=>n(p||=c([`
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
  `]))},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
    icon: 'account-multiple'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
    helperText: 'This is a helper text example'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Disabled`,`TextareaIcon`,`HelperText`,`ErrorState`,`WithCounter`]}))();export{g as Default,_ as Disabled,b as ErrorState,y as HelperText,v as TextareaIcon,x as WithCounter,S as __namedExportsOrder,m as default};
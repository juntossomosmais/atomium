import{U as u}from"./iframe-CEyGnNHL.js";import{C as e}from"./table-D060eKuu.js";import{w as f}from"./decorator-eHJvVl-P.js";import"./preload-helper-PPVm8Dsz.js";const g={parameters:{docs:{description:{component:"Wrapper of Ionic Textarea component. Read the [Ionic documentation](https://ionicframework.com/docs/api/textarea) for more information about the available properties and possibilities."}},actions:{handles:["atomChange","atomFocus","atomBlur","atomInput","atom-change","atom-focus","atom-blur","atom-input"]}},decorators:[f],argTypes:{labelPlacement:{control:"select",options:["floating","stacked"],defaultValue:{summary:"floating"},description:"To control how the label is placed relative to the control",table:{category:e.PROPERTIES}},color:{control:"select",options:["primary","secondary","danger"],defaultValue:{summary:"secondary"},description:"The color to use from your application's color palette.",table:{category:e.PROPERTIES}},fill:{control:"select",options:["outline","solid"],defaultValue:{summary:"solid"},description:"The fill type of the input",table:{category:e.PROPERTIES}},shape:{control:"select",options:["round","undefined"],defaultValue:{summary:"round"},description:'The shape of the input, if "round" it will be rounded, if "undefined" it will be square',table:{category:e.PROPERTIES}},rows:{control:"number",defaultValue:{summary:4},description:"The number of rows to display by default.",table:{category:e.PROPERTIES}},wrap:{control:"select",options:["hard","soft","off"],description:"How the text in the textarea is wrapped.",table:{category:e.PROPERTIES}},mode:{control:"select",options:["md","ios"],defaultValue:{summary:"md"},description:"The mode determines which platform styles to use.",table:{category:e.PROPERTIES}},autoGrow:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the element height will increase based on the value.",table:{category:e.PROPERTIES}},disabled:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the user cannot interact with the input.",table:{category:e.PROPERTIES}},readonly:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the user cannot modify the value.",table:{category:e.PROPERTIES}},icon:{control:"text",description:"The icon of the input",table:{category:e.PROPERTIES}},value:{control:"text",description:"The value of native input",table:{category:e.PROPERTIES}},helperText:{control:"text",description:"The helper text of the input",table:{category:e.PROPERTIES}},label:{description:"The label of the input",table:{category:e.PROPERTIES}},placeholder:{description:"The placeholder of the input",table:{category:e.PROPERTIES}},errorText:{description:"The error text of the input",table:{category:e.PROPERTIES}},hasError:{description:"If `true`, the input will be in an error state.",table:{category:e.PROPERTIES}},cols:{description:"The number of cols to display by default.",table:{category:e.PROPERTIES}},maxLength:{description:"The maximum value length for an input.",table:{category:e.PROPERTIES}},minLength:{description:"The minimum value length for an input.",table:{category:e.PROPERTIES}},counter:{description:"If `true`, a counter will be shown counting the number of characters.",table:{category:e.PROPERTIES}},counterFormatter:{description:"Function that accepts a current value of the input, and returns the string to be displayed in the input counter. Note that the returned string must contain the current value within it somewhere, otherwise the counter will not update as the user types. `(inputLength: number, maxLength: number) => string | undefined`",table:{category:e.PROPERTIES}},clearOnEdit:{description:'If `true`, the value will be cleared after focus upon edit. Defaults to true when type is "password", false for all other types.',table:{category:e.PROPERTIES}},enterKeyHint:{defaultValue:{summary:"enter"},description:'A hint to the browser for which enter key to display. Possible values: "enter", "done", "go", "next", "previous", "search", and "send".',table:{category:e.PROPERTIES}},required:{description:"If `true`, the input is required.",table:{category:e.PROPERTIES}},inputmode:{description:"A hint to the browser for which keyboard to display. Accepts the following values: - `none` - `text` - `tel` - `url` - `email` - `numeric` - `decimal` - `search`",table:{category:e.PROPERTIES}},debounce:{description:"The amount of time, in milliseconds, to wait to trigger the `atomChange` event after each keystroke.",table:{category:e.PROPERTIES}},atomChange:{action:"atomChange",description:'Depending on the way the users interacts with the element, the `atomChange` event fires at a different moment: - When the user commits the change explicitly (e.g. by selecting a date from a date picker for `<atom-input type="date">`, pressing the "Enter" key, etc.). - When the element loses focus after its value has changed: for elements where the users interaction is typing.',table:{category:e.EVENTS}},atomInput:{action:"atomInput",description:"Event fires when the value of an `<atom-input>` element has been changed. For elements that accept text input (`type=text`, `type=tel`, etc.), the interface is InputEvent; for others, the interface is Event. If the input is cleared on edit, the type is null.",table:{category:e.EVENTS}},atomFocus:{action:"atomFocus",description:"Emitted when the input has focus.",table:{category:e.EVENTS}},atomBlur:{action:"atomBlur",description:"Emitted when the input has blur.",table:{category:e.EVENTS}},setFocus:{description:"`setFocus()` sets focus on the specified `atom-input`. Use this method instead of the global `input.focus()`.",table:{category:e.METHODS}},getInputElement:{description:"`getInputElement()` returns the native `<input>` element used under the hood. A common use-case is to access the native input when using a `HTMLInputElement` object is necessary.",table:{category:e.METHODS}}}},l={color:"secondary",labelPlacement:"floating",fill:"solid",shape:"round",rows:4,mode:"md",disabled:!1,readonly:!1,value:"",helperText:"",icon:""};var m=Object.freeze,x=Object.defineProperty,h=(t,E)=>m(x(t,"raw",{value:m(t.slice())})),p,d;const P={title:"Components/Textarea",...g},c=t=>u`
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
  `,a={render:t=>c(t),args:{...l}},r={render:t=>c(t),args:{...l,disabled:!0}},o={render:t=>c(t),args:{...l,icon:"account-multiple"}},n={render:t=>c(t),args:{...l,helperText:"This is a helper text example"}},s={render:()=>u(p||(p=h([`
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
  `]))),parameters:{docs:{description:{story:"To check this behavior working you need to look the [canvas of component](/story/components-input--error-text)"}}}},i={render:()=>u(d||(d=h([`
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
  `])))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
    icon: 'account-multiple'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createTextarea(args),
  args: {
    ...TextareaComponentArgs,
    helperText: 'This is a helper text example'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const R=["Default","Disabled","TextareaIcon","HelperText","ErrorState","WithCounter"];export{a as Default,r as Disabled,s as ErrorState,n as HelperText,o as TextareaIcon,i as WithCounter,R as __namedExportsOrder,P as default};

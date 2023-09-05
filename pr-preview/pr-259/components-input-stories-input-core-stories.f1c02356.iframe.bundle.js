"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[8508],{"../../node_modules/@storybook/addon-actions/dist/decorator.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>withActions});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs"),actions=(...args)=>{let options=chunk_AY7I2SME.vc,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...chunk_AY7I2SME.vc,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=(0,chunk_AY7I2SME.aD)(namesObject[name],options)})),actionsObject},chunk_VWCVBQ22=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs"),dist=__webpack_require__("../../node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),{document:decorator_document,Element}=dist.global,delegateEventSplitter=/^(\S+)\s*(.*)$/,matchesMethod=null!=Element&&!Element.prototype.matches?"msMatchesSelector":"matches",hasMatchInAncestry=(element,selector)=>{if(element[matchesMethod](selector))return!0;let parent=element.parentElement;return!!parent&&hasMatchInAncestry(parent,selector)},applyEventHandlers=(actionsFn,...handles)=>{let root=decorator_document&&decorator_document.getElementById("storybook-root");(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{if(null!=root){let handlers=((actionsFn,...handles)=>{let actionsObject=actionsFn(...handles);return Object.entries(actionsObject).map((([key,action])=>{let[_,eventName,selector]=key.match(delegateEventSplitter)||[];return{eventName,handler:e=>{(!selector||hasMatchInAncestry(e.target,selector))&&action(e)}}}))})(actionsFn,...handles);return handlers.forEach((({eventName,handler})=>root.addEventListener(eventName,handler))),()=>handlers.forEach((({eventName,handler})=>root.removeEventListener(eventName,handler)))}}),[root,actionsFn,handles])},withActions=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withActions",parameterName:chunk_VWCVBQ22.Sz,skipIfNoParametersOrOptions:!0,wrapper:(getStory,context,{parameters})=>(parameters?.handles&&applyEventHandlers(actions,...parameters.handles),getStory(context))})},"../../packages/core/src/components/input/stories/input.core.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,ErrorState:()=>ErrorState,HelperText:()=>HelperText,InputIcon:()=>InputIcon,Password:()=>Password,__namedExportsOrder:()=>__namedExportsOrder,default:()=>input_core_stories});var lit=__webpack_require__("../../node_modules/lit/index.js"),decorator=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/decorator.mjs"),table=__webpack_require__("../../utils/storybook/enums/table.ts");const InputComponentArgs={color:"secondary",labelPlacement:"floating",fill:"solid",shape:"round",mode:"md",type:"text",disabled:!1,clearInput:!1,readonly:!1,passwordToggle:!1},input_core_stories={title:"Components/Input",...{parameters:{docs:{description:{component:"Wrapper of Ionic Input component. Read the [Ionic documentation](https://ionicframework.com/docs/api/input) for more information about the available properties and possibilities."}},actions:{handles:["atomChange","atomFocus","atomBlur","atomInput"]}},decorators:[decorator.R],argTypes:{labelPlacement:{control:"select",options:["floating","stacked"],defaultValue:{summary:"floating"},description:"To control how the label is placed relative to the control",table:{category:table.W.PROPERTIES}},color:{control:"select",options:["primary","secondary","danger"],defaultValue:{summary:"secondary"},description:"The color to use from your application's color palette.",table:{category:table.W.PROPERTIES}},fill:{control:"select",options:["outline","solid"],defaultValue:{summary:"solid"},description:"The fill type of the input",table:{category:table.W.PROPERTIES}},shape:{control:"select",options:["round","undefined"],defaultValue:{summary:"round"},description:'The shape of the input, if "round" it will be rounded, if "undefined" it will be square',table:{category:table.W.PROPERTIES}},mode:{control:"select",options:["md","ios"],defaultValue:{summary:"md"},description:"The mode determines which platform styles to use.",table:{category:table.W.PROPERTIES}},type:{control:"select",options:["date","datetime-local","email","month","number","password","search","tel","text","time","url","week"],defaultValue:{summary:"text"},description:"The type of control to display.",table:{category:table.W.PROPERTIES}},disabled:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the user cannot interact with the input.",table:{category:table.W.PROPERTIES}},readonly:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the user cannot modify the value.",table:{category:table.W.PROPERTIES}},clearInput:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.",table:{category:table.W.PROPERTIES}},passwordToggle:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, a password toggle icon will appear in the input. Clicking it will reveal the password.",table:{category:table.W.PROPERTIES}},icon:{control:"text",description:"The icon of the input",table:{category:table.W.PROPERTIES}},value:{control:"text",description:"The value of native input",table:{category:table.W.PROPERTIES}},helperText:{control:"text",description:"The helper text of the input",table:{category:table.W.PROPERTIES}},label:{description:"The label of the input",table:{category:table.W.PROPERTIES}},placeholder:{description:"The placeholder of the input",table:{category:table.W.PROPERTIES}},errorText:{description:"The error text of the input",table:{category:table.W.PROPERTIES}},hasError:{description:"If `true`, the input will be in an error state.",table:{category:table.W.PROPERTIES}},multiple:{description:'If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to "email", otherwise it is ignored.',table:{category:table.W.PROPERTIES}},max:{description:"The maximum value, which must not be less than its minimum (min attribute) value.",table:{category:table.W.PROPERTIES}},min:{description:"The minimum value, which must not be greater than its maximum (max attribute) value.",table:{category:table.W.PROPERTIES}},maxLength:{description:"The maximum value length for an input.",table:{category:table.W.PROPERTIES}},minLength:{description:"The minimum value length for an input.",table:{category:table.W.PROPERTIES}},counter:{description:"If `true`, a counter will be shown counting the number of characters.",table:{category:table.W.PROPERTIES}},counterFormatter:{description:"Function that accepts a current value of the input, and returns the string to be displayed in the input counter. Note that the returned string must contain the current value within it somewhere, otherwise the counter will not update as the user types. `(inputLength: number, maxLength: number) => string | undefined`",table:{category:table.W.PROPERTIES}},clearOnEdit:{description:'If `true`, the value will be cleared after focus upon edit. Defaults to true when type is "password", false for all other types.',table:{category:table.W.PROPERTIES}},enterKeyHint:{defaultValue:{summary:"enter"},description:'A hint to the browser for which enter key to display. Possible values: "enter", "done", "go", "next", "previous", "search", and "send".',table:{category:table.W.PROPERTIES}},pattern:{description:'A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is "text", "search", "tel", "url", "email", "date", or "password", otherwise it is ignored. When the type attribute is "date", pattern will only be used in browsers that do not support the "date" input type natively.',table:{category:table.W.PROPERTIES}},required:{description:"If `true`, the input is required.",control:"boolean",defaultValue:{summary:"false"},table:{category:table.W.PROPERTIES}},inputmode:{description:"A hint to the browser for which keyboard to display. Accepts the following values: - `none` - `text` - `tel` - `url` - `email` - `numeric` - `decimal` - `search`",table:{category:table.W.PROPERTIES}},debounce:{description:"The amount of time, in milliseconds, to wait to trigger the `atomChange` event after each keystroke.",table:{category:table.W.PROPERTIES}},atomChange:{action:"atomChange",description:'Depending on the way the users interacts with the element, the `atomChange` event fires at a different moment: - When the user commits the change explicitly (e.g. by selecting a date from a date picker for `<atom-input type="date">`, pressing the "Enter" key, etc.). - When the element loses focus after its value has changed: for elements where the users interaction is typing.',table:{category:table.W.EVENTS}},atomInput:{action:"atomInput",description:"Event fires when the value of an `<atom-input>` element has been changed. For elements that accept text input (`type=text`, `type=tel`, etc.), the interface is InputEvent; for others, the interface is Event. If the input is cleared on edit, the type is null.",table:{category:table.W.EVENTS}},atomFocus:{action:"atomFocus",description:"Emitted when the input has focus.",table:{category:table.W.EVENTS}},atomBlur:{action:"atomBlur",description:"Emitted when the input has blur.",table:{category:table.W.EVENTS}},setFocus:{description:"`setFocus()` sets focus on the specified `atom-input`. Use this method instead of the global `input.focus()`.",table:{category:table.W.METHODS}},getInputElement:{description:"`getInputElement()` returns the native `<input>` element used under the hood. A common use-case is to access the native input when using a `HTMLInputElement` object is necessary.",table:{category:table.W.METHODS}}}}},createInput=args=>lit.dy`
    <atom-input
      required=${args.required}
      label="Label example"
      placeholder="Placeholder Text"
      clear-input=${args.clearInput}
      color=${args.color}
      disabled=${args.disabled}
      fill=${args.fill}
      label-placement=${args.labelPlacement}
      mode=${args.mode}
      readonly=${args.readonly}
      shape=${args.shape}
      type=${args.type}
      password-toggle=${args.passwordToggle}
      value=${args.value}
      icon=${args.icon}
      helper-text=${args.helperText}
      type=${args.type}
    ></atom-input>
  `,Default={render:args=>createInput(args),args:{...InputComponentArgs}},Password={render:args=>createInput(args),args:{...InputComponentArgs,type:"password",passwordToggle:!0}},Disabled={render:args=>createInput(args),args:{...InputComponentArgs,disabled:!0}},InputIcon={render:args=>createInput(args),args:{...InputComponentArgs,icon:"magnify"}},HelperText={render:args=>createInput(args),args:{...InputComponentArgs,helperText:"This is a helper text example"}},ErrorState={render:()=>lit.dy`
    <atom-input
      class="atom-input--error-example"
      label="Email"
      placeholder="Enter a valid email"
      helper-text="Example: atomium@juntossomosmais.com.br"
      error-text="Invalid email"
      value="invalid-email"
      type="email"
    ></atom-input>

    <script>
      ;(function () {
        const inputEl = document.querySelector('.atom-input--error-example')
        inputEl.addEventListener('atomChange', function (ev) {
          validate(ev.target.value)
        })

        function validateEmail(email) {
          return email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/)
        }

        function validate(value) {
          const hasError = value !== '' && !validateEmail(value)
          inputEl.setAttribute('has-error', hasError)
        }
      })()
    </script>
  `,parameters:{docs:{description:{story:"To check this behavior working you need to look the [canvas of component](/story/components-input--error-text)"}}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => createInput(args),\n  args: {\n    ...InputComponentArgs\n  }\n}",...Default.parameters?.docs?.source}}},Password.parameters={...Password.parameters,docs:{...Password.parameters?.docs,source:{originalSource:"{\n  render: args => createInput(args),\n  args: {\n    ...InputComponentArgs,\n    type: 'password',\n    passwordToggle: true\n  }\n}",...Password.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: args => createInput(args),\n  args: {\n    ...InputComponentArgs,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},InputIcon.parameters={...InputIcon.parameters,docs:{...InputIcon.parameters?.docs,source:{originalSource:"{\n  render: args => createInput(args),\n  args: {\n    ...InputComponentArgs,\n    icon: 'magnify'\n  }\n}",...InputIcon.parameters?.docs?.source}}},HelperText.parameters={...HelperText.parameters,docs:{...HelperText.parameters?.docs,source:{originalSource:"{\n  render: args => createInput(args),\n  args: {\n    ...InputComponentArgs,\n    helperText: 'This is a helper text example'\n  }\n}",...HelperText.parameters?.docs?.source}}},ErrorState.parameters={...ErrorState.parameters,docs:{...ErrorState.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <atom-input\n      class="atom-input--error-example"\n      label="Email"\n      placeholder="Enter a valid email"\n      helper-text="Example: atomium@juntossomosmais.com.br"\n      error-text="Invalid email"\n      value="invalid-email"\n      type="email"\n    ></atom-input>\n\n    <script>\n      ;(function () {\n        const inputEl = document.querySelector(\'.atom-input--error-example\')\n        inputEl.addEventListener(\'atomChange\', function (ev) {\n          validate(ev.target.value)\n        })\n\n        function validateEmail(email) {\n          return email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/)\n        }\n\n        function validate(value) {\n          const hasError = value !== \'\' && !validateEmail(value)\n          inputEl.setAttribute(\'has-error\', hasError)\n        }\n      })()\n    <\/script>\n  `,\n  parameters: {\n    docs: {\n      description: {\n        story: \'To check this behavior working you need to look the [canvas of component](/story/components-input--error-text)\'\n      }\n    }\n  }\n}',...ErrorState.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Password","Disabled","InputIcon","HelperText","ErrorState"]},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category.SLOTS="Slots",Category}({})}}]);
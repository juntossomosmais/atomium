"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[1695],{"../../node_modules/@storybook/addon-actions/dist/decorator.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>withActions});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}var actions=(...args)=>{let options=config,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...config,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=action(namesObject[name],options)})),actionsObject},{document:decorator_document,Element}=external_STORYBOOK_MODULE_GLOBAL_.global,delegateEventSplitter=/^(\S+)\s*(.*)$/,matchesMethod=null!=Element&&!Element.prototype.matches?"msMatchesSelector":"matches",hasMatchInAncestry=(element,selector)=>{if(element[matchesMethod](selector))return!0;let parent=element.parentElement;return!!parent&&hasMatchInAncestry(parent,selector)},applyEventHandlers=(actionsFn,...handles)=>{let root=decorator_document&&decorator_document.getElementById("storybook-root");(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{if(null!=root){let handlers=((actionsFn,...handles)=>{let actionsObject=actionsFn(...handles);return Object.entries(actionsObject).map((([key,action])=>{let[_,eventName,selector]=key.match(delegateEventSplitter)||[];return{eventName,handler:e=>{(!selector||hasMatchInAncestry(e.target,selector))&&action(e)}}}))})(actionsFn,...handles);return handlers.forEach((({eventName,handler})=>root.addEventListener(eventName,handler))),()=>handlers.forEach((({eventName,handler})=>root.removeEventListener(eventName,handler)))}}),[root,actionsFn,handles])},withActions=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withActions",parameterName:"actions",skipIfNoParametersOrOptions:!0,wrapper:(getStory,context,{parameters})=>(parameters?.handles&&applyEventHandlers(actions,...parameters.handles),getStory(context))})},"../../packages/core/src/components/textarea/stories/textarea.react.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,ErrorState:()=>ErrorState,HelperText:()=>HelperText,TextareaIcon:()=>TextareaIcon,WithCounter:()=>WithCounter,__namedExportsOrder:()=>__namedExportsOrder,default:()=>textarea_react_stories});var esm=__webpack_require__("../../packages/core/react/dist/esm/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),table=__webpack_require__("../../utils/storybook/enums/table.ts");const TextareaComponentArgs={color:"secondary",labelPlacement:"floating",fill:"solid",shape:"round",rows:4,mode:"md",disabled:!1,readonly:!1,value:"",helperText:"",icon:""},textarea_react_stories={title:"Components/Textarea",...{parameters:{docs:{description:{component:"Wrapper of Ionic Textarea component. Read the [Ionic documentation](https://ionicframework.com/docs/api/textarea) for more information about the available properties and possibilities."}},actions:{handles:["atomChange","atomFocus","atomBlur","atomInput","atom-change","atom-focus","atom-blur","atom-input"]}},decorators:[__webpack_require__("../../node_modules/@storybook/addon-actions/dist/decorator.mjs").w],argTypes:{labelPlacement:{control:"select",options:["floating","stacked"],defaultValue:{summary:"floating"},description:"To control how the label is placed relative to the control",table:{category:table.b.PROPERTIES}},color:{control:"select",options:["primary","secondary","danger"],defaultValue:{summary:"secondary"},description:"The color to use from your application's color palette.",table:{category:table.b.PROPERTIES}},fill:{control:"select",options:["outline","solid"],defaultValue:{summary:"solid"},description:"The fill type of the input",table:{category:table.b.PROPERTIES}},shape:{control:"select",options:["round","undefined"],defaultValue:{summary:"round"},description:'The shape of the input, if "round" it will be rounded, if "undefined" it will be square',table:{category:table.b.PROPERTIES}},rows:{control:"number",defaultValue:{summary:4},description:"The number of rows to display by default.",table:{category:table.b.PROPERTIES}},wrap:{control:"select",options:["hard","soft","off"],description:"How the text in the textarea is wrapped.",table:{category:table.b.PROPERTIES}},mode:{control:"select",options:["md","ios"],defaultValue:{summary:"md"},description:"The mode determines which platform styles to use.",table:{category:table.b.PROPERTIES}},autoGrow:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the element height will increase based on the value.",table:{category:table.b.PROPERTIES}},disabled:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the user cannot interact with the input.",table:{category:table.b.PROPERTIES}},readonly:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the user cannot modify the value.",table:{category:table.b.PROPERTIES}},icon:{control:"text",description:"The icon of the input",table:{category:table.b.PROPERTIES}},value:{control:"text",description:"The value of native input",table:{category:table.b.PROPERTIES}},helperText:{control:"text",description:"The helper text of the input",table:{category:table.b.PROPERTIES}},label:{description:"The label of the input",table:{category:table.b.PROPERTIES}},placeholder:{description:"The placeholder of the input",table:{category:table.b.PROPERTIES}},errorText:{description:"The error text of the input",table:{category:table.b.PROPERTIES}},hasError:{description:"If `true`, the input will be in an error state.",table:{category:table.b.PROPERTIES}},cols:{description:"The number of cols to display by default.",table:{category:table.b.PROPERTIES}},maxLength:{description:"The maximum value length for an input.",table:{category:table.b.PROPERTIES}},minLength:{description:"The minimum value length for an input.",table:{category:table.b.PROPERTIES}},counter:{description:"If `true`, a counter will be shown counting the number of characters.",table:{category:table.b.PROPERTIES}},counterFormatter:{description:"Function that accepts a current value of the input, and returns the string to be displayed in the input counter. Note that the returned string must contain the current value within it somewhere, otherwise the counter will not update as the user types. `(inputLength: number, maxLength: number) => string | undefined`",table:{category:table.b.PROPERTIES}},clearOnEdit:{description:'If `true`, the value will be cleared after focus upon edit. Defaults to true when type is "password", false for all other types.',table:{category:table.b.PROPERTIES}},enterKeyHint:{defaultValue:{summary:"enter"},description:'A hint to the browser for which enter key to display. Possible values: "enter", "done", "go", "next", "previous", "search", and "send".',table:{category:table.b.PROPERTIES}},required:{description:"If `true`, the input is required.",table:{category:table.b.PROPERTIES}},inputmode:{description:"A hint to the browser for which keyboard to display. Accepts the following values: - `none` - `text` - `tel` - `url` - `email` - `numeric` - `decimal` - `search`",table:{category:table.b.PROPERTIES}},debounce:{description:"The amount of time, in milliseconds, to wait to trigger the `atomChange` event after each keystroke.",table:{category:table.b.PROPERTIES}},atomChange:{action:"atomChange",description:'Depending on the way the users interacts with the element, the `atomChange` event fires at a different moment: - When the user commits the change explicitly (e.g. by selecting a date from a date picker for `<atom-input type="date">`, pressing the "Enter" key, etc.). - When the element loses focus after its value has changed: for elements where the users interaction is typing.',table:{category:table.b.EVENTS}},atomInput:{action:"atomInput",description:"Event fires when the value of an `<atom-input>` element has been changed. For elements that accept text input (`type=text`, `type=tel`, etc.), the interface is InputEvent; for others, the interface is Event. If the input is cleared on edit, the type is null.",table:{category:table.b.EVENTS}},atomFocus:{action:"atomFocus",description:"Emitted when the input has focus.",table:{category:table.b.EVENTS}},atomBlur:{action:"atomBlur",description:"Emitted when the input has blur.",table:{category:table.b.EVENTS}},setFocus:{description:"`setFocus()` sets focus on the specified `atom-input`. Use this method instead of the global `input.focus()`.",table:{category:table.b.METHODS}},getInputElement:{description:"`getInputElement()` returns the native `<input>` element used under the hood. A common use-case is to access the native input when using a `HTMLInputElement` object is necessary.",table:{category:table.b.METHODS}}}}},createTextarea=args=>react.createElement(esm.in,{label:"Example Textarea",placeholder:"Placeholder Text",color:args.color,disabled:args.disabled,fill:args.fill,labelPlacement:args.labelPlacement,mode:args.mode,readonly:args.readonly,autoGrow:args.autoGrow,shape:args.shape,rows:args.rows,cols:args.cols,wrap:args.wrap,value:args.value,icon:args.icon,helperText:args.helperText}),Default={render:args=>createTextarea(args),args:{...TextareaComponentArgs}},Disabled={render:args=>createTextarea(args),args:{...TextareaComponentArgs,disabled:!0}},TextareaIcon={render:args=>createTextarea(args),args:{...TextareaComponentArgs,icon:"account-multiple"}},HelperText={render:args=>createTextarea(args),args:{...TextareaComponentArgs,helperText:"This is a helper text example"}},ErrorState={render:()=>{const[hasError,setHasError]=react.useState(!1);return react.createElement(esm.in,{label:"Email",placeholder:"Enter a valid email",helperText:"Example: atomium@juntossomosmais.com.br",errorText:"Invalid email",onAtomChange:ev=>(value=>{if(setHasError(!1),""!==value)return value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)?setHasError(!1):setHasError(!0)})(ev.target.value),hasError,value:"invalid-email"})}},WithCounter={render:()=>react.createElement(esm.in,{label:"Counter example",placeholder:"Start typing...",counter:!0,maxlength:300,counterFormatter:(inputLength,maxLength)=>`${inputLength}/300`})},__namedExportsOrder=["Default","Disabled","TextareaIcon","HelperText","ErrorState","WithCounter"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => createTextarea(args),\n  args: {\n    ...TextareaComponentArgs\n  }\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: args => createTextarea(args),\n  args: {\n    ...TextareaComponentArgs,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},TextareaIcon.parameters={...TextareaIcon.parameters,docs:{...TextareaIcon.parameters?.docs,source:{originalSource:"{\n  render: args => createTextarea(args),\n  args: {\n    ...TextareaComponentArgs,\n    icon: 'account-multiple'\n  }\n}",...TextareaIcon.parameters?.docs?.source}}},HelperText.parameters={...HelperText.parameters,docs:{...HelperText.parameters?.docs,source:{originalSource:"{\n  render: args => createTextarea(args),\n  args: {\n    ...TextareaComponentArgs,\n    helperText: 'This is a helper text example'\n  }\n}",...HelperText.parameters?.docs?.source}}},ErrorState.parameters={...ErrorState.parameters,docs:{...ErrorState.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const [hasError, setHasError] = React.useState(false);\n    const validateEmail = email => {\n      return email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/);\n    };\n    const validate = value => {\n      setHasError(false);\n      if (value === '') return;\n      return validateEmail(value) ? setHasError(false) : setHasError(true);\n    };\n    return <AtomTextarea label='Email' placeholder='Enter a valid email' helperText='Example: atomium@juntossomosmais.com.br' errorText='Invalid email' onAtomChange={ev => validate(ev.target.value)} hasError={hasError} value='invalid-email' />;\n  }\n}",...ErrorState.parameters?.docs?.source}}},WithCounter.parameters={...WithCounter.parameters,docs:{...WithCounter.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    return <AtomTextarea label='Counter example' placeholder='Start typing...' counter={true} maxlength={300} counterFormatter={(inputLength: number, maxLength: number) => `${inputLength}/300`} />;\n  }\n}",...WithCounter.parameters?.docs?.source}}}},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category.SLOTS="Slots",Category}({})}}]);
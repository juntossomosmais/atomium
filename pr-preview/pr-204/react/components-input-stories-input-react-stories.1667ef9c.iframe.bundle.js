"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[2560],{"../../node_modules/@storybook/addon-actions/dist/decorator.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>withActions});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs"),actions=(...args)=>{let options=chunk_AY7I2SME.vc,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...chunk_AY7I2SME.vc,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=(0,chunk_AY7I2SME.aD)(namesObject[name],options)})),actionsObject},chunk_VWCVBQ22=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs"),dist=__webpack_require__("../../node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),{document:decorator_document,Element}=dist.global,delegateEventSplitter=/^(\S+)\s*(.*)$/,matchesMethod=null!=Element&&!Element.prototype.matches?"msMatchesSelector":"matches",hasMatchInAncestry=(element,selector)=>{if(element[matchesMethod](selector))return!0;let parent=element.parentElement;return!!parent&&hasMatchInAncestry(parent,selector)},applyEventHandlers=(actionsFn,...handles)=>{let root=decorator_document&&decorator_document.getElementById("storybook-root");(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{if(null!=root){let handlers=((actionsFn,...handles)=>{let actionsObject=actionsFn(...handles);return Object.entries(actionsObject).map((([key,action])=>{let[_,eventName,selector]=key.match(delegateEventSplitter)||[];return{eventName,handler:e=>{(!selector||hasMatchInAncestry(e.target,selector))&&action(e)}}}))})(actionsFn,...handles);return handlers.forEach((({eventName,handler})=>root.addEventListener(eventName,handler))),()=>handlers.forEach((({eventName,handler})=>root.removeEventListener(eventName,handler)))}}),[root,actionsFn,handles])},withActions=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withActions",parameterName:chunk_VWCVBQ22.Sz,skipIfNoParametersOrOptions:!0,wrapper:(getStory,context,{parameters})=>(parameters?.handles&&applyEventHandlers(actions,...parameters.handles),getStory(context))})},"../../packages/core/src/components/input/stories/input.react.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,ErrorState:()=>ErrorState,HelperText:()=>HelperText,InputIcon:()=>InputIcon,Password:()=>Password,__namedExportsOrder:()=>__namedExportsOrder,default:()=>input_react_stories});var react=__webpack_require__("../../node_modules/react/index.js"),esm=__webpack_require__("../../packages/core/react/dist/esm/index.js"),decorator=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/decorator.mjs"),table=__webpack_require__("../../utils/storybook/enums/table.ts");const InputStoryArgs={parameters:{docs:{description:{component:"Wrapper of Ionic Input component. Read the [Ionic documentation](https://ionicframework.com/docs/api/input) for more information about the available properties and possibilities."}},actions:{handles:["atomChange","atomFocus","atomBlur","atomInput"]}},decorators:[decorator.R],argTypes:{labelPlacement:{control:"select",options:["floating","stacked"],defaultValue:{summary:"floating"},description:"To control how the label is placed relative to the control",table:{category:table.W.PROPERTIES}},color:{control:"select",options:["primary","secondary","danger"],defaultValue:{summary:"secondary"},description:"The color to use from your application's color palette.",table:{category:table.W.PROPERTIES}},fill:{control:"select",options:["outline","solid"],defaultValue:{summary:"solid"},description:"The fill type of the input",table:{category:table.W.PROPERTIES}},shape:{control:"select",options:["round","undefined"],defaultValue:{summary:"round"},description:'The shape of the input, if "round" it will be rounded, if "undefined" it will be square',table:{category:table.W.PROPERTIES}},mode:{control:"select",options:["md","ios"],defaultValue:{summary:"md"},description:"The mode determines which platform styles to use.",table:{category:table.W.PROPERTIES}},type:{control:"select",options:["date","datetime-local","email","month","number","password","search","tel","text","time","url","week"],defaultValue:{summary:"text"},description:"The type of control to display.",table:{category:table.W.PROPERTIES}},disabled:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the user cannot interact with the input.",table:{category:table.W.PROPERTIES}},readonly:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the user cannot modify the value.",table:{category:table.W.PROPERTIES}},clearInput:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.",table:{category:table.W.PROPERTIES}},passwordToggle:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, a password toggle icon will appear in the input. Clicking it will reveal the password.",table:{category:table.W.PROPERTIES}},icon:{control:"text",description:"The icon of the input",table:{category:table.W.PROPERTIES}},value:{control:"text",description:"The value of native input",table:{category:table.W.PROPERTIES}},helperText:{control:"text",description:"The helper text of the input",table:{category:table.W.PROPERTIES}},label:{description:"The label of the input",table:{category:table.W.PROPERTIES}},placeholder:{description:"The placeholder of the input",table:{category:table.W.PROPERTIES}},errorText:{description:"The error text of the input",table:{category:table.W.PROPERTIES}},hasError:{description:"If `true`, the input will be in an error state.",table:{category:table.W.PROPERTIES}},multiple:{description:'If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to "email", otherwise it is ignored.',table:{category:table.W.PROPERTIES}},max:{description:"The maximum value, which must not be less than its minimum (min attribute) value.",table:{category:table.W.PROPERTIES}},min:{description:"The minimum value, which must not be greater than its maximum (max attribute) value.",table:{category:table.W.PROPERTIES}},maxLength:{description:"The maximum value length for an input.",table:{category:table.W.PROPERTIES}},minLength:{description:"The minimum value length for an input.",table:{category:table.W.PROPERTIES}},counter:{description:"If `true`, a counter will be shown counting the number of characters.",table:{category:table.W.PROPERTIES}},counterFormatter:{description:"Function that accepts a current value of the input, and returns the string to be displayed in the input counter. Note that the returned string must contain the current value within it somewhere, otherwise the counter will not update as the user types. `(inputLength: number, maxLength: number) => string | undefined`",table:{category:table.W.PROPERTIES}},clearOnEdit:{description:'If `true`, the value will be cleared after focus upon edit. Defaults to true when type is "password", false for all other types.',table:{category:table.W.PROPERTIES}},enterKeyHint:{defaultValue:{summary:"enter"},description:'A hint to the browser for which enter key to display. Possible values: "enter", "done", "go", "next", "previous", "search", and "send".',table:{category:table.W.PROPERTIES}},pattern:{description:'A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is "text", "search", "tel", "url", "email", "date", or "password", otherwise it is ignored. When the type attribute is "date", pattern will only be used in browsers that do not support the "date" input type natively.',table:{category:table.W.PROPERTIES}},required:{description:"If `true`, the input is required.",table:{category:table.W.PROPERTIES}},inputmode:{description:"A hint to the browser for which keyboard to display. Accepts the following values: - `none` - `text` - `tel` - `url` - `email` - `numeric` - `decimal` - `search`",table:{category:table.W.PROPERTIES}},debounce:{description:"The amount of time, in milliseconds, to wait to trigger the `atomChange` event after each keystroke.",table:{category:table.W.PROPERTIES}},atomChange:{action:"atomChange",description:'Depending on the way the users interacts with the element, the `atomChange` event fires at a different moment: - When the user commits the change explicitly (e.g. by selecting a date from a date picker for `<atom-input type="date">`, pressing the "Enter" key, etc.). - When the element loses focus after its value has changed: for elements where the users interaction is typing.',table:{category:table.W.EVENTS}},atomInput:{action:"atomInput",description:"Event fires when the value of an `<atom-input>` element has been changed. For elements that accept text input (`type=text`, `type=tel`, etc.), the interface is InputEvent; for others, the interface is Event. If the input is cleared on edit, the type is null.",table:{category:table.W.EVENTS}},atomFocus:{action:"atomFocus",description:"Emitted when the input has focus.",table:{category:table.W.EVENTS}},atomBlur:{action:"atomBlur",description:"Emitted when the input has blur.",table:{category:table.W.EVENTS}},setFocus:{description:"`setFocus()` sets focus on the specified `atom-input`. Use this method instead of the global `input.focus()`.",table:{category:table.W.METHODS}},getInputElement:{description:"`getInputElement()` returns the native `<input>` element used under the hood. A common use-case is to access the native input when using a `HTMLInputElement` object is necessary.",table:{category:table.W.METHODS}}}},InputComponentArgs={color:"secondary",labelPlacement:"floating",fill:"solid",shape:"round",mode:"md",type:"text",disabled:!1,clearInput:!1,readonly:!1,passwordToggle:!1};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const input_react_stories={title:"Components/Input",...InputStoryArgs},createInput=args=>(0,jsx_runtime.jsx)(esm.dU,{label:"Label example",placeholder:"Placeholder Text",clearInput:args.clearInput,color:args.color,disabled:args.disabled,fill:args.fill,labelPlacement:args.labelPlacement,mode:args.mode,readonly:args.readonly,shape:args.shape,type:args.type,passwordToggle:args.passwordToggle,value:args.value,icon:args.icon,helperText:args.helperText});createInput.displayName="createInput";const Default={render:args=>createInput(args),args:{...InputComponentArgs}},Password={render:args=>createInput(args),args:{...InputComponentArgs,type:"password",passwordToggle:!0}},Disabled={render:args=>createInput(args),args:{...InputComponentArgs,disabled:!0}},InputIcon={render:args=>createInput(args),args:{...InputComponentArgs,icon:"magnify"}},HelperText={render:args=>createInput(args),args:{...InputComponentArgs,helperText:"This is a helper text example"}},ErrorState={render:()=>{const[hasError,setHasError]=react.useState(!1);return(0,jsx_runtime.jsx)(esm.dU,{label:"Email",placeholder:"Enter a valid email",helperText:"Example: atomium@juntossomosmais.com.br",errorText:"Invalid email",type:"email",onAtomChange:ev=>(value=>{if(setHasError(!1),""!==value)return value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)?setHasError(!1):setHasError(!0)})(ev.target.value),hasError})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => createInput(args),\n  args: {\n    ...InputComponentArgs\n  }\n}",...Default.parameters?.docs?.source}}},Password.parameters={...Password.parameters,docs:{...Password.parameters?.docs,source:{originalSource:"{\n  render: args => createInput(args),\n  args: {\n    ...InputComponentArgs,\n    type: 'password',\n    passwordToggle: true\n  }\n}",...Password.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: args => createInput(args),\n  args: {\n    ...InputComponentArgs,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},InputIcon.parameters={...InputIcon.parameters,docs:{...InputIcon.parameters?.docs,source:{originalSource:"{\n  render: args => createInput(args),\n  args: {\n    ...InputComponentArgs,\n    icon: 'magnify'\n  }\n}",...InputIcon.parameters?.docs?.source}}},HelperText.parameters={...HelperText.parameters,docs:{...HelperText.parameters?.docs,source:{originalSource:"{\n  render: args => createInput(args),\n  args: {\n    ...InputComponentArgs,\n    helperText: 'This is a helper text example'\n  }\n}",...HelperText.parameters?.docs?.source}}},ErrorState.parameters={...ErrorState.parameters,docs:{...ErrorState.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [hasError, setHasError] = React.useState(false);\n    const validateEmail = email => {\n      return email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/);\n    };\n    const validate = value => {\n      setHasError(false);\n      if (value === \'\') return;\n      return validateEmail(value) ? setHasError(false) : setHasError(true);\n    };\n    return <AtomInput label="Email" placeholder="Enter a valid email" helperText="Example: atomium@juntossomosmais.com.br" errorText="Invalid email" type="email" onAtomChange={ev => validate(ev.target.value)} hasError={hasError} />;\n  }\n}',...ErrorState.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Password","Disabled","InputIcon","HelperText","ErrorState"]},"../../packages/core/react/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eI:()=>AtomAlert,lm:()=>AtomBreadcrumb,rl:()=>AtomButton,IE:()=>AtomChip,vr:()=>AtomCol,pV:()=>AtomGrid,HX:()=>AtomIcon,dU:()=>AtomInput,Vm:()=>AtomSelect,Li:()=>AtomTextarea});var react=__webpack_require__("../../node_modules/react/index.js");const camelToDashCase=str=>str.replace(/([A-Z])/g,(m=>`-${m[0].toLowerCase()}`)),getClassName=(classList,newProps,oldProps)=>{const newClassProp=newProps.className||newProps.class,oldClassProp=oldProps.className||oldProps.class,currentClasses=arrayToMap(classList),incomingPropClasses=arrayToMap(newClassProp?newClassProp.split(" "):[]),oldPropClasses=arrayToMap(oldClassProp?oldClassProp.split(" "):[]),finalClassNames=[];return currentClasses.forEach((currentClass=>{incomingPropClasses.has(currentClass)?(finalClassNames.push(currentClass),incomingPropClasses.delete(currentClass)):oldPropClasses.has(currentClass)||finalClassNames.push(currentClass)})),incomingPropClasses.forEach((s=>finalClassNames.push(s))),finalClassNames.join(" ")},isCoveredByReact=eventNameSuffix=>{if("undefined"==typeof document)return!0;{const eventName="on"+(eventNameSuffix=>"doubleclick"===eventNameSuffix?"dblclick":eventNameSuffix)(eventNameSuffix);let isSupported=eventName in document;if(!isSupported){const element=document.createElement("div");element.setAttribute(eventName,"return;"),isSupported="function"==typeof element[eventName]}return isSupported}},syncEvent=(node,eventName,newEventHandler)=>{const eventStore=node.__events||(node.__events={}),oldEventHandler=eventStore[eventName];oldEventHandler&&node.removeEventListener(eventName,oldEventHandler),node.addEventListener(eventName,eventStore[eventName]=function handler(e){newEventHandler&&newEventHandler.call(this,e)})},arrayToMap=arr=>{const map=new Map;return arr.forEach((s=>map.set(s,s))),map},mergeRefs=(...refs)=>value=>{refs.forEach((ref=>{((ref,value)=>{"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)})(ref,value)}))};var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const createReactComponent=(tagName,ReactComponentContext,manipulatePropsFunction,defineCustomElement)=>{void 0!==defineCustomElement&&defineCustomElement();const displayName=tagName.toLowerCase().split("-").map((segment=>segment.charAt(0).toUpperCase()+segment.slice(1))).join("");const ReactComponent=class extends react.Component{constructor(props){super(props),this.setComponentElRef=element=>{this.componentEl=element}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(prevProps){((node,newProps,oldProps={})=>{if(node instanceof Element){const className=getClassName(node.classList,newProps,oldProps);""!==className&&(node.className=className),Object.keys(newProps).forEach((name=>{if("children"!==name&&"style"!==name&&"ref"!==name&&"class"!==name&&"className"!==name&&"forwardedRef"!==name)if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){const eventName=name.substring(2),eventNameLc=eventName[0].toLowerCase()+eventName.substring(1);isCoveredByReact(eventNameLc)||syncEvent(node,eventNameLc,newProps[name])}else{node[name]=newProps[name];const propType=typeof newProps[name];"boolean"===propType?!0===newProps[name]?node.setAttribute(camelToDashCase(name),""):node.removeAttribute(camelToDashCase(name)):"string"===propType&&node.setAttribute(camelToDashCase(name),newProps[name])}}))}})(this.componentEl,this.props,prevProps)}render(){const _a=this.props,{children,forwardedRef,style,className,ref}=_a,cProps=__rest(_a,["children","forwardedRef","style","className","ref"]);let propsToPass=Object.keys(cProps).reduce(((acc,name)=>{const value=cProps[name];if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){const eventName=name.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(eventName)&&(acc[name]=value)}else{const type=typeof value;"string"!==type&&"boolean"!==type&&"number"!==type||(acc[camelToDashCase(name)]=value)}return acc}),{});manipulatePropsFunction&&(propsToPass=manipulatePropsFunction(this.props,propsToPass));const newProps=Object.assign(Object.assign({},propsToPass),{ref:mergeRefs(forwardedRef,this.setComponentElRef),style});return(0,react.createElement)(tagName,newProps,children)}static get displayName(){return displayName}};return ReactComponentContext&&(ReactComponent.contextType=ReactComponentContext),((ReactComponent,displayName)=>{const forwardRef=(props,ref)=>react.createElement(ReactComponent,Object.assign({},props,{forwardedRef:ref}));return forwardRef.displayName=displayName,react.forwardRef(forwardRef)})(ReactComponent,displayName)};__webpack_require__("../../node_modules/react-dom/index.js");var loader=__webpack_require__("../../packages/core/loader/index.js");(0,loader.mP)().then((()=>(0,loader.q4)()));const AtomAlert=createReactComponent("atom-alert"),AtomBreadcrumb=createReactComponent("atom-breadcrumb"),AtomButton=createReactComponent("atom-button"),AtomChip=createReactComponent("atom-chip"),AtomCol=createReactComponent("atom-col"),AtomGrid=createReactComponent("atom-grid"),AtomIcon=createReactComponent("atom-icon"),AtomInput=createReactComponent("atom-input"),AtomSelect=createReactComponent("atom-select"),AtomTextarea=createReactComponent("atom-textarea")},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category.SLOTS="Slots",Category}({})}}]);
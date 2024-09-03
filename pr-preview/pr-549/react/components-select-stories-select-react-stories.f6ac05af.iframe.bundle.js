"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[3499],{"../../node_modules/@storybook/addon-actions/dist/decorator.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>withActions});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("../../node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors._U({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}var actions=(...args)=>{let options=config,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...config,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=action(namesObject[name],options)})),actionsObject},{document:decorator_document,Element}=external_STORYBOOK_MODULE_GLOBAL_.global,delegateEventSplitter=/^(\S+)\s*(.*)$/,matchesMethod=null!=Element&&!Element.prototype.matches?"msMatchesSelector":"matches",hasMatchInAncestry=(element,selector)=>{if(element[matchesMethod](selector))return!0;let parent=element.parentElement;return!!parent&&hasMatchInAncestry(parent,selector)},applyEventHandlers=(actionsFn,...handles)=>{let root=decorator_document&&decorator_document.getElementById("storybook-root");(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{if(null!=root){let handlers=((actionsFn,...handles)=>{let actionsObject=actionsFn(...handles);return Object.entries(actionsObject).map((([key,action])=>{let[_,eventName,selector]=key.match(delegateEventSplitter)||[];return{eventName,handler:e=>{(!selector||hasMatchInAncestry(e.target,selector))&&action(e)}}}))})(actionsFn,...handles);return handlers.forEach((({eventName,handler})=>root.addEventListener(eventName,handler))),()=>handlers.forEach((({eventName,handler})=>root.removeEventListener(eventName,handler)))}}),[root,actionsFn,handles])},withActions=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withActions",parameterName:"actions",skipIfNoParametersOrOptions:!0,wrapper:(getStory,context,{parameters})=>(parameters?.handles&&applyEventHandlers(actions,...parameters.handles),getStory(context))})},"../../packages/core/src/components/select/stories/select.react.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,ErrorText:()=>ErrorText,HelperText:()=>HelperText,Multiple:()=>Multiple,SelectIcon:()=>SelectIcon,WhitTag:()=>WhitTag,__namedExportsOrder:()=>__namedExportsOrder,default:()=>select_react_stories});var esm=__webpack_require__("../../packages/core/react/dist/esm/index.js"),table=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../utils/storybook/enums/table.ts"));const SelectStoryArgs={parameters:{docs:{description:{component:"Wrapper of Ionic Select component. Read the [Ionic documentation](https://ionicframework.com/docs/api/select) for more information about the available properties and possibilities."}},actions:{handles:["atomChange","atomFocus","atomBlur","atomCancel","atomDismiss","atom-change","atom-focus","atom-blur","atom-cancel","atom-dismiss"]}},decorators:[__webpack_require__("../../node_modules/@storybook/addon-actions/dist/decorator.mjs").w],argTypes:{label:{control:"text",description:"The label of the select",table:{category:table.b.PROPERTIES}},placeholder:{control:"text",description:"The placeholder of the select",table:{category:table.b.PROPERTIES}},color:{control:"select",options:["primary","secondary","danger"],defaultValue:{summary:"secondary"},description:"The color to use from your application's color palette.",table:{category:table.b.PROPERTIES}},multiple:{control:"boolean",defaultValue:{summary:!1},description:"If true, the user can select multiple values at once.",table:{category:table.b.PROPERTIES}},disabled:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the user cannot interact with the select.",table:{category:table.b.PROPERTIES}},readonly:{control:"boolean",defaultValue:{summary:"false"},description:"If `true`, the user cannot modify the value.",table:{category:table.b.PROPERTIES}},icon:{control:"text",description:"The icon of the select",table:{category:table.b.PROPERTIES}},helperText:{control:"text",description:"The helper text of the select",table:{category:table.b.PROPERTIES}},value:{control:"text",description:"The value of native select",table:{category:table.b.PROPERTIES}},errorText:{description:"The error text of the select",table:{category:table.b.PROPERTIES}},fill:{control:"select",options:["outline","solid"],defaultValue:{summary:"solid"},description:"The fill type of the select",table:{category:table.b.PROPERTIES}},mode:{control:"select",options:["md","ios"],defaultValue:{summary:"md"},description:"The mode determines which platform styles to use.",table:{category:table.b.PROPERTIES}},atomChange:{action:"atomChange",description:"Emitted when the value has changed. This is the main event to listen to if you are doing any manual form validation.",table:{category:table.b.EVENTS}},atomFocus:{action:"atomFocus",description:"Emitted when the select has focus.",table:{category:table.b.EVENTS}},atomBlur:{action:"atomBlur",description:"Emitted when the select has blur.",table:{category:table.b.EVENTS}},atomCancel:{action:"atomCancel",description:'Emitted when the select has cancel. Only applies when the select interface is "action-sheet".',table:{category:table.b.EVENTS}},atomDismiss:{action:"atomDismiss",description:'Emitted when the select has dismiss. Only applies when the select interface is "action-sheet".',table:{category:table.b.EVENTS}}}},SelectComponentArgs={color:"secondary",disabled:!1,readonly:!1,multiple:!1,label:"Select example",placeholder:"Select an option",mode:"md",fill:"solid",value:"",icon:"",helperText:"",errorText:""};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const select_react_stories={title:"Components/Select",component:esm.Yv,...SelectStoryArgs},optionsDefault=[{id:"1",value:"Red",disabled:!1},{id:"2",value:"Green",disabled:!1},{id:"3",value:"Blue",disabled:!1},{id:"4",value:"nice_blue",disabled:!1,label:"Nice Blue"},{id:"5",value:"Disabled example",disabled:!0}],createSelect=(args,options=optionsDefault)=>(0,jsx_runtime.jsx)(esm.Yv,{placeholder:args.placeholder,color:args.color,fill:args.fill,disabled:args.disabled,readonly:args.readonly,multiple:args.multiple,label:args.label,"helper-text":args.helperText,"error-text":args.errorText,icon:args.icon,mode:args.mode,value:args.value,options});createSelect.displayName="createSelect";const Default={render:args=>createSelect(args),args:{...SelectComponentArgs}},Disabled={render:args=>createSelect(args),args:{...SelectComponentArgs,disabled:!0}},SelectIcon={render:args=>createSelect(args),args:{...SelectComponentArgs,icon:"account-multiple"}},HelperText={render:args=>createSelect(args),args:{...SelectComponentArgs,helperText:"Example of helper text"}},ErrorText={render:args=>createSelect(args),args:{...SelectComponentArgs,errorText:"Example of error text"}},Multiple={render:args=>createSelect(args),args:{...SelectComponentArgs,multiple:!0}},optionWhitTag=[...optionsDefault,{id:"3",value:"Nice Green",disabled:!1,tag:{color:"success",label:"New "}}],WhitTag={render:args=>createSelect(args,optionWhitTag),args:{...SelectComponentArgs}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => createSelect(args),\n  args: {\n    ...SelectComponentArgs\n  }\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: args => createSelect(args),\n  args: {\n    ...SelectComponentArgs,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},SelectIcon.parameters={...SelectIcon.parameters,docs:{...SelectIcon.parameters?.docs,source:{originalSource:"{\n  render: args => createSelect(args),\n  args: {\n    ...SelectComponentArgs,\n    icon: 'account-multiple'\n  }\n}",...SelectIcon.parameters?.docs?.source}}},HelperText.parameters={...HelperText.parameters,docs:{...HelperText.parameters?.docs,source:{originalSource:"{\n  render: args => createSelect(args),\n  args: {\n    ...SelectComponentArgs,\n    helperText: 'Example of helper text'\n  }\n}",...HelperText.parameters?.docs?.source}}},ErrorText.parameters={...ErrorText.parameters,docs:{...ErrorText.parameters?.docs,source:{originalSource:"{\n  render: args => createSelect(args),\n  args: {\n    ...SelectComponentArgs,\n    errorText: 'Example of error text'\n  }\n}",...ErrorText.parameters?.docs?.source}}},Multiple.parameters={...Multiple.parameters,docs:{...Multiple.parameters?.docs,source:{originalSource:"{\n  render: args => createSelect(args),\n  args: {\n    ...SelectComponentArgs,\n    multiple: true\n  }\n}",...Multiple.parameters?.docs?.source}}},WhitTag.parameters={...WhitTag.parameters,docs:{...WhitTag.parameters?.docs,source:{originalSource:"{\n  render: args => createSelect(args, optionWhitTag),\n  args: {\n    ...SelectComponentArgs\n  }\n}",...WhitTag.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled","SelectIcon","HelperText","ErrorText","Multiple","WhitTag"]},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category.SLOTS="Slots",Category}({})}}]);
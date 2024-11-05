"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[2085],{"../../node_modules/@storybook/addon-actions/dist/decorator.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>withActions});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("../../node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors._U({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}var actions=(...args)=>{let options=config,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...config,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=action(namesObject[name],options)})),actionsObject},{document:decorator_document,Element}=external_STORYBOOK_MODULE_GLOBAL_.global,delegateEventSplitter=/^(\S+)\s*(.*)$/,matchesMethod=null!=Element&&!Element.prototype.matches?"msMatchesSelector":"matches",hasMatchInAncestry=(element,selector)=>{if(element[matchesMethod](selector))return!0;let parent=element.parentElement;return!!parent&&hasMatchInAncestry(parent,selector)},applyEventHandlers=(actionsFn,...handles)=>{let root=decorator_document&&decorator_document.getElementById("storybook-root");(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{if(null!=root){let handlers=((actionsFn,...handles)=>{let actionsObject=actionsFn(...handles);return Object.entries(actionsObject).map((([key,action])=>{let[_,eventName,selector]=key.match(delegateEventSplitter)||[];return{eventName,handler:e=>{(!selector||hasMatchInAncestry(e.target,selector))&&action(e)}}}))})(actionsFn,...handles);return handlers.forEach((({eventName,handler})=>root.addEventListener(eventName,handler))),()=>handlers.forEach((({eventName,handler})=>root.removeEventListener(eventName,handler)))}}),[root,actionsFn,handles])},withActions=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withActions",parameterName:"actions",skipIfNoParametersOrOptions:!0,wrapper:(getStory,context,{parameters})=>(parameters?.handles&&applyEventHandlers(actions,...parameters.handles),getStory(context))})},"../../packages/core/src/components/tooltip/stories/tooltip.react.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Click:()=>Click,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>tooltip_react_stories});var esm=__webpack_require__("../../packages/core/react/dist/esm/index.js"),table=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../utils/storybook/enums/table.ts"));const TooltipStoryArgs={parameters:{actions:{handles:["atomOpen","atomClose"]},decorators:[__webpack_require__("../../node_modules/@storybook/addon-actions/dist/decorator.mjs").w],docs:{description:{component:"Tooltip is a small pop-up box that appears when a user moves a mouse over an element"}},layout:"centered"},argTypes:{placement:{control:"select",defaultValue:{summary:"top"},options:["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","left"],description:"Determines placement for tooltip",table:{category:table.b.PROPERTIES}},action:{control:"select",defaultValue:{summary:"hover"},options:["hover","click"],description:"Should use a `Click` trigger or `Hover` trigger",table:{category:table.b.PROPERTIES}},element:{control:"text",description:"Determines which element is responsible to open/close tooltip.",table:{category:table.b.PROPERTIES}},text:{control:"text",description:"Determines a text for tooltip.",table:{category:table.b.PROPERTIES}},atomOpen:{description:"Event emitted when hover element, but for mobile when click in element.",table:{category:table.b.EVENTS}},atomClose:{description:"Event emitted when the tooltip is closed.",table:{category:table.b.EVENTS}}}},TooltipComponentArgs={element:"atomium-element",placement:"top",text:"Tooltip",action:"hover"};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const tooltip_react_stories={title:"Components/Tooltip",...TooltipStoryArgs},createTooltip=(args,buttonText="Hover")=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(esm.I7,{fill:"solid",size:"large",id:args.element,"aria-describedby":"atom-tooltip",children:buttonText}),(0,jsx_runtime.jsx)(esm.lv,{id:"atom-tooltip",placement:args.placement,element:args.element,action:args.action,children:(0,jsx_runtime.jsx)("div",{children:args.text})})]}),Default={render:args=>createTooltip(args),args:{...TooltipComponentArgs}},Click={render:args=>createTooltip(args,"Click"),args:{...TooltipComponentArgs,element:"elementId",placement:"top",action:"click"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => createTooltip(args),\n  args: {\n    ...TooltipComponentArgs\n  }\n}",...Default.parameters?.docs?.source}}},Click.parameters={...Click.parameters,docs:{...Click.parameters?.docs,source:{originalSource:"{\n  render: args => createTooltip(args, 'Click'),\n  args: {\n    ...TooltipComponentArgs,\n    element: 'elementId',\n    placement: 'top',\n    action: 'click'\n  }\n}",...Click.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Click"]},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category.SLOTS="Slots",Category}({})}}]);
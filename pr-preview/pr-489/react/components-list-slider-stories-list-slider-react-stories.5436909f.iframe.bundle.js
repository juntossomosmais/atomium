"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[3909],{"../../node_modules/@storybook/addon-actions/dist/decorator.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>withActions});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("../../node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors._U({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}var actions=(...args)=>{let options=config,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...config,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=action(namesObject[name],options)})),actionsObject},{document:decorator_document,Element}=external_STORYBOOK_MODULE_GLOBAL_.global,delegateEventSplitter=/^(\S+)\s*(.*)$/,matchesMethod=null!=Element&&!Element.prototype.matches?"msMatchesSelector":"matches",hasMatchInAncestry=(element,selector)=>{if(element[matchesMethod](selector))return!0;let parent=element.parentElement;return!!parent&&hasMatchInAncestry(parent,selector)},applyEventHandlers=(actionsFn,...handles)=>{let root=decorator_document&&decorator_document.getElementById("storybook-root");(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{if(null!=root){let handlers=((actionsFn,...handles)=>{let actionsObject=actionsFn(...handles);return Object.entries(actionsObject).map((([key,action])=>{let[_,eventName,selector]=key.match(delegateEventSplitter)||[];return{eventName,handler:e=>{(!selector||hasMatchInAncestry(e.target,selector))&&action(e)}}}))})(actionsFn,...handles);return handlers.forEach((({eventName,handler})=>root.addEventListener(eventName,handler))),()=>handlers.forEach((({eventName,handler})=>root.removeEventListener(eventName,handler)))}}),[root,actionsFn,handles])},withActions=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withActions",parameterName:"actions",skipIfNoParametersOrOptions:!0,wrapper:(getStory,context,{parameters})=>(parameters?.handles&&applyEventHandlers(actions,...parameters.handles),getStory(context))})},"../../packages/core/src/components/list-slider/stories/list-slider.react.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Centralized:()=>Centralized,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>list_slider_react_stories});var esm=__webpack_require__("../../packages/core/react/dist/esm/index.js"),injectStylesIntoStyleTag=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),list_slider=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!../../packages/core/src/components/list-slider/stories/list-slider.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(list_slider.A,options);list_slider.A&&list_slider.A.locals&&list_slider.A.locals;var table=__webpack_require__("../../utils/storybook/enums/table.ts");const ListSliderStoryArgs={parameters:{docs:{description:{component:"List Slider is a component that displays a list of items in a horizontal slider."}},actions:{handles:["clickNext","clickPrev"]}},decorators:[__webpack_require__("../../node_modules/@storybook/addon-actions/dist/decorator.mjs").w],argTypes:{hasNavigation:{description:"If `true`, the carousel will have navigation buttons.",defaultValue:{summary:!0},table:{category:table.b.PROPERTIES}},centralized:{description:"If `true`, the items will be centralized in the slider when do not fit in the viewport.",defaultValue:{summary:!1},table:{category:table.b.PROPERTIES}},"--slider-height":{description:"The min-height of the slider.",defaultValue:{summary:"42px"},table:{category:table.b.CSS_CUSTOM_PROPERTIES}},"--slider-gap":{description:"Gap between each item in the slider.",defaultValue:{summary:"--spacing-base"},table:{category:table.b.CSS_CUSTOM_PROPERTIES}},"--button-navigation-size":{description:"The size of the navigation buttons.",defaultValue:{summary:"--spacing-xxxxlarge"},table:{category:table.b.CSS_CUSTOM_PROPERTIES}},clickNext:{action:"clickNext",description:"Emitted when the next button is clicked. The event detail is the click event.",table:{category:table.b.EVENTS}},clickPrev:{action:"clickPrev",description:"Emitted when the previous button is clicked. The event detail is the click event.",table:{category:table.b.EVENTS}}}};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const list_slider_react_stories={title:"Components/List Slider",components:[esm.L$,esm.ku],...ListSliderStoryArgs},createListSlider=()=>(0,jsx_runtime.jsxs)(esm.L$,{children:[(0,jsx_runtime.jsx)(esm.ku,{className:"slide",children:(0,jsx_runtime.jsx)("div",{children:"Example 1"})}),(0,jsx_runtime.jsx)(esm.ku,{className:"slide",children:(0,jsx_runtime.jsx)("div",{children:"Example 2"})}),(0,jsx_runtime.jsx)(esm.ku,{className:"slide",children:(0,jsx_runtime.jsx)("div",{children:"Example 3"})}),(0,jsx_runtime.jsx)(esm.ku,{className:"slide",children:(0,jsx_runtime.jsx)("div",{children:"Example 4"})}),(0,jsx_runtime.jsx)(esm.ku,{className:"slide",children:(0,jsx_runtime.jsx)("div",{children:"Example 5"})})]});createListSlider.displayName="createListSlider";const Default={render:()=>createListSlider()},Centralized={render:()=>(0,jsx_runtime.jsxs)(esm.L$,{centralized:!0,children:[(0,jsx_runtime.jsx)(esm.ku,{className:"slide",children:(0,jsx_runtime.jsx)("div",{children:"Example 1"})}),(0,jsx_runtime.jsx)(esm.ku,{className:"slide",children:(0,jsx_runtime.jsx)("div",{children:"Example 2"})})]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => createListSlider()\n}",...Default.parameters?.docs?.source}}},Centralized.parameters={...Centralized.parameters,docs:{...Centralized.parameters?.docs,source:{originalSource:"{\n  render: () => <AtomListSlider centralized={true}>\n      <AtomListSliderItem className='slide'>\n        <div>Example 1</div>\n      </AtomListSliderItem>\n      <AtomListSliderItem className='slide'>\n        <div>Example 2</div>\n      </AtomListSliderItem>\n    </AtomListSlider>\n}",...Centralized.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Centralized"]},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category.SLOTS="Slots",Category}({})},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!../../packages/core/src/components/list-slider/stories/list-slider.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".slide {\n  align-items: center;\n  background-color: var(--color-brand-primary-regular);\n  color: var(--color-neutral-white);\n  display: flex;\n  height: 300px;\n  justify-content: center;\n  min-width: 300px;\n}\n\n.slide:nth-child(1) {\n  background-color: var(--color-brand-primary-regular);\n}\n\n.slide:nth-child(2) {\n  background-color: var(--color-brand-secondary-regular);\n}\n\n.slide:nth-child(3) {\n  background-color: var(--color-contextual-success-regular);\n}\n\n.slide:nth-child(4) {\n  background-color: tomato;\n}\n\n.slide:nth-child(5) {\n  background-color: var(--color-contextual-warning-regular);\n}\n","",{version:3,sources:["webpack://./../../packages/core/src/components/list-slider/stories/list-slider.css"],names:[],mappings:"AAAA;EACE,mBAAmB;EACnB,oDAAoD;EACpD,iCAAiC;EACjC,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,oDAAoD;AACtD;;AAEA;EACE,sDAAsD;AACxD;;AAEA;EACE,yDAAyD;AAC3D;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,yDAAyD;AAC3D",sourcesContent:[".slide {\n  align-items: center;\n  background-color: var(--color-brand-primary-regular);\n  color: var(--color-neutral-white);\n  display: flex;\n  height: 300px;\n  justify-content: center;\n  min-width: 300px;\n}\n\n.slide:nth-child(1) {\n  background-color: var(--color-brand-primary-regular);\n}\n\n.slide:nth-child(2) {\n  background-color: var(--color-brand-secondary-regular);\n}\n\n.slide:nth-child(3) {\n  background-color: var(--color-contextual-success-regular);\n}\n\n.slide:nth-child(4) {\n  background-color: tomato;\n}\n\n.slide:nth-child(5) {\n  background-color: var(--color-contextual-warning-regular);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
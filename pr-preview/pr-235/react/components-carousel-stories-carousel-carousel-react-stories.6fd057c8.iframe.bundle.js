"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[7026],{"../../node_modules/@storybook/addon-actions/dist/decorator.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>withActions});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs"),actions=(...args)=>{let options=chunk_AY7I2SME.vc,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...chunk_AY7I2SME.vc,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=(0,chunk_AY7I2SME.aD)(namesObject[name],options)})),actionsObject},chunk_VWCVBQ22=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs"),dist=__webpack_require__("../../node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),{document:decorator_document,Element}=dist.global,delegateEventSplitter=/^(\S+)\s*(.*)$/,matchesMethod=null!=Element&&!Element.prototype.matches?"msMatchesSelector":"matches",hasMatchInAncestry=(element,selector)=>{if(element[matchesMethod](selector))return!0;let parent=element.parentElement;return!!parent&&hasMatchInAncestry(parent,selector)},applyEventHandlers=(actionsFn,...handles)=>{let root=decorator_document&&decorator_document.getElementById("storybook-root");(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{if(null!=root){let handlers=((actionsFn,...handles)=>{let actionsObject=actionsFn(...handles);return Object.entries(actionsObject).map((([key,action])=>{let[_,eventName,selector]=key.match(delegateEventSplitter)||[];return{eventName,handler:e=>{(!selector||hasMatchInAncestry(e.target,selector))&&action(e)}}}))})(actionsFn,...handles);return handlers.forEach((({eventName,handler})=>root.addEventListener(eventName,handler))),()=>handlers.forEach((({eventName,handler})=>root.removeEventListener(eventName,handler)))}}),[root,actionsFn,handles])},withActions=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withActions",parameterName:chunk_VWCVBQ22.Sz,skipIfNoParametersOrOptions:!0,wrapper:(getStory,context,{parameters})=>(parameters?.handles&&applyEventHandlers(actions,...parameters.handles),getStory(context))})},"../../packages/core/src/components/carousel/stories/carousel/carousel.react.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DisabledPagination:()=>DisabledPagination,LoopAndAutoplay:()=>LoopAndAutoplay,PaginationType:()=>PaginationType,__namedExportsOrder:()=>__namedExportsOrder,default:()=>carousel_react_stories});__webpack_require__("../../node_modules/react/index.js");var decorator=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/decorator.mjs"),table=__webpack_require__("../../utils/storybook/enums/table.ts");const CarouselStoryArgs={decorators:[decorator.R],parameters:{docs:{description:{component:"Wrapper of Swiper Element, simplified and with UI to match our Style Guide. Read the [Swiper documentation](https://swiperjs.com/element) for any issue or for more information."}},actions:{handles:["atomClickPrev","atomClickNext","atomChange"]}},argTypes:{autoplay:{description:"Set to `true` to enable carousel autoplay",defaultValue:{summary:!1},table:{category:table.W.PROPERTIES}},autoplayDelay:{description:"Delay between transitions (in ms)",defaultValue:{summary:0},table:{category:table.W.PROPERTIES}},freeMode:{description:"Set to `true` to enable free mode functionality",defaultValue:{summary:!1},table:{category:table.W.PROPERTIES}},loop:{description:" Set to `true` to enable continuous loop mode",defaultValue:{summary:!1},table:{category:table.W.PROPERTIES}},navigation:{description:"If `true`, enable pagination.",defaultValue:{summary:!0},table:{category:table.W.PROPERTIES}},pagination:{description:"If `true`, enable pagination.",defaultValue:{summary:!0},table:{category:table.W.PROPERTIES}},paginationClickable:{description:"If `true` then clicking on pagination button will cause transition to appropriate slide. Only for bullets pagination type.",defaultValue:{summary:!1},table:{category:table.W.PROPERTIES}},paginationType:{options:["bullets","fraction","progressbar","custom"],description:" String with type of pagination. Types: `bullets`, `fraction`, `progressbar` or `custom`.",defaultValue:{summary:"bullets"},table:{category:table.W.PROPERTIES}},slidesPerGroup:{description:"Set numbers of slides to define and enable group sliding. Useful to use with slidesPerView > 1",defaultValue:{summary:1},table:{category:table.W.PROPERTIES}},slidesPerView:{description:"Number of slides per view (slides visible at the same time on slider's container).",defaultValue:{summary:1},table:{category:table.W.PROPERTIES}},spaceBetween:{description:"Distance between slides in px.",defaultValue:{summary:0},table:{category:table.W.PROPERTIES}},speed:{description:"Duration of transition between slides (in ms)",defaultValue:{summary:300},table:{category:table.W.PROPERTIES}},atomChange:{action:"atomChange",description:"Emitted when the visible item changes.",table:{category:table.W.EVENTS}},atomClickPrev:{action:"atomClickPrev",description:"Emitted when clicked on the left navigation handler",table:{category:table.W.EVENTS}},atomClickNext:{action:"atomClickNext",description:"Emitted when clicked on the right navigation handler",table:{category:table.W.EVENTS}}}};var esm=__webpack_require__("../../packages/core/react/dist/esm/index.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),style=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../../packages/core/src/components/carousel/stories/carousel/style.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(style.Z,options);style.Z&&style.Z.locals&&style.Z.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const carousel_react_stories={title:"Components/Carousel",...CarouselStoryArgs},createComponent=(args,itemClass)=>(0,jsx_runtime.jsxs)(esm.Du,{...args,children:[(0,jsx_runtime.jsx)(esm.X7,{children:(0,jsx_runtime.jsx)("div",{className:itemClass,children:"Slide 1"})}),(0,jsx_runtime.jsx)(esm.X7,{children:(0,jsx_runtime.jsx)("div",{className:itemClass,children:"Slide 2"})}),(0,jsx_runtime.jsx)(esm.X7,{children:(0,jsx_runtime.jsx)("div",{className:itemClass,children:"Slide 3"})}),(0,jsx_runtime.jsx)(esm.X7,{children:(0,jsx_runtime.jsx)("div",{className:itemClass,children:"Slide 4"})}),(0,jsx_runtime.jsx)(esm.X7,{children:(0,jsx_runtime.jsx)("div",{className:itemClass,children:"Slide 5"})}),(0,jsx_runtime.jsx)(esm.X7,{children:(0,jsx_runtime.jsx)("div",{className:itemClass,children:"Slide 6"})}),(0,jsx_runtime.jsx)(esm.X7,{children:(0,jsx_runtime.jsx)("div",{className:itemClass,children:"Slide 7"})}),(0,jsx_runtime.jsx)(esm.X7,{children:(0,jsx_runtime.jsx)("div",{className:itemClass,children:"Slide 8"})}),(0,jsx_runtime.jsx)(esm.X7,{lazy:!0,children:(0,jsx_runtime.jsx)("div",{className:itemClass,children:(0,jsx_runtime.jsx)("img",{loading:"lazy",width:"100%",src:"https://user-images.githubusercontent.com/3603793/257943112-fb180815-7bd7-45f7-ad14-bd1677079931.png"})})})]});createComponent.displayName="createComponent";const Default={render:()=>createComponent({pagination:!0,paginationClickable:!0,navigation:!0,spaceBetween:40,slidesPerView:3},"item-default")},DisabledPagination={render:()=>createComponent({pagination:!1,slidesPerView:3,spaceBetween:40},"item-default")},LoopAndAutoplay={render:()=>createComponent({pagination:!1,navigation:!1,loop:!0,autoplay:!0,speed:100},"item-loop")},PaginationType={render:()=>createComponent({pagination:!0,navigation:!0,paginationType:"progressbar"},"item-pag-type")};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => createComponent({\n    pagination: true,\n    paginationClickable: true,\n    navigation: true,\n    spaceBetween: 40,\n    slidesPerView: 3\n  }, 'item-default')\n}",...Default.parameters?.docs?.source}}},DisabledPagination.parameters={...DisabledPagination.parameters,docs:{...DisabledPagination.parameters?.docs,source:{originalSource:"{\n  render: () => createComponent({\n    pagination: false,\n    slidesPerView: 3,\n    spaceBetween: 40\n  }, 'item-default')\n}",...DisabledPagination.parameters?.docs?.source}}},LoopAndAutoplay.parameters={...LoopAndAutoplay.parameters,docs:{...LoopAndAutoplay.parameters?.docs,source:{originalSource:"{\n  render: () => createComponent({\n    pagination: false,\n    navigation: false,\n    loop: true,\n    autoplay: true,\n    speed: 100\n  }, 'item-loop')\n}",...LoopAndAutoplay.parameters?.docs?.source}}},PaginationType.parameters={...PaginationType.parameters,docs:{...PaginationType.parameters?.docs,source:{originalSource:"{\n  render: () => createComponent({\n    pagination: true,\n    navigation: true,\n    paginationType: 'progressbar'\n  }, 'item-pag-type')\n}",...PaginationType.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DisabledPagination","LoopAndAutoplay","PaginationType"]},"../../packages/core/react/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eI:()=>AtomAlert,lm:()=>AtomBreadcrumb,rl:()=>AtomButton,Du:()=>AtomCarousel,X7:()=>AtomCarouselItem,IE:()=>AtomChip,vr:()=>AtomCol,pV:()=>AtomGrid,HX:()=>AtomIcon,dU:()=>AtomInput,Vm:()=>AtomSelect,Li:()=>AtomTextarea});var react=__webpack_require__("../../node_modules/react/index.js");const camelToDashCase=str=>str.replace(/([A-Z])/g,(m=>`-${m[0].toLowerCase()}`)),getClassName=(classList,newProps,oldProps)=>{const newClassProp=newProps.className||newProps.class,oldClassProp=oldProps.className||oldProps.class,currentClasses=arrayToMap(classList),incomingPropClasses=arrayToMap(newClassProp?newClassProp.split(" "):[]),oldPropClasses=arrayToMap(oldClassProp?oldClassProp.split(" "):[]),finalClassNames=[];return currentClasses.forEach((currentClass=>{incomingPropClasses.has(currentClass)?(finalClassNames.push(currentClass),incomingPropClasses.delete(currentClass)):oldPropClasses.has(currentClass)||finalClassNames.push(currentClass)})),incomingPropClasses.forEach((s=>finalClassNames.push(s))),finalClassNames.join(" ")},isCoveredByReact=eventNameSuffix=>{if("undefined"==typeof document)return!0;{const eventName="on"+(eventNameSuffix=>"doubleclick"===eventNameSuffix?"dblclick":eventNameSuffix)(eventNameSuffix);let isSupported=eventName in document;if(!isSupported){const element=document.createElement("div");element.setAttribute(eventName,"return;"),isSupported="function"==typeof element[eventName]}return isSupported}},syncEvent=(node,eventName,newEventHandler)=>{const eventStore=node.__events||(node.__events={}),oldEventHandler=eventStore[eventName];oldEventHandler&&node.removeEventListener(eventName,oldEventHandler),node.addEventListener(eventName,eventStore[eventName]=function handler(e){newEventHandler&&newEventHandler.call(this,e)})},arrayToMap=arr=>{const map=new Map;return arr.forEach((s=>map.set(s,s))),map},mergeRefs=(...refs)=>value=>{refs.forEach((ref=>{((ref,value)=>{"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)})(ref,value)}))};var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const createReactComponent=(tagName,ReactComponentContext,manipulatePropsFunction,defineCustomElement)=>{void 0!==defineCustomElement&&defineCustomElement();const displayName=tagName.toLowerCase().split("-").map((segment=>segment.charAt(0).toUpperCase()+segment.slice(1))).join("");const ReactComponent=class extends react.Component{constructor(props){super(props),this.setComponentElRef=element=>{this.componentEl=element}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(prevProps){((node,newProps,oldProps={})=>{if(node instanceof Element){const className=getClassName(node.classList,newProps,oldProps);""!==className&&(node.className=className),Object.keys(newProps).forEach((name=>{if("children"!==name&&"style"!==name&&"ref"!==name&&"class"!==name&&"className"!==name&&"forwardedRef"!==name)if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){const eventName=name.substring(2),eventNameLc=eventName[0].toLowerCase()+eventName.substring(1);isCoveredByReact(eventNameLc)||syncEvent(node,eventNameLc,newProps[name])}else{node[name]=newProps[name];const propType=typeof newProps[name];"boolean"===propType?!0===newProps[name]?node.setAttribute(camelToDashCase(name),""):node.removeAttribute(camelToDashCase(name)):"string"===propType&&node.setAttribute(camelToDashCase(name),newProps[name])}}))}})(this.componentEl,this.props,prevProps)}render(){const _a=this.props,{children,forwardedRef,style,className,ref}=_a,cProps=__rest(_a,["children","forwardedRef","style","className","ref"]);let propsToPass=Object.keys(cProps).reduce(((acc,name)=>{const value=cProps[name];if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){const eventName=name.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(eventName)&&(acc[name]=value)}else{const type=typeof value;"string"!==type&&"boolean"!==type&&"number"!==type||(acc[camelToDashCase(name)]=value)}return acc}),{});manipulatePropsFunction&&(propsToPass=manipulatePropsFunction(this.props,propsToPass));const newProps=Object.assign(Object.assign({},propsToPass),{ref:mergeRefs(forwardedRef,this.setComponentElRef),style});return(0,react.createElement)(tagName,newProps,children)}static get displayName(){return displayName}};return ReactComponentContext&&(ReactComponent.contextType=ReactComponentContext),((ReactComponent,displayName)=>{const forwardRef=(props,ref)=>react.createElement(ReactComponent,Object.assign({},props,{forwardedRef:ref}));return forwardRef.displayName=displayName,react.forwardRef(forwardRef)})(ReactComponent,displayName)};__webpack_require__("../../node_modules/react-dom/index.js");var loader=__webpack_require__("../../packages/core/loader/index.js");(0,loader.mP)().then((()=>(0,loader.q4)()));const AtomAlert=createReactComponent("atom-alert"),AtomBreadcrumb=createReactComponent("atom-breadcrumb"),AtomButton=createReactComponent("atom-button"),AtomCarousel=createReactComponent("atom-carousel"),AtomCarouselItem=createReactComponent("atom-carousel-item"),AtomChip=createReactComponent("atom-chip"),AtomCol=createReactComponent("atom-col"),AtomGrid=createReactComponent("atom-grid"),AtomIcon=createReactComponent("atom-icon"),AtomInput=createReactComponent("atom-input"),AtomSelect=createReactComponent("atom-select"),AtomTextarea=createReactComponent("atom-textarea")},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category.SLOTS="Slots",Category}({})},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../../packages/core/src/components/carousel/stories/carousel/style.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".item-default {\n  align-items: center;\n  background: coral;\n  display: flex;\n  height: 400px;\n  justify-content: center;\n  width: 100% !important;\n}\n\n.item-loop {\n  align-items: center;\n  background: cornflowerblue;\n  display: flex;\n  height: 400px;\n  justify-content: center;\n  width: 100% !important;\n}\n\n.item-pag-type {\n  align-items: center;\n  background: crimson;\n  display: flex;\n  height: 400px;\n  justify-content: center;\n  width: 100% !important;\n}\n","",{version:3,sources:["webpack://./../../packages/core/src/components/carousel/stories/carousel/style.css"],names:[],mappings:"AAAA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,0BAA0B;EAC1B,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,sBAAsB;AACxB",sourcesContent:[".item-default {\n  align-items: center;\n  background: coral;\n  display: flex;\n  height: 400px;\n  justify-content: center;\n  width: 100% !important;\n}\n\n.item-loop {\n  align-items: center;\n  background: cornflowerblue;\n  display: flex;\n  height: 400px;\n  justify-content: center;\n  width: 100% !important;\n}\n\n.item-pag-type {\n  align-items: center;\n  background: crimson;\n  display: flex;\n  height: 400px;\n  justify-content: center;\n  width: 100% !important;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[8429],{"../../node_modules/@storybook/addon-actions/dist/decorator.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>withActions});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs"),actions=(...args)=>{let options=chunk_AY7I2SME.vc,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...chunk_AY7I2SME.vc,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=(0,chunk_AY7I2SME.aD)(namesObject[name],options)})),actionsObject},chunk_VWCVBQ22=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs"),dist=__webpack_require__("../../node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),{document:decorator_document,Element}=dist.global,delegateEventSplitter=/^(\S+)\s*(.*)$/,matchesMethod=null!=Element&&!Element.prototype.matches?"msMatchesSelector":"matches",hasMatchInAncestry=(element,selector)=>{if(element[matchesMethod](selector))return!0;let parent=element.parentElement;return!!parent&&hasMatchInAncestry(parent,selector)},applyEventHandlers=(actionsFn,...handles)=>{let root=decorator_document&&decorator_document.getElementById("storybook-root");(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{if(null!=root){let handlers=((actionsFn,...handles)=>{let actionsObject=actionsFn(...handles);return Object.entries(actionsObject).map((([key,action])=>{let[_,eventName,selector]=key.match(delegateEventSplitter)||[];return{eventName,handler:e=>{(!selector||hasMatchInAncestry(e.target,selector))&&action(e)}}}))})(actionsFn,...handles);return handlers.forEach((({eventName,handler})=>root.addEventListener(eventName,handler))),()=>handlers.forEach((({eventName,handler})=>root.removeEventListener(eventName,handler)))}}),[root,actionsFn,handles])},withActions=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withActions",parameterName:chunk_VWCVBQ22.Sz,skipIfNoParametersOrOptions:!0,wrapper:(getStory,context,{parameters})=>(parameters?.handles&&applyEventHandlers(actions,...parameters.handles),getStory(context))})},"../../packages/core/src/components/carousel/carousel-item/stories/carousel-item.react.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Lazy:()=>Lazy,__namedExportsOrder:()=>__namedExportsOrder,default:()=>carousel_item_react_stories});__webpack_require__("../../node_modules/react/index.js");var decorator=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/decorator.mjs"),table=__webpack_require__("../../utils/storybook/enums/table.ts");const CarouselItemStoryArgs={decorators:[decorator.R],parameters:{docs:{source:{code:null},description:{component:"Wrapper of Swiper Slide, simplified and with UI to match our Style Guide. Read the [Swiper documentation](https://swiperjs.com/element) for any issue or for more information. Read more about the need of this component and its behavior at [ADR 0013](./?path=/docs/docs-architecture-decision-records-adr-0013-why-using-a-virtual-carousel-item--docs). <br/>  <small> This story page is only code writing sample, its not fully functional.</small>"}}},argTypes:{lazy:{defaultValue:{summary:!1},description:"Set to `true` if you use lazy loading images, to swiper-slide add preloader element.",table:{category:table.W.PROPERTIES}}}};var esm=__webpack_require__("../../packages/core/react/dist/esm/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const carousel_item_react_stories={title:"Components/Carousel Item",...CarouselItemStoryArgs},Default={render:()=>(0,jsx_runtime.jsx)(esm.X7,{children:(0,jsx_runtime.jsx)("div",{children:"Slide 1"})})},Lazy={render:()=>(0,jsx_runtime.jsx)(esm.X7,{lazy:!0,children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("img",{loading:"lazy",width:"100%",src:"https://user-images.githubusercontent.com/3603793/257943112-fb180815-7bd7-45f7-ad14-bd1677079931.png"})})})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => <AtomCarouselItem>\n      <div>Slide 1</div>\n    </AtomCarouselItem>\n}",...Default.parameters?.docs?.source}}},Lazy.parameters={...Lazy.parameters,docs:{...Lazy.parameters?.docs,source:{originalSource:"{\n  render: () => <AtomCarouselItem lazy={true}>\n      <div>\n        <img loading='lazy' width='100%' src='https://user-images.githubusercontent.com/3603793/257943112-fb180815-7bd7-45f7-ad14-bd1677079931.png' />\n      </div>\n    </AtomCarouselItem>\n}",...Lazy.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Lazy"]},"../../packages/core/react/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eI:()=>AtomAlert,jV:()=>AtomBadge,lm:()=>AtomBreadcrumb,rl:()=>AtomButton,Du:()=>AtomCarousel,X7:()=>AtomCarouselItem,IE:()=>AtomChip,vr:()=>AtomCol,pV:()=>AtomGrid,HX:()=>AtomIcon,dU:()=>AtomInput,Vm:()=>AtomSelect,o5:()=>AtomTag,Li:()=>AtomTextarea});var react=__webpack_require__("../../node_modules/react/index.js");const camelToDashCase=str=>str.replace(/([A-Z])/g,(m=>`-${m[0].toLowerCase()}`)),getClassName=(classList,newProps,oldProps)=>{const newClassProp=newProps.className||newProps.class,oldClassProp=oldProps.className||oldProps.class,currentClasses=arrayToMap(classList),incomingPropClasses=arrayToMap(newClassProp?newClassProp.split(" "):[]),oldPropClasses=arrayToMap(oldClassProp?oldClassProp.split(" "):[]),finalClassNames=[];return currentClasses.forEach((currentClass=>{incomingPropClasses.has(currentClass)?(finalClassNames.push(currentClass),incomingPropClasses.delete(currentClass)):oldPropClasses.has(currentClass)||finalClassNames.push(currentClass)})),incomingPropClasses.forEach((s=>finalClassNames.push(s))),finalClassNames.join(" ")},isCoveredByReact=eventNameSuffix=>{if("undefined"==typeof document)return!0;{const eventName="on"+(eventNameSuffix=>"doubleclick"===eventNameSuffix?"dblclick":eventNameSuffix)(eventNameSuffix);let isSupported=eventName in document;if(!isSupported){const element=document.createElement("div");element.setAttribute(eventName,"return;"),isSupported="function"==typeof element[eventName]}return isSupported}},syncEvent=(node,eventName,newEventHandler)=>{const eventStore=node.__events||(node.__events={}),oldEventHandler=eventStore[eventName];oldEventHandler&&node.removeEventListener(eventName,oldEventHandler),node.addEventListener(eventName,eventStore[eventName]=function handler(e){newEventHandler&&newEventHandler.call(this,e)})},arrayToMap=arr=>{const map=new Map;return arr.forEach((s=>map.set(s,s))),map},mergeRefs=(...refs)=>value=>{refs.forEach((ref=>{((ref,value)=>{"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)})(ref,value)}))};var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const createReactComponent=(tagName,ReactComponentContext,manipulatePropsFunction,defineCustomElement)=>{void 0!==defineCustomElement&&defineCustomElement();const displayName=tagName.toLowerCase().split("-").map((segment=>segment.charAt(0).toUpperCase()+segment.slice(1))).join("");const ReactComponent=class extends react.Component{constructor(props){super(props),this.setComponentElRef=element=>{this.componentEl=element}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(prevProps){((node,newProps,oldProps={})=>{if(node instanceof Element){const className=getClassName(node.classList,newProps,oldProps);""!==className&&(node.className=className),Object.keys(newProps).forEach((name=>{if("children"!==name&&"style"!==name&&"ref"!==name&&"class"!==name&&"className"!==name&&"forwardedRef"!==name)if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){const eventName=name.substring(2),eventNameLc=eventName[0].toLowerCase()+eventName.substring(1);isCoveredByReact(eventNameLc)||syncEvent(node,eventNameLc,newProps[name])}else{node[name]=newProps[name];const propType=typeof newProps[name];"boolean"===propType?!0===newProps[name]?node.setAttribute(camelToDashCase(name),""):node.removeAttribute(camelToDashCase(name)):"string"===propType&&node.setAttribute(camelToDashCase(name),newProps[name])}}))}})(this.componentEl,this.props,prevProps)}render(){const _a=this.props,{children,forwardedRef,style,className,ref}=_a,cProps=__rest(_a,["children","forwardedRef","style","className","ref"]);let propsToPass=Object.keys(cProps).reduce(((acc,name)=>{const value=cProps[name];if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){const eventName=name.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(eventName)&&(acc[name]=value)}else{const type=typeof value;"string"!==type&&"boolean"!==type&&"number"!==type||(acc[camelToDashCase(name)]=value)}return acc}),{});manipulatePropsFunction&&(propsToPass=manipulatePropsFunction(this.props,propsToPass));const newProps=Object.assign(Object.assign({},propsToPass),{ref:mergeRefs(forwardedRef,this.setComponentElRef),style});return(0,react.createElement)(tagName,newProps,children)}static get displayName(){return displayName}};return ReactComponentContext&&(ReactComponent.contextType=ReactComponentContext),((ReactComponent,displayName)=>{const forwardRef=(props,ref)=>react.createElement(ReactComponent,Object.assign({},props,{forwardedRef:ref}));return forwardRef.displayName=displayName,react.forwardRef(forwardRef)})(ReactComponent,displayName)};__webpack_require__("../../node_modules/react-dom/index.js");var loader=__webpack_require__("../../packages/core/loader/index.js");(0,loader.mP)().then((()=>(0,loader.q4)()));const AtomAlert=createReactComponent("atom-alert"),AtomBadge=createReactComponent("atom-badge"),AtomBreadcrumb=createReactComponent("atom-breadcrumb"),AtomButton=createReactComponent("atom-button"),AtomCarousel=createReactComponent("atom-carousel"),AtomCarouselItem=createReactComponent("atom-carousel-item"),AtomChip=createReactComponent("atom-chip"),AtomCol=createReactComponent("atom-col"),AtomGrid=createReactComponent("atom-grid"),AtomIcon=createReactComponent("atom-icon"),AtomInput=createReactComponent("atom-input"),AtomSelect=createReactComponent("atom-select"),AtomTag=createReactComponent("atom-tag"),AtomTextarea=createReactComponent("atom-textarea")},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category.SLOTS="Slots",Category}({})}}]);
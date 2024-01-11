"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[451],{"../../packages/core/src/components/tag/stories/tag.react.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomColor:()=>CustomColor,Danger:()=>Danger,DangerWithIcon:()=>DangerWithIcon,Dark:()=>Dark,DarkWithIcon:()=>DarkWithIcon,Info:()=>Info,InfoWithIcon:()=>InfoWithIcon,Light:()=>Light,LightWithIcon:()=>LightWithIcon,Success:()=>Success,SuccessWithIcon:()=>SuccessWithIcon,Warning:()=>Warning,WarningWithIcon:()=>WarningWithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>tag_react_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../packages/core/react/dist/esm/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const tag_react_stories={title:"Components/Tag",component:esm.o5,decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Tags are non-interactive elements used to categorize, highlight or organize items in the interface. Because they have short keywords, they help in the quick recognition of a category or element. \n \n Wrapper of Ionic Badge component. Read the [Ionic documentation](https://ionicframework.com/docs/api/badge) for more information about the available properties and possibilities."}}},argTypes:{color:{control:"select",options:["success","warning","danger","neutral","dark","light"],defaultValue:{summary:"success"},description:"The type of the tag, the component will receive the color according to its type."},icon:{control:"text",description:"The name of the icon to use."},label:{control:"text",description:"The label of the tag"},customBackgroundColor:{control:"text",description:"The background color"},customTextColor:{control:"text",description:"The text and icon (if exists) color"}}},createTag=args=>(0,jsx_runtime.jsx)(esm.o5,{icon:args.icon,customBackgroundColor:args.customBackgroundColor,customTextColor:args.customTextColor,color:args.color,children:args.label});createTag.displayName="createTag";const Success={render:args=>createTag(args),args:{color:"success",label:"Promotion"}},SuccessWithIcon={render:args=>createTag(args),args:{color:"success",label:"Promotion",icon:"tag"}},Danger={render:args=>createTag(args),args:{color:"danger",label:"Canceled"}},DangerWithIcon={render:args=>createTag(args),args:{color:"danger",label:"Canceled",icon:"close-circle-outline"}},Warning={render:args=>createTag(args),args:{color:"warning",label:"In Progress"}},WarningWithIcon={render:args=>createTag(args),args:{color:"warning",label:"In Progress",icon:"timer-outline"}},Info={render:args=>createTag(args),args:{color:"info",label:"Partial Delivery"}},InfoWithIcon={render:args=>createTag(args),args:{color:"info",label:"Partial Delivery",icon:"truck"}},Dark={render:args=>createTag(args),args:{color:"dark",label:"Most rescued"}},DarkWithIcon={render:args=>createTag(args),args:{color:"dark",label:"Most rescued",icon:"wallet-giftcard"}},Light={render:args=>createTag(args),args:{color:"light",label:"More Points"}},LightWithIcon={render:args=>createTag(args),args:{color:"light",label:"More Points",icon:"plus-thick"}},CustomColor={render:args=>createTag(args),args:{label:"Most Loved",icon:"heart",customBackgroundColor:"#a006fa",customTextColor:"#00ff95"}};Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'success',\n    label: 'Promotion'\n  }\n}",...Success.parameters?.docs?.source}}},SuccessWithIcon.parameters={...SuccessWithIcon.parameters,docs:{...SuccessWithIcon.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'success',\n    label: 'Promotion',\n    icon: 'tag'\n  }\n}",...SuccessWithIcon.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'danger',\n    label: 'Canceled'\n  }\n}",...Danger.parameters?.docs?.source}}},DangerWithIcon.parameters={...DangerWithIcon.parameters,docs:{...DangerWithIcon.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'danger',\n    label: 'Canceled',\n    icon: 'close-circle-outline'\n  }\n}",...DangerWithIcon.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'warning',\n    label: 'In Progress'\n  }\n}",...Warning.parameters?.docs?.source}}},WarningWithIcon.parameters={...WarningWithIcon.parameters,docs:{...WarningWithIcon.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'warning',\n    label: 'In Progress',\n    icon: 'timer-outline'\n  }\n}",...WarningWithIcon.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'info',\n    label: 'Partial Delivery'\n  }\n}",...Info.parameters?.docs?.source}}},InfoWithIcon.parameters={...InfoWithIcon.parameters,docs:{...InfoWithIcon.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'info',\n    label: 'Partial Delivery',\n    icon: 'truck'\n  }\n}",...InfoWithIcon.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'dark',\n    label: 'Most rescued'\n  }\n}",...Dark.parameters?.docs?.source}}},DarkWithIcon.parameters={...DarkWithIcon.parameters,docs:{...DarkWithIcon.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'dark',\n    label: 'Most rescued',\n    icon: 'wallet-giftcard'\n  }\n}",...DarkWithIcon.parameters?.docs?.source}}},Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'light',\n    label: 'More Points'\n  }\n}",...Light.parameters?.docs?.source}}},LightWithIcon.parameters={...LightWithIcon.parameters,docs:{...LightWithIcon.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'light',\n    label: 'More Points',\n    icon: 'plus-thick'\n  }\n}",...LightWithIcon.parameters?.docs?.source}}},CustomColor.parameters={...CustomColor.parameters,docs:{...CustomColor.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    label: 'Most Loved',\n    icon: 'heart',\n    customBackgroundColor: '#a006fa',\n    customTextColor: '#00ff95'\n  }\n}",...CustomColor.parameters?.docs?.source}}};const __namedExportsOrder=["Success","SuccessWithIcon","Danger","DangerWithIcon","Warning","WarningWithIcon","Info","InfoWithIcon","Dark","DarkWithIcon","Light","LightWithIcon","CustomColor"]},"../../packages/core/react/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eI:()=>AtomAlert,jV:()=>AtomBadge,lm:()=>AtomBreadcrumb,rl:()=>AtomButton,Du:()=>AtomCarousel,X7:()=>AtomCarouselItem,IE:()=>AtomChip,vr:()=>AtomCol,pV:()=>AtomGrid,HX:()=>AtomIcon,dU:()=>AtomInput,Vm:()=>AtomSelect,o5:()=>AtomTag,Li:()=>AtomTextarea,OH:()=>AtomTooltip});var react=__webpack_require__("../../node_modules/react/index.js");const camelToDashCase=str=>str.replace(/([A-Z])/g,(m=>`-${m[0].toLowerCase()}`)),getClassName=(classList,newProps,oldProps)=>{const newClassProp=newProps.className||newProps.class,oldClassProp=oldProps.className||oldProps.class,currentClasses=arrayToMap(classList),incomingPropClasses=arrayToMap(newClassProp?newClassProp.split(" "):[]),oldPropClasses=arrayToMap(oldClassProp?oldClassProp.split(" "):[]),finalClassNames=[];return currentClasses.forEach((currentClass=>{incomingPropClasses.has(currentClass)?(finalClassNames.push(currentClass),incomingPropClasses.delete(currentClass)):oldPropClasses.has(currentClass)||finalClassNames.push(currentClass)})),incomingPropClasses.forEach((s=>finalClassNames.push(s))),finalClassNames.join(" ")},isCoveredByReact=eventNameSuffix=>{if("undefined"==typeof document)return!0;{const eventName="on"+(eventNameSuffix=>"doubleclick"===eventNameSuffix?"dblclick":eventNameSuffix)(eventNameSuffix);let isSupported=eventName in document;if(!isSupported){const element=document.createElement("div");element.setAttribute(eventName,"return;"),isSupported="function"==typeof element[eventName]}return isSupported}},syncEvent=(node,eventName,newEventHandler)=>{const eventStore=node.__events||(node.__events={}),oldEventHandler=eventStore[eventName];oldEventHandler&&node.removeEventListener(eventName,oldEventHandler),node.addEventListener(eventName,eventStore[eventName]=function handler(e){newEventHandler&&newEventHandler.call(this,e)})},arrayToMap=arr=>{const map=new Map;return arr.forEach((s=>map.set(s,s))),map},mergeRefs=(...refs)=>value=>{refs.forEach((ref=>{((ref,value)=>{"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)})(ref,value)}))};var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const createReactComponent=(tagName,ReactComponentContext,manipulatePropsFunction,defineCustomElement)=>{void 0!==defineCustomElement&&defineCustomElement();const displayName=tagName.toLowerCase().split("-").map((segment=>segment.charAt(0).toUpperCase()+segment.slice(1))).join("");const ReactComponent=class extends react.Component{constructor(props){super(props),this.setComponentElRef=element=>{this.componentEl=element}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(prevProps){((node,newProps,oldProps={})=>{if(node instanceof Element){const className=getClassName(node.classList,newProps,oldProps);""!==className&&(node.className=className),Object.keys(newProps).forEach((name=>{if("children"!==name&&"style"!==name&&"ref"!==name&&"class"!==name&&"className"!==name&&"forwardedRef"!==name)if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){const eventName=name.substring(2),eventNameLc=eventName[0].toLowerCase()+eventName.substring(1);isCoveredByReact(eventNameLc)||syncEvent(node,eventNameLc,newProps[name])}else{node[name]=newProps[name];const propType=typeof newProps[name];"boolean"===propType?!0===newProps[name]?node.setAttribute(camelToDashCase(name),""):node.removeAttribute(camelToDashCase(name)):"string"===propType&&node.setAttribute(camelToDashCase(name),newProps[name])}}))}})(this.componentEl,this.props,prevProps)}render(){const _a=this.props,{children,forwardedRef,style,className,ref}=_a,cProps=__rest(_a,["children","forwardedRef","style","className","ref"]);let propsToPass=Object.keys(cProps).reduce(((acc,name)=>{const value=cProps[name];if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){const eventName=name.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(eventName)&&(acc[name]=value)}else{const type=typeof value;"string"!==type&&"boolean"!==type&&"number"!==type||(acc[camelToDashCase(name)]=value)}return acc}),{});manipulatePropsFunction&&(propsToPass=manipulatePropsFunction(this.props,propsToPass));const newProps=Object.assign(Object.assign({},propsToPass),{ref:mergeRefs(forwardedRef,this.setComponentElRef),style});return(0,react.createElement)(tagName,newProps,children)}static get displayName(){return displayName}};return ReactComponentContext&&(ReactComponent.contextType=ReactComponentContext),((ReactComponent,displayName)=>{const forwardRef=(props,ref)=>react.createElement(ReactComponent,Object.assign({},props,{forwardedRef:ref}));return forwardRef.displayName=displayName,react.forwardRef(forwardRef)})(ReactComponent,displayName)};__webpack_require__("../../node_modules/react-dom/index.js");var loader=__webpack_require__("../../packages/core/loader/index.js");(0,loader.mP)().then((()=>(0,loader.q4)()));const AtomAlert=createReactComponent("atom-alert"),AtomBadge=createReactComponent("atom-badge"),AtomBreadcrumb=createReactComponent("atom-breadcrumb"),AtomButton=createReactComponent("atom-button"),AtomCarousel=createReactComponent("atom-carousel"),AtomCarouselItem=createReactComponent("atom-carousel-item"),AtomChip=createReactComponent("atom-chip"),AtomCol=createReactComponent("atom-col"),AtomGrid=createReactComponent("atom-grid"),AtomIcon=createReactComponent("atom-icon"),AtomInput=createReactComponent("atom-input"),AtomSelect=createReactComponent("atom-select"),AtomTag=createReactComponent("atom-tag"),AtomTextarea=createReactComponent("atom-textarea"),AtomTooltip=createReactComponent("atom-tooltip")}}]);
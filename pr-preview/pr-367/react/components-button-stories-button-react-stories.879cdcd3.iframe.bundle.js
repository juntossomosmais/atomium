"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[4964],{"../../node_modules/@storybook/addon-actions/dist/decorator.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>withActions});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("../../node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors.is({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}var actions=(...args)=>{let options=config,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...config,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=action(namesObject[name],options)})),actionsObject},{document:decorator_document,Element}=external_STORYBOOK_MODULE_GLOBAL_.global,delegateEventSplitter=/^(\S+)\s*(.*)$/,matchesMethod=null!=Element&&!Element.prototype.matches?"msMatchesSelector":"matches",hasMatchInAncestry=(element,selector)=>{if(element[matchesMethod](selector))return!0;let parent=element.parentElement;return!!parent&&hasMatchInAncestry(parent,selector)},applyEventHandlers=(actionsFn,...handles)=>{let root=decorator_document&&decorator_document.getElementById("storybook-root");(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{if(null!=root){let handlers=((actionsFn,...handles)=>{let actionsObject=actionsFn(...handles);return Object.entries(actionsObject).map((([key,action])=>{let[_,eventName,selector]=key.match(delegateEventSplitter)||[];return{eventName,handler:e=>{(!selector||hasMatchInAncestry(e.target,selector))&&action(e)}}}))})(actionsFn,...handles);return handlers.forEach((({eventName,handler})=>root.addEventListener(eventName,handler))),()=>handlers.forEach((({eventName,handler})=>root.removeEventListener(eventName,handler)))}}),[root,actionsFn,handles])},withActions=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withActions",parameterName:"actions",skipIfNoParametersOrOptions:!0,wrapper:(getStory,context,{parameters})=>(parameters?.handles&&applyEventHandlers(actions,...parameters.handles),getStory(context))})},"../../packages/core/src/components/button/stories/button.react.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CircleButton:()=>CircleButton,Disabled:()=>Disabled,IconAndText:()=>IconAndText,Primary:()=>Primary,Secondary:()=>Secondary,Text:()=>Text,White:()=>White,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button_react_stories});var esm=__webpack_require__("../../packages/core/react/dist/esm/index.js"),table=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../utils/storybook/enums/table.ts"));const ButtonStoryArgs={parameters:{actions:{handles:["click"]},docs:{description:{component:"Wrapper of Ionic Button component. Read the [Ionic documentation](https://ionicframework.com/docs/api/button) for more information about the available properties and possibilities."}}},decorators:[__webpack_require__("../../node_modules/@storybook/addon-actions/dist/decorator.mjs").R],argTypes:{label:{control:"text",description:"The label of the button"},color:{control:"select",options:["primary","secondary","white"],defaultValue:{summary:"primary"},description:"The color to use from your application's color palette.",table:{category:table.W.PROPERTIES}},fill:{control:"select",options:["solid","clear","outline"],defaultValue:{summary:"solid"},description:'Set to `"clear"` for a transparent button that resembles a flat button, to `"outline"` for a transparent button with a border, or to `"solid"` for a button with a filled background. The default fill is "solid" except inside of a toolbar, where the default is `"clear"`.',table:{category:table.W.PROPERTIES}},expand:{control:"select",options:["none","block"],description:'Set to `"block"` for a full-width button.',table:{category:table.W.PROPERTIES}},size:{control:"select",options:["small","default","large"],defaultValue:{summary:"default"},description:"The size of the button.",table:{category:table.W.PROPERTIES}},disabled:{control:"boolean",description:"If `true`, the user cannot interact with the button.",table:{category:table.W.PROPERTIES}},loading:{control:"boolean",description:"If `true`, the button will be show a loading indicator.",table:{category:table.W.PROPERTIES}},href:{description:"Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.",table:{category:table.W.PROPERTIES}},rel:{description:"The relationship of the linked URL as space-separated link types.",table:{category:table.W.PROPERTIES}},target:{description:'Specifies where to display the linked URL. Only applies when an href is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.',table:{category:table.W.PROPERTIES}},download:{description:"This attribute instructs browsers to download a URL.",table:{category:table.W.PROPERTIES}},type:{control:"select",options:["none","submit","reset","button"],defaultValue:{summary:"button"},description:"The type of the button.",table:{category:table.W.PROPERTIES}},shape:{control:"select",options:["round","circle"],description:"The shape of the button.",table:{category:table.W.PROPERTIES}},mode:{control:"select",options:["md","ios"],defaultValue:{summary:"md"},description:"The mode determines which platform styles to use.",table:{category:table.W.PROPERTIES}}}},ButtonComponentArgs={label:"Button",color:"primary",fill:"solid",size:"default",type:"button",mode:"md",expand:void 0,disabled:!1,loading:!1};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const button_react_stories={title:"Components/Button",component:esm.rl,...ButtonStoryArgs},createButton=(args,themeColor="light")=>(0,jsx_runtime.jsx)("div",{className:`theme-${themeColor}`,children:(0,jsx_runtime.jsx)(esm.rl,{color:args.color,fill:args.fill,size:args.size,disabled:args.disabled,loading:args.loading,type:args.type,mode:args.mode,expand:args.expand,children:args.label})});createButton.displayName="createButton";const Primary={render:args=>createButton(args),args:{...ButtonComponentArgs}},Secondary={render:args=>createButton(args),args:{...Primary.args,color:"secondary",fill:"outline"}},White={render:args=>createButton(args,"dark"),args:{...Primary.args,color:"white",fill:"outline"}},Text={render:args=>createButton(args),args:{...Primary.args,color:"secondary",fill:"clear"}},CircleButton={render:args=>(0,jsx_runtime.jsx)(esm.rl,{color:args.color,fill:args.fill,size:args.size,disabled:args.disabled,loading:args.loading,type:args.type,mode:args.mode,expand:args.expand,shape:args.shape,children:(0,jsx_runtime.jsx)(esm.HX,{icon:"heart"})}),args:{...Primary.args,color:"secondary",fill:"outline",shape:"circle"}},Disabled={render:args=>createButton(args),args:{...Primary.args,disabled:!0}},IconAndText={render:args=>(0,jsx_runtime.jsxs)(esm.rl,{color:args.color,fill:args.fill,size:args.size,disabled:args.disabled,loading:args.loading,type:args.type,mode:args.mode,expand:args.expand,shape:args.shape,children:[(0,jsx_runtime.jsx)(esm.HX,{icon:"heart"}),args.label]}),args:{...Primary.args}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  render: args => createButton(args),\n  args: {\n    ...ButtonComponentArgs\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  render: args => createButton(args),\n  args: {\n    ...Primary.args,\n    color: 'secondary',\n    fill: 'outline'\n  }\n}",...Secondary.parameters?.docs?.source}}},White.parameters={...White.parameters,docs:{...White.parameters?.docs,source:{originalSource:"{\n  render: args => createButton(args, 'dark'),\n  args: {\n    ...Primary.args,\n    color: 'white',\n    fill: 'outline'\n  }\n}",...White.parameters?.docs?.source}}},Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:"{\n  render: args => createButton(args),\n  args: {\n    ...Primary.args,\n    color: 'secondary',\n    fill: 'clear'\n  }\n}",...Text.parameters?.docs?.source}}},CircleButton.parameters={...CircleButton.parameters,docs:{...CircleButton.parameters?.docs,source:{originalSource:"{\n  render: (args: any) => <AtomButton color={args.color} fill={args.fill} size={args.size} disabled={args.disabled} loading={args.loading} type={args.type} mode={args.mode} expand={args.expand} shape={args.shape}>\n      <AtomIcon icon='heart' />\n    </AtomButton>,\n  args: {\n    ...Primary.args,\n    color: 'secondary',\n    fill: 'outline',\n    shape: 'circle'\n  }\n}",...CircleButton.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: args => createButton(args),\n  args: {\n    ...Primary.args,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},IconAndText.parameters={...IconAndText.parameters,docs:{...IconAndText.parameters?.docs,source:{originalSource:"{\n  render: (args: any) => <AtomButton color={args.color} fill={args.fill} size={args.size} disabled={args.disabled} loading={args.loading} type={args.type} mode={args.mode} expand={args.expand} shape={args.shape}>\n      <AtomIcon icon='heart' />\n      {args.label}\n    </AtomButton>,\n  args: {\n    ...Primary.args\n  }\n}",...IconAndText.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","White","Text","CircleButton","Disabled","IconAndText"]},"../../packages/core/react/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eI:()=>AtomAlert,jV:()=>AtomBadge,lm:()=>AtomBreadcrumb,rl:()=>AtomButton,Du:()=>AtomCarousel,X7:()=>AtomCarouselItem,IE:()=>AtomChip,vr:()=>AtomCol,pV:()=>AtomGrid,HX:()=>AtomIcon,dU:()=>AtomInput,Vm:()=>AtomSelect,o5:()=>AtomTag,Li:()=>AtomTextarea,OH:()=>AtomTooltip});var react=__webpack_require__("../../node_modules/react/index.js");const camelToDashCase=str=>str.replace(/([A-Z])/g,(m=>`-${m[0].toLowerCase()}`)),getClassName=(classList,newProps,oldProps)=>{const newClassProp=newProps.className||newProps.class,oldClassProp=oldProps.className||oldProps.class,currentClasses=arrayToMap(classList),incomingPropClasses=arrayToMap(newClassProp?newClassProp.split(" "):[]),oldPropClasses=arrayToMap(oldClassProp?oldClassProp.split(" "):[]),finalClassNames=[];return currentClasses.forEach((currentClass=>{incomingPropClasses.has(currentClass)?(finalClassNames.push(currentClass),incomingPropClasses.delete(currentClass)):oldPropClasses.has(currentClass)||finalClassNames.push(currentClass)})),incomingPropClasses.forEach((s=>finalClassNames.push(s))),finalClassNames.join(" ")},isCoveredByReact=eventNameSuffix=>{if("undefined"==typeof document)return!0;{const eventName="on"+(eventNameSuffix=>"doubleclick"===eventNameSuffix?"dblclick":eventNameSuffix)(eventNameSuffix);let isSupported=eventName in document;if(!isSupported){const element=document.createElement("div");element.setAttribute(eventName,"return;"),isSupported="function"==typeof element[eventName]}return isSupported}},syncEvent=(node,eventName,newEventHandler)=>{const eventStore=node.__events||(node.__events={}),oldEventHandler=eventStore[eventName];oldEventHandler&&node.removeEventListener(eventName,oldEventHandler),node.addEventListener(eventName,eventStore[eventName]=function handler(e){newEventHandler&&newEventHandler.call(this,e)})},arrayToMap=arr=>{const map=new Map;return arr.forEach((s=>map.set(s,s))),map},mergeRefs=(...refs)=>value=>{refs.forEach((ref=>{((ref,value)=>{"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)})(ref,value)}))};var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const createReactComponent=(tagName,ReactComponentContext,manipulatePropsFunction,defineCustomElement)=>{void 0!==defineCustomElement&&defineCustomElement();const displayName=tagName.toLowerCase().split("-").map((segment=>segment.charAt(0).toUpperCase()+segment.slice(1))).join("");const ReactComponent=class extends react.Component{constructor(props){super(props),this.setComponentElRef=element=>{this.componentEl=element}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(prevProps){((node,newProps,oldProps={})=>{if(node instanceof Element){const className=getClassName(node.classList,newProps,oldProps);""!==className&&(node.className=className),Object.keys(newProps).forEach((name=>{if("children"!==name&&"style"!==name&&"ref"!==name&&"class"!==name&&"className"!==name&&"forwardedRef"!==name)if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){const eventName=name.substring(2),eventNameLc=eventName[0].toLowerCase()+eventName.substring(1);isCoveredByReact(eventNameLc)||syncEvent(node,eventNameLc,newProps[name])}else{node[name]=newProps[name];const propType=typeof newProps[name];"boolean"===propType?!0===newProps[name]?node.setAttribute(camelToDashCase(name),""):node.removeAttribute(camelToDashCase(name)):"string"===propType&&node.setAttribute(camelToDashCase(name),newProps[name])}}))}})(this.componentEl,this.props,prevProps)}render(){const _a=this.props,{children,forwardedRef,style,className,ref}=_a,cProps=__rest(_a,["children","forwardedRef","style","className","ref"]);let propsToPass=Object.keys(cProps).reduce(((acc,name)=>{const value=cProps[name];if(0===name.indexOf("on")&&name[2]===name[2].toUpperCase()){const eventName=name.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(eventName)&&(acc[name]=value)}else{const type=typeof value;"string"!==type&&"boolean"!==type&&"number"!==type||(acc[camelToDashCase(name)]=value)}return acc}),{});manipulatePropsFunction&&(propsToPass=manipulatePropsFunction(this.props,propsToPass));const newProps=Object.assign(Object.assign({},propsToPass),{ref:mergeRefs(forwardedRef,this.setComponentElRef),style});return(0,react.createElement)(tagName,newProps,children)}static get displayName(){return displayName}};return ReactComponentContext&&(ReactComponent.contextType=ReactComponentContext),((ReactComponent,displayName)=>{const forwardRef=(props,ref)=>react.createElement(ReactComponent,Object.assign({},props,{forwardedRef:ref}));return forwardRef.displayName=displayName,react.forwardRef(forwardRef)})(ReactComponent,displayName)};__webpack_require__("../../node_modules/react-dom/index.js");var loader=__webpack_require__("../../packages/core/loader/index.js");(0,loader.mP)().then((()=>(0,loader.q4)()));const AtomAlert=createReactComponent("atom-alert"),AtomBadge=createReactComponent("atom-badge"),AtomBreadcrumb=createReactComponent("atom-breadcrumb"),AtomButton=createReactComponent("atom-button"),AtomCarousel=createReactComponent("atom-carousel"),AtomCarouselItem=createReactComponent("atom-carousel-item"),AtomChip=createReactComponent("atom-chip"),AtomCol=createReactComponent("atom-col"),AtomGrid=createReactComponent("atom-grid"),AtomIcon=createReactComponent("atom-icon"),AtomInput=createReactComponent("atom-input"),AtomSelect=createReactComponent("atom-select"),AtomTag=createReactComponent("atom-tag"),AtomTextarea=createReactComponent("atom-textarea"),AtomTooltip=createReactComponent("atom-tooltip")},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category.SLOTS="Slots",Category}({})}}]);
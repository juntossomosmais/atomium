"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[2239],{"../../node_modules/@storybook/addon-actions/dist/decorator.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>withActions});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}var actions=(...args)=>{let options=config,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...config,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=action(namesObject[name],options)})),actionsObject},{document:decorator_document,Element}=external_STORYBOOK_MODULE_GLOBAL_.global,delegateEventSplitter=/^(\S+)\s*(.*)$/,matchesMethod=null!=Element&&!Element.prototype.matches?"msMatchesSelector":"matches",hasMatchInAncestry=(element,selector)=>{if(element[matchesMethod](selector))return!0;let parent=element.parentElement;return!!parent&&hasMatchInAncestry(parent,selector)},applyEventHandlers=(actionsFn,...handles)=>{let root=decorator_document&&decorator_document.getElementById("storybook-root");(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{if(null!=root){let handlers=((actionsFn,...handles)=>{let actionsObject=actionsFn(...handles);return Object.entries(actionsObject).map((([key,action])=>{let[_,eventName,selector]=key.match(delegateEventSplitter)||[];return{eventName,handler:e=>{(!selector||hasMatchInAncestry(e.target,selector))&&action(e)}}}))})(actionsFn,...handles);return handlers.forEach((({eventName,handler})=>root.addEventListener(eventName,handler))),()=>handlers.forEach((({eventName,handler})=>root.removeEventListener(eventName,handler)))}}),[root,actionsFn,handles])},withActions=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withActions",parameterName:"actions",skipIfNoParametersOrOptions:!0,wrapper:(getStory,context,{parameters})=>(parameters?.handles&&applyEventHandlers(actions,...parameters.handles),getStory(context))})},"../../packages/core/src/components/button/stories/button.react.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CircleButton:()=>CircleButton,Disabled:()=>Disabled,Ghost:()=>Ghost,IconAndText:()=>IconAndText,Link:()=>Link,OutlineFilled:()=>OutlineFilled,Primary:()=>Primary,Secondary:()=>Secondary,Text:()=>Text,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button_react_stories});var esm=__webpack_require__("../../packages/core/react/dist/esm/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),table=__webpack_require__("../../utils/storybook/enums/table.ts");const ButtonStoryArgs={parameters:{actions:{handles:["click"]},docs:{description:{component:"Wrapper of Ionic Button component. Read the [Ionic documentation](https://ionicframework.com/docs/api/button) for more information about the available properties and possibilities."}}},decorators:[__webpack_require__("../../node_modules/@storybook/addon-actions/dist/decorator.mjs").w],argTypes:{label:{control:"text",description:"The label of the button"},color:{control:"select",options:["primary","secondary","white","custom"],defaultValue:{summary:"primary"},description:"The color to use from your application's color palette.",table:{category:table.b.PROPERTIES}},fill:{control:"select",options:["solid","clear","outline","outline-filled"],defaultValue:{summary:"solid"},description:'Set to `"clear"` for a transparent button that resembles a flat button, to `"outline"` for a transparent button with a border, or to `"solid"` for a button with a filled background. The default fill is "solid" except inside of a toolbar, where the default is `"clear"`.',table:{category:table.b.PROPERTIES}},expand:{control:"select",options:["none","block"],description:'Set to `"block"` for a full-width button.',table:{category:table.b.PROPERTIES}},size:{control:"select",options:["small","default","large"],defaultValue:{summary:"default"},description:"The size of the button.",table:{category:table.b.PROPERTIES}},disabled:{control:"boolean",description:"If `true`, the user cannot interact with the button.",table:{category:table.b.PROPERTIES}},loading:{control:"boolean",description:"If `true`, the button will be show a loading indicator.",table:{category:table.b.PROPERTIES}},href:{description:"Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.",table:{category:table.b.PROPERTIES}},rel:{description:"The relationship of the linked URL as space-separated link types.",table:{category:table.b.PROPERTIES}},target:{description:'Specifies where to display the linked URL. Only applies when an href is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.',table:{category:table.b.PROPERTIES}},download:{description:"This attribute instructs browsers to download a URL.",table:{category:table.b.PROPERTIES}},type:{control:"select",options:["none","submit","reset","button"],defaultValue:{summary:"button"},description:"The type of the button.",table:{category:table.b.PROPERTIES}},shape:{control:"select",options:["round","circle"],description:"The shape of the button.",table:{category:table.b.PROPERTIES}},mode:{control:"select",options:["md","ios"],defaultValue:{summary:"md"},description:"The mode determines which platform styles to use.",table:{category:table.b.PROPERTIES}},"--atom-button-color":{description:'Custom color of the button. It just works with `color="custom"`.',table:{category:table.b.CSS_CUSTOM_PROPERTIES}},"--atom-button-color-contrast":{description:'Custom color contrast of the button. It just works with `color="custom"`.',table:{category:table.b.CSS_CUSTOM_PROPERTIES}}}},ButtonComponentArgs={label:"Button",color:"primary",fill:"solid",size:"default",type:"button",mode:"md",expand:void 0,disabled:!1,loading:!1};var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),stories_button=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../../packages/core/src/components/button/stories/button.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(stories_button.A,options);stories_button.A&&stories_button.A.locals&&stories_button.A.locals;const button_react_stories={title:"Components/Button",component:esm.I7,...ButtonStoryArgs},createButton=(args,themeColor="light")=>react.createElement("div",{className:`theme-${themeColor}`},react.createElement(esm.I7,{className:"button",color:args.color,fill:args.fill,size:args.size,disabled:args.disabled,loading:args.loading,type:args.type,mode:args.mode,expand:args.expand},args.label)),Primary={render:args=>createButton(args),args:{...ButtonComponentArgs}},Secondary={render:args=>createButton(args),args:{...Primary.args,color:"secondary",fill:"outline"}},OutlineFilled={render:args=>createButton(args,"dark"),args:{...Primary.args,fill:"outline-filled",color:"secondary"}},Ghost={render:args=>createButton(args,"dark"),args:{...Primary.args,color:"white",fill:"outline"}},Text={render:args=>createButton(args),args:{...Primary.args,color:"secondary",fill:"clear"}},CircleButton={render:args=>react.createElement(esm.I7,{color:args.color,fill:args.fill,size:args.size,disabled:args.disabled,loading:args.loading,type:args.type,mode:args.mode,expand:args.expand,shape:args.shape},react.createElement(esm.tm,{icon:"heart"})),args:{...Primary.args,color:"secondary",fill:"outline",shape:"circle"}},Disabled={render:args=>createButton(args),args:{...Primary.args,disabled:!0}},IconAndText={render:args=>react.createElement(esm.I7,{color:args.color,fill:args.fill,size:args.size,disabled:args.disabled,loading:args.loading,type:args.type,mode:args.mode,expand:args.expand,shape:args.shape},react.createElement(esm.tm,{icon:"heart"}),args.label),args:{...Primary.args}},Link={render:args=>react.createElement(esm.I7,{color:args.color,fill:args.fill,size:args.size,disabled:args.disabled,loading:args.loading,type:args.type,mode:args.mode,expand:args.expand,shape:args.shape,download:args.download,href:args.href,target:args.target},args.label),args:{...Primary.args,href:void 0,download:void 0,target:void 0},argTypes:{href:{options:["Download","Navigate"],mapping:{Download:"/custom/jsm.svg",Navigate:"https://www.juntossomosmais.com.br"}},download:{control:"text"},target:{options:["_blank","_self","_parent","_top"]}}},__namedExportsOrder=["Primary","Secondary","OutlineFilled","Ghost","Text","CircleButton","Disabled","IconAndText","Link"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  render: args => createButton(args),\n  args: {\n    ...ButtonComponentArgs\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  render: args => createButton(args),\n  args: {\n    ...Primary.args,\n    color: 'secondary',\n    fill: 'outline'\n  }\n}",...Secondary.parameters?.docs?.source}}},OutlineFilled.parameters={...OutlineFilled.parameters,docs:{...OutlineFilled.parameters?.docs,source:{originalSource:"{\n  render: args => createButton(args, 'dark'),\n  args: {\n    ...Primary.args,\n    fill: 'outline-filled',\n    color: 'secondary'\n  }\n}",...OutlineFilled.parameters?.docs?.source}}},Ghost.parameters={...Ghost.parameters,docs:{...Ghost.parameters?.docs,source:{originalSource:"{\n  render: args => createButton(args, 'dark'),\n  args: {\n    ...Primary.args,\n    color: 'white',\n    fill: 'outline'\n  }\n}",...Ghost.parameters?.docs?.source}}},Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:"{\n  render: args => createButton(args),\n  args: {\n    ...Primary.args,\n    color: 'secondary',\n    fill: 'clear'\n  }\n}",...Text.parameters?.docs?.source}}},CircleButton.parameters={...CircleButton.parameters,docs:{...CircleButton.parameters?.docs,source:{originalSource:"{\n  render: (args: any) => <AtomButton color={args.color} fill={args.fill} size={args.size} disabled={args.disabled} loading={args.loading} type={args.type} mode={args.mode} expand={args.expand} shape={args.shape}>\n      <AtomIcon icon='heart' />\n    </AtomButton>,\n  args: {\n    ...Primary.args,\n    color: 'secondary',\n    fill: 'outline',\n    shape: 'circle'\n  }\n}",...CircleButton.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: args => createButton(args),\n  args: {\n    ...Primary.args,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},IconAndText.parameters={...IconAndText.parameters,docs:{...IconAndText.parameters?.docs,source:{originalSource:"{\n  render: (args: any) => <AtomButton color={args.color} fill={args.fill} size={args.size} disabled={args.disabled} loading={args.loading} type={args.type} mode={args.mode} expand={args.expand} shape={args.shape}>\n      <AtomIcon icon='heart' />\n      {args.label}\n    </AtomButton>,\n  args: {\n    ...Primary.args\n  }\n}",...IconAndText.parameters?.docs?.source}}},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:"{\n  render: (args: any) => <AtomButton color={args.color} fill={args.fill} size={args.size} disabled={args.disabled} loading={args.loading} type={args.type} mode={args.mode} expand={args.expand} shape={args.shape} download={args.download} href={args.href} target={args.target}>\n      {args.label}\n    </AtomButton>,\n  args: {\n    ...Primary.args,\n    href: undefined,\n    download: undefined,\n    target: undefined\n  },\n  argTypes: {\n    href: {\n      options: ['Download', 'Navigate'],\n      mapping: {\n        Download: '/custom/jsm.svg',\n        Navigate: 'https://www.juntossomosmais.com.br'\n      }\n    },\n    download: {\n      control: 'text'\n    },\n    target: {\n      options: ['_blank', '_self', '_parent', '_top']\n    }\n  }\n}",...Link.parameters?.docs?.source}}}},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category.SLOTS="Slots",Category}({})},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../../packages/core/src/components/button/stories/button.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".button {\n  --atom-button-color: #25d366;\n  --atom-button-color-contrast: #fff;\n}\n","",{version:3,sources:["webpack://./../../packages/core/src/components/button/stories/button.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,kCAAkC;AACpC",sourcesContent:[".button {\n  --atom-button-color: #25d366;\n  --atom-button-color-contrast: #fff;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
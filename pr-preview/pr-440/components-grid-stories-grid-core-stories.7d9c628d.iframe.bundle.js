"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[4183],{"../../node_modules/@storybook/addon-actions/dist/decorator.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>withActions});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("../../node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors._U({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}var actions=(...args)=>{let options=config,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...config,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=action(namesObject[name],options)})),actionsObject},{document:decorator_document,Element}=external_STORYBOOK_MODULE_GLOBAL_.global,delegateEventSplitter=/^(\S+)\s*(.*)$/,matchesMethod=null!=Element&&!Element.prototype.matches?"msMatchesSelector":"matches",hasMatchInAncestry=(element,selector)=>{if(element[matchesMethod](selector))return!0;let parent=element.parentElement;return!!parent&&hasMatchInAncestry(parent,selector)},applyEventHandlers=(actionsFn,...handles)=>{let root=decorator_document&&decorator_document.getElementById("storybook-root");(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{if(null!=root){let handlers=((actionsFn,...handles)=>{let actionsObject=actionsFn(...handles);return Object.entries(actionsObject).map((([key,action])=>{let[_,eventName,selector]=key.match(delegateEventSplitter)||[];return{eventName,handler:e=>{(!selector||hasMatchInAncestry(e.target,selector))&&action(e)}}}))})(actionsFn,...handles);return handlers.forEach((({eventName,handler})=>root.addEventListener(eventName,handler))),()=>handlers.forEach((({eventName,handler})=>root.removeEventListener(eventName,handler)))}}),[root,actionsFn,handles])},withActions=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withActions",parameterName:"actions",skipIfNoParametersOrOptions:!0,wrapper:(getStory,context,{parameters})=>(parameters?.handles&&applyEventHandlers(actions,...parameters.handles),getStory(context))})},"../../packages/core/src/components/grid/stories/grid.core.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoSize:()=>AutoSize,Default:()=>Default,Offset:()=>Offset,PushAndPull:()=>PushAndPull,__namedExportsOrder:()=>__namedExportsOrder,default:()=>grid_core_stories});var lit=__webpack_require__("../../node_modules/lit/index.js"),table=__webpack_require__("../../utils/storybook/enums/table.ts");const GridStoryArgs={decorators:[__webpack_require__("../../node_modules/@storybook/addon-actions/dist/decorator.mjs").w],parameters:{docs:{description:{component:"Wrapper of the [Ionic Grid](https://ionicframework.com/docs/api/grid) component. Read the Ionic documentation for more information about the available properties and possibilities.<br><br>In our custom implementation, we have simplified the Ionic grid system by introducing the `AtomGrid` component. This component acts as a wrapper for the grid, eliminating the need for using the `ion-row` component directly. Instead, we can directly use the `atom-grid` and `atom-col` components to create our grid layout. This approach streamlines the structure and usage of the grid system, making it more intuitive and efficient for developers.<br><br>The default number of columns in the grid is `16`, but this can be changed by setting the `--grid-columns` CSS custom property. The default gap between the columns is `var(--spacing-base)` and `var(--spacing-xs)` in small screens, but this can be changed by setting the `--grid-gap` CSS custom property.<br><br>You could check our default tokens values for the grid system in the [tokens/grid](/docs/tokens-grid--docs) section."}}},argTypes:{fixed:{description:"If `true`, the Grid will be fixed and will have a consistent width based on the screen size.",defaultValue:{summary:!1},table:{category:table.b.PROPERTIES}},size:{description:"Columns can be set to specific sizes to take up a certain number out of the total number of columns, or resize their width based on the content, it accepts responsive values like `size-sm`, `size-md`, `size-lg`, `size-xl`",table:{category:table.b.PROPERTIES}},offset:{description:"Columns can be offset to the right by a certain number of columns, it accepts responsive values like `offset-sm`, `offset-md`, `offset-lg`, `offset-xl`",table:{category:table.b.PROPERTIES}},pull:{description:"Columns can be pulled to the left by a certain number of columns",table:{category:table.b.PROPERTIES}},push:{description:"Columns can be pushed to the right by a certain number of columns",table:{category:table.b.PROPERTIES}},"--grid-gap":{description:"Defines the space between the elements in a row of the Grid system. For screens below `medium` size, the gap value will be `var(--spacing-xsmall)`.",defaultValue:{summary:"var(--spacing-base)"},table:{category:table.b.CSS_CUSTOM_PROPERTIES}}}};var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),grid=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../../packages/core/src/components/grid/stories/grid.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(grid.A,options);grid.A&&grid.A.locals&&grid.A.locals;const grid_core_stories={title:"Components/Grid",...GridStoryArgs},Default={render:()=>lit.qy`
    <atom-grid>
      <atom-col class="col" size="8">
        <div>size=8</div>
      </atom-col>
      <atom-col class="col" size="6" size-md="4">
        <div>size=6 & size-md=4</div>
      </atom-col>
      <atom-col class="col" size="4" size-md="4">
        <div>size=4 & size-md=4</div>
      </atom-col>
      <atom-col class="col" size="8" size-md="6">
        <div>size=8 & size-md=6</div>
      </atom-col>
      <atom-col class="col" size="8" size-md="10">
        <div>size=8 & size-md=10</div>
      </atom-col>
      <atom-col class="col" size="8" size-md="10">
        <div>size=8 & size-md=10</div>
      </atom-col>
      <atom-col class="col" size="8" size-md="6">
        <div>size=8 & size-md=6</div>
      </atom-col>
    </atom-grid>
  `},AutoSize={render:()=>lit.qy`
    <atom-grid>
      <atom-col class="col" size="auto">
        <div>size=auto</div>
      </atom-col>
      <atom-col class="col" size="auto">
        <div>size=auto</div>
      </atom-col>
      <atom-col class="col">
        <div>default</div>
      </atom-col>
      <atom-col class="col">
        <div>default</div>
      </atom-col>
      <atom-col class="col" size="auto">
        <div>size=auto</div>
      </atom-col>
      <atom-col class="col" size="auto">
        <div>size=auto</div>
      </atom-col>
    </atom-grid>
  `},Offset={render:()=>lit.qy`
    <p><b>Column 2</b> has <code>offset</code> set to <code>"3"</code></p>
    <atom-grid>
      <atom-col class="col" size="3">
        <div>1</div>
      </atom-col>
      <atom-col class="col" offset="3">
        <div>2</div>
      </atom-col>
      <atom-col class="col">
        <div>3</div>
      </atom-col>
    </atom-grid>

    <p><b>Column 1</b> has <code>offset</code> set to <code>"4"</code></p>
    <atom-grid>
      <atom-col class="col" size="2" offset="4">
        <div>1</div>
      </atom-col>
      <atom-col class="col" size="2">
        <div>2</div>
      </atom-col>
    </atom-grid>
  `},PushAndPull={render:()=>lit.qy`
    <p>
      <b>Column 1</b> has <code>push</code> set to <code>"4"</code> and
      <b>column 2</b> has <code>pull</code> set to <code>"4"</code>
    </p>

    <atom-grid>
      <atom-col class="col" push="4" size="4">
        <div>1</div>
      </atom-col>
      <atom-col class="col" pull="4" size="4">
        <div>2</div>
      </atom-col>
      <atom-col class="col">
        <div>3</div>
      </atom-col>
    </atom-grid>
  `};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <atom-grid>\n      <atom-col class="col" size="8">\n        <div>size=8</div>\n      </atom-col>\n      <atom-col class="col" size="6" size-md="4">\n        <div>size=6 & size-md=4</div>\n      </atom-col>\n      <atom-col class="col" size="4" size-md="4">\n        <div>size=4 & size-md=4</div>\n      </atom-col>\n      <atom-col class="col" size="8" size-md="6">\n        <div>size=8 & size-md=6</div>\n      </atom-col>\n      <atom-col class="col" size="8" size-md="10">\n        <div>size=8 & size-md=10</div>\n      </atom-col>\n      <atom-col class="col" size="8" size-md="10">\n        <div>size=8 & size-md=10</div>\n      </atom-col>\n      <atom-col class="col" size="8" size-md="6">\n        <div>size=8 & size-md=6</div>\n      </atom-col>\n    </atom-grid>\n  `\n}',...Default.parameters?.docs?.source}}},AutoSize.parameters={...AutoSize.parameters,docs:{...AutoSize.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <atom-grid>\n      <atom-col class="col" size="auto">\n        <div>size=auto</div>\n      </atom-col>\n      <atom-col class="col" size="auto">\n        <div>size=auto</div>\n      </atom-col>\n      <atom-col class="col">\n        <div>default</div>\n      </atom-col>\n      <atom-col class="col">\n        <div>default</div>\n      </atom-col>\n      <atom-col class="col" size="auto">\n        <div>size=auto</div>\n      </atom-col>\n      <atom-col class="col" size="auto">\n        <div>size=auto</div>\n      </atom-col>\n    </atom-grid>\n  `\n}',...AutoSize.parameters?.docs?.source}}},Offset.parameters={...Offset.parameters,docs:{...Offset.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <p><b>Column 2</b> has <code>offset</code> set to <code>"3"</code></p>\n    <atom-grid>\n      <atom-col class="col" size="3">\n        <div>1</div>\n      </atom-col>\n      <atom-col class="col" offset="3">\n        <div>2</div>\n      </atom-col>\n      <atom-col class="col">\n        <div>3</div>\n      </atom-col>\n    </atom-grid>\n\n    <p><b>Column 1</b> has <code>offset</code> set to <code>"4"</code></p>\n    <atom-grid>\n      <atom-col class="col" size="2" offset="4">\n        <div>1</div>\n      </atom-col>\n      <atom-col class="col" size="2">\n        <div>2</div>\n      </atom-col>\n    </atom-grid>\n  `\n}',...Offset.parameters?.docs?.source}}},PushAndPull.parameters={...PushAndPull.parameters,docs:{...PushAndPull.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <p>\n      <b>Column 1</b> has <code>push</code> set to <code>"4"</code> and\n      <b>column 2</b> has <code>pull</code> set to <code>"4"</code>\n    </p>\n\n    <atom-grid>\n      <atom-col class="col" push="4" size="4">\n        <div>1</div>\n      </atom-col>\n      <atom-col class="col" pull="4" size="4">\n        <div>2</div>\n      </atom-col>\n      <atom-col class="col">\n        <div>3</div>\n      </atom-col>\n    </atom-grid>\n  `\n}',...PushAndPull.parameters?.docs?.source}}};const __namedExportsOrder=["Default","AutoSize","Offset","PushAndPull"]},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category.SLOTS="Slots",Category}({})},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../../packages/core/src/components/grid/stories/grid.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".col > div {\n  border-radius: var(--border-radius);\n  box-shadow:\n    0 2px 1px -1px var(--color-neutral-light-3),\n    0 1px 2px 0 var(--color-neutral-light-4),\n    0 1px 3px 0 var(--color-neutral-light-4);\n  color: var(--color-neutral-light-2);\n  padding: var(--spacing-xsmall);\n  text-align: center;\n}\n","",{version:3,sources:["webpack://./../../packages/core/src/components/grid/stories/grid.css"],names:[],mappings:"AAAA;EACE,mCAAmC;EACnC;;;4CAG0C;EAC1C,mCAAmC;EACnC,8BAA8B;EAC9B,kBAAkB;AACpB",sourcesContent:[".col > div {\n  border-radius: var(--border-radius);\n  box-shadow:\n    0 2px 1px -1px var(--color-neutral-light-3),\n    0 1px 2px 0 var(--color-neutral-light-4),\n    0 1px 3px 0 var(--color-neutral-light-4);\n  color: var(--color-neutral-light-2);\n  padding: var(--spacing-xsmall);\n  text-align: center;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
//# sourceMappingURL=components-grid-stories-grid-core-stories.7d9c628d.iframe.bundle.js.map
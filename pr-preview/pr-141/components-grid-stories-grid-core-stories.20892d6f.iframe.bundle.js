"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[1342],{"../../node_modules/@storybook/addon-actions/dist/decorator.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>withActions});var chunk_OPEUWD42=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs"),actions=(...args)=>{let options=chunk_OPEUWD42.vc,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...chunk_OPEUWD42.vc,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=(0,chunk_OPEUWD42.aD)(namesObject[name],options)})),actionsObject},chunk_VWCVBQ22=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs"),dist=__webpack_require__("../../node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),{document:decorator_document,Element}=dist.C,delegateEventSplitter=/^(\S+)\s*(.*)$/,matchesMethod=null!=Element&&!Element.prototype.matches?"msMatchesSelector":"matches",hasMatchInAncestry=(element,selector)=>{if(element[matchesMethod](selector))return!0;let parent=element.parentElement;return!!parent&&hasMatchInAncestry(parent,selector)},applyEventHandlers=(actionsFn,...handles)=>{let root=decorator_document&&decorator_document.getElementById("storybook-root");(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{if(null!=root){let handlers=((actionsFn,...handles)=>{let actionsObject=actionsFn(...handles);return Object.entries(actionsObject).map((([key,action])=>{let[_,eventName,selector]=key.match(delegateEventSplitter)||[];return{eventName,handler:e=>{(!selector||hasMatchInAncestry(e.target,selector))&&action(e)}}}))})(actionsFn,...handles);return handlers.forEach((({eventName,handler})=>root.addEventListener(eventName,handler))),()=>handlers.forEach((({eventName,handler})=>root.removeEventListener(eventName,handler)))}}),[root,actionsFn,handles])},withActions=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withActions",parameterName:chunk_VWCVBQ22.Sz,skipIfNoParametersOrOptions:!0,wrapper:(getStory,context,{parameters})=>(parameters?.handles&&applyEventHandlers(actions,...parameters.handles),getStory(context))})},"../../packages/core/src/components/grid/stories/grid.core.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoSize:()=>AutoSize,Default:()=>Default,Offset:()=>Offset,PushAndPull:()=>PushAndPull,__namedExportsOrder:()=>__namedExportsOrder,default:()=>grid_core_stories});var lit=__webpack_require__("../../node_modules/lit/index.js"),decorator=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/decorator.mjs"),table=__webpack_require__("../../utils/storybook/enums/table.ts");const GridStoryArgs={decorators:[decorator.R],parameters:{docs:{description:{component:"Wrapper of the **[Ionic Grid](https://ionicframework.com/docs/api/grid)** component. Read the Ionic documentation for more information about the available properties and possibilities.<br><br>In our custom implementation, we have simplified the Ionic grid system by introducing the `AtomGrid` component. This component acts as a wrapper for the grid, eliminating the need for using the `ion-row` component directly. Instead, we can directly use the `atom-grid` and `atom-col` components to create our grid layout. This approach streamlines the structure and usage of the grid system, making it more intuitive and efficient for developers."}}},argTypes:{fixed:{description:"If `true`, the Grid will be fixed and will have a consistent width based on the screen size.",defaultValue:{summary:!1},table:{category:table.W.PROPERTIES}},size:{description:"Columns can be set to specific sizes to take up a certain number out of the total number of columns, or resize their width based on the content, it accepts responsive values like `size-sm`, `size-md`, `size-lg`, `size-xl`",table:{category:table.W.PROPERTIES}},offset:{description:"Columns can be offset to the right by a certain number of columns, it accepts responsive values like `offset-sm`, `offset-md`, `offset-lg`, `offset-xl`",table:{category:table.W.PROPERTIES}},pull:{description:"Columns can be pulled to the left by a certain number of columns",table:{category:table.W.PROPERTIES}},push:{description:"Columns can be pushed to the right by a certain number of columns",table:{category:table.W.PROPERTIES}},"--grid-gap":{description:"Defines the space between the elements in a row of the Grid system. For screens below `medium` size, the gap value will be `var(--spacing-xsmall)`.",defaultValue:{summary:"var(--spacing-base)"},table:{category:table.W.CSS_CUSTOM_PROPERTIES}}}},GridCSS="\n  .col > div {\n    box-shadow:\n      0px 2px 1px -1px var(--color-neutral-light-3),\n      0px 1px 2px 0px var(--color-neutral-light-4),\n      0px 1px 3px 0px var(--color-neutral-light-4);\n    border-radius: var(--border-radius);\n    color: var(--color-neutral-light-2);\n    padding: var(--spacing-xsmall);\n    text-align: center;\n  }\n",grid_core_stories={title:"Components/Grid",...GridStoryArgs},Default={render:()=>lit.dy`
    <atom-grid>
      <atom-col class="col" size="6" size-md="8">
        <div>size=6 & size-md=8</div>
      </atom-col>
      <atom-col class="col" size="6" size-md="4">
        <div>size=6 & size-md=4</div>
      </atom-col>
      <atom-col class="col" size="6" size-md="4">
        <div>size=6 & size-md=4</div>
      </atom-col>
      <atom-col class="col" size="6" size-md="8">
        <div>size=6 & size-md=8</div>
      </atom-col>
      <atom-col class="col" size="6" size-md="8">
        <div>size=6 & size-md=8</div>
      </atom-col>
      <atom-col class="col" size="6" size-md="4">
        <div>size=6 & size-md=4</div>
      </atom-col>
    </atom-grid>

    <style>
      ${GridCSS}
    </style>
  `},AutoSize={render:()=>lit.dy`
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

    <style>
      ${GridCSS}
    </style>
  `},Offset={render:()=>lit.dy`
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

    <style>
      ${GridCSS}
    </style>
  `},PushAndPull={render:()=>lit.dy`
    <p>
      <b>Column 1</b> has <code>push</code> set to <code>"4"</code> and
      <b>column 2</b> has <code>pull</code> set to <code>"4"</code>
    </p>

    <atom-grid>
      <atom-col class="col" push="4">
        <div>1</div>
      </atom-col>
      <atom-col class="col" pull="4">
        <div>2</div>
      </atom-col>
      <atom-col class="col">
        <div>3</div>
      </atom-col>
    </atom-grid>

    <style>
      ${GridCSS}
    </style>
  `};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <atom-grid>\n      <atom-col class="col" size="6" size-md="8">\n        <div>size=6 & size-md=8</div>\n      </atom-col>\n      <atom-col class="col" size="6" size-md="4">\n        <div>size=6 & size-md=4</div>\n      </atom-col>\n      <atom-col class="col" size="6" size-md="4">\n        <div>size=6 & size-md=4</div>\n      </atom-col>\n      <atom-col class="col" size="6" size-md="8">\n        <div>size=6 & size-md=8</div>\n      </atom-col>\n      <atom-col class="col" size="6" size-md="8">\n        <div>size=6 & size-md=8</div>\n      </atom-col>\n      <atom-col class="col" size="6" size-md="4">\n        <div>size=6 & size-md=4</div>\n      </atom-col>\n    </atom-grid>\n\n    <style>\n      ${GridCSS}\n    </style>\n  `\n}',...Default.parameters?.docs?.source}}},AutoSize.parameters={...AutoSize.parameters,docs:{...AutoSize.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <atom-grid>\n      <atom-col class="col" size="auto">\n        <div>size=auto</div>\n      </atom-col>\n      <atom-col class="col" size="auto">\n        <div>size=auto</div>\n      </atom-col>\n      <atom-col class="col">\n        <div>default</div>\n      </atom-col>\n      <atom-col class="col">\n        <div>default</div>\n      </atom-col>\n      <atom-col class="col" size="auto">\n        <div>size=auto</div>\n      </atom-col>\n      <atom-col class="col" size="auto">\n        <div>size=auto</div>\n      </atom-col>\n    </atom-grid>\n\n    <style>\n      ${GridCSS}\n    </style>\n  `\n}',...AutoSize.parameters?.docs?.source}}},Offset.parameters={...Offset.parameters,docs:{...Offset.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <p><b>Column 2</b> has <code>offset</code> set to <code>"3"</code></p>\n    <atom-grid>\n      <atom-col class="col" size="3">\n        <div>1</div>\n      </atom-col>\n      <atom-col class="col" offset="3">\n        <div>2</div>\n      </atom-col>\n      <atom-col class="col">\n        <div>3</div>\n      </atom-col>\n    </atom-grid>\n\n    <p><b>Column 1</b> has <code>offset</code> set to <code>"4"</code></p>\n    <atom-grid>\n      <atom-col class="col" size="2" offset="4">\n        <div>1</div>\n      </atom-col>\n      <atom-col class="col" size="2">\n        <div>2</div>\n      </atom-col>\n    </atom-grid>\n\n    <style>\n      ${GridCSS}\n    </style>\n  `\n}',...Offset.parameters?.docs?.source}}},PushAndPull.parameters={...PushAndPull.parameters,docs:{...PushAndPull.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <p>\n      <b>Column 1</b> has <code>push</code> set to <code>"4"</code> and\n      <b>column 2</b> has <code>pull</code> set to <code>"4"</code>\n    </p>\n\n    <atom-grid>\n      <atom-col class="col" push="4">\n        <div>1</div>\n      </atom-col>\n      <atom-col class="col" pull="4">\n        <div>2</div>\n      </atom-col>\n      <atom-col class="col">\n        <div>3</div>\n      </atom-col>\n    </atom-grid>\n\n    <style>\n      ${GridCSS}\n    </style>\n  `\n}',...PushAndPull.parameters?.docs?.source}}};const __namedExportsOrder=["Default","AutoSize","Offset","PushAndPull"]},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category}({})}}]);
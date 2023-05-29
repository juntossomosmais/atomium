"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[9771],{"../../node_modules/@storybook/addon-actions/dist/decorator.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>withActions});var chunk_OPEUWD42=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs"),actions=(...args)=>{let options=chunk_OPEUWD42.vc,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...chunk_OPEUWD42.vc,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=(0,chunk_OPEUWD42.aD)(namesObject[name],options)})),actionsObject},chunk_VWCVBQ22=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs"),dist=__webpack_require__("../../node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),{document:decorator_document,Element}=dist.C,delegateEventSplitter=/^(\S+)\s*(.*)$/,matchesMethod=null!=Element&&!Element.prototype.matches?"msMatchesSelector":"matches",hasMatchInAncestry=(element,selector)=>{if(element[matchesMethod](selector))return!0;let parent=element.parentElement;return!!parent&&hasMatchInAncestry(parent,selector)},applyEventHandlers=(actionsFn,...handles)=>{let root=decorator_document&&decorator_document.getElementById("storybook-root");(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{if(null!=root){let handlers=((actionsFn,...handles)=>{let actionsObject=actionsFn(...handles);return Object.entries(actionsObject).map((([key,action])=>{let[_,eventName,selector]=key.match(delegateEventSplitter)||[];return{eventName,handler:e=>{(!selector||hasMatchInAncestry(e.target,selector))&&action(e)}}}))})(actionsFn,...handles);return handlers.forEach((({eventName,handler})=>root.addEventListener(eventName,handler))),()=>handlers.forEach((({eventName,handler})=>root.removeEventListener(eventName,handler)))}}),[root,actionsFn,handles])},withActions=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withActions",parameterName:chunk_VWCVBQ22.Sz,skipIfNoParametersOrOptions:!0,wrapper:(getStory,context,{parameters})=>(parameters?.handles&&applyEventHandlers(actions,...parameters.handles),getStory(context))})},"../../packages/core/src/components/chip/stories/chip.core.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Activated:()=>Activated,Default:()=>Default,Disabled:()=>Disabled,WithClose:()=>WithClose,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>chip_core_stories});var lit=__webpack_require__("../../node_modules/lit/index.js"),decorator=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/decorator.mjs"),table=__webpack_require__("../../utils/storybook/enums/table.ts");const ChipComponentArgs={mode:"md",disabled:!1,activated:!1,close:!1,label:"Label"},chip_core_stories={title:"Components/Chip",...{decorators:[decorator.R],parameters:{docs:{description:{component:"Wrapper of Ionic Chip component. Read the [Ionic documentation](https://ionicframework.com/docs/api/chip) for more information about the available properties and possibilities."}}},argTypes:{disabled:{control:"boolean",defaultValue:{summary:!1},description:"If true, the user cannot interact with the chip.",table:{category:table.W.PROPERTIES}},activated:{control:"boolean",defaultValue:{summary:!1},description:"If true, the chip will be activated.",table:{category:table.W.PROPERTIES}},icon:{control:"text",description:"If have an value, the chip will have an icon.",table:{category:table.W.PROPERTIES}},close:{control:"boolean",defaultValue:{summary:!1},description:"If true, the chip will have a close button.",table:{category:table.W.PROPERTIES}},mode:{control:"select",options:["md","ios"],defaultValue:{summary:"md"},description:"The mode determines which platform styles to use.",table:{category:table.W.PROPERTIES}}}}},createChip=args=>lit.dy`
    <atom-chip
      color=${args.color}
      disabled=${args.disabled}
      activated=${args.activated}
      focus=${args.focus}
      mode=${args.mode}
      icon=${args.icon}
      close=${args.close}
    >
      ${args.label}
    </atom-chip>
  `,Default={render:args=>createChip(args),args:{...ChipComponentArgs}},Disabled={render:args=>createChip(args),args:{...ChipComponentArgs,disabled:!0}},Activated={render:args=>createChip(args),args:{...ChipComponentArgs,activated:!0}},WithIcon={render:args=>createChip(args),args:{...ChipComponentArgs,icon:"checkmark"}},WithClose={render:args=>createChip(args),args:{...ChipComponentArgs,close:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => createChip(args),\n  args: {\n    ...ChipComponentArgs\n  }\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: args => createChip(args),\n  args: {\n    ...ChipComponentArgs,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Activated.parameters={...Activated.parameters,docs:{...Activated.parameters?.docs,source:{originalSource:"{\n  render: args => createChip(args),\n  args: {\n    ...ChipComponentArgs,\n    activated: true\n  }\n}",...Activated.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:"{\n  render: args => createChip(args),\n  args: {\n    ...ChipComponentArgs,\n    icon: 'checkmark'\n  }\n}",...WithIcon.parameters?.docs?.source}}},WithClose.parameters={...WithClose.parameters,docs:{...WithClose.parameters?.docs,source:{originalSource:"{\n  render: args => createChip(args),\n  args: {\n    ...ChipComponentArgs,\n    close: true\n  }\n}",...WithClose.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled","Activated","WithIcon","WithClose"]},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Category});let Category=function(Category){return Category.PROPERTIES="Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category}({})}}]);
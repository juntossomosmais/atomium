"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[2560],{"../../packages/core/src/components/input/stories/input.react.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>input_react_stories});var react=__webpack_require__("../../packages/core/react/index.js");const InputStoryArgs={parameters:{actions:{handles:["atomChange","atomFocus","atomBlur"]}},decorators:[__webpack_require__("../../node_modules/@storybook/addon-actions/dist/decorator.mjs").R],argTypes:{label:{control:"text"},labelPlacement:{control:"select",options:["fixed","stacked","floating"]},placeholder:{control:"text"},color:{control:"select",options:["default","primary","secondary"]},fill:{control:"select",options:["outline","solid"]},disabled:{control:"boolean"},type:{control:"inline-radio",options:{text:"text",password:"password"}},mode:{control:"select",options:["ios","md"]},clearInput:{control:"boolean"},clearOnEdit:{control:"boolean"},pattern:{control:"text"},required:{control:"boolean"},inputmode:{control:"select",options:["none","decimal","numeric","tel","search","text","url","email"]}}},InputComponentArgs={label:"Example input",labelPlacement:"floating",fill:"outline",color:void 0,mode:"md",disabled:!1,placeholder:"Placeholder",clearInput:!1,clearOnEdit:!1};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const input_react_stories={title:"Components/Input",component:react.dU,...InputStoryArgs},createInput=args=>(0,jsx_runtime.jsx)(react.dU,{label:args.label,labelPlacement:args.labelPlacement,fill:args.fill,color:args.color,mode:args.mode,disabled:args.disabled,placeholder:args.placeholder,type:args.type,clearOnEdit:args.clearOnEdit,pattern:args.pattern,required:args.required,inputmode:args.inputmode});createInput.displayName="createInput";const Default={render:args=>createInput(args),args:{...InputComponentArgs}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => createInput(args),\n  args: {\n    ...InputComponentArgs\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);
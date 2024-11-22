"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[449],{"../../packages/core/src/components/spinner/stories/spinner.react.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>spinner_react_stories});var esm=__webpack_require__("../../packages/core/react/dist/esm/index.js");__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const spinner_react_stories={title:"Components/Spinner",component:esm.F0,decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Spinners are inline block elements that usually appear near another element. Read the [Ionic documentation](https://ionicframework.com/docs/api/Spinner) for more information about this component."}}},argTypes:{type:{control:"select",options:["primary","secondary","dark"],defaultValue:{summary:"primary"},description:"The type of the Spinner, the component will receive the color according to its type."},size:{control:"text",defaultValue:{summary:20},description:"The type of the Spinner, the component will receive the color according to its type."}}},createSpinner=args=>(0,jsx_runtime.jsx)(esm.F0,{color:args.color});createSpinner.displayName="createSpinner";const Primary={render:args=>createSpinner(args),args:{type:"primary"}},Secondary={render:args=>createSpinner(args),args:{type:"secondary"}},Dark={render:args=>createSpinner(args),args:{type:"dark"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  render: args => createSpinner(args),\n  args: {\n    type: 'primary'\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  render: args => createSpinner(args),\n  args: {\n    type: 'secondary'\n  }\n}",...Secondary.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  render: args => createSpinner(args),\n  args: {\n    type: 'dark'\n  }\n}",...Dark.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Dark"]}}]);
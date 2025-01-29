"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[2937],{"../../packages/core/src/components/divider/stories/divider.react.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Down:()=>Down,Up:()=>Up,__namedExportsOrder:()=>__namedExportsOrder,default:()=>divider_react_stories});var esm=__webpack_require__("../../packages/core/react/dist/esm/index.js"),react=__webpack_require__("../../node_modules/react/index.js");const divider_react_stories={title:"Components/Divider",component:esm.RG,decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Badges are inline block elements that usually appear near another element. Read the [Ionic documentation](https://ionicframework.com/docs/api/Badge) for more information about this component."}}},argTypes:{type:{control:"select",options:["up","down"],defaultValue:{summary:"down"},description:"The type of the badge, the component will receive the color according to its type."}}},createDivider=args=>react.createElement(esm.RG,{type:args.type}),Up={render:args=>createDivider(args),args:{type:"up"}},Down={render:args=>createDivider(args),args:{type:"down"}},__namedExportsOrder=["Up","Down"];Up.parameters={...Up.parameters,docs:{...Up.parameters?.docs,source:{originalSource:"{\n  render: args => createDivider(args),\n  args: {\n    type: 'up'\n  }\n}",...Up.parameters?.docs?.source}}},Down.parameters={...Down.parameters,docs:{...Down.parameters?.docs,source:{originalSource:"{\n  render: args => createDivider(args),\n  args: {\n    type: 'down'\n  }\n}",...Down.parameters?.docs?.source}}}}}]);
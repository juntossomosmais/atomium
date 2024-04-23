"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[9293],{"../../packages/core/src/components/badge/stories/badge.core.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Dark:()=>Dark,Info:()=>Info,Neutral:()=>Neutral,Primary:()=>Primary,Secondary:()=>Secondary,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>badge_core_stories});var lit=__webpack_require__("../../node_modules/lit/index.js");const badge_core_stories={title:"Components/Badge",decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Badges are inline block elements that usually appear near another element. Read the [Ionic documentation](https://ionicframework.com/docs/api/Badge) for more information about this component."}}},argTypes:{type:{control:"select",options:["primary","secondary","info","success","warning","danger","neutral","dark"],defaultValue:{summary:"primary"},description:"The type of the badge, the component will receive the color according to its type."},label:{control:"text",description:"The label of the badge"}}},createBadge=args=>lit.qy` <atom-badge type="${args.type}"> ${args.label} </atom-badge> `,Primary={render:args=>createBadge(args),args:{type:"primary",label:"Badge"}},Secondary={render:args=>createBadge(args),args:{...Primary.args,type:"secondary"}},Info={render:args=>createBadge(args),args:{...Primary.args,type:"info"}},Success={render:args=>createBadge(args),args:{...Primary.args,type:"success"}},Warning={render:args=>createBadge(args),args:{...Primary.args,type:"warning"}},Danger={render:args=>createBadge(args),args:{...Primary.args,type:"danger"}},Neutral={render:args=>createBadge(args),args:{...Primary.args,type:"neutral"}},Dark={render:args=>createBadge(args),args:{...Primary.args,type:"dark"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  render: args => createBadge(args),\n  args: {\n    type: 'primary',\n    label: 'Badge'\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  render: args => createBadge(args),\n  args: {\n    ...Primary.args,\n    type: 'secondary'\n  }\n}",...Secondary.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"{\n  render: args => createBadge(args),\n  args: {\n    ...Primary.args,\n    type: 'info'\n  }\n}",...Info.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{\n  render: args => createBadge(args),\n  args: {\n    ...Primary.args,\n    type: 'success'\n  }\n}",...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  render: args => createBadge(args),\n  args: {\n    ...Primary.args,\n    type: 'warning'\n  }\n}",...Warning.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"{\n  render: args => createBadge(args),\n  args: {\n    ...Primary.args,\n    type: 'danger'\n  }\n}",...Danger.parameters?.docs?.source}}},Neutral.parameters={...Neutral.parameters,docs:{...Neutral.parameters?.docs,source:{originalSource:"{\n  render: args => createBadge(args),\n  args: {\n    ...Primary.args,\n    type: 'neutral'\n  }\n}",...Neutral.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  render: args => createBadge(args),\n  args: {\n    ...Primary.args,\n    type: 'dark'\n  }\n}",...Dark.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Info","Success","Warning","Danger","Neutral","Dark"]}}]);
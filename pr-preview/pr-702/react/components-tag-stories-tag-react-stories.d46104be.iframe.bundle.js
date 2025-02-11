"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[6693],{"../../packages/core/src/components/tag/stories/tag.react.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomColor:()=>CustomColor,Danger:()=>Danger,DangerWithIcon:()=>DangerWithIcon,Dark:()=>Dark,DarkWithIcon:()=>DarkWithIcon,Info:()=>Info,InfoWithIcon:()=>InfoWithIcon,Light:()=>Light,LightWithIcon:()=>LightWithIcon,Success:()=>Success,SuccessWithIcon:()=>SuccessWithIcon,Warning:()=>Warning,WarningWithIcon:()=>WarningWithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>tag_react_stories});var react=__webpack_require__("../../node_modules/react/index.js"),esm=__webpack_require__("../../packages/core/react/dist/esm/index.js");const tag_react_stories={title:"Components/Tag",component:esm.YH,decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Tags are non-interactive elements used to categorize, highlight or organize items in the interface. Because they have short keywords, they help in the quick recognition of a category or element. \n \n Wrapper of Ionic Badge component. Read the [Ionic documentation](https://ionicframework.com/docs/api/badge) for more information about the available properties and possibilities."}}},argTypes:{color:{control:"select",options:["success","warning","danger","neutral","dark","light"],defaultValue:{summary:"success"},description:"The type of the tag, the component will receive the color according to its type."},icon:{control:"text",description:"The name of the icon to use."},label:{control:"text",description:"The label of the tag"},customBackgroundColor:{control:"text",description:"The background color"},customTextColor:{control:"text",description:"The text and icon (if exists) color"}}},createTag=args=>react.createElement(esm.YH,{icon:args.icon,customBackgroundColor:args.customBackgroundColor,customTextColor:args.customTextColor,color:args.color},args.label),Success={render:args=>createTag(args),args:{color:"success",label:"Promotion"}},SuccessWithIcon={render:args=>createTag(args),args:{color:"success",label:"Promotion",icon:"tag"}},Danger={render:args=>createTag(args),args:{color:"danger",label:"Canceled"}},DangerWithIcon={render:args=>createTag(args),args:{color:"danger",label:"Canceled",icon:"close-circle-outline"}},Warning={render:args=>createTag(args),args:{color:"warning",label:"In Progress"}},WarningWithIcon={render:args=>createTag(args),args:{color:"warning",label:"In Progress",icon:"timer-outline"}},Info={render:args=>createTag(args),args:{color:"info",label:"Partial Delivery"}},InfoWithIcon={render:args=>createTag(args),args:{color:"info",label:"Partial Delivery",icon:"truck"}},Dark={render:args=>createTag(args),args:{color:"dark",label:"Most rescued"}},DarkWithIcon={render:args=>createTag(args),args:{color:"dark",label:"Most rescued",icon:"wallet-giftcard"}},Light={render:args=>createTag(args),args:{color:"light",label:"More Points"}},LightWithIcon={render:args=>createTag(args),args:{color:"light",label:"More Points",icon:"plus-thick"}},CustomColor={render:args=>createTag(args),args:{label:"Most Loved",icon:"heart",customBackgroundColor:"#a006fa",customTextColor:"#00ff95"}},__namedExportsOrder=["Success","SuccessWithIcon","Danger","DangerWithIcon","Warning","WarningWithIcon","Info","InfoWithIcon","Dark","DarkWithIcon","Light","LightWithIcon","CustomColor"];Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'success',\n    label: 'Promotion'\n  }\n}",...Success.parameters?.docs?.source}}},SuccessWithIcon.parameters={...SuccessWithIcon.parameters,docs:{...SuccessWithIcon.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'success',\n    label: 'Promotion',\n    icon: 'tag'\n  }\n}",...SuccessWithIcon.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'danger',\n    label: 'Canceled'\n  }\n}",...Danger.parameters?.docs?.source}}},DangerWithIcon.parameters={...DangerWithIcon.parameters,docs:{...DangerWithIcon.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'danger',\n    label: 'Canceled',\n    icon: 'close-circle-outline'\n  }\n}",...DangerWithIcon.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'warning',\n    label: 'In Progress'\n  }\n}",...Warning.parameters?.docs?.source}}},WarningWithIcon.parameters={...WarningWithIcon.parameters,docs:{...WarningWithIcon.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'warning',\n    label: 'In Progress',\n    icon: 'timer-outline'\n  }\n}",...WarningWithIcon.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'info',\n    label: 'Partial Delivery'\n  }\n}",...Info.parameters?.docs?.source}}},InfoWithIcon.parameters={...InfoWithIcon.parameters,docs:{...InfoWithIcon.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'info',\n    label: 'Partial Delivery',\n    icon: 'truck'\n  }\n}",...InfoWithIcon.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'dark',\n    label: 'Most rescued'\n  }\n}",...Dark.parameters?.docs?.source}}},DarkWithIcon.parameters={...DarkWithIcon.parameters,docs:{...DarkWithIcon.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'dark',\n    label: 'Most rescued',\n    icon: 'wallet-giftcard'\n  }\n}",...DarkWithIcon.parameters?.docs?.source}}},Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'light',\n    label: 'More Points'\n  }\n}",...Light.parameters?.docs?.source}}},LightWithIcon.parameters={...LightWithIcon.parameters,docs:{...LightWithIcon.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    color: 'light',\n    label: 'More Points',\n    icon: 'plus-thick'\n  }\n}",...LightWithIcon.parameters?.docs?.source}}},CustomColor.parameters={...CustomColor.parameters,docs:{...CustomColor.parameters?.docs,source:{originalSource:"{\n  render: args => createTag(args),\n  args: {\n    label: 'Most Loved',\n    icon: 'heart',\n    customBackgroundColor: '#a006fa',\n    customTextColor: '#00ff95'\n  }\n}",...CustomColor.parameters?.docs?.source}}}}}]);
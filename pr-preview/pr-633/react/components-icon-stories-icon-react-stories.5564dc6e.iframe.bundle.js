"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[777],{"../../packages/core/src/components/icon/stories/icon.react.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>icon_react_stories});__webpack_require__("../../node_modules/react/index.js");var dist=__webpack_require__("../../packages/core/react/dist/index.js"),table=__webpack_require__("../../utils/storybook/enums/table.ts");const IconStoryArgs={parameters:{docs:{description:{component:"Wrapper of Ionic Icon component. Read the [Ionic documentation](https://ionicframework.com/docs/api/icon) for more information about the available properties and possibilities."}}},argTypes:{icon:{control:"text",description:"The name of the icon to use.",table:{category:table.b.PROPERTIES}},color:{control:"select",description:"The color to use from your application palette.",options:["primary","secondary","tertiary","success","warning","danger","light","medium","dark","white"],table:{category:table.b.PROPERTIES}},size:{control:"text",description:"The size of the icon. Use large or small to change the size of the icon or pass a number to set the font-size in pixels.",table:{category:table.b.PROPERTIES}}}};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const icon_react_stories={title:"Components/Icon",component:dist.tm,...IconStoryArgs},createIcon=args=>(0,jsx_runtime.jsx)(dist.tm,{icon:args.icon,color:args.color,size:args.size});createIcon.displayName="createIcon";const Default={render:args=>createIcon(args),args:{icon:"heart",color:"secondary",size:""}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => createIcon(args),\n  args: {\n    ...IconComponentArgs\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category.SLOTS="Slots",Category}({})}}]);
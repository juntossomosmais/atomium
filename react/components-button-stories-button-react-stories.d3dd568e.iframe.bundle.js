"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[4964],{"../../packages/core/src/components/button/stories/button.react.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Secondary:()=>Secondary,Text:()=>Text,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button_react_stories});__webpack_require__("../../node_modules/react/index.js");var core_react=__webpack_require__("../../packages/core/react/index.js"),decorator=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/decorator.mjs"),table=__webpack_require__("../../utils/storybook/enums/table.ts");const ButtonStoryArgs={parameters:{actions:{handles:["atomClick"]}},decorators:[decorator.R],argTypes:{label:{control:"text",description:"The label of the button",table:{category:table.W.PROPERTIES}},color:{control:"select",options:["primary","secondary"],defaultValue:{summary:"primary"},description:"The color to use from your application's color palette.",table:{category:table.W.PROPERTIES}},fill:{control:"select",options:["solid","clear","outline"],defaultValue:{summary:"solid"},description:'Set to `"clear"` for a transparent button that resembles a flat button, to `"outline"` for a transparent button with a border, or to `"solid"` for a button with a filled background. The default fill is "solid" except inside of a toolbar, where the default is `"clear"`.',table:{category:table.W.PROPERTIES}},expand:{control:"select",options:["none","block"],description:'Set to `"block"` for a full-width button.',table:{category:table.W.PROPERTIES}},size:{control:"select",options:["small","default","large"],defaultValue:{summary:"default"},description:"The size of the button.",table:{category:table.W.PROPERTIES}},disabled:{control:"boolean",description:"If `true`, the user cannot interact with the button.",table:{category:table.W.PROPERTIES}},loading:{control:"boolean",description:"If `true`, the button will be show a loading indicator.",table:{category:table.W.PROPERTIES}},href:{description:"Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.",table:{category:table.W.PROPERTIES}},rel:{description:"The relationship of the linked URL as space-separated link types.",table:{category:table.W.PROPERTIES}},target:{description:'Specifies where to display the linked URL. Only applies when an href is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.',table:{category:table.W.PROPERTIES}},download:{description:"This attribute instructs browsers to download a URL.",table:{category:table.W.PROPERTIES}},type:{control:"select",options:["none","submit","reset","button"],defaultValue:{summary:"button"},description:"The type of the button.",table:{category:table.W.PROPERTIES}},mode:{control:"select",options:["md","ios"],defaultValue:{summary:"md"},description:"The mode determines which platform styles to use.",table:{category:table.W.PROPERTIES}},atomClick:{action:"atomClick",description:"Emitted when the button is clicked.",table:{category:"Events"}}}},ButtonComponentArgs={label:"Button",color:"primary",fill:"solid",size:"default",type:"button",mode:"md",expand:void 0,disabled:!1,loading:!1};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const button_react_stories={title:"Components/Button",component:core_react.rl,...ButtonStoryArgs},createButton=args=>(0,jsx_runtime.jsx)(core_react.rl,{color:args.color,fill:args.fill,size:args.size,disabled:args.disabled,loading:args.loading,type:args.type,mode:args.mode,expand:args.expand,children:args.label});createButton.displayName="createButton";const Primary={render:args=>createButton(args),args:{...ButtonComponentArgs}},Secondary={render:args=>createButton(args),args:{...Primary.args,color:"secondary",fill:"outline"}},Text={render:args=>createButton(args),args:{...Primary.args,color:"secondary",fill:"clear"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  render: args => createButton(args),\n  args: {\n    ...ButtonComponentArgs\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  render: args => createButton(args),\n  args: {\n    ...Primary.args,\n    color: 'secondary',\n    fill: 'outline'\n  }\n}",...Secondary.parameters?.docs?.source}}},Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:"{\n  render: args => createButton(args),\n  args: {\n    ...Primary.args,\n    color: 'secondary',\n    fill: 'clear'\n  }\n}",...Text.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Text"]},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Category});let Category=function(Category){return Category.PROPERTIES="Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category}({})}}]);
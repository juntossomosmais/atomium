"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[6679],{"../../packages/core/src/components/pagination/stories/pagination.core.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>pagination_core_stories});var lit=__webpack_require__("../../node_modules/lit/index.js"),table=__webpack_require__("../../utils/storybook/enums/table.ts");const pagination_core_stories={title:"Components/Pagination",...{parameters:{docs:{description:{component:"A pagination component is an interface that allows users to navigate through large amounts of content that has been split into multiple pages"}}},argTypes:{page:{control:"number",description:"Current page.",table:{category:table.b.PROPERTIES}},count:{control:"number",description:"Total pages.",table:{category:table.b.PROPERTIES}}}}},Default={render:args=>(args=>lit.qy`<atom-pagination page="${args.page}" count="${args.count}" />`)(args),args:{page:1,count:10}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => createPagination(args),\n  args: PaginationComponentArgs\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category.SLOTS="Slots",Category}({})}}]);
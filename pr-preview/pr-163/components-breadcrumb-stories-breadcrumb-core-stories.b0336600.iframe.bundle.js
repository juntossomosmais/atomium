"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[9351],{"../../packages/core/src/components/breadcrumb/stories/breadcrumb.core.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>breadcrumb_core_stories});var lit=__webpack_require__("../../node_modules/lit/index.js");const breadcrumb_core_stories={title:"Components/Breadcrumb",...{decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Breadcrumbs are navigation items that are used to indicate where a user is on site. Read the [Ionic documentation](https://ionicframework.com/docs/api/breadcrumbs) for more information about this component."}}},argTypes:{items:{description:"This is the list of items that will be displayed in the breadcrumb. Items must have `title` and `text` and optionally a `redirect` function when clicking on the item.",table:{category:__webpack_require__("../../utils/storybook/enums/table.ts").W.PROPERTIES}}}}},Default={render:()=>lit.dy`
    <atom-breadcrumb />

    <script>
      ;(function () {
        const atomBreadcrumb = document.querySelector('atom-breadcrumb')

        atomBreadcrumb.items = [
          {
            text: 'First level',
            title: 'Go to first level',
            redirect: () => console.log('/first'),
          },
          {
            text: 'Intermediary level',
            title: 'Go to intermediary level',
            redirect: () => console.log('/intermediary'),
          },
          {
            text: 'Current level',
            title: 'This is the current level',
          },
        ]
      })()
    </script>
  `};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => createBreadcrumb()\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category.SLOTS="Slots",Category}({})}}]);
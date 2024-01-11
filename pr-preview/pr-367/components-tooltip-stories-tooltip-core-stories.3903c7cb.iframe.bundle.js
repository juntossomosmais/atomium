"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[4259],{"../../packages/core/src/components/tooltip/stories/tooltip.core.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>tooltip_core_stories});var lit=__webpack_require__("../../node_modules/lit/index.js"),table=__webpack_require__("../../utils/storybook/enums/table.ts");const TooltipStoryArgs={parameters:{actions:{handles:["atomClick"]},docs:{description:{component:"Atom-Tooltip"}},layout:"centered"},argTypes:{placement:{control:"select",defaultValue:{summary:"auto"},options:["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","left"],description:"Determines placement for tooltip",table:{category:table.W.PROPERTIES}},element:{control:"text",description:"Determines which element is responsible to open/close tooltip.",table:{category:table.W.PROPERTIES}}}},tooltip_core_stories={title:"Components/Tooltip",component:"atom-tooltip",...TooltipStoryArgs},Default={render:args=>(args=>lit.dy`
    <atom-button
      fill="solid"
      size="large"
      id="${args.element}"
      aria-describedby="atom-tooltip"
    >
      Hover
    </atom-button>

    <atom-tooltip
      id="atom-tooltip"
      placement="${args.placement}"
      element="${args.element}"
    >
      Tooltip
    </atom-tooltip>
  `)(args),args:{element:"atomium-element",placement:"top",element:"elementId",placement:"auto"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => createTooltip(args),\n  args: {\n    ...TooltipComponentArgs,\n    element: 'elementId',\n    placement: 'auto'\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category.SLOTS="Slots",Category}({})}}]);
//# sourceMappingURL=components-tooltip-stories-tooltip-core-stories.3903c7cb.iframe.bundle.js.map
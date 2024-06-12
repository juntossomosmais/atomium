"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[4269],{"../../packages/core/src/components/list-slider/stories/list-slider.core.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>list_slider_core_stories});var lit=__webpack_require__("../../node_modules/lit/index.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),list_slider=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../../packages/core/src/components/list-slider/stories/list-slider.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(list_slider.A,options);list_slider.A&&list_slider.A.locals&&list_slider.A.locals;var table=__webpack_require__("../../utils/storybook/enums/table.ts");const list_slider_core_stories={title:"Components/List Slider",...{parameters:{docs:{description:{component:"List Slider is a component that displays a list of items in a horizontal slider."}}},argTypes:{hasNavigation:{description:"If `true`, the carousel will have navigation buttons.",defaultValue:{summary:!0},table:{category:table.b.PROPERTIES}},"--slider-height":{description:"The min-height of the slider.",defaultValue:{summary:"42px"},table:{category:table.b.CSS_CUSTOM_PROPERTIES}},"--slider-gap":{description:"Gap between each item in the slider.",defaultValue:{summary:"--spacing-base"},table:{category:table.b.CSS_CUSTOM_PROPERTIES}},"--button-navigation-size":{description:"The size of the navigation buttons.",defaultValue:{summary:"--spacing-xxxxlarge"},table:{category:table.b.CSS_CUSTOM_PROPERTIES}}}}},Default={render:()=>lit.qy`
    <atom-list-slider>
      <atom-list-slider-item class="slide">
        <div>Example 1</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 2</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 3</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 4</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 5</div>
      </atom-list-slider-item>
    </atom-list-slider>
  `};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => createListSlider()\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category.SLOTS="Slots",Category}({})},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!../../packages/core/src/components/list-slider/stories/list-slider.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".slide {\n  align-items: center;\n  background-color: var(--color-brand-primary-regular);\n  color: var(--color-neutral-white);\n  display: flex;\n  height: 300px;\n  justify-content: center;\n  min-width: 300px;\n}\n\n.slide:nth-child(1) {\n  background-color: var(--color-brand-primary-regular);\n}\n\n.slide:nth-child(2) {\n  background-color: var(--color-brand-secondary-regular);\n}\n\n.slide:nth-child(3) {\n  background-color: var(--color-contextual-success-regular);\n}\n\n.slide:nth-child(4) {\n  background-color: tomato;\n}\n\n.slide:nth-child(5) {\n  background-color: var(--color-contextual-warning-regular);\n}\n","",{version:3,sources:["webpack://./../../packages/core/src/components/list-slider/stories/list-slider.css"],names:[],mappings:"AAAA;EACE,mBAAmB;EACnB,oDAAoD;EACpD,iCAAiC;EACjC,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,oDAAoD;AACtD;;AAEA;EACE,sDAAsD;AACxD;;AAEA;EACE,yDAAyD;AAC3D;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,yDAAyD;AAC3D",sourcesContent:[".slide {\n  align-items: center;\n  background-color: var(--color-brand-primary-regular);\n  color: var(--color-neutral-white);\n  display: flex;\n  height: 300px;\n  justify-content: center;\n  min-width: 300px;\n}\n\n.slide:nth-child(1) {\n  background-color: var(--color-brand-primary-regular);\n}\n\n.slide:nth-child(2) {\n  background-color: var(--color-brand-secondary-regular);\n}\n\n.slide:nth-child(3) {\n  background-color: var(--color-contextual-success-regular);\n}\n\n.slide:nth-child(4) {\n  background-color: tomato;\n}\n\n.slide:nth-child(5) {\n  background-color: var(--color-contextual-warning-regular);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
//# sourceMappingURL=components-list-slider-stories-list-slider-core-stories.767e555f.iframe.bundle.js.map
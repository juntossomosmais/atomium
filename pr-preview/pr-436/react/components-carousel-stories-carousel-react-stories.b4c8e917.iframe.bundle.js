"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[1367],{"../../packages/core/src/components/carousel/stories/carousel.react.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Autoplay:()=>Autoplay,Default:()=>Default,Loop:()=>Loop,Thumbnails:()=>Thumbnails,__namedExportsOrder:()=>__namedExportsOrder,default:()=>carousel_react_stories});var esm=__webpack_require__("../../packages/core/react/dist/esm/index.js"),injectStylesIntoStyleTag=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),carousel=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!../../packages/core/src/components/carousel/stories/carousel.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(carousel.A,options);carousel.A&&carousel.A.locals&&carousel.A.locals;var table=__webpack_require__("../../utils/storybook/enums/table.ts");const CarouselStoryArgs={parameters:{docs:{description:{component:"Carousel is a slideshow for cycling through a series of content."}}},argTypes:{hasNavigation:{control:"boolean",description:"If `true`, the carousel will have navigation buttons.",defaultValue:!0,table:{category:table.b.PROPERTIES}},hasPagination:{control:"boolean",description:"If `true`, the carousel will have pagination buttons.",defaultValue:!0,table:{category:table.b.PROPERTIES}},loop:{control:"boolean",description:"If `true`, the carousel will loop and navigation buttons could be click to go to the first or last slide.",table:{category:table.b.PROPERTIES}},autoplay:{description:"When set a number, the carousel will autoplay. The number is the interval of autoplay in milliseconds.",table:{category:table.b.PROPERTIES}},thumbnails:{description:"An array of strings representing the thumbnails. When set, the carousel will have thumbnails as pagination.",table:{category:table.b.PROPERTIES}},"--carousel-height":{description:"The height of the carousel.",defaultValue:{summary:"42px"},table:{category:table.b.CSS_CUSTOM_PROPERTIES}},"--thumbnail-size":{description:"The height of the thumbnail.",defaultValue:{summary:"64px"},table:{category:table.b.CSS_CUSTOM_PROPERTIES}},"--thumbnail-object-fit":{description:"The object-fit of the thumbnail.",defaultValue:{summary:"contain"},table:{category:table.b.CSS_CUSTOM_PROPERTIES}}}},CarouselComponentArgs={loop:!1,hasNavigation:!0,hasPagination:!0};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const carousel_react_stories={title:"Components/Carousel",components:[esm.oC,esm.xE],...CarouselStoryArgs},createCarousel=args=>(0,jsx_runtime.jsxs)(esm.oC,{loop:args.loop,autoplay:args.autoplay,hasNavigation:args.hasNavigation,hasPagination:args.hasPagination,children:[(0,jsx_runtime.jsx)(esm.xE,{className:"slide",children:(0,jsx_runtime.jsx)("div",{children:"Example 1"})}),(0,jsx_runtime.jsx)(esm.xE,{className:"slide",children:(0,jsx_runtime.jsx)("div",{children:"Example 2"})}),(0,jsx_runtime.jsx)(esm.xE,{className:"slide",children:(0,jsx_runtime.jsx)("div",{children:"Example 3"})})]});createCarousel.displayName="createCarousel";const Default={render:args=>createCarousel(args),args:{...CarouselComponentArgs}},Loop={render:args=>createCarousel(args),args:{...CarouselComponentArgs,loop:!0}},Autoplay={render:args=>createCarousel(args),args:{...CarouselComponentArgs,autoplay:3e3}},Thumbnails=()=>(0,jsx_runtime.jsxs)(esm.oC,{thumbnails:["https://via.placeholder.com/50","https://via.placeholder.com/50"],children:[(0,jsx_runtime.jsx)(esm.xE,{className:"slide",children:(0,jsx_runtime.jsx)("div",{children:"Example 1"})}),(0,jsx_runtime.jsx)(esm.xE,{className:"slide",children:(0,jsx_runtime.jsx)("div",{children:"Example 2"})})]});Thumbnails.displayName="Thumbnails",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => createCarousel(args),\n  args: {\n    ...CarouselComponentArgs\n  }\n}",...Default.parameters?.docs?.source}}},Loop.parameters={...Loop.parameters,docs:{...Loop.parameters?.docs,source:{originalSource:"{\n  render: args => createCarousel(args),\n  args: {\n    ...CarouselComponentArgs,\n    loop: true\n  }\n}",...Loop.parameters?.docs?.source}}},Autoplay.parameters={...Autoplay.parameters,docs:{...Autoplay.parameters?.docs,source:{originalSource:"{\n  render: args => createCarousel(args),\n  args: {\n    ...CarouselComponentArgs,\n    autoplay: 3000\n  }\n}",...Autoplay.parameters?.docs?.source}}},Thumbnails.parameters={...Thumbnails.parameters,docs:{...Thumbnails.parameters?.docs,source:{originalSource:"() => {\n  const thumbnails = ['https://via.placeholder.com/50', 'https://via.placeholder.com/50'];\n  return <AtomCarousel thumbnails={thumbnails}>\n      <AtomCarouselItem className='slide'>\n        <div>Example 1</div>\n      </AtomCarouselItem>\n      <AtomCarouselItem className='slide'>\n        <div>Example 2</div>\n      </AtomCarouselItem>\n    </AtomCarousel>;\n}",...Thumbnails.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Loop","Autoplay","Thumbnails"]},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category.SLOTS="Slots",Category}({})},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!../../packages/core/src/components/carousel/stories/carousel.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".slide {\n  align-items: center;\n  background-color: var(--color-brand-primary-regular);\n  color: var(--color-neutral-white);\n  display: flex;\n  height: 300px;\n  justify-content: center;\n}\n\n.slide:nth-child(1) {\n  background-color: var(--color-brand-primary-regular);\n}\n\n.slide:nth-child(2) {\n  background-color: var(--color-brand-secondary-regular);\n}\n\n.slide:nth-child(3) {\n  background-color: var(--color-contextual-success-regular);\n}\n","",{version:3,sources:["webpack://./../../packages/core/src/components/carousel/stories/carousel.css"],names:[],mappings:"AAAA;EACE,mBAAmB;EACnB,oDAAoD;EACpD,iCAAiC;EACjC,aAAa;EACb,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,oDAAoD;AACtD;;AAEA;EACE,sDAAsD;AACxD;;AAEA;EACE,yDAAyD;AAC3D",sourcesContent:[".slide {\n  align-items: center;\n  background-color: var(--color-brand-primary-regular);\n  color: var(--color-neutral-white);\n  display: flex;\n  height: 300px;\n  justify-content: center;\n}\n\n.slide:nth-child(1) {\n  background-color: var(--color-brand-primary-regular);\n}\n\n.slide:nth-child(2) {\n  background-color: var(--color-brand-secondary-regular);\n}\n\n.slide:nth-child(3) {\n  background-color: var(--color-contextual-success-regular);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
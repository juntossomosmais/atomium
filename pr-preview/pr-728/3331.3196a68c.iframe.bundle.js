/*! For license information please see 3331.3196a68c.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[3331],{"../../packages/core/dist/esm/ion-col.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_col:()=>Col});var _index_73621246_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-73621246.js"),_ionic_global_808d033b_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-808d033b.js");const SIZE_TO_MEDIA={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)"},matchBreakpoint=breakpoint=>{if(void 0===breakpoint||""===breakpoint)return!0;if(window.matchMedia){const mediaQuery=SIZE_TO_MEDIA[breakpoint];return window.matchMedia(mediaQuery).matches}return!1},win="undefined"!=typeof window?window:void 0,SUPPORTS_VARS=win&&!!(win.CSS&&win.CSS.supports&&win.CSS.supports("--a: 0")),BREAKPOINTS=["","xs","sm","md","lg","xl"],Col=class{constructor(hostRef){(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.offset=void 0,this.offsetXs=void 0,this.offsetSm=void 0,this.offsetMd=void 0,this.offsetLg=void 0,this.offsetXl=void 0,this.pull=void 0,this.pullXs=void 0,this.pullSm=void 0,this.pullMd=void 0,this.pullLg=void 0,this.pullXl=void 0,this.push=void 0,this.pushXs=void 0,this.pushSm=void 0,this.pushMd=void 0,this.pushLg=void 0,this.pushXl=void 0,this.size=void 0,this.sizeXs=void 0,this.sizeSm=void 0,this.sizeMd=void 0,this.sizeLg=void 0,this.sizeXl=void 0}onResize(){(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)}getColumns(property){let matched;for(const breakpoint of BREAKPOINTS){const matches=matchBreakpoint(breakpoint),columns=this[property+breakpoint.charAt(0).toUpperCase()+breakpoint.slice(1)];matches&&void 0!==columns&&(matched=columns)}return matched}calculateSize(){const columns=this.getColumns("size");if(!columns||""===columns)return;const colSize="auto"===columns?"auto":SUPPORTS_VARS?`calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`:columns/12*100+"%";return{flex:`0 0 ${colSize}`,width:`${colSize}`,"max-width":`${colSize}`}}calculatePosition(property,modifier){const columns=this.getColumns(property);if(!columns)return;const amount=SUPPORTS_VARS?`calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`:columns>0&&columns<12?columns/12*100+"%":"auto";return{[modifier]:amount}}calculateOffset(isRTL){return this.calculatePosition("offset",isRTL?"margin-right":"margin-left")}calculatePull(isRTL){return this.calculatePosition("pull",isRTL?"left":"right")}calculatePush(isRTL){return this.calculatePosition("push",isRTL?"right":"left")}render(){const isRTL="rtl"===document.dir,mode=(0,_ionic_global_808d033b_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"32ed75d81dd09d9bc8999f6d42e5b3cb99c84d91",class:{[mode]:!0},style:Object.assign(Object.assign(Object.assign(Object.assign({},this.calculateOffset(isRTL)),this.calculatePull(isRTL)),this.calculatePush(isRTL)),this.calculateSize())},(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"38f8d0440c20cc6d1b1d6a654d07f16de61d8134"}))}};Col.style=":host{-webkit-padding-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;box-sizing:border-box;position:relative;flex-basis:0;flex-grow:1;width:100%;max-width:100%;min-height:1px}@media (min-width: 576px){:host{-webkit-padding-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px))}}@media (min-width: 768px){:host{-webkit-padding-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px))}}@media (min-width: 992px){:host{-webkit-padding-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px))}}@media (min-width: 1200px){:host{-webkit-padding-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px))}}"}}]);
/*! For license information please see 1944.d9ccf85f.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkatomium_docs=globalThis.webpackChunkatomium_docs||[]).push([[1944],{"../../packages/core/dist/esm/ion-text.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_text:()=>Text});var _index_77c1beb5_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-77c1beb5.js"),_ionic_global_98cbf2f6_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-98cbf2f6.js"),_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/theme-bc7eaa70.js");const Text=class{constructor(hostRef){(0,_index_77c1beb5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.color=void 0}render(){const mode=(0,_ionic_global_98cbf2f6_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_77c1beb5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_77c1beb5_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:(0,_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.color,{[mode]:!0})},(0,_index_77c1beb5_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}};Text.style=":host(.ion-color){color:var(--ion-color-base)}"},"../../packages/core/dist/esm/theme-bc7eaa70.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
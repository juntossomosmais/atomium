/*! For license information please see 9416.7e94abd9.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[9416],{"../../packages/core/dist/esm/ion-skeleton-text.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_skeleton_text:()=>SkeletonText});var _index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-deee0f5a.js"),_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/theme-516b22d6.js"),_ionic_global_3b62892f_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-3b62892f.js");const SkeletonText=class{constructor(hostRef){(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionStyle=(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionStyle",7),this.animated=!1}componentWillLoad(){this.emitStyle()}emitStyle(){this.ionStyle.emit({"skeleton-text":!0})}render(){const animated=this.animated&&_ionic_global_3b62892f_js__WEBPACK_IMPORTED_MODULE_1__.c.getBoolean("animated",!0),inMedia=(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_2__.h)("ion-avatar",this.el)||(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_2__.h)("ion-thumbnail",this.el),mode=(0,_ionic_global_3b62892f_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"fdfabf9364caf507450239b62be24f08873bd650",class:{[mode]:!0,"skeleton-text-animated":animated,"in-media":inMedia}},(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"3482c88dcc177547185ce87972afa064a542367d"}," "))}get el(){return(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}};SkeletonText.style=":host{--background:rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065);border-radius:var(--border-radius, inherit);display:block;width:100%;height:inherit;margin-top:4px;margin-bottom:4px;background:var(--background);line-height:10px;user-select:none;pointer-events:none}span{display:inline-block}:host(.in-media){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;height:100%}:host(.skeleton-text-animated){position:relative;background:linear-gradient(to right, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065) 8%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.135) 18%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065) 33%);background-size:800px 104px;animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:shimmer;animation-timing-function:linear}@keyframes shimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}"},"../../packages/core/dist/esm/theme-516b22d6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
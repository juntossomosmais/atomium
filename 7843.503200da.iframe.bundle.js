/*! For license information please see 7843.503200da.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[7843],{"../../packages/core/dist/esm/ion-card-header.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_card_header:()=>CardHeader});var _index_03927578_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-03927578.js"),_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/theme-516b22d6.js"),_ionic_global_52654a6b_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-52654a6b.js");const CardHeader=class{constructor(hostRef){(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.color=void 0,this.translucent=!1}render(){const mode=(0,_ionic_global_52654a6b_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"44077ad8e3edf7726d0f7a039046e32dc56a83c9",class:(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.color,{"card-header-translucent":this.translucent,"ion-inherit-color":!0,[mode]:!0})},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"51b6f4048d25521ece18d79e5361c762af41cae7"}))}};CardHeader.style={ios:":host{--background:transparent;--color:inherit;display:flex;position:relative;flex-direction:column;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:16px;flex-direction:column-reverse}@supports (backdrop-filter: blur(0)){:host(.card-header-translucent){background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);backdrop-filter:saturate(180%) blur(30px)}}",md:":host{--background:transparent;--color:inherit;display:flex;position:relative;flex-direction:column;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:16px;padding-bottom:16px}::slotted(ion-card-title:not(:first-child)),::slotted(ion-card-subtitle:not(:first-child)){margin-top:8px}"}},"../../packages/core/dist/esm/theme-516b22d6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
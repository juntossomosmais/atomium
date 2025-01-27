/*! For license information please see 2502.1c0acdb1.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[2502],{"../../packages/core/dist/esm/ion-router-link.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_router_link:()=>RouterLink});var _index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-6d0a42e8.js"),_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/theme-516b22d6.js"),_ionic_global_ec5a1fee_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-ec5a1fee.js");const RouterLink=class{constructor(hostRef){(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.onClick=ev=>{(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_2__.o)(this.href,ev,this.routerDirection,this.routerAnimation)},this.color=void 0,this.href=void 0,this.rel=void 0,this.routerDirection="forward",this.routerAnimation=void 0,this.target=void 0}render(){const mode=(0,_ionic_global_ec5a1fee_js__WEBPACK_IMPORTED_MODULE_1__.g)(this),attrs={href:this.href,rel:this.rel,target:this.target};return(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"529ceed5beaf92d7b4cc315c82f449eac18310e8",onClick:this.onClick,class:(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.color,{[mode]:!0,"ion-activatable":!0})},(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",Object.assign({key:"d5f1f8b256695d70bdafd20ff3d1b625963fa2da"},attrs),(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"613fcdb36a71e076f989551ea21f1d5c118b1cd2"})))}};RouterLink.style=":host{--background:transparent;--color:var(--ion-color-primary, #0054e9);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},"../../packages/core/dist/esm/theme-516b22d6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
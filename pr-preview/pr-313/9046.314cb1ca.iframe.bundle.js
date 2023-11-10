/*! For license information please see 9046.314cb1ca.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[9046],{"../../packages/core/dist/esm/ion-title.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_title:()=>ToolbarTitle});var _index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-16e36c7a.js"),_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/theme-bc7eaa70.js"),_ionic_global_aac7394f_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-aac7394f.js");const ToolbarTitle=class{constructor(hostRef){(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionStyle=(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionStyle",7),this.color=void 0,this.size=void 0}sizeChanged(){this.emitStyle()}connectedCallback(){this.emitStyle()}emitStyle(){const size=this.getSize();this.ionStyle.emit({[`title-${size}`]:!0})}getSize(){return void 0!==this.size?this.size:"default"}render(){const mode=(0,_ionic_global_aac7394f_js__WEBPACK_IMPORTED_MODULE_1__.g)(this),size=this.getSize();return(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:(0,_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.color,{[mode]:!0,[`title-${size}`]:!0,"title-rtl":"rtl"===document.dir})},(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"toolbar-title"},(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}get el(){return(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{size:["sizeChanged"]}}};ToolbarTitle.style={ios:":host{--color:initial;display:flex;flex:1;align-items:center;transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{top:0;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;transform:translateZ(0);font-size:min(1.0625rem, 20.4px);font-weight:600;text-align:center;box-sizing:border-box;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(:dir(rtl)){left:unset;right:unset;right:0}}}:host(.title-small){-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:min(0.8125rem, 23.4px);font-weight:normal}:host(.title-large){-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:2px;padding-bottom:4px;transform-origin:left center;position:static;align-items:flex-end;min-width:100%;font-size:min(2.125rem, 61.2px);font-weight:700;text-align:start}:host(.title-large.title-rtl){transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000);font-family:var(--ion-font-family)}:host(.title-large) .toolbar-title{transform-origin:inherit;width:auto}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{transform-origin:calc(100% - inherit)}@supports selector(:dir(rtl)){:host(.title-large:dir(rtl)) .toolbar-title{transform-origin:calc(100% - inherit)}}",md:":host{--color:initial;display:flex;flex:1;align-items:center;transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;font-size:1.25rem;font-weight:500;letter-spacing:0.0125em}:host(.title-small){width:100%;height:100%;font-size:0.9375rem;font-weight:normal}"}},"../../packages/core/dist/esm/theme-bc7eaa70.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
/*! For license information please see 6944.ee349d67.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[6944],{"../../packages/core/dist/esm/ion-toolbar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_toolbar:()=>Toolbar});var _index_6e4bfe34_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-6e4bfe34.js"),_ionic_global_b629af39_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-b629af39.js"),_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/theme-bc7eaa70.js");const Toolbar=class{constructor(hostRef){(0,_index_6e4bfe34_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.childrenStyles=new Map,this.color=void 0}componentWillLoad(){const buttons=Array.from(this.el.querySelectorAll("ion-buttons")),firstButtons=buttons.find((button=>"start"===button.slot));firstButtons&&firstButtons.classList.add("buttons-first-slot");const buttonsReversed=buttons.reverse(),lastButtons=buttonsReversed.find((button=>"end"===button.slot))||buttonsReversed.find((button=>"primary"===button.slot))||buttonsReversed.find((button=>"secondary"===button.slot));lastButtons&&lastButtons.classList.add("buttons-last-slot")}childrenStyle(ev){ev.stopPropagation();const tagName=ev.target.tagName,updatedStyles=ev.detail,newStyles={},childStyles=this.childrenStyles.get(tagName)||{};let hasStyleChange=!1;Object.keys(updatedStyles).forEach((key=>{const childKey=`toolbar-${key}`,newValue=updatedStyles[key];newValue!==childStyles[childKey]&&(hasStyleChange=!0),newValue&&(newStyles[childKey]=!0)})),hasStyleChange&&(this.childrenStyles.set(tagName,newStyles),(0,_index_6e4bfe34_js__WEBPACK_IMPORTED_MODULE_0__.f)(this))}render(){const mode=(0,_ionic_global_b629af39_js__WEBPACK_IMPORTED_MODULE_1__.g)(this),childStyles={};return this.childrenStyles.forEach((value=>{Object.assign(childStyles,value)})),(0,_index_6e4bfe34_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6e4bfe34_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:Object.assign(Object.assign({},childStyles),(0,_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.color,{[mode]:!0,"in-toolbar":(0,_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_2__.h)("ion-toolbar",this.el)}))},(0,_index_6e4bfe34_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"toolbar-background"}),(0,_index_6e4bfe34_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"toolbar-container"},(0,_index_6e4bfe34_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"start"}),(0,_index_6e4bfe34_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"secondary"}),(0,_index_6e4bfe34_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"toolbar-content"},(0,_index_6e4bfe34_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)),(0,_index_6e4bfe34_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"primary"}),(0,_index_6e4bfe34_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"end"})))}get el(){return(0,_index_6e4bfe34_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}};Toolbar.style={ios:":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;flex-direction:row;align-items:center;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{flex:1;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){order:2}::slotted([slot=secondary]){order:3}::slotted([slot=primary]){order:5;text-align:end}::slotted([slot=end]){order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{flex-wrap:wrap;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{flex:1;order:8;min-width:100%}",md:":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;flex-direction:row;align-items:center;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{flex:1;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){-webkit-margin-start:4px;margin-inline-start:4px}::slotted(.buttons-last-slot){-webkit-margin-end:4px;margin-inline-end:4px}::slotted([slot=start]){order:2}::slotted([slot=secondary]){order:4}::slotted([slot=primary]){order:5;text-align:end}::slotted([slot=end]){order:6;text-align:end}"}},"../../packages/core/dist/esm/theme-bc7eaa70.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
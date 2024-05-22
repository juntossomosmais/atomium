/*! For license information please see 3435.bfd8ac1d.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[3435],{"../../packages/core/dist/esm/ion-toolbar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_toolbar:()=>Toolbar});var _index_03927578_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-03927578.js"),_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/theme-516b22d6.js"),_ionic_global_52654a6b_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-52654a6b.js");const Toolbar=class{constructor(hostRef){(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.childrenStyles=new Map,this.color=void 0}componentWillLoad(){const buttons=Array.from(this.el.querySelectorAll("ion-buttons")),firstButtons=buttons.find((button=>"start"===button.slot));firstButtons&&firstButtons.classList.add("buttons-first-slot");const buttonsReversed=buttons.reverse(),lastButtons=buttonsReversed.find((button=>"end"===button.slot))||buttonsReversed.find((button=>"primary"===button.slot))||buttonsReversed.find((button=>"secondary"===button.slot));lastButtons&&lastButtons.classList.add("buttons-last-slot")}childrenStyle(ev){ev.stopPropagation();const tagName=ev.target.tagName,updatedStyles=ev.detail,newStyles={},childStyles=this.childrenStyles.get(tagName)||{};let hasStyleChange=!1;Object.keys(updatedStyles).forEach((key=>{const childKey=`toolbar-${key}`,newValue=updatedStyles[key];newValue!==childStyles[childKey]&&(hasStyleChange=!0),newValue&&(newStyles[childKey]=!0)})),hasStyleChange&&(this.childrenStyles.set(tagName,newStyles),(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.f)(this))}render(){const mode=(0,_ionic_global_52654a6b_js__WEBPACK_IMPORTED_MODULE_1__.g)(this),childStyles={};return this.childrenStyles.forEach((value=>{Object.assign(childStyles,value)})),(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"fdd8621b4f69ce650b5aaf4fb6bffde29aa5ad65",class:Object.assign(Object.assign({},childStyles),(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.color,{[mode]:!0,"in-toolbar":(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_2__.h)("ion-toolbar",this.el)}))},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"c6ad5434546e2046a83574ea92a03a3f77d0a9e3",class:"toolbar-background"}),(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"3b79dd20c3e8252cacfd46a82428df9ba0b8b86e",class:"toolbar-container"},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"514259a8b76db9f3a587a7667b5e37fd8ade9481",name:"start"}),(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"d9ab68f0626f4ac8b83d21663eb67a47b76d809b",name:"secondary"}),(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"2c21da88b67a7d7eef280e517bda9982264c7be4",class:"toolbar-content"},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"ac2b7c8f20c5ac755df9032809c73eab9e767e36"})),(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"2ddd3b7e3803f2d56c32743dcfc114ddcb8684a2",name:"primary"}),(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"27483847d4333b4492506da33185c9ba1aa824a7",name:"end"})))}get el(){return(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}};Toolbar.style={ios:":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;flex-direction:row;align-items:center;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{flex:1;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){order:2}::slotted([slot=secondary]){order:3}::slotted([slot=primary]){order:5;text-align:end}::slotted([slot=end]){order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{flex-wrap:wrap;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{flex:1;order:8;min-width:100%}",md:":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;flex-direction:row;align-items:center;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{flex:1;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){-webkit-margin-start:4px;margin-inline-start:4px}::slotted(.buttons-last-slot){-webkit-margin-end:4px;margin-inline-end:4px}::slotted([slot=start]){order:2}::slotted([slot=secondary]){order:4}::slotted([slot=primary]){order:5;text-align:end}::slotted([slot=end]){order:6;text-align:end}"}},"../../packages/core/dist/esm/theme-516b22d6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
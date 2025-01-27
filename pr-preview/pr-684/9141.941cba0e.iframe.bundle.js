/*! For license information please see 9141.941cba0e.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[9141],{"../../packages/core/dist/esm/ion-item-option.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_item_option:()=>ItemOption});var _index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-6d0a42e8.js"),_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/theme-516b22d6.js"),_ionic_global_ec5a1fee_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-ec5a1fee.js");const ItemOption=class{constructor(hostRef){(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.onClick=ev=>{ev.target.closest("ion-item-option")&&ev.preventDefault()},this.color=void 0,this.disabled=!1,this.download=void 0,this.expandable=!1,this.href=void 0,this.rel=void 0,this.target=void 0,this.type="button"}render(){const{disabled,expandable,href}=this,TagType=void 0===href?"button":"a",mode=(0,_ionic_global_ec5a1fee_js__WEBPACK_IMPORTED_MODULE_1__.g)(this),attrs="button"===TagType?{type:this.type}:{download:this.download,href:this.href,target:this.target};return(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"89310624997821858c1abde60c0ffb142ca466e0",onClick:this.onClick,class:(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.color,{[mode]:!0,"item-option-disabled":disabled,"item-option-expandable":expandable,"ion-activatable":!0})},(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(TagType,Object.assign({key:"e4dfbb3048eed03a7f7e84c6f75545e0ca9b45fb"},attrs,{class:"button-native",part:"native",disabled}),(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"dffcf437fbdc15f2e7a19e60a015e90c73c8377d",class:"button-inner"},(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"48a23512e0601e062118d8b2c46c8bb96f25509f",name:"top"}),(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"952a9a9aa3a476aa1f4408d7e208bf9e916b8c30",class:"horizontal-wrapper"},(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"f8d18a61c1ecec4a22a55443cf72bbc51383b64f",name:"start"}),(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"1f9f219e6f879d2e0bf6d80cf0d3f518eb14ce0e",name:"icon-only"}),(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"a55adcdbe68131e5b1855c2dd45dd9454ab544fb"}),(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"3c4c85a4fbb7efc797d8bc5adf6d238da022ff9f",name:"end"})),(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"503c7e4b306745c523f57f24399ea06ba9b1e21d",name:"bottom"})),"md"===mode&&(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-ripple-effect",{key:"b0e270b0c4f3ff9f9b6d74bad12a9278d7633226"})))}get el(){return(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}};ItemOption.style={ios:":host{--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;appearance:none;box-sizing:border-box}.button-inner{display:flex;flex-flow:column nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:flex;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%}::slotted(*){flex-shrink:0}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}:host(.item-option-expandable){flex-shrink:0;transition-duration:0;transition-property:none;transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:clamp(16px, 1rem, 35.2px)}:host(.ion-activated){background:var(--ion-color-primary-shade, #004acd)}:host(.ion-color.ion-activated){background:var(--ion-color-shade)}",md:":host{--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;appearance:none;box-sizing:border-box}.button-inner{display:flex;flex-flow:column nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:flex;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%}::slotted(*){flex-shrink:0}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}:host(.item-option-expandable){flex-shrink:0;transition-duration:0;transition-property:none;transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:0.875rem;font-weight:500;text-transform:uppercase}"}},"../../packages/core/dist/esm/theme-516b22d6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
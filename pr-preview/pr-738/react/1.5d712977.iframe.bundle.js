"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[1],{"../../packages/core/dist/esm/ion-fab-list.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_fab_list:()=>FabList});var _index_73621246_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-73621246.js"),_ionic_global_808d033b_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-808d033b.js");const FabList=class{constructor(hostRef){(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.activated=!1,this.side="bottom"}activatedChanged(activated){const fabs=Array.from(this.el.querySelectorAll("ion-fab-button")),timeout=activated?30:0;fabs.forEach(((fab,i)=>{setTimeout((()=>fab.show=activated),i*timeout)}))}render(){const mode=(0,_ionic_global_808d033b_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"64b33366447f66c7f979cfac56307fbb1a6fac1c",class:{[mode]:!0,"fab-list-active":this.activated,[`fab-list-side-${this.side}`]:!0}},(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"d9f474f7f20fd7e813db358fddc720534ca05bb6"}))}get el(){return(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{activated:["activatedChanged"]}}};FabList.style=":host{margin-left:0;margin-right:0;margin-top:calc(100% + 10px);margin-bottom:calc(100% + 10px);display:none;position:absolute;top:0;flex-direction:column;align-items:center;min-width:56px;min-height:56px}:host(.fab-list-active){display:flex}::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:8px;margin-bottom:8px;width:40px;height:40px;transform:scale(0);opacity:0;visibility:hidden}:host(.fab-list-side-top) ::slotted(.fab-button-in-list),:host(.fab-list-side-bottom) ::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px}:host(.fab-list-side-start) ::slotted(.fab-button-in-list),:host(.fab-list-side-end) ::slotted(.fab-button-in-list){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted(.fab-button-in-list.fab-button-show){transform:scale(1);opacity:1;visibility:visible}:host(.fab-list-side-top){top:auto;bottom:0;flex-direction:column-reverse}:host(.fab-list-side-start){-webkit-margin-start:calc(100% + 10px);margin-inline-start:calc(100% + 10px);-webkit-margin-end:calc(100% + 10px);margin-inline-end:calc(100% + 10px);margin-top:0;margin-bottom:0;flex-direction:row-reverse}:host(.fab-list-side-start){inset-inline-end:0}:host(.fab-list-side-end){-webkit-margin-start:calc(100% + 10px);margin-inline-start:calc(100% + 10px);-webkit-margin-end:calc(100% + 10px);margin-inline-end:calc(100% + 10px);margin-top:0;margin-bottom:0;flex-direction:row}:host(.fab-list-side-end){inset-inline-start:0}"}}]);
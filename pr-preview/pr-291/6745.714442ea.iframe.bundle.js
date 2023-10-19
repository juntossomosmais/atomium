"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[6745],{"../../packages/core/dist/esm/ion-fab-list.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_fab_list:()=>FabList});var _index_8b9b4f46_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-8b9b4f46.js"),_ionic_global_b152ee50_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-b152ee50.js");const FabList=class{constructor(hostRef){(0,_index_8b9b4f46_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.activated=!1,this.side="bottom"}activatedChanged(activated){const fabs=Array.from(this.el.querySelectorAll("ion-fab-button")),timeout=activated?30:0;fabs.forEach(((fab,i)=>{setTimeout((()=>fab.show=activated),i*timeout)}))}render(){const mode=(0,_ionic_global_b152ee50_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_8b9b4f46_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_8b9b4f46_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[mode]:!0,"fab-list-active":this.activated,[`fab-list-side-${this.side}`]:!0}},(0,_index_8b9b4f46_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}get el(){return(0,_index_8b9b4f46_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{activated:["activatedChanged"]}}};FabList.style=":host{margin-left:0;margin-right:0;margin-top:66px;margin-bottom:66px;display:none;position:absolute;top:0;flex-direction:column;align-items:center;min-width:56px;min-height:56px}:host(.fab-list-active){display:flex}::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:8px;margin-bottom:8px;width:40px;height:40px;transform:scale(0);opacity:0;visibility:hidden}:host(.fab-list-side-top) ::slotted(.fab-button-in-list),:host(.fab-list-side-bottom) ::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px}:host(.fab-list-side-start) ::slotted(.fab-button-in-list),:host(.fab-list-side-end) ::slotted(.fab-button-in-list){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted(.fab-button-in-list.fab-button-show){transform:scale(1);opacity:1;visibility:visible}:host(.fab-list-side-top){top:auto;bottom:0;flex-direction:column-reverse}:host(.fab-list-side-start){-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px;margin-top:0;margin-bottom:0;flex-direction:row-reverse}@supports (inset-inline-start: 0){:host(.fab-list-side-start){inset-inline-end:0}}@supports not (inset-inline-start: 0){:host(.fab-list-side-start){right:0}:host-context([dir=rtl]):host(.fab-list-side-start),:host-context([dir=rtl]).fab-list-side-start{left:unset;right:unset;left:0}@supports selector(:dir(rtl)){:host(.fab-list-side-start):dir(rtl){left:unset;right:unset;left:0}}}:host(.fab-list-side-end){-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px;margin-top:0;margin-bottom:0;flex-direction:row}@supports (inset-inline-start: 0){:host(.fab-list-side-end){inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.fab-list-side-end){left:0}:host-context([dir=rtl]):host(.fab-list-side-end),:host-context([dir=rtl]).fab-list-side-end{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.fab-list-side-end):dir(rtl){left:unset;right:unset;right:0}}}"}}]);
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[9116],{"../../packages/core/dist/esm/ion-fab.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_fab:()=>Fab});var _index_8b9b4f46_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-8b9b4f46.js"),_ionic_global_b152ee50_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-b152ee50.js");const Fab=class{constructor(hostRef){(0,_index_8b9b4f46_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.horizontal=void 0,this.vertical=void 0,this.edge=!1,this.activated=!1}activatedChanged(){const activated=this.activated,fab=this.getFab();fab&&(fab.activated=activated),Array.from(this.el.querySelectorAll("ion-fab-list")).forEach((list=>{list.activated=activated}))}componentDidLoad(){this.activated&&this.activatedChanged()}async close(){this.activated=!1}getFab(){return this.el.querySelector("ion-fab-button")}async toggle(){!!this.el.querySelector("ion-fab-list")&&(this.activated=!this.activated)}render(){const{horizontal,vertical,edge}=this,mode=(0,_ionic_global_b152ee50_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_8b9b4f46_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_8b9b4f46_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[mode]:!0,[`fab-horizontal-${horizontal}`]:void 0!==horizontal,[`fab-vertical-${vertical}`]:void 0!==vertical,"fab-edge":edge}},(0,_index_8b9b4f46_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}get el(){return(0,_index_8b9b4f46_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{activated:["activatedChanged"]}}};Fab.style=":host{position:absolute;z-index:999}:host(.fab-horizontal-center){-webkit-margin-start:-28px;margin-inline-start:-28px}@supports (inset-inline-start: 0){:host(.fab-horizontal-center){inset-inline-start:50%}}@supports not (inset-inline-start: 0){:host(.fab-horizontal-center){left:50%}:host-context([dir=rtl]):host(.fab-horizontal-center),:host-context([dir=rtl]).fab-horizontal-center{left:unset;right:unset;right:50%}@supports selector(:dir(rtl)){:host(.fab-horizontal-center):dir(rtl){left:unset;right:unset;right:50%}}}@supports (inset-inline-start: 0){:host(.fab-horizontal-start){inset-inline-start:calc(10px + var(--ion-safe-area-left, 0px))}}@supports not (inset-inline-start: 0){:host(.fab-horizontal-start){left:calc(10px + var(--ion-safe-area-left, 0px))}:host-context([dir=rtl]):host(.fab-horizontal-start),:host-context([dir=rtl]).fab-horizontal-start{left:unset;right:unset;right:calc(10px + var(--ion-safe-area-left, 0px))}@supports selector(:dir(rtl)){:host(.fab-horizontal-start):dir(rtl){left:unset;right:unset;right:calc(10px + var(--ion-safe-area-left, 0px))}}}@supports (inset-inline-start: 0){:host(.fab-horizontal-end){inset-inline-end:calc(10px + var(--ion-safe-area-right, 0px))}}@supports not (inset-inline-start: 0){:host(.fab-horizontal-end){right:calc(10px + var(--ion-safe-area-right, 0px))}:host-context([dir=rtl]):host(.fab-horizontal-end),:host-context([dir=rtl]).fab-horizontal-end{left:unset;right:unset;left:calc(10px + var(--ion-safe-area-right, 0px))}@supports selector(:dir(rtl)){:host(.fab-horizontal-end):dir(rtl){left:unset;right:unset;left:calc(10px + var(--ion-safe-area-right, 0px))}}}:host(.fab-vertical-top){top:10px}:host(.fab-vertical-top.fab-edge){top:-28px}:host(.fab-vertical-bottom){bottom:10px}:host(.fab-vertical-bottom.fab-edge){bottom:-28px}:host(.fab-vertical-center){margin-top:-28px;top:50%}"}}]);
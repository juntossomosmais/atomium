"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[8188],{"../../packages/core/dist/esm/ion-backdrop.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_backdrop:()=>Backdrop});var _index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-deee0f5a.js"),_ionic_global_3b62892f_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-3b62892f.js");const Backdrop=class{constructor(hostRef){(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionBackdropTap=(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionBackdropTap",7),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}onMouseDown(ev){this.emitTap(ev)}emitTap(ev){this.stopPropagation&&(ev.preventDefault(),ev.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}render(){const mode=(0,_ionic_global_3b62892f_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"7abaf2c310aa399607451b14063265e8a5846938","aria-hidden":"true",class:{[mode]:!0,"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}})}};Backdrop.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",md:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"}}}]);
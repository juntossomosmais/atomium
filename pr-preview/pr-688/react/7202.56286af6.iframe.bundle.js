"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[7202],{"../../packages/core/dist/esm/ion-menu-toggle.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_menu_toggle:()=>MenuToggle});var _index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-6d0a42e8.js"),_index_bfdc0a35_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/index-bfdc0a35.js"),_ionic_global_ec5a1fee_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/ionic-global-ec5a1fee.js"),_menu_toggle_util_3c186bff_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/menu-toggle-util-3c186bff.js");__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js"),__webpack_require__("../../packages/core/dist/esm/hardware-back-button-597914ed.js"),__webpack_require__("../../packages/core/dist/esm/animation-aa17f0ca.js");const MenuToggle=class{constructor(hostRef){(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.onClick=()=>_index_bfdc0a35_js__WEBPACK_IMPORTED_MODULE_1__.m.toggle(this.menu),this.visible=!1,this.menu=void 0,this.autoHide=!0}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await(0,_menu_toggle_util_3c186bff_js__WEBPACK_IMPORTED_MODULE_3__.u)(this.menu)}render(){const mode=(0,_ionic_global_ec5a1fee_js__WEBPACK_IMPORTED_MODULE_2__.g)(this),hidden=this.autoHide&&!this.visible;return(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"7c27ea5b0795676bf5cb33e1f83aa142c197f64e",onClick:this.onClick,"aria-hidden":hidden?"true":null,class:{[mode]:!0,"menu-toggle-hidden":hidden}},(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"69f187becedc0fe34603d41d279f043cf0fdf776"}))}};MenuToggle.style=":host(.menu-toggle-hidden){display:none}"}}]);
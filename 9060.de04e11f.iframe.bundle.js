"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[9060],{"../../packages/core/dist/esm/ion-menu-toggle.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_menu_toggle:()=>MenuToggle});var _index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-16e36c7a.js"),_index_dcba25ea_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/index-dcba25ea.js"),_ionic_global_aac7394f_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/ionic-global-aac7394f.js"),_menu_toggle_util_6094e4c4_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/menu-toggle-util-6094e4c4.js");__webpack_require__("../../packages/core/dist/esm/animation-b47b2621.js"),__webpack_require__("../../packages/core/dist/esm/index-938c089e.js");const MenuToggle=class{constructor(hostRef){(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.onClick=()=>_index_dcba25ea_js__WEBPACK_IMPORTED_MODULE_1__.m.toggle(this.menu),this.visible=!1,this.menu=void 0,this.autoHide=!0}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await(0,_menu_toggle_util_6094e4c4_js__WEBPACK_IMPORTED_MODULE_3__.u)(this.menu)}render(){const mode=(0,_ionic_global_aac7394f_js__WEBPACK_IMPORTED_MODULE_2__.g)(this),hidden=this.autoHide&&!this.visible;return(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.H,{onClick:this.onClick,"aria-hidden":hidden?"true":null,class:{[mode]:!0,"menu-toggle-hidden":hidden}},(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}};MenuToggle.style=":host(.menu-toggle-hidden){display:none}"}}]);
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[3761],{"../../packages/core/dist/esm/ion-menu-toggle.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_menu_toggle:()=>MenuToggle});var _index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-7c3eb939.js"),_index_9a34c16b_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/index-9a34c16b.js"),_ionic_global_3da28692_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/ionic-global-3da28692.js"),_menu_toggle_util_fe4df216_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/menu-toggle-util-fe4df216.js");__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js"),__webpack_require__("../../packages/core/dist/esm/hardware-back-button-87888d31.js"),__webpack_require__("../../packages/core/dist/esm/animation-022a9434.js");const MenuToggle=class{constructor(hostRef){(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.onClick=()=>_index_9a34c16b_js__WEBPACK_IMPORTED_MODULE_1__.m.toggle(this.menu),this.visible=!1,this.menu=void 0,this.autoHide=!0}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await(0,_menu_toggle_util_fe4df216_js__WEBPACK_IMPORTED_MODULE_3__.u)(this.menu)}render(){const mode=(0,_ionic_global_3da28692_js__WEBPACK_IMPORTED_MODULE_2__.g)(this),hidden=this.autoHide&&!this.visible;return(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"5b75baade530bf9e7ed9165a5db3e513975e22f2",onClick:this.onClick,"aria-hidden":hidden?"true":null,class:{[mode]:!0,"menu-toggle-hidden":hidden}},(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"65dea458274b685125c22af54aa153cf4977113c"}))}};MenuToggle.style=":host(.menu-toggle-hidden){display:none}"}}]);
"use strict";(globalThis.webpackChunkatomium_docs=globalThis.webpackChunkatomium_docs||[]).push([[3673],{"../../packages/core/dist/esm/ion-app.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_app:()=>App});var _index_77c1beb5_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-77c1beb5.js"),_ionic_global_98cbf2f6_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-98cbf2f6.js");const App=class{constructor(hostRef){(0,_index_77c1beb5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef)}componentDidLoad(){rIC((async()=>{const isHybrid=(0,_ionic_global_98cbf2f6_js__WEBPACK_IMPORTED_MODULE_1__.a)(window,"hybrid");if(_ionic_global_98cbf2f6_js__WEBPACK_IMPORTED_MODULE_1__.c.getBoolean("_testing")||__webpack_require__.e(875).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/index-8e82a3fb.js")).then((module=>module.startTapClick(_ionic_global_98cbf2f6_js__WEBPACK_IMPORTED_MODULE_1__.c))),_ionic_global_98cbf2f6_js__WEBPACK_IMPORTED_MODULE_1__.c.getBoolean("statusTap",isHybrid)&&__webpack_require__.e(5302).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/status-tap-29d3ab90.js")).then((module=>module.startStatusTap())),_ionic_global_98cbf2f6_js__WEBPACK_IMPORTED_MODULE_1__.c.getBoolean("inputShims",needInputShims())){const platform=(0,_ionic_global_98cbf2f6_js__WEBPACK_IMPORTED_MODULE_1__.a)(window,"ios")?"ios":"android";__webpack_require__.e(6381).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/input-shims-f210be7d.js")).then((module=>module.startInputShims(_ionic_global_98cbf2f6_js__WEBPACK_IMPORTED_MODULE_1__.c,platform)))}const hardwareBackButtonModule=await __webpack_require__.e(7806).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/hardware-back-button-b3a8b0cd.js"));_ionic_global_98cbf2f6_js__WEBPACK_IMPORTED_MODULE_1__.c.getBoolean("hardwareBackButton",isHybrid)?hardwareBackButtonModule.startHardwareBackButton():hardwareBackButtonModule.blockHardwareBackButton(),"undefined"!=typeof window&&__webpack_require__.e(7582).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/keyboard-7c59b832.js")).then((module=>module.startKeyboardAssist(window))),__webpack_require__.e(8421).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/focus-visible-b5105107.js")).then((module=>this.focusVisible=module.startFocusVisible()))}))}async setFocus(elements){this.focusVisible&&this.focusVisible.setFocus(elements)}render(){const mode=(0,_ionic_global_98cbf2f6_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_77c1beb5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_77c1beb5_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[mode]:!0,"ion-page":!0,"force-statusbar-padding":_ionic_global_98cbf2f6_js__WEBPACK_IMPORTED_MODULE_1__.c.getBoolean("_forceStatusbarPadding")}})}get el(){return(0,_index_77c1beb5_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}},needInputShims=()=>{if((0,_ionic_global_98cbf2f6_js__WEBPACK_IMPORTED_MODULE_1__.a)(window,"ios")&&(0,_ionic_global_98cbf2f6_js__WEBPACK_IMPORTED_MODULE_1__.a)(window,"mobile"))return!0;return!(!(0,_ionic_global_98cbf2f6_js__WEBPACK_IMPORTED_MODULE_1__.a)(window,"android")||!(0,_ionic_global_98cbf2f6_js__WEBPACK_IMPORTED_MODULE_1__.a)(window,"mobileweb"))},rIC=callback=>{"requestIdleCallback"in window?window.requestIdleCallback(callback):setTimeout(callback,32)};App.style="html.plt-mobile ion-app{user-select:none}html.plt-mobile ion-app [contenteditable]{user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"}}]);
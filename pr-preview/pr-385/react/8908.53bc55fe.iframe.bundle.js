/*! For license information please see 8908.53bc55fe.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[8908],{"../../packages/core/dist/esm/hardware-back-button-456cbb30.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MENU_BACK_BUTTON_PRIORITY:()=>MENU_BACK_BUTTON_PRIORITY,OVERLAY_BACK_BUTTON_PRIORITY:()=>OVERLAY_BACK_BUTTON_PRIORITY,blockHardwareBackButton:()=>blockHardwareBackButton,shoudUseCloseWatcher:()=>shoudUseCloseWatcher,startHardwareBackButton:()=>startHardwareBackButton});var _index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js"),_ionic_global_b61067db_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-b61067db.js");__webpack_require__("../../packages/core/dist/esm/index-f5f883b1.js");const shoudUseCloseWatcher=()=>_ionic_global_b61067db_js__WEBPACK_IMPORTED_MODULE_1__.c.get("experimentalCloseWatcher",!1)&&void 0!==_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w&&"CloseWatcher"in _index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w,blockHardwareBackButton=()=>{document.addEventListener("backbutton",(()=>{}))},startHardwareBackButton=()=>{const doc=document;let busy=!1;const backButtonCallback=()=>{if(busy)return;let index=0,handlers=[];const ev=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(priority,handler){handlers.push({priority,handler,id:index++})}}});doc.dispatchEvent(ev);const processHandlers=()=>{if(handlers.length>0){let selectedHandler={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};handlers.forEach((handler=>{handler.priority>=selectedHandler.priority&&(selectedHandler=handler)})),busy=!0,handlers=handlers.filter((handler=>handler.id!==selectedHandler.id)),(async handlerRegister=>{try{if(null==handlerRegister?void 0:handlerRegister.handler){const result=handlerRegister.handler(processHandlers);null!=result&&await result}}catch(e){console.error(e)}})(selectedHandler).then((()=>busy=!1))}};processHandlers()};if(shoudUseCloseWatcher()){let watcher;const configureWatcher=()=>{null==watcher||watcher.destroy(),watcher=new _index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w.CloseWatcher,watcher.onclose=()=>{backButtonCallback(),configureWatcher()}};configureWatcher()}else doc.addEventListener("backbutton",backButtonCallback)},OVERLAY_BACK_BUTTON_PRIORITY=100,MENU_BACK_BUTTON_PRIORITY=99},"../../packages/core/dist/esm/index-d9a82e80.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>doc,w:()=>win});const win="undefined"!=typeof window?window:void 0,doc="undefined"!=typeof document?document:void 0},"../../packages/core/dist/esm/index-f5dbb989.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>printIonError,b:()=>printRequiredElementError,p:()=>printIonWarning});const printIonWarning=(message,...params)=>console.warn(`[Ionic Warning]: ${message}`,...params),printIonError=(message,...params)=>console.error(`[Ionic Error]: ${message}`,...params),printRequiredElementError=(el,...targetSelectors)=>console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(" or ")}.`)},"../../packages/core/dist/esm/ion-app.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_app:()=>App});var _index_f5f883b1_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-f5f883b1.js"),_hardware_back_button_456cbb30_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/hardware-back-button-456cbb30.js"),_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/dist/esm/index-f5dbb989.js"),_ionic_global_b61067db_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/ionic-global-b61067db.js");__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js");const App=class{constructor(hostRef){(0,_index_f5f883b1_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef)}componentDidLoad(){rIC((async()=>{const isHybrid=(0,_ionic_global_b61067db_js__WEBPACK_IMPORTED_MODULE_2__.a)(window,"hybrid");if(_ionic_global_b61067db_js__WEBPACK_IMPORTED_MODULE_2__.c.getBoolean("_testing")||__webpack_require__.e(1828).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/index-90585088.js")).then((module=>module.startTapClick(_ionic_global_b61067db_js__WEBPACK_IMPORTED_MODULE_2__.c))),_ionic_global_b61067db_js__WEBPACK_IMPORTED_MODULE_2__.c.getBoolean("statusTap",isHybrid)&&__webpack_require__.e(9563).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/status-tap-57691ca7.js")).then((module=>module.startStatusTap())),_ionic_global_b61067db_js__WEBPACK_IMPORTED_MODULE_2__.c.getBoolean("inputShims",needInputShims())){const platform=(0,_ionic_global_b61067db_js__WEBPACK_IMPORTED_MODULE_2__.a)(window,"ios")?"ios":"android";__webpack_require__.e(3782).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/input-shims-0abaceca.js")).then((module=>module.startInputShims(_ionic_global_b61067db_js__WEBPACK_IMPORTED_MODULE_2__.c,platform)))}const hardwareBackButtonModule=await Promise.resolve().then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/hardware-back-button-456cbb30.js")),supportsHardwareBackButtonEvents=isHybrid||(0,_hardware_back_button_456cbb30_js__WEBPACK_IMPORTED_MODULE_1__.shoudUseCloseWatcher)();_ionic_global_b61067db_js__WEBPACK_IMPORTED_MODULE_2__.c.getBoolean("hardwareBackButton",supportsHardwareBackButtonEvents)?hardwareBackButtonModule.startHardwareBackButton():((0,_hardware_back_button_456cbb30_js__WEBPACK_IMPORTED_MODULE_1__.shoudUseCloseWatcher)()&&(0,_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_4__.p)("experimentalCloseWatcher was set to `true`, but hardwareBackButton was set to `false`. Both config options must be `true` for the Close Watcher API to be used."),hardwareBackButtonModule.blockHardwareBackButton()),"undefined"!=typeof window&&__webpack_require__.e(8549).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/keyboard-8d28fca7.js")).then((module=>module.startKeyboardAssist(window))),__webpack_require__.e(6563).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/focus-visible-7447085a.js")).then((module=>this.focusVisible=module.startFocusVisible()))}))}async setFocus(elements){this.focusVisible&&this.focusVisible.setFocus(elements)}render(){const mode=(0,_ionic_global_b61067db_js__WEBPACK_IMPORTED_MODULE_2__.g)(this);return(0,_index_f5f883b1_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_f5f883b1_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"3535eb5c0dab78a78011e552524a98599b2b650f",class:{[mode]:!0,"ion-page":!0,"force-statusbar-padding":_ionic_global_b61067db_js__WEBPACK_IMPORTED_MODULE_2__.c.getBoolean("_forceStatusbarPadding")}})}get el(){return(0,_index_f5f883b1_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}},needInputShims=()=>{if((0,_ionic_global_b61067db_js__WEBPACK_IMPORTED_MODULE_2__.a)(window,"ios")&&(0,_ionic_global_b61067db_js__WEBPACK_IMPORTED_MODULE_2__.a)(window,"mobile"))return!0;return!(!(0,_ionic_global_b61067db_js__WEBPACK_IMPORTED_MODULE_2__.a)(window,"android")||!(0,_ionic_global_b61067db_js__WEBPACK_IMPORTED_MODULE_2__.a)(window,"mobileweb"))},rIC=callback=>{"requestIdleCallback"in window?window.requestIdleCallback(callback):setTimeout(callback,32)};App.style="html.plt-mobile ion-app{user-select:none}html.plt-mobile ion-app [contenteditable]{user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"}}]);
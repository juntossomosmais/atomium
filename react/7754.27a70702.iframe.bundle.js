/*! For license information please see 7754.27a70702.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[7754],{"../../packages/core/dist/esm/ion-nav-link.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_nav_link:()=>NavLink});var _index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-6d0a42e8.js");const NavLink=class{constructor(hostRef){(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.onClick=()=>((el,routerDirection,component,componentProps,routerAnimation)=>{const nav=el.closest("ion-nav");if(nav)if("forward"===routerDirection){if(void 0!==component)return nav.push(component,componentProps,{skipIfBusy:!0,animationBuilder:routerAnimation})}else if("root"===routerDirection){if(void 0!==component)return nav.setRoot(component,componentProps,{skipIfBusy:!0,animationBuilder:routerAnimation})}else if("back"===routerDirection)return nav.pop({skipIfBusy:!0,animationBuilder:routerAnimation});return Promise.resolve(!1)})(this.el,this.routerDirection,this.component,this.componentProps,this.routerAnimation),this.component=void 0,this.componentProps=void 0,this.routerDirection="forward",this.routerAnimation=void 0}render(){return(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"d2f8545b4fbd5aa25ef36eb01dffbc5d35ccfbb9",onClick:this.onClick})}get el(){return(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}}}}]);
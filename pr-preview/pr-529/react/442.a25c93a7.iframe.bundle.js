/*! For license information please see 442.a25c93a7.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[442],{"../../packages/core/dist/esm/ion-nav-link.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_nav_link:()=>NavLink});var _index_03927578_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-03927578.js");const NavLink=class{constructor(hostRef){(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.onClick=()=>((el,routerDirection,component,componentProps,routerAnimation)=>{const nav=el.closest("ion-nav");if(nav)if("forward"===routerDirection){if(void 0!==component)return nav.push(component,componentProps,{skipIfBusy:!0,animationBuilder:routerAnimation})}else if("root"===routerDirection){if(void 0!==component)return nav.setRoot(component,componentProps,{skipIfBusy:!0,animationBuilder:routerAnimation})}else if("back"===routerDirection)return nav.pop({skipIfBusy:!0,animationBuilder:routerAnimation});return Promise.resolve(!1)})(this.el,this.routerDirection,this.component,this.componentProps,this.routerAnimation),this.component=void 0,this.componentProps=void 0,this.routerDirection="forward",this.routerAnimation=void 0}render(){return(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"dab6e8a908395d99c87452c5e5aa4e61d9e72435",onClick:this.onClick})}get el(){return(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}}}}]);
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[393],{"../../packages/core/dist/esm/ion-route.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_route:()=>Route});var _index_03927578_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-03927578.js");const Route=class{constructor(hostRef){(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionRouteDataChanged=(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionRouteDataChanged",7),this.url="",this.component=void 0,this.componentProps=void 0,this.beforeLeave=void 0,this.beforeEnter=void 0}onUpdate(newValue){this.ionRouteDataChanged.emit(newValue)}onComponentProps(newValue,oldValue){if(newValue===oldValue)return;const keys1=newValue?Object.keys(newValue):[],keys2=oldValue?Object.keys(oldValue):[];if(keys1.length===keys2.length){for(const key of keys1)if(newValue[key]!==oldValue[key])return void this.onUpdate(newValue)}else this.onUpdate(newValue)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}}}}]);
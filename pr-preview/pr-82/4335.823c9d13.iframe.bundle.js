/*! For license information please see 4335.823c9d13.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[4335],{"../../packages/core/dist/esm/ion-breadcrumbs.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_breadcrumbs:()=>Breadcrumbs});var _index_a869d52d_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-a869d52d.js"),_ionic_global_4a637317_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-4a637317.js"),_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/theme-bc7eaa70.js");const Breadcrumbs=class{constructor(hostRef){(0,_index_a869d52d_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionCollapsedClick=(0,_index_a869d52d_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionCollapsedClick",7),this.breadcrumbsInit=()=>{this.setBreadcrumbSeparator(),this.setMaxItems()},this.resetActiveBreadcrumb=()=>{const activeBreadcrumb=this.getBreadcrumbs().find((breadcrumb=>breadcrumb.active));activeBreadcrumb&&this.activeChanged&&(activeBreadcrumb.active=!1)},this.setMaxItems=()=>{const{itemsAfterCollapse,itemsBeforeCollapse,maxItems}=this,breadcrumbs=this.getBreadcrumbs();for(const breadcrumb of breadcrumbs)breadcrumb.showCollapsedIndicator=!1,breadcrumb.collapsed=!1;void 0!==maxItems&&breadcrumbs.length>maxItems&&itemsBeforeCollapse+itemsAfterCollapse<=maxItems&&breadcrumbs.forEach(((breadcrumb,index)=>{index===itemsBeforeCollapse&&(breadcrumb.showCollapsedIndicator=!0),index>=itemsBeforeCollapse&&index<breadcrumbs.length-itemsAfterCollapse&&(breadcrumb.collapsed=!0)}))},this.setBreadcrumbSeparator=()=>{const{itemsAfterCollapse,itemsBeforeCollapse,maxItems}=this,breadcrumbs=this.getBreadcrumbs(),active=breadcrumbs.find((breadcrumb=>breadcrumb.active));for(const breadcrumb of breadcrumbs){const last=void 0!==maxItems&&0===itemsAfterCollapse?breadcrumb===breadcrumbs[itemsBeforeCollapse]:breadcrumb===breadcrumbs[breadcrumbs.length-1];breadcrumb.last=last;const separator=void 0!==breadcrumb.separator?breadcrumb.separator:!last||void 0;breadcrumb.separator=separator,!active&&last&&(breadcrumb.active=!0,this.activeChanged=!0)}},this.getBreadcrumbs=()=>Array.from(this.el.querySelectorAll("ion-breadcrumb")),this.slotChanged=()=>{this.resetActiveBreadcrumb(),this.breadcrumbsInit()},this.collapsed=void 0,this.activeChanged=void 0,this.color=void 0,this.maxItems=void 0,this.itemsBeforeCollapse=1,this.itemsAfterCollapse=1}onCollapsedClick(ev){const collapsedBreadcrumbs=this.getBreadcrumbs().filter((breadcrumb=>breadcrumb.collapsed));this.ionCollapsedClick.emit(Object.assign(Object.assign({},ev.detail),{collapsedBreadcrumbs}))}maxItemsChanged(){this.resetActiveBreadcrumb(),this.breadcrumbsInit()}componentWillLoad(){this.breadcrumbsInit()}render(){const{color,collapsed}=this,mode=(0,_ionic_global_4a637317_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_a869d52d_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a869d52d_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:(0,_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_2__.c)(color,{[mode]:!0,"in-toolbar":(0,_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_2__.h)("ion-toolbar",this.el),"in-toolbar-color":(0,_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_2__.h)("ion-toolbar[color]",this.el),"breadcrumbs-collapsed":collapsed})},(0,_index_a869d52d_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{onSlotchange:this.slotChanged}))}get el(){return(0,_index_a869d52d_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{maxItems:["maxItemsChanged"],itemsBeforeCollapse:["maxItemsChanged"],itemsAfterCollapse:["maxItemsChanged"]}}};Breadcrumbs.style={ios:":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;flex-wrap:wrap;align-items:center}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator ion-icon{color:var(--ion-color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:rgba(var(--ion-color-contrast-rgb), 0.11)}:host(.in-toolbar){-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;justify-content:center}",md:":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;flex-wrap:wrap;align-items:center}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator ion-icon{color:var(--ion-color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:rgba(var(--ion-color-contrast-rgb), 0.11)}:host(.in-toolbar){-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0}"}},"../../packages/core/dist/esm/theme-bc7eaa70.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
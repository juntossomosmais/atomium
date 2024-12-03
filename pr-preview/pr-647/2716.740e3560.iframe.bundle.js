"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[2716],{"../../packages/core/dist/esm/atom-pagination.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{atom_pagination:()=>AtomPagination});var _index_03927578_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-03927578.js");const AtomPagination=class{constructor(hostRef){(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.atomChangePage=(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomChangePage",7),this.sibling=1,this.boundary=1,this.handleChangePage=page=>{this.page!==page&&(this.page=page,this.atomChangePage.emit(this.page))},this.handleNextPage=()=>{this.page+=1,this.atomChangePage.emit(this.page)},this.handlePreviousPage=()=>{this.page-=1,this.atomChangePage.emit(this.page)},this.renderPages=()=>this.makeItems().map((item=>{if("page"===item.type){const currentPage=item.number===this.page?"page":void 0;return(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{"aria-current":currentPage},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{class:{"atom-pagination__nav-item":!0,"atom-pagination__nav-item--active":!!currentPage},onClick:()=>this.handleChangePage(item.number)},item.number))}if("end-ellipsis"===item.type||"start-ellipsis"===item.type)return(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",null,(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:{"atom-pagination__nav-item":!0,"atom-pagination__nav-item--ellipsis":!0}},"..."))})),this.page=void 0,this.count=void 0}makeItems(){const items=[],siblingsStart=Math.max(Math.min(this.page-this.sibling,this.count-this.boundary-2*this.sibling-1),this.boundary+2),siblingsEnd=Math.min(Math.max(this.page+this.sibling,this.boundary+2*this.sibling+2),this.count-(this.boundary-1)-2);for(let page=1;page<=this.boundary;page++)items.push({type:"page",number:page});siblingsStart>this.boundary+2?items.push({type:"start-ellipsis"}):this.boundary+1<this.count-this.boundary&&items.push({type:"page",number:this.boundary+1});for(let i=siblingsStart;i<=siblingsEnd;i++)items.push({type:"page",number:i});siblingsEnd<this.count-this.boundary-1?items.push({type:"end-ellipsis"}):this.count-this.boundary>this.boundary&&items.push({type:"page",number:this.count-this.boundary});for(let i=this.count-this.boundary+1;i<=this.count;i++)items.push({type:"page",number:i});return items}render(){return(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"61e235b3e259d0cc8cd6d9294efc0e1ef931e834"},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{key:"af6e7e94517bfe66dd2c1ccfe9bd7623b550a7ad",class:{"atom-pagination":!0},"aria-label":"pagination"},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{key:"439bb44caa6ee9cf5b7b917a57cfe026c06ed8c2",class:{"atom-pagination__nav":!0}},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{key:"d4902c453bc4b802f59b08f611be0d2f583a33be"},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("atom-button",{key:"ffa3e7d1dc4c1fa7320361445400a9c3e1dfdfb2",shape:"circle",disabled:1===this.page,size:"small","aria-label":"Previous page",onClick:this.handlePreviousPage,color:"secondary"},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("atom-icon",{key:"fcf694996c498ec2399bd917db09c677f302f0fd",icon:"chevron-left",size:32}))),this.renderPages(),(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{key:"10c40e0aca0b4cba59bd9063f3936c690083cd71"},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("atom-button",{key:"57f43d6256b762c76f4c7611e68085627dbbe07d",shape:"circle",disabled:this.page===this.count,size:"small",onClick:this.handleNextPage,"aria-label":"Next page",color:"secondary"},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("atom-icon",{key:"7b03c7f47ff5c8cb3f5d79b036ebea4aa8bf1cb8",icon:"chevron-right",size:32}))))))}};AtomPagination.style='html.ios{--ion-default-font:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}html.md{--ion-default-font:"Roboto", "Helvetica Neue", sans-serif}html{--ion-default-dynamic-font:-apple-system-body;--ion-font-family:var(--ion-default-font)}body{background:var(--ion-background-color)}body.backdrop-no-scroll{overflow:hidden}html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,html.ios ion-modal ion-footer ion-toolbar:first-of-type{padding-top:6px}html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type{padding-bottom:6px}html.ios ion-modal ion-toolbar{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){html.ios ion-modal.modal-card:first-of-type{--backdrop-opacity:0.18}}ion-modal.modal-default.show-modal~ion-modal.modal-default{--backdrop-opacity:0;--box-shadow:none}html.ios ion-modal.modal-card .ion-page{border-top-left-radius:var(--border-radius)}.ion-color-primary{--ion-color-base:var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255) !important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint:var(--ion-color-primary-tint, #4c8dff) !important}.ion-color-secondary{--ion-color-base:var(--ion-color-secondary, #3dc2ff) !important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 61, 194, 255) !important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-secondary-shade, #36abe0) !important;--ion-color-tint:var(--ion-color-secondary-tint, #50c8ff) !important}.ion-color-tertiary{--ion-color-base:var(--ion-color-tertiary, #5260ff) !important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 82, 96, 255) !important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-tertiary-shade, #4854e0) !important;--ion-color-tint:var(--ion-color-tertiary-tint, #6370ff) !important}.ion-color-success{--ion-color-base:var(--ion-color-success, #2dd36f) !important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 211, 111) !important;--ion-color-contrast:var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-success-shade, #28ba62) !important;--ion-color-tint:var(--ion-color-success-tint, #42d77d) !important}.ion-color-warning{--ion-color-base:var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast:var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22) !important}.ion-color-danger{--ion-color-base:var(--ion-color-danger, #eb445a) !important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 235, 68, 90) !important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-danger-shade, #cf3c4f) !important;--ion-color-tint:var(--ion-color-danger-tint, #ed576b) !important}.ion-color-light{--ion-color-base:var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast:var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium{--ion-color-base:var(--ion-color-medium, #92949c) !important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 146, 148, 156) !important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-medium-shade, #808289) !important;--ion-color-tint:var(--ion-color-medium-tint, #9d9fa6) !important}.ion-color-dark{--ion-color-base:var(--ion-color-dark, #222428) !important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e) !important}.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;z-index:0}ion-modal>.ion-page{position:relative;contain:layout style;height:100%}.split-pane-visible>.ion-page.split-pane-main{position:relative}ion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden{display:none !important}.ion-page-invisible{opacity:0}.can-go-back>ion-header ion-back-button{display:block}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding:20px}@supports (padding-top: 20px){html{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}ion-card.ion-color .ion-inherit-color,ion-card-header.ion-color .ion-inherit-color{color:inherit}.menu-content{transform:translate3d(0,  0,  0)}.menu-content-open{cursor:pointer;touch-action:manipulation;pointer-events:none;overflow-y:hidden}.menu-content-open ion-content{--overflow:hidden}.menu-content-open .ion-content-scroll-host{overflow:hidden}.ios .menu-content-reveal{box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-reveal{box-shadow:4px 0px 16px rgba(0,0,0,.18)}.md .menu-content-push{box-shadow:4px 0px 16px rgba(0,0,0,.18)}ion-accordion-group.accordion-group-expand-inset>ion-accordion:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}ion-accordion-group.accordion-group-expand-inset>ion-accordion:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}ion-accordion-group>ion-accordion:last-of-type ion-item[slot=header]{--border-width:0px}ion-accordion.accordion-animated>[slot=header] .ion-accordion-toggle-icon{transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1)}@media (prefers-reduced-motion: reduce){ion-accordion .ion-accordion-toggle-icon{transition:none !important}}ion-accordion.accordion-expanding>[slot=header] .ion-accordion-toggle-icon,ion-accordion.accordion-expanded>[slot=header] .ion-accordion-toggle-icon{transform:rotate(180deg)}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-previous ion-item[slot=header]{--border-width:0px;--inner-border-width:0px}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanding:first-of-type,ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanded:first-of-type{margin-top:0}ion-input input::-webkit-date-and-time-value{text-align:start}.ion-datetime-button-overlay{--width:fit-content;--height:fit-content}.ion-datetime-button-overlay ion-datetime.datetime-grid{width:320px;min-height:320px}.popover-viewport:has(>ion-content){overflow:hidden}@supports not selector(:has(> ion-content)){.popover-viewport{overflow:hidden}}.atom-pagination__nav{align-items:center;display:flex;font:var(--text-body-small);gap:var(--spacing-xsmall);letter-spacing:var(--text-body-small-letter);list-style:none}.atom-pagination__nav-item{background:none;border:none;color:var(--color-brand-secondary-regular);cursor:pointer;display:block;font:var(--text-body-small);height:var(--spacing-xxlarge);letter-spacing:var(--text-body-small-letter);padding:0;position:relative;text-align:center;width:var(--spacing-xxlarge)}.atom-pagination__nav-item:not(.atom-pagination__nav-item--ellipsis):hover{background-color:var(--color-neutral-light-4)}.atom-pagination__nav-item--active{color:var(--color-neutral-regular);font-weight:var(--font-weight-bold)}.atom-pagination__nav-item--active::after{background:var(--color-neutral-light-1);border-radius:9px;bottom:0;content:"";height:var(--spacing-xxsmall);left:0;position:absolute;width:100%}.atom-pagination__nav-item--ellipsis{cursor:auto;height:100%}'}}]);
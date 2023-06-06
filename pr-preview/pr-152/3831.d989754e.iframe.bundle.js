"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[3831],{"../../packages/core/dist/esm/atom-alert.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{atom_alert:()=>AtomAlert});var _index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-43ce1e25.js");const AtomAlert=class{constructor(hostRef){(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.atomClose=(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomClose",7),this.atomAction=(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomAction",7),this.handleClose=()=>{this.atomClose.emit()},this.handleAction=()=>{this.atomAction.emit()},this.color="neutral",this.icon=void 0,this.messageTitle=void 0,this.messageText=void 0,this.actionText=void 0,this.close=!1}render(){return(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.H,{role:"alert"},(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"atom-alert":!0,[`atom-color--${this.color}`]:!0}},(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"atom-body"},this.icon&&(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("atom-icon",{class:"atom-icon",icon:this.icon}),(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"atom-content"},this.messageTitle&&(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",{class:"atom-title",innerHTML:this.messageTitle}),this.messageText&&(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",{class:"atom-message",innerHTML:this.messageText}),(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))),this.actionText&&(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"atom-actions"},(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{class:"atom-actions__button",type:"button",onClick:this.handleAction},this.actionText)),this.close&&(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{class:"atom-close","aria-label":"Close",onClick:this.handleClose,type:"button"},(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("atom-icon",{icon:"close"}))))}};AtomAlert.style='html.ios{--ion-default-font:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}html.md{--ion-default-font:"Roboto", "Helvetica Neue", sans-serif}html{--ion-font-family:var(--ion-default-font)}body{background:var(--ion-background-color)}body.backdrop-no-scroll{overflow:hidden}html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,html.ios ion-modal ion-footer ion-toolbar:first-of-type{padding-top:6px}html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type{padding-bottom:6px}html.ios ion-modal ion-toolbar{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){html.ios ion-modal.modal-card:first-of-type{--backdrop-opacity:0.18}}ion-modal.modal-default.show-modal~ion-modal.modal-default{--backdrop-opacity:0;--box-shadow:none}html.ios ion-modal.modal-card .ion-page{border-top-left-radius:var(--border-radius)}.ion-color-primary{--ion-color-base:var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255) !important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint:var(--ion-color-primary-tint, #4c8dff) !important}.ion-color-secondary{--ion-color-base:var(--ion-color-secondary, #3dc2ff) !important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 61, 194, 255) !important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-secondary-shade, #36abe0) !important;--ion-color-tint:var(--ion-color-secondary-tint, #50c8ff) !important}.ion-color-tertiary{--ion-color-base:var(--ion-color-tertiary, #5260ff) !important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 82, 96, 255) !important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-tertiary-shade, #4854e0) !important;--ion-color-tint:var(--ion-color-tertiary-tint, #6370ff) !important}.ion-color-success{--ion-color-base:var(--ion-color-success, #2dd36f) !important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 211, 111) !important;--ion-color-contrast:var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-success-shade, #28ba62) !important;--ion-color-tint:var(--ion-color-success-tint, #42d77d) !important}.ion-color-warning{--ion-color-base:var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast:var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22) !important}.ion-color-danger{--ion-color-base:var(--ion-color-danger, #eb445a) !important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 235, 68, 90) !important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-danger-shade, #cf3c4f) !important;--ion-color-tint:var(--ion-color-danger-tint, #ed576b) !important}.ion-color-light{--ion-color-base:var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast:var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium{--ion-color-base:var(--ion-color-medium, #92949c) !important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 146, 148, 156) !important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-medium-shade, #808289) !important;--ion-color-tint:var(--ion-color-medium-tint, #9d9fa6) !important}.ion-color-dark{--ion-color-base:var(--ion-color-dark, #222428) !important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e) !important}.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}ion-modal>.ion-page{position:relative;contain:layout style;height:100%}.split-pane-visible>.ion-page.split-pane-main{position:relative}ion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden{display:none !important}.ion-page-invisible{opacity:0}.can-go-back>ion-header ion-back-button{display:block}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding:20px}@supports (padding-top: 20px){html{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top: constant(safe-area-inset-top)){html{--ion-safe-area-top:constant(safe-area-inset-top);--ion-safe-area-bottom:constant(safe-area-inset-bottom);--ion-safe-area-left:constant(safe-area-inset-left);--ion-safe-area-right:constant(safe-area-inset-right)}}@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}ion-card.ion-color .ion-inherit-color,ion-card-header.ion-color .ion-inherit-color{color:inherit}.menu-content{transform:translate3d(0,  0,  0)}.menu-content-open{cursor:pointer;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{box-shadow:-8px 0 42px rgba(0, 0, 0, 0.08)}[dir=rtl].ios .menu-content-reveal{box-shadow:8px 0 42px rgba(0, 0, 0, 0.08)}.md .menu-content-reveal{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}.md .menu-content-push{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}ion-accordion-group.accordion-group-expand-inset>ion-accordion:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}ion-accordion-group.accordion-group-expand-inset>ion-accordion:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}ion-accordion-group>ion-accordion:last-of-type ion-item[slot=header]{--border-width:0px}ion-accordion.accordion-animated>[slot=header] .ion-accordion-toggle-icon{transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1)}@media (prefers-reduced-motion: reduce){ion-accordion .ion-accordion-toggle-icon{transition:none !important}}ion-accordion.accordion-expanding>[slot=header] .ion-accordion-toggle-icon,ion-accordion.accordion-expanded>[slot=header] .ion-accordion-toggle-icon{transform:rotate(180deg)}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-previous ion-item[slot=header]{--border-width:0px;--inner-border-width:0px}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanding:first-of-type,ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanded:first-of-type{margin-top:0}ion-input input::-webkit-date-and-time-value{text-align:start}.ion-datetime-button-overlay{--width:fit-content;--height:fit-content}.ion-datetime-button-overlay ion-datetime.datetime-grid{width:320px;min-height:320px}:host{--close-size:var(--spacing-xxxlarge);--icon-size:var(--spacing-medium);display:block}.atom-alert{border:1px solid transparent;border-radius:var(--border-radius);font:var(--text-body-medium);letter-spacing:var(--text-body-medium-letter);padding:var(--spacing-base);padding-right:var(--close-size);position:relative}@media only screen and (min-width: 768px){.atom-alert{display:flex;flex-wrap:wrap}}.atom-alert.atom-color--success{background-color:var(--color-contextual-success-light-2);border-color:var(--color-contextual-success-dark-1);color:var(--color-contextual-success-dark-1)}.atom-alert.atom-color--info{background-color:var(--color-contextual-info-light-2);border-color:var(--color-contextual-info-dark-1);color:var(--color-contextual-info-dark-1)}.atom-alert.atom-color--warning{background-color:var(--color-contextual-warning-light-2);border-color:var(--color-contextual-warning-dark-1);color:var(--color-contextual-warning-dark-1)}.atom-alert.atom-color--danger{background-color:var(--color-contextual-error-light-2);border-color:var(--color-contextual-error-dark-1);color:var(--color-contextual-error-dark-1)}.atom-alert.atom-color--neutral{background-color:var(--color-neutral-light-5);border-color:var(--color-neutral-light-1);color:var(--color-neutral-light-1)}.atom-alert.atom-color--neutral .atom-icon{color:var(--color-brand-primary-regular)}.atom-body{display:flex;flex-wrap:wrap}.atom-title{font-weight:var(--font-weight-bold);margin:0}.atom-title:not(:last-child){margin-bottom:var(--spacing-xsmall)}.atom-message{margin:0}.atom-message:not(:last-child){margin-bottom:var(--spacing-xsmall)}.atom-actions{margin-left:auto;margin-right:var(--spacing-xsmall)}@media only screen and (max-width: 767px){.atom-actions{display:flex;justify-content:flex-end;margin-top:var(--spacing-xsmall)}}.atom-actions__button{background:transparent;border:0;color:var(--color-brand-secondary-regular);cursor:pointer;font:var(--text-link-medium);letter-spacing:var(--text-link-medium-letter);padding:0;text-decoration:underline;transition:color var(--transition-duration);will-change:color}.atom-actions__button:hover{color:var(--color-brand-secondary-dark-1)}.atom-icon{font-size:var(--icon-size);margin-right:var(--spacing-xsmall);margin-top:2px}.atom-close{background:transparent;border:0;color:var(--color-neutral-light-2);cursor:pointer;font-size:var(--icon-size);height:var(--close-size);opacity:0.8;padding:0;position:absolute;right:0;top:10px;transition:opacity var(--transition-duration);width:var(--close-size);will-change:opacity}.atom-close:hover{opacity:1}'}}]);
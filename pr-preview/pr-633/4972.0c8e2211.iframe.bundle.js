"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[4972],{"../../packages/core/dist/esm/atom-alert.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{atom_alert:()=>AtomAlert});var _index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-6d0a42e8.js");const AtomAlert=class{constructor(hostRef){(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.atomClose=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomClose",7),this.atomAction=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomAction",7),this.handleClose=()=>{this.atomClose.emit(),this.isAlertOpen=!1},this.handleAction=()=>{this.atomAction.emit()},this.color="neutral",this.icon=void 0,this.messageTitle=void 0,this.messageText=void 0,this.actionText=void 0,this.close=!1,this.isAlertOpen=!0}render(){return(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"d57113e9d7f3d6c6c4284cf7bb9d870cde727bc1",role:"alert","aria-live":"assertive","aria-atomic":"true","aria-hidden":!this.isAlertOpen&&"true",class:{"is-close":!this.isAlertOpen}},this.isAlertOpen&&(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"ddb92507ea1650b0123107e5cf1c634fdda60bbc",class:{"atom-alert":!0,[`atom-color--${this.color}`]:!0,"has-close":this.close}},(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"ccc1340d97b1f19b2c1b6cd4418fc30d004e7d7b",class:"atom-body"},this.icon&&(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("atom-icon",{key:"081ef994a32f6fed286be51686f23c41a48e0050",class:"atom-icon",icon:this.icon}),(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"bb9b747388aac7f33b15958c16fba5e8a3f7f663",class:"atom-content"},this.messageTitle&&(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"9c41a173abb417b8c69020f8cac163d8d141072f",class:"atom-title",innerHTML:this.messageTitle}),this.messageText&&(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"16f3be2d51411d03e6705ec8c5bd6dc1d779121d",class:"atom-message",innerHTML:this.messageText}))),this.actionText&&(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"0ba6955ea0b038f0488c449419f6369be100b557",class:"atom-actions"},(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"f60ec1b53281852d7dcc1508307da2781c611916",class:"atom-actions__button",type:"button",onClick:this.handleAction},this.actionText)),this.close&&(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"1b6542eff5450c60bd9dd7ce72e8c8ac36cc7ce1",class:"atom-close","aria-label":"Close",onClick:this.handleClose,type:"button"},(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("atom-icon",{key:"67d92bdc867f1b4aff416418b67aaff576b84cb6",icon:"close"}))))}};AtomAlert.style=':root{--ion-color-primary:#0054e9;--ion-color-primary-rgb:0, 84, 233;--ion-color-primary-contrast:#fff;--ion-color-primary-contrast-rgb:255, 255, 255;--ion-color-primary-shade:#004acd;--ion-color-primary-tint:#1a65eb;--ion-color-secondary:#0163aa;--ion-color-secondary-rgb:1, 99, 170;--ion-color-secondary-contrast:#fff;--ion-color-secondary-contrast-rgb:255, 255, 255;--ion-color-secondary-shade:#015796;--ion-color-secondary-tint:#1a73b3;--ion-color-tertiary:#6030ff;--ion-color-tertiary-rgb:96, 48, 255;--ion-color-tertiary-contrast:#fff;--ion-color-tertiary-contrast-rgb:255, 255, 255;--ion-color-tertiary-shade:#542ae0;--ion-color-tertiary-tint:#7045ff;--ion-color-success:#2dd55b;--ion-color-success-rgb:45, 213, 91;--ion-color-success-contrast:#000;--ion-color-success-contrast-rgb:0, 0, 0;--ion-color-success-shade:#28bb50;--ion-color-success-tint:#42d96b;--ion-color-warning:#ffc409;--ion-color-warning-rgb:255, 196, 9;--ion-color-warning-contrast:#000;--ion-color-warning-contrast-rgb:0, 0, 0;--ion-color-warning-shade:#e0ac08;--ion-color-warning-tint:#ffca22;--ion-color-danger:#c5000f;--ion-color-danger-rgb:197, 0, 15;--ion-color-danger-contrast:#fff;--ion-color-danger-contrast-rgb:255, 255, 255;--ion-color-danger-shade:#ad000d;--ion-color-danger-tint:#cb1a27;--ion-color-light:#f4f5f8;--ion-color-light-rgb:244, 245, 248;--ion-color-light-contrast:#000;--ion-color-light-contrast-rgb:0, 0, 0;--ion-color-light-shade:#d7d8da;--ion-color-light-tint:#f5f6f9;--ion-color-medium:#636469;--ion-color-medium-rgb:99, 100, 105;--ion-color-medium-contrast:#fff;--ion-color-medium-contrast-rgb:255, 255, 255;--ion-color-medium-shade:#57585c;--ion-color-medium-tint:#737478;--ion-color-dark:#222428;--ion-color-dark-rgb:34, 36, 40;--ion-color-dark-contrast:#fff;--ion-color-dark-contrast-rgb:255, 255, 255;--ion-color-dark-shade:#1e2023;--ion-color-dark-tint:#383a3e}html.ios{--ion-default-font:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}html.md{--ion-default-font:"Roboto", "Helvetica Neue", sans-serif}html{--ion-dynamic-font:-apple-system-body;--ion-font-family:var(--ion-default-font)}body{background:var(--ion-background-color);color:var(--ion-text-color)}body.backdrop-no-scroll{overflow:hidden}html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,html.ios ion-modal ion-footer ion-toolbar:first-of-type{padding-top:6px}html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type{padding-bottom:6px}html.ios ion-modal ion-toolbar{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){html.ios ion-modal.modal-card:first-of-type{--backdrop-opacity:0.18}}ion-modal.modal-default.show-modal~ion-modal.modal-default{--backdrop-opacity:0;--box-shadow:none}html.ios ion-modal.modal-card .ion-page{border-top-left-radius:var(--border-radius)}.ion-color-primary{--ion-color-base:var(--ion-color-primary, #0054e9) !important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 0, 84, 233) !important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-primary-shade, #004acd) !important;--ion-color-tint:var(--ion-color-primary-tint, #1a65eb) !important}.ion-color-secondary{--ion-color-base:var(--ion-color-secondary, #0163aa) !important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 1, 99, 170) !important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-secondary-shade, #015796) !important;--ion-color-tint:var(--ion-color-secondary-tint, #1a73b3) !important}.ion-color-tertiary{--ion-color-base:var(--ion-color-tertiary, #6030ff) !important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 96, 48, 255) !important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-tertiary-shade, #542ae0) !important;--ion-color-tint:var(--ion-color-tertiary-tint, #7045ff) !important}.ion-color-success{--ion-color-base:var(--ion-color-success, #2dd55b) !important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 213, 91) !important;--ion-color-contrast:var(--ion-color-success-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-success-shade, #28bb50) !important;--ion-color-tint:var(--ion-color-success-tint, #42d96b) !important}.ion-color-warning{--ion-color-base:var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast:var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22) !important}.ion-color-danger{--ion-color-base:var(--ion-color-danger, #c5000f) !important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 197, 0, 15) !important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-danger-shade, #ad000d) !important;--ion-color-tint:var(--ion-color-danger-tint, #cb1a27) !important}.ion-color-light{--ion-color-base:var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast:var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium{--ion-color-base:var(--ion-color-medium, #636469) !important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 99, 100, 105) !important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-medium-shade, #57585c) !important;--ion-color-tint:var(--ion-color-medium-tint, #737478) !important}.ion-color-dark{--ion-color-base:var(--ion-color-dark, #222428) !important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e) !important}.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;z-index:0}ion-modal>.ion-page{position:relative;contain:layout style;height:100%}.split-pane-visible>.ion-page.split-pane-main{position:relative}ion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden{display:none !important}.ion-page-invisible{opacity:0}.can-go-back>ion-header ion-back-button{display:block}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding:20px}@supports (padding-top: 20px){html{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}ion-card.ion-color .ion-inherit-color,ion-card-header.ion-color .ion-inherit-color{color:inherit}.menu-content{transform:translate3d(0,  0,  0)}.menu-content-open{cursor:pointer;touch-action:manipulation;pointer-events:none;overflow-y:hidden}.menu-content-open ion-content{--overflow:hidden}.menu-content-open .ion-content-scroll-host{overflow:hidden}.ios .menu-content-reveal{box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-reveal{box-shadow:4px 0px 16px rgba(0,0,0,.18)}.md .menu-content-push{box-shadow:4px 0px 16px rgba(0,0,0,.18)}ion-accordion-group.accordion-group-expand-inset>ion-accordion:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}ion-accordion-group.accordion-group-expand-inset>ion-accordion:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}ion-accordion-group>ion-accordion:last-of-type ion-item[slot=header]{--border-width:0px}ion-accordion.accordion-animated>[slot=header] .ion-accordion-toggle-icon{transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1)}@media (prefers-reduced-motion: reduce){ion-accordion .ion-accordion-toggle-icon{transition:none !important}}ion-accordion.accordion-expanding>[slot=header] .ion-accordion-toggle-icon,ion-accordion.accordion-expanded>[slot=header] .ion-accordion-toggle-icon{transform:rotate(180deg)}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-previous ion-item[slot=header]{--border-width:0px;--inner-border-width:0px}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanding:first-of-type,ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanded:first-of-type{margin-top:0}ion-input input::-webkit-date-and-time-value{text-align:start}.ion-datetime-button-overlay{--width:fit-content;--height:fit-content}.ion-datetime-button-overlay ion-datetime.datetime-grid{width:320px;min-height:320px}[ion-last-focus],header[tabindex="-1"]:focus,[role=banner][tabindex="-1"]:focus,main[tabindex="-1"]:focus,[role=main][tabindex="-1"]:focus,h1[tabindex="-1"]:focus,[role=heading][aria-level="1"][tabindex="-1"]:focus{outline:none}.popover-viewport:has(>ion-content){overflow:hidden}@supports not selector(:has(> ion-content)){.popover-viewport{overflow:hidden}}:host{--close-size:var(--spacing-xxxlarge);--icon-size:var(--spacing-medium);display:block}.atom-alert{border:1px solid transparent;border-radius:var(--border-radius);font:var(--text-body-medium);letter-spacing:var(--text-body-medium-letter);padding:var(--spacing-base);position:relative}.atom-alert.has-close{padding-right:var(--close-size)}.atom-alert.is-closed{display:none}@media only screen and (min-width: 768px){.atom-alert{display:flex;flex-wrap:wrap;gap:var(--spacing-xsmall)}}.atom-alert.atom-color--success{background-color:var(--color-contextual-success-light-2);border-color:var(--color-contextual-success-dark-1);color:var(--color-contextual-success-dark-1)}.atom-alert.atom-color--info{background-color:var(--color-contextual-info-light-2);border-color:var(--color-contextual-info-dark-1);color:var(--color-contextual-info-dark-1)}.atom-alert.atom-color--warning{background-color:var(--color-contextual-warning-light-2);border-color:var(--color-contextual-warning-dark-1);color:var(--color-contextual-warning-dark-1)}.atom-alert.atom-color--danger{background-color:var(--color-contextual-error-light-2);border-color:var(--color-contextual-error-dark-1);color:var(--color-contextual-error-dark-1)}.atom-alert.atom-color--neutral{background-color:var(--color-neutral-light-5);border-color:var(--color-neutral-light-1);color:var(--color-neutral-light-1)}.atom-alert.atom-color--neutral .atom-icon{color:var(--color-brand-primary-regular)}.atom-body{display:flex;gap:var(--spacing-xsmall)}.atom-content{flex-basis:content}.atom-title{font-weight:var(--font-weight-bold);margin:0;min-height:var(--spacing-large)}.atom-title:not(:last-child){margin-bottom:var(--spacing-xsmall)}.atom-message{margin:0}.atom-message:not(:last-child){margin-bottom:var(--spacing-xsmall)}.atom-actions{margin-left:auto;margin-right:var(--spacing-xsmall)}@media only screen and (max-width: 767px){.atom-actions{display:flex;justify-content:flex-end;margin-top:var(--spacing-xsmall)}}.atom-actions__button{background:transparent;border:0;color:var(--color-brand-secondary-regular);cursor:pointer;font:var(--text-link-medium);letter-spacing:var(--text-link-medium-letter);padding:0;text-decoration:underline;transition:color var(--transition-duration);will-change:color}.atom-actions__button:hover{color:var(--color-brand-secondary-dark-1)}.atom-icon{align-items:center;display:flex;font-size:var(--icon-size);height:var(--spacing-large)}.atom-close{background:transparent;border:0;color:var(--color-neutral-light-2);cursor:pointer;font-size:var(--icon-size);height:var(--close-size);opacity:0.8;padding:0;position:absolute;right:0;top:10px;transition:opacity var(--transition-duration);width:var(--close-size);will-change:opacity}.atom-close:hover{opacity:1}'}}]);
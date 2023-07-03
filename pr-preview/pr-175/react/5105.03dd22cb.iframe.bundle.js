"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[5105],{"../../packages/core/dist/esm/atom-select.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{atom_select:()=>AtomSelect});var _index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-43ce1e25.js");const AtomSelect=class{constructor(hostRef){(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.atomBlur=(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomBlur",7),this.atomCancel=(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomCancel",7),this.atomChange=(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomChange",7),this.atomDismiss=(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomDismiss",7),this.atomFocus=(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomFocus",7),this.handleChange=event=>{this.value=event.detail.value,this.atomChange.emit(this.value)},this.handleCancel=()=>{this.selectEl.removeEventListener("ionCancel",this.handleCancel),this.atomCancel.emit()},this.handleBlur=()=>{this.selectEl.removeEventListener("ionBlur",this.handleBlur),this.atomBlur.emit()},this.handleFocus=()=>{this.selectEl.removeEventListener("ionFocus",this.handleBlur),this.atomFocus.emit()},this.handleDismiss=()=>{this.selectEl.removeEventListener("ionDismiss",this.handleDismiss),this.atomDismiss.emit()},this.color="secondary",this.disabled=void 0,this.errorText=void 0,this.fill="solid",this.helperText=void 0,this.icon=void 0,this.label=void 0,this.mode="md",this.multiple=void 0,this.name=void 0,this.placeholder=void 0,this.readonly=void 0,this.value=void 0,this.options=[]}componentDidLoad(){this.selectEl.addEventListener("ionChange",this.handleChange),this.selectEl.addEventListener("ionBlur",this.handleBlur),this.selectEl.addEventListener("ionFocus",this.handleFocus),this.selectEl.addEventListener("ionCancel",this.handleCancel),this.selectEl.addEventListener("ionDismiss",this.handleDismiss)}disconnectedCallback(){this.selectEl.removeEventListener("ionChange",this.handleChange),this.selectEl.removeEventListener("ionBlur",this.handleBlur),this.selectEl.removeEventListener("ionFocus",this.handleFocus),this.selectEl.removeEventListener("ionCancel",this.handleCancel),this.selectEl.removeEventListener("ionDismiss",this.handleDismiss)}render(){return(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"has-readonly":!!this.readonly}},(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-select",{class:{"atom-select":!0,"has-icon":!!this.icon,"has-error":!!this.errorText,"has-readonly":!!this.readonly},name:this.name,label:this.label,"label-placement":"stacked",interface:"popover",shape:"round",fill:this.fill,placeholder:this.placeholder,disabled:this.disabled,multiple:this.multiple,color:this.color,mode:this.mode,tabindex:this.readonly&&"-1","aria-disabled":this.readonly,onIonChange:this.handleChange,onIonBlur:this.handleBlur,onIonFocus:this.handleFocus,onIonCancel:this.handleCancel,interfaceOptions:{cssClass:`atom-select-color-${this.color}`}},this.options.map((option=>(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-select-option",{value:option.value,disabled:option.disabled,key:option.id},option.value)))),(this.helperText||this.errorText)&&(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"select-bottom"},!this.errorText&&(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"helper-text"},this.helperText),this.errorText&&(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"error-text"},this.errorText)),this.icon&&(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("atom-icon",{class:{"atom-icon":!0,[`atom-color--${this.color}`]:!0},icon:this.icon}))}get selectEl(){return(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}};AtomSelect.style='html.ios{--ion-default-font:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}html.md{--ion-default-font:"Roboto", "Helvetica Neue", sans-serif}html{--ion-font-family:var(--ion-default-font)}body{background:var(--ion-background-color)}body.backdrop-no-scroll{overflow:hidden}html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,html.ios ion-modal ion-footer ion-toolbar:first-of-type{padding-top:6px}html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type{padding-bottom:6px}html.ios ion-modal ion-toolbar{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){html.ios ion-modal.modal-card:first-of-type{--backdrop-opacity:0.18}}ion-modal.modal-default.show-modal~ion-modal.modal-default{--backdrop-opacity:0;--box-shadow:none}html.ios ion-modal.modal-card .ion-page{border-top-left-radius:var(--border-radius)}.ion-color-primary{--ion-color-base:var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255) !important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint:var(--ion-color-primary-tint, #4c8dff) !important}.ion-color-secondary{--ion-color-base:var(--ion-color-secondary, #3dc2ff) !important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 61, 194, 255) !important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-secondary-shade, #36abe0) !important;--ion-color-tint:var(--ion-color-secondary-tint, #50c8ff) !important}.ion-color-tertiary{--ion-color-base:var(--ion-color-tertiary, #5260ff) !important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 82, 96, 255) !important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-tertiary-shade, #4854e0) !important;--ion-color-tint:var(--ion-color-tertiary-tint, #6370ff) !important}.ion-color-success{--ion-color-base:var(--ion-color-success, #2dd36f) !important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 211, 111) !important;--ion-color-contrast:var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-success-shade, #28ba62) !important;--ion-color-tint:var(--ion-color-success-tint, #42d77d) !important}.ion-color-warning{--ion-color-base:var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast:var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22) !important}.ion-color-danger{--ion-color-base:var(--ion-color-danger, #eb445a) !important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 235, 68, 90) !important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-danger-shade, #cf3c4f) !important;--ion-color-tint:var(--ion-color-danger-tint, #ed576b) !important}.ion-color-light{--ion-color-base:var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast:var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium{--ion-color-base:var(--ion-color-medium, #92949c) !important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 146, 148, 156) !important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-medium-shade, #808289) !important;--ion-color-tint:var(--ion-color-medium-tint, #9d9fa6) !important}.ion-color-dark{--ion-color-base:var(--ion-color-dark, #222428) !important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e) !important}.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}ion-modal>.ion-page{position:relative;contain:layout style;height:100%}.split-pane-visible>.ion-page.split-pane-main{position:relative}ion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden{display:none !important}.ion-page-invisible{opacity:0}.can-go-back>ion-header ion-back-button{display:block}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding:20px}@supports (padding-top: 20px){html{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top: constant(safe-area-inset-top)){html{--ion-safe-area-top:constant(safe-area-inset-top);--ion-safe-area-bottom:constant(safe-area-inset-bottom);--ion-safe-area-left:constant(safe-area-inset-left);--ion-safe-area-right:constant(safe-area-inset-right)}}@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}ion-card.ion-color .ion-inherit-color,ion-card-header.ion-color .ion-inherit-color{color:inherit}.menu-content{transform:translate3d(0,  0,  0)}.menu-content-open{cursor:pointer;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{box-shadow:-8px 0 42px rgba(0, 0, 0, 0.08)}[dir=rtl].ios .menu-content-reveal{box-shadow:8px 0 42px rgba(0, 0, 0, 0.08)}.md .menu-content-reveal{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}.md .menu-content-push{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}ion-accordion-group.accordion-group-expand-inset>ion-accordion:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}ion-accordion-group.accordion-group-expand-inset>ion-accordion:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}ion-accordion-group>ion-accordion:last-of-type ion-item[slot=header]{--border-width:0px}ion-accordion.accordion-animated>[slot=header] .ion-accordion-toggle-icon{transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1)}@media (prefers-reduced-motion: reduce){ion-accordion .ion-accordion-toggle-icon{transition:none !important}}ion-accordion.accordion-expanding>[slot=header] .ion-accordion-toggle-icon,ion-accordion.accordion-expanded>[slot=header] .ion-accordion-toggle-icon{transform:rotate(180deg)}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-previous ion-item[slot=header]{--border-width:0px;--inner-border-width:0px}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanding:first-of-type,ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanded:first-of-type{margin-top:0}ion-input input::-webkit-date-and-time-value{text-align:start}.ion-datetime-button-overlay{--width:fit-content;--height:fit-content}.ion-datetime-button-overlay ion-datetime.datetime-grid{width:320px;min-height:320px}:host{--atom-icon-color:var(--color-neutral-regular);--atom-icon-grid:var(--spacing-xxxxlarge);--atom-button-icon-size:30px;--atom-select-min-height:57px;display:block;position:relative}:host(.has-readonly)::after{bottom:0;content:"";cursor:not-allowed;left:0;position:absolute;right:0;top:0;z-index:var(--zindex-10)}.atom-select{--ion-color-step-550:--color-neutral-light-1;min-height:var(--atom-select-min-height)}.atom-select[color=primary]{--highlight-color-focused:var(--color-brand-primary-regular);--atom-icon-color:var(--color-brand-primary-regular)}.atom-select[color=secondary]{--highlight-color-focused:var(--color-brand-secondary-regular)}.atom-select[color=danger]{--highlight-color-focused:var(--color-contextual-error-regular)}.atom-select.has-error{--border-color:var(--color-contextual-error-regular);--placeholder-color:var(--text-color);color:var(--color-contextual-error-regular)}.atom-select.select-fill-solid.select-expanded{--background:var(--color-neutral-light-5)}.atom-select.select-disabled:hover,.atom-select.select-disabled{--background:var(--color-neutral-light-2);--color:var(--color-neutral-black);--placeholder-color:var(--color-neutral-black);opacity:0.55}.atom-select.select-shape-round{--border-radius:8px}.atom-select.has-icon{--padding-start:var(--atom-icon-grid);z-index:var(--zindex-10)}.atom-icon{color:var(--atom-icon-color);cursor:pointer;font-size:16px;left:calc(var(--atom-icon-grid) / 2);position:absolute;top:calc(var(--atom-select-min-height) / 2 + 2px);transform:translate(-50%, -50%);z-index:var(--zindex-100)}.select-expanded+.atom-icon.atom-color--primary{--atom-icon-color:var(--color-brand-primary-regular)}.select-expanded+.atom-icon.atom-color--secondary{--atom-icon-color:var(--color-brand-secondary-regular)}.select-expanded+.atom-icon.atom-color--danger,.select-expanded+.atom-icon.has-error{--atom-icon-color:var(--color-contextual-error-regular)}.select-disabled+.atom-icon{opacity:0.55}.select-bottom{display:flex;font-size:12px;justify-content:space-between;padding-inline-end:var(--spacing-base);padding-inline-start:var(--spacing-base);padding-top:5px}.select-bottom .helper-text{color:var(--color-neutral-regular)}.select-bottom .error-text{color:var(--color-contextual-error-regular)}'}}]);
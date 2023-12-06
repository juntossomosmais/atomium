"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[3676],{"../../packages/core/dist/esm/atom-input.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{atom_input:()=>AtomInput});var _index_e8ebfc63_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-e8ebfc63.js");const AtomInput=class{constructor(hostRef){(0,_index_e8ebfc63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.atomFocus=(0,_index_e8ebfc63_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomFocus",7),this.atomBlur=(0,_index_e8ebfc63_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomBlur",7),this.atomChange=(0,_index_e8ebfc63_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomChange",7),this.atomInput=(0,_index_e8ebfc63_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomInput",7),this.handleChange=event=>{const value=event.target.value;this.value=value,this.atomChange.emit(String(value))},this.handleInput=event=>{const value=event.target.value;this.value=value,this.atomInput.emit(String(value))},this.handleBlur=()=>{this.inputEl.removeEventListener("ionBlur",this.handleBlur),this.atomBlur.emit()},this.handleFocus=()=>{this.inputEl.removeEventListener("ionFocus",this.handleFocus),this.atomFocus.emit()},this.autocomplete="off",this.autofocus=!1,this.clearInput=!1,this.clearOnEdit=!1,this.color="secondary",this.counter=!1,this.counterFormatter=void 0,this.debounce=void 0,this.disabled=!1,this.enterKeyHint="enter",this.errorText=void 0,this.fill="solid",this.hasError=!1,this.helperText=void 0,this.icon=void 0,this.inputmode=void 0,this.label=void 0,this.labelPlacement="floating",this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.mode="md",this.multiple=!1,this.name=void 0,this.passwordToggle=!1,this.pattern=void 0,this.placeholder=void 0,this.readonly=!1,this.required=!1,this.shape="round",this.step=void 0,this.type="text",this.value=void 0}get inputEl(){return this._inputEl}set inputEl(value){this._inputEl=value}async setFocus(){await this.inputEl.setFocus()}async setInputEl(inputEl){this._inputEl=inputEl}async getInputElement(){return this.inputEl.getInputElement()}render(){return(0,_index_e8ebfc63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_e8ebfc63_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_e8ebfc63_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-input",{ref:el=>this.inputEl=el,class:{"atom-input":!0,"ion-invalid ion-touched":this.hasError,"has-icon":!!this.icon,"has-readonly":this.readonly},autocomplete:this.autocomplete,autofocus:this.autofocus,clearInput:this.clearInput,clearOnEdit:this.clearOnEdit,color:this.color,counter:this.counter,counterFormatter:this.counterFormatter,debounce:this.debounce,disabled:this.disabled,enterKeyHint:this.enterKeyHint,errorText:this.errorText,fill:this.fill,helperText:this.helperText,inputmode:this.inputmode,label:this.label,labelPlacement:this.labelPlacement,max:this.max,maxlength:this.maxlength,min:this.min,minlength:this.minlength,mode:this.mode,multiple:this.multiple,name:this.name,pattern:this.pattern,placeholder:this.placeholder,readonly:this.readonly,required:this.required,shape:this.shape,step:this.step,type:this.type,value:this.value,onIonChange:this.handleChange,onIonInput:this.handleInput,onIonBlur:this.handleBlur,onIonFocus:this.handleFocus}),this.icon&&(0,_index_e8ebfc63_js__WEBPACK_IMPORTED_MODULE_0__.h)("atom-icon",{class:{"atom-icon":!0,[`atom-color--${this.color}`]:!0},icon:this.icon}),this.passwordToggle&&this.value&&(0,_index_e8ebfc63_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{class:"atom-password-icon",type:"button",onClick:()=>{this.type="password"===this.type?"text":"password"}},(0,_index_e8ebfc63_js__WEBPACK_IMPORTED_MODULE_0__.h)("atom-icon",{class:{[`atom-color--${this.color}`]:!0},icon:"password"===this.type?"eye-off":"eye"})))}get element(){return(0,_index_e8ebfc63_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}};AtomInput.style='html.ios.sc-atom-input{--ion-default-font:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}html.md.sc-atom-input{--ion-default-font:"Roboto", "Helvetica Neue", sans-serif}html.sc-atom-input{--ion-default-dynamic-font:-apple-system-body;--ion-font-family:var(--ion-default-font)}body.sc-atom-input{background:var(--ion-background-color)}body.backdrop-no-scroll.sc-atom-input{overflow:hidden}html.ios.sc-atom-input ion-modal.modal-card.sc-atom-input ion-header.sc-atom-input ion-toolbar.sc-atom-input:first-of-type,html.ios.sc-atom-input ion-modal.modal-sheet.sc-atom-input ion-header.sc-atom-input ion-toolbar.sc-atom-input:first-of-type,html.ios.sc-atom-input ion-modal.sc-atom-input ion-footer.sc-atom-input ion-toolbar.sc-atom-input:first-of-type{padding-top:6px}html.ios.sc-atom-input ion-modal.modal-card.sc-atom-input ion-header.sc-atom-input ion-toolbar.sc-atom-input:last-of-type,html.ios.sc-atom-input ion-modal.modal-sheet.sc-atom-input ion-header.sc-atom-input ion-toolbar.sc-atom-input:last-of-type{padding-bottom:6px}html.ios.sc-atom-input ion-modal.sc-atom-input ion-toolbar.sc-atom-input{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){html.ios.sc-atom-input ion-modal.modal-card.sc-atom-input:first-of-type{--backdrop-opacity:0.18}}ion-modal.modal-default.show-modal.sc-atom-input~ion-modal.modal-default.sc-atom-input{--backdrop-opacity:0;--box-shadow:none}html.ios.sc-atom-input ion-modal.modal-card.sc-atom-input .ion-page.sc-atom-input{border-top-left-radius:var(--border-radius)}.ion-color-primary.sc-atom-input{--ion-color-base:var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255) !important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint:var(--ion-color-primary-tint, #4c8dff) !important}.ion-color-secondary.sc-atom-input{--ion-color-base:var(--ion-color-secondary, #3dc2ff) !important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 61, 194, 255) !important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-secondary-shade, #36abe0) !important;--ion-color-tint:var(--ion-color-secondary-tint, #50c8ff) !important}.ion-color-tertiary.sc-atom-input{--ion-color-base:var(--ion-color-tertiary, #5260ff) !important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 82, 96, 255) !important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-tertiary-shade, #4854e0) !important;--ion-color-tint:var(--ion-color-tertiary-tint, #6370ff) !important}.ion-color-success.sc-atom-input{--ion-color-base:var(--ion-color-success, #2dd36f) !important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 211, 111) !important;--ion-color-contrast:var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-success-shade, #28ba62) !important;--ion-color-tint:var(--ion-color-success-tint, #42d77d) !important}.ion-color-warning.sc-atom-input{--ion-color-base:var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast:var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22) !important}.ion-color-danger.sc-atom-input{--ion-color-base:var(--ion-color-danger, #eb445a) !important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 235, 68, 90) !important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-danger-shade, #cf3c4f) !important;--ion-color-tint:var(--ion-color-danger-tint, #ed576b) !important}.ion-color-light.sc-atom-input{--ion-color-base:var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast:var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium.sc-atom-input{--ion-color-base:var(--ion-color-medium, #92949c) !important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 146, 148, 156) !important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-medium-shade, #808289) !important;--ion-color-tint:var(--ion-color-medium-tint, #9d9fa6) !important}.ion-color-dark.sc-atom-input{--ion-color-base:var(--ion-color-dark, #222428) !important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e) !important}.ion-page.sc-atom-input{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;z-index:0}ion-modal.sc-atom-input>.ion-page.sc-atom-input{position:relative;contain:layout style;height:100%}.split-pane-visible.sc-atom-input>.ion-page.split-pane-main.sc-atom-input{position:relative}ion-route.sc-atom-input,ion-route-redirect.sc-atom-input,ion-router.sc-atom-input,ion-select-option.sc-atom-input,ion-nav-controller.sc-atom-input,ion-menu-controller.sc-atom-input,ion-action-sheet-controller.sc-atom-input,ion-alert-controller.sc-atom-input,ion-loading-controller.sc-atom-input,ion-modal-controller.sc-atom-input,ion-picker-controller.sc-atom-input,ion-popover-controller.sc-atom-input,ion-toast-controller.sc-atom-input,.ion-page-hidden.sc-atom-input{display:none !important}.ion-page-invisible.sc-atom-input{opacity:0}.can-go-back.sc-atom-input>ion-header.sc-atom-input ion-back-button.sc-atom-input{display:block}html.plt-ios.plt-hybrid.sc-atom-input,html.plt-ios.plt-pwa.sc-atom-input{--ion-statusbar-padding:20px}@supports (padding-top: 20px){html.sc-atom-input{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top: constant(safe-area-inset-top)){html.sc-atom-input{--ion-safe-area-top:constant(safe-area-inset-top);--ion-safe-area-bottom:constant(safe-area-inset-bottom);--ion-safe-area-left:constant(safe-area-inset-left);--ion-safe-area-right:constant(safe-area-inset-right)}}@supports (padding-top: env(safe-area-inset-top)){html.sc-atom-input{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}ion-card.ion-color.sc-atom-input .ion-inherit-color.sc-atom-input,ion-card-header.ion-color.sc-atom-input .ion-inherit-color.sc-atom-input{color:inherit}.menu-content.sc-atom-input{transform:translate3d(0,  0,  0)}.menu-content-open.sc-atom-input{cursor:pointer;touch-action:manipulation;pointer-events:none}.ios.sc-atom-input .menu-content-reveal.sc-atom-input{box-shadow:-8px 0 42px rgba(0, 0, 0, 0.08)}[dir=rtl].ios.sc-atom-input .menu-content-reveal.sc-atom-input{box-shadow:8px 0 42px rgba(0, 0, 0, 0.08)}.md.sc-atom-input .menu-content-reveal.sc-atom-input{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}.md.sc-atom-input .menu-content-push.sc-atom-input{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}ion-accordion-group.accordion-group-expand-inset.sc-atom-input>ion-accordion.sc-atom-input:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}ion-accordion-group.accordion-group-expand-inset.sc-atom-input>ion-accordion.sc-atom-input:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}ion-accordion-group.sc-atom-input>ion-accordion.sc-atom-input:last-of-type ion-item[slot=header].sc-atom-input{--border-width:0px}ion-accordion.accordion-animated.sc-atom-input>[slot=header].sc-atom-input .ion-accordion-toggle-icon.sc-atom-input{transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1)}@media (prefers-reduced-motion: reduce){ion-accordion.sc-atom-input .ion-accordion-toggle-icon.sc-atom-input{transition:none !important}}ion-accordion.accordion-expanding.sc-atom-input>[slot=header].sc-atom-input .ion-accordion-toggle-icon.sc-atom-input,ion-accordion.accordion-expanded.sc-atom-input>[slot=header].sc-atom-input .ion-accordion-toggle-icon.sc-atom-input{transform:rotate(180deg)}ion-accordion-group.accordion-group-expand-inset.md.sc-atom-input>ion-accordion.accordion-previous.sc-atom-input ion-item[slot=header].sc-atom-input{--border-width:0px;--inner-border-width:0px}ion-accordion-group.accordion-group-expand-inset.md.sc-atom-input>ion-accordion.accordion-expanding.sc-atom-input:first-of-type,ion-accordion-group.accordion-group-expand-inset.md.sc-atom-input>ion-accordion.accordion-expanded.sc-atom-input:first-of-type{margin-top:0}ion-input.sc-atom-input input.sc-atom-input::-webkit-date-and-time-value{text-align:start}.ion-datetime-button-overlay.sc-atom-input{--width:fit-content;--height:fit-content}.ion-datetime-button-overlay.sc-atom-input ion-datetime.datetime-grid.sc-atom-input{width:320px;min-height:320px}.sc-atom-input-h{--atom-icon-color:var(--color-neutral-regular);--atom-icon-grid:var(--spacing-xxxxlarge);--atom-button-icon-size:30px;--atom-input-min-height:57px;display:block;position:relative}.atom-input.sc-atom-input{--ion-color-step-550:--color-neutral-light-1;min-height:var(--atom-input-min-height)}.atom-input[color=primary].sc-atom-input{--highlight-color-focused:var(--color-brand-primary-regular);--atom-icon-color:var(--color-brand-primary-regular)}.atom-input[color=secondary].sc-atom-input{--highlight-color-focused:var(--color-brand-secondary-regular)}.atom-input[color=danger].sc-atom-input{--highlight-color-focused:var(--color-contextual-error-regular)}.atom-input.input-fill-solid.has-focus.sc-atom-input{--background:var(--color-neutral-light-5)}.atom-input.input-disabled.sc-atom-input:hover,.atom-input.input-disabled.sc-atom-input{--background:var(--color-neutral-light-2);--color:var(--color-neutral-black);--placeholder-color:var(--color-neutral-black);opacity:0.55}.atom-input.input-fill-outline.input-shape-round.sc-ion-input-md-h.sc-atom-input{--border-radius:var(--border-radius-medium)}.atom-input.input-fill-outline.input-shape-round.sc-ion-input-md-h.has-icon.sc-atom-input{--padding-start:var(--atom-icon-grid)}.atom-input.has-icon.sc-atom-input{--padding-start:var(--atom-icon-grid);z-index:var(--zindex-10)}.atom-input.has-readonly.sc-atom-input{--highlight-color-focused:var(--color-neutral-regular)}.atom-input.has-readonly.sc-atom-input label.sc-atom-input,.atom-input.has-readonly.sc-atom-input input.sc-atom-input{cursor:not-allowed}.atom-input.has-readonly.sc-atom-input .input-highlight.sc-ion-input-md.sc-atom-input{height:1px}.atom-input.sc-atom-input input.sc-atom-input::-webkit-calendar-picker-indicator,.atom-input.sc-atom-input input.sc-atom-input::-webkit-clear-button,.atom-input.sc-atom-input input.sc-atom-input::-webkit-search-decoration,.atom-input.sc-atom-input input.sc-atom-input::-webkit-search-cancel-button,.atom-input.sc-atom-input .input-clear-icon.sc-atom-input{color:var(--atom-icon-color);cursor:pointer;position:absolute;z-index:var(--zindex-100)}.atom-input.sc-atom-input input.sc-atom-input::-webkit-calendar-picker-indicator,.atom-input.sc-atom-input input.sc-atom-input::-webkit-clear-button,.atom-input.sc-atom-input input.sc-atom-input::-webkit-search-decoration,.atom-input.sc-atom-input input.sc-atom-input::-webkit-search-cancel-button{right:5px;top:0}.atom-input.sc-atom-input .input-clear-icon.sc-atom-input{height:100%;padding:0;right:var(--spacing-base);top:0}.atom-password-icon.sc-atom-input,.atom-icon.sc-atom-input{color:var(--atom-icon-color);cursor:pointer;font-size:var(--spacing-base);position:absolute;top:calc(var(--atom-input-min-height) / 2 + 2px);z-index:var(--zindex-100)}.has-focus.sc-atom-input+.atom-password-icon.atom-color--primary.sc-atom-input,.has-focus.sc-atom-input+.atom-icon.atom-color--primary.sc-atom-input{--atom-icon-color:var(--color-brand-primary-regular)}.has-focus.sc-atom-input+.atom-password-icon.atom-color--secondary.sc-atom-input,.has-focus.sc-atom-input+.atom-icon.atom-color--secondary.sc-atom-input{--atom-icon-color:var(--color-brand-secondary-regular)}.has-focus.sc-atom-input+.atom-password-icon.atom-color--danger.sc-atom-input,.has-focus.sc-atom-input+.atom-icon.atom-color--danger.sc-atom-input{--atom-icon-color:var(--color-contextual-error-regular)}.input-disabled.sc-atom-input+.atom-password-icon.sc-atom-input,.input-disabled.sc-atom-input+.atom-icon.sc-atom-input{opacity:0.55}.atom-icon.sc-atom-input{left:calc(var(--atom-icon-grid) / 2);transform:translate(-50%, -50%)}.atom-password-icon.sc-atom-input{background:transparent;border:0;cursor:pointer;height:var(--atom-button-icon-size);outline:none;right:var(--spacing-base);transform:translateY(-50%);width:var(--atom-button-icon-size)}'}}]);
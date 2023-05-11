"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[1381],{"../../packages/core/dist/esm/atom-input.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{atom_input:()=>AtomInput});var index_a869d52d=__webpack_require__("../../packages/core/dist/esm/index-a869d52d.js");const AtomInput=class{constructor(hostRef){(0,index_a869d52d.r)(this,hostRef),this.atomFocus=(0,index_a869d52d.d)(this,"atomFocus",7),this.atomBlur=(0,index_a869d52d.d)(this,"atomBlur",7),this.atomChange=(0,index_a869d52d.d)(this,"atomChange",7),this.atomInput=(0,index_a869d52d.d)(this,"atomInput",7),this.handleChange=event=>{const value=event.target.value;this.value=value,this.atomChange.emit(String(value))},this.handleInput=event=>{const value=event.target.value;this.value=value,this.atomInput.emit(String(value))},this.handleBlur=()=>{this.inputEl.removeEventListener("ionBlur",this.handleBlur),this.atomBlur.emit()},this.handleFocus=()=>{this.inputEl.removeEventListener("ionFocus",this.handleFocus),this.atomFocus.emit()},this.label=void 0,this.placeholder=void 0,this.color="secondary",this.labelPlacement="floating",this.value=void 0,this.helperText=void 0,this.errorText=void 0,this.hasError=!1,this.type="text",this.counter=!1,this.name=void 0,this.minlength=void 0,this.maxlength=void 0,this.disabled=!1,this.required=!1,this.mode="md",this.fill="solid",this.max=void 0,this.min=void 0,this.step=void 0,this.autofocus=!1,this.pattern=void 0,this.multiple=!1,this.autocomplete="off",this.shape="round",this.readonly=!1,this.clearOnEdit=!1,this.clearInput=!1,this.icon=void 0,this.passwordToggle=!1,this.inputmode=void 0}get inputEl(){return this._inputEl}set inputEl(value){this._inputEl=value}async setFocus(){await this.inputEl.setFocus()}async setInputEl(inputEl){this._inputEl=inputEl}async getInputElement(){return this.inputEl.getInputElement()}componentDidLoad(){this.inputEl.addEventListener("ionChange",this.handleChange),this.inputEl.addEventListener("ionInput",this.handleInput),this.inputEl.addEventListener("ionBlur",this.handleBlur),this.inputEl.addEventListener("ionFocus",this.handleFocus)}disconnectedCallback(){this.inputEl.removeEventListener("ionChange",this.handleChange),this.inputEl.removeEventListener("ionInput",this.handleInput),this.inputEl.removeEventListener("ionBlur",this.handleBlur),this.inputEl.removeEventListener("ionFocus",this.handleFocus)}render(){return(0,index_a869d52d.h)(index_a869d52d.H,null,(0,index_a869d52d.h)("ion-input",{ref:el=>this.inputEl=el,class:{"atom-input":!0,"ion-invalid ion-touched":this.hasError,"has-icon":!!this.icon,"has-readonly":this.readonly},autocomplete:this.autocomplete,autofocus:this.autofocus,clearInput:this.clearInput,clearOnEdit:this.clearOnEdit,color:this.color,disabled:this.disabled,errorText:this.errorText,fill:this.fill,helperText:this.helperText,inputmode:this.inputmode,label:this.label,labelPlacement:this.labelPlacement,max:this.max,maxlength:this.maxlength,min:this.min,minlength:this.minlength,mode:this.mode,multiple:this.multiple,name:this.name,pattern:this.pattern,placeholder:this.placeholder,readonly:this.readonly,required:this.required,shape:this.shape,step:this.step,type:this.type,value:this.value,onIonChange:this.handleChange,onIonInput:this.handleInput,onIonBlur:this.handleBlur,onIonFocus:this.handleFocus}),this.icon&&(0,index_a869d52d.h)("atom-icon",{class:{"atom-icon":!0,[`atom-color--${this.color}`]:!0},icon:this.icon}),this.passwordToggle&&(0,index_a869d52d.h)("atom-icon",{class:{"atom-password-icon":!0,[`atom-color--${this.color}`]:!0},icon:"password"===this.type?"eye":"eye-off",onClick:()=>{this.type="password"===this.type?"text":"password"}}))}get element(){return(0,index_a869d52d.e)(this)}};AtomInput.style='html.ios{--ion-default-font:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}html.md{--ion-default-font:"Roboto", "Helvetica Neue", sans-serif}html{--ion-font-family:var(--ion-default-font)}body{background:var(--ion-background-color)}body.backdrop-no-scroll{overflow:hidden}html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,html.ios ion-modal ion-footer ion-toolbar:first-of-type{padding-top:6px}html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type{padding-bottom:6px}html.ios ion-modal ion-toolbar{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){html.ios ion-modal.modal-card:first-of-type{--backdrop-opacity:0.18}}ion-modal.modal-default.show-modal~ion-modal.modal-default{--backdrop-opacity:0;--box-shadow:none}html.ios ion-modal.modal-card .ion-page{border-top-left-radius:var(--border-radius)}.ion-color-primary{--ion-color-base:var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255) !important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint:var(--ion-color-primary-tint, #4c8dff) !important}.ion-color-secondary{--ion-color-base:var(--ion-color-secondary, #3dc2ff) !important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 61, 194, 255) !important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-secondary-shade, #36abe0) !important;--ion-color-tint:var(--ion-color-secondary-tint, #50c8ff) !important}.ion-color-tertiary{--ion-color-base:var(--ion-color-tertiary, #5260ff) !important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 82, 96, 255) !important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-tertiary-shade, #4854e0) !important;--ion-color-tint:var(--ion-color-tertiary-tint, #6370ff) !important}.ion-color-success{--ion-color-base:var(--ion-color-success, #2dd36f) !important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 211, 111) !important;--ion-color-contrast:var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-success-shade, #28ba62) !important;--ion-color-tint:var(--ion-color-success-tint, #42d77d) !important}.ion-color-warning{--ion-color-base:var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast:var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22) !important}.ion-color-danger{--ion-color-base:var(--ion-color-danger, #eb445a) !important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 235, 68, 90) !important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-danger-shade, #cf3c4f) !important;--ion-color-tint:var(--ion-color-danger-tint, #ed576b) !important}.ion-color-light{--ion-color-base:var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast:var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium{--ion-color-base:var(--ion-color-medium, #92949c) !important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 146, 148, 156) !important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-medium-shade, #808289) !important;--ion-color-tint:var(--ion-color-medium-tint, #9d9fa6) !important}.ion-color-dark{--ion-color-base:var(--ion-color-dark, #222428) !important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e) !important}.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}ion-modal>.ion-page{position:relative;contain:layout style;height:100%}.split-pane-visible>.ion-page.split-pane-main{position:relative}ion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden{display:none !important}.ion-page-invisible{opacity:0}.can-go-back>ion-header ion-back-button{display:block}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding:20px}@supports (padding-top: 20px){html{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top: constant(safe-area-inset-top)){html{--ion-safe-area-top:constant(safe-area-inset-top);--ion-safe-area-bottom:constant(safe-area-inset-bottom);--ion-safe-area-left:constant(safe-area-inset-left);--ion-safe-area-right:constant(safe-area-inset-right)}}@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}ion-card.ion-color .ion-inherit-color,ion-card-header.ion-color .ion-inherit-color{color:inherit}.menu-content{transform:translate3d(0,  0,  0)}.menu-content-open{cursor:pointer;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{box-shadow:-8px 0 42px rgba(0, 0, 0, 0.08)}[dir=rtl].ios .menu-content-reveal{box-shadow:8px 0 42px rgba(0, 0, 0, 0.08)}.md .menu-content-reveal{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}.md .menu-content-push{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}ion-accordion-group.accordion-group-expand-inset>ion-accordion:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}ion-accordion-group.accordion-group-expand-inset>ion-accordion:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}ion-accordion-group>ion-accordion:last-of-type ion-item[slot=header]{--border-width:0px}ion-accordion.accordion-animated>[slot=header] .ion-accordion-toggle-icon{transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1)}@media (prefers-reduced-motion: reduce){ion-accordion .ion-accordion-toggle-icon{transition:none !important}}ion-accordion.accordion-expanding>[slot=header] .ion-accordion-toggle-icon,ion-accordion.accordion-expanded>[slot=header] .ion-accordion-toggle-icon{transform:rotate(180deg)}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-previous ion-item[slot=header]{--border-width:0px;--inner-border-width:0px}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanding:first-of-type,ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanded:first-of-type{margin-top:0}ion-input input::-webkit-date-and-time-value{text-align:start}.ion-datetime-button-overlay{--width:fit-content;--height:fit-content}.ion-datetime-button-overlay ion-datetime.datetime-grid{width:320px;min-height:320px}:host{--atom-icon-color:var(--color-neutral-regular);--atom-icon-grid:var(--spacing-xxxxlarge);display:block;position:relative}.atom-input[color=primary]{--highlight-color-focused:var(--color-brand-primary-regular);--atom-icon-color:var(--color-brand-primary-regular)}.atom-input[color=secondary]{--highlight-color-focused:var(--color-brand-secondary-regular)}.atom-input[color=danger]{--highlight-color-focused:var(--color-contextual-error-regular)}.atom-input[color=success]{--highlight-color-focused:var(--color-contextual-success-regular)}.atom-input.input-fill-solid.has-focus{--background:var(--color-neutral-light-5)}.atom-input.input-disabled:hover,.atom-input.input-disabled{--background:var(--color-neutral-light-2);--color:var(--color-neutral-black);--placeholder-color:var(--color-neutral-black);opacity:0.55}.atom-input.input-shape-round{--border-radius:8px}.atom-input.has-icon{--padding-start:var(--atom-icon-grid);z-index:var(--zindex-10)}.atom-input.has-readonly{--highlight-color-focused:var(--color-neutral-regular)}.atom-input.has-readonly label,.atom-input.has-readonly input{cursor:not-allowed}.atom-password-icon,.atom-icon{color:var(--atom-icon-color);position:absolute;top:calc(50% + 2px);z-index:var(--zindex-100)}.has-focus+.atom-password-icon.atom-color--primary,.has-focus+.atom-icon.atom-color--primary{--atom-icon-color:var(--color-brand-primary-regular)}.has-focus+.atom-password-icon.atom-color--secondary,.has-focus+.atom-icon.atom-color--secondary{--atom-icon-color:var(--color-brand-secondary-regular)}.has-focus+.atom-password-icon.atom-color--danger,.has-focus+.atom-icon.atom-color--danger{--atom-icon-color:var(--color-contextual-error-regular)}.has-focus+.atom-password-icon.atom-color--success,.has-focus+.atom-icon.atom-color--success{--atom-icon-color:var(--color-contextual-success-regular)}.input-disabled+.atom-password-icon,.input-disabled+.atom-icon{opacity:0.55}.atom-icon{left:calc(var(--atom-icon-grid) / 2);transform:translate(-50%, -50%)}.atom-password-icon{cursor:pointer;right:var(--spacing-base);transform:translateY(-50%)}'}}]);
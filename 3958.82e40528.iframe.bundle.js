"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[3958],{"../../packages/core/dist/esm/atom-textarea.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{atom_textarea:()=>AtomTextarea});var _index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-4aef4473.js");const AtomTextarea=class{constructor(hostRef){(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.atomFocus=(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomFocus",7),this.atomBlur=(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomBlur",7),this.atomChange=(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomChange",7),this.atomInput=(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomInput",7),this.handleChange=event=>{const value=event.target.value;this.value=value,this.atomChange.emit(String(value))},this.handleInput=event=>{const value=event.target.value;this.value=value,this.atomInput.emit(String(value))},this.handleBlur=()=>{this.textareaEl.removeEventListener("ionBlur",this.handleBlur),this.atomBlur.emit()},this.handleFocus=()=>{this.textareaEl.removeEventListener("ionFocus",this.handleFocus),this.atomFocus.emit()},this.autocomplete="off",this.autofocus=!1,this.autoGrow=!1,this.clearOnEdit=!1,this.color="secondary",this.cols=void 0,this.counter=!1,this.counterFormatter=void 0,this.debounce=void 0,this.disabled=!1,this.enterKeyHint="enter",this.errorText=void 0,this.fill="solid",this.hasError=!1,this.helperText=void 0,this.icon=void 0,this.inputmode=void 0,this.label=void 0,this.labelPlacement="floating",this.maxlength=void 0,this.minlength=void 0,this.mode="md",this.name=void 0,this.pattern=void 0,this.placeholder=void 0,this.readonly=!1,this.required=!1,this.rows=4,this.shape="round",this.step=void 0,this.value=void 0,this.wrap=void 0}get textareaEl(){return this._textareaEl}set textareaEl(value){this._textareaEl=value}async setFocus(){await this.textareaEl.setFocus()}async setInputEl(textareaEl){this._textareaEl=textareaEl}async getInputElement(){return this.textareaEl.getInputElement()}render(){return(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"6fb4a2b66210cfede86b38f0ae0068b12f3f4626"},(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-textarea",{key:"bbbb97bfbccfc81352cf1d539ead16e9f172b14e",ref:el=>this.textareaEl=el,class:{"atom-textarea":!0,"ion-invalid ion-touched":this.hasError,"has-icon":!!this.icon,"has-readonly":this.readonly},autoGrow:this.autoGrow,autofocus:this.autofocus,clearOnEdit:this.clearOnEdit,cols:this.cols,color:this.color,counter:this.counter,counterFormatter:this.counterFormatter,disabled:this.disabled,debounce:this.debounce,enterKeyHint:this.enterKeyHint,errorText:this.errorText,fill:this.fill,helperText:this.helperText,inputmode:this.inputmode,label:this.label,labelPlacement:this.labelPlacement,maxlength:this.maxlength,minlength:this.minlength,mode:this.mode,name:this.name,placeholder:this.placeholder,readonly:this.readonly,rows:this.rows,required:this.required,shape:this.shape,value:this.value,wrap:this.wrap,onIonChange:this.handleChange,onIonInput:this.handleInput,onIonBlur:this.handleBlur,onIonFocus:this.handleFocus}),this.icon&&(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("atom-icon",{key:"8f43f89eb3aceeb38efa110aa6ada5255623e4c1",class:{"atom-icon":!0,[`atom-color--${this.color}`]:!0},icon:this.icon}))}get element(){return(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}};AtomTextarea.style=':root{--ion-color-primary:#0054e9;--ion-color-primary-rgb:0, 84, 233;--ion-color-primary-contrast:#fff;--ion-color-primary-contrast-rgb:255, 255, 255;--ion-color-primary-shade:#004acd;--ion-color-primary-tint:#1a65eb;--ion-color-secondary:#0163aa;--ion-color-secondary-rgb:1, 99, 170;--ion-color-secondary-contrast:#fff;--ion-color-secondary-contrast-rgb:255, 255, 255;--ion-color-secondary-shade:#015796;--ion-color-secondary-tint:#1a73b3;--ion-color-tertiary:#6030ff;--ion-color-tertiary-rgb:96, 48, 255;--ion-color-tertiary-contrast:#fff;--ion-color-tertiary-contrast-rgb:255, 255, 255;--ion-color-tertiary-shade:#542ae0;--ion-color-tertiary-tint:#7045ff;--ion-color-success:#2dd55b;--ion-color-success-rgb:45, 213, 91;--ion-color-success-contrast:#000;--ion-color-success-contrast-rgb:0, 0, 0;--ion-color-success-shade:#28bb50;--ion-color-success-tint:#42d96b;--ion-color-warning:#ffc409;--ion-color-warning-rgb:255, 196, 9;--ion-color-warning-contrast:#000;--ion-color-warning-contrast-rgb:0, 0, 0;--ion-color-warning-shade:#e0ac08;--ion-color-warning-tint:#ffca22;--ion-color-danger:#c5000f;--ion-color-danger-rgb:197, 0, 15;--ion-color-danger-contrast:#fff;--ion-color-danger-contrast-rgb:255, 255, 255;--ion-color-danger-shade:#ad000d;--ion-color-danger-tint:#cb1a27;--ion-color-light:#f4f5f8;--ion-color-light-rgb:244, 245, 248;--ion-color-light-contrast:#000;--ion-color-light-contrast-rgb:0, 0, 0;--ion-color-light-shade:#d7d8da;--ion-color-light-tint:#f5f6f9;--ion-color-medium:#636469;--ion-color-medium-rgb:99, 100, 105;--ion-color-medium-contrast:#fff;--ion-color-medium-contrast-rgb:255, 255, 255;--ion-color-medium-shade:#57585c;--ion-color-medium-tint:#737478;--ion-color-dark:#222428;--ion-color-dark-rgb:34, 36, 40;--ion-color-dark-contrast:#fff;--ion-color-dark-contrast-rgb:255, 255, 255;--ion-color-dark-shade:#1e2023;--ion-color-dark-tint:#383a3e}html.ios{--ion-default-font:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}html.md{--ion-default-font:"Roboto", "Helvetica Neue", sans-serif}html{--ion-dynamic-font:-apple-system-body;--ion-font-family:var(--ion-default-font)}body{background:var(--ion-background-color);color:var(--ion-text-color)}body.backdrop-no-scroll{overflow:hidden}html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,html.ios ion-modal ion-footer ion-toolbar:first-of-type{padding-top:6px}html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type{padding-bottom:6px}html.ios ion-modal ion-toolbar{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){html.ios ion-modal.modal-card:first-of-type{--backdrop-opacity:0.18}}ion-modal.modal-default.show-modal~ion-modal.modal-default{--backdrop-opacity:0;--box-shadow:none}html.ios ion-modal.modal-card .ion-page{border-top-left-radius:var(--border-radius)}.ion-color-primary{--ion-color-base:var(--ion-color-primary, #0054e9) !important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 0, 84, 233) !important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-primary-shade, #004acd) !important;--ion-color-tint:var(--ion-color-primary-tint, #1a65eb) !important}.ion-color-secondary{--ion-color-base:var(--ion-color-secondary, #0163aa) !important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 1, 99, 170) !important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-secondary-shade, #015796) !important;--ion-color-tint:var(--ion-color-secondary-tint, #1a73b3) !important}.ion-color-tertiary{--ion-color-base:var(--ion-color-tertiary, #6030ff) !important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 96, 48, 255) !important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-tertiary-shade, #542ae0) !important;--ion-color-tint:var(--ion-color-tertiary-tint, #7045ff) !important}.ion-color-success{--ion-color-base:var(--ion-color-success, #2dd55b) !important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 213, 91) !important;--ion-color-contrast:var(--ion-color-success-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-success-shade, #28bb50) !important;--ion-color-tint:var(--ion-color-success-tint, #42d96b) !important}.ion-color-warning{--ion-color-base:var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast:var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22) !important}.ion-color-danger{--ion-color-base:var(--ion-color-danger, #c5000f) !important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 197, 0, 15) !important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-danger-shade, #ad000d) !important;--ion-color-tint:var(--ion-color-danger-tint, #cb1a27) !important}.ion-color-light{--ion-color-base:var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast:var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium{--ion-color-base:var(--ion-color-medium, #636469) !important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 99, 100, 105) !important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-medium-shade, #57585c) !important;--ion-color-tint:var(--ion-color-medium-tint, #737478) !important}.ion-color-dark{--ion-color-base:var(--ion-color-dark, #222428) !important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e) !important}.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;z-index:0}ion-modal>.ion-page{position:relative;contain:layout style;height:100%}.split-pane-visible>.ion-page.split-pane-main{position:relative}ion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden{display:none !important}.ion-page-invisible{opacity:0}.can-go-back>ion-header ion-back-button{display:block}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding:20px}@supports (padding-top: 20px){html{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}ion-card.ion-color .ion-inherit-color,ion-card-header.ion-color .ion-inherit-color{color:inherit}.menu-content{transform:translate3d(0,  0,  0)}.menu-content-open{cursor:pointer;touch-action:manipulation;pointer-events:none;overflow-y:hidden}.menu-content-open ion-content{--overflow:hidden}.menu-content-open .ion-content-scroll-host{overflow:hidden}.ios .menu-content-reveal{box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-reveal{box-shadow:4px 0px 16px rgba(0,0,0,.18)}.md .menu-content-push{box-shadow:4px 0px 16px rgba(0,0,0,.18)}ion-accordion-group.accordion-group-expand-inset>ion-accordion:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}ion-accordion-group.accordion-group-expand-inset>ion-accordion:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}ion-accordion-group>ion-accordion:last-of-type ion-item[slot=header]{--border-width:0px}ion-accordion.accordion-animated>[slot=header] .ion-accordion-toggle-icon{transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1)}@media (prefers-reduced-motion: reduce){ion-accordion .ion-accordion-toggle-icon{transition:none !important}}ion-accordion.accordion-expanding>[slot=header] .ion-accordion-toggle-icon,ion-accordion.accordion-expanded>[slot=header] .ion-accordion-toggle-icon{transform:rotate(180deg)}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-previous ion-item[slot=header]{--border-width:0px;--inner-border-width:0px}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanding:first-of-type,ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanded:first-of-type{margin-top:0}ion-input input::-webkit-date-and-time-value{text-align:start}.ion-datetime-button-overlay{--width:fit-content;--height:fit-content}.ion-datetime-button-overlay ion-datetime.datetime-grid{width:320px;min-height:320px}[ion-last-focus],header[tabindex="-1"]:focus,[role=banner][tabindex="-1"]:focus,main[tabindex="-1"]:focus,[role=main][tabindex="-1"]:focus,h1[tabindex="-1"]:focus,[role=heading][aria-level="1"][tabindex="-1"]:focus{outline:none}.popover-viewport:has(>ion-content){overflow:hidden}@supports not selector(:has(> ion-content)){.popover-viewport{overflow:hidden}}:host{--atom-icon-color:var(--color-neutral-regular);--atom-icon-grid:var(--spacing-xxxxlarge);--atom-button-icon-size:30px;--atom-textarea-min-height:57px;display:block;position:relative}.atom-textarea{--ion-color-step-550:var(--color-neutral-light-1);min-height:var(--atom-textarea-min-height)}.atom-textarea[color=primary]{--highlight-color-focused:var(--color-brand-primary-regular);--atom-icon-color:var(--color-brand-primary-regular)}.atom-textarea[color=secondary]{--highlight-color-focused:var(--color-brand-secondary-regular)}.atom-textarea[color=danger]{--highlight-color-focused:var(--color-contextual-error-regular)}.atom-textarea.textarea-fill-solid.has-focus{--background:var(--color-neutral-light-5)}.atom-textarea.textarea-disabled,.atom-textarea.textarea-disabled:hover{--background:var(--color-neutral-light-2);--color:var(--color-neutral-black);--placeholder-color:var(--color-neutral-black);opacity:0.55}.atom-textarea.textarea-shape-round{--border-radius:var(--border-radius-medium)}.atom-textarea.has-icon{--padding-start:var(--atom-icon-grid);z-index:var(--zindex-10)}.atom-textarea.has-readonly{--highlight-color-focused:var(--color-neutral-regular)}.atom-textarea.has-readonly label,.atom-textarea.has-readonly textarea{cursor:not-allowed}.atom-textarea.has-readonly .textarea-highlight.sc-ion-textarea-md{height:1px}.atom-textarea textarea::-webkit-calendar-picker-indicator,.atom-textarea textarea::-webkit-clear-button,.atom-textarea textarea::-webkit-search-decoration,.atom-textarea textarea::-webkit-search-cancel-button,.atom-textarea .textarea-clear-icon{color:var(--atom-icon-color);cursor:pointer;position:absolute;z-index:var(--zindex-100)}.atom-textarea textarea::-webkit-calendar-picker-indicator,.atom-textarea textarea::-webkit-clear-button,.atom-textarea textarea::-webkit-search-decoration,.atom-textarea textarea::-webkit-search-cancel-button{right:5px;top:0}.atom-textarea .textarea-clear-icon{height:100%;padding:0;right:var(--spacing-base);top:0}.atom-icon{color:var(--atom-icon-color);cursor:pointer;font-size:var(--spacing-base);left:calc(var(--atom-icon-grid) / 2);position:absolute;top:calc(var(--atom-textarea-min-height) / 2 + 2px);transform:translate(-50%, -50%);z-index:var(--zindex-100)}.has-focus+.atom-icon.atom-color--primary{--atom-icon-color:var(--color-brand-primary-regular)}.has-focus+.atom-icon.atom-color--secondary{--atom-icon-color:var(--color-brand-secondary-regular)}.has-focus+.atom-icon.atom-color--danger{--atom-icon-color:var(--color-contextual-error-regular)}.textarea-disabled+.atom-icon{opacity:0.55}'}}]);
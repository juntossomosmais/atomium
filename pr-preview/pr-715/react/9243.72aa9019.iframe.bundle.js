/*! For license information please see 9243.72aa9019.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[9243],{"../../packages/core/dist/esm/atom-button_2.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{atom_button:()=>AtomButton,ion_progress_bar:()=>ProgressBar});var _index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-deee0f5a.js"),_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/helpers-4047ce7f.js"),_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/theme-516b22d6.js"),_ionic_global_3b62892f_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-3b62892f.js");const AtomButton=class{constructor(hostRef){(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.click=(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"click",7),this.color="primary",this.fill="solid",this.shape="round",this.mode="md",this.size="default",this.type="button",this.formFunctions={reset:"reset",submit:"requestSubmit"},this.handleClick=event=>{if(!this.isLink&&(event.preventDefault(),event.stopPropagation(),!this.loading&&!this.disabled)){if("button"===this.type)return this.click.emit(event);{const form=this.element.closest("form");if(form)return form[this.formFunctions[this.type]]()}}}}get isLink(){return this.href||this.download||this.target}render(){return(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"d4c32817df31ca9c6a273811c4291a21c52d15fa",class:{[`expand-${this.expand}`]:!!this.expand,"is-disabled":this.disabled}},(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-button",{key:"9165ba1d09142229e2698a081f291fb4872b2b9f",class:{"atom-button":!0,"is-loading":this.loading,"is-circle":"circle"===this.shape,"is-outline-filled":"outline-filled"===this.fill},color:this.disabled&&!this.loading?"medium":this.color,fill:"outline-filled"===this.fill?"default":this.fill,size:this.size,expand:this.expand,shape:"round",disabled:this.disabled||this.loading,type:this.type,mode:this.mode,href:this.href,rel:this.rel,target:this.target,download:this.download,onClick:this.handleClick.bind(this),part:"button"},this.loading&&(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"ee7c16cef4e105ec52d5b4548b5176032d765fbb",class:"loading"},(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-spinner",{key:"97797c97f77e4318d3885a01d5e936df0e8d055c",color:"solid"===this.fill?"light":this.color})),(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{key:"2b7940d0701fd55f6bf4db010b4d54b8bc0e6a46",class:"slot"},(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"155eab3d05ff399504aef8e5ef8581182515e035"}))))}get element(){return(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}};AtomButton.style=':root{--ion-color-primary:#0054e9;--ion-color-primary-rgb:0, 84, 233;--ion-color-primary-contrast:#fff;--ion-color-primary-contrast-rgb:255, 255, 255;--ion-color-primary-shade:#004acd;--ion-color-primary-tint:#1a65eb;--ion-color-secondary:#0163aa;--ion-color-secondary-rgb:1, 99, 170;--ion-color-secondary-contrast:#fff;--ion-color-secondary-contrast-rgb:255, 255, 255;--ion-color-secondary-shade:#015796;--ion-color-secondary-tint:#1a73b3;--ion-color-tertiary:#6030ff;--ion-color-tertiary-rgb:96, 48, 255;--ion-color-tertiary-contrast:#fff;--ion-color-tertiary-contrast-rgb:255, 255, 255;--ion-color-tertiary-shade:#542ae0;--ion-color-tertiary-tint:#7045ff;--ion-color-success:#2dd55b;--ion-color-success-rgb:45, 213, 91;--ion-color-success-contrast:#000;--ion-color-success-contrast-rgb:0, 0, 0;--ion-color-success-shade:#28bb50;--ion-color-success-tint:#42d96b;--ion-color-warning:#ffc409;--ion-color-warning-rgb:255, 196, 9;--ion-color-warning-contrast:#000;--ion-color-warning-contrast-rgb:0, 0, 0;--ion-color-warning-shade:#e0ac08;--ion-color-warning-tint:#ffca22;--ion-color-danger:#c5000f;--ion-color-danger-rgb:197, 0, 15;--ion-color-danger-contrast:#fff;--ion-color-danger-contrast-rgb:255, 255, 255;--ion-color-danger-shade:#ad000d;--ion-color-danger-tint:#cb1a27;--ion-color-light:#f4f5f8;--ion-color-light-rgb:244, 245, 248;--ion-color-light-contrast:#000;--ion-color-light-contrast-rgb:0, 0, 0;--ion-color-light-shade:#d7d8da;--ion-color-light-tint:#f5f6f9;--ion-color-medium:#636469;--ion-color-medium-rgb:99, 100, 105;--ion-color-medium-contrast:#fff;--ion-color-medium-contrast-rgb:255, 255, 255;--ion-color-medium-shade:#57585c;--ion-color-medium-tint:#737478;--ion-color-dark:#222428;--ion-color-dark-rgb:34, 36, 40;--ion-color-dark-contrast:#fff;--ion-color-dark-contrast-rgb:255, 255, 255;--ion-color-dark-shade:#1e2023;--ion-color-dark-tint:#383a3e}html.ios{--ion-default-font:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}html.md{--ion-default-font:"Roboto", "Helvetica Neue", sans-serif}html{--ion-dynamic-font:-apple-system-body;--ion-font-family:var(--ion-default-font)}body{background:var(--ion-background-color);color:var(--ion-text-color)}body.backdrop-no-scroll{overflow:hidden}html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,html.ios ion-modal ion-footer ion-toolbar:first-of-type{padding-top:6px}html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type{padding-bottom:6px}html.ios ion-modal ion-toolbar{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){html.ios ion-modal.modal-card:first-of-type{--backdrop-opacity:0.18}}ion-modal.modal-default.show-modal~ion-modal.modal-default{--backdrop-opacity:0;--box-shadow:none}html.ios ion-modal.modal-card .ion-page{border-top-left-radius:var(--border-radius)}.ion-color-primary{--ion-color-base:var(--ion-color-primary, #0054e9) !important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 0, 84, 233) !important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-primary-shade, #004acd) !important;--ion-color-tint:var(--ion-color-primary-tint, #1a65eb) !important}.ion-color-secondary{--ion-color-base:var(--ion-color-secondary, #0163aa) !important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 1, 99, 170) !important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-secondary-shade, #015796) !important;--ion-color-tint:var(--ion-color-secondary-tint, #1a73b3) !important}.ion-color-tertiary{--ion-color-base:var(--ion-color-tertiary, #6030ff) !important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 96, 48, 255) !important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-tertiary-shade, #542ae0) !important;--ion-color-tint:var(--ion-color-tertiary-tint, #7045ff) !important}.ion-color-success{--ion-color-base:var(--ion-color-success, #2dd55b) !important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 213, 91) !important;--ion-color-contrast:var(--ion-color-success-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-success-shade, #28bb50) !important;--ion-color-tint:var(--ion-color-success-tint, #42d96b) !important}.ion-color-warning{--ion-color-base:var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast:var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22) !important}.ion-color-danger{--ion-color-base:var(--ion-color-danger, #c5000f) !important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 197, 0, 15) !important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-danger-shade, #ad000d) !important;--ion-color-tint:var(--ion-color-danger-tint, #cb1a27) !important}.ion-color-light{--ion-color-base:var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast:var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium{--ion-color-base:var(--ion-color-medium, #636469) !important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 99, 100, 105) !important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-medium-shade, #57585c) !important;--ion-color-tint:var(--ion-color-medium-tint, #737478) !important}.ion-color-dark{--ion-color-base:var(--ion-color-dark, #222428) !important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e) !important}.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;z-index:0}ion-modal>.ion-page{position:relative;contain:layout style;height:100%}.split-pane-visible>.ion-page.split-pane-main{position:relative}ion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden{display:none !important}.ion-page-invisible{opacity:0}.can-go-back>ion-header ion-back-button{display:block}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding:20px}@supports (padding-top: 20px){html{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}ion-card.ion-color .ion-inherit-color,ion-card-header.ion-color .ion-inherit-color{color:inherit}.menu-content{transform:translate3d(0,  0,  0)}.menu-content-open{cursor:pointer;touch-action:manipulation;pointer-events:none;overflow-y:hidden}.menu-content-open ion-content{--overflow:hidden}.menu-content-open .ion-content-scroll-host{overflow:hidden}.ios .menu-content-reveal{box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-reveal{box-shadow:4px 0px 16px rgba(0,0,0,.18)}.md .menu-content-push{box-shadow:4px 0px 16px rgba(0,0,0,.18)}ion-accordion-group.accordion-group-expand-inset>ion-accordion:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}ion-accordion-group.accordion-group-expand-inset>ion-accordion:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}ion-accordion-group>ion-accordion:last-of-type ion-item[slot=header]{--border-width:0px}ion-accordion.accordion-animated>[slot=header] .ion-accordion-toggle-icon{transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1)}@media (prefers-reduced-motion: reduce){ion-accordion .ion-accordion-toggle-icon{transition:none !important}}ion-accordion.accordion-expanding>[slot=header] .ion-accordion-toggle-icon,ion-accordion.accordion-expanded>[slot=header] .ion-accordion-toggle-icon{transform:rotate(180deg)}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-previous ion-item[slot=header]{--border-width:0px;--inner-border-width:0px}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanding:first-of-type,ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanded:first-of-type{margin-top:0}ion-input input::-webkit-date-and-time-value{text-align:start}.ion-datetime-button-overlay{--width:fit-content;--height:fit-content}.ion-datetime-button-overlay ion-datetime.datetime-grid{width:320px;min-height:320px}[ion-last-focus],header[tabindex="-1"]:focus,[role=banner][tabindex="-1"]:focus,main[tabindex="-1"]:focus,[role=main][tabindex="-1"]:focus,h1[tabindex="-1"]:focus,[role=heading][aria-level="1"][tabindex="-1"]:focus{outline:none}.popover-viewport:has(>ion-content){overflow:hidden}@supports not selector(:has(> ion-content)){.popover-viewport{overflow:hidden}}:host{display:inline-block}:host(.expand-block),:host(.expand-full){display:block}:host(.is-disabled){pointer-events:none}.atom-button{margin:0;text-transform:inherit;white-space:normal}.atom-button[color=white]{--ion-color-base:var(--color-neutral-white);--ion-color-contrast:var(--color-neutral-black)}.atom-button[color=white][fill=clear]{--ion-color-base:var(--color-neutral-black);--ion-color-contrast:var(--color-neutral-black)}.atom-button[color=custom]{--ion-color-contrast:var(--atom-button-color-contrast);--ion-color-base:var(--atom-button-color)}.atom-button[size=small],.atom-button[size=default],.atom-button[size=large]{--padding-start:var(--spacing-base);--padding-end:var(--spacing-base);height:var(--button-size)}.atom-button[size=default]{--button-size:var(--spacing-xxxxlarge);font:var(--button-medium);letter-spacing:var(--button-medium-letter)}.atom-button[size=default].is-circle{width:var(--button-size)}.atom-button[size=small]{--button-size:var(--spacing-xxxlarge);font:var(--button-small);letter-spacing:var(--button-small-letter)}.atom-button[size=small].is-circle{width:var(--button-size)}.atom-button[size=large]{--button-size:var(--spacing-giant);font:var(--button-large);letter-spacing:var(--button-large-letter)}.atom-button[size=large].is-circle{width:var(--button-size)}.atom-button.is-circle{border-radius:50%}.atom-button.is-circle::part(native){padding:0}.atom-button.is-outline-filled{--background:var(--color-neutral-white);--color:var(--ion-color-base);--border-width:2px;--border-style:solid;--border-color:var(--ion-color-base)}.atom-button.is-loading::part(native){cursor:inherit}.atom-button.is-loading .slot{visibility:hidden}.atom-button .slot{align-items:center;display:flex;gap:var(--spacing-xsmall)}.loading{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%)}';const ProgressBar=class{constructor(hostRef){(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.type="determinate",this.reversed=!1,this.value=0,this.buffer=1,this.color=void 0}render(){const{color,type,reversed,value,buffer}=this,paused=_ionic_global_3b62892f_js__WEBPACK_IMPORTED_MODULE_1__.c.getBoolean("_testing"),mode=(0,_ionic_global_3b62892f_js__WEBPACK_IMPORTED_MODULE_1__.g)(this),progressSolid=1===buffer;return(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"8d8ddf0b26fe33803d3a6168cbedd523d1a888e7",role:"progressbar","aria-valuenow":"determinate"===type?value:null,"aria-valuemin":"0","aria-valuemax":"1",class:(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_2__.c)(color,{[mode]:!0,[`progress-bar-${type}`]:!0,"progress-paused":paused,"progress-bar-reversed":"rtl"===document.dir?!reversed:reversed,"progress-bar-solid":progressSolid})},"indeterminate"===type?renderIndeterminate():renderProgress(value,buffer))}},renderIndeterminate=()=>(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{part:"track",class:"progress-buffer-bar"},(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"indeterminate-bar-primary"},(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{part:"progress",class:"progress-indeterminate"})),(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"indeterminate-bar-secondary"},(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{part:"progress",class:"progress-indeterminate"}))),renderProgress=(value,buffer)=>{const finalValue=(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_3__.d)(0,value,1),finalBuffer=(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_3__.d)(0,buffer,1);return[(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{part:"progress",class:"progress",style:{transform:`scaleX(${finalValue})`}}),(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"buffer-circles-container":!0,"ion-hide":1===finalBuffer},style:{transform:`translateX(${100*finalBuffer}%)`}},(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"buffer-circles-container",style:{transform:`translateX(-${100*finalBuffer}%)`}},(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{part:"stream",class:"buffer-circles"}))),(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{part:"track",class:"progress-buffer-bar",style:{transform:`scaleX(${finalBuffer})`}})]};ProgressBar.style={ios:":host{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.3);--progress-background:var(--ion-color-primary, #0054e9);display:block;position:relative;width:100%;contain:strict;direction:ltr;overflow:hidden}.progress,.progress-indeterminate,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress-buffer-bar{left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%}.buffer-circles-container,.buffer-circles{left:0;right:0;top:0;bottom:0;position:absolute}.buffer-circles{right:-10px;left:-10px;}.progress,.progress-buffer-bar,.buffer-circles-container{transform-origin:left top;transition:transform 150ms linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:var(--background);z-index:1}.buffer-circles-container{overflow:hidden}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;animation:primary-indeterminate-translate 2s infinite linear}.indeterminate-bar-primary .progress-indeterminate{animation:primary-indeterminate-scale 2s infinite linear;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;animation:secondary-indeterminate-translate 2s infinite linear}.indeterminate-bar-secondary .progress-indeterminate{animation:secondary-indeterminate-scale 2s infinite linear;animation-play-state:inherit}.buffer-circles{background-image:radial-gradient(ellipse at center, var(--background) 0%, var(--background) 30%, transparent 30%);background-repeat:repeat-x;background-position:5px center;background-size:10px 10px;z-index:0;animation:buffering 450ms infinite linear}:host(.progress-bar-reversed){transform:scaleX(-1)}:host(.progress-paused) .indeterminate-bar-secondary,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .buffer-circles{animation-play-state:paused}:host(.ion-color) .buffer-circles{background-image:radial-gradient(ellipse at center, rgba(var(--ion-color-base-rgb), 0.3) 0%, rgba(var(--ion-color-base-rgb), 0.3) 30%, transparent 30%)}:host(.ion-color) .progress,:host(.ion-color) .progress-indeterminate{background:var(--ion-color-base)}@keyframes primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes buffering{to{transform:translateX(-10px)}}:host{border-radius:9999px;height:4px}:host(.progress-bar-solid){--background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}",md:":host{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.3);--progress-background:var(--ion-color-primary, #0054e9);display:block;position:relative;width:100%;contain:strict;direction:ltr;overflow:hidden}.progress,.progress-indeterminate,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress-buffer-bar{left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%}.buffer-circles-container,.buffer-circles{left:0;right:0;top:0;bottom:0;position:absolute}.buffer-circles{right:-10px;left:-10px;}.progress,.progress-buffer-bar,.buffer-circles-container{transform-origin:left top;transition:transform 150ms linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:var(--background);z-index:1}.buffer-circles-container{overflow:hidden}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;animation:primary-indeterminate-translate 2s infinite linear}.indeterminate-bar-primary .progress-indeterminate{animation:primary-indeterminate-scale 2s infinite linear;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;animation:secondary-indeterminate-translate 2s infinite linear}.indeterminate-bar-secondary .progress-indeterminate{animation:secondary-indeterminate-scale 2s infinite linear;animation-play-state:inherit}.buffer-circles{background-image:radial-gradient(ellipse at center, var(--background) 0%, var(--background) 30%, transparent 30%);background-repeat:repeat-x;background-position:5px center;background-size:10px 10px;z-index:0;animation:buffering 450ms infinite linear}:host(.progress-bar-reversed){transform:scaleX(-1)}:host(.progress-paused) .indeterminate-bar-secondary,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .buffer-circles{animation-play-state:paused}:host(.ion-color) .buffer-circles{background-image:radial-gradient(ellipse at center, rgba(var(--ion-color-base-rgb), 0.3) 0%, rgba(var(--ion-color-base-rgb), 0.3) 30%, transparent 30%)}:host(.ion-color) .progress,:host(.ion-color) .progress-indeterminate{background:var(--ion-color-base)}@keyframes primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes buffering{to{transform:translateX(-10px)}}:host{height:4px}:host(.ion-color) .progress-buffer-bar{background:rgba(var(--ion-color-base-rgb), 0.3)}"}},"../../packages/core/dist/esm/helpers-4047ce7f.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>clamp,e:()=>componentOnReady,f:()=>isEndSide,g:()=>getElementRoot,h:()=>focusVisibleElement,i:()=>inheritAriaAttributes,j:()=>assert,k:()=>debounceEvent,l:()=>renderHiddenInput,m:()=>debounce,n:()=>hasLazyBuild,o:()=>hasShadowDom,p:()=>pointerCoord,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{void 0!==animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,focusVisibleElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/theme-516b22d6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
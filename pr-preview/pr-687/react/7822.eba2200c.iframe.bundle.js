"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[7822],{"../../packages/core/dist/esm/atom-datetime.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{atom_datetime:()=>AtomDatetime});var _index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-6d0a42e8.js");const AtomDatetime=class{constructor(hostRef){(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.atomFocus=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomFocus",7),this.atomBlur=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomBlur",7),this.atomChange=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomChange",7),this.atomCancel=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"atomCancel",7),this.handleBlur=()=>{this.atomBlur.emit()},this.handleFocus=()=>{this.atomFocus.emit()},this.handleCancel=()=>{this.atomCancel.emit()},this.handleDateChange=event=>{const dates=event.detail.value||[];this.rangeMode?this.handleRangeMode(dates):this.atomChange.emit(event.detail)},this.label=void 0,this.cancelText=void 0,this.clearText=void 0,this.datetimeId="datetime",this.dayValues=void 0,this.disabled=void 0,this.doneText=void 0,this.formatOptions={date:{month:"2-digit",day:"2-digit",year:"numeric"},time:{hour:"2-digit",minute:"2-digit"}},this.highlightedDates=void 0,this.hourCycle="h23",this.hourValues=void 0,this.locale="pt-BR",this.isDateEnabled=void 0,this.max=void 0,this.min=void 0,this.minuteValues=void 0,this.monthValues=void 0,this.multiple=void 0,this.name=void 0,this.preferWheel=!1,this.presentation="date",this.rangeMode=void 0,this.readonly=void 0,this.showClearButton=void 0,this.showDefaultButtons=void 0,this.showDefaultTimeLabel=!1,this.showDefaultTitle=!1,this.useButton=!1,this.size="fixed",this.value=void 0,this.yearValues=void 0,this.selectedDates=[]}get datetimeEl(){return this._datetimeEl}set datetimeEl(value){this._datetimeEl=value}async setValue(value){this.datetimeEl&&(this.datetimeEl.value=value)}calculateDateRange(dates){const[start,end]=dates.map((date=>new Date(date))),increment=start<=end?1:-1,daysDifference=Math.abs((end.getTime()-start.getTime())/864e5);return Array.from({length:daysDifference+1},((_,i)=>{const currentDate=new Date(start);return currentDate.setDate(start.getDate()+i*increment),currentDate.toISOString().split("T")[0]}))}handleRangeMode(dates){2===dates.length?this.selectedDates=this.calculateDateRange(dates):1===dates.length?this.selectedDates=2===this.selectedDates.length?dates:this.selectedDates.concat(dates):this.selectedDates=[],this.atomChange.emit(this.selectedDates)}renderDatetime(){return(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-datetime",{ref:el=>this.datetimeEl=el,class:"atom-datetime",color:"secondary",cancelText:this.cancelText,clearText:this.clearText,dayValues:this.dayValues,disabled:this.disabled,doneText:this.doneText,formatOptions:this.formatOptions,highlightedDates:this.highlightedDates,hourCycle:this.hourCycle,hourValues:this.hourValues,id:this.datetimeId,isDateEnabled:this.isDateEnabled,locale:this.locale,max:this.max,min:this.min,minuteValues:this.minuteValues,monthValues:this.monthValues,multiple:this.multiple||this.rangeMode,mode:"md",name:this.name,presentation:this.presentation,preferWheel:this.preferWheel,readonly:this.readonly,showClearButton:this.showClearButton,showDefaultButtons:this.showDefaultButtons,showDefaultTimeLabel:this.showDefaultTimeLabel,showDefaultTitle:this.showDefaultTitle,size:this.size,yearValues:this.yearValues,value:this.rangeMode?this.selectedDates:this.value,onIonChange:this.handleDateChange,onIonCancel:this.handleCancel,onIonBlur:this.handleBlur,onIonFocus:this.handleFocus},this.showDefaultTimeLabel&&(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{slot:"time-label"},(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"time-label"})),this.showDefaultTitle&&(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{slot:"title"},(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"title"})))}render(){return(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"75c5b3ed717caf35e111617f6b5066ee9b36d6bd"},this.useButton?(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"atom-item"},(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-datetime-button",{class:"atom-button",color:"secondary",datetime:this.datetimeId,disabled:this.disabled,mode:"md"}),(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"atom-label"},this.label),(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("atom-icon",{class:"atom-icon",icon:"time"===this.presentation?"clock-outline":"calendar-today-outline"})),(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-popover",{"keep-contents-mounted":"true","show-backdrop":"false",style:{"margin-top":"1px"}},this.renderDatetime())):this.renderDatetime())}get element(){return(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}};AtomDatetime.style='.sc-atom-datetime:root{--ion-color-primary:#0054e9;--ion-color-primary-rgb:0, 84, 233;--ion-color-primary-contrast:#fff;--ion-color-primary-contrast-rgb:255, 255, 255;--ion-color-primary-shade:#004acd;--ion-color-primary-tint:#1a65eb;--ion-color-secondary:#0163aa;--ion-color-secondary-rgb:1, 99, 170;--ion-color-secondary-contrast:#fff;--ion-color-secondary-contrast-rgb:255, 255, 255;--ion-color-secondary-shade:#015796;--ion-color-secondary-tint:#1a73b3;--ion-color-tertiary:#6030ff;--ion-color-tertiary-rgb:96, 48, 255;--ion-color-tertiary-contrast:#fff;--ion-color-tertiary-contrast-rgb:255, 255, 255;--ion-color-tertiary-shade:#542ae0;--ion-color-tertiary-tint:#7045ff;--ion-color-success:#2dd55b;--ion-color-success-rgb:45, 213, 91;--ion-color-success-contrast:#000;--ion-color-success-contrast-rgb:0, 0, 0;--ion-color-success-shade:#28bb50;--ion-color-success-tint:#42d96b;--ion-color-warning:#ffc409;--ion-color-warning-rgb:255, 196, 9;--ion-color-warning-contrast:#000;--ion-color-warning-contrast-rgb:0, 0, 0;--ion-color-warning-shade:#e0ac08;--ion-color-warning-tint:#ffca22;--ion-color-danger:#c5000f;--ion-color-danger-rgb:197, 0, 15;--ion-color-danger-contrast:#fff;--ion-color-danger-contrast-rgb:255, 255, 255;--ion-color-danger-shade:#ad000d;--ion-color-danger-tint:#cb1a27;--ion-color-light:#f4f5f8;--ion-color-light-rgb:244, 245, 248;--ion-color-light-contrast:#000;--ion-color-light-contrast-rgb:0, 0, 0;--ion-color-light-shade:#d7d8da;--ion-color-light-tint:#f5f6f9;--ion-color-medium:#636469;--ion-color-medium-rgb:99, 100, 105;--ion-color-medium-contrast:#fff;--ion-color-medium-contrast-rgb:255, 255, 255;--ion-color-medium-shade:#57585c;--ion-color-medium-tint:#737478;--ion-color-dark:#222428;--ion-color-dark-rgb:34, 36, 40;--ion-color-dark-contrast:#fff;--ion-color-dark-contrast-rgb:255, 255, 255;--ion-color-dark-shade:#1e2023;--ion-color-dark-tint:#383a3e}html.ios.sc-atom-datetime{--ion-default-font:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}html.md.sc-atom-datetime{--ion-default-font:"Roboto", "Helvetica Neue", sans-serif}html.sc-atom-datetime{--ion-dynamic-font:-apple-system-body;--ion-font-family:var(--ion-default-font)}body.sc-atom-datetime{background:var(--ion-background-color);color:var(--ion-text-color)}body.backdrop-no-scroll.sc-atom-datetime{overflow:hidden}html.ios.sc-atom-datetime ion-modal.modal-card.sc-atom-datetime ion-header.sc-atom-datetime ion-toolbar.sc-atom-datetime:first-of-type,html.ios.sc-atom-datetime ion-modal.modal-sheet.sc-atom-datetime ion-header.sc-atom-datetime ion-toolbar.sc-atom-datetime:first-of-type,html.ios.sc-atom-datetime ion-modal.sc-atom-datetime ion-footer.sc-atom-datetime ion-toolbar.sc-atom-datetime:first-of-type{padding-top:6px}html.ios.sc-atom-datetime ion-modal.modal-card.sc-atom-datetime ion-header.sc-atom-datetime ion-toolbar.sc-atom-datetime:last-of-type,html.ios.sc-atom-datetime ion-modal.modal-sheet.sc-atom-datetime ion-header.sc-atom-datetime ion-toolbar.sc-atom-datetime:last-of-type{padding-bottom:6px}html.ios.sc-atom-datetime ion-modal.sc-atom-datetime ion-toolbar.sc-atom-datetime{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){html.ios.sc-atom-datetime ion-modal.modal-card.sc-atom-datetime:first-of-type{--backdrop-opacity:0.18}}ion-modal.modal-default.show-modal.sc-atom-datetime~ion-modal.modal-default.sc-atom-datetime{--backdrop-opacity:0;--box-shadow:none}html.ios.sc-atom-datetime ion-modal.modal-card.sc-atom-datetime .ion-page.sc-atom-datetime{border-top-left-radius:var(--border-radius)}.ion-color-primary.sc-atom-datetime{--ion-color-base:var(--ion-color-primary, #0054e9) !important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 0, 84, 233) !important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-primary-shade, #004acd) !important;--ion-color-tint:var(--ion-color-primary-tint, #1a65eb) !important}.ion-color-secondary.sc-atom-datetime{--ion-color-base:var(--ion-color-secondary, #0163aa) !important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 1, 99, 170) !important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-secondary-shade, #015796) !important;--ion-color-tint:var(--ion-color-secondary-tint, #1a73b3) !important}.ion-color-tertiary.sc-atom-datetime{--ion-color-base:var(--ion-color-tertiary, #6030ff) !important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 96, 48, 255) !important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-tertiary-shade, #542ae0) !important;--ion-color-tint:var(--ion-color-tertiary-tint, #7045ff) !important}.ion-color-success.sc-atom-datetime{--ion-color-base:var(--ion-color-success, #2dd55b) !important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 213, 91) !important;--ion-color-contrast:var(--ion-color-success-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-success-shade, #28bb50) !important;--ion-color-tint:var(--ion-color-success-tint, #42d96b) !important}.ion-color-warning.sc-atom-datetime{--ion-color-base:var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast:var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22) !important}.ion-color-danger.sc-atom-datetime{--ion-color-base:var(--ion-color-danger, #c5000f) !important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 197, 0, 15) !important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-danger-shade, #ad000d) !important;--ion-color-tint:var(--ion-color-danger-tint, #cb1a27) !important}.ion-color-light.sc-atom-datetime{--ion-color-base:var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast:var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium.sc-atom-datetime{--ion-color-base:var(--ion-color-medium, #636469) !important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 99, 100, 105) !important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-medium-shade, #57585c) !important;--ion-color-tint:var(--ion-color-medium-tint, #737478) !important}.ion-color-dark.sc-atom-datetime{--ion-color-base:var(--ion-color-dark, #222428) !important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e) !important}.ion-page.sc-atom-datetime{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;z-index:0}ion-modal.sc-atom-datetime>.ion-page.sc-atom-datetime{position:relative;contain:layout style;height:100%}.split-pane-visible.sc-atom-datetime>.ion-page.split-pane-main.sc-atom-datetime{position:relative}ion-route.sc-atom-datetime,ion-route-redirect.sc-atom-datetime,ion-router.sc-atom-datetime,ion-select-option.sc-atom-datetime,ion-nav-controller.sc-atom-datetime,ion-menu-controller.sc-atom-datetime,ion-action-sheet-controller.sc-atom-datetime,ion-alert-controller.sc-atom-datetime,ion-loading-controller.sc-atom-datetime,ion-modal-controller.sc-atom-datetime,ion-picker-controller.sc-atom-datetime,ion-popover-controller.sc-atom-datetime,ion-toast-controller.sc-atom-datetime,.ion-page-hidden.sc-atom-datetime{display:none !important}.ion-page-invisible.sc-atom-datetime{opacity:0}.can-go-back.sc-atom-datetime>ion-header.sc-atom-datetime ion-back-button.sc-atom-datetime{display:block}html.plt-ios.plt-hybrid.sc-atom-datetime,html.plt-ios.plt-pwa.sc-atom-datetime{--ion-statusbar-padding:20px}@supports (padding-top: 20px){html.sc-atom-datetime{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top: env(safe-area-inset-top)){html.sc-atom-datetime{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}ion-card.ion-color.sc-atom-datetime .ion-inherit-color.sc-atom-datetime,ion-card-header.ion-color.sc-atom-datetime .ion-inherit-color.sc-atom-datetime{color:inherit}.menu-content.sc-atom-datetime{transform:translate3d(0,  0,  0)}.menu-content-open.sc-atom-datetime{cursor:pointer;touch-action:manipulation;pointer-events:none;overflow-y:hidden}.menu-content-open.sc-atom-datetime ion-content.sc-atom-datetime{--overflow:hidden}.menu-content-open.sc-atom-datetime .ion-content-scroll-host.sc-atom-datetime{overflow:hidden}.ios.sc-atom-datetime .menu-content-reveal.sc-atom-datetime{box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios.sc-atom-datetime .menu-content-reveal.sc-atom-datetime{box-shadow:8px 0 42px rgba(0,0,0,.08)}.md.sc-atom-datetime .menu-content-reveal.sc-atom-datetime{box-shadow:4px 0px 16px rgba(0,0,0,.18)}.md.sc-atom-datetime .menu-content-push.sc-atom-datetime{box-shadow:4px 0px 16px rgba(0,0,0,.18)}ion-accordion-group.accordion-group-expand-inset.sc-atom-datetime>ion-accordion.sc-atom-datetime:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}ion-accordion-group.accordion-group-expand-inset.sc-atom-datetime>ion-accordion.sc-atom-datetime:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}ion-accordion-group.sc-atom-datetime>ion-accordion.sc-atom-datetime:last-of-type ion-item[slot=header].sc-atom-datetime{--border-width:0px}ion-accordion.accordion-animated.sc-atom-datetime>[slot=header].sc-atom-datetime .ion-accordion-toggle-icon.sc-atom-datetime{transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1)}@media (prefers-reduced-motion: reduce){ion-accordion.sc-atom-datetime .ion-accordion-toggle-icon.sc-atom-datetime{transition:none !important}}ion-accordion.accordion-expanding.sc-atom-datetime>[slot=header].sc-atom-datetime .ion-accordion-toggle-icon.sc-atom-datetime,ion-accordion.accordion-expanded.sc-atom-datetime>[slot=header].sc-atom-datetime .ion-accordion-toggle-icon.sc-atom-datetime{transform:rotate(180deg)}ion-accordion-group.accordion-group-expand-inset.md.sc-atom-datetime>ion-accordion.accordion-previous.sc-atom-datetime ion-item[slot=header].sc-atom-datetime{--border-width:0px;--inner-border-width:0px}ion-accordion-group.accordion-group-expand-inset.md.sc-atom-datetime>ion-accordion.accordion-expanding.sc-atom-datetime:first-of-type,ion-accordion-group.accordion-group-expand-inset.md.sc-atom-datetime>ion-accordion.accordion-expanded.sc-atom-datetime:first-of-type{margin-top:0}ion-input.sc-atom-datetime input.sc-atom-datetime::-webkit-date-and-time-value{text-align:start}.ion-datetime-button-overlay.sc-atom-datetime{--width:fit-content;--height:fit-content}.ion-datetime-button-overlay.sc-atom-datetime ion-datetime.datetime-grid.sc-atom-datetime{width:320px;min-height:320px}[ion-last-focus].sc-atom-datetime,header[tabindex="-1"].sc-atom-datetime:focus,[role=banner][tabindex="-1"].sc-atom-datetime:focus,main[tabindex="-1"].sc-atom-datetime:focus,[role=main][tabindex="-1"].sc-atom-datetime:focus,h1[tabindex="-1"].sc-atom-datetime:focus,[role=heading][aria-level="1"][tabindex="-1"].sc-atom-datetime:focus{outline:none}.popover-viewport.sc-atom-datetime:has(>ion-content).sc-atom-datetime{overflow:hidden}@supports not selector(:has(> ion-content)){.popover-viewport.sc-atom-datetime{overflow:hidden}}.atom-datetime.sc-atom-datetime::part(calendar-day-active){background-color:var(--color-brand-secondary-regular);color:var(--color-neutral-white)}.atom-item.sc-atom-datetime{position:relative}.atom-label.sc-atom-datetime{color:var(--color-neutral-regular);font:var(--text-caption);left:0;letter-spacing:var(--text-caption-letter);max-width:133.3333333333%;overflow:hidden;padding-left:var(--spacing-base);position:absolute;text-overflow:ellipsis;top:7px;white-space:nowrap;z-index:var(--zindex-5)}.atom-icon.sc-atom-datetime{color:var(--color-neutral-regular);pointer-events:none;position:absolute;right:var(--spacing-base);top:50%;transform:translateY(-50%);z-index:var(--zindex-5)}.atom-button.sc-atom-datetime{border-bottom:1px solid var(--ion-color-step-500, var(--ion-background-color-step-500, gray));width:100%}.atom-item.sc-atom-datetime:hover .atom-button.sc-atom-datetime::part(native){background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}.atom-button.sc-atom-datetime::part(native){align-items:end;background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));border-end-end-radius:0;border-end-start-radius:0;border-start-end-radius:var(--spacing-base);border-start-start-radius:var(--spacing-base);color:var(--color-neutral-regular);display:flex;font:var(--text-body-medium);height:57px;letter-spacing:var(--text-body-medium-letter);margin:0;padding-bottom:6px;padding-left:var(--spacing-base);padding-right:var(--spacing-base);text-align:left;width:100%;z-index:var(--zindex-1)}.atom-button.date-active.sc-atom-datetime{border-bottom-color:var(--color-brand-secondary-regular)}.atom-button.date-active.sc-atom-datetime~.atom-label.sc-atom-datetime{color:var(--color-brand-secondary-regular)}.atom-button.date-active.sc-atom-datetime~.atom-icon.sc-atom-datetime{color:var(--color-brand-secondary-regular)}'}}]);
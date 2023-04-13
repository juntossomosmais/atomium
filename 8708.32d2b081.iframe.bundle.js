"use strict";(globalThis.webpackChunkatomium_docs=globalThis.webpackChunkatomium_docs||[]).push([[8708],{"../../packages/core/dist/esm/ion-datetime-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_datetime_button:()=>DatetimeButton});var _index_77c1beb5_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-77c1beb5.js"),_ionic_global_98cbf2f6_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-98cbf2f6.js"),_helpers_937ea457_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/dist/esm/helpers-937ea457.js"),_index_24e88bd3_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/index-24e88bd3.js"),_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/dist/esm/theme-bc7eaa70.js"),_data_38e9647e_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/data-38e9647e.js");const DatetimeButton=class{constructor(hostRef){(0,_index_77c1beb5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.datetimeEl=null,this.overlayEl=null,this.getParsedDateValues=value=>null==value?[]:Array.isArray(value)?value:[value],this.setDateTimeText=()=>{const{datetimeEl,datetimePresentation}=this;if(!datetimeEl)return;const{value,locale,hourCycle,preferWheel,multiple,titleSelectedDatesFormatter}=datetimeEl,parsedValues=this.getParsedDateValues(value),firstParsedDatetime=(0,_data_38e9647e_js__WEBPACK_IMPORTED_MODULE_2__.q)(parsedValues.length>0?parsedValues:[(0,_data_38e9647e_js__WEBPACK_IMPORTED_MODULE_2__.t)()])[0],use24Hour=(0,_data_38e9647e_js__WEBPACK_IMPORTED_MODULE_2__.J)(locale,hourCycle);switch(this.dateText=this.timeText=void 0,datetimePresentation){case"date-time":case"time-date":const dateText=(0,_data_38e9647e_js__WEBPACK_IMPORTED_MODULE_2__.T)(locale,firstParsedDatetime),timeText=(0,_data_38e9647e_js__WEBPACK_IMPORTED_MODULE_2__.K)(locale,firstParsedDatetime,use24Hour);preferWheel?this.dateText=`${dateText} ${timeText}`:(this.dateText=dateText,this.timeText=timeText);break;case"date":if(multiple&&1!==parsedValues.length){let headerText=`${parsedValues.length} days`;if(void 0!==titleSelectedDatesFormatter)try{headerText=titleSelectedDatesFormatter(parsedValues)}catch(e){(0,_index_24e88bd3_js__WEBPACK_IMPORTED_MODULE_3__.a)("Exception in provided `titleSelectedDatesFormatter`: ",e)}this.dateText=headerText}else this.dateText=(0,_data_38e9647e_js__WEBPACK_IMPORTED_MODULE_2__.T)(locale,firstParsedDatetime);break;case"time":this.timeText=(0,_data_38e9647e_js__WEBPACK_IMPORTED_MODULE_2__.K)(locale,firstParsedDatetime,use24Hour);break;case"month-year":this.dateText=(0,_data_38e9647e_js__WEBPACK_IMPORTED_MODULE_2__.G)(locale,firstParsedDatetime);break;case"month":this.dateText=(0,_data_38e9647e_js__WEBPACK_IMPORTED_MODULE_2__.S)(locale,firstParsedDatetime,{month:"long"});break;case"year":this.dateText=(0,_data_38e9647e_js__WEBPACK_IMPORTED_MODULE_2__.S)(locale,firstParsedDatetime,{year:"numeric"})}},this.waitForDatetimeChanges=async()=>{const{datetimeEl}=this;return datetimeEl?new Promise((resolve=>{(0,_helpers_937ea457_js__WEBPACK_IMPORTED_MODULE_4__.a)(datetimeEl,"ionRender",resolve,{once:!0})})):Promise.resolve()},this.handleDateClick=async ev=>{const{datetimeEl,datetimePresentation}=this;if(!datetimeEl)return;let needsPresentationChange=!1;switch(datetimePresentation){case"date-time":case"time-date":const needsChange="date"!==datetimeEl.presentation;!datetimeEl.preferWheel&&needsChange&&(datetimeEl.presentation="date",needsPresentationChange=!0)}this.selectedButton="date",this.presentOverlay(ev,needsPresentationChange,this.dateTargetEl)},this.handleTimeClick=ev=>{const{datetimeEl,datetimePresentation}=this;if(!datetimeEl)return;let needsPresentationChange=!1;switch(datetimePresentation){case"date-time":case"time-date":"time"!==datetimeEl.presentation&&(datetimeEl.presentation="time",needsPresentationChange=!0)}this.selectedButton="time",this.presentOverlay(ev,needsPresentationChange,this.timeTargetEl)},this.presentOverlay=async(ev,needsPresentationChange,triggerEl)=>{const{overlayEl}=this;overlayEl&&("ION-POPOVER"===overlayEl.tagName?(needsPresentationChange&&await this.waitForDatetimeChanges(),overlayEl.present(Object.assign(Object.assign({},ev),{detail:{ionShadowTarget:triggerEl}}))):overlayEl.present())},this.datetimePresentation="date-time",this.dateText=void 0,this.timeText=void 0,this.datetimeActive=!1,this.selectedButton=void 0,this.color="primary",this.disabled=!1,this.datetime=void 0}async componentWillLoad(){const{datetime}=this;if(!datetime)return void(0,_index_24e88bd3_js__WEBPACK_IMPORTED_MODULE_3__.a)("An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.",this.el);const datetimeEl=this.datetimeEl=document.getElementById(datetime);if(!datetimeEl)return void(0,_index_24e88bd3_js__WEBPACK_IMPORTED_MODULE_3__.a)(`No ion-datetime instance found for ID '${datetime}'.`,this.el);new IntersectionObserver((entries=>{const ev=entries[0];this.datetimeActive=ev.isIntersecting}),{threshold:.01}).observe(datetimeEl);const overlayEl=this.overlayEl=datetimeEl.closest("ion-modal, ion-popover");overlayEl&&overlayEl.classList.add("ion-datetime-button-overlay"),(0,_helpers_937ea457_js__WEBPACK_IMPORTED_MODULE_4__.d)(datetimeEl,(()=>{const datetimePresentation=this.datetimePresentation=datetimeEl.presentation||"date-time";switch(this.setDateTimeText(),(0,_helpers_937ea457_js__WEBPACK_IMPORTED_MODULE_4__.a)(datetimeEl,"ionValueChange",this.setDateTimeText),datetimePresentation){case"date-time":case"date":case"month-year":case"month":case"year":this.selectedButton="date";break;case"time-date":case"time":this.selectedButton="time"}}))}render(){const{color,dateText,timeText,selectedButton,datetimeActive,disabled}=this,mode=(0,_ionic_global_98cbf2f6_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_77c1beb5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_77c1beb5_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:(0,_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_5__.c)(color,{[mode]:!0,[`${selectedButton}-active`]:datetimeActive,"datetime-button-disabled":disabled})},dateText&&(0,_index_77c1beb5_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{class:"ion-activatable",id:"date-button","aria-expanded":datetimeActive?"true":"false",onClick:this.handleDateClick,disabled,part:"native",ref:el=>this.dateTargetEl=el},(0,_index_77c1beb5_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"date-target"},dateText),"md"===mode&&(0,_index_77c1beb5_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-ripple-effect",null)),timeText&&(0,_index_77c1beb5_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{class:"ion-activatable",id:"time-button","aria-expanded":datetimeActive?"true":"false",onClick:this.handleTimeClick,disabled,part:"native",ref:el=>this.timeTargetEl=el},(0,_index_77c1beb5_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"time-target"},timeText),"md"===mode&&(0,_index_77c1beb5_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-ripple-effect",null)))}get el(){return(0,_index_77c1beb5_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}};DatetimeButton.style={ios:":host{display:flex;align-items:center;justify-content:center}:host button{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;appearance:none;overflow:hidden}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}",md:":host{display:flex;align-items:center;justify-content:center}:host button{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;appearance:none;overflow:hidden}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}"}}}]);
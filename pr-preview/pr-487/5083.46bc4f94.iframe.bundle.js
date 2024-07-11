"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[5083],{"../../packages/core/dist/esm/ion-datetime-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_datetime_button:()=>DatetimeButton});var _index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-d630c805.js"),_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/dist/esm/helpers-079c01eb.js"),_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/index-f5dbb989.js"),_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/dist/esm/theme-516b22d6.js"),_ionic_global_cdf5dcb1_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-cdf5dcb1.js"),_data_2c548fda_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/data-2c548fda.js");const DatetimeButton=class{constructor(hostRef){(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.datetimeEl=null,this.overlayEl=null,this.getParsedDateValues=value=>null==value?[]:Array.isArray(value)?value:[value],this.setDateTimeText=()=>{var _a,_b,_c,_d,_e;const{datetimeEl,datetimePresentation}=this;if(!datetimeEl)return;const{value,locale,formatOptions,hourCycle,preferWheel,multiple,titleSelectedDatesFormatter}=datetimeEl,parsedValues=this.getParsedDateValues(value),parsedDatetimes=(0,_data_2c548fda_js__WEBPACK_IMPORTED_MODULE_2__.s)(parsedValues.length>0?parsedValues:[(0,_data_2c548fda_js__WEBPACK_IMPORTED_MODULE_2__.x)()]);if(!parsedDatetimes)return;const firstParsedDatetime=parsedDatetimes[0],computedHourCycle=(0,_data_2c548fda_js__WEBPACK_IMPORTED_MODULE_2__.L)(locale,hourCycle);switch(this.dateText=this.timeText=void 0,datetimePresentation){case"date-time":case"time-date":const dateText=(0,_data_2c548fda_js__WEBPACK_IMPORTED_MODULE_2__.N)(locale,firstParsedDatetime,null!==(_a=null==formatOptions?void 0:formatOptions.date)&&void 0!==_a?_a:{month:"short",day:"numeric",year:"numeric"}),timeText=(0,_data_2c548fda_js__WEBPACK_IMPORTED_MODULE_2__.M)(locale,firstParsedDatetime,computedHourCycle,null==formatOptions?void 0:formatOptions.time);preferWheel?this.dateText=`${dateText} ${timeText}`:(this.dateText=dateText,this.timeText=timeText);break;case"date":if(multiple&&1!==parsedValues.length){let headerText=`${parsedValues.length} days`;if(void 0!==titleSelectedDatesFormatter)try{headerText=titleSelectedDatesFormatter(parsedValues)}catch(e){(0,_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_3__.a)("Exception in provided `titleSelectedDatesFormatter`: ",e)}this.dateText=headerText}else this.dateText=(0,_data_2c548fda_js__WEBPACK_IMPORTED_MODULE_2__.N)(locale,firstParsedDatetime,null!==(_b=null==formatOptions?void 0:formatOptions.date)&&void 0!==_b?_b:{month:"short",day:"numeric",year:"numeric"});break;case"time":this.timeText=(0,_data_2c548fda_js__WEBPACK_IMPORTED_MODULE_2__.M)(locale,firstParsedDatetime,computedHourCycle,null==formatOptions?void 0:formatOptions.time);break;case"month-year":this.dateText=(0,_data_2c548fda_js__WEBPACK_IMPORTED_MODULE_2__.N)(locale,firstParsedDatetime,null!==(_c=null==formatOptions?void 0:formatOptions.date)&&void 0!==_c?_c:{month:"long",year:"numeric"});break;case"month":this.dateText=(0,_data_2c548fda_js__WEBPACK_IMPORTED_MODULE_2__.N)(locale,firstParsedDatetime,null!==(_d=null==formatOptions?void 0:formatOptions.time)&&void 0!==_d?_d:{month:"long"});break;case"year":this.dateText=(0,_data_2c548fda_js__WEBPACK_IMPORTED_MODULE_2__.N)(locale,firstParsedDatetime,null!==(_e=null==formatOptions?void 0:formatOptions.time)&&void 0!==_e?_e:{year:"numeric"})}},this.waitForDatetimeChanges=async()=>{const{datetimeEl}=this;return datetimeEl?new Promise((resolve=>{(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_4__.a)(datetimeEl,"ionRender",resolve,{once:!0})})):Promise.resolve()},this.handleDateClick=async ev=>{const{datetimeEl,datetimePresentation}=this;if(!datetimeEl)return;let needsPresentationChange=!1;switch(datetimePresentation){case"date-time":case"time-date":const needsChange="date"!==datetimeEl.presentation;!datetimeEl.preferWheel&&needsChange&&(datetimeEl.presentation="date",needsPresentationChange=!0)}this.selectedButton="date",this.presentOverlay(ev,needsPresentationChange,this.dateTargetEl)},this.handleTimeClick=ev=>{const{datetimeEl,datetimePresentation}=this;if(!datetimeEl)return;let needsPresentationChange=!1;switch(datetimePresentation){case"date-time":case"time-date":"time"!==datetimeEl.presentation&&(datetimeEl.presentation="time",needsPresentationChange=!0)}this.selectedButton="time",this.presentOverlay(ev,needsPresentationChange,this.timeTargetEl)},this.presentOverlay=async(ev,needsPresentationChange,triggerEl)=>{const{overlayEl}=this;overlayEl&&("ION-POPOVER"===overlayEl.tagName?(needsPresentationChange&&await this.waitForDatetimeChanges(),overlayEl.present(Object.assign(Object.assign({},ev),{detail:{ionShadowTarget:triggerEl}}))):overlayEl.present())},this.datetimePresentation="date-time",this.dateText=void 0,this.timeText=void 0,this.datetimeActive=!1,this.selectedButton=void 0,this.color="primary",this.disabled=!1,this.datetime=void 0}async componentWillLoad(){const{datetime}=this;if(!datetime)return void(0,_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_3__.a)("An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.",this.el);const datetimeEl=this.datetimeEl=document.getElementById(datetime);if(!datetimeEl)return void(0,_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_3__.a)(`No ion-datetime instance found for ID '${datetime}'.`,this.el);if("ION-DATETIME"!==datetimeEl.tagName)return void(0,_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_3__.a)(`Expected an ion-datetime instance for ID '${datetime}' but received '${datetimeEl.tagName.toLowerCase()}' instead.`,datetimeEl);new IntersectionObserver((entries=>{const ev=entries[0];this.datetimeActive=ev.isIntersecting}),{threshold:.01}).observe(datetimeEl);const overlayEl=this.overlayEl=datetimeEl.closest("ion-modal, ion-popover");overlayEl&&overlayEl.classList.add("ion-datetime-button-overlay"),(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_4__.d)(datetimeEl,(()=>{const datetimePresentation=this.datetimePresentation=datetimeEl.presentation||"date-time";switch(this.setDateTimeText(),(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_4__.a)(datetimeEl,"ionValueChange",this.setDateTimeText),datetimePresentation){case"date-time":case"date":case"month-year":case"month":case"year":this.selectedButton="date";break;case"time-date":case"time":this.selectedButton="time"}}))}render(){const{color,dateText,timeText,selectedButton,datetimeActive,disabled}=this,mode=(0,_ionic_global_cdf5dcb1_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"ab6c21a4c185dee71c8f14cafad82e38831c68d0",class:(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_5__.c)(color,{[mode]:!0,[`${selectedButton}-active`]:datetimeActive,"datetime-button-disabled":disabled})},dateText&&(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"cbda6f3386c3714567a04b5a97a96c71d59822c8",class:"ion-activatable",id:"date-button","aria-expanded":datetimeActive?"true":"false",onClick:this.handleDateClick,disabled,part:"native",ref:el=>this.dateTargetEl=el},(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"a00ff431512827bfef8c02982ef37099b2f21508",name:"date-target"},dateText),"md"===mode&&(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-ripple-effect",{key:"67935989628a2ed0492edb813fb0475bfd88abe7"})),timeText&&(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"4207c94de5bece91b8388332e0192d1756403e62",class:"ion-activatable",id:"time-button","aria-expanded":datetimeActive?"true":"false",onClick:this.handleTimeClick,disabled,part:"native",ref:el=>this.timeTargetEl=el},(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"9ffa7ef4417571933bd1757950ec805c49704759",name:"time-target"},timeText),"md"===mode&&(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-ripple-effect",{key:"fbcad00cf828c9719074d1d06f4e13246b28903e"})))}get el(){return(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}};DatetimeButton.style={ios:":host{display:flex;flex-wrap:wrap;align-items:center;justify-content:center}:host button{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:1rem;cursor:pointer;overflow:hidden;appearance:none}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}",md:":host{display:flex;flex-wrap:wrap;align-items:center;justify-content:center}:host button{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:1rem;cursor:pointer;overflow:hidden;appearance:none}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}"}}}]);
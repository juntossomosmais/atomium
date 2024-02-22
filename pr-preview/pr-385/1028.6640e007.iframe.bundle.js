/*! For license information please see 1028.6640e007.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[1028],{"../../packages/core/dist/esm/index-f5dbb989.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>printIonError,b:()=>printRequiredElementError,p:()=>printIonWarning});const printIonWarning=(message,...params)=>console.warn(`[Ionic Warning]: ${message}`,...params),printIonError=(message,...params)=>console.error(`[Ionic Error]: ${message}`,...params),printRequiredElementError=(el,...targetSelectors)=>console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(" or ")}.`)},"../../packages/core/dist/esm/ion-accordion-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_accordion_group:()=>AccordionGroup});var _index_f5f883b1_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-f5f883b1.js"),_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/index-f5dbb989.js"),_ionic_global_b61067db_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-b61067db.js");const AccordionGroup=class{constructor(hostRef){(0,_index_f5f883b1_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionChange=(0,_index_f5f883b1_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionChange",7),this.ionValueChange=(0,_index_f5f883b1_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionValueChange",7),this.animated=!0,this.multiple=void 0,this.value=void 0,this.disabled=!1,this.readonly=!1,this.expand="compact"}valueChanged(){const{value,multiple}=this;!multiple&&Array.isArray(value)&&(0,_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_2__.p)(`ion-accordion-group was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".\n\n  Value Passed: [${value.map((v=>`'${v}'`)).join(", ")}]\n`,this.el),this.ionValueChange.emit({value:this.value})}async disabledChanged(){const{disabled}=this,accordions=await this.getAccordions();for(const accordion of accordions)accordion.disabled=disabled}async readonlyChanged(){const{readonly}=this,accordions=await this.getAccordions();for(const accordion of accordions)accordion.readonly=readonly}async onKeydown(ev){const activeElement=document.activeElement;if(!activeElement)return;if(!activeElement.closest('ion-accordion [slot="header"]'))return;const accordionEl="ION-ACCORDION"===activeElement.tagName?activeElement:activeElement.closest("ion-accordion");if(!accordionEl)return;if(accordionEl.closest("ion-accordion-group")!==this.el)return;const accordions=await this.getAccordions(),startingIndex=accordions.findIndex((a=>a===accordionEl));if(-1===startingIndex)return;let accordion;"ArrowDown"===ev.key?accordion=this.findNextAccordion(accordions,startingIndex):"ArrowUp"===ev.key?accordion=this.findPreviousAccordion(accordions,startingIndex):"Home"===ev.key?accordion=accordions[0]:"End"===ev.key&&(accordion=accordions[accordions.length-1]),void 0!==accordion&&accordion!==activeElement&&accordion.focus()}async componentDidLoad(){this.disabled&&this.disabledChanged(),this.readonly&&this.readonlyChanged(),this.valueChanged()}setValue(accordionValue){const value=this.value=accordionValue;this.ionChange.emit({value})}async requestAccordionToggle(accordionValue,accordionExpand){const{multiple,value,readonly,disabled}=this;if(!readonly&&!disabled)if(accordionExpand)if(multiple){const groupValue=null!=value?value:[],processedValue=Array.isArray(groupValue)?groupValue:[groupValue];void 0===processedValue.find((v=>v===accordionValue))&&void 0!==accordionValue&&this.setValue([...processedValue,accordionValue])}else this.setValue(accordionValue);else if(multiple){const groupValue=null!=value?value:[],processedValue=Array.isArray(groupValue)?groupValue:[groupValue];this.setValue(processedValue.filter((v=>v!==accordionValue)))}else this.setValue(void 0)}findNextAccordion(accordions,startingIndex){const nextAccordion=accordions[startingIndex+1];return void 0===nextAccordion?accordions[0]:nextAccordion}findPreviousAccordion(accordions,startingIndex){const prevAccordion=accordions[startingIndex-1];return void 0===prevAccordion?accordions[accordions.length-1]:prevAccordion}async getAccordions(){return Array.from(this.el.querySelectorAll(":scope > ion-accordion"))}render(){const{disabled,readonly,expand}=this,mode=(0,_ionic_global_b61067db_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_f5f883b1_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_f5f883b1_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"ac2e26ac91c95d08172bd2b51daa7a711c21db9e",class:{[mode]:!0,"accordion-group-disabled":disabled,"accordion-group-readonly":readonly,[`accordion-group-expand-${expand}`]:!0},role:"presentation"},(0,_index_f5f883b1_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"444adc2af5730897eba57095da046d6bdb5af70f"}))}get el(){return(0,_index_f5f883b1_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}}};AccordionGroup.style={ios:":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}",md:":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}@supports selector(:dir(rtl)){:host(.accordion-group-expand-inset:dir(rtl)) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}@supports selector(:dir(rtl)){:host(.accordion-group-expand-inset:dir(rtl)) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"}}}]);
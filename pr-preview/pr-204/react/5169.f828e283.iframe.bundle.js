/*! For license information please see 5169.f828e283.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[5169],{"../../packages/core/dist/esm/index-9ebe46bd.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>ENABLE_HTML_CONTENT_DEFAULT,s:()=>sanitizeDOMString});const ENABLE_HTML_CONTENT_DEFAULT=!1,sanitizeDOMString=untrustedString=>{try{if(untrustedString instanceof IonicSafeString)return untrustedString.value;if(!isSanitizerEnabled()||"string"!=typeof untrustedString||""===untrustedString)return untrustedString;if(untrustedString.includes("onload="))return"";const documentFragment=document.createDocumentFragment(),workingDiv=document.createElement("div");documentFragment.appendChild(workingDiv),workingDiv.innerHTML=untrustedString,blockedTags.forEach((blockedTag=>{const getElementsToRemove=documentFragment.querySelectorAll(blockedTag);for(let elementIndex=getElementsToRemove.length-1;elementIndex>=0;elementIndex--){const element=getElementsToRemove[elementIndex];element.parentNode?element.parentNode.removeChild(element):documentFragment.removeChild(element);const childElements=getElementChildren(element);for(let childIndex=0;childIndex<childElements.length;childIndex++)sanitizeElement(childElements[childIndex])}}));const dfChildren=getElementChildren(documentFragment);for(let childIndex=0;childIndex<dfChildren.length;childIndex++)sanitizeElement(dfChildren[childIndex]);const fragmentDiv=document.createElement("div");fragmentDiv.appendChild(documentFragment);const getInnerDiv=fragmentDiv.querySelector("div");return null!==getInnerDiv?getInnerDiv.innerHTML:fragmentDiv.innerHTML}catch(err){return console.error(err),""}},sanitizeElement=element=>{if(element.nodeType&&1!==element.nodeType)return;if("undefined"!=typeof NamedNodeMap&&!(element.attributes instanceof NamedNodeMap))return void element.remove();for(let i=element.attributes.length-1;i>=0;i--){const attribute=element.attributes.item(i),attributeName=attribute.name;if(!allowedAttributes.includes(attributeName.toLowerCase())){element.removeAttribute(attributeName);continue}const attributeValue=attribute.value,propertyValue=element[attributeName];(null!=attributeValue&&attributeValue.toLowerCase().includes("javascript:")||null!=propertyValue&&propertyValue.toLowerCase().includes("javascript:"))&&element.removeAttribute(attributeName)}const childElements=getElementChildren(element);for(let i=0;i<childElements.length;i++)sanitizeElement(childElements[i])},getElementChildren=el=>null!=el.children?el.children:el.childNodes,isSanitizerEnabled=()=>{var _a;const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;return!config||(config.get?config.get("sanitizerEnabled",!0):!0===config.sanitizerEnabled||void 0===config.sanitizerEnabled)},allowedAttributes=["class","id","href","src","name","slot"],blockedTags=["script","style","iframe","meta","link","object","embed"];class IonicSafeString{constructor(value){this.value=value}}},"../../packages/core/dist/esm/ion-infinite-scroll-content.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_infinite_scroll_content:()=>InfiniteScrollContent});var _index_ea11dfb5_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-ea11dfb5.js"),_index_9ebe46bd_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/index-9ebe46bd.js"),_ionic_global_f06b7a55_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-f06b7a55.js");const InfiniteScrollContent=class{constructor(hostRef){(0,_index_ea11dfb5_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.customHTMLEnabled=_ionic_global_f06b7a55_js__WEBPACK_IMPORTED_MODULE_1__.c.get("innerHTMLTemplatesEnabled",_index_9ebe46bd_js__WEBPACK_IMPORTED_MODULE_2__.E),this.loadingSpinner=void 0,this.loadingText=void 0}componentDidLoad(){if(void 0===this.loadingSpinner){const mode=(0,_ionic_global_f06b7a55_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);this.loadingSpinner=_ionic_global_f06b7a55_js__WEBPACK_IMPORTED_MODULE_1__.c.get("infiniteLoadingSpinner",_ionic_global_f06b7a55_js__WEBPACK_IMPORTED_MODULE_1__.c.get("spinner","ios"===mode?"lines":"crescent"))}}renderLoadingText(){const{customHTMLEnabled,loadingText}=this;return customHTMLEnabled?(0,_index_ea11dfb5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"infinite-loading-text",innerHTML:(0,_index_9ebe46bd_js__WEBPACK_IMPORTED_MODULE_2__.s)(loadingText)}):(0,_index_ea11dfb5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"infinite-loading-text"},this.loadingText)}render(){const mode=(0,_ionic_global_f06b7a55_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_ea11dfb5_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_ea11dfb5_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[mode]:!0,[`infinite-scroll-content-${mode}`]:!0}},(0,_index_ea11dfb5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"infinite-loading"},this.loadingSpinner&&(0,_index_ea11dfb5_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"infinite-loading-spinner"},(0,_index_ea11dfb5_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-spinner",{name:this.loadingSpinner})),void 0!==this.loadingText&&this.renderLoadingText()))}};InfiniteScrollContent.style={ios:"ion-infinite-scroll-content{display:flex;flex-direction:column;justify-content:center;min-height:84px;text-align:center;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}",md:"ion-infinite-scroll-content{display:flex;flex-direction:column;justify-content:center;min-height:84px;text-align:center;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}"}}}]);
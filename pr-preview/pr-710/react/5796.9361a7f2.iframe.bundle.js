/*! For license information please see 5796.9361a7f2.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[5796],{"../../packages/core/dist/esm/helpers-4047ce7f.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>clamp,e:()=>componentOnReady,f:()=>isEndSide,g:()=>getElementRoot,h:()=>focusVisibleElement,i:()=>inheritAriaAttributes,j:()=>assert,k:()=>debounceEvent,l:()=>renderHiddenInput,m:()=>debounce,n:()=>hasLazyBuild,o:()=>hasShadowDom,p:()=>pointerCoord,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{void 0!==animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,focusVisibleElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/index-bad389d4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>ENABLE_HTML_CONTENT_DEFAULT,s:()=>sanitizeDOMString});const ENABLE_HTML_CONTENT_DEFAULT=!1,sanitizeDOMString=untrustedString=>{try{if(untrustedString instanceof IonicSafeString)return untrustedString.value;if(!isSanitizerEnabled()||"string"!=typeof untrustedString||""===untrustedString)return untrustedString;if(untrustedString.includes("onload="))return"";const documentFragment=document.createDocumentFragment(),workingDiv=document.createElement("div");documentFragment.appendChild(workingDiv),workingDiv.innerHTML=untrustedString,blockedTags.forEach((blockedTag=>{const getElementsToRemove=documentFragment.querySelectorAll(blockedTag);for(let elementIndex=getElementsToRemove.length-1;elementIndex>=0;elementIndex--){const element=getElementsToRemove[elementIndex];element.parentNode?element.parentNode.removeChild(element):documentFragment.removeChild(element);const childElements=getElementChildren(element);for(let childIndex=0;childIndex<childElements.length;childIndex++)sanitizeElement(childElements[childIndex])}}));const dfChildren=getElementChildren(documentFragment);for(let childIndex=0;childIndex<dfChildren.length;childIndex++)sanitizeElement(dfChildren[childIndex]);const fragmentDiv=document.createElement("div");fragmentDiv.appendChild(documentFragment);const getInnerDiv=fragmentDiv.querySelector("div");return null!==getInnerDiv?getInnerDiv.innerHTML:fragmentDiv.innerHTML}catch(err){return console.error(err),""}},sanitizeElement=element=>{if(element.nodeType&&1!==element.nodeType)return;if("undefined"!=typeof NamedNodeMap&&!(element.attributes instanceof NamedNodeMap))return void element.remove();for(let i=element.attributes.length-1;i>=0;i--){const attribute=element.attributes.item(i),attributeName=attribute.name;if(!allowedAttributes.includes(attributeName.toLowerCase())){element.removeAttribute(attributeName);continue}const attributeValue=attribute.value,propertyValue=element[attributeName];(null!=attributeValue&&attributeValue.toLowerCase().includes("javascript:")||null!=propertyValue&&propertyValue.toLowerCase().includes("javascript:"))&&element.removeAttribute(attributeName)}const childElements=getElementChildren(element);for(let i=0;i<childElements.length;i++)sanitizeElement(childElements[i])},getElementChildren=el=>null!=el.children?el.children:el.childNodes,isSanitizerEnabled=()=>{var _a;const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;return!config||(config.get?config.get("sanitizerEnabled",!0):!0===config.sanitizerEnabled||void 0===config.sanitizerEnabled)},allowedAttributes=["class","id","href","src","name","slot"],blockedTags=["script","style","iframe","meta","link","object","embed"];class IonicSafeString{constructor(value){this.value=value}}},"../../packages/core/dist/esm/index-d09afffe.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>chevronBack,b:()=>arrowBackSharp,c:()=>chevronDown,d:()=>close,e:()=>eye,f:()=>eyeOff,g:()=>menuSharp,h:()=>caretBackSharp,i:()=>arrowDown,j:()=>reorderTwoSharp,k:()=>closeCircle,l:()=>closeSharp,m:()=>menuOutline,n:()=>searchSharp,o:()=>checkmarkOutline,p:()=>removeOutline,q:()=>ellipseOutline,r:()=>reorderThreeOutline,s:()=>searchOutline,t:()=>chevronExpand,u:()=>caretDownSharp,v:()=>chevronForwardOutline,w:()=>ellipsisHorizontal,x:()=>chevronForward,y:()=>caretUpSharp});const arrowBackSharp="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",arrowDown="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",caretBackSharp="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",caretDownSharp="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",caretUpSharp="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",checkmarkOutline="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",chevronBack="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",chevronDown="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",chevronExpand="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",chevronForward="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",chevronForwardOutline="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",close="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",closeCircle="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",closeSharp="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",ellipseOutline="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",ellipsisHorizontal="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",eye="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",eyeOff="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",menuOutline="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",menuSharp="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",removeOutline="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",reorderThreeOutline="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",reorderTwoSharp="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",searchOutline="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",searchSharp="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},"../../packages/core/dist/esm/ion-refresher-content.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_refresher_content:()=>RefresherContent});var _index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-deee0f5a.js"),_index_bad389d4_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/dist/esm/index-bad389d4.js"),_index_d09afffe_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/dist/esm/index-d09afffe.js"),_ionic_global_3b62892f_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-3b62892f.js"),_refresher_utils_6eb80d44_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/refresher.utils-6eb80d44.js"),_spinner_configs_0b650b20_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/spinner-configs-0b650b20.js");__webpack_require__("../../packages/core/dist/esm/animation-aa17f0ca.js"),__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js");const RefresherContent=class{constructor(hostRef){(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.customHTMLEnabled=_ionic_global_3b62892f_js__WEBPACK_IMPORTED_MODULE_1__.c.get("innerHTMLTemplatesEnabled",_index_bad389d4_js__WEBPACK_IMPORTED_MODULE_6__.E),this.pullingIcon=void 0,this.pullingText=void 0,this.refreshingSpinner=void 0,this.refreshingText=void 0}componentWillLoad(){if(void 0===this.pullingIcon){const hasRubberBandScrolling=(0,_refresher_utils_6eb80d44_js__WEBPACK_IMPORTED_MODULE_2__.e)(),mode=(0,_ionic_global_3b62892f_js__WEBPACK_IMPORTED_MODULE_1__.g)(this),overflowRefresher=hasRubberBandScrolling?"lines":_index_d09afffe_js__WEBPACK_IMPORTED_MODULE_7__.i;this.pullingIcon=_ionic_global_3b62892f_js__WEBPACK_IMPORTED_MODULE_1__.c.get("refreshingIcon","ios"===mode&&hasRubberBandScrolling?_ionic_global_3b62892f_js__WEBPACK_IMPORTED_MODULE_1__.c.get("spinner",overflowRefresher):"circular")}if(void 0===this.refreshingSpinner){const mode=(0,_ionic_global_3b62892f_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);this.refreshingSpinner=_ionic_global_3b62892f_js__WEBPACK_IMPORTED_MODULE_1__.c.get("refreshingSpinner",_ionic_global_3b62892f_js__WEBPACK_IMPORTED_MODULE_1__.c.get("spinner","ios"===mode?"lines":"circular"))}}renderPullingText(){const{customHTMLEnabled,pullingText}=this;return customHTMLEnabled?(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"refresher-pulling-text",innerHTML:(0,_index_bad389d4_js__WEBPACK_IMPORTED_MODULE_6__.s)(pullingText)}):(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"refresher-pulling-text"},pullingText)}renderRefreshingText(){const{customHTMLEnabled,refreshingText}=this;return customHTMLEnabled?(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"refresher-refreshing-text",innerHTML:(0,_index_bad389d4_js__WEBPACK_IMPORTED_MODULE_6__.s)(refreshingText)}):(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"refresher-refreshing-text"},refreshingText)}render(){const pullingIcon=this.pullingIcon,hasSpinner=null!=pullingIcon&&void 0!==_spinner_configs_0b650b20_js__WEBPACK_IMPORTED_MODULE_3__.S[pullingIcon],mode=(0,_ionic_global_3b62892f_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"19633bbcf02e3dba885d6bdcdaf2269bf4c8e2f5",class:mode},(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"28922e434a55a6cac0476fe2bee56941ce0d1c02",class:"refresher-pulling"},this.pullingIcon&&hasSpinner&&(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"fe575bf996021884677e9b23a3215d63caf894f5",class:"refresher-pulling-icon"},(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"59fe12297fd95bc33b8df8cd35316e2a1c084d91",class:"spinner-arrow-container"},(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-spinner",{key:"af9cc013ae04945c140b2865610ca73edb52ab48",name:this.pullingIcon,paused:!0}),"md"===mode&&"circular"===this.pullingIcon&&(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"34df66ad1b0f706a0532957251aa2c20bf4587d8",class:"arrow-container"},(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-icon",{key:"ffdb5c123e606b823491c6c51cc2b497f62581bb",icon:_index_d09afffe_js__WEBPACK_IMPORTED_MODULE_7__.h,"aria-hidden":"true"})))),this.pullingIcon&&!hasSpinner&&(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"ac3a2032bb969264d20fa057e9123441005d7a9d",class:"refresher-pulling-icon"},(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-icon",{key:"d969d10915548e72aae289b52154366f3dd39b31",icon:this.pullingIcon,lazy:!1,"aria-hidden":"true"})),void 0!==this.pullingText&&this.renderPullingText()),(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"a8f854f81a94812d7bef8ce088331d94f49ff53d",class:"refresher-refreshing"},this.refreshingSpinner&&(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"a1f646945370e40c844d62bc0c647443ae9dfbe7",class:"refresher-refreshing-icon"},(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-spinner",{key:"ab3ff4047769b6436e222b46d193c1e8b23e2fce",name:this.refreshingSpinner})),void 0!==this.refreshingText&&this.renderRefreshingText()))}get el(){return(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}}},"../../packages/core/dist/esm/refresher.utils-6eb80d44.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>setSpinnerOpacity,b:()=>handleScrollWhilePulling,c:()=>createPullingAnimation,d:()=>createSnapBackAnimation,e:()=>supportsRubberBandScrolling,g:()=>getRefresherAnimationType,h:()=>handleScrollWhileRefreshing,s:()=>shouldUseNativeRefresher,t:()=>translateElement});var _index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-deee0f5a.js"),_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/animation-aa17f0ca.js"),_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/helpers-4047ce7f.js");const getRefresherAnimationType=contentEl=>{const previousSibling=contentEl.previousElementSibling;return null!==previousSibling&&"ION-HEADER"===previousSibling.tagName?"translate":"scale"},createPullingAnimation=(type,pullingSpinner,refresherEl)=>"scale"===type?createScaleAnimation(pullingSpinner,refresherEl):createTranslateAnimation(pullingSpinner,refresherEl),createBaseAnimation=pullingRefresherIcon=>{const spinner=pullingRefresherIcon.querySelector("ion-spinner"),circle=spinner.shadowRoot.querySelector("circle"),spinnerArrowContainer=pullingRefresherIcon.querySelector(".spinner-arrow-container"),arrowContainer=pullingRefresherIcon.querySelector(".arrow-container"),arrow=arrowContainer?arrowContainer.querySelector("ion-icon"):null,baseAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_1__.c)().duration(1e3).easing("ease-out"),spinnerArrowContainerAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_1__.c)().addElement(spinnerArrowContainer).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),circleInnerAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_1__.c)().addElement(circle).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),circleOuterAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_1__.c)().addElement(spinner).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(arrowContainer&&arrow){const arrowContainerAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_1__.c)().addElement(arrowContainer).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),arrowAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_1__.c)().addElement(arrow).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);baseAnimation.addAnimation([arrowContainerAnimation,arrowAnimation])}return baseAnimation.addAnimation([spinnerArrowContainerAnimation,circleInnerAnimation,circleOuterAnimation])},createScaleAnimation=(pullingRefresherIcon,refresherEl)=>{const height=refresherEl.clientHeight,spinnerAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_1__.c)().addElement(pullingRefresherIcon).keyframes([{offset:0,transform:`scale(0) translateY(-${height}px)`},{offset:1,transform:"scale(1) translateY(100px)"}]);return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation])},createTranslateAnimation=(pullingRefresherIcon,refresherEl)=>{const height=refresherEl.clientHeight,spinnerAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_1__.c)().addElement(pullingRefresherIcon).keyframes([{offset:0,transform:`translateY(-${height}px)`},{offset:1,transform:"translateY(100px)"}]);return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation])},createSnapBackAnimation=pullingRefresherIcon=>(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_1__.c)().duration(125).addElement(pullingRefresherIcon).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)"),setSpinnerOpacity=(spinner,opacity)=>{spinner.style.setProperty("opacity",opacity.toString())},handleScrollWhilePulling=(ticks,numTicks,pullAmount)=>{(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.w)((()=>{ticks.forEach(((el,i)=>{const min=i*(1/numTicks),range=1-min,start=pullAmount-min,progression=(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_2__.d)(0,start/range,1);el.style.setProperty("opacity",progression.toString())}))}))},handleScrollWhileRefreshing=(spinner,lastVelocityY)=>{(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.w)((()=>{spinner.style.setProperty("--refreshing-rotation-duration",lastVelocityY>=1?"0.5s":"2s"),spinner.style.setProperty("opacity","1")}))},translateElement=(el,value,duration=200)=>{if(!el)return Promise.resolve();const trans=(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_2__.t)(el,duration);return(0,_index_deee0f5a_js__WEBPACK_IMPORTED_MODULE_0__.w)((()=>{el.style.setProperty("transition",`${duration}ms all ease-out`),void 0===value?el.style.removeProperty("transform"):el.style.setProperty("transform",`translate3d(0px, ${value}, 0px)`)})),trans},supportsRubberBandScrolling=()=>navigator.maxTouchPoints>0&&CSS.supports("background: -webkit-named-image(apple-pay-logo-black)"),shouldUseNativeRefresher=async(referenceEl,mode)=>{const refresherContent=referenceEl.querySelector("ion-refresher-content");if(!refresherContent)return Promise.resolve(!1);await new Promise((resolve=>(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_2__.e)(refresherContent,resolve)));const pullingSpinner=referenceEl.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),refreshingSpinner=referenceEl.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");return null!==pullingSpinner&&null!==refreshingSpinner&&("ios"===mode&&supportsRubberBandScrolling()||"md"===mode)}},"../../packages/core/dist/esm/spinner-configs-0b650b20.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>SPINNERS});const SPINNERS={bubbles:{dur:1e3,circles:9,fn:(dur,index,total)=>{const animationDelay=dur*index/total-dur+"ms",angle=2*Math.PI*index/total;return{r:5,style:{top:32*Math.sin(angle)+"%",left:32*Math.cos(angle)+"%","animation-delay":animationDelay}}}},circles:{dur:1e3,circles:8,fn:(dur,index,total)=>{const step=index/total,animationDelay=dur*step-dur+"ms",angle=2*Math.PI*step;return{r:5,style:{top:32*Math.sin(angle)+"%",left:32*Math.cos(angle)+"%","animation-delay":animationDelay}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(_,index)=>({r:6,style:{left:32-32*index+"%","animation-delay":-110*index+"ms"}})},lines:{dur:1e3,lines:8,fn:(dur,index,total)=>({y1:14,y2:26,style:{transform:`rotate(${360/total*index+(index<total/2?180:-180)}deg)`,"animation-delay":dur*index/total-dur+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(dur,index,total)=>({y1:12,y2:20,style:{transform:`rotate(${360/total*index+(index<total/2?180:-180)}deg)`,"animation-delay":dur*index/total-dur+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(dur,index,total)=>({y1:17,y2:29,style:{transform:`rotate(${30*index+(index<6?180:-180)}deg)`,"animation-delay":dur*index/total-dur+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(dur,index,total)=>({y1:12,y2:20,style:{transform:`rotate(${30*index+(index<6?180:-180)}deg)`,"animation-delay":dur*index/total-dur+"ms"}})}}}}]);
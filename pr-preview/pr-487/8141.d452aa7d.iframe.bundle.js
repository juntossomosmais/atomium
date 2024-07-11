/*! For license information please see 8141.d452aa7d.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[8141],{"../../packages/core/dist/esm/helpers-079c01eb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>componentOnReady,e:()=>renderHiddenInput,f:()=>clamp,g:()=>getElementRoot,h:()=>hasLazyBuild,i:()=>inheritAriaAttributes,j:()=>isEndSide,k:()=>focusVisibleElement,l:()=>assert,m:()=>debounceEvent,n:()=>getAriaLabel,o:()=>findItemLabel,p:()=>debounce,q:()=>hasShadowDom,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync,u:()=>now,v:()=>pointerCoord});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{void 0!==animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,findItemLabel=componentEl=>{const itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},focusVisibleElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},getAriaLabel=(componentEl,inputId)=>{let labelText;const labelledBy=componentEl.getAttribute("aria-labelledby"),componentId=componentEl.id;let labelId=null!==labelledBy&&""!==labelledBy.trim()?labelledBy:inputId+"-lbl",label=null!==labelledBy&&""!==labelledBy.trim()?document.getElementById(labelledBy):findItemLabel(componentEl);return label?(null===labelledBy&&(label.id=labelId),labelText=label.textContent,label.setAttribute("aria-hidden","true")):""!==componentId.trim()&&(label=document.querySelector(`label[for="${componentId}"]`),label&&(""!==label.id?labelId=label.id:label.id=labelId=`${componentId}-lbl`,labelText=label.textContent)),{label,labelId,labelText}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=ev=>ev.timeStamp||Date.now(),pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/index-6cad21e9.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>ION_CONTENT_CLASS_SELECTOR,a:()=>findClosestIonContent,b:()=>ION_CONTENT_ELEMENT_SELECTOR,c:()=>scrollByPoint,d:()=>disableContentScrollY,f:()=>findIonContent,g:()=>getScrollElement,i:()=>isIonContent,p:()=>printIonContentErrorMsg,r:()=>resetContentScrollY,s:()=>scrollToTop});var _helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/helpers-079c01eb.js"),_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/index-f5dbb989.js");const ION_CONTENT_ELEMENT_SELECTOR="ion-content",ION_CONTENT_CLASS_SELECTOR=".ion-content-scroll-host",ION_CONTENT_SELECTOR=`${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`,isIonContent=el=>"ION-CONTENT"===el.tagName,getScrollElement=async el=>isIonContent(el)?(await new Promise((resolve=>(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_0__.d)(el,resolve))),el.getScrollElement()):el,findIonContent=el=>{const customContentHost=el.querySelector(ION_CONTENT_CLASS_SELECTOR);return customContentHost||el.querySelector(ION_CONTENT_SELECTOR)},findClosestIonContent=el=>el.closest(ION_CONTENT_SELECTOR),scrollToTop=(el,durationMs)=>{if(isIonContent(el)){return el.scrollToTop(durationMs)}return Promise.resolve(el.scrollTo({top:0,left:0,behavior:durationMs>0?"smooth":"auto"}))},scrollByPoint=(el,x,y,durationMs)=>{if(isIonContent(el)){return el.scrollByPoint(x,y,durationMs)}return Promise.resolve(el.scrollBy({top:y,left:x,behavior:durationMs>0?"smooth":"auto"}))},printIonContentErrorMsg=el=>(0,_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_1__.b)(el,ION_CONTENT_ELEMENT_SELECTOR),disableContentScrollY=contentEl=>{if(isIonContent(contentEl)){const ionContent=contentEl,initialScrollY=ionContent.scrollY;return ionContent.scrollY=!1,initialScrollY}return contentEl.style.setProperty("overflow","hidden"),!0},resetContentScrollY=(contentEl,initialScrollY)=>{isIonContent(contentEl)?contentEl.scrollY=initialScrollY:contentEl.style.removeProperty("overflow")}},"../../packages/core/dist/esm/index-f5dbb989.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>printIonError,b:()=>printRequiredElementError,p:()=>printIonWarning});const printIonWarning=(message,...params)=>console.warn(`[Ionic Warning]: ${message}`,...params),printIonError=(message,...params)=>console.error(`[Ionic Error]: ${message}`,...params),printRequiredElementError=(el,...targetSelectors)=>console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(" or ")}.`)},"../../packages/core/dist/esm/ion-infinite-scroll.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_infinite_scroll:()=>InfiniteScroll});var _index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-d630c805.js"),_index_6cad21e9_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/index-6cad21e9.js"),_ionic_global_cdf5dcb1_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-cdf5dcb1.js");const InfiniteScroll=class{constructor(hostRef){(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionInfinite=(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionInfinite",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.onScroll=()=>{const scrollEl=this.scrollEl;if(!scrollEl||!this.canStart())return 1;const infiniteHeight=this.el.offsetHeight;if(0===infiniteHeight)return 2;const scrollTop=scrollEl.scrollTop,scrollHeight=scrollEl.scrollHeight,height=scrollEl.offsetHeight,threshold=0!==this.thrPc?height*this.thrPc:this.thrPx;return("bottom"===this.position?scrollHeight-infiniteHeight-scrollTop-threshold-height:scrollTop-infiniteHeight-threshold)<0&&!this.didFire?(this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3):4},this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom"}thresholdChanged(){const val=this.threshold;val.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(val)/100):(this.thrPx=parseFloat(val),this.thrPc=0)}disabledChanged(){const disabled=this.disabled;disabled&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!disabled)}async connectedCallback(){const contentEl=(0,_index_6cad21e9_js__WEBPACK_IMPORTED_MODULE_2__.a)(this.el);contentEl?(this.scrollEl=await(0,_index_6cad21e9_js__WEBPACK_IMPORTED_MODULE_2__.g)(contentEl),this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.w)((()=>{this.scrollEl&&(this.scrollEl.scrollTop=this.scrollEl.scrollHeight-this.scrollEl.clientHeight)}))):(0,_index_6cad21e9_js__WEBPACK_IMPORTED_MODULE_2__.p)(this.el)}disconnectedCallback(){this.enableScrollEvents(!1),this.scrollEl=void 0}async complete(){const scrollEl=this.scrollEl;if(this.isLoading&&scrollEl)if(this.isLoading=!1,"top"===this.position){this.isBusy=!0;const prev=scrollEl.scrollHeight-scrollEl.scrollTop;requestAnimationFrame((()=>{(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.i)((()=>{const newScrollTop=scrollEl.scrollHeight-prev;requestAnimationFrame((()=>{(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.w)((()=>{scrollEl.scrollTop=newScrollTop,this.isBusy=!1,this.didFire=!1}))}))}))}))}else this.didFire=!1}canStart(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}enableScrollEvents(shouldListen){this.scrollEl&&(shouldListen?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}render(){const mode=(0,_ionic_global_cdf5dcb1_js__WEBPACK_IMPORTED_MODULE_1__.g)(this),disabled=this.disabled;return(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"c2248d06232dd7771dd155693ec75f9258dc969e",class:{[mode]:!0,"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!disabled}})}get el(){return(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}};InfiniteScroll.style="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"}}]);
/*! For license information please see 314.e60f08e3.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[314],{"../../packages/core/dist/esm/capacitor-0e0f67bb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>getCapacitor});var _index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-938c089e.js");const getCapacitor=()=>{if(void 0!==_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w)return _index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w.Capacitor}},"../../packages/core/dist/esm/helpers-13791ab7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>componentOnReady,e:()=>renderHiddenInput,f:()=>clamp,g:()=>getElementRoot,h:()=>isEndSide,i:()=>inheritAriaAttributes,j:()=>focusElement,k:()=>assert,l:()=>hasLazyBuild,m:()=>debounceEvent,n:()=>getAriaLabel,o:()=>findItemLabel,p:()=>debounce,q:()=>hasShadowDom,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync,u:()=>now,v:()=>pointerCoord});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,findItemLabel=componentEl=>{const itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},focusElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},getAriaLabel=(componentEl,inputId)=>{let labelText;const labelledBy=componentEl.getAttribute("aria-labelledby"),componentId=componentEl.id;let labelId=null!==labelledBy&&""!==labelledBy.trim()?labelledBy:inputId+"-lbl",label=null!==labelledBy&&""!==labelledBy.trim()?document.getElementById(labelledBy):findItemLabel(componentEl);return label?(null===labelledBy&&(label.id=labelId),labelText=label.textContent,label.setAttribute("aria-hidden","true")):""!==componentId.trim()&&(label=document.querySelector(`label[for="${componentId}"]`),label&&(""!==label.id?labelId=label.id:label.id=labelId=`${componentId}-lbl`,labelText=label.textContent)),{label,labelId,labelText}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=ev=>ev.timeStamp||Date.now(),pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/index-24e88bd3.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>printIonError,b:()=>printRequiredElementError,p:()=>printIonWarning});const printIonWarning=(message,...params)=>console.warn(`[Ionic Warning]: ${message}`,...params),printIonError=(message,...params)=>console.error(`[Ionic Error]: ${message}`,...params),printRequiredElementError=(el,...targetSelectors)=>console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(" or ")}.`)},"../../packages/core/dist/esm/index-938c089e.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>doc,w:()=>win});const win="undefined"!=typeof window?window:void 0,doc="undefined"!=typeof document?document:void 0},"../../packages/core/dist/esm/index-a9fbbd6b.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>ION_CONTENT_CLASS_SELECTOR,a:()=>findClosestIonContent,b:()=>ION_CONTENT_ELEMENT_SELECTOR,c:()=>scrollByPoint,d:()=>disableContentScrollY,f:()=>findIonContent,g:()=>getScrollElement,i:()=>isIonContent,p:()=>printIonContentErrorMsg,r:()=>resetContentScrollY,s:()=>scrollToTop});var _helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/helpers-13791ab7.js"),_index_24e88bd3_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/index-24e88bd3.js");const ION_CONTENT_ELEMENT_SELECTOR="ion-content",ION_CONTENT_CLASS_SELECTOR=".ion-content-scroll-host",ION_CONTENT_SELECTOR=`${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`,isIonContent=el=>"ION-CONTENT"===el.tagName,getScrollElement=async el=>isIonContent(el)?(await new Promise((resolve=>(0,_helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_0__.d)(el,resolve))),el.getScrollElement()):el,findIonContent=el=>{const customContentHost=el.querySelector(ION_CONTENT_CLASS_SELECTOR);return customContentHost||el.querySelector(ION_CONTENT_SELECTOR)},findClosestIonContent=el=>el.closest(ION_CONTENT_SELECTOR),scrollToTop=(el,durationMs)=>{if(isIonContent(el)){return el.scrollToTop(durationMs)}return Promise.resolve(el.scrollTo({top:0,left:0,behavior:durationMs>0?"smooth":"auto"}))},scrollByPoint=(el,x,y,durationMs)=>{if(isIonContent(el)){return el.scrollByPoint(x,y,durationMs)}return Promise.resolve(el.scrollBy({top:y,left:x,behavior:durationMs>0?"smooth":"auto"}))},printIonContentErrorMsg=el=>(0,_index_24e88bd3_js__WEBPACK_IMPORTED_MODULE_1__.b)(el,ION_CONTENT_ELEMENT_SELECTOR),disableContentScrollY=contentEl=>{if(isIonContent(contentEl)){const ionContent=contentEl,initialScrollY=ionContent.scrollY;return ionContent.scrollY=!1,initialScrollY}return contentEl.style.setProperty("overflow","hidden"),!0},resetContentScrollY=(contentEl,initialScrollY)=>{isIonContent(contentEl)?contentEl.scrollY=initialScrollY:contentEl.style.removeProperty("overflow")}},"../../packages/core/dist/esm/ion-footer.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_footer:()=>Footer});var _index_8b9b4f46_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-8b9b4f46.js"),_index_a9fbbd6b_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/dist/esm/index-a9fbbd6b.js"),_keyboard_controller_90a00c2d_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/keyboard-controller-90a00c2d.js"),_ionic_global_b152ee50_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/ionic-global-b152ee50.js"),_helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/dist/esm/helpers-13791ab7.js");__webpack_require__("../../packages/core/dist/esm/index-938c089e.js"),__webpack_require__("../../packages/core/dist/esm/keyboard-d5e3733e.js"),__webpack_require__("../../packages/core/dist/esm/capacitor-0e0f67bb.js");const handleFooterFade=(scrollEl,baseEl)=>{(0,_index_8b9b4f46_js__WEBPACK_IMPORTED_MODULE_0__.i)((()=>{const distanceToStart=scrollEl.scrollTop-(scrollEl.scrollHeight-scrollEl.clientHeight-10),scale=(0,_helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_6__.f)(0,1-distanceToStart/10,1);(0,_index_8b9b4f46_js__WEBPACK_IMPORTED_MODULE_0__.w)((()=>{baseEl.style.setProperty("--opacity-scale",scale.toString())}))}))},Footer=class{constructor(hostRef){(0,_index_8b9b4f46_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.keyboardCtrl=null,this.checkCollapsibleFooter=()=>{if("ios"!==(0,_ionic_global_b152ee50_js__WEBPACK_IMPORTED_MODULE_2__.g)(this))return;const{collapse}=this,hasFade="fade"===collapse;if(this.destroyCollapsibleFooter(),hasFade){const pageEl=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),contentEl=pageEl?(0,_index_a9fbbd6b_js__WEBPACK_IMPORTED_MODULE_7__.f)(pageEl):null;if(!contentEl)return void(0,_index_a9fbbd6b_js__WEBPACK_IMPORTED_MODULE_7__.p)(this.el);this.setupFadeFooter(contentEl)}},this.setupFadeFooter=async contentEl=>{const scrollEl=this.scrollEl=await(0,_index_a9fbbd6b_js__WEBPACK_IMPORTED_MODULE_7__.g)(contentEl);this.contentScrollCallback=()=>{handleFooterFade(scrollEl,this.el)},scrollEl.addEventListener("scroll",this.contentScrollCallback),handleFooterFade(scrollEl,this.el)},this.keyboardVisible=!1,this.collapse=void 0,this.translucent=!1}componentDidLoad(){this.checkCollapsibleFooter()}componentDidUpdate(){this.checkCollapsibleFooter()}async connectedCallback(){this.keyboardCtrl=await(0,_keyboard_controller_90a00c2d_js__WEBPACK_IMPORTED_MODULE_1__.c)((async(keyboardOpen,waitForResize)=>{!1===keyboardOpen&&void 0!==waitForResize&&await waitForResize,this.keyboardVisible=keyboardOpen}))}disconnectedCallback(){this.keyboardCtrl&&this.keyboardCtrl.destroy()}destroyCollapsibleFooter(){this.scrollEl&&this.contentScrollCallback&&(this.scrollEl.removeEventListener("scroll",this.contentScrollCallback),this.contentScrollCallback=void 0)}render(){const{translucent,collapse}=this,mode=(0,_ionic_global_b152ee50_js__WEBPACK_IMPORTED_MODULE_2__.g)(this),tabs=this.el.closest("ion-tabs"),tabBar=null==tabs?void 0:tabs.querySelector(":scope > ion-tab-bar");return(0,_index_8b9b4f46_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_8b9b4f46_js__WEBPACK_IMPORTED_MODULE_0__.H,{role:"contentinfo",class:{[mode]:!0,[`footer-${mode}`]:!0,"footer-translucent":translucent,[`footer-translucent-${mode}`]:translucent,"footer-toolbar-padding":!(this.keyboardVisible||tabBar&&"bottom"===tabBar.slot),[`footer-collapse-${collapse}`]:void 0!==collapse}},"ios"===mode&&translucent&&(0,_index_8b9b4f46_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"footer-background"}),(0,_index_8b9b4f46_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}get el(){return(0,_index_8b9b4f46_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}};Footer.style={ios:"ion-footer{display:block;position:relative;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-ios ion-toolbar:first-of-type{--border-width:0.55px 0 0}@supports (backdrop-filter: blur(0)){.footer-background{left:0;right:0;top:0;bottom:0;position:absolute;backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8}}.footer-ios.ion-no-border ion-toolbar:first-of-type{--border-width:0}.footer-collapse-fade ion-toolbar{--opacity-scale:inherit}",md:"ion-footer{display:block;position:relative;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-md{box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.footer-md.ion-no-border{box-shadow:none}"}},"../../packages/core/dist/esm/keyboard-controller-90a00c2d.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createKeyboardController});var _index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-938c089e.js"),_keyboard_d5e3733e_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/keyboard-d5e3733e.js");const getResizeContainer=resizeMode=>{if(void 0===_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.d||resizeMode===_keyboard_d5e3733e_js__WEBPACK_IMPORTED_MODULE_1__.a.None||void 0===resizeMode)return null;const ionApp=_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.d.querySelector("ion-app");return null!=ionApp?ionApp:_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.d.body},getResizeContainerHeight=resizeMode=>{const containerElement=getResizeContainer(resizeMode);return null===containerElement?0:containerElement.clientHeight},createKeyboardController=async keyboardChangeCallback=>{let keyboardWillShowHandler,keyboardWillHideHandler,keyboardVisible,initialResizeContainerHeight;const init=async()=>{const resizeOptions=await _keyboard_d5e3733e_js__WEBPACK_IMPORTED_MODULE_1__.K.getResizeMode(),resizeMode=void 0===resizeOptions?void 0:resizeOptions.mode;keyboardWillShowHandler=()=>{void 0===initialResizeContainerHeight&&(initialResizeContainerHeight=getResizeContainerHeight(resizeMode)),keyboardVisible=!0,fireChangeCallback(keyboardVisible,resizeMode)},keyboardWillHideHandler=()=>{keyboardVisible=!1,fireChangeCallback(keyboardVisible,resizeMode)},null===_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w||void 0===_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w||_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener("keyboardWillShow",keyboardWillShowHandler),null===_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w||void 0===_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w||_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener("keyboardWillHide",keyboardWillHideHandler)},fireChangeCallback=(state,resizeMode)=>{keyboardChangeCallback&&keyboardChangeCallback(state,createResizePromiseIfNeeded(resizeMode))},createResizePromiseIfNeeded=resizeMode=>{if(0===initialResizeContainerHeight||initialResizeContainerHeight===getResizeContainerHeight(resizeMode))return;const containerElement=getResizeContainer(resizeMode);return null!==containerElement?new Promise((resolve=>{const ro=new ResizeObserver((()=>{containerElement.clientHeight===initialResizeContainerHeight&&(ro.disconnect(),resolve())}));ro.observe(containerElement)})):void 0};return await init(),{init,destroy:()=>{null===_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w||void 0===_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w||_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener("keyboardWillShow",keyboardWillShowHandler),null===_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w||void 0===_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w||_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener("keyboardWillHide",keyboardWillHideHandler),keyboardWillShowHandler=keyboardWillHideHandler=void 0},isKeyboardVisible:()=>keyboardVisible}}},"../../packages/core/dist/esm/keyboard-d5e3733e.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Keyboard,a:()=>KeyboardResize});var ExceptionCode,KeyboardResize,_capacitor_0e0f67bb_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/capacitor-0e0f67bb.js");!function(ExceptionCode){ExceptionCode.Unimplemented="UNIMPLEMENTED",ExceptionCode.Unavailable="UNAVAILABLE"}(ExceptionCode||(ExceptionCode={})),function(KeyboardResize){KeyboardResize.Body="body",KeyboardResize.Ionic="ionic",KeyboardResize.Native="native",KeyboardResize.None="none"}(KeyboardResize||(KeyboardResize={}));const Keyboard={getEngine(){const capacitor=(0,_capacitor_0e0f67bb_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(null==capacitor?void 0:capacitor.isPluginAvailable("Keyboard"))return capacitor.Plugins.Keyboard},getResizeMode(){const engine=this.getEngine();return(null==engine?void 0:engine.getResizeMode)?engine.getResizeMode().catch((e=>{if(e.code!==ExceptionCode.Unimplemented)throw e})):Promise.resolve(void 0)}}}}]);
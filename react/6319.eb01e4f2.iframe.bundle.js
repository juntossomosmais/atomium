/*! For license information please see 6319.eb01e4f2.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[6319],{"../../packages/core/dist/esm/capacitor-74355484.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>getCapacitor});var _index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js");const getCapacitor=()=>{if(void 0!==_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w)return _index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w.Capacitor}},"../../packages/core/dist/esm/helpers-b14eeb70.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>renderHiddenInput,e:()=>componentOnReady,f:()=>clamp,g:()=>getElementRoot,h:()=>isEndSide,i:()=>inheritAriaAttributes,j:()=>focusVisibleElement,k:()=>assert,l:()=>debounceEvent,m:()=>debounce,n:()=>hasLazyBuild,o:()=>hasShadowDom,p:()=>pointerCoord,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{void 0!==animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,focusVisibleElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/index-74a0cdd4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>ION_CONTENT_CLASS_SELECTOR,a:()=>findClosestIonContent,b:()=>ION_CONTENT_ELEMENT_SELECTOR,c:()=>scrollByPoint,d:()=>disableContentScrollY,f:()=>findIonContent,g:()=>getScrollElement,i:()=>isIonContent,p:()=>printIonContentErrorMsg,r:()=>resetContentScrollY,s:()=>scrollToTop});var _helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/helpers-b14eeb70.js"),_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/index-f5dbb989.js");const ION_CONTENT_ELEMENT_SELECTOR="ion-content",ION_CONTENT_CLASS_SELECTOR=".ion-content-scroll-host",ION_CONTENT_SELECTOR=`${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`,isIonContent=el=>"ION-CONTENT"===el.tagName,getScrollElement=async el=>isIonContent(el)?(await new Promise((resolve=>(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_0__.e)(el,resolve))),el.getScrollElement()):el,findIonContent=el=>{const customContentHost=el.querySelector(ION_CONTENT_CLASS_SELECTOR);return customContentHost||el.querySelector(ION_CONTENT_SELECTOR)},findClosestIonContent=el=>el.closest(ION_CONTENT_SELECTOR),scrollToTop=(el,durationMs)=>{if(isIonContent(el)){return el.scrollToTop(durationMs)}return Promise.resolve(el.scrollTo({top:0,left:0,behavior:durationMs>0?"smooth":"auto"}))},scrollByPoint=(el,x,y,durationMs)=>{if(isIonContent(el)){return el.scrollByPoint(x,y,durationMs)}return Promise.resolve(el.scrollBy({top:y,left:x,behavior:durationMs>0?"smooth":"auto"}))},printIonContentErrorMsg=el=>(0,_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_1__.b)(el,ION_CONTENT_ELEMENT_SELECTOR),disableContentScrollY=contentEl=>{if(isIonContent(contentEl)){const ionContent=contentEl,initialScrollY=ionContent.scrollY;return ionContent.scrollY=!1,initialScrollY}return contentEl.style.setProperty("overflow","hidden"),!0},resetContentScrollY=(contentEl,initialScrollY)=>{isIonContent(contentEl)?contentEl.scrollY=initialScrollY:contentEl.style.removeProperty("overflow")}},"../../packages/core/dist/esm/input-shims-53ee4767.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{startInputShims:()=>startInputShims});var _index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js"),_index_74a0cdd4_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/dist/esm/index-74a0cdd4.js"),_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/helpers-b14eeb70.js"),_keyboard_6ae239bc_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/keyboard-6ae239bc.js");__webpack_require__("../../packages/core/dist/esm/capacitor-74355484.js");const cloneMap=new WeakMap,relocateInput=(componentEl,inputEl,shouldRelocate,inputRelativeY=0,disabledClonedInput=!1)=>{cloneMap.has(componentEl)!==shouldRelocate&&(shouldRelocate?addClone(componentEl,inputEl,inputRelativeY,disabledClonedInput):removeClone(componentEl,inputEl))},addClone=(componentEl,inputEl,inputRelativeY,disabledClonedInput=!1)=>{const parentEl=inputEl.parentNode,clonedEl=inputEl.cloneNode(!1);clonedEl.classList.add("cloned-input"),clonedEl.tabIndex=-1,disabledClonedInput&&(clonedEl.disabled=!0),parentEl.appendChild(clonedEl),cloneMap.set(componentEl,clonedEl);const tx="rtl"===componentEl.ownerDocument.dir?9999:-9999;componentEl.style.pointerEvents="none",inputEl.style.transform=`translate3d(${tx}px,${inputRelativeY}px,0) scale(0)`},removeClone=(componentEl,inputEl)=>{const clone=cloneMap.get(componentEl);clone&&(cloneMap.delete(componentEl),clone.remove()),componentEl.style.pointerEvents="",inputEl.style.transform=""},SKIP_SELECTOR="input, textarea, [no-blur], [contenteditable]",calcScrollData=(inputRect,contentRect,keyboardHeight,platformHeight)=>{const inputTop=inputRect.top,inputBottom=inputRect.bottom,visibleAreaTop=contentRect.top,safeAreaTop=visibleAreaTop+15,distanceToBottom=Math.min(contentRect.bottom,platformHeight-keyboardHeight)-50-inputBottom,distanceToTop=safeAreaTop-inputTop,desiredScrollAmount=Math.round(distanceToBottom<0?-distanceToBottom:distanceToTop>0?-distanceToTop:0),scrollAmount=Math.min(desiredScrollAmount,inputTop-visibleAreaTop),duration=Math.abs(scrollAmount)/.3;return{scrollAmount,scrollDuration:Math.min(400,Math.max(150,duration)),scrollPadding:keyboardHeight,inputSafeY:4-(inputTop-safeAreaTop)}},setScrollPadding=(contentEl,paddingAmount,clearCallback)=>{const timer=contentEl.$ionPaddingTimer;timer&&clearTimeout(timer),paddingAmount>0?contentEl.style.setProperty("--keyboard-offset",`${paddingAmount}px`):contentEl.$ionPaddingTimer=setTimeout((()=>{contentEl.style.setProperty("--keyboard-offset","0px"),clearCallback&&clearCallback()}),120)},setClearScrollPaddingListener=(inputEl,contentEl,doneCallback)=>{inputEl.addEventListener("focusout",(()=>{contentEl&&setScrollPadding(contentEl,0,doneCallback)}),{once:!0})};let currentPadding=0;const setManualFocus=el=>{document.activeElement!==el&&(el.setAttribute("data-ionic-skip-scroll-assist","true"),el.focus())},jsSetFocus=async(componentEl,inputEl,contentEl,footerEl,keyboardHeight,enableScrollPadding,disableClonedInput=!1,platformHeight=0,waitForResize=!0)=>{if(!contentEl&&!footerEl)return;const scrollData=((componentEl,contentEl,keyboardHeight,platformHeight)=>{var _a;const itemEl=null!==(_a=componentEl.closest("ion-item,[ion-item]"))&&void 0!==_a?_a:componentEl;return calcScrollData(itemEl.getBoundingClientRect(),contentEl.getBoundingClientRect(),keyboardHeight,platformHeight)})(componentEl,contentEl||footerEl,keyboardHeight,platformHeight);if(contentEl&&Math.abs(scrollData.scrollAmount)<4)return setManualFocus(inputEl),void(enableScrollPadding&&null!==contentEl&&(setScrollPadding(contentEl,currentPadding),setClearScrollPaddingListener(inputEl,contentEl,(()=>currentPadding=0))));if(relocateInput(componentEl,inputEl,!0,scrollData.inputSafeY,disableClonedInput),setManualFocus(inputEl),(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_3__.r)((()=>componentEl.click())),enableScrollPadding&&contentEl&&(currentPadding=scrollData.scrollPadding,setScrollPadding(contentEl,currentPadding)),"undefined"!=typeof window){let scrollContentTimeout;const scrollContent=async()=>{void 0!==scrollContentTimeout&&clearTimeout(scrollContentTimeout),window.removeEventListener("ionKeyboardDidShow",doubleKeyboardEventListener),window.removeEventListener("ionKeyboardDidShow",scrollContent),contentEl&&await(0,_index_74a0cdd4_js__WEBPACK_IMPORTED_MODULE_4__.c)(contentEl,0,scrollData.scrollAmount,scrollData.scrollDuration),relocateInput(componentEl,inputEl,!1,scrollData.inputSafeY),setManualFocus(inputEl),enableScrollPadding&&setClearScrollPaddingListener(inputEl,contentEl,(()=>currentPadding=0))},doubleKeyboardEventListener=()=>{window.removeEventListener("ionKeyboardDidShow",doubleKeyboardEventListener),window.addEventListener("ionKeyboardDidShow",scrollContent)};if(contentEl){const scrollEl=await(0,_index_74a0cdd4_js__WEBPACK_IMPORTED_MODULE_4__.g)(contentEl),totalScrollAmount=scrollEl.scrollHeight-scrollEl.clientHeight;if(waitForResize&&scrollData.scrollAmount>totalScrollAmount-scrollEl.scrollTop)return"password"===inputEl.type?(scrollData.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",doubleKeyboardEventListener)):window.addEventListener("ionKeyboardDidShow",scrollContent),void(scrollContentTimeout=setTimeout(scrollContent,1e3))}scrollContent()}},startInputShims=async(config,platform)=>{if(void 0===_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.d)return;const isIOS="ios"===platform,isAndroid="android"===platform,keyboardHeight=config.getNumber("keyboardHeight",290),scrollAssist=config.getBoolean("scrollAssist",!0),hideCaret=config.getBoolean("hideCaretOnScroll",isIOS),inputBlurring=config.getBoolean("inputBlurring",!1),scrollPadding=config.getBoolean("scrollPadding",!0),inputs=Array.from(_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.d.querySelectorAll("ion-input, ion-textarea")),hideCaretMap=new WeakMap,scrollAssistMap=new WeakMap,keyboardResizeMode=await _keyboard_6ae239bc_js__WEBPACK_IMPORTED_MODULE_1__.K.getResizeMode(),registerInput=async componentEl=>{await new Promise((resolve=>(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_3__.e)(componentEl,resolve)));const inputRoot=componentEl.shadowRoot||componentEl,inputEl=inputRoot.querySelector("input")||inputRoot.querySelector("textarea"),scrollEl=(0,_index_74a0cdd4_js__WEBPACK_IMPORTED_MODULE_4__.a)(componentEl),footerEl=scrollEl?null:componentEl.closest("ion-footer");if(!inputEl)return;if(scrollEl&&hideCaret&&!hideCaretMap.has(componentEl)){const rmFn=((componentEl,inputEl,scrollEl)=>{if(!scrollEl||!inputEl)return()=>{};const scrollHideCaret=shouldHideCaret=>{var input;(input=inputEl)===input.getRootNode().activeElement&&relocateInput(componentEl,inputEl,shouldHideCaret)},onBlur=()=>relocateInput(componentEl,inputEl,!1),hideCaret=()=>scrollHideCaret(!0),showCaret=()=>scrollHideCaret(!1);return(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_3__.a)(scrollEl,"ionScrollStart",hideCaret),(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_3__.a)(scrollEl,"ionScrollEnd",showCaret),inputEl.addEventListener("blur",onBlur),()=>{(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_3__.b)(scrollEl,"ionScrollStart",hideCaret),(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_3__.b)(scrollEl,"ionScrollEnd",showCaret),inputEl.removeEventListener("blur",onBlur)}})(componentEl,inputEl,scrollEl);hideCaretMap.set(componentEl,rmFn)}if(!("date"===inputEl.type||"datetime-local"===inputEl.type)&&(scrollEl||footerEl)&&scrollAssist&&!scrollAssistMap.has(componentEl)){const rmFn=((componentEl,inputEl,contentEl,footerEl,keyboardHeight,enableScrollPadding,keyboardResize,disableClonedInput=!1)=>{const addScrollPadding=enableScrollPadding&&(void 0===keyboardResize||keyboardResize.mode===_keyboard_6ae239bc_js__WEBPACK_IMPORTED_MODULE_1__.a.None);let hasKeyboardBeenPresentedForTextField=!1;const platformHeight=void 0!==_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w?_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w.innerHeight:0,keyboardShow=ev=>{!1!==hasKeyboardBeenPresentedForTextField?jsSetFocus(componentEl,inputEl,contentEl,footerEl,ev.detail.keyboardHeight,addScrollPadding,disableClonedInput,platformHeight,!1):hasKeyboardBeenPresentedForTextField=!0},focusOut=()=>{hasKeyboardBeenPresentedForTextField=!1,null===_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w||void 0===_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w||_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener("ionKeyboardDidShow",keyboardShow),componentEl.removeEventListener("focusout",focusOut)},focusIn=async()=>{inputEl.hasAttribute("data-ionic-skip-scroll-assist")?inputEl.removeAttribute("data-ionic-skip-scroll-assist"):(jsSetFocus(componentEl,inputEl,contentEl,footerEl,keyboardHeight,addScrollPadding,disableClonedInput,platformHeight),null===_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w||void 0===_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w||_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener("ionKeyboardDidShow",keyboardShow),componentEl.addEventListener("focusout",focusOut))};return componentEl.addEventListener("focusin",focusIn),()=>{componentEl.removeEventListener("focusin",focusIn),null===_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w||void 0===_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w||_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener("ionKeyboardDidShow",keyboardShow),componentEl.removeEventListener("focusout",focusOut)}})(componentEl,inputEl,scrollEl,footerEl,keyboardHeight,scrollPadding,keyboardResizeMode,isAndroid);scrollAssistMap.set(componentEl,rmFn)}};inputBlurring&&(()=>{let focused=!0,didScroll=!1;const doc=document,onScroll=()=>{didScroll=!0},onFocusin=()=>{focused=!0},onTouchend=ev=>{if(didScroll)return void(didScroll=!1);const active=doc.activeElement;if(!active)return;if(active.matches(SKIP_SELECTOR))return;const tapped=ev.target;tapped!==active&&(tapped.matches(SKIP_SELECTOR)||tapped.closest(SKIP_SELECTOR)||(focused=!1,setTimeout((()=>{focused||active.blur()}),50)))};(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_3__.a)(doc,"ionScrollStart",onScroll),doc.addEventListener("focusin",onFocusin,!0),doc.addEventListener("touchend",onTouchend,!1)})();for(const input of inputs)registerInput(input);_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.d.addEventListener("ionInputDidLoad",(ev=>{registerInput(ev.detail)})),_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.d.addEventListener("ionInputDidUnload",(ev=>{(componentEl=>{if(hideCaret){const fn=hideCaretMap.get(componentEl);fn&&fn(),hideCaretMap.delete(componentEl)}if(scrollAssist){const fn=scrollAssistMap.get(componentEl);fn&&fn(),scrollAssistMap.delete(componentEl)}})(ev.detail)}))}},"../../packages/core/dist/esm/keyboard-6ae239bc.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Keyboard,a:()=>KeyboardResize});var ExceptionCode,KeyboardResize,_capacitor_74355484_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/capacitor-74355484.js");!function(ExceptionCode){ExceptionCode.Unimplemented="UNIMPLEMENTED",ExceptionCode.Unavailable="UNAVAILABLE"}(ExceptionCode||(ExceptionCode={})),function(KeyboardResize){KeyboardResize.Body="body",KeyboardResize.Ionic="ionic",KeyboardResize.Native="native",KeyboardResize.None="none"}(KeyboardResize||(KeyboardResize={}));const Keyboard={getEngine(){const capacitor=(0,_capacitor_74355484_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(null==capacitor?void 0:capacitor.isPluginAvailable("Keyboard"))return capacitor.Plugins.Keyboard},getResizeMode(){const engine=this.getEngine();return(null==engine?void 0:engine.getResizeMode)?engine.getResizeMode().catch((e=>{if(e.code!==ExceptionCode.Unimplemented)throw e})):Promise.resolve(void 0)}}}}]);
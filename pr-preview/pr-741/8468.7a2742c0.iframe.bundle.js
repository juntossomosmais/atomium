/*! For license information please see 8468.7a2742c0.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[8468],{"../../packages/core/dist/esm/helpers-4047ce7f.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>clamp,e:()=>componentOnReady,f:()=>isEndSide,g:()=>getElementRoot,h:()=>focusVisibleElement,i:()=>inheritAriaAttributes,j:()=>assert,k:()=>debounceEvent,l:()=>renderHiddenInput,m:()=>debounce,n:()=>hasLazyBuild,o:()=>hasShadowDom,p:()=>pointerCoord,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{void 0!==animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,focusVisibleElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/index-f458f0f6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{startTapClick:()=>startTapClick});var _index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js"),_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/helpers-4047ce7f.js");const startTapClick=config=>{if(void 0===_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.d)return;let activatableEle,activeRipple,activeDefer,lastActivated=0;const useRippleEffect=config.getBoolean("animated",!0)&&config.getBoolean("rippleEffect",!0),clearDefers=new WeakMap,cancelActive=()=>{activeDefer&&clearTimeout(activeDefer),activeDefer=void 0,activatableEle&&(removeActivated(!1),activatableEle=void 0)},setActivatedElement=(el,ev)=>{if(el&&el===activatableEle)return;activeDefer&&clearTimeout(activeDefer),activeDefer=void 0;const{x,y}=(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_1__.p)(ev);if(activatableEle){if(clearDefers.has(activatableEle))throw new Error("internal error");activatableEle.classList.contains(ACTIVATED)||addActivated(activatableEle,x,y),removeActivated(!0)}if(el){const deferId=clearDefers.get(el);deferId&&(clearTimeout(deferId),clearDefers.delete(el)),el.classList.remove(ACTIVATED);const callback=()=>{addActivated(el,x,y),activeDefer=void 0};isInstant(el)?callback():activeDefer=setTimeout(callback,ADD_ACTIVATED_DEFERS)}activatableEle=el},addActivated=(el,x,y)=>{if(lastActivated=Date.now(),el.classList.add(ACTIVATED),!useRippleEffect)return;const rippleEffect=getRippleEffect(el);null!==rippleEffect&&(removeRipple(),activeRipple=rippleEffect.addRipple(x,y))},removeRipple=()=>{void 0!==activeRipple&&(activeRipple.then((remove=>remove())),activeRipple=void 0)},removeActivated=smooth=>{removeRipple();const active=activatableEle;if(!active)return;const time=CLEAR_STATE_DEFERS-Date.now()+lastActivated;if(smooth&&time>0&&!isInstant(active)){const deferId=setTimeout((()=>{active.classList.remove(ACTIVATED),clearDefers.delete(active)}),CLEAR_STATE_DEFERS);clearDefers.set(active,deferId)}else active.classList.remove(ACTIVATED)};_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.d.addEventListener("ionGestureCaptured",cancelActive),_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.d.addEventListener("pointerdown",(ev=>{activatableEle||2===ev.button||setActivatedElement(getActivatableTarget(ev),ev)}),!0),_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.d.addEventListener("pointerup",(ev=>{setActivatedElement(void 0,ev)}),!0),_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.d.addEventListener("pointercancel",cancelActive,!0)},getActivatableTarget=ev=>{if(void 0===ev.composedPath)return ev.target.closest(".ion-activatable");{const path=ev.composedPath();for(let i=0;i<path.length-2;i++){const el=path[i];if(!(el instanceof ShadowRoot)&&el.classList.contains("ion-activatable"))return el}}},isInstant=el=>el.classList.contains("ion-activatable-instant"),getRippleEffect=el=>{if(el.shadowRoot){const ripple=el.shadowRoot.querySelector("ion-ripple-effect");if(ripple)return ripple}return el.querySelector("ion-ripple-effect")},ACTIVATED="ion-activated",ADD_ACTIVATED_DEFERS=100,CLEAR_STATE_DEFERS=150}}]);
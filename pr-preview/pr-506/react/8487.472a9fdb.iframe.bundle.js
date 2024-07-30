/*! For license information please see 8487.472a9fdb.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[8487],{"../../packages/core/dist/esm/helpers-079c01eb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>componentOnReady,e:()=>renderHiddenInput,f:()=>clamp,g:()=>getElementRoot,h:()=>hasLazyBuild,i:()=>inheritAriaAttributes,j:()=>isEndSide,k:()=>focusVisibleElement,l:()=>assert,m:()=>debounceEvent,n:()=>getAriaLabel,o:()=>findItemLabel,p:()=>debounce,q:()=>hasShadowDom,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync,u:()=>now,v:()=>pointerCoord});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{void 0!==animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,findItemLabel=componentEl=>{const itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},focusVisibleElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},getAriaLabel=(componentEl,inputId)=>{let labelText;const labelledBy=componentEl.getAttribute("aria-labelledby"),componentId=componentEl.id;let labelId=null!==labelledBy&&""!==labelledBy.trim()?labelledBy:inputId+"-lbl",label=null!==labelledBy&&""!==labelledBy.trim()?document.getElementById(labelledBy):findItemLabel(componentEl);return label?(null===labelledBy&&(label.id=labelId),labelText=label.textContent,label.setAttribute("aria-hidden","true")):""!==componentId.trim()&&(label=document.querySelector(`label[for="${componentId}"]`),label&&(""!==label.id?labelId=label.id:label.id=labelId=`${componentId}-lbl`,labelText=label.textContent)),{label,labelId,labelText}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=ev=>ev.timeStamp||Date.now(),pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/refresher.utils-d7028449.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>setSpinnerOpacity,b:()=>handleScrollWhilePulling,c:()=>createPullingAnimation,d:()=>createSnapBackAnimation,e:()=>supportsRubberBandScrolling,g:()=>getRefresherAnimationType,h:()=>handleScrollWhileRefreshing,s:()=>shouldUseNativeRefresher,t:()=>translateElement});var _index_03927578_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-03927578.js"),_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/animation-022a9434.js"),_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/helpers-079c01eb.js");const getRefresherAnimationType=contentEl=>{const previousSibling=contentEl.previousElementSibling;return null!==previousSibling&&"ION-HEADER"===previousSibling.tagName?"translate":"scale"},createPullingAnimation=(type,pullingSpinner,refresherEl)=>"scale"===type?createScaleAnimation(pullingSpinner,refresherEl):createTranslateAnimation(pullingSpinner,refresherEl),createBaseAnimation=pullingRefresherIcon=>{const spinner=pullingRefresherIcon.querySelector("ion-spinner"),circle=spinner.shadowRoot.querySelector("circle"),spinnerArrowContainer=pullingRefresherIcon.querySelector(".spinner-arrow-container"),arrowContainer=pullingRefresherIcon.querySelector(".arrow-container"),arrow=arrowContainer?arrowContainer.querySelector("ion-icon"):null,baseAnimation=(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_1__.c)().duration(1e3).easing("ease-out"),spinnerArrowContainerAnimation=(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_1__.c)().addElement(spinnerArrowContainer).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),circleInnerAnimation=(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_1__.c)().addElement(circle).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),circleOuterAnimation=(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_1__.c)().addElement(spinner).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(arrowContainer&&arrow){const arrowContainerAnimation=(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_1__.c)().addElement(arrowContainer).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),arrowAnimation=(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_1__.c)().addElement(arrow).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);baseAnimation.addAnimation([arrowContainerAnimation,arrowAnimation])}return baseAnimation.addAnimation([spinnerArrowContainerAnimation,circleInnerAnimation,circleOuterAnimation])},createScaleAnimation=(pullingRefresherIcon,refresherEl)=>{const height=refresherEl.clientHeight,spinnerAnimation=(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_1__.c)().addElement(pullingRefresherIcon).keyframes([{offset:0,transform:`scale(0) translateY(-${height}px)`},{offset:1,transform:"scale(1) translateY(100px)"}]);return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation])},createTranslateAnimation=(pullingRefresherIcon,refresherEl)=>{const height=refresherEl.clientHeight,spinnerAnimation=(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_1__.c)().addElement(pullingRefresherIcon).keyframes([{offset:0,transform:`translateY(-${height}px)`},{offset:1,transform:"translateY(100px)"}]);return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation])},createSnapBackAnimation=pullingRefresherIcon=>(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_1__.c)().duration(125).addElement(pullingRefresherIcon).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)"),setSpinnerOpacity=(spinner,opacity)=>{spinner.style.setProperty("opacity",opacity.toString())},handleScrollWhilePulling=(ticks,numTicks,pullAmount)=>{(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.w)((()=>{ticks.forEach(((el,i)=>{const min=i*(1/numTicks),range=1-min,start=pullAmount-min,progression=(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_2__.f)(0,start/range,1);el.style.setProperty("opacity",progression.toString())}))}))},handleScrollWhileRefreshing=(spinner,lastVelocityY)=>{(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.w)((()=>{spinner.style.setProperty("--refreshing-rotation-duration",lastVelocityY>=1?"0.5s":"2s"),spinner.style.setProperty("opacity","1")}))},translateElement=(el,value,duration=200)=>{if(!el)return Promise.resolve();const trans=(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_2__.t)(el,duration);return(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.w)((()=>{el.style.setProperty("transition",`${duration}ms all ease-out`),void 0===value?el.style.removeProperty("transform"):el.style.setProperty("transform",`translate3d(0px, ${value}, 0px)`)})),trans},supportsRubberBandScrolling=()=>navigator.maxTouchPoints>0&&CSS.supports("background: -webkit-named-image(apple-pay-logo-black)"),shouldUseNativeRefresher=async(referenceEl,mode)=>{const refresherContent=referenceEl.querySelector("ion-refresher-content");if(!refresherContent)return Promise.resolve(!1);await new Promise((resolve=>(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_2__.d)(refresherContent,resolve)));const pullingSpinner=referenceEl.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),refreshingSpinner=referenceEl.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");return null!==pullingSpinner&&null!==refreshingSpinner&&("ios"===mode&&supportsRubberBandScrolling()||"md"===mode)}}}]);
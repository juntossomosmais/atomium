/*! For license information please see 818.b19ba24a.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[818],{"../../packages/core/dist/esm/helpers-b14eeb70.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>renderHiddenInput,e:()=>componentOnReady,f:()=>clamp,g:()=>getElementRoot,h:()=>isEndSide,i:()=>inheritAriaAttributes,j:()=>focusVisibleElement,k:()=>assert,l:()=>debounceEvent,m:()=>debounce,n:()=>hasLazyBuild,o:()=>hasShadowDom,p:()=>pointerCoord,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{void 0!==animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,focusVisibleElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/index-74a0cdd4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>ION_CONTENT_CLASS_SELECTOR,a:()=>findClosestIonContent,b:()=>ION_CONTENT_ELEMENT_SELECTOR,c:()=>scrollByPoint,d:()=>disableContentScrollY,f:()=>findIonContent,g:()=>getScrollElement,i:()=>isIonContent,p:()=>printIonContentErrorMsg,r:()=>resetContentScrollY,s:()=>scrollToTop});var _helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/helpers-b14eeb70.js"),_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/index-f5dbb989.js");const ION_CONTENT_ELEMENT_SELECTOR="ion-content",ION_CONTENT_CLASS_SELECTOR=".ion-content-scroll-host",ION_CONTENT_SELECTOR=`${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`,isIonContent=el=>"ION-CONTENT"===el.tagName,getScrollElement=async el=>isIonContent(el)?(await new Promise((resolve=>(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_0__.e)(el,resolve))),el.getScrollElement()):el,findIonContent=el=>{const customContentHost=el.querySelector(ION_CONTENT_CLASS_SELECTOR);return customContentHost||el.querySelector(ION_CONTENT_SELECTOR)},findClosestIonContent=el=>el.closest(ION_CONTENT_SELECTOR),scrollToTop=(el,durationMs)=>{if(isIonContent(el)){return el.scrollToTop(durationMs)}return Promise.resolve(el.scrollTo({top:0,left:0,behavior:durationMs>0?"smooth":"auto"}))},scrollByPoint=(el,x,y,durationMs)=>{if(isIonContent(el)){return el.scrollByPoint(x,y,durationMs)}return Promise.resolve(el.scrollBy({top:y,left:x,behavior:durationMs>0?"smooth":"auto"}))},printIonContentErrorMsg=el=>(0,_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_1__.b)(el,ION_CONTENT_ELEMENT_SELECTOR),disableContentScrollY=contentEl=>{if(isIonContent(contentEl)){const ionContent=contentEl,initialScrollY=ionContent.scrollY;return ionContent.scrollY=!1,initialScrollY}return contentEl.style.setProperty("overflow","hidden"),!0},resetContentScrollY=(contentEl,initialScrollY)=>{isIonContent(contentEl)?contentEl.scrollY=initialScrollY:contentEl.style.removeProperty("overflow")}},"../../packages/core/dist/esm/index-f5dbb989.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>printIonError,b:()=>printRequiredElementError,p:()=>printIonWarning});const printIonWarning=(message,...params)=>console.warn(`[Ionic Warning]: ${message}`,...params),printIonError=(message,...params)=>console.error(`[Ionic Error]: ${message}`,...params),printRequiredElementError=(el,...targetSelectors)=>console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(" or ")}.`)},"../../packages/core/dist/esm/ion-item-sliding.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_item_sliding:()=>ItemSliding});var _index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-4aef4473.js"),_index_74a0cdd4_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/index-74a0cdd4.js"),_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/dist/esm/helpers-b14eeb70.js"),_watch_options_17e39348_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/watch-options-17e39348.js"),_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-a9e3465e.js");let openSlidingItem;const ItemSliding=class{constructor(hostRef){(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionDrag=(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionDrag",7),this.item=null,this.openAmount=0,this.initialOpenAmount=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.sides=0,this.optsDirty=!0,this.contentEl=null,this.initialContentScrollY=!0,this.state=2,this.disabled=!1}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}async connectedCallback(){const{el}=this;this.item=el.querySelector("ion-item"),this.contentEl=(0,_index_74a0cdd4_js__WEBPACK_IMPORTED_MODULE_2__.a)(el),this.mutationObserver=(0,_watch_options_17e39348_js__WEBPACK_IMPORTED_MODULE_3__.w)(el,"ion-item-option",(async()=>{await this.updateOptions()})),await this.updateOptions(),this.gesture=(await __webpack_require__.e(4681).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/index-0fc64123.js"))).createGesture({el,gestureName:"item-swipe",gesturePriority:100,threshold:5,canStart:ev=>this.canStart(ev),onStart:()=>this.onStart(),onMove:ev=>this.onMove(ev),onEnd:ev=>this.onEnd(ev)}),this.disabledChanged()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.item=null,this.leftOptions=this.rightOptions=void 0,openSlidingItem===this.el&&(openSlidingItem=void 0),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}getOpenAmount(){return Promise.resolve(this.openAmount)}getSlidingRatio(){return Promise.resolve(this.getSlidingRatioSync())}async open(side){var _a;if(null===(this.item=null!==(_a=this.item)&&void 0!==_a?_a:this.el.querySelector("ion-item")))return;const optionsToOpen=this.getOptions(side);if(!optionsToOpen)return;void 0===side&&(side=optionsToOpen===this.leftOptions?"start":"end"),side=(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_4__.h)(side)?"end":"start";const isStartOpen=this.openAmount<0,isEndOpen=this.openAmount>0;isStartOpen&&optionsToOpen===this.leftOptions||isEndOpen&&optionsToOpen===this.rightOptions||(this.closeOpened(),this.state=4,requestAnimationFrame((()=>{this.calculateOptsWidth();const width="end"===side?this.optsWidthRightSide:-this.optsWidthLeftSide;openSlidingItem=this.el,this.setOpenAmount(width,!1),this.state="end"===side?8:16})))}async close(){this.setOpenAmount(0,!0)}async closeOpened(){return void 0!==openSlidingItem&&(openSlidingItem.close(),openSlidingItem=void 0,!0)}getOptions(side){return void 0===side?this.leftOptions||this.rightOptions:"start"===side?this.leftOptions:this.rightOptions}async updateOptions(){const options=this.el.querySelectorAll("ion-item-options");let sides=0;this.leftOptions=this.rightOptions=void 0;for(let i=0;i<options.length;i++){const item=options.item(i),option=void 0!==item.componentOnReady?await item.componentOnReady():item;"start"===((0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_4__.h)(option.side)?"end":"start")?(this.leftOptions=option,sides|=1):(this.rightOptions=option,sides|=2)}this.optsDirty=!0,this.sides=sides}canStart(gesture){if("rtl"===document.dir?window.innerWidth-gesture.startX<15:gesture.startX<15)return!1;return openSlidingItem&&openSlidingItem!==this.el&&this.closeOpened(),!(!this.rightOptions&&!this.leftOptions)}onStart(){this.item=this.el.querySelector("ion-item");const{contentEl}=this;contentEl&&(this.initialContentScrollY=(0,_index_74a0cdd4_js__WEBPACK_IMPORTED_MODULE_2__.d)(contentEl)),openSlidingItem=this.el,void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),0===this.openAmount&&(this.optsDirty=!0,this.state=4),this.initialOpenAmount=this.openAmount,this.item&&(this.item.style.transition="none")}onMove(gesture){this.optsDirty&&this.calculateOptsWidth();let optsWidth,openAmount=this.initialOpenAmount-gesture.deltaX;switch(this.sides){case 2:openAmount=Math.max(0,openAmount);break;case 1:openAmount=Math.min(0,openAmount);break;case 3:break;case 0:return;default:console.warn("invalid ItemSideFlags value",this.sides)}openAmount>this.optsWidthRightSide?(optsWidth=this.optsWidthRightSide,openAmount=optsWidth+.55*(openAmount-optsWidth)):openAmount<-this.optsWidthLeftSide&&(optsWidth=-this.optsWidthLeftSide,openAmount=optsWidth+.55*(openAmount-optsWidth)),this.setOpenAmount(openAmount,!1)}onEnd(gesture){const{contentEl,initialContentScrollY}=this;contentEl&&(0,_index_74a0cdd4_js__WEBPACK_IMPORTED_MODULE_2__.r)(contentEl,initialContentScrollY);const velocity=gesture.velocityX;let restingPoint=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide;const isResetDirection=this.openAmount>0==!(velocity<0),isMovingFast=Math.abs(velocity)>.3,isOnCloseZone=Math.abs(this.openAmount)<Math.abs(restingPoint/2);swipeShouldReset(isResetDirection,isMovingFast,isOnCloseZone)&&(restingPoint=0);const state=this.state;this.setOpenAmount(restingPoint,!0),0!=(32&state)&&this.rightOptions?this.rightOptions.fireSwipeEvent():0!=(64&state)&&this.leftOptions&&this.leftOptions.fireSwipeEvent()}calculateOptsWidth(){this.optsWidthRightSide=0,this.rightOptions&&(this.rightOptions.style.display="flex",this.optsWidthRightSide=this.rightOptions.offsetWidth,this.rightOptions.style.display=""),this.optsWidthLeftSide=0,this.leftOptions&&(this.leftOptions.style.display="flex",this.optsWidthLeftSide=this.leftOptions.offsetWidth,this.leftOptions.style.display=""),this.optsDirty=!1}setOpenAmount(openAmount,isFinal){if(void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),!this.item)return;const{el}=this,style=this.item.style;if(this.openAmount=openAmount,isFinal&&(style.transition=""),openAmount>0)this.state=openAmount>=this.optsWidthRightSide+30?40:8;else{if(!(openAmount<0))return el.classList.add("item-sliding-closing"),this.gesture&&this.gesture.enable(!1),this.tmr=setTimeout((()=>{this.state=2,this.tmr=void 0,this.gesture&&this.gesture.enable(!this.disabled),el.classList.remove("item-sliding-closing")}),600),openSlidingItem=void 0,void(style.transform="");this.state=openAmount<=-this.optsWidthLeftSide-30?80:16}style.transform=`translate3d(${-openAmount}px,0,0)`,this.ionDrag.emit({amount:openAmount,ratio:this.getSlidingRatioSync()})}getSlidingRatioSync(){return this.openAmount>0?this.openAmount/this.optsWidthRightSide:this.openAmount<0?this.openAmount/this.optsWidthLeftSide:0}render(){const mode=(0,_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"47a3edd2ef2080ed9cfc2784277dea09785c7dc4",class:{[mode]:!0,"item-sliding-active-slide":2!==this.state,"item-sliding-active-options-end":0!=(8&this.state),"item-sliding-active-options-start":0!=(16&this.state),"item-sliding-active-swipe-end":0!=(32&this.state),"item-sliding-active-swipe-start":0!=(64&this.state)}})}get el(){return(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{disabled:["disabledChanged"]}}},swipeShouldReset=(isResetDirection,isMovingFast,isOnResetZone)=>!isMovingFast&&isOnResetZone||isResetDirection&&isMovingFast;ItemSliding.style="ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;user-select:none}ion-item-sliding .item{user-select:none}.item-sliding-active-slide .item{position:relative;transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-closing ion-item-options{pointer-events:none}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;order:1;transition-duration:0.6s;transition-property:padding-left}:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{order:-1}[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable{order:-1}@supports selector(:dir(rtl)){.item-sliding-active-swipe-end .item-options-end .item-option-expandable:dir(rtl){order:-1}}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;order:-1;transition-duration:0.6s;transition-property:padding-right}:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{order:1}[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable{order:1}@supports selector(:dir(rtl)){.item-sliding-active-swipe-start .item-options-start .item-option-expandable:dir(rtl){order:1}}"},"../../packages/core/dist/esm/watch-options-17e39348.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>watchForOptions});const watchForOptions=(containerEl,tagName,onChange)=>{if("undefined"==typeof MutationObserver)return;const mutation=new MutationObserver((mutationList=>{onChange(getSelectedOption(mutationList,tagName))}));return mutation.observe(containerEl,{childList:!0,subtree:!0}),mutation},getSelectedOption=(mutationList,tagName)=>{let newOption;return mutationList.forEach((mut=>{for(let i=0;i<mut.addedNodes.length;i++)newOption=findCheckedOption(mut.addedNodes[i],tagName)||newOption})),newOption},findCheckedOption=(node,tagName)=>{if(1!==node.nodeType)return;const el=node;return(el.tagName===tagName.toUpperCase()?[el]:Array.from(el.querySelectorAll(tagName))).find((o=>o.value===el.value))}}}]);
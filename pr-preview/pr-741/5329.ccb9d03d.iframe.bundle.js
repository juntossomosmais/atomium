/*! For license information please see 5329.ccb9d03d.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[5329],{"../../packages/core/dist/esm/helpers-4047ce7f.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>clamp,e:()=>componentOnReady,f:()=>isEndSide,g:()=>getElementRoot,h:()=>focusVisibleElement,i:()=>inheritAriaAttributes,j:()=>assert,k:()=>debounceEvent,l:()=>renderHiddenInput,m:()=>debounce,n:()=>hasLazyBuild,o:()=>hasShadowDom,p:()=>pointerCoord,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{void 0!==animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,focusVisibleElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/ion-item-options.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_item_options:()=>ItemOptions});var _index_73621246_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-73621246.js"),_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/helpers-4047ce7f.js"),_ionic_global_808d033b_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-808d033b.js");const ItemOptions=class{constructor(hostRef){(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionSwipe=(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionSwipe",7),this.side="end"}async fireSwipeEvent(){this.ionSwipe.emit({side:this.side})}render(){const mode=(0,_ionic_global_808d033b_js__WEBPACK_IMPORTED_MODULE_1__.g)(this),isEnd=(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_2__.f)(this.side);return(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"6d91399d2aaaa81d514d0bbc8dffe53eeec25d36",class:{[mode]:!0,[`item-options-${mode}`]:!0,"item-options-start":!isEnd,"item-options-end":isEnd}})}get el(){return(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}};ItemOptions.style={ios:"ion-item-options{top:0;right:0;justify-content:flex-end;display:none;position:absolute;height:100%;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options{justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;justify-content:flex-end}[dir=rtl] ion-item-options{justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;justify-content:flex-end}@supports selector(:dir(rtl)){ion-item-options:dir(rtl){justify-content:flex-start}ion-item-options:dir(rtl):not(.item-options-end){right:auto;left:0;justify-content:flex-end}}.item-options-start{right:auto;left:0;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start{justify-content:flex-end}[dir=rtl] .item-options-start{justify-content:flex-end}@supports selector(:dir(rtl)){.item-options-start:dir(rtl){justify-content:flex-end}}[dir=ltr] .item-options-start ion-item-option:first-child,[dir=rtl] .item-options-start ion-item-option:last-child{padding-left:var(--ion-safe-area-left)}[dir=ltr] .item-options-end ion-item-option:last-child,[dir=rtl] .item-options-end ion-item-option:first-child{padding-right:var(--ion-safe-area-right)}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}@supports selector(:dir(rtl)){.item-sliding-active-slide:dir(rtl).item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}}.item-sliding-active-slide ion-item-options{display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))))}.item-options-ios.item-options-end{border-bottom-width:0.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:0.55px}",md:"ion-item-options{top:0;right:0;justify-content:flex-end;display:none;position:absolute;height:100%;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options{justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;justify-content:flex-end}[dir=rtl] ion-item-options{justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;justify-content:flex-end}@supports selector(:dir(rtl)){ion-item-options:dir(rtl){justify-content:flex-start}ion-item-options:dir(rtl):not(.item-options-end){right:auto;left:0;justify-content:flex-end}}.item-options-start{right:auto;left:0;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start{justify-content:flex-end}[dir=rtl] .item-options-start{justify-content:flex-end}@supports selector(:dir(rtl)){.item-options-start:dir(rtl){justify-content:flex-end}}[dir=ltr] .item-options-start ion-item-option:first-child,[dir=rtl] .item-options-start ion-item-option:last-child{padding-left:var(--ion-safe-area-left)}[dir=ltr] .item-options-end ion-item-option:last-child,[dir=rtl] .item-options-end ion-item-option:first-child{padding-right:var(--ion-safe-area-right)}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}@supports selector(:dir(rtl)){.item-sliding-active-slide:dir(rtl).item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}}.item-sliding-active-slide ion-item-options{display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-md{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))))}.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}"}}}]);
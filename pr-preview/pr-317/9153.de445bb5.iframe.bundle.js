/*! For license information please see 9153.de445bb5.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[9153],{"../../packages/core/dist/esm/form-controller-b4e9326c.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createLegacyFormController});var _helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/helpers-c59bd181.js");const createLegacyFormController=el=>{const controlEl=el;let legacyControl;return{hasLegacyControl:()=>{if(void 0===legacyControl){const hasLabelProp=void 0!==controlEl.label||hasLabelSlot(controlEl),hasAriaLabelAttribute=controlEl.hasAttribute("aria-label")||controlEl.hasAttribute("aria-labelledby")&&null===controlEl.shadowRoot,legacyItemLabel=(0,_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_0__.o)(controlEl);legacyControl=!0===controlEl.legacy||!hasLabelProp&&!hasAriaLabelAttribute&&null!==legacyItemLabel}return legacyControl}}},hasLabelSlot=controlEl=>null!==controlEl.shadowRoot&&(!(!NAMED_LABEL_SLOT_COMPONENTS.includes(controlEl.tagName)||null===controlEl.querySelector('[slot="label"]'))||!(!UNNAMED_LABEL_SLOT_COMPONENTS.includes(controlEl.tagName)||""===controlEl.textContent)),NAMED_LABEL_SLOT_COMPONENTS=["ION-RANGE"],UNNAMED_LABEL_SLOT_COMPONENTS=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},"../../packages/core/dist/esm/helpers-c59bd181.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>componentOnReady,e:()=>renderHiddenInput,f:()=>clamp,g:()=>getElementRoot,h:()=>hasLazyBuild,i:()=>inheritAriaAttributes,j:()=>isEndSide,k:()=>focusElement,l:()=>assert,m:()=>debounceEvent,n:()=>getAriaLabel,o:()=>findItemLabel,p:()=>debounce,q:()=>hasShadowDom,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync,u:()=>now,v:()=>pointerCoord});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,findItemLabel=componentEl=>{const itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},focusElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},getAriaLabel=(componentEl,inputId)=>{let labelText;const labelledBy=componentEl.getAttribute("aria-labelledby"),componentId=componentEl.id;let labelId=null!==labelledBy&&""!==labelledBy.trim()?labelledBy:inputId+"-lbl",label=null!==labelledBy&&""!==labelledBy.trim()?document.getElementById(labelledBy):findItemLabel(componentEl);return label?(null===labelledBy&&(label.id=labelId),labelText=label.textContent,label.setAttribute("aria-hidden","true")):""!==componentId.trim()&&(label=document.querySelector(`label[for="${componentId}"]`),label&&(""!==label.id?labelId=label.id:label.id=labelId=`${componentId}-lbl`,labelText=label.textContent)),{label,labelId,labelText}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=ev=>ev.timeStamp||Date.now(),pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/index-24e88bd3.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>printIonError,b:()=>printRequiredElementError,p:()=>printIonWarning});const printIonWarning=(message,...params)=>console.warn(`[Ionic Warning]: ${message}`,...params),printIonError=(message,...params)=>console.error(`[Ionic Error]: ${message}`,...params),printRequiredElementError=(el,...targetSelectors)=>console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(" or ")}.`)},"../../packages/core/dist/esm/index-938c089e.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>doc,w:()=>win});const win="undefined"!=typeof window?window:void 0,doc="undefined"!=typeof document?document:void 0},"../../packages/core/dist/esm/input.utils-4cc4df37.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createSlotMutationController,g:()=>getCounterText});var _index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-938c089e.js"),_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/helpers-c59bd181.js"),_index_24e88bd3_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/index-24e88bd3.js");const createSlotMutationController=(el,slotName,mutationCallback)=>{let hostMutationObserver,slottedContentMutationObserver;void 0!==_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w&&"MutationObserver"in _index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w&&(hostMutationObserver=new MutationObserver((entries=>{for(const entry of entries)for(const node of entry.addedNodes)if(node.nodeType===Node.ELEMENT_NODE&&node.slot===slotName)return mutationCallback(),void(0,_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_1__.r)((()=>watchForSlotChange(node)))})),hostMutationObserver.observe(el,{childList:!0}));const watchForSlotChange=slottedEl=>{var _a;slottedContentMutationObserver&&(slottedContentMutationObserver.disconnect(),slottedContentMutationObserver=void 0),slottedContentMutationObserver=new MutationObserver((entries=>{mutationCallback();for(const entry of entries)for(const node of entry.removedNodes)node.nodeType===Node.ELEMENT_NODE&&node.slot===slotName&&destroySlottedContentObserver()})),slottedContentMutationObserver.observe(null!==(_a=slottedEl.parentElement)&&void 0!==_a?_a:slottedEl,{subtree:!0,childList:!0})},destroySlottedContentObserver=()=>{slottedContentMutationObserver&&(slottedContentMutationObserver.disconnect(),slottedContentMutationObserver=void 0)};return{destroy:()=>{hostMutationObserver&&(hostMutationObserver.disconnect(),hostMutationObserver=void 0),destroySlottedContentObserver()}}},getCounterText=(value,maxLength,counterFormatter)=>{const valueLength=null==value?0:value.toString().length,defaultCounterText=defaultCounterFormatter(valueLength,maxLength);if(void 0===counterFormatter)return defaultCounterText;try{return counterFormatter(valueLength,maxLength)}catch(e){return(0,_index_24e88bd3_js__WEBPACK_IMPORTED_MODULE_2__.a)("Exception in provided `counterFormatter`.",e),defaultCounterText}},defaultCounterFormatter=(length,maxlength)=>`${length} / ${maxlength}`},"../../packages/core/dist/esm/notch-controller-9ba37155.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createNotchController});var _index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-938c089e.js"),_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/helpers-c59bd181.js");const createNotchController=(el,getNotchSpacerEl,getLabelSlot)=>{let notchVisibilityIO;const needsExplicitNotchWidth=()=>void 0!==getNotchSpacerEl()&&void 0===el.label&&null!==getLabelSlot(),setNotchWidth=()=>{const notchSpacerEl=getNotchSpacerEl();if(void 0===notchSpacerEl)return;if(!needsExplicitNotchWidth())return void notchSpacerEl.style.removeProperty("width");const width=getLabelSlot().scrollWidth;if(0===width&&null===notchSpacerEl.offsetParent&&void 0!==_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w&&"IntersectionObserver"in _index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w){if(void 0!==notchVisibilityIO)return;const io=notchVisibilityIO=new IntersectionObserver((ev=>{1===ev[0].intersectionRatio&&(setNotchWidth(),io.disconnect(),notchVisibilityIO=void 0)}),{threshold:.01,root:el});io.observe(notchSpacerEl)}else notchSpacerEl.style.setProperty("width",.75*width+"px")};return{calculateNotchWidth:()=>{needsExplicitNotchWidth()&&(0,_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_1__.r)((()=>{setNotchWidth()}))},destroy:()=>{notchVisibilityIO&&(notchVisibilityIO.disconnect(),notchVisibilityIO=void 0)}}}},"../../packages/core/dist/esm/theme-bc7eaa70.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
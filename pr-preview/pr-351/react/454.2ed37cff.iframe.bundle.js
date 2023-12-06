/*! For license information please see 454.2ed37cff.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[454],{"../../packages/core/dist/esm/capacitor-0e0f67bb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>getCapacitor});var _index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-938c089e.js");const getCapacitor=()=>{if(void 0!==_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w)return _index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w.Capacitor}},"../../packages/core/dist/esm/haptic-09549110.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>ImpactStyle,a:()=>hapticSelectionStart,b:()=>hapticSelectionChanged,c:()=>hapticSelectionEnd,d:()=>hapticSelection,h:()=>hapticImpact});var ImpactStyle,NotificationType,_capacitor_0e0f67bb_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/capacitor-0e0f67bb.js");!function(ImpactStyle){ImpactStyle.Heavy="HEAVY",ImpactStyle.Medium="MEDIUM",ImpactStyle.Light="LIGHT"}(ImpactStyle||(ImpactStyle={})),function(NotificationType){NotificationType.Success="SUCCESS",NotificationType.Warning="WARNING",NotificationType.Error="ERROR"}(NotificationType||(NotificationType={}));const HapticEngine={getEngine(){const tapticEngine=window.TapticEngine;if(tapticEngine)return tapticEngine;const capacitor=(0,_capacitor_0e0f67bb_js__WEBPACK_IMPORTED_MODULE_0__.g)();return(null==capacitor?void 0:capacitor.isPluginAvailable("Haptics"))?capacitor.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const capacitor=(0,_capacitor_0e0f67bb_js__WEBPACK_IMPORTED_MODULE_0__.g)();return"web"!==(null==capacitor?void 0:capacitor.getPlatform())||"undefined"!=typeof navigator&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,_capacitor_0e0f67bb_js__WEBPACK_IMPORTED_MODULE_0__.g)(),impact(options){const engine=this.getEngine();if(!engine)return;const style=this.isCapacitor()?options.style:options.style.toLowerCase();engine.impact({style})},notification(options){const engine=this.getEngine();if(!engine)return;const type=this.isCapacitor()?options.type:options.type.toLowerCase();engine.notification({type})},selection(){const style=this.isCapacitor()?ImpactStyle.Light:"light";this.impact({style})},selectionStart(){const engine=this.getEngine();engine&&(this.isCapacitor()?engine.selectionStart():engine.gestureSelectionStart())},selectionChanged(){const engine=this.getEngine();engine&&(this.isCapacitor()?engine.selectionChanged():engine.gestureSelectionChanged())},selectionEnd(){const engine=this.getEngine();engine&&(this.isCapacitor()?engine.selectionEnd():engine.gestureSelectionEnd())}},hapticAvailable=()=>HapticEngine.available(),hapticSelection=()=>{hapticAvailable()&&HapticEngine.selection()},hapticSelectionStart=()=>{hapticAvailable()&&HapticEngine.selectionStart()},hapticSelectionChanged=()=>{hapticAvailable()&&HapticEngine.selectionChanged()},hapticSelectionEnd=()=>{hapticAvailable()&&HapticEngine.selectionEnd()},hapticImpact=options=>{hapticAvailable()&&HapticEngine.impact(options)}},"../../packages/core/dist/esm/helpers-c59bd181.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>componentOnReady,e:()=>renderHiddenInput,f:()=>clamp,g:()=>getElementRoot,h:()=>hasLazyBuild,i:()=>inheritAriaAttributes,j:()=>isEndSide,k:()=>focusElement,l:()=>assert,m:()=>debounceEvent,n:()=>getAriaLabel,o:()=>findItemLabel,p:()=>debounce,q:()=>hasShadowDom,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync,u:()=>now,v:()=>pointerCoord});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,findItemLabel=componentEl=>{const itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},focusElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},getAriaLabel=(componentEl,inputId)=>{let labelText;const labelledBy=componentEl.getAttribute("aria-labelledby"),componentId=componentEl.id;let labelId=null!==labelledBy&&""!==labelledBy.trim()?labelledBy:inputId+"-lbl",label=null!==labelledBy&&""!==labelledBy.trim()?document.getElementById(labelledBy):findItemLabel(componentEl);return label?(null===labelledBy&&(label.id=labelId),labelText=label.textContent,label.setAttribute("aria-hidden","true")):""!==componentId.trim()&&(label=document.querySelector(`label[for="${componentId}"]`),label&&(""!==label.id?labelId=label.id:label.id=labelId=`${componentId}-lbl`,labelText=label.textContent)),{label,labelId,labelText}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=ev=>ev.timeStamp||Date.now(),pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/index-24e88bd3.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>printIonError,b:()=>printRequiredElementError,p:()=>printIonWarning});const printIonWarning=(message,...params)=>console.warn(`[Ionic Warning]: ${message}`,...params),printIonError=(message,...params)=>console.error(`[Ionic Error]: ${message}`,...params),printRequiredElementError=(el,...targetSelectors)=>console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(" or ")}.`)},"../../packages/core/dist/esm/index-80cf931a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>ION_CONTENT_CLASS_SELECTOR,a:()=>findClosestIonContent,b:()=>ION_CONTENT_ELEMENT_SELECTOR,c:()=>scrollByPoint,d:()=>disableContentScrollY,f:()=>findIonContent,g:()=>getScrollElement,i:()=>isIonContent,p:()=>printIonContentErrorMsg,r:()=>resetContentScrollY,s:()=>scrollToTop});var _helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/helpers-c59bd181.js"),_index_24e88bd3_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/index-24e88bd3.js");const ION_CONTENT_ELEMENT_SELECTOR="ion-content",ION_CONTENT_CLASS_SELECTOR=".ion-content-scroll-host",ION_CONTENT_SELECTOR=`${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`,isIonContent=el=>"ION-CONTENT"===el.tagName,getScrollElement=async el=>isIonContent(el)?(await new Promise((resolve=>(0,_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_0__.d)(el,resolve))),el.getScrollElement()):el,findIonContent=el=>{const customContentHost=el.querySelector(ION_CONTENT_CLASS_SELECTOR);return customContentHost||el.querySelector(ION_CONTENT_SELECTOR)},findClosestIonContent=el=>el.closest(ION_CONTENT_SELECTOR),scrollToTop=(el,durationMs)=>{if(isIonContent(el)){return el.scrollToTop(durationMs)}return Promise.resolve(el.scrollTo({top:0,left:0,behavior:durationMs>0?"smooth":"auto"}))},scrollByPoint=(el,x,y,durationMs)=>{if(isIonContent(el)){return el.scrollByPoint(x,y,durationMs)}return Promise.resolve(el.scrollBy({top:y,left:x,behavior:durationMs>0?"smooth":"auto"}))},printIonContentErrorMsg=el=>(0,_index_24e88bd3_js__WEBPACK_IMPORTED_MODULE_1__.b)(el,ION_CONTENT_ELEMENT_SELECTOR),disableContentScrollY=contentEl=>{if(isIonContent(contentEl)){const ionContent=contentEl,initialScrollY=ionContent.scrollY;return ionContent.scrollY=!1,initialScrollY}return contentEl.style.setProperty("overflow","hidden"),!0},resetContentScrollY=(contentEl,initialScrollY)=>{isIonContent(contentEl)?contentEl.scrollY=initialScrollY:contentEl.style.removeProperty("overflow")}},"../../packages/core/dist/esm/index-938c089e.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>doc,w:()=>win});const win="undefined"!=typeof window?window:void 0,doc="undefined"!=typeof document?document:void 0},"../../packages/core/dist/esm/ion-reorder-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_reorder_group:()=>ReorderGroup});var _index_e8ebfc63_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-e8ebfc63.js"),_index_80cf931a_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/dist/esm/index-80cf931a.js"),_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/dist/esm/helpers-c59bd181.js"),_haptic_09549110_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/haptic-09549110.js"),_ionic_global_3292500c_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/ionic-global-3292500c.js");__webpack_require__("../../packages/core/dist/esm/capacitor-0e0f67bb.js"),__webpack_require__("../../packages/core/dist/esm/index-938c089e.js");const ReorderGroup=class{constructor(hostRef){(0,_index_e8ebfc63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionItemReorder=(0,_index_e8ebfc63_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionItemReorder",7),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}async connectedCallback(){const contentEl=(0,_index_80cf931a_js__WEBPACK_IMPORTED_MODULE_5__.a)(this.el);contentEl&&(this.scrollEl=await(0,_index_80cf931a_js__WEBPACK_IMPORTED_MODULE_5__.g)(contentEl)),this.gesture=(await __webpack_require__.e(8756).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/index-e65e72c8.js"))).createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:detail=>this.canStart(detail),onStart:ev=>this.onStart(ev),onMove:ev=>this.onMove(ev),onEnd:()=>this.onEnd()}),this.disabledChanged()}disconnectedCallback(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(listOrReorder){return Promise.resolve(this.completeReorder(listOrReorder))}canStart(ev){if(this.selectedItemEl||0!==this.state)return!1;const reorderEl=ev.event.target.closest("ion-reorder");if(!reorderEl)return!1;const item=findReorderItem(reorderEl,this.el);return!!item&&(ev.data=item,!0)}onStart(ev){ev.event.preventDefault();const item=this.selectedItemEl=ev.data,heights=this.cachedHeights;heights.length=0;const el=this.el,children=el.children;if(!children||0===children.length)return;let sum=0;for(let i=0;i<children.length;i++){const child=children[i];sum+=child.offsetHeight,heights.push(sum),child.$ionIndex=i}const box=el.getBoundingClientRect();if(this.containerTop=box.top,this.containerBottom=box.bottom,this.scrollEl){const scrollBox=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=scrollBox.top+AUTO_SCROLL_MARGIN,this.scrollElBottom=scrollBox.bottom-AUTO_SCROLL_MARGIN}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=indexForItem(item),this.selectedItemHeight=item.offsetHeight,this.state=1,item.classList.add(ITEM_REORDER_SELECTED),(0,_haptic_09549110_js__WEBPACK_IMPORTED_MODULE_1__.a)()}onMove(ev){const selectedItem=this.selectedItemEl;if(!selectedItem)return;const scroll=this.autoscroll(ev.currentY),top=this.containerTop-scroll,bottom=this.containerBottom-scroll,currentY=Math.max(top,Math.min(ev.currentY,bottom)),deltaY=scroll+currentY-ev.startY,normalizedY=currentY-top,toIndex=this.itemIndexForTop(normalizedY);if(toIndex!==this.lastToIndex){const fromIndex=indexForItem(selectedItem);this.lastToIndex=toIndex,(0,_haptic_09549110_js__WEBPACK_IMPORTED_MODULE_1__.b)(),this.reorderMove(fromIndex,toIndex)}selectedItem.style.transform=`translateY(${deltaY}px)`}onEnd(){const selectedItemEl=this.selectedItemEl;if(this.state=2,!selectedItemEl)return void(this.state=0);const toIndex=this.lastToIndex,fromIndex=indexForItem(selectedItemEl);toIndex===fromIndex?this.completeReorder():this.ionItemReorder.emit({from:fromIndex,to:toIndex,complete:this.completeReorder.bind(this)}),(0,_haptic_09549110_js__WEBPACK_IMPORTED_MODULE_1__.c)()}completeReorder(listOrReorder){const selectedItemEl=this.selectedItemEl;if(selectedItemEl&&2===this.state){const children=this.el.children,len=children.length,toIndex=this.lastToIndex,fromIndex=indexForItem(selectedItemEl);(0,_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_6__.r)((()=>{if(toIndex!==fromIndex&&(void 0===listOrReorder||!0===listOrReorder)){const ref=fromIndex<toIndex?children[toIndex+1]:children[toIndex];this.el.insertBefore(selectedItemEl,ref)}for(let i=0;i<len;i++)children[i].style.transform=""})),Array.isArray(listOrReorder)&&(listOrReorder=reorderArray(listOrReorder,fromIndex,toIndex)),selectedItemEl.style.transition="",selectedItemEl.classList.remove(ITEM_REORDER_SELECTED),this.selectedItemEl=void 0,this.state=0}return listOrReorder}itemIndexForTop(deltaY){const heights=this.cachedHeights;for(let i=0;i<heights.length;i++)if(heights[i]>deltaY)return i;return heights.length-1}reorderMove(fromIndex,toIndex){const itemHeight=this.selectedItemHeight,children=this.el.children;for(let i=0;i<children.length;i++){let value="";i>fromIndex&&i<=toIndex?value=`translateY(${-itemHeight}px)`:i<fromIndex&&i>=toIndex&&(value=`translateY(${itemHeight}px)`),children[i].style.transform=value}}autoscroll(posY){if(!this.scrollEl)return 0;let amount=0;return posY<this.scrollElTop?amount=-SCROLL_JUMP:posY>this.scrollElBottom&&(amount=SCROLL_JUMP),0!==amount&&this.scrollEl.scrollBy(0,amount),this.scrollEl.scrollTop-this.scrollElInitial}render(){const mode=(0,_ionic_global_3292500c_js__WEBPACK_IMPORTED_MODULE_2__.g)(this);return(0,_index_e8ebfc63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_e8ebfc63_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[mode]:!0,"reorder-enabled":!this.disabled,"reorder-list-active":0!==this.state}})}get el(){return(0,_index_e8ebfc63_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{disabled:["disabledChanged"]}}},indexForItem=element=>element.$ionIndex,findReorderItem=(node,container)=>{let parent;for(;node;){if(parent=node.parentElement,parent===container)return node;node=parent}},AUTO_SCROLL_MARGIN=60,SCROLL_JUMP=10,ITEM_REORDER_SELECTED="reorder-selected",reorderArray=(array,from,to)=>{const element=array[from];return array.splice(from,1),array.splice(to,0,element),array.slice()};ReorderGroup.style=".reorder-list-active>*{display:block;transition:transform 300ms;will-change:transform}.reorder-enabled{user-select:none}.reorder-enabled ion-reorder{display:block;cursor:grab;pointer-events:all;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:grabbing}.reorder-selected{position:relative;transition:none !important;box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{transform:translate3d(0,  0,  0)}"}}]);
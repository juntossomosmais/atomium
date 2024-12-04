/*! For license information please see 7453.1efcad94.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[7453],{"../../packages/core/dist/esm/dir-861e8ef7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>isRTL});const isRTL=hostEl=>hostEl&&""!==hostEl.dir?"rtl"===hostEl.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase())},"../../packages/core/dist/esm/helpers-b14eeb70.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>renderHiddenInput,e:()=>componentOnReady,f:()=>clamp,g:()=>getElementRoot,h:()=>isEndSide,i:()=>inheritAriaAttributes,j:()=>focusVisibleElement,k:()=>assert,l:()=>debounceEvent,m:()=>debounce,n:()=>hasLazyBuild,o:()=>hasShadowDom,p:()=>pointerCoord,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{void 0!==animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,focusVisibleElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/ion-segment.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_segment:()=>Segment});var _index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-6d0a42e8.js"),_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/helpers-b14eeb70.js"),_dir_861e8ef7_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/dir-861e8ef7.js"),_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/dist/esm/theme-516b22d6.js"),_ionic_global_ec5a1fee_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-ec5a1fee.js");const Segment=class{constructor(hostRef){(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionChange=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionChange",7),this.ionSelect=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionSelect",7),this.ionStyle=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionStyle",7),this.segmentViewEl=null,this.onClick=ev=>{const current=ev.target,previous=this.checked;"ION-SEGMENT"!==current.tagName&&(this.value=current.value,current!==previous&&this.emitValueChange(),this.segmentViewEl?(this.updateSegmentView(),this.scrollable&&previous&&this.checkButton(previous,current)):!this.scrollable&&this.swipeGesture||(previous?this.checkButton(previous,current):this.setCheckedClasses()))},this.onSlottedItemsChange=()=>{this.valueChanged(this.value)},this.getSegmentButton=selector=>{var _a,_b;const buttons=this.getButtons().filter((button=>!button.disabled)),currIndex=buttons.findIndex((button=>button===document.activeElement));switch(selector){case"first":return buttons[0];case"last":return buttons[buttons.length-1];case"next":return null!==(_a=buttons[currIndex+1])&&void 0!==_a?_a:buttons[0];case"previous":return null!==(_b=buttons[currIndex-1])&&void 0!==_b?_b:buttons[buttons.length-1];default:return null}},this.activated=!1,this.color=void 0,this.disabled=!1,this.scrollable=!1,this.swipeGesture=!0,this.value=void 0,this.selectOnFocus=!1}colorChanged(value,oldValue){(void 0===oldValue&&void 0!==value||void 0!==oldValue&&void 0===value)&&this.emitStyle()}swipeGestureChanged(){this.gestureChanged()}valueChanged(value,oldValue){if(this.segmentViewEl&&void 0===value)this.value=this.getButtons()[0].value;else{if(void 0!==oldValue&&void 0!==value){const buttons=this.getButtons(),previous=buttons.find((button=>button.value===oldValue)),current=buttons.find((button=>button.value===value));previous&&current&&(this.segmentViewEl?!1!==this.triggerScrollOnValueChange&&this.updateSegmentView():this.checkButton(previous,current))}else void 0!==value&&void 0===oldValue&&this.segmentViewEl&&this.updateSegmentView();this.ionSelect.emit({value}),this.segmentViewEl||this.scrollActiveButtonIntoView(),this.triggerScrollOnValueChange=void 0}}disabledChanged(){if(this.gestureChanged(),this.segmentViewEl)this.segmentViewEl.disabled=this.disabled;else{const buttons=this.getButtons();for(const button of buttons)button.disabled=this.disabled}}gestureChanged(){this.gesture&&this.gesture.enable(!this.scrollable&&!this.disabled&&this.swipeGesture)}connectedCallback(){this.emitStyle(),this.segmentViewEl=this.getSegmentView()}disconnectedCallback(){this.segmentViewEl=null}componentWillLoad(){this.emitStyle()}async componentDidLoad(){this.setCheckedClasses(),(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_2__.r)((()=>{this.scrollActiveButtonIntoView(!1)})),this.gesture=(await __webpack_require__.e(4681).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/index-0fc64123.js"))).createGesture({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:!1,onStart:ev=>this.onStart(ev),onMove:ev=>this.onMove(ev),onEnd:ev=>this.onEnd(ev)}),this.gestureChanged(),this.disabled&&this.disabledChanged(),this.updateSegmentView(!1)}onStart(detail){this.valueBeforeGesture=this.value,this.activate(detail)}onMove(detail){this.setNextIndex(detail)}onEnd(detail){this.setActivated(!1),this.setNextIndex(detail,!0),detail.event.stopImmediatePropagation();const value=this.value;void 0!==value&&this.valueBeforeGesture!==value&&(this.emitValueChange(),this.updateSegmentView()),this.valueBeforeGesture=void 0}emitValueChange(){const{value}=this;this.ionChange.emit({value})}getButtons(){return Array.from(this.el.querySelectorAll("ion-segment-button"))}get checked(){return this.getButtons().find((button=>button.value===this.value))}setActivated(activated){this.getButtons().forEach((button=>{button.classList.toggle("segment-button-activated",activated)})),this.activated=activated}activate(detail){const clicked=detail.event.target,checked=this.getButtons().find((button=>button.value===this.value));"ION-SEGMENT-BUTTON"===clicked.tagName&&(checked||(this.value=clicked.value,this.setCheckedClasses()),this.value===clicked.value&&this.setActivated(!0))}getIndicator(button){return(button.shadowRoot||button).querySelector(".segment-button-indicator")}checkButton(previous,current){const previousIndicator=this.getIndicator(previous),currentIndicator=this.getIndicator(current);if(null===previousIndicator||null===currentIndicator)return;const previousClientRect=previousIndicator.getBoundingClientRect(),currentClientRect=currentIndicator.getBoundingClientRect(),widthDelta=previousClientRect.width/currentClientRect.width,transform=`translate3d(${previousClientRect.left-currentClientRect.left}px, 0, 0) scaleX(${widthDelta})`;(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.w)((()=>{currentIndicator.classList.remove("segment-button-indicator-animated"),currentIndicator.style.setProperty("transform",transform),currentIndicator.getBoundingClientRect(),currentIndicator.classList.add("segment-button-indicator-animated"),currentIndicator.style.setProperty("transform",""),this.scrollActiveButtonIntoView(!0)})),this.value=current.value,this.setCheckedClasses()}setCheckedClasses(){const buttons=this.getButtons(),next=buttons.findIndex((button=>button.value===this.value))+1;for(const button of buttons)button.classList.remove("segment-button-after-checked");next<buttons.length&&buttons[next].classList.add("segment-button-after-checked")}getSegmentView(){const firstContentId=this.getButtons().find((button=>button.contentId)),segmentContent=document.querySelector(`ion-segment-content[id="${null==firstContentId?void 0:firstContentId.contentId}"]`);return null==segmentContent?void 0:segmentContent.closest("ion-segment-view")}handleSegmentViewScroll(ev){const{scrollRatio,isManualScroll}=ev.detail;if(!isManualScroll)return;const dispatchedFrom=ev.target,segmentViewEl=this.segmentViewEl,segmentEl=this.el;if(ev.composedPath().includes(segmentViewEl)||(null==dispatchedFrom?void 0:dispatchedFrom.contains(segmentEl))){const buttons=this.getButtons();if(!buttons.length)return;const index=buttons.findIndex((button=>button.value===this.value)),current=buttons[index],nextIndex=Math.round(scrollRatio*(buttons.length-1));void 0!==this.lastNextIndex&&this.lastNextIndex===nextIndex||(this.lastNextIndex=nextIndex,this.triggerScrollOnValueChange=!1,this.checkButton(current,buttons[nextIndex]),this.emitValueChange())}}updateSegmentView(smoothScroll=!0){const button=this.getButtons().find((btn=>btn.value===this.value));if(!(null==button?void 0:button.contentId))return;const segmentView=this.segmentViewEl;segmentView&&segmentView.setContent(button.contentId,smoothScroll)}scrollActiveButtonIntoView(smoothScroll=!0){const{scrollable,value,el}=this;if(scrollable){const activeButton=this.getButtons().find((button=>button.value===value));if(void 0!==activeButton){const scrollContainerBox=el.getBoundingClientRect(),activeButtonBox=activeButton.getBoundingClientRect(),centeredX=activeButtonBox.x-scrollContainerBox.x-scrollContainerBox.width/2+activeButtonBox.width/2,newScrollPosition=el.scrollLeft+centeredX;el.scrollTo({top:0,left:newScrollPosition,behavior:smoothScroll?"smooth":"instant"})}}}setNextIndex(detail,isEnd=!1){const rtl=(0,_dir_861e8ef7_js__WEBPACK_IMPORTED_MODULE_3__.i)(this.el),activated=this.activated,buttons=this.getButtons(),index=buttons.findIndex((button=>button.value===this.value)),previous=buttons[index];let current,nextIndex;if(-1===index)return;const rect=previous.getBoundingClientRect(),left=rect.left,width=rect.width,currentX=detail.currentX,previousY=rect.top+rect.height/2,nextEl=this.el.getRootNode().elementFromPoint(currentX,previousY);if(activated&&!isEnd){if(rtl?currentX>left+width:currentX<left){const newIndex=index-1;newIndex>=0&&(nextIndex=newIndex)}else if((rtl?currentX<left:currentX>left+width)&&activated&&!isEnd){const newIndex=index+1;newIndex<buttons.length&&(nextIndex=newIndex)}void 0===nextIndex||buttons[nextIndex].disabled||(current=buttons[nextIndex])}if(!activated&&isEnd&&(current=nextEl),null!=current){if("ION-SEGMENT"===current.tagName)return!1;previous!==current&&this.checkButton(previous,current)}return!0}emitStyle(){this.ionStyle.emit({segment:!0})}onKeyDown(ev){const rtl=(0,_dir_861e8ef7_js__WEBPACK_IMPORTED_MODULE_3__.i)(this.el);let current,keyDownSelectsButton=this.selectOnFocus;switch(ev.key){case"ArrowRight":ev.preventDefault(),current=rtl?this.getSegmentButton("previous"):this.getSegmentButton("next");break;case"ArrowLeft":ev.preventDefault(),current=rtl?this.getSegmentButton("next"):this.getSegmentButton("previous");break;case"Home":ev.preventDefault(),current=this.getSegmentButton("first");break;case"End":ev.preventDefault(),current=this.getSegmentButton("last");break;case" ":case"Enter":ev.preventDefault(),current=document.activeElement,keyDownSelectsButton=!0}if(current){if(keyDownSelectsButton){const previous=this.checked;this.checkButton(previous||current,current),current!==previous&&this.emitValueChange()}current.setFocus()}}render(){const mode=(0,_ionic_global_ec5a1fee_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"66bd7a565ba73540b3bbe56dd23b95e59bcef9bc",role:"tablist",onClick:this.onClick,class:(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_4__.c)(this.color,{[mode]:!0,"in-toolbar":(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_4__.h)("ion-toolbar",this.el),"in-toolbar-color":(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_4__.h)("ion-toolbar[color]",this.el),"segment-activated":this.activated,"segment-disabled":this.disabled,"segment-scrollable":this.scrollable})},(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"782c521b1a33729b8eab1c4b879bc3f2ff48ae1b",onSlotchange:this.onSlottedItemsChange}))}get el(){return(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{color:["colorChanged"],swipeGesture:["swipeGestureChanged"],value:["valueChanged"],disabled:["disabledChanged"]}}};Segment.style={ios:":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:grid;grid-auto-columns:1fr;position:relative;align-items:stretch;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;user-select:none}:host(.segment-scrollable){justify-content:start;width:auto;overflow-x:auto;grid-auto-columns:minmax(min-content, 1fr)}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.065)}:host(.in-toolbar){-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:auto}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb), 0.11)}",md:":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:grid;grid-auto-columns:1fr;position:relative;align-items:stretch;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;user-select:none}:host(.segment-scrollable){justify-content:start;width:auto;overflow-x:auto;grid-auto-columns:minmax(min-content, 1fr)}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent;grid-auto-columns:minmax(auto, 360px)}:host(.in-toolbar){min-height:var(--min-height)}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:auto}"}},"../../packages/core/dist/esm/theme-516b22d6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
/*! For license information please see 325.e2c2e69c.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[325],{"../../packages/core/dist/esm/haptic-4424aedf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>hapticSelectionStart,b:()=>hapticSelectionChanged,c:()=>hapticSelectionEnd,d:()=>hapticSelection,h:()=>hapticImpact});const HapticEngine={getEngine(){var _a;const win=window;return win.TapticEngine||(null===(_a=win.Capacitor)||void 0===_a?void 0:_a.isPluginAvailable("Haptics"))&&win.Capacitor.Plugins.Haptics},available(){var _a;const win=window;return!!this.getEngine()&&("web"!==(null===(_a=win.Capacitor)||void 0===_a?void 0:_a.getPlatform())||"undefined"!=typeof navigator&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(options){const engine=this.getEngine();if(!engine)return;const style=this.isCapacitor()?options.style.toUpperCase():options.style;engine.impact({style})},notification(options){const engine=this.getEngine();if(!engine)return;const style=this.isCapacitor()?options.style.toUpperCase():options.style;engine.notification({style})},selection(){this.impact({style:"light"})},selectionStart(){const engine=this.getEngine();engine&&(this.isCapacitor()?engine.selectionStart():engine.gestureSelectionStart())},selectionChanged(){const engine=this.getEngine();engine&&(this.isCapacitor()?engine.selectionChanged():engine.gestureSelectionChanged())},selectionEnd(){const engine=this.getEngine();engine&&(this.isCapacitor()?engine.selectionEnd():engine.gestureSelectionEnd())}},hapticAvailable=()=>HapticEngine.available(),hapticSelection=()=>{hapticAvailable()&&HapticEngine.selection()},hapticSelectionStart=()=>{hapticAvailable()&&HapticEngine.selectionStart()},hapticSelectionChanged=()=>{hapticAvailable()&&HapticEngine.selectionChanged()},hapticSelectionEnd=()=>{hapticAvailable()&&HapticEngine.selectionEnd()},hapticImpact=options=>{hapticAvailable()&&HapticEngine.impact(options)}},"../../packages/core/dist/esm/helpers-13791ab7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>componentOnReady,e:()=>renderHiddenInput,f:()=>clamp,g:()=>getElementRoot,h:()=>isEndSide,i:()=>inheritAriaAttributes,j:()=>focusElement,k:()=>assert,l:()=>hasLazyBuild,m:()=>debounceEvent,n:()=>getAriaLabel,o:()=>findItemLabel,p:()=>debounce,q:()=>hasShadowDom,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync,u:()=>now,v:()=>pointerCoord});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,findItemLabel=componentEl=>{const itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},focusElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},getAriaLabel=(componentEl,inputId)=>{let labelText;const labelledBy=componentEl.getAttribute("aria-labelledby"),componentId=componentEl.id;let labelId=null!==labelledBy&&""!==labelledBy.trim()?labelledBy:inputId+"-lbl",label=null!==labelledBy&&""!==labelledBy.trim()?document.getElementById(labelledBy):findItemLabel(componentEl);return label?(null===labelledBy&&(label.id=labelId),labelText=label.textContent,label.setAttribute("aria-hidden","true")):""!==componentId.trim()&&(label=document.querySelector(`label[for="${componentId}"]`),label&&(""!==label.id?labelId=label.id:label.id=labelId=`${componentId}-lbl`,labelText=label.textContent)),{label,labelId,labelText}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=ev=>ev.timeStamp||Date.now(),pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/ion-buttons_3.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_buttons:()=>Buttons,ion_picker_column_internal:()=>PickerColumnInternal,ion_picker_internal:()=>PickerInternal});var _index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-43ce1e25.js"),_ionic_global_c15c51af_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-c15c51af.js"),_helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/helpers-13791ab7.js"),_haptic_4424aedf_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/haptic-4424aedf.js"),_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/dist/esm/theme-bc7eaa70.js");const Buttons=class{constructor(hostRef){(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.collapse=!1}render(){const mode=(0,_ionic_global_c15c51af_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{[mode]:!0,"buttons-collapse":this.collapse}})}};Buttons.style={ios:".sc-ion-buttons-ios-h{display:flex;align-items:center;transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-ios-s ion-button{--padding-start:5px;--padding-end:5px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;height:32px}.sc-ion-buttons-ios-s ion-button:not(.button-round){--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button{--color:initial;--border-color:initial;--background-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-solid,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-solid{--background:var(--ion-color-contrast);--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12;--background-hover:var(--ion-color-base);--background-hover-opacity:0.45;--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-clear,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-clear{--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-outline,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-outline{--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast);--background-activated:var(--ion-color-contrast)}.sc-ion-buttons-ios-s .button-clear,.sc-ion-buttons-ios-s .button-outline{--background-activated:transparent;--background-focused:currentColor;--background-hover:transparent}.sc-ion-buttons-ios-s .button-solid:not(.ion-color){--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12}.sc-ion-buttons-ios-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:24px;line-height:0.67}.sc-ion-buttons-ios-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-start:0.4em;margin-inline-start:0.4em;font-size:24px;line-height:0.67}.sc-ion-buttons-ios-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:28px;line-height:0.67}",md:".sc-ion-buttons-md-h{display:flex;align-items:center;transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;height:32px}.sc-ion-buttons-md-s ion-button:not(.button-round){--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button{--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-contrast);--background-hover:var(--ion-color-contrast)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-solid,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-solid{--background:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-base);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-outline,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-outline{--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s .button-has-icon-only.button-clear{--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s .button{--background-hover:currentColor}.sc-ion-buttons-md-s .button-solid{--color:var(--ion-toolbar-background, var(--ion-background-color, #fff));--background:var(--ion-toolbar-color, var(--ion-text-color, #424242));--background-activated:transparent;--background-focused:currentColor}.sc-ion-buttons-md-s .button-outline{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--border-color:currentColor}.sc-ion-buttons-md-s .button-clear{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor}.sc-ion-buttons-md-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:1.4em}.sc-ion-buttons-md-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-start:0.4em;margin-inline-start:0.4em;font-size:1.4em}.sc-ion-buttons-md-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}"};const PickerColumnInternal=class{constructor(hostRef){(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionChange=(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionChange",7),this.isScrolling=!1,this.isColumnVisible=!1,this.canExitInputMode=!0,this.centerPickerItemInView=(target,smooth=!0,canExitInputMode=!0)=>{const{el,isColumnVisible}=this;if(isColumnVisible){const top=target.offsetTop-3*target.clientHeight+target.clientHeight/2;el.scrollTop!==top&&(this.canExitInputMode=canExitInputMode,el.scroll({top,left:0,behavior:smooth?"smooth":void 0}))}},this.inputModeChange=ev=>{if(!this.numericInput)return;const{useInputMode,inputModeColumn}=ev.detail,isColumnActive=void 0===inputModeColumn||inputModeColumn===this.el;useInputMode&&isColumnActive?this.setInputModeActive(!0):this.setInputModeActive(!1)},this.setInputModeActive=state=>{this.isScrolling?this.scrollEndCallback=()=>{this.isActive=state}:this.isActive=state},this.initializeScrollListener=()=>{const enableHaptics=(0,_ionic_global_c15c51af_js__WEBPACK_IMPORTED_MODULE_1__.a)("ios"),{el}=this;let timeout,activeEl=this.activeItem;const scrollCallback=()=>{(0,_helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_3__.r)((()=>{timeout&&(clearTimeout(timeout),timeout=void 0),this.isScrolling||(enableHaptics&&(0,_haptic_4424aedf_js__WEBPACK_IMPORTED_MODULE_2__.a)(),this.isScrolling=!0);const bbox=el.getBoundingClientRect(),centerX=bbox.x+bbox.width/2,centerY=bbox.y+bbox.height/2,activeElement=el.shadowRoot.elementFromPoint(centerX,centerY);null!==activeEl&&activeEl.classList.remove(PICKER_COL_ACTIVE),null===activeElement||activeElement.disabled||(activeElement!==activeEl&&(enableHaptics&&(0,_haptic_4424aedf_js__WEBPACK_IMPORTED_MODULE_2__.b)(),this.canExitInputMode&&this.exitInputMode()),activeEl=activeElement,activeElement.classList.add(PICKER_COL_ACTIVE),timeout=setTimeout((()=>{this.isScrolling=!1,enableHaptics&&(0,_haptic_4424aedf_js__WEBPACK_IMPORTED_MODULE_2__.c)();const{scrollEndCallback}=this;scrollEndCallback&&(scrollEndCallback(),this.scrollEndCallback=void 0),this.canExitInputMode=!0;const dataIndex=activeElement.getAttribute("data-index");if(null===dataIndex)return;const index=parseInt(dataIndex,10),selectedItem=this.items[index];selectedItem.value!==this.value&&this.setValue(selectedItem.value)}),250))}))};(0,_helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_3__.r)((()=>{el.addEventListener("scroll",scrollCallback),this.destroyScrollListener=()=>{el.removeEventListener("scroll",scrollCallback)}}))},this.exitInputMode=()=>{const{parentEl}=this;null!=parentEl&&(parentEl.exitInputMode(),this.el.classList.remove("picker-column-active"))},this.isActive=!1,this.items=[],this.value=void 0,this.color="primary",this.numericInput=!1}valueChange(){this.isColumnVisible&&this.scrollActiveItemIntoView()}componentWillLoad(){new IntersectionObserver((entries=>{var _a;if(entries[0].isIntersecting){this.isColumnVisible=!0;const oldActive=(0,_helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_3__.g)(this.el).querySelector(`.${PICKER_COL_ACTIVE}`);null==oldActive||oldActive.classList.remove(PICKER_COL_ACTIVE),this.scrollActiveItemIntoView(),null===(_a=this.activeItem)||void 0===_a||_a.classList.add(PICKER_COL_ACTIVE),this.initializeScrollListener()}else this.isColumnVisible=!1,this.destroyScrollListener&&(this.destroyScrollListener(),this.destroyScrollListener=void 0)}),{threshold:.001}).observe(this.el);const parentEl=this.parentEl=this.el.closest("ion-picker-internal");null!==parentEl&&parentEl.addEventListener("ionInputModeChange",(ev=>this.inputModeChange(ev)))}componentDidRender(){var _a;const{activeItem,items,isColumnVisible,value}=this;isColumnVisible&&(activeItem?this.scrollActiveItemIntoView():(null===(_a=items[0])||void 0===_a?void 0:_a.value)!==value&&this.setValue(items[0].value))}async scrollActiveItemIntoView(){const activeEl=this.activeItem;activeEl&&this.centerPickerItemInView(activeEl,!1,!1)}async setValue(value){const{items}=this;this.value=value;const findItem=items.find((item=>item.value===value&&!0!==item.disabled));findItem&&this.ionChange.emit(findItem)}get activeItem(){return(0,_helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_3__.g)(this.el).querySelector(`.picker-item[data-value="${this.value}"]:not([disabled])`)}render(){const{items,color,isActive,numericInput}=this,mode=(0,_ionic_global_c15c51af_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.H,{tabindex:0,class:(0,_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_4__.c)(color,{[mode]:!0,"picker-column-active":isActive,"picker-column-numeric-input":numericInput})},(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"picker-item picker-item-empty","aria-hidden":"true"}," "),(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"picker-item picker-item-empty","aria-hidden":"true"}," "),(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"picker-item picker-item-empty","aria-hidden":"true"}," "),items.map(((item,index)=>(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{tabindex:"-1",class:{"picker-item":!0,"picker-item-disabled":item.disabled||!1},"data-value":item.value,"data-index":index,onClick:ev=>{this.centerPickerItemInView(ev.target,!0)},disabled:item.disabled},item.text))),(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"picker-item picker-item-empty","aria-hidden":"true"}," "),(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"picker-item picker-item-empty","aria-hidden":"true"}," "),(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"picker-item picker-item-empty","aria-hidden":"true"}," "))}get el(){return(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{value:["valueChange"]}}},PICKER_COL_ACTIVE="picker-item-active";PickerColumnInternal.style={ios:":host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}:host::-webkit-scrollbar{display:none}:host .picker-item{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty,:host .picker-item.picker-item-disabled{scroll-snap-align:none;cursor:default}:host .picker-item.picker-item-disabled{opacity:0.4}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}",md:":host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}:host::-webkit-scrollbar{display:none}:host .picker-item{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty,:host .picker-item.picker-item-disabled{scroll-snap-align:none;cursor:default}:host .picker-item.picker-item-disabled{opacity:0.4}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}:host .picker-item-active{color:var(--ion-color-base)}"};const PickerInternal=class{constructor(hostRef){(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionInputModeChange=(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionInputModeChange",7),this.useInputMode=!1,this.isInHighlightBounds=ev=>{const{highlightEl}=this;if(!highlightEl)return!1;const bbox=highlightEl.getBoundingClientRect(),outsideX=ev.clientX<bbox.left||ev.clientX>bbox.right,outsideY=ev.clientY<bbox.top||ev.clientY>bbox.bottom;return!outsideX&&!outsideY},this.onFocusOut=ev=>{const{relatedTarget}=ev;(!relatedTarget||"ION-PICKER-COLUMN-INTERNAL"!==relatedTarget.tagName&&relatedTarget!==this.inputEl)&&this.exitInputMode()},this.onFocusIn=ev=>{const{target}=ev;if("ION-PICKER-COLUMN-INTERNAL"===target.tagName&&!this.actionOnClick){const columnEl=target;columnEl.numericInput?this.enterInputMode(columnEl,!1):this.exitInputMode()}},this.onClick=()=>{const{actionOnClick}=this;actionOnClick&&(actionOnClick(),this.actionOnClick=void 0)},this.onPointerDown=ev=>{const{useInputMode,inputModeColumn,el}=this;if(this.isInHighlightBounds(ev))if(useInputMode)"ION-PICKER-COLUMN-INTERNAL"===ev.target.tagName?inputModeColumn&&inputModeColumn===ev.target?this.actionOnClick=()=>{this.enterInputMode()}:this.actionOnClick=()=>{this.enterInputMode(ev.target)}:this.actionOnClick=()=>{this.exitInputMode()};else{const columnEl=1===el.querySelectorAll("ion-picker-column-internal.picker-column-numeric-input").length?ev.target:void 0;this.actionOnClick=()=>{this.enterInputMode(columnEl)}}else this.actionOnClick=()=>{this.exitInputMode()}},this.enterInputMode=(columnEl,focusInput=!0)=>{const{inputEl,el}=this;if(!inputEl)return;el.querySelector("ion-picker-column-internal.picker-column-numeric-input")&&(this.useInputMode=!0,this.inputModeColumn=columnEl,focusInput?(this.destroyKeypressListener&&(this.destroyKeypressListener(),this.destroyKeypressListener=void 0),inputEl.focus()):(el.addEventListener("keypress",this.onKeyPress),this.destroyKeypressListener=()=>{el.removeEventListener("keypress",this.onKeyPress)}),this.emitInputModeChange())},this.onKeyPress=ev=>{const{inputEl}=this;if(!inputEl)return;const parsedValue=parseInt(ev.key,10);Number.isNaN(parsedValue)||(inputEl.value+=ev.key,this.onInputChange())},this.selectSingleColumn=()=>{const{inputEl,inputModeColumn,singleColumnSearchTimeout}=this;if(!inputEl||!inputModeColumn)return;const values=inputModeColumn.items.filter((item=>!0!==item.disabled));if(singleColumnSearchTimeout&&clearTimeout(singleColumnSearchTimeout),this.singleColumnSearchTimeout=setTimeout((()=>{inputEl.value="",this.singleColumnSearchTimeout=void 0}),1e3),inputEl.value.length>=3){const startIndex=inputEl.value.length-2,newString=inputEl.value.substring(startIndex);return inputEl.value=newString,void this.selectSingleColumn()}const findItemFromCompleteValue=values.find((({text})=>text.replace(/^0+(?=[1-9])|0+(?=0$)/,"")===inputEl.value));if(findItemFromCompleteValue)inputModeColumn.setValue(findItemFromCompleteValue.value);else if(2===inputEl.value.length){const changedCharacter=inputEl.value.substring(inputEl.value.length-1);inputEl.value=changedCharacter,this.selectSingleColumn()}},this.searchColumn=(colEl,value,zeroBehavior="start")=>{const behavior="start"===zeroBehavior?/^0+/:/0$/,item=colEl.items.find((({text,disabled})=>!0!==disabled&&text.replace(behavior,"")===value));item&&colEl.setValue(item.value)},this.selectMultiColumn=()=>{const{inputEl,el}=this;if(!inputEl)return;const numericPickers=Array.from(el.querySelectorAll("ion-picker-column-internal")).filter((col=>col.numericInput)),firstColumn=numericPickers[0],lastColumn=numericPickers[1];let minuteValue,value=inputEl.value;switch(value.length){case 1:this.searchColumn(firstColumn,value);break;case 2:const firstCharacter=inputEl.value.substring(0,1);value="0"===firstCharacter||"1"===firstCharacter?inputEl.value:firstCharacter,this.searchColumn(firstColumn,value),1===value.length&&(minuteValue=inputEl.value.substring(inputEl.value.length-1),this.searchColumn(lastColumn,minuteValue,"end"));break;case 3:const firstCharacterAgain=inputEl.value.substring(0,1);value="0"===firstCharacterAgain||"1"===firstCharacterAgain?inputEl.value.substring(0,2):firstCharacterAgain,this.searchColumn(firstColumn,value),minuteValue=1===value.length?inputEl.value.substring(1):inputEl.value.substring(2),this.searchColumn(lastColumn,minuteValue,"end");break;case 4:const firstCharacterAgainAgain=inputEl.value.substring(0,1);value="0"===firstCharacterAgainAgain||"1"===firstCharacterAgainAgain?inputEl.value.substring(0,2):firstCharacterAgainAgain,this.searchColumn(firstColumn,value);const minuteValueAgain=1===value.length?inputEl.value.substring(1,inputEl.value.length):inputEl.value.substring(2,inputEl.value.length);this.searchColumn(lastColumn,minuteValueAgain,"end");break;default:const startIndex=inputEl.value.length-4,newString=inputEl.value.substring(startIndex);inputEl.value=newString,this.selectMultiColumn()}},this.onInputChange=()=>{const{useInputMode,inputEl,inputModeColumn}=this;useInputMode&&inputEl&&(inputModeColumn?this.selectSingleColumn():this.selectMultiColumn())},this.emitInputModeChange=()=>{const{useInputMode,inputModeColumn}=this;this.ionInputModeChange.emit({useInputMode,inputModeColumn})}}preventTouchStartPropagation(ev){ev.stopPropagation()}componentWillLoad(){(0,_helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_3__.g)(this.el).addEventListener("focusin",this.onFocusIn),(0,_helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_3__.g)(this.el).addEventListener("focusout",this.onFocusOut)}async exitInputMode(){const{inputEl,useInputMode}=this;useInputMode&&inputEl&&(this.useInputMode=!1,this.inputModeColumn=void 0,inputEl.blur(),inputEl.value="",this.destroyKeypressListener&&(this.destroyKeypressListener(),this.destroyKeypressListener=void 0),this.emitInputModeChange())}render(){return(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.H,{onPointerDown:ev=>this.onPointerDown(ev),onClick:()=>this.onClick()},(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{"aria-hidden":"true",tabindex:-1,inputmode:"numeric",type:"number",ref:el=>this.inputEl=el,onInput:()=>this.onInputChange(),onBlur:()=>this.exitInputMode()}),(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"picker-before"}),(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"picker-after"}),(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"picker-highlight",ref:el=>this.highlightEl=el}),(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}get el(){return(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}};PickerInternal.style={ios:":host{display:flex;position:relative;align-items:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}@supports (inset-inline-start: 0){:host .picker-before{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host .picker-before{left:0}:host-context([dir=rtl]) .picker-before{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host .picker-before:dir(rtl){left:unset;right:unset;right:0}}}:host .picker-after{top:116px;height:84px}@supports (inset-inline-start: 0){:host .picker-after{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host .picker-after{left:0}:host-context([dir=rtl]) .picker-after{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host .picker-after:dir(rtl){left:unset;right:unset;right:0}}}:host .picker-highlight{border-radius:8px;left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;transform:translateY(-50%);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column-internal:first-of-type){text-align:start}:host ::slotted(ion-picker-column-internal:last-of-type){text-align:end}:host ::slotted(ion-picker-column-internal:only-child){text-align:center}:host .picker-before{background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%)}:host .picker-after{background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%)}:host .picker-highlight{background:var(--ion-color-step-150, #eeeeef)}",md:":host{display:flex;position:relative;align-items:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}@supports (inset-inline-start: 0){:host .picker-before{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host .picker-before{left:0}:host-context([dir=rtl]) .picker-before{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host .picker-before:dir(rtl){left:unset;right:unset;right:0}}}:host .picker-after{top:116px;height:84px}@supports (inset-inline-start: 0){:host .picker-after{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host .picker-after{left:0}:host-context([dir=rtl]) .picker-after{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host .picker-after:dir(rtl){left:unset;right:unset;right:0}}}:host .picker-highlight{border-radius:8px;left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;transform:translateY(-50%);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column-internal:first-of-type){text-align:start}:host ::slotted(ion-picker-column-internal:last-of-type){text-align:end}:host ::slotted(ion-picker-column-internal:only-child){text-align:center}:host .picker-before{background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0) 90%)}:host .picker-after{background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0) 90%)}"}},"../../packages/core/dist/esm/theme-bc7eaa70.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
/*! For license information please see 1841.47d5b3df.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[1841],{"../../packages/core/dist/esm/dir-861e8ef7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>isRTL});const isRTL=hostEl=>hostEl&&""!==hostEl.dir?"rtl"===hostEl.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase())},"../../packages/core/dist/esm/helpers-4047ce7f.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>clamp,e:()=>componentOnReady,f:()=>isEndSide,g:()=>getElementRoot,h:()=>focusVisibleElement,i:()=>inheritAriaAttributes,j:()=>assert,k:()=>debounceEvent,l:()=>renderHiddenInput,m:()=>debounce,n:()=>hasLazyBuild,o:()=>hasShadowDom,p:()=>pointerCoord,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{void 0!==animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,focusVisibleElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/index-1e38abc5.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>printRequiredElementError,b:()=>printIonError,p:()=>printIonWarning});const printIonWarning=(message,...params)=>console.warn(`[Ionic Warning]: ${message}`,...params),printIonError=(message,...params)=>console.error(`[Ionic Error]: ${message}`,...params),printRequiredElementError=(el,...targetSelectors)=>console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(" or ")}.`)},"../../packages/core/dist/esm/index-c0cf4f1b.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>ION_CONTENT_CLASS_SELECTOR,a:()=>findClosestIonContent,b:()=>ION_CONTENT_ELEMENT_SELECTOR,c:()=>scrollByPoint,d:()=>disableContentScrollY,f:()=>findIonContent,g:()=>getScrollElement,i:()=>isIonContent,p:()=>printIonContentErrorMsg,r:()=>resetContentScrollY,s:()=>scrollToTop});var _helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/helpers-4047ce7f.js"),_index_1e38abc5_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/index-1e38abc5.js");const ION_CONTENT_ELEMENT_SELECTOR="ion-content",ION_CONTENT_CLASS_SELECTOR=".ion-content-scroll-host",ION_CONTENT_SELECTOR=`${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`,isIonContent=el=>"ION-CONTENT"===el.tagName,getScrollElement=async el=>isIonContent(el)?(await new Promise((resolve=>(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_0__.e)(el,resolve))),el.getScrollElement()):el,findIonContent=el=>{const customContentHost=el.querySelector(ION_CONTENT_CLASS_SELECTOR);return customContentHost||el.querySelector(ION_CONTENT_SELECTOR)},findClosestIonContent=el=>el.closest(ION_CONTENT_SELECTOR),scrollToTop=(el,durationMs)=>{if(isIonContent(el)){return el.scrollToTop(durationMs)}return Promise.resolve(el.scrollTo({top:0,left:0,behavior:durationMs>0?"smooth":"auto"}))},scrollByPoint=(el,x,y,durationMs)=>{if(isIonContent(el)){return el.scrollByPoint(x,y,durationMs)}return Promise.resolve(el.scrollBy({top:y,left:x,behavior:durationMs>0?"smooth":"auto"}))},printIonContentErrorMsg=el=>(0,_index_1e38abc5_js__WEBPACK_IMPORTED_MODULE_1__.a)(el,ION_CONTENT_ELEMENT_SELECTOR),disableContentScrollY=contentEl=>{if(isIonContent(contentEl)){const ionContent=contentEl,initialScrollY=ionContent.scrollY;return ionContent.scrollY=!1,initialScrollY}return contentEl.style.setProperty("overflow","hidden"),!0},resetContentScrollY=(contentEl,initialScrollY)=>{isIonContent(contentEl)?contentEl.scrollY=initialScrollY:contentEl.style.removeProperty("overflow")}},"../../packages/core/dist/esm/ion-range.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_range:()=>Range});var _index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-6d0a42e8.js"),_index_c0cf4f1b_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/dist/esm/index-c0cf4f1b.js"),_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/helpers-4047ce7f.js"),_index_1e38abc5_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/index-1e38abc5.js"),_dir_861e8ef7_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/dist/esm/dir-861e8ef7.js"),_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/dist/esm/theme-516b22d6.js"),_ionic_global_ec5a1fee_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-ec5a1fee.js");const Range=class{constructor(hostRef){(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionChange=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionChange",7),this.ionInput=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionInput",7),this.ionFocus=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionFocus",7),this.ionBlur=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionBlur",7),this.ionKnobMoveStart=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionKnobMoveStart",7),this.ionKnobMoveEnd=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionKnobMoveEnd",7),this.rangeId="ion-r-"+rangeIds++,this.didLoad=!1,this.noUpdate=!1,this.hasFocus=!1,this.inheritedAttributes={},this.contentEl=null,this.initialContentScrollY=!0,this.clampBounds=value=>(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_2__.d)(this.min,value,this.max),this.ensureValueInBounds=value=>this.dualKnobs?{lower:this.clampBounds(value.lower),upper:this.clampBounds(value.upper)}:this.clampBounds(value),this.setupGesture=async()=>{const rangeSlider=this.rangeSlider;rangeSlider&&(this.gesture=(await __webpack_require__.e(3305).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/index-0fc64123.js"))).createGesture({el:rangeSlider,gestureName:"range",gesturePriority:100,threshold:10,onStart:()=>this.onStart(),onMove:ev=>this.onMove(ev),onEnd:ev=>this.onEnd(ev)}),this.gesture.enable(!this.disabled))},this.handleKeyboard=(knob,isIncrease)=>{const{ensureValueInBounds}=this;let step=this.step;step=step>0?step:1,step/=this.max-this.min,isIncrease||(step*=-1),"A"===knob?this.ratioA=(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_2__.d)(0,this.ratioA+step,1):this.ratioB=(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_2__.d)(0,this.ratioB+step,1),this.ionKnobMoveStart.emit({value:ensureValueInBounds(this.value)}),this.updateValue(),this.emitValueChange(),this.ionKnobMoveEnd.emit({value:ensureValueInBounds(this.value)})},this.onBlur=()=>{this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit())},this.onFocus=()=>{this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit())},this.ratioA=0,this.ratioB=0,this.pressedKnob=void 0,this.color=void 0,this.debounce=void 0,this.name=this.rangeId,this.label=void 0,this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.pinFormatter=value=>Math.round(value),this.snaps=!1,this.step=1,this.ticks=!0,this.activeBarStart=void 0,this.disabled=!1,this.value=0,this.labelPlacement="start"}debounceChanged(){const{ionInput,debounce,originalIonInput}=this;this.ionInput=void 0===debounce?null!=originalIonInput?originalIonInput:ionInput:(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_2__.k)(ionInput,debounce)}minChanged(){this.noUpdate||this.updateRatio()}maxChanged(){this.noUpdate||this.updateRatio()}activeBarStartChanged(){const{activeBarStart}=this;void 0!==activeBarStart&&(activeBarStart>this.max?((0,_index_1e38abc5_js__WEBPACK_IMPORTED_MODULE_3__.p)(`Range: The value of activeBarStart (${activeBarStart}) is greater than the max (${this.max}). Valid values are greater than or equal to the min value and less than or equal to the max value.`,this.el),this.activeBarStart=this.max):activeBarStart<this.min&&((0,_index_1e38abc5_js__WEBPACK_IMPORTED_MODULE_3__.p)(`Range: The value of activeBarStart (${activeBarStart}) is less than the min (${this.min}). Valid values are greater than or equal to the min value and less than or equal to the max value.`,this.el),this.activeBarStart=this.min))}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}valueChanged(){this.noUpdate||this.updateRatio()}componentWillLoad(){this.el.hasAttribute("id")&&(this.rangeId=this.el.getAttribute("id")),this.inheritedAttributes=(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el)}componentDidLoad(){this.originalIonInput=this.ionInput,this.setupGesture(),this.updateRatio(),this.didLoad=!0}connectedCallback(){var _a;this.updateRatio(),this.debounceChanged(),this.disabledChanged(),this.activeBarStartChanged(),this.didLoad&&this.setupGesture();const ionContent=(0,_index_c0cf4f1b_js__WEBPACK_IMPORTED_MODULE_4__.a)(this.el);this.contentEl=null!==(_a=null==ionContent?void 0:ionContent.querySelector(".ion-content-scroll-host"))&&void 0!==_a?_a:ionContent}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}getValue(){var _a;const value=null!==(_a=this.value)&&void 0!==_a?_a:0;return this.dualKnobs?"object"==typeof value?value:{lower:0,upper:value}:"object"==typeof value?value.upper:value}emitValueChange(){this.value=this.ensureValueInBounds(this.value),this.ionChange.emit({value:this.value})}onStart(){this.ionKnobMoveStart.emit({value:this.ensureValueInBounds(this.value)})}onMove(detail){const{contentEl,pressedKnob}=this,currentX=detail.currentX;contentEl&&void 0===this.pressedKnob&&(this.initialContentScrollY=(0,_index_c0cf4f1b_js__WEBPACK_IMPORTED_MODULE_4__.d)(contentEl)),void 0===pressedKnob&&this.setPressedKnob(currentX),this.update(currentX)}onEnd(detail){var _a;const{contentEl,initialContentScrollY}=this,currentX=null!==(_a=detail.currentX)&&void 0!==_a?_a:detail.clientX;void 0===this.pressedKnob&&this.setPressedKnob(currentX),contentEl&&void 0!==this.pressedKnob&&(0,_index_c0cf4f1b_js__WEBPACK_IMPORTED_MODULE_4__.r)(contentEl,initialContentScrollY),this.update(currentX),this.pressedKnob=void 0,this.emitValueChange(),this.ionKnobMoveEnd.emit({value:this.ensureValueInBounds(this.value)})}update(currentX){const rect=this.rect;let ratio=(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_2__.d)(0,(currentX-rect.left)/rect.width,1);(0,_dir_861e8ef7_js__WEBPACK_IMPORTED_MODULE_5__.i)(this.el)&&(ratio=1-ratio),this.snaps&&(ratio=valueToRatio(ratioToValue(ratio,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=ratio:this.ratioB=ratio,this.updateValue()}setPressedKnob(currentX){const rect=this.rect=this.rangeSlider.getBoundingClientRect();let ratio=(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_2__.d)(0,(currentX-rect.left)/rect.width,1);(0,_dir_861e8ef7_js__WEBPACK_IMPORTED_MODULE_5__.i)(this.el)&&(ratio=1-ratio),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-ratio)<Math.abs(this.ratioB-ratio)?"A":"B",this.setFocus(this.pressedKnob)}get valA(){return ratioToValue(this.ratioA,this.min,this.max,this.step)}get valB(){return ratioToValue(this.ratioB,this.min,this.max,this.step)}get ratioLower(){if(this.dualKnobs)return Math.min(this.ratioA,this.ratioB);const{activeBarStart}=this;return null==activeBarStart?0:valueToRatio(activeBarStart,this.min,this.max)}get ratioUpper(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}updateRatio(){const value=this.getValue(),{min,max}=this;this.dualKnobs?(this.ratioA=valueToRatio(value.lower,min,max),this.ratioB=valueToRatio(value.upper,min,max)):this.ratioA=valueToRatio(value,min,max)}updateValue(){this.noUpdate=!0;const{valA,valB}=this;this.value=this.dualKnobs?{lower:Math.min(valA,valB),upper:Math.max(valA,valB)}:valA,this.ionInput.emit({value:this.value}),this.noUpdate=!1}setFocus(knob){if(this.el.shadowRoot){const knobEl=this.el.shadowRoot.querySelector("A"===knob?".range-knob-a":".range-knob-b");knobEl&&knobEl.focus()}}get hasStartSlotContent(){return null!==this.el.querySelector('[slot="start"]')}get hasEndSlotContent(){return null!==this.el.querySelector('[slot="end"]')}get hasLabel(){return void 0!==this.label||null!==this.el.querySelector('[slot="label"]')}renderRangeSlider(){var _a;const{min,max,step,handleKeyboard,pressedKnob,disabled,pin,ratioLower,ratioUpper,pinFormatter,inheritedAttributes}=this;let barStart=100*ratioLower+"%",barEnd=100-100*ratioUpper+"%";const rtl=(0,_dir_861e8ef7_js__WEBPACK_IMPORTED_MODULE_5__.i)(this.el),start=rtl?"right":"left",end=rtl?"left":"right",tickStyle=tick=>({[start]:tick[start]});!1===this.dualKnobs&&(this.valA<(null!==(_a=this.activeBarStart)&&void 0!==_a?_a:this.min)?(barStart=100*ratioUpper+"%",barEnd=100-100*ratioLower+"%"):(barStart=100*ratioLower+"%",barEnd=100-100*ratioUpper+"%"));const barStyle={[start]:barStart,[end]:barEnd},ticks=[];if(this.snaps&&this.ticks)for(let value=min;value<=max;value+=step){const ratio=valueToRatio(value,min,max),ratioMin=Math.min(ratioLower,ratioUpper),ratioMax=Math.max(ratioLower,ratioUpper),tick={ratio,active:ratio>=ratioMin&&ratio<=ratioMax};tick[start]=100*ratio+"%",ticks.push(tick)}return(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"range-slider",ref:rangeEl=>this.rangeSlider=rangeEl,onPointerUp:ev=>{void 0===this.pressedKnob&&(this.onStart(),this.onEnd(ev))}},ticks.map((tick=>(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{style:tickStyle(tick),role:"presentation",class:{"range-tick":!0,"range-tick-active":tick.active},part:tick.active?"tick-active":"tick"}))),(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"range-bar-container"},(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"range-bar",role:"presentation",part:"bar"}),(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"range-bar":!0,"range-bar-active":!0,"has-ticks":ticks.length>0},role:"presentation",style:barStyle,part:"bar-active"})),renderKnob(rtl,{knob:"A",pressed:"A"===pressedKnob,value:this.valA,ratio:this.ratioA,pin,pinFormatter,disabled,handleKeyboard,min,max,inheritedAttributes}),this.dualKnobs&&renderKnob(rtl,{knob:"B",pressed:"B"===pressedKnob,value:this.valB,ratio:this.ratioB,pin,pinFormatter,disabled,handleKeyboard,min,max,inheritedAttributes}))}render(){const{disabled,el,hasLabel,rangeId,pin,pressedKnob,labelPlacement,label}=this,inItem=(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_6__.h)("ion-item",el),hasStartContent=hasLabel&&("start"===labelPlacement||"fixed"===labelPlacement)||this.hasStartSlotContent,needsStartAdjustment=inItem&&!hasStartContent,hasEndContent=hasLabel&&"end"===labelPlacement||this.hasEndSlotContent,needsEndAdjustment=inItem&&!hasEndContent,mode=(0,_ionic_global_ec5a1fee_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_2__.l)(!0,el,this.name,JSON.stringify(this.getValue()),disabled),(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"05c699caaead7cc74deaae2a958c4632191473a8",onFocusin:this.onFocus,onFocusout:this.onBlur,id:rangeId,class:(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_6__.c)(this.color,{[mode]:!0,"in-item":inItem,"range-disabled":disabled,"range-pressed":void 0!==pressedKnob,"range-has-pin":pin,[`range-label-placement-${labelPlacement}`]:!0,"range-item-start-adjustment":needsStartAdjustment,"range-item-end-adjustment":needsEndAdjustment})},(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{key:"959837bcc48c4bda33ae1f62b66ef444329a2961",class:"range-wrapper",id:"range-label"},(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"a434c6b5c26f57f52b3af98d881e7e6a179c89fc",class:{"label-text-wrapper":!0,"label-text-wrapper-hidden":!hasLabel},part:"label"},void 0!==label?(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"label-text"},label):(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"label"})),(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"87df1037b6b3337bd1fab05d33a26bf658c57914",class:"native-wrapper"},(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"2cb88f101da49b70aeae29b0bf5445fac241bb2f",name:"start"}),this.renderRangeSlider(),(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"17b835cfb2bd9b8e1957afd425543ff02b913d83",name:"end"}))))}get el(){return(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],activeBarStart:["activeBarStartChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}},renderKnob=(rtl,{knob,value,ratio,min,max,disabled,pressed,pin,handleKeyboard,pinFormatter,inheritedAttributes})=>{const start=rtl?"right":"left",ariaLabel=inheritedAttributes["aria-label"];return(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{onKeyDown:ev=>{const key=ev.key;"ArrowLeft"===key||"ArrowDown"===key?(handleKeyboard(knob,!1),ev.preventDefault(),ev.stopPropagation()):"ArrowRight"!==key&&"ArrowUp"!==key||(handleKeyboard(knob,!0),ev.preventDefault(),ev.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":"A"===knob,"range-knob-b":"B"===knob,"range-knob-pressed":pressed,"range-knob-min":value===min,"range-knob-max":value===max,"ion-activatable":!0,"ion-focusable":!0},style:(()=>{const style={};return style[start]=100*ratio+"%",style})(),role:"slider",tabindex:disabled?-1:0,"aria-label":void 0!==ariaLabel?ariaLabel:null,"aria-labelledby":void 0===ariaLabel?"range-label":null,"aria-valuemin":min,"aria-valuemax":max,"aria-disabled":disabled?"true":null,"aria-valuenow":value},pin&&(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"range-pin",role:"presentation",part:"pin"},pinFormatter(value)),(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"range-knob",role:"presentation",part:"knob"}))},ratioToValue=(ratio,min,max,step)=>{let value=(max-min)*ratio;step>0&&(value=Math.round(value/step)*step+min);return function roundToMaxDecimalPlaces(n,...references){const maxPlaces=Math.max(...references.map((r=>function getDecimalPlaces(n){return n%1==0?0:n.toString().split(".")[1].length}(r))));return Number(n.toFixed(maxPlaces))}((0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_2__.d)(min,value,max),min,max,step)},valueToRatio=(value,min,max)=>(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_2__.d)(0,(value-min)/(max-min),1);let rangeIds=0;Range.style={ios:":host{--knob-handle-size:calc(var(--knob-size) * 2);display:flex;position:relative;flex:3;align-items:center;font-family:var(--ion-font-family, inherit);user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:grab;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);display:flex;position:absolute;justify-content:center;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle{inset-inline-start:0}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}.range-bar-container{inset-inline-start:0}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){align-self:center}.range-wrapper{display:flex;position:relative;flex-grow:1;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:flex;flex-grow:1;align-items:center}:host(.range-label-placement-start) .range-wrapper{flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.range-label-placement-stacked) .range-wrapper{flex-direction:column;align-items:stretch}:host(.range-label-placement-stacked) .label-text-wrapper{transform-origin:left top;transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host-context([dir=rtl]):host(.range-label-placement-stacked) .label-text-wrapper,:host-context([dir=rtl]).range-label-placement-stacked .label-text-wrapper{transform-origin:right top}@supports selector(:dir(rtl)){:host(.range-label-placement-stacked:dir(rtl)) .label-text-wrapper{transform-origin:right top}}:host(.in-item.range-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.range-label-placement-stacked) .native-wrapper{margin-bottom:0px}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0px 0.5px 4px rgba(0, 0, 0, 0.12), 0px 6px 13px rgba(0, 0, 0, 0.12);--knob-size:26px;--bar-height:4px;--bar-background:var(--ion-color-step-900, var(--ion-background-color-step-900, #e6e6e6));--bar-background-active:var(--ion-color-primary, #0054e9);--bar-border-radius:2px;--height:42px}:host(.range-item-start-adjustment){-webkit-padding-start:24px;padding-inline-start:24px}:host(.range-item-end-adjustment){-webkit-padding-end:24px;padding-inline-end:24px}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin:not(.range-label-placement-stacked)){padding-top:calc(8px + 0.75rem)}:host(.range-has-pin.range-label-placement-stacked) .label-text-wrapper{margin-bottom:calc(8px + 0.75rem)}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-bar-active.has-ticks{border-radius:0;-webkit-margin-start:-2px;margin-inline-start:-2px;-webkit-margin-end:-2px;margin-inline-end:-2px}.range-tick{-webkit-margin-start:-2px;margin-inline-start:-2px;border-radius:0;position:absolute;top:17px;width:4px;height:8px;background:var(--ion-color-step-900, var(--ion-background-color-step-900, #e6e6e6));pointer-events:none}.range-tick-active{background:var(--bar-background-active)}.range-pin{transform:translate3d(0,  100%,  0) scale(0.01);-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;min-width:28px;transition:transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:0.75rem;text-align:center}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{transform:translate3d(0, calc(-100% + 11px), 0) scale(1)}:host(.range-disabled){opacity:0.3}",md:':host{--knob-handle-size:calc(var(--knob-size) * 2);display:flex;position:relative;flex:3;align-items:center;font-family:var(--ion-font-family, inherit);user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:grab;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);display:flex;position:absolute;justify-content:center;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle{inset-inline-start:0}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}.range-bar-container{inset-inline-start:0}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){align-self:center}.range-wrapper{display:flex;position:relative;flex-grow:1;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:flex;flex-grow:1;align-items:center}:host(.range-label-placement-start) .range-wrapper{flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.range-label-placement-stacked) .range-wrapper{flex-direction:column;align-items:stretch}:host(.range-label-placement-stacked) .label-text-wrapper{transform-origin:left top;transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host-context([dir=rtl]):host(.range-label-placement-stacked) .label-text-wrapper,:host-context([dir=rtl]).range-label-placement-stacked .label-text-wrapper{transform-origin:right top}@supports selector(:dir(rtl)){:host(.range-label-placement-stacked:dir(rtl)) .label-text-wrapper{transform-origin:right top}}:host(.in-item.range-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.range-label-placement-stacked) .native-wrapper{margin-bottom:0px}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.26);--bar-background-active:var(--ion-color-primary, #0054e9);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #0054e9);--pin-color:var(--ion-color-primary-contrast, #fff)}::slotted(:not(ion-icon)[slot=start]),::slotted(:not(ion-icon)[slot=end]),.native-wrapper{font-size:0.75rem}:host(.range-item-start-adjustment){-webkit-padding-start:18px;padding-inline-start:18px}:host(.range-item-end-adjustment){-webkit-padding-end:18px;padding-inline-end:18px}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-knob::before,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin:not(.range-label-placement-stacked)){padding-top:1.75rem}:host(.range-has-pin.range-label-placement-stacked) .label-text-wrapper{margin-bottom:1.75rem}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{transform:scale(0.67);transition-duration:120ms;transition-property:transform, background-color, border;transition-timing-function:ease;z-index:2}.range-knob::before{border-radius:50%;position:absolute;width:var(--knob-size);height:var(--knob-size);transform:scale(1);transition:0.267s cubic-bezier(0, 0, 0.58, 1);background:var(--knob-background);content:"";opacity:0.13;pointer-events:none}.range-knob::before{inset-inline-start:0}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;transform:translate3d(0,  0,  0) scale(0.01);display:flex;align-items:center;justify-content:center;width:1.75rem;height:1.75rem;transition:transform 120ms ease, background 120ms ease;background:var(--pin-background);color:var(--pin-color)}.range-pin::before{bottom:-1px;-webkit-margin-start:-13px;margin-inline-start:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;transform:rotate(-45deg);transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}.range-pin::before{inset-inline-start:50%}:host-context([dir=rtl]) .range-pin::before{left:unset}[dir=rtl] .range-pin::before{left:unset}@supports selector(:dir(rtl)){.range-pin::before:dir(rtl){left:unset}}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{transform:translate3d(0, calc(-100% + 4px), 0) scale(1)}@media (any-hover: hover){.range-knob-handle:hover .range-knob:before{transform:scale(2);opacity:0.13}}.range-knob-handle.ion-activated .range-knob:before,.range-knob-handle.ion-focused .range-knob:before,.range-knob-handle.range-knob-pressed .range-knob:before{transform:scale(2)}.range-knob-handle.ion-focused .range-knob::before{opacity:0.13}.range-knob-handle.ion-activated .range-knob::before,.range-knob-handle.range-knob-pressed .range-knob::before{opacity:0.25}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob,:host(:not(.range-has-pin)) .range-knob-handle.ion-focused .range-knob{transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, var(--ion-background-color-step-250, #bfbfbf))}:host(.range-disabled) .range-knob{transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, var(--ion-background-color-step-250, #bfbfbf))}:host(.range-disabled) .label-text-wrapper,:host(.range-disabled) ::slotted([slot=start]),:host(.range-disabled) ::slotted([slot=end]){opacity:0.38}'}},"../../packages/core/dist/esm/theme-516b22d6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
/*! For license information please see 9555.3facc4c3.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[9555],{"../../packages/core/dist/esm/capacitor-0e0f67bb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>getCapacitor});var _index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-938c089e.js");const getCapacitor=()=>{if(void 0!==_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w)return _index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.w.Capacitor}},"../../packages/core/dist/esm/haptic-7fc37428.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>ImpactStyle,a:()=>hapticSelectionStart,b:()=>hapticSelectionChanged,c:()=>hapticSelectionEnd,d:()=>hapticSelection,h:()=>hapticImpact});var ImpactStyle,NotificationType,_capacitor_0e0f67bb_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/capacitor-0e0f67bb.js");!function(ImpactStyle){ImpactStyle.Heavy="HEAVY",ImpactStyle.Medium="MEDIUM",ImpactStyle.Light="LIGHT"}(ImpactStyle||(ImpactStyle={})),function(NotificationType){NotificationType.Success="SUCCESS",NotificationType.Warning="WARNING",NotificationType.Error="ERROR"}(NotificationType||(NotificationType={}));const HapticEngine={getEngine(){const tapticEngine=window.TapticEngine;if(tapticEngine)return tapticEngine;const capacitor=(0,_capacitor_0e0f67bb_js__WEBPACK_IMPORTED_MODULE_0__.g)();return(null==capacitor?void 0:capacitor.isPluginAvailable("Haptics"))?capacitor.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const capacitor=(0,_capacitor_0e0f67bb_js__WEBPACK_IMPORTED_MODULE_0__.g)();return"web"!==(null==capacitor?void 0:capacitor.getPlatform())||"undefined"!=typeof navigator&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,_capacitor_0e0f67bb_js__WEBPACK_IMPORTED_MODULE_0__.g)(),impact(options){const engine=this.getEngine();if(!engine)return;const style=this.isCapacitor()?options.style:options.style.toLowerCase();engine.impact({style})},notification(options){const engine=this.getEngine();if(!engine)return;const type=this.isCapacitor()?options.type:options.type.toLowerCase();engine.notification({type})},selection(){const style=this.isCapacitor()?ImpactStyle.Light:"light";this.impact({style})},selectionStart(){const engine=this.getEngine();engine&&(this.isCapacitor()?engine.selectionStart():engine.gestureSelectionStart())},selectionChanged(){const engine=this.getEngine();engine&&(this.isCapacitor()?engine.selectionChanged():engine.gestureSelectionChanged())},selectionEnd(){const engine=this.getEngine();engine&&(this.isCapacitor()?engine.selectionEnd():engine.gestureSelectionEnd())}},hapticAvailable=()=>HapticEngine.available(),hapticSelection=()=>{hapticAvailable()&&HapticEngine.selection()},hapticSelectionStart=()=>{hapticAvailable()&&HapticEngine.selectionStart()},hapticSelectionChanged=()=>{hapticAvailable()&&HapticEngine.selectionChanged()},hapticSelectionEnd=()=>{hapticAvailable()&&HapticEngine.selectionEnd()},hapticImpact=options=>{hapticAvailable()&&HapticEngine.impact(options)}},"../../packages/core/dist/esm/helpers-13791ab7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>componentOnReady,e:()=>renderHiddenInput,f:()=>clamp,g:()=>getElementRoot,h:()=>isEndSide,i:()=>inheritAriaAttributes,j:()=>focusElement,k:()=>assert,l:()=>hasLazyBuild,m:()=>debounceEvent,n:()=>getAriaLabel,o:()=>findItemLabel,p:()=>debounce,q:()=>hasShadowDom,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync,u:()=>now,v:()=>pointerCoord});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,findItemLabel=componentEl=>{const itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},focusElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},getAriaLabel=(componentEl,inputId)=>{let labelText;const labelledBy=componentEl.getAttribute("aria-labelledby"),componentId=componentEl.id;let labelId=null!==labelledBy&&""!==labelledBy.trim()?labelledBy:inputId+"-lbl",label=null!==labelledBy&&""!==labelledBy.trim()?document.getElementById(labelledBy):findItemLabel(componentEl);return label?(null===labelledBy&&(label.id=labelId),labelText=label.textContent,label.setAttribute("aria-hidden","true")):""!==componentId.trim()&&(label=document.querySelector(`label[for="${componentId}"]`),label&&(""!==label.id?labelId=label.id:label.id=labelId=`${componentId}-lbl`,labelText=label.textContent)),{label,labelId,labelText}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=ev=>ev.timeStamp||Date.now(),pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/index-938c089e.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>doc,w:()=>win});const win="undefined"!=typeof window?window:void 0,doc="undefined"!=typeof document?document:void 0},"../../packages/core/dist/esm/ion-picker-column.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_picker_column:()=>PickerColumnCmp});var _index_7f63d598_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-7f63d598.js"),_helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/dist/esm/helpers-13791ab7.js"),_haptic_7fc37428_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/haptic-7fc37428.js"),_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/dist/esm/theme-bc7eaa70.js"),_ionic_global_a5448450_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/ionic-global-a5448450.js");__webpack_require__("../../packages/core/dist/esm/capacitor-0e0f67bb.js"),__webpack_require__("../../packages/core/dist/esm/index-938c089e.js");const PickerColumnCmp=class{constructor(hostRef){(0,_index_7f63d598_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionPickerColChange=(0,_index_7f63d598_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionPickerColChange",7),this.optHeight=0,this.rotateFactor=0,this.scaleFactor=1,this.velocity=0,this.y=0,this.noAnimate=!0,this.colDidChange=!1,this.col=void 0}colChanged(){this.colDidChange=!0}async connectedCallback(){let pickerRotateFactor=0,pickerScaleFactor=.81;"ios"===(0,_ionic_global_a5448450_js__WEBPACK_IMPORTED_MODULE_2__.g)(this)&&(pickerRotateFactor=-.46,pickerScaleFactor=1),this.rotateFactor=pickerRotateFactor,this.scaleFactor=pickerScaleFactor,this.gesture=(await __webpack_require__.e(8926).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/index-e65e72c8.js"))).createGesture({el:this.el,gestureName:"picker-swipe",gesturePriority:100,threshold:0,passive:!1,onStart:ev=>this.onStart(ev),onMove:ev=>this.onMove(ev),onEnd:ev=>this.onEnd(ev)}),this.gesture.enable(),this.tmrId=setTimeout((()=>{this.noAnimate=!1,this.refresh(!0)}),250)}componentDidLoad(){this.onDomChange()}componentDidUpdate(){this.colDidChange&&(this.onDomChange(!0,!1),this.colDidChange=!1)}disconnectedCallback(){void 0!==this.rafId&&cancelAnimationFrame(this.rafId),this.tmrId&&clearTimeout(this.tmrId),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}emitColChange(){this.ionPickerColChange.emit(this.col)}setSelected(selectedIndex,duration){const y=selectedIndex>-1?-selectedIndex*this.optHeight:0;this.velocity=0,void 0!==this.rafId&&cancelAnimationFrame(this.rafId),this.update(y,duration,!0),this.emitColChange()}update(y,duration,saveY){if(!this.optsEl)return;let translateY=0,translateZ=0;const{col,rotateFactor}=this,prevSelected=col.selectedIndex,selectedIndex=col.selectedIndex=this.indexForY(-y),durationStr=0===duration?"":duration+"ms",scaleStr=`scale(${this.scaleFactor})`,children=this.optsEl.children;for(let i=0;i<children.length;i++){const button=children[i],opt=col.options[i],optOffset=i*this.optHeight+y;let transform="";if(0!==rotateFactor){const rotateX=optOffset*rotateFactor;Math.abs(rotateX)<=90?(translateY=0,translateZ=90,transform=`rotateX(${rotateX}deg) `):translateY=-9999}else translateZ=0,translateY=optOffset;const selected=selectedIndex===i;transform+=`translate3d(0px,${translateY}px,${translateZ}px) `,1===this.scaleFactor||selected||(transform+=scaleStr),this.noAnimate?(opt.duration=0,button.style.transitionDuration=""):duration!==opt.duration&&(opt.duration=duration,button.style.transitionDuration=durationStr),transform!==opt.transform&&(opt.transform=transform),button.style.transform=transform,opt.selected=selected,selected?button.classList.add(PICKER_OPT_SELECTED):button.classList.remove(PICKER_OPT_SELECTED)}this.col.prevSelected=prevSelected,saveY&&(this.y=y),this.lastIndex!==selectedIndex&&((0,_haptic_7fc37428_js__WEBPACK_IMPORTED_MODULE_1__.b)(),this.lastIndex=selectedIndex)}decelerate(){if(0!==this.velocity){this.velocity*=DECELERATION_FRICTION,this.velocity=this.velocity>0?Math.max(this.velocity,1):Math.min(this.velocity,-1);let y=this.y+this.velocity;y>this.minY?(y=this.minY,this.velocity=0):y<this.maxY&&(y=this.maxY,this.velocity=0),this.update(y,0,!0);Math.round(y)%this.optHeight!=0||Math.abs(this.velocity)>1?this.rafId=requestAnimationFrame((()=>this.decelerate())):(this.velocity=0,this.emitColChange(),(0,_haptic_7fc37428_js__WEBPACK_IMPORTED_MODULE_1__.c)())}else if(this.y%this.optHeight!=0){const currentPos=Math.abs(this.y%this.optHeight);this.velocity=currentPos>this.optHeight/2?1:-1,this.decelerate()}}indexForY(y){return Math.min(Math.max(Math.abs(Math.round(y/this.optHeight)),0),this.col.options.length-1)}onStart(detail){detail.event.cancelable&&detail.event.preventDefault(),detail.event.stopPropagation(),(0,_haptic_7fc37428_js__WEBPACK_IMPORTED_MODULE_1__.a)(),void 0!==this.rafId&&cancelAnimationFrame(this.rafId);const options=this.col.options;let minY=options.length-1,maxY=0;for(let i=0;i<options.length;i++)options[i].disabled||(minY=Math.min(minY,i),maxY=Math.max(maxY,i));this.minY=-minY*this.optHeight,this.maxY=-maxY*this.optHeight}onMove(detail){detail.event.cancelable&&detail.event.preventDefault(),detail.event.stopPropagation();let y=this.y+detail.deltaY;y>this.minY?(y=Math.pow(y,.8),this.bounceFrom=y):y<this.maxY?(y+=Math.pow(this.maxY-y,.9),this.bounceFrom=y):this.bounceFrom=0,this.update(y,0,!1)}onEnd(detail){if(this.bounceFrom>0)return this.update(this.minY,100,!0),void this.emitColChange();if(this.bounceFrom<0)return this.update(this.maxY,100,!0),void this.emitColChange();if(this.velocity=(0,_helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_5__.f)(-MAX_PICKER_SPEED,23*detail.velocityY,MAX_PICKER_SPEED),0===this.velocity&&0===detail.deltaY){const opt=detail.event.target.closest(".picker-opt");(null==opt?void 0:opt.hasAttribute("opt-index"))&&this.setSelected(parseInt(opt.getAttribute("opt-index"),10),TRANSITION_DURATION)}else{if(this.y+=detail.deltaY,Math.abs(detail.velocityY)<.05){const isScrollingUp=detail.deltaY>0,optHeightFraction=Math.abs(this.y)%this.optHeight/this.optHeight;isScrollingUp&&optHeightFraction>.5?this.velocity=-1*Math.abs(this.velocity):!isScrollingUp&&optHeightFraction<=.5&&(this.velocity=Math.abs(this.velocity))}this.decelerate()}}refresh(forceRefresh,animated){var _a;let min=this.col.options.length-1,max=0;const options=this.col.options;for(let i=0;i<options.length;i++)options[i].disabled||(min=Math.min(min,i),max=Math.max(max,i));if(0!==this.velocity)return;const selectedIndex=(0,_helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_5__.f)(min,null!==(_a=this.col.selectedIndex)&&void 0!==_a?_a:0,max);if(this.col.prevSelected!==selectedIndex||forceRefresh){const y=selectedIndex*this.optHeight*-1,duration=animated?TRANSITION_DURATION:0;this.velocity=0,this.update(y,duration,!0)}}onDomChange(forceRefresh,animated){const colEl=this.optsEl;colEl&&(this.optHeight=colEl.firstElementChild?colEl.firstElementChild.clientHeight:0),this.refresh(forceRefresh,animated)}render(){const col=this.col,mode=(0,_ionic_global_a5448450_js__WEBPACK_IMPORTED_MODULE_2__.g)(this);return(0,_index_7f63d598_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_7f63d598_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:Object.assign({[mode]:!0,"picker-col":!0,"picker-opts-left":"left"===this.col.align,"picker-opts-right":"right"===this.col.align},(0,_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_6__.g)(col.cssClass)),style:{"max-width":this.col.columnWidth}},col.prefix&&(0,_index_7f63d598_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"picker-prefix",style:{width:col.prefixWidth}},col.prefix),(0,_index_7f63d598_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"picker-opts",style:{maxWidth:col.optionsWidth},ref:el=>this.optsEl=el},col.options.map(((o,index)=>(0,_index_7f63d598_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{"aria-label":o.ariaLabel,class:{"picker-opt":!0,"picker-opt-disabled":!!o.disabled},"opt-index":index},o.text)))),col.suffix&&(0,_index_7f63d598_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"picker-suffix",style:{width:col.suffixWidth}},col.suffix))}get el(){return(0,_index_7f63d598_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{col:["colChanged"]}}},PICKER_OPT_SELECTED="picker-opt-selected",DECELERATION_FRICTION=.97,MAX_PICKER_SPEED=90,TRANSITION_DURATION=150;PickerColumnCmp.style={ios:".picker-col{display:flex;position:relative;flex:1;justify-content:center;height:100%;box-sizing:content-box;contain:content}.picker-opts{position:relative;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}@supports (inset-inline-start: 0){.picker-opt{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-opt{left:0}:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}[dir=rtl] .picker-opt{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-opt:dir(rtl){left:unset;right:unset;right:0}}}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{justify-content:flex-start}.picker-opts-right{justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:0;padding-bottom:0;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px;pointer-events:none}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;transform-origin:center center;height:46px;transform-style:preserve-3d;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:20px;line-height:42px;backface-visibility:hidden;pointer-events:auto}:host-context([dir=rtl]) .picker-opt{transform-origin:calc(100% - center) center}[dir=rtl] .picker-opt{transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){.picker-opt:dir(rtl){transform-origin:calc(100% - center) center}}",md:".picker-col{display:flex;position:relative;flex:1;justify-content:center;height:100%;box-sizing:content-box;contain:content}.picker-opts{position:relative;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}@supports (inset-inline-start: 0){.picker-opt{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-opt{left:0}:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}[dir=rtl] .picker-opt{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-opt:dir(rtl){left:unset;right:unset;right:0}}}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{justify-content:flex-start}.picker-opts-right{justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;backface-visibility:hidden;pointer-events:auto}.picker-prefix,.picker-suffix,.picker-opt.picker-opt-selected{color:var(--ion-color-primary, #3880ff)}"}},"../../packages/core/dist/esm/theme-bc7eaa70.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
/*! For license information please see 9615.a386b521.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[9615],{"../../packages/core/dist/esm/capacitor-74355484.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>getCapacitor});var _index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js");const getCapacitor=()=>{if(void 0!==_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w)return _index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w.Capacitor}},"../../packages/core/dist/esm/haptic-1b03e74b.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>ImpactStyle,a:()=>hapticSelectionStart,b:()=>hapticSelectionChanged,c:()=>hapticSelectionEnd,d:()=>hapticSelection,h:()=>hapticImpact});var ImpactStyle,NotificationType,_capacitor_74355484_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/capacitor-74355484.js");!function(ImpactStyle){ImpactStyle.Heavy="HEAVY",ImpactStyle.Medium="MEDIUM",ImpactStyle.Light="LIGHT"}(ImpactStyle||(ImpactStyle={})),function(NotificationType){NotificationType.Success="SUCCESS",NotificationType.Warning="WARNING",NotificationType.Error="ERROR"}(NotificationType||(NotificationType={}));const HapticEngine={getEngine(){const capacitor=(0,_capacitor_74355484_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(null==capacitor?void 0:capacitor.isPluginAvailable("Haptics"))return capacitor.Plugins.Haptics},available(){if(!this.getEngine())return!1;const capacitor=(0,_capacitor_74355484_js__WEBPACK_IMPORTED_MODULE_0__.g)();return"web"!==(null==capacitor?void 0:capacitor.getPlatform())||"undefined"!=typeof navigator&&void 0!==navigator.vibrate},impact(options){const engine=this.getEngine();engine&&engine.impact({style:options.style})},notification(options){const engine=this.getEngine();engine&&engine.notification({type:options.type})},selection(){this.impact({style:ImpactStyle.Light})},selectionStart(){const engine=this.getEngine();engine&&engine.selectionStart()},selectionChanged(){const engine=this.getEngine();engine&&engine.selectionChanged()},selectionEnd(){const engine=this.getEngine();engine&&engine.selectionEnd()}},hapticAvailable=()=>HapticEngine.available(),hapticSelection=()=>{hapticAvailable()&&HapticEngine.selection()},hapticSelectionStart=()=>{hapticAvailable()&&HapticEngine.selectionStart()},hapticSelectionChanged=()=>{hapticAvailable()&&HapticEngine.selectionChanged()},hapticSelectionEnd=()=>{hapticAvailable()&&HapticEngine.selectionEnd()},hapticImpact=options=>{hapticAvailable()&&HapticEngine.impact(options)}},"../../packages/core/dist/esm/helpers-b14eeb70.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>renderHiddenInput,e:()=>componentOnReady,f:()=>clamp,g:()=>getElementRoot,h:()=>isEndSide,i:()=>inheritAriaAttributes,j:()=>focusVisibleElement,k:()=>assert,l:()=>debounceEvent,m:()=>debounce,n:()=>hasLazyBuild,o:()=>hasShadowDom,p:()=>pointerCoord,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{void 0!==animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,focusVisibleElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/index-d9a82e80.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>doc,w:()=>win});const win="undefined"!=typeof window?window:void 0,doc="undefined"!=typeof document?document:void 0},"../../packages/core/dist/esm/ion-picker_3.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_picker:()=>Picker,ion_picker_column:()=>PickerColumn,ion_picker_column_option:()=>PickerColumnOption});var _index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-4aef4473.js"),_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/dist/esm/helpers-b14eeb70.js"),_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js"),_haptic_1b03e74b_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/haptic-1b03e74b.js"),_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/ionic-global-a9e3465e.js"),_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/dist/esm/theme-516b22d6.js");__webpack_require__("../../packages/core/dist/esm/capacitor-74355484.js");const Picker=class{constructor(hostRef){(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionInputModeChange=(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionInputModeChange",7),this.useInputMode=!1,this.isInHighlightBounds=ev=>{const{highlightEl}=this;if(!highlightEl)return!1;const bbox=highlightEl.getBoundingClientRect(),outsideX=ev.clientX<bbox.left||ev.clientX>bbox.right,outsideY=ev.clientY<bbox.top||ev.clientY>bbox.bottom;return!outsideX&&!outsideY},this.onFocusOut=ev=>{const{relatedTarget}=ev;(!relatedTarget||"ION-PICKER-COLUMN"!==relatedTarget.tagName&&relatedTarget!==this.inputEl)&&this.exitInputMode()},this.onFocusIn=ev=>{const{target}=ev;if("ION-PICKER-COLUMN"===target.tagName&&!this.actionOnClick){const columnEl=target;columnEl.numericInput?this.enterInputMode(columnEl,!1):this.exitInputMode()}},this.onClick=()=>{const{actionOnClick}=this;actionOnClick&&(actionOnClick(),this.actionOnClick=void 0)},this.onPointerDown=ev=>{const{useInputMode,inputModeColumn,el}=this;if(this.isInHighlightBounds(ev))if(useInputMode)"ION-PICKER-COLUMN"===ev.target.tagName?inputModeColumn&&inputModeColumn===ev.target?this.actionOnClick=()=>{this.enterInputMode()}:this.actionOnClick=()=>{this.enterInputMode(ev.target)}:this.actionOnClick=()=>{this.exitInputMode()};else{const columnEl=1===el.querySelectorAll("ion-picker-column.picker-column-numeric-input").length?ev.target:void 0;this.actionOnClick=()=>{this.enterInputMode(columnEl)}}else this.actionOnClick=()=>{this.exitInputMode()}},this.enterInputMode=(columnEl,focusInput=!0)=>{const{inputEl,el}=this;if(!inputEl)return;el.querySelector("ion-picker-column.picker-column-numeric-input")&&(this.useInputMode=!0,this.inputModeColumn=columnEl,focusInput?(this.destroyKeypressListener&&(this.destroyKeypressListener(),this.destroyKeypressListener=void 0),inputEl.focus()):(el.addEventListener("keypress",this.onKeyPress),this.destroyKeypressListener=()=>{el.removeEventListener("keypress",this.onKeyPress)}),this.emitInputModeChange())},this.onKeyPress=ev=>{const{inputEl}=this;if(!inputEl)return;const parsedValue=parseInt(ev.key,10);Number.isNaN(parsedValue)||(inputEl.value+=ev.key,this.onInputChange())},this.selectSingleColumn=()=>{const{inputEl,inputModeColumn,singleColumnSearchTimeout}=this;if(!inputEl||!inputModeColumn)return;const options=Array.from(inputModeColumn.querySelectorAll("ion-picker-column-option")).filter((el=>!0!==el.disabled));if(singleColumnSearchTimeout&&clearTimeout(singleColumnSearchTimeout),this.singleColumnSearchTimeout=setTimeout((()=>{inputEl.value="",this.singleColumnSearchTimeout=void 0}),1e3),inputEl.value.length>=3){const startIndex=inputEl.value.length-2,newString=inputEl.value.substring(startIndex);return inputEl.value=newString,void this.selectSingleColumn()}const findItemFromCompleteValue=options.find((({textContent})=>textContent.replace(/^0+(?=[1-9])|0+(?=0$)/,"")===inputEl.value));if(findItemFromCompleteValue)inputModeColumn.setValue(findItemFromCompleteValue.value);else if(2===inputEl.value.length){const changedCharacter=inputEl.value.substring(inputEl.value.length-1);inputEl.value=changedCharacter,this.selectSingleColumn()}},this.searchColumn=(colEl,value,zeroBehavior="start")=>{const behavior="start"===zeroBehavior?/^0+/:/0$/,option=Array.from(colEl.querySelectorAll("ion-picker-column-option")).find((el=>!0!==el.disabled&&el.textContent.replace(behavior,"")===value));option&&colEl.setValue(option.value)},this.selectMultiColumn=()=>{const{inputEl,el}=this;if(!inputEl)return;const numericPickers=Array.from(el.querySelectorAll("ion-picker-column")).filter((col=>col.numericInput)),firstColumn=numericPickers[0],lastColumn=numericPickers[1];let minuteValue,value=inputEl.value;switch(value.length){case 1:this.searchColumn(firstColumn,value);break;case 2:const firstCharacter=inputEl.value.substring(0,1);value="0"===firstCharacter||"1"===firstCharacter?inputEl.value:firstCharacter,this.searchColumn(firstColumn,value),1===value.length&&(minuteValue=inputEl.value.substring(inputEl.value.length-1),this.searchColumn(lastColumn,minuteValue,"end"));break;case 3:const firstCharacterAgain=inputEl.value.substring(0,1);value="0"===firstCharacterAgain||"1"===firstCharacterAgain?inputEl.value.substring(0,2):firstCharacterAgain,this.searchColumn(firstColumn,value),minuteValue=1===value.length?inputEl.value.substring(1):inputEl.value.substring(2),this.searchColumn(lastColumn,minuteValue,"end");break;case 4:const firstCharacterAgainAgain=inputEl.value.substring(0,1);value="0"===firstCharacterAgainAgain||"1"===firstCharacterAgainAgain?inputEl.value.substring(0,2):firstCharacterAgainAgain,this.searchColumn(firstColumn,value);const minuteValueAgain=1===value.length?inputEl.value.substring(1,inputEl.value.length):inputEl.value.substring(2,inputEl.value.length);this.searchColumn(lastColumn,minuteValueAgain,"end");break;default:const startIndex=inputEl.value.length-4,newString=inputEl.value.substring(startIndex);inputEl.value=newString,this.selectMultiColumn()}},this.onInputChange=()=>{const{useInputMode,inputEl,inputModeColumn}=this;useInputMode&&inputEl&&(inputModeColumn?this.selectSingleColumn():this.selectMultiColumn())},this.emitInputModeChange=()=>{const{useInputMode,inputModeColumn}=this;this.ionInputModeChange.emit({useInputMode,inputModeColumn})}}preventTouchStartPropagation(ev){ev.stopPropagation()}componentWillLoad(){(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_5__.g)(this.el).addEventListener("focusin",this.onFocusIn),(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_5__.g)(this.el).addEventListener("focusout",this.onFocusOut)}async exitInputMode(){const{inputEl,useInputMode}=this;useInputMode&&inputEl&&(this.useInputMode=!1,this.inputModeColumn=void 0,inputEl.blur(),inputEl.value="",this.destroyKeypressListener&&(this.destroyKeypressListener(),this.destroyKeypressListener=void 0),this.emitInputModeChange())}render(){return(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"f92214a09dc85b65873676f40fde2b802960e704",onPointerDown:ev=>this.onPointerDown(ev),onClick:()=>this.onClick()},(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{key:"6da37f75aca4ea1c9cb3bc733ebda2116279f313","aria-hidden":"true",tabindex:-1,inputmode:"numeric",type:"number",onKeyDown:ev=>{var _a;"Enter"===ev.key&&(null===(_a=this.inputEl)||void 0===_a||_a.blur())},ref:el=>this.inputEl=el,onInput:()=>this.onInputChange(),onBlur:()=>this.exitInputMode()}),(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"298e99d83dd3f5bf2798150bab0bb4024af472fa",class:"picker-before"}),(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"ea578f04eb562a4dc6d6cc92de133dcb9fb7f42a",class:"picker-after"}),(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"84567824956dfe967992a629904836ba8b75b3ec",class:"picker-highlight",ref:el=>this.highlightEl=el}),(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"df81f8fb90e1f649b608328034528f5c31c70c3b"}))}get el(){return(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}};Picker.style={ios:":host{display:flex;position:relative;align-items:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}:host .picker-before{inset-inline-start:0}:host .picker-after{top:116px;height:84px}:host .picker-after{inset-inline-start:0}:host .picker-highlight{border-radius:var(--highlight-border-radius, 8px);left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;transform:translateY(-50%);background:var(--highlight-background);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column:first-of-type){text-align:start}:host ::slotted(ion-picker-column:last-of-type){text-align:end}:host ::slotted(ion-picker-column:only-child){text-align:center}:host .picker-before{background:linear-gradient(to bottom, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8) 100%)}:host .picker-after{background:linear-gradient(to top, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8) 100%)}:host .picker-highlight{background:var(--highlight-background, var(--ion-color-step-150, var(--ion-background-color-step-150, #eeeeef)))}",md:":host{display:flex;position:relative;align-items:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}:host .picker-before{inset-inline-start:0}:host .picker-after{top:116px;height:84px}:host .picker-after{inset-inline-start:0}:host .picker-highlight{border-radius:var(--highlight-border-radius, 8px);left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;transform:translateY(-50%);background:var(--highlight-background);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column:first-of-type){text-align:start}:host ::slotted(ion-picker-column:last-of-type){text-align:end}:host ::slotted(ion-picker-column:only-child){text-align:center}:host .picker-before{background:linear-gradient(to bottom, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0) 90%)}:host .picker-after{background:linear-gradient(to top, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 30%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0) 90%)}"};const PickerColumn=class{constructor(hostRef){(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionChange=(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionChange",7),this.isScrolling=!1,this.isColumnVisible=!1,this.canExitInputMode=!0,this.updateValueTextOnScroll=!1,this.centerPickerItemInView=(target,smooth=!0,canExitInputMode=!0)=>{const{isColumnVisible,scrollEl}=this;if(isColumnVisible&&scrollEl){const top=target.offsetTop-3*target.clientHeight+target.clientHeight/2;scrollEl.scrollTop!==top&&(this.canExitInputMode=canExitInputMode,this.updateValueTextOnScroll=!1,scrollEl.scroll({top,left:0,behavior:smooth?"smooth":void 0}))}},this.setPickerItemActiveState=(item,isActive)=>{isActive?item.classList.add(PICKER_ITEM_ACTIVE_CLASS):item.classList.remove(PICKER_ITEM_ACTIVE_CLASS)},this.inputModeChange=ev=>{if(!this.numericInput)return;const{useInputMode,inputModeColumn}=ev.detail,isColumnActive=void 0===inputModeColumn||inputModeColumn===this.el;useInputMode&&isColumnActive?this.setInputModeActive(!0):this.setInputModeActive(!1)},this.setInputModeActive=state=>{this.isScrolling?this.scrollEndCallback=()=>{this.isActive=state}:this.isActive=state},this.initializeScrollListener=()=>{const enableHaptics=(0,_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_3__.a)("ios"),{el,scrollEl}=this;let timeout,activeEl=this.activeItem;const scrollCallback=()=>{(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_5__.r)((()=>{var _a;if(!scrollEl)return;timeout&&(clearTimeout(timeout),timeout=void 0),this.isScrolling||(enableHaptics&&(0,_haptic_1b03e74b_js__WEBPACK_IMPORTED_MODULE_2__.a)(),this.isScrolling=!0);const bbox=scrollEl.getBoundingClientRect(),centerX=bbox.x+bbox.width/2,centerY=bbox.y+bbox.height/2,rootNode=el.getRootNode(),referenceNode=rootNode instanceof ShadowRoot?rootNode:_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_1__.d;if(void 0===referenceNode)return;const newActiveElement=referenceNode.elementsFromPoint(centerX,centerY).find((el=>"ION-PICKER-COLUMN-OPTION"===el.tagName));void 0!==activeEl&&this.setPickerItemActiveState(activeEl,!1),void 0===newActiveElement||newActiveElement.disabled||(newActiveElement!==activeEl&&(enableHaptics&&(0,_haptic_1b03e74b_js__WEBPACK_IMPORTED_MODULE_2__.b)(),this.canExitInputMode&&this.exitInputMode()),activeEl=newActiveElement,this.setPickerItemActiveState(newActiveElement,!0),this.updateValueTextOnScroll&&(null===(_a=this.assistiveFocusable)||void 0===_a||_a.setAttribute("aria-valuetext",this.getOptionValueText(newActiveElement))),timeout=setTimeout((()=>{this.isScrolling=!1,this.updateValueTextOnScroll=!0,enableHaptics&&(0,_haptic_1b03e74b_js__WEBPACK_IMPORTED_MODULE_2__.c)();const{scrollEndCallback}=this;scrollEndCallback&&(scrollEndCallback(),this.scrollEndCallback=void 0),this.canExitInputMode=!0,this.setValue(newActiveElement.value)}),250))}))};(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_5__.r)((()=>{scrollEl&&(scrollEl.addEventListener("scroll",scrollCallback),this.destroyScrollListener=()=>{scrollEl.removeEventListener("scroll",scrollCallback)})}))},this.exitInputMode=()=>{const{parentEl}=this;null!=parentEl&&(parentEl.exitInputMode(),this.el.classList.remove("picker-column-active"))},this.findNextOption=(stride=1)=>{const{activeItem}=this;if(!activeItem)return null;let prevNode=activeItem,node=activeItem.nextElementSibling;for(;null!=node;){if(stride>0&&stride--,"ION-PICKER-COLUMN-OPTION"===node.tagName&&!node.disabled&&0===stride)return node;prevNode=node,node=node.nextElementSibling}return prevNode},this.findPreviousOption=(stride=1)=>{const{activeItem}=this;if(!activeItem)return null;let nextNode=activeItem,node=activeItem.previousElementSibling;for(;null!=node;){if(stride>0&&stride--,"ION-PICKER-COLUMN-OPTION"===node.tagName&&!node.disabled&&0===stride)return node;nextNode=node,node=node.previousElementSibling}return nextNode},this.onKeyDown=ev=>{const mobile=(0,_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_3__.a)("mobile");let newOption=null;switch(ev.key){case"ArrowDown":newOption=mobile?this.findPreviousOption():this.findNextOption();break;case"ArrowUp":newOption=mobile?this.findNextOption():this.findPreviousOption();break;case"PageUp":newOption=mobile?this.findNextOption(5):this.findPreviousOption(5);break;case"PageDown":newOption=mobile?this.findPreviousOption(5):this.findNextOption(5);break;case"Home":newOption=this.el.querySelector("ion-picker-column-option:first-of-type");break;case"End":newOption=this.el.querySelector("ion-picker-column-option:last-of-type")}null!==newOption&&(this.setValue(newOption.value),ev.preventDefault())},this.getOptionValueText=el=>{var _a;return el?null!==(_a=el.getAttribute("aria-label"))&&void 0!==_a?_a:el.innerText:""},this.renderAssistiveFocusable=()=>{const{activeItem}=this,valueText=this.getOptionValueText(activeItem);return(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{ref:el=>this.assistiveFocusable=el,class:"assistive-focusable",role:"slider",tabindex:this.disabled?void 0:0,"aria-label":this.ariaLabel,"aria-valuemin":0,"aria-valuemax":0,"aria-valuenow":0,"aria-valuetext":valueText,"aria-orientation":"vertical",onKeyDown:ev=>this.onKeyDown(ev)})},this.ariaLabel=null,this.isActive=!1,this.disabled=!1,this.value=void 0,this.color="primary",this.numericInput=!1}ariaLabelChanged(newValue){this.ariaLabel=newValue}valueChange(){this.isColumnVisible&&this.scrollActiveItemIntoView(!0)}componentWillLoad(){const parentEl=this.parentEl=this.el.closest("ion-picker");new IntersectionObserver((entries=>{if(entries[entries.length-1].isIntersecting){const{activeItem,el}=this;this.isColumnVisible=!0;const oldActive=(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_5__.g)(el).querySelector(`.${PICKER_ITEM_ACTIVE_CLASS}`);oldActive&&this.setPickerItemActiveState(oldActive,!1),this.scrollActiveItemIntoView(),activeItem&&this.setPickerItemActiveState(activeItem,!0),this.initializeScrollListener()}else this.isColumnVisible=!1,this.destroyScrollListener&&(this.destroyScrollListener(),this.destroyScrollListener=void 0)}),{threshold:.001,root:this.parentEl}).observe(this.el),null!==parentEl&&parentEl.addEventListener("ionInputModeChange",(ev=>this.inputModeChange(ev)))}componentDidRender(){const{el,activeItem,isColumnVisible,value}=this;if(isColumnVisible&&!activeItem){const firstOption=el.querySelector("ion-picker-column-option");null!==firstOption&&firstOption.value!==value&&this.setValue(firstOption.value)}}async scrollActiveItemIntoView(smooth=!1){const activeEl=this.activeItem;activeEl&&this.centerPickerItemInView(activeEl,smooth,!1)}async setValue(value){!0!==this.disabled&&this.value!==value&&(this.value=value,this.ionChange.emit({value}))}async setFocus(){this.assistiveFocusable&&this.assistiveFocusable.focus()}connectedCallback(){var _a;this.ariaLabel=null!==(_a=this.el.getAttribute("aria-label"))&&void 0!==_a?_a:"Select a value"}get activeItem(){const{value}=this;return Array.from(this.el.querySelectorAll("ion-picker-column-option")).find((option=>!(!this.disabled&&option.disabled)&&option.value===value))}render(){const{color,disabled,isActive,numericInput}=this,mode=(0,_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_3__.g)(this);return(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"a221dc10f1eb7c41637a16d2c7167c16939822fd",class:(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_6__.c)(color,{[mode]:!0,"picker-column-active":isActive,"picker-column-numeric-input":numericInput,"picker-column-disabled":disabled})},this.renderAssistiveFocusable(),(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"81b0656f606856f3dc0a657bf167d81a5011405e",name:"prefix"}),(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"71b9de67c04150255dd66592601c9d926db0c31c","aria-hidden":"true",class:"picker-opts",ref:el=>{this.scrollEl=el},tabIndex:-1},(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"ebdc2f08c83db0cf17b4be29f28fcb00f529601e",class:"picker-item-empty","aria-hidden":"true"}," "),(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"04ab56fcb8e6a7d6af00204c4560feb99ff34a56",class:"picker-item-empty","aria-hidden":"true"}," "),(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"6cf8f538903faf0fe1e4130f3eaf7b4e2e17cb52",class:"picker-item-empty","aria-hidden":"true"}," "),(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"1cc392307b70c576be5b81b5226ceba735957f0f"}),(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"23e3f28e2a99b9aa8b7c8f68ad9583e3ca63e9e2",class:"picker-item-empty","aria-hidden":"true"}," "),(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"8a0563f09780c3116af0caebe4f40587ec1f041f",class:"picker-item-empty","aria-hidden":"true"}," "),(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"13207e248fc0009f37e0c90a3ee2bac2f130b856",class:"picker-item-empty","aria-hidden":"true"}," ")),(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"55ecf2ab5f214f936c2468cbdb7952daf89416b8",name:"suffix"}))}get el(){return(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{"aria-label":["ariaLabelChanged"],value:["valueChange"]}}},PICKER_ITEM_ACTIVE_CLASS="option-active";PickerColumn.style=":host{display:flex;position:relative;align-items:center;justify-content:center;max-width:100%;height:200px;font-size:22px;text-align:center}.assistive-focusable{left:0;right:0;top:0;bottom:0;position:absolute;z-index:1;pointer-events:none}.assistive-focusable:focus{outline:none}.picker-opts{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;min-width:26px;max-height:200px;outline:none;text-align:inherit;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none}.picker-item-empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.picker-opts::-webkit-scrollbar{display:none}::slotted(ion-picker-column-option){display:block;scroll-snap-align:center}.picker-item-empty,:host(:not([disabled])) ::slotted(ion-picker-column-option.option-disabled){scroll-snap-align:none}::slotted([slot=prefix]),::slotted([slot=suffix]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}::slotted([slot=prefix]){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;justify-content:end}::slotted([slot=suffix]){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;justify-content:start}:host(.picker-column-disabled) .picker-opts{overflow-y:hidden}:host(.picker-column-disabled) ::slotted(ion-picker-column-option){cursor:default;opacity:0.4;pointer-events:none}@media (any-hover: hover){:host(:focus) .picker-opts{outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}";const PickerColumnOption=class{constructor(hostRef){(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.pickerColumn=null,this.ariaLabel=null,this.disabled=!1,this.value=void 0,this.color="primary"}onAriaLabelChange(ariaLbl){this.ariaLabel=ariaLbl}componentWillLoad(){const inheritedAttributes=(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_5__.c)(this.el,["aria-label"]);this.ariaLabel=inheritedAttributes["aria-label"]||null}connectedCallback(){this.pickerColumn=this.el.closest("ion-picker-column")}disconnectedCallback(){this.pickerColumn=null}componentDidLoad(){const{pickerColumn}=this;null!==pickerColumn&&pickerColumn.scrollActiveItemIntoView()}onClick(){const{pickerColumn}=this;null!==pickerColumn&&pickerColumn.setValue(this.value)}render(){const{color,disabled,ariaLabel}=this,mode=(0,_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_3__.g)(this);return(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"c743c6ef44bb9f765cc15b3b5d2864de6520203a",class:(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_6__.c)(color,{[mode]:!0,"option-disabled":disabled})},(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"4c3d9eb245c52b2c007f727e145cfb55759bd7a9",tabindex:"-1","aria-label":ariaLabel,disabled,onClick:()=>this.onClick()},(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"4c907d2187cbe9d5941e27f2b12578e2b7271461"})))}get el(){return(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{"aria-label":["onAriaLabelChange"]}}};PickerColumnOption.style={ios:"button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}",md:"button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}:host(.option-active){color:var(--ion-color-base)}"}},"../../packages/core/dist/esm/theme-516b22d6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
/*! For license information please see 8700.51965805.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[8700,7806],{"../../packages/core/dist/esm/framework-delegate-f77162fc.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>CoreDelegate,a:()=>attachComponent,d:()=>detachComponent});var _helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/helpers-13791ab7.js");const attachComponent=async(delegate,container,component,cssClasses,componentProps,inline)=>{var _a;if(delegate)return delegate.attachViewToDom(container,component,componentProps,cssClasses);if(!(inline||"string"==typeof component||component instanceof HTMLElement))throw new Error("framework delegate is missing");const el="string"==typeof component?null===(_a=container.ownerDocument)||void 0===_a?void 0:_a.createElement(component):component;return cssClasses&&cssClasses.forEach((c=>el.classList.add(c))),componentProps&&Object.assign(el,componentProps),container.appendChild(el),await new Promise((resolve=>(0,_helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_0__.d)(el,resolve))),el},detachComponent=(delegate,element)=>{if(element){if(delegate){const container=element.parentElement;return delegate.removeViewFromDom(container,element)}element.remove()}return Promise.resolve()},CoreDelegate=()=>{let BaseComponent,Reference;return{attachViewToDom:async(parentElement,userComponent,userComponentProps={},cssClasses=[])=>{var _a,_b;let ChildComponent;if(BaseComponent=parentElement,userComponent){const el="string"==typeof userComponent?null===(_a=BaseComponent.ownerDocument)||void 0===_a?void 0:_a.createElement(userComponent):userComponent;cssClasses.forEach((c=>el.classList.add(c))),Object.assign(el,userComponentProps),BaseComponent.appendChild(el),ChildComponent=el,await new Promise((resolve=>(0,_helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_0__.d)(el,resolve)))}else if(BaseComponent.children.length>0&&("ION-MODAL"===BaseComponent.tagName||"ION-POPOVER"===BaseComponent.tagName)){if(!(ChildComponent=BaseComponent.children[0]).classList.contains("ion-delegate-host")){const el=null===(_b=BaseComponent.ownerDocument)||void 0===_b?void 0:_b.createElement("div");el.classList.add("ion-delegate-host"),cssClasses.forEach((c=>el.classList.add(c))),el.append(...BaseComponent.children),BaseComponent.appendChild(el),ChildComponent=el}}const app=document.querySelector("ion-app")||document.body;return Reference=document.createComment("ionic teleport"),BaseComponent.parentNode.insertBefore(Reference,BaseComponent),app.appendChild(BaseComponent),null!=ChildComponent?ChildComponent:BaseComponent},removeViewFromDom:()=>(BaseComponent&&Reference&&(Reference.parentNode.insertBefore(BaseComponent,Reference),Reference.remove()),Promise.resolve())}}},"../../packages/core/dist/esm/hardware-back-button-b3a8b0cd.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MENU_BACK_BUTTON_PRIORITY:()=>MENU_BACK_BUTTON_PRIORITY,OVERLAY_BACK_BUTTON_PRIORITY:()=>OVERLAY_BACK_BUTTON_PRIORITY,blockHardwareBackButton:()=>blockHardwareBackButton,startHardwareBackButton:()=>startHardwareBackButton});const blockHardwareBackButton=()=>{document.addEventListener("backbutton",(()=>{}))},startHardwareBackButton=()=>{const doc=document;let busy=!1;doc.addEventListener("backbutton",(()=>{if(busy)return;let index=0,handlers=[];const ev=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(priority,handler){handlers.push({priority,handler,id:index++})}}});doc.dispatchEvent(ev);const processHandlers=()=>{if(handlers.length>0){let selectedHandler={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};handlers.forEach((handler=>{handler.priority>=selectedHandler.priority&&(selectedHandler=handler)})),busy=!0,handlers=handlers.filter((handler=>handler.id!==selectedHandler.id)),(async handlerRegister=>{try{if(null==handlerRegister?void 0:handlerRegister.handler){const result=handlerRegister.handler(processHandlers);null!=result&&await result}}catch(e){console.error(e)}})(selectedHandler).then((()=>busy=!1))}};processHandlers()}))},OVERLAY_BACK_BUTTON_PRIORITY=100,MENU_BACK_BUTTON_PRIORITY=99},"../../packages/core/dist/esm/helpers-13791ab7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>componentOnReady,e:()=>renderHiddenInput,f:()=>clamp,g:()=>getElementRoot,h:()=>isEndSide,i:()=>inheritAriaAttributes,j:()=>focusElement,k:()=>assert,l:()=>hasLazyBuild,m:()=>debounceEvent,n:()=>getAriaLabel,o:()=>findItemLabel,p:()=>debounce,q:()=>hasShadowDom,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync,u:()=>now,v:()=>pointerCoord});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,findItemLabel=componentEl=>{const itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},focusElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},getAriaLabel=(componentEl,inputId)=>{let labelText;const labelledBy=componentEl.getAttribute("aria-labelledby"),componentId=componentEl.id;let labelId=null!==labelledBy&&""!==labelledBy.trim()?labelledBy:inputId+"-lbl",label=null!==labelledBy&&""!==labelledBy.trim()?document.getElementById(labelledBy):findItemLabel(componentEl);return label?(null===labelledBy&&(label.id=labelId),labelText=label.textContent,label.setAttribute("aria-hidden","true")):""!==componentId.trim()&&(label=document.querySelector(`label[for="${componentId}"]`),label&&(""!==label.id?labelId=label.id:label.id=labelId=`${componentId}-lbl`,labelText=label.textContent)),{label,labelId,labelText}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=ev=>ev.timeStamp||Date.now(),pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/index-24e88bd3.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>printIonError,b:()=>printRequiredElementError,p:()=>printIonWarning});const printIonWarning=(message,...params)=>console.warn(`[Ionic Warning]: ${message}`,...params),printIonError=(message,...params)=>console.error(`[Ionic Error]: ${message}`,...params),printRequiredElementError=(el,...targetSelectors)=>console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(" or ")}.`)},"../../packages/core/dist/esm/overlays-afc9199b.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>BACKDROP,G:()=>GESTURE,a:()=>createTriggerController,b:()=>present,c:()=>createDelegateController,d:()=>dismiss,e:()=>eventMethod,f:()=>activeAnimations,g:()=>getPresentedOverlay,h:()=>safeCall,i:()=>isCancel,j:()=>popoverController,k:()=>actionSheetController,l:()=>alertController,m:()=>focusFirstDescendant,p:()=>prepareOverlay,s:()=>setOverlayId});var _index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-938c089e.js"),_ionic_global_b152ee50_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-b152ee50.js"),_framework_delegate_f77162fc_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/dist/esm/framework-delegate-f77162fc.js"),_hardware_back_button_b3a8b0cd_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/hardware-back-button-b3a8b0cd.js"),_helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/helpers-13791ab7.js"),_index_24e88bd3_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/dist/esm/index-24e88bd3.js");let lastOverlayIndex=0,lastId=0;const activeAnimations=new WeakMap,createController=tagName=>({create:options=>createOverlay(tagName,options),dismiss:(data,role,id)=>dismissOverlay(document,data,role,tagName,id),getTop:async()=>getPresentedOverlay(document,tagName)}),alertController=createController("ion-alert"),actionSheetController=createController("ion-action-sheet"),popoverController=createController("ion-popover"),prepareOverlay=el=>{"undefined"!=typeof document&&connectListeners(document);const overlayIndex=lastOverlayIndex++;el.overlayIndex=overlayIndex},setOverlayId=el=>(el.hasAttribute("id")||(el.id="ion-overlay-"+ ++lastId),el.id),createOverlay=(tagName,opts)=>"undefined"!=typeof window&&void 0!==window.customElements?window.customElements.whenDefined(tagName).then((()=>{const element=document.createElement(tagName);return element.classList.add("overlay-hidden"),Object.assign(element,Object.assign(Object.assign({},opts),{hasController:!0})),getAppRoot(document).appendChild(element),new Promise((resolve=>(0,_helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_2__.d)(element,resolve)))})):Promise.resolve(),focusableQueryString='[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])',focusFirstDescendant=(ref,overlay)=>{let firstInput=ref.querySelector(focusableQueryString);const shadowRoot=null==firstInput?void 0:firstInput.shadowRoot;shadowRoot&&(firstInput=shadowRoot.querySelector(focusableQueryString)||firstInput),firstInput?(0,_helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_2__.j)(firstInput):overlay.focus()},focusLastDescendant=(ref,overlay)=>{const inputs=Array.from(ref.querySelectorAll(focusableQueryString));let lastInput=inputs.length>0?inputs[inputs.length-1]:null;const shadowRoot=null==lastInput?void 0:lastInput.shadowRoot;shadowRoot&&(lastInput=shadowRoot.querySelector(focusableQueryString)||lastInput),lastInput?lastInput.focus():overlay.focus()},trapKeyboardFocus=(ev,doc)=>{const lastOverlay=getPresentedOverlay(doc,"ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover"),target=ev.target;if(!lastOverlay||!target)return;if(lastOverlay.classList.contains("ion-disable-focus-trap"))return;lastOverlay.shadowRoot?(()=>{if(lastOverlay.contains(target))lastOverlay.lastFocus=target;else{const lastFocus=lastOverlay.lastFocus;focusFirstDescendant(lastOverlay,lastOverlay),lastFocus===doc.activeElement&&focusLastDescendant(lastOverlay,lastOverlay),lastOverlay.lastFocus=doc.activeElement}})():(()=>{if(lastOverlay===target)lastOverlay.lastFocus=void 0;else{const overlayRoot=(0,_helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_2__.g)(lastOverlay);if(!overlayRoot.contains(target))return;const overlayWrapper=overlayRoot.querySelector(".ion-overlay-wrapper");if(!overlayWrapper)return;if(overlayWrapper.contains(target)||target===overlayRoot.querySelector("ion-backdrop"))lastOverlay.lastFocus=target;else{const lastFocus=lastOverlay.lastFocus;focusFirstDescendant(overlayWrapper,lastOverlay),lastFocus===doc.activeElement&&focusLastDescendant(overlayWrapper,lastOverlay),lastOverlay.lastFocus=doc.activeElement}}})()},connectListeners=doc=>{0===lastOverlayIndex&&(lastOverlayIndex=1,doc.addEventListener("focus",(ev=>{trapKeyboardFocus(ev,doc)}),!0),doc.addEventListener("ionBackButton",(ev=>{const lastOverlay=getPresentedOverlay(doc);(null==lastOverlay?void 0:lastOverlay.backdropDismiss)&&ev.detail.register(_hardware_back_button_b3a8b0cd_js__WEBPACK_IMPORTED_MODULE_3__.OVERLAY_BACK_BUTTON_PRIORITY,(()=>lastOverlay.dismiss(void 0,BACKDROP)))})),doc.addEventListener("keydown",(ev=>{if("Escape"===ev.key){const lastOverlay=getPresentedOverlay(doc);(null==lastOverlay?void 0:lastOverlay.backdropDismiss)&&lastOverlay.dismiss(void 0,BACKDROP)}})))},dismissOverlay=(doc,data,role,overlayTag,id)=>{const overlay=getPresentedOverlay(doc,overlayTag,id);return overlay?overlay.dismiss(data,role):Promise.reject("overlay does not exist")},getPresentedOverlays=(doc,overlayTag)=>((doc,selector)=>(void 0===selector&&(selector="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(doc.querySelectorAll(selector)).filter((c=>c.overlayIndex>0))))(doc,overlayTag).filter((o=>!o.classList.contains("overlay-hidden"))),getPresentedOverlay=(doc,overlayTag,id)=>{const overlays=getPresentedOverlays(doc,overlayTag);return void 0===id?overlays[overlays.length-1]:overlays.find((o=>o.id===id))},setRootAriaHidden=(hidden=!1)=>{const viewContainer=getAppRoot(document).querySelector("ion-router-outlet, ion-nav, #ion-view-container-root");viewContainer&&(hidden?viewContainer.setAttribute("aria-hidden","true"):viewContainer.removeAttribute("aria-hidden"))},present=async(overlay,name,iosEnterAnimation,mdEnterAnimation,opts)=>{var _a,_b;if(overlay.presented)return;setRootAriaHidden(!0),overlay.presented=!0,overlay.willPresent.emit(),null===(_a=overlay.willPresentShorthand)||void 0===_a||_a.emit();const mode=(0,_ionic_global_b152ee50_js__WEBPACK_IMPORTED_MODULE_1__.g)(overlay),animationBuilder=overlay.enterAnimation?overlay.enterAnimation:_ionic_global_b152ee50_js__WEBPACK_IMPORTED_MODULE_1__.c.get(name,"ios"===mode?iosEnterAnimation:mdEnterAnimation);await overlayAnimation(overlay,animationBuilder,overlay.el,opts)&&(overlay.didPresent.emit(),null===(_b=overlay.didPresentShorthand)||void 0===_b||_b.emit()),"ION-TOAST"!==overlay.el.tagName&&focusPreviousElementOnDismiss(overlay.el),!overlay.keyboardClose||null!==document.activeElement&&overlay.el.contains(document.activeElement)||overlay.el.focus()},focusPreviousElementOnDismiss=async overlayEl=>{let previousElement=document.activeElement;if(!previousElement)return;const shadowRoot=null==previousElement?void 0:previousElement.shadowRoot;shadowRoot&&(previousElement=shadowRoot.querySelector(focusableQueryString)||previousElement),await overlayEl.onDidDismiss(),previousElement.focus()},dismiss=async(overlay,data,role,name,iosLeaveAnimation,mdLeaveAnimation,opts)=>{var _a,_b;if(!overlay.presented)return!1;void 0!==_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.d&&1===getPresentedOverlays(_index_938c089e_js__WEBPACK_IMPORTED_MODULE_0__.d).length&&setRootAriaHidden(!1),overlay.presented=!1;try{overlay.el.style.setProperty("pointer-events","none"),overlay.willDismiss.emit({data,role}),null===(_a=overlay.willDismissShorthand)||void 0===_a||_a.emit({data,role});const mode=(0,_ionic_global_b152ee50_js__WEBPACK_IMPORTED_MODULE_1__.g)(overlay),animationBuilder=overlay.leaveAnimation?overlay.leaveAnimation:_ionic_global_b152ee50_js__WEBPACK_IMPORTED_MODULE_1__.c.get(name,"ios"===mode?iosLeaveAnimation:mdLeaveAnimation);role!==GESTURE&&await overlayAnimation(overlay,animationBuilder,overlay.el,opts),overlay.didDismiss.emit({data,role}),null===(_b=overlay.didDismissShorthand)||void 0===_b||_b.emit({data,role}),activeAnimations.delete(overlay),overlay.el.classList.add("overlay-hidden"),overlay.el.style.removeProperty("pointer-events"),void 0!==overlay.el.lastFocus&&(overlay.el.lastFocus=void 0)}catch(err){console.error(err)}return overlay.el.remove(),!0},getAppRoot=doc=>doc.querySelector("ion-app")||doc.body,overlayAnimation=async(overlay,animationBuilder,baseEl,opts)=>{baseEl.classList.remove("overlay-hidden");const animation=animationBuilder(overlay.el,opts);overlay.animated&&_ionic_global_b152ee50_js__WEBPACK_IMPORTED_MODULE_1__.c.getBoolean("animated",!0)||animation.duration(0),overlay.keyboardClose&&animation.beforeAddWrite((()=>{const activeElement=baseEl.ownerDocument.activeElement;(null==activeElement?void 0:activeElement.matches("input,ion-input, ion-textarea"))&&activeElement.blur()}));const activeAni=activeAnimations.get(overlay)||[];return activeAnimations.set(overlay,[...activeAni,animation]),await animation.play(),!0},eventMethod=(element,eventName)=>{let resolve;const promise=new Promise((r=>resolve=r));return onceEvent(element,eventName,(event=>{resolve(event.detail)})),promise},onceEvent=(element,eventName,callback)=>{const handler=ev=>{(0,_helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_2__.b)(element,eventName,handler),callback(ev)};(0,_helpers_13791ab7_js__WEBPACK_IMPORTED_MODULE_2__.a)(element,eventName,handler)},isCancel=role=>"cancel"===role||role===BACKDROP,defaultGate=h=>h(),safeCall=(handler,arg)=>{if("function"==typeof handler){return _ionic_global_b152ee50_js__WEBPACK_IMPORTED_MODULE_1__.c.get("_zoneGate",defaultGate)((()=>{try{return handler(arg)}catch(e){throw e}}))}},BACKDROP="backdrop",GESTURE="gesture",createDelegateController=ref=>{let workingDelegate,inline=!1;const coreDelegate=(0,_framework_delegate_f77162fc_js__WEBPACK_IMPORTED_MODULE_4__.C)(),getDelegate=(force=!1)=>{if(workingDelegate&&!force)return{delegate:workingDelegate,inline};const{el,hasController,delegate}=ref,parentEl=el.parentNode;return inline=null!==parentEl&&!hasController,workingDelegate=inline?delegate||coreDelegate:delegate,{inline,delegate:workingDelegate}};return{attachViewToDom:async component=>{const{delegate}=getDelegate(!0);if(delegate)return await delegate.attachViewToDom(ref.el,component);const{hasController}=ref;if(hasController&&void 0!==component)throw new Error("framework delegate is missing");return null},removeViewFromDom:()=>{const{delegate}=getDelegate();delegate&&void 0!==ref.el&&delegate.removeViewFromDom(ref.el.parentElement,ref.el)}}},createTriggerController=()=>{let destroyTriggerInteraction;const removeClickListener=()=>{destroyTriggerInteraction&&(destroyTriggerInteraction(),destroyTriggerInteraction=void 0)};return{addClickListener:(el,trigger)=>{removeClickListener();const triggerEl=void 0!==trigger?document.getElementById(trigger):null;if(!triggerEl)return void(0,_index_24e88bd3_js__WEBPACK_IMPORTED_MODULE_5__.p)(`A trigger element with the ID "${trigger}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`,el);destroyTriggerInteraction=((targetEl,overlayEl)=>{const openOverlay=()=>{overlayEl.present()};return targetEl.addEventListener("click",openOverlay),()=>{targetEl.removeEventListener("click",openOverlay)}})(triggerEl,el)},removeClickListener}}}}]);
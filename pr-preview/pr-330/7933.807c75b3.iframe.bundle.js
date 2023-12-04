/*! For license information please see 7933.807c75b3.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[7933],{"../../packages/core/dist/esm/cubic-bezier-1aed87b5.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>getTimeGivenProgression});const getTimeGivenProgression=(p0,p1,p2,p3,progression)=>solveCubicBezier(p0[1],p1[1],p2[1],p3[1],progression).map((tValue=>solveCubicParametricEquation(p0[0],p1[0],p2[0],p3[0],tValue))),solveCubicParametricEquation=(p0,p1,p2,p3,t)=>t*(3*p1*Math.pow(t-1,2)+t*(-3*p2*t+3*p2+p3*t))-p0*Math.pow(t-1,3),solveCubicBezier=(p0,p1,p2,p3,refPoint)=>solveCubicEquation((p3-=refPoint)-3*(p2-=refPoint)+3*(p1-=refPoint)-(p0-=refPoint),3*p2-6*p1+3*p0,3*p1-3*p0,p0).filter((root=>root>=0&&root<=1)),solveCubicEquation=(a,b,c,d)=>{if(0===a)return((a,b,c)=>{const discriminant=b*b-4*a*c;return discriminant<0?[]:[(-b+Math.sqrt(discriminant))/(2*a),(-b-Math.sqrt(discriminant))/(2*a)]})(b,c,d);const p=(3*(c/=a)-(b/=a)*b)/3,q=(2*b*b*b-9*b*c+27*(d/=a))/27;if(0===p)return[Math.pow(-q,1/3)];if(0===q)return[Math.sqrt(-p),-Math.sqrt(-p)];const discriminant=Math.pow(q/2,2)+Math.pow(p/3,3);if(0===discriminant)return[Math.pow(q/2,.5)-b/3];if(discriminant>0)return[Math.pow(-q/2+Math.sqrt(discriminant),1/3)-Math.pow(q/2+Math.sqrt(discriminant),1/3)-b/3];const r=Math.sqrt(Math.pow(-p/3,3)),phi=Math.acos(-q/(2*Math.sqrt(Math.pow(-p/3,3)))),s=2*Math.pow(r,1/3);return[s*Math.cos(phi/3)-b/3,s*Math.cos((phi+2*Math.PI)/3)-b/3,s*Math.cos((phi+4*Math.PI)/3)-b/3]}},"../../packages/core/dist/esm/framework-delegate-4cc69a94.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>CoreDelegate,a:()=>attachComponent,d:()=>detachComponent});var _helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/helpers-c59bd181.js");const attachComponent=async(delegate,container,component,cssClasses,componentProps,inline)=>{var _a;if(delegate)return delegate.attachViewToDom(container,component,componentProps,cssClasses);if(!(inline||"string"==typeof component||component instanceof HTMLElement))throw new Error("framework delegate is missing");const el="string"==typeof component?null===(_a=container.ownerDocument)||void 0===_a?void 0:_a.createElement(component):component;return cssClasses&&cssClasses.forEach((c=>el.classList.add(c))),componentProps&&Object.assign(el,componentProps),container.appendChild(el),await new Promise((resolve=>(0,_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_0__.d)(el,resolve))),el},detachComponent=(delegate,element)=>{if(element){if(delegate){const container=element.parentElement;return delegate.removeViewFromDom(container,element)}element.remove()}return Promise.resolve()},CoreDelegate=()=>{let BaseComponent,Reference;return{attachViewToDom:async(parentElement,userComponent,userComponentProps={},cssClasses=[])=>{var _a,_b;let ChildComponent;if(BaseComponent=parentElement,userComponent){const el="string"==typeof userComponent?null===(_a=BaseComponent.ownerDocument)||void 0===_a?void 0:_a.createElement(userComponent):userComponent;cssClasses.forEach((c=>el.classList.add(c))),Object.assign(el,userComponentProps),BaseComponent.appendChild(el),ChildComponent=el,await new Promise((resolve=>(0,_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_0__.d)(el,resolve)))}else if(BaseComponent.children.length>0&&("ION-MODAL"===BaseComponent.tagName||"ION-POPOVER"===BaseComponent.tagName)){if(!(ChildComponent=BaseComponent.children[0]).classList.contains("ion-delegate-host")){const el=null===(_b=BaseComponent.ownerDocument)||void 0===_b?void 0:_b.createElement("div");el.classList.add("ion-delegate-host"),cssClasses.forEach((c=>el.classList.add(c))),el.append(...BaseComponent.children),BaseComponent.appendChild(el),ChildComponent=el}}const app=document.querySelector("ion-app")||document.body;return Reference=document.createComment("ionic teleport"),BaseComponent.parentNode.insertBefore(Reference,BaseComponent),app.appendChild(BaseComponent),null!=ChildComponent?ChildComponent:BaseComponent},removeViewFromDom:()=>(BaseComponent&&Reference&&(Reference.parentNode.insertBefore(BaseComponent,Reference),Reference.remove()),Promise.resolve())}}},"../../packages/core/dist/esm/helpers-c59bd181.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>componentOnReady,e:()=>renderHiddenInput,f:()=>clamp,g:()=>getElementRoot,h:()=>hasLazyBuild,i:()=>inheritAriaAttributes,j:()=>isEndSide,k:()=>focusElement,l:()=>assert,m:()=>debounceEvent,n:()=>getAriaLabel,o:()=>findItemLabel,p:()=>debounce,q:()=>hasShadowDom,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync,u:()=>now,v:()=>pointerCoord});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,findItemLabel=componentEl=>{const itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},focusElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},getAriaLabel=(componentEl,inputId)=>{let labelText;const labelledBy=componentEl.getAttribute("aria-labelledby"),componentId=componentEl.id;let labelId=null!==labelledBy&&""!==labelledBy.trim()?labelledBy:inputId+"-lbl",label=null!==labelledBy&&""!==labelledBy.trim()?document.getElementById(labelledBy):findItemLabel(componentEl);return label?(null===labelledBy&&(label.id=labelId),labelText=label.textContent,label.setAttribute("aria-hidden","true")):""!==componentId.trim()&&(label=document.querySelector(`label[for="${componentId}"]`),label&&(""!==label.id?labelId=label.id:label.id=labelId=`${componentId}-lbl`,labelText=label.textContent)),{label,labelId,labelText}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=ev=>ev.timeStamp||Date.now(),pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/index-8cf0284d.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>LIFECYCLE_WILL_UNLOAD,a:()=>LIFECYCLE_WILL_LEAVE,b:()=>LIFECYCLE_DID_LEAVE,d:()=>deepReady,g:()=>getIonPageElement,l:()=>lifecycle,s:()=>setPageHidden,t:()=>transition,w:()=>waitForMount});var _index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-16e36c7a.js"),_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/helpers-c59bd181.js");const LIFECYCLE_WILL_LEAVE="ionViewWillLeave",LIFECYCLE_DID_LEAVE="ionViewDidLeave",LIFECYCLE_WILL_UNLOAD="ionViewWillUnload",transition=opts=>new Promise(((resolve,reject)=>{(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.w)((()=>{beforeTransition(opts),runTransition(opts).then((result=>{result.animation&&result.animation.destroy(),afterTransition(opts),resolve(result)}),(error=>{afterTransition(opts),reject(error)}))}))})),beforeTransition=opts=>{const enteringEl=opts.enteringEl,leavingEl=opts.leavingEl;setZIndex(enteringEl,leavingEl,opts.direction),opts.showGoBack?enteringEl.classList.add("can-go-back"):enteringEl.classList.remove("can-go-back"),setPageHidden(enteringEl,!1),enteringEl.style.setProperty("pointer-events","none"),leavingEl&&(setPageHidden(leavingEl,!1),leavingEl.style.setProperty("pointer-events","none"))},runTransition=async opts=>{const animationBuilder=await getAnimationBuilder(opts);return animationBuilder&&_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.B.isBrowser?animation(animationBuilder,opts):noAnimation(opts)},afterTransition=opts=>{const enteringEl=opts.enteringEl,leavingEl=opts.leavingEl;enteringEl.classList.remove("ion-page-invisible"),enteringEl.style.removeProperty("pointer-events"),void 0!==leavingEl&&(leavingEl.classList.remove("ion-page-invisible"),leavingEl.style.removeProperty("pointer-events"))},getAnimationBuilder=async opts=>{if(!opts.leavingEl||!opts.animated||0===opts.duration)return;if(opts.animationBuilder)return opts.animationBuilder;return"ios"===opts.mode?(await Promise.all([__webpack_require__.e(5088),__webpack_require__.e(7642)]).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/ios.transition-744cf0c5.js"))).iosTransitionAnimation:(await Promise.all([__webpack_require__.e(5088),__webpack_require__.e(2862)]).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/md.transition-6e110353.js"))).mdTransitionAnimation},animation=async(animationBuilder,opts)=>{await waitForReady(opts,!0);const trans=animationBuilder(opts.baseEl,opts);fireWillEvents(opts.enteringEl,opts.leavingEl);const didComplete=await playTransition(trans,opts);return opts.progressCallback&&opts.progressCallback(void 0),didComplete&&fireDidEvents(opts.enteringEl,opts.leavingEl),{hasCompleted:didComplete,animation:trans}},noAnimation=async opts=>{const enteringEl=opts.enteringEl,leavingEl=opts.leavingEl;return await waitForReady(opts,!1),fireWillEvents(enteringEl,leavingEl),fireDidEvents(enteringEl,leavingEl),{hasCompleted:!0}},waitForReady=async(opts,defaultDeep)=>{(void 0!==opts.deepWait?opts.deepWait:defaultDeep)&&await Promise.all([deepReady(opts.enteringEl),deepReady(opts.leavingEl)]),await notifyViewReady(opts.viewIsReady,opts.enteringEl)},notifyViewReady=async(viewIsReady,enteringEl)=>{viewIsReady&&await viewIsReady(enteringEl)},playTransition=(trans,opts)=>{const progressCallback=opts.progressCallback,promise=new Promise((resolve=>{trans.onFinish((currentStep=>resolve(1===currentStep)))}));return progressCallback?(trans.progressStart(!0),progressCallback(trans)):trans.play(),promise},fireWillEvents=(enteringEl,leavingEl)=>{lifecycle(leavingEl,LIFECYCLE_WILL_LEAVE),lifecycle(enteringEl,"ionViewWillEnter")},fireDidEvents=(enteringEl,leavingEl)=>{lifecycle(enteringEl,"ionViewDidEnter"),lifecycle(leavingEl,LIFECYCLE_DID_LEAVE)},lifecycle=(el,eventName)=>{if(el){const ev=new CustomEvent(eventName,{bubbles:!1,cancelable:!1});el.dispatchEvent(ev)}},waitForMount=()=>new Promise((resolve=>(0,_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_1__.r)((()=>(0,_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_1__.r)((()=>resolve())))))),deepReady=async el=>{const element=el;if(element){if(null!=element.componentOnReady){if(null!=await element.componentOnReady())return}else if(null!=element.__registerHost){const waitForCustomElement=new Promise((resolve=>(0,_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_1__.r)(resolve)));return void await waitForCustomElement}await Promise.all(Array.from(element.children).map(deepReady))}},setPageHidden=(el,hidden)=>{hidden?(el.setAttribute("aria-hidden","true"),el.classList.add("ion-page-hidden")):(el.hidden=!1,el.removeAttribute("aria-hidden"),el.classList.remove("ion-page-hidden"))},setZIndex=(enteringEl,leavingEl,direction)=>{void 0!==enteringEl&&(enteringEl.style.zIndex="back"===direction?"99":"101"),void 0!==leavingEl&&(leavingEl.style.zIndex="100")},getIonPageElement=element=>{if(element.classList.contains("ion-page"))return element;const ionPage=element.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return ionPage||element}},"../../packages/core/dist/esm/ion-router-outlet.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_router_outlet:()=>RouterOutlet});var _index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-16e36c7a.js"),_cubic_bezier_1aed87b5_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/dist/esm/cubic-bezier-1aed87b5.js"),_framework_delegate_4cc69a94_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/dist/esm/framework-delegate-4cc69a94.js"),_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/dist/esm/helpers-c59bd181.js"),_lock_controller_b39007aa_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/lock-controller-b39007aa.js"),_index_8cf0284d_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/index-8cf0284d.js"),_ionic_global_aac7394f_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/ionic-global-aac7394f.js");const RouterOutlet=class{constructor(hostRef){(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionNavWillLoad=(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionNavWillLoad",7),this.ionNavWillChange=(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionNavWillChange",3),this.ionNavDidChange=(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionNavDidChange",3),this.lockController=(0,_lock_controller_b39007aa_js__WEBPACK_IMPORTED_MODULE_3__.c)(),this.gestureOrAnimationInProgress=!1,this.mode=(0,_ionic_global_aac7394f_js__WEBPACK_IMPORTED_MODULE_2__.g)(this),this.delegate=void 0,this.animated=!0,this.animation=void 0,this.swipeHandler=void 0}swipeHandlerChanged(){this.gesture&&this.gesture.enable(void 0!==this.swipeHandler)}async connectedCallback(){const onStart=()=>{this.gestureOrAnimationInProgress=!0,this.swipeHandler&&this.swipeHandler.onStart()};this.gesture=(await __webpack_require__.e(1032).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/swipe-back-4b2a0aba.js"))).createSwipeBackGesture(this.el,(()=>!this.gestureOrAnimationInProgress&&!!this.swipeHandler&&this.swipeHandler.canStart()),(()=>onStart()),(step=>{var _a;return null===(_a=this.ani)||void 0===_a?void 0:_a.progressStep(step)}),((shouldComplete,step,dur)=>{if(this.ani){this.ani.onFinish((()=>{this.gestureOrAnimationInProgress=!1,this.swipeHandler&&this.swipeHandler.onEnd(shouldComplete)}),{oneTimeCallback:!0});let newStepValue=shouldComplete?-.001:.001;shouldComplete?newStepValue+=(0,_cubic_bezier_1aed87b5_js__WEBPACK_IMPORTED_MODULE_4__.g)([0,0],[.32,.72],[0,1],[1,1],step)[0]:(this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),newStepValue+=(0,_cubic_bezier_1aed87b5_js__WEBPACK_IMPORTED_MODULE_4__.g)([0,0],[1,0],[.68,.28],[1,1],step)[0]),this.ani.progressEnd(shouldComplete?1:0,newStepValue,dur)}else this.gestureOrAnimationInProgress=!1})),this.swipeHandlerChanged()}componentWillLoad(){this.ionNavWillLoad.emit()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async commit(enteringEl,leavingEl,opts){const unlock=await this.lockController.lock();let changed=!1;try{changed=await this.transition(enteringEl,leavingEl,opts)}catch(e){console.error(e)}return unlock(),changed}async setRouteId(id,params,direction,animation){return{changed:await this.setRoot(id,params,{duration:"root"===direction?0:void 0,direction:"back"===direction?"back":"forward",animationBuilder:animation}),element:this.activeEl}}async getRouteId(){const active=this.activeEl;return active?{id:active.tagName,element:active,params:this.activeParams}:void 0}async setRoot(component,params,opts){if(this.activeComponent===component&&(0,_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_5__.s)(params,this.activeParams))return!1;const leavingEl=this.activeEl,enteringEl=await(0,_framework_delegate_4cc69a94_js__WEBPACK_IMPORTED_MODULE_6__.a)(this.delegate,this.el,component,["ion-page","ion-page-invisible"],params);return this.activeComponent=component,this.activeEl=enteringEl,this.activeParams=params,await this.commit(enteringEl,leavingEl,opts),await(0,_framework_delegate_4cc69a94_js__WEBPACK_IMPORTED_MODULE_6__.d)(this.delegate,leavingEl),!0}async transition(enteringEl,leavingEl,opts={}){if(leavingEl===enteringEl)return!1;this.ionNavWillChange.emit();const{el,mode}=this,animated=this.animated&&_ionic_global_aac7394f_js__WEBPACK_IMPORTED_MODULE_2__.c.getBoolean("animated",!0),animationBuilder=opts.animationBuilder||this.animation||_ionic_global_aac7394f_js__WEBPACK_IMPORTED_MODULE_2__.c.get("navAnimation");return await(0,_index_8cf0284d_js__WEBPACK_IMPORTED_MODULE_1__.t)(Object.assign(Object.assign({mode,animated,enteringEl,leavingEl,baseEl:el,deepWait:(0,_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_5__.h)(el),progressCallback:opts.progressAnimation?ani=>{void 0===ani||this.gestureOrAnimationInProgress?this.ani=ani:(this.gestureOrAnimationInProgress=!0,ani.onFinish((()=>{this.gestureOrAnimationInProgress=!1,this.swipeHandler&&this.swipeHandler.onEnd(!1)}),{oneTimeCallback:!0}),ani.progressEnd(0,0,0))}:void 0},opts),{animationBuilder})),this.ionNavDidChange.emit(),!0}render(){return(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)}get el(){return(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{swipeHandler:["swipeHandlerChanged"]}}};RouterOutlet.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}"},"../../packages/core/dist/esm/lock-controller-b39007aa.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createLockController});const createLockController=()=>{let waitPromise;return{lock:async()=>{const p=waitPromise;let resolve;return waitPromise=new Promise((r=>resolve=r)),void 0!==p&&await p,resolve}}}}}]);
/*! For license information please see 1453.f04d68bf.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[1453],{"../../packages/core/dist/esm/cubic-bezier-c467eebb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>getTimeGivenProgression});const getTimeGivenProgression=(p0,p1,p2,p3,progression)=>solveCubicBezier(p0[1],p1[1],p2[1],p3[1],progression).map((tValue=>solveCubicParametricEquation(p0[0],p1[0],p2[0],p3[0],tValue))),solveCubicParametricEquation=(p0,p1,p2,p3,t)=>t*(3*p1*Math.pow(t-1,2)+t*(-3*p2*t+3*p2+p3*t))-p0*Math.pow(t-1,3),solveCubicBezier=(p0,p1,p2,p3,refPoint)=>solveCubicEquation((p3-=refPoint)-3*(p2-=refPoint)+3*(p1-=refPoint)-(p0-=refPoint),3*p2-6*p1+3*p0,3*p1-3*p0,p0).filter((root=>root>=0&&root<=1)),solveCubicEquation=(a,b,c,d)=>{if(0===a)return((a,b,c)=>{const discriminant=b*b-4*a*c;return discriminant<0?[]:[(-b+Math.sqrt(discriminant))/(2*a),(-b-Math.sqrt(discriminant))/(2*a)]})(b,c,d);const p=(3*(c/=a)-(b/=a)*b)/3,q=(2*b*b*b-9*b*c+27*(d/=a))/27;if(0===p)return[Math.pow(-q,1/3)];if(0===q)return[Math.sqrt(-p),-Math.sqrt(-p)];const discriminant=Math.pow(q/2,2)+Math.pow(p/3,3);if(0===discriminant)return[Math.pow(q/2,.5)-b/3];if(discriminant>0)return[Math.pow(-q/2+Math.sqrt(discriminant),1/3)-Math.pow(q/2+Math.sqrt(discriminant),1/3)-b/3];const r=Math.sqrt(Math.pow(-p/3,3)),phi=Math.acos(-q/(2*Math.sqrt(Math.pow(-p/3,3)))),s=2*Math.pow(r,1/3);return[s*Math.cos(phi/3)-b/3,s*Math.cos((phi+2*Math.PI)/3)-b/3,s*Math.cos((phi+4*Math.PI)/3)-b/3]}},"../../packages/core/dist/esm/framework-delegate-c7fe8edd.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>CoreDelegate,a:()=>attachComponent,d:()=>detachComponent});var _helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/helpers-b14eeb70.js");const attachComponent=async(delegate,container,component,cssClasses,componentProps,inline)=>{var _a;if(delegate)return delegate.attachViewToDom(container,component,componentProps,cssClasses);if(!(inline||"string"==typeof component||component instanceof HTMLElement))throw new Error("framework delegate is missing");const el="string"==typeof component?null===(_a=container.ownerDocument)||void 0===_a?void 0:_a.createElement(component):component;return cssClasses&&cssClasses.forEach((c=>el.classList.add(c))),componentProps&&Object.assign(el,componentProps),container.appendChild(el),await new Promise((resolve=>(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_0__.e)(el,resolve))),el},detachComponent=(delegate,element)=>{if(element){if(delegate){const container=element.parentElement;return delegate.removeViewFromDom(container,element)}element.remove()}return Promise.resolve()},CoreDelegate=()=>{let BaseComponent,Reference;return{attachViewToDom:async(parentElement,userComponent,userComponentProps={},cssClasses=[])=>{var _a,_b;let ChildComponent;if(BaseComponent=parentElement,userComponent){const el="string"==typeof userComponent?null===(_a=BaseComponent.ownerDocument)||void 0===_a?void 0:_a.createElement(userComponent):userComponent;cssClasses.forEach((c=>el.classList.add(c))),Object.assign(el,userComponentProps),BaseComponent.appendChild(el),ChildComponent=el,await new Promise((resolve=>(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_0__.e)(el,resolve)))}else if(BaseComponent.children.length>0&&("ION-MODAL"===BaseComponent.tagName||"ION-POPOVER"===BaseComponent.tagName)){if(!(ChildComponent=BaseComponent.children[0]).classList.contains("ion-delegate-host")){const el=null===(_b=BaseComponent.ownerDocument)||void 0===_b?void 0:_b.createElement("div");el.classList.add("ion-delegate-host"),cssClasses.forEach((c=>el.classList.add(c))),el.append(...BaseComponent.children),BaseComponent.appendChild(el),ChildComponent=el}}const app=document.querySelector("ion-app")||document.body;return Reference=document.createComment("ionic teleport"),BaseComponent.parentNode.insertBefore(Reference,BaseComponent),app.appendChild(BaseComponent),null!=ChildComponent?ChildComponent:BaseComponent},removeViewFromDom:()=>(BaseComponent&&Reference&&(Reference.parentNode.insertBefore(BaseComponent,Reference),Reference.remove()),Promise.resolve())}}},"../../packages/core/dist/esm/helpers-b14eeb70.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>renderHiddenInput,e:()=>componentOnReady,f:()=>clamp,g:()=>getElementRoot,h:()=>isEndSide,i:()=>inheritAriaAttributes,j:()=>focusVisibleElement,k:()=>assert,l:()=>debounceEvent,m:()=>debounce,n:()=>hasLazyBuild,o:()=>hasShadowDom,p:()=>pointerCoord,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{void 0!==animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,focusVisibleElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/index-56e56893.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>LIFECYCLE_WILL_UNLOAD,a:()=>LIFECYCLE_WILL_LEAVE,b:()=>LIFECYCLE_DID_LEAVE,d:()=>deepReady,g:()=>getIonPageElement,l:()=>lifecycle,s:()=>setPageHidden,t:()=>transition,w:()=>waitForMount});var _ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/ionic-global-a9e3465e.js"),_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/index-4aef4473.js"),_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/index-f5dbb989.js"),_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/helpers-b14eeb70.js");const LIFECYCLE_WILL_LEAVE="ionViewWillLeave",LIFECYCLE_DID_LEAVE="ionViewDidLeave",LIFECYCLE_WILL_UNLOAD="ionViewWillUnload",moveFocus=el=>{el.tabIndex=-1,el.focus()},isVisible=el=>null!==el.offsetParent,LAST_FOCUS="ion-last-focus",focusController={saveViewFocus:referenceEl=>{if(_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_0__.c.get("focusManagerPriority",!1)){const activeEl=document.activeElement;null!==activeEl&&(null==referenceEl?void 0:referenceEl.contains(activeEl))&&activeEl.setAttribute(LAST_FOCUS,"true")}},setViewFocus:referenceEl=>{const focusManagerPriorities=_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_0__.c.get("focusManagerPriority",!1);if(Array.isArray(focusManagerPriorities)&&!referenceEl.contains(document.activeElement)){const lastFocus=referenceEl.querySelector(`[${LAST_FOCUS}]`);if(lastFocus&&isVisible(lastFocus))return void moveFocus(lastFocus);for(const priority of focusManagerPriorities)switch(priority){case"content":const content=referenceEl.querySelector('main, [role="main"]');if(content&&isVisible(content))return void moveFocus(content);break;case"heading":const headingOne=referenceEl.querySelector('h1, [role="heading"][aria-level="1"]');if(headingOne&&isVisible(headingOne))return void moveFocus(headingOne);break;case"banner":const header=referenceEl.querySelector('header, [role="banner"]');if(header&&isVisible(header))return void moveFocus(header);break;default:(0,_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_2__.p)(`Unrecognized focus manager priority value ${priority}`)}moveFocus(referenceEl)}}},transition=opts=>new Promise(((resolve,reject)=>{(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_1__.w)((()=>{beforeTransition(opts),runTransition(opts).then((result=>{result.animation&&result.animation.destroy(),afterTransition(opts),resolve(result)}),(error=>{afterTransition(opts),reject(error)}))}))})),beforeTransition=opts=>{const enteringEl=opts.enteringEl,leavingEl=opts.leavingEl;focusController.saveViewFocus(leavingEl),setZIndex(enteringEl,leavingEl,opts.direction),opts.showGoBack?enteringEl.classList.add("can-go-back"):enteringEl.classList.remove("can-go-back"),setPageHidden(enteringEl,!1),enteringEl.style.setProperty("pointer-events","none"),leavingEl&&(setPageHidden(leavingEl,!1),leavingEl.style.setProperty("pointer-events","none"))},runTransition=async opts=>{const animationBuilder=await getAnimationBuilder(opts);return animationBuilder&&_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_1__.B.isBrowser?animation(animationBuilder,opts):noAnimation(opts)},afterTransition=opts=>{const enteringEl=opts.enteringEl,leavingEl=opts.leavingEl;enteringEl.classList.remove("ion-page-invisible"),enteringEl.style.removeProperty("pointer-events"),void 0!==leavingEl&&(leavingEl.classList.remove("ion-page-invisible"),leavingEl.style.removeProperty("pointer-events")),focusController.setViewFocus(enteringEl)},getAnimationBuilder=async opts=>{if(!opts.leavingEl||!opts.animated||0===opts.duration)return;if(opts.animationBuilder)return opts.animationBuilder;return"ios"===opts.mode?(await Promise.all([__webpack_require__.e(1036),__webpack_require__.e(570)]).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/ios.transition-5778743c.js"))).iosTransitionAnimation:(await Promise.all([__webpack_require__.e(1036),__webpack_require__.e(8262)]).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/md.transition-404557b5.js"))).mdTransitionAnimation},animation=async(animationBuilder,opts)=>{await waitForReady(opts,!0);const trans=animationBuilder(opts.baseEl,opts);fireWillEvents(opts.enteringEl,opts.leavingEl);const didComplete=await playTransition(trans,opts);return opts.progressCallback&&opts.progressCallback(void 0),didComplete&&fireDidEvents(opts.enteringEl,opts.leavingEl),{hasCompleted:didComplete,animation:trans}},noAnimation=async opts=>{const enteringEl=opts.enteringEl,leavingEl=opts.leavingEl,focusManagerEnabled=_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_0__.c.get("focusManagerPriority",!1);return await waitForReady(opts,focusManagerEnabled),fireWillEvents(enteringEl,leavingEl),fireDidEvents(enteringEl,leavingEl),{hasCompleted:!0}},waitForReady=async(opts,defaultDeep)=>{(void 0!==opts.deepWait?opts.deepWait:defaultDeep)&&await Promise.all([deepReady(opts.enteringEl),deepReady(opts.leavingEl)]),await notifyViewReady(opts.viewIsReady,opts.enteringEl)},notifyViewReady=async(viewIsReady,enteringEl)=>{viewIsReady&&await viewIsReady(enteringEl)},playTransition=(trans,opts)=>{const progressCallback=opts.progressCallback,promise=new Promise((resolve=>{trans.onFinish((currentStep=>resolve(1===currentStep)))}));return progressCallback?(trans.progressStart(!0),progressCallback(trans)):trans.play(),promise},fireWillEvents=(enteringEl,leavingEl)=>{lifecycle(leavingEl,LIFECYCLE_WILL_LEAVE),lifecycle(enteringEl,"ionViewWillEnter")},fireDidEvents=(enteringEl,leavingEl)=>{lifecycle(enteringEl,"ionViewDidEnter"),lifecycle(leavingEl,LIFECYCLE_DID_LEAVE)},lifecycle=(el,eventName)=>{if(el){const ev=new CustomEvent(eventName,{bubbles:!1,cancelable:!1});el.dispatchEvent(ev)}},waitForMount=()=>new Promise((resolve=>(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_3__.r)((()=>(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_3__.r)((()=>resolve())))))),deepReady=async el=>{const element=el;if(element){if(null!=element.componentOnReady){if(null!=await element.componentOnReady())return}else if(null!=element.__registerHost){const waitForCustomElement=new Promise((resolve=>(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_3__.r)(resolve)));return void await waitForCustomElement}await Promise.all(Array.from(element.children).map(deepReady))}},setPageHidden=(el,hidden)=>{hidden?(el.setAttribute("aria-hidden","true"),el.classList.add("ion-page-hidden")):(el.hidden=!1,el.removeAttribute("aria-hidden"),el.classList.remove("ion-page-hidden"))},setZIndex=(enteringEl,leavingEl,direction)=>{void 0!==enteringEl&&(enteringEl.style.zIndex="back"===direction?"99":"101"),void 0!==leavingEl&&(leavingEl.style.zIndex="100")},getIonPageElement=element=>{if(element.classList.contains("ion-page"))return element;const ionPage=element.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return ionPage||element}},"../../packages/core/dist/esm/index-f5dbb989.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>printIonError,b:()=>printRequiredElementError,p:()=>printIonWarning});const printIonWarning=(message,...params)=>console.warn(`[Ionic Warning]: ${message}`,...params),printIonError=(message,...params)=>console.error(`[Ionic Error]: ${message}`,...params),printRequiredElementError=(el,...targetSelectors)=>console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(" or ")}.`)},"../../packages/core/dist/esm/ion-nav.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_nav:()=>Nav});var _index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-4aef4473.js"),_cubic_bezier_c467eebb_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/dist/esm/cubic-bezier-c467eebb.js"),_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/dist/esm/helpers-b14eeb70.js"),_index_56e56893_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/index-56e56893.js"),_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/ionic-global-a9e3465e.js"),_framework_delegate_c7fe8edd_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/framework-delegate-c7fe8edd.js");class ViewController{constructor(component,params){this.component=component,this.params=params,this.state=1}async init(container){if(this.state=2,!this.element){const component=this.component;this.element=await(0,_framework_delegate_c7fe8edd_js__WEBPACK_IMPORTED_MODULE_3__.a)(this.delegate,container,component,["ion-page","ion-page-invisible"],this.params)}}_destroy(){(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_4__.k)(3!==this.state,"view state must be ATTACHED");const element=this.element;element&&(this.delegate?this.delegate.removeViewFromDom(element.parentElement,element):element.remove()),this.nav=void 0,this.state=3}}const matches=(view,id,params)=>!!view&&(view.component===id&&(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_4__.s)(view.params,params)),convertToView=(page,params)=>page?page instanceof ViewController?page:new ViewController(page,params):null,Nav=class{constructor(hostRef){(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionNavWillLoad=(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionNavWillLoad",7),this.ionNavWillChange=(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionNavWillChange",3),this.ionNavDidChange=(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionNavDidChange",3),this.transInstr=[],this.gestureOrAnimationInProgress=!1,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.didLoad=!1,this.delegate=void 0,this.swipeGesture=void 0,this.animated=!0,this.animation=void 0,this.rootParams=void 0,this.root=void 0}swipeGestureChanged(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}rootChanged(){void 0!==this.root&&!1!==this.didLoad&&(this.useRouter||void 0!==this.root&&this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=null!==document.querySelector("ion-router")&&null===this.el.closest("[no-router]"),void 0===this.swipeGesture){const mode=(0,_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_2__.g)(this);this.swipeGesture=_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_2__.c.getBoolean("swipeBackEnabled","ios"===mode)}this.ionNavWillLoad.emit()}async componentDidLoad(){this.didLoad=!0,this.rootChanged(),this.gesture=(await __webpack_require__.e(7959).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/swipe-back-b094378b.js"))).createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged()}connectedCallback(){this.destroyed=!1}disconnectedCallback(){for(const view of this.views)(0,_index_56e56893_js__WEBPACK_IMPORTED_MODULE_1__.l)(view.element,_index_56e56893_js__WEBPACK_IMPORTED_MODULE_1__.L),view._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=0,this.views.length=0,this.destroyed=!0}push(component,componentProps,opts,done){return this.insert(-1,component,componentProps,opts,done)}insert(insertIndex,component,componentProps,opts,done){return this.insertPages(insertIndex,[{component,componentProps}],opts,done)}insertPages(insertIndex,insertComponents,opts,done){return this.queueTrns({insertStart:insertIndex,insertViews:insertComponents,opts},done)}pop(opts,done){return this.removeIndex(-1,1,opts,done)}popTo(indexOrViewCtrl,opts,done){const ti={removeStart:-1,removeCount:-1,opts};return"object"==typeof indexOrViewCtrl&&indexOrViewCtrl.component?(ti.removeView=indexOrViewCtrl,ti.removeStart=1):"number"==typeof indexOrViewCtrl&&(ti.removeStart=indexOrViewCtrl+1),this.queueTrns(ti,done)}popToRoot(opts,done){return this.removeIndex(1,-1,opts,done)}removeIndex(startIndex,removeCount=1,opts,done){return this.queueTrns({removeStart:startIndex,removeCount,opts},done)}setRoot(component,componentProps,opts,done){return this.setPages([{component,componentProps}],opts,done)}setPages(views,opts,done){return null!=opts||(opts={}),!0!==opts.animated&&(opts.animated=!1),this.queueTrns({insertStart:0,insertViews:views,removeStart:0,removeCount:-1,opts},done)}setRouteId(id,params,direction,animation){const active=this.getActiveSync();if(matches(active,id,params))return Promise.resolve({changed:!1,element:active.element});let resolve;const promise=new Promise((r=>resolve=r));let finish;const commonOpts={updateURL:!1,viewIsReady:enteringEl=>{let mark;const p=new Promise((r=>mark=r));return resolve({changed:!0,element:enteringEl,markVisible:async()=>{mark(),await finish}}),p}};if("root"===direction)finish=this.setRoot(id,params,commonOpts);else{const viewController=this.views.find((v=>matches(v,id,params)));viewController?finish=this.popTo(viewController,Object.assign(Object.assign({},commonOpts),{direction:"back",animationBuilder:animation})):"forward"===direction?finish=this.push(id,params,Object.assign(Object.assign({},commonOpts),{animationBuilder:animation})):"back"===direction&&(finish=this.setRoot(id,params,Object.assign(Object.assign({},commonOpts),{direction:"back",animated:!0,animationBuilder:animation})))}return promise}async getRouteId(){const active=this.getActiveSync();if(active)return{id:active.element.tagName,params:active.params,element:active.element}}async getActive(){return this.getActiveSync()}async getByIndex(index){return this.views[index]}async canGoBack(view){return this.canGoBackSync(view)}async getPrevious(view){return this.getPreviousSync(view)}async getLength(){return Promise.resolve(this.views.length)}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(view=this.getActiveSync()){return!(!view||!this.getPreviousSync(view))}getPreviousSync(view=this.getActiveSync()){if(!view)return;const views=this.views,index=views.indexOf(view);return index>0?views[index-1]:void 0}async queueTrns(ti,done){var _a,_b;if(this.isTransitioning&&(null===(_a=ti.opts)||void 0===_a?void 0:_a.skipIfBusy))return!1;const promise=new Promise(((resolve,reject)=>{ti.resolve=resolve,ti.reject=reject}));if(ti.done=done,ti.opts&&!1!==ti.opts.updateURL&&this.useRouter){const router=document.querySelector("ion-router");if(router){const canTransition=await router.canTransition();if(!1===canTransition)return!1;if("string"==typeof canTransition)return router.push(canTransition,ti.opts.direction||"back"),!1}}return 0===(null===(_b=ti.insertViews)||void 0===_b?void 0:_b.length)&&(ti.insertViews=void 0),this.transInstr.push(ti),this.nextTrns(),promise}success(result,ti){if(this.destroyed)this.fireError("nav controller was destroyed",ti);else if(ti.done&&ti.done(result.hasCompleted,result.requiresTransition,result.enteringView,result.leavingView,result.direction),ti.resolve(result.hasCompleted),!1!==ti.opts.updateURL&&this.useRouter){const router=document.querySelector("ion-router");if(router){const direction="back"===result.direction?"back":"forward";router.navChanged(direction)}}}failed(rejectReason,ti){this.destroyed?this.fireError("nav controller was destroyed",ti):(this.transInstr.length=0,this.fireError(rejectReason,ti))}fireError(rejectReason,ti){ti.done&&ti.done(!1,!1,rejectReason),ti.reject&&!this.destroyed?ti.reject(rejectReason):ti.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const ti=this.transInstr.shift();return!!ti&&(this.runTransition(ti),!0)}async runTransition(ti){try{this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(ti);const leavingView=this.getActiveSync(),enteringView=this.getEnteringView(ti,leavingView);if(!leavingView&&!enteringView)throw new Error("no views in the stack to be removed");enteringView&&1===enteringView.state&&await enteringView.init(this.el),this.postViewInit(enteringView,leavingView,ti);const requiresTransition=(ti.enteringRequiresTransition||ti.leavingRequiresTransition)&&enteringView!==leavingView;if(requiresTransition&&ti.opts&&leavingView){"back"===ti.opts.direction&&(ti.opts.animationBuilder=ti.opts.animationBuilder||(null==enteringView?void 0:enteringView.animationBuilder)),leavingView.animationBuilder=ti.opts.animationBuilder}let result;result=requiresTransition?await this.transition(enteringView,leavingView,ti):{hasCompleted:!0,requiresTransition:!1},this.success(result,ti),this.ionNavDidChange.emit()}catch(rejectReason){this.failed(rejectReason,ti)}this.isTransitioning=!1,this.nextTrns()}prepareTI(ti){var _a,_b,_c;const viewsLength=this.views.length;if(null!==(_a=ti.opts)&&void 0!==_a||(ti.opts={}),null!==(_b=(_c=ti.opts).delegate)&&void 0!==_b||(_c.delegate=this.delegate),void 0!==ti.removeView){(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_4__.k)(void 0!==ti.removeStart,"removeView needs removeStart"),(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_4__.k)(void 0!==ti.removeCount,"removeView needs removeCount");const index=this.views.indexOf(ti.removeView);if(index<0)throw new Error("removeView was not found");ti.removeStart+=index}void 0!==ti.removeStart&&(ti.removeStart<0&&(ti.removeStart=viewsLength-1),ti.removeCount<0&&(ti.removeCount=viewsLength-ti.removeStart),ti.leavingRequiresTransition=ti.removeCount>0&&ti.removeStart+ti.removeCount===viewsLength),ti.insertViews&&((ti.insertStart<0||ti.insertStart>viewsLength)&&(ti.insertStart=viewsLength),ti.enteringRequiresTransition=ti.insertStart===viewsLength);const insertViews=ti.insertViews;if(!insertViews)return;(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_4__.k)(insertViews.length>0,"length can not be zero");const viewControllers=insertViews.map((page=>page instanceof ViewController?page:"component"in page?convertToView(page.component,null===page.componentProps?void 0:page.componentProps):convertToView(page,void 0))).filter((v=>null!==v));if(0===viewControllers.length)throw new Error("invalid views to insert");for(const view of viewControllers){view.delegate=ti.opts.delegate;const nav=view.nav;if(nav&&nav!==this)throw new Error("inserted view was already inserted");if(3===view.state)throw new Error("inserted view was already destroyed")}ti.insertViews=viewControllers}getEnteringView(ti,leavingView){const insertViews=ti.insertViews;if(void 0!==insertViews)return insertViews[insertViews.length-1];const removeStart=ti.removeStart;if(void 0!==removeStart){const views=this.views,removeEnd=removeStart+ti.removeCount;for(let i=views.length-1;i>=0;i--){const view=views[i];if((i<removeStart||i>=removeEnd)&&view!==leavingView)return view}}}postViewInit(enteringView,leavingView,ti){var _a,_b,_c;(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_4__.k)(leavingView||enteringView,"Both leavingView and enteringView are null"),(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_4__.k)(ti.resolve,"resolve must be valid"),(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_4__.k)(ti.reject,"reject must be valid");const opts=ti.opts,{insertViews,removeStart,removeCount}=ti;let destroyQueue;if(void 0!==removeStart&&void 0!==removeCount){(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_4__.k)(removeStart>=0,"removeStart can not be negative"),(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_4__.k)(removeCount>=0,"removeCount can not be negative"),destroyQueue=[];for(let i=removeStart;i<removeStart+removeCount;i++){const view=this.views[i];void 0!==view&&view!==enteringView&&view!==leavingView&&destroyQueue.push(view)}null!==(_a=opts.direction)&&void 0!==_a||(opts.direction="back")}const finalNumViews=this.views.length+(null!==(_b=null==insertViews?void 0:insertViews.length)&&void 0!==_b?_b:0)-(null!=removeCount?removeCount:0);if((0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_4__.k)(finalNumViews>=0,"final balance can not be negative"),0===finalNumViews)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(insertViews){let insertIndex=ti.insertStart;for(const view of insertViews)this.insertViewAt(view,insertIndex),insertIndex++;ti.enteringRequiresTransition&&(null!==(_c=opts.direction)&&void 0!==_c||(opts.direction="forward"))}if(destroyQueue&&destroyQueue.length>0){for(const view of destroyQueue)(0,_index_56e56893_js__WEBPACK_IMPORTED_MODULE_1__.l)(view.element,_index_56e56893_js__WEBPACK_IMPORTED_MODULE_1__.a),(0,_index_56e56893_js__WEBPACK_IMPORTED_MODULE_1__.l)(view.element,_index_56e56893_js__WEBPACK_IMPORTED_MODULE_1__.b),(0,_index_56e56893_js__WEBPACK_IMPORTED_MODULE_1__.l)(view.element,_index_56e56893_js__WEBPACK_IMPORTED_MODULE_1__.L);for(const view of destroyQueue)this.destroyView(view)}}async transition(enteringView,leavingView,ti){const opts=ti.opts,progressCallback=opts.progressAnimation?ani=>{void 0===ani||this.gestureOrAnimationInProgress?this.sbAni=ani:(this.gestureOrAnimationInProgress=!0,ani.onFinish((()=>{this.gestureOrAnimationInProgress=!1}),{oneTimeCallback:!0}),ani.progressEnd(0,0,0))}:void 0,mode=(0,_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_2__.g)(this),enteringEl=enteringView.element,leavingEl=leavingView&&leavingView.element,animationOpts=Object.assign(Object.assign({mode,showGoBack:this.canGoBackSync(enteringView),baseEl:this.el,progressCallback,animated:this.animated&&_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_2__.c.getBoolean("animated",!0),enteringEl,leavingEl},opts),{animationBuilder:opts.animationBuilder||this.animation||_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_2__.c.get("navAnimation")}),{hasCompleted}=await(0,_index_56e56893_js__WEBPACK_IMPORTED_MODULE_1__.t)(animationOpts);return this.transitionFinish(hasCompleted,enteringView,leavingView,opts)}transitionFinish(hasCompleted,enteringView,leavingView,opts){const activeView=hasCompleted?enteringView:leavingView;return activeView&&this.unmountInactiveViews(activeView),{hasCompleted,requiresTransition:!0,enteringView,leavingView,direction:opts.direction}}insertViewAt(view,index){const views=this.views,existingIndex=views.indexOf(view);existingIndex>-1?((0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_4__.k)(view.nav===this,"view is not part of the nav"),views.splice(existingIndex,1),views.splice(index,0,view)):((0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_4__.k)(!view.nav,"nav is used"),view.nav=this,views.splice(index,0,view))}removeView(view){(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_4__.k)(2===view.state||3===view.state,"view state should be loaded or destroyed");const views=this.views,index=views.indexOf(view);(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_4__.k)(index>-1,"view must be part of the stack"),index>=0&&views.splice(index,1)}destroyView(view){view._destroy(),this.removeView(view)}unmountInactiveViews(activeView){if(this.destroyed)return;const views=this.views,activeViewIndex=views.indexOf(activeView);for(let i=views.length-1;i>=0;i--){const view=views[i],element=view.element;element&&(i>activeViewIndex?((0,_index_56e56893_js__WEBPACK_IMPORTED_MODULE_1__.l)(element,_index_56e56893_js__WEBPACK_IMPORTED_MODULE_1__.L),this.destroyView(view)):i<activeViewIndex&&(0,_index_56e56893_js__WEBPACK_IMPORTED_MODULE_1__.s)(element,!0))}}canStart(){return!this.gestureOrAnimationInProgress&&!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.canGoBackSync()}onStart(){this.gestureOrAnimationInProgress=!0,this.pop({direction:"back",progressAnimation:!0})}onMove(stepValue){this.sbAni&&this.sbAni.progressStep(stepValue)}onEnd(shouldComplete,stepValue,dur){if(this.sbAni){this.sbAni.onFinish((()=>{this.gestureOrAnimationInProgress=!1}),{oneTimeCallback:!0});let newStepValue=shouldComplete?-.001:.001;shouldComplete?newStepValue+=(0,_cubic_bezier_c467eebb_js__WEBPACK_IMPORTED_MODULE_5__.g)([0,0],[.32,.72],[0,1],[1,1],stepValue)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),newStepValue+=(0,_cubic_bezier_c467eebb_js__WEBPACK_IMPORTED_MODULE_5__.g)([0,0],[1,0],[.68,.28],[1,1],stepValue)[0]),this.sbAni.progressEnd(shouldComplete?1:0,newStepValue,dur)}else this.gestureOrAnimationInProgress=!1}render(){return(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"dfe98cb6604a2015a49f41beffebdd2da957dfff"})}get el(){return(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}};Nav.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}"}}]);
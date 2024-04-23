/*! For license information please see 9717.de666d48.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[9717],{"../../packages/core/dist/esm/cubic-bezier-c467eebb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>getTimeGivenProgression});const getTimeGivenProgression=(p0,p1,p2,p3,progression)=>solveCubicBezier(p0[1],p1[1],p2[1],p3[1],progression).map((tValue=>solveCubicParametricEquation(p0[0],p1[0],p2[0],p3[0],tValue))),solveCubicParametricEquation=(p0,p1,p2,p3,t)=>t*(3*p1*Math.pow(t-1,2)+t*(-3*p2*t+3*p2+p3*t))-p0*Math.pow(t-1,3),solveCubicBezier=(p0,p1,p2,p3,refPoint)=>solveCubicEquation((p3-=refPoint)-3*(p2-=refPoint)+3*(p1-=refPoint)-(p0-=refPoint),3*p2-6*p1+3*p0,3*p1-3*p0,p0).filter((root=>root>=0&&root<=1)),solveCubicEquation=(a,b,c,d)=>{if(0===a)return((a,b,c)=>{const discriminant=b*b-4*a*c;return discriminant<0?[]:[(-b+Math.sqrt(discriminant))/(2*a),(-b-Math.sqrt(discriminant))/(2*a)]})(b,c,d);const p=(3*(c/=a)-(b/=a)*b)/3,q=(2*b*b*b-9*b*c+27*(d/=a))/27;if(0===p)return[Math.pow(-q,1/3)];if(0===q)return[Math.sqrt(-p),-Math.sqrt(-p)];const discriminant=Math.pow(q/2,2)+Math.pow(p/3,3);if(0===discriminant)return[Math.pow(q/2,.5)-b/3];if(discriminant>0)return[Math.pow(-q/2+Math.sqrt(discriminant),1/3)-Math.pow(q/2+Math.sqrt(discriminant),1/3)-b/3];const r=Math.sqrt(Math.pow(-p/3,3)),phi=Math.acos(-q/(2*Math.sqrt(Math.pow(-p/3,3)))),s=2*Math.pow(r,1/3);return[s*Math.cos(phi/3)-b/3,s*Math.cos((phi+2*Math.PI)/3)-b/3,s*Math.cos((phi+4*Math.PI)/3)-b/3]}},"../../packages/core/dist/esm/gesture-controller-5b8003e1.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>GESTURE_CONTROLLER});class GestureDelegate{constructor(ctrl,id,name,priority,disableScroll){this.id=id,this.name=name,this.disableScroll=disableScroll,this.priority=1e6*priority+id,this.ctrl=ctrl}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const captured=this.ctrl.capture(this.name,this.id,this.priority);return captured&&this.disableScroll&&this.ctrl.disableScroll(this.id),captured}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class BlockerDelegate{constructor(ctrl,id,disable,disableScroll){this.id=id,this.disable=disable,this.disableScroll=disableScroll,this.ctrl=ctrl}block(){if(this.ctrl){if(this.disable)for(const gesture of this.disable)this.ctrl.disableGesture(gesture,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const gesture of this.disable)this.ctrl.enableGesture(gesture,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const BACKDROP_NO_SCROLL="backdrop-no-scroll",GESTURE_CONTROLLER=new class GestureController{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(config){var _a;return new GestureDelegate(this,this.newID(),config.name,null!==(_a=config.priority)&&void 0!==_a?_a:0,!!config.disableScroll)}createBlocker(opts={}){return new BlockerDelegate(this,this.newID(),opts.disable,!!opts.disableScroll)}start(gestureName,id,priority){return this.canStart(gestureName)?(this.requestedStart.set(id,priority),!0):(this.requestedStart.delete(id),!1)}capture(gestureName,id,priority){if(!this.start(gestureName,id,priority))return!1;const requestedStart=this.requestedStart;let maxPriority=-1e4;if(requestedStart.forEach((value=>{maxPriority=Math.max(maxPriority,value)})),maxPriority===priority){this.capturedId=id,requestedStart.clear();const event=new CustomEvent("ionGestureCaptured",{detail:{gestureName}});return document.dispatchEvent(event),!0}return requestedStart.delete(id),!1}release(id){this.requestedStart.delete(id),this.capturedId===id&&(this.capturedId=void 0)}disableGesture(gestureName,id){let set=this.disabledGestures.get(gestureName);void 0===set&&(set=new Set,this.disabledGestures.set(gestureName,set)),set.add(id)}enableGesture(gestureName,id){const set=this.disabledGestures.get(gestureName);void 0!==set&&set.delete(id)}disableScroll(id){this.disabledScroll.add(id),1===this.disabledScroll.size&&document.body.classList.add(BACKDROP_NO_SCROLL)}enableScroll(id){this.disabledScroll.delete(id),0===this.disabledScroll.size&&document.body.classList.remove(BACKDROP_NO_SCROLL)}canStart(gestureName){return void 0===this.capturedId&&!this.isDisabled(gestureName)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(gestureName){const disabled=this.disabledGestures.get(gestureName);return!!(disabled&&disabled.size>0)}newID(){return this.gestureId++,this.gestureId}}},"../../packages/core/dist/esm/index-6f98de89.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>menuController});var _index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js"),_hardware_back_button_711a1666_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/hardware-back-button-711a1666.js"),_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/dist/esm/index-f5dbb989.js"),_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/dist/esm/helpers-079c01eb.js"),_ionic_global_3da28692_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/ionic-global-3da28692.js"),_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/animation-022a9434.js");const baseAnimation=isIos=>(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_3__.c)().duration(isIos?400:300),menuOverlayAnimation=menu=>{let closedX,openedX;const width=menu.width+8,menuAnimation=(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_3__.c)(),backdropAnimation=(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_3__.c)();menu.isEndSide?(closedX=width+"px",openedX="0px"):(closedX=-width+"px",openedX="0px"),menuAnimation.addElement(menu.menuInnerEl).fromTo("transform",`translateX(${closedX})`,`translateX(${openedX})`);const isIos="ios"===(0,_ionic_global_3da28692_js__WEBPACK_IMPORTED_MODULE_2__.g)(menu),opacity=isIos?.2:.25;return backdropAnimation.addElement(menu.backdropEl).fromTo("opacity",.01,opacity),baseAnimation(isIos).addAnimation([menuAnimation,backdropAnimation])},menuPushAnimation=menu=>{let contentOpenedX,menuClosedX;const mode=(0,_ionic_global_3da28692_js__WEBPACK_IMPORTED_MODULE_2__.g)(menu),width=menu.width;menu.isEndSide?(contentOpenedX=-width+"px",menuClosedX=width+"px"):(contentOpenedX=width+"px",menuClosedX=-width+"px");const menuAnimation=(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_3__.c)().addElement(menu.menuInnerEl).fromTo("transform",`translateX(${menuClosedX})`,"translateX(0px)"),contentAnimation=(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_3__.c)().addElement(menu.contentEl).fromTo("transform","translateX(0px)",`translateX(${contentOpenedX})`),backdropAnimation=(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_3__.c)().addElement(menu.backdropEl).fromTo("opacity",.01,.32);return baseAnimation("ios"===mode).addAnimation([menuAnimation,contentAnimation,backdropAnimation])},menuRevealAnimation=menu=>{const mode=(0,_ionic_global_3da28692_js__WEBPACK_IMPORTED_MODULE_2__.g)(menu),openedX=menu.width*(menu.isEndSide?-1:1)+"px",contentOpen=(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_3__.c)().addElement(menu.contentEl).fromTo("transform","translateX(0px)",`translateX(${openedX})`);return baseAnimation("ios"===mode).addAnimation(contentOpen)},menuController=(()=>{const menuAnimations=new Map,menus=[],get=async(menu,logOnMultipleSideMenus=!1)=>{if(await waitUntilReady(),"start"===menu||"end"===menu){const menuRefs=menus.filter((m=>m.side===menu&&!m.disabled));if(menuRefs.length>=1)return menuRefs.length>1&&logOnMultipleSideMenus&&(0,_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_4__.p)(`menuController queried for a menu on the "${menu}" side, but ${menuRefs.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`,menuRefs.map((m=>m.el))),menuRefs[0].el;const sideMenuRefs=menus.filter((m=>m.side===menu));if(sideMenuRefs.length>=1)return sideMenuRefs.length>1&&logOnMultipleSideMenus&&(0,_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_4__.p)(`menuController queried for a menu on the "${menu}" side, but ${sideMenuRefs.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`,sideMenuRefs.map((m=>m.el))),sideMenuRefs[0].el}else if(null!=menu)return find((m=>m.menuId===menu));const menuEl=find((m=>!m.disabled));return menuEl||(menus.length>0?menus[0].el:void 0)},getOpen=async()=>(await waitUntilReady(),_getOpenSync()),registerAnimation=(name,animation)=>{menuAnimations.set(name,animation)},_getOpenSync=()=>find((m=>m._isOpen)),getMenusSync=()=>menus.map((menu=>menu.el)),isAnimatingSync=()=>menus.some((menu=>menu.isAnimating)),find=predicate=>{const instance=menus.find(predicate);if(void 0!==instance)return instance.el},waitUntilReady=()=>Promise.all(Array.from(document.querySelectorAll("ion-menu")).map((menu=>new Promise((resolve=>(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_5__.d)(menu,resolve))))));return registerAnimation("reveal",menuRevealAnimation),registerAnimation("push",menuPushAnimation),registerAnimation("overlay",menuOverlayAnimation),null===_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.d||void 0===_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.d||_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.d.addEventListener("ionBackButton",(ev=>{const openMenu=_getOpenSync();openMenu&&ev.detail.register(_hardware_back_button_711a1666_js__WEBPACK_IMPORTED_MODULE_1__.MENU_BACK_BUTTON_PRIORITY,(()=>openMenu.close()))})),{registerAnimation,get,getMenus:async()=>(await waitUntilReady(),getMenusSync()),getOpen,isEnabled:async menu=>{const menuEl=await get(menu);return!!menuEl&&!menuEl.disabled},swipeGesture:async(shouldEnable,menu)=>{const menuEl=await get(menu);return menuEl&&(menuEl.swipeGesture=shouldEnable),menuEl},isAnimating:async()=>(await waitUntilReady(),isAnimatingSync()),isOpen:async menu=>{if(null!=menu){const menuEl=await get(menu);return void 0!==menuEl&&menuEl.isOpen()}return void 0!==await getOpen()},enable:async(shouldEnable,menu)=>{const menuEl=await get(menu);return menuEl&&(menuEl.disabled=!shouldEnable),menuEl},toggle:async menu=>{const menuEl=await get(menu,!0);return!!menuEl&&menuEl.toggle()},close:async menu=>{const menuEl=await(void 0!==menu?get(menu,!0):getOpen());return void 0!==menuEl&&menuEl.close()},open:async menu=>{const menuEl=await get(menu,!0);return!!menuEl&&menuEl.open()},_getOpenSync,_createAnimation:(type,menuCmp)=>{const animationBuilder=menuAnimations.get(type);if(!animationBuilder)throw new Error("animation not registered");return animationBuilder(menuCmp)},_register:menu=>{menus.indexOf(menu)<0&&menus.push(menu)},_unregister:menu=>{const index=menus.indexOf(menu);index>-1&&menus.splice(index,1)},_setOpen:async(menu,shouldOpen,animated)=>{if(isAnimatingSync())return!1;if(shouldOpen){const openedMenu=await getOpen();openedMenu&&menu.el!==openedMenu&&await openedMenu.setOpen(!1,!1)}return menu._setOpen(shouldOpen,animated)}}})()},"../../packages/core/dist/esm/ion-menu.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_menu:()=>Menu});var _index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-7c3eb939.js"),_cubic_bezier_c467eebb_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../packages/core/dist/esm/cubic-bezier-c467eebb.js"),_gesture_controller_5b8003e1_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/gesture-controller-5b8003e1.js"),_hardware_back_button_711a1666_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/hardware-back-button-711a1666.js"),_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/core/dist/esm/helpers-079c01eb.js"),_index_6f98de89_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/index-6f98de89.js"),_overlays_64024dc2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/dist/esm/overlays-64024dc2.js"),_ionic_global_3da28692_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/dist/esm/ionic-global-3da28692.js");__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js"),__webpack_require__("../../packages/core/dist/esm/animation-022a9434.js");const focusableQueryString='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])',Menu=class{constructor(hostRef){(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionWillOpen=(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionWillOpen",7),this.ionWillClose=(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionWillClose",7),this.ionDidOpen=(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionDidOpen",7),this.ionDidClose=(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionDidClose",7),this.ionMenuChange=(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionMenuChange",7),this.lastOnEnd=0,this.blocker=_gesture_controller_5b8003e1_js__WEBPACK_IMPORTED_MODULE_1__.G.createBlocker({disableScroll:!0}),this.didLoad=!1,this.operationCancelled=!1,this.isAnimating=!1,this._isOpen=!1,this.inheritedAttributes={},this.handleFocus=ev=>{const lastOverlay=(0,_overlays_64024dc2_js__WEBPACK_IMPORTED_MODULE_4__.g)(document);lastOverlay&&!lastOverlay.contains(this.el)||this.trapKeyboardFocus(ev,document)},this.isPaneVisible=!1,this.isEndSide=!1,this.contentId=void 0,this.menuId=void 0,this.type=void 0,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}typeChanged(type,oldType){const contentEl=this.contentEl;contentEl&&(void 0!==oldType&&contentEl.classList.remove(`menu-content-${oldType}`),contentEl.classList.add(`menu-content-${type}`),contentEl.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_8__.j)(this.side),this.animation=void 0}swipeGestureChanged(){this.updateState()}async connectedCallback(){"undefined"!=typeof customElements&&null!=customElements&&await customElements.whenDefined("ion-menu"),void 0===this.type&&(this.type=_ionic_global_3da28692_js__WEBPACK_IMPORTED_MODULE_5__.c.get("menuType","overlay"));const content=void 0!==this.contentId?document.getElementById(this.contentId):null;null!==content?(this.el.contains(content)&&console.error('Menu: "contentId" should refer to the main view\'s ion-content, not the ion-content inside of the ion-menu.'),this.contentEl=content,content.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),_index_6f98de89_js__WEBPACK_IMPORTED_MODULE_3__.m._register(this),this.menuChanged(),this.gesture=(await __webpack_require__.e(2151).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/index-8d9b57d7.js"))).createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:!0,canStart:ev=>this.canStart(ev),onWillStart:()=>this.onWillStart(),onStart:()=>this.onStart(),onMove:ev=>this.onMove(ev),onEnd:ev=>this.onEnd(ev)}),this.updateState()):console.error('Menu: must have a "content" element to listen for drag events on.')}componentWillLoad(){this.inheritedAttributes=(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_8__.i)(this.el)}async componentDidLoad(){this.didLoad=!0,this.menuChanged(),this.updateState()}menuChanged(){this.didLoad&&this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}async disconnectedCallback(){await this.close(!1),this.blocker.destroy(),_index_6f98de89_js__WEBPACK_IMPORTED_MODULE_3__.m._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=void 0}onSplitPaneChanged(ev){const{target}=ev;target===this.el.closest("ion-split-pane")&&(this.isPaneVisible=ev.detail.isPane(this.el),this.updateState())}onBackdropClick(ev){if(this._isOpen&&this.lastOnEnd<ev.timeStamp-100){!!ev.composedPath&&!ev.composedPath().includes(this.menuInnerEl)&&(ev.preventDefault(),ev.stopPropagation(),this.close())}}onKeydown(ev){"Escape"===ev.key&&this.close()}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(animated=!0){return this.setOpen(!0,animated)}close(animated=!0){return this.setOpen(!1,animated)}toggle(animated=!0){return this.setOpen(!this._isOpen,animated)}setOpen(shouldOpen,animated=!0){return _index_6f98de89_js__WEBPACK_IMPORTED_MODULE_3__.m._setOpen(this,shouldOpen,animated)}focusFirstDescendant(){const{el}=this,firstInput=el.querySelector(focusableQueryString);firstInput?firstInput.focus():el.focus()}focusLastDescendant(){const{el}=this,inputs=Array.from(el.querySelectorAll(focusableQueryString)),lastInput=inputs.length>0?inputs[inputs.length-1]:null;lastInput?lastInput.focus():el.focus()}trapKeyboardFocus(ev,doc){const target=ev.target;target&&(this.el.contains(target)?this.lastFocus=target:(this.focusFirstDescendant(),this.lastFocus===doc.activeElement&&this.focusLastDescendant()))}async _setOpen(shouldOpen,animated=!0){return!(!this._isActive()||this.isAnimating||shouldOpen===this._isOpen)&&(this.beforeAnimation(shouldOpen),await this.loadAnimation(),await this.startAnimation(shouldOpen,animated),this.operationCancelled?(this.operationCancelled=!1,!1):(this.afterAnimation(shouldOpen),!0))}async loadAnimation(){const width=this.menuInnerEl.offsetWidth,isEndSide$1=(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_8__.j)(this.side);if(width===this.width&&void 0!==this.animation&&isEndSide$1===this.isEndSide)return;this.width=width,this.isEndSide=isEndSide$1,this.animation&&(this.animation.destroy(),this.animation=void 0);const animation=this.animation=await _index_6f98de89_js__WEBPACK_IMPORTED_MODULE_3__.m._createAnimation(this.type,this);_ionic_global_3da28692_js__WEBPACK_IMPORTED_MODULE_5__.c.getBoolean("animated",!0)||animation.duration(0),animation.fill("both")}async startAnimation(shouldOpen,animated){const isReversed=!shouldOpen,mode=(0,_ionic_global_3da28692_js__WEBPACK_IMPORTED_MODULE_5__.g)(this),easing="ios"===mode?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",easingReverse="ios"===mode?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",ani=this.animation.direction(isReversed?"reverse":"normal").easing(isReversed?easingReverse:easing);animated?await ani.play():ani.play({sync:!0}),"reverse"===ani.getDirection()&&ani.direction("normal")}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(detail){return!(!!document.querySelector("ion-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!_index_6f98de89_js__WEBPACK_IMPORTED_MODULE_3__.m._getOpenSync()&&checkEdgeSide(window,detail.currentX,this.isEndSide,this.maxEdgeStart))}onWillStart(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_8__.l)(!1,"isAnimating has to be true")}onMove(detail){if(!this.isAnimating||!this.animation)return void(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_8__.l)(!1,"isAnimating has to be true");const stepValue=computeDelta(detail.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-stepValue:stepValue)}onEnd(detail){if(!this.isAnimating||!this.animation)return void(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_8__.l)(!1,"isAnimating has to be true");const isOpen=this._isOpen,isEndSide=this.isEndSide,delta=computeDelta(detail.deltaX,isOpen,isEndSide),width=this.width,stepValue=delta/width,velocity=detail.velocityX,z=width/2,shouldCompleteRight=velocity>=0&&(velocity>.2||detail.deltaX>z),shouldCompleteLeft=velocity<=0&&(velocity<-.2||detail.deltaX<-z),shouldComplete=isOpen?isEndSide?shouldCompleteRight:shouldCompleteLeft:isEndSide?shouldCompleteLeft:shouldCompleteRight;let shouldOpen=!isOpen&&shouldComplete;isOpen&&!shouldComplete&&(shouldOpen=!0),this.lastOnEnd=detail.currentTime;let newStepValue=shouldComplete?.001:-.001;const adjustedStepValue=stepValue<0?.01:stepValue;newStepValue+=(0,_cubic_bezier_c467eebb_js__WEBPACK_IMPORTED_MODULE_9__.g)([0,0],[.4,0],[.6,1],[1,1],(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_8__.f)(0,adjustedStepValue,.9999))[0]||0;const playTo=this._isOpen?!shouldComplete:shouldComplete;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((()=>this.afterAnimation(shouldOpen)),{oneTimeCallback:!0}).progressEnd(playTo?1:0,this._isOpen?1-newStepValue:newStepValue,300)}beforeAnimation(shouldOpen){(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_8__.l)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(SHOW_MENU),this.el.setAttribute("tabindex","0"),this.backdropEl&&this.backdropEl.classList.add(SHOW_BACKDROP),this.contentEl&&(this.contentEl.classList.add(MENU_CONTENT_OPEN),this.contentEl.setAttribute("aria-hidden","true")),this.blocker.block(),this.isAnimating=!0,shouldOpen?this.ionWillOpen.emit():this.ionWillClose.emit()}afterAnimation(isOpen){var _a;if(this._isOpen=isOpen,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),isOpen){this.ionDidOpen.emit();(null===(_a=document.activeElement)||void 0===_a?void 0:_a.closest("ion-menu"))!==this.el&&this.el.focus(),document.addEventListener("focus",this.handleFocus,!0)}else this.el.classList.remove(SHOW_MENU),this.el.removeAttribute("tabindex"),this.contentEl&&(this.contentEl.classList.remove(MENU_CONTENT_OPEN),this.contentEl.removeAttribute("aria-hidden")),this.backdropEl&&this.backdropEl.classList.remove(SHOW_BACKDROP),this.animation&&this.animation.stop(),this.ionDidClose.emit(),document.removeEventListener("focus",this.handleFocus,!0)}updateState(){const isActive=this._isActive();this.gesture&&this.gesture.enable(isActive&&this.swipeGesture),isActive||(this.isAnimating&&(this.operationCancelled=!0),this.afterAnimation(!1))}render(){const{type,disabled,isPaneVisible,inheritedAttributes,side}=this,mode=(0,_ionic_global_3da28692_js__WEBPACK_IMPORTED_MODULE_5__.g)(this);return(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"6c63bd340b8e2fc19b638189af44eae3627f8c0a",onKeyDown:(0,_hardware_back_button_711a1666_js__WEBPACK_IMPORTED_MODULE_2__.shouldUseCloseWatcher)()?null:this.onKeydown,role:"navigation","aria-label":inheritedAttributes["aria-label"]||"menu",class:{[mode]:!0,[`menu-type-${type}`]:!0,"menu-enabled":!disabled,[`menu-side-${side}`]:!0,"menu-pane-visible":isPaneVisible}},(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"8cad9e601c8ca1d1dca32681937362a55311e015",class:"menu-inner",part:"container",ref:el=>this.menuInnerEl=el},(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"ce8ab737360c3a71ac6408d21fcb71485a189827"})),(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-backdrop",{key:"a7e5f9ebe98996c7f5ab0ef27223a2f24bf63646",ref:el=>this.backdropEl=el,class:"menu-backdrop",tappable:!1,stopPropagation:!1,part:"backdrop"}))}get el(){return(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}},computeDelta=(deltaX,isOpen,isEndSide)=>Math.max(0,isOpen!==isEndSide?-deltaX:deltaX),checkEdgeSide=(win,posX,isEndSide,maxEdgeStart)=>isEndSide?posX>=win.innerWidth-maxEdgeStart:posX<=maxEdgeStart,SHOW_MENU="show-menu",SHOW_BACKDROP="show-backdrop",MENU_CONTENT_OPEN="menu-content-open";Menu.style={ios:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{transform:translateX(-9999px);display:flex;position:absolute;flex-direction:column;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}@supports (inset-inline-start: 0){:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}}@supports not (inset-inline-start: 0){:host(.menu-side-start) .menu-inner{left:0;right:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{left:unset;right:unset;left:auto;right:0}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{left:unset;right:unset;left:auto;right:0}}}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}@supports (inset-inline-start: 0){:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}}@supports not (inset-inline-start: 0){:host(.menu-side-end) .menu-inner{left:auto;right:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{left:unset;right:unset;left:0;right:auto}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{left:unset;right:unset;left:0;right:auto}}}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;transform:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}",md:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{transform:translateX(-9999px);display:flex;position:absolute;flex-direction:column;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}@supports (inset-inline-start: 0){:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}}@supports not (inset-inline-start: 0){:host(.menu-side-start) .menu-inner{left:0;right:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{left:unset;right:unset;left:auto;right:0}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{left:unset;right:unset;left:auto;right:0}}}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}@supports (inset-inline-start: 0){:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}}@supports not (inset-inline-start: 0){:host(.menu-side-end) .menu-inner{left:auto;right:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{left:unset;right:unset;left:0;right:auto}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{left:unset;right:unset;left:0;right:auto}}}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;transform:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-type-overlay) .menu-inner{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}"}}}]);
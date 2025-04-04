/*! For license information please see 2974.e77ef9e7.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[2974],{"../../packages/core/dist/esm/cubic-bezier-c467eebb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>getTimeGivenProgression});const getTimeGivenProgression=(p0,p1,p2,p3,progression)=>solveCubicBezier(p0[1],p1[1],p2[1],p3[1],progression).map((tValue=>solveCubicParametricEquation(p0[0],p1[0],p2[0],p3[0],tValue))),solveCubicParametricEquation=(p0,p1,p2,p3,t)=>t*(3*p1*Math.pow(t-1,2)+t*(-3*p2*t+3*p2+p3*t))-p0*Math.pow(t-1,3),solveCubicBezier=(p0,p1,p2,p3,refPoint)=>solveCubicEquation((p3-=refPoint)-3*(p2-=refPoint)+3*(p1-=refPoint)-(p0-=refPoint),3*p2-6*p1+3*p0,3*p1-3*p0,p0).filter((root=>root>=0&&root<=1)),solveCubicEquation=(a,b,c,d)=>{if(0===a)return((a,b,c)=>{const discriminant=b*b-4*a*c;return discriminant<0?[]:[(-b+Math.sqrt(discriminant))/(2*a),(-b-Math.sqrt(discriminant))/(2*a)]})(b,c,d);const p=(3*(c/=a)-(b/=a)*b)/3,q=(2*b*b*b-9*b*c+27*(d/=a))/27;if(0===p)return[Math.pow(-q,1/3)];if(0===q)return[Math.sqrt(-p),-Math.sqrt(-p)];const discriminant=Math.pow(q/2,2)+Math.pow(p/3,3);if(0===discriminant)return[Math.pow(q/2,.5)-b/3];if(discriminant>0)return[Math.pow(-q/2+Math.sqrt(discriminant),1/3)-Math.pow(q/2+Math.sqrt(discriminant),1/3)-b/3];const r=Math.sqrt(Math.pow(-p/3,3)),phi=Math.acos(-q/(2*Math.sqrt(Math.pow(-p/3,3)))),s=2*Math.pow(r,1/3);return[s*Math.cos(phi/3)-b/3,s*Math.cos((phi+2*Math.PI)/3)-b/3,s*Math.cos((phi+4*Math.PI)/3)-b/3]}},"../../packages/core/dist/esm/index-5b47386a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>menuController});var _index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js"),_hardware_back_button_0c101e28_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/hardware-back-button-0c101e28.js"),_index_1e38abc5_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/dist/esm/index-1e38abc5.js"),_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/dist/esm/helpers-4047ce7f.js"),_ionic_global_808d033b_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/ionic-global-808d033b.js"),_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/animation-aa17f0ca.js");const baseAnimation=isIos=>(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)().duration(isIos?400:300),menuOverlayAnimation=menu=>{let closedX,openedX;const width=menu.width+8,menuAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)(),backdropAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)();menu.isEndSide?(closedX=width+"px",openedX="0px"):(closedX=-width+"px",openedX="0px"),menuAnimation.addElement(menu.menuInnerEl).fromTo("transform",`translateX(${closedX})`,`translateX(${openedX})`);const isIos="ios"===(0,_ionic_global_808d033b_js__WEBPACK_IMPORTED_MODULE_2__.g)(menu),opacity=isIos?.2:.25;return backdropAnimation.addElement(menu.backdropEl).fromTo("opacity",.01,opacity),baseAnimation(isIos).addAnimation([menuAnimation,backdropAnimation])},menuPushAnimation=menu=>{let contentOpenedX,menuClosedX;const mode=(0,_ionic_global_808d033b_js__WEBPACK_IMPORTED_MODULE_2__.g)(menu),width=menu.width;menu.isEndSide?(contentOpenedX=-width+"px",menuClosedX=width+"px"):(contentOpenedX=width+"px",menuClosedX=-width+"px");const menuAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)().addElement(menu.menuInnerEl).fromTo("transform",`translateX(${menuClosedX})`,"translateX(0px)"),contentAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)().addElement(menu.contentEl).fromTo("transform","translateX(0px)",`translateX(${contentOpenedX})`),backdropAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)().addElement(menu.backdropEl).fromTo("opacity",.01,.32);return baseAnimation("ios"===mode).addAnimation([menuAnimation,contentAnimation,backdropAnimation])},menuRevealAnimation=menu=>{const mode=(0,_ionic_global_808d033b_js__WEBPACK_IMPORTED_MODULE_2__.g)(menu),openedX=menu.width*(menu.isEndSide?-1:1)+"px",contentOpen=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)().addElement(menu.contentEl).fromTo("transform","translateX(0px)",`translateX(${openedX})`);return baseAnimation("ios"===mode).addAnimation(contentOpen)},menuController=(()=>{const menuAnimations=new Map,menus=[],get=async(menu,logOnMultipleSideMenus=!1)=>{if(await waitUntilReady(),"start"===menu||"end"===menu){const menuRefs=menus.filter((m=>m.side===menu&&!m.disabled));if(menuRefs.length>=1)return menuRefs.length>1&&logOnMultipleSideMenus&&(0,_index_1e38abc5_js__WEBPACK_IMPORTED_MODULE_4__.p)(`menuController queried for a menu on the "${menu}" side, but ${menuRefs.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`,menuRefs.map((m=>m.el))),menuRefs[0].el;const sideMenuRefs=menus.filter((m=>m.side===menu));if(sideMenuRefs.length>=1)return sideMenuRefs.length>1&&logOnMultipleSideMenus&&(0,_index_1e38abc5_js__WEBPACK_IMPORTED_MODULE_4__.p)(`menuController queried for a menu on the "${menu}" side, but ${sideMenuRefs.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`,sideMenuRefs.map((m=>m.el))),sideMenuRefs[0].el}else if(null!=menu)return find((m=>m.menuId===menu));const menuEl=find((m=>!m.disabled));return menuEl||(menus.length>0?menus[0].el:void 0)},getOpen=async()=>(await waitUntilReady(),_getOpenSync()),registerAnimation=(name,animation)=>{menuAnimations.set(name,animation)},_getOpenSync=()=>find((m=>m._isOpen)),getMenusSync=()=>menus.map((menu=>menu.el)),isAnimatingSync=()=>menus.some((menu=>menu.isAnimating)),find=predicate=>{const instance=menus.find(predicate);if(void 0!==instance)return instance.el},waitUntilReady=()=>Promise.all(Array.from(document.querySelectorAll("ion-menu")).map((menu=>new Promise((resolve=>(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_5__.e)(menu,resolve))))));return registerAnimation("reveal",menuRevealAnimation),registerAnimation("push",menuPushAnimation),registerAnimation("overlay",menuOverlayAnimation),null===_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.d||void 0===_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.d||_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.d.addEventListener("ionBackButton",(ev=>{const openMenu=_getOpenSync();openMenu&&ev.detail.register(_hardware_back_button_0c101e28_js__WEBPACK_IMPORTED_MODULE_1__.MENU_BACK_BUTTON_PRIORITY,(()=>openMenu.close()))})),{registerAnimation,get,getMenus:async()=>(await waitUntilReady(),getMenusSync()),getOpen,isEnabled:async menu=>{const menuEl=await get(menu);return!!menuEl&&!menuEl.disabled},swipeGesture:async(shouldEnable,menu)=>{const menuEl=await get(menu);return menuEl&&(menuEl.swipeGesture=shouldEnable),menuEl},isAnimating:async()=>(await waitUntilReady(),isAnimatingSync()),isOpen:async menu=>{if(null!=menu){const menuEl=await get(menu);return void 0!==menuEl&&menuEl.isOpen()}return void 0!==await getOpen()},enable:async(shouldEnable,menu)=>{const menuEl=await get(menu);return menuEl&&(menuEl.disabled=!shouldEnable),menuEl},toggle:async menu=>{const menuEl=await get(menu,!0);return!!menuEl&&menuEl.toggle()},close:async menu=>{const menuEl=await(void 0!==menu?get(menu,!0):getOpen());return void 0!==menuEl&&menuEl.close()},open:async menu=>{const menuEl=await get(menu,!0);return!!menuEl&&menuEl.open()},_getOpenSync,_createAnimation:(type,menuCmp)=>{const animationBuilder=menuAnimations.get(type);if(!animationBuilder)throw new Error("animation not registered");return animationBuilder(menuCmp)},_register:menu=>{menus.indexOf(menu)<0&&menus.push(menu)},_unregister:menu=>{const index=menus.indexOf(menu);index>-1&&menus.splice(index,1)},_setOpen:async(menu,shouldOpen,animated,role)=>{if(isAnimatingSync())return!1;if(shouldOpen){const openedMenu=await getOpen();openedMenu&&menu.el!==openedMenu&&await openedMenu.setOpen(!1,!1)}return menu._setOpen(shouldOpen,animated,role)}}})()},"../../packages/core/dist/esm/ion-menu.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_menu:()=>Menu});var _index_73621246_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-73621246.js"),_cubic_bezier_c467eebb_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../packages/core/dist/esm/cubic-bezier-c467eebb.js"),_overlays_484a057c_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/overlays-484a057c.js"),_gesture_controller_a29626f0_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/gesture-controller-a29626f0.js"),_hardware_back_button_0c101e28_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/hardware-back-button-0c101e28.js"),_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/core/dist/esm/helpers-4047ce7f.js"),_index_5b47386a_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/dist/esm/index-5b47386a.js"),_ionic_global_808d033b_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/dist/esm/ionic-global-808d033b.js"),_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../packages/core/dist/esm/theme-516b22d6.js");__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js"),__webpack_require__("../../packages/core/dist/esm/animation-aa17f0ca.js");const Menu=class{constructor(hostRef){(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionWillOpen=(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionWillOpen",7),this.ionWillClose=(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionWillClose",7),this.ionDidOpen=(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionDidOpen",7),this.ionDidClose=(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionDidClose",7),this.ionMenuChange=(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionMenuChange",7),this.lastOnEnd=0,this.blocker=_gesture_controller_a29626f0_js__WEBPACK_IMPORTED_MODULE_2__.G.createBlocker({disableScroll:!0}),this.didLoad=!1,this.operationCancelled=!1,this.isAnimating=!1,this._isOpen=!1,this.inheritedAttributes={},this.handleFocus=ev=>{const lastOverlay=(0,_overlays_484a057c_js__WEBPACK_IMPORTED_MODULE_1__.g)(document);lastOverlay&&!lastOverlay.contains(this.el)||this.trapKeyboardFocus(ev,document)},this.isPaneVisible=!1,this.isEndSide=!1,this.contentId=void 0,this.menuId=void 0,this.type=void 0,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}typeChanged(type,oldType){const contentEl=this.contentEl;contentEl&&(void 0!==oldType&&contentEl.classList.remove(`menu-content-${oldType}`),contentEl.classList.add(`menu-content-${type}`),contentEl.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_8__.f)(this.side),this.animation=void 0}swipeGestureChanged(){this.updateState()}async connectedCallback(){"undefined"!=typeof customElements&&null!=customElements&&await customElements.whenDefined("ion-menu"),void 0===this.type&&(this.type=_ionic_global_808d033b_js__WEBPACK_IMPORTED_MODULE_5__.c.get("menuType","overlay"));const content=void 0!==this.contentId?document.getElementById(this.contentId):null;null!==content?(this.el.contains(content)&&console.error('Menu: "contentId" should refer to the main view\'s ion-content, not the ion-content inside of the ion-menu.'),this.contentEl=content,content.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),_index_5b47386a_js__WEBPACK_IMPORTED_MODULE_4__.m._register(this),this.menuChanged(),this.gesture=(await __webpack_require__.e(7697).then(__webpack_require__.bind(__webpack_require__,"../../packages/core/dist/esm/index-0fc64123.js"))).createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:!0,canStart:ev=>this.canStart(ev),onWillStart:()=>this.onWillStart(),onStart:()=>this.onStart(),onMove:ev=>this.onMove(ev),onEnd:ev=>this.onEnd(ev)}),this.updateState()):console.error('Menu: must have a "content" element to listen for drag events on.')}componentWillLoad(){this.inheritedAttributes=(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_8__.i)(this.el)}async componentDidLoad(){this.didLoad=!0;const splitPane=this.el.closest("ion-split-pane");null!==splitPane&&(this.isPaneVisible=await splitPane.isVisible()),this.menuChanged(),this.updateState()}menuChanged(){this.didLoad&&this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}async disconnectedCallback(){await this.close(!1),this.blocker.destroy(),_index_5b47386a_js__WEBPACK_IMPORTED_MODULE_4__.m._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=void 0}onSplitPaneChanged(ev){const closestSplitPane=this.el.closest("ion-split-pane");null!==closestSplitPane&&closestSplitPane===ev.target&&(this.isPaneVisible=ev.detail.visible,this.updateState())}onBackdropClick(ev){if(this._isOpen&&this.lastOnEnd<ev.timeStamp-100){!!ev.composedPath&&!ev.composedPath().includes(this.menuInnerEl)&&(ev.preventDefault(),ev.stopPropagation(),this.close(void 0,_overlays_484a057c_js__WEBPACK_IMPORTED_MODULE_1__.B))}}onKeydown(ev){"Escape"===ev.key&&this.close(void 0,_overlays_484a057c_js__WEBPACK_IMPORTED_MODULE_1__.B)}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(animated=!0){return this.setOpen(!0,animated)}close(animated=!0,role){return this.setOpen(!1,animated,role)}toggle(animated=!0){return this.setOpen(!this._isOpen,animated)}setOpen(shouldOpen,animated=!0,role){return _index_5b47386a_js__WEBPACK_IMPORTED_MODULE_4__.m._setOpen(this,shouldOpen,animated,role)}trapKeyboardFocus(ev,doc){const target=ev.target;if(target)if(this.el.contains(target))this.lastFocus=target;else{const{el}=this;(0,_overlays_484a057c_js__WEBPACK_IMPORTED_MODULE_1__.f)(el),this.lastFocus===doc.activeElement&&(0,_overlays_484a057c_js__WEBPACK_IMPORTED_MODULE_1__.h)(el)}}async _setOpen(shouldOpen,animated=!0,role){return!(!this._isActive()||this.isAnimating||shouldOpen===this._isOpen)&&(this.beforeAnimation(shouldOpen,role),await this.loadAnimation(),await this.startAnimation(shouldOpen,animated),this.operationCancelled?(this.operationCancelled=!1,!1):(this.afterAnimation(shouldOpen,role),!0))}async loadAnimation(){const width=this.menuInnerEl.offsetWidth,isEndSide$1=(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_8__.f)(this.side);if(width===this.width&&void 0!==this.animation&&isEndSide$1===this.isEndSide)return;this.width=width,this.isEndSide=isEndSide$1,this.animation&&(this.animation.destroy(),this.animation=void 0);const animation=this.animation=await _index_5b47386a_js__WEBPACK_IMPORTED_MODULE_4__.m._createAnimation(this.type,this);_ionic_global_808d033b_js__WEBPACK_IMPORTED_MODULE_5__.c.getBoolean("animated",!0)||animation.duration(0),animation.fill("both")}async startAnimation(shouldOpen,animated){const isReversed=!shouldOpen,mode=(0,_ionic_global_808d033b_js__WEBPACK_IMPORTED_MODULE_5__.g)(this),easing="ios"===mode?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",easingReverse="ios"===mode?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",ani=this.animation.direction(isReversed?"reverse":"normal").easing(isReversed?easingReverse:easing);animated?await ani.play():ani.play({sync:!0}),"reverse"===ani.getDirection()&&ani.direction("normal")}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(detail){return!(!!document.querySelector("ion-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!_index_5b47386a_js__WEBPACK_IMPORTED_MODULE_4__.m._getOpenSync()&&checkEdgeSide(window,detail.currentX,this.isEndSide,this.maxEdgeStart))}onWillStart(){return this.beforeAnimation(!this._isOpen,_overlays_484a057c_js__WEBPACK_IMPORTED_MODULE_1__.G),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_8__.j)(!1,"isAnimating has to be true")}onMove(detail){if(!this.isAnimating||!this.animation)return void(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_8__.j)(!1,"isAnimating has to be true");const stepValue=computeDelta(detail.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-stepValue:stepValue)}onEnd(detail){if(!this.isAnimating||!this.animation)return void(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_8__.j)(!1,"isAnimating has to be true");const isOpen=this._isOpen,isEndSide=this.isEndSide,delta=computeDelta(detail.deltaX,isOpen,isEndSide),width=this.width,stepValue=delta/width,velocity=detail.velocityX,z=width/2,shouldCompleteRight=velocity>=0&&(velocity>.2||detail.deltaX>z),shouldCompleteLeft=velocity<=0&&(velocity<-.2||detail.deltaX<-z),shouldComplete=isOpen?isEndSide?shouldCompleteRight:shouldCompleteLeft:isEndSide?shouldCompleteLeft:shouldCompleteRight;let shouldOpen=!isOpen&&shouldComplete;isOpen&&!shouldComplete&&(shouldOpen=!0),this.lastOnEnd=detail.currentTime;let newStepValue=shouldComplete?.001:-.001;const adjustedStepValue=stepValue<0?.01:stepValue;newStepValue+=(0,_cubic_bezier_c467eebb_js__WEBPACK_IMPORTED_MODULE_9__.g)([0,0],[.4,0],[.6,1],[1,1],(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_8__.d)(0,adjustedStepValue,.9999))[0]||0;const playTo=this._isOpen?!shouldComplete:shouldComplete;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((()=>this.afterAnimation(shouldOpen,_overlays_484a057c_js__WEBPACK_IMPORTED_MODULE_1__.G)),{oneTimeCallback:!0}).progressEnd(playTo?1:0,this._isOpen?1-newStepValue:newStepValue,300)}beforeAnimation(shouldOpen,role){(0,_helpers_4047ce7f_js__WEBPACK_IMPORTED_MODULE_8__.j)(!this.isAnimating,"_before() should not be called while animating"),(0,_ionic_global_808d033b_js__WEBPACK_IMPORTED_MODULE_5__.a)("android")&&this.el.setAttribute("aria-hidden","true"),this.el.classList.add(SHOW_MENU),this.el.setAttribute("tabindex","0"),this.backdropEl&&this.backdropEl.classList.add(SHOW_BACKDROP),this.contentEl&&(this.contentEl.classList.add(MENU_CONTENT_OPEN),this.contentEl.setAttribute("aria-hidden","true")),this.blocker.block(),this.isAnimating=!0,shouldOpen?this.ionWillOpen.emit():this.ionWillClose.emit({role})}afterAnimation(isOpen,role){var _a;if(this._isOpen=isOpen,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),isOpen){(0,_ionic_global_808d033b_js__WEBPACK_IMPORTED_MODULE_5__.a)("android")&&this.el.removeAttribute("aria-hidden"),this.ionDidOpen.emit();(null===(_a=document.activeElement)||void 0===_a?void 0:_a.closest("ion-menu"))!==this.el&&this.el.focus(),document.addEventListener("focus",this.handleFocus,!0)}else this.el.removeAttribute("aria-hidden"),this.el.classList.remove(SHOW_MENU),this.el.removeAttribute("tabindex"),this.contentEl&&(this.contentEl.classList.remove(MENU_CONTENT_OPEN),this.contentEl.removeAttribute("aria-hidden")),this.backdropEl&&this.backdropEl.classList.remove(SHOW_BACKDROP),this.animation&&this.animation.stop(),this.ionDidClose.emit({role}),document.removeEventListener("focus",this.handleFocus,!0)}updateState(){const isActive=this._isActive();this.gesture&&this.gesture.enable(isActive&&this.swipeGesture),isActive||(this.isAnimating&&(this.operationCancelled=!0),this.afterAnimation(!1,_overlays_484a057c_js__WEBPACK_IMPORTED_MODULE_1__.G))}render(){const{type,disabled,el,isPaneVisible,inheritedAttributes,side}=this,mode=(0,_ionic_global_808d033b_js__WEBPACK_IMPORTED_MODULE_5__.g)(this);return(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"da96fdb4c5ddf60e615cc4cdda7ccdb3fd7e089b",onKeyDown:(0,_hardware_back_button_0c101e28_js__WEBPACK_IMPORTED_MODULE_3__.shouldUseCloseWatcher)()?null:this.onKeydown,role:"navigation","aria-label":inheritedAttributes["aria-label"]||"menu",class:{[mode]:!0,[`menu-type-${type}`]:!0,"menu-enabled":!disabled,[`menu-side-${side}`]:!0,"menu-pane-visible":isPaneVisible,"split-pane-side":(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_10__.h)("ion-split-pane",el)}},(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"894e680fe227534711128c7aca980964ddb5a08a",class:"menu-inner",part:"container",ref:el=>this.menuInnerEl=el},(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"e9f5934518dc0cceaeadf1f2820614595fec6bc9"})),(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-backdrop",{key:"7282077817657b1bb6c155f1404c0a519fece993",ref:el=>this.backdropEl=el,class:"menu-backdrop",tappable:!1,stopPropagation:!1,part:"backdrop"}))}get el(){return(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}},computeDelta=(deltaX,isOpen,isEndSide)=>Math.max(0,isOpen!==isEndSide?-deltaX:deltaX),checkEdgeSide=(win,posX,isEndSide,maxEdgeStart)=>isEndSide?posX>=win.innerWidth-maxEdgeStart:posX<=maxEdgeStart,SHOW_MENU="show-menu",SHOW_BACKDROP="show-backdrop",MENU_CONTENT_OPEN="menu-content-open";Menu.style={ios:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{transform:translateX(-9999px);display:flex;position:absolute;flex-direction:column;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:flex;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;transform:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}",md:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{transform:translateX(-9999px);display:flex;position:absolute;flex-direction:column;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:flex;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;transform:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-overlay) .menu-inner{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}"}}}]);
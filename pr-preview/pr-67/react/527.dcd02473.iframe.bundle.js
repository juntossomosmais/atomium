/*! For license information please see 527.dcd02473.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[527,7806],{"../../packages/core/dist/esm/hardware-back-button-b3a8b0cd.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MENU_BACK_BUTTON_PRIORITY:()=>MENU_BACK_BUTTON_PRIORITY,OVERLAY_BACK_BUTTON_PRIORITY:()=>OVERLAY_BACK_BUTTON_PRIORITY,blockHardwareBackButton:()=>blockHardwareBackButton,startHardwareBackButton:()=>startHardwareBackButton});const blockHardwareBackButton=()=>{document.addEventListener("backbutton",(()=>{}))},startHardwareBackButton=()=>{const doc=document;let busy=!1;doc.addEventListener("backbutton",(()=>{if(busy)return;let index=0,handlers=[];const ev=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(priority,handler){handlers.push({priority,handler,id:index++})}}});doc.dispatchEvent(ev);const processHandlers=()=>{if(handlers.length>0){let selectedHandler={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};handlers.forEach((handler=>{handler.priority>=selectedHandler.priority&&(selectedHandler=handler)})),busy=!0,handlers=handlers.filter((handler=>handler.id!==selectedHandler.id)),(async handlerRegister=>{try{if(null==handlerRegister?void 0:handlerRegister.handler){const result=handlerRegister.handler(processHandlers);null!=result&&await result}}catch(e){console.error(e)}})(selectedHandler).then((()=>busy=!1))}};processHandlers()}))},OVERLAY_BACK_BUTTON_PRIORITY=100,MENU_BACK_BUTTON_PRIORITY=99},"../../packages/core/dist/esm/helpers-937ea457.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>componentOnReady,e:()=>renderHiddenInput,f:()=>clamp,g:()=>getElementRoot,h:()=>isEndSide,i:()=>inheritAriaAttributes,j:()=>focusElement,k:()=>assert,l:()=>hasLazyBuild,m:()=>debounceEvent,n:()=>getAriaLabel,o:()=>debounce,p:()=>pointerCoord,q:()=>findItemLabel,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync,u:()=>hasShadowDom,v:()=>now});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,findItemLabel=componentEl=>{const itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},focusElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},getAriaLabel=(componentEl,inputId)=>{let labelText;const labelledBy=componentEl.getAttribute("aria-labelledby"),componentId=componentEl.id;let labelId=null!==labelledBy&&""!==labelledBy.trim()?labelledBy:inputId+"-lbl",label=null!==labelledBy&&""!==labelledBy.trim()?document.getElementById(labelledBy):findItemLabel(componentEl);return label?(null===labelledBy&&(label.id=labelId),labelText=label.textContent,label.setAttribute("aria-hidden","true")):""!==componentId.trim()&&(label=document.querySelector(`label[for="${componentId}"]`),label&&(""!==label.id?labelId=label.id:label.id=labelId=`${componentId}-lbl`,labelText=label.textContent)),{label,labelId,labelText}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=ev=>ev.timeStamp||Date.now(),pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/index-2b91d84e.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>menuController});var _hardware_back_button_b3a8b0cd_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/hardware-back-button-b3a8b0cd.js"),_helpers_937ea457_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/helpers-937ea457.js"),_ionic_global_4a637317_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/ionic-global-4a637317.js"),_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/animation-45b29945.js");const baseAnimation=isIos=>(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_1__.c)().duration(isIos?400:300),menuOverlayAnimation=menu=>{let closedX,openedX;const width=menu.width+8,menuAnimation=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_1__.c)(),backdropAnimation=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_1__.c)();menu.isEndSide?(closedX=width+"px",openedX="0px"):(closedX=-width+"px",openedX="0px"),menuAnimation.addElement(menu.menuInnerEl).fromTo("transform",`translateX(${closedX})`,`translateX(${openedX})`);const isIos="ios"===(0,_ionic_global_4a637317_js__WEBPACK_IMPORTED_MODULE_0__.g)(menu),opacity=isIos?.2:.25;return backdropAnimation.addElement(menu.backdropEl).fromTo("opacity",.01,opacity),baseAnimation(isIos).addAnimation([menuAnimation,backdropAnimation])},menuPushAnimation=menu=>{let contentOpenedX,menuClosedX;const mode=(0,_ionic_global_4a637317_js__WEBPACK_IMPORTED_MODULE_0__.g)(menu),width=menu.width;menu.isEndSide?(contentOpenedX=-width+"px",menuClosedX=width+"px"):(contentOpenedX=width+"px",menuClosedX=-width+"px");const menuAnimation=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_1__.c)().addElement(menu.menuInnerEl).fromTo("transform",`translateX(${menuClosedX})`,"translateX(0px)"),contentAnimation=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_1__.c)().addElement(menu.contentEl).fromTo("transform","translateX(0px)",`translateX(${contentOpenedX})`),backdropAnimation=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_1__.c)().addElement(menu.backdropEl).fromTo("opacity",.01,.32);return baseAnimation("ios"===mode).addAnimation([menuAnimation,contentAnimation,backdropAnimation])},menuRevealAnimation=menu=>{const mode=(0,_ionic_global_4a637317_js__WEBPACK_IMPORTED_MODULE_0__.g)(menu),openedX=menu.width*(menu.isEndSide?-1:1)+"px",contentOpen=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_1__.c)().addElement(menu.contentEl).fromTo("transform","translateX(0px)",`translateX(${openedX})`);return baseAnimation("ios"===mode).addAnimation(contentOpen)},menuController=(()=>{const menuAnimations=new Map,menus=[],get=async menu=>{if(await waitUntilReady(),"start"===menu||"end"===menu){const menuRef=find((m=>m.side===menu&&!m.disabled));return menuRef||find((m=>m.side===menu))}if(null!=menu)return find((m=>m.menuId===menu));const menuEl=find((m=>!m.disabled));return menuEl||(menus.length>0?menus[0].el:void 0)},getOpen=async()=>(await waitUntilReady(),_getOpenSync()),registerAnimation=(name,animation)=>{menuAnimations.set(name,animation)},_setActiveMenu=menu=>{const side=menu.side;menus.filter((m=>m.side===side&&m!==menu)).forEach((m=>m.disabled=!0))},_getOpenSync=()=>find((m=>m._isOpen)),getMenusSync=()=>menus.map((menu=>menu.el)),isAnimatingSync=()=>menus.some((menu=>menu.isAnimating)),find=predicate=>{const instance=menus.find(predicate);if(void 0!==instance)return instance.el},waitUntilReady=()=>Promise.all(Array.from(document.querySelectorAll("ion-menu")).map((menu=>new Promise((resolve=>(0,_helpers_937ea457_js__WEBPACK_IMPORTED_MODULE_2__.d)(menu,resolve))))));return registerAnimation("reveal",menuRevealAnimation),registerAnimation("push",menuPushAnimation),registerAnimation("overlay",menuOverlayAnimation),"undefined"!=typeof document&&document.addEventListener("ionBackButton",(ev=>{const openMenu=_getOpenSync();openMenu&&ev.detail.register(_hardware_back_button_b3a8b0cd_js__WEBPACK_IMPORTED_MODULE_3__.MENU_BACK_BUTTON_PRIORITY,(()=>openMenu.close()))})),{registerAnimation,get,getMenus:async()=>(await waitUntilReady(),getMenusSync()),getOpen,isEnabled:async menu=>{const menuEl=await get(menu);return!!menuEl&&!menuEl.disabled},swipeGesture:async(shouldEnable,menu)=>{const menuEl=await get(menu);return menuEl&&(menuEl.swipeGesture=shouldEnable),menuEl},isAnimating:async()=>(await waitUntilReady(),isAnimatingSync()),isOpen:async menu=>{if(null!=menu){const menuEl=await get(menu);return void 0!==menuEl&&menuEl.isOpen()}return void 0!==await getOpen()},enable:async(shouldEnable,menu)=>{const menuEl=await get(menu);return menuEl&&(menuEl.disabled=!shouldEnable),menuEl},toggle:async menu=>{const menuEl=await get(menu);return!!menuEl&&menuEl.toggle()},close:async menu=>{const menuEl=await(void 0!==menu?get(menu):getOpen());return void 0!==menuEl&&menuEl.close()},open:async menu=>{const menuEl=await get(menu);return!!menuEl&&menuEl.open()},_getOpenSync,_createAnimation:(type,menuCmp)=>{const animationBuilder=menuAnimations.get(type);if(!animationBuilder)throw new Error("animation not registered");return animationBuilder(menuCmp)},_register:menu=>{menus.indexOf(menu)<0&&(menu.disabled||_setActiveMenu(menu),menus.push(menu))},_unregister:menu=>{const index=menus.indexOf(menu);index>-1&&menus.splice(index,1)},_setOpen:async(menu,shouldOpen,animated)=>{if(isAnimatingSync())return!1;if(shouldOpen){const openedMenu=await getOpen();openedMenu&&menu.el!==openedMenu&&await openedMenu.setOpen(!1,!1)}return menu._setOpen(shouldOpen,animated)},_setActiveMenu}})()},"../../packages/core/dist/esm/menu-toggle-util-d5063785.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>updateVisibility});var _index_2b91d84e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-2b91d84e.js");const updateVisibility=async menu=>{const menuEl=await _index_2b91d84e_js__WEBPACK_IMPORTED_MODULE_0__.m.get(menu);return!(!menuEl||!await menuEl.isActive())}}}]);
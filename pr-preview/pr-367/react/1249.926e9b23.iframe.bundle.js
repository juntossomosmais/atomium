/*! For license information please see 1249.926e9b23.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[1249],{"../../packages/core/dist/esm/dir-861e8ef7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>isRTL});const isRTL=hostEl=>hostEl&&""!==hostEl.dir?"rtl"===hostEl.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase())},"../../packages/core/dist/esm/helpers-67bf28d7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>componentOnReady,e:()=>renderHiddenInput,f:()=>clamp,g:()=>getElementRoot,h:()=>hasLazyBuild,i:()=>inheritAriaAttributes,j:()=>isEndSide,k:()=>focusElement,l:()=>assert,m:()=>debounceEvent,n:()=>getAriaLabel,o:()=>findItemLabel,p:()=>debounce,q:()=>hasShadowDom,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync,u:()=>now,v:()=>pointerCoord});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,findItemLabel=componentEl=>{const itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},focusElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},getAriaLabel=(componentEl,inputId)=>{let labelText;const labelledBy=componentEl.getAttribute("aria-labelledby"),componentId=componentEl.id;let labelId=null!==labelledBy&&""!==labelledBy.trim()?labelledBy:inputId+"-lbl",label=null!==labelledBy&&""!==labelledBy.trim()?document.getElementById(labelledBy):findItemLabel(componentEl);return label?(null===labelledBy&&(label.id=labelId),labelText=label.textContent,label.setAttribute("aria-hidden","true")):""!==componentId.trim()&&(label=document.querySelector(`label[for="${componentId}"]`),label&&(""!==label.id?labelId=label.id:label.id=labelId=`${componentId}-lbl`,labelText=label.textContent)),{label,labelId,labelText}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=ev=>ev.timeStamp||Date.now(),pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/ion-content.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_content:()=>Content});var _index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-66adf017.js"),_helpers_67bf28d7_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/helpers-67bf28d7.js"),_ionic_global_507b7016_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-507b7016.js"),_dir_861e8ef7_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/dir-861e8ef7.js"),_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/dist/esm/theme-516b22d6.js");const Content=class{constructor(hostRef){(0,_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionScrollStart=(0,_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionScrollStart",7),this.ionScroll=(0,_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionScroll",7),this.ionScrollEnd=(0,_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionScrollEnd",7),this.watchDog=null,this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.isMainContent=!0,this.resizeTimeout=null,this.tabsElement=null,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,data:void 0,isScrolling:!0},this.color=void 0,this.fullscreen=!1,this.forceOverscroll=void 0,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1}connectedCallback(){if(this.isMainContent=null===this.el.closest("ion-menu, ion-popover, ion-modal"),(0,_helpers_67bf28d7_js__WEBPACK_IMPORTED_MODULE_2__.h)(this.el)){const closestTabs=this.tabsElement=this.el.closest("ion-tabs");null!==closestTabs&&(this.tabsLoadCallback=()=>this.resize(),closestTabs.addEventListener("ionTabBarLoaded",this.tabsLoadCallback))}}disconnectedCallback(){if(this.onScrollEnd(),(0,_helpers_67bf28d7_js__WEBPACK_IMPORTED_MODULE_2__.h)(this.el)){const{tabsElement,tabsLoadCallback}=this;null!==tabsElement&&void 0!==tabsLoadCallback&&tabsElement.removeEventListener("ionTabBarLoaded",tabsLoadCallback),this.tabsElement=null,this.tabsLoadCallback=void 0}}onResize(){this.resizeTimeout&&(clearTimeout(this.resizeTimeout),this.resizeTimeout=null),this.resizeTimeout=setTimeout((()=>{null!==this.el.offsetParent&&this.resize()}),100)}shouldForceOverscroll(){const{forceOverscroll}=this,mode=(0,_ionic_global_507b7016_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return void 0===forceOverscroll?"ios"===mode&&(0,_ionic_global_507b7016_js__WEBPACK_IMPORTED_MODULE_1__.a)("ios"):forceOverscroll}resize(){this.fullscreen?(0,_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.i)((()=>this.readDimensions())):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,(0,_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.f)(this))}readDimensions(){const page=getPageElement(this.el),top=Math.max(this.el.offsetTop,0),bottom=Math.max(page.offsetHeight-top-this.el.offsetHeight,0);(top!==this.cTop||bottom!==this.cBottom)&&(this.cTop=top,this.cBottom=bottom,(0,_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.f)(this))}onScroll(ev){const timeStamp=Date.now(),shouldStart=!this.isScrolling;this.lastScroll=timeStamp,shouldStart&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,(0,_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.i)((ts=>{this.queued=!1,this.detail.event=ev,updateScrollDetail(this.detail,this.scrollEl,ts,shouldStart),this.ionScroll.emit(this.detail)})))}async getScrollElement(){return this.scrollEl||await new Promise((resolve=>(0,_helpers_67bf28d7_js__WEBPACK_IMPORTED_MODULE_2__.d)(this.el,resolve))),Promise.resolve(this.scrollEl)}async getBackgroundElement(){return this.backgroundContentEl||await new Promise((resolve=>(0,_helpers_67bf28d7_js__WEBPACK_IMPORTED_MODULE_2__.d)(this.el,resolve))),Promise.resolve(this.backgroundContentEl)}scrollToTop(duration=0){return this.scrollToPoint(void 0,0,duration)}async scrollToBottom(duration=0){const scrollEl=await this.getScrollElement(),y=scrollEl.scrollHeight-scrollEl.clientHeight;return this.scrollToPoint(void 0,y,duration)}async scrollByPoint(x,y,duration){const scrollEl=await this.getScrollElement();return this.scrollToPoint(x+scrollEl.scrollLeft,y+scrollEl.scrollTop,duration)}async scrollToPoint(x,y,duration=0){const el=await this.getScrollElement();if(duration<32)return null!=y&&(el.scrollTop=y),void(null!=x&&(el.scrollLeft=x));let resolve,startTime=0;const promise=new Promise((r=>resolve=r)),fromY=el.scrollTop,fromX=el.scrollLeft,deltaY=null!=y?y-fromY:0,deltaX=null!=x?x-fromX:0,step=timeStamp=>{const linearTime=Math.min(1,(timeStamp-startTime)/duration)-1,easedT=Math.pow(linearTime,3)+1;0!==deltaY&&(el.scrollTop=Math.floor(easedT*deltaY+fromY)),0!==deltaX&&(el.scrollLeft=Math.floor(easedT*deltaX+fromX)),easedT<1?requestAnimationFrame(step):resolve()};return requestAnimationFrame((ts=>{startTime=ts,step(ts)})),promise}onScrollStart(){this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval((()=>{this.lastScroll<Date.now()-120&&this.onScrollEnd()}),100)}onScrollEnd(){this.watchDog&&clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))}render(){const{isMainContent,scrollX,scrollY,el}=this,rtl=(0,_dir_861e8ef7_js__WEBPACK_IMPORTED_MODULE_3__.i)(el)?"rtl":"ltr",mode=(0,_ionic_global_507b7016_js__WEBPACK_IMPORTED_MODULE_1__.g)(this),forceOverscroll=this.shouldForceOverscroll(),transitionShadow="ios"===mode,TagType=isMainContent?"main":"div";return this.resize(),(0,_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_4__.c)(this.color,{[mode]:!0,"content-sizing":(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_4__.h)("ion-popover",this.el),overscroll:forceOverscroll,[`content-${rtl}`]:!0}),style:{"--offset-top":`${this.cTop}px`,"--offset-bottom":`${this.cBottom}px`}},(0,_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{ref:el=>this.backgroundContentEl=el,id:"background-content",part:"background"}),(0,_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.h)(TagType,{class:{"inner-scroll":!0,"scroll-x":scrollX,"scroll-y":scrollY,overscroll:(scrollX||scrollY)&&forceOverscroll},ref:scrollEl=>this.scrollEl=scrollEl,onScroll:this.scrollEvents?ev=>this.onScroll(ev):void 0,part:"scroll"},(0,_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)),transitionShadow?(0,_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"transition-effect"},(0,_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"transition-cover"}),(0,_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"transition-shadow"})):null,(0,_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"fixed"}))}get el(){return(0,_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}},getPageElement=el=>{const tabs=el.closest("ion-tabs");if(tabs)return tabs;const page=el.closest("ion-app, ion-page, .ion-page, page-inner, .popover-content");return page||(el=>{var _a;return el.parentElement?el.parentElement:(null===(_a=el.parentNode)||void 0===_a?void 0:_a.host)?el.parentNode.host:null})(el)},updateScrollDetail=(detail,el,timestamp,shouldStart)=>{const prevX=detail.currentX,prevY=detail.currentY,prevT=detail.currentTime,currentX=el.scrollLeft,currentY=el.scrollTop,timeDelta=timestamp-prevT;if(shouldStart&&(detail.startTime=timestamp,detail.startX=currentX,detail.startY=currentY,detail.velocityX=detail.velocityY=0),detail.currentTime=timestamp,detail.currentX=detail.scrollLeft=currentX,detail.currentY=detail.scrollTop=currentY,detail.deltaX=currentX-detail.startX,detail.deltaY=currentY-detail.startY,timeDelta>0&&timeDelta<100){const velocityX=(currentX-prevX)/timeDelta,velocityY=(currentY-prevY)/timeDelta;detail.velocityX=.7*velocityX+.3*detail.velocityX,detail.velocityY=.7*velocityY+.3*detail.velocityY}};Content.style=':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);box-sizing:border-box;overflow:hidden;touch-action:pan-x pan-y pinch-zoom}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){display:flex;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}.transition-effect{display:none;position:absolute;width:100%;height:100vh;opacity:0;pointer-events:none}:host(.content-ltr) .transition-effect{left:-100%;}:host(.content-rtl) .transition-effect{right:-100%;}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;width:100%;height:100%;box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03)}:host(.content-ltr) .transition-shadow{right:0;}:host(.content-rtl) .transition-shadow{left:0;transform:scaleX(-1)}::slotted([slot=fixed]){position:absolute;transform:translateZ(0)}'},"../../packages/core/dist/esm/theme-516b22d6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
/*! For license information please see 7211.19560f32.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[7211],{"../../packages/core/dist/esm/helpers-079c01eb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>componentOnReady,e:()=>renderHiddenInput,f:()=>clamp,g:()=>getElementRoot,h:()=>hasLazyBuild,i:()=>inheritAriaAttributes,j:()=>isEndSide,k:()=>focusVisibleElement,l:()=>assert,m:()=>debounceEvent,n:()=>getAriaLabel,o:()=>findItemLabel,p:()=>debounce,q:()=>hasShadowDom,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync,u:()=>now,v:()=>pointerCoord});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{void 0!==animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,findItemLabel=componentEl=>{const itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},focusVisibleElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},getAriaLabel=(componentEl,inputId)=>{let labelText;const labelledBy=componentEl.getAttribute("aria-labelledby"),componentId=componentEl.id;let labelId=null!==labelledBy&&""!==labelledBy.trim()?labelledBy:inputId+"-lbl",label=null!==labelledBy&&""!==labelledBy.trim()?document.getElementById(labelledBy):findItemLabel(componentEl);return label?(null===labelledBy&&(label.id=labelId),labelText=label.textContent,label.setAttribute("aria-hidden","true")):""!==componentId.trim()&&(label=document.querySelector(`label[for="${componentId}"]`),label&&(""!==label.id?labelId=label.id:label.id=labelId=`${componentId}-lbl`,labelText=label.textContent)),{label,labelId,labelText}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=ev=>ev.timeStamp||Date.now(),pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/index-6cad21e9.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>ION_CONTENT_CLASS_SELECTOR,a:()=>findClosestIonContent,b:()=>ION_CONTENT_ELEMENT_SELECTOR,c:()=>scrollByPoint,d:()=>disableContentScrollY,f:()=>findIonContent,g:()=>getScrollElement,i:()=>isIonContent,p:()=>printIonContentErrorMsg,r:()=>resetContentScrollY,s:()=>scrollToTop});var _helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/helpers-079c01eb.js"),_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/index-f5dbb989.js");const ION_CONTENT_ELEMENT_SELECTOR="ion-content",ION_CONTENT_CLASS_SELECTOR=".ion-content-scroll-host",ION_CONTENT_SELECTOR=`${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`,isIonContent=el=>"ION-CONTENT"===el.tagName,getScrollElement=async el=>isIonContent(el)?(await new Promise((resolve=>(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_0__.d)(el,resolve))),el.getScrollElement()):el,findIonContent=el=>{const customContentHost=el.querySelector(ION_CONTENT_CLASS_SELECTOR);return customContentHost||el.querySelector(ION_CONTENT_SELECTOR)},findClosestIonContent=el=>el.closest(ION_CONTENT_SELECTOR),scrollToTop=(el,durationMs)=>{if(isIonContent(el)){return el.scrollToTop(durationMs)}return Promise.resolve(el.scrollTo({top:0,left:0,behavior:durationMs>0?"smooth":"auto"}))},scrollByPoint=(el,x,y,durationMs)=>{if(isIonContent(el)){return el.scrollByPoint(x,y,durationMs)}return Promise.resolve(el.scrollBy({top:y,left:x,behavior:durationMs>0?"smooth":"auto"}))},printIonContentErrorMsg=el=>(0,_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_1__.b)(el,ION_CONTENT_ELEMENT_SELECTOR),disableContentScrollY=contentEl=>{if(isIonContent(contentEl)){const ionContent=contentEl,initialScrollY=ionContent.scrollY;return ionContent.scrollY=!1,initialScrollY}return contentEl.style.setProperty("overflow","hidden"),!0},resetContentScrollY=(contentEl,initialScrollY)=>{isIonContent(contentEl)?contentEl.scrollY=initialScrollY:contentEl.style.removeProperty("overflow")}},"../../packages/core/dist/esm/index-f5dbb989.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>printIonError,b:()=>printRequiredElementError,p:()=>printIonWarning});const printIonWarning=(message,...params)=>console.warn(`[Ionic Warning]: ${message}`,...params),printIonError=(message,...params)=>console.error(`[Ionic Error]: ${message}`,...params),printRequiredElementError=(el,...targetSelectors)=>console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(" or ")}.`)},"../../packages/core/dist/esm/ion-header.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_header:()=>Header});var _index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-7c3eb939.js"),_index_6cad21e9_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/index-6cad21e9.js"),_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/helpers-079c01eb.js"),_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/dist/esm/theme-516b22d6.js"),_ionic_global_3da28692_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-3da28692.js");const cloneElement=tagName=>{const getCachedEl=document.querySelector(`${tagName}.ion-cloned-element`);if(null!==getCachedEl)return getCachedEl;const clonedEl=document.createElement(tagName);return clonedEl.classList.add("ion-cloned-element"),clonedEl.style.setProperty("display","none"),document.body.appendChild(clonedEl),clonedEl},createHeaderIndex=headerEl=>{if(!headerEl)return;const toolbars=headerEl.querySelectorAll("ion-toolbar");return{el:headerEl,toolbars:Array.from(toolbars).map((toolbar=>{const ionTitleEl=toolbar.querySelector("ion-title");return{el:toolbar,background:toolbar.shadowRoot.querySelector(".toolbar-background"),ionTitleEl,innerTitleEl:ionTitleEl?ionTitleEl.shadowRoot.querySelector(".toolbar-title"):null,ionButtonsEl:Array.from(toolbar.querySelectorAll("ion-buttons"))}}))}},setToolbarBackgroundOpacity=(headerEl,opacity)=>{"fade"!==headerEl.collapse&&(void 0===opacity?headerEl.style.removeProperty("--opacity-scale"):headerEl.style.setProperty("--opacity-scale",opacity.toString()))},handleToolbarIntersection=(ev,mainHeaderIndex,scrollHeaderIndex,scrollEl)=>{(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.w)((()=>{const scrollTop=scrollEl.scrollTop;((ev,mainHeaderIndex,scrollTop)=>{if(!ev[0].isIntersecting)return;const scale=ev[0].intersectionRatio>.9||scrollTop<=0?0:100*(1-ev[0].intersectionRatio)/75;setToolbarBackgroundOpacity(mainHeaderIndex.el,1===scale?void 0:scale)})(ev,mainHeaderIndex,scrollTop);const event=ev[0],intersection=event.intersectionRect,intersectionArea=intersection.width*intersection.height,rootArea=event.rootBounds.width*event.rootBounds.height,isPageHidden=0===intersectionArea&&0===rootArea,leftDiff=Math.abs(intersection.left-event.boundingClientRect.left),rightDiff=Math.abs(intersection.right-event.boundingClientRect.right);if(!isPageHidden&&!(intersectionArea>0&&(leftDiff>=5||rightDiff>=5)))if(event.isIntersecting)setHeaderActive(mainHeaderIndex,!1),setHeaderActive(scrollHeaderIndex);else{(0===intersection.x&&0===intersection.y||0!==intersection.width&&0!==intersection.height)&&scrollTop>0&&(setHeaderActive(mainHeaderIndex),setHeaderActive(scrollHeaderIndex,!1),setToolbarBackgroundOpacity(mainHeaderIndex.el))}}))},setHeaderActive=(headerIndex,active=!0)=>{const headerEl=headerIndex.el;active?(headerEl.classList.remove("header-collapse-condense-inactive"),headerEl.removeAttribute("aria-hidden")):(headerEl.classList.add("header-collapse-condense-inactive"),headerEl.setAttribute("aria-hidden","true"))},scaleLargeTitles=(toolbars=[],scale=1,transition=!1)=>{toolbars.forEach((toolbar=>{const ionTitle=toolbar.ionTitleEl,titleDiv=toolbar.innerTitleEl;ionTitle&&"large"===ionTitle.size&&(titleDiv.style.transition=transition?"all 0.2s ease-in-out":"",titleDiv.style.transform=`scale3d(${scale}, ${scale}, 1)`)}))},handleHeaderFade=(scrollEl,baseEl,condenseHeader)=>{(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.i)((()=>{const scrollTop=scrollEl.scrollTop,baseElHeight=baseEl.clientHeight,fadeStart=condenseHeader?condenseHeader.clientHeight:0;if(null!==condenseHeader&&scrollTop<fadeStart)return baseEl.style.setProperty("--opacity-scale","0"),void scrollEl.style.setProperty("clip-path",`inset(${baseElHeight}px 0px 0px 0px)`);const distanceToStart=scrollTop-fadeStart,scale=(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_2__.f)(0,distanceToStart/10,1);(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.w)((()=>{scrollEl.style.removeProperty("clip-path"),baseEl.style.setProperty("--opacity-scale",scale.toString())}))}))},Header=class{constructor(hostRef){(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.inheritedAttributes={},this.setupFadeHeader=async(contentEl,condenseHeader)=>{const scrollEl=this.scrollEl=await(0,_index_6cad21e9_js__WEBPACK_IMPORTED_MODULE_3__.g)(contentEl);this.contentScrollCallback=()=>{handleHeaderFade(this.scrollEl,this.el,condenseHeader)},scrollEl.addEventListener("scroll",this.contentScrollCallback),handleHeaderFade(this.scrollEl,this.el,condenseHeader)},this.collapse=void 0,this.translucent=!1}componentWillLoad(){this.inheritedAttributes=(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_2__.i)(this.el)}componentDidLoad(){this.checkCollapsibleHeader()}componentDidUpdate(){this.checkCollapsibleHeader()}disconnectedCallback(){this.destroyCollapsibleHeader()}async checkCollapsibleHeader(){if("ios"!==(0,_ionic_global_3da28692_js__WEBPACK_IMPORTED_MODULE_1__.g)(this))return;const{collapse}=this,hasCondense="condense"===collapse,hasFade="fade"===collapse;if(this.destroyCollapsibleHeader(),hasCondense){const pageEl=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),contentEl=pageEl?(0,_index_6cad21e9_js__WEBPACK_IMPORTED_MODULE_3__.f)(pageEl):null;(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.w)((()=>{cloneElement("ion-title").size="large",cloneElement("ion-back-button")})),await this.setupCondenseHeader(contentEl,pageEl)}else if(hasFade){const pageEl=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),contentEl=pageEl?(0,_index_6cad21e9_js__WEBPACK_IMPORTED_MODULE_3__.f)(pageEl):null;if(!contentEl)return void(0,_index_6cad21e9_js__WEBPACK_IMPORTED_MODULE_3__.p)(this.el);const condenseHeader=contentEl.querySelector('ion-header[collapse="condense"]');await this.setupFadeHeader(contentEl,condenseHeader)}}destroyCollapsibleHeader(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.scrollEl&&this.contentScrollCallback&&(this.scrollEl.removeEventListener("scroll",this.contentScrollCallback),this.contentScrollCallback=void 0),this.collapsibleMainHeader&&(this.collapsibleMainHeader.classList.remove("header-collapse-main"),this.collapsibleMainHeader=void 0)}async setupCondenseHeader(contentEl,pageEl){if(!contentEl||!pageEl)return void(0,_index_6cad21e9_js__WEBPACK_IMPORTED_MODULE_3__.p)(this.el);if("undefined"==typeof IntersectionObserver)return;this.scrollEl=await(0,_index_6cad21e9_js__WEBPACK_IMPORTED_MODULE_3__.g)(contentEl);const headers=pageEl.querySelectorAll("ion-header");if(this.collapsibleMainHeader=Array.from(headers).find((header=>"condense"!==header.collapse)),!this.collapsibleMainHeader)return;const mainHeaderIndex=createHeaderIndex(this.collapsibleMainHeader),scrollHeaderIndex=createHeaderIndex(this.el);if(!mainHeaderIndex||!scrollHeaderIndex)return;setHeaderActive(mainHeaderIndex,!1),setToolbarBackgroundOpacity(mainHeaderIndex.el,0);this.intersectionObserver=new IntersectionObserver((ev=>{handleToolbarIntersection(ev,mainHeaderIndex,scrollHeaderIndex,this.scrollEl)}),{root:contentEl,threshold:[.25,.3,.4,.5,.6,.7,.8,.9,1]}),this.intersectionObserver.observe(scrollHeaderIndex.toolbars[scrollHeaderIndex.toolbars.length-1].el),this.contentScrollCallback=()=>{((scrollEl,scrollHeaderIndex,contentEl)=>{(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.i)((()=>{const scrollTop=scrollEl.scrollTop,scale=(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_2__.f)(1,1+-scrollTop/500,1.1);null===contentEl.querySelector("ion-refresher.refresher-native")&&(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.w)((()=>{scaleLargeTitles(scrollHeaderIndex.toolbars,scale)}))}))})(this.scrollEl,scrollHeaderIndex,contentEl)},this.scrollEl.addEventListener("scroll",this.contentScrollCallback),(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.w)((()=>{void 0!==this.collapsibleMainHeader&&this.collapsibleMainHeader.classList.add("header-collapse-main")}))}render(){const{translucent,inheritedAttributes}=this,mode=(0,_ionic_global_3da28692_js__WEBPACK_IMPORTED_MODULE_1__.g)(this),collapse=this.collapse||"none",roleType=(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_4__.h)("ion-menu",this.el)?"none":"banner";return(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.H,Object.assign({key:"be4386a218c20dc4c18320dbbcfb25574d13d27e",role:roleType,class:{[mode]:!0,[`header-${mode}`]:!0,"header-translucent":this.translucent,[`header-collapse-${collapse}`]:!0,[`header-translucent-${mode}`]:this.translucent}},inheritedAttributes),"ios"===mode&&translucent&&(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"header-background"}),(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"74c401fb331aeb40c733605fd580949ad53989b8"}))}get el(){return(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}};Header.style={ios:"ion-header{display:block;position:relative;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports (backdrop-filter: blur(0)){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:0px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}ion-header.header-ios:not(.header-collapse-main):has(~ion-content ion-header.header-ios[collapse=condense],~ion-content ion-header.header-ios.header-collapse-condense){opacity:0}",md:"ion-header{display:block;position:relative;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md{box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.header-collapse-condense{display:none}.header-md.ion-no-border{box-shadow:none}"}},"../../packages/core/dist/esm/theme-516b22d6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
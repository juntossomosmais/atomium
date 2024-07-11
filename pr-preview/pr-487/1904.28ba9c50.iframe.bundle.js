/*! For license information please see 1904.28ba9c50.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[1904],{"../../packages/core/dist/esm/framework-delegate-bec700a6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>CoreDelegate,a:()=>attachComponent,d:()=>detachComponent});var _helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/helpers-079c01eb.js");const attachComponent=async(delegate,container,component,cssClasses,componentProps,inline)=>{var _a;if(delegate)return delegate.attachViewToDom(container,component,componentProps,cssClasses);if(!(inline||"string"==typeof component||component instanceof HTMLElement))throw new Error("framework delegate is missing");const el="string"==typeof component?null===(_a=container.ownerDocument)||void 0===_a?void 0:_a.createElement(component):component;return cssClasses&&cssClasses.forEach((c=>el.classList.add(c))),componentProps&&Object.assign(el,componentProps),container.appendChild(el),await new Promise((resolve=>(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_0__.d)(el,resolve))),el},detachComponent=(delegate,element)=>{if(element){if(delegate){const container=element.parentElement;return delegate.removeViewFromDom(container,element)}element.remove()}return Promise.resolve()},CoreDelegate=()=>{let BaseComponent,Reference;return{attachViewToDom:async(parentElement,userComponent,userComponentProps={},cssClasses=[])=>{var _a,_b;let ChildComponent;if(BaseComponent=parentElement,userComponent){const el="string"==typeof userComponent?null===(_a=BaseComponent.ownerDocument)||void 0===_a?void 0:_a.createElement(userComponent):userComponent;cssClasses.forEach((c=>el.classList.add(c))),Object.assign(el,userComponentProps),BaseComponent.appendChild(el),ChildComponent=el,await new Promise((resolve=>(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_0__.d)(el,resolve)))}else if(BaseComponent.children.length>0&&("ION-MODAL"===BaseComponent.tagName||"ION-POPOVER"===BaseComponent.tagName)){if(!(ChildComponent=BaseComponent.children[0]).classList.contains("ion-delegate-host")){const el=null===(_b=BaseComponent.ownerDocument)||void 0===_b?void 0:_b.createElement("div");el.classList.add("ion-delegate-host"),cssClasses.forEach((c=>el.classList.add(c))),el.append(...BaseComponent.children),BaseComponent.appendChild(el),ChildComponent=el}}const app=document.querySelector("ion-app")||document.body;return Reference=document.createComment("ionic teleport"),BaseComponent.parentNode.insertBefore(Reference,BaseComponent),app.appendChild(BaseComponent),null!=ChildComponent?ChildComponent:BaseComponent},removeViewFromDom:()=>(BaseComponent&&Reference&&(Reference.parentNode.insertBefore(BaseComponent,Reference),Reference.remove()),Promise.resolve())}}},"../../packages/core/dist/esm/helpers-079c01eb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>componentOnReady,e:()=>renderHiddenInput,f:()=>clamp,g:()=>getElementRoot,h:()=>hasLazyBuild,i:()=>inheritAriaAttributes,j:()=>isEndSide,k:()=>focusVisibleElement,l:()=>assert,m:()=>debounceEvent,n:()=>getAriaLabel,o:()=>findItemLabel,p:()=>debounce,q:()=>hasShadowDom,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync,u:()=>now,v:()=>pointerCoord});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{void 0!==animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,findItemLabel=componentEl=>{const itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},focusVisibleElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},getAriaLabel=(componentEl,inputId)=>{let labelText;const labelledBy=componentEl.getAttribute("aria-labelledby"),componentId=componentEl.id;let labelId=null!==labelledBy&&""!==labelledBy.trim()?labelledBy:inputId+"-lbl",label=null!==labelledBy&&""!==labelledBy.trim()?document.getElementById(labelledBy):findItemLabel(componentEl);return label?(null===labelledBy&&(label.id=labelId),labelText=label.textContent,label.setAttribute("aria-hidden","true")):""!==componentId.trim()&&(label=document.querySelector(`label[for="${componentId}"]`),label&&(""!==label.id?labelId=label.id:label.id=labelId=`${componentId}-lbl`,labelText=label.textContent)),{label,labelId,labelText}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=ev=>ev.timeStamp||Date.now(),pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/ion-tab.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_tab:()=>Tab});var _index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-d630c805.js"),_framework_delegate_bec700a6_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/framework-delegate-bec700a6.js");const Tab=class{constructor(hostRef){(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.loaded=!1,this.active=!1,this.delegate=void 0,this.tab=void 0,this.component=void 0}async componentWillLoad(){this.active&&await this.setActive()}async setActive(){await this.prepareLazyLoaded(),this.active=!0}changeActive(isActive){isActive&&this.prepareLazyLoaded()}prepareLazyLoaded(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return(0,_framework_delegate_bec700a6_js__WEBPACK_IMPORTED_MODULE_1__.a)(this.delegate,this.el,this.component,["ion-page"])}catch(e){console.error(e)}}return Promise.resolve(void 0)}render(){const{tab,active,component}=this;return(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"4fe50fa809503794be2ef91383e49b72cad6fa82",role:"tabpanel","aria-hidden":active?null:"true","aria-labelledby":`tab-button-${tab}`,class:{"ion-page":void 0===component,"tab-hidden":!active}},(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"937777a826936d6b399329a926a704008339803e"}))}get el(){return(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{active:["changeActive"]}}};Tab.style=":host(.tab-hidden){display:none !important}"}}]);
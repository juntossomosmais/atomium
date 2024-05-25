/*! For license information please see 8909.d6c47e1c.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[8909],{"../../packages/core/dist/esm/helpers-079c01eb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>componentOnReady,e:()=>renderHiddenInput,f:()=>clamp,g:()=>getElementRoot,h:()=>hasLazyBuild,i:()=>inheritAriaAttributes,j:()=>isEndSide,k:()=>focusVisibleElement,l:()=>assert,m:()=>debounceEvent,n:()=>getAriaLabel,o:()=>findItemLabel,p:()=>debounce,q:()=>hasShadowDom,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync,u:()=>now,v:()=>pointerCoord});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{void 0!==animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,findItemLabel=componentEl=>{const itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},focusVisibleElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},getAriaLabel=(componentEl,inputId)=>{let labelText;const labelledBy=componentEl.getAttribute("aria-labelledby"),componentId=componentEl.id;let labelId=null!==labelledBy&&""!==labelledBy.trim()?labelledBy:inputId+"-lbl",label=null!==labelledBy&&""!==labelledBy.trim()?document.getElementById(labelledBy):findItemLabel(componentEl);return label?(null===labelledBy&&(label.id=labelId),labelText=label.textContent,label.setAttribute("aria-hidden","true")):""!==componentId.trim()&&(label=document.querySelector(`label[for="${componentId}"]`),label&&(""!==label.id?labelId=label.id:label.id=labelId=`${componentId}-lbl`,labelText=label.textContent)),{label,labelId,labelText}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=ev=>ev.timeStamp||Date.now(),pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/index-8812fc40.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>chevronBack,b:()=>arrowBackSharp,c:()=>chevronDown,d:()=>chevronForward,e:()=>caretUpSharp,f:()=>caretDownSharp,g:()=>close,h:()=>menuSharp,i:()=>caretBackSharp,j:()=>arrowDown,k:()=>reorderTwoSharp,l:()=>closeCircle,m:()=>menuOutline,n:()=>closeSharp,o:()=>searchSharp,p:()=>checkmarkOutline,q:()=>removeOutline,r:()=>reorderThreeOutline,s:()=>searchOutline,t:()=>ellipseOutline,u:()=>chevronForwardOutline,v:()=>ellipsisHorizontal,w:()=>chevronExpand});const arrowBackSharp="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",arrowDown="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",caretBackSharp="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",caretDownSharp="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",caretUpSharp="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",checkmarkOutline="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",chevronBack="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",chevronDown="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",chevronExpand="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",chevronForward="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",chevronForwardOutline="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",close="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",closeCircle="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",closeSharp="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",ellipseOutline="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",ellipsisHorizontal="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",menuOutline="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",menuSharp="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",removeOutline="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",reorderThreeOutline="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",reorderTwoSharp="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",searchOutline="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",searchSharp="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},"../../packages/core/dist/esm/ion-accordion.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_accordion:()=>Accordion});var _index_03927578_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-03927578.js"),_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/helpers-079c01eb.js"),_index_8812fc40_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/index-8812fc40.js"),_ionic_global_52654a6b_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-52654a6b.js");const Accordion=class{constructor(hostRef){(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.updateListener=()=>this.updateState(!1),this.setItemDefaults=()=>{const ionItem=this.getSlottedHeaderIonItem();ionItem&&(ionItem.button=!0,ionItem.detail=!1,void 0===ionItem.lines&&(ionItem.lines="full"))},this.getSlottedHeaderIonItem=()=>{const{headerEl}=this;if(!headerEl)return;const slot=headerEl.querySelector("slot");return slot&&void 0!==slot.assignedElements?slot.assignedElements().find((el=>"ION-ITEM"===el.tagName)):void 0},this.setAria=(expanded=!1)=>{const ionItem=this.getSlottedHeaderIonItem();if(!ionItem)return;const button=(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_2__.g)(ionItem).querySelector("button");button&&button.setAttribute("aria-expanded",`${expanded}`)},this.slotToggleIcon=()=>{const ionItem=this.getSlottedHeaderIonItem();if(!ionItem)return;const{toggleIconSlot,toggleIcon}=this;if(ionItem.querySelector(".ion-accordion-toggle-icon"))return;const iconEl=document.createElement("ion-icon");iconEl.slot=toggleIconSlot,iconEl.lazy=!1,iconEl.classList.add("ion-accordion-toggle-icon"),iconEl.icon=toggleIcon,iconEl.setAttribute("aria-hidden","true"),ionItem.appendChild(iconEl)},this.expandAccordion=(initialUpdate=!1)=>{const{contentEl,contentElWrapper}=this;initialUpdate||void 0===contentEl||void 0===contentElWrapper?this.state=4:4!==this.state&&(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_2__.r)((()=>{this.state=8,this.currentRaf=(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_2__.r)((async()=>{const contentHeight=contentElWrapper.offsetHeight,waitForTransition=(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_2__.t)(contentEl,2e3);contentEl.style.setProperty("max-height",`${contentHeight}px`),await waitForTransition,this.state=4,contentEl.style.removeProperty("max-height")}))})):this.state=4)},this.collapseAccordion=(initialUpdate=!1)=>{const{contentEl}=this;initialUpdate||void 0===contentEl?this.state=1:1!==this.state&&(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?this.currentRaf=(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_2__.r)((async()=>{const contentHeight=contentEl.offsetHeight;contentEl.style.setProperty("max-height",`${contentHeight}px`),(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_2__.r)((async()=>{const waitForTransition=(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_2__.t)(contentEl,2e3);this.state=2,await waitForTransition,this.state=1,contentEl.style.removeProperty("max-height")}))})):this.state=1)},this.shouldAnimate=()=>{if("undefined"==typeof window)return!1;if(matchMedia("(prefers-reduced-motion: reduce)").matches)return!1;return!!_ionic_global_52654a6b_js__WEBPACK_IMPORTED_MODULE_1__.c.get("animated",!0)&&!(this.accordionGroupEl&&!this.accordionGroupEl.animated)},this.updateState=async(initialUpdate=!1)=>{const accordionGroup=this.accordionGroupEl,accordionValue=this.value;if(!accordionGroup)return;const value=accordionGroup.value;if(Array.isArray(value)?value.includes(accordionValue):value===accordionValue)this.expandAccordion(initialUpdate),this.isNext=this.isPrevious=!1;else{this.collapseAccordion(initialUpdate);const nextAccordion=this.getNextSibling(),nextAccordionValue=null==nextAccordion?void 0:nextAccordion.value;void 0!==nextAccordionValue&&(this.isPrevious=Array.isArray(value)?value.includes(nextAccordionValue):value===nextAccordionValue);const previousAccordion=this.getPreviousSibling(),previousAccordionValue=null==previousAccordion?void 0:previousAccordion.value;void 0!==previousAccordionValue&&(this.isNext=Array.isArray(value)?value.includes(previousAccordionValue):value===previousAccordionValue)}},this.getNextSibling=()=>{if(!this.el)return;const nextSibling=this.el.nextElementSibling;return"ION-ACCORDION"===(null==nextSibling?void 0:nextSibling.tagName)?nextSibling:void 0},this.getPreviousSibling=()=>{if(!this.el)return;const previousSibling=this.el.previousElementSibling;return"ION-ACCORDION"===(null==previousSibling?void 0:previousSibling.tagName)?previousSibling:void 0},this.state=1,this.isNext=!1,this.isPrevious=!1,this.value="ion-accordion-"+accordionIds++,this.disabled=!1,this.readonly=!1,this.toggleIcon=_index_8812fc40_js__WEBPACK_IMPORTED_MODULE_3__.c,this.toggleIconSlot="end"}valueChanged(){this.updateState()}connectedCallback(){var _a;const accordionGroupEl=this.accordionGroupEl=null===(_a=this.el)||void 0===_a?void 0:_a.closest("ion-accordion-group");accordionGroupEl&&(this.updateState(!0),(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_2__.a)(accordionGroupEl,"ionValueChange",this.updateListener))}disconnectedCallback(){const accordionGroupEl=this.accordionGroupEl;accordionGroupEl&&(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_2__.b)(accordionGroupEl,"ionValueChange",this.updateListener)}componentDidLoad(){this.setItemDefaults(),this.slotToggleIcon(),(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_2__.r)((()=>{const expanded=4===this.state||8===this.state;this.setAria(expanded)}))}toggleExpanded(){const{accordionGroupEl,disabled,readonly,value,state}=this;if(!disabled&&!readonly&&accordionGroupEl){const expand=1===state||2===state;accordionGroupEl.requestAccordionToggle(value,expand)}}render(){const{disabled,readonly}=this,mode=(0,_ionic_global_52654a6b_js__WEBPACK_IMPORTED_MODULE_1__.g)(this),expanded=4===this.state||8===this.state,headerPart=expanded?"header expanded":"header",contentPart=expanded?"content expanded":"content";return this.setAria(expanded),(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"073e1d02c18dcbc20c68648426e87c14750c031d",class:{[mode]:!0,"accordion-expanding":8===this.state,"accordion-expanded":4===this.state,"accordion-collapsing":2===this.state,"accordion-collapsed":1===this.state,"accordion-next":this.isNext,"accordion-previous":this.isPrevious,"accordion-disabled":disabled,"accordion-readonly":readonly,"accordion-animated":this.shouldAnimate()}},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"9b4cf326de8bb6b4033992903c0c1bfd7eea9bcc",onClick:()=>this.toggleExpanded(),id:"header",part:headerPart,"aria-controls":"content",ref:headerEl=>this.headerEl=headerEl},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"464c32a37f64655eacf4218284214f5f30b14a1e",name:"header"})),(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"8bb52e6a62d7de0106b253201a89a32e79d9a594",id:"content",part:contentPart,role:"region","aria-labelledby":"header",ref:contentEl=>this.contentEl=contentEl},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"1d9dfd952ad493754aaeea7a8f625b33c2dd90a0",id:"content-wrapper",ref:contentElWrapper=>this.contentElWrapper=contentElWrapper},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"970dfbc55a612d739d0ca3b7b1a08e5c96d0c479",name:"content"}))))}static get delegatesFocus(){return!0}get el(){return(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{value:["valueChanged"]}}};let accordionIds=0;Accordion.style={ios:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}",md:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{transition:none !important}}"}}}]);
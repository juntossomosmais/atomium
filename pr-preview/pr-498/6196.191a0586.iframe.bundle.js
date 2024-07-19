"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[6196],{"../../packages/core/dist/esm/atom-list-slider.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{atom_list_slider:()=>AtomListSlider});var _index_03927578_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-03927578.js");const AtomListSlider=class{constructor(hostRef){(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.clickNext=(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"clickNext",7),this.clickPrev=(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"clickPrev",7),this.itemWidth=0,this.touchStartX=0,this.touchEndX=0,this.sliderGapValue=0,this.viewportWidth=0,this.maxTranslateX=0,this.handleTouchStart=event=>{this.touchStartX=event.touches[0].clientX},this.handleTouchEnd=event=>{this.touchEndX=event.changedTouches[0].clientX,this.handleSwipe()},this.handleSwipe=()=>{const lastIndex=this.sliderItems.length-1,isSwipeLeft=this.touchEndX<this.touchStartX;this.currentIndex=isSwipeLeft?Math.min(this.currentIndex+1,lastIndex):Math.max(this.currentIndex-1,0)},this.hasNavigation=!0,this.centralized=void 0,this.currentIdx=0,this.currentCentralized=!1}get currentIndex(){return this.currentIdx}get currentTranslateX(){const translateX=this.sliderWrapper.style.transform;if(!translateX)return 0;const translateXValue=parseInt(translateX.replace("translateX(",""));return 0===translateXValue?0:-translateXValue}set currentIndex(value){if(this.currentIdx=value,!this.sliderItems)return;this.updateSliderPosition();const transitionendEvent=new CustomEvent("transitionend",{detail:{currentIndex:this.currentIndex}});window.dispatchEvent(transitionendEvent)}componentDidLoad(){this.sliderItems=this.element.querySelectorAll("atom-list-slider-item"),this.sliderWrapper=this.element.shadowRoot.querySelector(".wrapper"),this.viewportWidth=this.sliderWrapper.offsetWidth,this.nextButton=this.element.shadowRoot.querySelector(".navigation--next"),this.prevButton=this.element.shadowRoot.querySelector(".navigation--prev"),this.sliderWrapper.addEventListener("touchstart",this.handleTouchStart),this.sliderWrapper.addEventListener("touchend",this.handleTouchEnd);const sliderGap=getComputedStyle(this.element).getPropertyValue("--slider-gap");this.sliderGapValue=parseFloat(sliderGap),this.handleOnResize()}componentWillLoad(){this.currentCentralized=this.centralized}connectedCallback(){window.addEventListener("resize",this.handleOnResize)}disconnectedCallback(){this.sliderWrapper.removeEventListener("touchstart",this.handleTouchStart),this.sliderWrapper.removeEventListener("touchend",this.handleTouchEnd),window.removeEventListener("resize",this.handleOnResize)}handleOnResize(){if(!this.sliderWrapper)return;const debouncedUpdateSliderPosition=function debounce(func,wait){let timeout;return function executedFunction(...args){clearTimeout(timeout),timeout=setTimeout((()=>{clearTimeout(timeout),func(...args)}),wait)}}((()=>{this.currentIdx=0,this.sliderWrapper.style.transform="translateX(0)",this.handleMaxTranslateX(),this.showOrHideNavigationButtons()}),250);new ResizeObserver(debouncedUpdateSliderPosition).observe(this.sliderWrapper)}handleNavigationClick(event){const button=event.currentTarget,isNext=null==button?void 0:button.classList.contains("navigation--next"),isPrev=null==button?void 0:button.classList.contains("navigation--prev");isNext?this.clickNext.emit():isPrev&&this.clickPrev.emit();const newIndex=this.currentIndex+(isNext?1:-1);isNext&&newIndex>=this.sliderItems.length||!isNext&&newIndex<0||(this.currentIndex=newIndex,this.showOrHideNavigationButtons())}handleMaxTranslateX(){let totalWidth=0;this.viewportWidth=this.sliderWrapper.offsetWidth,Array.from(this.sliderItems).forEach(((item,index)=>{totalWidth+=item.offsetWidth,index!==this.sliderItems.length-1&&(totalWidth+=this.sliderGapValue)})),!0===this.centralized&&(this.currentCentralized=totalWidth<=this.viewportWidth),this.maxTranslateX=totalWidth-this.viewportWidth}showOrHideNavigationButtons(){if(!(this.nextButton&&this.prevButton))return;const isAtEnd=this.currentTranslateX>=this.maxTranslateX,isAtStart=0===this.currentTranslateX;this.nextButton.setAttribute("aria-disabled",String(isAtEnd)),this.prevButton.setAttribute("aria-disabled",String(isAtStart))}updateSliderPosition(){if(!this.sliderItems||!this.sliderWrapper)return;const totalWidth=Array.from(this.sliderItems).reduce(((total,item,index)=>{let itemTotal=total+item.offsetWidth;return index!==this.sliderItems.length-1&&(itemTotal+=this.sliderGapValue),itemTotal}),0),totalPrevWidth=Array.from(this.sliderItems).slice(0,this.currentIdx).reduce(((total,item,index)=>{let itemTotal=total+item.offsetWidth;return index!==this.currentIdx-1&&(itemTotal+=this.sliderGapValue),itemTotal}),0),translateX=Math.min(totalPrevWidth,totalWidth-this.viewportWidth);this.sliderWrapper.style.transform=`translateX(-${translateX}px)`}render(){return(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"e3988b49d060947af8085355b2766456d59144e8"},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"c614933fdc8f434d8ca148b18f882ec6cbad1240",class:"atom-list-slider",role:"region","aria-label":"Carousel"},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"79ca0e95b3b4ebf5d6a4f7b27bd20a0ce3647a3f",class:"navigation navigation--prev",role:"button","aria-label":"Previous","aria-disabled":"true",onClick:event=>this.handleNavigationClick(event),style:{display:this.hasNavigation?"":"none"}},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("atom-icon",{key:"04e4338e713ce6ceb57f5d7db06a3a2ed1b9cc0a",icon:"chevron-left"})),(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"67479212caf87c518600ffea6d43e3c6f12e7110",class:"sliders","aria-live":"polite"},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"df12eddb67056bdebe7118e5892a8af01f42716b",class:{wrapper:!0,"wrapper--centralized":this.currentCentralized},role:"list"},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"4de60206f7f28f75c2e943d04e4f99131f1b1f3c"}))),(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"e65aed9ccbc307e6121f60581323c6ee8cc3c25b",class:"navigation navigation--next",role:"button","aria-label":"Next","aria-disabled":"true",onClick:event=>this.handleNavigationClick(event),style:{display:this.hasNavigation?"":"none"}},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("atom-icon",{key:"eed864671db6e62ae004bf08d5300ef8703c1de8",icon:"chevron-right"}))))}get element(){return(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}};AtomListSlider.style='html.ios{--ion-default-font:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}html.md{--ion-default-font:"Roboto", "Helvetica Neue", sans-serif}html{--ion-default-dynamic-font:-apple-system-body;--ion-font-family:var(--ion-default-font)}body{background:var(--ion-background-color)}body.backdrop-no-scroll{overflow:hidden}html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,html.ios ion-modal ion-footer ion-toolbar:first-of-type{padding-top:6px}html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type{padding-bottom:6px}html.ios ion-modal ion-toolbar{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){html.ios ion-modal.modal-card:first-of-type{--backdrop-opacity:0.18}}ion-modal.modal-default.show-modal~ion-modal.modal-default{--backdrop-opacity:0;--box-shadow:none}html.ios ion-modal.modal-card .ion-page{border-top-left-radius:var(--border-radius)}.ion-color-primary{--ion-color-base:var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255) !important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint:var(--ion-color-primary-tint, #4c8dff) !important}.ion-color-secondary{--ion-color-base:var(--ion-color-secondary, #3dc2ff) !important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 61, 194, 255) !important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-secondary-shade, #36abe0) !important;--ion-color-tint:var(--ion-color-secondary-tint, #50c8ff) !important}.ion-color-tertiary{--ion-color-base:var(--ion-color-tertiary, #5260ff) !important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 82, 96, 255) !important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-tertiary-shade, #4854e0) !important;--ion-color-tint:var(--ion-color-tertiary-tint, #6370ff) !important}.ion-color-success{--ion-color-base:var(--ion-color-success, #2dd36f) !important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 211, 111) !important;--ion-color-contrast:var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-success-shade, #28ba62) !important;--ion-color-tint:var(--ion-color-success-tint, #42d77d) !important}.ion-color-warning{--ion-color-base:var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast:var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22) !important}.ion-color-danger{--ion-color-base:var(--ion-color-danger, #eb445a) !important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 235, 68, 90) !important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-danger-shade, #cf3c4f) !important;--ion-color-tint:var(--ion-color-danger-tint, #ed576b) !important}.ion-color-light{--ion-color-base:var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast:var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium{--ion-color-base:var(--ion-color-medium, #92949c) !important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 146, 148, 156) !important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-medium-shade, #808289) !important;--ion-color-tint:var(--ion-color-medium-tint, #9d9fa6) !important}.ion-color-dark{--ion-color-base:var(--ion-color-dark, #222428) !important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e) !important}.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;z-index:0}ion-modal>.ion-page{position:relative;contain:layout style;height:100%}.split-pane-visible>.ion-page.split-pane-main{position:relative}ion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden{display:none !important}.ion-page-invisible{opacity:0}.can-go-back>ion-header ion-back-button{display:block}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding:20px}@supports (padding-top: 20px){html{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}ion-card.ion-color .ion-inherit-color,ion-card-header.ion-color .ion-inherit-color{color:inherit}.menu-content{transform:translate3d(0,  0,  0)}.menu-content-open{cursor:pointer;touch-action:manipulation;pointer-events:none;overflow-y:hidden}.menu-content-open ion-content{--overflow:hidden}.menu-content-open .ion-content-scroll-host{overflow:hidden}.ios .menu-content-reveal{box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-reveal{box-shadow:4px 0px 16px rgba(0,0,0,.18)}.md .menu-content-push{box-shadow:4px 0px 16px rgba(0,0,0,.18)}ion-accordion-group.accordion-group-expand-inset>ion-accordion:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}ion-accordion-group.accordion-group-expand-inset>ion-accordion:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}ion-accordion-group>ion-accordion:last-of-type ion-item[slot=header]{--border-width:0px}ion-accordion.accordion-animated>[slot=header] .ion-accordion-toggle-icon{transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1)}@media (prefers-reduced-motion: reduce){ion-accordion .ion-accordion-toggle-icon{transition:none !important}}ion-accordion.accordion-expanding>[slot=header] .ion-accordion-toggle-icon,ion-accordion.accordion-expanded>[slot=header] .ion-accordion-toggle-icon{transform:rotate(180deg)}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-previous ion-item[slot=header]{--border-width:0px;--inner-border-width:0px}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanding:first-of-type,ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanded:first-of-type{margin-top:0}ion-input input::-webkit-date-and-time-value{text-align:start}.ion-datetime-button-overlay{--width:fit-content;--height:fit-content}.ion-datetime-button-overlay ion-datetime.datetime-grid{width:320px;min-height:320px}.popover-viewport:has(>ion-content){overflow:hidden}@supports not selector(:has(> ion-content)){.popover-viewport{overflow:hidden}}:host{--button-navigation-size:var(--spacing-xxxxlarge);--slider-height:var(--spacing-xxxxlarge);--slider-gap:var(--spacing-base);display:block}.atom-list-slider{min-height:var(--slider-height);position:relative}.sliders{overflow-x:hidden;z-index:var(--zindex-1)}.wrapper{display:flex;flex-wrap:nowrap;gap:var(--slider-gap);transition:transform var(--transition-duration);will-change:transform}.wrapper--centralized{justify-content:center}.navigation{align-items:center;background:var(--color-brand-secondary-regular);border:0;border-radius:var(--border-radius-full);box-shadow:var(--elevation-3);color:var(--color-neutral-white);cursor:pointer;display:flex;font-size:var(--spacing-large);height:var(--button-navigation-size);justify-content:center;position:absolute;top:50%;transform:translateY(-50%);transition-duration:var(--transition-duration);transition-property:background-color, opacity, visibility;width:var(--button-navigation-size);will-change:background-color, opacity, visibility;z-index:var(--zindex-5)}.navigation.navigation--prev{left:var(--spacing-small)}.navigation.navigation--next{right:var(--spacing-small)}.navigation:hover{background:var(--color-brand-secondary-light-1)}.navigation[aria-disabled=true]{opacity:0;visibility:hidden}'}}]);
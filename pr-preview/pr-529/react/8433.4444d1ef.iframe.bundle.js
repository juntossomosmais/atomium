"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[8433],{"../../packages/core/dist/esm/atom-carousel.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{atom_carousel:()=>AtomCarousel});var _index_03927578_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-03927578.js");const AtomCarousel=class{constructor(hostRef){(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.touchStartX=0,this.touchEndX=0,this.stopAutoplay=()=>{this.autoplayIntervalId&&(clearInterval(this.autoplayIntervalId),this.autoplayIntervalId=null)},this.restartAutoplay=()=>{this.autoplayIntervalId||this.startAutoplay()},this.handleTouchStart=event=>{this.touchStartX=event.touches[0].clientX},this.handleTouchEnd=event=>{this.touchEndX=event.changedTouches[0].clientX,this.handleSwipe()},this.handleSwipe=()=>{const lastIndex=this.carouselItems.length-1,isSwipeLeft=this.touchEndX<this.touchStartX;this.currentIndex=isSwipeLeft?Math.min(this.currentIndex+1,lastIndex):Math.max(this.currentIndex-1,0),this.showOrHideNavigationButtons()},this.loop=!1,this.autoplay=void 0,this.thumbnails=void 0,this.hasNavigation=!0,this.hasPagination=!0,this.currentIdx=0}get currentIndex(){return this.currentIdx}set currentIndex(value){if(!this.carouselWrapper)return;this.currentIdx=value,this.carouselWrapper.style.transform=`translateX(-${100*this.currentIndex}%)`;const transitionendEvent=new CustomEvent("transitionend",{detail:{currentIndex:this.currentIndex}});window.dispatchEvent(transitionendEvent)}componentWillLoad(){var _a;this.carouselItems=this.element.querySelectorAll("atom-carousel-item"),(null===(_a=this.carouselItems)||void 0===_a?void 0:_a.length)<=1&&(this.loop=!1,this.hasNavigation=!1,this.hasPagination=!1)}componentDidLoad(){this.carouselWrapper=this.element.shadowRoot.querySelector(".carousel-wrapper"),this.nextButton=this.element.shadowRoot.querySelector(".navigation--next"),this.prevButton=this.element.shadowRoot.querySelector(".navigation--prev"),this.carouselWrapper.addEventListener("touchstart",this.handleTouchStart),this.carouselWrapper.addEventListener("touchend",this.handleTouchEnd),this.autoplay&&(this.carouselWrapper.addEventListener("mouseenter",this.stopAutoplay),this.carouselWrapper.addEventListener("mouseleave",this.restartAutoplay)),this.showOrHideNavigationButtons(),this.autoplay>0&&this.startAutoplay()}disconnectedCallback(){this.carouselWrapper.removeEventListener("touchstart",this.handleTouchStart),this.carouselWrapper.removeEventListener("touchend",this.handleTouchEnd),this.autoplay&&(this.carouselWrapper.removeEventListener("mouseenter",this.stopAutoplay),this.carouselWrapper.removeEventListener("mouseleave",this.restartAutoplay))}componentWillUnmount(){clearInterval(this.autoplayIntervalId)}handleMoveToPaginationItem(index){this.carouselItems&&this.carouselItems[index]&&(this.currentIndex=index,this.showOrHideNavigationButtons())}handleNavigationClick(event){const button=event.currentTarget,isNext=null==button?void 0:button.classList.contains("navigation--next");let newIndex=this.currentIndex+(isNext?1:-1);const isLastItemAndNext=isNext&&this.currentIndex===this.carouselItems.length-1,isFirstItemAndPrev=!isNext&&0===this.currentIndex;(this.loop||!isLastItemAndNext&&!isFirstItemAndPrev)&&(this.loop&&(newIndex=(newIndex+this.carouselItems.length)%this.carouselItems.length),this.autoplay>0&&this.startAutoplay(),this.currentIndex=newIndex,this.showOrHideNavigationButtons())}showOrHideNavigationButtons(){this.nextButton&&this.prevButton&&this.hasNavigation&&!this.loop&&(this.nextButton.setAttribute("aria-disabled",String(this.currentIndex===this.carouselItems.length-1)),this.prevButton.setAttribute("aria-disabled",String(0===this.currentIndex)))}startAutoplay(){this.autoplayIntervalId&&clearInterval(this.autoplayIntervalId),this.loop=!0,this.autoplayIntervalId=setInterval((()=>{this.currentIndex=(this.currentIndex+1)%this.carouselItems.length,this.showOrHideNavigationButtons()}),this.autoplay)}render(){return(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"a7ee542de08bff0fbc71c33e64b3ba0d4a416ed3"},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"9ea2af11adc09d394c1263ec01245fc5cf44cd38",class:"atom-carousel",role:"region","aria-label":"Carousel"},this.hasNavigation&&(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"ee59bac7b0d27547612e9d180d9e7685b10b911d",class:"carousel-navigation navigation--prev",role:"button","aria-label":"Previous","aria-disabled":this.loop?"false":"true",onClick:event=>this.handleNavigationClick(event)},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("atom-icon",{key:"3fd38410408493566fb1d5b5574c5dfd2054ec4f",icon:"chevron-left"})),(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"ccd1a05d37fb0652291883bb88d82134e8bfe36c",class:"carousel-sliders"},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"bcdbeea6783dce26a82e7a19e986d3af93994ec7",class:"carousel-wrapper",role:"list"},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"86b17b4e98ecf310f274f6ae9539eed5da6db64e"}))),this.hasNavigation&&(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"a82f6d3db92b2f65e17af91fae9d89d1c20e0d0f",class:"carousel-navigation navigation--next",role:"button","aria-label":"Next",onClick:event=>this.handleNavigationClick(event)},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("atom-icon",{key:"8abfa7910b958a07b02e1087bd27bb4b93e905a5",icon:"chevron-right"}))),this.hasPagination&&(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"a4635be9611b53372caf1828df8c06b6b5f5139c",class:"carousel-pagination",role:"navigation","aria-label":"Pagination"},Array.from(this.carouselItems).map(((_,index)=>{var _a,_b;return(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{class:`carousel-pagination__item ${index===this.currentIdx?"active":""} ${(null===(_a=this.thumbnails)||void 0===_a?void 0:_a.length)>0?"carousel-pagination--thumbnails":"carousel-pagination--bullets"}`,role:"tab","aria-selected":index===this.currentIdx,"aria-controls":`carousel-item-${index}`,onClick:()=>this.handleMoveToPaginationItem(index)},(null===(_b=this.thumbnails)||void 0===_b?void 0:_b.length)>0?(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("img",{class:"thumbnail",src:this.thumbnails[index],alt:`${index+1}`,"aria-hidden":"true"}):(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"pagination-text"},index+1))}))))}get element(){return(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}};AtomCarousel.style='html.ios{--ion-default-font:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}html.md{--ion-default-font:"Roboto", "Helvetica Neue", sans-serif}html{--ion-default-dynamic-font:-apple-system-body;--ion-font-family:var(--ion-default-font)}body{background:var(--ion-background-color)}body.backdrop-no-scroll{overflow:hidden}html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,html.ios ion-modal ion-footer ion-toolbar:first-of-type{padding-top:6px}html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type{padding-bottom:6px}html.ios ion-modal ion-toolbar{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){html.ios ion-modal.modal-card:first-of-type{--backdrop-opacity:0.18}}ion-modal.modal-default.show-modal~ion-modal.modal-default{--backdrop-opacity:0;--box-shadow:none}html.ios ion-modal.modal-card .ion-page{border-top-left-radius:var(--border-radius)}.ion-color-primary{--ion-color-base:var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255) !important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint:var(--ion-color-primary-tint, #4c8dff) !important}.ion-color-secondary{--ion-color-base:var(--ion-color-secondary, #3dc2ff) !important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 61, 194, 255) !important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-secondary-shade, #36abe0) !important;--ion-color-tint:var(--ion-color-secondary-tint, #50c8ff) !important}.ion-color-tertiary{--ion-color-base:var(--ion-color-tertiary, #5260ff) !important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 82, 96, 255) !important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-tertiary-shade, #4854e0) !important;--ion-color-tint:var(--ion-color-tertiary-tint, #6370ff) !important}.ion-color-success{--ion-color-base:var(--ion-color-success, #2dd36f) !important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 211, 111) !important;--ion-color-contrast:var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-success-shade, #28ba62) !important;--ion-color-tint:var(--ion-color-success-tint, #42d77d) !important}.ion-color-warning{--ion-color-base:var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast:var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22) !important}.ion-color-danger{--ion-color-base:var(--ion-color-danger, #eb445a) !important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 235, 68, 90) !important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-danger-shade, #cf3c4f) !important;--ion-color-tint:var(--ion-color-danger-tint, #ed576b) !important}.ion-color-light{--ion-color-base:var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast:var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium{--ion-color-base:var(--ion-color-medium, #92949c) !important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 146, 148, 156) !important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-medium-shade, #808289) !important;--ion-color-tint:var(--ion-color-medium-tint, #9d9fa6) !important}.ion-color-dark{--ion-color-base:var(--ion-color-dark, #222428) !important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e) !important}.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;z-index:0}ion-modal>.ion-page{position:relative;contain:layout style;height:100%}.split-pane-visible>.ion-page.split-pane-main{position:relative}ion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden{display:none !important}.ion-page-invisible{opacity:0}.can-go-back>ion-header ion-back-button{display:block}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding:20px}@supports (padding-top: 20px){html{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}ion-card.ion-color .ion-inherit-color,ion-card-header.ion-color .ion-inherit-color{color:inherit}.menu-content{transform:translate3d(0,  0,  0)}.menu-content-open{cursor:pointer;touch-action:manipulation;pointer-events:none;overflow-y:hidden}.menu-content-open ion-content{--overflow:hidden}.menu-content-open .ion-content-scroll-host{overflow:hidden}.ios .menu-content-reveal{box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-reveal{box-shadow:4px 0px 16px rgba(0,0,0,.18)}.md .menu-content-push{box-shadow:4px 0px 16px rgba(0,0,0,.18)}ion-accordion-group.accordion-group-expand-inset>ion-accordion:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}ion-accordion-group.accordion-group-expand-inset>ion-accordion:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}ion-accordion-group>ion-accordion:last-of-type ion-item[slot=header]{--border-width:0px}ion-accordion.accordion-animated>[slot=header] .ion-accordion-toggle-icon{transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1)}@media (prefers-reduced-motion: reduce){ion-accordion .ion-accordion-toggle-icon{transition:none !important}}ion-accordion.accordion-expanding>[slot=header] .ion-accordion-toggle-icon,ion-accordion.accordion-expanded>[slot=header] .ion-accordion-toggle-icon{transform:rotate(180deg)}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-previous ion-item[slot=header]{--border-width:0px;--inner-border-width:0px}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanding:first-of-type,ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanded:first-of-type{margin-top:0}ion-input input::-webkit-date-and-time-value{text-align:start}.ion-datetime-button-overlay{--width:fit-content;--height:fit-content}.ion-datetime-button-overlay ion-datetime.datetime-grid{width:320px;min-height:320px}.popover-viewport:has(>ion-content){overflow:hidden}@supports not selector(:has(> ion-content)){.popover-viewport{overflow:hidden}}:host{--button-navigation-size:var(--spacing-xxxxlarge);--carousel-height:var(--spacing-xxxxlarge);--thumbnail-size:var(--spacing-giant);--thumbnail-object-fit:contain;display:block}.atom-carousel{min-height:var(--carousel-height);position:relative}.carousel-sliders{overflow-x:hidden;z-index:var(--zindex-1)}.carousel-wrapper{display:flex;flex-wrap:nowrap;transition:transform var(--transition-duration);will-change:transform}.carousel-navigation{align-items:center;background:var(--color-brand-secondary-regular);border:0;border-radius:var(--border-radius-full);box-shadow:var(--elevation-3);color:var(--color-neutral-white);cursor:pointer;display:flex;font-size:var(--spacing-large);height:var(--button-navigation-size);justify-content:center;position:absolute;top:50%;transform:translateY(-50%);transition-duration:var(--transition-duration);transition-property:background-color, opacity, visibility;width:var(--button-navigation-size);will-change:background-color, opacity, visibility;z-index:var(--zindex-5)}.carousel-navigation.navigation--prev{left:var(--spacing-small)}.carousel-navigation.navigation--next{right:var(--spacing-small)}.carousel-navigation:hover{background:var(--color-brand-secondary-light-1)}.carousel-navigation[aria-disabled=true]{opacity:0;visibility:hidden}.carousel-pagination{display:flex;gap:var(--spacing-xsmall);justify-content:center;margin-top:var(--spacing-base)}.carousel-pagination__item{background:none;border:0;cursor:pointer;display:inline-block;padding:0;transition-duration:var(--transition-duration)}.carousel-pagination--bullets{background-color:var(--color-neutral-light-3);border-radius:var(--border-radius-full);display:inline-block;height:var(--spacing-xsmall);text-indent:-9999px;transition-property:background-color;width:var(--spacing-xsmall);will-change:background-color}.carousel-pagination--bullets.active{background-color:var(--color-brand-secondary-regular)}.carousel-pagination--thumbnails{align-items:center;border:1px solid var(--color-neutral-light-4);display:flex;height:var(--thumbnail-size);justify-content:center;transition-property:border-color;width:var(--thumbnail-size);will-change:border-color}.carousel-pagination--thumbnails.active{border-color:var(--color-brand-secondary-regular)}.carousel-pagination--thumbnails .thumbnail{display:block;object-fit:var(--thumbnail-object-fit);width:100%}'}}]);
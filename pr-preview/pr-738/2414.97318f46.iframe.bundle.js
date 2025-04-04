"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[2414],{"../../packages/core/dist/esm/atom-list-slider.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{atom_list_slider:()=>AtomListSlider});var _index_73621246_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-73621246.js");const AtomListSlider=class{constructor(hostRef){(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.clickNext=(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"clickNext",7),this.clickPrev=(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"clickPrev",7),this.hasNavigation=!0,this.currentIdx=0,this.currentCentralized=!1,this.itemWidth=0,this.touchStartX=0,this.touchEndX=0,this.isTouchMoved=!1,this.sliderGapValue=0,this.viewportWidth=0,this.maxTranslateX=0,this.handleTouchStart=event=>{this.isTouchMoved=!1,this.touchStartX=event.touches[0].clientX},this.handleTouchEnd=event=>{this.touchEndX=event.changedTouches[0].clientX,this.handleSwipe()},this.handleTouchMove=()=>{this.isTouchMoved=!0},this.handleSwipe=()=>{if(!this.isTouchMoved)return;const lastIndex=this.sliderItems.length-1,isSwipeLeft=this.touchEndX<this.touchStartX;this.currentIndex=isSwipeLeft?Math.min(this.currentIndex+1,lastIndex):Math.max(this.currentIndex-1,0)}}get currentIndex(){return this.currentIdx}get currentTranslateX(){const translateX=this.sliderWrapper.style.transform;if(!translateX)return 0;const translateXValue=parseInt(translateX.replace("translateX(",""));return 0===translateXValue?0:-translateXValue}set currentIndex(value){if(this.currentIdx=value,!this.sliderItems)return;this.updateSliderPosition();const transitionendEvent=new CustomEvent("transitionend",{detail:{currentIndex:this.currentIndex}});window.dispatchEvent(transitionendEvent)}componentDidLoad(){this.sliderItems=this.element.querySelectorAll("atom-list-slider-item"),this.sliderWrapper=this.element.shadowRoot.querySelector(".wrapper"),this.viewportWidth=this.sliderWrapper.offsetWidth,this.nextButton=this.element.shadowRoot.querySelector(".navigation--next"),this.prevButton=this.element.shadowRoot.querySelector(".navigation--prev"),this.sliderWrapper.addEventListener("touchstart",(event=>this.handleTouchStart(event))),this.sliderWrapper.addEventListener("touchend",(event=>this.handleTouchEnd(event))),this.sliderWrapper.addEventListener("touchmove",(()=>this.handleTouchMove()));const sliderGap=getComputedStyle(this.element).getPropertyValue("--slider-gap");this.sliderGapValue=parseFloat(sliderGap),this.handleOnResize()}componentWillLoad(){this.currentCentralized=this.centralized}connectedCallback(){window.addEventListener("resize",this.handleOnResize)}disconnectedCallback(){this.sliderWrapper&&(this.sliderWrapper.removeEventListener("touchstart",this.handleTouchStart),this.sliderWrapper.removeEventListener("touchend",this.handleTouchEnd),this.sliderWrapper.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("resize",this.handleOnResize))}handleOnResize(){if(!this.sliderWrapper)return;const debouncedUpdateSliderPosition=function debounce(func,wait){let timeout;return function executedFunction(...args){clearTimeout(timeout),timeout=setTimeout((()=>{clearTimeout(timeout),func(...args)}),wait)}}((()=>{this.currentIdx=0,this.sliderWrapper.style.transform="translateX(0)",this.handleMaxTranslateX(),this.showOrHideNavigationButtons()}),250);new ResizeObserver(debouncedUpdateSliderPosition).observe(this.sliderWrapper)}handleNavigationClick(event){const button=event.currentTarget,isNext=null==button?void 0:button.classList.contains("navigation--next"),isPrev=null==button?void 0:button.classList.contains("navigation--prev");isNext?this.clickNext.emit():isPrev&&this.clickPrev.emit();const newIndex=this.currentIndex+(isNext?1:-1);isNext&&newIndex>=this.sliderItems.length||!isNext&&newIndex<0||(this.currentIndex=newIndex,this.showOrHideNavigationButtons())}handleMaxTranslateX(){let totalWidth=0;this.viewportWidth=this.sliderWrapper.offsetWidth,Array.from(this.sliderItems).forEach(((item,index)=>{totalWidth+=item.offsetWidth,index!==this.sliderItems.length-1&&(totalWidth+=this.sliderGapValue)})),!0===this.centralized&&(this.currentCentralized=totalWidth<=this.viewportWidth),this.maxTranslateX=totalWidth-this.viewportWidth}showOrHideNavigationButtons(){if(!(this.nextButton&&this.prevButton))return;const isAtEnd=this.currentTranslateX>=this.maxTranslateX,isAtStart=0===this.currentTranslateX;this.nextButton.setAttribute("aria-disabled",String(isAtEnd)),this.prevButton.setAttribute("aria-disabled",String(isAtStart))}updateSliderPosition(){if(!this.sliderItems||!this.sliderWrapper)return;const totalWidth=Array.from(this.sliderItems).reduce(((total,item,index)=>{let itemTotal=total+item.offsetWidth;return index!==this.sliderItems.length-1&&(itemTotal+=this.sliderGapValue),itemTotal}),0),totalPrevWidth=Array.from(this.sliderItems).slice(0,this.currentIdx).reduce(((total,item,index)=>{let itemTotal=total+item.offsetWidth;return index!==this.currentIdx-1&&(itemTotal+=this.sliderGapValue),itemTotal}),0),translateX=Math.min(totalPrevWidth,totalWidth-this.viewportWidth);this.sliderWrapper.style.transform=`translateX(-${translateX}px)`}render(){return(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"64549c4cb8bb3914d616c1a8090103a7fe39c515"},(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"bd126d7d5159013bbc7cdb02ef1eede05b634d3f",class:"atom-list-slider",role:"region","aria-label":"Carousel"},(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"049dfe81f1877c0cd46c51b49b5988bef6094b6d",class:"navigation navigation--prev",role:"button","aria-label":"Previous","aria-disabled":"true",onClick:event=>this.handleNavigationClick(event),style:{display:this.hasNavigation?"":"none"}},(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.h)("atom-icon",{key:"6025f8c3598ccd829fb1714dc76814cd5549e09b",icon:"chevron-left"})),(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"80823818ba22456f35d798cd5e23af70c080ea2d",class:"sliders","aria-live":"polite"},(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"e1e694efa27fbd788237d539962b8b7c6d3b102b",class:{wrapper:!0,"wrapper--centralized":this.currentCentralized},role:"list"},(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"eceb95e036a086be3ec9d0afc8d2145adb275019"}))),(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{key:"e404b41df6c0c19f444b61cb118a1bdeb803d1b2",class:"navigation navigation--next",role:"button","aria-label":"Next","aria-disabled":"true",onClick:event=>this.handleNavigationClick(event),style:{display:this.hasNavigation?"":"none"}},(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.h)("atom-icon",{key:"0d310e71c0f3b6b0c722dd49e0795d4a2105ebef",icon:"chevron-right"}))))}get element(){return(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}};AtomListSlider.style=':root{--ion-color-primary:#0054e9;--ion-color-primary-rgb:0, 84, 233;--ion-color-primary-contrast:#fff;--ion-color-primary-contrast-rgb:255, 255, 255;--ion-color-primary-shade:#004acd;--ion-color-primary-tint:#1a65eb;--ion-color-secondary:#0163aa;--ion-color-secondary-rgb:1, 99, 170;--ion-color-secondary-contrast:#fff;--ion-color-secondary-contrast-rgb:255, 255, 255;--ion-color-secondary-shade:#015796;--ion-color-secondary-tint:#1a73b3;--ion-color-tertiary:#6030ff;--ion-color-tertiary-rgb:96, 48, 255;--ion-color-tertiary-contrast:#fff;--ion-color-tertiary-contrast-rgb:255, 255, 255;--ion-color-tertiary-shade:#542ae0;--ion-color-tertiary-tint:#7045ff;--ion-color-success:#2dd55b;--ion-color-success-rgb:45, 213, 91;--ion-color-success-contrast:#000;--ion-color-success-contrast-rgb:0, 0, 0;--ion-color-success-shade:#28bb50;--ion-color-success-tint:#42d96b;--ion-color-warning:#ffc409;--ion-color-warning-rgb:255, 196, 9;--ion-color-warning-contrast:#000;--ion-color-warning-contrast-rgb:0, 0, 0;--ion-color-warning-shade:#e0ac08;--ion-color-warning-tint:#ffca22;--ion-color-danger:#c5000f;--ion-color-danger-rgb:197, 0, 15;--ion-color-danger-contrast:#fff;--ion-color-danger-contrast-rgb:255, 255, 255;--ion-color-danger-shade:#ad000d;--ion-color-danger-tint:#cb1a27;--ion-color-light:#f4f5f8;--ion-color-light-rgb:244, 245, 248;--ion-color-light-contrast:#000;--ion-color-light-contrast-rgb:0, 0, 0;--ion-color-light-shade:#d7d8da;--ion-color-light-tint:#f5f6f9;--ion-color-medium:#636469;--ion-color-medium-rgb:99, 100, 105;--ion-color-medium-contrast:#fff;--ion-color-medium-contrast-rgb:255, 255, 255;--ion-color-medium-shade:#57585c;--ion-color-medium-tint:#737478;--ion-color-dark:#222428;--ion-color-dark-rgb:34, 36, 40;--ion-color-dark-contrast:#fff;--ion-color-dark-contrast-rgb:255, 255, 255;--ion-color-dark-shade:#1e2023;--ion-color-dark-tint:#383a3e}html.ios{--ion-default-font:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}html.md{--ion-default-font:"Roboto", "Helvetica Neue", sans-serif}html{--ion-dynamic-font:-apple-system-body;--ion-font-family:var(--ion-default-font)}body{background:var(--ion-background-color);color:var(--ion-text-color)}body.backdrop-no-scroll{overflow:hidden}html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,html.ios ion-modal ion-footer ion-toolbar:first-of-type{padding-top:6px}html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type{padding-bottom:6px}html.ios ion-modal ion-toolbar{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){html.ios ion-modal.modal-card:first-of-type{--backdrop-opacity:0.18}}ion-modal.modal-default.show-modal~ion-modal.modal-default{--backdrop-opacity:0;--box-shadow:none}html.ios ion-modal.modal-card .ion-page{border-top-left-radius:var(--border-radius)}.ion-color-primary{--ion-color-base:var(--ion-color-primary, #0054e9) !important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 0, 84, 233) !important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-primary-shade, #004acd) !important;--ion-color-tint:var(--ion-color-primary-tint, #1a65eb) !important}.ion-color-secondary{--ion-color-base:var(--ion-color-secondary, #0163aa) !important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 1, 99, 170) !important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-secondary-shade, #015796) !important;--ion-color-tint:var(--ion-color-secondary-tint, #1a73b3) !important}.ion-color-tertiary{--ion-color-base:var(--ion-color-tertiary, #6030ff) !important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 96, 48, 255) !important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-tertiary-shade, #542ae0) !important;--ion-color-tint:var(--ion-color-tertiary-tint, #7045ff) !important}.ion-color-success{--ion-color-base:var(--ion-color-success, #2dd55b) !important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 213, 91) !important;--ion-color-contrast:var(--ion-color-success-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-success-shade, #28bb50) !important;--ion-color-tint:var(--ion-color-success-tint, #42d96b) !important}.ion-color-warning{--ion-color-base:var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast:var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22) !important}.ion-color-danger{--ion-color-base:var(--ion-color-danger, #c5000f) !important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 197, 0, 15) !important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-danger-shade, #ad000d) !important;--ion-color-tint:var(--ion-color-danger-tint, #cb1a27) !important}.ion-color-light{--ion-color-base:var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast:var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium{--ion-color-base:var(--ion-color-medium, #636469) !important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 99, 100, 105) !important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-medium-shade, #57585c) !important;--ion-color-tint:var(--ion-color-medium-tint, #737478) !important}.ion-color-dark{--ion-color-base:var(--ion-color-dark, #222428) !important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e) !important}.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;z-index:0}ion-modal>.ion-page{position:relative;contain:layout style;height:100%}.split-pane-visible>.ion-page.split-pane-main{position:relative}ion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden{display:none !important}.ion-page-invisible{opacity:0}.can-go-back>ion-header ion-back-button{display:block}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding:20px}@supports (padding-top: 20px){html{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}ion-card.ion-color .ion-inherit-color,ion-card-header.ion-color .ion-inherit-color{color:inherit}.menu-content{transform:translate3d(0, 0, 0)}.menu-content-open{cursor:pointer;touch-action:manipulation;pointer-events:none;overflow-y:hidden}.menu-content-open ion-content{--overflow:hidden}.menu-content-open .ion-content-scroll-host{overflow:hidden}.ios .menu-content-reveal{box-shadow:-8px 0 42px rgba(0, 0, 0, 0.08)}[dir=rtl].ios .menu-content-reveal{box-shadow:8px 0 42px rgba(0, 0, 0, 0.08)}.md .menu-content-reveal{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}.md .menu-content-push{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}ion-accordion-group.accordion-group-expand-inset>ion-accordion:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}ion-accordion-group.accordion-group-expand-inset>ion-accordion:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}ion-accordion-group>ion-accordion:last-of-type ion-item[slot=header]{--border-width:0px}ion-accordion.accordion-animated>[slot=header] .ion-accordion-toggle-icon{transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1)}@media (prefers-reduced-motion: reduce){ion-accordion .ion-accordion-toggle-icon{transition:none !important}}ion-accordion.accordion-expanding>[slot=header] .ion-accordion-toggle-icon,ion-accordion.accordion-expanded>[slot=header] .ion-accordion-toggle-icon{transform:rotate(180deg)}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-previous ion-item[slot=header]{--border-width:0px;--inner-border-width:0px}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanding:first-of-type,ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanded:first-of-type{margin-top:0}ion-input input::-webkit-date-and-time-value{text-align:start}.ion-datetime-button-overlay{--width:fit-content;--height:fit-content}.ion-datetime-button-overlay ion-datetime.datetime-grid{width:320px;min-height:320px}[ion-last-focus],header[tabindex="-1"]:focus,[role=banner][tabindex="-1"]:focus,main[tabindex="-1"]:focus,[role=main][tabindex="-1"]:focus,h1[tabindex="-1"]:focus,[role=heading][aria-level="1"][tabindex="-1"]:focus{outline:none}.popover-viewport:has(>ion-content){overflow:hidden}@supports not selector(:has(> ion-content)){.popover-viewport{overflow:hidden}}:host{--button-navigation-size:var(--spacing-xxxxlarge);--slider-height:var(--spacing-xxxxlarge);--slider-gap:var(--spacing-base);display:block}.atom-list-slider{min-height:var(--slider-height);position:relative}.sliders{overflow-x:hidden;z-index:var(--zindex-1)}.wrapper{display:flex;flex-wrap:nowrap;gap:var(--slider-gap);transition:transform var(--transition-duration);will-change:transform}.wrapper--centralized{justify-content:center}.navigation{align-items:center;background:var(--color-brand-secondary-regular);border:0;border-radius:var(--border-radius-full);box-shadow:var(--elevation-3);color:var(--color-neutral-white);cursor:pointer;display:flex;font-size:var(--spacing-large);height:var(--button-navigation-size);justify-content:center;position:absolute;top:50%;transform:translateY(-50%);transition-duration:var(--transition-duration);transition-property:background-color, opacity, visibility;width:var(--button-navigation-size);will-change:background-color, opacity, visibility;z-index:var(--zindex-5)}.navigation.navigation--prev{left:var(--spacing-small)}.navigation.navigation--next{right:var(--spacing-small)}.navigation:hover{background:var(--color-brand-secondary-light-1)}.navigation[aria-disabled=true]{opacity:0;visibility:hidden}'}}]);
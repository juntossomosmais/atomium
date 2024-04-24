"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[4535],{"../../packages/core/dist/esm/ion-ripple-effect.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_ripple_effect:()=>RippleEffect});var _index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-7c3eb939.js"),_ionic_global_3da28692_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-3da28692.js");const RippleEffect=class{constructor(hostRef){(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.type="bounded"}async addRipple(x,y){return new Promise((resolve=>{(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.i)((()=>{const rect=this.el.getBoundingClientRect(),width=rect.width,height=rect.height,hypotenuse=Math.sqrt(width*width+height*height),maxDim=Math.max(height,width),maxRadius=this.unbounded?maxDim:hypotenuse+PADDING,initialSize=Math.floor(maxDim*INITIAL_ORIGIN_SCALE),finalScale=maxRadius/initialSize;let posX=x-rect.left,posY=y-rect.top;this.unbounded&&(posX=.5*width,posY=.5*height);const styleX=posX-.5*initialSize,styleY=posY-.5*initialSize,moveX=.5*width-posX,moveY=.5*height-posY;(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.w)((()=>{const div=document.createElement("div");div.classList.add("ripple-effect");const style=div.style;style.top=styleY+"px",style.left=styleX+"px",style.width=style.height=initialSize+"px",style.setProperty("--final-scale",`${finalScale}`),style.setProperty("--translate-end",`${moveX}px, ${moveY}px`);(this.el.shadowRoot||this.el).appendChild(div),setTimeout((()=>{resolve((()=>{removeRipple(div)}))}),325)}))}))}))}get unbounded(){return"unbounded"===this.type}render(){const mode=(0,_ionic_global_3da28692_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"9f2578664e5ff8a0a7e27cd90b2339bd430e72b8",role:"presentation",class:{[mode]:!0,unbounded:this.unbounded}})}get el(){return(0,_index_7c3eb939_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}},removeRipple=ripple=>{ripple.classList.add("fade-out"),setTimeout((()=>{ripple.remove()}),200)},PADDING=10,INITIAL_ORIGIN_SCALE=.5;RippleEffect.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{transform:translate(var(--translate-end)) scale(var(--final-scale, 1));animation:150ms fadeOutAnimation forwards}@keyframes rippleAnimation{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(1)}to{transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes fadeInAnimation{from{animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeOutAnimation{from{animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}]);
/*! For license information please see 6367.4d304690.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[6367],{"../../packages/core/dist/esm/gesture-controller-c7c60b38.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>GESTURE_CONTROLLER});class GestureDelegate{constructor(ctrl,id,name,priority,disableScroll){this.id=id,this.name=name,this.disableScroll=disableScroll,this.priority=1e6*priority+id,this.ctrl=ctrl}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const captured=this.ctrl.capture(this.name,this.id,this.priority);return captured&&this.disableScroll&&this.ctrl.disableScroll(this.id),captured}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class BlockerDelegate{constructor(ctrl,id,disable,disableScroll){this.id=id,this.disable=disable,this.disableScroll=disableScroll,this.ctrl=ctrl}block(){if(this.ctrl){if(this.disable)for(const gesture of this.disable)this.ctrl.disableGesture(gesture,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const gesture of this.disable)this.ctrl.enableGesture(gesture,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const BACKDROP_NO_SCROLL="backdrop-no-scroll",GESTURE_CONTROLLER=new class GestureController{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(config){var _a;return new GestureDelegate(this,this.newID(),config.name,null!==(_a=config.priority)&&void 0!==_a?_a:0,!!config.disableScroll)}createBlocker(opts={}){return new BlockerDelegate(this,this.newID(),opts.disable,!!opts.disableScroll)}start(gestureName,id,priority){return this.canStart(gestureName)?(this.requestedStart.set(id,priority),!0):(this.requestedStart.delete(id),!1)}capture(gestureName,id,priority){if(!this.start(gestureName,id,priority))return!1;const requestedStart=this.requestedStart;let maxPriority=-1e4;if(requestedStart.forEach((value=>{maxPriority=Math.max(maxPriority,value)})),maxPriority===priority){this.capturedId=id,requestedStart.clear();const event=new CustomEvent("ionGestureCaptured",{detail:{gestureName}});return document.dispatchEvent(event),!0}return requestedStart.delete(id),!1}release(id){this.requestedStart.delete(id),this.capturedId===id&&(this.capturedId=void 0)}disableGesture(gestureName,id){let set=this.disabledGestures.get(gestureName);void 0===set&&(set=new Set,this.disabledGestures.set(gestureName,set)),set.add(id)}enableGesture(gestureName,id){const set=this.disabledGestures.get(gestureName);void 0!==set&&set.delete(id)}disableScroll(id){this.disabledScroll.add(id),1===this.disabledScroll.size&&document.body.classList.add(BACKDROP_NO_SCROLL)}enableScroll(id){this.disabledScroll.delete(id),0===this.disabledScroll.size&&document.body.classList.remove(BACKDROP_NO_SCROLL)}canStart(gestureName){return void 0===this.capturedId&&!this.isDisabled(gestureName)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(gestureName){const disabled=this.disabledGestures.get(gestureName);return!!(disabled&&disabled.size>0)}newID(){return this.gestureId++,this.gestureId}}},"../../packages/core/dist/esm/ion-backdrop.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_backdrop:()=>Backdrop});var _index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-43ce1e25.js"),_ionic_global_c15c51af_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-c15c51af.js"),_gesture_controller_c7c60b38_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/gesture-controller-c7c60b38.js");const Backdrop=class{constructor(hostRef){(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionBackdropTap=(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionBackdropTap",7),this.blocker=_gesture_controller_c7c60b38_js__WEBPACK_IMPORTED_MODULE_2__.G.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}connectedCallback(){this.stopPropagation&&this.blocker.block()}disconnectedCallback(){this.blocker.unblock()}onMouseDown(ev){this.emitTap(ev)}emitTap(ev){this.stopPropagation&&(ev.preventDefault(),ev.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}render(){const mode=(0,_ionic_global_c15c51af_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return(0,_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_43ce1e25_js__WEBPACK_IMPORTED_MODULE_0__.H,{tabindex:"-1","aria-hidden":"true",class:{[mode]:!0,"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}})}};Backdrop.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",md:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"}}}]);
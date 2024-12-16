/*! For license information please see 7959.7b00b2aa.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[7959,4681,7062],{"../../packages/core/dist/esm/dir-861e8ef7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>isRTL});const isRTL=hostEl=>hostEl&&""!==hostEl.dir?"rtl"===hostEl.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase())},"../../packages/core/dist/esm/gesture-controller-a29626f0.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>BACKDROP_NO_SCROLL,G:()=>GESTURE_CONTROLLER});class GestureDelegate{constructor(ctrl,id,name,priority,disableScroll){this.id=id,this.name=name,this.disableScroll=disableScroll,this.priority=1e6*priority+id,this.ctrl=ctrl}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const captured=this.ctrl.capture(this.name,this.id,this.priority);return captured&&this.disableScroll&&this.ctrl.disableScroll(this.id),captured}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class BlockerDelegate{constructor(ctrl,id,disable,disableScroll){this.id=id,this.disable=disable,this.disableScroll=disableScroll,this.ctrl=ctrl}block(){if(this.ctrl){if(this.disable)for(const gesture of this.disable)this.ctrl.disableGesture(gesture,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const gesture of this.disable)this.ctrl.enableGesture(gesture,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const BACKDROP_NO_SCROLL="backdrop-no-scroll",GESTURE_CONTROLLER=new class GestureController{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(config){var _a;return new GestureDelegate(this,this.newID(),config.name,null!==(_a=config.priority)&&void 0!==_a?_a:0,!!config.disableScroll)}createBlocker(opts={}){return new BlockerDelegate(this,this.newID(),opts.disable,!!opts.disableScroll)}start(gestureName,id,priority){return this.canStart(gestureName)?(this.requestedStart.set(id,priority),!0):(this.requestedStart.delete(id),!1)}capture(gestureName,id,priority){if(!this.start(gestureName,id,priority))return!1;const requestedStart=this.requestedStart;let maxPriority=-1e4;if(requestedStart.forEach((value=>{maxPriority=Math.max(maxPriority,value)})),maxPriority===priority){this.capturedId=id,requestedStart.clear();const event=new CustomEvent("ionGestureCaptured",{detail:{gestureName}});return document.dispatchEvent(event),!0}return requestedStart.delete(id),!1}release(id){this.requestedStart.delete(id),this.capturedId===id&&(this.capturedId=void 0)}disableGesture(gestureName,id){let set=this.disabledGestures.get(gestureName);void 0===set&&(set=new Set,this.disabledGestures.set(gestureName,set)),set.add(id)}enableGesture(gestureName,id){const set=this.disabledGestures.get(gestureName);void 0!==set&&set.delete(id)}disableScroll(id){this.disabledScroll.add(id),1===this.disabledScroll.size&&document.body.classList.add(BACKDROP_NO_SCROLL)}enableScroll(id){this.disabledScroll.delete(id),0===this.disabledScroll.size&&document.body.classList.remove(BACKDROP_NO_SCROLL)}canStart(gestureName){return void 0===this.capturedId&&!this.isDisabled(gestureName)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(gestureName){const disabled=this.disabledGestures.get(gestureName);return!!(disabled&&disabled.size>0)}newID(){return this.gestureId++,this.gestureId}}},"../../packages/core/dist/esm/index-0fc64123.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GESTURE_CONTROLLER:()=>_gesture_controller_a29626f0_js__WEBPACK_IMPORTED_MODULE_0__.G,createGesture:()=>createGesture});var _gesture_controller_a29626f0_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/gesture-controller-a29626f0.js");const addEventListener=(el,eventName,callback,opts)=>{const listenerOpts=supportsPassive(el)?{capture:!!opts.capture,passive:!!opts.passive}:!!opts.capture;let add,remove;return el.__zone_symbol__addEventListener?(add="__zone_symbol__addEventListener",remove="__zone_symbol__removeEventListener"):(add="addEventListener",remove="removeEventListener"),el[add](eventName,callback,listenerOpts),()=>{el[remove](eventName,callback,listenerOpts)}},supportsPassive=node=>{if(void 0===_sPassive)try{const opts=Object.defineProperty({},"passive",{get:()=>{_sPassive=!0}});node.addEventListener("optsTest",(()=>{}),opts)}catch(e){_sPassive=!1}return!!_sPassive};let _sPassive;const getDocument=node=>node instanceof Document?node:node.ownerDocument,createGesture=config=>{let hasCapturedPan=!1,hasStartedPan=!1,hasFiredStart=!0,isMoveQueued=!1;const finalConfig=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},config),canStart=finalConfig.canStart,onWillStart=finalConfig.onWillStart,onStart=finalConfig.onStart,onEnd=finalConfig.onEnd,notCaptured=finalConfig.notCaptured,onMove=finalConfig.onMove,threshold=finalConfig.threshold,passive=finalConfig.passive,blurOnStart=finalConfig.blurOnStart,detail={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},pan=((direction,thresh,maxAngle)=>{const radians=maxAngle*(Math.PI/180),isDirX="x"===direction,maxCosine=Math.cos(radians),threshold=thresh*thresh;let startX=0,startY=0,dirty=!1,isPan=0;return{start(x,y){startX=x,startY=y,isPan=0,dirty=!0},detect(x,y){if(!dirty)return!1;const deltaX=x-startX,deltaY=y-startY,distance=deltaX*deltaX+deltaY*deltaY;if(distance<threshold)return!1;const hypotenuse=Math.sqrt(distance),cosine=(isDirX?deltaX:deltaY)/hypotenuse;return isPan=cosine>maxCosine?1:cosine<-maxCosine?-1:0,dirty=!1,!0},isGesture:()=>0!==isPan,getDirection:()=>isPan}})(finalConfig.direction,finalConfig.threshold,finalConfig.maxAngle),gesture=_gesture_controller_a29626f0_js__WEBPACK_IMPORTED_MODULE_0__.G.createGesture({name:config.gestureName,priority:config.gesturePriority,disableScroll:config.disableScroll}),fireOnMove=()=>{hasCapturedPan&&(isMoveQueued=!1,onMove&&onMove(detail))},tryToCapturePan=()=>!!gesture.capture()&&(hasCapturedPan=!0,hasFiredStart=!1,detail.startX=detail.currentX,detail.startY=detail.currentY,detail.startTime=detail.currentTime,onWillStart?onWillStart(detail).then(fireOnStart):fireOnStart(),!0),fireOnStart=()=>{blurOnStart&&(()=>{if("undefined"!=typeof document){const activeElement=document.activeElement;(null==activeElement?void 0:activeElement.blur)&&activeElement.blur()}})(),onStart&&onStart(detail),hasFiredStart=!0},reset=()=>{hasCapturedPan=!1,hasStartedPan=!1,isMoveQueued=!1,hasFiredStart=!0,gesture.release()},pointerUp=ev=>{const tmpHasCaptured=hasCapturedPan,tmpHasFiredStart=hasFiredStart;reset(),tmpHasFiredStart&&(calcGestureData(detail,ev),tmpHasCaptured?onEnd&&onEnd(detail):notCaptured&&notCaptured(detail))},pointerEvents=((el,pointerDown,pointerMove,pointerUp,options)=>{let rmTouchStart,rmTouchMove,rmTouchEnd,rmTouchCancel,rmMouseStart,rmMouseMove,rmMouseUp,lastTouchEvent=0;const handleTouchStart=ev=>{lastTouchEvent=Date.now()+2e3,pointerDown(ev)&&(!rmTouchMove&&pointerMove&&(rmTouchMove=addEventListener(el,"touchmove",pointerMove,options)),rmTouchEnd||(rmTouchEnd=addEventListener(ev.target,"touchend",handleTouchEnd,options)),rmTouchCancel||(rmTouchCancel=addEventListener(ev.target,"touchcancel",handleTouchEnd,options)))},handleMouseDown=ev=>{lastTouchEvent>Date.now()||pointerDown(ev)&&(!rmMouseMove&&pointerMove&&(rmMouseMove=addEventListener(getDocument(el),"mousemove",pointerMove,options)),rmMouseUp||(rmMouseUp=addEventListener(getDocument(el),"mouseup",handleMouseUp,options)))},handleTouchEnd=ev=>{stopTouch(),pointerUp&&pointerUp(ev)},handleMouseUp=ev=>{stopMouse(),pointerUp&&pointerUp(ev)},stopTouch=()=>{rmTouchMove&&rmTouchMove(),rmTouchEnd&&rmTouchEnd(),rmTouchCancel&&rmTouchCancel(),rmTouchMove=rmTouchEnd=rmTouchCancel=void 0},stopMouse=()=>{rmMouseMove&&rmMouseMove(),rmMouseUp&&rmMouseUp(),rmMouseMove=rmMouseUp=void 0},stop=()=>{stopTouch(),stopMouse()},enable=(isEnabled=!0)=>{isEnabled?(rmTouchStart||(rmTouchStart=addEventListener(el,"touchstart",handleTouchStart,options)),rmMouseStart||(rmMouseStart=addEventListener(el,"mousedown",handleMouseDown,options))):(rmTouchStart&&rmTouchStart(),rmMouseStart&&rmMouseStart(),rmTouchStart=rmMouseStart=void 0,stop())};return{enable,stop,destroy:()=>{enable(!1),pointerUp=pointerMove=pointerDown=void 0}}})(finalConfig.el,(ev=>{const timeStamp=now(ev);return!(hasStartedPan||!hasFiredStart)&&(updateDetail(ev,detail),detail.startX=detail.currentX,detail.startY=detail.currentY,detail.startTime=detail.currentTime=timeStamp,detail.velocityX=detail.velocityY=detail.deltaX=detail.deltaY=0,detail.event=ev,(!canStart||!1!==canStart(detail))&&(gesture.release(),!!gesture.start()&&(hasStartedPan=!0,0===threshold?tryToCapturePan():(pan.start(detail.startX,detail.startY),!0))))}),(ev=>{hasCapturedPan?!isMoveQueued&&hasFiredStart&&(isMoveQueued=!0,calcGestureData(detail,ev),requestAnimationFrame(fireOnMove)):(calcGestureData(detail,ev),pan.detect(detail.currentX,detail.currentY)&&(pan.isGesture()&&tryToCapturePan()||abortGesture()))}),pointerUp,{capture:!1,passive}),abortGesture=()=>{reset(),pointerEvents.stop(),notCaptured&&notCaptured(detail)};return{enable(enable=!0){enable||(hasCapturedPan&&pointerUp(void 0),reset()),pointerEvents.enable(enable)},destroy(){gesture.destroy(),pointerEvents.destroy()}}},calcGestureData=(detail,ev)=>{if(!ev)return;const prevX=detail.currentX,prevY=detail.currentY,prevT=detail.currentTime;updateDetail(ev,detail);const currentX=detail.currentX,currentY=detail.currentY,timeDelta=(detail.currentTime=now(ev))-prevT;if(timeDelta>0&&timeDelta<100){const velocityX=(currentX-prevX)/timeDelta,velocityY=(currentY-prevY)/timeDelta;detail.velocityX=.7*velocityX+.3*detail.velocityX,detail.velocityY=.7*velocityY+.3*detail.velocityY}detail.deltaX=currentX-detail.startX,detail.deltaY=currentY-detail.startY,detail.event=ev},updateDetail=(ev,detail)=>{let x=0,y=0;if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];x=touch.clientX,y=touch.clientY}else void 0!==ev.pageX&&(x=ev.pageX,y=ev.pageY)}detail.currentX=x,detail.currentY=y},now=ev=>ev.timeStamp||Date.now()},"../../packages/core/dist/esm/swipe-back-b094378b.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{createSwipeBackGesture:()=>createSwipeBackGesture});var _helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/helpers-b14eeb70.js"),_dir_861e8ef7_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/dir-861e8ef7.js"),_index_0fc64123_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-0fc64123.js");__webpack_require__("../../packages/core/dist/esm/gesture-controller-a29626f0.js");const createSwipeBackGesture=(el,canStartHandler,onStartHandler,onMoveHandler,onEndHandler)=>{const win=el.ownerDocument.defaultView;let rtl=(0,_dir_861e8ef7_js__WEBPACK_IMPORTED_MODULE_2__.i)(el);const getDeltaX=detail=>rtl?-detail.deltaX:detail.deltaX;return(0,_index_0fc64123_js__WEBPACK_IMPORTED_MODULE_0__.createGesture)({el,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:detail=>(rtl=(0,_dir_861e8ef7_js__WEBPACK_IMPORTED_MODULE_2__.i)(el),(detail=>{const{startX}=detail;return rtl?startX>=win.innerWidth-50:startX<=50})(detail)&&canStartHandler()),onStart:onStartHandler,onMove:detail=>{const stepValue=getDeltaX(detail)/win.innerWidth;onMoveHandler(stepValue)},onEnd:detail=>{const delta=getDeltaX(detail),width=win.innerWidth,stepValue=delta/width,velocity=(detail=>rtl?-detail.velocityX:detail.velocityX)(detail),shouldComplete=velocity>=0&&(velocity>.2||delta>width/2),missingDistance=(shouldComplete?1-stepValue:stepValue)*width;let realDur=0;if(missingDistance>5){const dur=missingDistance/Math.abs(velocity);realDur=Math.min(dur,540)}onEndHandler(shouldComplete,stepValue<=0?.01:(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_3__.f)(0,stepValue,.9999),realDur)}})}}}]);
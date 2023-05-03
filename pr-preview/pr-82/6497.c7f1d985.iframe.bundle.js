/*! For license information please see 6497.c7f1d985.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[6497],{"../../packages/core/dist/esm/index-e65e72c8.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GESTURE_CONTROLLER:()=>_gesture_controller_c7c60b38_js__WEBPACK_IMPORTED_MODULE_0__.G,createGesture:()=>createGesture});var _gesture_controller_c7c60b38_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/gesture-controller-c7c60b38.js");const addEventListener=(el,eventName,callback,opts)=>{const listenerOpts=supportsPassive(el)?{capture:!!opts.capture,passive:!!opts.passive}:!!opts.capture;let add,remove;return el.__zone_symbol__addEventListener?(add="__zone_symbol__addEventListener",remove="__zone_symbol__removeEventListener"):(add="addEventListener",remove="removeEventListener"),el[add](eventName,callback,listenerOpts),()=>{el[remove](eventName,callback,listenerOpts)}},supportsPassive=node=>{if(void 0===_sPassive)try{const opts=Object.defineProperty({},"passive",{get:()=>{_sPassive=!0}});node.addEventListener("optsTest",(()=>{}),opts)}catch(e){_sPassive=!1}return!!_sPassive};let _sPassive;const getDocument=node=>node instanceof Document?node:node.ownerDocument,createGesture=config=>{let hasCapturedPan=!1,hasStartedPan=!1,hasFiredStart=!0,isMoveQueued=!1;const finalConfig=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},config),canStart=finalConfig.canStart,onWillStart=finalConfig.onWillStart,onStart=finalConfig.onStart,onEnd=finalConfig.onEnd,notCaptured=finalConfig.notCaptured,onMove=finalConfig.onMove,threshold=finalConfig.threshold,passive=finalConfig.passive,blurOnStart=finalConfig.blurOnStart,detail={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},pan=((direction,thresh,maxAngle)=>{const radians=maxAngle*(Math.PI/180),isDirX="x"===direction,maxCosine=Math.cos(radians),threshold=thresh*thresh;let startX=0,startY=0,dirty=!1,isPan=0;return{start(x,y){startX=x,startY=y,isPan=0,dirty=!0},detect(x,y){if(!dirty)return!1;const deltaX=x-startX,deltaY=y-startY,distance=deltaX*deltaX+deltaY*deltaY;if(distance<threshold)return!1;const hypotenuse=Math.sqrt(distance),cosine=(isDirX?deltaX:deltaY)/hypotenuse;return isPan=cosine>maxCosine?1:cosine<-maxCosine?-1:0,dirty=!1,!0},isGesture:()=>0!==isPan,getDirection:()=>isPan}})(finalConfig.direction,finalConfig.threshold,finalConfig.maxAngle),gesture=_gesture_controller_c7c60b38_js__WEBPACK_IMPORTED_MODULE_0__.G.createGesture({name:config.gestureName,priority:config.gesturePriority,disableScroll:config.disableScroll}),fireOnMove=()=>{hasCapturedPan&&(isMoveQueued=!1,onMove&&onMove(detail))},tryToCapturePan=()=>!!gesture.capture()&&(hasCapturedPan=!0,hasFiredStart=!1,detail.startX=detail.currentX,detail.startY=detail.currentY,detail.startTime=detail.currentTime,onWillStart?onWillStart(detail).then(fireOnStart):fireOnStart(),!0),fireOnStart=()=>{blurOnStart&&(()=>{if("undefined"!=typeof document){const activeElement=document.activeElement;(null==activeElement?void 0:activeElement.blur)&&activeElement.blur()}})(),onStart&&onStart(detail),hasFiredStart=!0},reset=()=>{hasCapturedPan=!1,hasStartedPan=!1,isMoveQueued=!1,hasFiredStart=!0,gesture.release()},pointerUp=ev=>{const tmpHasCaptured=hasCapturedPan,tmpHasFiredStart=hasFiredStart;reset(),tmpHasFiredStart&&(calcGestureData(detail,ev),tmpHasCaptured?onEnd&&onEnd(detail):notCaptured&&notCaptured(detail))},pointerEvents=((el,pointerDown,pointerMove,pointerUp,options)=>{let rmTouchStart,rmTouchMove,rmTouchEnd,rmTouchCancel,rmMouseStart,rmMouseMove,rmMouseUp,lastTouchEvent=0;const handleTouchStart=ev=>{lastTouchEvent=Date.now()+2e3,pointerDown(ev)&&(!rmTouchMove&&pointerMove&&(rmTouchMove=addEventListener(el,"touchmove",pointerMove,options)),rmTouchEnd||(rmTouchEnd=addEventListener(ev.target,"touchend",handleTouchEnd,options)),rmTouchCancel||(rmTouchCancel=addEventListener(ev.target,"touchcancel",handleTouchEnd,options)))},handleMouseDown=ev=>{lastTouchEvent>Date.now()||pointerDown(ev)&&(!rmMouseMove&&pointerMove&&(rmMouseMove=addEventListener(getDocument(el),"mousemove",pointerMove,options)),rmMouseUp||(rmMouseUp=addEventListener(getDocument(el),"mouseup",handleMouseUp,options)))},handleTouchEnd=ev=>{stopTouch(),pointerUp&&pointerUp(ev)},handleMouseUp=ev=>{stopMouse(),pointerUp&&pointerUp(ev)},stopTouch=()=>{rmTouchMove&&rmTouchMove(),rmTouchEnd&&rmTouchEnd(),rmTouchCancel&&rmTouchCancel(),rmTouchMove=rmTouchEnd=rmTouchCancel=void 0},stopMouse=()=>{rmMouseMove&&rmMouseMove(),rmMouseUp&&rmMouseUp(),rmMouseMove=rmMouseUp=void 0},stop=()=>{stopTouch(),stopMouse()},enable=(isEnabled=!0)=>{isEnabled?(rmTouchStart||(rmTouchStart=addEventListener(el,"touchstart",handleTouchStart,options)),rmMouseStart||(rmMouseStart=addEventListener(el,"mousedown",handleMouseDown,options))):(rmTouchStart&&rmTouchStart(),rmMouseStart&&rmMouseStart(),rmTouchStart=rmMouseStart=void 0,stop())};return{enable,stop,destroy:()=>{enable(!1),pointerUp=pointerMove=pointerDown=void 0}}})(finalConfig.el,(ev=>{const timeStamp=now(ev);return!(hasStartedPan||!hasFiredStart)&&(updateDetail(ev,detail),detail.startX=detail.currentX,detail.startY=detail.currentY,detail.startTime=detail.currentTime=timeStamp,detail.velocityX=detail.velocityY=detail.deltaX=detail.deltaY=0,detail.event=ev,(!canStart||!1!==canStart(detail))&&(gesture.release(),!!gesture.start()&&(hasStartedPan=!0,0===threshold?tryToCapturePan():(pan.start(detail.startX,detail.startY),!0))))}),(ev=>{hasCapturedPan?!isMoveQueued&&hasFiredStart&&(isMoveQueued=!0,calcGestureData(detail,ev),requestAnimationFrame(fireOnMove)):(calcGestureData(detail,ev),pan.detect(detail.currentX,detail.currentY)&&(pan.isGesture()&&tryToCapturePan()||abortGesture()))}),pointerUp,{capture:!1,passive}),abortGesture=()=>{reset(),pointerEvents.stop(),notCaptured&&notCaptured(detail)};return{enable(enable=!0){enable||(hasCapturedPan&&pointerUp(void 0),reset()),pointerEvents.enable(enable)},destroy(){gesture.destroy(),pointerEvents.destroy()}}},calcGestureData=(detail,ev)=>{if(!ev)return;const prevX=detail.currentX,prevY=detail.currentY,prevT=detail.currentTime;updateDetail(ev,detail);const currentX=detail.currentX,currentY=detail.currentY,timeDelta=(detail.currentTime=now(ev))-prevT;if(timeDelta>0&&timeDelta<100){const velocityX=(currentX-prevX)/timeDelta,velocityY=(currentY-prevY)/timeDelta;detail.velocityX=.7*velocityX+.3*detail.velocityX,detail.velocityY=.7*velocityY+.3*detail.velocityY}detail.deltaX=currentX-detail.startX,detail.deltaY=currentY-detail.startY,detail.event=ev},updateDetail=(ev,detail)=>{let x=0,y=0;if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];x=touch.clientX,y=touch.clientY}else void 0!==ev.pageX&&(x=ev.pageX,y=ev.pageY)}detail.currentX=x,detail.currentY=y},now=ev=>ev.timeStamp||Date.now()}}]);
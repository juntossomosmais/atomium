/*! For license information please see 5331.b7c57607.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[5331,5686],{"../../packages/core/dist/esm/index-0fc64123.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GESTURE_CONTROLLER:()=>_gesture_controller_a29626f0_js__WEBPACK_IMPORTED_MODULE_0__.G,createGesture:()=>createGesture});var _gesture_controller_a29626f0_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/gesture-controller-a29626f0.js");const addEventListener=(el,eventName,callback,opts)=>{const listenerOpts=supportsPassive(el)?{capture:!!opts.capture,passive:!!opts.passive}:!!opts.capture;let add,remove;return el.__zone_symbol__addEventListener?(add="__zone_symbol__addEventListener",remove="__zone_symbol__removeEventListener"):(add="addEventListener",remove="removeEventListener"),el[add](eventName,callback,listenerOpts),()=>{el[remove](eventName,callback,listenerOpts)}},supportsPassive=node=>{if(void 0===_sPassive)try{const opts=Object.defineProperty({},"passive",{get:()=>{_sPassive=!0}});node.addEventListener("optsTest",(()=>{}),opts)}catch(e){_sPassive=!1}return!!_sPassive};let _sPassive;const getDocument=node=>node instanceof Document?node:node.ownerDocument,createGesture=config=>{let hasCapturedPan=!1,hasStartedPan=!1,hasFiredStart=!0,isMoveQueued=!1;const finalConfig=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},config),canStart=finalConfig.canStart,onWillStart=finalConfig.onWillStart,onStart=finalConfig.onStart,onEnd=finalConfig.onEnd,notCaptured=finalConfig.notCaptured,onMove=finalConfig.onMove,threshold=finalConfig.threshold,passive=finalConfig.passive,blurOnStart=finalConfig.blurOnStart,detail={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},pan=((direction,thresh,maxAngle)=>{const radians=maxAngle*(Math.PI/180),isDirX="x"===direction,maxCosine=Math.cos(radians),threshold=thresh*thresh;let startX=0,startY=0,dirty=!1,isPan=0;return{start(x,y){startX=x,startY=y,isPan=0,dirty=!0},detect(x,y){if(!dirty)return!1;const deltaX=x-startX,deltaY=y-startY,distance=deltaX*deltaX+deltaY*deltaY;if(distance<threshold)return!1;const hypotenuse=Math.sqrt(distance),cosine=(isDirX?deltaX:deltaY)/hypotenuse;return isPan=cosine>maxCosine?1:cosine<-maxCosine?-1:0,dirty=!1,!0},isGesture:()=>0!==isPan,getDirection:()=>isPan}})(finalConfig.direction,finalConfig.threshold,finalConfig.maxAngle),gesture=_gesture_controller_a29626f0_js__WEBPACK_IMPORTED_MODULE_0__.G.createGesture({name:config.gestureName,priority:config.gesturePriority,disableScroll:config.disableScroll}),fireOnMove=()=>{hasCapturedPan&&(isMoveQueued=!1,onMove&&onMove(detail))},tryToCapturePan=()=>!!gesture.capture()&&(hasCapturedPan=!0,hasFiredStart=!1,detail.startX=detail.currentX,detail.startY=detail.currentY,detail.startTime=detail.currentTime,onWillStart?onWillStart(detail).then(fireOnStart):fireOnStart(),!0),fireOnStart=()=>{blurOnStart&&(()=>{if("undefined"!=typeof document){const activeElement=document.activeElement;(null==activeElement?void 0:activeElement.blur)&&activeElement.blur()}})(),onStart&&onStart(detail),hasFiredStart=!0},reset=()=>{hasCapturedPan=!1,hasStartedPan=!1,isMoveQueued=!1,hasFiredStart=!0,gesture.release()},pointerUp=ev=>{const tmpHasCaptured=hasCapturedPan,tmpHasFiredStart=hasFiredStart;reset(),tmpHasFiredStart&&(calcGestureData(detail,ev),tmpHasCaptured?onEnd&&onEnd(detail):notCaptured&&notCaptured(detail))},pointerEvents=((el,pointerDown,pointerMove,pointerUp,options)=>{let rmTouchStart,rmTouchMove,rmTouchEnd,rmTouchCancel,rmMouseStart,rmMouseMove,rmMouseUp,lastTouchEvent=0;const handleTouchStart=ev=>{lastTouchEvent=Date.now()+2e3,pointerDown(ev)&&(!rmTouchMove&&pointerMove&&(rmTouchMove=addEventListener(el,"touchmove",pointerMove,options)),rmTouchEnd||(rmTouchEnd=addEventListener(ev.target,"touchend",handleTouchEnd,options)),rmTouchCancel||(rmTouchCancel=addEventListener(ev.target,"touchcancel",handleTouchEnd,options)))},handleMouseDown=ev=>{lastTouchEvent>Date.now()||pointerDown(ev)&&(!rmMouseMove&&pointerMove&&(rmMouseMove=addEventListener(getDocument(el),"mousemove",pointerMove,options)),rmMouseUp||(rmMouseUp=addEventListener(getDocument(el),"mouseup",handleMouseUp,options)))},handleTouchEnd=ev=>{stopTouch(),pointerUp&&pointerUp(ev)},handleMouseUp=ev=>{stopMouse(),pointerUp&&pointerUp(ev)},stopTouch=()=>{rmTouchMove&&rmTouchMove(),rmTouchEnd&&rmTouchEnd(),rmTouchCancel&&rmTouchCancel(),rmTouchMove=rmTouchEnd=rmTouchCancel=void 0},stopMouse=()=>{rmMouseMove&&rmMouseMove(),rmMouseUp&&rmMouseUp(),rmMouseMove=rmMouseUp=void 0},stop=()=>{stopTouch(),stopMouse()},enable=(isEnabled=!0)=>{isEnabled?(rmTouchStart||(rmTouchStart=addEventListener(el,"touchstart",handleTouchStart,options)),rmMouseStart||(rmMouseStart=addEventListener(el,"mousedown",handleMouseDown,options))):(rmTouchStart&&rmTouchStart(),rmMouseStart&&rmMouseStart(),rmTouchStart=rmMouseStart=void 0,stop())};return{enable,stop,destroy:()=>{enable(!1),pointerUp=pointerMove=pointerDown=void 0}}})(finalConfig.el,(ev=>{const timeStamp=now(ev);return!(hasStartedPan||!hasFiredStart)&&(updateDetail(ev,detail),detail.startX=detail.currentX,detail.startY=detail.currentY,detail.startTime=detail.currentTime=timeStamp,detail.velocityX=detail.velocityY=detail.deltaX=detail.deltaY=0,detail.event=ev,(!canStart||!1!==canStart(detail))&&(gesture.release(),!!gesture.start()&&(hasStartedPan=!0,0===threshold?tryToCapturePan():(pan.start(detail.startX,detail.startY),!0))))}),(ev=>{hasCapturedPan?!isMoveQueued&&hasFiredStart&&(isMoveQueued=!0,calcGestureData(detail,ev),requestAnimationFrame(fireOnMove)):(calcGestureData(detail,ev),pan.detect(detail.currentX,detail.currentY)&&(pan.isGesture()&&tryToCapturePan()||abortGesture()))}),pointerUp,{capture:!1,passive}),abortGesture=()=>{reset(),pointerEvents.stop(),notCaptured&&notCaptured(detail)};return{enable(enable=!0){enable||(hasCapturedPan&&pointerUp(void 0),reset()),pointerEvents.enable(enable)},destroy(){gesture.destroy(),pointerEvents.destroy()}}},calcGestureData=(detail,ev)=>{if(!ev)return;const prevX=detail.currentX,prevY=detail.currentY,prevT=detail.currentTime;updateDetail(ev,detail);const currentX=detail.currentX,currentY=detail.currentY,timeDelta=(detail.currentTime=now(ev))-prevT;if(timeDelta>0&&timeDelta<100){const velocityX=(currentX-prevX)/timeDelta,velocityY=(currentY-prevY)/timeDelta;detail.velocityX=.7*velocityX+.3*detail.velocityX,detail.velocityY=.7*velocityY+.3*detail.velocityY}detail.deltaX=currentX-detail.startX,detail.deltaY=currentY-detail.startY,detail.event=ev},updateDetail=(ev,detail)=>{let x=0,y=0;if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];x=touch.clientX,y=touch.clientY}else void 0!==ev.pageX&&(x=ev.pageX,y=ev.pageY)}detail.currentX=x,detail.currentY=y},now=ev=>ev.timeStamp||Date.now()},"../../packages/core/dist/esm/index-bad389d4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>ENABLE_HTML_CONTENT_DEFAULT,s:()=>sanitizeDOMString});const ENABLE_HTML_CONTENT_DEFAULT=!1,sanitizeDOMString=untrustedString=>{try{if(untrustedString instanceof IonicSafeString)return untrustedString.value;if(!isSanitizerEnabled()||"string"!=typeof untrustedString||""===untrustedString)return untrustedString;if(untrustedString.includes("onload="))return"";const documentFragment=document.createDocumentFragment(),workingDiv=document.createElement("div");documentFragment.appendChild(workingDiv),workingDiv.innerHTML=untrustedString,blockedTags.forEach((blockedTag=>{const getElementsToRemove=documentFragment.querySelectorAll(blockedTag);for(let elementIndex=getElementsToRemove.length-1;elementIndex>=0;elementIndex--){const element=getElementsToRemove[elementIndex];element.parentNode?element.parentNode.removeChild(element):documentFragment.removeChild(element);const childElements=getElementChildren(element);for(let childIndex=0;childIndex<childElements.length;childIndex++)sanitizeElement(childElements[childIndex])}}));const dfChildren=getElementChildren(documentFragment);for(let childIndex=0;childIndex<dfChildren.length;childIndex++)sanitizeElement(dfChildren[childIndex]);const fragmentDiv=document.createElement("div");fragmentDiv.appendChild(documentFragment);const getInnerDiv=fragmentDiv.querySelector("div");return null!==getInnerDiv?getInnerDiv.innerHTML:fragmentDiv.innerHTML}catch(err){return console.error(err),""}},sanitizeElement=element=>{if(element.nodeType&&1!==element.nodeType)return;if("undefined"!=typeof NamedNodeMap&&!(element.attributes instanceof NamedNodeMap))return void element.remove();for(let i=element.attributes.length-1;i>=0;i--){const attribute=element.attributes.item(i),attributeName=attribute.name;if(!allowedAttributes.includes(attributeName.toLowerCase())){element.removeAttribute(attributeName);continue}const attributeValue=attribute.value,propertyValue=element[attributeName];(null!=attributeValue&&attributeValue.toLowerCase().includes("javascript:")||null!=propertyValue&&propertyValue.toLowerCase().includes("javascript:"))&&element.removeAttribute(attributeName)}const childElements=getElementChildren(element);for(let i=0;i<childElements.length;i++)sanitizeElement(childElements[i])},getElementChildren=el=>null!=el.children?el.children:el.childNodes,isSanitizerEnabled=()=>{var _a;const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;return!config||(config.get?config.get("sanitizerEnabled",!0):!0===config.sanitizerEnabled||void 0===config.sanitizerEnabled)},allowedAttributes=["class","id","href","src","name","slot"],blockedTags=["script","style","iframe","meta","link","object","embed"];class IonicSafeString{constructor(value){this.value=value}}},"../../packages/core/dist/esm/ion-toast.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_toast:()=>Toast});var _index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-6d0a42e8.js"),_index_bad389d4_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../packages/core/dist/esm/index-bad389d4.js"),_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../packages/core/dist/esm/helpers-b14eeb70.js"),_lock_controller_873b21a6_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../packages/core/dist/esm/lock-controller-873b21a6.js"),_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/core/dist/esm/index-f5dbb989.js"),_overlays_3b0bc4e1_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/overlays-3b0bc4e1.js"),_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../packages/core/dist/esm/theme-516b22d6.js"),_ionic_global_ec5a1fee_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/ionic-global-ec5a1fee.js"),_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/animation-aa17f0ca.js"),_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js"),_index_0fc64123_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/dist/esm/index-0fc64123.js");__webpack_require__("../../packages/core/dist/esm/hardware-back-button-597914ed.js"),__webpack_require__("../../packages/core/dist/esm/gesture-controller-a29626f0.js");function getAnimationPosition(position,positionAnchor,mode,toast){let offset;if(offset="md"===mode?"top"===position?8:-8:"top"===position?10:-10,positionAnchor&&_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_4__.w){!function warnIfAnchorIsHidden(positionAnchor,toast){null===positionAnchor.offsetParent&&(0,_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_8__.p)("The positionAnchor element for ion-toast was found in the DOM, but appears to be hidden. This may lead to unexpected positioning of the toast.",toast)}(positionAnchor,toast);const box=positionAnchor.getBoundingClientRect();return"top"===position?offset+=box.bottom:"bottom"===position&&(offset-=_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_4__.w.innerHeight-box.top),{top:`${offset}px`,bottom:`${offset}px`}}return{top:`calc(${offset}px + var(--ion-safe-area-top, 0px))`,bottom:`calc(${offset}px - var(--ion-safe-area-bottom, 0px))`}}const getOffsetForMiddlePosition=(toastHeight,wrapperHeight)=>Math.floor(toastHeight/2-wrapperHeight/2),iosEnterAnimation=(baseEl,opts)=>{const baseAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)(),wrapperAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)(),{position,top,bottom}=opts,wrapperEl=(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_9__.g)(baseEl).querySelector(".toast-wrapper");switch(wrapperAnimation.addElement(wrapperEl),position){case"top":wrapperAnimation.fromTo("transform","translateY(-100%)",`translateY(${top})`);break;case"middle":const topPosition=getOffsetForMiddlePosition(baseEl.clientHeight,wrapperEl.clientHeight);wrapperEl.style.top=`${topPosition}px`,wrapperAnimation.fromTo("opacity",.01,1);break;default:wrapperAnimation.fromTo("transform","translateY(100%)",`translateY(${bottom})`)}return baseAnimation.easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(wrapperAnimation)},iosLeaveAnimation=(baseEl,opts)=>{const baseAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)(),wrapperAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)(),{position,top,bottom}=opts,wrapperEl=(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_9__.g)(baseEl).querySelector(".toast-wrapper");switch(wrapperAnimation.addElement(wrapperEl),position){case"top":wrapperAnimation.fromTo("transform",`translateY(${top})`,"translateY(-100%)");break;case"middle":wrapperAnimation.fromTo("opacity",.99,0);break;default:wrapperAnimation.fromTo("transform",`translateY(${bottom})`,"translateY(100%)")}return baseAnimation.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(wrapperAnimation)},mdEnterAnimation=(baseEl,opts)=>{const baseAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)(),wrapperAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)(),{position,top,bottom}=opts,wrapperEl=(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_9__.g)(baseEl).querySelector(".toast-wrapper");switch(wrapperAnimation.addElement(wrapperEl),position){case"top":wrapperEl.style.setProperty("transform",`translateY(${top})`),wrapperAnimation.fromTo("opacity",.01,1);break;case"middle":const topPosition=getOffsetForMiddlePosition(baseEl.clientHeight,wrapperEl.clientHeight);wrapperEl.style.top=`${topPosition}px`,wrapperAnimation.fromTo("opacity",.01,1);break;default:wrapperEl.style.setProperty("transform",`translateY(${bottom})`),wrapperAnimation.fromTo("opacity",.01,1)}return baseAnimation.easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(wrapperAnimation)},mdLeaveAnimation=baseEl=>{const baseAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)(),wrapperAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)(),wrapperEl=(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_9__.g)(baseEl).querySelector(".toast-wrapper");return wrapperAnimation.addElement(wrapperEl).fromTo("opacity",.99,0),baseAnimation.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(wrapperAnimation)},Toast=class{constructor(hostRef){(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.didPresent=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionToastDidPresent",7),this.willPresent=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionToastWillPresent",7),this.willDismiss=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionToastWillDismiss",7),this.didDismiss=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionToastDidDismiss",7),this.didPresentShorthand=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"didPresent",7),this.willPresentShorthand=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"willPresent",7),this.willDismissShorthand=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"willDismiss",7),this.didDismissShorthand=(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"didDismiss",7),this.delegateController=(0,_overlays_3b0bc4e1_js__WEBPACK_IMPORTED_MODULE_1__.c)(this),this.lockController=(0,_lock_controller_873b21a6_js__WEBPACK_IMPORTED_MODULE_10__.c)(),this.triggerController=(0,_overlays_3b0bc4e1_js__WEBPACK_IMPORTED_MODULE_1__.a)(),this.customHTMLEnabled=_ionic_global_ec5a1fee_js__WEBPACK_IMPORTED_MODULE_2__.c.get("innerHTMLTemplatesEnabled",_index_bad389d4_js__WEBPACK_IMPORTED_MODULE_11__.E),this.presented=!1,this.dispatchCancelHandler=ev=>{const role=ev.detail.role;if((0,_overlays_3b0bc4e1_js__WEBPACK_IMPORTED_MODULE_1__.i)(role)){const cancelButton=this.getButtons().find((b=>"cancel"===b.role));this.callButtonHandler(cancelButton)}},this.createSwipeGesture=toastPosition=>{const gesture=this.gesture=((el,toastPosition,onDismiss)=>{const wrapperEl=(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_9__.g)(el).querySelector(".toast-wrapper"),hostElHeight=el.clientHeight,wrapperElBox=wrapperEl.getBoundingClientRect();let MAX_SWIPE_DISTANCE=0;const STEP_OFFSET="middle"===el.position?.5:0,INVERSION_FACTOR="top"===el.position?-1:1,topPosition=getOffsetForMiddlePosition(hostElHeight,wrapperElBox.height),SWIPE_UP_DOWN_KEYFRAMES=[{offset:0,transform:`translateY(-${topPosition+wrapperElBox.height}px)`},{offset:.5,transform:"translateY(0px)"},{offset:1,transform:`translateY(${topPosition+wrapperElBox.height}px)`}],swipeAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)("toast-swipe-to-dismiss-animation").addElement(wrapperEl).duration(100);switch(el.position){case"middle":MAX_SWIPE_DISTANCE=hostElHeight+wrapperElBox.height,swipeAnimation.keyframes(SWIPE_UP_DOWN_KEYFRAMES),swipeAnimation.progressStart(!0,.5);break;case"top":MAX_SWIPE_DISTANCE=wrapperElBox.bottom,swipeAnimation.keyframes([{offset:0,transform:`translateY(${toastPosition.top})`},{offset:1,transform:"translateY(-100%)"}]),swipeAnimation.progressStart(!0,0);break;default:MAX_SWIPE_DISTANCE=hostElHeight-wrapperElBox.top,swipeAnimation.keyframes([{offset:0,transform:`translateY(${toastPosition.bottom})`},{offset:1,transform:"translateY(100%)"}]),swipeAnimation.progressStart(!0,0)}const computeStep=delta=>delta*INVERSION_FACTOR/MAX_SWIPE_DISTANCE,gesture=(0,_index_0fc64123_js__WEBPACK_IMPORTED_MODULE_5__.createGesture)({el:wrapperEl,gestureName:"toast-swipe-to-dismiss",gesturePriority:_overlays_3b0bc4e1_js__WEBPACK_IMPORTED_MODULE_1__.O,direction:"y",onMove:detail=>{const step=STEP_OFFSET+computeStep(detail.deltaY);swipeAnimation.progressStep(step)},onEnd:detail=>{const velocity=detail.velocityY,threshold=(detail.deltaY+1e3*velocity)/MAX_SWIPE_DISTANCE*INVERSION_FACTOR;gesture.enable(!1);let shouldDismiss=!0,playTo=1,step=0,remainingDistance=0;if("middle"===el.position){shouldDismiss=threshold>=.25||threshold<=-.25,playTo=1,step=0;const wrapperElBox=wrapperEl.getBoundingClientRect(),startOffset=wrapperElBox.top-topPosition,startPosition=`${startOffset}px`,offsetFactor=detail.deltaY<=0?-1:1,endOffset=(topPosition+wrapperElBox.height)*offsetFactor,KEYFRAMES=[{offset:0,transform:`translateY(${startPosition})`},{offset:1,transform:`translateY(${shouldDismiss?`${endOffset}px`:"0px"})`}];swipeAnimation.keyframes(KEYFRAMES),remainingDistance=endOffset-startOffset}else shouldDismiss=threshold>=.5,playTo=shouldDismiss?1:0,step=computeStep(detail.deltaY),remainingDistance=(shouldDismiss?1-step:step)*MAX_SWIPE_DISTANCE;const duration=Math.min(Math.abs(remainingDistance)/Math.abs(velocity),200);swipeAnimation.onFinish((()=>{shouldDismiss?(onDismiss(),swipeAnimation.destroy()):("middle"===el.position?swipeAnimation.keyframes(SWIPE_UP_DOWN_KEYFRAMES).progressStart(!0,.5):swipeAnimation.progressStart(!0,0),gesture.enable(!0))}),{oneTimeCallback:!0}).progressEnd(playTo,step,duration)}});return gesture})(this.el,toastPosition,(()=>{this.dismiss(void 0,_overlays_3b0bc4e1_js__WEBPACK_IMPORTED_MODULE_1__.G)}));gesture.enable(!0)},this.destroySwipeGesture=()=>{const{gesture}=this;void 0!==gesture&&(gesture.destroy(),this.gesture=void 0)},this.prefersSwipeGesture=()=>{const{swipeGesture}=this;return"vertical"===swipeGesture},this.revealContentToScreenReader=!1,this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.color=void 0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.cssClass=void 0,this.duration=_ionic_global_ec5a1fee_js__WEBPACK_IMPORTED_MODULE_2__.c.getNumber("toastDuration",0),this.header=void 0,this.layout="baseline",this.message=void 0,this.keyboardClose=!1,this.position="bottom",this.positionAnchor=void 0,this.buttons=void 0,this.translucent=!1,this.animated=!0,this.icon=void 0,this.htmlAttributes=void 0,this.swipeGesture=void 0,this.isOpen=!1,this.trigger=void 0}swipeGestureChanged(){this.destroySwipeGesture(),this.presented&&this.prefersSwipeGesture()&&this.createSwipeGesture(this.lastPresentedPosition)}onIsOpenChange(newValue,oldValue){!0===newValue&&!1===oldValue?this.present():!1===newValue&&!0===oldValue&&this.dismiss()}triggerChanged(){const{trigger,el,triggerController}=this;trigger&&triggerController.addClickListener(el,trigger)}connectedCallback(){(0,_overlays_3b0bc4e1_js__WEBPACK_IMPORTED_MODULE_1__.p)(this.el),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){var _a;(null===(_a=this.htmlAttributes)||void 0===_a?void 0:_a.id)||(0,_overlays_3b0bc4e1_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.el)}componentDidLoad(){!0===this.isOpen&&(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_9__.r)((()=>this.present())),this.triggerChanged()}async present(){const unlock=await this.lockController.lock();await this.delegateController.attachViewToDom();const{el,position}=this,animationPosition=getAnimationPosition(position,this.getAnchorElement(),(0,_ionic_global_ec5a1fee_js__WEBPACK_IMPORTED_MODULE_2__.g)(this),el);this.lastPresentedPosition=animationPosition,await(0,_overlays_3b0bc4e1_js__WEBPACK_IMPORTED_MODULE_1__.b)(this,"toastEnter",iosEnterAnimation,mdEnterAnimation,{position,top:animationPosition.top,bottom:animationPosition.bottom}),this.revealContentToScreenReader=!0,this.duration>0&&(this.durationTimeout=setTimeout((()=>this.dismiss(void 0,"timeout")),this.duration)),this.prefersSwipeGesture()&&this.createSwipeGesture(animationPosition),unlock()}async dismiss(data,role){var _a,_b;const unlock=await this.lockController.lock(),{durationTimeout,position,lastPresentedPosition}=this;durationTimeout&&clearTimeout(durationTimeout);const dismissed=await(0,_overlays_3b0bc4e1_js__WEBPACK_IMPORTED_MODULE_1__.d)(this,data,role,"toastLeave",iosLeaveAnimation,mdLeaveAnimation,{position,top:null!==(_a=null==lastPresentedPosition?void 0:lastPresentedPosition.top)&&void 0!==_a?_a:"",bottom:null!==(_b=null==lastPresentedPosition?void 0:lastPresentedPosition.bottom)&&void 0!==_b?_b:""});return dismissed&&(this.delegateController.removeViewFromDom(),this.revealContentToScreenReader=!1),this.lastPresentedPosition=void 0,this.destroySwipeGesture(),unlock(),dismissed}onDidDismiss(){return(0,_overlays_3b0bc4e1_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.el,"ionToastDidDismiss")}onWillDismiss(){return(0,_overlays_3b0bc4e1_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.el,"ionToastWillDismiss")}getButtons(){return this.buttons?this.buttons.map((b=>"string"==typeof b?{text:b}:b)):[]}getAnchorElement(){const{position,positionAnchor,el}=this;if(void 0!==positionAnchor)if("middle"!==position||void 0===positionAnchor){if("string"==typeof positionAnchor){const foundEl=document.getElementById(positionAnchor);return null===foundEl?void(0,_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_8__.p)(`An anchor element with an ID of "${positionAnchor}" was not found in the DOM.`,el):foundEl}if(positionAnchor instanceof HTMLElement)return positionAnchor;(0,_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_8__.p)("Invalid positionAnchor value:",positionAnchor,el)}else(0,_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_8__.p)('The positionAnchor property is ignored when using position="middle".',this.el)}async buttonClick(button){const role=button.role;if((0,_overlays_3b0bc4e1_js__WEBPACK_IMPORTED_MODULE_1__.i)(role))return this.dismiss(void 0,role);return await this.callButtonHandler(button)?this.dismiss(void 0,role):Promise.resolve()}async callButtonHandler(button){if(null==button?void 0:button.handler)try{if(!1===await(0,_overlays_3b0bc4e1_js__WEBPACK_IMPORTED_MODULE_1__.j)(button.handler))return!1}catch(e){console.error(e)}return!0}renderButtons(buttons,side){if(0===buttons.length)return;const mode=(0,_ionic_global_ec5a1fee_js__WEBPACK_IMPORTED_MODULE_2__.g)(this),buttonGroupsClasses={"toast-button-group":!0,[`toast-button-group-${side}`]:!0};return(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:buttonGroupsClasses},buttons.map((b=>(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",Object.assign({},b.htmlAttributes,{type:"button",class:buttonClass(b),tabIndex:0,onClick:()=>this.buttonClick(b),part:buttonPart(b)}),(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"toast-button-inner"},b.icon&&(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-icon",{"aria-hidden":"true",icon:b.icon,slot:void 0===b.text?"icon-only":void 0,class:"toast-button-icon"}),b.text),"md"===mode&&(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-ripple-effect",{type:void 0!==b.icon&&void 0===b.text?"unbounded":"bounded"})))))}renderToastMessage(key,ariaHidden=null){const{customHTMLEnabled,message}=this;return customHTMLEnabled?(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key,"aria-hidden":ariaHidden,class:"toast-message",part:"message",innerHTML:(0,_index_bad389d4_js__WEBPACK_IMPORTED_MODULE_11__.s)(message)}):(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key,"aria-hidden":ariaHidden,class:"toast-message",part:"message"},message)}renderHeader(key,ariaHidden=null){return(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key,class:"toast-header","aria-hidden":ariaHidden,part:"header"},this.header)}render(){const{layout,el,revealContentToScreenReader,header,message}=this,allButtons=this.getButtons(),startButtons=allButtons.filter((b=>"start"===b.side)),endButtons=allButtons.filter((b=>"start"!==b.side)),mode=(0,_ionic_global_ec5a1fee_js__WEBPACK_IMPORTED_MODULE_2__.g)(this),wrapperClass={"toast-wrapper":!0,[`toast-${this.position}`]:!0,[`toast-layout-${layout}`]:!0};return"stacked"===layout&&startButtons.length>0&&endButtons.length>0&&(0,_index_f5dbb989_js__WEBPACK_IMPORTED_MODULE_8__.p)("This toast is using start and end buttons with the stacked toast layout. We recommend following the best practice of using either start or end buttons with the stacked toast layout.",el),(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.H,Object.assign({key:"c05655ff06af8d0e48c2a85396b07ad942fa81b4",tabindex:"-1"},this.htmlAttributes,{style:{zIndex:`${6e4+this.overlayIndex}`},class:(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_12__.c)(this.color,Object.assign(Object.assign({[mode]:!0},(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_12__.g)(this.cssClass)),{"overlay-hidden":!0,"toast-translucent":this.translucent})),onIonToastWillDismiss:this.dispatchCancelHandler}),(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"9393ead4de1bf28529661d6f64049d34e18d725c",class:wrapperClass},(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"3e9dd73c17c337849c3f26e8d0f395b3e5ee20a7",class:"toast-container",part:"container"},this.renderButtons(startButtons,"start"),void 0!==this.icon&&(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-icon",{key:"5d15b18364301ad55e44e9f601014ac33181590b",class:"toast-icon",part:"icon",icon:this.icon,lazy:!1,"aria-hidden":"true"}),(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"f6dd164502637a882c5caf18445d8509b85ad6f9",class:"toast-content",role:"status","aria-atomic":"true","aria-live":"polite"},!revealContentToScreenReader&&void 0!==header&&this.renderHeader("oldHeader","true"),!revealContentToScreenReader&&void 0!==message&&this.renderToastMessage("oldMessage","true"),revealContentToScreenReader&&void 0!==header&&this.renderHeader("header"),revealContentToScreenReader&&void 0!==message&&this.renderToastMessage("header")),this.renderButtons(endButtons,"end"))))}get el(){return(0,_index_6d0a42e8_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},buttonClass=button=>({"toast-button":!0,"toast-button-icon-only":void 0!==button.icon&&void 0===button.text,[`toast-button-${button.role}`]:void 0!==button.role,"ion-focusable":!0,"ion-activatable":!0}),buttonPart=button=>(0,_overlays_3b0bc4e1_js__WEBPACK_IMPORTED_MODULE_1__.i)(button.role)?"button cancel":"button";Toast.style={ios:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host{inset-inline-start:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-shadow:var(--box-shadow);pointer-events:auto}.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}.toast-wrapper.toast-top{transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-bottom{transform:translate3d(0,  100%,  0);bottom:0}.toast-container{display:flex;align-items:center;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{flex-wrap:wrap}.toast-layout-baseline .toast-content{display:flex;flex:1;flex-direction:column;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{flex:1;white-space:var(--white-space)}.toast-button-group{display:flex}.toast-layout-stacked .toast-button-group{justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:flex;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--border-radius:14px;--button-color:var(--ion-color-primary, #0054e9);--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));--max-width:700px;--max-height:478px;--start:10px;--end:10px;font-size:clamp(14px, 0.875rem, 43.4px)}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports (backdrop-filter: blur(0)){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);backdrop-filter:saturate(180%) blur(20px)}:host(.ion-color.toast-translucent) .toast-wrapper{background:rgba(var(--ion-color-base-rgb), 0.8)}}.toast-wrapper.toast-middle{opacity:0.01}.toast-content{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:15px;padding-bottom:15px}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;min-height:44px;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:clamp(17px, 1.0625rem, 21.998px);font-weight:500;overflow:hidden}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",md:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host{inset-inline-start:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-shadow:var(--box-shadow);pointer-events:auto}.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}.toast-wrapper.toast-top{transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-bottom{transform:translate3d(0,  100%,  0);bottom:0}.toast-container{display:flex;align-items:center;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{flex-wrap:wrap}.toast-layout-baseline .toast-content{display:flex;flex:1;flex-direction:column;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{flex:1;white-space:var(--white-space)}.toast-button-group{display:flex}.toast-layout-stacked .toast-button-group{justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:flex;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, var(--ion-background-color-step-800, #333333));--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #0054e9);--color:var(--ion-color-step-50, var(--ion-text-color-step-950, #f2f2f2));--max-width:700px;--start:8px;--end:8px;font-size:0.875rem}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}.toast-content{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:14px;padding-bottom:14px}.toast-header{margin-bottom:2px;font-weight:500;line-height:1.25rem}.toast-message{line-height:1.25rem}.toast-layout-baseline .toast-button-group-start{-webkit-margin-start:8px;margin-inline-start:8px}.toast-layout-stacked .toast-button-group-start{-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px}.toast-layout-baseline .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px}.toast-layout-stacked .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px;margin-bottom:8px}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:0.875rem;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}.toast-button-cancel{color:var(--ion-color-step-100, var(--ion-text-color-step-900, #e6e6e6))}.toast-button-icon-only{border-radius:50%;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}"}},"../../packages/core/dist/esm/lock-controller-873b21a6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createLockController});const createLockController=()=>{let waitPromise;return{lock:async()=>{const p=waitPromise;let resolve;return waitPromise=new Promise((r=>resolve=r)),void 0!==p&&await p,resolve}}}}}]);
/*! For license information please see 5244.24fa92ca.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[5244],{"../../packages/core/dist/esm/animation-aa17f0ca.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createAnimation});var _index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js");let animationPrefix;const setStyleProperty=(element,propertyName,value)=>{const prefix=propertyName.startsWith("animation")?(el=>{if(void 0===animationPrefix){const supportsUnprefixed=void 0!==el.style.animationName,supportsWebkitPrefix=void 0!==el.style.webkitAnimationName;animationPrefix=!supportsUnprefixed&&supportsWebkitPrefix?"-webkit-":""}return animationPrefix})(element):"";element.style.setProperty(prefix+propertyName,value)},addClassToArray=(classes=[],className)=>{if(void 0!==className){const classNameToAppend=Array.isArray(className)?className:[className];return[...classes,...classNameToAppend]}return classes},createAnimation=animationId=>{let _delay,_duration,_easing,_iterations,_fill,_direction,parentAnimation,forceDirectionValue,forceDurationValue,forceDelayValue,ani,_keyframes=[],beforeAddClasses=[],beforeRemoveClasses=[],initialized=!1,beforeStylesValue={},afterAddClasses=[],afterRemoveClasses=[],afterStylesValue={},numAnimationsRunning=0,shouldForceLinearEasing=!1,shouldForceSyncPlayback=!1,willComplete=!0,finished=!1,shouldCalculateNumAnimations=!0,paused=!1;const id=animationId,onFinishCallbacks=[],onFinishOneTimeCallbacks=[],onStopOneTimeCallbacks=[],elements=[],childAnimations=[],stylesheets=[],_beforeAddReadFunctions=[],_beforeAddWriteFunctions=[],_afterAddReadFunctions=[],_afterAddWriteFunctions=[],webAnimations=[],supportsAnimationEffect="function"==typeof AnimationEffect||void 0!==_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w&&"function"==typeof _index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w.AnimationEffect,supportsWebAnimations="function"==typeof Element&&"function"==typeof Element.prototype.animate&&supportsAnimationEffect,getWebAnimations=()=>webAnimations,cleanUp=clearStyleSheets=>{cleanUpElements(),clearStyleSheets&&cleanUpStyleSheets()},clearCallback=(callbackToRemove,callbackObjects)=>{const index=callbackObjects.findIndex((callbackObject=>callbackObject.c===callbackToRemove));index>-1&&callbackObjects.splice(index,1)},onFinish=(callback,opts)=>(((null==opts?void 0:opts.oneTimeCallback)?onFinishOneTimeCallbacks:onFinishCallbacks).push({c:callback,o:opts}),ani),clearOnFinish=()=>(onFinishCallbacks.length=0,onFinishOneTimeCallbacks.length=0,ani),cleanUpElements=()=>{supportsWebAnimations&&(webAnimations.forEach((animation=>{animation.cancel()})),webAnimations.length=0)},cleanUpStyleSheets=()=>{stylesheets.forEach((stylesheet=>{(null==stylesheet?void 0:stylesheet.parentNode)&&stylesheet.parentNode.removeChild(stylesheet)})),stylesheets.length=0},getFill=()=>void 0!==_fill?_fill:parentAnimation?parentAnimation.getFill():"both",getDirection=()=>void 0!==forceDirectionValue?forceDirectionValue:void 0!==_direction?_direction:parentAnimation?parentAnimation.getDirection():"normal",getEasing=()=>shouldForceLinearEasing?"linear":void 0!==_easing?_easing:parentAnimation?parentAnimation.getEasing():"linear",getDuration=()=>shouldForceSyncPlayback?0:void 0!==forceDurationValue?forceDurationValue:void 0!==_duration?_duration:parentAnimation?parentAnimation.getDuration():0,getIterations=()=>void 0!==_iterations?_iterations:parentAnimation?parentAnimation.getIterations():1,getDelay=()=>void 0!==forceDelayValue?forceDelayValue:void 0!==_delay?_delay:parentAnimation?parentAnimation.getDelay():0,updateKeyframes=keyframeValues=>{supportsWebAnimations&&getWebAnimations().forEach((animation=>{const keyframeEffect=animation.effect;if(keyframeEffect.setKeyframes)keyframeEffect.setKeyframes(keyframeValues);else{const newEffect=new KeyframeEffect(keyframeEffect.target,keyframeValues,keyframeEffect.getTiming());animation.effect=newEffect}}))},animationFinish=()=>{0!==numAnimationsRunning&&(numAnimationsRunning--,0===numAnimationsRunning&&((()=>{_afterAddReadFunctions.forEach((callback=>callback())),_afterAddWriteFunctions.forEach((callback=>callback()));const currentStep=willComplete?1:0,addClasses=afterAddClasses,removeClasses=afterRemoveClasses,styles=afterStylesValue;elements.forEach((el=>{const elementClassList=el.classList;addClasses.forEach((c=>elementClassList.add(c))),removeClasses.forEach((c=>elementClassList.remove(c)));for(const property in styles)styles.hasOwnProperty(property)&&setStyleProperty(el,property,styles[property])})),forceDurationValue=void 0,forceDirectionValue=void 0,forceDelayValue=void 0,onFinishCallbacks.forEach((onFinishCallback=>onFinishCallback.c(currentStep,ani))),onFinishOneTimeCallbacks.forEach((onFinishCallback=>onFinishCallback.c(currentStep,ani))),onFinishOneTimeCallbacks.length=0,shouldCalculateNumAnimations=!0,willComplete&&(finished=!0),willComplete=!0})(),parentAnimation&&parentAnimation.animationFinish()))},initializeAnimation=()=>{(()=>{_beforeAddReadFunctions.forEach((callback=>callback())),_beforeAddWriteFunctions.forEach((callback=>callback()));const addClasses=beforeAddClasses,removeClasses=beforeRemoveClasses,styles=beforeStylesValue;elements.forEach((el=>{const elementClassList=el.classList;addClasses.forEach((c=>elementClassList.add(c))),removeClasses.forEach((c=>elementClassList.remove(c)));for(const property in styles)styles.hasOwnProperty(property)&&setStyleProperty(el,property,styles[property])}))})(),_keyframes.length>0&&supportsWebAnimations&&(elements.forEach((element=>{const animation=element.animate(_keyframes,{id,delay:getDelay(),duration:getDuration(),easing:getEasing(),iterations:getIterations(),fill:getFill(),direction:getDirection()});animation.pause(),webAnimations.push(animation)})),webAnimations.length>0&&(webAnimations[0].onfinish=()=>{animationFinish()})),initialized=!0},setAnimationStep=step=>{step=Math.min(Math.max(step,0),.9999),supportsWebAnimations&&webAnimations.forEach((animation=>{animation.currentTime=animation.effect.getComputedTiming().delay+getDuration()*step,animation.pause()}))},updateWebAnimation=step=>{webAnimations.forEach((animation=>{animation.effect.updateTiming({delay:getDelay(),duration:getDuration(),easing:getEasing(),iterations:getIterations(),fill:getFill(),direction:getDirection()})})),void 0!==step&&setAnimationStep(step)},update=(deep=!1,toggleAnimationName=!0,step)=>(deep&&childAnimations.forEach((animation=>{animation.update(deep,toggleAnimationName,step)})),supportsWebAnimations&&updateWebAnimation(step),ani),pauseAnimation=()=>{initialized&&(supportsWebAnimations?webAnimations.forEach((animation=>{animation.pause()})):elements.forEach((element=>{setStyleProperty(element,"animation-play-state","paused")})),paused=!0)},play=opts=>new Promise((resolve=>{(null==opts?void 0:opts.sync)&&(shouldForceSyncPlayback=!0,onFinish((()=>shouldForceSyncPlayback=!1),{oneTimeCallback:!0})),initialized||initializeAnimation(),finished&&(supportsWebAnimations&&(setAnimationStep(0),updateWebAnimation()),finished=!1),shouldCalculateNumAnimations&&(numAnimationsRunning=childAnimations.length+1,shouldCalculateNumAnimations=!1);const onStopCallback=()=>{clearCallback(onFinishCallback,onFinishOneTimeCallbacks),resolve()},onFinishCallback=()=>{clearCallback(onStopCallback,onStopOneTimeCallbacks),resolve()};onFinish(onFinishCallback,{oneTimeCallback:!0}),((callback,opts)=>{onStopOneTimeCallbacks.push({c:callback,o:opts})})(onStopCallback,{oneTimeCallback:!0}),childAnimations.forEach((animation=>{animation.play()})),supportsWebAnimations?(webAnimations.forEach((animation=>{animation.play()})),0!==_keyframes.length&&0!==elements.length||animationFinish()):animationFinish(),paused=!1})),from=(property,value)=>{const firstFrame=_keyframes[0];return void 0===firstFrame||void 0!==firstFrame.offset&&0!==firstFrame.offset?_keyframes=[{offset:0,[property]:value},..._keyframes]:firstFrame[property]=value,ani};return ani={parentAnimation,elements,childAnimations,id,animationFinish,from,to:(property,value)=>{const lastFrame=_keyframes[_keyframes.length-1];return void 0===lastFrame||void 0!==lastFrame.offset&&1!==lastFrame.offset?_keyframes=[..._keyframes,{offset:1,[property]:value}]:lastFrame[property]=value,ani},fromTo:(property,fromValue,toValue)=>from(property,fromValue).to(property,toValue),parent:animation=>(parentAnimation=animation,ani),play,pause:()=>(childAnimations.forEach((animation=>{animation.pause()})),pauseAnimation(),ani),stop:()=>{childAnimations.forEach((animation=>{animation.stop()})),initialized&&(cleanUpElements(),initialized=!1),shouldForceLinearEasing=!1,shouldForceSyncPlayback=!1,shouldCalculateNumAnimations=!0,forceDirectionValue=void 0,forceDurationValue=void 0,forceDelayValue=void 0,numAnimationsRunning=0,finished=!1,willComplete=!0,paused=!1,onStopOneTimeCallbacks.forEach((onStopCallback=>onStopCallback.c(0,ani))),onStopOneTimeCallbacks.length=0},destroy:clearStyleSheets=>(childAnimations.forEach((childAnimation=>{childAnimation.destroy(clearStyleSheets)})),cleanUp(clearStyleSheets),elements.length=0,childAnimations.length=0,_keyframes.length=0,clearOnFinish(),initialized=!1,shouldCalculateNumAnimations=!0,ani),keyframes:keyframeValues=>{const different=_keyframes!==keyframeValues;return _keyframes=keyframeValues,different&&updateKeyframes(_keyframes),ani},addAnimation:animationToAdd=>{if(null!=animationToAdd)if(Array.isArray(animationToAdd))for(const animation of animationToAdd)animation.parent(ani),childAnimations.push(animation);else animationToAdd.parent(ani),childAnimations.push(animationToAdd);return ani},addElement:el=>{if(null!=el)if(1===el.nodeType)elements.push(el);else if(el.length>=0)for(let i=0;i<el.length;i++)elements.push(el[i]);else console.error("Invalid addElement value");return ani},update,fill:animationFill=>(_fill=animationFill,update(!0),ani),direction:animationDirection=>(_direction=animationDirection,update(!0),ani),iterations:animationIterations=>(_iterations=animationIterations,update(!0),ani),duration:animationDuration=>(supportsWebAnimations||0!==animationDuration||(animationDuration=1),_duration=animationDuration,update(!0),ani),easing:animationEasing=>(_easing=animationEasing,update(!0),ani),delay:animationDelay=>(_delay=animationDelay,update(!0),ani),getWebAnimations,getKeyframes:()=>_keyframes,getFill,getDirection,getDelay,getIterations,getEasing,getDuration,afterAddRead:readFn=>(_afterAddReadFunctions.push(readFn),ani),afterAddWrite:writeFn=>(_afterAddWriteFunctions.push(writeFn),ani),afterClearStyles:(propertyNames=[])=>{for(const property of propertyNames)afterStylesValue[property]="";return ani},afterStyles:(styles={})=>(afterStylesValue=styles,ani),afterRemoveClass:className=>(afterRemoveClasses=addClassToArray(afterRemoveClasses,className),ani),afterAddClass:className=>(afterAddClasses=addClassToArray(afterAddClasses,className),ani),beforeAddRead:readFn=>(_beforeAddReadFunctions.push(readFn),ani),beforeAddWrite:writeFn=>(_beforeAddWriteFunctions.push(writeFn),ani),beforeClearStyles:(propertyNames=[])=>{for(const property of propertyNames)beforeStylesValue[property]="";return ani},beforeStyles:(styles={})=>(beforeStylesValue=styles,ani),beforeRemoveClass:className=>(beforeRemoveClasses=addClassToArray(beforeRemoveClasses,className),ani),beforeAddClass:className=>(beforeAddClasses=addClassToArray(beforeAddClasses,className),ani),onFinish,isRunning:()=>0!==numAnimationsRunning&&!paused,progressStart:(forceLinearEasing=!1,step)=>(childAnimations.forEach((animation=>{animation.progressStart(forceLinearEasing,step)})),pauseAnimation(),shouldForceLinearEasing=forceLinearEasing,initialized||initializeAnimation(),update(!1,!0,step),ani),progressStep:step=>(childAnimations.forEach((animation=>{animation.progressStep(step)})),setAnimationStep(step),ani),progressEnd:(playTo,step,dur)=>(shouldForceLinearEasing=!1,childAnimations.forEach((animation=>{animation.progressEnd(playTo,step,dur)})),void 0!==dur&&(forceDurationValue=dur),finished=!1,willComplete=!0,0===playTo?(forceDirectionValue="reverse"===getDirection()?"normal":"reverse","reverse"===forceDirectionValue&&(willComplete=!1),supportsWebAnimations?(update(),setAnimationStep(1-step)):(forceDelayValue=(1-step)*getDuration()*-1,update(!1,!1))):1===playTo&&(supportsWebAnimations?(update(),setAnimationStep(step)):(forceDelayValue=step*getDuration()*-1,update(!1,!1))),void 0===playTo||parentAnimation||play(),ani)}}},"../../packages/core/dist/esm/index-d9a82e80.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>doc,w:()=>win});const win="undefined"!=typeof window?window:void 0,doc="undefined"!=typeof document?document:void 0}}]);
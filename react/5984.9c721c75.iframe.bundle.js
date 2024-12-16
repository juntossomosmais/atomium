/*! For license information please see 5984.9c721c75.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[5984],{"../../packages/core/dist/esm/index-bad389d4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>ENABLE_HTML_CONTENT_DEFAULT,s:()=>sanitizeDOMString});const ENABLE_HTML_CONTENT_DEFAULT=!1,sanitizeDOMString=untrustedString=>{try{if(untrustedString instanceof IonicSafeString)return untrustedString.value;if(!isSanitizerEnabled()||"string"!=typeof untrustedString||""===untrustedString)return untrustedString;if(untrustedString.includes("onload="))return"";const documentFragment=document.createDocumentFragment(),workingDiv=document.createElement("div");documentFragment.appendChild(workingDiv),workingDiv.innerHTML=untrustedString,blockedTags.forEach((blockedTag=>{const getElementsToRemove=documentFragment.querySelectorAll(blockedTag);for(let elementIndex=getElementsToRemove.length-1;elementIndex>=0;elementIndex--){const element=getElementsToRemove[elementIndex];element.parentNode?element.parentNode.removeChild(element):documentFragment.removeChild(element);const childElements=getElementChildren(element);for(let childIndex=0;childIndex<childElements.length;childIndex++)sanitizeElement(childElements[childIndex])}}));const dfChildren=getElementChildren(documentFragment);for(let childIndex=0;childIndex<dfChildren.length;childIndex++)sanitizeElement(dfChildren[childIndex]);const fragmentDiv=document.createElement("div");fragmentDiv.appendChild(documentFragment);const getInnerDiv=fragmentDiv.querySelector("div");return null!==getInnerDiv?getInnerDiv.innerHTML:fragmentDiv.innerHTML}catch(err){return console.error(err),""}},sanitizeElement=element=>{if(element.nodeType&&1!==element.nodeType)return;if("undefined"!=typeof NamedNodeMap&&!(element.attributes instanceof NamedNodeMap))return void element.remove();for(let i=element.attributes.length-1;i>=0;i--){const attribute=element.attributes.item(i),attributeName=attribute.name;if(!allowedAttributes.includes(attributeName.toLowerCase())){element.removeAttribute(attributeName);continue}const attributeValue=attribute.value,propertyValue=element[attributeName];(null!=attributeValue&&attributeValue.toLowerCase().includes("javascript:")||null!=propertyValue&&propertyValue.toLowerCase().includes("javascript:"))&&element.removeAttribute(attributeName)}const childElements=getElementChildren(element);for(let i=0;i<childElements.length;i++)sanitizeElement(childElements[i])},getElementChildren=el=>null!=el.children?el.children:el.childNodes,isSanitizerEnabled=()=>{var _a;const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;return!config||(config.get?config.get("sanitizerEnabled",!0):!0===config.sanitizerEnabled||void 0===config.sanitizerEnabled)},allowedAttributes=["class","id","href","src","name","slot"],blockedTags=["script","style","iframe","meta","link","object","embed"];class IonicSafeString{constructor(value){this.value=value}}},"../../packages/core/dist/esm/ion-loading.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_loading:()=>Loading});var _index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-4aef4473.js"),_index_bad389d4_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/core/dist/esm/index-bad389d4.js"),_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../packages/core/dist/esm/helpers-b14eeb70.js"),_lock_controller_873b21a6_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/dist/esm/lock-controller-873b21a6.js"),_overlays_167c5f7e_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/overlays-167c5f7e.js"),_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../packages/core/dist/esm/theme-516b22d6.js"),_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/ionic-global-a9e3465e.js"),_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/animation-aa17f0ca.js");__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js"),__webpack_require__("../../packages/core/dist/esm/hardware-back-button-9f2323c3.js"),__webpack_require__("../../packages/core/dist/esm/gesture-controller-a29626f0.js");const iosEnterAnimation=baseEl=>{const baseAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)(),backdropAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)(),wrapperAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation,wrapperAnimation])},iosLeaveAnimation=baseEl=>{const baseAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)(),backdropAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)(),wrapperAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation,wrapperAnimation])},mdEnterAnimation=baseEl=>{const baseAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)(),backdropAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)(),wrapperAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation,wrapperAnimation])},mdLeaveAnimation=baseEl=>{const baseAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)(),backdropAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)(),wrapperAnimation=(0,_animation_aa17f0ca_js__WEBPACK_IMPORTED_MODULE_3__.c)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation,wrapperAnimation])},Loading=class{constructor(hostRef){(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.didPresent=(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionLoadingDidPresent",7),this.willPresent=(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionLoadingWillPresent",7),this.willDismiss=(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionLoadingWillDismiss",7),this.didDismiss=(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionLoadingDidDismiss",7),this.didPresentShorthand=(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"didPresent",7),this.willPresentShorthand=(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"willPresent",7),this.willDismissShorthand=(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"willDismiss",7),this.didDismissShorthand=(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"didDismiss",7),this.delegateController=(0,_overlays_167c5f7e_js__WEBPACK_IMPORTED_MODULE_1__.c)(this),this.lockController=(0,_lock_controller_873b21a6_js__WEBPACK_IMPORTED_MODULE_7__.c)(),this.triggerController=(0,_overlays_167c5f7e_js__WEBPACK_IMPORTED_MODULE_1__.a)(),this.customHTMLEnabled=_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_2__.c.get("innerHTMLTemplatesEnabled",_index_bad389d4_js__WEBPACK_IMPORTED_MODULE_8__.E),this.presented=!1,this.onBackdropTap=()=>{this.dismiss(void 0,_overlays_167c5f7e_js__WEBPACK_IMPORTED_MODULE_1__.B)},this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.message=void 0,this.cssClass=void 0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.spinner=void 0,this.translucent=!1,this.animated=!0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0}onIsOpenChange(newValue,oldValue){!0===newValue&&!1===oldValue?this.present():!1===newValue&&!0===oldValue&&this.dismiss()}triggerChanged(){const{trigger,el,triggerController}=this;trigger&&triggerController.addClickListener(el,trigger)}connectedCallback(){(0,_overlays_167c5f7e_js__WEBPACK_IMPORTED_MODULE_1__.p)(this.el),this.triggerChanged()}componentWillLoad(){var _a;if(void 0===this.spinner){const mode=(0,_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_2__.g)(this);this.spinner=_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_2__.c.get("loadingSpinner",_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_2__.c.get("spinner","ios"===mode?"lines":"crescent"))}(null===(_a=this.htmlAttributes)||void 0===_a?void 0:_a.id)||(0,_overlays_167c5f7e_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.el)}componentDidLoad(){!0===this.isOpen&&(0,_helpers_b14eeb70_js__WEBPACK_IMPORTED_MODULE_9__.r)((()=>this.present())),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}async present(){const unlock=await this.lockController.lock();await this.delegateController.attachViewToDom(),await(0,_overlays_167c5f7e_js__WEBPACK_IMPORTED_MODULE_1__.b)(this,"loadingEnter",iosEnterAnimation,mdEnterAnimation),this.duration>0&&(this.durationTimeout=setTimeout((()=>this.dismiss()),this.duration+10)),unlock()}async dismiss(data,role){const unlock=await this.lockController.lock();this.durationTimeout&&clearTimeout(this.durationTimeout);const dismissed=await(0,_overlays_167c5f7e_js__WEBPACK_IMPORTED_MODULE_1__.d)(this,data,role,"loadingLeave",iosLeaveAnimation,mdLeaveAnimation);return dismissed&&this.delegateController.removeViewFromDom(),unlock(),dismissed}onDidDismiss(){return(0,_overlays_167c5f7e_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return(0,_overlays_167c5f7e_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.el,"ionLoadingWillDismiss")}renderLoadingMessage(msgId){const{customHTMLEnabled,message}=this;return customHTMLEnabled?(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"loading-content",id:msgId,innerHTML:(0,_index_bad389d4_js__WEBPACK_IMPORTED_MODULE_8__.s)(message)}):(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"loading-content",id:msgId},message)}render(){const{message,spinner,htmlAttributes,overlayIndex}=this,mode=(0,_ionic_global_a9e3465e_js__WEBPACK_IMPORTED_MODULE_2__.g)(this),msgId=`loading-${overlayIndex}-msg`,ariaLabelledBy=void 0!==message?msgId:null;return(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.H,Object.assign({key:"d97f536b7f443ea19a2bbf2dcbc7f546b8e0a092",role:"dialog","aria-modal":"true","aria-labelledby":ariaLabelledBy,tabindex:"-1"},htmlAttributes,{style:{zIndex:`${4e4+this.overlayIndex}`},onIonBackdropTap:this.onBackdropTap,class:Object.assign(Object.assign({},(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_10__.g)(this.cssClass)),{[mode]:!0,"overlay-hidden":!0,"loading-translucent":this.translucent})}),(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-backdrop",{key:"6cd39bd7912fd080ab59d041644054c96d238ea9",visible:this.showBackdrop,tappable:this.backdropDismiss}),(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"c14ca5a9308844f11bcb010257e15208a75b39bc",tabindex:"0","aria-hidden":"true"}),(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"118bceefa8e1cf8b225a858f224e6d919cf03c26",class:"loading-wrapper ion-overlay-wrapper"},spinner&&(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"490d6e8ae4433835fe273162d7b90deab944fb39",class:"loading-spinner"},(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-spinner",{key:"c5cf6549c43df4cb23814b3e62ec4d9e7ea2b64f",name:spinner,"aria-hidden":"true"})),void 0!==message&&this.renderLoadingMessage(msgId)),(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"2b888362122d3b66b0492d53b0c21bd6a2a97501",tabindex:"0","aria-hidden":"true"}))}get el(){return(0,_index_4aef4473_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}};Loading.style={ios:".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;touch-action:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:flex;align-items:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, var(--ion-background-color-step-100, #f9f9f9)));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:0.875rem}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px;padding-top:24px;padding-bottom:24px}@supports (backdrop-filter: blur(0)){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{-webkit-margin-start:16px;margin-inline-start:16px}",md:".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;touch-action:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:flex;align-items:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #0054e9);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));font-size:0.875rem}.loading-wrapper.sc-ion-loading-md{border-radius:2px;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:24px;padding-bottom:24px;box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{-webkit-margin-start:16px;margin-inline-start:16px}"}},"../../packages/core/dist/esm/lock-controller-873b21a6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createLockController});const createLockController=()=>{let waitPromise;return{lock:async()=>{const p=waitPromise;let resolve;return waitPromise=new Promise((r=>resolve=r)),void 0!==p&&await p,resolve}}}}}]);
/*! For license information please see 6638.77e3e4a7.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[6638],{"../../packages/core/dist/esm/index-9ebe46bd.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>ENABLE_HTML_CONTENT_DEFAULT,s:()=>sanitizeDOMString});const ENABLE_HTML_CONTENT_DEFAULT=!1,sanitizeDOMString=untrustedString=>{try{if(untrustedString instanceof IonicSafeString)return untrustedString.value;if(!isSanitizerEnabled()||"string"!=typeof untrustedString||""===untrustedString)return untrustedString;if(untrustedString.includes("onload="))return"";const documentFragment=document.createDocumentFragment(),workingDiv=document.createElement("div");documentFragment.appendChild(workingDiv),workingDiv.innerHTML=untrustedString,blockedTags.forEach((blockedTag=>{const getElementsToRemove=documentFragment.querySelectorAll(blockedTag);for(let elementIndex=getElementsToRemove.length-1;elementIndex>=0;elementIndex--){const element=getElementsToRemove[elementIndex];element.parentNode?element.parentNode.removeChild(element):documentFragment.removeChild(element);const childElements=getElementChildren(element);for(let childIndex=0;childIndex<childElements.length;childIndex++)sanitizeElement(childElements[childIndex])}}));const dfChildren=getElementChildren(documentFragment);for(let childIndex=0;childIndex<dfChildren.length;childIndex++)sanitizeElement(dfChildren[childIndex]);const fragmentDiv=document.createElement("div");fragmentDiv.appendChild(documentFragment);const getInnerDiv=fragmentDiv.querySelector("div");return null!==getInnerDiv?getInnerDiv.innerHTML:fragmentDiv.innerHTML}catch(err){return console.error(err),""}},sanitizeElement=element=>{if(element.nodeType&&1!==element.nodeType)return;if("undefined"!=typeof NamedNodeMap&&!(element.attributes instanceof NamedNodeMap))return void element.remove();for(let i=element.attributes.length-1;i>=0;i--){const attribute=element.attributes.item(i),attributeName=attribute.name;if(!allowedAttributes.includes(attributeName.toLowerCase())){element.removeAttribute(attributeName);continue}const attributeValue=attribute.value,propertyValue=element[attributeName];(null!=attributeValue&&attributeValue.toLowerCase().includes("javascript:")||null!=propertyValue&&propertyValue.toLowerCase().includes("javascript:"))&&element.removeAttribute(attributeName)}const childElements=getElementChildren(element);for(let i=0;i<childElements.length;i++)sanitizeElement(childElements[i])},getElementChildren=el=>null!=el.children?el.children:el.childNodes,isSanitizerEnabled=()=>{var _a;const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;return!config||(config.get?config.get("sanitizerEnabled",!0):!0===config.sanitizerEnabled||void 0===config.sanitizerEnabled)},allowedAttributes=["class","id","href","src","name","slot"],blockedTags=["script","style","iframe","meta","link","object","embed"];class IonicSafeString{constructor(value){this.value=value}}},"../../packages/core/dist/esm/ion-toast.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_toast:()=>Toast});var _index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-5bfedafc.js"),_index_9ebe46bd_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/core/dist/esm/index-9ebe46bd.js"),_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/core/dist/esm/helpers-c59bd181.js"),_lock_controller_b39007aa_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/dist/esm/lock-controller-b39007aa.js"),_index_24e88bd3_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/dist/esm/index-24e88bd3.js"),_overlays_471e598c_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/overlays-471e598c.js"),_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../packages/core/dist/esm/theme-bc7eaa70.js"),_ionic_global_ee9eea2d_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/ionic-global-ee9eea2d.js"),_animation_b47b2621_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/animation-b47b2621.js"),_index_938c089e_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/core/dist/esm/index-938c089e.js");const iosEnterAnimation=(baseEl,opts)=>{const baseAnimation=(0,_animation_b47b2621_js__WEBPACK_IMPORTED_MODULE_3__.c)(),wrapperAnimation=(0,_animation_b47b2621_js__WEBPACK_IMPORTED_MODULE_3__.c)(),{position,top,bottom}=opts,wrapperEl=(0,_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_5__.g)(baseEl).querySelector(".toast-wrapper");switch(wrapperAnimation.addElement(wrapperEl),position){case"top":wrapperAnimation.fromTo("transform","translateY(-100%)",`translateY(${top})`);break;case"middle":const topPosition=Math.floor(baseEl.clientHeight/2-wrapperEl.clientHeight/2);wrapperEl.style.top=`${topPosition}px`,wrapperAnimation.fromTo("opacity",.01,1);break;default:wrapperAnimation.fromTo("transform","translateY(100%)",`translateY(${bottom})`)}return baseAnimation.easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(wrapperAnimation)},iosLeaveAnimation=(baseEl,opts)=>{const baseAnimation=(0,_animation_b47b2621_js__WEBPACK_IMPORTED_MODULE_3__.c)(),wrapperAnimation=(0,_animation_b47b2621_js__WEBPACK_IMPORTED_MODULE_3__.c)(),{position,top,bottom}=opts,wrapperEl=(0,_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_5__.g)(baseEl).querySelector(".toast-wrapper");switch(wrapperAnimation.addElement(wrapperEl),position){case"top":wrapperAnimation.fromTo("transform",`translateY(${top})`,"translateY(-100%)");break;case"middle":wrapperAnimation.fromTo("opacity",.99,0);break;default:wrapperAnimation.fromTo("transform",`translateY(${bottom})`,"translateY(100%)")}return baseAnimation.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(wrapperAnimation)},mdEnterAnimation=(baseEl,opts)=>{const baseAnimation=(0,_animation_b47b2621_js__WEBPACK_IMPORTED_MODULE_3__.c)(),wrapperAnimation=(0,_animation_b47b2621_js__WEBPACK_IMPORTED_MODULE_3__.c)(),{position,top,bottom}=opts,wrapperEl=(0,_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_5__.g)(baseEl).querySelector(".toast-wrapper");switch(wrapperAnimation.addElement(wrapperEl),position){case"top":wrapperEl.style.top=top,wrapperAnimation.fromTo("opacity",.01,1);break;case"middle":const topPosition=Math.floor(baseEl.clientHeight/2-wrapperEl.clientHeight/2);wrapperEl.style.top=`${topPosition}px`,wrapperAnimation.fromTo("opacity",.01,1);break;default:wrapperEl.style.bottom=bottom,wrapperAnimation.fromTo("opacity",.01,1)}return baseAnimation.easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(wrapperAnimation)},mdLeaveAnimation=baseEl=>{const baseAnimation=(0,_animation_b47b2621_js__WEBPACK_IMPORTED_MODULE_3__.c)(),wrapperAnimation=(0,_animation_b47b2621_js__WEBPACK_IMPORTED_MODULE_3__.c)(),wrapperEl=(0,_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_5__.g)(baseEl).querySelector(".toast-wrapper");return wrapperAnimation.addElement(wrapperEl).fromTo("opacity",.99,0),baseAnimation.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(wrapperAnimation)};function getAnimationPosition(position,positionAnchor,mode,toast){let offset;if(offset="md"===mode?8:"top"===position?10:-10,positionAnchor&&_index_938c089e_js__WEBPACK_IMPORTED_MODULE_4__.w){!function warnIfAnchorIsHidden(positionAnchor,toast){null===positionAnchor.offsetParent&&(0,_index_24e88bd3_js__WEBPACK_IMPORTED_MODULE_6__.p)("The positionAnchor element for ion-toast was found in the DOM, but appears to be hidden. This may lead to unexpected positioning of the toast.",toast)}(positionAnchor,toast);const box=positionAnchor.getBoundingClientRect();return"top"===position?offset+=box.bottom:"bottom"===position&&("md"===mode?offset+=_index_938c089e_js__WEBPACK_IMPORTED_MODULE_4__.w.innerHeight-box.top:offset-=_index_938c089e_js__WEBPACK_IMPORTED_MODULE_4__.w.innerHeight-box.top),{top:`${offset}px`,bottom:`${offset}px`}}return{top:`calc(${offset}px + var(--ion-safe-area-top, 0px))`,bottom:"md"===mode?`calc(${offset}px + var(--ion-safe-area-bottom, 0px))`:`calc(${offset}px - var(--ion-safe-area-bottom, 0px))`}}const Toast=class{constructor(hostRef){(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.didPresent=(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionToastDidPresent",7),this.willPresent=(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionToastWillPresent",7),this.willDismiss=(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionToastWillDismiss",7),this.didDismiss=(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionToastDidDismiss",7),this.didPresentShorthand=(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"didPresent",7),this.willPresentShorthand=(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"willPresent",7),this.willDismissShorthand=(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"willDismiss",7),this.didDismissShorthand=(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"didDismiss",7),this.delegateController=(0,_overlays_471e598c_js__WEBPACK_IMPORTED_MODULE_1__.c)(this),this.lockController=(0,_lock_controller_b39007aa_js__WEBPACK_IMPORTED_MODULE_7__.c)(),this.triggerController=(0,_overlays_471e598c_js__WEBPACK_IMPORTED_MODULE_1__.a)(),this.customHTMLEnabled=_ionic_global_ee9eea2d_js__WEBPACK_IMPORTED_MODULE_2__.c.get("innerHTMLTemplatesEnabled",_index_9ebe46bd_js__WEBPACK_IMPORTED_MODULE_8__.E),this.presented=!1,this.dispatchCancelHandler=ev=>{const role=ev.detail.role;if((0,_overlays_471e598c_js__WEBPACK_IMPORTED_MODULE_1__.i)(role)){const cancelButton=this.getButtons().find((b=>"cancel"===b.role));this.callButtonHandler(cancelButton)}},this.revealContentToScreenReader=!1,this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.color=void 0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.cssClass=void 0,this.duration=_ionic_global_ee9eea2d_js__WEBPACK_IMPORTED_MODULE_2__.c.getNumber("toastDuration",0),this.header=void 0,this.layout="baseline",this.message=void 0,this.keyboardClose=!1,this.position="bottom",this.positionAnchor=void 0,this.buttons=void 0,this.translucent=!1,this.animated=!0,this.icon=void 0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0}onIsOpenChange(newValue,oldValue){!0===newValue&&!1===oldValue?this.present():!1===newValue&&!0===oldValue&&this.dismiss()}triggerChanged(){const{trigger,el,triggerController}=this;trigger&&triggerController.addClickListener(el,trigger)}connectedCallback(){(0,_overlays_471e598c_js__WEBPACK_IMPORTED_MODULE_1__.p)(this.el),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){(0,_overlays_471e598c_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.el)}componentDidLoad(){!0===this.isOpen&&(0,_helpers_c59bd181_js__WEBPACK_IMPORTED_MODULE_5__.r)((()=>this.present()))}async present(){const unlock=await this.lockController.lock();await this.delegateController.attachViewToDom();const{el,position}=this,animationPosition=getAnimationPosition(position,this.getAnchorElement(),(0,_ionic_global_ee9eea2d_js__WEBPACK_IMPORTED_MODULE_2__.g)(this),el);this.lastPresentedPosition=animationPosition,await(0,_overlays_471e598c_js__WEBPACK_IMPORTED_MODULE_1__.b)(this,"toastEnter",iosEnterAnimation,mdEnterAnimation,{position,top:animationPosition.top,bottom:animationPosition.bottom}),this.revealContentToScreenReader=!0,this.duration>0&&(this.durationTimeout=setTimeout((()=>this.dismiss(void 0,"timeout")),this.duration)),unlock()}async dismiss(data,role){var _a,_b;const unlock=await this.lockController.lock(),{durationTimeout,position,lastPresentedPosition}=this;durationTimeout&&clearTimeout(durationTimeout);const dismissed=await(0,_overlays_471e598c_js__WEBPACK_IMPORTED_MODULE_1__.d)(this,data,role,"toastLeave",iosLeaveAnimation,mdLeaveAnimation,{position,top:null!==(_a=null==lastPresentedPosition?void 0:lastPresentedPosition.top)&&void 0!==_a?_a:"",bottom:null!==(_b=null==lastPresentedPosition?void 0:lastPresentedPosition.bottom)&&void 0!==_b?_b:""});return dismissed&&(this.delegateController.removeViewFromDom(),this.revealContentToScreenReader=!1),this.lastPresentedPosition=void 0,unlock(),dismissed}onDidDismiss(){return(0,_overlays_471e598c_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.el,"ionToastDidDismiss")}onWillDismiss(){return(0,_overlays_471e598c_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.el,"ionToastWillDismiss")}getButtons(){return this.buttons?this.buttons.map((b=>"string"==typeof b?{text:b}:b)):[]}getAnchorElement(){const{position,positionAnchor,el}=this;if(void 0!==positionAnchor)if("middle"!==position||void 0===positionAnchor){if("string"==typeof positionAnchor){const foundEl=document.getElementById(positionAnchor);return null===foundEl?void(0,_index_24e88bd3_js__WEBPACK_IMPORTED_MODULE_6__.p)(`An anchor element with an ID of "${positionAnchor}" was not found in the DOM.`,el):foundEl}if(positionAnchor instanceof HTMLElement)return positionAnchor;(0,_index_24e88bd3_js__WEBPACK_IMPORTED_MODULE_6__.p)("Invalid positionAnchor value:",positionAnchor,el)}else(0,_index_24e88bd3_js__WEBPACK_IMPORTED_MODULE_6__.p)('The positionAnchor property is ignored when using position="middle".',this.el)}async buttonClick(button){const role=button.role;if((0,_overlays_471e598c_js__WEBPACK_IMPORTED_MODULE_1__.i)(role))return this.dismiss(void 0,role);return await this.callButtonHandler(button)?this.dismiss(void 0,role):Promise.resolve()}async callButtonHandler(button){if(null==button?void 0:button.handler)try{if(!1===await(0,_overlays_471e598c_js__WEBPACK_IMPORTED_MODULE_1__.h)(button.handler))return!1}catch(e){console.error(e)}return!0}renderButtons(buttons,side){if(0===buttons.length)return;const mode=(0,_ionic_global_ee9eea2d_js__WEBPACK_IMPORTED_MODULE_2__.g)(this),buttonGroupsClasses={"toast-button-group":!0,[`toast-button-group-${side}`]:!0};return(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:buttonGroupsClasses},buttons.map((b=>(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",Object.assign({},b.htmlAttributes,{type:"button",class:buttonClass(b),tabIndex:0,onClick:()=>this.buttonClick(b),part:buttonPart(b)}),(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"toast-button-inner"},b.icon&&(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-icon",{"aria-hidden":"true",icon:b.icon,slot:void 0===b.text?"icon-only":void 0,class:"toast-button-icon"}),b.text),"md"===mode&&(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-ripple-effect",{type:void 0!==b.icon&&void 0===b.text?"unbounded":"bounded"})))))}renderToastMessage(key,ariaHidden=null){const{customHTMLEnabled,message}=this;return customHTMLEnabled?(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key,"aria-hidden":ariaHidden,class:"toast-message",part:"message",innerHTML:(0,_index_9ebe46bd_js__WEBPACK_IMPORTED_MODULE_8__.s)(message)}):(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key,"aria-hidden":ariaHidden,class:"toast-message",part:"message"},message)}renderHeader(key,ariaHidden=null){return(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key,class:"toast-header","aria-hidden":ariaHidden,part:"header"},this.header)}render(){const{layout,el,revealContentToScreenReader,header,message}=this,allButtons=this.getButtons(),startButtons=allButtons.filter((b=>"start"===b.side)),endButtons=allButtons.filter((b=>"start"!==b.side)),mode=(0,_ionic_global_ee9eea2d_js__WEBPACK_IMPORTED_MODULE_2__.g)(this),wrapperClass={"toast-wrapper":!0,[`toast-${this.position}`]:!0,[`toast-layout-${layout}`]:!0};return"stacked"===layout&&startButtons.length>0&&endButtons.length>0&&(0,_index_24e88bd3_js__WEBPACK_IMPORTED_MODULE_6__.p)("This toast is using start and end buttons with the stacked toast layout. We recommend following the best practice of using either start or end buttons with the stacked toast layout.",el),(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.H,Object.assign({tabindex:"-1"},this.htmlAttributes,{style:{zIndex:`${6e4+this.overlayIndex}`},class:(0,_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_9__.c)(this.color,Object.assign(Object.assign({[mode]:!0},(0,_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_9__.g)(this.cssClass)),{"overlay-hidden":!0,"toast-translucent":this.translucent})),onIonToastWillDismiss:this.dispatchCancelHandler}),(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:wrapperClass},(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"toast-container",part:"container"},this.renderButtons(startButtons,"start"),void 0!==this.icon&&(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-icon",{class:"toast-icon",part:"icon",icon:this.icon,lazy:!1,"aria-hidden":"true"}),(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"toast-content",role:"status","aria-atomic":"true","aria-live":"polite"},!revealContentToScreenReader&&void 0!==header&&this.renderHeader("oldHeader","true"),!revealContentToScreenReader&&void 0!==message&&this.renderToastMessage("oldMessage","true"),revealContentToScreenReader&&void 0!==header&&this.renderHeader("header"),revealContentToScreenReader&&void 0!==message&&this.renderToastMessage("header")),this.renderButtons(endButtons,"end"))))}get el(){return(0,_index_5bfedafc_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},buttonClass=button=>Object.assign({"toast-button":!0,"toast-button-icon-only":void 0!==button.icon&&void 0===button.text,[`toast-button-${button.role}`]:void 0!==button.role,"ion-focusable":!0,"ion-activatable":!0},(0,_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_9__.g)(button.cssClass)),buttonPart=button=>(0,_overlays_471e598c_js__WEBPACK_IMPORTED_MODULE_1__.i)(button.role)?"button cancel":"button";Toast.style={ios:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(:dir(rtl)){left:unset;right:unset;right:0}}}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-shadow:var(--box-shadow)}@supports (inset-inline-start: 0){.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}}@supports not (inset-inline-start: 0){.toast-wrapper{left:var(--start);right:var(--end)}:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}@supports selector(:dir(rtl)){.toast-wrapper:dir(rtl){left:unset;right:unset;left:var(--end);right:var(--start)}}}.toast-container{display:flex;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{flex-wrap:wrap}.toast-layout-baseline .toast-content{display:flex;flex:1;flex-direction:column;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{flex:1;white-space:var(--white-space)}.toast-button-group{display:flex}.toast-layout-stacked .toast-button-group{justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:flex;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--max-height:478px;--start:10px;--end:10px;font-size:clamp(14px, 0.875rem, 43.4px)}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports (backdrop-filter: blur(0)){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);backdrop-filter:saturate(180%) blur(20px)}:host(.ion-color.toast-translucent) .toast-wrapper{background:rgba(var(--ion-color-base-rgb), 0.8)}}.toast-wrapper.toast-top{transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{transform:translate3d(0,  100%,  0);bottom:0}.toast-content{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:15px;padding-bottom:15px}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;min-height:44px;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:clamp(17px, 1.0625rem, 21.998px);font-weight:500;overflow:hidden}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",md:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(:dir(rtl)){left:unset;right:unset;right:0}}}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-shadow:var(--box-shadow)}@supports (inset-inline-start: 0){.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}}@supports not (inset-inline-start: 0){.toast-wrapper{left:var(--start);right:var(--end)}:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}@supports selector(:dir(rtl)){.toast-wrapper:dir(rtl){left:unset;right:unset;left:var(--end);right:var(--start)}}}.toast-container{display:flex;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{flex-wrap:wrap}.toast-layout-baseline .toast-content{display:flex;flex:1;flex-direction:column;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{flex:1;white-space:var(--white-space)}.toast-button-group{display:flex}.toast-layout-stacked .toast-button-group{justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:flex;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:0.875rem}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}.toast-content{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:14px;padding-bottom:14px}.toast-header{margin-bottom:2px;font-weight:500;line-height:1.25rem}.toast-message{line-height:1.25rem}.toast-layout-baseline .toast-button-group-start{-webkit-margin-start:8px;margin-inline-start:8px}.toast-layout-stacked .toast-button-group-start{-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px}.toast-layout-baseline .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px}.toast-layout-stacked .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px;margin-bottom:8px}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:0.875rem;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}"}},"../../packages/core/dist/esm/lock-controller-b39007aa.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createLockController});const createLockController=()=>{let waitPromise;return{lock:async()=>{const p=waitPromise;let resolve;return waitPromise=new Promise((r=>resolve=r)),void 0!==p&&await p,resolve}}}},"../../packages/core/dist/esm/theme-bc7eaa70.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
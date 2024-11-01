/*! For license information please see 9597.b48b85db.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[9597],{"../../packages/core/dist/esm/ion-picker.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_picker:()=>Picker});var _index_03927578_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-03927578.js"),_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../packages/core/dist/esm/helpers-079c01eb.js"),_lock_controller_873b21a6_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/dist/esm/lock-controller-873b21a6.js"),_overlays_9c065d0d_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/overlays-9c065d0d.js"),_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../packages/core/dist/esm/theme-516b22d6.js"),_ionic_global_52654a6b_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/ionic-global-52654a6b.js"),_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/animation-022a9434.js");__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js"),__webpack_require__("../../packages/core/dist/esm/hardware-back-button-3e887a79.js");const iosEnterAnimation=baseEl=>{const baseAnimation=(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_3__.c)(),backdropAnimation=(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_3__.c)(),wrapperAnimation=(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_3__.c)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation.addElement(baseEl.querySelector(".picker-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),baseAnimation.addElement(baseEl).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([backdropAnimation,wrapperAnimation])},iosLeaveAnimation=baseEl=>{const baseAnimation=(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_3__.c)(),backdropAnimation=(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_3__.c)(),wrapperAnimation=(0,_animation_022a9434_js__WEBPACK_IMPORTED_MODULE_3__.c)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",.01),wrapperAnimation.addElement(baseEl.querySelector(".picker-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),baseAnimation.addElement(baseEl).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([backdropAnimation,wrapperAnimation])},Picker=class{constructor(hostRef){(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.didPresent=(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionPickerDidPresent",7),this.willPresent=(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionPickerWillPresent",7),this.willDismiss=(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionPickerWillDismiss",7),this.didDismiss=(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionPickerDidDismiss",7),this.didPresentShorthand=(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"didPresent",7),this.willPresentShorthand=(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"willPresent",7),this.willDismissShorthand=(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"willDismiss",7),this.didDismissShorthand=(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"didDismiss",7),this.delegateController=(0,_overlays_9c065d0d_js__WEBPACK_IMPORTED_MODULE_1__.c)(this),this.lockController=(0,_lock_controller_873b21a6_js__WEBPACK_IMPORTED_MODULE_6__.c)(),this.triggerController=(0,_overlays_9c065d0d_js__WEBPACK_IMPORTED_MODULE_1__.a)(),this.onBackdropTap=()=>{this.dismiss(void 0,_overlays_9c065d0d_js__WEBPACK_IMPORTED_MODULE_1__.B)},this.dispatchCancelHandler=ev=>{const role=ev.detail.role;if((0,_overlays_9c065d0d_js__WEBPACK_IMPORTED_MODULE_1__.i)(role)){const cancelButton=this.buttons.find((b=>"cancel"===b.role));this.callButtonHandler(cancelButton)}},this.presented=!1,this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.buttons=[],this.columns=[],this.cssClass=void 0,this.duration=0,this.showBackdrop=!0,this.backdropDismiss=!0,this.animated=!0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0}onIsOpenChange(newValue,oldValue){!0===newValue&&!1===oldValue?this.present():!1===newValue&&!0===oldValue&&this.dismiss()}triggerChanged(){const{trigger,el,triggerController}=this;trigger&&triggerController.addClickListener(el,trigger)}connectedCallback(){(0,_overlays_9c065d0d_js__WEBPACK_IMPORTED_MODULE_1__.p)(this.el),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){(0,_overlays_9c065d0d_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.el)}componentDidLoad(){!0===this.isOpen&&(0,_helpers_079c01eb_js__WEBPACK_IMPORTED_MODULE_7__.r)((()=>this.present())),this.triggerChanged()}async present(){const unlock=await this.lockController.lock();await this.delegateController.attachViewToDom(),await(0,_overlays_9c065d0d_js__WEBPACK_IMPORTED_MODULE_1__.b)(this,"pickerEnter",iosEnterAnimation,iosEnterAnimation,void 0),this.duration>0&&(this.durationTimeout=setTimeout((()=>this.dismiss()),this.duration)),unlock()}async dismiss(data,role){const unlock=await this.lockController.lock();this.durationTimeout&&clearTimeout(this.durationTimeout);const dismissed=await(0,_overlays_9c065d0d_js__WEBPACK_IMPORTED_MODULE_1__.d)(this,data,role,"pickerLeave",iosLeaveAnimation,iosLeaveAnimation);return dismissed&&this.delegateController.removeViewFromDom(),unlock(),dismissed}onDidDismiss(){return(0,_overlays_9c065d0d_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.el,"ionPickerDidDismiss")}onWillDismiss(){return(0,_overlays_9c065d0d_js__WEBPACK_IMPORTED_MODULE_1__.e)(this.el,"ionPickerWillDismiss")}getColumn(name){return Promise.resolve(this.columns.find((column=>column.name===name)))}async buttonClick(button){const role=button.role;if((0,_overlays_9c065d0d_js__WEBPACK_IMPORTED_MODULE_1__.i)(role))return this.dismiss(void 0,role);return await this.callButtonHandler(button)?this.dismiss(this.getSelected(),button.role):Promise.resolve()}async callButtonHandler(button){if(button){if(!1===await(0,_overlays_9c065d0d_js__WEBPACK_IMPORTED_MODULE_1__.f)(button.handler,this.getSelected()))return!1}return!0}getSelected(){const selected={};return this.columns.forEach(((col,index)=>{const selectedColumn=void 0!==col.selectedIndex?col.options[col.selectedIndex]:void 0;selected[col.name]={text:selectedColumn?selectedColumn.text:void 0,value:selectedColumn?selectedColumn.value:void 0,columnIndex:index}})),selected}render(){const{htmlAttributes}=this,mode=(0,_ionic_global_52654a6b_js__WEBPACK_IMPORTED_MODULE_2__.g)(this);return(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.H,Object.assign({key:"eb5f91ea74fb11daa6942f779ef461742cad9ecb","aria-modal":"true",tabindex:"-1"},htmlAttributes,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[mode]:!0,[`picker-${mode}`]:!0,"overlay-hidden":!0},(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_8__.g)(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonPickerWillDismiss:this.dispatchCancelHandler}),(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-backdrop",{key:"7ea872d939e62f14129fff15334b2822ad2360c9",visible:this.showBackdrop,tappable:this.backdropDismiss}),(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"2d77c225091eacab0207e28c96b966122afafef0",tabindex:"0"}),(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"630d21e0c60ad97b71462cdc540858bb6ced0b8f",class:"picker-wrapper ion-overlay-wrapper",role:"dialog"},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"fa8553ec8d2ce8bf93e16e02334b6475cb51b5d4",class:"picker-toolbar"},this.buttons.map((b=>(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:buttonWrapperClass(b)},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{type:"button",onClick:()=>this.buttonClick(b),class:buttonClass(b)},b.text))))),(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"177d1bcbd0ce38f16d9c936295a917fb981d02d7",class:"picker-columns"},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"be99b6e0279c210ef91a88ccc81acc7d37917a53",class:"picker-above-highlight"}),this.presented&&this.columns.map((c=>(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-picker-column",{col:c}))),(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"b36b21e8133b59e873e1d3447a1279f1b971c854",class:"picker-below-highlight"}))),(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"17cea6dd24dbb0a08073ca4a84bfe027eb24833d",tabindex:"0"}))}get el(){return(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},buttonWrapperClass=button=>({[`picker-toolbar-${button.role}`]:void 0!==button.role,"picker-toolbar-button":!0}),buttonClass=button=>Object.assign({"picker-button":!0,"ion-activatable":!0},(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_8__.g)(button.cssClass));Picker.style={ios:".sc-ion-picker-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;user-select:none;z-index:1001}@supports (inset-inline-start: 0){.sc-ion-picker-ios-h{inset-inline-start:0}}@supports not (inset-inline-start: 0){.sc-ion-picker-ios-h{left:0}[dir=rtl].sc-ion-picker-ios-h,[dir=rtl] .sc-ion-picker-ios-h{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.sc-ion-picker-ios-h:dir(rtl){left:unset;right:unset;right:0}}}.overlay-hidden.sc-ion-picker-ios-h{display:none}.picker-wrapper.sc-ion-picker-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;transform:translate3d(0,  100%,  0);display:flex;position:absolute;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-ios:active,.picker-button.sc-ion-picker-ios:focus{outline:none}.picker-columns.sc-ion-picker-ios{display:flex;position:relative;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-ios,.picker-below-highlight.sc-ion-picker-ios{display:none;pointer-events:none}.sc-ion-picker-ios-h{--background:var(--ion-background-color, #fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-ios{display:flex;height:44px;border-bottom:0.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-ios{flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-ios:last-child .picker-button.sc-ion-picker-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-ios:first-child{font-weight:normal;text-align:start}.picker-button.sc-ion-picker-ios,.picker-button.ion-activated.sc-ion-picker-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3880ff);font-size:16px}.picker-columns.sc-ion-picker-ios{height:215px;perspective:1000px}.picker-above-highlight.sc-ion-picker-ios{top:0;transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:10}@supports (inset-inline-start: 0){.picker-above-highlight.sc-ion-picker-ios{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-above-highlight.sc-ion-picker-ios{left:0}[dir=rtl].sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}[dir=rtl].sc-ion-picker-ios .picker-above-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-above-highlight.sc-ion-picker-ios:dir(rtl){left:unset;right:unset;right:0}}}.picker-below-highlight.sc-ion-picker-ios{top:115px;transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:11}@supports (inset-inline-start: 0){.picker-below-highlight.sc-ion-picker-ios{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-below-highlight.sc-ion-picker-ios{left:0}[dir=rtl].sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}[dir=rtl].sc-ion-picker-ios .picker-below-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-below-highlight.sc-ion-picker-ios:dir(rtl){left:unset;right:unset;right:0}}}",md:".sc-ion-picker-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;user-select:none;z-index:1001}@supports (inset-inline-start: 0){.sc-ion-picker-md-h{inset-inline-start:0}}@supports not (inset-inline-start: 0){.sc-ion-picker-md-h{left:0}[dir=rtl].sc-ion-picker-md-h,[dir=rtl] .sc-ion-picker-md-h{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.sc-ion-picker-md-h:dir(rtl){left:unset;right:unset;right:0}}}.overlay-hidden.sc-ion-picker-md-h{display:none}.picker-wrapper.sc-ion-picker-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;transform:translate3d(0,  100%,  0);display:flex;position:absolute;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-md:active,.picker-button.sc-ion-picker-md:focus{outline:none}.picker-columns.sc-ion-picker-md{display:flex;position:relative;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-md,.picker-below-highlight.sc-ion-picker-md{display:none;pointer-events:none}.sc-ion-picker-md-h{--background:var(--ion-background-color, #fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-md{display:flex;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-md,.picker-button.ion-activated.sc-ion-picker-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3880ff);font-size:14px;font-weight:500;text-transform:uppercase;box-shadow:none}.picker-columns.sc-ion-picker-md{height:216px;perspective:1800px}.picker-above-highlight.sc-ion-picker-md{top:0;transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:linear-gradient(to bottom, var(--ion-background-color, #fff) 20%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:10}@supports (inset-inline-start: 0){.picker-above-highlight.sc-ion-picker-md{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-above-highlight.sc-ion-picker-md{left:0}[dir=rtl].sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}[dir=rtl].sc-ion-picker-md .picker-above-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-above-highlight.sc-ion-picker-md:dir(rtl){left:unset;right:unset;right:0}}}.picker-below-highlight.sc-ion-picker-md{top:115px;transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:linear-gradient(to top, var(--ion-background-color, #fff) 30%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:11}@supports (inset-inline-start: 0){.picker-below-highlight.sc-ion-picker-md{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-below-highlight.sc-ion-picker-md{left:0}[dir=rtl].sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}[dir=rtl].sc-ion-picker-md .picker-below-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-below-highlight.sc-ion-picker-md:dir(rtl){left:unset;right:unset;right:0}}}"}},"../../packages/core/dist/esm/lock-controller-873b21a6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createLockController});const createLockController=()=>{let waitPromise;return{lock:async()=>{const p=waitPromise;let resolve;return waitPromise=new Promise((r=>resolve=r)),void 0!==p&&await p,resolve}}}},"../../packages/core/dist/esm/theme-516b22d6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
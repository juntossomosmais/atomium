import{r as h,c as s,a as r,b as l,h as a,H as m,g}from"./index-CGLWQT_g.js";import{E as f,s as u}from"./index-bad389d4-DH9g3qSj.js";import{r as b}from"./helpers-b14eeb70-DAoIUSfU.js";import{c as y}from"./lock-controller-873b21a6-CpJsitdv.js";import{c as k,a as v,B as x,p as w,s as C,b as A,d as L,e as c}from"./overlays-3b0bc4e1-C5kQcYcH.js";import{g as D}from"./theme-516b22d6-DD5XIICl.js";import{c as o}from"./animation-aa17f0ca-d4Boy65i.js";import"./vue.esm-bundler-D6ApT1Ci.js";import"./iframe-C3FYooTk.js";import"../sb-preview/runtime.js";import"./index-d9a82e80-B2PaWDFh.js";import"./hardware-back-button-597914ed-BusNQz8E.js";import"./framework-delegate-c7fe8edd-BHSPv_Eg.js";import"./gesture-controller-a29626f0-CKNmfd8r.js";import"./index-f5dbb989-By3l89LO.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const T=i=>{const e=o(),t=o(),n=o();return t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),n.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),e.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,n])};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const S=i=>{const e=o(),t=o(),n=o();return t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),e.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,n])};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const E=i=>{const e=o(),t=o(),n=o();return t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),n.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),e.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,n])};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const I=i=>{const e=o(),t=o(),n=o();return t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),e.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,n])},M=".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;touch-action:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:flex;align-items:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, var(--ion-background-color-step-100, #f9f9f9)));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:0.875rem}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px;padding-top:24px;padding-bottom:24px}@supports (backdrop-filter: blur(0)){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{-webkit-margin-start:16px;margin-inline-start:16px}",O=M,z=".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;touch-action:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:flex;align-items:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #0054e9);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));font-size:0.875rem}.loading-wrapper.sc-ion-loading-md{border-radius:2px;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:24px;padding-bottom:24px;box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{-webkit-margin-start:16px;margin-inline-start:16px}",B=z,P=class{constructor(i){h(this,i),this.didPresent=s(this,"ionLoadingDidPresent",7),this.willPresent=s(this,"ionLoadingWillPresent",7),this.willDismiss=s(this,"ionLoadingWillDismiss",7),this.didDismiss=s(this,"ionLoadingDidDismiss",7),this.didPresentShorthand=s(this,"didPresent",7),this.willPresentShorthand=s(this,"willPresent",7),this.willDismissShorthand=s(this,"willDismiss",7),this.didDismissShorthand=s(this,"didDismiss",7),this.delegateController=k(this),this.lockController=y(),this.triggerController=v(),this.customHTMLEnabled=r.get("innerHTMLTemplatesEnabled",f),this.presented=!1,this.onBackdropTap=()=>{this.dismiss(void 0,x)},this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.message=void 0,this.cssClass=void 0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.spinner=void 0,this.translucent=!1,this.animated=!0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0}onIsOpenChange(i,e){i===!0&&e===!1?this.present():i===!1&&e===!0&&this.dismiss()}triggerChanged(){const{trigger:i,el:e,triggerController:t}=this;i&&t.addClickListener(e,i)}connectedCallback(){w(this.el),this.triggerChanged()}componentWillLoad(){var i;if(this.spinner===void 0){const e=l(this);this.spinner=r.get("loadingSpinner",r.get("spinner",e==="ios"?"lines":"crescent"))}!((i=this.htmlAttributes)===null||i===void 0)&&i.id||C(this.el)}componentDidLoad(){this.isOpen===!0&&b(()=>this.present()),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}async present(){const i=await this.lockController.lock();await this.delegateController.attachViewToDom(),await A(this,"loadingEnter",T,E),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration+10)),i()}async dismiss(i,e){const t=await this.lockController.lock();this.durationTimeout&&clearTimeout(this.durationTimeout);const n=await L(this,i,e,"loadingLeave",S,I);return n&&this.delegateController.removeViewFromDom(),t(),n}onDidDismiss(){return c(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return c(this.el,"ionLoadingWillDismiss")}renderLoadingMessage(i){const{customHTMLEnabled:e,message:t}=this;return e?a("div",{class:"loading-content",id:i,innerHTML:u(t)}):a("div",{class:"loading-content",id:i},t)}render(){const{message:i,spinner:e,htmlAttributes:t,overlayIndex:n}=this,p=l(this),d=`loading-${n}-msg`;return a(m,Object.assign({key:"d97f536b7f443ea19a2bbf2dcbc7f546b8e0a092",role:"dialog","aria-modal":"true","aria-labelledby":i!==void 0?d:null,tabindex:"-1"},t,{style:{zIndex:`${4e4+this.overlayIndex}`},onIonBackdropTap:this.onBackdropTap,class:Object.assign(Object.assign({},D(this.cssClass)),{[p]:!0,"overlay-hidden":!0,"loading-translucent":this.translucent})}),a("ion-backdrop",{key:"6cd39bd7912fd080ab59d041644054c96d238ea9",visible:this.showBackdrop,tappable:this.backdropDismiss}),a("div",{key:"c14ca5a9308844f11bcb010257e15208a75b39bc",tabindex:"0","aria-hidden":"true"}),a("div",{key:"118bceefa8e1cf8b225a858f224e6d919cf03c26",class:"loading-wrapper ion-overlay-wrapper"},e&&a("div",{key:"490d6e8ae4433835fe273162d7b90deab944fb39",class:"loading-spinner"},a("ion-spinner",{key:"c5cf6549c43df4cb23814b3e62ec4d9e7ea2b64f",name:e,"aria-hidden":"true"})),i!==void 0&&this.renderLoadingMessage(d)),a("div",{key:"2b888362122d3b66b0492d53b0c21bd6a2a97501",tabindex:"0","aria-hidden":"true"}))}get el(){return g(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}};P.style={ios:O,md:B};export{P as ion_loading};

import{r as h,c as s,a as r,b as l,h as a,H as m,g}from"./index-DnFqSXHA.js";import{E as f,s as u}from"./index-bad389d4-DH9g3qSj.js";import{r as b}from"./helpers-079c01eb-D592YRe8.js";import{c as y}from"./lock-controller-873b21a6-CpJsitdv.js";import{c as k,a as v,B as w,p as x,s as C,b as A,d as L,e as c}from"./overlays-9c065d0d-xHGR_7AQ.js";import{g as D}from"./theme-516b22d6-DD5XIICl.js";import{c as o}from"./animation-022a9434-BW6ZVdxK.js";import"./vue.esm-bundler-DLYZ4EJx.js";import"./iframe-ZM0WHRJw.js";import"../sb-preview/runtime.js";import"./index-d9a82e80-B2PaWDFh.js";import"./hardware-back-button-3e887a79-Ci3q0goa.js";import"./framework-delegate-bec700a6-1EDJ8Ayl.js";import"./index-f5dbb989-By3l89LO.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const T=i=>{const t=o(),e=o(),n=o();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),n.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,n])};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const S=i=>{const t=o(),e=o(),n=o();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,n])};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const E=i=>{const t=o(),e=o(),n=o();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),n.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,n])};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const I=i=>{const t=o(),e=o(),n=o();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,n])},M=".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;touch-action:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:flex;align-items:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:0.875rem}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px;padding-top:24px;padding-bottom:24px}@supports (backdrop-filter: blur(0)){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{-webkit-margin-start:16px;margin-inline-start:16px}",O=M,z=".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;touch-action:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:flex;align-items:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:0.875rem}.loading-wrapper.sc-ion-loading-md{border-radius:2px;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:24px;padding-bottom:24px;box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{-webkit-margin-start:16px;margin-inline-start:16px}",B=z,P=class{constructor(i){h(this,i),this.didPresent=s(this,"ionLoadingDidPresent",7),this.willPresent=s(this,"ionLoadingWillPresent",7),this.willDismiss=s(this,"ionLoadingWillDismiss",7),this.didDismiss=s(this,"ionLoadingDidDismiss",7),this.didPresentShorthand=s(this,"didPresent",7),this.willPresentShorthand=s(this,"willPresent",7),this.willDismissShorthand=s(this,"willDismiss",7),this.didDismissShorthand=s(this,"didDismiss",7),this.delegateController=k(this),this.lockController=y(),this.triggerController=v(),this.customHTMLEnabled=r.get("innerHTMLTemplatesEnabled",f),this.presented=!1,this.onBackdropTap=()=>{this.dismiss(void 0,w)},this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.message=void 0,this.cssClass=void 0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.spinner=void 0,this.translucent=!1,this.animated=!0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0}onIsOpenChange(i,t){i===!0&&t===!1?this.present():i===!1&&t===!0&&this.dismiss()}triggerChanged(){const{trigger:i,el:t,triggerController:e}=this;i&&e.addClickListener(t,i)}connectedCallback(){x(this.el),this.triggerChanged()}componentWillLoad(){if(this.spinner===void 0){const i=l(this);this.spinner=r.get("loadingSpinner",r.get("spinner",i==="ios"?"lines":"crescent"))}C(this.el)}componentDidLoad(){this.isOpen===!0&&b(()=>this.present()),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}async present(){const i=await this.lockController.lock();await this.delegateController.attachViewToDom(),await A(this,"loadingEnter",T,E),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration+10)),i()}async dismiss(i,t){const e=await this.lockController.lock();this.durationTimeout&&clearTimeout(this.durationTimeout);const n=await L(this,i,t,"loadingLeave",S,I);return n&&this.delegateController.removeViewFromDom(),e(),n}onDidDismiss(){return c(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return c(this.el,"ionLoadingWillDismiss")}renderLoadingMessage(i){const{customHTMLEnabled:t,message:e}=this;return t?a("div",{class:"loading-content",id:i,innerHTML:u(e)}):a("div",{class:"loading-content",id:i},e)}render(){const{message:i,spinner:t,htmlAttributes:e,overlayIndex:n}=this,p=l(this),d=`loading-${n}-msg`;return a(m,Object.assign({key:"e780853dc67b7b4ebd8dd65cadab648e4238c6ee",role:"dialog","aria-modal":"true","aria-labelledby":i!==void 0?d:null,tabindex:"-1"},e,{style:{zIndex:`${4e4+this.overlayIndex}`},onIonBackdropTap:this.onBackdropTap,class:Object.assign(Object.assign({},D(this.cssClass)),{[p]:!0,"overlay-hidden":!0,"loading-translucent":this.translucent})}),a("ion-backdrop",{key:"8cd59ca7bc97b981fd578a526dfe859847e4d392",visible:this.showBackdrop,tappable:this.backdropDismiss}),a("div",{key:"ef392aaf2cb7f6f9cecc685525cce3abc333e800",tabindex:"0"}),a("div",{key:"f1f6df21a7fa6565fe33acb4a5f355b5ec3e65b2",class:"loading-wrapper ion-overlay-wrapper"},t&&a("div",{key:"725cf5a206152885e31ab061b0c466fe1ead0225",class:"loading-spinner"},a("ion-spinner",{key:"5891dc39fa133b71576aec219f552386b202e163",name:t,"aria-hidden":"true"})),i!==void 0&&this.renderLoadingMessage(d)),a("div",{key:"8103269f1181325a507ed1c681f5ef15e40fbc34",tabindex:"0"}))}get el(){return g(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}};P.style={ios:O,md:B};export{P as ion_loading};

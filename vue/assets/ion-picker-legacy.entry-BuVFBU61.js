import{r as g,c as n,b as m,h as r,H as b,g as k}from"./index-DYIAuzzO.js";import{r as u}from"./helpers-b14eeb70-DAoIUSfU.js";import{c as f}from"./lock-controller-873b21a6-CpJsitdv.js";import{p as v}from"./index-f5dbb989-By3l89LO.js";import{c as y,a as w,B as x,i as s,p as C,s as D,b as P,d as I,e as c,j as z}from"./overlays-167c5f7e-EPi11wKl.js";import{g as p}from"./theme-516b22d6-DD5XIICl.js";import{c as a}from"./animation-aa17f0ca-d4Boy65i.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-DzdqkJLJ.js";import"../sb-preview/runtime.js";import"./index-d9a82e80-B2PaWDFh.js";import"./hardware-back-button-9f2323c3-7cu3V7DT.js";import"./framework-delegate-c7fe8edd-BHSPv_Eg.js";import"./gesture-controller-a29626f0-CKNmfd8r.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const d=i=>{const e=a(),t=a(),o=a();return t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o.addElement(i.querySelector(".picker-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),e.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([t,o])};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const l=i=>{const e=a(),t=a(),o=a();return t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",.01),o.addElement(i.querySelector(".picker-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),e.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([t,o])},A=".sc-ion-picker-legacy-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;user-select:none;z-index:1001}.sc-ion-picker-legacy-ios-h{inset-inline-start:0}.overlay-hidden.sc-ion-picker-legacy-ios-h{display:none}.picker-wrapper.sc-ion-picker-legacy-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;transform:translate3d(0,  100%,  0);display:flex;position:absolute;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-legacy-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-legacy-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-legacy-ios:active,.picker-button.sc-ion-picker-legacy-ios:focus{outline:none}.picker-columns.sc-ion-picker-legacy-ios{display:flex;position:relative;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-legacy-ios,.picker-below-highlight.sc-ion-picker-legacy-ios{display:none;pointer-events:none}.sc-ion-picker-legacy-ios-h{--background:var(--ion-background-color, #fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-legacy-ios{display:flex;height:44px;border-bottom:0.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-legacy-ios{flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-legacy-ios:last-child .picker-button.sc-ion-picker-legacy-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-legacy-ios:first-child{font-weight:normal;text-align:start}.picker-button.sc-ion-picker-legacy-ios,.picker-button.ion-activated.sc-ion-picker-legacy-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #0054e9);font-size:16px}.picker-columns.sc-ion-picker-legacy-ios{height:215px;perspective:1000px}.picker-above-highlight.sc-ion-picker-legacy-ios{top:0;transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:10}.picker-above-highlight.sc-ion-picker-legacy-ios{inset-inline-start:0}.picker-below-highlight.sc-ion-picker-legacy-ios{top:115px;transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:11}.picker-below-highlight.sc-ion-picker-legacy-ios{inset-inline-start:0}",S=A,T=".sc-ion-picker-legacy-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;user-select:none;z-index:1001}.sc-ion-picker-legacy-md-h{inset-inline-start:0}.overlay-hidden.sc-ion-picker-legacy-md-h{display:none}.picker-wrapper.sc-ion-picker-legacy-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;transform:translate3d(0,  100%,  0);display:flex;position:absolute;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-legacy-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-legacy-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-legacy-md:active,.picker-button.sc-ion-picker-legacy-md:focus{outline:none}.picker-columns.sc-ion-picker-legacy-md{display:flex;position:relative;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-legacy-md,.picker-below-highlight.sc-ion-picker-legacy-md{display:none;pointer-events:none}.sc-ion-picker-legacy-md-h{--background:var(--ion-background-color, #fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-legacy-md{display:flex;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-legacy-md,.picker-button.ion-activated.sc-ion-picker-legacy-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #0054e9);font-size:14px;font-weight:500;text-transform:uppercase;box-shadow:none}.picker-columns.sc-ion-picker-legacy-md{height:216px;perspective:1800px}.picker-above-highlight.sc-ion-picker-legacy-md{top:0;transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));background:linear-gradient(to bottom, var(--ion-background-color, #fff) 20%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:10}.picker-above-highlight.sc-ion-picker-legacy-md{inset-inline-start:0}.picker-below-highlight.sc-ion-picker-legacy-md{top:115px;transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));background:linear-gradient(to top, var(--ion-background-color, #fff) 30%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:11}.picker-below-highlight.sc-ion-picker-legacy-md{inset-inline-start:0}",B=T,O=class{constructor(i){g(this,i),this.didPresent=n(this,"ionPickerDidPresent",7),this.willPresent=n(this,"ionPickerWillPresent",7),this.willDismiss=n(this,"ionPickerWillDismiss",7),this.didDismiss=n(this,"ionPickerDidDismiss",7),this.didPresentShorthand=n(this,"didPresent",7),this.willPresentShorthand=n(this,"willPresent",7),this.willDismissShorthand=n(this,"willDismiss",7),this.didDismissShorthand=n(this,"didDismiss",7),this.delegateController=y(this),this.lockController=f(),this.triggerController=w(),this.onBackdropTap=()=>{this.dismiss(void 0,x)},this.dispatchCancelHandler=e=>{const t=e.detail.role;if(s(t)){const o=this.buttons.find(h=>h.role==="cancel");this.callButtonHandler(o)}},this.presented=!1,this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.buttons=[],this.columns=[],this.cssClass=void 0,this.duration=0,this.showBackdrop=!0,this.backdropDismiss=!0,this.animated=!0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0}onIsOpenChange(i,e){i===!0&&e===!1?this.present():i===!1&&e===!0&&this.dismiss()}triggerChanged(){const{trigger:i,el:e,triggerController:t}=this;i&&t.addClickListener(e,i)}connectedCallback(){C(this.el),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){var i;!((i=this.htmlAttributes)===null||i===void 0)&&i.id||D(this.el)}componentDidLoad(){v("ion-picker-legacy and ion-picker-legacy-column have been deprecated in favor of new versions of the ion-picker and ion-picker-column components. These new components display inline with your page content allowing for more presentation flexibility than before.",this.el),this.isOpen===!0&&u(()=>this.present()),this.triggerChanged()}async present(){const i=await this.lockController.lock();await this.delegateController.attachViewToDom(),await P(this,"pickerEnter",d,d,void 0),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration)),i()}async dismiss(i,e){const t=await this.lockController.lock();this.durationTimeout&&clearTimeout(this.durationTimeout);const o=await I(this,i,e,"pickerLeave",l,l);return o&&this.delegateController.removeViewFromDom(),t(),o}onDidDismiss(){return c(this.el,"ionPickerDidDismiss")}onWillDismiss(){return c(this.el,"ionPickerWillDismiss")}getColumn(i){return Promise.resolve(this.columns.find(e=>e.name===i))}async buttonClick(i){const e=i.role;return s(e)?this.dismiss(void 0,e):await this.callButtonHandler(i)?this.dismiss(this.getSelected(),i.role):Promise.resolve()}async callButtonHandler(i){return!(i&&await z(i.handler,this.getSelected())===!1)}getSelected(){const i={};return this.columns.forEach((e,t)=>{const o=e.selectedIndex!==void 0?e.options[e.selectedIndex]:void 0;i[e.name]={text:o?o.text:void 0,value:o?o.value:void 0,columnIndex:t}}),i}render(){const{htmlAttributes:i}=this,e=m(this);return r(b,Object.assign({key:"0712fa8732141848e50ad2e08e2ba66ef2a48991","aria-modal":"true",tabindex:"-1"},i,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[e]:!0,[`picker-${e}`]:!0,"overlay-hidden":!0},p(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonPickerWillDismiss:this.dispatchCancelHandler}),r("ion-backdrop",{key:"c997632ef0488698739664012de5a6494de438b6",visible:this.showBackdrop,tappable:this.backdropDismiss}),r("div",{key:"20045054a76cca997b410835fa6b305af22dcb12",tabindex:"0","aria-hidden":"true"}),r("div",{key:"a73a6ac20b685ed9694d4fa95ea236ce5d63fdbf",class:"picker-wrapper ion-overlay-wrapper",role:"dialog"},r("div",{key:"1221cdcc2ff013deeba12170129c8fe78308330c",class:"picker-toolbar"},this.buttons.map(t=>r("div",{class:L(t)},r("button",{type:"button",onClick:()=>this.buttonClick(t),class:W(t)},t.text)))),r("div",{key:"45038a58430a4251100797b902e7034243137564",class:"picker-columns"},r("div",{key:"c579bb69cddd4090912855ffd7f59536280f34b9",class:"picker-above-highlight"}),this.presented&&this.columns.map(t=>r("ion-picker-legacy-column",{col:t})),r("div",{key:"978c6632d82a97d053b729c9de65dd3af4c4cee2",class:"picker-below-highlight"}))),r("div",{key:"e7e9dc437a3cf6d559e2cb0df71af69047a2ae31",tabindex:"0","aria-hidden":"true"}))}get el(){return k(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},L=i=>({[`picker-toolbar-${i.role}`]:i.role!==void 0,"picker-toolbar-button":!0}),W=i=>Object.assign({"picker-button":!0,"ion-activatable":!0},p(i.cssClass));O.style={ios:S,md:B};export{O as ion_picker_legacy};

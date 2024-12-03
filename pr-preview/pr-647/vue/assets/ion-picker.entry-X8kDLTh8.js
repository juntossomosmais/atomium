import{r as g,c as n,b as k,h as o,H as m,g as b}from"./index-uL2uqLPb.js";import{r as u}from"./helpers-079c01eb-D592YRe8.js";import{c as f}from"./lock-controller-873b21a6-CpJsitdv.js";import{c as v,a as w,B as x,i as a,p as y,s as C,b as D,d as P,e as c,f as z}from"./overlays-9c065d0d-DmmO627c.js";import{g as h}from"./theme-516b22d6-DD5XIICl.js";import{c as s}from"./animation-022a9434-BW6ZVdxK.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-aIRu44Ei.js";import"../sb-preview/runtime.js";import"./index-d9a82e80-B2PaWDFh.js";import"./hardware-back-button-3e887a79-Dj96k1k7.js";import"./framework-delegate-bec700a6-1EDJ8Ayl.js";import"./index-f5dbb989-By3l89LO.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const d=i=>{const t=s(),e=s(),r=s();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),r.addElement(i.querySelector(".picker-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),t.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([e,r])};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const l=i=>{const t=s(),e=s(),r=s();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",.01),r.addElement(i.querySelector(".picker-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),t.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([e,r])},I=".sc-ion-picker-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;user-select:none;z-index:1001}@supports (inset-inline-start: 0){.sc-ion-picker-ios-h{inset-inline-start:0}}@supports not (inset-inline-start: 0){.sc-ion-picker-ios-h{left:0}[dir=rtl].sc-ion-picker-ios-h,[dir=rtl] .sc-ion-picker-ios-h{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.sc-ion-picker-ios-h:dir(rtl){left:unset;right:unset;right:0}}}.overlay-hidden.sc-ion-picker-ios-h{display:none}.picker-wrapper.sc-ion-picker-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;transform:translate3d(0,  100%,  0);display:flex;position:absolute;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-ios:active,.picker-button.sc-ion-picker-ios:focus{outline:none}.picker-columns.sc-ion-picker-ios{display:flex;position:relative;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-ios,.picker-below-highlight.sc-ion-picker-ios{display:none;pointer-events:none}.sc-ion-picker-ios-h{--background:var(--ion-background-color, #fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-ios{display:flex;height:44px;border-bottom:0.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-ios{flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-ios:last-child .picker-button.sc-ion-picker-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-ios:first-child{font-weight:normal;text-align:start}.picker-button.sc-ion-picker-ios,.picker-button.ion-activated.sc-ion-picker-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3880ff);font-size:16px}.picker-columns.sc-ion-picker-ios{height:215px;perspective:1000px}.picker-above-highlight.sc-ion-picker-ios{top:0;transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:10}@supports (inset-inline-start: 0){.picker-above-highlight.sc-ion-picker-ios{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-above-highlight.sc-ion-picker-ios{left:0}[dir=rtl].sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}[dir=rtl].sc-ion-picker-ios .picker-above-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-above-highlight.sc-ion-picker-ios:dir(rtl){left:unset;right:unset;right:0}}}.picker-below-highlight.sc-ion-picker-ios{top:115px;transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:11}@supports (inset-inline-start: 0){.picker-below-highlight.sc-ion-picker-ios{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-below-highlight.sc-ion-picker-ios{left:0}[dir=rtl].sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}[dir=rtl].sc-ion-picker-ios .picker-below-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-below-highlight.sc-ion-picker-ios:dir(rtl){left:unset;right:unset;right:0}}}",A=I,S=".sc-ion-picker-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;user-select:none;z-index:1001}@supports (inset-inline-start: 0){.sc-ion-picker-md-h{inset-inline-start:0}}@supports not (inset-inline-start: 0){.sc-ion-picker-md-h{left:0}[dir=rtl].sc-ion-picker-md-h,[dir=rtl] .sc-ion-picker-md-h{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.sc-ion-picker-md-h:dir(rtl){left:unset;right:unset;right:0}}}.overlay-hidden.sc-ion-picker-md-h{display:none}.picker-wrapper.sc-ion-picker-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;transform:translate3d(0,  100%,  0);display:flex;position:absolute;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-md:active,.picker-button.sc-ion-picker-md:focus{outline:none}.picker-columns.sc-ion-picker-md{display:flex;position:relative;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-md,.picker-below-highlight.sc-ion-picker-md{display:none;pointer-events:none}.sc-ion-picker-md-h{--background:var(--ion-background-color, #fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-md{display:flex;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-md,.picker-button.ion-activated.sc-ion-picker-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3880ff);font-size:14px;font-weight:500;text-transform:uppercase;box-shadow:none}.picker-columns.sc-ion-picker-md{height:216px;perspective:1800px}.picker-above-highlight.sc-ion-picker-md{top:0;transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:linear-gradient(to bottom, var(--ion-background-color, #fff) 20%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:10}@supports (inset-inline-start: 0){.picker-above-highlight.sc-ion-picker-md{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-above-highlight.sc-ion-picker-md{left:0}[dir=rtl].sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}[dir=rtl].sc-ion-picker-md .picker-above-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-above-highlight.sc-ion-picker-md:dir(rtl){left:unset;right:unset;right:0}}}.picker-below-highlight.sc-ion-picker-md{top:115px;transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:linear-gradient(to top, var(--ion-background-color, #fff) 30%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:11}@supports (inset-inline-start: 0){.picker-below-highlight.sc-ion-picker-md{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-below-highlight.sc-ion-picker-md{left:0}[dir=rtl].sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}[dir=rtl].sc-ion-picker-md .picker-below-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-below-highlight.sc-ion-picker-md:dir(rtl){left:unset;right:unset;right:0}}}",T=S,B=class{constructor(i){g(this,i),this.didPresent=n(this,"ionPickerDidPresent",7),this.willPresent=n(this,"ionPickerWillPresent",7),this.willDismiss=n(this,"ionPickerWillDismiss",7),this.didDismiss=n(this,"ionPickerDidDismiss",7),this.didPresentShorthand=n(this,"didPresent",7),this.willPresentShorthand=n(this,"willPresent",7),this.willDismissShorthand=n(this,"willDismiss",7),this.didDismissShorthand=n(this,"didDismiss",7),this.delegateController=v(this),this.lockController=f(),this.triggerController=w(),this.onBackdropTap=()=>{this.dismiss(void 0,x)},this.dispatchCancelHandler=t=>{const e=t.detail.role;if(a(e)){const r=this.buttons.find(p=>p.role==="cancel");this.callButtonHandler(r)}},this.presented=!1,this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.buttons=[],this.columns=[],this.cssClass=void 0,this.duration=0,this.showBackdrop=!0,this.backdropDismiss=!0,this.animated=!0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0}onIsOpenChange(i,t){i===!0&&t===!1?this.present():i===!1&&t===!0&&this.dismiss()}triggerChanged(){const{trigger:i,el:t,triggerController:e}=this;i&&e.addClickListener(t,i)}connectedCallback(){y(this.el),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){C(this.el)}componentDidLoad(){this.isOpen===!0&&u(()=>this.present()),this.triggerChanged()}async present(){const i=await this.lockController.lock();await this.delegateController.attachViewToDom(),await D(this,"pickerEnter",d,d,void 0),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration)),i()}async dismiss(i,t){const e=await this.lockController.lock();this.durationTimeout&&clearTimeout(this.durationTimeout);const r=await P(this,i,t,"pickerLeave",l,l);return r&&this.delegateController.removeViewFromDom(),e(),r}onDidDismiss(){return c(this.el,"ionPickerDidDismiss")}onWillDismiss(){return c(this.el,"ionPickerWillDismiss")}getColumn(i){return Promise.resolve(this.columns.find(t=>t.name===i))}async buttonClick(i){const t=i.role;return a(t)?this.dismiss(void 0,t):await this.callButtonHandler(i)?this.dismiss(this.getSelected(),i.role):Promise.resolve()}async callButtonHandler(i){return!(i&&await z(i.handler,this.getSelected())===!1)}getSelected(){const i={};return this.columns.forEach((t,e)=>{const r=t.selectedIndex!==void 0?t.options[t.selectedIndex]:void 0;i[t.name]={text:r?r.text:void 0,value:r?r.value:void 0,columnIndex:e}}),i}render(){const{htmlAttributes:i}=this,t=k(this);return o(m,Object.assign({key:"eb5f91ea74fb11daa6942f779ef461742cad9ecb","aria-modal":"true",tabindex:"-1"},i,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[t]:!0,[`picker-${t}`]:!0,"overlay-hidden":!0},h(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonPickerWillDismiss:this.dispatchCancelHandler}),o("ion-backdrop",{key:"7ea872d939e62f14129fff15334b2822ad2360c9",visible:this.showBackdrop,tappable:this.backdropDismiss}),o("div",{key:"2d77c225091eacab0207e28c96b966122afafef0",tabindex:"0"}),o("div",{key:"630d21e0c60ad97b71462cdc540858bb6ced0b8f",class:"picker-wrapper ion-overlay-wrapper",role:"dialog"},o("div",{key:"fa8553ec8d2ce8bf93e16e02334b6475cb51b5d4",class:"picker-toolbar"},this.buttons.map(e=>o("div",{class:O(e)},o("button",{type:"button",onClick:()=>this.buttonClick(e),class:E(e)},e.text)))),o("div",{key:"177d1bcbd0ce38f16d9c936295a917fb981d02d7",class:"picker-columns"},o("div",{key:"be99b6e0279c210ef91a88ccc81acc7d37917a53",class:"picker-above-highlight"}),this.presented&&this.columns.map(e=>o("ion-picker-column",{col:e})),o("div",{key:"b36b21e8133b59e873e1d3447a1279f1b971c854",class:"picker-below-highlight"}))),o("div",{key:"17cea6dd24dbb0a08073ca4a84bfe027eb24833d",tabindex:"0"}))}get el(){return b(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},O=i=>({[`picker-toolbar-${i.role}`]:i.role!==void 0,"picker-toolbar-button":!0}),E=i=>Object.assign({"picker-button":!0,"ion-activatable":!0},h(i.cssClass));B.style={ios:A,md:T};export{B as ion_picker};

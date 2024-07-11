import{r as W,c as f,a as O,b as S,h as l,H as F,g as j}from"./index-DPJJ6TmL.js";import{E as N,s as q}from"./index-bad389d4-DH9g3qSj.js";import{r as U,g as x}from"./helpers-079c01eb-D592YRe8.js";import{c as K}from"./lock-controller-873b21a6-CpJsitdv.js";import{p as w}from"./index-f5dbb989-By3l89LO.js";import{c as V,a as X,i as A,p as J,s as Q,b as Z,d as tt,e as H,f as et,O as ot,G as nt}from"./overlays-c9e6e4f8-vtf7UKRl.js";import{c as it,g as B}from"./theme-516b22d6-DD5XIICl.js";import{c}from"./animation-022a9434-BW6ZVdxK.js";import{w as $}from"./index-d9a82e80-B2PaWDFh.js";import{createGesture as rt}from"./index-8d9b57d7-PlsDOfno.js";import"./vue.esm-bundler-DLYZ4EJx.js";import"./iframe-DXUVIoZQ.js";import"../sb-preview/runtime.js";import"./hardware-back-button-63a23ead-BHyslo6M.js";import"./framework-delegate-bec700a6-1EDJ8Ayl.js";import"./gesture-controller-5b8003e1-9dGIRWtU.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */function st(t,e,i,o){let n;if(i==="md"?n=t==="top"?8:-8:n=t==="top"?10:-10,e&&$){at(e,o);const r=e.getBoundingClientRect();return t==="top"?n+=r.bottom:t==="bottom"&&(n-=$.innerHeight-r.top),{top:`${n}px`,bottom:`${n}px`}}else return{top:`calc(${n}px + var(--ion-safe-area-top, 0px))`,bottom:`calc(${n}px - var(--ion-safe-area-bottom, 0px))`}}function at(t,e){t.offsetParent===null&&w("The positionAnchor element for ion-toast was found in the DOM, but appears to be hidden. This may lead to unexpected positioning of the toast.",e)}const D=(t,e)=>Math.floor(t/2-e/2);/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const dt=(t,e)=>{const i=c(),o=c(),{position:n,top:r,bottom:a}=e,s=x(t).querySelector(".toast-wrapper");switch(o.addElement(s),n){case"top":o.fromTo("transform","translateY(-100%)",`translateY(${r})`);break;case"middle":const h=D(t.clientHeight,s.clientHeight);s.style.top=`${h}px`,o.fromTo("opacity",.01,1);break;default:o.fromTo("transform","translateY(100%)",`translateY(${a})`);break}return i.easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(o)};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const lt=(t,e)=>{const i=c(),o=c(),{position:n,top:r,bottom:a}=e,s=x(t).querySelector(".toast-wrapper");switch(o.addElement(s),n){case"top":o.fromTo("transform",`translateY(${r})`,"translateY(-100%)");break;case"middle":o.fromTo("opacity",.99,0);break;default:o.fromTo("transform",`translateY(${a})`,"translateY(100%)");break}return i.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(o)};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const pt=(t,e)=>{const i=c(),o=c(),{position:n,top:r,bottom:a}=e,s=x(t).querySelector(".toast-wrapper");switch(o.addElement(s),n){case"top":s.style.setProperty("transform",`translateY(${r})`),o.fromTo("opacity",.01,1);break;case"middle":const h=D(t.clientHeight,s.clientHeight);s.style.top=`${h}px`,o.fromTo("opacity",.01,1);break;default:s.style.setProperty("transform",`translateY(${a})`),o.fromTo("opacity",.01,1);break}return i.easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(o)};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const ct=t=>{const e=c(),i=c(),n=x(t).querySelector(".toast-wrapper");return i.addElement(n).fromTo("opacity",.99,0),e.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(i)};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const ht=(t,e,i)=>{const o=x(t).querySelector(".toast-wrapper"),n=t.clientHeight,r=o.getBoundingClientRect();let a=0;const d=.5,s=t.position==="middle"?.5:0,h=t.position==="top"?-1:1,u=D(n,r.height),P=[{offset:0,transform:`translateY(-${u+r.height}px)`},{offset:.5,transform:"translateY(0px)"},{offset:1,transform:`translateY(${u+r.height}px)`}],p=c("toast-swipe-to-dismiss-animation").addElement(o).duration(100);switch(t.position){case"middle":a=n+r.height,p.keyframes(P),p.progressStart(!0,.5);break;case"top":a=r.bottom,p.keyframes([{offset:0,transform:`translateY(${e.top})`},{offset:1,transform:"translateY(-100%)"}]),p.progressStart(!0,0);break;case"bottom":default:a=n-r.top,p.keyframes([{offset:0,transform:`translateY(${e.bottom})`},{offset:1,transform:"translateY(100%)"}]),p.progressStart(!0,0);break}const I=m=>m*h/a,y=rt({el:o,gestureName:"toast-swipe-to-dismiss",gesturePriority:ot,direction:"y",onMove:m=>{const v=s+I(m.deltaY);p.progressStep(v)},onEnd:m=>{const v=m.velocityY,k=(m.deltaY+v*1e3)/a*h;y.enable(!1);let g=!0,T=1,b=0,C=0;if(t.position==="middle"){g=k>=d/2||k<=-d/2,T=1,b=0;const E=o.getBoundingClientRect(),M=E.top-u,z=`${M}px`,L=m.deltaY<=0?-1:1,Y=(u+E.height)*L,R=g?`${Y}px`:"0px",_=[{offset:0,transform:`translateY(${z})`},{offset:1,transform:`translateY(${R})`}];p.keyframes(_),C=Y-M}else g=k>=d,T=g?1:0,b=I(m.deltaY),C=(g?1-b:b)*a;const G=Math.min(Math.abs(C)/Math.abs(v),200);p.onFinish(()=>{g?(i(),p.destroy()):(t.position==="middle"?p.keyframes(P).progressStart(!0,.5):p.progressStart(!0,0),y.enable(!0))},{oneTimeCallback:!0}).progressEnd(T,b,G)}});return y},ut=":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(:dir(rtl)){left:unset;right:unset;right:0}}}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-shadow:var(--box-shadow)}@supports (inset-inline-start: 0){.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}}@supports not (inset-inline-start: 0){.toast-wrapper{left:var(--start);right:var(--end)}:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}@supports selector(:dir(rtl)){.toast-wrapper:dir(rtl){left:unset;right:unset;left:var(--end);right:var(--start)}}}.toast-wrapper.toast-top{transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-bottom{transform:translate3d(0,  100%,  0);bottom:0}.toast-container{display:flex;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{flex-wrap:wrap}.toast-layout-baseline .toast-content{display:flex;flex:1;flex-direction:column;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{flex:1;white-space:var(--white-space)}.toast-button-group{display:flex}.toast-layout-stacked .toast-button-group{justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:flex;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--max-height:478px;--start:10px;--end:10px;font-size:clamp(14px, 0.875rem, 43.4px)}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports (backdrop-filter: blur(0)){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);backdrop-filter:saturate(180%) blur(20px)}:host(.ion-color.toast-translucent) .toast-wrapper{background:rgba(var(--ion-color-base-rgb), 0.8)}}.toast-wrapper.toast-middle{opacity:0.01}.toast-content{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:15px;padding-bottom:15px}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;min-height:44px;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:clamp(17px, 1.0625rem, 21.998px);font-weight:500;overflow:hidden}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",mt=ut,ft=":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(:dir(rtl)){left:unset;right:unset;right:0}}}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-shadow:var(--box-shadow)}@supports (inset-inline-start: 0){.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}}@supports not (inset-inline-start: 0){.toast-wrapper{left:var(--start);right:var(--end)}:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}@supports selector(:dir(rtl)){.toast-wrapper:dir(rtl){left:unset;right:unset;left:var(--end);right:var(--start)}}}.toast-wrapper.toast-top{transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-bottom{transform:translate3d(0,  100%,  0);bottom:0}.toast-container{display:flex;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{flex-wrap:wrap}.toast-layout-baseline .toast-content{display:flex;flex:1;flex-direction:column;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{flex:1;white-space:var(--white-space)}.toast-button-group{display:flex}.toast-layout-stacked .toast-button-group{justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:flex;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:0.875rem}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}.toast-content{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:14px;padding-bottom:14px}.toast-header{margin-bottom:2px;font-weight:500;line-height:1.25rem}.toast-message{line-height:1.25rem}.toast-layout-baseline .toast-button-group-start{-webkit-margin-start:8px;margin-inline-start:8px}.toast-layout-stacked .toast-button-group-start{-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px}.toast-layout-baseline .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px}.toast-layout-stacked .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px;margin-bottom:8px}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:0.875rem;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}",gt=ft,bt=class{constructor(t){W(this,t),this.didPresent=f(this,"ionToastDidPresent",7),this.willPresent=f(this,"ionToastWillPresent",7),this.willDismiss=f(this,"ionToastWillDismiss",7),this.didDismiss=f(this,"ionToastDidDismiss",7),this.didPresentShorthand=f(this,"didPresent",7),this.willPresentShorthand=f(this,"willPresent",7),this.willDismissShorthand=f(this,"willDismiss",7),this.didDismissShorthand=f(this,"didDismiss",7),this.delegateController=V(this),this.lockController=K(),this.triggerController=X(),this.customHTMLEnabled=O.get("innerHTMLTemplatesEnabled",N),this.presented=!1,this.dispatchCancelHandler=e=>{const i=e.detail.role;if(A(i)){const o=this.getButtons().find(n=>n.role==="cancel");this.callButtonHandler(o)}},this.createSwipeGesture=e=>{(this.gesture=ht(this.el,e,()=>{this.dismiss(void 0,nt)})).enable(!0)},this.destroySwipeGesture=()=>{const{gesture:e}=this;e!==void 0&&(e.destroy(),this.gesture=void 0)},this.prefersSwipeGesture=()=>{const{swipeGesture:e}=this;return e==="vertical"},this.revealContentToScreenReader=!1,this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.color=void 0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.cssClass=void 0,this.duration=O.getNumber("toastDuration",0),this.header=void 0,this.layout="baseline",this.message=void 0,this.keyboardClose=!1,this.position="bottom",this.positionAnchor=void 0,this.buttons=void 0,this.translucent=!1,this.animated=!0,this.icon=void 0,this.htmlAttributes=void 0,this.swipeGesture=void 0,this.isOpen=!1,this.trigger=void 0}swipeGestureChanged(){this.destroySwipeGesture(),this.presented&&this.prefersSwipeGesture()&&this.createSwipeGesture(this.lastPresentedPosition)}onIsOpenChange(t,e){t===!0&&e===!1?this.present():t===!1&&e===!0&&this.dismiss()}triggerChanged(){const{trigger:t,el:e,triggerController:i}=this;t&&i.addClickListener(e,t)}connectedCallback(){J(this.el),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){Q(this.el)}componentDidLoad(){this.isOpen===!0&&U(()=>this.present()),this.triggerChanged()}async present(){const t=await this.lockController.lock();await this.delegateController.attachViewToDom();const{el:e,position:i}=this,o=this.getAnchorElement(),n=st(i,o,S(this),e);this.lastPresentedPosition=n,await Z(this,"toastEnter",dt,pt,{position:i,top:n.top,bottom:n.bottom}),this.revealContentToScreenReader=!0,this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(void 0,"timeout"),this.duration)),this.prefersSwipeGesture()&&this.createSwipeGesture(n),t()}async dismiss(t,e){var i,o;const n=await this.lockController.lock(),{durationTimeout:r,position:a,lastPresentedPosition:d}=this;r&&clearTimeout(r);const s=await tt(this,t,e,"toastLeave",lt,ct,{position:a,top:(i=d==null?void 0:d.top)!==null&&i!==void 0?i:"",bottom:(o=d==null?void 0:d.bottom)!==null&&o!==void 0?o:""});return s&&(this.delegateController.removeViewFromDom(),this.revealContentToScreenReader=!1),this.lastPresentedPosition=void 0,this.destroySwipeGesture(),n(),s}onDidDismiss(){return H(this.el,"ionToastDidDismiss")}onWillDismiss(){return H(this.el,"ionToastWillDismiss")}getButtons(){return this.buttons?this.buttons.map(e=>typeof e=="string"?{text:e}:e):[]}getAnchorElement(){const{position:t,positionAnchor:e,el:i}=this;if(e!==void 0){if(t==="middle"&&e!==void 0){w('The positionAnchor property is ignored when using position="middle".',this.el);return}if(typeof e=="string"){const o=document.getElementById(e);if(o===null){w(`An anchor element with an ID of "${e}" was not found in the DOM.`,i);return}return o}if(e instanceof HTMLElement)return e;w("Invalid positionAnchor value:",e,i)}}async buttonClick(t){const e=t.role;return A(e)?this.dismiss(void 0,e):await this.callButtonHandler(t)?this.dismiss(void 0,e):Promise.resolve()}async callButtonHandler(t){if(t!=null&&t.handler)try{if(await et(t.handler)===!1)return!1}catch(e){console.error(e)}return!0}renderButtons(t,e){if(t.length===0)return;const i=S(this),o={"toast-button-group":!0,[`toast-button-group-${e}`]:!0};return l("div",{class:o},t.map(n=>l("button",Object.assign({},n.htmlAttributes,{type:"button",class:wt(n),tabIndex:0,onClick:()=>this.buttonClick(n),part:xt(n)}),l("div",{class:"toast-button-inner"},n.icon&&l("ion-icon",{"aria-hidden":"true",icon:n.icon,slot:n.text===void 0?"icon-only":void 0,class:"toast-button-icon"}),n.text),i==="md"&&l("ion-ripple-effect",{type:n.icon!==void 0&&n.text===void 0?"unbounded":"bounded"}))))}renderToastMessage(t,e=null){const{customHTMLEnabled:i,message:o}=this;return i?l("div",{key:t,"aria-hidden":e,class:"toast-message",part:"message",innerHTML:q(o)}):l("div",{key:t,"aria-hidden":e,class:"toast-message",part:"message"},o)}renderHeader(t,e=null){return l("div",{key:t,class:"toast-header","aria-hidden":e,part:"header"},this.header)}render(){const{layout:t,el:e,revealContentToScreenReader:i,header:o,message:n}=this,r=this.getButtons(),a=r.filter(u=>u.side==="start"),d=r.filter(u=>u.side!=="start"),s=S(this),h={"toast-wrapper":!0,[`toast-${this.position}`]:!0,[`toast-layout-${t}`]:!0};return t==="stacked"&&a.length>0&&d.length>0&&w("This toast is using start and end buttons with the stacked toast layout. We recommend following the best practice of using either start or end buttons with the stacked toast layout.",e),l(F,Object.assign({key:"23803334fb668f6ce7044d3a321cb84bc753bd16",tabindex:"-1"},this.htmlAttributes,{style:{zIndex:`${6e4+this.overlayIndex}`},class:it(this.color,Object.assign(Object.assign({[s]:!0},B(this.cssClass)),{"overlay-hidden":!0,"toast-translucent":this.translucent})),onIonToastWillDismiss:this.dispatchCancelHandler}),l("div",{key:"7cd7138ba079fccf97f318b91e9986491ab4214d",class:h},l("div",{key:"93b78fa64e24435adeb77a04c1d1d53d2f093864",class:"toast-container",part:"container"},this.renderButtons(a,"start"),this.icon!==void 0&&l("ion-icon",{key:"9a3c71b164ebcfba2540acb7568beffa76b62f47",class:"toast-icon",part:"icon",icon:this.icon,lazy:!1,"aria-hidden":"true"}),l("div",{key:"feb9268102d844f1314205f7440de7066cf0620e",class:"toast-content",role:"status","aria-atomic":"true","aria-live":"polite"},!i&&o!==void 0&&this.renderHeader("oldHeader","true"),!i&&n!==void 0&&this.renderToastMessage("oldMessage","true"),i&&o!==void 0&&this.renderHeader("header"),i&&n!==void 0&&this.renderToastMessage("header")),this.renderButtons(d,"end"))))}get el(){return j(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},wt=t=>Object.assign({"toast-button":!0,"toast-button-icon-only":t.icon!==void 0&&t.text===void 0,[`toast-button-${t.role}`]:t.role!==void 0,"ion-focusable":!0,"ion-activatable":!0},B(t.cssClass)),xt=t=>A(t.role)?"button cancel":"button";bt.style={ios:mt,md:gt};export{bt as ion_toast};

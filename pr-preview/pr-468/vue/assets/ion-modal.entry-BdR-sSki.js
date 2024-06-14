import{r as kt,c as M,w as rt,b as G,a as nt,h as O,H as wt,g as xt}from"./index-Dmbs_eUD.js";import{f as St,p as vt,a as mt,i as Q,d as it,r as At}from"./index-6cad21e9-C8mkRYkz.js";import{C as Dt,a as Et,d as Ct}from"./framework-delegate-bec700a6-1EDJ8Ayl.js";import{c as Bt,r as z,h as Mt,g as Y,f as K}from"./helpers-079c01eb-D592YRe8.js";import{c as It}from"./lock-controller-873b21a6-CpJsitdv.js";import{p as J}from"./index-f5dbb989-By3l89LO.js";import{g as st}from"./capacitor-74355484-sCloY8M9.js";import{a as Tt,B as Yt,p as Pt,s as Rt,b as Lt,G as F,d as Ot,e as at,O as _t}from"./overlays-9c065d0d-DO7D1mVM.js";import{g as Nt}from"./theme-516b22d6-DD5XIICl.js";import{d as Wt,w as Ht}from"./index-ab9a4597-CdY3swf7.js";import{KEYBOARD_DID_OPEN as dt}from"./keyboard-8d28fca7-X052u48D.js";import{c}from"./animation-022a9434-BW6ZVdxK.js";import{g as lt}from"./cubic-bezier-c467eebb-B8nHoLJF.js";import{createGesture as ft}from"./index-8d9b57d7-PlsDOfno.js";import{w as j}from"./index-d9a82e80-B2PaWDFh.js";import"./keyboard-6ae239bc-BGgBFUHv.js";import"./vue.esm-bundler-Cotndkpi.js";import"./iframe-CQFnB7GW.js";import"../sb-preview/runtime.js";import"./hardware-back-button-3e887a79--cH0iCom.js";import"./gesture-controller-5b8003e1-9dGIRWtU.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */var _;(function(t){t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT"})(_||(_={}));const H={getEngine(){const t=st();if(t!=null&&t.isPluginAvailable("StatusBar"))return t.Plugins.StatusBar},supportsDefaultStatusBarStyle(){const t=st();return!!(t!=null&&t.PluginHeaders)},setStyle(t){const e=this.getEngine();e&&e.setStyle(t)},getStyle:async function(){const t=this.getEngine();if(!t)return _.Default;const{style:e}=await t.getInfo();return e}};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const X=(t,e)=>{if(e===1)return 0;const o=1/(1-e),r=-(e*o);return t*o+r},ut=()=>{!j||j.innerWidth>=768||!H.supportsDefaultStatusBarStyle()||H.setStyle({style:_.Dark})},tt=(t=_.Default)=>{!j||j.innerWidth>=768||!H.supportsDefaultStatusBarStyle()||H.setStyle({style:t})};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const bt=async(t,e)=>{typeof t.canDismiss!="function"||!await t.canDismiss(void 0,F)||(e.isRunning()?e.onFinish(()=>{t.dismiss(void 0,"handler")},{oneTimeCallback:!0}):t.dismiss(void 0,"handler"))},et=t=>.00255275*2.71828**(-14.9619*t)-1.00255*2.71828**(-.0380968*t)+1;/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const V={MIN_PRESENTING_SCALE:.93},qt=(t,e,o,r)=>{const n=t.offsetHeight;let s=!1,a=!1,d=null,y=null;const u=.2;let w=!0,b=0;const m=()=>d&&Q(d)?d.scrollY:!0,N=ft({el:t,gestureName:"modalSwipeToClose",gesturePriority:_t,direction:"y",threshold:10,canStart:h=>{const p=h.event.target;return p===null||!p.closest?!0:(d=mt(p),d?(Q(d)?y=Y(d).querySelector(".inner-scroll"):y=d,!!!d.querySelector("ion-refresher")&&y.scrollTop===0):p.closest("ion-footer")===null)},onStart:h=>{const{deltaY:p}=h;w=m(),a=t.canDismiss!==void 0&&t.canDismiss!==!0,p>0&&d&&it(d),e.progressStart(!0,s?1:0)},onMove:h=>{const{deltaY:p}=h;p>0&&d&&it(d);const v=h.deltaY/n,E=v>=0&&a,C=E?u:.9999,R=E?et(v/C):v,A=K(1e-4,R,C);e.progressStep(A),A>=.5&&b<.5?tt(o):A<.5&&b>=.5&&ut(),b=A},onEnd:h=>{const p=h.velocityY,v=h.deltaY/n,E=v>=0&&a,C=E?u:.9999,R=E?et(v/C):v,A=K(1e-4,R,C),U=(h.deltaY+p*1e3)/n,I=!E&&U>=.5;let W=I?-.001:.001;I?(e.easing("cubic-bezier(0.32, 0.72, 0, 1)"),W+=lt([0,0],[.32,.72],[0,1],[1,1],A)[0]):(e.easing("cubic-bezier(1, 0, 0.68, 0.28)"),W+=lt([0,0],[1,0],[.68,.28],[1,1],A)[0]);const q=ct(I?v*n:(1-A)*n,p);s=I,N.enable(!1),d&&At(d,w),e.onFinish(()=>{I||N.enable(!0)}).progressEnd(I?1:0,W,q),E&&A>C/4?bt(t,e):I&&r()}});return N},ct=(t,e)=>K(400,t/Math.abs(e*1.1),500);/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const gt=t=>{const{currentBreakpoint:e,backdropBreakpoint:o}=t,r=o===void 0||o<e,i=r?`calc(var(--backdrop-opacity) * ${e})`:"0",n=c("backdropAnimation").fromTo("opacity",0,i);return r&&n.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:c("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-e*100}%)`}]),backdropAnimation:n}},yt=t=>{const{currentBreakpoint:e,backdropBreakpoint:o}=t,r=`calc(var(--backdrop-opacity) * ${X(e,o)})`,i=[{offset:0,opacity:r},{offset:1,opacity:0}],n=[{offset:0,opacity:r},{offset:o,opacity:0},{offset:1,opacity:0}],s=c("backdropAnimation").keyframes(o!==0?n:i);return{wrapperAnimation:c("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-e*100}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:s}};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const $t=()=>{const t=c().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),e=c().fromTo("transform","translateY(100vh)","translateY(0vh)");return{backdropAnimation:t,wrapperAnimation:e}},pt=(t,e)=>{const{presentingEl:o,currentBreakpoint:r}=e,i=Y(t),{wrapperAnimation:n,backdropAnimation:s}=r!==void 0?gt(e):$t();s.addElement(i.querySelector("ion-backdrop")),n.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const a=c("entering-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(n);if(o){const d=window.innerWidth<768,y=o.tagName==="ION-MODAL"&&o.presentingElement!==void 0,u=Y(o),w=c().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),b=document.body;if(d){const m=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",g=y?"-10px":m,l=V.MIN_PRESENTING_SCALE,k=`translateY(${g}) scale(${l})`;w.afterStyles({transform:k}).beforeAddWrite(()=>b.style.setProperty("background-color","black")).addElement(o).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:k,borderRadius:"10px 10px 0 0"}]),a.addAnimation(w)}else if(a.addAnimation(s),!y)n.fromTo("opacity","0","1");else{const g=`translateY(-10px) scale(${y?V.MIN_PRESENTING_SCALE:1})`;w.afterStyles({transform:g}).addElement(u.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:g}]);const l=c().afterStyles({transform:g}).addElement(u.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:g}]);a.addAnimation([w,l])}}else a.addAnimation(s);return a};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const Gt=()=>{const t=c().fromTo("opacity","var(--backdrop-opacity)",0),e=c().fromTo("transform","translateY(0vh)","translateY(100vh)");return{backdropAnimation:t,wrapperAnimation:e}},ht=(t,e,o=500)=>{const{presentingEl:r,currentBreakpoint:i}=e,n=Y(t),{wrapperAnimation:s,backdropAnimation:a}=i!==void 0?yt(e):Gt();a.addElement(n.querySelector("ion-backdrop")),s.addElement(n.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const d=c("leaving-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(o).addAnimation(s);if(r){const y=window.innerWidth<768,u=r.tagName==="ION-MODAL"&&r.presentingElement!==void 0,w=Y(r),b=c().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(g=>{if(g!==1)return;r.style.setProperty("overflow",""),Array.from(m.querySelectorAll("ion-modal:not(.overlay-hidden)")).filter(k=>k.presentingElement!==void 0).length<=1&&m.style.setProperty("background-color","")}),m=document.body;if(y){const g=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",l=u?"-10px":g,k=V.MIN_PRESENTING_SCALE,P=`translateY(${l}) scale(${k})`;b.addElement(r).keyframes([{offset:0,filter:"contrast(0.85)",transform:P,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),d.addAnimation(b)}else if(d.addAnimation(a),!u)s.fromTo("opacity","1","0");else{const l=`translateY(-10px) scale(${u?V.MIN_PRESENTING_SCALE:1})`;b.addElement(w.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:l},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const k=c().addElement(w.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:l},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);d.addAnimation([b,k])}}else d.addAnimation(a);return d};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const Ft=()=>{const t=c().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),e=c().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]);return{backdropAnimation:t,wrapperAnimation:e}},zt=(t,e)=>{const{currentBreakpoint:o}=e,r=Y(t),{wrapperAnimation:i,backdropAnimation:n}=o!==void 0?gt(e):Ft();return n.addElement(r.querySelector("ion-backdrop")),i.addElement(r.querySelector(".modal-wrapper")),c().addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([n,i])};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const Kt=()=>{const t=c().fromTo("opacity","var(--backdrop-opacity)",0),e=c().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]);return{backdropAnimation:t,wrapperAnimation:e}},jt=(t,e)=>{const{currentBreakpoint:o}=e,r=Y(t),{wrapperAnimation:i,backdropAnimation:n}=o!==void 0?yt(e):Kt();return n.addElement(r.querySelector("ion-backdrop")),i.addElement(r.querySelector(".modal-wrapper")),c().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([n,i])};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const Vt=(t,e,o,r,i,n,s=[],a,d,y)=>{const u=[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}],w=[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-i,opacity:0},{offset:1,opacity:0}],b={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:i!==0?w:u},m=t.querySelector("ion-content"),g=o.clientHeight;let l=r,k=0,P=!1;const N=.95,h=n.childAnimations.find(f=>f.id==="wrapperAnimation"),p=n.childAnimations.find(f=>f.id==="backdropAnimation"),v=s[s.length-1],E=s[0],C=()=>{t.style.setProperty("pointer-events","auto"),e.style.setProperty("pointer-events","auto"),t.classList.remove("ion-disable-focus-trap")},R=()=>{t.style.setProperty("pointer-events","none"),e.style.setProperty("pointer-events","none"),t.classList.add("ion-disable-focus-trap")};h&&p&&(h.keyframes([...b.WRAPPER_KEYFRAMES]),p.keyframes([...b.BACKDROP_KEYFRAMES]),n.progressStart(!0,1-l),l>i?C():R()),m&&l!==v&&(m.scrollY=!1);const A=f=>{const x=mt(f.event.target);if(l=a(),l===1&&x){const S=Q(x)?Y(x).querySelector(".inner-scroll"):x;return!!!x.querySelector("ion-refresher")&&S.scrollTop===0}return!0},U=f=>{P=t.canDismiss!==void 0&&t.canDismiss!==!0&&E===0,f.deltaY>0&&m&&(m.scrollY=!1),z(()=>{t.focus()}),n.progressStart(!0,1-l)},I=f=>{f.deltaY>0&&m&&(m.scrollY=!1);const x=1-l,S=s.length>1?1-s[1]:void 0,B=x+f.deltaY/g,L=S!==void 0&&B>=S&&P,T=L?N:.9999,D=L&&S!==void 0?S+et((B-S)/(T-S)):B;k=K(1e-4,D,T),n.progressStep(k)},W=f=>{const x=f.velocityY,S=(f.deltaY+x*350)/g,B=l-S,L=s.reduce((T,D)=>Math.abs(D-B)<Math.abs(T-B)?D:T);q({breakpoint:L,breakpointOffset:k,canDismiss:P,animated:!0})},q=f=>{const{breakpoint:x,canDismiss:S,breakpointOffset:B,animated:L}=f,T=S&&x===0,D=T?l:x,ot=D!==0;return l=0,h&&p&&(h.keyframes([{offset:0,transform:`translateY(${B*100}%)`},{offset:1,transform:`translateY(${(1-D)*100}%)`}]),p.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${X(1-B,i)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${X(D,i)})`}]),n.progressStep(0)),$.enable(!1),T?bt(t,n):ot||d(),m&&D===s[s.length-1]&&(m.scrollY=!0),new Promise(Z=>{n.onFinish(()=>{ot?h&&p?z(()=>{h.keyframes([...b.WRAPPER_KEYFRAMES]),p.keyframes([...b.BACKDROP_KEYFRAMES]),n.progressStart(!0,1-D),l=D,y(l),l>i?C():R(),$.enable(!0),Z()}):($.enable(!0),Z()):Z()},{oneTimeCallback:!0}).progressEnd(1,0,L?500:0)})},$=ft({el:o,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:A,onStart:U,onMove:I,onEnd:W});return{gesture:$,moveSheetToBreakpoint:q}},Ut=':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;align-items:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-card:dir(rtl)) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}:host(.modal-card){--backdrop-opacity:0;--width:100%;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{box-shadow:none}:host(.modal-card) .modal-shadow{box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-sheet:dir(rtl)) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}',Zt=Ut,Jt=':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;align-items:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{transform:translate3d(0,  40px,  0);opacity:0.01}',Qt=Jt,Xt=class{constructor(t){kt(this,t),this.didPresent=M(this,"ionModalDidPresent",7),this.willPresent=M(this,"ionModalWillPresent",7),this.willDismiss=M(this,"ionModalWillDismiss",7),this.didDismiss=M(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=M(this,"ionBreakpointDidChange",7),this.didPresentShorthand=M(this,"didPresent",7),this.willPresentShorthand=M(this,"willPresent",7),this.willDismissShorthand=M(this,"willDismiss",7),this.didDismissShorthand=M(this,"didDismiss",7),this.ionMount=M(this,"ionMount",7),this.lockController=It(),this.triggerController=Tt(),this.coreDelegate=Dt(),this.isSheetModal=!1,this.inheritedAttributes={},this.inline=!1,this.gestureAnimationDismissing=!1,this.onHandleClick=()=>{const{sheetTransition:e,handleBehavior:o}=this;o!=="cycle"||e!==void 0||this.moveToNextBreakpoint()},this.onBackdropTap=()=>{const{sheetTransition:e}=this;e===void 0&&this.dismiss(void 0,Yt)},this.onLifecycle=e=>{const o=this.usersElement,r=te[e.type];if(o&&r){const i=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(i)}},this.presented=!1,this.hasController=!1,this.overlayIndex=void 0,this.delegate=void 0,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.breakpoints=void 0,this.initialBreakpoint=void 0,this.backdropBreakpoint=0,this.handle=void 0,this.handleBehavior="none",this.component=void 0,this.componentProps=void 0,this.cssClass=void 0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.presentingElement=void 0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0,this.keepContentsMounted=!1,this.canDismiss=!0}onIsOpenChange(t,e){t===!0&&e===!1?this.present():t===!1&&e===!0&&this.dismiss()}triggerChanged(){const{trigger:t,el:e,triggerController:o}=this;t&&o.addClickListener(e,t)}breakpointsChanged(t){t!==void 0&&(this.sortedBreakpoints=t.sort((e,o)=>e-o))}connectedCallback(){const{el:t}=this;Pt(t),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){const{breakpoints:t,initialBreakpoint:e,el:o,htmlAttributes:r}=this,i=this.isSheetModal=t!==void 0&&e!==void 0,n=["aria-label","role"];this.inheritedAttributes=Bt(o,n),r!==void 0&&n.forEach(s=>{r[s]&&(this.inheritedAttributes=Object.assign(Object.assign({},this.inheritedAttributes),{[s]:r[s]}),delete r[s])}),i&&(this.currentBreakpoint=this.initialBreakpoint),t!==void 0&&e!==void 0&&!t.includes(e)&&J("Your breakpoints array must include the initialBreakpoint value."),Rt(o)}componentDidLoad(){this.isOpen===!0&&z(()=>this.present()),this.breakpointsChanged(this.breakpoints),this.triggerChanged()}getDelegate(t=!1){if(this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};const e=this.el.parentNode,o=this.inline=e!==null&&!this.hasController,r=this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate;return{inline:o,delegate:r}}async checkCanDismiss(t,e){const{canDismiss:o}=this;return typeof o=="function"?o(t,e):o}async present(){const t=await this.lockController.lock();if(this.presented){t();return}const{presentingElement:e,el:o}=this;this.currentBreakpoint=this.initialBreakpoint;const{inline:r,delegate:i}=this.getDelegate(!0);this.ionMount.emit(),this.usersElement=await Et(i,o,this.component,["ion-page"],this.componentProps,r),Mt(o)?await Wt(this.usersElement):this.keepContentsMounted||await Ht(),rt(()=>this.el.classList.add("show-modal"));const n=e!==void 0;n&&G(this)==="ios"&&(this.statusBarStyle=await H.getStyle(),ut()),await Lt(this,"modalEnter",pt,zt,{presentingEl:e,currentBreakpoint:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint}),typeof window<"u"&&(this.keyboardOpenCallback=()=>{this.gesture&&(this.gesture.enable(!1),z(()=>{this.gesture&&this.gesture.enable(!0)}))},window.addEventListener(dt,this.keyboardOpenCallback)),this.isSheetModal?this.initSheetGesture():n&&this.initSwipeToClose(),t()}initSwipeToClose(){var t;if(G(this)!=="ios")return;const{el:e}=this,o=this.leaveAnimation||nt.get("modalLeave",ht),r=this.animation=o(e,{presentingEl:this.presentingElement});if(!St(e)){vt(e);return}const n=(t=this.statusBarStyle)!==null&&t!==void 0?t:_.Default;this.gesture=qt(e,r,n,()=>{this.gestureAnimationDismissing=!0,tt(this.statusBarStyle),this.animation.onFinish(async()=>{await this.dismiss(void 0,F),this.gestureAnimationDismissing=!1})}),this.gesture.enable(!0)}initSheetGesture(){const{wrapperEl:t,initialBreakpoint:e,backdropBreakpoint:o}=this;if(!t||e===void 0)return;const r=this.enterAnimation||nt.get("modalEnter",pt),i=this.animation=r(this.el,{presentingEl:this.presentingElement,currentBreakpoint:e,backdropBreakpoint:o});i.progressStart(!0,1);const{gesture:n,moveSheetToBreakpoint:s}=Vt(this.el,this.backdropEl,t,e,o,i,this.sortedBreakpoints,()=>{var a;return(a=this.currentBreakpoint)!==null&&a!==void 0?a:0},()=>this.sheetOnDismiss(),a=>{this.currentBreakpoint!==a&&(this.currentBreakpoint=a,this.ionBreakpointDidChange.emit({breakpoint:a}))});this.gesture=n,this.moveSheetToBreakpoint=s,this.gesture.enable(!0)}sheetOnDismiss(){this.gestureAnimationDismissing=!0,this.animation.onFinish(async()=>{this.currentBreakpoint=0,this.ionBreakpointDidChange.emit({breakpoint:this.currentBreakpoint}),await this.dismiss(void 0,F),this.gestureAnimationDismissing=!1})}async dismiss(t,e){var o;if(this.gestureAnimationDismissing&&e!==F)return!1;const r=await this.lockController.lock();if(e!=="handler"&&!await this.checkCanDismiss(t,e))return r(),!1;const{presentingElement:i}=this;i!==void 0&&G(this)==="ios"&&tt(this.statusBarStyle),typeof window<"u"&&this.keyboardOpenCallback&&(window.removeEventListener(dt,this.keyboardOpenCallback),this.keyboardOpenCallback=void 0);const s=await Ot(this,t,e,"modalLeave",ht,jt,{presentingEl:i,currentBreakpoint:(o=this.currentBreakpoint)!==null&&o!==void 0?o:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint});if(s){const{delegate:a}=this.getDelegate();await Ct(a,this.usersElement),rt(()=>this.el.classList.remove("show-modal")),this.animation&&this.animation.destroy(),this.gesture&&this.gesture.destroy()}return this.currentBreakpoint=void 0,this.animation=void 0,r(),s}onDidDismiss(){return at(this.el,"ionModalDidDismiss")}onWillDismiss(){return at(this.el,"ionModalWillDismiss")}async setCurrentBreakpoint(t){if(!this.isSheetModal){J("setCurrentBreakpoint is only supported on sheet modals.");return}if(!this.breakpoints.includes(t)){J(`Attempted to set invalid breakpoint value ${t}. Please double check that the breakpoint value is part of your defined breakpoints.`);return}const{currentBreakpoint:e,moveSheetToBreakpoint:o,canDismiss:r,breakpoints:i,animated:n}=this;e!==t&&o&&(this.sheetTransition=o({breakpoint:t,breakpointOffset:1-e,canDismiss:r!==void 0&&r!==!0&&i[0]===0,animated:n}),await this.sheetTransition,this.sheetTransition=void 0)}async getCurrentBreakpoint(){return this.currentBreakpoint}async moveToNextBreakpoint(){const{breakpoints:t,currentBreakpoint:e}=this;if(!t||e==null)return!1;const o=t.filter(s=>s!==0),i=(o.indexOf(e)+1)%o.length,n=o[i];return await this.setCurrentBreakpoint(n),!0}render(){const{handle:t,isSheetModal:e,presentingElement:o,htmlAttributes:r,handleBehavior:i,inheritedAttributes:n}=this,s=t!==!1&&e,a=G(this),d=o!==void 0&&a==="ios",y=i==="cycle";return O(wt,Object.assign({key:"e4ad28e6e794560d85252aebdca7f4752e4e7e99","no-router":!0,tabindex:"-1"},r,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[a]:!0,"modal-default":!d&&!e,"modal-card":d,"modal-sheet":e,"overlay-hidden":!0},Nt(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),O("ion-backdrop",{key:"6efd67361a062d15488390f9f0d6c0841e541893",ref:u=>this.backdropEl=u,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),a==="ios"&&O("div",{key:"557b1c6b297df75acc80d1350b971e65ace6c343",class:"modal-shadow"}),O("div",Object.assign({key:"67f9b27b662303fbaadaee2ae89972caadfd9994",role:"dialog"},n,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:u=>this.wrapperEl=u}),s&&O("button",{key:"8f1eecc451b52467a8c3cfe500335cf6254bbfbc",class:"modal-handle",tabIndex:y?0:-1,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:y?this.onHandleClick:void 0,part:"handle"}),O("slot",{key:"cdc923404f01a14b9071a434c68547da3b22c71e"})))}get el(){return xt(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},te={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};Xt.style={ios:Zt,md:Qt};export{Xt as ion_modal};

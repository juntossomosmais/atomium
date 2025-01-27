import{r as ke,c as M,w as oe,b as F,a as se,h as O,H as we,g as Se}from"./index-CVcxogov.js";import{f as xe,p as ve,a as me,i as J,d as re,r as Ae}from"./index-74a0cdd4-i6ycB-rg.js";import{C as Ee,a as De,d as Ce}from"./framework-delegate-c7fe8edd-BHSPv_Eg.js";import{c as Be,r as G,n as Me,g as Y,f as z}from"./helpers-b14eeb70-DAoIUSfU.js";import{c as Te}from"./lock-controller-873b21a6-CpJsitdv.js";import{p as Z}from"./index-f5dbb989-By3l89LO.js";import{g as Ie}from"./capacitor-74355484-sCloY8M9.js";import{a as Ye,B as Pe,p as Re,s as Le,b as Oe,G as $,d as _e,e as ae,F as Q,O as Ne}from"./overlays-3b0bc4e1-DnEJmxmA.js";import{g as We}from"./theme-516b22d6-DD5XIICl.js";import{d as He,w as qe}from"./index-f2baec95-gw2wnwyu.js";import{KEYBOARD_DID_OPEN as de}from"./keyboard-8d28fca7-X052u48D.js";import{c}from"./animation-aa17f0ca-d4Boy65i.js";import{g as le}from"./cubic-bezier-c467eebb-B8nHoLJF.js";import{createGesture as fe}from"./index-0fc64123-CtVBTaUX.js";import{w as K}from"./index-d9a82e80-B2PaWDFh.js";import"./keyboard-6ae239bc-BGgBFUHv.js";import"./vue.esm-bundler-D6ApT1Ci.js";import"./iframe-DpzhTgQt.js";import"../sb-preview/runtime.js";import"./hardware-back-button-597914ed-DP4KxoYw.js";import"./gesture-controller-a29626f0-CKNmfd8r.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */var _;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(_||(_={}));const ne={getEngine(){const e=Ie();if(e!=null&&e.isPluginAvailable("StatusBar"))return e.Plugins.StatusBar},setStyle(e){const t=this.getEngine();t&&t.setStyle(e)},getStyle:async function(){const e=this.getEngine();if(!e)return _.Default;const{style:t}=await e.getInfo();return t}};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const X=(e,t)=>{if(t===1)return 0;const n=1/(1-t),o=-(t*n);return e*n+o},ue=()=>{!K||K.innerWidth>=768||ne.setStyle({style:_.Dark})},ee=(e=_.Default)=>{!K||K.innerWidth>=768||ne.setStyle({style:e})};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const ge=async(e,t)=>{typeof e.canDismiss!="function"||!await e.canDismiss(void 0,$)||(t.isRunning()?t.onFinish(()=>{e.dismiss(void 0,"handler")},{oneTimeCallback:!0}):e.dismiss(void 0,"handler"))},te=e=>.00255275*2.71828**(-14.9619*e)-1.00255*2.71828**(-.0380968*e)+1;/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const j={MIN_PRESENTING_SCALE:.915},Fe=(e,t,n,o)=>{const i=e.offsetHeight;let r=!1,a=!1,d=null,y=null;const k=.2;let m=!0,g=0;const f=()=>d&&J(d)?d.scrollY:!0,N=fe({el:e,gestureName:"modalSwipeToClose",gesturePriority:Ne,direction:"y",threshold:10,canStart:h=>{const p=h.event.target;return p===null||!p.closest?!0:(d=me(p),d?(J(d)?y=Y(d).querySelector(".inner-scroll"):y=d,!!!d.querySelector("ion-refresher")&&y.scrollTop===0):p.closest("ion-footer")===null)},onStart:h=>{const{deltaY:p}=h;m=f(),a=e.canDismiss!==void 0&&e.canDismiss!==!0,p>0&&d&&re(d),t.progressStart(!0,r?1:0)},onMove:h=>{const{deltaY:p}=h;p>0&&d&&re(d);const v=h.deltaY/i,D=v>=0&&a,C=D?k:.9999,R=D?te(v/C):v,A=z(1e-4,R,C);t.progressStep(A),A>=.5&&g<.5?ee(n):A<.5&&g>=.5&&ue(),g=A},onEnd:h=>{const p=h.velocityY,v=h.deltaY/i,D=v>=0&&a,C=D?k:.9999,R=D?te(v/C):v,A=z(1e-4,R,C),V=(h.deltaY+p*1e3)/i,T=!D&&V>=.5;let W=T?-.001:.001;T?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),W+=le([0,0],[.32,.72],[0,1],[1,1],A)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),W+=le([0,0],[1,0],[.68,.28],[1,1],A)[0]);const H=ce(T?v*i:(1-A)*i,p);r=T,N.enable(!1),d&&Ae(d,m),t.onFinish(()=>{T||N.enable(!0)}).progressEnd(T?1:0,W,H),D&&A>C/4?ge(e,t):T&&o()}});return N},ce=(e,t)=>z(400,e/Math.abs(t*1.1),500);/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const be=e=>{const{currentBreakpoint:t,backdropBreakpoint:n}=e,o=n===void 0||n<t,s=o?`calc(var(--backdrop-opacity) * ${t})`:"0",i=c("backdropAnimation").fromTo("opacity",0,s);return o&&i.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:c("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-t*100}%)`}]),backdropAnimation:i}},ye=e=>{const{currentBreakpoint:t,backdropBreakpoint:n}=e,o=`calc(var(--backdrop-opacity) * ${X(t,n)})`,s=[{offset:0,opacity:o},{offset:1,opacity:0}],i=[{offset:0,opacity:o},{offset:n,opacity:0},{offset:1,opacity:0}],r=c("backdropAnimation").keyframes(n!==0?i:s);return{wrapperAnimation:c("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-t*100}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:r}};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const $e=()=>{const e=c().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),t=c().fromTo("transform","translateY(100vh)","translateY(0vh)");return{backdropAnimation:e,wrapperAnimation:t}},pe=(e,t)=>{const{presentingEl:n,currentBreakpoint:o}=t,s=Y(e),{wrapperAnimation:i,backdropAnimation:r}=o!==void 0?be(t):$e();r.addElement(s.querySelector("ion-backdrop")),i.addElement(s.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const a=c("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(i);if(n){const d=window.innerWidth<768,y=n.tagName==="ION-MODAL"&&n.presentingElement!==void 0,k=Y(n),m=c().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),g=document.body;if(d){const f=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",b=y?"-10px":f,l=j.MIN_PRESENTING_SCALE,w=`translateY(${b}) scale(${l})`;m.afterStyles({transform:w}).beforeAddWrite(()=>g.style.setProperty("background-color","black")).addElement(n).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:w,borderRadius:"10px 10px 0 0"}]),a.addAnimation(m)}else if(a.addAnimation(r),!y)i.fromTo("opacity","0","1");else{const b=`translateY(-10px) scale(${y?j.MIN_PRESENTING_SCALE:1})`;m.afterStyles({transform:b}).addElement(k.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:b}]);const l=c().afterStyles({transform:b}).addElement(k.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:b}]);a.addAnimation([m,l])}}else a.addAnimation(r);return a};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const Ge=()=>{const e=c().fromTo("opacity","var(--backdrop-opacity)",0),t=c().fromTo("transform","translateY(0vh)","translateY(100vh)");return{backdropAnimation:e,wrapperAnimation:t}},he=(e,t,n=500)=>{const{presentingEl:o,currentBreakpoint:s}=t,i=Y(e),{wrapperAnimation:r,backdropAnimation:a}=s!==void 0?ye(t):Ge();a.addElement(i.querySelector("ion-backdrop")),r.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const d=c("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(n).addAnimation(r);if(o){const y=window.innerWidth<768,k=o.tagName==="ION-MODAL"&&o.presentingElement!==void 0,m=Y(o),g=c().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(b=>{if(b!==1)return;o.style.setProperty("overflow",""),Array.from(f.querySelectorAll("ion-modal:not(.overlay-hidden)")).filter(w=>w.presentingElement!==void 0).length<=1&&f.style.setProperty("background-color","")}),f=document.body;if(y){const b=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",l=k?"-10px":b,w=j.MIN_PRESENTING_SCALE,P=`translateY(${l}) scale(${w})`;g.addElement(o).keyframes([{offset:0,filter:"contrast(0.85)",transform:P,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),d.addAnimation(g)}else if(d.addAnimation(a),!k)r.fromTo("opacity","1","0");else{const l=`translateY(-10px) scale(${k?j.MIN_PRESENTING_SCALE:1})`;g.addElement(m.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:l},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const w=c().addElement(m.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:l},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);d.addAnimation([g,w])}}else d.addAnimation(a);return d};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const ze=()=>{const e=c().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),t=c().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]);return{backdropAnimation:e,wrapperAnimation:t}},Ke=(e,t)=>{const{currentBreakpoint:n}=t,o=Y(e),{wrapperAnimation:s,backdropAnimation:i}=n!==void 0?be(t):ze();return i.addElement(o.querySelector("ion-backdrop")),s.addElement(o.querySelector(".modal-wrapper")),c().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([i,s])};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const je=()=>{const e=c().fromTo("opacity","var(--backdrop-opacity)",0),t=c().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]);return{backdropAnimation:e,wrapperAnimation:t}},Ve=(e,t)=>{const{currentBreakpoint:n}=t,o=Y(e),{wrapperAnimation:s,backdropAnimation:i}=n!==void 0?ye(t):je();return i.addElement(o.querySelector("ion-backdrop")),s.addElement(o.querySelector(".modal-wrapper")),c().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([i,s])};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const Ue=(e,t,n,o,s,i,r=[],a,d,y)=>{const k=[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}],m=[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-s,opacity:0},{offset:1,opacity:0}],g={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:s!==0?m:k},f=e.querySelector("ion-content"),b=n.clientHeight;let l=o,w=0,P=!1;const N=.95,h=i.childAnimations.find(u=>u.id==="wrapperAnimation"),p=i.childAnimations.find(u=>u.id==="backdropAnimation"),v=r[r.length-1],D=r[0],C=()=>{e.style.setProperty("pointer-events","auto"),t.style.setProperty("pointer-events","auto"),e.classList.remove(Q)},R=()=>{e.style.setProperty("pointer-events","none"),t.style.setProperty("pointer-events","none"),e.classList.add(Q)};h&&p&&(h.keyframes([...g.WRAPPER_KEYFRAMES]),p.keyframes([...g.BACKDROP_KEYFRAMES]),i.progressStart(!0,1-l),l>s?C():R()),f&&l!==v&&(f.scrollY=!1);const A=u=>{const S=me(u.event.target);if(l=a(),l===1&&S){const x=J(S)?Y(S).querySelector(".inner-scroll"):S;return!!!S.querySelector("ion-refresher")&&x.scrollTop===0}return!0},V=u=>{P=e.canDismiss!==void 0&&e.canDismiss!==!0&&D===0,u.deltaY>0&&f&&(f.scrollY=!1),G(()=>{e.focus()}),i.progressStart(!0,1-l)},T=u=>{u.deltaY>0&&f&&(f.scrollY=!1);const S=1-l,x=r.length>1?1-r[1]:void 0,B=S+u.deltaY/b,L=x!==void 0&&B>=x&&P,I=L?N:.9999,E=L&&x!==void 0?x+te((B-x)/(I-x)):B;w=z(1e-4,E,I),i.progressStep(w)},W=u=>{const S=u.velocityY,x=(u.deltaY+S*350)/b,B=l-x,L=r.reduce((I,E)=>Math.abs(E-B)<Math.abs(I-B)?E:I);H({breakpoint:L,breakpointOffset:w,canDismiss:P,animated:!0})},H=u=>{const{breakpoint:S,canDismiss:x,breakpointOffset:B,animated:L}=u,I=x&&S===0,E=I?l:S,ie=E!==0;return l=0,h&&p&&(h.keyframes([{offset:0,transform:`translateY(${B*100}%)`},{offset:1,transform:`translateY(${(1-E)*100}%)`}]),p.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${X(1-B,s)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${X(E,s)})`}]),i.progressStep(0)),q.enable(!1),I?ge(e,i):ie||d(),f&&E===r[r.length-1]&&(f.scrollY=!0),new Promise(U=>{i.onFinish(()=>{ie?h&&p?G(()=>{h.keyframes([...g.WRAPPER_KEYFRAMES]),p.keyframes([...g.BACKDROP_KEYFRAMES]),i.progressStart(!0,1-E),l=E,y(l),l>s?C():R(),q.enable(!0),U()}):(q.enable(!0),U()):U()},{oneTimeCallback:!0}).progressEnd(1,0,L?500:0)})},q=fe({el:n,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:A,onStart:V,onMove:T,onEnd:W});return{gesture:q,moveSheetToBreakpoint:H}},Ze=':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;align-items:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{box-shadow:none}:host(.modal-card) .modal-shadow{box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}',Je=Ze,Qe=':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;align-items:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{transform:translate3d(0,  40px,  0);opacity:0.01}',Xe=Qe,et=class{constructor(e){ke(this,e),this.didPresent=M(this,"ionModalDidPresent",7),this.willPresent=M(this,"ionModalWillPresent",7),this.willDismiss=M(this,"ionModalWillDismiss",7),this.didDismiss=M(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=M(this,"ionBreakpointDidChange",7),this.didPresentShorthand=M(this,"didPresent",7),this.willPresentShorthand=M(this,"willPresent",7),this.willDismissShorthand=M(this,"willDismiss",7),this.didDismissShorthand=M(this,"didDismiss",7),this.ionMount=M(this,"ionMount",7),this.lockController=Te(),this.triggerController=Ye(),this.coreDelegate=Ee(),this.isSheetModal=!1,this.inheritedAttributes={},this.inline=!1,this.gestureAnimationDismissing=!1,this.onHandleClick=()=>{const{sheetTransition:t,handleBehavior:n}=this;n!=="cycle"||t!==void 0||this.moveToNextBreakpoint()},this.onBackdropTap=()=>{const{sheetTransition:t}=this;t===void 0&&this.dismiss(void 0,Pe)},this.onLifecycle=t=>{const n=this.usersElement,o=tt[t.type];if(n&&o){const s=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:t.detail});n.dispatchEvent(s)}},this.presented=!1,this.hasController=!1,this.overlayIndex=void 0,this.delegate=void 0,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.breakpoints=void 0,this.initialBreakpoint=void 0,this.backdropBreakpoint=0,this.handle=void 0,this.handleBehavior="none",this.component=void 0,this.componentProps=void 0,this.cssClass=void 0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.presentingElement=void 0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0,this.keepContentsMounted=!1,this.focusTrap=!0,this.canDismiss=!0}onIsOpenChange(e,t){e===!0&&t===!1?this.present():e===!1&&t===!0&&this.dismiss()}triggerChanged(){const{trigger:e,el:t,triggerController:n}=this;e&&n.addClickListener(t,e)}breakpointsChanged(e){e!==void 0&&(this.sortedBreakpoints=e.sort((t,n)=>t-n))}connectedCallback(){const{el:e}=this;Re(e),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){var e;const{breakpoints:t,initialBreakpoint:n,el:o,htmlAttributes:s}=this,i=this.isSheetModal=t!==void 0&&n!==void 0,r=["aria-label","role"];this.inheritedAttributes=Be(o,r),s!==void 0&&r.forEach(a=>{s[a]&&(this.inheritedAttributes=Object.assign(Object.assign({},this.inheritedAttributes),{[a]:s[a]}),delete s[a])}),i&&(this.currentBreakpoint=this.initialBreakpoint),t!==void 0&&n!==void 0&&!t.includes(n)&&Z("Your breakpoints array must include the initialBreakpoint value."),!((e=this.htmlAttributes)===null||e===void 0)&&e.id||Le(this.el)}componentDidLoad(){this.isOpen===!0&&G(()=>this.present()),this.breakpointsChanged(this.breakpoints),this.triggerChanged()}getDelegate(e=!1){if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};const t=this.el.parentNode,n=this.inline=t!==null&&!this.hasController,o=this.workingDelegate=n?this.delegate||this.coreDelegate:this.delegate;return{inline:n,delegate:o}}async checkCanDismiss(e,t){const{canDismiss:n}=this;return typeof n=="function"?n(e,t):n}async present(){const e=await this.lockController.lock();if(this.presented){e();return}const{presentingElement:t,el:n}=this;this.currentBreakpoint=this.initialBreakpoint;const{inline:o,delegate:s}=this.getDelegate(!0);this.ionMount.emit(),this.usersElement=await De(s,n,this.component,["ion-page"],this.componentProps,o),Me(n)?await He(this.usersElement):this.keepContentsMounted||await qe(),oe(()=>this.el.classList.add("show-modal"));const i=t!==void 0;i&&F(this)==="ios"&&(this.statusBarStyle=await ne.getStyle(),ue()),await Oe(this,"modalEnter",pe,Ke,{presentingEl:t,currentBreakpoint:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint}),typeof window<"u"&&(this.keyboardOpenCallback=()=>{this.gesture&&(this.gesture.enable(!1),G(()=>{this.gesture&&this.gesture.enable(!0)}))},window.addEventListener(de,this.keyboardOpenCallback)),this.isSheetModal?this.initSheetGesture():i&&this.initSwipeToClose(),e()}initSwipeToClose(){var e;if(F(this)!=="ios")return;const{el:t}=this,n=this.leaveAnimation||se.get("modalLeave",he),o=this.animation=n(t,{presentingEl:this.presentingElement});if(!xe(t)){ve(t);return}const i=(e=this.statusBarStyle)!==null&&e!==void 0?e:_.Default;this.gesture=Fe(t,o,i,()=>{this.gestureAnimationDismissing=!0,ee(this.statusBarStyle),this.animation.onFinish(async()=>{await this.dismiss(void 0,$),this.gestureAnimationDismissing=!1})}),this.gesture.enable(!0)}initSheetGesture(){const{wrapperEl:e,initialBreakpoint:t,backdropBreakpoint:n}=this;if(!e||t===void 0)return;const o=this.enterAnimation||se.get("modalEnter",pe),s=this.animation=o(this.el,{presentingEl:this.presentingElement,currentBreakpoint:t,backdropBreakpoint:n});s.progressStart(!0,1);const{gesture:i,moveSheetToBreakpoint:r}=Ue(this.el,this.backdropEl,e,t,n,s,this.sortedBreakpoints,()=>{var a;return(a=this.currentBreakpoint)!==null&&a!==void 0?a:0},()=>this.sheetOnDismiss(),a=>{this.currentBreakpoint!==a&&(this.currentBreakpoint=a,this.ionBreakpointDidChange.emit({breakpoint:a}))});this.gesture=i,this.moveSheetToBreakpoint=r,this.gesture.enable(!0)}sheetOnDismiss(){this.gestureAnimationDismissing=!0,this.animation.onFinish(async()=>{this.currentBreakpoint=0,this.ionBreakpointDidChange.emit({breakpoint:this.currentBreakpoint}),await this.dismiss(void 0,$),this.gestureAnimationDismissing=!1})}async dismiss(e,t){var n;if(this.gestureAnimationDismissing&&t!==$)return!1;const o=await this.lockController.lock();if(t!=="handler"&&!await this.checkCanDismiss(e,t))return o(),!1;const{presentingElement:s}=this;s!==void 0&&F(this)==="ios"&&ee(this.statusBarStyle),typeof window<"u"&&this.keyboardOpenCallback&&(window.removeEventListener(de,this.keyboardOpenCallback),this.keyboardOpenCallback=void 0);const r=await _e(this,e,t,"modalLeave",he,Ve,{presentingEl:s,currentBreakpoint:(n=this.currentBreakpoint)!==null&&n!==void 0?n:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint});if(r){const{delegate:a}=this.getDelegate();await Ce(a,this.usersElement),oe(()=>this.el.classList.remove("show-modal")),this.animation&&this.animation.destroy(),this.gesture&&this.gesture.destroy()}return this.currentBreakpoint=void 0,this.animation=void 0,o(),r}onDidDismiss(){return ae(this.el,"ionModalDidDismiss")}onWillDismiss(){return ae(this.el,"ionModalWillDismiss")}async setCurrentBreakpoint(e){if(!this.isSheetModal){Z("setCurrentBreakpoint is only supported on sheet modals.");return}if(!this.breakpoints.includes(e)){Z(`Attempted to set invalid breakpoint value ${e}. Please double check that the breakpoint value is part of your defined breakpoints.`);return}const{currentBreakpoint:t,moveSheetToBreakpoint:n,canDismiss:o,breakpoints:s,animated:i}=this;t!==e&&n&&(this.sheetTransition=n({breakpoint:e,breakpointOffset:1-t,canDismiss:o!==void 0&&o!==!0&&s[0]===0,animated:i}),await this.sheetTransition,this.sheetTransition=void 0)}async getCurrentBreakpoint(){return this.currentBreakpoint}async moveToNextBreakpoint(){const{breakpoints:e,currentBreakpoint:t}=this;if(!e||t==null)return!1;const n=e.filter(r=>r!==0),s=(n.indexOf(t)+1)%n.length,i=n[s];return await this.setCurrentBreakpoint(i),!0}render(){const{handle:e,isSheetModal:t,presentingElement:n,htmlAttributes:o,handleBehavior:s,inheritedAttributes:i,focusTrap:r}=this,a=e!==!1&&t,d=F(this),y=n!==void 0&&d==="ios",k=s==="cycle";return O(we,Object.assign({key:"b4da5111fe4719fa450c39b2d4bd884a302a7924","no-router":!0,tabindex:"-1"},o,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[d]:!0,"modal-default":!y&&!t,"modal-card":y,"modal-sheet":t,"overlay-hidden":!0,[Q]:r===!1},We(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),O("ion-backdrop",{key:"c12dbf747e0eb914eaf1331798548ffc7e147763",ref:m=>this.backdropEl=m,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),d==="ios"&&O("div",{key:"da546ee80c6576b5acc66e959fd5009e0b9a8160",class:"modal-shadow"}),O("div",Object.assign({key:"306ebe6427440ad5f7ed36d590e562d15a503b75",role:"dialog"},i,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:m=>this.wrapperEl=m}),a&&O("button",{key:"c5d17e346fe255a7c0cacbbf15c0083f2d09c488",class:"modal-handle",tabIndex:k?0:-1,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:k?this.onHandleClick:void 0,part:"handle"}),O("slot",{key:"5cc714170a00b67f3eda0cd1d6f37c1489a99c83"})))}get el(){return Se(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},tt={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};et.style={ios:Je,md:Xe};export{et as ion_modal};
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ios.transition-4cceeb23-C29PREyn.js","./animation-aa17f0ca-uhoxsK6h.js","./index-d9a82e80-B2PaWDFh.js","./index-B0oma6gn.js","./vue.esm-bundler-cJVerQom.js","./iframe-DcUhiSIc.js","./index-1e38abc5-CfLTl0tl.js","./helpers-4047ce7f-ZS1Xs9E2.js","./md.transition-8a3cab5a-BW6nrYja.js"])))=>i.map(i=>d[i]);
import{_ as w}from"./iframe-DcUhiSIc.js";import{w as P,B as p,a as f}from"./index-B0oma6gn.js";import{p as A}from"./index-1e38abc5-CfLTl0tl.js";import{r as m}from"./helpers-4047ce7f-ZS1Xs9E2.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const F="ionViewWillEnter",h="ionViewDidEnter",I="ionViewWillLeave",V="ionViewDidLeave",H="ionViewWillUnload";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const o=e=>{e.tabIndex=-1,e.focus()},r=e=>e.offsetParent!==null,T=()=>({saveViewFocus:i=>{if(f.get("focusManagerPriority",!1)){const a=document.activeElement;a!==null&&(i!=null&&i.contains(a))&&a.setAttribute(E,"true")}},setViewFocus:i=>{const t=f.get("focusManagerPriority",!1);if(Array.isArray(t)&&!i.contains(document.activeElement)){const a=i.querySelector(`[${E}]`);if(a&&r(a)){o(a);return}for(const s of t)switch(s){case"content":const l=i.querySelector('main, [role="main"]');if(l&&r(l)){o(l);return}break;case"heading":const u=i.querySelector('h1, [role="heading"][aria-level="1"]');if(u&&r(u)){o(u);return}break;case"banner":const d=i.querySelector('header, [role="banner"]');if(d&&r(d)){o(d);return}break;default:A(`Unrecognized focus manager priority value ${s}`);break}o(i)}}}),E="ion-last-focus";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const k=()=>w(()=>import("./ios.transition-4cceeb23-C29PREyn.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),D=()=>w(()=>import("./md.transition-8a3cab5a-BW6nrYja.js"),__vite__mapDeps([8,1,2,3,4,5,6,7]),import.meta.url),L=T(),$=e=>new Promise((n,i)=>{P(()=>{W(e),R(e).then(t=>{t.animation&&t.animation.destroy(),v(e),n(t)},t=>{v(e),i(t)})})}),W=e=>{const n=e.enteringEl,i=e.leavingEl;L.saveViewFocus(i),x(n,i,e.direction),e.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),y(n,!1),n.style.setProperty("pointer-events","none"),i&&(y(i,!1),i.style.setProperty("pointer-events","none"))},R=async e=>{const n=await B(e);return n&&p.isBrowser?M(n,e):S(e)},v=e=>{const n=e.enteringEl,i=e.leavingEl;n.classList.remove("ion-page-invisible"),n.style.removeProperty("pointer-events"),i!==void 0&&(i.classList.remove("ion-page-invisible"),i.style.removeProperty("pointer-events")),L.setViewFocus(n)},B=async e=>!e.leavingEl||!e.animated||e.duration===0?void 0:e.animationBuilder?e.animationBuilder:e.mode==="ios"?(await k()).iosTransitionAnimation:(await D()).mdTransitionAnimation,M=async(e,n)=>{await b(n,!0);const i=e(n.baseEl,n);_(n.enteringEl,n.leavingEl);const t=await q(i,n);return n.progressCallback&&n.progressCallback(void 0),t&&C(n.enteringEl,n.leavingEl),{hasCompleted:t,animation:i}},S=async e=>{const n=e.enteringEl,i=e.leavingEl,t=f.get("focusManagerPriority",!1);return await b(e,t),_(n,i),C(n,i),{hasCompleted:!0}},b=async(e,n)=>{(e.deepWait!==void 0?e.deepWait:n)&&await Promise.all([g(e.enteringEl),g(e.leavingEl)]),await O(e.viewIsReady,e.enteringEl)},O=async(e,n)=>{e&&await e(n)},q=(e,n)=>{const i=n.progressCallback,t=new Promise(a=>{e.onFinish(s=>a(s===1))});return i?(e.progressStart(!0),i(e)):e.play(),t},_=(e,n)=>{c(n,I),c(e,F)},C=(e,n)=>{c(e,h),c(n,V)},c=(e,n)=>{if(e){const i=new CustomEvent(n,{bubbles:!1,cancelable:!1});e.dispatchEvent(i)}},G=()=>new Promise(e=>m(()=>m(()=>e()))),g=async e=>{const n=e;if(n){if(n.componentOnReady!=null){if(await n.componentOnReady()!=null)return}else if(n.__registerHost!=null){await new Promise(t=>m(t));return}await Promise.all(Array.from(n.children).map(g))}},y=(e,n)=>{n?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},x=(e,n,i)=>{e!==void 0&&(e.style.zIndex=i==="back"?"99":"101"),n!==void 0&&(n.style.zIndex="100")},Z=e=>{if(e.classList.contains("ion-page"))return e;const n=e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return n||e};export{H as L,I as a,V as b,g as d,Z as g,c as l,y as s,$ as t,G as w};

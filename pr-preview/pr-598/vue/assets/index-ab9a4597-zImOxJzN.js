const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ios.transition-a4c607f1-CNBLYc9f.js","./animation-022a9434-BW6ZVdxK.js","./index-d9a82e80-B2PaWDFh.js","./helpers-079c01eb-D592YRe8.js","./index-B-JC0Iz5.js","./vue.esm-bundler-B2N54QI-.js","./iframe-PYrbdLgI.js","./md.transition-5e516421-D5nhVawS.js"])))=>i.map(i=>d[i]);
import{_ as c}from"./iframe-PYrbdLgI.js";import{w as g,B as v}from"./index-B-JC0Iz5.js";import{r as o}from"./helpers-079c01eb-D592YRe8.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const w="ionViewWillEnter",L="ionViewDidEnter",y="ionViewWillLeave",_="ionViewDidLeave",W="ionViewWillUnload";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const C=()=>c(()=>import("./ios.transition-a4c607f1-CNBLYc9f.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),b=()=>c(()=>import("./md.transition-5e516421-D5nhVawS.js"),__vite__mapDeps([7,1,2,3,4,5,6]),import.meta.url),B=n=>new Promise((e,i)=>{g(()=>{A(n),I(n).then(t=>{t.animation&&t.animation.destroy(),s(n),e(t)},t=>{s(n),i(t)})})}),A=n=>{const e=n.enteringEl,i=n.leavingEl;F(e,i,n.direction),n.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),l(e,!1),e.style.setProperty("pointer-events","none"),i&&(l(i,!1),i.style.setProperty("pointer-events","none"))},I=async n=>{const e=await P(n);return e&&v.isBrowser?p(e,n):T(n)},s=n=>{const e=n.enteringEl,i=n.leavingEl;e.classList.remove("ion-page-invisible"),e.style.removeProperty("pointer-events"),i!==void 0&&(i.classList.remove("ion-page-invisible"),i.style.removeProperty("pointer-events"))},P=async n=>!n.leavingEl||!n.animated||n.duration===0?void 0:n.animationBuilder?n.animationBuilder:n.mode==="ios"?(await C()).iosTransitionAnimation:(await b()).mdTransitionAnimation,p=async(n,e)=>{await d(e,!0);const i=n(e.baseEl,e);m(e.enteringEl,e.leavingEl);const t=await D(i,e);return e.progressCallback&&e.progressCallback(void 0),t&&E(e.enteringEl,e.leavingEl),{hasCompleted:t,animation:i}},T=async n=>{const e=n.enteringEl,i=n.leavingEl;return await d(n,!1),m(e,i),E(e,i),{hasCompleted:!0}},d=async(n,e)=>{(n.deepWait!==void 0?n.deepWait:e)&&await Promise.all([r(n.enteringEl),r(n.leavingEl)]),await h(n.viewIsReady,n.enteringEl)},h=async(n,e)=>{n&&await n(e)},D=(n,e)=>{const i=e.progressCallback,t=new Promise(f=>{n.onFinish(u=>f(u===1))});return i?(n.progressStart(!0),i(n)):n.play(),t},m=(n,e)=>{a(e,y),a(n,w)},E=(n,e)=>{a(n,L),a(e,_)},a=(n,e)=>{if(n){const i=new CustomEvent(e,{bubbles:!1,cancelable:!1});n.dispatchEvent(i)}},O=()=>new Promise(n=>o(()=>o(()=>n()))),r=async n=>{const e=n;if(e){if(e.componentOnReady!=null){if(await e.componentOnReady()!=null)return}else if(e.__registerHost!=null){await new Promise(t=>o(t));return}await Promise.all(Array.from(e.children).map(r))}},l=(n,e)=>{e?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))},F=(n,e,i)=>{n!==void 0&&(n.style.zIndex=i==="back"?"99":"101"),e!==void 0&&(e.style.zIndex="100")},Y=n=>{if(n.classList.contains("ion-page"))return n;const e=n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return e||n};export{W as L,y as a,_ as b,r as d,Y as g,a as l,l as s,B as t,O as w};

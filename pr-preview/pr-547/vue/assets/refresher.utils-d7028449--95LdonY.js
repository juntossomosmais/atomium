import{w as m}from"./index-DjaqtvPH.js";import{c as a}from"./animation-022a9434-BW6ZVdxK.js";import{t as u,d as g,f as h}from"./helpers-079c01eb-D592YRe8.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const E=t=>{const e=t.previousElementSibling;return e!==null&&e.tagName==="ION-HEADER"?"translate":"scale"},b=(t,e,r)=>t==="scale"?x(e,r):A(e,r),p=t=>{const e=t.querySelector("ion-spinner"),r=e.shadowRoot.querySelector("circle"),n=t.querySelector(".spinner-arrow-container"),o=t.querySelector(".arrow-container"),s=o?o.querySelector("ion-icon"):null,i=a().duration(1e3).easing("ease-out"),c=a().addElement(n).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),f=a().addElement(r).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),l=a().addElement(e).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(o&&s){const d=a().addElement(o).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),y=a().addElement(s).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);i.addAnimation([d,y])}return i.addAnimation([c,f,l])},x=(t,e)=>{const r=e.clientHeight,n=a().addElement(t).keyframes([{offset:0,transform:`scale(0) translateY(-${r}px)`},{offset:1,transform:"scale(1) translateY(100px)"}]);return p(t).addAnimation([n])},A=(t,e)=>{const r=e.clientHeight,n=a().addElement(t).keyframes([{offset:0,transform:`translateY(-${r}px)`},{offset:1,transform:"translateY(100px)"}]);return p(t).addAnimation([n])},q=t=>a().duration(125).addElement(t).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)"),v=(t,e)=>{t.style.setProperty("opacity",e.toString())},C=(t,e,r)=>{m(()=>{t.forEach((o,s)=>{const i=s*(1/e),c=1-i,f=r-i,l=h(0,f/c,1);o.style.setProperty("opacity",l.toString())})})},Y=(t,e)=>{m(()=>{t.style.setProperty("--refreshing-rotation-duration",e>=1?"0.5s":"2s"),t.style.setProperty("opacity","1")})},D=(t,e,r=200)=>{if(!t)return Promise.resolve();const n=u(t,r);return m(()=>{t.style.setProperty("transition",`${r}ms all ease-out`),e===void 0?t.style.removeProperty("transform"):t.style.setProperty("transform",`translate3d(0px, ${e}, 0px)`)}),n},S=()=>navigator.maxTouchPoints>0&&CSS.supports("background: -webkit-named-image(apple-pay-logo-black)"),H=async(t,e)=>{const r=t.querySelector("ion-refresher-content");if(!r)return Promise.resolve(!1);await new Promise(s=>g(r,s));const n=t.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),o=t.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");return n!==null&&o!==null&&(e==="ios"&&S()||e==="md")};export{v as a,C as b,b as c,q as d,S as e,E as g,Y as h,H as s,D as t};

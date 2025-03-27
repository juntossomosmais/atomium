import{d as c}from"./index-d9a82e80-B2PaWDFh.js";import{h as S,a as k,e as N,b as _,g as B}from"./helpers-4047ce7f-B-sfu2GX.js";import{OVERLAY_BACK_BUTTON_PRIORITY as q,shouldUseCloseWatcher as V}from"./hardware-back-button-0c101e28-BIGVc6fF.js";import{b as C,a as v,i as j}from"./index-BSZCsw-e.js";import{C as G}from"./framework-delegate-b2edfa06-BEMvclb1.js";import{B as D}from"./gesture-controller-a29626f0-CKNmfd8r.js";import{p as U}from"./index-1e38abc5-CfLTl0tl.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const f='[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-checkbox:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-radio:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])',y=(e,n)=>{const t=e.querySelector(f);I(t,n??e)},A=(e,n)=>{const t=Array.from(e.querySelectorAll(f)),o=t.length>0?t[t.length-1]:null;I(o,n??e)},I=(e,n)=>{let t=e;const o=e==null?void 0:e.shadowRoot;if(o&&(t=o.querySelector(f)||e),t){const i=t.closest("ion-radio-group");i?i.setFocus():S(t)}else n.focus()};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */let b=0,M=0;const p=new WeakMap,h=e=>({create(n){return W(e,n)},dismiss(n,t,o){return $(document,n,t,e,o)},async getTop(){return m(document,e)}}),ue=h("ion-alert"),me=h("ion-action-sheet"),fe=h("ion-modal"),pe=h("ion-popover"),ve=e=>{typeof document<"u"&&H(document);const n=b++;e.overlayIndex=n},he=e=>(e.hasAttribute("id")||(e.id=`ion-overlay-${++M}`),e.id),W=(e,n)=>typeof window<"u"&&typeof window.customElements<"u"?window.customElements.whenDefined(e).then(()=>{const t=document.createElement(e);return t.classList.add("overlay-hidden"),Object.assign(t,Object.assign(Object.assign({},n),{hasController:!0})),T(document).appendChild(t),new Promise(o=>N(t,o))}):Promise.resolve(),K=e=>e.classList.contains("overlay-hidden"),E=(e,n)=>{let t=e;const o=e==null?void 0:e.shadowRoot;o&&(t=o.querySelector(f)||e),t?S(t):n.focus()},Y=(e,n)=>{const t=m(n,"ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover"),o=e.target;if(!t||!o||t.classList.contains(ne))return;const i=()=>{if(t===o)t.lastFocus=void 0;else if(o.tagName==="ION-TOAST")E(t.lastFocus,t);else{const a=B(t);if(!a.contains(o))return;const s=a.querySelector(".ion-overlay-wrapper");if(!s)return;if(s.contains(o)||o===a.querySelector("ion-backdrop"))t.lastFocus=o;else{const d=t.lastFocus;y(s,t),d===n.activeElement&&A(s,t),t.lastFocus=n.activeElement}}},r=()=>{if(t.contains(o))t.lastFocus=o;else if(o.tagName==="ION-TOAST")E(t.lastFocus,t);else{const a=t.lastFocus;y(t),a===n.activeElement&&A(t),t.lastFocus=n.activeElement}};t.shadowRoot?r():i()},H=e=>{b===0&&(b=1,e.addEventListener("focus",n=>{Y(n,e)},!0),e.addEventListener("ionBackButton",n=>{const t=m(e);t!=null&&t.backdropDismiss&&n.detail.register(q,()=>{t.dismiss(void 0,w)})}),V()||e.addEventListener("keydown",n=>{if(n.key==="Escape"){const t=m(e);t!=null&&t.backdropDismiss&&t.dismiss(void 0,w)}}))},$=(e,n,t,o,i)=>{const r=m(e,o,i);return r?r.dismiss(n,t):Promise.reject("overlay does not exist")},z=(e,n)=>(n===void 0&&(n="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover,ion-toast"),Array.from(e.querySelectorAll(n)).filter(t=>t.overlayIndex>0)),g=(e,n)=>z(e,n).filter(t=>!K(t)),m=(e,n,t)=>{const o=g(e,n);return t===void 0?o[o.length-1]:o.find(i=>i.id===t)},R=(e=!1)=>{const t=T(document).querySelector("ion-router-outlet, ion-nav, #ion-view-container-root");t&&(e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden"))},ge=async(e,n,t,o,i)=>{var r,a;if(e.presented)return;e.el.tagName!=="ION-TOAST"&&R(!0),document.body.classList.add(D),ee(e.el),x(e.el),e.presented=!0,e.willPresent.emit(),(r=e.willPresentShorthand)===null||r===void 0||r.emit();const s=C(e),d=e.enterAnimation?e.enterAnimation:v.get(n,s==="ios"?t:o);await L(e,d,e.el,i)&&(e.didPresent.emit(),(a=e.didPresentShorthand)===null||a===void 0||a.emit()),e.el.tagName!=="ION-TOAST"&&Q(e.el),e.keyboardClose&&(document.activeElement===null||!e.el.contains(document.activeElement))&&e.el.focus(),e.el.removeAttribute("aria-hidden")},Q=async e=>{let n=document.activeElement;if(!n)return;const t=n==null?void 0:n.shadowRoot;t&&(n=t.querySelector(f)||n),await e.onDidDismiss(),(document.activeElement===null||document.activeElement===document.body)&&n.focus()},Oe=async(e,n,t,o,i,r,a)=>{var s,d;if(!e.presented)return!1;const l=c!==void 0?g(c).filter(u=>u.tagName!=="ION-TOAST"):[];l.length===1&&l[0].id===e.el.id&&(R(!1),document.body.classList.remove(D)),e.presented=!1;try{x(e.el),e.el.style.setProperty("pointer-events","none"),e.willDismiss.emit({data:n,role:t}),(s=e.willDismissShorthand)===null||s===void 0||s.emit({data:n,role:t});const u=C(e),F=e.leaveAnimation?e.leaveAnimation:v.get(o,u==="ios"?i:r);t!==Z&&await L(e,F,e.el,a),e.didDismiss.emit({data:n,role:t}),(d=e.didDismissShorthand)===null||d===void 0||d.emit({data:n,role:t}),(p.get(e)||[]).forEach(P=>P.destroy()),p.delete(e),e.el.classList.add("overlay-hidden"),e.el.style.removeProperty("pointer-events"),e.el.lastFocus!==void 0&&(e.el.lastFocus=void 0)}catch(u){console.error(u)}return e.el.remove(),te(),!0},T=e=>e.querySelector("ion-app")||e.body,L=async(e,n,t,o)=>{t.classList.remove("overlay-hidden");const i=e.el,r=n(i,o);(!e.animated||!v.getBoolean("animated",!0))&&r.duration(0),e.keyboardClose&&r.beforeAddWrite(()=>{const s=t.ownerDocument.activeElement;s!=null&&s.matches("input,ion-input, ion-textarea")&&s.blur()});const a=p.get(e)||[];return p.set(e,[...a,r]),await r.play(),!0},be=(e,n)=>{let t;const o=new Promise(i=>t=i);return J(e,n,i=>{t(i.detail)}),o},J=(e,n,t)=>{const o=i=>{_(e,n,o),t(i)};k(e,n,o)},we=e=>e==="cancel"||e===w,X=e=>e(),ye=(e,n)=>{if(typeof e=="function")return v.get("_zoneGate",X)(()=>{try{return e(n)}catch(o){throw o}})},w="backdrop",Z="gesture",Ae=39,Ee=e=>{let n=!1,t;const o=G(),i=(s=!1)=>{if(t&&!s)return{delegate:t,inline:n};const{el:d,hasController:l,delegate:O}=e;return n=d.parentNode!==null&&!l,t=n?O||o:O,{inline:n,delegate:t}};return{attachViewToDom:async s=>{const{delegate:d}=i(!0);if(d)return await d.attachViewToDom(e.el,s);const{hasController:l}=e;if(l&&s!==void 0)throw new Error("framework delegate is missing");return null},removeViewFromDom:()=>{const{delegate:s}=i();s&&e.el!==void 0&&s.removeViewFromDom(e.el.parentElement,e.el)}}},Se=()=>{let e;const n=()=>{e&&(e(),e=void 0)};return{addClickListener:(o,i)=>{n();const r=i!==void 0?document.getElementById(i):null;if(!r){U(`A trigger element with the ID "${i}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`,o);return}e=((s,d)=>{const l=()=>{d.present()};return s.addEventListener("click",l),()=>{s.removeEventListener("click",l)}})(r,o)},removeClickListener:n}},x=e=>{c!==void 0&&j("android")&&e.setAttribute("aria-hidden","true")},ee=e=>{var n;if(c===void 0)return;const t=g(c);for(let o=t.length-1;o>=0;o--){const i=t[o],r=(n=t[o+1])!==null&&n!==void 0?n:e;(r.hasAttribute("aria-hidden")||r.tagName!=="ION-TOAST")&&i.setAttribute("aria-hidden","true")}},te=()=>{if(c===void 0)return;const e=g(c);for(let n=e.length-1;n>=0;n--){const t=e[n];if(t.removeAttribute("aria-hidden"),t.tagName!=="ION-TOAST")break}},ne="ion-disable-focus-trap";export{w as B,ne as F,Z as G,Ae as O,Se as a,ge as b,Ee as c,Oe as d,be as e,y as f,m as g,A as h,we as i,ye as j,pe as k,me as l,ue as m,fe as n,ve as p,he as s};

import{d as c}from"./index-d9a82e80-98865fd5.js";import{OVERLAY_BACK_BUTTON_PRIORITY as k,shouldUseCloseWatcher as R}from"./hardware-back-button-3e887a79-3609b143.js";import{b as A,a as v}from"./index-273e4037.js";import{C as F}from"./framework-delegate-bec700a6-3376338a.js";import{k as L,a as x,d as P,b as _,g as B}from"./helpers-079c01eb-656b014e.js";import{p as q}from"./index-f5dbb989-d3aae511.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */let b=0,V=0;const f=new WeakMap,O=e=>({create(n){return N(e,n)},dismiss(n,t,o){return W(document,n,t,e,o)},async getTop(){return u(document,e)}}),oe=O("ion-alert"),ie=O("ion-action-sheet"),se=O("ion-popover"),re=e=>{typeof document<"u"&&M(document);const n=b++;e.overlayIndex=n},ae=e=>(e.hasAttribute("id")||(e.id=`ion-overlay-${++V}`),e.id),N=(e,n)=>typeof window<"u"&&typeof window.customElements<"u"?window.customElements.whenDefined(e).then(()=>{const t=document.createElement(e);return t.classList.add("overlay-hidden"),Object.assign(t,Object.assign(Object.assign({},n),{hasController:!0})),S(document).appendChild(t),new Promise(o=>P(t,o))}):Promise.resolve(),h='[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])',j=e=>e.classList.contains("overlay-hidden"),y=(e,n)=>{const t=e.querySelector(h);p(t,n)},E=(e,n)=>{const t=Array.from(e.querySelectorAll(h)),o=t.length>0?t[t.length-1]:null;p(o,n)},p=(e,n)=>{let t=e;const o=e==null?void 0:e.shadowRoot;o&&(t=o.querySelector(h)||e),t?L(t):n.focus()},G=(e,n)=>{const t=u(n,"ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover"),o=e.target;if(!t||!o||t.classList.contains("ion-disable-focus-trap"))return;const i=()=>{if(t===o)t.lastFocus=void 0;else if(o.tagName==="ION-TOAST")p(t.lastFocus,t);else{const a=B(t);if(!a.contains(o))return;const s=a.querySelector(".ion-overlay-wrapper");if(!s)return;if(s.contains(o)||o===a.querySelector("ion-backdrop"))t.lastFocus=o;else{const d=t.lastFocus;y(s,t),d===n.activeElement&&E(s,t),t.lastFocus=n.activeElement}}},r=()=>{if(t.contains(o))t.lastFocus=o;else if(o.tagName==="ION-TOAST")p(t.lastFocus,t);else{const a=t.lastFocus;y(t,t),a===n.activeElement&&E(t,t),t.lastFocus=n.activeElement}};t.shadowRoot?r():i()},M=e=>{b===0&&(b=1,e.addEventListener("focus",n=>{G(n,e)},!0),e.addEventListener("ionBackButton",n=>{const t=u(e);t!=null&&t.backdropDismiss&&n.detail.register(k,()=>{t.dismiss(void 0,w)})}),R()||e.addEventListener("keydown",n=>{if(n.key==="Escape"){const t=u(e);t!=null&&t.backdropDismiss&&t.dismiss(void 0,w)}}))},W=(e,n,t,o,i)=>{const r=u(e,o,i);return r?r.dismiss(n,t):Promise.reject("overlay does not exist")},U=(e,n)=>(n===void 0&&(n="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(e.querySelectorAll(n)).filter(t=>t.overlayIndex>0)),g=(e,n)=>U(e,n).filter(t=>!j(t)),u=(e,n,t)=>{const o=g(e,n);return t===void 0?o[o.length-1]:o.find(i=>i.id===t)},D=(e=!1)=>{const t=S(document).querySelector("ion-router-outlet, ion-nav, #ion-view-container-root");t&&(e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden"))},de=async(e,n,t,o,i)=>{var r,a;if(e.presented)return;D(!0),z(e.el),e.presented=!0,e.willPresent.emit(),(r=e.willPresentShorthand)===null||r===void 0||r.emit();const s=A(e),d=e.enterAnimation?e.enterAnimation:v.get(n,s==="ios"?t:o);await I(e,d,e.el,i)&&(e.didPresent.emit(),(a=e.didPresentShorthand)===null||a===void 0||a.emit()),e.el.tagName!=="ION-TOAST"&&Y(e.el),e.keyboardClose&&(document.activeElement===null||!e.el.contains(document.activeElement))&&e.el.focus(),e.el.removeAttribute("aria-hidden")},Y=async e=>{let n=document.activeElement;if(!n)return;const t=n==null?void 0:n.shadowRoot;t&&(n=t.querySelector(h)||n),await e.onDidDismiss(),(document.activeElement===null||document.activeElement===document.body)&&n.focus()},le=async(e,n,t,o,i,r,a)=>{var s,d;if(!e.presented)return!1;c!==void 0&&g(c).length===1&&D(!1),e.presented=!1;try{e.el.style.setProperty("pointer-events","none"),e.willDismiss.emit({data:n,role:t}),(s=e.willDismissShorthand)===null||s===void 0||s.emit({data:n,role:t});const l=A(e),m=e.leaveAnimation?e.leaveAnimation:v.get(o,l==="ios"?i:r);t!==$&&await I(e,m,e.el,a),e.didDismiss.emit({data:n,role:t}),(d=e.didDismissShorthand)===null||d===void 0||d.emit({data:n,role:t}),(f.get(e)||[]).forEach(T=>T.destroy()),f.delete(e),e.el.classList.add("overlay-hidden"),e.el.style.removeProperty("pointer-events"),e.el.lastFocus!==void 0&&(e.el.lastFocus=void 0)}catch(l){console.error(l)}return e.el.remove(),Q(),!0},S=e=>e.querySelector("ion-app")||e.body,I=async(e,n,t,o)=>{t.classList.remove("overlay-hidden");const i=e.el,r=n(i,o);(!e.animated||!v.getBoolean("animated",!0))&&r.duration(0),e.keyboardClose&&r.beforeAddWrite(()=>{const s=t.ownerDocument.activeElement;s!=null&&s.matches("input,ion-input, ion-textarea")&&s.blur()});const a=f.get(e)||[];return f.set(e,[...a,r]),await r.play(),!0},ce=(e,n)=>{let t;const o=new Promise(i=>t=i);return K(e,n,i=>{t(i.detail)}),o},K=(e,n,t)=>{const o=i=>{_(e,n,o),t(i)};x(e,n,o)},ue=e=>e==="cancel"||e===w,H=e=>e(),me=(e,n)=>{if(typeof e=="function")return v.get("_zoneGate",H)(()=>{try{return e(n)}catch(o){throw o}})},w="backdrop",$="gesture",fe=39,pe=e=>{let n=!1,t;const o=F(),i=(s=!1)=>{if(t&&!s)return{delegate:t,inline:n};const{el:d,hasController:l,delegate:m}=e;return n=d.parentNode!==null&&!l,t=n?m||o:m,{inline:n,delegate:t}};return{attachViewToDom:async s=>{const{delegate:d}=i(!0);if(d)return await d.attachViewToDom(e.el,s);const{hasController:l}=e;if(l&&s!==void 0)throw new Error("framework delegate is missing");return null},removeViewFromDom:()=>{const{delegate:s}=i();s&&e.el!==void 0&&s.removeViewFromDom(e.el.parentElement,e.el)}}},ve=()=>{let e;const n=()=>{e&&(e(),e=void 0)};return{addClickListener:(o,i)=>{n();const r=i!==void 0?document.getElementById(i):null;if(!r){q(`A trigger element with the ID "${i}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`,o);return}e=((s,d)=>{const l=()=>{d.present()};return s.addEventListener("click",l),()=>{s.removeEventListener("click",l)}})(r,o)},removeClickListener:n}},z=e=>{var n;if(c===void 0)return;const t=g(c);for(let o=t.length-1;o>=0;o--){const i=t[o],r=(n=t[o+1])!==null&&n!==void 0?n:e;(r.hasAttribute("aria-hidden")||r.tagName!=="ION-TOAST")&&i.setAttribute("aria-hidden","true")}},Q=()=>{if(c===void 0)return;const e=g(c);for(let n=e.length-1;n>=0;n--){const t=e[n];if(t.removeAttribute("aria-hidden"),t.tagName!=="ION-TOAST")break}};export{w as B,$ as G,fe as O,ve as a,de as b,pe as c,le as d,ce as e,me as f,u as g,se as h,ue as i,ie as j,oe as k,y as l,re as p,ae as s};

import{e as u}from"./helpers-4047ce7f-ZS1Xs9E2.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const g=async(e,t,n,f,s,a)=>{var l;if(e)return e.attachViewToDom(t,n,s,f);if(!a&&typeof n!="string"&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const r=typeof n=="string"?(l=t.ownerDocument)===null||l===void 0?void 0:l.createElement(n):n;return f&&f.forEach(i=>r.classList.add(i)),s&&Object.assign(r,s),t.appendChild(r),await new Promise(i=>u(r,i)),r},D=(e,t)=>{if(t){if(e){const n=t.parentElement;return e.removeViewFromDom(n,t)}t.remove()}return Promise.resolve()},v=()=>{let e,t;return{attachViewToDom:async(s,a,l={},r=[])=>{var i,m;e=s;let d;if(a){const c=typeof a=="string"?(i=e.ownerDocument)===null||i===void 0?void 0:i.createElement(a):a;r.forEach(o=>c.classList.add(o)),Object.assign(c,l),e.appendChild(c),d=c,await new Promise(o=>u(c,o))}else if(e.children.length>0&&(e.tagName==="ION-MODAL"||e.tagName==="ION-POPOVER")&&!(d=e.children[0]).classList.contains("ion-delegate-host")){const o=(m=e.ownerDocument)===null||m===void 0?void 0:m.createElement("div");o.classList.add("ion-delegate-host"),r.forEach(p=>o.classList.add(p)),o.append(...e.children),e.appendChild(o),d=o}const h=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),e.parentNode.insertBefore(t,e),h.appendChild(e),d??e},removeViewFromDom:()=>(e&&t&&(t.parentNode.insertBefore(e,t),t.remove()),Promise.resolve())}};export{v as C,g as a,D as d};

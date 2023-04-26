/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const n=(n,t)=>t.closest(n)!==null;const t=(n,t)=>typeof n==="string"&&n.length>0?Object.assign({"ion-color":true,[`ion-color-${n}`]:true},t):t;const o=n=>{if(n!==undefined){const t=Array.isArray(n)?n:n.split(" ");return t.filter((n=>n!=null)).map((n=>n.trim())).filter((n=>n!==""))}return[]};const r=n=>{const t={};o(n).forEach((n=>t[n]=true));return t};const e=/^[a-z][a-z0-9+\-.]*:/;const s=async(n,t,o,r)=>{if(n!=null&&n[0]!=="#"&&!e.test(n)){const e=document.querySelector("ion-router");if(e){if(t!=null){t.preventDefault()}return e.push(n,o,r)}}return false};export{t as c,r as g,n as h,s as o};
//# sourceMappingURL=p-ff4ddc55.js.map
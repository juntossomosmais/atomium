/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const u=(t,r)=>r.closest(t)!==null,i=(t,r)=>typeof t=="string"&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},r):r,s=t=>t!==void 0?(Array.isArray(t)?t:t.split(" ")).filter(e=>e!=null).map(e=>e.trim()).filter(e=>e!==""):[],c=t=>{const r={};return s(t).forEach(e=>r[e]=!0),r},a=/^[a-z][a-z0-9+\-.]*:/,l=async(t,r,e,o)=>{if(t!=null&&t[0]!=="#"&&!a.test(t)){const n=document.querySelector("ion-router");if(n)return r!=null&&r.preventDefault(),n.push(t,e,o)}return!1};export{i as c,c as g,u as h,l as o};

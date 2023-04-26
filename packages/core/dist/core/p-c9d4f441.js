import{f as o,w as s}from"./p-ca167607.js";import{a as t,s as a}from"./p-cdbbf104.js";import{d as r}from"./p-0c75f9f6.js";import"./p-1665515a.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const n=()=>{const n=window;n.addEventListener("statusTap",(()=>{o((()=>{const o=n.innerWidth;const c=n.innerHeight;const f=document.elementFromPoint(o/2,c/2);if(!f){return}const i=t(f);if(i){new Promise((o=>r(i,o))).then((()=>{s((async()=>{i.style.setProperty("--overflow","hidden");await a(i,300);i.style.removeProperty("--overflow")}))}))}}))}))};export{n as startStatusTap};
//# sourceMappingURL=p-c9d4f441.js.map
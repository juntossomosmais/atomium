import{w as c}from"./index-d9a82e80-B2PaWDFh.js";import{a as u}from"./index-DPBitB1_.js";import"./vue.esm-bundler-Cotndkpi.js";import"./iframe-BlaZyy6T.js";import"../sb-preview/runtime.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const f=()=>u.get("experimentalCloseWatcher",!1)&&c!==void 0&&"CloseWatcher"in c,E=()=>{document.addEventListener("backbutton",()=>{})},v=()=>{const s=document;let r=!1;const i=()=>{if(r)return;let n=0,o=[];const l=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,e){o.push({priority:t,handler:e,id:n++})}}});s.dispatchEvent(l);const d=async t=>{try{if(t!=null&&t.handler){const e=t.handler(a);e!=null&&await e}}catch(e){console.error(e)}},a=()=>{if(o.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};o.forEach(e=>{e.priority>=t.priority&&(t=e)}),r=!0,o=o.filter(e=>e.id!==t.id),d(t).then(()=>r=!1)}};a()};if(f()){let n;const o=()=>{n==null||n.destroy(),n=new c.CloseWatcher,n.onclose=()=>{i(),o()}};o()}else s.addEventListener("backbutton",i)},k=100,w=99;export{w as MENU_BACK_BUTTON_PRIORITY,k as OVERLAY_BACK_BUTTON_PRIORITY,E as blockHardwareBackButton,f as shouldUseCloseWatcher,v as startHardwareBackButton};

import{w as e,d as s}from"./index-d9a82e80-B2PaWDFh.js";import{K as v,a as g}from"./keyboard-6ae239bc-CQr78-yc.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const b=t=>{if(s===void 0||t===g.None||t===void 0)return null;const n=s.querySelector("ion-app");return n??s.body},f=t=>{const n=b(t);return n===null?0:n.clientHeight},z=async t=>{let n,l,r,o;const a=async()=>{const d=await v.getResizeMode(),i=d===void 0?void 0:d.mode;n=()=>{o===void 0&&(o=f(i)),r=!0,u(r,i)},l=()=>{r=!1,u(r,i)},e===null||e===void 0||e.addEventListener("keyboardWillShow",n),e===null||e===void 0||e.addEventListener("keyboardWillHide",l)},u=(d,i)=>{t&&t(d,y(i))},y=d=>{if(o===0||o===f(d))return;const i=b(d);if(i!==null)return new Promise(H=>{const p=()=>{i.clientHeight===o&&(c.disconnect(),H())},c=new ResizeObserver(p);c.observe(i)})},m=()=>{e===null||e===void 0||e.removeEventListener("keyboardWillShow",n),e===null||e===void 0||e.removeEventListener("keyboardWillHide",l),n=l=void 0},w=()=>r;return await a(),{init:a,destroy:m,isKeyboardVisible:w}};export{z as c};

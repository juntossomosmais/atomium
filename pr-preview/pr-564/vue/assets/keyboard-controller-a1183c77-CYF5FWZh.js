import{w as e,d as s}from"./index-d9a82e80-B2PaWDFh.js";import{K as p,a as g}from"./keyboard-6ae239bc-BGgBFUHv.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const v=o=>{if(s===void 0||o===g.None||o===void 0)return null;const n=s.querySelector("ion-app");return n??s.body},f=o=>{const n=v(o);return n===null?0:n.clientHeight},z=async o=>{let n,l,r,d;const a=async()=>{const t=await p.getResizeMode(),i=t===void 0?void 0:t.mode;n=()=>{d===void 0&&(d=f(i)),r=!0,c(r,i)},l=()=>{r=!1,c(r,i)},e===null||e===void 0||e.addEventListener("keyboardWillShow",n),e===null||e===void 0||e.addEventListener("keyboardWillHide",l)},c=(t,i)=>{o&&o(t,b(i))},b=t=>{if(d===0||d===f(t))return;const i=v(t);if(i!==null)return new Promise(w=>{const H=()=>{i.clientHeight===d&&(u.disconnect(),w())},u=new ResizeObserver(H);u.observe(i)})},y=()=>{e===null||e===void 0||e.removeEventListener("keyboardWillShow",n),e===null||e===void 0||e.removeEventListener("keyboardWillHide",l),n=l=void 0},m=()=>r;return await a(),{init:a,destroy:y,isKeyboardVisible:m}};export{z as c};
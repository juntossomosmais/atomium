import{w as i}from"./p-3b0213f5.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const o=o=>{let l;let e;let d;const t=()=>{l=()=>{d=true;if(o)o(true)};e=()=>{d=false;if(o)o(false)};i===null||i===void 0?void 0:i.addEventListener("keyboardWillShow",l);i===null||i===void 0?void 0:i.addEventListener("keyboardWillHide",e)};const r=()=>{i===null||i===void 0?void 0:i.removeEventListener("keyboardWillShow",l);i===null||i===void 0?void 0:i.removeEventListener("keyboardWillHide",e);l=e=undefined};const n=()=>d;t();return{init:t,destroy:r,isKeyboardVisible:n}};export{o as c};
//# sourceMappingURL=p-453d9045.js.map
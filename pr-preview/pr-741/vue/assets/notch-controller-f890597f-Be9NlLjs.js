import{w as f}from"./index-d9a82e80-B2PaWDFh.js";import{r as h}from"./helpers-4047ce7f-B-sfu2GX.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const w=(n,r,i)=>{let e;const o=()=>!(r()===void 0||n.label!==void 0||i()===null),l=()=>{o()&&h(()=>{s()})},s=()=>{const t=r();if(t===void 0)return;if(!o()){t.style.removeProperty("width");return}const c=i().scrollWidth;if(c===0&&t.offsetParent===null&&f!==void 0&&"IntersectionObserver"in f){if(e!==void 0)return;const d=e=new IntersectionObserver(u=>{u[0].intersectionRatio===1&&(s(),d.disconnect(),e=void 0)},{threshold:.01,root:n});d.observe(t);return}t.style.setProperty("width",`${c*.75}px`)};return{calculateNotchWidth:l,destroy:()=>{e&&(e.disconnect(),e=void 0)}}};export{w as c};

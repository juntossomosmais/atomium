import{w as a}from"./index-ZjP4CjeZ-B2PaWDFh.js";import{r as h}from"./helpers-53vrVRiL-CQv-ioaB.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const y=(e,o,i)=>{let t;const r=()=>!(o()===void 0||e.label!==void 0||i()===null),l=()=>{r()&&h(()=>{s()})},s=()=>{const n=o();if(n===void 0)return;if(!r()){n.style.removeProperty("width");return}const c=i().scrollWidth;if(c===0&&n.offsetParent===null&&a!==void 0&&"IntersectionObserver"in a){if(t!==void 0)return;const d=t=new IntersectionObserver(f=>{f[0].intersectionRatio===1&&(s(),d.disconnect(),t=void 0)},{threshold:.01,root:e});d.observe(n);return}n.style.setProperty("width",`${c*.75}px`)};return{calculateNotchWidth:l,destroy:()=>{t&&(t.disconnect(),t=void 0)}}};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const I=e=>{const o=e.classList.contains("ion-touched"),i=e.classList.contains("ion-invalid");return o&&i};export{I as a,y as c};

import{d as i,w as a}from"./index-Du7OOsE_.js";import{a as m,s as p}from"./index-c0cf4f1b-DuByj2iv.js";import{e as d}from"./helpers-4047ce7f-ZS1Xs9E2.js";import"./vue.esm-bundler-cJVerQom.js";import"./iframe-DyAvA6JD.js";import"./index-1e38abc5-CfLTl0tl.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const T=()=>{const o=window;o.addEventListener("statusTap",()=>{i(()=>{const n=o.innerWidth,r=o.innerHeight,e=document.elementFromPoint(n/2,r/2);if(!e)return;const t=m(e);t&&new Promise(s=>d(t,s)).then(()=>{a(async()=>{t.style.setProperty("--overflow","hidden"),await p(t,300),t.style.removeProperty("--overflow")})})})})};export{T as startStatusTap};

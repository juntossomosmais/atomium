import{d as i,w as a}from"./index-Bgz96QAh.js";import{a as m,s as p}from"./index-c0cf4f1b-DQm7UrJT.js";import{e as d}from"./helpers-4047ce7f-B-sfu2GX.js";import"./vue.esm-bundler-UQm0beuB.js";import"./iframe-D3tY6oLI.js";import"./index-1e38abc5-CfLTl0tl.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const T=()=>{const o=window;o.addEventListener("statusTap",()=>{i(()=>{const n=o.innerWidth,r=o.innerHeight,e=document.elementFromPoint(n/2,r/2);if(!e)return;const t=m(e);t&&new Promise(s=>d(t,s)).then(()=>{a(async()=>{t.style.setProperty("--overflow","hidden"),await p(t,300),t.style.removeProperty("--overflow")})})})})};export{T as startStatusTap};

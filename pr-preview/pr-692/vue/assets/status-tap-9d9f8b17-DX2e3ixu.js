import{d as i,w as a}from"./index-CYPV5ngz.js";import{a as m,s as p}from"./index-74a0cdd4-i6ycB-rg.js";import{e as d}from"./helpers-b14eeb70-DAoIUSfU.js";import"./vue.esm-bundler-D6ApT1Ci.js";import"./iframe-BCmO2hXq.js";import"../sb-preview/runtime.js";import"./index-f5dbb989-By3l89LO.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const u=()=>{const o=window;o.addEventListener("statusTap",()=>{i(()=>{const n=o.innerWidth,r=o.innerHeight,e=document.elementFromPoint(n/2,r/2);if(!e)return;const t=m(e);t&&new Promise(s=>d(t,s)).then(()=>{a(async()=>{t.style.setProperty("--overflow","hidden"),await p(t,300),t.style.removeProperty("--overflow")})})})})};export{u as startStatusTap};

import{d as i,w as a}from"./index-B-JC0Iz5.js";import{a as m,s as p}from"./index-6cad21e9-C8mkRYkz.js";import{d}from"./helpers-079c01eb-D592YRe8.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-PYrbdLgI.js";import"../sb-preview/runtime.js";import"./index-f5dbb989-By3l89LO.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const u=()=>{const o=window;o.addEventListener("statusTap",()=>{i(()=>{const n=o.innerWidth,r=o.innerHeight,e=document.elementFromPoint(n/2,r/2);if(!e)return;const t=m(e);t&&new Promise(s=>d(t,s)).then(()=>{a(async()=>{t.style.setProperty("--overflow","hidden"),await p(t,300),t.style.removeProperty("--overflow")})})})})};export{u as startStatusTap};

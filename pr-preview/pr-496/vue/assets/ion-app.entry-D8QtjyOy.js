const __vite__fileDeps=["./index-90585088-eEzdiUdu.js","./index-d9a82e80-B2PaWDFh.js","./helpers-079c01eb-D592YRe8.js","./status-tap-44d184b1-uu8cmks4.js","./index-DnFqSXHA.js","./vue.esm-bundler-DLYZ4EJx.js","./iframe-ZM0WHRJw.js","./index-6cad21e9-C8mkRYkz.js","./index-f5dbb989-By3l89LO.js","./input-shims-799b1f62-DbdQSK7x.js","./keyboard-6ae239bc-BGgBFUHv.js","./capacitor-74355484-sCloY8M9.js","./hardware-back-button-3e887a79-Ci3q0goa.js","./keyboard-8d28fca7-X052u48D.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./iframe-ZM0WHRJw.js";import{r as p,b as u,h as l,a as o,H as m,g as c,i as s}from"./index-DnFqSXHA.js";import{shouldUseCloseWatcher as a}from"./hardware-back-button-3e887a79-Ci3q0goa.js";import{p as _}from"./index-f5dbb989-By3l89LO.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-DLYZ4EJx.js";import"./index-d9a82e80-B2PaWDFh.js";const f="html.plt-mobile ion-app{user-select:none}html.plt-mobile ion-app [contenteditable]{user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}",w=f,h=class{constructor(t){p(this,t)}componentDidLoad(){g(async()=>{const t=s(window,"hybrid");if(o.getBoolean("_testing")||i(()=>import("./index-90585088-eEzdiUdu.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(e=>e.startTapClick(o)),o.getBoolean("statusTap",t)&&i(()=>import("./status-tap-44d184b1-uu8cmks4.js"),__vite__mapDeps([3,4,5,6,7,2,8]),import.meta.url).then(e=>e.startStatusTap()),o.getBoolean("inputShims",b())){const e=s(window,"ios")?"ios":"android";i(()=>import("./input-shims-799b1f62-DbdQSK7x.js"),__vite__mapDeps([9,1,7,2,8,10,11]),import.meta.url).then(d=>d.startInputShims(o,e))}const r=await i(()=>import("./hardware-back-button-3e887a79-Ci3q0goa.js"),__vite__mapDeps([12,1,4,5,6]),import.meta.url),n=t||a();o.getBoolean("hardwareBackButton",n)?r.startHardwareBackButton():(a()&&_("experimentalCloseWatcher was set to `true`, but hardwareBackButton was set to `false`. Both config options must be `true` for the Close Watcher API to be used."),r.blockHardwareBackButton()),typeof window<"u"&&i(()=>import("./keyboard-8d28fca7-X052u48D.js"),__vite__mapDeps([13,10,11,1]),import.meta.url).then(e=>e.startKeyboardAssist(window)),i(()=>import("./focus-visible-7447085a-supuXXMI.js"),[],import.meta.url).then(e=>this.focusVisible=e.startFocusVisible())})}async setFocus(t){this.focusVisible&&this.focusVisible.setFocus(t)}render(){const t=u(this);return l(m,{key:"6d7c57453b4be454690e8f1a0721f1e3da8f92aa",class:{[t]:!0,"ion-page":!0,"force-statusbar-padding":o.getBoolean("_forceStatusbarPadding")}})}get el(){return c(this)}},b=()=>!!(s(window,"ios")&&s(window,"mobile")||s(window,"android")&&s(window,"mobileweb")),g=t=>{"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)};h.style=w;export{h as ion_app};

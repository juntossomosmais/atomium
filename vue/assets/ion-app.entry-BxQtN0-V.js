const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-43cdb273-DPbr2TeG.js","./index-d9a82e80-B2PaWDFh.js","./helpers-b14eeb70-DAoIUSfU.js","./status-tap-9d9f8b17-DRgkUVxy.js","./index-CVcxogov.js","./vue.esm-bundler-D6ApT1Ci.js","./iframe-DpzhTgQt.js","./index-74a0cdd4-i6ycB-rg.js","./index-f5dbb989-By3l89LO.js","./input-shims-53ee4767-CDFoouYm.js","./keyboard-6ae239bc-BGgBFUHv.js","./capacitor-74355484-sCloY8M9.js","./hardware-back-button-597914ed-DP4KxoYw.js","./keyboard-8d28fca7-X052u48D.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./iframe-DpzhTgQt.js";import{r as p,b as u,h as l,a as o,H as c,g as m,i as s}from"./index-CVcxogov.js";import{shouldUseCloseWatcher as a}from"./hardware-back-button-597914ed-DP4KxoYw.js";import{p as _}from"./index-f5dbb989-By3l89LO.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-D6ApT1Ci.js";import"./index-d9a82e80-B2PaWDFh.js";const f="html.plt-mobile ion-app{user-select:none}html.plt-mobile ion-app [contenteditable]{user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}",w=f,h=class{constructor(t){p(this,t)}componentDidLoad(){g(async()=>{const t=s(window,"hybrid");if(o.getBoolean("_testing")||i(()=>import("./index-43cdb273-DPbr2TeG.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(e=>e.startTapClick(o)),o.getBoolean("statusTap",t)&&i(()=>import("./status-tap-9d9f8b17-DRgkUVxy.js"),__vite__mapDeps([3,4,5,6,7,2,8]),import.meta.url).then(e=>e.startStatusTap()),o.getBoolean("inputShims",b())){const e=s(window,"ios")?"ios":"android";i(()=>import("./input-shims-53ee4767-CDFoouYm.js"),__vite__mapDeps([9,1,7,2,8,10,11]),import.meta.url).then(d=>d.startInputShims(o,e))}const r=await i(()=>import("./hardware-back-button-597914ed-DP4KxoYw.js"),__vite__mapDeps([12,1,4,5,6]),import.meta.url),n=t||a();o.getBoolean("hardwareBackButton",n)?r.startHardwareBackButton():(a()&&_("experimentalCloseWatcher was set to `true`, but hardwareBackButton was set to `false`. Both config options must be `true` for the Close Watcher API to be used."),r.blockHardwareBackButton()),typeof window<"u"&&i(()=>import("./keyboard-8d28fca7-X052u48D.js"),__vite__mapDeps([13,10,11,1]),import.meta.url).then(e=>e.startKeyboardAssist(window)),i(()=>import("./focus-visible-7447085a-supuXXMI.js"),[],import.meta.url).then(e=>this.focusVisible=e.startFocusVisible())})}async setFocus(t){this.focusVisible&&this.focusVisible.setFocus(t)}render(){const t=u(this);return l(c,{key:"96715520fd05d6f0e6fa26a8ba78792cfccd4c0a",class:{[t]:!0,"ion-page":!0,"force-statusbar-padding":o.getBoolean("_forceStatusbarPadding")}})}get el(){return m(this)}},b=()=>!!(s(window,"ios")&&s(window,"mobile")||s(window,"android")&&s(window,"mobileweb")),g=t=>{"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)};h.style=w;export{h as ion_app};
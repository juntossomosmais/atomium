const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-f458f0f6-B0U3pNTp.js","./index-d9a82e80-B2PaWDFh.js","./helpers-4047ce7f-ZS1Xs9E2.js","./status-tap-082048fe-BFAUZ5kK.js","./index-B5Z3Dd3z.js","./iframe-DTshtJ0Q.js","./index-c0cf4f1b-DuByj2iv.js","./index-1e38abc5-CfLTl0tl.js","./input-shims-d4287f6d-CELfAFmh.js","./keyboard-6ae239bc-CQr78-yc.js","./capacitor-74355484-sCloY8M9.js","./hardware-back-button-90972cd5-CLaUA1Nu.js","./keyboard-8d28fca7-KcLX6RpF.js"])))=>i.map(i=>d[i]);
import{_ as s}from"./iframe-DTshtJ0Q.js";import{r as u,e as p,h as l,d as o,H as c,a as m,i}from"./index-B5Z3Dd3z.js";import{shouldUseCloseWatcher as n}from"./hardware-back-button-90972cd5-CLaUA1Nu.js";import{p as f}from"./index-1e38abc5-CfLTl0tl.js";import"./index-d9a82e80-B2PaWDFh.js";const _="html.plt-mobile ion-app{user-select:none}html.plt-mobile ion-app [contenteditable]{user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}",w=_,h=class{constructor(t){u(this,t)}componentDidLoad(){B(async()=>{const t=i(window,"hybrid");if(o.getBoolean("_testing")||s(()=>import("./index-f458f0f6-B0U3pNTp.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(e=>e.startTapClick(o)),o.getBoolean("statusTap",t)&&s(()=>import("./status-tap-082048fe-BFAUZ5kK.js"),__vite__mapDeps([3,4,5,6,2,7]),import.meta.url).then(e=>e.startStatusTap()),o.getBoolean("inputShims",b())){const e=i(window,"ios")?"ios":"android";s(()=>import("./input-shims-d4287f6d-CELfAFmh.js"),__vite__mapDeps([8,1,6,2,7,9,10]),import.meta.url).then(d=>d.startInputShims(o,e))}const r=await s(()=>import("./hardware-back-button-90972cd5-CLaUA1Nu.js"),__vite__mapDeps([11,1,4,5]),import.meta.url),a=t||n();o.getBoolean("hardwareBackButton",a)?r.startHardwareBackButton():(n()&&f("experimentalCloseWatcher was set to `true`, but hardwareBackButton was set to `false`. Both config options must be `true` for the Close Watcher API to be used."),r.blockHardwareBackButton()),typeof window<"u"&&s(()=>import("./keyboard-8d28fca7-KcLX6RpF.js"),__vite__mapDeps([12,9,10,1]),import.meta.url).then(e=>e.startKeyboardAssist(window)),s(()=>import("./focus-visible-7447085a-supuXXMI.js"),[],import.meta.url).then(e=>this.focusVisible=e.startFocusVisible())})}async setFocus(t){this.focusVisible&&this.focusVisible.setFocus(t)}render(){const t=p(this);return l(c,{key:"96715520fd05d6f0e6fa26a8ba78792cfccd4c0a",class:{[t]:!0,"ion-page":!0,"force-statusbar-padding":o.getBoolean("_forceStatusbarPadding")}})}get el(){return m(this)}},b=()=>!!(i(window,"ios")&&i(window,"mobile")||i(window,"android")&&i(window,"mobileweb")),B=t=>{"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)};h.style=w;export{h as ion_app};

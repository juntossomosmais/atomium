import{c as a}from"./animation-022a9434-BW6ZVdxK.js";import{g as b}from"./index-ab9a4597-BAj_msa8.js";import"./index-3UzJa_3u.js";import"./index-d9a82e80-B2PaWDFh.js";import"./helpers-079c01eb-D592YRe8.js";import"./iframe-Ct6Z6793.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-Dk4JuX4g.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const $=(E,i)=>{var o,t,r;const l="40px",m="0px",s=i.direction==="back",f=i.enteringEl,c=i.leavingEl,d=b(f),g=d.querySelector("ion-toolbar"),n=a();if(n.addElement(d).fill("both").beforeRemoveClass("ion-page-invisible"),s?n.duration(((o=i.duration)!==null&&o!==void 0?o:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):n.duration(((t=i.duration)!==null&&t!==void 0?t:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${l})`,`translateY(${m})`).fromTo("opacity",.01,1),g){const e=a();e.addElement(g),n.addAnimation(e)}if(c&&s){n.duration(((r=i.duration)!==null&&r!==void 0?r:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const e=a();e.addElement(b(c)).onFinish(u=>{u===1&&e.elements.length>0&&e.elements[0].style.setProperty("display","none")}).fromTo("transform",`translateY(${m})`,`translateY(${l})`).fromTo("opacity",1,0),n.addAnimation(e)}return n};export{$ as mdTransitionAnimation};

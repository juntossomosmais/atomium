const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./swipe-back-30dfe210-BvkJ2RBs.js","./helpers-079c01eb-D592YRe8.js","./dir-861e8ef7-ebPfiN6E.js","./index-8d9b57d7-PlsDOfno.js","./gesture-controller-5b8003e1-9dGIRWtU.js"])))=>i.map(i=>d[i]);
import{_ as c}from"./iframe-aIRu44Ei.js";import{r as u,c as o,b as g,a as l,h as m,g as f}from"./index-uL2uqLPb.js";import{g as h}from"./cubic-bezier-c467eebb-B8nHoLJF.js";import{a as p,d as w}from"./framework-delegate-bec700a6-1EDJ8Ayl.js";import{s as v,h as b}from"./helpers-079c01eb-D592YRe8.js";import{c as C}from"./lock-controller-873b21a6-CpJsitdv.js";import{t as k}from"./index-ab9a4597-C93wNB2G.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-B2N54QI-.js";const y=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}",E=y,H=class{constructor(t){u(this,t),this.ionNavWillLoad=o(this,"ionNavWillLoad",7),this.ionNavWillChange=o(this,"ionNavWillChange",3),this.ionNavDidChange=o(this,"ionNavDidChange",3),this.lockController=C(),this.gestureOrAnimationInProgress=!1,this.mode=g(this),this.delegate=void 0,this.animated=!0,this.animation=void 0,this.swipeHandler=void 0}swipeHandlerChanged(){this.gesture&&this.gesture.enable(this.swipeHandler!==void 0)}async connectedCallback(){const t=()=>{this.gestureOrAnimationInProgress=!0,this.swipeHandler&&this.swipeHandler.onStart()};this.gesture=(await c(async()=>{const{createSwipeBackGesture:e}=await import("./swipe-back-30dfe210-BvkJ2RBs.js");return{createSwipeBackGesture:e}},__vite__mapDeps([0,1,2,3,4]),import.meta.url)).createSwipeBackGesture(this.el,()=>!this.gestureOrAnimationInProgress&&!!this.swipeHandler&&this.swipeHandler.canStart(),()=>t(),e=>{var i;return(i=this.ani)===null||i===void 0?void 0:i.progressStep(e)},(e,i,a)=>{if(this.ani){this.ani.onFinish(()=>{this.gestureOrAnimationInProgress=!1,this.swipeHandler&&this.swipeHandler.onEnd(e)},{oneTimeCallback:!0});let s=e?-.001:.001;e?s+=h([0,0],[.32,.72],[0,1],[1,1],i)[0]:(this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),s+=h([0,0],[1,0],[.68,.28],[1,1],i)[0]),this.ani.progressEnd(e?1:0,s,a)}else this.gestureOrAnimationInProgress=!1}),this.swipeHandlerChanged()}componentWillLoad(){this.ionNavWillLoad.emit()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async commit(t,e,i){const a=await this.lockController.lock();let s=!1;try{s=await this.transition(t,e,i)}catch(r){console.error(r)}return a(),s}async setRouteId(t,e,i,a){return{changed:await this.setRoot(t,e,{duration:i==="root"?0:void 0,direction:i==="back"?"back":"forward",animationBuilder:a}),element:this.activeEl}}async getRouteId(){const t=this.activeEl;return t?{id:t.tagName,element:t,params:this.activeParams}:void 0}async setRoot(t,e,i){if(this.activeComponent===t&&v(e,this.activeParams))return!1;const a=this.activeEl,s=await p(this.delegate,this.el,t,["ion-page","ion-page-invisible"],e);return this.activeComponent=t,this.activeEl=s,this.activeParams=e,await this.commit(s,a,i),await w(this.delegate,a),!0}async transition(t,e,i={}){if(e===t)return!1;this.ionNavWillChange.emit();const{el:a,mode:s}=this,r=this.animated&&l.getBoolean("animated",!0),d=i.animationBuilder||this.animation||l.get("navAnimation");return await k(Object.assign(Object.assign({mode:s,animated:r,enteringEl:t,leavingEl:e,baseEl:a,deepWait:b(a),progressCallback:i.progressAnimation?n=>{n!==void 0&&!this.gestureOrAnimationInProgress?(this.gestureOrAnimationInProgress=!0,n.onFinish(()=>{this.gestureOrAnimationInProgress=!1,this.swipeHandler&&this.swipeHandler.onEnd(!1)},{oneTimeCallback:!0}),n.progressEnd(0,0,0)):this.ani=n}:void 0},i),{animationBuilder:d})),this.ionNavDidChange.emit(),!0}render(){return m("slot",{key:"0949db1bcfde67b462abe9cae72c7a7fd70ea678"})}get el(){return f(this)}static get watchers(){return{swipeHandler:["swipeHandlerChanged"]}}};H.style=E;export{H as ion_router_outlet};

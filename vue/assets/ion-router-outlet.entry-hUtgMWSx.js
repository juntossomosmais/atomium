const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./swipe-back-7b244746-CslSHcDJ.js","./helpers-4047ce7f-ZS1Xs9E2.js","./dir-861e8ef7-BWCww0s8.js","./index-0fc64123-DOO5sykg.js","./gesture-controller-a29626f0-Cnx-EuDf.js"])))=>i.map(i=>d[i]);
import{_ as c}from"./iframe-4Zizkv0n.js";import{r as u,c as o,b as g,a as l,h as m,g as f}from"./index-ClkPbCuI.js";import{g as h}from"./cubic-bezier-c467eebb-B8nHoLJF.js";import{a as p,d as w}from"./framework-delegate-b2edfa06-CxDv4kyL.js";import{s as v,n as C}from"./helpers-4047ce7f-ZS1Xs9E2.js";import{c as b}from"./lock-controller-873b21a6-CpJsitdv.js";import{t as k}from"./index-66ba1179-urW4facR.js";import"./vue.esm-bundler-cJVerQom.js";import"./index-1e38abc5-CfLTl0tl.js";const y=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}",E=y,H=class{constructor(t){u(this,t),this.ionNavWillLoad=o(this,"ionNavWillLoad",7),this.ionNavWillChange=o(this,"ionNavWillChange",3),this.ionNavDidChange=o(this,"ionNavDidChange",3),this.lockController=b(),this.gestureOrAnimationInProgress=!1,this.mode=g(this),this.delegate=void 0,this.animated=!0,this.animation=void 0,this.swipeHandler=void 0}swipeHandlerChanged(){this.gesture&&this.gesture.enable(this.swipeHandler!==void 0)}async connectedCallback(){const t=()=>{this.gestureOrAnimationInProgress=!0,this.swipeHandler&&this.swipeHandler.onStart()};this.gesture=(await c(async()=>{const{createSwipeBackGesture:e}=await import("./swipe-back-7b244746-CslSHcDJ.js");return{createSwipeBackGesture:e}},__vite__mapDeps([0,1,2,3,4]),import.meta.url)).createSwipeBackGesture(this.el,()=>!this.gestureOrAnimationInProgress&&!!this.swipeHandler&&this.swipeHandler.canStart(),()=>t(),e=>{var i;return(i=this.ani)===null||i===void 0?void 0:i.progressStep(e)},(e,i,s)=>{if(this.ani){this.ani.onFinish(()=>{this.gestureOrAnimationInProgress=!1,this.swipeHandler&&this.swipeHandler.onEnd(e)},{oneTimeCallback:!0});let n=e?-.001:.001;e?n+=h([0,0],[.32,.72],[0,1],[1,1],i)[0]:(this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),n+=h([0,0],[1,0],[.68,.28],[1,1],i)[0]),this.ani.progressEnd(e?1:0,n,s)}else this.gestureOrAnimationInProgress=!1}),this.swipeHandlerChanged()}componentWillLoad(){this.ionNavWillLoad.emit()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async commit(t,e,i){const s=await this.lockController.lock();let n=!1;try{n=await this.transition(t,e,i)}catch(r){console.error(r)}return s(),n}async setRouteId(t,e,i,s){return{changed:await this.setRoot(t,e,{duration:i==="root"?0:void 0,direction:i==="back"?"back":"forward",animationBuilder:s}),element:this.activeEl}}async getRouteId(){const t=this.activeEl;return t?{id:t.tagName,element:t,params:this.activeParams}:void 0}async setRoot(t,e,i){if(this.activeComponent===t&&v(e,this.activeParams))return!1;const s=this.activeEl,n=await p(this.delegate,this.el,t,["ion-page","ion-page-invisible"],e);return this.activeComponent=t,this.activeEl=n,this.activeParams=e,await this.commit(n,s,i),await w(this.delegate,s),!0}async transition(t,e,i={}){if(e===t)return!1;this.ionNavWillChange.emit();const{el:s,mode:n}=this,r=this.animated&&l.getBoolean("animated",!0),d=i.animationBuilder||this.animation||l.get("navAnimation");return await k(Object.assign(Object.assign({mode:n,animated:r,enteringEl:t,leavingEl:e,baseEl:s,deepWait:C(s),progressCallback:i.progressAnimation?a=>{a!==void 0&&!this.gestureOrAnimationInProgress?(this.gestureOrAnimationInProgress=!0,a.onFinish(()=>{this.gestureOrAnimationInProgress=!1,this.swipeHandler&&this.swipeHandler.onEnd(!1)},{oneTimeCallback:!0}),a.progressEnd(0,0,0)):this.ani=a}:void 0},i),{animationBuilder:d})),this.ionNavDidChange.emit(),!0}render(){return m("slot",{key:"a70341f58d19df55de1dad00e3464388e446aa2a"})}get el(){return f(this)}static get watchers(){return{swipeHandler:["swipeHandlerChanged"]}}};H.style=E;export{H as ion_router_outlet};

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-0fc64123-DpvKcIJB.js","./gesture-controller-a29626f0-CKNmfd8r.js"])))=>i.map(i=>d[i]);
import{_ as m}from"./iframe-B9vyyOQ8.js";import{r as u,c as f,b as g,h as O,H as S,g as y}from"./index-BSZCsw-e.js";import{a as v,d as b,r as w}from"./index-c0cf4f1b-DQm7UrJT.js";import{f as h}from"./helpers-4047ce7f-B-sfu2GX.js";import{w as W}from"./watch-options-17e39348-Dd4F1RiG.js";import"./vue.esm-bundler-UQm0beuB.js";import"./index-1e38abc5-CfLTl0tl.js";const A="ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;user-select:none}ion-item-sliding .item{user-select:none}.item-sliding-active-slide .item{position:relative;transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-closing ion-item-options{pointer-events:none}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;order:1;transition-duration:0.6s;transition-property:padding-left}:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{order:-1}[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable{order:-1}@supports selector(:dir(rtl)){.item-sliding-active-swipe-end .item-options-end .item-option-expandable:dir(rtl){order:-1}}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;order:-1;transition-duration:0.6s;transition-property:padding-right}:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{order:1}[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable{order:1}@supports selector(:dir(rtl)){.item-sliding-active-swipe-start .item-options-start .item-option-expandable:dir(rtl){order:1}}",R=A,l=30,p=.55;let o;const E=class{constructor(t){u(this,t),this.ionDrag=f(this,"ionDrag",7),this.item=null,this.openAmount=0,this.initialOpenAmount=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.sides=0,this.optsDirty=!0,this.contentEl=null,this.initialContentScrollY=!0,this.state=2,this.disabled=!1}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}async connectedCallback(){const{el:t}=this;this.item=t.querySelector("ion-item"),this.contentEl=v(t),this.mutationObserver=W(t,"ion-item-option",async()=>{await this.updateOptions()}),await this.updateOptions(),this.gesture=(await m(async()=>{const{createGesture:i}=await import("./index-0fc64123-DpvKcIJB.js");return{createGesture:i}},__vite__mapDeps([0,1]),import.meta.url)).createGesture({el:t,gestureName:"item-swipe",gesturePriority:100,threshold:5,canStart:i=>this.canStart(i),onStart:()=>this.onStart(),onMove:i=>this.onMove(i),onEnd:i=>this.onEnd(i)}),this.disabledChanged()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.item=null,this.leftOptions=this.rightOptions=void 0,o===this.el&&(o=void 0),this.mutationObserver&&(this.mutationObserver.disconnect(),this.mutationObserver=void 0)}getOpenAmount(){return Promise.resolve(this.openAmount)}getSlidingRatio(){return Promise.resolve(this.getSlidingRatioSync())}async open(t){var i;if((this.item=(i=this.item)!==null&&i!==void 0?i:this.el.querySelector("ion-item"))===null)return;const s=this.getOptions(t);if(!s)return;t===void 0&&(t=s===this.leftOptions?"start":"end"),t=h(t)?"end":"start";const n=this.openAmount<0,r=this.openAmount>0;n&&s===this.leftOptions||r&&s===this.rightOptions||(this.closeOpened(),this.state=4,requestAnimationFrame(()=>{this.calculateOptsWidth();const a=t==="end"?this.optsWidthRightSide:-this.optsWidthLeftSide;o=this.el,this.setOpenAmount(a,!1),this.state=t==="end"?8:16}))}async close(){this.setOpenAmount(0,!0)}async closeOpened(){return o!==void 0?(o.close(),o=void 0,!0):!1}getOptions(t){return t===void 0?this.leftOptions||this.rightOptions:t==="start"?this.leftOptions:this.rightOptions}async updateOptions(){const t=this.el.querySelectorAll("ion-item-options");let i=0;this.leftOptions=this.rightOptions=void 0;for(let e=0;e<t.length;e++){const s=t.item(e),n=s.componentOnReady!==void 0?await s.componentOnReady():s;(h(n.side)?"end":"start")==="start"?(this.leftOptions=n,i|=1):(this.rightOptions=n,i|=2)}this.optsDirty=!0,this.sides=i}canStart(t){if(document.dir==="rtl"?window.innerWidth-t.startX<15:t.startX<15)return!1;const s=o;return s&&s!==this.el&&this.closeOpened(),!!(this.rightOptions||this.leftOptions)}onStart(){this.item=this.el.querySelector("ion-item");const{contentEl:t}=this;t&&(this.initialContentScrollY=b(t)),o=this.el,this.tmr!==void 0&&(clearTimeout(this.tmr),this.tmr=void 0),this.openAmount===0&&(this.optsDirty=!0,this.state=4),this.initialOpenAmount=this.openAmount,this.item&&(this.item.style.transition="none")}onMove(t){this.optsDirty&&this.calculateOptsWidth();let i=this.initialOpenAmount-t.deltaX;switch(this.sides){case 2:i=Math.max(0,i);break;case 1:i=Math.min(0,i);break;case 3:break;case 0:return;default:console.warn("invalid ItemSideFlags value",this.sides);break}let e;i>this.optsWidthRightSide?(e=this.optsWidthRightSide,i=e+(i-e)*p):i<-this.optsWidthLeftSide&&(e=-this.optsWidthLeftSide,i=e+(i-e)*p),this.setOpenAmount(i,!1)}onEnd(t){const{contentEl:i,initialContentScrollY:e}=this;i&&w(i,e);const s=t.velocityX;let n=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide;const r=this.openAmount>0==!(s<0),a=Math.abs(s)>.3,c=Math.abs(this.openAmount)<Math.abs(n/2);x(r,a,c)&&(n=0);const d=this.state;this.setOpenAmount(n,!0),(d&32)!==0&&this.rightOptions?this.rightOptions.fireSwipeEvent():(d&64)!==0&&this.leftOptions&&this.leftOptions.fireSwipeEvent()}calculateOptsWidth(){this.optsWidthRightSide=0,this.rightOptions&&(this.rightOptions.style.display="flex",this.optsWidthRightSide=this.rightOptions.offsetWidth,this.rightOptions.style.display=""),this.optsWidthLeftSide=0,this.leftOptions&&(this.leftOptions.style.display="flex",this.optsWidthLeftSide=this.leftOptions.offsetWidth,this.leftOptions.style.display=""),this.optsDirty=!1}setOpenAmount(t,i){if(this.tmr!==void 0&&(clearTimeout(this.tmr),this.tmr=void 0),!this.item)return;const{el:e}=this,s=this.item.style;if(this.openAmount=t,i&&(s.transition=""),t>0)this.state=t>=this.optsWidthRightSide+l?40:8;else if(t<0)this.state=t<=-this.optsWidthLeftSide-l?80:16;else{e.classList.add("item-sliding-closing"),this.gesture&&this.gesture.enable(!1),this.tmr=setTimeout(()=>{this.state=2,this.tmr=void 0,this.gesture&&this.gesture.enable(!this.disabled),e.classList.remove("item-sliding-closing")},600),o=void 0,s.transform="";return}s.transform=`translate3d(${-t}px,0,0)`,this.ionDrag.emit({amount:t,ratio:this.getSlidingRatioSync()})}getSlidingRatioSync(){return this.openAmount>0?this.openAmount/this.optsWidthRightSide:this.openAmount<0?this.openAmount/this.optsWidthLeftSide:0}render(){const t=g(this);return O(S,{key:"47a3edd2ef2080ed9cfc2784277dea09785c7dc4",class:{[t]:!0,"item-sliding-active-slide":this.state!==2,"item-sliding-active-options-end":(this.state&8)!==0,"item-sliding-active-options-start":(this.state&16)!==0,"item-sliding-active-swipe-end":(this.state&32)!==0,"item-sliding-active-swipe-start":(this.state&64)!==0}})}get el(){return y(this)}static get watchers(){return{disabled:["disabledChanged"]}}},x=(t,i,e)=>!i&&e||t&&i;E.style=R;export{E as ion_item_sliding};

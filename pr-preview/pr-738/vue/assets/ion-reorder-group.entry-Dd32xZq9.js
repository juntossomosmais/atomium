const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-0fc64123-DpvKcIJB.js","./gesture-controller-a29626f0-CKNmfd8r.js"])))=>i.map(i=>d[i]);
import{_ as u}from"./iframe-D3tY6oLI.js";import{r as f,c as p,b as g,h as E,H as I,g as b}from"./index-Bgz96QAh.js";import{a as x,g as T}from"./index-c0cf4f1b-DQm7UrJT.js";import{r as y}from"./helpers-4047ce7f-B-sfu2GX.js";import{a as v,b as S,c as _}from"./haptic-1b03e74b-CWmRyONE.js";import"./vue.esm-bundler-UQm0beuB.js";import"./index-1e38abc5-CfLTl0tl.js";import"./capacitor-74355484-sCloY8M9.js";import"./index-d9a82e80-B2PaWDFh.js";const C=".reorder-list-active>*{display:block;transition:transform 300ms;will-change:transform}.reorder-enabled{user-select:none}.reorder-enabled ion-reorder{display:block;cursor:grab;pointer-events:all;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:grabbing}.reorder-selected{position:relative;transition:none !important;box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{transform:translate3d(0,  0,  0)}",R=C,B=class{constructor(t){f(this,t),this.ionItemReorder=p(this,"ionItemReorder",7),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}async connectedCallback(){const t=x(this.el);t&&(this.scrollEl=await T(t)),this.gesture=(await u(async()=>{const{createGesture:e}=await import("./index-0fc64123-DpvKcIJB.js");return{createGesture:e}},__vite__mapDeps([0,1]),import.meta.url)).createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:e=>this.canStart(e),onStart:e=>this.onStart(e),onMove:e=>this.onMove(e),onEnd:()=>this.onEnd()}),this.disabledChanged()}disconnectedCallback(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(t){return Promise.resolve(this.completeReorder(t))}canStart(t){if(this.selectedItemEl||this.state!==0)return!1;const s=t.event.target.closest("ion-reorder");if(!s)return!1;const o=M(s,this.el);return o?(t.data=o,!0):!1}onStart(t){t.event.preventDefault();const e=this.selectedItemEl=t.data,s=this.cachedHeights;s.length=0;const o=this.el,r=o.children;if(!r||r.length===0)return;let n=0;for(let l=0;l<r.length;l++){const c=r[l];n+=c.offsetHeight,s.push(n),c.$ionIndex=l}const i=o.getBoundingClientRect();if(this.containerTop=i.top,this.containerBottom=i.bottom,this.scrollEl){const l=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=l.top+h,this.scrollElBottom=l.bottom-h}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=a(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(d),v()}onMove(t){const e=this.selectedItemEl;if(!e)return;const s=this.autoscroll(t.currentY),o=this.containerTop-s,r=this.containerBottom-s,n=Math.max(o,Math.min(t.currentY,r)),i=s+n-t.startY,l=n-o,c=this.itemIndexForTop(l);if(c!==this.lastToIndex){const m=a(e);this.lastToIndex=c,S(),this.reorderMove(m,c)}e.style.transform=`translateY(${i}px)`}onEnd(){const t=this.selectedItemEl;if(this.state=2,!t){this.state=0;return}const e=this.lastToIndex,s=a(t);e===s?this.completeReorder():this.ionItemReorder.emit({from:s,to:e,complete:this.completeReorder.bind(this)}),_()}completeReorder(t){const e=this.selectedItemEl;if(e&&this.state===2){const s=this.el.children,o=s.length,r=this.lastToIndex,n=a(e);y(()=>{if(r!==n&&(t===void 0||t===!0)){const i=n<r?s[r+1]:s[r];this.el.insertBefore(e,i)}for(let i=0;i<o;i++)s[i].style.transform=""}),Array.isArray(t)&&(t=L(t,n,r)),e.style.transition="",e.classList.remove(d),this.selectedItemEl=void 0,this.state=0}return t}itemIndexForTop(t){const e=this.cachedHeights;for(let s=0;s<e.length;s++)if(e[s]>t)return s;return e.length-1}reorderMove(t,e){const s=this.selectedItemHeight,o=this.el.children;for(let r=0;r<o.length;r++){const n=o[r].style;let i="";r>t&&r<=e?i=`translateY(${-s}px)`:r<t&&r>=e&&(i=`translateY(${s}px)`),n.transform=i}}autoscroll(t){if(!this.scrollEl)return 0;let e=0;return t<this.scrollElTop?e=-10:t>this.scrollElBottom&&(e=H),e!==0&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial}render(){const t=g(this);return E(I,{key:"a38c7fbceb677201330a602273d5b55abb32da19",class:{[t]:!0,"reorder-enabled":!this.disabled,"reorder-list-active":this.state!==0}})}get el(){return b(this)}static get watchers(){return{disabled:["disabledChanged"]}}},a=t=>t.$ionIndex,M=(t,e)=>{let s;for(;t;){if(s=t.parentElement,s===e)return t;t=s}},h=60,H=10,d="reorder-selected",L=(t,e,s)=>{const o=t[e];return t.splice(e,1),t.splice(s,0,o),t.slice()};B.style=R;export{B as ion_reorder_group};

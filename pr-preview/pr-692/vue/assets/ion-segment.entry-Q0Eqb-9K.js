const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-0fc64123-CtVBTaUX.js","./gesture-controller-a29626f0-CKNmfd8r.js"])))=>i.map(i=>d[i]);
import{_ as k}from"./iframe-BCmO2hXq.js";import{r as S,c as g,w as B,b as I,h as m,H as y,g as V}from"./index-CYPV5ngz.js";import{r as E}from"./helpers-b14eeb70-DAoIUSfU.js";import{i as b}from"./dir-861e8ef7-ebPfiN6E.js";import{c as N,h as v}from"./theme-516b22d6-DD5XIICl.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-D6ApT1Ci.js";const G=":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:grid;grid-auto-columns:1fr;position:relative;align-items:stretch;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;user-select:none}:host(.segment-scrollable){justify-content:start;width:auto;overflow-x:auto;grid-auto-columns:minmax(min-content, 1fr)}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.065)}:host(.in-toolbar){-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:auto}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb), 0.11)}",R=G,L=":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:grid;grid-auto-columns:1fr;position:relative;align-items:stretch;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;user-select:none}:host(.segment-scrollable){justify-content:start;width:auto;overflow-x:auto;grid-auto-columns:minmax(min-content, 1fr)}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent;grid-auto-columns:minmax(auto, 360px)}:host(.in-toolbar){min-height:var(--min-height)}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:auto}",A=L,M=class{constructor(t){S(this,t),this.ionChange=g(this,"ionChange",7),this.ionSelect=g(this,"ionSelect",7),this.ionStyle=g(this,"ionStyle",7),this.segmentViewEl=null,this.onClick=n=>{const s=n.target,e=this.checked;s.tagName!=="ION-SEGMENT"&&(this.value=s.value,s!==e&&this.emitValueChange(),this.segmentViewEl?(this.updateSegmentView(),this.scrollable&&e&&this.checkButton(e,s)):(this.scrollable||!this.swipeGesture)&&(e?this.checkButton(e,s):this.setCheckedClasses()))},this.onSlottedItemsChange=()=>{this.valueChanged(this.value)},this.getSegmentButton=n=>{var s,e;const i=this.getButtons().filter(o=>!o.disabled),a=i.findIndex(o=>o===document.activeElement);switch(n){case"first":return i[0];case"last":return i[i.length-1];case"next":return(s=i[a+1])!==null&&s!==void 0?s:i[0];case"previous":return(e=i[a-1])!==null&&e!==void 0?e:i[i.length-1];default:return null}},this.activated=!1,this.color=void 0,this.disabled=!1,this.scrollable=!1,this.swipeGesture=!0,this.value=void 0,this.selectOnFocus=!1}colorChanged(t,n){(n===void 0&&t!==void 0||n!==void 0&&t===void 0)&&this.emitStyle()}swipeGestureChanged(){this.gestureChanged()}valueChanged(t,n){if(this.segmentViewEl&&t===void 0){this.value=this.getButtons()[0].value;return}if(n!==void 0&&t!==void 0){const s=this.getButtons(),e=s.find(a=>a.value===n),i=s.find(a=>a.value===t);e&&i&&(this.segmentViewEl?this.triggerScrollOnValueChange!==!1&&this.updateSegmentView():this.checkButton(e,i))}else t!==void 0&&n===void 0&&this.segmentViewEl&&this.updateSegmentView();this.ionSelect.emit({value:t}),this.segmentViewEl||this.scrollActiveButtonIntoView(),this.triggerScrollOnValueChange=void 0}disabledChanged(){if(this.gestureChanged(),this.segmentViewEl)this.segmentViewEl.disabled=this.disabled;else{const t=this.getButtons();for(const n of t)n.disabled=this.disabled}}gestureChanged(){this.gesture&&this.gesture.enable(!this.scrollable&&!this.disabled&&this.swipeGesture)}connectedCallback(){this.emitStyle(),this.segmentViewEl=this.getSegmentView()}disconnectedCallback(){this.segmentViewEl=null}componentWillLoad(){this.emitStyle()}async componentDidLoad(){this.setCheckedClasses(),E(()=>{this.scrollActiveButtonIntoView(!1)}),this.gesture=(await k(async()=>{const{createGesture:t}=await import("./index-0fc64123-CtVBTaUX.js");return{createGesture:t}},__vite__mapDeps([0,1]),import.meta.url)).createGesture({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:!1,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gestureChanged(),this.disabled&&this.disabledChanged(),this.updateSegmentView(!1)}onStart(t){this.valueBeforeGesture=this.value,this.activate(t)}onMove(t){this.setNextIndex(t)}onEnd(t){this.setActivated(!1),this.setNextIndex(t,!0),t.event.stopImmediatePropagation();const n=this.value;n!==void 0&&this.valueBeforeGesture!==n&&(this.emitValueChange(),this.updateSegmentView()),this.valueBeforeGesture=void 0}emitValueChange(){const{value:t}=this;this.ionChange.emit({value:t})}getButtons(){return Array.from(this.el.querySelectorAll("ion-segment-button"))}get checked(){return this.getButtons().find(t=>t.value===this.value)}setActivated(t){this.getButtons().forEach(s=>{s.classList.toggle("segment-button-activated",t)}),this.activated=t}activate(t){const n=t.event.target,e=this.getButtons().find(i=>i.value===this.value);n.tagName==="ION-SEGMENT-BUTTON"&&(e||(this.value=n.value,this.setCheckedClasses()),this.value===n.value&&this.setActivated(!0))}getIndicator(t){return(t.shadowRoot||t).querySelector(".segment-button-indicator")}checkButton(t,n){const s=this.getIndicator(t),e=this.getIndicator(n);if(s===null||e===null)return;const i=s.getBoundingClientRect(),a=e.getBoundingClientRect(),o=i.width/a.width,l=`translate3d(${i.left-a.left}px, 0, 0) scaleX(${o})`;B(()=>{e.classList.remove("segment-button-indicator-animated"),e.style.setProperty("transform",l),e.getBoundingClientRect(),e.classList.add("segment-button-indicator-animated"),e.style.setProperty("transform",""),this.scrollActiveButtonIntoView(!0)}),this.value=n.value,this.setCheckedClasses()}setCheckedClasses(){const t=this.getButtons(),s=t.findIndex(e=>e.value===this.value)+1;for(const e of t)e.classList.remove("segment-button-after-checked");s<t.length&&t[s].classList.add("segment-button-after-checked")}getSegmentView(){const n=this.getButtons().find(e=>e.contentId),s=document.querySelector(`ion-segment-content[id="${n==null?void 0:n.contentId}"]`);return s==null?void 0:s.closest("ion-segment-view")}handleSegmentViewScroll(t){const{scrollRatio:n,isManualScroll:s}=t.detail;if(!s)return;const e=t.target,i=this.segmentViewEl,a=this.el;if(t.composedPath().includes(i)||e!=null&&e.contains(a)){const o=this.getButtons();if(!o.length)return;const r=o.findIndex(u=>u.value===this.value),l=o[r],c=Math.round(n*(o.length-1));(this.lastNextIndex===void 0||this.lastNextIndex!==c)&&(this.lastNextIndex=c,this.triggerScrollOnValueChange=!1,this.checkButton(l,o[c]),this.emitValueChange())}}updateSegmentView(t=!0){const s=this.getButtons().find(i=>i.value===this.value);if(!(s!=null&&s.contentId))return;const e=this.segmentViewEl;e&&e.setContent(s.contentId,t)}scrollActiveButtonIntoView(t=!0){const{scrollable:n,value:s,el:e}=this;if(n){const a=this.getButtons().find(o=>o.value===s);if(a!==void 0){const o=e.getBoundingClientRect(),r=a.getBoundingClientRect(),c=r.x-o.x-o.width/2+r.width/2,u=e.scrollLeft+c;e.scrollTo({top:0,left:u,behavior:t?"smooth":"instant"})}}}setNextIndex(t,n=!1){const s=b(this.el),e=this.activated,i=this.getButtons(),a=i.findIndex(h=>h.value===this.value),o=i[a];let r,l;if(a===-1)return;const c=o.getBoundingClientRect(),u=c.left,f=c.width,d=t.currentX,w=c.top+c.height/2,p=this.el.getRootNode().elementFromPoint(d,w),C=s?d>u+f:d<u,x=s?d<u:d>u+f;if(e&&!n){if(C){const h=a-1;h>=0&&(l=h)}else if(x&&e&&!n){const h=a+1;h<i.length&&(l=h)}l!==void 0&&!i[l].disabled&&(r=i[l])}if(!e&&n&&(r=p),r!=null){if(r.tagName==="ION-SEGMENT")return!1;o!==r&&this.checkButton(o,r)}return!0}emitStyle(){this.ionStyle.emit({segment:!0})}onKeyDown(t){const n=b(this.el);let s=this.selectOnFocus,e;switch(t.key){case"ArrowRight":t.preventDefault(),e=n?this.getSegmentButton("previous"):this.getSegmentButton("next");break;case"ArrowLeft":t.preventDefault(),e=n?this.getSegmentButton("next"):this.getSegmentButton("previous");break;case"Home":t.preventDefault(),e=this.getSegmentButton("first");break;case"End":t.preventDefault(),e=this.getSegmentButton("last");break;case" ":case"Enter":t.preventDefault(),e=document.activeElement,s=!0}if(e){if(s){const i=this.checked;this.checkButton(i||e,e),e!==i&&this.emitValueChange()}e.setFocus()}}render(){const t=I(this);return m(y,{key:"66bd7a565ba73540b3bbe56dd23b95e59bcef9bc",role:"tablist",onClick:this.onClick,class:N(this.color,{[t]:!0,"in-toolbar":v("ion-toolbar",this.el),"in-toolbar-color":v("ion-toolbar[color]",this.el),"segment-activated":this.activated,"segment-disabled":this.disabled,"segment-scrollable":this.scrollable})},m("slot",{key:"782c521b1a33729b8eab1c4b879bc3f2ff48ae1b",onSlotchange:this.onSlottedItemsChange}))}get el(){return V(this)}static get watchers(){return{color:["colorChanged"],swipeGesture:["swipeGestureChanged"],value:["valueChanged"],disabled:["disabledChanged"]}}};M.style={ios:R,md:A};export{M as ion_segment};

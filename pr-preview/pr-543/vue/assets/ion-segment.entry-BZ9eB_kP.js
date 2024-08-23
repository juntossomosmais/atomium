const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-8d9b57d7-PlsDOfno.js","./gesture-controller-5b8003e1-9dGIRWtU.js"])))=>i.map(i=>d[i]);
import{_ as w}from"./iframe-CrqqsAdq.js";import{r as B,c as g,w as y,b as S,h as m,H as I,g as E}from"./index-D7SNAhmR.js";import{r as N}from"./helpers-079c01eb-D592YRe8.js";import{i as b}from"./dir-861e8ef7-ebPfiN6E.js";import{c as G,h as v}from"./theme-516b22d6-DD5XIICl.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-Dk4JuX4g.js";const L=":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:grid;grid-auto-columns:1fr;position:relative;align-items:stretch;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;user-select:none}:host(.segment-scrollable){justify-content:start;width:auto;overflow-x:auto;grid-auto-columns:minmax(min-content, 1fr)}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.065)}:host(.in-toolbar){-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:auto}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb), 0.11)}",R=L,A=":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:grid;grid-auto-columns:1fr;position:relative;align-items:stretch;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;user-select:none}:host(.segment-scrollable){justify-content:start;width:auto;overflow-x:auto;grid-auto-columns:minmax(min-content, 1fr)}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent;grid-auto-columns:minmax(auto, 360px)}:host(.in-toolbar){min-height:var(--min-height)}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:auto}",_=A,D=class{constructor(t){B(this,t),this.ionChange=g(this,"ionChange",7),this.ionSelect=g(this,"ionSelect",7),this.ionStyle=g(this,"ionStyle",7),this.onClick=n=>{const s=n.target,e=this.checked;s.tagName!=="ION-SEGMENT"&&(this.value=s.value,s!==e&&this.emitValueChange(),(this.scrollable||!this.swipeGesture)&&(e?this.checkButton(e,s):this.setCheckedClasses()))},this.getSegmentButton=n=>{var s,e;const o=this.getButtons().filter(i=>!i.disabled),a=o.findIndex(i=>i===document.activeElement);switch(n){case"first":return o[0];case"last":return o[o.length-1];case"next":return(s=o[a+1])!==null&&s!==void 0?s:o[0];case"previous":return(e=o[a-1])!==null&&e!==void 0?e:o[o.length-1];default:return null}},this.activated=!1,this.color=void 0,this.disabled=!1,this.scrollable=!1,this.swipeGesture=!0,this.value=void 0,this.selectOnFocus=!1}colorChanged(t,n){(n===void 0&&t!==void 0||n!==void 0&&t===void 0)&&this.emitStyle()}swipeGestureChanged(){this.gestureChanged()}valueChanged(t){this.ionSelect.emit({value:t}),this.scrollActiveButtonIntoView()}disabledChanged(){this.gestureChanged();const t=this.getButtons();for(const n of t)n.disabled=this.disabled}gestureChanged(){this.gesture&&this.gesture.enable(!this.scrollable&&!this.disabled&&this.swipeGesture)}connectedCallback(){this.emitStyle()}componentWillLoad(){this.emitStyle()}async componentDidLoad(){this.setCheckedClasses(),this.ionSelect.emit({value:this.value}),N(()=>{this.scrollActiveButtonIntoView(!1)}),this.gesture=(await w(async()=>{const{createGesture:t}=await import("./index-8d9b57d7-PlsDOfno.js");return{createGesture:t}},__vite__mapDeps([0,1]),import.meta.url)).createGesture({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:!1,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gestureChanged(),this.disabled&&this.disabledChanged()}onStart(t){this.valueBeforeGesture=this.value,this.activate(t)}onMove(t){this.setNextIndex(t)}onEnd(t){this.setActivated(!1),this.setNextIndex(t,!0),t.event.stopImmediatePropagation();const n=this.value;n!==void 0&&this.valueBeforeGesture!==n&&this.emitValueChange(),this.valueBeforeGesture=void 0}emitValueChange(){const{value:t}=this;this.ionChange.emit({value:t})}getButtons(){return Array.from(this.el.querySelectorAll("ion-segment-button"))}get checked(){return this.getButtons().find(t=>t.value===this.value)}setActivated(t){this.getButtons().forEach(s=>{t?s.classList.add("segment-button-activated"):s.classList.remove("segment-button-activated")}),this.activated=t}activate(t){const n=t.event.target,e=this.getButtons().find(o=>o.value===this.value);n.tagName==="ION-SEGMENT-BUTTON"&&(e||(this.value=n.value,this.setCheckedClasses()),this.value===n.value&&this.setActivated(!0))}getIndicator(t){return(t.shadowRoot||t).querySelector(".segment-button-indicator")}checkButton(t,n){const s=this.getIndicator(t),e=this.getIndicator(n);if(s===null||e===null)return;const o=s.getBoundingClientRect(),a=e.getBoundingClientRect(),i=o.width/a.width,l=`translate3d(${o.left-a.left}px, 0, 0) scaleX(${i})`;y(()=>{e.classList.remove("segment-button-indicator-animated"),e.style.setProperty("transform",l),e.getBoundingClientRect(),e.classList.add("segment-button-indicator-animated"),e.style.setProperty("transform","")}),this.value=n.value,this.setCheckedClasses()}setCheckedClasses(){const t=this.getButtons(),s=t.findIndex(e=>e.value===this.value)+1;for(const e of t)e.classList.remove("segment-button-after-checked");s<t.length&&t[s].classList.add("segment-button-after-checked")}scrollActiveButtonIntoView(t=!0){const{scrollable:n,value:s,el:e}=this;if(n){const a=this.getButtons().find(i=>i.value===s);if(a!==void 0){const i=e.getBoundingClientRect(),r=a.getBoundingClientRect(),u=r.x-i.x-i.width/2+r.width/2;e.scrollBy({top:0,left:u,behavior:t?"smooth":"instant"})}}}setNextIndex(t,n=!1){const s=b(this.el),e=this.activated,o=this.getButtons(),a=o.findIndex(c=>c.value===this.value),i=o[a];let r,l;if(a===-1)return;const u=i.getBoundingClientRect(),d=u.left,f=u.width,h=t.currentX,p=u.top+u.height/2,C=this.el.getRootNode().elementFromPoint(h,p),k=s?h>d+f:h<d,x=s?h<d:h>d+f;if(e&&!n){if(k){const c=a-1;c>=0&&(l=c)}else if(x&&e&&!n){const c=a+1;c<o.length&&(l=c)}l!==void 0&&!o[l].disabled&&(r=o[l])}if(!e&&n&&(r=C),r!=null){if(r.tagName==="ION-SEGMENT")return!1;i!==r&&this.checkButton(i,r)}return!0}emitStyle(){this.ionStyle.emit({segment:!0})}onKeyDown(t){const n=b(this.el);let s=this.selectOnFocus,e;switch(t.key){case"ArrowRight":t.preventDefault(),e=n?this.getSegmentButton("previous"):this.getSegmentButton("next");break;case"ArrowLeft":t.preventDefault(),e=n?this.getSegmentButton("next"):this.getSegmentButton("previous");break;case"Home":t.preventDefault(),e=this.getSegmentButton("first");break;case"End":t.preventDefault(),e=this.getSegmentButton("last");break;case" ":case"Enter":t.preventDefault(),e=document.activeElement,s=!0}if(e){if(s){const o=this.checked;this.checkButton(o||e,e),e!==o&&this.emitValueChange()}e.setFocus()}}render(){const t=S(this);return m(I,{key:"01c94f9fcc51fb5a7612588c87155a130b7c8a9d",role:"tablist",onClick:this.onClick,class:G(this.color,{[t]:!0,"in-toolbar":v("ion-toolbar",this.el),"in-toolbar-color":v("ion-toolbar[color]",this.el),"segment-activated":this.activated,"segment-disabled":this.disabled,"segment-scrollable":this.scrollable})},m("slot",{key:"b0afdfcb7506a765df42d1d6eb4e1d81bf8fd92a"}))}get el(){return E(this)}static get watchers(){return{color:["colorChanged"],swipeGesture:["swipeGestureChanged"],value:["valueChanged"],disabled:["disabledChanged"]}}};D.style={ios:R,md:_};export{D as ion_segment};

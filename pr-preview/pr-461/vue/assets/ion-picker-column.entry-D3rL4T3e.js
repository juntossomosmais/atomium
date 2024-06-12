const __vite__fileDeps=["./index-8d9b57d7-PlsDOfno.js","./gesture-controller-5b8003e1-9dGIRWtU.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as M}from"./iframe-D6G9yviH.js";import{r as E,c as F,b as k,h as f,H as Y,g as S}from"./index-Cd49ORYO.js";import{f as v}from"./helpers-079c01eb-D592YRe8.js";import{b as D,c as H,a as _}from"./haptic-edb3ead4-CtuEXb_d.js";import{g as P}from"./theme-516b22d6-DD5XIICl.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-Cotndkpi.js";import"./capacitor-74355484-sCloY8M9.js";import"./index-d9a82e80-B2PaWDFh.js";const A=".picker-col{display:flex;position:relative;flex:1;justify-content:center;height:100%;box-sizing:content-box;contain:content}.picker-opts{position:relative;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}@supports (inset-inline-start: 0){.picker-opt{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-opt{left:0}:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}[dir=rtl] .picker-opt{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-opt:dir(rtl){left:unset;right:unset;right:0}}}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{justify-content:flex-start}.picker-opts-right{justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:0;padding-bottom:0;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px;pointer-events:none}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;transform-origin:center center;height:46px;transform-style:preserve-3d;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:20px;line-height:42px;backface-visibility:hidden;pointer-events:auto}:host-context([dir=rtl]) .picker-opt{transform-origin:calc(100% - center) center}[dir=rtl] .picker-opt{transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){.picker-opt:dir(rtl){transform-origin:calc(100% - center) center}}",T=A,L=".picker-col{display:flex;position:relative;flex:1;justify-content:center;height:100%;box-sizing:content-box;contain:content}.picker-opts{position:relative;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}@supports (inset-inline-start: 0){.picker-opt{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-opt{left:0}:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}[dir=rtl] .picker-opt{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-opt:dir(rtl){left:unset;right:unset;right:0}}}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{justify-content:flex-start}.picker-opts-right{justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;backface-visibility:hidden;pointer-events:auto}.picker-prefix,.picker-suffix,.picker-opt.picker-opt-selected{color:var(--ion-color-primary, #3880ff)}",O=L,R=class{constructor(t){E(this,t),this.ionPickerColChange=F(this,"ionPickerColChange",7),this.optHeight=0,this.rotateFactor=0,this.scaleFactor=1,this.velocity=0,this.y=0,this.noAnimate=!0,this.colDidChange=!1,this.col=void 0}colChanged(){this.colDidChange=!0}async connectedCallback(){let t=0,e=.81;k(this)==="ios"&&(t=-.46,e=1),this.rotateFactor=t,this.scaleFactor=e,this.gesture=(await M(()=>import("./index-8d9b57d7-PlsDOfno.js"),__vite__mapDeps([0,1]),import.meta.url)).createGesture({el:this.el,gestureName:"picker-swipe",gesturePriority:100,threshold:0,passive:!1,onStart:s=>this.onStart(s),onMove:s=>this.onMove(s),onEnd:s=>this.onEnd(s)}),this.gesture.enable(),this.tmrId=setTimeout(()=>{this.noAnimate=!1,this.refresh(!0)},250)}componentDidLoad(){this.onDomChange()}componentDidUpdate(){this.colDidChange&&(this.onDomChange(!0,!1),this.colDidChange=!1)}disconnectedCallback(){this.rafId!==void 0&&cancelAnimationFrame(this.rafId),this.tmrId&&clearTimeout(this.tmrId),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}emitColChange(){this.ionPickerColChange.emit(this.col)}setSelected(t,e){const i=t>-1?-(t*this.optHeight):0;this.velocity=0,this.rafId!==void 0&&cancelAnimationFrame(this.rafId),this.update(i,e,!0),this.emitColChange()}update(t,e,i){if(!this.optsEl)return;let s=0,o=0;const{col:r,rotateFactor:p}=this,n=r.selectedIndex,h=r.selectedIndex=this.indexForY(-t),w=e===0?"":e+"ms",I=`scale(${this.scaleFactor})`,m=this.optsEl.children;for(let a=0;a<m.length;a++){const d=m[a],c=r.options[a],u=a*this.optHeight+t;let l="";if(p!==0){const x=u*p;Math.abs(x)<=90?(s=0,o=90,l=`rotateX(${x}deg) `):s=-9999}else o=0,s=u;const g=h===a;l+=`translate3d(0px,${s}px,${o}px) `,this.scaleFactor!==1&&!g&&(l+=I),this.noAnimate?(c.duration=0,d.style.transitionDuration=""):e!==c.duration&&(c.duration=e,d.style.transitionDuration=w),l!==c.transform&&(c.transform=l),d.style.transform=l,c.selected=g,g?d.classList.add(y):d.classList.remove(y)}this.col.prevSelected=n,i&&(this.y=t),this.lastIndex!==h&&(D(),this.lastIndex=h)}decelerate(){if(this.velocity!==0){this.velocity*=j,this.velocity=this.velocity>0?Math.max(this.velocity,1):Math.min(this.velocity,-1);let t=this.y+this.velocity;t>this.minY?(t=this.minY,this.velocity=0):t<this.maxY&&(t=this.maxY,this.velocity=0),this.update(t,0,!0),Math.round(t)%this.optHeight!==0||Math.abs(this.velocity)>1?this.rafId=requestAnimationFrame(()=>this.decelerate()):(this.velocity=0,this.emitColChange(),H())}else if(this.y%this.optHeight!==0){const t=Math.abs(this.y%this.optHeight);this.velocity=t>this.optHeight/2?1:-1,this.decelerate()}}indexForY(t){return Math.min(Math.max(Math.abs(Math.round(t/this.optHeight)),0),this.col.options.length-1)}onStart(t){t.event.cancelable&&t.event.preventDefault(),t.event.stopPropagation(),_(),this.rafId!==void 0&&cancelAnimationFrame(this.rafId);const e=this.col.options;let i=e.length-1,s=0;for(let o=0;o<e.length;o++)e[o].disabled||(i=Math.min(i,o),s=Math.max(s,o));this.minY=-(i*this.optHeight),this.maxY=-(s*this.optHeight)}onMove(t){t.event.cancelable&&t.event.preventDefault(),t.event.stopPropagation();let e=this.y+t.deltaY;e>this.minY?(e=Math.pow(e,.8),this.bounceFrom=e):e<this.maxY?(e+=Math.pow(this.maxY-e,.9),this.bounceFrom=e):this.bounceFrom=0,this.update(e,0,!1)}onEnd(t){if(this.bounceFrom>0){this.update(this.minY,100,!0),this.emitColChange();return}else if(this.bounceFrom<0){this.update(this.maxY,100,!0),this.emitColChange();return}if(this.velocity=v(-b,t.velocityY*23,b),this.velocity===0&&t.deltaY===0){const e=t.event.target.closest(".picker-opt");e!=null&&e.hasAttribute("opt-index")&&this.setSelected(parseInt(e.getAttribute("opt-index"),10),C)}else{if(this.y+=t.deltaY,Math.abs(t.velocityY)<.05){const e=t.deltaY>0,i=Math.abs(this.y)%this.optHeight/this.optHeight;e&&i>.5?this.velocity=Math.abs(this.velocity)*-1:!e&&i<=.5&&(this.velocity=Math.abs(this.velocity))}this.decelerate()}}refresh(t,e){var i;let s=this.col.options.length-1,o=0;const r=this.col.options;for(let n=0;n<r.length;n++)r[n].disabled||(s=Math.min(s,n),o=Math.max(o,n));if(this.velocity!==0)return;const p=v(s,(i=this.col.selectedIndex)!==null&&i!==void 0?i:0,o);if(this.col.prevSelected!==p||t){const n=p*this.optHeight*-1,h=e?C:0;this.velocity=0,this.update(n,h,!0)}}onDomChange(t,e){const i=this.optsEl;i&&(this.optHeight=i.firstElementChild?i.firstElementChild.clientHeight:0),this.refresh(t,e)}render(){const t=this.col,e=k(this);return f(Y,{key:"b0d3c8b8315f130f1bcddcbc53ee9949676423bf",class:Object.assign({[e]:!0,"picker-col":!0,"picker-opts-left":this.col.align==="left","picker-opts-right":this.col.align==="right"},P(t.cssClass)),style:{"max-width":this.col.columnWidth}},t.prefix&&f("div",{class:"picker-prefix",style:{width:t.prefixWidth}},t.prefix),f("div",{key:"2c0471c265bc3dfa2d415da77b8a70850e74458e",class:"picker-opts",style:{maxWidth:t.optionsWidth},ref:i=>this.optsEl=i},t.options.map((i,s)=>f("button",{"aria-label":i.ariaLabel,class:{"picker-opt":!0,"picker-opt-disabled":!!i.disabled},"opt-index":s},i.text))),t.suffix&&f("div",{class:"picker-suffix",style:{width:t.suffixWidth}},t.suffix))}get el(){return S(this)}static get watchers(){return{col:["colChanged"]}}},y="picker-opt-selected",j=.97,b=90,C=150;R.style={ios:T,md:O};export{R as ion_picker_column};

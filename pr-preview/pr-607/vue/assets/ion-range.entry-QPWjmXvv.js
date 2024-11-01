const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-8d9b57d7-PlsDOfno.js","./gesture-controller-5b8003e1-9dGIRWtU.js"])))=>i.map(i=>d[i]);
import{_ as U}from"./iframe-PYrbdLgI.js";import{r as q,c as m,b as E,h as i,H as F,g as Y}from"./index-B-JC0Iz5.js";import{a as G,d as W,r as X}from"./index-6cad21e9-C8mkRYkz.js";import{c as N}from"./form-controller-d1a439dc-yINrMp-s.js";import{f,m as H,i as O,e as R,n as J}from"./helpers-079c01eb-D592YRe8.js";import{p as C}from"./index-f5dbb989-By3l89LO.js";import{i as I}from"./dir-861e8ef7-ebPfiN6E.js";import{c as L,h as V}from"./theme-516b22d6-DD5XIICl.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-B2N54QI-.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */function Q(t){return t%1===0?0:t.toString().split(".")[1].length}function Z(t,...e){const n=Math.max(...e.map(r=>Q(r)));return Number(t.toFixed(n))}const ee=":host{--knob-handle-size:calc(var(--knob-size) * 2);display:flex;position:relative;flex:3;align-items:center;font-family:var(--ion-font-family, inherit);user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:grab;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);display:flex;position:absolute;justify-content:center;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}@supports (inset-inline-start: 0){.range-knob-handle{inset-inline-start:0}}@supports not (inset-inline-start: 0){.range-knob-handle{left:0}:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}[dir=rtl] .range-knob-handle{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset;right:unset;right:0}}}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}@supports (inset-inline-start: 0){.range-bar-container{inset-inline-start:0}}@supports not (inset-inline-start: 0){.range-bar-container{left:0}:host-context([dir=rtl]) .range-bar-container{left:unset;right:unset;right:0}[dir=rtl] .range-bar-container{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset;right:unset;right:0}}}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}@supports (inset-inline-start: 0){.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}}@supports not (inset-inline-start: 0){.range-knob{left:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}}}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){align-self:center}.range-wrapper{display:flex;position:relative;flex-grow:1;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:flex;flex-grow:1;align-items:center}:host(.range-label-placement-start) .range-wrapper{flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.range-label-placement-stacked) .range-wrapper{flex-direction:column;align-items:stretch}:host(.range-label-placement-stacked) .label-text-wrapper{transform-origin:left top;transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host-context([dir=rtl]):host(.range-label-placement-stacked) .label-text-wrapper,:host-context([dir=rtl]).range-label-placement-stacked .label-text-wrapper{transform-origin:right top}@supports selector(:dir(rtl)){:host(.range-label-placement-stacked:dir(rtl)) .label-text-wrapper{transform-origin:right top}}:host(.in-item.range-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.range-label-placement-stacked) .native-wrapper{margin-bottom:0px}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0px 0.5px 4px rgba(0, 0, 0, 0.12), 0px 6px 13px rgba(0, 0, 0, 0.12);--knob-size:26px;--bar-height:4px;--bar-background:var(--ion-color-step-900, #e6e6e6);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:2px;--height:42px}:host(.legacy-range){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:8px}:host(.range-item-start-adjustment){-webkit-padding-start:24px;padding-inline-start:24px}:host(.range-item-end-adjustment){-webkit-padding-end:24px;padding-inline-end:24px}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin:not(.range-label-placement-stacked)){padding-top:calc(8px + 0.75rem)}:host(.range-has-pin.range-label-placement-stacked) .label-text-wrapper{margin-bottom:calc(8px + 0.75rem)}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-bar-active.has-ticks{border-radius:0;-webkit-margin-start:-2px;margin-inline-start:-2px;-webkit-margin-end:-2px;margin-inline-end:-2px}.range-tick{-webkit-margin-start:-2px;margin-inline-start:-2px;border-radius:0;position:absolute;top:17px;width:4px;height:8px;background:var(--ion-color-step-900, #e6e6e6);pointer-events:none}.range-tick-active{background:var(--bar-background-active)}.range-pin{transform:translate3d(0,  100%,  0) scale(0.01);-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;min-width:28px;transition:transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:0.75rem;text-align:center}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{transform:translate3d(0, calc(-100% + 11px), 0) scale(1)}:host(.range-disabled){opacity:0.3}",te=ee,ne=':host{--knob-handle-size:calc(var(--knob-size) * 2);display:flex;position:relative;flex:3;align-items:center;font-family:var(--ion-font-family, inherit);user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:grab;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);display:flex;position:absolute;justify-content:center;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}@supports (inset-inline-start: 0){.range-knob-handle{inset-inline-start:0}}@supports not (inset-inline-start: 0){.range-knob-handle{left:0}:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}[dir=rtl] .range-knob-handle{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset;right:unset;right:0}}}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}@supports (inset-inline-start: 0){.range-bar-container{inset-inline-start:0}}@supports not (inset-inline-start: 0){.range-bar-container{left:0}:host-context([dir=rtl]) .range-bar-container{left:unset;right:unset;right:0}[dir=rtl] .range-bar-container{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset;right:unset;right:0}}}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}@supports (inset-inline-start: 0){.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}}@supports not (inset-inline-start: 0){.range-knob{left:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}}}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){align-self:center}.range-wrapper{display:flex;position:relative;flex-grow:1;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:flex;flex-grow:1;align-items:center}:host(.range-label-placement-start) .range-wrapper{flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.range-label-placement-stacked) .range-wrapper{flex-direction:column;align-items:stretch}:host(.range-label-placement-stacked) .label-text-wrapper{transform-origin:left top;transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host-context([dir=rtl]):host(.range-label-placement-stacked) .label-text-wrapper,:host-context([dir=rtl]).range-label-placement-stacked .label-text-wrapper{transform-origin:right top}@supports selector(:dir(rtl)){:host(.range-label-placement-stacked:dir(rtl)) .label-text-wrapper{transform-origin:right top}}:host(.in-item.range-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.range-label-placement-stacked) .native-wrapper{margin-bottom:0px}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.26);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff)}:host(.legacy-range) ::slotted([slot=label]){font-size:initial}:host(:not(.legacy-range)) ::slotted(:not(ion-icon)[slot=start]),:host(:not(.legacy-range)) ::slotted(:not(ion-icon)[slot=end]),:host(:not(.legacy-range)) .native-wrapper{font-size:0.75rem}:host(.legacy-range){-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px;padding-top:8px;padding-bottom:8px;font-size:0.75rem}:host(.range-item-start-adjustment){-webkit-padding-start:18px;padding-inline-start:18px}:host(.range-item-end-adjustment){-webkit-padding-end:18px;padding-inline-end:18px}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-knob::before,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin:not(.range-label-placement-stacked)){padding-top:1.75rem}:host(.range-has-pin.range-label-placement-stacked) .label-text-wrapper{margin-bottom:1.75rem}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{transform:scale(0.67);transition-duration:120ms;transition-property:transform, background-color, border;transition-timing-function:ease;z-index:2}.range-knob::before{border-radius:50%;position:absolute;width:var(--knob-size);height:var(--knob-size);transform:scale(1);transition:0.267s cubic-bezier(0, 0, 0.58, 1);background:var(--knob-background);content:"";opacity:0.13;pointer-events:none}@supports (inset-inline-start: 0){.range-knob::before{inset-inline-start:0}}@supports not (inset-inline-start: 0){.range-knob::before{left:0}:host-context([dir=rtl]) .range-knob::before{left:unset;right:unset;right:0}[dir=rtl] .range-knob::before{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.range-knob::before:dir(rtl){left:unset;right:unset;right:0}}}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;transform:translate3d(0,  0,  0) scale(0.01);display:flex;align-items:center;justify-content:center;width:1.75rem;height:1.75rem;transition:transform 120ms ease, background 120ms ease;background:var(--pin-background);color:var(--pin-color)}.range-pin::before{bottom:-1px;-webkit-margin-start:-13px;margin-inline-start:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;transform:rotate(-45deg);transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}@supports (inset-inline-start: 0){.range-pin::before{inset-inline-start:50%}}@supports not (inset-inline-start: 0){.range-pin::before{left:50%}:host-context([dir=rtl]) .range-pin::before{left:unset;right:unset;right:50%}[dir=rtl] .range-pin::before{left:unset;right:unset;right:50%}@supports selector(:dir(rtl)){.range-pin::before:dir(rtl){left:unset;right:unset;right:50%}}}:host-context([dir=rtl]) .range-pin::before{left:unset}[dir=rtl] .range-pin::before{left:unset}@supports selector(:dir(rtl)){.range-pin::before:dir(rtl){left:unset}}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{transform:translate3d(0, calc(-100% + 4px), 0) scale(1)}@media (any-hover: hover){.range-knob-handle:hover .range-knob:before{transform:scale(2);opacity:0.13}}.range-knob-handle.ion-activated .range-knob:before,.range-knob-handle.ion-focused .range-knob:before,.range-knob-handle.range-knob-pressed .range-knob:before{transform:scale(2)}.range-knob-handle.ion-focused .range-knob::before{opacity:0.13}.range-knob-handle.ion-activated .range-knob::before,.range-knob-handle.range-knob-pressed .range-knob::before{opacity:0.25}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob,:host(:not(.range-has-pin)) .range-knob-handle.ion-focused .range-knob{transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .range-knob{transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .label-text-wrapper,:host(.range-disabled) ::slotted([slot=start]),:host(.range-disabled) ::slotted([slot=end]){opacity:0.38}',re=ne,ae=class{constructor(t){q(this,t),this.ionChange=m(this,"ionChange",7),this.ionInput=m(this,"ionInput",7),this.ionStyle=m(this,"ionStyle",7),this.ionFocus=m(this,"ionFocus",7),this.ionBlur=m(this,"ionBlur",7),this.ionKnobMoveStart=m(this,"ionKnobMoveStart",7),this.ionKnobMoveEnd=m(this,"ionKnobMoveEnd",7),this.rangeId=`ion-r-${ie++}`,this.didLoad=!1,this.noUpdate=!1,this.hasFocus=!1,this.inheritedAttributes={},this.contentEl=null,this.initialContentScrollY=!0,this.hasLoggedDeprecationWarning=!1,this.clampBounds=e=>f(this.min,e,this.max),this.ensureValueInBounds=e=>this.dualKnobs?{lower:this.clampBounds(e.lower),upper:this.clampBounds(e.upper)}:this.clampBounds(e),this.setupGesture=async()=>{const e=this.rangeSlider;e&&(this.gesture=(await U(async()=>{const{createGesture:n}=await import("./index-8d9b57d7-PlsDOfno.js");return{createGesture:n}},__vite__mapDeps([0,1]),import.meta.url)).createGesture({el:e,gestureName:"range",gesturePriority:100,threshold:10,onStart:()=>this.onStart(),onMove:n=>this.onMove(n),onEnd:n=>this.onEnd(n)}),this.gesture.enable(!this.disabled))},this.handleKeyboard=(e,n)=>{const{ensureValueInBounds:r}=this;let a=this.step;a=a>0?a:1,a=a/(this.max-this.min),n||(a*=-1),e==="A"?this.ratioA=f(0,this.ratioA+a,1):this.ratioB=f(0,this.ratioB+a,1),this.ionKnobMoveStart.emit({value:r(this.value)}),this.updateValue(),this.emitValueChange(),this.ionKnobMoveEnd.emit({value:r(this.value)})},this.onBlur=()=>{this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit(),this.emitStyle())},this.onFocus=()=>{this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit(),this.emitStyle())},this.ratioA=0,this.ratioB=0,this.pressedKnob=void 0,this.color=void 0,this.debounce=void 0,this.name=this.rangeId,this.label=void 0,this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.pinFormatter=e=>Math.round(e),this.snaps=!1,this.step=1,this.ticks=!0,this.activeBarStart=void 0,this.disabled=!1,this.value=0,this.labelPlacement="start",this.legacy=void 0}debounceChanged(){const{ionInput:t,debounce:e,originalIonInput:n}=this;this.ionInput=e===void 0?n??t:H(t,e)}minChanged(){this.noUpdate||this.updateRatio()}maxChanged(){this.noUpdate||this.updateRatio()}activeBarStartChanged(){const{activeBarStart:t}=this;t!==void 0&&(t>this.max?(C(`Range: The value of activeBarStart (${t}) is greater than the max (${this.max}). Valid values are greater than or equal to the min value and less than or equal to the max value.`,this.el),this.activeBarStart=this.max):t<this.min&&(C(`Range: The value of activeBarStart (${t}) is less than the min (${this.min}). Valid values are greater than or equal to the min value and less than or equal to the max value.`,this.el),this.activeBarStart=this.min))}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled),this.emitStyle()}valueChanged(){this.noUpdate||this.updateRatio()}componentWillLoad(){this.el.hasAttribute("id")&&(this.rangeId=this.el.getAttribute("id")),this.inheritedAttributes=O(this.el)}componentDidLoad(){this.originalIonInput=this.ionInput,this.setupGesture(),this.updateRatio(),this.didLoad=!0}connectedCallback(){const{el:t}=this;this.legacyFormController=N(t),this.updateRatio(),this.debounceChanged(),this.disabledChanged(),this.activeBarStartChanged(),this.didLoad&&this.setupGesture(),this.contentEl=G(this.el)}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}getValue(){var t;const e=(t=this.value)!==null&&t!==void 0?t:0;return this.dualKnobs?typeof e=="object"?e:{lower:0,upper:e}:typeof e=="object"?e.upper:e}emitStyle(){this.legacyFormController.hasLegacyControl()&&this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled,legacy:!!this.legacy})}emitValueChange(){this.value=this.ensureValueInBounds(this.value),this.ionChange.emit({value:this.value})}onStart(){this.ionKnobMoveStart.emit({value:this.ensureValueInBounds(this.value)})}onMove(t){const{contentEl:e,pressedKnob:n}=this,r=t.currentX;e&&this.initialContentScrollY===void 0&&(this.initialContentScrollY=W(e)),n===void 0&&this.setPressedKnob(r),this.update(r)}onEnd(t){const{contentEl:e,initialContentScrollY:n}=this,r=t.currentX||t.clientX;this.pressedKnob===void 0&&this.setPressedKnob(r),e&&n!==void 0&&X(e,n),this.update(r),this.pressedKnob=void 0,this.emitValueChange(),this.ionKnobMoveEnd.emit({value:this.ensureValueInBounds(this.value)})}update(t){const e=this.rect;let n=f(0,(t-e.left)/e.width,1);I(this.el)&&(n=1-n),this.snaps&&(n=v(K(n,this.min,this.max,this.step),this.min,this.max)),this.pressedKnob==="A"?this.ratioA=n:this.ratioB=n,this.updateValue()}setPressedKnob(t){const e=this.rect=this.rangeSlider.getBoundingClientRect();let n=f(0,(t-e.left)/e.width,1);I(this.el)&&(n=1-n),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-n)<Math.abs(this.ratioB-n)?"A":"B",this.setFocus(this.pressedKnob)}get valA(){return K(this.ratioA,this.min,this.max,this.step)}get valB(){return K(this.ratioB,this.min,this.max,this.step)}get ratioLower(){if(this.dualKnobs)return Math.min(this.ratioA,this.ratioB);const{activeBarStart:t}=this;return t==null?0:v(t,this.min,this.max)}get ratioUpper(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}updateRatio(){const t=this.getValue(),{min:e,max:n}=this;this.dualKnobs?(this.ratioA=v(t.lower,e,n),this.ratioB=v(t.upper,e,n)):this.ratioA=v(t,e,n)}updateValue(){this.noUpdate=!0;const{valA:t,valB:e}=this;this.value=this.dualKnobs?{lower:Math.min(t,e),upper:Math.max(t,e)}:t,this.ionInput.emit({value:this.value}),this.noUpdate=!1}setFocus(t){if(this.el.shadowRoot){const e=this.el.shadowRoot.querySelector(t==="A"?".range-knob-a":".range-knob-b");e&&e.focus()}}renderLegacyRange(){this.hasLoggedDeprecationWarning||(C(`ion-range now requires providing a label with either the label slot or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the component or the "aria-label" attribute.

Example: <ion-range><div slot="label">Volume</div></ion-range>
Example with aria-label: <ion-range aria-label="Volume"></ion-range>

Developers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.`,this.el),this.legacy&&C(`ion-range is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.

Developers can dismiss this warning by removing their usage of the "legacy" property and using the new range syntax.`,this.el),this.hasLoggedDeprecationWarning=!0);const{el:t,pressedKnob:e,disabled:n,pin:r,rangeId:a}=this,l=E(this);return R(!0,t,this.name,JSON.stringify(this.getValue()),n),i(F,{onFocusin:this.onFocus,onFocusout:this.onBlur,id:a,class:L(this.color,{[l]:!0,"in-item":V("ion-item",t),"range-disabled":n,"range-pressed":e!==void 0,"range-has-pin":r,"legacy-range":!0})},i("slot",{name:"start"}),this.renderRangeSlider(),i("slot",{name:"end"}))}get hasStartSlotContent(){return this.el.querySelector('[slot="start"]')!==null}get hasEndSlotContent(){return this.el.querySelector('[slot="end"]')!==null}renderRange(){const{disabled:t,el:e,hasLabel:n,rangeId:r,pin:a,pressedKnob:l,labelPlacement:d,label:c}=this,p=V("ion-item",e),h=n&&(d==="start"||d==="fixed")||this.hasStartSlotContent,g=p&&!h,u=n&&d==="end"||this.hasEndSlotContent,w=p&&!u,k=E(this);return R(!0,e,this.name,JSON.stringify(this.getValue()),t),i(F,{onFocusin:this.onFocus,onFocusout:this.onBlur,id:r,class:L(this.color,{[k]:!0,"in-item":p,"range-disabled":t,"range-pressed":l!==void 0,"range-has-pin":a,[`range-label-placement-${d}`]:!0,"range-item-start-adjustment":g,"range-item-end-adjustment":w})},i("label",{class:"range-wrapper",id:"range-label"},i("div",{class:{"label-text-wrapper":!0,"label-text-wrapper-hidden":!n},part:"label"},c!==void 0?i("div",{class:"label-text"},c):i("slot",{name:"label"})),i("div",{class:"native-wrapper"},i("slot",{name:"start"}),this.renderRangeSlider(),i("slot",{name:"end"}))))}get hasLabel(){return this.label!==void 0||this.el.querySelector('[slot="label"]')!==null}renderRangeSlider(){var t;const{min:e,max:n,step:r,el:a,handleKeyboard:l,pressedKnob:d,disabled:c,pin:p,ratioLower:h,ratioUpper:g,inheritedAttributes:u,rangeId:w,pinFormatter:k}=this;let{labelText:x}=J(a,w);x==null&&(x=u["aria-label"]);let s=`${h*100}%`,b=`${100-g*100}%`;const y=I(this.el),S=y?"right":"left",P=y?"left":"right",$=o=>({[S]:o[S]});this.dualKnobs===!1&&(this.valA<((t=this.activeBarStart)!==null&&t!==void 0?t:this.min)?(s=`${g*100}%`,b=`${100-h*100}%`):(s=`${h*100}%`,b=`${100-g*100}%`));const D={[S]:s,[P]:b},B=[];if(this.snaps&&this.ticks)for(let o=e;o<=n;o+=r){const z=v(o,e,n),T=Math.min(h,g),_=Math.max(h,g),M={ratio:z,active:z>=T&&z<=_};M[S]=`${z*100}%`,B.push(M)}let A;return!this.legacyFormController.hasLegacyControl()&&this.hasLabel&&(A="range-label"),i("div",{class:"range-slider",ref:o=>this.rangeSlider=o,onPointerUp:o=>{this.pressedKnob===void 0&&(this.onStart(),this.onEnd(o))}},B.map(o=>i("div",{style:$(o),role:"presentation",class:{"range-tick":!0,"range-tick-active":o.active},part:o.active?"tick-active":"tick"})),i("div",{class:"range-bar-container"},i("div",{class:"range-bar",role:"presentation",part:"bar"}),i("div",{class:{"range-bar":!0,"range-bar-active":!0,"has-ticks":B.length>0},role:"presentation",style:D,part:"bar-active"})),j(y,{knob:"A",pressed:d==="A",value:this.valA,ratio:this.ratioA,pin:p,pinFormatter:k,disabled:c,handleKeyboard:l,min:e,max:n,labelText:x,labelledBy:A}),this.dualKnobs&&j(y,{knob:"B",pressed:d==="B",value:this.valB,ratio:this.ratioB,pin:p,pinFormatter:k,disabled:c,handleKeyboard:l,min:e,max:n,labelText:x,labelledBy:A}))}render(){const{legacyFormController:t}=this;return t.hasLegacyControl()?this.renderLegacyRange():this.renderRange()}get el(){return Y(this)}static get watchers(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],activeBarStart:["activeBarStartChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}},j=(t,{knob:e,value:n,ratio:r,min:a,max:l,disabled:d,pressed:c,pin:p,handleKeyboard:h,labelText:g,labelledBy:u,pinFormatter:w})=>{const k=t?"right":"left";return i("div",{onKeyDown:s=>{const b=s.key;b==="ArrowLeft"||b==="ArrowDown"?(h(e,!1),s.preventDefault(),s.stopPropagation()):(b==="ArrowRight"||b==="ArrowUp")&&(h(e,!0),s.preventDefault(),s.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":e==="A","range-knob-b":e==="B","range-knob-pressed":c,"range-knob-min":n===a,"range-knob-max":n===l,"ion-activatable":!0,"ion-focusable":!0},style:(()=>{const s={};return s[k]=`${r*100}%`,s})(),role:"slider",tabindex:d?-1:0,"aria-label":u===void 0?g:null,"aria-labelledby":u!==void 0?u:null,"aria-valuemin":a,"aria-valuemax":l,"aria-disabled":d?"true":null,"aria-valuenow":n},p&&i("div",{class:"range-pin",role:"presentation",part:"pin"},w(n)),i("div",{class:"range-knob",role:"presentation",part:"knob"}))},K=(t,e,n,r)=>{let a=(n-e)*t;r>0&&(a=Math.round(a/r)*r+e);const l=f(e,a,n);return Z(l,e,n,r)},v=(t,e,n)=>f(0,(t-e)/(n-e),1);let ie=0;ae.style={ios:te,md:re};export{ae as ion_range};

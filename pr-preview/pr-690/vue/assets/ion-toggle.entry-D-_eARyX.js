const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-0fc64123-CtVBTaUX.js","./gesture-controller-a29626f0-CKNmfd8r.js"])))=>i.map(i=>d[i]);
import{_ as x}from"./iframe-DqHqq9MF.js";import{r as k,c as n,a as v,h as r,b as s,H as y,g as j}from"./index-DUf7lyEo.js";import{i as C,d as O}from"./helpers-b14eeb70-DAoIUSfU.js";import{d as L}from"./haptic-1b03e74b-CWmRyONE.js";import{i as c}from"./dir-861e8ef7-ebPfiN6E.js";import{c as I,h as S}from"./theme-516b22d6-DD5XIICl.js";import{t as E,u as d,v as T}from"./index-b98f7519--NR8iC35.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-D6ApT1Ci.js";import"./capacitor-74355484-sCloY8M9.js";import"./index-d9a82e80-B2PaWDFh.js";const D=":host{box-sizing:content-box !important;display:inline-block;position:relative;max-width:100%;outline:none;cursor:pointer;user-select:none;z-index:2}:host(.in-item){flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){flex:initial;width:auto}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.toggle-wrapper{display:flex;position:relative;flex-grow:1;align-items:center;justify-content:space-between;height:inherit;transition:background-color 15ms linear;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.toggle-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.toggle-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:flex;align-items:center}:host(.toggle-justify-space-between) .toggle-wrapper{justify-content:space-between}:host(.toggle-justify-start) .toggle-wrapper{justify-content:start}:host(.toggle-justify-end) .toggle-wrapper{justify-content:end}:host(.toggle-alignment-start) .toggle-wrapper{align-items:start}:host(.toggle-alignment-center) .toggle-wrapper{align-items:center}:host(.toggle-justify-space-between),:host(.toggle-justify-start),:host(.toggle-justify-end),:host(.toggle-alignment-start),:host(.toggle-alignment-center){display:block}:host(.toggle-label-placement-start) .toggle-wrapper{flex-direction:row}:host(.toggle-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-end) .toggle-wrapper{flex-direction:row-reverse}:host(.toggle-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.toggle-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-fixed) .label-text-wrapper{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.toggle-label-placement-stacked) .toggle-wrapper{flex-direction:column}:host(.toggle-label-placement-stacked) .label-text-wrapper{transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.toggle-label-placement-stacked.toggle-alignment-start) .label-text-wrapper{transform-origin:left top}:host-context([dir=rtl]):host(.toggle-label-placement-stacked.toggle-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).toggle-label-placement-stacked.toggle-alignment-start .label-text-wrapper{transform-origin:right top}@supports selector(:dir(rtl)){:host(.toggle-label-placement-stacked.toggle-alignment-start:dir(rtl)) .label-text-wrapper{transform-origin:right top}}:host(.toggle-label-placement-stacked.toggle-alignment-center) .label-text-wrapper{transform-origin:center top}:host-context([dir=rtl]):host(.toggle-label-placement-stacked.toggle-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).toggle-label-placement-stacked.toggle-alignment-center .label-text-wrapper{transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.toggle-label-placement-stacked.toggle-alignment-center:dir(rtl)) .label-text-wrapper{transform-origin:calc(100% - center) top}}.toggle-icon-wrapper{display:flex;position:relative;align-items:center;width:100%;height:100%;transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--track-background);overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--track-background-checked)}.toggle-inner{border-radius:var(--handle-border-radius);position:absolute;left:var(--handle-spacing);width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);transition:var(--handle-transition);background:var(--handle-background);box-shadow:var(--handle-box-shadow);contain:strict}:host(.toggle-ltr) .toggle-inner{left:var(--handle-spacing)}:host(.toggle-rtl) .toggle-inner{right:var(--handle-spacing)}:host(.toggle-ltr.toggle-checked) .toggle-icon-wrapper{transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-icon-wrapper{transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{background:var(--handle-background-checked)}:host(.toggle-ltr.toggle-checked) .toggle-inner{transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-inner{transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--track-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.088);--track-background-checked:var(--ion-color-primary, #0054e9);--border-radius:15.5px;--handle-background:#ffffff;--handle-background-checked:#ffffff;--handle-border-radius:25.5px;--handle-box-shadow:0 3px 4px rgba(0, 0, 0, 0.06), 0 3px 8px rgba(0, 0, 0, 0.06);--handle-height:calc(31px - (2px * 2));--handle-max-height:calc(100% - var(--handle-spacing) * 2);--handle-width:calc(31px - (2px * 2));--handle-spacing:2px;--handle-transition:transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms}.native-wrapper .toggle-icon{width:51px;height:31px;overflow:hidden}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}:host(.toggle-activated) .toggle-switch-icon{opacity:0}.toggle-icon{transform:translate3d(0, 0, 0);transition:background-color 300ms}.toggle-inner{will-change:transform}.toggle-switch-icon{position:absolute;top:50%;width:11px;height:11px;transform:translateY(-50%);transition:opacity 300ms, color 300ms}.toggle-switch-icon{position:absolute;color:var(--ion-color-dark, #222428)}:host(.toggle-ltr) .toggle-switch-icon{right:6px}:host(.toggle-rtl) .toggle-switch-icon{right:initial;left:6px;}:host(.toggle-checked) .toggle-switch-icon.toggle-switch-icon-checked{color:var(--ion-color-contrast, #fff)}:host(.toggle-checked) .toggle-switch-icon:not(.toggle-switch-icon-checked){opacity:0}.toggle-switch-icon-checked{position:absolute;width:15px;height:15px;transform:translateY(-50%) rotate(90deg)}:host(.toggle-ltr) .toggle-switch-icon-checked{right:initial;left:4px;}:host(.toggle-rtl) .toggle-switch-icon-checked{right:4px}:host(.toggle-activated) .toggle-icon::before,:host(.toggle-checked) .toggle-icon::before{transform:scale3d(0, 0, 0)}:host(.toggle-activated.toggle-checked) .toggle-inner::before{transform:scale3d(0, 0, 0)}:host(.toggle-activated) .toggle-inner{width:calc(var(--handle-width) + 6px)}:host(.toggle-ltr.toggle-activated.toggle-checked) .toggle-icon-wrapper{transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0)}:host(.toggle-rtl.toggle-activated.toggle-checked) .toggle-icon-wrapper{transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0)}:host(.toggle-disabled){opacity:0.3}",_=D,z=":host{box-sizing:content-box !important;display:inline-block;position:relative;max-width:100%;outline:none;cursor:pointer;user-select:none;z-index:2}:host(.in-item){flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){flex:initial;width:auto}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.toggle-wrapper{display:flex;position:relative;flex-grow:1;align-items:center;justify-content:space-between;height:inherit;transition:background-color 15ms linear;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.toggle-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.toggle-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:flex;align-items:center}:host(.toggle-justify-space-between) .toggle-wrapper{justify-content:space-between}:host(.toggle-justify-start) .toggle-wrapper{justify-content:start}:host(.toggle-justify-end) .toggle-wrapper{justify-content:end}:host(.toggle-alignment-start) .toggle-wrapper{align-items:start}:host(.toggle-alignment-center) .toggle-wrapper{align-items:center}:host(.toggle-justify-space-between),:host(.toggle-justify-start),:host(.toggle-justify-end),:host(.toggle-alignment-start),:host(.toggle-alignment-center){display:block}:host(.toggle-label-placement-start) .toggle-wrapper{flex-direction:row}:host(.toggle-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-end) .toggle-wrapper{flex-direction:row-reverse}:host(.toggle-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.toggle-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-fixed) .label-text-wrapper{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.toggle-label-placement-stacked) .toggle-wrapper{flex-direction:column}:host(.toggle-label-placement-stacked) .label-text-wrapper{transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.toggle-label-placement-stacked.toggle-alignment-start) .label-text-wrapper{transform-origin:left top}:host-context([dir=rtl]):host(.toggle-label-placement-stacked.toggle-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).toggle-label-placement-stacked.toggle-alignment-start .label-text-wrapper{transform-origin:right top}@supports selector(:dir(rtl)){:host(.toggle-label-placement-stacked.toggle-alignment-start:dir(rtl)) .label-text-wrapper{transform-origin:right top}}:host(.toggle-label-placement-stacked.toggle-alignment-center) .label-text-wrapper{transform-origin:center top}:host-context([dir=rtl]):host(.toggle-label-placement-stacked.toggle-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).toggle-label-placement-stacked.toggle-alignment-center .label-text-wrapper{transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.toggle-label-placement-stacked.toggle-alignment-center:dir(rtl)) .label-text-wrapper{transform-origin:calc(100% - center) top}}.toggle-icon-wrapper{display:flex;position:relative;align-items:center;width:100%;height:100%;transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--track-background);overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--track-background-checked)}.toggle-inner{border-radius:var(--handle-border-radius);position:absolute;left:var(--handle-spacing);width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);transition:var(--handle-transition);background:var(--handle-background);box-shadow:var(--handle-box-shadow);contain:strict}:host(.toggle-ltr) .toggle-inner{left:var(--handle-spacing)}:host(.toggle-rtl) .toggle-inner{right:var(--handle-spacing)}:host(.toggle-ltr.toggle-checked) .toggle-icon-wrapper{transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-icon-wrapper{transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{background:var(--handle-background-checked)}:host(.toggle-ltr.toggle-checked) .toggle-inner{transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-inner{transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--track-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.39);--track-background-checked:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.5);--border-radius:14px;--handle-background:#ffffff;--handle-background-checked:var(--ion-color-primary, #0054e9);--handle-border-radius:50%;--handle-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);--handle-width:20px;--handle-height:20px;--handle-max-height:calc(100% + 6px);--handle-spacing:0;--handle-transition:transform 160ms cubic-bezier(0.4, 0, 0.2, 1), background-color 160ms cubic-bezier(0.4, 0, 0.2, 1)}.native-wrapper .toggle-icon{width:36px;height:14px}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb), 0.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}:host(.toggle-checked) .toggle-inner{color:var(--ion-color-contrast, #fff)}.toggle-icon{transition:background-color 160ms}.toggle-inner{will-change:background-color, transform;display:flex;align-items:center;justify-content:center;color:#000}.toggle-inner .toggle-switch-icon{-webkit-padding-start:1px;padding-inline-start:1px;-webkit-padding-end:1px;padding-inline-end:1px;padding-top:1px;padding-bottom:1px;width:100%;height:100%}:host(.toggle-disabled){opacity:0.38}",F=z,A=class{constructor(t){k(this,t),this.ionChange=n(this,"ionChange",7),this.ionFocus=n(this,"ionFocus",7),this.ionBlur=n(this,"ionBlur",7),this.inputId=`ion-tg-${M++}`,this.lastDrag=0,this.inheritedAttributes={},this.didLoad=!1,this.setupGesture=async()=>{const{toggleTrack:o}=this;o&&(this.gesture=(await x(async()=>{const{createGesture:e}=await import("./index-0fc64123-CtVBTaUX.js");return{createGesture:e}},__vite__mapDeps([0,1]),import.meta.url)).createGesture({el:o,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:()=>this.onStart(),onMove:e=>this.onMove(e),onEnd:e=>this.onEnd(e)}),this.disabledChanged())},this.onClick=o=>{this.disabled||(o.preventDefault(),this.lastDrag+300<Date.now()&&this.toggleChecked())},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.getSwitchLabelIcon=(o,e)=>o==="md"?e?E:d:e?d:T,this.activated=!1,this.color=void 0,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.enableOnOffLabels=v.get("toggleOnOffLabels"),this.labelPlacement="start",this.justify=void 0,this.alignment=void 0}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}toggleChecked(){const{checked:t,value:o}=this,e=!t;this.checked=e,this.ionChange.emit({checked:e,value:o})}async connectedCallback(){this.didLoad&&this.setupGesture()}componentDidLoad(){this.setupGesture(),this.didLoad=!0}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}componentWillLoad(){this.inheritedAttributes=Object.assign({},C(this.el))}onStart(){this.activated=!0,this.setFocus()}onMove(t){B(c(this.el),this.checked,t.deltaX,-10)&&(this.toggleChecked(),L())}onEnd(t){this.activated=!1,this.lastDrag=Date.now(),t.event.preventDefault(),t.event.stopImmediatePropagation()}getValue(){return this.value||""}setFocus(){this.focusEl&&this.focusEl.focus()}renderOnOffSwitchLabels(t,o){const e=this.getSwitchLabelIcon(t,o);return r("ion-icon",{class:{"toggle-switch-icon":!0,"toggle-switch-icon-checked":o},icon:e,"aria-hidden":"true"})}renderToggleControl(){const t=s(this),{enableOnOffLabels:o,checked:e}=this;return r("div",{class:"toggle-icon",part:"track",ref:a=>this.toggleTrack=a},o&&t==="ios"&&[this.renderOnOffSwitchLabels(t,!0),this.renderOnOffSwitchLabels(t,!1)],r("div",{class:"toggle-icon-wrapper"},r("div",{class:"toggle-inner",part:"handle"},o&&t==="md"&&this.renderOnOffSwitchLabels(t,e))))}get hasLabel(){return this.el.textContent!==""}render(){const{activated:t,color:o,checked:e,disabled:a,el:i,justify:l,labelPlacement:h,inputId:p,name:b,alignment:g}=this,m=s(this),f=this.getValue(),u=c(i)?"rtl":"ltr";return O(!0,i,b,e?f:"",a),r(y,{key:"f52195ec3bc14c024647cb41319c32a4cd330e19",onClick:this.onClick,class:I(o,{[m]:!0,"in-item":S("ion-item",i),"toggle-activated":t,"toggle-checked":e,"toggle-disabled":a,[`toggle-justify-${l}`]:l!==void 0,[`toggle-alignment-${g}`]:g!==void 0,[`toggle-label-placement-${h}`]:!0,[`toggle-${u}`]:!0})},r("label",{key:"f8b3a215ad85b2cee611ad63449b584e1640f27f",class:"toggle-wrapper"},r("input",Object.assign({key:"f387b1ea840737a9737917e516834c887be99c09",type:"checkbox",role:"switch","aria-checked":`${e}`,checked:e,disabled:a,id:p,onFocus:()=>this.onFocus(),onBlur:()=>this.onBlur(),ref:w=>this.focusEl=w},this.inheritedAttributes)),r("div",{key:"936af880db59fe377cd2de9101eb28a1c4fb8914",class:{"label-text-wrapper":!0,"label-text-wrapper-hidden":!this.hasLabel},part:"label"},r("slot",{key:"80a6672e2e792c15011a9496dcd75363cdba31c6"})),r("div",{key:"2b2b318b38ab27b194c0dab4cecd77d9d780f2ca",class:"native-wrapper"},this.renderToggleControl())))}get el(){return j(this)}static get watchers(){return{disabled:["disabledChanged"]}}},B=(t,o,e,a)=>o?!t&&a>e||t&&-a<e:!t&&-a<e||t&&a>e;let M=0;A.style={ios:_,md:F};export{A as ion_toggle};

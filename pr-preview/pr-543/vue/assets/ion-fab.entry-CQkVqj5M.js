import{r as s,b as r,h as e,H as l,g as n}from"./index-D7SNAhmR.js";import"./vue.esm-bundler-Dk4JuX4g.js";import"./iframe-CrqqsAdq.js";import"../sb-preview/runtime.js";const b=":host{position:absolute;width:fit-content;height:fit-content;z-index:999}:host(.fab-horizontal-center){left:0px;right:0px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}:host(.fab-horizontal-start){left:calc(10px + var(--ion-safe-area-left, 0px));}:host-context([dir=rtl]):host(.fab-horizontal-start),:host-context([dir=rtl]).fab-horizontal-start{right:calc(10px + var(--ion-safe-area-right, 0px));left:unset}@supports selector(:dir(rtl)){:host(.fab-horizontal-start:dir(rtl)){right:calc(10px + var(--ion-safe-area-right, 0px));left:unset}}:host(.fab-horizontal-end){right:calc(10px + var(--ion-safe-area-right, 0px));}:host-context([dir=rtl]):host(.fab-horizontal-end),:host-context([dir=rtl]).fab-horizontal-end{left:calc(10px + var(--ion-safe-area-left, 0px));right:unset}@supports selector(:dir(rtl)){:host(.fab-horizontal-end:dir(rtl)){left:calc(10px + var(--ion-safe-area-left, 0px));right:unset}}:host(.fab-vertical-top){top:10px}:host(.fab-vertical-top.fab-edge){top:0}:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-button){margin-top:-50%}:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-button.fab-button-small){margin-top:calc((-100% + 16px) / 2)}:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-list.fab-list-side-start),:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-list.fab-list-side-end){margin-top:-50%}:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-list.fab-list-side-top),:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-list.fab-list-side-bottom){margin-top:calc(50% + 10px)}:host(.fab-vertical-bottom){bottom:10px}:host(.fab-vertical-bottom.fab-edge){bottom:0}:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-button){margin-bottom:-50%}:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-button.fab-button-small){margin-bottom:calc((-100% + 16px) / 2)}:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-list.fab-list-side-start),:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-list.fab-list-side-end){margin-bottom:-50%}:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-list.fab-list-side-top),:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-list.fab-list-side-bottom){margin-bottom:calc(50% + 10px)}:host(.fab-vertical-center){top:0px;bottom:0px;margin-top:auto;margin-bottom:auto}",f=b,c=class{constructor(t){s(this,t),this.horizontal=void 0,this.vertical=void 0,this.edge=!1,this.activated=!1}activatedChanged(){const t=this.activated,a=this.getFab();a&&(a.activated=t),Array.from(this.el.querySelectorAll("ion-fab-list")).forEach(o=>{o.activated=t})}componentDidLoad(){this.activated&&this.activatedChanged()}async close(){this.activated=!1}getFab(){return this.el.querySelector("ion-fab-button")}async toggle(){!!this.el.querySelector("ion-fab-list")&&(this.activated=!this.activated)}render(){const{horizontal:t,vertical:a,edge:o}=this,i=r(this);return e(l,{key:"71df1068c3a2739a69d3571c2fe9bdf401a252cb",class:{[i]:!0,[`fab-horizontal-${t}`]:t!==void 0,[`fab-vertical-${a}`]:a!==void 0,"fab-edge":o}},e("slot",{key:"c3afd4a009d355d664f8c04057acf86196bda844"}))}get el(){return n(this)}static get watchers(){return{activated:["activatedChanged"]}}};c.style=f;export{c as ion_fab};

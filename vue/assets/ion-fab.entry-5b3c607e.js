import{r as s,b as r,h as o,H as l,g as n}from"./index-c35f0206.js";import"./vue.esm-bundler-2231c3fa.js";import"./iframe-19df559e.js";import"../sb-preview/runtime.js";const b=":host{position:absolute;width:fit-content;height:fit-content;z-index:999}:host(.fab-horizontal-center){left:0px;right:0px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}:host(.fab-horizontal-start){left:calc(10px + var(--ion-safe-area-left, 0px));}:host-context([dir=rtl]):host(.fab-horizontal-start),:host-context([dir=rtl]).fab-horizontal-start{right:calc(10px + var(--ion-safe-area-right, 0px));left:unset}@supports selector(:dir(rtl)){:host(.fab-horizontal-start:dir(rtl)){right:calc(10px + var(--ion-safe-area-right, 0px));left:unset}}:host(.fab-horizontal-end){right:calc(10px + var(--ion-safe-area-right, 0px));}:host-context([dir=rtl]):host(.fab-horizontal-end),:host-context([dir=rtl]).fab-horizontal-end{left:calc(10px + var(--ion-safe-area-left, 0px));right:unset}@supports selector(:dir(rtl)){:host(.fab-horizontal-end:dir(rtl)){left:calc(10px + var(--ion-safe-area-left, 0px));right:unset}}:host(.fab-vertical-top){top:10px}:host(.fab-vertical-top.fab-edge){top:0}:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-button){margin-top:-50%}:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-button.fab-button-small){margin-top:calc((-100% + 16px) / 2)}:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-list.fab-list-side-start),:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-list.fab-list-side-end){margin-top:-50%}:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-list.fab-list-side-top),:host(.fab-vertical-top.fab-edge) ::slotted(ion-fab-list.fab-list-side-bottom){margin-top:calc(50% + 10px)}:host(.fab-vertical-bottom){bottom:10px}:host(.fab-vertical-bottom.fab-edge){bottom:0}:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-button){margin-bottom:-50%}:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-button.fab-button-small){margin-bottom:calc((-100% + 16px) / 2)}:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-list.fab-list-side-start),:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-list.fab-list-side-end){margin-bottom:-50%}:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-list.fab-list-side-top),:host(.fab-vertical-bottom.fab-edge) ::slotted(ion-fab-list.fab-list-side-bottom){margin-bottom:calc(50% + 10px)}:host(.fab-vertical-center){top:0px;bottom:0px;margin-top:auto;margin-bottom:auto}",f=b,d=class{constructor(t){s(this,t),this.horizontal=void 0,this.vertical=void 0,this.edge=!1,this.activated=!1}activatedChanged(){const t=this.activated,a=this.getFab();a&&(a.activated=t),Array.from(this.el.querySelectorAll("ion-fab-list")).forEach(e=>{e.activated=t})}componentDidLoad(){this.activated&&this.activatedChanged()}async close(){this.activated=!1}getFab(){return this.el.querySelector("ion-fab-button")}async toggle(){!!this.el.querySelector("ion-fab-list")&&(this.activated=!this.activated)}render(){const{horizontal:t,vertical:a,edge:e}=this,i=r(this);return o(l,{key:"2960656845d8ab1d643e56870cfeefbceb44fb20",class:{[i]:!0,[`fab-horizontal-${t}`]:t!==void 0,[`fab-vertical-${a}`]:a!==void 0,"fab-edge":e}},o("slot",{key:"eed164a50594167959905a90d678d417bc99098d"}))}get el(){return n(this)}static get watchers(){return{activated:["activatedChanged"]}}};d.style=f;export{d as ion_fab};

import{r as o,b as r,h as i,H as l,g as b}from"./index-MG8Y3sjp.js";import"./vue.esm-bundler-cJVerQom.js";import"./iframe-6NwMAm9g.js";const c=":host{margin-left:0;margin-right:0;margin-top:calc(100% + 10px);margin-bottom:calc(100% + 10px);display:none;position:absolute;top:0;flex-direction:column;align-items:center;min-width:56px;min-height:56px}:host(.fab-list-active){display:flex}::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:8px;margin-bottom:8px;width:40px;height:40px;transform:scale(0);opacity:0;visibility:hidden}:host(.fab-list-side-top) ::slotted(.fab-button-in-list),:host(.fab-list-side-bottom) ::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px}:host(.fab-list-side-start) ::slotted(.fab-button-in-list),:host(.fab-list-side-end) ::slotted(.fab-button-in-list){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted(.fab-button-in-list.fab-button-show){transform:scale(1);opacity:1;visibility:visible}:host(.fab-list-side-top){top:auto;bottom:0;flex-direction:column-reverse}:host(.fab-list-side-start){-webkit-margin-start:calc(100% + 10px);margin-inline-start:calc(100% + 10px);-webkit-margin-end:calc(100% + 10px);margin-inline-end:calc(100% + 10px);margin-top:0;margin-bottom:0;flex-direction:row-reverse}:host(.fab-list-side-start){inset-inline-end:0}:host(.fab-list-side-end){-webkit-margin-start:calc(100% + 10px);margin-inline-start:calc(100% + 10px);-webkit-margin-end:calc(100% + 10px);margin-inline-end:calc(100% + 10px);margin-top:0;margin-bottom:0;flex-direction:row}:host(.fab-list-side-end){inset-inline-start:0}",m=c,d=class{constructor(t){o(this,t),this.activated=!1,this.side="bottom"}activatedChanged(t){const a=Array.from(this.el.querySelectorAll("ion-fab-button")),e=t?30:0;a.forEach((s,n)=>{setTimeout(()=>s.show=t,n*e)})}render(){const t=r(this);return i(l,{key:"64b33366447f66c7f979cfac56307fbb1a6fac1c",class:{[t]:!0,"fab-list-active":this.activated,[`fab-list-side-${this.side}`]:!0}},i("slot",{key:"d9f474f7f20fd7e813db358fddc720534ca05bb6"}))}get el(){return b(this)}static get watchers(){return{activated:["activatedChanged"]}}};d.style=m;export{d as ion_fab_list};

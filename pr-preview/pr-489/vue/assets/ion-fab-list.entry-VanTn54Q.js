import{r,b as o,h as i,H as l,g as d}from"./index-DPJJ6TmL.js";import"./vue.esm-bundler-DLYZ4EJx.js";import"./iframe-DXUVIoZQ.js";import"../sb-preview/runtime.js";const b=":host{margin-left:0;margin-right:0;margin-top:calc(100% + 10px);margin-bottom:calc(100% + 10px);display:none;position:absolute;top:0;flex-direction:column;align-items:center;min-width:56px;min-height:56px}:host(.fab-list-active){display:flex}::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:8px;margin-bottom:8px;width:40px;height:40px;transform:scale(0);opacity:0;visibility:hidden}:host(.fab-list-side-top) ::slotted(.fab-button-in-list),:host(.fab-list-side-bottom) ::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px}:host(.fab-list-side-start) ::slotted(.fab-button-in-list),:host(.fab-list-side-end) ::slotted(.fab-button-in-list){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted(.fab-button-in-list.fab-button-show){transform:scale(1);opacity:1;visibility:visible}:host(.fab-list-side-top){top:auto;bottom:0;flex-direction:column-reverse}:host(.fab-list-side-start){-webkit-margin-start:calc(100% + 10px);margin-inline-start:calc(100% + 10px);-webkit-margin-end:calc(100% + 10px);margin-inline-end:calc(100% + 10px);margin-top:0;margin-bottom:0;flex-direction:row-reverse}@supports (inset-inline-start: 0){:host(.fab-list-side-start){inset-inline-end:0}}@supports not (inset-inline-start: 0){:host(.fab-list-side-start){right:0}:host-context([dir=rtl]):host(.fab-list-side-start),:host-context([dir=rtl]).fab-list-side-start{left:unset;right:unset;left:0}@supports selector(:dir(rtl)){:host(.fab-list-side-start:dir(rtl)){left:unset;right:unset;left:0}}}:host(.fab-list-side-end){-webkit-margin-start:calc(100% + 10px);margin-inline-start:calc(100% + 10px);-webkit-margin-end:calc(100% + 10px);margin-inline-end:calc(100% + 10px);margin-top:0;margin-bottom:0;flex-direction:row}@supports (inset-inline-start: 0){:host(.fab-list-side-end){inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.fab-list-side-end){left:0}:host-context([dir=rtl]):host(.fab-list-side-end),:host-context([dir=rtl]).fab-list-side-end{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.fab-list-side-end:dir(rtl)){left:unset;right:unset;right:0}}}",c=b,m=class{constructor(t){r(this,t),this.activated=!1,this.side="bottom"}activatedChanged(t){const s=Array.from(this.el.querySelectorAll("ion-fab-button")),e=t?30:0;s.forEach((n,a)=>{setTimeout(()=>n.show=t,a*e)})}render(){const t=o(this);return i(l,{key:"3de1b0db4eb0230d4d2954e4265ddeb3c930b4dc",class:{[t]:!0,"fab-list-active":this.activated,[`fab-list-side-${this.side}`]:!0}},i("slot",{key:"970aac2239ad9ea2b6b6c3c3ea45a18c45b37df2"}))}get el(){return d(this)}static get watchers(){return{activated:["activatedChanged"]}}};m.style=c;export{m as ion_fab_list};

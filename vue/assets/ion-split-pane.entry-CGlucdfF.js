import{r as h,c as b,b as m,h as a,H as c,g as v}from"./index-BnX8vYo1.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-RBAn9z6J.js";import"../sb-preview/runtime.js";const w=":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:row;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;box-shadow:none;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){flex:1;overflow:hidden}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:flex;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){order:1}:host{--border:0.55px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}",f=w,u=":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:row;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;box-shadow:none;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){flex:1;overflow:hidden}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:flex;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){order:1}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}",x=u,r="split-pane-main",o="split-pane-side",p={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""},y=class{constructor(e){h(this,e),this.ionSplitPaneVisible=b(this,"ionSplitPaneVisible",7),this.visible=!1,this.contentId=void 0,this.disabled=!1,this.when=p.lg}visibleChanged(e){const t={visible:e,isPane:this.isPane.bind(this)};this.ionSplitPaneVisible.emit(t)}async connectedCallback(){typeof customElements<"u"&&customElements!=null&&await customElements.whenDefined("ion-split-pane"),this.styleChildren(),this.updateState()}disconnectedCallback(){this.rmL&&(this.rmL(),this.rmL=void 0)}updateState(){if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled){this.visible=!1;return}const e=this.when;if(typeof e=="boolean"){this.visible=e;return}const t=p[e]||e;if(t.length===0){this.visible=!1;return}const s=n=>{this.visible=n.matches},i=window.matchMedia(t);i.addListener(s),this.rmL=()=>i.removeListener(s),this.visible=i.matches}isPane(e){return this.visible?e.parentElement===this.el&&e.classList.contains(o):!1}styleChildren(){const e=this.contentId,t=this.el.children,s=this.el.childElementCount;let i=!1;for(let n=0;n<s;n++){const d=t[n],l=e!==void 0&&d.id===e;if(l){if(i){console.warn("split pane cannot have more than one main node");return}i=!0}g(d,l)}i||console.warn("split pane does not have a specified main node")}render(){const e=m(this);return a(c,{key:"57ee198506248916e74d8d082ad547a471e6cc73",class:{[e]:!0,[`split-pane-${e}`]:!0,"split-pane-visible":this.visible}},a("slot",{key:"2cd89fa50cfe8a7a6bdda981bb89d5a24a8eec88"}))}get el(){return v(this)}static get watchers(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}}},g=(e,t)=>{let s,i;t?(s=r,i=o):(s=o,i=r);const n=e.classList;n.add(s),n.remove(i)};y.style={ios:f,md:x};export{y as ion_split_pane};
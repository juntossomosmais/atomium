import{r as p,c as h,b as m,h as a,H as b,g as f}from"./index-CYPV5ngz.js";import"./vue.esm-bundler-D6ApT1Ci.js";import"./iframe-BCmO2hXq.js";import"../sb-preview/runtime.js";const u=":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:row;flex-wrap:nowrap;contain:strict}:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;flex:1;box-shadow:none;overflow:hidden;z-index:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host{--border:0.55px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--side-min-width:270px;--side-max-width:28%}",v=u,w=":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:row;flex-wrap:nowrap;contain:strict}:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;flex:1;box-shadow:none;overflow:hidden;z-index:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--side-min-width:270px;--side-max-width:28%}",x=w,d="split-pane-main",r="split-pane-side",c={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""},g=class{constructor(e){p(this,e),this.ionSplitPaneVisible=h(this,"ionSplitPaneVisible",7),this.visible=!1,this.contentId=void 0,this.disabled=!1,this.when=c.lg}visibleChanged(e){this.ionSplitPaneVisible.emit({visible:e})}async isVisible(){return Promise.resolve(this.visible)}async connectedCallback(){typeof customElements<"u"&&customElements!=null&&await customElements.whenDefined("ion-split-pane"),this.styleMainElement(),this.updateState()}disconnectedCallback(){this.rmL&&(this.rmL(),this.rmL=void 0)}updateState(){if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled){this.visible=!1;return}const e=this.when;if(typeof e=="boolean"){this.visible=e;return}const n=c[e]||e;if(n.length===0){this.visible=!1;return}const i=s=>{this.visible=s.matches},t=window.matchMedia(n);t.addListener(i),this.rmL=()=>t.removeListener(i),this.visible=t.matches}styleMainElement(){const e=this.contentId,n=this.el.children,i=this.el.childElementCount;let t=!1;for(let s=0;s<i;s++){const o=n[s],l=e!==void 0&&o.id===e;if(l)if(t){console.warn("split pane cannot have more than one main node");return}else y(o,l),t=!0}t||console.warn("split pane does not have a specified main node")}render(){const e=m(this);return a(b,{key:"1ca0b0299d03605bb358112ca56cbafbe58f00f5",class:{[e]:!0,[`split-pane-${e}`]:!0,"split-pane-visible":this.visible}},a("slot",{key:"abe231361727ae7fc63edd592a4490caac1909fb"}))}get el(){return f(this)}static get watchers(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}}},y=(e,n)=>{let i,t;n?(i=d,t=r):(i=r,t=d);const s=e.classList;s.add(i),s.remove(t)};g.style={ios:v,md:x};export{g as ion_split_pane};

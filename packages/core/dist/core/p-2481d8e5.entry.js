import{r as o,d as t,h as r,H as s}from"./p-ca167607.js";import{g as a}from"./p-7a15c957.js";import{G as i}from"./p-5e012951.js";const c=":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";const n=":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";const e=class{constructor(r){o(this,r);this.ionBackdropTap=t(this,"ionBackdropTap",7);this.blocker=i.createBlocker({disableScroll:true});this.visible=true;this.tappable=true;this.stopPropagation=true}connectedCallback(){if(this.stopPropagation){this.blocker.block()}}disconnectedCallback(){this.blocker.unblock()}onMouseDown(o){this.emitTap(o)}emitTap(o){if(this.stopPropagation){o.preventDefault();o.stopPropagation()}if(this.tappable){this.ionBackdropTap.emit()}}render(){const o=a(this);return r(s,{tabindex:"-1","aria-hidden":"true",class:{[o]:true,"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}})}};e.style={ios:c,md:n};export{e as ion_backdrop};
//# sourceMappingURL=p-2481d8e5.entry.js.map
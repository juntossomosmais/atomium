import{r as t,c as a,b as r,h as s,H as i}from"./index-909d0fe4.js";import{G as e}from"./gesture-controller-5b8003e1-2ee284b2.js";import"./vue.esm-bundler-2231c3fa.js";import"./iframe-dbcde794.js";import"../sb-preview/runtime.js";const c=":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",n=c,p=":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",d=p,b=class{constructor(o){t(this,o),this.ionBackdropTap=a(this,"ionBackdropTap",7),this.blocker=e.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}connectedCallback(){this.stopPropagation&&this.blocker.block()}disconnectedCallback(){this.blocker.unblock()}onMouseDown(o){this.emitTap(o)}emitTap(o){this.stopPropagation&&(o.preventDefault(),o.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}render(){const o=r(this);return s(i,{key:"b2adb9dabef01fa49388d67d9e8a4a370931f633",tabindex:"-1","aria-hidden":"true",class:{[o]:!0,"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}})}};b.style={ios:n,md:d};export{b as ion_backdrop};

import{r as t,c as a,b as r,h as s,H as i}from"./index-uL2uqLPb.js";import{G as c}from"./gesture-controller-5b8003e1-9dGIRWtU.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-aIRu44Ei.js";import"../sb-preview/runtime.js";const e=":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",n=e,p=":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",d=p,b=class{constructor(o){t(this,o),this.ionBackdropTap=a(this,"ionBackdropTap",7),this.blocker=c.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}connectedCallback(){this.stopPropagation&&this.blocker.block()}disconnectedCallback(){this.blocker.unblock()}onMouseDown(o){this.emitTap(o)}emitTap(o){this.stopPropagation&&(o.preventDefault(),o.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}render(){const o=r(this);return s(i,{key:"16b1328f4a058b8d3752e58dc56c44bed556c425",tabindex:"-1","aria-hidden":"true",class:{[o]:!0,"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}})}};b.style={ios:n,md:d};export{b as ion_backdrop};

import{r as g,f as s,b as l,h as r,H as p}from"./index-DVdXa43r.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-CZ2Tkf3r.js";import"../sb-preview/runtime.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const u={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)"},c=i=>{if(i===void 0||i==="")return!0;if(window.matchMedia){const n=u[i];return window.matchMedia(n).matches}return!1},m=":host{-webkit-padding-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;box-sizing:border-box;position:relative;flex-basis:0;flex-grow:1;width:100%;max-width:100%;min-height:1px}@media (min-width: 576px){:host{-webkit-padding-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px))}}@media (min-width: 768px){:host{-webkit-padding-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px))}}@media (min-width: 992px){:host{-webkit-padding-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px))}}@media (min-width: 1200px){:host{-webkit-padding-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px))}}",h=m,a=typeof window<"u"?window:void 0,e=a&&!!(a.CSS&&a.CSS.supports&&a.CSS.supports("--a: 0")),f=["","xs","sm","md","lg","xl"],x=class{constructor(i){g(this,i),this.offset=void 0,this.offsetXs=void 0,this.offsetSm=void 0,this.offsetMd=void 0,this.offsetLg=void 0,this.offsetXl=void 0,this.pull=void 0,this.pullXs=void 0,this.pullSm=void 0,this.pullMd=void 0,this.pullLg=void 0,this.pullXl=void 0,this.push=void 0,this.pushXs=void 0,this.pushSm=void 0,this.pushMd=void 0,this.pushLg=void 0,this.pushXl=void 0,this.size=void 0,this.sizeXs=void 0,this.sizeSm=void 0,this.sizeMd=void 0,this.sizeLg=void 0,this.sizeXl=void 0}onResize(){s(this)}getColumns(i){let n;for(const d of f){const o=c(d),t=this[i+d.charAt(0).toUpperCase()+d.slice(1)];o&&t!==void 0&&(n=t)}return n}calculateSize(){const i=this.getColumns("size");if(!i||i==="")return;const n=i==="auto"?"auto":e?`calc(calc(${i} / var(--ion-grid-columns, 12)) * 100%)`:i/12*100+"%";return{flex:`0 0 ${n}`,width:`${n}`,"max-width":`${n}`}}calculatePosition(i,n){const d=this.getColumns(i);if(!d)return;const o=e?`calc(calc(${d} / var(--ion-grid-columns, 12)) * 100%)`:d>0&&d<12?d/12*100+"%":"auto";return{[n]:o}}calculateOffset(i){return this.calculatePosition("offset",i?"margin-right":"margin-left")}calculatePull(i){return this.calculatePosition("pull",i?"left":"right")}calculatePush(i){return this.calculatePosition("push",i?"right":"left")}render(){const i=document.dir==="rtl",n=l(this);return r(p,{key:"56ecf3b3f2be05d5f179f2d136d4ab05a4525da9",class:{[n]:!0},style:Object.assign(Object.assign(Object.assign(Object.assign({},this.calculateOffset(i)),this.calculatePull(i)),this.calculatePush(i)),this.calculateSize())},r("slot",{key:"8f1113d39dcb709300ebbeaf81bc092c1dd8da3e"}))}};x.style=h;export{x as ion_col};

import{r as o,h as a,H as u,g as d}from"./index-B0I9qugZ.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-CbalAcN4.js";import"../sb-preview/runtime.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const f=(t,n,e,r,s)=>{const i=t.closest("ion-nav");if(i){if(n==="forward"){if(e!==void 0)return i.push(e,r,{skipIfBusy:!0,animationBuilder:s})}else if(n==="root"){if(e!==void 0)return i.setRoot(e,r,{skipIfBusy:!0,animationBuilder:s})}else if(n==="back")return i.pop({skipIfBusy:!0,animationBuilder:s})}return Promise.resolve(!1)},k=class{constructor(t){o(this,t),this.onClick=()=>f(this.el,this.routerDirection,this.component,this.componentProps,this.routerAnimation),this.component=void 0,this.componentProps=void 0,this.routerDirection="forward",this.routerAnimation=void 0}render(){return a(u,{key:"dab6e8a908395d99c87452c5e5aa4e61d9e72435",onClick:this.onClick})}get el(){return d(this)}};export{k as ion_nav_link};

import{r as o,h as f,H as a,g as u}from"./index-Du7OOsE_.js";import"./vue.esm-bundler-cJVerQom.js";import"./iframe-DyAvA6JD.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const d=(t,n,i,r,s)=>{const e=t.closest("ion-nav");if(e){if(n==="forward"){if(i!==void 0)return e.push(i,r,{skipIfBusy:!0,animationBuilder:s})}else if(n==="root"){if(i!==void 0)return e.setRoot(i,r,{skipIfBusy:!0,animationBuilder:s})}else if(n==="back")return e.pop({skipIfBusy:!0,animationBuilder:s})}return Promise.resolve(!1)},k=class{constructor(t){o(this,t),this.onClick=()=>d(this.el,this.routerDirection,this.component,this.componentProps,this.routerAnimation),this.component=void 0,this.componentProps=void 0,this.routerDirection="forward",this.routerAnimation=void 0}render(){return f(a,{key:"d2f8545b4fbd5aa25ef36eb01dffbc5d35ccfbb9",onClick:this.onClick})}get el(){return u(this)}};export{k as ion_nav_link};

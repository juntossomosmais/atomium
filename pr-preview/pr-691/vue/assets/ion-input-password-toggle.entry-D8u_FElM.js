import{r as c,b as u,h as s,H as h,g}from"./index-CVcxogov.js";import{p as r}from"./index-f5dbb989-By3l89LO.js";import{c as f}from"./theme-516b22d6-DD5XIICl.js";import{h as y,i as w}from"./index-b98f7519--NR8iC35.js";import"./vue.esm-bundler-D6ApT1Ci.js";import"./iframe-DpzhTgQt.js";import"../sb-preview/runtime.js";const b="",m=b,I="",P=I,C=class{constructor(t){c(this,t),this.togglePasswordVisibility=()=>{const{inputElRef:o}=this;o&&(o.type=o.type==="text"?"password":"text")},this.color=void 0,this.showIcon=void 0,this.hideIcon=void 0,this.type="password"}onTypeChange(t){if(t!=="text"&&t!=="password"){r(`ion-input-password-toggle only supports inputs of type "text" or "password". Input of type "${t}" is not compatible.`,this.el);return}}connectedCallback(){const{el:t}=this,o=this.inputElRef=t.closest("ion-input");if(!o){r("No ancestor ion-input found for ion-input-password-toggle. This component must be slotted inside of an ion-input.",t);return}this.type=o.type}disconnectedCallback(){this.inputElRef=null}render(){var t,o;const{color:e,type:a}=this,n=u(this),d=(t=this.showIcon)!==null&&t!==void 0?t:y,l=(o=this.hideIcon)!==null&&o!==void 0?o:w,i=a==="text";return s(h,{key:"d9811e25bfeb2aa197352bb9be852e9e420739d5",class:f(e,{[n]:!0})},s("ion-button",{key:"1eaea1442b248fb2b8d61538b27274e647a07804",mode:n,color:e,fill:"clear",shape:"round","aria-checked":i?"true":"false","aria-label":"show password",role:"switch",type:"button",onPointerDown:p=>{p.preventDefault()},onClick:this.togglePasswordVisibility},s("ion-icon",{key:"9c88de8f4631d9bde222ce2edf6950d639e04773",slot:"icon-only","aria-hidden":"true",icon:i?l:d})))}get el(){return g(this)}static get watchers(){return{type:["onTypeChange"]}}};C.style={ios:m,md:P};export{C as ion_input_password_toggle};

import{r as c,b as u,h as e,H as h,g as f}from"./index-Du7OOsE_.js";import{p as r}from"./index-1e38abc5-CfLTl0tl.js";import{c as g}from"./theme-516b22d6-DD5XIICl.js";import{e as y,f as w}from"./index-d09afffe-8y-0LVib.js";import"./vue.esm-bundler-cJVerQom.js";import"./iframe-DyAvA6JD.js";const b="",m=b,I="",P=I,C=class{constructor(t){c(this,t),this.togglePasswordVisibility=()=>{const{inputElRef:o}=this;o&&(o.type=o.type==="text"?"password":"text")},this.color=void 0,this.showIcon=void 0,this.hideIcon=void 0,this.type="password"}onTypeChange(t){if(t!=="text"&&t!=="password"){r(`ion-input-password-toggle only supports inputs of type "text" or "password". Input of type "${t}" is not compatible.`,this.el);return}}connectedCallback(){const{el:t}=this,o=this.inputElRef=t.closest("ion-input");if(!o){r("No ancestor ion-input found for ion-input-password-toggle. This component must be slotted inside of an ion-input.",t);return}this.type=o.type}disconnectedCallback(){this.inputElRef=null}render(){var t,o;const{color:s,type:a}=this,n=u(this),d=(t=this.showIcon)!==null&&t!==void 0?t:y,l=(o=this.hideIcon)!==null&&o!==void 0?o:w,i=a==="text";return e(h,{key:"d9811e25bfeb2aa197352bb9be852e9e420739d5",class:g(s,{[n]:!0})},e("ion-button",{key:"1eaea1442b248fb2b8d61538b27274e647a07804",mode:n,color:s,fill:"clear",shape:"round","aria-checked":i?"true":"false","aria-label":"show password",role:"switch",type:"button",onPointerDown:p=>{p.preventDefault()},onClick:this.togglePasswordVisibility},e("ion-icon",{key:"9c88de8f4631d9bde222ce2edf6950d639e04773",slot:"icon-only","aria-hidden":"true",icon:i?l:d})))}get el(){return f(this)}static get watchers(){return{type:["onTypeChange"]}}};C.style={ios:m,md:P};export{C as ion_input_password_toggle};

import{r as c,a as i,b as t,h as e,H as d,g as f}from"./index-Cf-FVlYa.js";import{E as o,s as a}from"./index-bad389d4-DH9g3qSj.js";import{i as l,j as h}from"./index-c79fdc7f-CJ7IlQ0E.js";import{e as g}from"./refresher.utils-d7028449-CbAU_8q7.js";import{S as u}from"./spinner-configs-0b650b20-Bd7CqIHQ.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-C544D9n9.js";import"../sb-preview/runtime.js";import"./animation-022a9434-BW6ZVdxK.js";import"./index-d9a82e80-B2PaWDFh.js";import"./helpers-079c01eb-D592YRe8.js";const L=class{constructor(n){c(this,n),this.customHTMLEnabled=i.get("innerHTMLTemplatesEnabled",o),this.pullingIcon=void 0,this.pullingText=void 0,this.refreshingSpinner=void 0,this.refreshingText=void 0}componentWillLoad(){if(this.pullingIcon===void 0){const n=g(),r=t(this),s=n?"lines":h;this.pullingIcon=i.get("refreshingIcon",r==="ios"&&n?i.get("spinner",s):"circular")}if(this.refreshingSpinner===void 0){const n=t(this);this.refreshingSpinner=i.get("refreshingSpinner",i.get("spinner",n==="ios"?"lines":"circular"))}}renderPullingText(){const{customHTMLEnabled:n,pullingText:r}=this;return n?e("div",{class:"refresher-pulling-text",innerHTML:a(r)}):e("div",{class:"refresher-pulling-text"},r)}renderRefreshingText(){const{customHTMLEnabled:n,refreshingText:r}=this;return n?e("div",{class:"refresher-refreshing-text",innerHTML:a(r)}):e("div",{class:"refresher-refreshing-text"},r)}render(){const n=this.pullingIcon,r=n!=null&&u[n]!==void 0,s=t(this);return e(d,{key:"cf3caa51c4aba8a95622f6d32cafa90b683b9d6e",class:s},e("div",{key:"5ad70801104bbea873d3525206660c52e4447903",class:"refresher-pulling"},this.pullingIcon&&r&&e("div",{key:"0f95df169fd367528bfaa5d9ccf6690a613609c4",class:"refresher-pulling-icon"},e("div",{key:"4b8f0465a19f017751b207807c32e1fe00fda433",class:"spinner-arrow-container"},e("ion-spinner",{key:"77e60179d76f0d17f8f2dc3518f97a2a924418e6",name:this.pullingIcon,paused:!0}),s==="md"&&this.pullingIcon==="circular"&&e("div",{key:"f78f63f08f071bead1bfe655bae6394f8a219d91",class:"arrow-container"},e("ion-icon",{key:"4d833d134d2b221cae2dfb0611d4029f2d664db5",icon:l,"aria-hidden":"true"})))),this.pullingIcon&&!r&&e("div",{key:"e6db19d7fa324363d2a7c3c046510f4c8461f7e6",class:"refresher-pulling-icon"},e("ion-icon",{key:"66c2ef1a53c5809f49891de515da5f55d9bf8dcc",icon:this.pullingIcon,lazy:!1,"aria-hidden":"true"})),this.pullingText!==void 0&&this.renderPullingText()),e("div",{key:"80c413e21d362a5bb0419fcd13092453b3445cee",class:"refresher-refreshing"},this.refreshingSpinner&&e("div",{key:"0d5511f9644de26332a1a9ed39b160691fab74d9",class:"refresher-refreshing-icon"},e("ion-spinner",{key:"54e4a96b081c7b453a98e00cceea7c086268a450",name:this.refreshingSpinner})),this.refreshingText!==void 0&&this.renderRefreshingText()))}get el(){return f(this)}};export{L as ion_refresher_content};

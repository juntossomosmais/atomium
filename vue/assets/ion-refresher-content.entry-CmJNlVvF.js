import{r as a,a as i,b as t,h as e,H as f,g as o}from"./index-CVcxogov.js";import{E as d,s as c}from"./index-bad389d4-DH9g3qSj.js";import{k as l,l as h}from"./index-b98f7519--NR8iC35.js";import{e as g}from"./refresher.utils-64e54fa6-C2q-i5-i.js";import{S as u}from"./spinner-configs-0b650b20-Bd7CqIHQ.js";import"./vue.esm-bundler-D6ApT1Ci.js";import"./iframe-DpzhTgQt.js";import"../sb-preview/runtime.js";import"./animation-aa17f0ca-d4Boy65i.js";import"./index-d9a82e80-B2PaWDFh.js";import"./helpers-b14eeb70-DAoIUSfU.js";const L=class{constructor(n){a(this,n),this.customHTMLEnabled=i.get("innerHTMLTemplatesEnabled",d),this.pullingIcon=void 0,this.pullingText=void 0,this.refreshingSpinner=void 0,this.refreshingText=void 0}componentWillLoad(){if(this.pullingIcon===void 0){const n=g(),r=t(this),s=n?"lines":h;this.pullingIcon=i.get("refreshingIcon",r==="ios"&&n?i.get("spinner",s):"circular")}if(this.refreshingSpinner===void 0){const n=t(this);this.refreshingSpinner=i.get("refreshingSpinner",i.get("spinner",n==="ios"?"lines":"circular"))}}renderPullingText(){const{customHTMLEnabled:n,pullingText:r}=this;return n?e("div",{class:"refresher-pulling-text",innerHTML:c(r)}):e("div",{class:"refresher-pulling-text"},r)}renderRefreshingText(){const{customHTMLEnabled:n,refreshingText:r}=this;return n?e("div",{class:"refresher-refreshing-text",innerHTML:c(r)}):e("div",{class:"refresher-refreshing-text"},r)}render(){const n=this.pullingIcon,r=n!=null&&u[n]!==void 0,s=t(this);return e(f,{key:"19633bbcf02e3dba885d6bdcdaf2269bf4c8e2f5",class:s},e("div",{key:"28922e434a55a6cac0476fe2bee56941ce0d1c02",class:"refresher-pulling"},this.pullingIcon&&r&&e("div",{key:"fe575bf996021884677e9b23a3215d63caf894f5",class:"refresher-pulling-icon"},e("div",{key:"59fe12297fd95bc33b8df8cd35316e2a1c084d91",class:"spinner-arrow-container"},e("ion-spinner",{key:"af9cc013ae04945c140b2865610ca73edb52ab48",name:this.pullingIcon,paused:!0}),s==="md"&&this.pullingIcon==="circular"&&e("div",{key:"34df66ad1b0f706a0532957251aa2c20bf4587d8",class:"arrow-container"},e("ion-icon",{key:"ffdb5c123e606b823491c6c51cc2b497f62581bb",icon:l,"aria-hidden":"true"})))),this.pullingIcon&&!r&&e("div",{key:"ac3a2032bb969264d20fa057e9123441005d7a9d",class:"refresher-pulling-icon"},e("ion-icon",{key:"d969d10915548e72aae289b52154366f3dd39b31",icon:this.pullingIcon,lazy:!1,"aria-hidden":"true"})),this.pullingText!==void 0&&this.renderPullingText()),e("div",{key:"a8f854f81a94812d7bef8ce088331d94f49ff53d",class:"refresher-refreshing"},this.refreshingSpinner&&e("div",{key:"a1f646945370e40c844d62bc0c647443ae9dfbe7",class:"refresher-refreshing-icon"},e("ion-spinner",{key:"ab3ff4047769b6436e222b46d193c1e8b23e2fce",name:this.refreshingSpinner})),this.refreshingText!==void 0&&this.renderRefreshingText()))}get el(){return o(this)}};export{L as ion_refresher_content};
import{r as n,h as a,H as s,g as o}from"./index-B0oma6gn.js";import{a as r}from"./framework-delegate-b2edfa06-CxDv4kyL.js";import"./vue.esm-bundler-cJVerQom.js";import"./iframe-DcUhiSIc.js";import"./helpers-4047ce7f-ZS1Xs9E2.js";const d=":host(.tab-hidden){display:none !important}",c=d,h=class{constructor(e){n(this,e),this.loaded=!1,this.active=!1,this.delegate=void 0,this.tab=void 0,this.component=void 0}async componentWillLoad(){this.active&&await this.setActive()}async setActive(){await this.prepareLazyLoaded(),this.active=!0}changeActive(e){e&&this.prepareLazyLoaded()}prepareLazyLoaded(){if(!this.loaded&&this.component!=null){this.loaded=!0;try{return r(this.delegate,this.el,this.component,["ion-page"])}catch(e){console.error(e)}}return Promise.resolve(void 0)}render(){const{tab:e,active:t,component:i}=this;return a(s,{key:"cb75d0877979b3b8df8f7e1952bfa9677da1eaa5",role:"tabpanel","aria-hidden":t?null:"true","aria-labelledby":`tab-button-${e}`,class:{"ion-page":i===void 0,"tab-hidden":!t}},a("slot",{key:"37fbb7b7a6b03eb93b1dacd2dc1025b78eb2aa6b"}))}get el(){return o(this)}static get watchers(){return{active:["changeActive"]}}};h.style=c;export{h as ion_tab};

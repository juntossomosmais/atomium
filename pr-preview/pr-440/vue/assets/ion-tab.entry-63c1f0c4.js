import{r as n,h as a,H as s,g as o}from"./index-273e4037.js";import{a as r}from"./framework-delegate-bec700a6-3376338a.js";import"./vue.esm-bundler-8a51a326.js";import"./iframe-85a0e6a4.js";import"../sb-preview/runtime.js";import"./helpers-079c01eb-656b014e.js";const d=":host(.tab-hidden){display:none !important}",c=d,h=class{constructor(e){n(this,e),this.loaded=!1,this.active=!1,this.delegate=void 0,this.tab=void 0,this.component=void 0}async componentWillLoad(){this.active&&await this.setActive()}async setActive(){await this.prepareLazyLoaded(),this.active=!0}changeActive(e){e&&this.prepareLazyLoaded()}prepareLazyLoaded(){if(!this.loaded&&this.component!=null){this.loaded=!0;try{return r(this.delegate,this.el,this.component,["ion-page"])}catch(e){console.error(e)}}return Promise.resolve(void 0)}render(){const{tab:e,active:t,component:i}=this;return a(s,{key:"fa5c567bf59eb8bd46a7d2b85a560e43c43563fe",role:"tabpanel","aria-hidden":t?null:"true","aria-labelledby":`tab-button-${e}`,class:{"ion-page":i===void 0,"tab-hidden":!t}},a("slot",{key:"133871ad0bafa16539dfec4a6bd640367c998039"}))}get el(){return o(this)}static get watchers(){return{active:["changeActive"]}}};h.style=c;export{h as ion_tab};

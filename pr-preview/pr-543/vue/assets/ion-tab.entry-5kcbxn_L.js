import{r as n,h as a,H as s,g as o}from"./index-D7SNAhmR.js";import{a as r}from"./framework-delegate-bec700a6-1EDJ8Ayl.js";import"./vue.esm-bundler-Dk4JuX4g.js";import"./iframe-CrqqsAdq.js";import"../sb-preview/runtime.js";import"./helpers-079c01eb-D592YRe8.js";const d=":host(.tab-hidden){display:none !important}",c=d,h=class{constructor(e){n(this,e),this.loaded=!1,this.active=!1,this.delegate=void 0,this.tab=void 0,this.component=void 0}async componentWillLoad(){this.active&&await this.setActive()}async setActive(){await this.prepareLazyLoaded(),this.active=!0}changeActive(e){e&&this.prepareLazyLoaded()}prepareLazyLoaded(){if(!this.loaded&&this.component!=null){this.loaded=!0;try{return r(this.delegate,this.el,this.component,["ion-page"])}catch(e){console.error(e)}}return Promise.resolve(void 0)}render(){const{tab:e,active:t,component:i}=this;return a(s,{key:"4fe50fa809503794be2ef91383e49b72cad6fa82",role:"tabpanel","aria-hidden":t?null:"true","aria-labelledby":`tab-button-${e}`,class:{"ion-page":i===void 0,"tab-hidden":!t}},a("slot",{key:"937777a826936d6b399329a926a704008339803e"}))}get el(){return o(this)}static get watchers(){return{active:["changeActive"]}}};h.style=c;export{h as ion_tab};

import{r as i,c as r}from"./index-DZXQTcpR.js";import"./iframe-8LX55Q3q.js";const h=class{constructor(t){i(this,t),this.ionRouteDataChanged=r(this,"ionRouteDataChanged",7),this.url="",this.component=void 0,this.componentProps=void 0,this.beforeLeave=void 0,this.beforeEnter=void 0}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;const n=t?Object.keys(t):[],s=e?Object.keys(e):[];if(n.length!==s.length){this.onUpdate(t);return}for(const o of n)if(t[o]!==e[o]){this.onUpdate(t);return}}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}};export{h as ion_route};

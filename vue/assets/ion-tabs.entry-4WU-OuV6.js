import{r as l,c as a,h as s,H as c,g as h}from"./index-ClkPbCuI.js";import"./vue.esm-bundler-cJVerQom.js";import"./iframe-4Zizkv0n.js";const d=":host{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;flex:1;contain:layout size style}",u=d,b=class{constructor(e){l(this,e),this.ionNavWillLoad=a(this,"ionNavWillLoad",7),this.ionTabsWillChange=a(this,"ionTabsWillChange",3),this.ionTabsDidChange=a(this,"ionTabsDidChange",3),this.transitioning=!1,this.onTabClicked=t=>{const{href:i,tab:n}=t.detail;if(this.useRouter&&i!==void 0){const r=document.querySelector("ion-router");r&&r.push(i)}else this.select(n)},this.selectedTab=void 0,this.useRouter=!1}async componentWillLoad(){if(this.useRouter||(this.useRouter=(!!this.el.querySelector("ion-router-outlet")||!!document.querySelector("ion-router"))&&!this.el.closest("[no-router]")),!this.useRouter){const e=this.tabs;e.length>0&&await this.select(e[0])}this.ionNavWillLoad.emit()}componentWillRender(){const e=this.el.querySelector("ion-tab-bar");if(e){const t=this.selectedTab?this.selectedTab.tab:void 0;e.selectedTab=t}}async select(e){const t=o(this.tabs,e);return this.shouldSwitch(t)?(await this.setActive(t),await this.notifyRouter(),this.tabSwitch(),!0):!1}async getTab(e){return o(this.tabs,e)}getSelected(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}async setRouteId(e){const t=o(this.tabs,e);return this.shouldSwitch(t)?(await this.setActive(t),{changed:!0,element:this.selectedTab,markVisible:()=>this.tabSwitch()}):{changed:!1,element:this.selectedTab}}async getRouteId(){var e;const t=(e=this.selectedTab)===null||e===void 0?void 0:e.tab;return t!==void 0?{id:t,element:this.selectedTab}:void 0}setActive(e){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=e,this.ionTabsWillChange.emit({tab:e.tab}),e.active=!0,Promise.resolve())}tabSwitch(){const e=this.selectedTab,t=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,e&&t!==e&&(t&&(t.active=!1),this.ionTabsDidChange.emit({tab:e.tab}))}notifyRouter(){if(this.useRouter){const e=document.querySelector("ion-router");if(e)return e.navChanged("forward")}return Promise.resolve(!1)}shouldSwitch(e){const t=this.selectedTab;return e!==void 0&&e!==t&&!this.transitioning}get tabs(){return Array.from(this.el.querySelectorAll("ion-tab"))}render(){return s(c,{key:"e01ccf6bfaccad094515be50e407399c733fc226",onIonTabButtonClick:this.onTabClicked},s("slot",{key:"38d2d01dbfd8a08f01e6f0e27274b21d75424e37",name:"top"}),s("div",{key:"7e894f0f423e2d43e1c68daff5f9f6c442fad237",class:"tabs-inner"},s("slot",{key:"df16be529a0370a26d0adf850530b31607507c23"})),s("slot",{key:"44642e1cb24c3281c43db75fd69a32fe0defe40a",name:"bottom"}))}get el(){return h(this)}},o=(e,t)=>{const i=typeof t=="string"?e.find(n=>n.tab===t):t;return i||console.error(`tab with id: "${i}" does not exist`),i};b.style=u;export{b as ion_tabs};

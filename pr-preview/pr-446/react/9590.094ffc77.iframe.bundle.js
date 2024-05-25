"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[9590],{"../../packages/core/dist/esm/ion-tabs.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_tabs:()=>Tabs});var _index_03927578_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-03927578.js");const Tabs=class{constructor(hostRef){(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionNavWillLoad=(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionNavWillLoad",7),this.ionTabsWillChange=(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionTabsWillChange",3),this.ionTabsDidChange=(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionTabsDidChange",3),this.transitioning=!1,this.onTabClicked=ev=>{const{href,tab}=ev.detail;if(this.useRouter&&void 0!==href){const router=document.querySelector("ion-router");router&&router.push(href)}else this.select(tab)},this.selectedTab=void 0,this.useRouter=!1}async componentWillLoad(){if(this.useRouter||(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")),!this.useRouter){const tabs=this.tabs;tabs.length>0&&await this.select(tabs[0])}this.ionNavWillLoad.emit()}componentWillRender(){const tabBar=this.el.querySelector("ion-tab-bar");if(tabBar){const tab=this.selectedTab?this.selectedTab.tab:void 0;tabBar.selectedTab=tab}}async select(tab){const selectedTab=getTab(this.tabs,tab);return!!this.shouldSwitch(selectedTab)&&(await this.setActive(selectedTab),await this.notifyRouter(),this.tabSwitch(),!0)}async getTab(tab){return getTab(this.tabs,tab)}getSelected(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}async setRouteId(id){const selectedTab=getTab(this.tabs,id);return this.shouldSwitch(selectedTab)?(await this.setActive(selectedTab),{changed:!0,element:this.selectedTab,markVisible:()=>this.tabSwitch()}):{changed:!1,element:this.selectedTab}}async getRouteId(){var _a;const tabId=null===(_a=this.selectedTab)||void 0===_a?void 0:_a.tab;return void 0!==tabId?{id:tabId,element:this.selectedTab}:void 0}setActive(selectedTab){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=selectedTab,this.ionTabsWillChange.emit({tab:selectedTab.tab}),selectedTab.active=!0,Promise.resolve())}tabSwitch(){const selectedTab=this.selectedTab,leavingTab=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,selectedTab&&leavingTab!==selectedTab&&(leavingTab&&(leavingTab.active=!1),this.ionTabsDidChange.emit({tab:selectedTab.tab}))}notifyRouter(){if(this.useRouter){const router=document.querySelector("ion-router");if(router)return router.navChanged("forward")}return Promise.resolve(!1)}shouldSwitch(selectedTab){const leavingTab=this.selectedTab;return void 0!==selectedTab&&selectedTab!==leavingTab&&!this.transitioning}get tabs(){return Array.from(this.el.querySelectorAll("ion-tab"))}render(){return(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"5c76b077d508b1379a985503618dade63a9db514",onIonTabButtonClick:this.onTabClicked},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"357ba85e01de10d3c0e52adcb1977bbc0dbbf587",name:"top"}),(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{key:"c8c59aac4e1394a1a7505f201cbf609b9b0c6ea9",class:"tabs-inner"},(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"00951068088580ab408f9c24ede39144b212b0d6"})),(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"a1118402fbd5995b07f7676f216b2efbc6052f12",name:"bottom"}))}get el(){return(0,_index_03927578_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}},getTab=(tabs,tab)=>{const tabEl="string"==typeof tab?tabs.find((t=>t.tab===tab)):tab;return tabEl||console.error(`tab with id: "${tabEl}" does not exist`),tabEl};Tabs.style=":host{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;flex:1;contain:layout size style}"}}]);
import{r,c,h as i,H as a,g as d}from"./index-Br9rU3PQ.js";import"./vue.esm-bundler-cJVerQom.js";import"./iframe-Bnke7yZc.js";const h=":host{display:flex;height:100%;overflow-x:scroll;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none}:host::-webkit-scrollbar{display:none}:host(.segment-view-disabled){touch-action:none;overflow-x:hidden}:host(.segment-view-scroll-disabled){pointer-events:none}:host(.segment-view-disabled){opacity:0.3}",m=h,u=":host{display:flex;height:100%;overflow-x:scroll;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none}:host::-webkit-scrollbar{display:none}:host(.segment-view-disabled){touch-action:none;overflow-x:hidden}:host(.segment-view-scroll-disabled){pointer-events:none}:host(.segment-view-disabled){opacity:0.3}",f=u,g=class{constructor(e){r(this,e),this.ionSegmentViewScroll=c(this,"ionSegmentViewScroll",7),this.scrollEndTimeout=null,this.isTouching=!1,this.disabled=!1,this.isManualScroll=void 0}handleScroll(e){var t;const{scrollLeft:n,scrollWidth:s,clientWidth:o}=e.target,l=n/(s-o);this.ionSegmentViewScroll.emit({scrollRatio:l,isManualScroll:(t=this.isManualScroll)!==null&&t!==void 0?t:!0}),this.resetScrollEndTimeout()}handleScrollStart(){this.scrollEndTimeout&&(clearTimeout(this.scrollEndTimeout),this.scrollEndTimeout=null),this.isTouching=!0}handleTouchEnd(){this.isTouching=!1}resetScrollEndTimeout(){this.scrollEndTimeout&&(clearTimeout(this.scrollEndTimeout),this.scrollEndTimeout=null),this.scrollEndTimeout=setTimeout(()=>{this.checkForScrollEnd()},100)}checkForScrollEnd(){this.isTouching||(this.isManualScroll=void 0)}async setContent(e,t=!0){const s=this.getSegmentContents().findIndex(l=>l.id===e);if(s===-1)return;this.isManualScroll=!1,this.resetScrollEndTimeout();const o=this.el.offsetWidth;this.el.scrollTo({top:0,left:s*o,behavior:t?"smooth":"instant"})}getSegmentContents(){return Array.from(this.el.querySelectorAll("ion-segment-content"))}render(){const{disabled:e,isManualScroll:t}=this;return i(a,{key:"9f4f11d31c4db776f077e59ae895b35dd4454717",class:{"segment-view-disabled":e,"segment-view-scroll-disabled":t===!1}},i("slot",{key:"ea58b21f031cee2ab2b70580f336deaefa364538"}))}get el(){return d(this)}};g.style={ios:m,md:f};export{g as ion_segment_view};

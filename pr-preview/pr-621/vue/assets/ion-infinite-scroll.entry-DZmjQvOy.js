import{r as h,c,w as n,d as a,b as d,h as f,H as g,g as p}from"./index-BtjV6ztc.js";import{a as E,p as m,g as u}from"./index-6cad21e9-C8mkRYkz.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-UueMdvda.js";import"../sb-preview/runtime.js";import"./helpers-079c01eb-D592YRe8.js";import"./index-f5dbb989-By3l89LO.js";const b="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}",S=b,H=class{constructor(s){h(this,s),this.ionInfinite=c(this,"ionInfinite",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.onScroll=()=>{const t=this.scrollEl;if(!t||!this.canStart())return 1;const i=this.el.offsetHeight;if(i===0)return 2;const e=t.scrollTop,r=t.scrollHeight,l=t.offsetHeight,o=this.thrPc!==0?l*this.thrPc:this.thrPx;return(this.position==="bottom"?r-i-e-o-l:e-i-o)<0&&!this.didFire?(this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3):4},this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom"}thresholdChanged(){const s=this.threshold;s.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(s)/100):(this.thrPx=parseFloat(s),this.thrPc=0)}disabledChanged(){const s=this.disabled;s&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!s)}async connectedCallback(){const s=E(this.el);if(!s){m(this.el);return}this.scrollEl=await u(s),this.thresholdChanged(),this.disabledChanged(),this.position==="top"&&n(()=>{this.scrollEl&&(this.scrollEl.scrollTop=this.scrollEl.scrollHeight-this.scrollEl.clientHeight)})}disconnectedCallback(){this.enableScrollEvents(!1),this.scrollEl=void 0}async complete(){const s=this.scrollEl;if(!(!this.isLoading||!s))if(this.isLoading=!1,this.position==="top"){this.isBusy=!0;const t=s.scrollHeight-s.scrollTop;requestAnimationFrame(()=>{a(()=>{const e=s.scrollHeight-t;requestAnimationFrame(()=>{n(()=>{s.scrollTop=e,this.isBusy=!1,this.didFire=!1})})})})}else this.didFire=!1}canStart(){return!this.disabled&&!this.isBusy&&!!this.scrollEl&&!this.isLoading}enableScrollEvents(s){this.scrollEl&&(s?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}render(){const s=d(this),t=this.disabled;return f(g,{key:"c2248d06232dd7771dd155693ec75f9258dc969e",class:{[s]:!0,"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!t}})}get el(){return p(this)}static get watchers(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}};H.style=S;export{H as ion_infinite_scroll};

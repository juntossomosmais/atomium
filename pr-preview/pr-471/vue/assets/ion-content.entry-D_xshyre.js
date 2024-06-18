import{r as w,c as m,b as v,i as x,d as g,f as b,h as l,H as E,g as k}from"./index-JYnEvGW0.js";import{h as y,d as T}from"./helpers-079c01eb-D592YRe8.js";import{i as X}from"./dir-861e8ef7-ebPfiN6E.js";import{c as Y,h as z}from"./theme-516b22d6-DD5XIICl.js";import"./vue.esm-bundler-Cotndkpi.js";import"./iframe-Bz-JRNOn.js";import"../sb-preview/runtime.js";const C=':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);box-sizing:border-box;overflow:hidden;touch-action:pan-x pan-y pinch-zoom}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){display:flex;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}.transition-effect{display:none;position:absolute;width:100%;height:100vh;opacity:0;pointer-events:none}:host(.content-ltr) .transition-effect{left:-100%;}:host(.content-rtl) .transition-effect{right:-100%;}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;width:100%;height:100%;box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03)}:host(.content-ltr) .transition-shadow{right:0;}:host(.content-rtl) .transition-shadow{left:0;transform:scaleX(-1)}::slotted([slot=fixed]){position:absolute;transform:translateZ(0)}',L=C,P=class{constructor(t){w(this,t),this.ionScrollStart=m(this,"ionScrollStart",7),this.ionScroll=m(this,"ionScroll",7),this.ionScrollEnd=m(this,"ionScrollEnd",7),this.watchDog=null,this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.isMainContent=!0,this.resizeTimeout=null,this.tabsElement=null,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,data:void 0,isScrolling:!0},this.color=void 0,this.fullscreen=!1,this.forceOverscroll=void 0,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1}connectedCallback(){if(this.isMainContent=this.el.closest("ion-menu, ion-popover, ion-modal")===null,y(this.el)){const t=this.tabsElement=this.el.closest("ion-tabs");t!==null&&(this.tabsLoadCallback=()=>this.resize(),t.addEventListener("ionTabBarLoaded",this.tabsLoadCallback))}}disconnectedCallback(){if(this.onScrollEnd(),y(this.el)){const{tabsElement:t,tabsLoadCallback:o}=this;t!==null&&o!==void 0&&t.removeEventListener("ionTabBarLoaded",o),this.tabsElement=null,this.tabsLoadCallback=void 0}}onResize(){this.resizeTimeout&&(clearTimeout(this.resizeTimeout),this.resizeTimeout=null),this.resizeTimeout=setTimeout(()=>{this.el.offsetParent!==null&&this.resize()},100)}shouldForceOverscroll(){const{forceOverscroll:t}=this,o=v(this);return t===void 0?o==="ios"&&x("ios"):t}resize(){this.fullscreen?g(()=>this.readDimensions()):(this.cTop!==0||this.cBottom!==0)&&(this.cTop=this.cBottom=0,b(this))}readDimensions(){const t=B(this.el),o=Math.max(this.el.offsetTop,0),e=Math.max(t.offsetHeight-o-this.el.offsetHeight,0);(o!==this.cTop||e!==this.cBottom)&&(this.cTop=o,this.cBottom=e,b(this))}onScroll(t){const o=Date.now(),e=!this.isScrolling;this.lastScroll=o,e&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,g(s=>{this.queued=!1,this.detail.event=t,M(this.detail,this.scrollEl,s,e),this.ionScroll.emit(this.detail)}))}async getScrollElement(){return this.scrollEl||await new Promise(t=>T(this.el,t)),Promise.resolve(this.scrollEl)}async getBackgroundElement(){return this.backgroundContentEl||await new Promise(t=>T(this.el,t)),Promise.resolve(this.backgroundContentEl)}scrollToTop(t=0){return this.scrollToPoint(void 0,0,t)}async scrollToBottom(t=0){const o=await this.getScrollElement(),e=o.scrollHeight-o.clientHeight;return this.scrollToPoint(void 0,e,t)}async scrollByPoint(t,o,e){const s=await this.getScrollElement();return this.scrollToPoint(t+s.scrollLeft,o+s.scrollTop,e)}async scrollToPoint(t,o,e=0){const s=await this.getScrollElement();if(e<32){o!=null&&(s.scrollTop=o),t!=null&&(s.scrollLeft=t);return}let a,c=0;const h=new Promise(f=>a=f),n=s.scrollTop,r=s.scrollLeft,i=o!=null?o-n:0,d=t!=null?t-r:0,p=f=>{const S=Math.min(1,(f-c)/e)-1,u=Math.pow(S,3)+1;i!==0&&(s.scrollTop=Math.floor(u*i+n)),d!==0&&(s.scrollLeft=Math.floor(u*d+r)),u<1?requestAnimationFrame(p):a()};return requestAnimationFrame(f=>{c=f,p(f)}),h}onScrollStart(){this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(()=>{this.lastScroll<Date.now()-120&&this.onScrollEnd()},100)}onScrollEnd(){this.watchDog&&clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))}render(){const{isMainContent:t,scrollX:o,scrollY:e,el:s}=this,a=X(s)?"rtl":"ltr",c=v(this),h=this.shouldForceOverscroll(),n=c==="ios",r=t?"main":"div";return this.resize(),l(E,{key:"e13815c0e6f6095150b112d3a1aaf2f509aa0d0b",class:Y(this.color,{[c]:!0,"content-sizing":z("ion-popover",this.el),overscroll:h,[`content-${a}`]:!0}),style:{"--offset-top":`${this.cTop}px`,"--offset-bottom":`${this.cBottom}px`}},l("div",{key:"8006c4a10d8f7dc83c646246961d018a8097236e",ref:i=>this.backgroundContentEl=i,id:"background-content",part:"background"}),l(r,{key:"4dd2f58421493f7a4ca42f8f5d7b85cda8e320ea",class:{"inner-scroll":!0,"scroll-x":o,"scroll-y":e,overscroll:(o||e)&&h},ref:i=>this.scrollEl=i,onScroll:this.scrollEvents?i=>this.onScroll(i):void 0,part:"scroll"},l("slot",{key:"37904f8f1d8319156cd901feb21930ef674fe0f7"})),n?l("div",{class:"transition-effect"},l("div",{class:"transition-cover"}),l("div",{class:"transition-shadow"})):null,l("slot",{key:"8f696583903af0548d064dca1a6bae060e127485",name:"fixed"}))}get el(){return k(this)}},D=t=>{var o;return t.parentElement?t.parentElement:!((o=t.parentNode)===null||o===void 0)&&o.host?t.parentNode.host:null},B=t=>{const o=t.closest("ion-tabs");if(o)return o;const e=t.closest("ion-app, ion-page, .ion-page, page-inner, .popover-content");return e||D(t)},M=(t,o,e,s)=>{const a=t.currentX,c=t.currentY,h=t.currentTime,n=o.scrollLeft,r=o.scrollTop,i=e-h;if(s&&(t.startTime=e,t.startX=n,t.startY=r,t.velocityX=t.velocityY=0),t.currentTime=e,t.currentX=t.scrollLeft=n,t.currentY=t.scrollTop=r,t.deltaX=n-t.startX,t.deltaY=r-t.startY,i>0&&i<100){const d=(n-a)/i,p=(r-c)/i;t.velocityX=d*.7+t.velocityX*.3,t.velocityY=p*.7+t.velocityY*.3}};P.style=L;export{P as ion_content};

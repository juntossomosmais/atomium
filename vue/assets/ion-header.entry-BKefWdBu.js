import{r as E,b,w as a,h,H as w,g as I,d as k}from"./index-CY8ldPBU.js";import{g as u,f,p as y}from"./index-6cad21e9-C8mkRYkz.js";import{i as A,f as x}from"./helpers-079c01eb-D592YRe8.js";import{h as M}from"./theme-516b22d6-DD5XIICl.js";import"./vue.esm-bundler-Dk4JuX4g.js";import"./iframe-C6g4vRkC.js";import"../sb-preview/runtime.js";import"./index-f5dbb989-By3l89LO.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const L="all 0.2s ease-in-out",g=t=>{const o=document.querySelector(`${t}.ion-cloned-element`);if(o!==null)return o;const e=document.createElement(t);return e.classList.add("ion-cloned-element"),e.style.setProperty("display","none"),document.body.appendChild(e),e},m=t=>{if(!t)return;const o=t.querySelectorAll("ion-toolbar");return{el:t,toolbars:Array.from(o).map(e=>{const n=e.querySelector("ion-title");return{el:e,background:e.shadowRoot.querySelector(".toolbar-background"),ionTitleEl:n,innerTitleEl:n?n.shadowRoot.querySelector(".toolbar-title"):null,ionButtonsEl:Array.from(e.querySelectorAll("ion-buttons"))}})}},O=(t,o,e)=>{k(()=>{const n=t.scrollTop,s=x(1,1+-n/500,1.1);e.querySelector("ion-refresher.refresher-native")===null&&a(()=>{P(o.toolbars,s)})})},p=(t,o)=>{t.collapse!=="fade"&&(o===void 0?t.style.removeProperty("--opacity-scale"):t.style.setProperty("--opacity-scale",o.toString()))},R=(t,o,e)=>{if(!t[0].isIntersecting)return;const n=t[0].intersectionRatio>.9||e<=0?0:(1-t[0].intersectionRatio)*100/75;p(o.el,n===1?void 0:n)},q=(t,o,e,n)=>{a(()=>{const s=n.scrollTop;R(t,o,s);const i=t[0],r=i.intersectionRect,c=r.width*r.height,d=i.rootBounds.width*i.rootBounds.height,C=c===0&&d===0,H=Math.abs(r.left-i.boundingClientRect.left),S=Math.abs(r.right-i.boundingClientRect.right),T=c>0&&(H>=5||S>=5);C||T||(i.isIntersecting?(l(o,!1),l(e)):(r.x===0&&r.y===0||r.width!==0&&r.height!==0)&&s>0&&(l(o),l(e,!1),p(o.el)))})},l=(t,o=!0)=>{const e=t.el;o?(e.classList.remove("header-collapse-condense-inactive"),e.removeAttribute("aria-hidden")):(e.classList.add("header-collapse-condense-inactive"),e.setAttribute("aria-hidden","true"))},P=(t=[],o=1,e=!1)=>{t.forEach(n=>{const s=n.ionTitleEl,i=n.innerTitleEl;!s||s.size!=="large"||(i.style.transition=e?L:"",i.style.transform=`scale3d(${o}, ${o}, 1)`)})},v=(t,o,e)=>{k(()=>{const n=t.scrollTop,s=o.clientHeight,i=e?e.clientHeight:0;if(e!==null&&n<i){o.style.setProperty("--opacity-scale","0"),t.style.setProperty("clip-path",`inset(${s}px 0px 0px 0px)`);return}const r=n-i,d=x(0,r/10,1);a(()=>{t.style.removeProperty("clip-path"),o.style.setProperty("--opacity-scale",d.toString())})})},z="ion-header{display:block;position:relative;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports (backdrop-filter: blur(0)){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:0px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}ion-header.header-ios:not(.header-collapse-main):has(~ion-content ion-header.header-ios[collapse=condense],~ion-content ion-header.header-ios.header-collapse-condense){opacity:0}",D=z,$="ion-header{display:block;position:relative;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md{box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.header-collapse-condense{display:none}.header-md.ion-no-border{box-shadow:none}",B=$,F=class{constructor(t){E(this,t),this.inheritedAttributes={},this.setupFadeHeader=async(o,e)=>{const n=this.scrollEl=await u(o);this.contentScrollCallback=()=>{v(this.scrollEl,this.el,e)},n.addEventListener("scroll",this.contentScrollCallback),v(this.scrollEl,this.el,e)},this.collapse=void 0,this.translucent=!1}componentWillLoad(){this.inheritedAttributes=A(this.el)}componentDidLoad(){this.checkCollapsibleHeader()}componentDidUpdate(){this.checkCollapsibleHeader()}disconnectedCallback(){this.destroyCollapsibleHeader()}async checkCollapsibleHeader(){if(b(this)!=="ios")return;const{collapse:o}=this,e=o==="condense",n=o==="fade";if(this.destroyCollapsibleHeader(),e){const s=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),i=s?f(s):null;a(()=>{const r=g("ion-title");r.size="large",g("ion-back-button")}),await this.setupCondenseHeader(i,s)}else if(n){const s=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),i=s?f(s):null;if(!i){y(this.el);return}const r=i.querySelector('ion-header[collapse="condense"]');await this.setupFadeHeader(i,r)}}destroyCollapsibleHeader(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.scrollEl&&this.contentScrollCallback&&(this.scrollEl.removeEventListener("scroll",this.contentScrollCallback),this.contentScrollCallback=void 0),this.collapsibleMainHeader&&(this.collapsibleMainHeader.classList.remove("header-collapse-main"),this.collapsibleMainHeader=void 0)}async setupCondenseHeader(t,o){if(!t||!o){y(this.el);return}if(typeof IntersectionObserver>"u")return;this.scrollEl=await u(t);const e=o.querySelectorAll("ion-header");if(this.collapsibleMainHeader=Array.from(e).find(r=>r.collapse!=="condense"),!this.collapsibleMainHeader)return;const n=m(this.collapsibleMainHeader),s=m(this.el);if(!n||!s)return;l(n,!1),p(n.el,0);const i=r=>{q(r,n,s,this.scrollEl)};this.intersectionObserver=new IntersectionObserver(i,{root:t,threshold:[.25,.3,.4,.5,.6,.7,.8,.9,1]}),this.intersectionObserver.observe(s.toolbars[s.toolbars.length-1].el),this.contentScrollCallback=()=>{O(this.scrollEl,s,t)},this.scrollEl.addEventListener("scroll",this.contentScrollCallback),a(()=>{this.collapsibleMainHeader!==void 0&&this.collapsibleMainHeader.classList.add("header-collapse-main")})}render(){const{translucent:t,inheritedAttributes:o}=this,e=b(this),n=this.collapse||"none",s=M("ion-menu",this.el)?"none":"banner";return h(w,Object.assign({key:"9fa0af97b605f9fe98b13361bc3d1289745c549f",role:s,class:{[e]:!0,[`header-${e}`]:!0,"header-translucent":this.translucent,[`header-collapse-${n}`]:!0,[`header-translucent-${e}`]:this.translucent}},o),e==="ios"&&t&&h("div",{key:"1a780d2625302f2465718e304bdd3794c89c9845",class:"header-background"}),h("slot",{key:"b2b8557b44be40c590bfcc362ac4350f9f8b889e"}))}get el(){return I(this)}};F.style={ios:D,md:B};export{F as ion_header};
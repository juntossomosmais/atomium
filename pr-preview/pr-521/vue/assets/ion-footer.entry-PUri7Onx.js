import{r as b,b as l,h as i,H as p,g as f,d as h,w as m}from"./index-CBQDCJQL.js";import{f as y,p as u,g as k}from"./index-6cad21e9-C8mkRYkz.js";import{c as g}from"./keyboard-controller-a1183c77-CYF5FWZh.js";import{f as C}from"./helpers-079c01eb-D592YRe8.js";import"./keyboard-6ae239bc-BGgBFUHv.js";import"./vue.esm-bundler-DLYZ4EJx.js";import"./iframe-Dj-4ilki.js";import"../sb-preview/runtime.js";import"./index-f5dbb989-By3l89LO.js";import"./index-d9a82e80-B2PaWDFh.js";import"./capacitor-74355484-sCloY8M9.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const n=(o,e)=>{h(()=>{const t=o.scrollTop,s=o.scrollHeight-o.clientHeight,r=10,a=s-r,c=t-a,d=C(0,1-c/r,1);m(()=>{e.style.setProperty("--opacity-scale",d.toString())})})},x="ion-footer{display:block;position:relative;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-ios ion-toolbar:first-of-type{--border-width:0.55px 0 0}@supports (backdrop-filter: blur(0)){.footer-background{left:0;right:0;top:0;bottom:0;position:absolute;backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8}}.footer-ios.ion-no-border ion-toolbar:first-of-type{--border-width:0}.footer-collapse-fade ion-toolbar{--opacity-scale:inherit}",F=x,S="ion-footer{display:block;position:relative;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-md{box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.footer-md.ion-no-border{box-shadow:none}",v=S,w=class{constructor(o){b(this,o),this.keyboardCtrl=null,this.checkCollapsibleFooter=()=>{if(l(this)!=="ios")return;const{collapse:t}=this,s=t==="fade";if(this.destroyCollapsibleFooter(),s){const r=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),a=r?y(r):null;if(!a){u(this.el);return}this.setupFadeFooter(a)}},this.setupFadeFooter=async e=>{const t=this.scrollEl=await k(e);this.contentScrollCallback=()=>{n(t,this.el)},t.addEventListener("scroll",this.contentScrollCallback),n(t,this.el)},this.keyboardVisible=!1,this.collapse=void 0,this.translucent=!1}componentDidLoad(){this.checkCollapsibleFooter()}componentDidUpdate(){this.checkCollapsibleFooter()}async connectedCallback(){this.keyboardCtrl=await g(async(o,e)=>{o===!1&&e!==void 0&&await e,this.keyboardVisible=o})}disconnectedCallback(){this.keyboardCtrl&&this.keyboardCtrl.destroy()}destroyCollapsibleFooter(){this.scrollEl&&this.contentScrollCallback&&(this.scrollEl.removeEventListener("scroll",this.contentScrollCallback),this.contentScrollCallback=void 0)}render(){const{translucent:o,collapse:e}=this,t=l(this),s=this.el.closest("ion-tabs"),r=s==null?void 0:s.querySelector(":scope > ion-tab-bar");return i(p,{key:"dd8fa96901e8a09759a9621b6513f0492b3a6197",role:"contentinfo",class:{[t]:!0,[`footer-${t}`]:!0,"footer-translucent":o,[`footer-translucent-${t}`]:o,"footer-toolbar-padding":!this.keyboardVisible&&(!r||r.slot!=="bottom"),[`footer-collapse-${e}`]:e!==void 0}},t==="ios"&&o&&i("div",{key:"0fbb4ebf8e3951ff399f843dc11aab37fc48f8b7",class:"footer-background"}),i("slot",{key:"ecb14a65e3b6960670446c4428e3095b3231a3b0"}))}get el(){return f(this)}};w.style={ios:F,md:v};export{w as ion_footer};

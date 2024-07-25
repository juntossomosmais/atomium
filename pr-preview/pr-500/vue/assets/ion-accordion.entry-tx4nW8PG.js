import{r as f,a as p,b as g,h as r,H as m,g as b}from"./index-ZAJO6GxU.js";import{g as x,r as c,a as v,b as y,t as u}from"./helpers-079c01eb-D592YRe8.js";import{c as I}from"./index-8812fc40-DRCohVk1.js";import"./vue.esm-bundler-DLYZ4EJx.js";import"./iframe-CsQmtAh_.js";import"../sb-preview/runtime.js";const A=":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}",E=A,w=":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{transition:none !important}}",S=w,k=class{constructor(i){f(this,i),this.updateListener=()=>this.updateState(!1),this.setItemDefaults=()=>{const e=this.getSlottedHeaderIonItem();e&&(e.button=!0,e.detail=!1,e.lines===void 0&&(e.lines="full"))},this.getSlottedHeaderIonItem=()=>{const{headerEl:e}=this;if(!e)return;const t=e.querySelector("slot");if(t&&t.assignedElements!==void 0)return t.assignedElements().find(n=>n.tagName==="ION-ITEM")},this.setAria=(e=!1)=>{const t=this.getSlottedHeaderIonItem();if(!t)return;const o=x(t).querySelector("button");o&&o.setAttribute("aria-expanded",`${e}`)},this.slotToggleIcon=()=>{const e=this.getSlottedHeaderIonItem();if(!e)return;const{toggleIconSlot:t,toggleIcon:n}=this;if(e.querySelector(".ion-accordion-toggle-icon"))return;const s=document.createElement("ion-icon");s.slot=t,s.lazy=!1,s.classList.add("ion-accordion-toggle-icon"),s.icon=n,s.setAttribute("aria-hidden","true"),e.appendChild(s)},this.expandAccordion=(e=!1)=>{const{contentEl:t,contentElWrapper:n}=this;if(e||t===void 0||n===void 0){this.state=4;return}this.state!==4&&(this.currentRaf!==void 0&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?c(()=>{this.state=8,this.currentRaf=c(async()=>{const o=n.offsetHeight,s=u(t,2e3);t.style.setProperty("max-height",`${o}px`),await s,this.state=4,t.style.removeProperty("max-height")})}):this.state=4)},this.collapseAccordion=(e=!1)=>{const{contentEl:t}=this;if(e||t===void 0){this.state=1;return}this.state!==1&&(this.currentRaf!==void 0&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?this.currentRaf=c(async()=>{const n=t.offsetHeight;t.style.setProperty("max-height",`${n}px`),c(async()=>{const o=u(t,2e3);this.state=2,await o,this.state=1,t.style.removeProperty("max-height")})}):this.state=1)},this.shouldAnimate=()=>!(typeof window>"u"||matchMedia("(prefers-reduced-motion: reduce)").matches||!p.get("animated",!0)||this.accordionGroupEl&&!this.accordionGroupEl.animated),this.updateState=async(e=!1)=>{const t=this.accordionGroupEl,n=this.value;if(!t)return;const o=t.value;if(Array.isArray(o)?o.includes(n):o===n)this.expandAccordion(e),this.isNext=this.isPrevious=!1;else{this.collapseAccordion(e);const a=this.getNextSibling(),d=a==null?void 0:a.value;d!==void 0&&(this.isPrevious=Array.isArray(o)?o.includes(d):o===d);const l=this.getPreviousSibling(),h=l==null?void 0:l.value;h!==void 0&&(this.isNext=Array.isArray(o)?o.includes(h):o===h)}},this.getNextSibling=()=>{if(!this.el)return;const e=this.el.nextElementSibling;if((e==null?void 0:e.tagName)==="ION-ACCORDION")return e},this.getPreviousSibling=()=>{if(!this.el)return;const e=this.el.previousElementSibling;if((e==null?void 0:e.tagName)==="ION-ACCORDION")return e},this.state=1,this.isNext=!1,this.isPrevious=!1,this.value=`ion-accordion-${C++}`,this.disabled=!1,this.readonly=!1,this.toggleIcon=I,this.toggleIconSlot="end"}valueChanged(){this.updateState()}connectedCallback(){var i;const e=this.accordionGroupEl=(i=this.el)===null||i===void 0?void 0:i.closest("ion-accordion-group");e&&(this.updateState(!0),v(e,"ionValueChange",this.updateListener))}disconnectedCallback(){const i=this.accordionGroupEl;i&&y(i,"ionValueChange",this.updateListener)}componentDidLoad(){this.setItemDefaults(),this.slotToggleIcon(),c(()=>{const i=this.state===4||this.state===8;this.setAria(i)})}toggleExpanded(){const{accordionGroupEl:i,disabled:e,readonly:t,value:n,state:o}=this;if(!(e||t)&&i){const s=o===1||o===2;i.requestAccordionToggle(n,s)}}render(){const{disabled:i,readonly:e}=this,t=g(this),n=this.state===4||this.state===8,o=n?"header expanded":"header",s=n?"content expanded":"content";return this.setAria(n),r(m,{key:"073e1d02c18dcbc20c68648426e87c14750c031d",class:{[t]:!0,"accordion-expanding":this.state===8,"accordion-expanded":this.state===4,"accordion-collapsing":this.state===2,"accordion-collapsed":this.state===1,"accordion-next":this.isNext,"accordion-previous":this.isPrevious,"accordion-disabled":i,"accordion-readonly":e,"accordion-animated":this.shouldAnimate()}},r("div",{key:"9b4cf326de8bb6b4033992903c0c1bfd7eea9bcc",onClick:()=>this.toggleExpanded(),id:"header",part:o,"aria-controls":"content",ref:a=>this.headerEl=a},r("slot",{key:"464c32a37f64655eacf4218284214f5f30b14a1e",name:"header"})),r("div",{key:"8bb52e6a62d7de0106b253201a89a32e79d9a594",id:"content",part:s,role:"region","aria-labelledby":"header",ref:a=>this.contentEl=a},r("div",{key:"1d9dfd952ad493754aaeea7a8f625b33c2dd90a0",id:"content-wrapper",ref:a=>this.contentElWrapper=a},r("slot",{key:"970dfbc55a612d739d0ca3b7b1a08e5c96d0c479",name:"content"}))))}static get delegatesFocus(){return!0}get el(){return b(this)}static get watchers(){return{value:["valueChanged"]}}};let C=0;k.style={ios:E,md:S};export{k as ion_accordion};

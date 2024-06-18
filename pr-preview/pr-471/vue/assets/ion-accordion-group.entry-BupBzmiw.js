import{r as u,c,b as h,h as p,H as g,g as x}from"./index-JYnEvGW0.js";import{p as f}from"./index-f5dbb989-By3l89LO.js";import"./vue.esm-bundler-Cotndkpi.js";import"./iframe-Bz-JRNOn.js";import"../sb-preview/runtime.js";const m=":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}",b=m,y=":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}@supports selector(:dir(rtl)){:host(.accordion-group-expand-inset:dir(rtl)) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}@supports selector(:dir(rtl)){:host(.accordion-group-expand-inset:dir(rtl)) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}",v=y,A=class{constructor(o){u(this,o),this.ionChange=c(this,"ionChange",7),this.ionValueChange=c(this,"ionValueChange",7),this.animated=!0,this.multiple=void 0,this.value=void 0,this.disabled=!1,this.readonly=!1,this.expand="compact"}valueChanged(){const{value:o,multiple:e}=this;!e&&Array.isArray(o)&&f(`ion-accordion-group was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".

  Value Passed: [${o.map(t=>`'${t}'`).join(", ")}]
`,this.el),this.ionValueChange.emit({value:this.value})}async disabledChanged(){const{disabled:o}=this,e=await this.getAccordions();for(const t of e)t.disabled=o}async readonlyChanged(){const{readonly:o}=this,e=await this.getAccordions();for(const t of e)t.readonly=o}async onKeydown(o){const e=document.activeElement;if(!e||!e.closest('ion-accordion [slot="header"]'))return;const n=e.tagName==="ION-ACCORDION"?e:e.closest("ion-accordion");if(!n||n.closest("ion-accordion-group")!==this.el)return;const s=await this.getAccordions(),r=s.findIndex(a=>a===n);if(r===-1)return;let i;o.key==="ArrowDown"?i=this.findNextAccordion(s,r):o.key==="ArrowUp"?i=this.findPreviousAccordion(s,r):o.key==="Home"?i=s[0]:o.key==="End"&&(i=s[s.length-1]),i!==void 0&&i!==e&&i.focus()}async componentDidLoad(){this.disabled&&this.disabledChanged(),this.readonly&&this.readonlyChanged(),this.valueChanged()}setValue(o){const e=this.value=o;this.ionChange.emit({value:e})}async requestAccordionToggle(o,e){const{multiple:t,value:n,readonly:d,disabled:s}=this;if(!(d||s))if(e)if(t){const r=n??[],i=Array.isArray(r)?r:[r];i.find(l=>l===o)===void 0&&o!==void 0&&this.setValue([...i,o])}else this.setValue(o);else if(t){const r=n??[],i=Array.isArray(r)?r:[r];this.setValue(i.filter(a=>a!==o))}else this.setValue(void 0)}findNextAccordion(o,e){const t=o[e+1];return t===void 0?o[0]:t}findPreviousAccordion(o,e){const t=o[e-1];return t===void 0?o[o.length-1]:t}async getAccordions(){return Array.from(this.el.querySelectorAll(":scope > ion-accordion"))}render(){const{disabled:o,readonly:e,expand:t}=this,n=h(this);return p(g,{key:"ac2e26ac91c95d08172bd2b51daa7a711c21db9e",class:{[n]:!0,"accordion-group-disabled":o,"accordion-group-readonly":e,[`accordion-group-expand-${t}`]:!0},role:"presentation"},p("slot",{key:"444adc2af5730897eba57095da046d6bdb5af70f"}))}get el(){return x(this)}static get watchers(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}}};A.style={ios:b,md:v};export{A as ion_accordion_group};

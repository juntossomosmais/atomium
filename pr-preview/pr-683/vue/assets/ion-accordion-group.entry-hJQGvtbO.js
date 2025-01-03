import{r as u,c,b as g,h as l,H as h,g as x}from"./index-CGLWQT_g.js";import{p as f}from"./index-f5dbb989-By3l89LO.js";import"./vue.esm-bundler-D6ApT1Ci.js";import"./iframe-C3FYooTk.js";import"../sb-preview/runtime.js";const m=":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}",y=m,b=":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-end-end-radius:6px;border-end-start-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-start-start-radius:6px;border-start-end-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}",A=b,v=class{constructor(o){u(this,o),this.ionChange=c(this,"ionChange",7),this.ionValueChange=c(this,"ionValueChange",7),this.animated=!0,this.multiple=void 0,this.value=void 0,this.disabled=!1,this.readonly=!1,this.expand="compact"}valueChanged(){const{value:o,multiple:e}=this;!e&&Array.isArray(o)&&f(`ion-accordion-group was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".

  Value Passed: [${o.map(n=>`'${n}'`).join(", ")}]
`,this.el),this.ionValueChange.emit({value:this.value})}async disabledChanged(){const{disabled:o}=this,e=await this.getAccordions();for(const n of e)n.disabled=o}async readonlyChanged(){const{readonly:o}=this,e=await this.getAccordions();for(const n of e)n.readonly=o}async onKeydown(o){const e=document.activeElement;if(!e||!e.closest('ion-accordion [slot="header"]'))return;const i=e.tagName==="ION-ACCORDION"?e:e.closest("ion-accordion");if(!i||i.closest("ion-accordion-group")!==this.el)return;const s=await this.getAccordions(),r=s.findIndex(a=>a===i);if(r===-1)return;let t;o.key==="ArrowDown"?t=this.findNextAccordion(s,r):o.key==="ArrowUp"?t=this.findPreviousAccordion(s,r):o.key==="Home"?t=s[0]:o.key==="End"&&(t=s[s.length-1]),t!==void 0&&t!==e&&t.focus()}async componentDidLoad(){this.disabled&&this.disabledChanged(),this.readonly&&this.readonlyChanged(),this.valueChanged()}setValue(o){const e=this.value=o;this.ionChange.emit({value:e})}async requestAccordionToggle(o,e){const{multiple:n,value:i,readonly:d,disabled:s}=this;if(!(d||s))if(e)if(n){const r=i??[],t=Array.isArray(r)?r:[r];t.find(p=>p===o)===void 0&&o!==void 0&&this.setValue([...t,o])}else this.setValue(o);else if(n){const r=i??[],t=Array.isArray(r)?r:[r];this.setValue(t.filter(a=>a!==o))}else this.setValue(void 0)}findNextAccordion(o,e){const n=o[e+1];return n===void 0?o[0]:n}findPreviousAccordion(o,e){const n=o[e-1];return n===void 0?o[o.length-1]:n}async getAccordions(){return Array.from(this.el.querySelectorAll(":scope > ion-accordion"))}render(){const{disabled:o,readonly:e,expand:n}=this,i=g(this);return l(h,{key:"82f3e77066fabb4736638ee4c487ad56efd39c63",class:{[i]:!0,"accordion-group-disabled":o,"accordion-group-readonly":e,[`accordion-group-expand-${n}`]:!0},role:"presentation"},l("slot",{key:"a3c791ea887fc640b512f81d429be465ae902b3d"}))}get el(){return x(this)}static get watchers(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}}};v.style={ios:y,md:A};export{v as ion_accordion_group};

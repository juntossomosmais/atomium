import{r as u,c,e as g,h as l,H as h,a as f}from"./index-DZXQTcpR.js";import{p as x}from"./index-1e38abc5-CfLTl0tl.js";import"./iframe-8LX55Q3q.js";const m=":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}",y=m,b=":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-end-end-radius:6px;border-end-start-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-start-start-radius:6px;border-start-end-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}",A=b,v=class{constructor(e){u(this,e),this.ionChange=c(this,"ionChange",7),this.ionValueChange=c(this,"ionValueChange",7),this.animated=!0,this.multiple=void 0,this.value=void 0,this.disabled=!1,this.readonly=!1,this.expand="compact"}valueChanged(){const{value:e,multiple:o}=this;!o&&Array.isArray(e)&&x(`ion-accordion-group was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".

  Value Passed: [${e.map(n=>`'${n}'`).join(", ")}]
`,this.el),this.ionValueChange.emit({value:this.value})}async disabledChanged(){const{disabled:e}=this,o=await this.getAccordions();for(const n of o)n.disabled=e}async readonlyChanged(){const{readonly:e}=this,o=await this.getAccordions();for(const n of o)n.readonly=e}async onKeydown(e){const o=document.activeElement;if(!o||!o.closest('ion-accordion [slot="header"]'))return;const i=o.tagName==="ION-ACCORDION"?o:o.closest("ion-accordion");if(!i||i.closest("ion-accordion-group")!==this.el)return;const s=await this.getAccordions(),r=s.findIndex(a=>a===i);if(r===-1)return;let t;e.key==="ArrowDown"?t=this.findNextAccordion(s,r):e.key==="ArrowUp"?t=this.findPreviousAccordion(s,r):e.key==="Home"?t=s[0]:e.key==="End"&&(t=s[s.length-1]),t!==void 0&&t!==o&&t.focus()}async componentDidLoad(){this.disabled&&this.disabledChanged(),this.readonly&&this.readonlyChanged(),this.valueChanged()}setValue(e){const o=this.value=e;this.ionChange.emit({value:o})}async requestAccordionToggle(e,o){const{multiple:n,value:i,readonly:d,disabled:s}=this;if(!(d||s))if(o)if(n){const r=i??[],t=Array.isArray(r)?r:[r];t.find(p=>p===e)===void 0&&e!==void 0&&this.setValue([...t,e])}else this.setValue(e);else if(n){const r=i??[],t=Array.isArray(r)?r:[r];this.setValue(t.filter(a=>a!==e))}else this.setValue(void 0)}findNextAccordion(e,o){const n=e[o+1];return n===void 0?e[0]:n}findPreviousAccordion(e,o){const n=e[o-1];return n===void 0?e[e.length-1]:n}async getAccordions(){return Array.from(this.el.querySelectorAll(":scope > ion-accordion"))}render(){const{disabled:e,readonly:o,expand:n}=this,i=g(this);return l(h,{key:"82f3e77066fabb4736638ee4c487ad56efd39c63",class:{[i]:!0,"accordion-group-disabled":e,"accordion-group-readonly":o,[`accordion-group-expand-${n}`]:!0},role:"presentation"},l("slot",{key:"a3c791ea887fc640b512f81d429be465ae902b3d"}))}get el(){return f(this)}static get watchers(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}}};v.style={ios:y,md:A};export{v as ion_accordion_group};

import{r as P,b as B,h as l,H as O,g as A}from"./index-ZAJO6GxU.js";import{a as T,d as L}from"./helpers-079c01eb-D592YRe8.js";import{a as u}from"./index-f5dbb989-By3l89LO.js";import{c as N}from"./theme-516b22d6-DD5XIICl.js";import{n as _,t as $,L as S,N as p,M as k}from"./data-2c548fda-VTk9fWsy.js";import"./vue.esm-bundler-DLYZ4EJx.js";import"./iframe-CsQmtAh_.js";import"../sb-preview/runtime.js";const V=":host{display:flex;flex-wrap:wrap;align-items:center;justify-content:center}:host button{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:1rem;cursor:pointer;overflow:hidden;appearance:none}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}",j=V,z=":host{display:flex;flex-wrap:wrap;align-items:center;justify-content:center}:host button{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:1rem;cursor:pointer;overflow:hidden;appearance:none}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}",F=z,H=class{constructor(s){P(this,s),this.datetimeEl=null,this.overlayEl=null,this.getParsedDateValues=e=>e==null?[]:Array.isArray(e)?e:[e],this.setDateTimeText=()=>{var e,a,n,t,o;const{datetimeEl:c,datetimePresentation:m}=this;if(!c)return;const{value:w,locale:r,formatOptions:i,hourCycle:D,preferWheel:E,multiple:C,titleSelectedDatesFormatter:f}=c,h=this.getParsedDateValues(w),b=_(h.length>0?h:[$()]);if(!b)return;const d=b[0],g=S(r,D);switch(this.dateText=this.timeText=void 0,m){case"date-time":case"time-date":const x=p(r,d,(e=i==null?void 0:i.date)!==null&&e!==void 0?e:{month:"short",day:"numeric",year:"numeric"}),v=k(r,d,g,i==null?void 0:i.time);E?this.dateText=`${x} ${v}`:(this.dateText=x,this.timeText=v);break;case"date":if(C&&h.length!==1){let y=`${h.length} days`;if(f!==void 0)try{y=f(h)}catch(I){u("Exception in provided `titleSelectedDatesFormatter`: ",I)}this.dateText=y}else this.dateText=p(r,d,(a=i==null?void 0:i.date)!==null&&a!==void 0?a:{month:"short",day:"numeric",year:"numeric"});break;case"time":this.timeText=k(r,d,g,i==null?void 0:i.time);break;case"month-year":this.dateText=p(r,d,(n=i==null?void 0:i.date)!==null&&n!==void 0?n:{month:"long",year:"numeric"});break;case"month":this.dateText=p(r,d,(t=i==null?void 0:i.time)!==null&&t!==void 0?t:{month:"long"});break;case"year":this.dateText=p(r,d,(o=i==null?void 0:i.time)!==null&&o!==void 0?o:{year:"numeric"});break}},this.waitForDatetimeChanges=async()=>{const{datetimeEl:e}=this;return e?new Promise(a=>{T(e,"ionRender",a,{once:!0})}):Promise.resolve()},this.handleDateClick=async e=>{const{datetimeEl:a,datetimePresentation:n}=this;if(!a)return;let t=!1;switch(n){case"date-time":case"time-date":const o=a.presentation!=="date";!a.preferWheel&&o&&(a.presentation="date",t=!0);break}this.selectedButton="date",this.presentOverlay(e,t,this.dateTargetEl)},this.handleTimeClick=e=>{const{datetimeEl:a,datetimePresentation:n}=this;if(!a)return;let t=!1;switch(n){case"date-time":case"time-date":a.presentation!=="time"&&(a.presentation="time",t=!0);break}this.selectedButton="time",this.presentOverlay(e,t,this.timeTargetEl)},this.presentOverlay=async(e,a,n)=>{const{overlayEl:t}=this;t&&(t.tagName==="ION-POPOVER"?(a&&await this.waitForDatetimeChanges(),t.present(Object.assign(Object.assign({},e),{detail:{ionShadowTarget:n}}))):t.present())},this.datetimePresentation="date-time",this.dateText=void 0,this.timeText=void 0,this.datetimeActive=!1,this.selectedButton=void 0,this.color="primary",this.disabled=!1,this.datetime=void 0}async componentWillLoad(){const{datetime:s}=this;if(!s){u("An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.",this.el);return}const e=this.datetimeEl=document.getElementById(s);if(!e){u(`No ion-datetime instance found for ID '${s}'.`,this.el);return}if(e.tagName!=="ION-DATETIME"){u(`Expected an ion-datetime instance for ID '${s}' but received '${e.tagName.toLowerCase()}' instead.`,e);return}new IntersectionObserver(t=>{const o=t[0];this.datetimeActive=o.isIntersecting},{threshold:.01}).observe(e);const n=this.overlayEl=e.closest("ion-modal, ion-popover");n&&n.classList.add("ion-datetime-button-overlay"),L(e,()=>{const t=this.datetimePresentation=e.presentation||"date-time";switch(this.setDateTimeText(),T(e,"ionValueChange",this.setDateTimeText),t){case"date-time":case"date":case"month-year":case"month":case"year":this.selectedButton="date";break;case"time-date":case"time":this.selectedButton="time";break}})}render(){const{color:s,dateText:e,timeText:a,selectedButton:n,datetimeActive:t,disabled:o}=this,c=B(this);return l(O,{key:"ab6c21a4c185dee71c8f14cafad82e38831c68d0",class:N(s,{[c]:!0,[`${n}-active`]:t,"datetime-button-disabled":o})},e&&l("button",{key:"cbda6f3386c3714567a04b5a97a96c71d59822c8",class:"ion-activatable",id:"date-button","aria-expanded":t?"true":"false",onClick:this.handleDateClick,disabled:o,part:"native",ref:m=>this.dateTargetEl=m},l("slot",{key:"a00ff431512827bfef8c02982ef37099b2f21508",name:"date-target"},e),c==="md"&&l("ion-ripple-effect",{key:"67935989628a2ed0492edb813fb0475bfd88abe7"})),a&&l("button",{key:"4207c94de5bece91b8388332e0192d1756403e62",class:"ion-activatable",id:"time-button","aria-expanded":t?"true":"false",onClick:this.handleTimeClick,disabled:o,part:"native",ref:m=>this.timeTargetEl=m},l("slot",{key:"9ffa7ef4417571933bd1757950ec805c49704759",name:"time-target"},a),c==="md"&&l("ion-ripple-effect",{key:"fbcad00cf828c9719074d1d06f4e13246b28903e"})))}get el(){return A(this)}};H.style={ios:j,md:F};export{H as ion_datetime_button};

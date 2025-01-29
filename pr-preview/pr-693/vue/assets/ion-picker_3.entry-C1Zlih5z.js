import{r as k,c as w,h as a,H as v,g as y,i as C,b as M}from"./index-DP8BYyHe.js";import{g as m,r as I,c as E}from"./helpers-b14eeb70-DAoIUSfU.js";import{d as A}from"./index-d9a82e80-B2PaWDFh.js";import{a as O,b as P,c as L}from"./haptic-1b03e74b-CWmRyONE.js";import{c as S}from"./theme-516b22d6-DD5XIICl.js";import"./vue.esm-bundler-D6ApT1Ci.js";import"./iframe-DR7eZa3e.js";import"../sb-preview/runtime.js";import"./capacitor-74355484-sCloY8M9.js";const N=":host{display:flex;position:relative;align-items:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}:host .picker-before{inset-inline-start:0}:host .picker-after{top:116px;height:84px}:host .picker-after{inset-inline-start:0}:host .picker-highlight{border-radius:var(--highlight-border-radius, 8px);left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;transform:translateY(-50%);background:var(--highlight-background);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column:first-of-type){text-align:start}:host ::slotted(ion-picker-column:last-of-type){text-align:end}:host ::slotted(ion-picker-column:only-child){text-align:center}:host .picker-before{background:linear-gradient(to bottom, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8) 100%)}:host .picker-after{background:linear-gradient(to top, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8) 100%)}:host .picker-highlight{background:var(--highlight-background, var(--ion-color-step-150, var(--ion-background-color-step-150, #eeeeef)))}",V=N,T=":host{display:flex;position:relative;align-items:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}:host .picker-before{inset-inline-start:0}:host .picker-after{top:116px;height:84px}:host .picker-after{inset-inline-start:0}:host .picker-highlight{border-radius:var(--highlight-border-radius, 8px);left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;transform:translateY(-50%);background:var(--highlight-background);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column:first-of-type){text-align:start}:host ::slotted(ion-picker-column:last-of-type){text-align:end}:host ::slotted(ion-picker-column:only-child){text-align:center}:host .picker-before{background:linear-gradient(to bottom, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0) 90%)}:host .picker-after{background:linear-gradient(to top, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 30%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0) 90%)}",K=T,z=class{constructor(n){k(this,n),this.ionInputModeChange=w(this,"ionInputModeChange",7),this.useInputMode=!1,this.isInHighlightBounds=e=>{const{highlightEl:t}=this;if(!t)return!1;const i=t.getBoundingClientRect(),o=e.clientX<i.left||e.clientX>i.right,r=e.clientY<i.top||e.clientY>i.bottom;return!(o||r)},this.onFocusOut=e=>{const{relatedTarget:t}=e;(!t||t.tagName!=="ION-PICKER-COLUMN"&&t!==this.inputEl)&&this.exitInputMode()},this.onFocusIn=e=>{const{target:t}=e;if(t.tagName==="ION-PICKER-COLUMN"&&!this.actionOnClick){const i=t;i.numericInput?this.enterInputMode(i,!1):this.exitInputMode()}},this.onClick=()=>{const{actionOnClick:e}=this;e&&(e(),this.actionOnClick=void 0)},this.onPointerDown=e=>{const{useInputMode:t,inputModeColumn:i,el:o}=this;if(this.isInHighlightBounds(e)){if(t)e.target.tagName==="ION-PICKER-COLUMN"?i&&i===e.target?this.actionOnClick=()=>{this.enterInputMode()}:this.actionOnClick=()=>{this.enterInputMode(e.target)}:this.actionOnClick=()=>{this.exitInputMode()};else{const s=o.querySelectorAll("ion-picker-column.picker-column-numeric-input").length===1?e.target:void 0;this.actionOnClick=()=>{this.enterInputMode(s)}}return}this.actionOnClick=()=>{this.exitInputMode()}},this.enterInputMode=(e,t=!0)=>{const{inputEl:i,el:o}=this;!i||!o.querySelector("ion-picker-column.picker-column-numeric-input")||(this.useInputMode=!0,this.inputModeColumn=e,t?(this.destroyKeypressListener&&(this.destroyKeypressListener(),this.destroyKeypressListener=void 0),i.focus()):(o.addEventListener("keypress",this.onKeyPress),this.destroyKeypressListener=()=>{o.removeEventListener("keypress",this.onKeyPress)}),this.emitInputModeChange())},this.onKeyPress=e=>{const{inputEl:t}=this;if(!t)return;const i=parseInt(e.key,10);Number.isNaN(i)||(t.value+=e.key,this.onInputChange())},this.selectSingleColumn=()=>{const{inputEl:e,inputModeColumn:t,singleColumnSearchTimeout:i}=this;if(!e||!t)return;const o=Array.from(t.querySelectorAll("ion-picker-column-option")).filter(s=>s.disabled!==!0);if(i&&clearTimeout(i),this.singleColumnSearchTimeout=setTimeout(()=>{e.value="",this.singleColumnSearchTimeout=void 0},1e3),e.value.length>=3){const s=e.value.length-2,l=e.value.substring(s);e.value=l,this.selectSingleColumn();return}const r=o.find(({textContent:s})=>s.replace(/^0+(?=[1-9])|0+(?=0$)/,"")===e.value);if(r){t.setValue(r.value);return}if(e.value.length===2){const s=e.value.substring(e.value.length-1);e.value=s,this.selectSingleColumn()}},this.searchColumn=(e,t,i="start")=>{const o=i==="start"?/^0+/:/0$/,r=Array.from(e.querySelectorAll("ion-picker-column-option")).find(s=>s.disabled!==!0&&s.textContent.replace(o,"")===t);r&&e.setValue(r.value)},this.selectMultiColumn=()=>{const{inputEl:e,el:t}=this;if(!e)return;const i=Array.from(t.querySelectorAll("ion-picker-column")).filter(c=>c.numericInput),o=i[0],r=i[1];let s=e.value,l;switch(s.length){case 1:this.searchColumn(o,s);break;case 2:const c=e.value.substring(0,1);s=c==="0"||c==="1"?e.value:c,this.searchColumn(o,s),s.length===1&&(l=e.value.substring(e.value.length-1),this.searchColumn(r,l,"end"));break;case 3:const d=e.value.substring(0,1);s=d==="0"||d==="1"?e.value.substring(0,2):d,this.searchColumn(o,s),l=s.length===1?e.value.substring(1):e.value.substring(2),this.searchColumn(r,l,"end");break;case 4:const h=e.value.substring(0,1);s=h==="0"||h==="1"?e.value.substring(0,2):h,this.searchColumn(o,s);const p=s.length===1?e.value.substring(1,e.value.length):e.value.substring(2,e.value.length);this.searchColumn(r,p,"end");break;default:const x=e.value.length-4,b=e.value.substring(x);e.value=b,this.selectMultiColumn();break}},this.onInputChange=()=>{const{useInputMode:e,inputEl:t,inputModeColumn:i}=this;!e||!t||(i?this.selectSingleColumn():this.selectMultiColumn())},this.emitInputModeChange=()=>{const{useInputMode:e,inputModeColumn:t}=this;this.ionInputModeChange.emit({useInputMode:e,inputModeColumn:t})}}preventTouchStartPropagation(n){n.stopPropagation()}componentWillLoad(){m(this.el).addEventListener("focusin",this.onFocusIn),m(this.el).addEventListener("focusout",this.onFocusOut)}async exitInputMode(){const{inputEl:n,useInputMode:e}=this;!e||!n||(this.useInputMode=!1,this.inputModeColumn=void 0,n.blur(),n.value="",this.destroyKeypressListener&&(this.destroyKeypressListener(),this.destroyKeypressListener=void 0),this.emitInputModeChange())}render(){return a(v,{key:"f92214a09dc85b65873676f40fde2b802960e704",onPointerDown:n=>this.onPointerDown(n),onClick:()=>this.onClick()},a("input",{key:"6da37f75aca4ea1c9cb3bc733ebda2116279f313","aria-hidden":"true",tabindex:-1,inputmode:"numeric",type:"number",onKeyDown:n=>{var e;n.key==="Enter"&&((e=this.inputEl)===null||e===void 0||e.blur())},ref:n=>this.inputEl=n,onInput:()=>this.onInputChange(),onBlur:()=>this.exitInputMode()}),a("div",{key:"298e99d83dd3f5bf2798150bab0bb4024af472fa",class:"picker-before"}),a("div",{key:"ea578f04eb562a4dc6d6cc92de133dcb9fb7f42a",class:"picker-after"}),a("div",{key:"84567824956dfe967992a629904836ba8b75b3ec",class:"picker-highlight",ref:n=>this.highlightEl=n}),a("slot",{key:"df81f8fb90e1f649b608328034528f5c31c70c3b"}))}get el(){return y(this)}};z.style={ios:V,md:K};const F=":host{display:flex;position:relative;align-items:center;justify-content:center;max-width:100%;height:200px;font-size:22px;text-align:center}.assistive-focusable{left:0;right:0;top:0;bottom:0;position:absolute;z-index:1;pointer-events:none}.assistive-focusable:focus{outline:none}.picker-opts{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;min-width:26px;max-height:200px;outline:none;text-align:inherit;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none}.picker-item-empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.picker-opts::-webkit-scrollbar{display:none}::slotted(ion-picker-column-option){display:block;scroll-snap-align:center}.picker-item-empty,:host(:not([disabled])) ::slotted(ion-picker-column-option.option-disabled){scroll-snap-align:none}::slotted([slot=prefix]),::slotted([slot=suffix]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}::slotted([slot=prefix]){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;justify-content:end}::slotted([slot=suffix]){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;justify-content:start}:host(.picker-column-disabled) .picker-opts{overflow-y:hidden}:host(.picker-column-disabled) ::slotted(ion-picker-column-option){cursor:default;opacity:0.4;pointer-events:none}@media (any-hover: hover){:host(:focus) .picker-opts{outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}",R=F,_=class{constructor(n){k(this,n),this.ionChange=w(this,"ionChange",7),this.isScrolling=!1,this.isColumnVisible=!1,this.canExitInputMode=!0,this.updateValueTextOnScroll=!1,this.centerPickerItemInView=(e,t=!0,i=!0)=>{const{isColumnVisible:o,scrollEl:r}=this;if(o&&r){const s=e.offsetTop-3*e.clientHeight+e.clientHeight/2;r.scrollTop!==s&&(this.canExitInputMode=i,this.updateValueTextOnScroll=!1,r.scroll({top:s,left:0,behavior:t?"smooth":void 0}))}},this.setPickerItemActiveState=(e,t)=>{t?e.classList.add(g):e.classList.remove(g)},this.inputModeChange=e=>{if(!this.numericInput)return;const{useInputMode:t,inputModeColumn:i}=e.detail,o=i===void 0||i===this.el;if(!t||!o){this.setInputModeActive(!1);return}this.setInputModeActive(!0)},this.setInputModeActive=e=>{if(this.isScrolling){this.scrollEndCallback=()=>{this.isActive=e};return}this.isActive=e},this.initializeScrollListener=()=>{const e=C("ios"),{el:t,scrollEl:i}=this;let o,r=this.activeItem;const s=()=>{I(()=>{var l;if(!i)return;o&&(clearTimeout(o),o=void 0),this.isScrolling||(e&&O(),this.isScrolling=!0);const c=i.getBoundingClientRect(),d=c.x+c.width/2,h=c.y+c.height/2,p=t.getRootNode(),b=p instanceof ShadowRoot?p:A;if(b===void 0)return;const u=b.elementsFromPoint(d,h).find(f=>f.tagName==="ION-PICKER-COLUMN-OPTION");r!==void 0&&this.setPickerItemActiveState(r,!1),!(u===void 0||u.disabled)&&(u!==r&&(e&&P(),this.canExitInputMode&&this.exitInputMode()),r=u,this.setPickerItemActiveState(u,!0),this.updateValueTextOnScroll&&((l=this.assistiveFocusable)===null||l===void 0||l.setAttribute("aria-valuetext",this.getOptionValueText(u))),o=setTimeout(()=>{this.isScrolling=!1,this.updateValueTextOnScroll=!0,e&&L();const{scrollEndCallback:f}=this;f&&(f(),this.scrollEndCallback=void 0),this.canExitInputMode=!0,this.setValue(u.value)},250))})};I(()=>{i&&(i.addEventListener("scroll",s),this.destroyScrollListener=()=>{i.removeEventListener("scroll",s)})})},this.exitInputMode=()=>{const{parentEl:e}=this;e!=null&&(e.exitInputMode(),this.el.classList.remove("picker-column-active"))},this.findNextOption=(e=1)=>{const{activeItem:t}=this;if(!t)return null;let i=t,o=t.nextElementSibling;for(;o!=null;){if(e>0&&e--,o.tagName==="ION-PICKER-COLUMN-OPTION"&&!o.disabled&&e===0)return o;i=o,o=o.nextElementSibling}return i},this.findPreviousOption=(e=1)=>{const{activeItem:t}=this;if(!t)return null;let i=t,o=t.previousElementSibling;for(;o!=null;){if(e>0&&e--,o.tagName==="ION-PICKER-COLUMN-OPTION"&&!o.disabled&&e===0)return o;i=o,o=o.previousElementSibling}return i},this.onKeyDown=e=>{const t=C("mobile");let i=null;switch(e.key){case"ArrowDown":i=t?this.findPreviousOption():this.findNextOption();break;case"ArrowUp":i=t?this.findNextOption():this.findPreviousOption();break;case"PageUp":i=t?this.findNextOption(5):this.findPreviousOption(5);break;case"PageDown":i=t?this.findPreviousOption(5):this.findNextOption(5);break;case"Home":i=this.el.querySelector("ion-picker-column-option:first-of-type");break;case"End":i=this.el.querySelector("ion-picker-column-option:last-of-type");break}i!==null&&(this.setValue(i.value),e.preventDefault())},this.getOptionValueText=e=>{var t;return e?(t=e.getAttribute("aria-label"))!==null&&t!==void 0?t:e.innerText:""},this.renderAssistiveFocusable=()=>{const{activeItem:e}=this,t=this.getOptionValueText(e);return a("div",{ref:i=>this.assistiveFocusable=i,class:"assistive-focusable",role:"slider",tabindex:this.disabled?void 0:0,"aria-label":this.ariaLabel,"aria-valuemin":0,"aria-valuemax":0,"aria-valuenow":0,"aria-valuetext":t,"aria-orientation":"vertical",onKeyDown:i=>this.onKeyDown(i)})},this.ariaLabel=null,this.isActive=!1,this.disabled=!1,this.value=void 0,this.color="primary",this.numericInput=!1}ariaLabelChanged(n){this.ariaLabel=n}valueChange(){this.isColumnVisible&&this.scrollActiveItemIntoView(!0)}componentWillLoad(){const n=this.parentEl=this.el.closest("ion-picker"),e=t=>{if(t[t.length-1].isIntersecting){const{activeItem:o,el:r}=this;this.isColumnVisible=!0;const s=m(r).querySelector(`.${g}`);s&&this.setPickerItemActiveState(s,!1),this.scrollActiveItemIntoView(),o&&this.setPickerItemActiveState(o,!0),this.initializeScrollListener()}else this.isColumnVisible=!1,this.destroyScrollListener&&(this.destroyScrollListener(),this.destroyScrollListener=void 0)};new IntersectionObserver(e,{threshold:.001,root:this.parentEl}).observe(this.el),n!==null&&n.addEventListener("ionInputModeChange",t=>this.inputModeChange(t))}componentDidRender(){const{el:n,activeItem:e,isColumnVisible:t,value:i}=this;if(t&&!e){const o=n.querySelector("ion-picker-column-option");o!==null&&o.value!==i&&this.setValue(o.value)}}async scrollActiveItemIntoView(n=!1){const e=this.activeItem;e&&this.centerPickerItemInView(e,n,!1)}async setValue(n){this.disabled===!0||this.value===n||(this.value=n,this.ionChange.emit({value:n}))}async setFocus(){this.assistiveFocusable&&this.assistiveFocusable.focus()}connectedCallback(){var n;this.ariaLabel=(n=this.el.getAttribute("aria-label"))!==null&&n!==void 0?n:"Select a value"}get activeItem(){const{value:n}=this;return Array.from(this.el.querySelectorAll("ion-picker-column-option")).find(t=>!this.disabled&&t.disabled?!1:t.value===n)}render(){const{color:n,disabled:e,isActive:t,numericInput:i}=this,o=M(this);return a(v,{key:"a221dc10f1eb7c41637a16d2c7167c16939822fd",class:S(n,{[o]:!0,"picker-column-active":t,"picker-column-numeric-input":i,"picker-column-disabled":e})},this.renderAssistiveFocusable(),a("slot",{key:"81b0656f606856f3dc0a657bf167d81a5011405e",name:"prefix"}),a("div",{key:"71b9de67c04150255dd66592601c9d926db0c31c","aria-hidden":"true",class:"picker-opts",ref:r=>{this.scrollEl=r},tabIndex:-1},a("div",{key:"ebdc2f08c83db0cf17b4be29f28fcb00f529601e",class:"picker-item-empty","aria-hidden":"true"}," "),a("div",{key:"04ab56fcb8e6a7d6af00204c4560feb99ff34a56",class:"picker-item-empty","aria-hidden":"true"}," "),a("div",{key:"6cf8f538903faf0fe1e4130f3eaf7b4e2e17cb52",class:"picker-item-empty","aria-hidden":"true"}," "),a("slot",{key:"1cc392307b70c576be5b81b5226ceba735957f0f"}),a("div",{key:"23e3f28e2a99b9aa8b7c8f68ad9583e3ca63e9e2",class:"picker-item-empty","aria-hidden":"true"}," "),a("div",{key:"8a0563f09780c3116af0caebe4f40587ec1f041f",class:"picker-item-empty","aria-hidden":"true"}," "),a("div",{key:"13207e248fc0009f37e0c90a3ee2bac2f130b856",class:"picker-item-empty","aria-hidden":"true"}," ")),a("slot",{key:"55ecf2ab5f214f936c2468cbdb7952daf89416b8",name:"suffix"}))}get el(){return y(this)}static get watchers(){return{"aria-label":["ariaLabelChanged"],value:["valueChange"]}}},g="option-active";_.style=R;const D="button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}",q=D,H="button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}:host(.option-active){color:var(--ion-color-base)}",U=H,Y=class{constructor(n){k(this,n),this.pickerColumn=null,this.ariaLabel=null,this.disabled=!1,this.value=void 0,this.color="primary"}onAriaLabelChange(n){this.ariaLabel=n}componentWillLoad(){const n=E(this.el,["aria-label"]);this.ariaLabel=n["aria-label"]||null}connectedCallback(){this.pickerColumn=this.el.closest("ion-picker-column")}disconnectedCallback(){this.pickerColumn=null}componentDidLoad(){const{pickerColumn:n}=this;n!==null&&n.scrollActiveItemIntoView()}onClick(){const{pickerColumn:n}=this;n!==null&&n.setValue(this.value)}render(){const{color:n,disabled:e,ariaLabel:t}=this,i=M(this);return a(v,{key:"c743c6ef44bb9f765cc15b3b5d2864de6520203a",class:S(n,{[i]:!0,"option-disabled":e})},a("button",{key:"4c3d9eb245c52b2c007f727e145cfb55759bd7a9",tabindex:"-1","aria-label":t,disabled:e,onClick:()=>this.onClick()},a("slot",{key:"4c907d2187cbe9d5941e27f2b12578e2b7271461"})))}get el(){return y(this)}static get watchers(){return{"aria-label":["onAriaLabelChange"]}}};Y.style={ios:q,md:U};export{z as ion_picker,_ as ion_picker_column,Y as ion_picker_column_option};

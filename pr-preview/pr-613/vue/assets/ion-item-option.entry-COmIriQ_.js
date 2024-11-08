import{r as s,b as d,h as t,H as l,g as c}from"./index-Cf-FVlYa.js";import{c as p}from"./theme-516b22d6-DD5XIICl.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-C544D9n9.js";import"../sb-preview/runtime.js";const m=":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;appearance:none;box-sizing:border-box}.button-inner{display:flex;flex-flow:column nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:flex;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%}::slotted(*){flex-shrink:0}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}:host(.item-option-expandable){flex-shrink:0;transition-duration:0;transition-property:none;transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:clamp(16px, 1rem, 35.2px)}:host(.ion-activated){background:var(--ion-color-primary-shade, #3171e0)}:host(.ion-color.ion-activated){background:var(--ion-color-shade)}",b=m,f=":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;appearance:none;box-sizing:border-box}.button-inner{display:flex;flex-flow:column nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:flex;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%}::slotted(*){flex-shrink:0}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}:host(.item-option-expandable){flex-shrink:0;transition-duration:0;transition-property:none;transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:0.875rem;font-weight:500;text-transform:uppercase}",g=f,h=class{constructor(n){s(this,n),this.onClick=i=>{i.target.closest("ion-item-option")&&i.preventDefault()},this.color=void 0,this.disabled=!1,this.download=void 0,this.expandable=!1,this.href=void 0,this.rel=void 0,this.target=void 0,this.type="button"}render(){const{disabled:n,expandable:i,href:e}=this,o=e===void 0?"button":"a",r=d(this),a=o==="button"?{type:this.type}:{download:this.download,href:this.href,target:this.target};return t(l,{key:"763c3a7571b143d1068d85103ccab403bc48abae",onClick:this.onClick,class:p(this.color,{[r]:!0,"item-option-disabled":n,"item-option-expandable":i,"ion-activatable":!0})},t(o,Object.assign({key:"cb199c2ccd38abaad3460f184af3093bf08546cc"},a,{class:"button-native",part:"native",disabled:n}),t("span",{key:"f3ce9f1d343890c6f55f2609127f1e5113a2eedf",class:"button-inner"},t("slot",{key:"cd9434883c0bdb4129fb6f49970d49710653a09a",name:"top"}),t("div",{key:"764529c5f4b3d82105ce55885e8f121a91e8bc4a",class:"horizontal-wrapper"},t("slot",{key:"5bbd7b9ed9f35c8bf422c3134a1a097e174ad6df",name:"start"}),t("slot",{key:"1e70a781cdf4ffcefb1dea70abe43655d7857c4b",name:"icon-only"}),t("slot",{key:"c3205e9b1577a56786c10a8b5b420010b5fe53fc"}),t("slot",{key:"6bae6c98cd8d8526a203af47ca8e83753e1e1cb6",name:"end"})),t("slot",{key:"466cc32cdf9cbbdbb58e4b29144215cf2984c0d6",name:"bottom"})),r==="md"&&t("ion-ripple-effect",{key:"b5c54b801008b307ca8f718a41101be3e8d1d938"})))}get el(){return c(this)}};h.style={ios:b,md:g};export{h as ion_item_option};
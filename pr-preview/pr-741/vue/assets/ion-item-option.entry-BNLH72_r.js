import{r as s,b as d,h as t,H as l,g as c}from"./index-Bu8Hsbg3.js";import{c as p}from"./theme-516b22d6-DD5XIICl.js";import"./vue.esm-bundler-UQm0beuB.js";import"./iframe-87RGVhWz.js";const f=":host{--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;appearance:none;box-sizing:border-box}.button-inner{display:flex;flex-flow:column nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:flex;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%}::slotted(*){flex-shrink:0}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}:host(.item-option-expandable){flex-shrink:0;transition-duration:0;transition-property:none;transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:clamp(16px, 1rem, 35.2px)}:host(.ion-activated){background:var(--ion-color-primary-shade, #004acd)}:host(.ion-color.ion-activated){background:var(--ion-color-shade)}",m=f,b=":host{--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;appearance:none;box-sizing:border-box}.button-inner{display:flex;flex-flow:column nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:flex;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%}::slotted(*){flex-shrink:0}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}:host(.item-option-expandable){flex-shrink:0;transition-duration:0;transition-property:none;transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:0.875rem;font-weight:500;text-transform:uppercase}",g=b,h=class{constructor(n){s(this,n),this.onClick=e=>{e.target.closest("ion-item-option")&&e.preventDefault()},this.color=void 0,this.disabled=!1,this.download=void 0,this.expandable=!1,this.href=void 0,this.rel=void 0,this.target=void 0,this.type="button"}render(){const{disabled:n,expandable:e,href:i}=this,o=i===void 0?"button":"a",r=d(this),a=o==="button"?{type:this.type}:{download:this.download,href:this.href,target:this.target};return t(l,{key:"89310624997821858c1abde60c0ffb142ca466e0",onClick:this.onClick,class:p(this.color,{[r]:!0,"item-option-disabled":n,"item-option-expandable":e,"ion-activatable":!0})},t(o,Object.assign({key:"e4dfbb3048eed03a7f7e84c6f75545e0ca9b45fb"},a,{class:"button-native",part:"native",disabled:n}),t("span",{key:"dffcf437fbdc15f2e7a19e60a015e90c73c8377d",class:"button-inner"},t("slot",{key:"48a23512e0601e062118d8b2c46c8bb96f25509f",name:"top"}),t("div",{key:"952a9a9aa3a476aa1f4408d7e208bf9e916b8c30",class:"horizontal-wrapper"},t("slot",{key:"f8d18a61c1ecec4a22a55443cf72bbc51383b64f",name:"start"}),t("slot",{key:"1f9f219e6f879d2e0bf6d80cf0d3f518eb14ce0e",name:"icon-only"}),t("slot",{key:"a55adcdbe68131e5b1855c2dd45dd9454ab544fb"}),t("slot",{key:"3c4c85a4fbb7efc797d8bc5adf6d238da022ff9f",name:"end"})),t("slot",{key:"503c7e4b306745c523f57f24399ea06ba9b1e21d",name:"bottom"})),r==="md"&&t("ion-ripple-effect",{key:"b0e270b0c4f3ff9f9b6d74bad12a9278d7633226"})))}get el(){return c(this)}};h.style={ios:m,md:g};export{h as ion_item_option};

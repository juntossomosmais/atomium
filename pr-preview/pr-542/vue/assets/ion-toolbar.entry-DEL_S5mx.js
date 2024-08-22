import{r as c,f as b,b as g,h as r,H as p,g as h}from"./index-DkOFMlv7.js";import{c as f,h as m}from"./theme-516b22d6-DD5XIICl.js";import"./vue.esm-bundler-Dk4JuX4g.js";import"./iframe-PFBaJZ3G.js";import"../sb-preview/runtime.js";const v=":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;flex-direction:row;align-items:center;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{flex:1;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){order:2}::slotted([slot=secondary]){order:3}::slotted([slot=primary]){order:5;text-align:end}::slotted([slot=end]){order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{flex-wrap:wrap;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{flex:1;order:8;min-width:100%}",y=v,x=":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;flex-direction:row;align-items:center;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{flex:1;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){-webkit-margin-start:4px;margin-inline-start:4px}::slotted(.buttons-last-slot){-webkit-margin-end:4px;margin-inline-end:4px}::slotted([slot=start]){order:2}::slotted([slot=secondary]){order:4}::slotted([slot=primary]){order:5;text-align:end}::slotted([slot=end]){order:6;text-align:end}",u=x,k=class{constructor(o){c(this,o),this.childrenStyles=new Map,this.color=void 0}componentWillLoad(){const o=Array.from(this.el.querySelectorAll("ion-buttons")),a=o.find(t=>t.slot==="start");a&&a.classList.add("buttons-first-slot");const e=o.reverse(),n=e.find(t=>t.slot==="end")||e.find(t=>t.slot==="primary")||e.find(t=>t.slot==="secondary");n&&n.classList.add("buttons-last-slot")}childrenStyle(o){o.stopPropagation();const a=o.target.tagName,e=o.detail,n={},t=this.childrenStyles.get(a)||{};let i=!1;Object.keys(e).forEach(d=>{const s=`toolbar-${d}`,l=e[d];l!==t[s]&&(i=!0),l&&(n[s]=!0)}),i&&(this.childrenStyles.set(a,n),b(this))}render(){const o=g(this),a={};return this.childrenStyles.forEach(e=>{Object.assign(a,e)}),r(p,{key:"8907ed75fbb2b1dced55c481bba6363f1dca815b",class:Object.assign(Object.assign({},a),f(this.color,{[o]:!0,"in-toolbar":m("ion-toolbar",this.el)}))},r("div",{key:"6bfa09b08d6517f0d680f53b739854cecd631bc9",class:"toolbar-background"}),r("div",{key:"1531bd6dd9e0a5843309bba854b744c453037ad0",class:"toolbar-container"},r("slot",{key:"881b41697d386eae651b019128573f0fa432cd33",name:"start"}),r("slot",{key:"64a284e6eae5311ac3125dfadb4bb32bdba9d089",name:"secondary"}),r("div",{key:"c1f47503563b38084b27d7ba54f17ec478482b94",class:"toolbar-content"},r("slot",{key:"9a85acfba72252705619ae32acae9c14f81aa57d"})),r("slot",{key:"89e08bd761dc6940dbebc5d06f5f080af204aa72",name:"primary"}),r("slot",{key:"a1cb7d95627f8a3d24dd4b9c11718fc164f53674",name:"end"})))}get el(){return h(this)}};k.style={ios:y,md:u};export{k as ion_toolbar};

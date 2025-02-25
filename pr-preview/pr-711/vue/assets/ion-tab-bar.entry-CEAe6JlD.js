import{r as i,c as a,b as c,h as e,H as b,g as d}from"./index-Du7OOsE_.js";import{c as l}from"./keyboard-controller-a1183c77-Cj-lwF5_.js";import{c as u}from"./theme-516b22d6-DD5XIICl.js";import"./keyboard-6ae239bc-CQr78-yc.js";import"./vue.esm-bundler-cJVerQom.js";import"./iframe-DyAvA6JD.js";import"./index-d9a82e80-B2PaWDFh.js";import"./capacitor-74355484-sCloY8M9.js";const g=":host{display:flex;align-items:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;user-select:none;z-index:10;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, var(--ion-background-color-step-50, #f7f7f7)));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.2)))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, var(--ion-text-color-step-400, #666666)));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #0054e9));height:50px}@supports (backdrop-filter: blur(0)){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}",h=g,p=":host{display:flex;align-items:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;user-select:none;z-index:10;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.07)))));--color:var(--ion-tab-bar-color, var(--ion-color-step-650, var(--ion-text-color-step-350, #595959)));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #0054e9));height:56px}",v=p,f=class{constructor(o){i(this,o),this.ionTabBarChanged=a(this,"ionTabBarChanged",7),this.ionTabBarLoaded=a(this,"ionTabBarLoaded",7),this.keyboardCtrl=null,this.keyboardVisible=!1,this.color=void 0,this.selectedTab=void 0,this.translucent=!1}selectedTabChanged(){this.selectedTab!==void 0&&this.ionTabBarChanged.emit({tab:this.selectedTab})}componentWillLoad(){this.selectedTabChanged()}async connectedCallback(){this.keyboardCtrl=await l(async(o,t)=>{o===!1&&t!==void 0&&await t,this.keyboardVisible=o})}disconnectedCallback(){this.keyboardCtrl&&this.keyboardCtrl.destroy()}componentDidLoad(){this.ionTabBarLoaded.emit()}render(){const{color:o,translucent:t,keyboardVisible:n}=this,s=c(this),r=n&&this.el.getAttribute("slot")!=="top";return e(b,{key:"a87fd2ea5df053705a37ea7ffec043e75c4a9907",role:"tablist","aria-hidden":r?"true":null,class:u(o,{[s]:!0,"tab-bar-translucent":t,"tab-bar-hidden":r})},e("slot",{key:"81a6223299b6cab29d7ddced590e9152e2b3ded0"}))}get el(){return d(this)}static get watchers(){return{selectedTab:["selectedTabChanged"]}}};f.style={ios:h,md:v};export{f as ion_tab_bar};

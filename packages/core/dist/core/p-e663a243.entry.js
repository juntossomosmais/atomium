import{r as i,h as t,H as r,e as o}from"./p-ca167607.js";import{g as n}from"./p-7a15c957.js";import{c as e}from"./p-0c75f9f6.js";import{o as a,c as s}from"./p-ff4ddc55.js";const d=":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-600, #666666)));-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);font-size:14px;box-shadow:0 4px 16px rgba(0, 0, 0, 0.12)}:host(.ion-activated){transform:scale3d(0.97, 0.97, 1)}";const c=":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-550, #737373)));-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:10px;margin-bottom:10px;border-radius:4px;font-size:14px;box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}";const l=class{constructor(t){i(this,t);this.inheritedAriaAttributes={};this.color=undefined;this.button=false;this.type="button";this.disabled=false;this.download=undefined;this.href=undefined;this.rel=undefined;this.routerDirection="forward";this.routerAnimation=undefined;this.target=undefined}componentWillLoad(){this.inheritedAriaAttributes=e(this.el,["aria-label"])}isClickable(){return this.href!==undefined||this.button}renderCard(i){const r=this.isClickable();if(!r){return[t("slot",null)]}const{href:o,routerAnimation:n,routerDirection:e,inheritedAriaAttributes:s}=this;const d=r?o===undefined?"button":"a":"div";const c=d==="button"?{type:this.type}:{download:this.download,href:this.href,rel:this.rel,target:this.target};return t(d,Object.assign({},c,s,{class:"card-native",part:"native",disabled:this.disabled,onClick:i=>a(o,i,e,n)}),t("slot",null),r&&i==="md"&&t("ion-ripple-effect",null))}render(){const i=n(this);return t(r,{class:s(this.color,{[i]:true,"card-disabled":this.disabled,"ion-activatable":this.isClickable()})},this.renderCard(i))}get el(){return o(this)}};l.style={ios:d,md:c};export{l as ion_card};
//# sourceMappingURL=p-e663a243.entry.js.map
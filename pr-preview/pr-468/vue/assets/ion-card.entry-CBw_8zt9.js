import{r as c,h as r,b as h,H as b,g as p}from"./index-Dmbs_eUD.js";import{c as g}from"./helpers-079c01eb-D592YRe8.js";import{o as f,c as m}from"./theme-516b22d6-DD5XIICl.js";import"./vue.esm-bundler-Cotndkpi.js";import"./iframe-CQFnB7GW.js";import"../sb-preview/runtime.js";const u=":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-600, #666666)));-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);font-size:0.875rem;box-shadow:0 4px 16px rgba(0, 0, 0, 0.12)}:host(.ion-activated){transform:scale3d(0.97, 0.97, 1)}",v=u,x=":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-550, #737373)));-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:10px;margin-bottom:10px;border-radius:4px;font-size:0.875rem;box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}",k=x,w=class{constructor(t){c(this,t),this.inheritedAriaAttributes={},this.color=void 0,this.button=!1,this.type="button",this.disabled=!1,this.download=void 0,this.href=void 0,this.rel=void 0,this.routerDirection="forward",this.routerAnimation=void 0,this.target=void 0}componentWillLoad(){this.inheritedAriaAttributes=g(this.el,["aria-label"])}isClickable(){return this.href!==void 0||this.button}renderCard(t){const i=this.isClickable();if(!i)return[r("slot",null)];const{href:o,routerAnimation:n,routerDirection:a,inheritedAriaAttributes:s}=this,e=i?o===void 0?"button":"a":"div",d=e==="button"?{type:this.type}:{download:this.download,href:this.href,rel:this.rel,target:this.target};return r(e,Object.assign({},d,s,{class:"card-native",part:"native",disabled:this.disabled,onClick:l=>f(o,l,a,n)}),r("slot",null),i&&t==="md"&&r("ion-ripple-effect",null))}render(){const t=h(this);return r(b,{key:"b92792294360fd974324b31ed2d3db00d3e2f8cd",class:m(this.color,{[t]:!0,"card-disabled":this.disabled,"ion-activatable":this.isClickable()})},this.renderCard(t))}get el(){return p(this)}};w.style={ios:v,md:k};export{w as ion_card};

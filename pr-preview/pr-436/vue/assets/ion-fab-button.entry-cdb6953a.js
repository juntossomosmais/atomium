import{r as v,c as d,b as g,h as t,H as m,g as k}from"./index-c35f0206.js";import{i as x}from"./helpers-079c01eb-656b014e.js";import{h as y,o as w,c as z}from"./theme-516b22d6-9e3090c7.js";import{g as C}from"./index-8812fc40-c0652de4.js";import"./vue.esm-bundler-2231c3fa.js";import"./iframe-19df559e.js";import"../sb-preview/runtime.js";const B=':host{--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--background-hover:var(--ion-color-primary-contrast, #fff);--background-hover-opacity:.08;--transition:background-color, opacity 100ms linear;--ripple-color:currentColor;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;font-kerning:none}.button-native{border-radius:var(--border-radius);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;transform:var(--transform);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;appearance:none;box-sizing:border-box}::slotted(ion-icon){line-height:1}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{left:0;right:0;top:0;display:flex;position:absolute;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;height:100%;transition:all ease-in-out 300ms;transition-property:transform, opacity;z-index:1}:host(.fab-button-disabled){cursor:default;opacity:0.5;pointer-events:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-activated) .button-native{color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}::slotted(ion-icon){line-height:1}:host(.fab-button-small){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}.close-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;left:0;right:0;top:0;position:absolute;height:100%;transform:scale(0.4) rotateZ(-45deg);transition:all ease-in-out 300ms;transition-property:transform, opacity;font-size:var(--close-icon-font-size);opacity:0;z-index:1}:host(.fab-button-close-active) .close-icon{transform:scale(1) rotateZ(0deg);opacity:1}:host(.fab-button-close-active) .button-inner{transform:scale(0.4) rotateZ(45deg);opacity:0}ion-ripple-effect{color:var(--ripple-color)}@supports (backdrop-filter: blur(0)){:host(.fab-button-translucent) .button-native{backdrop-filter:var(--backdrop-filter)}}:host(.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{--background:var(--ion-color-primary, #3880ff);--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--background-hover:var(--ion-color-primary-tint, #4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1;--color:var(--ion-color-primary-contrast, #fff);--box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);--transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59);--close-icon-font-size:28px}:host(.ion-activated){--box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);--transform:scale(1.1);--transition:0.2s transform ease-out}::slotted(ion-icon){font-size:28px}:host(.fab-button-in-list){--background:var(--ion-color-light, #f4f5f8);--background-activated:var(--ion-color-light-shade, #d7d8da);--background-focused:var(--background-activated);--background-hover:var(--ion-color-light-tint, #f5f6f9);--color:var(--ion-color-light-contrast, #000);--color-activated:var(--ion-color-light-contrast, #000);--color-focused:var(--color-activated);--transition:transform 200ms ease 10ms, opacity 200ms ease 10ms}:host(.fab-button-in-list) ::slotted(ion-icon){font-size:18px}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}:host(.ion-color.ion-focused) .button-native,:host(.ion-color.ion-activated) .button-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .button-native::after,:host(.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-contrast)}:host(.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}}@supports (backdrop-filter: blur(0)){:host(.fab-button-translucent){--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.9);--background-hover:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.8);--background-focused:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.82);--backdrop-filter:saturate(180%) blur(20px)}:host(.fab-button-translucent-in-list){--background:rgba(var(--ion-color-light-rgb, 244, 245, 248), 0.9);--background-hover:rgba(var(--ion-color-light-rgb, 244, 245, 248), 0.8);--background-focused:rgba(var(--ion-color-light-rgb, 244, 245, 248), 0.82)}}@supports (backdrop-filter: blur(0)){@media (any-hover: hover){:host(.fab-button-translucent.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb), 0.8)}}:host(.ion-color.fab-button-translucent) .button-native{background:rgba(var(--ion-color-base-rgb), 0.9)}:host(.ion-color.ion-focused.fab-button-translucent) .button-native,:host(.ion-color.ion-activated.fab-button-translucent) .button-native{background:var(--ion-color-base)}}',F=B,I=':host{--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--background-hover:var(--ion-color-primary-contrast, #fff);--background-hover-opacity:.08;--transition:background-color, opacity 100ms linear;--ripple-color:currentColor;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;font-kerning:none}.button-native{border-radius:var(--border-radius);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;transform:var(--transform);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;appearance:none;box-sizing:border-box}::slotted(ion-icon){line-height:1}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{left:0;right:0;top:0;display:flex;position:absolute;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;height:100%;transition:all ease-in-out 300ms;transition-property:transform, opacity;z-index:1}:host(.fab-button-disabled){cursor:default;opacity:0.5;pointer-events:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-activated) .button-native{color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}::slotted(ion-icon){line-height:1}:host(.fab-button-small){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}.close-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;left:0;right:0;top:0;position:absolute;height:100%;transform:scale(0.4) rotateZ(-45deg);transition:all ease-in-out 300ms;transition-property:transform, opacity;font-size:var(--close-icon-font-size);opacity:0;z-index:1}:host(.fab-button-close-active) .close-icon{transform:scale(1) rotateZ(0deg);opacity:1}:host(.fab-button-close-active) .button-inner{transform:scale(0.4) rotateZ(45deg);opacity:0}ion-ripple-effect{color:var(--ripple-color)}@supports (backdrop-filter: blur(0)){:host(.fab-button-translucent) .button-native{backdrop-filter:var(--backdrop-filter)}}:host(.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{--background:var(--ion-color-primary, #3880ff);--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--color:var(--ion-color-primary-contrast, #fff);--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 280ms cubic-bezier(0.4, 0, 0.2, 1), color 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;--close-icon-font-size:24px}:host(.ion-activated){--box-shadow:0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12)}::slotted(ion-icon){font-size:24px}:host(.fab-button-in-list){--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);--color-activated:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);--color-focused:var(--color-activated);--background:var(--ion-color-light, #f4f5f8);--background-activated:transparent;--background-focused:var(--ion-color-light-shade, #d7d8da);--background-hover:var(--ion-color-light-tint, #f5f6f9)}:host(.fab-button-in-list) ::slotted(ion-icon){font-size:18px}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.ion-color.ion-activated) .button-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activated) .button-native::after{background:transparent}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-contrast)}:host(.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}}',A=I,Z=class{constructor(r){v(this,r),this.ionFocus=d(this,"ionFocus",7),this.ionBlur=d(this,"ionBlur",7),this.fab=null,this.inheritedAttributes={},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.onClick=()=>{const{fab:o}=this;o&&o.toggle()},this.color=void 0,this.activated=!1,this.disabled=!1,this.download=void 0,this.href=void 0,this.rel=void 0,this.routerDirection="forward",this.routerAnimation=void 0,this.target=void 0,this.show=!1,this.translucent=!1,this.type="button",this.size=void 0,this.closeIcon=C}connectedCallback(){this.fab=this.el.closest("ion-fab")}componentWillLoad(){this.inheritedAttributes=x(this.el)}render(){const{el:r,disabled:o,color:l,href:n,activated:b,show:u,translucent:a,size:i,inheritedAttributes:h}=this,e=y("ion-fab-list",r),c=g(this),s=n===void 0?"button":"a",p=s==="button"?{type:this.type}:{download:this.download,href:n,rel:this.rel,target:this.target};return t(m,{key:"c6d1a3ea95ee1fb6c86447881ff8ed7d885b9fb5",onClick:this.onClick,"aria-disabled":o?"true":null,class:z(l,{[c]:!0,"fab-button-in-list":e,"fab-button-translucent-in-list":e&&a,"fab-button-close-active":b,"fab-button-show":u,"fab-button-disabled":o,"fab-button-translucent":a,"ion-activatable":!0,"ion-focusable":!0,[`fab-button-${i}`]:i!==void 0})},t(s,Object.assign({key:"d57e55e43e3e1fa7a255e25bfb9eb81a20200aa4"},p,{class:"button-native",part:"native",disabled:o,onFocus:this.onFocus,onBlur:this.onBlur,onClick:f=>w(n,f,this.routerDirection,this.routerAnimation)},h),t("ion-icon",{key:"561252585dc5f5ed260987fc8fef2558700b2700","aria-hidden":"true",icon:this.closeIcon,part:"close-icon",class:"close-icon",lazy:!1}),t("span",{key:"d156660a55d4d849c24368ee79217e66c6423b37",class:"button-inner"},t("slot",{key:"35d4507eec7e4f646e1ef9206b8d6c9fd5a43c37"})),c==="md"&&t("ion-ripple-effect",null)))}get el(){return k(this)}};Z.style={ios:F,md:A};export{Z as ion_fab_button};

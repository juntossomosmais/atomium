import{r as l,a as e,b as t,h as i,H as s}from"./index-JYnEvGW0.js";import{E as r,s as c}from"./index-bad389d4-DH9g3qSj.js";import"./vue.esm-bundler-Cotndkpi.js";import"./iframe-Bz-JRNOn.js";import"../sb-preview/runtime.js";const a="ion-infinite-scroll-content{display:flex;flex-direction:column;justify-content:center;min-height:84px;text-align:center;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}",d=a,f="ion-infinite-scroll-content{display:flex;flex-direction:column;justify-content:center;min-height:84px;text-align:center;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}",g=f,p=class{constructor(n){l(this,n),this.customHTMLEnabled=e.get("innerHTMLTemplatesEnabled",r),this.loadingSpinner=void 0,this.loadingText=void 0}componentDidLoad(){if(this.loadingSpinner===void 0){const n=t(this);this.loadingSpinner=e.get("infiniteLoadingSpinner",e.get("spinner",n==="ios"?"lines":"crescent"))}}renderLoadingText(){const{customHTMLEnabled:n,loadingText:o}=this;return n?i("div",{class:"infinite-loading-text",innerHTML:c(o)}):i("div",{class:"infinite-loading-text"},this.loadingText)}render(){const n=t(this);return i(s,{key:"2f4afb07bcfe3e12528eb9cee8646a097e0b359f",class:{[n]:!0,[`infinite-scroll-content-${n}`]:!0}},i("div",{key:"af038177bf10c88c8970682487a4328689aaa5f2",class:"infinite-loading"},this.loadingSpinner&&i("div",{key:"1da5d419bc6a978b6a509fdab47dae347fc8d221",class:"infinite-loading-spinner"},i("ion-spinner",{key:"60cc5c64e0a317ac0005d5afe42c4bb8da58136f",name:this.loadingSpinner})),this.loadingText!==void 0&&this.renderLoadingText()))}};p.style={ios:d,md:g};export{p as ion_infinite_scroll_content};

import{r as l,a as e,b as t,h as i,H as r}from"./index-DUf7lyEo.js";import{E as s,s as c}from"./index-bad389d4-DH9g3qSj.js";import"./vue.esm-bundler-D6ApT1Ci.js";import"./iframe-DqHqq9MF.js";import"../sb-preview/runtime.js";const a="ion-infinite-scroll-content{display:flex;flex-direction:column;justify-content:center;min-height:84px;text-align:center;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}",d=a,f="ion-infinite-scroll-content{display:flex;flex-direction:column;justify-content:center;min-height:84px;text-align:center;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}",p=f,g=class{constructor(n){l(this,n),this.customHTMLEnabled=e.get("innerHTMLTemplatesEnabled",s),this.loadingSpinner=void 0,this.loadingText=void 0}componentDidLoad(){if(this.loadingSpinner===void 0){const n=t(this);this.loadingSpinner=e.get("infiniteLoadingSpinner",e.get("spinner",n==="ios"?"lines":"crescent"))}}renderLoadingText(){const{customHTMLEnabled:n,loadingText:o}=this;return n?i("div",{class:"infinite-loading-text",innerHTML:c(o)}):i("div",{class:"infinite-loading-text"},this.loadingText)}render(){const n=t(this);return i(r,{key:"7c16060dcfe2a0b0fb3e2f8f4c449589a76f1baa",class:{[n]:!0,[`infinite-scroll-content-${n}`]:!0}},i("div",{key:"a94f4d8746e053dc718f97520bd7e48cb316443a",class:"infinite-loading"},this.loadingSpinner&&i("div",{key:"10143d5d2a50a2a2bc5de1cee8e7ab51263bcf23",class:"infinite-loading-spinner"},i("ion-spinner",{key:"8846e88191690d9c61a0b462889ed56fbfed8b0d",name:this.loadingSpinner})),this.loadingText!==void 0&&this.renderLoadingText()))}};g.style={ios:d,md:p};export{g as ion_infinite_scroll_content};

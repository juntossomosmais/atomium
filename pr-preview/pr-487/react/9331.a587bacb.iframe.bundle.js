/*! For license information please see 9331.a587bacb.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[9331],{"../../packages/core/dist/esm/capacitor-74355484.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>getCapacitor});var _index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js");const getCapacitor=()=>{if(void 0!==_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w)return _index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w.Capacitor}},"../../packages/core/dist/esm/index-d9a82e80.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>doc,w:()=>win});const win="undefined"!=typeof window?window:void 0,doc="undefined"!=typeof document?document:void 0},"../../packages/core/dist/esm/ion-tab-bar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_tab_bar:()=>TabBar});var _index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-d630c805.js"),_keyboard_controller_a1183c77_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/keyboard-controller-a1183c77.js"),_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../packages/core/dist/esm/theme-516b22d6.js"),_ionic_global_cdf5dcb1_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/ionic-global-cdf5dcb1.js");__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js"),__webpack_require__("../../packages/core/dist/esm/keyboard-6ae239bc.js"),__webpack_require__("../../packages/core/dist/esm/capacitor-74355484.js");const TabBar=class{constructor(hostRef){(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionTabBarChanged=(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionTabBarChanged",7),this.ionTabBarLoaded=(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionTabBarLoaded",7),this.keyboardCtrl=null,this.keyboardVisible=!1,this.color=void 0,this.selectedTab=void 0,this.translucent=!1}selectedTabChanged(){void 0!==this.selectedTab&&this.ionTabBarChanged.emit({tab:this.selectedTab})}componentWillLoad(){this.selectedTabChanged()}async connectedCallback(){this.keyboardCtrl=await(0,_keyboard_controller_a1183c77_js__WEBPACK_IMPORTED_MODULE_1__.c)((async(keyboardOpen,waitForResize)=>{!1===keyboardOpen&&void 0!==waitForResize&&await waitForResize,this.keyboardVisible=keyboardOpen}))}disconnectedCallback(){this.keyboardCtrl&&this.keyboardCtrl.destroy()}componentDidLoad(){this.ionTabBarLoaded.emit()}render(){const{color,translucent,keyboardVisible}=this,mode=(0,_ionic_global_cdf5dcb1_js__WEBPACK_IMPORTED_MODULE_2__.g)(this),shouldHide=keyboardVisible&&"top"!==this.el.getAttribute("slot");return(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.H,{key:"5083528e7f802d2f323ce50585edc98eeb9754c6",role:"tablist","aria-hidden":shouldHide?"true":null,class:(0,_theme_516b22d6_js__WEBPACK_IMPORTED_MODULE_6__.c)(color,{[mode]:!0,"tab-bar-translucent":translucent,"tab-bar-hidden":shouldHide})},(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"eb33cdd12da49062219d4aa17a319c3e6361c5c5"}))}get el(){return(0,_index_d630c805_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{selectedTab:["selectedTabChanged"]}}};TabBar.style={ios:":host{display:flex;align-items:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;user-select:none;z-index:10;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, #f7f7f7));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, #666666));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:50px}@supports (backdrop-filter: blur(0)){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}",md:":host{display:flex;align-items:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;user-select:none;z-index:10;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.07))));--color:var(--ion-tab-bar-color, var(--ion-color-step-650, #595959));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:56px}"}},"../../packages/core/dist/esm/keyboard-6ae239bc.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Keyboard,a:()=>KeyboardResize});var ExceptionCode,KeyboardResize,_capacitor_74355484_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/capacitor-74355484.js");!function(ExceptionCode){ExceptionCode.Unimplemented="UNIMPLEMENTED",ExceptionCode.Unavailable="UNAVAILABLE"}(ExceptionCode||(ExceptionCode={})),function(KeyboardResize){KeyboardResize.Body="body",KeyboardResize.Ionic="ionic",KeyboardResize.Native="native",KeyboardResize.None="none"}(KeyboardResize||(KeyboardResize={}));const Keyboard={getEngine(){const capacitor=(0,_capacitor_74355484_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(null==capacitor?void 0:capacitor.isPluginAvailable("Keyboard"))return capacitor.Plugins.Keyboard},getResizeMode(){const engine=this.getEngine();return(null==engine?void 0:engine.getResizeMode)?engine.getResizeMode().catch((e=>{if(e.code!==ExceptionCode.Unimplemented)throw e})):Promise.resolve(void 0)}}},"../../packages/core/dist/esm/keyboard-controller-a1183c77.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createKeyboardController});var _index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js"),_keyboard_6ae239bc_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/keyboard-6ae239bc.js");const getResizeContainer=resizeMode=>{if(void 0===_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.d||resizeMode===_keyboard_6ae239bc_js__WEBPACK_IMPORTED_MODULE_1__.a.None||void 0===resizeMode)return null;const ionApp=_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.d.querySelector("ion-app");return null!=ionApp?ionApp:_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.d.body},getResizeContainerHeight=resizeMode=>{const containerElement=getResizeContainer(resizeMode);return null===containerElement?0:containerElement.clientHeight},createKeyboardController=async keyboardChangeCallback=>{let keyboardWillShowHandler,keyboardWillHideHandler,keyboardVisible,initialResizeContainerHeight;const init=async()=>{const resizeOptions=await _keyboard_6ae239bc_js__WEBPACK_IMPORTED_MODULE_1__.K.getResizeMode(),resizeMode=void 0===resizeOptions?void 0:resizeOptions.mode;keyboardWillShowHandler=()=>{void 0===initialResizeContainerHeight&&(initialResizeContainerHeight=getResizeContainerHeight(resizeMode)),keyboardVisible=!0,fireChangeCallback(keyboardVisible,resizeMode)},keyboardWillHideHandler=()=>{keyboardVisible=!1,fireChangeCallback(keyboardVisible,resizeMode)},null===_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w||void 0===_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w||_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener("keyboardWillShow",keyboardWillShowHandler),null===_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w||void 0===_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w||_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener("keyboardWillHide",keyboardWillHideHandler)},fireChangeCallback=(state,resizeMode)=>{keyboardChangeCallback&&keyboardChangeCallback(state,createResizePromiseIfNeeded(resizeMode))},createResizePromiseIfNeeded=resizeMode=>{if(0===initialResizeContainerHeight||initialResizeContainerHeight===getResizeContainerHeight(resizeMode))return;const containerElement=getResizeContainer(resizeMode);return null!==containerElement?new Promise((resolve=>{const ro=new ResizeObserver((()=>{containerElement.clientHeight===initialResizeContainerHeight&&(ro.disconnect(),resolve())}));ro.observe(containerElement)})):void 0};return await init(),{init,destroy:()=>{null===_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w||void 0===_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w||_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener("keyboardWillShow",keyboardWillShowHandler),null===_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w||void 0===_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w||_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener("keyboardWillHide",keyboardWillHideHandler),keyboardWillShowHandler=keyboardWillHideHandler=void 0},isKeyboardVisible:()=>keyboardVisible}}},"../../packages/core/dist/esm/theme-516b22d6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
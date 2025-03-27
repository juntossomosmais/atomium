/*! For license information please see 3885.25dd329b.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[3885],{"../../packages/core/dist/esm/capacitor-74355484.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>getCapacitor});var _index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js");const getCapacitor=()=>{if(void 0!==_index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w)return _index_d9a82e80_js__WEBPACK_IMPORTED_MODULE_0__.w.Capacitor}},"../../packages/core/dist/esm/keyboard-6ae239bc.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Keyboard,a:()=>KeyboardResize});var ExceptionCode,KeyboardResize,_capacitor_74355484_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/capacitor-74355484.js");!function(ExceptionCode){ExceptionCode.Unimplemented="UNIMPLEMENTED",ExceptionCode.Unavailable="UNAVAILABLE"}(ExceptionCode||(ExceptionCode={})),function(KeyboardResize){KeyboardResize.Body="body",KeyboardResize.Ionic="ionic",KeyboardResize.Native="native",KeyboardResize.None="none"}(KeyboardResize||(KeyboardResize={}));const Keyboard={getEngine(){const capacitor=(0,_capacitor_74355484_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(null==capacitor?void 0:capacitor.isPluginAvailable("Keyboard"))return capacitor.Plugins.Keyboard},getResizeMode(){const engine=this.getEngine();return(null==engine?void 0:engine.getResizeMode)?engine.getResizeMode().catch((e=>{if(e.code!==ExceptionCode.Unimplemented)throw e})):Promise.resolve(void 0)}}},"../../packages/core/dist/esm/keyboard-8d28fca7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{KEYBOARD_DID_CLOSE:()=>KEYBOARD_DID_CLOSE,KEYBOARD_DID_OPEN:()=>KEYBOARD_DID_OPEN,copyVisualViewport:()=>copyVisualViewport,keyboardDidClose:()=>keyboardDidClose,keyboardDidOpen:()=>keyboardDidOpen,keyboardDidResize:()=>keyboardDidResize,resetKeyboardAssist:()=>resetKeyboardAssist,setKeyboardClose:()=>setKeyboardClose,setKeyboardOpen:()=>setKeyboardOpen,startKeyboardAssist:()=>startKeyboardAssist,trackViewportChanges:()=>trackViewportChanges});var _keyboard_6ae239bc_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/keyboard-6ae239bc.js");__webpack_require__("../../packages/core/dist/esm/capacitor-74355484.js"),__webpack_require__("../../packages/core/dist/esm/index-d9a82e80.js");const KEYBOARD_DID_OPEN="ionKeyboardDidShow",KEYBOARD_DID_CLOSE="ionKeyboardDidHide";let previousVisualViewport={},currentVisualViewport={},keyboardOpen=!1;const resetKeyboardAssist=()=>{previousVisualViewport={},currentVisualViewport={},keyboardOpen=!1},startKeyboardAssist=win=>{if(_keyboard_6ae239bc_js__WEBPACK_IMPORTED_MODULE_0__.K.getEngine())startNativeListeners(win);else{if(!win.visualViewport)return;currentVisualViewport=copyVisualViewport(win.visualViewport),win.visualViewport.onresize=()=>{trackViewportChanges(win),keyboardDidOpen()||keyboardDidResize(win)?setKeyboardOpen(win):keyboardDidClose(win)&&setKeyboardClose(win)}}},startNativeListeners=win=>{win.addEventListener("keyboardDidShow",(ev=>setKeyboardOpen(win,ev))),win.addEventListener("keyboardDidHide",(()=>setKeyboardClose(win)))},setKeyboardOpen=(win,ev)=>{fireKeyboardOpenEvent(win,ev),keyboardOpen=!0},setKeyboardClose=win=>{fireKeyboardCloseEvent(win),keyboardOpen=!1},keyboardDidOpen=()=>{const scaledHeightDifference=(previousVisualViewport.height-currentVisualViewport.height)*currentVisualViewport.scale;return!keyboardOpen&&previousVisualViewport.width===currentVisualViewport.width&&scaledHeightDifference>150},keyboardDidResize=win=>keyboardOpen&&!keyboardDidClose(win),keyboardDidClose=win=>keyboardOpen&&currentVisualViewport.height===win.innerHeight,fireKeyboardOpenEvent=(win,nativeEv)=>{const keyboardHeight=nativeEv?nativeEv.keyboardHeight:win.innerHeight-currentVisualViewport.height,ev=new CustomEvent(KEYBOARD_DID_OPEN,{detail:{keyboardHeight}});win.dispatchEvent(ev)},fireKeyboardCloseEvent=win=>{const ev=new CustomEvent(KEYBOARD_DID_CLOSE);win.dispatchEvent(ev)},trackViewportChanges=win=>{previousVisualViewport=Object.assign({},currentVisualViewport),currentVisualViewport=copyVisualViewport(win.visualViewport)},copyVisualViewport=visualViewport=>({width:Math.round(visualViewport.width),height:Math.round(visualViewport.height),offsetTop:visualViewport.offsetTop,offsetLeft:visualViewport.offsetLeft,pageTop:visualViewport.pageTop,pageLeft:visualViewport.pageLeft,scale:visualViewport.scale})}}]);
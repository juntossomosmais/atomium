/*! For license information please see 8421.63dcc471.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[8421],{"../../packages/core/dist/esm/focus-visible-b5105107.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{startFocusVisible:()=>startFocusVisible});const FOCUS_KEYS=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],startFocusVisible=rootEl=>{let currentFocus=[],keyboardMode=!0;const ref=rootEl?rootEl.shadowRoot:document,root=rootEl||document.body,setFocus=elements=>{currentFocus.forEach((el=>el.classList.remove("ion-focused"))),elements.forEach((el=>el.classList.add("ion-focused"))),currentFocus=elements},pointerDown=()=>{keyboardMode=!1,setFocus([])},onKeydown=ev=>{keyboardMode=FOCUS_KEYS.includes(ev.key),keyboardMode||setFocus([])},onFocusin=ev=>{if(keyboardMode&&void 0!==ev.composedPath){const toFocus=ev.composedPath().filter((el=>!!el.classList&&el.classList.contains("ion-focusable")));setFocus(toFocus)}},onFocusout=()=>{ref.activeElement===root&&setFocus([])};ref.addEventListener("keydown",onKeydown),ref.addEventListener("focusin",onFocusin),ref.addEventListener("focusout",onFocusout),ref.addEventListener("touchstart",pointerDown),ref.addEventListener("mousedown",pointerDown);return{destroy:()=>{ref.removeEventListener("keydown",onKeydown),ref.removeEventListener("focusin",onFocusin),ref.removeEventListener("focusout",onFocusout),ref.removeEventListener("touchstart",pointerDown),ref.removeEventListener("mousedown",pointerDown)},setFocus}}}}]);
/*! For license information please see 2133.e5604019.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[2133],{"../../packages/core/dist/esm/md.transition-b964e3ce.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{mdTransitionAnimation:()=>mdTransitionAnimation});var _animation_b86a657e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/animation-b86a657e.js"),_index_f12853c4_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/index-f12853c4.js");__webpack_require__("../../packages/core/dist/esm/index-938c089e.js"),__webpack_require__("../../packages/core/dist/esm/index-ea11dfb5.js");const mdTransitionAnimation=(_,opts)=>{var _a,_b,_c;const backDirection="back"===opts.direction,enteringEl=opts.enteringEl,leavingEl=opts.leavingEl,ionPageElement=(0,_index_f12853c4_js__WEBPACK_IMPORTED_MODULE_1__.g)(enteringEl),enteringToolbarEle=ionPageElement.querySelector("ion-toolbar"),rootTransition=(0,_animation_b86a657e_js__WEBPACK_IMPORTED_MODULE_0__.c)();if(rootTransition.addElement(ionPageElement).fill("both").beforeRemoveClass("ion-page-invisible"),backDirection?rootTransition.duration((null!==(_a=opts.duration)&&void 0!==_a?_a:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):rootTransition.duration((null!==(_b=opts.duration)&&void 0!==_b?_b:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),enteringToolbarEle){const enteringToolBar=(0,_animation_b86a657e_js__WEBPACK_IMPORTED_MODULE_0__.c)();enteringToolBar.addElement(enteringToolbarEle),rootTransition.addAnimation(enteringToolBar)}if(leavingEl&&backDirection){rootTransition.duration((null!==(_c=opts.duration)&&void 0!==_c?_c:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const leavingPage=(0,_animation_b86a657e_js__WEBPACK_IMPORTED_MODULE_0__.c)();leavingPage.addElement((0,_index_f12853c4_js__WEBPACK_IMPORTED_MODULE_1__.g)(leavingEl)).onFinish((currentStep=>{1===currentStep&&leavingPage.elements.length>0&&leavingPage.elements[0].style.setProperty("display","none")})).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),rootTransition.addAnimation(leavingPage)}return rootTransition}}}]);
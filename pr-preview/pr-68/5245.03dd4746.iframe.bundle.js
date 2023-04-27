/*! For license information please see 5245.03dd4746.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[5245],{"../../packages/core/dist/esm/ios.transition-532ea63b.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{iosTransitionAnimation:()=>iosTransitionAnimation,shadow:()=>shadow});var _animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/animation-45b29945.js"),_index_aae540f5_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/index-aae540f5.js");__webpack_require__("../../packages/core/dist/esm/index-37371a87.js"),__webpack_require__("../../packages/core/dist/esm/index-a869d52d.js");const getClonedElement=tagName=>document.querySelector(`${tagName}.ion-cloned-element`),shadow=el=>el.shadowRoot||el,getLargeTitle=refEl=>{const tabs="ION-TABS"===refEl.tagName?refEl:refEl.querySelector("ion-tabs"),query="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=tabs){const activeTab=tabs.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=activeTab?activeTab.querySelector(query):null}return refEl.querySelector(query)},getBackButton=(refEl,backDirection)=>{const tabs="ION-TABS"===refEl.tagName?refEl:refEl.querySelector("ion-tabs");let buttonsList=[];if(null!=tabs){const activeTab=tabs.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=activeTab&&(buttonsList=activeTab.querySelectorAll("ion-buttons"))}else buttonsList=refEl.querySelectorAll("ion-buttons");for(const buttons of buttonsList){const parentHeader=buttons.closest("ion-header"),activeHeader=parentHeader&&!parentHeader.classList.contains("header-collapse-condense-inactive"),backButton=buttons.querySelector("ion-back-button"),buttonsCollapse=buttons.classList.contains("buttons-collapse"),startSlot="start"===buttons.slot||""===buttons.slot;if(null!==backButton&&startSlot&&(buttonsCollapse&&activeHeader&&backDirection||!buttonsCollapse))return backButton}return null},animateBackButton=(rootAnimation,rtl,backDirection,backButtonEl,largeTitleBox,backButtonBox)=>{const BACK_BUTTON_START_OFFSET=rtl?`calc(100% - ${backButtonBox.right+4}px)`:backButtonBox.left-4+"px",START_TEXT_TRANSLATE=rtl?"7px":"-7px",END_TEXT_TRANSLATE=rtl?"-4px":"4px",ICON_TRANSLATE=rtl?"-4px":"4px",TEXT_ORIGIN_X=rtl?"right":"left",ICON_ORIGIN_X=rtl?"left":"right",FORWARD_TEXT_KEYFRAMES=[{offset:0,opacity:0,transform:`translate3d(${START_TEXT_TRANSLATE}, ${largeTitleBox.top-40}px, 0) scale(2.1)`},{offset:1,opacity:1,transform:`translate3d(${END_TEXT_TRANSLATE}, ${backButtonBox.top-46}px, 0) scale(1)`}],BACKWARD_TEXT_KEYFRAMES=[{offset:0,opacity:1,transform:`translate3d(${END_TEXT_TRANSLATE}, ${backButtonBox.top-46}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${START_TEXT_TRANSLATE}, ${largeTitleBox.top-40}px, 0) scale(2.1)`}],TEXT_KEYFRAMES=backDirection?BACKWARD_TEXT_KEYFRAMES:FORWARD_TEXT_KEYFRAMES,FORWARD_ICON_KEYFRAMES=[{offset:0,opacity:0,transform:`translate3d(${ICON_TRANSLATE}, ${backButtonBox.top-41}px, 0) scale(0.6)`},{offset:1,opacity:1,transform:`translate3d(${ICON_TRANSLATE}, ${backButtonBox.top-46}px, 0) scale(1)`}],BACKWARD_ICON_KEYFRAMES=[{offset:0,opacity:1,transform:`translate3d(${ICON_TRANSLATE}, ${backButtonBox.top-46}px, 0) scale(1)`},{offset:.2,opacity:0,transform:`translate3d(${ICON_TRANSLATE}, ${backButtonBox.top-41}px, 0) scale(0.6)`},{offset:1,opacity:0,transform:`translate3d(${ICON_TRANSLATE}, ${backButtonBox.top-41}px, 0) scale(0.6)`}],ICON_KEYFRAMES=backDirection?BACKWARD_ICON_KEYFRAMES:FORWARD_ICON_KEYFRAMES,enteringBackButtonTextAnimation=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)(),enteringBackButtonIconAnimation=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)(),clonedBackButtonEl=getClonedElement("ion-back-button"),backButtonTextEl=shadow(clonedBackButtonEl).querySelector(".button-text"),backButtonIconEl=shadow(clonedBackButtonEl).querySelector("ion-icon");clonedBackButtonEl.text=backButtonEl.text,clonedBackButtonEl.mode=backButtonEl.mode,clonedBackButtonEl.icon=backButtonEl.icon,clonedBackButtonEl.color=backButtonEl.color,clonedBackButtonEl.disabled=backButtonEl.disabled,clonedBackButtonEl.style.setProperty("display","block"),clonedBackButtonEl.style.setProperty("position","fixed"),enteringBackButtonIconAnimation.addElement(backButtonIconEl),enteringBackButtonTextAnimation.addElement(backButtonTextEl),enteringBackButtonTextAnimation.beforeStyles({"transform-origin":`${TEXT_ORIGIN_X} center`}).beforeAddWrite((()=>{backButtonEl.style.setProperty("display","none"),clonedBackButtonEl.style.setProperty(TEXT_ORIGIN_X,BACK_BUTTON_START_OFFSET)})).afterAddWrite((()=>{backButtonEl.style.setProperty("display",""),clonedBackButtonEl.style.setProperty("display","none"),clonedBackButtonEl.style.removeProperty(TEXT_ORIGIN_X)})).keyframes(TEXT_KEYFRAMES),enteringBackButtonIconAnimation.beforeStyles({"transform-origin":`${ICON_ORIGIN_X} center`}).keyframes(ICON_KEYFRAMES),rootAnimation.addAnimation([enteringBackButtonTextAnimation,enteringBackButtonIconAnimation])},animateLargeTitle=(rootAnimation,rtl,backDirection,largeTitleEl,largeTitleBox,backButtonBox)=>{const TITLE_START_OFFSET=rtl?`calc(100% - ${largeTitleBox.right}px)`:`${largeTitleBox.left}px`,START_TRANSLATE=rtl?"-18px":"18px",ORIGIN_X=rtl?"right":"left",BACKWARDS_KEYFRAMES=[{offset:0,opacity:0,transform:`translate3d(${START_TRANSLATE}, ${backButtonBox.top-4}px, 0) scale(0.49)`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(0, ${largeTitleBox.top-2}px, 0) scale(1)`}],FORWARDS_KEYFRAMES=[{offset:0,opacity:.99,transform:`translate3d(0, ${largeTitleBox.top-2}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${START_TRANSLATE}, ${backButtonBox.top-4}px, 0) scale(0.5)`}],KEYFRAMES=backDirection?BACKWARDS_KEYFRAMES:FORWARDS_KEYFRAMES,clonedTitleEl=getClonedElement("ion-title"),clonedLargeTitleAnimation=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)();clonedTitleEl.innerText=largeTitleEl.innerText,clonedTitleEl.size=largeTitleEl.size,clonedTitleEl.color=largeTitleEl.color,clonedLargeTitleAnimation.addElement(clonedTitleEl),clonedLargeTitleAnimation.beforeStyles({"transform-origin":`${ORIGIN_X} center`,height:"46px",display:"",position:"relative",[ORIGIN_X]:TITLE_START_OFFSET}).beforeAddWrite((()=>{largeTitleEl.style.setProperty("display","none")})).afterAddWrite((()=>{largeTitleEl.style.setProperty("display",""),clonedTitleEl.style.setProperty("display","none")})).keyframes(KEYFRAMES),rootAnimation.addAnimation(clonedLargeTitleAnimation)},iosTransitionAnimation=(navEl,opts)=>{var _a;try{const EASING="cubic-bezier(0.32,0.72,0,1)",OPACITY="opacity",TRANSFORM="transform",CENTER="0%",OFF_OPACITY=.8,isRTL="rtl"===navEl.ownerDocument.dir,OFF_RIGHT=isRTL?"-99.5%":"99.5%",OFF_LEFT=isRTL?"33%":"-33%",enteringEl=opts.enteringEl,leavingEl=opts.leavingEl,backDirection="back"===opts.direction,contentEl=enteringEl.querySelector(":scope > ion-content"),headerEls=enteringEl.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),enteringToolBarEls=enteringEl.querySelectorAll(":scope > ion-header > ion-toolbar"),rootAnimation=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)(),enteringContentAnimation=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)();if(rootAnimation.addElement(enteringEl).duration((null!==(_a=opts.duration)&&void 0!==_a?_a:0)||540).easing(opts.easing||EASING).fill("both").beforeRemoveClass("ion-page-invisible"),leavingEl&&null!=navEl){const navDecorAnimation=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)();navDecorAnimation.addElement(navEl),rootAnimation.addAnimation(navDecorAnimation)}if(contentEl||0!==enteringToolBarEls.length||0!==headerEls.length?(enteringContentAnimation.addElement(contentEl),enteringContentAnimation.addElement(headerEls)):enteringContentAnimation.addElement(enteringEl.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),rootAnimation.addAnimation(enteringContentAnimation),backDirection?enteringContentAnimation.beforeClearStyles([OPACITY]).fromTo("transform",`translateX(${OFF_LEFT})`,`translateX(${CENTER})`).fromTo(OPACITY,OFF_OPACITY,1):enteringContentAnimation.beforeClearStyles([OPACITY]).fromTo("transform",`translateX(${OFF_RIGHT})`,`translateX(${CENTER})`),contentEl){const enteringTransitionEffectEl=shadow(contentEl).querySelector(".transition-effect");if(enteringTransitionEffectEl){const enteringTransitionCoverEl=enteringTransitionEffectEl.querySelector(".transition-cover"),enteringTransitionShadowEl=enteringTransitionEffectEl.querySelector(".transition-shadow"),enteringTransitionEffect=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)(),enteringTransitionCover=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)(),enteringTransitionShadow=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)();enteringTransitionEffect.addElement(enteringTransitionEffectEl).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),enteringTransitionCover.addElement(enteringTransitionCoverEl).beforeClearStyles([OPACITY]).fromTo(OPACITY,0,.1),enteringTransitionShadow.addElement(enteringTransitionShadowEl).beforeClearStyles([OPACITY]).fromTo(OPACITY,.03,.7),enteringTransitionEffect.addAnimation([enteringTransitionCover,enteringTransitionShadow]),enteringContentAnimation.addAnimation([enteringTransitionEffect])}}const enteringContentHasLargeTitle=enteringEl.querySelector("ion-header.header-collapse-condense"),{forward,backward}=((rootAnimation,rtl,backDirection,enteringEl,leavingEl)=>{const enteringBackButton=getBackButton(enteringEl,backDirection),leavingLargeTitle=getLargeTitle(leavingEl),enteringLargeTitle=getLargeTitle(enteringEl),leavingBackButton=getBackButton(leavingEl,backDirection),shouldAnimationForward=null!==enteringBackButton&&null!==leavingLargeTitle&&!backDirection,shouldAnimationBackward=null!==enteringLargeTitle&&null!==leavingBackButton&&backDirection;if(shouldAnimationForward){const leavingLargeTitleBox=leavingLargeTitle.getBoundingClientRect(),enteringBackButtonBox=enteringBackButton.getBoundingClientRect();animateLargeTitle(rootAnimation,rtl,backDirection,leavingLargeTitle,leavingLargeTitleBox,enteringBackButtonBox),animateBackButton(rootAnimation,rtl,backDirection,enteringBackButton,leavingLargeTitleBox,enteringBackButtonBox)}else if(shouldAnimationBackward){const enteringLargeTitleBox=enteringLargeTitle.getBoundingClientRect(),leavingBackButtonBox=leavingBackButton.getBoundingClientRect();animateLargeTitle(rootAnimation,rtl,backDirection,enteringLargeTitle,enteringLargeTitleBox,leavingBackButtonBox),animateBackButton(rootAnimation,rtl,backDirection,leavingBackButton,enteringLargeTitleBox,leavingBackButtonBox)}return{forward:shouldAnimationForward,backward:shouldAnimationBackward}})(rootAnimation,isRTL,backDirection,enteringEl,leavingEl);if(enteringToolBarEls.forEach((enteringToolBarEl=>{const enteringToolBar=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)();enteringToolBar.addElement(enteringToolBarEl),rootAnimation.addAnimation(enteringToolBar);const enteringTitle=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)();enteringTitle.addElement(enteringToolBarEl.querySelector("ion-title"));const enteringToolBarButtons=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)(),buttons=Array.from(enteringToolBarEl.querySelectorAll("ion-buttons,[menuToggle]")),parentHeader=enteringToolBarEl.closest("ion-header"),inactiveHeader=null==parentHeader?void 0:parentHeader.classList.contains("header-collapse-condense-inactive");let buttonsToAnimate;buttonsToAnimate=backDirection?buttons.filter((button=>{const isCollapseButton=button.classList.contains("buttons-collapse");return isCollapseButton&&!inactiveHeader||!isCollapseButton})):buttons.filter((button=>!button.classList.contains("buttons-collapse"))),enteringToolBarButtons.addElement(buttonsToAnimate);const enteringToolBarItems=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)();enteringToolBarItems.addElement(enteringToolBarEl.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const enteringToolBarBg=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)();enteringToolBarBg.addElement(shadow(enteringToolBarEl).querySelector(".toolbar-background"));const enteringBackButton=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)(),backButtonEl=enteringToolBarEl.querySelector("ion-back-button");if(backButtonEl&&enteringBackButton.addElement(backButtonEl),enteringToolBar.addAnimation([enteringTitle,enteringToolBarButtons,enteringToolBarItems,enteringToolBarBg,enteringBackButton]),enteringToolBarButtons.fromTo(OPACITY,.01,1),enteringToolBarItems.fromTo(OPACITY,.01,1),backDirection)inactiveHeader||enteringTitle.fromTo("transform",`translateX(${OFF_LEFT})`,`translateX(${CENTER})`).fromTo(OPACITY,.01,1),enteringToolBarItems.fromTo("transform",`translateX(${OFF_LEFT})`,`translateX(${CENTER})`),enteringBackButton.fromTo(OPACITY,.01,1);else{enteringContentHasLargeTitle||enteringTitle.fromTo("transform",`translateX(${OFF_RIGHT})`,`translateX(${CENTER})`).fromTo(OPACITY,.01,1),enteringToolBarItems.fromTo("transform",`translateX(${OFF_RIGHT})`,`translateX(${CENTER})`),enteringToolBarBg.beforeClearStyles([OPACITY,"transform"]);if((null==parentHeader?void 0:parentHeader.translucent)?enteringToolBarBg.fromTo("transform",isRTL?"translateX(-100%)":"translateX(100%)","translateX(0px)"):enteringToolBarBg.fromTo(OPACITY,.01,"var(--opacity)"),forward||enteringBackButton.fromTo(OPACITY,.01,1),backButtonEl&&!forward){const enteringBackBtnText=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)();enteringBackBtnText.addElement(shadow(backButtonEl).querySelector(".button-text")).fromTo("transform",isRTL?"translateX(-100px)":"translateX(100px)","translateX(0px)"),enteringToolBar.addAnimation(enteringBackBtnText)}}})),leavingEl){const leavingContent=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)(),leavingContentEl=leavingEl.querySelector(":scope > ion-content"),leavingToolBarEls=leavingEl.querySelectorAll(":scope > ion-header > ion-toolbar"),leavingHeaderEls=leavingEl.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(leavingContentEl||0!==leavingToolBarEls.length||0!==leavingHeaderEls.length?(leavingContent.addElement(leavingContentEl),leavingContent.addElement(leavingHeaderEls)):leavingContent.addElement(leavingEl.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),rootAnimation.addAnimation(leavingContent),backDirection){leavingContent.beforeClearStyles([OPACITY]).fromTo("transform",`translateX(${CENTER})`,isRTL?"translateX(-100%)":"translateX(100%)");const leavingPage=(0,_index_aae540f5_js__WEBPACK_IMPORTED_MODULE_1__.g)(leavingEl);rootAnimation.afterAddWrite((()=>{"normal"===rootAnimation.getDirection()&&leavingPage.style.setProperty("display","none")}))}else leavingContent.fromTo("transform",`translateX(${CENTER})`,`translateX(${OFF_LEFT})`).fromTo(OPACITY,1,OFF_OPACITY);if(leavingContentEl){const leavingTransitionEffectEl=shadow(leavingContentEl).querySelector(".transition-effect");if(leavingTransitionEffectEl){const leavingTransitionCoverEl=leavingTransitionEffectEl.querySelector(".transition-cover"),leavingTransitionShadowEl=leavingTransitionEffectEl.querySelector(".transition-shadow"),leavingTransitionEffect=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)(),leavingTransitionCover=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)(),leavingTransitionShadow=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)();leavingTransitionEffect.addElement(leavingTransitionEffectEl).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),leavingTransitionCover.addElement(leavingTransitionCoverEl).beforeClearStyles([OPACITY]).fromTo(OPACITY,.1,0),leavingTransitionShadow.addElement(leavingTransitionShadowEl).beforeClearStyles([OPACITY]).fromTo(OPACITY,.7,.03),leavingTransitionEffect.addAnimation([leavingTransitionCover,leavingTransitionShadow]),leavingContent.addAnimation([leavingTransitionEffect])}}leavingToolBarEls.forEach((leavingToolBarEl=>{const leavingToolBar=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)();leavingToolBar.addElement(leavingToolBarEl);const leavingTitle=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)();leavingTitle.addElement(leavingToolBarEl.querySelector("ion-title"));const leavingToolBarButtons=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)(),buttons=leavingToolBarEl.querySelectorAll("ion-buttons,[menuToggle]"),parentHeader=leavingToolBarEl.closest("ion-header"),inactiveHeader=null==parentHeader?void 0:parentHeader.classList.contains("header-collapse-condense-inactive"),buttonsToAnimate=Array.from(buttons).filter((button=>{const isCollapseButton=button.classList.contains("buttons-collapse");return isCollapseButton&&!inactiveHeader||!isCollapseButton}));leavingToolBarButtons.addElement(buttonsToAnimate);const leavingToolBarItems=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)(),leavingToolBarItemEls=leavingToolBarEl.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");leavingToolBarItemEls.length>0&&leavingToolBarItems.addElement(leavingToolBarItemEls);const leavingToolBarBg=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)();leavingToolBarBg.addElement(shadow(leavingToolBarEl).querySelector(".toolbar-background"));const leavingBackButton=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)(),backButtonEl=leavingToolBarEl.querySelector("ion-back-button");if(backButtonEl&&leavingBackButton.addElement(backButtonEl),leavingToolBar.addAnimation([leavingTitle,leavingToolBarButtons,leavingToolBarItems,leavingBackButton,leavingToolBarBg]),rootAnimation.addAnimation(leavingToolBar),leavingBackButton.fromTo(OPACITY,.99,0),leavingToolBarButtons.fromTo(OPACITY,.99,0),leavingToolBarItems.fromTo(OPACITY,.99,0),backDirection){inactiveHeader||leavingTitle.fromTo("transform",`translateX(${CENTER})`,isRTL?"translateX(-100%)":"translateX(100%)").fromTo(OPACITY,.99,0),leavingToolBarItems.fromTo("transform",`translateX(${CENTER})`,isRTL?"translateX(-100%)":"translateX(100%)"),leavingToolBarBg.beforeClearStyles([OPACITY,"transform"]);if((null==parentHeader?void 0:parentHeader.translucent)?leavingToolBarBg.fromTo("transform","translateX(0px)",isRTL?"translateX(-100%)":"translateX(100%)"):leavingToolBarBg.fromTo(OPACITY,"var(--opacity)",0),backButtonEl&&!backward){const leavingBackBtnText=(0,_animation_45b29945_js__WEBPACK_IMPORTED_MODULE_0__.c)();leavingBackBtnText.addElement(shadow(backButtonEl).querySelector(".button-text")).fromTo("transform",`translateX(${CENTER})`,`translateX(${(isRTL?-124:124)+"px"})`),leavingToolBar.addAnimation(leavingBackBtnText)}}else inactiveHeader||leavingTitle.fromTo("transform",`translateX(${CENTER})`,`translateX(${OFF_LEFT})`).fromTo(OPACITY,.99,0).afterClearStyles([TRANSFORM,OPACITY]),leavingToolBarItems.fromTo("transform",`translateX(${CENTER})`,`translateX(${OFF_LEFT})`).afterClearStyles([TRANSFORM,OPACITY]),leavingBackButton.afterClearStyles([OPACITY]),leavingTitle.afterClearStyles([OPACITY]),leavingToolBarButtons.afterClearStyles([OPACITY])}))}return rootAnimation}catch(err){throw err}}}}]);
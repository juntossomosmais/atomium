/*! For license information please see 4447.ef43c73b.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[4447],{"../../packages/core/dist/esm/ion-spinner.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_spinner:()=>Spinner});var _index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-16e36c7a.js"),_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/core/dist/esm/theme-bc7eaa70.js"),_ionic_global_aac7394f_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/ionic-global-aac7394f.js"),_spinner_configs_efb581b4_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/core/dist/esm/spinner-configs-efb581b4.js");const Spinner=class{constructor(hostRef){(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.color=void 0,this.duration=void 0,this.name=void 0,this.paused=!1}getName(){const spinnerName=this.name||_ionic_global_aac7394f_js__WEBPACK_IMPORTED_MODULE_1__.c.get("spinner"),mode=(0,_ionic_global_aac7394f_js__WEBPACK_IMPORTED_MODULE_1__.g)(this);return spinnerName||("ios"===mode?"lines":"circular")}render(){var _a;const mode=(0,_ionic_global_aac7394f_js__WEBPACK_IMPORTED_MODULE_1__.g)(this),spinnerName=this.getName(),spinner=null!==(_a=_spinner_configs_efb581b4_js__WEBPACK_IMPORTED_MODULE_2__.S[spinnerName])&&void 0!==_a?_a:_spinner_configs_efb581b4_js__WEBPACK_IMPORTED_MODULE_2__.S.lines,duration="number"==typeof this.duration&&this.duration>10?this.duration:spinner.dur,svgs=[];if(void 0!==spinner.circles)for(let i=0;i<spinner.circles;i++)svgs.push(buildCircle(spinner,duration,i,spinner.circles));else if(void 0!==spinner.lines)for(let i=0;i<spinner.lines;i++)svgs.push(buildLine(spinner,duration,i,spinner.lines));return(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:(0,_theme_bc7eaa70_js__WEBPACK_IMPORTED_MODULE_3__.c)(this.color,{[mode]:!0,[`spinner-${spinnerName}`]:!0,"spinner-paused":this.paused||_ionic_global_aac7394f_js__WEBPACK_IMPORTED_MODULE_1__.c.getBoolean("_testing")}),role:"progressbar",style:spinner.elmDuration?{animationDuration:duration+"ms"}:{}},svgs)}},buildCircle=(spinner,duration,index,total)=>{const data=spinner.fn(duration,index,total);return data.style["animation-duration"]=duration+"ms",(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{viewBox:data.viewBox||"0 0 64 64",style:data.style},(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle",{transform:data.transform||"translate(32,32)",cx:data.cx,cy:data.cy,r:data.r,style:spinner.elmDuration?{animationDuration:duration+"ms"}:{}}))},buildLine=(spinner,duration,index,total)=>{const data=spinner.fn(duration,index,total);return data.style["animation-duration"]=duration+"ms",(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{viewBox:data.viewBox||"0 0 64 64",style:data.style},(0,_index_16e36c7a_js__WEBPACK_IMPORTED_MODULE_0__.h)("line",{transform:"translate(32,32)",y1:data.y1,y2:data.y2}))};Spinner.style=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{transform-origin:center;position:absolute;top:0;left:0;width:100%;height:100%;transform:translateZ(0)}:host-context([dir=rtl]) svg{transform-origin:calc(100% - center)}[dir=rtl] svg{transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){svg:dir(rtl){transform-origin:calc(100% - center)}}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{animation:spinner-dots 1s linear infinite}:host(.spinner-circular) svg{animation:spinner-circular linear infinite}:host(.spinner-circular) circle{animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{animation-play-state:paused}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-scale-out{0%{transform:scale(1, 1)}100%{transform:scale(0, 0)}}@keyframes spinner-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes spinner-dots{0%{transform:scale(1, 1);opacity:0.9}50%{transform:scale(0.4, 0.4);opacity:0.3}100%{transform:scale(1, 1);opacity:0.9}}@keyframes spinner-circular{100%{transform:rotate(360deg)}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}"},"../../packages/core/dist/esm/spinner-configs-efb581b4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>SPINNERS});const SPINNERS={bubbles:{dur:1e3,circles:9,fn:(dur,index,total)=>{const animationDelay=dur*index/total-dur+"ms",angle=2*Math.PI*index/total;return{r:5,style:{top:32*Math.sin(angle)+"%",left:32*Math.cos(angle)+"%","animation-delay":animationDelay}}}},circles:{dur:1e3,circles:8,fn:(dur,index,total)=>{const step=index/total,animationDelay=dur*step-dur+"ms",angle=2*Math.PI*step;return{r:5,style:{top:32*Math.sin(angle)+"%",left:32*Math.cos(angle)+"%","animation-delay":animationDelay}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(_,index)=>({r:6,style:{left:32-32*index+"%","animation-delay":-110*index+"ms"}})},lines:{dur:1e3,lines:8,fn:(dur,index,total)=>({y1:14,y2:26,style:{transform:`rotate(${360/total*index+(index<total/2?180:-180)}deg)`,"animation-delay":dur*index/total-dur+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(dur,index,total)=>({y1:12,y2:20,style:{transform:`rotate(${360/total*index+(index<total/2?180:-180)}deg)`,"animation-delay":dur*index/total-dur+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(dur,index,total)=>({y1:17,y2:29,style:{transform:`rotate(${30*index+(index<6?180:-180)}deg)`,"animation-delay":dur*index/total-dur+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(dur,index,total)=>({y1:12,y2:20,style:{transform:`rotate(${30*index+(index<6?180:-180)}deg)`,"animation-delay":dur*index/total-dur+"ms"}})}}},"../../packages/core/dist/esm/theme-bc7eaa70.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);
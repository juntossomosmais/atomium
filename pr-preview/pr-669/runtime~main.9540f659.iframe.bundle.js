(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({237:"architecture-decision-records-0011-why-host-our-own-icon-library-and-cdn-mdx",535:"components-link-stories-link-core-stories",1031:"architecture-decision-records-0013-why-do-we-need-to-convert-carousel-item-mdx",1346:"0_Introduction-mdx",1536:"1_4_Icons-mdx",2033:"components-steps-modal-stories-steps-modal-core-stories",2668:"6_Misc-mdx",2833:"components-spinner-stories-spinner-core-stories",3375:"components-textarea-stories-textarea-core-stories",3466:"architecture-decision-records-0003-why-stencil-mdx",3789:"architecture-decision-records-0002-why-ionic-mdx",4019:"components-select-stories-select-core-stories",4173:"components-tooltip-stories-tooltip-core-stories",4183:"components-grid-stories-grid-core-stories",4185:"components-breadcrumb-stories-breadcrumb-core-stories",4269:"components-list-slider-stories-list-slider-core-stories",4327:"architecture-decision-records-0001-why-web-components-mdx",4757:"4_Screens-mdx",4825:"components-modal-stories-modal-core-stories",5183:"architecture-decision-records-0014-why-use-popperjs-mdx",5577:"components-container-stories-container-core-stories",5701:"5_Grid-mdx",5905:"components-input-stories-input-core-stories",5961:"components-icon-stories-icon-core-stories",6068:"7_Elevation-mdx",6134:"2_Spacings-mdx",6165:"1_3_Tokens-mdx",6379:"components-chip-stories-chip-core-stories",6409:"1_Colors-mdx",6532:"3_Typography-mdx",6633:"architecture-decision-records-0000-why-design-system-mdx",6679:"components-pagination-stories-pagination-core-stories",6928:"architecture-decision-records-0004-why-a-monorepo-mdx",7140:"1_2_Vue-mdx",7154:"1_1_React-mdx",7398:"architecture-decision-records-0005-why-nx-mdx",7443:"architecture-decision-records-0010-why-do-we-need-react-fix-mdx",7643:"1_0_Core-mdx",7645:"components-tag-stories-tag-core-stories",7650:"architecture-decision-records-0008-why-do-we-need-grids-mdx",8140:"architecture-decision-records-0006-why-that-component-creation-definition-mdx",8201:"architecture-decision-records-0012-why-have-a-carousel-with-swiper-mdx",8359:"components-carousel-stories-carousel-core-stories",8629:"components-alert-stories-alert-core-stories",8831:"components-button-stories-button-core-stories",9264:"architecture-decision-records-0007-why-do-we-transpile-web-components-for-react-and-vue-mdx",9293:"components-badge-stories-badge-core-stories",9467:"architecture-decision-records-0009-why-use-onclick-event-on-breadcrumb-component-event-undocumented-mdx"}[chunkId]||chunkId)+"."+{189:"d55f4eba",190:"1e9042de",237:"d8b11925",247:"347c08fd",260:"6e711d18",318:"8eb3f4d0",443:"7fee036f",535:"fb553c74",618:"bb8b8851",647:"83d672bb",736:"383febb3",777:"d6bec9f1",1031:"9eeae80e",1033:"dbe2c23e",1238:"be8dbf77",1264:"3cccdada",1346:"300b2848",1354:"e7e6a9de",1494:"540eda21",1536:"ff5916b6",1549:"1555d6b4",1662:"a765f944",1678:"b3a96dcb",1939:"63aadc99",2024:"0fac19ad",2033:"45b4362e",2045:"992542a9",2050:"9f81e0a2",2061:"e35e57c1",2114:"90b62f4c",2174:"49242cf9",2194:"9f091fc3",2199:"dbd6b879",2258:"2cf6b4ce",2301:"6b97d675",2320:"c848d5fd",2469:"0e9709b9",2502:"1c0acdb1",2564:"18730a5a",2615:"52d2c413",2627:"93b637c4",2668:"a79e1137",2804:"8ee05499",2833:"c525cfb8",2891:"9b165177",2984:"511e67ce",3128:"bf66f60c",3197:"edfc6346",3227:"85fab8df",3269:"a906e87e",3280:"c934e601",3312:"44f2e66e",3335:"ea9e3063",3375:"883f01dc",3466:"72dcc263",3600:"97332207",3619:"6a534edc",3789:"9d0231c4",3883:"77ff4ec6",4019:"19c35b71",4121:"5e0d0371",4132:"4eae6be5",4173:"d9cb4cd9",4183:"b1c2db28",4185:"36663cf2",4218:"9ebf301f",4236:"5232d587",4269:"7efa9f97",4327:"6778f92c",4349:"f09eefbb",4368:"68911ba1",4443:"a6658bb6",4454:"686a4b80",4462:"0bbde495",4533:"cb8a62fa",4552:"a4c6a053",4607:"e2ea77ec",4668:"afc3694c",4757:"6396dbc4",4788:"11aad0f2",4825:"a31081aa",5115:"765814e9",5183:"25a88040",5231:"398cb134",5241:"471e968b",5300:"4344f70d",5458:"47976507",5473:"aaa698e8",5519:"e3c1507e",5530:"55959e4c",5577:"6f7ac0c5",5657:"615555d2",5662:"42cfae98",5701:"ba81bfec",5721:"2475b3b5",5775:"53304503",5805:"03fb987d",5905:"ba830252",5961:"724cb70d",6e3:"55756dfe",6017:"d7835431",6068:"f1a6042c",6134:"1e3a84c8",6165:"ddec5c84",6283:"3bc59604",6379:"6b5da360",6409:"3554b0aa",6411:"c1198c42",6472:"6003a98e",6476:"7b6a7ae5",6532:"15accd1b",6606:"5c96d0e4",6633:"ab2b0306",6679:"04f588da",6793:"35740d0d",6799:"69dd93f9",6928:"8c5f413e",6941:"bfbcb840",7006:"73167f50",7046:"1d18863c",7140:"5c4bc99d",7154:"ebe0197f",7199:"1e7187d6",7208:"f6d055cc",7216:"3623e839",7398:"956a0fcd",7443:"e4d235c7",7511:"6b4513dd",7643:"8398b495",7645:"f206f73a",7650:"bbab92aa",7886:"7d4e4e08",8023:"8ce57237",8140:"40a0a09a",8177:"45b357e8",8201:"f9722a81",8337:"2ce663b1",8359:"b02917b3",8480:"91cf8a03",8534:"acf0874a",8629:"dd505157",8675:"4bd0f780",8704:"19d9a057",8756:"29967909",8794:"8ef74afd",8819:"1e6f55cb",8831:"b9e74624",8883:"5522c46e",8977:"43b6f307",9028:"e6d5c23e",9047:"c7f672eb",9141:"941cba0e",9188:"1f56298d",9264:"12496a4c",9290:"45624c4b",9293:"c0f4138f",9368:"d598020e",9433:"addfd71f",9467:"bf39cc51",9502:"d9f44070",9514:"acb0d7a0",9547:"b5393e99",9762:"0ff3bdd5",9783:"01f19abc",9917:"76155e38",9934:"e9a2dcec",9975:"9c12d5b7"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@atomium/docs:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@atomium/docs:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();
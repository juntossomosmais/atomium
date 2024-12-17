(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({98:"0_Introduction-stories-mdx",535:"components-link-stories-link-core-stories",769:"4_Screens-stories-mdx",1062:"2_Spacings-stories-mdx",1927:"architecture-decision-records-0010-why-do-we-need-react-fix-stories-mdx",1992:"1_4_Icons-stories-mdx",2033:"components-steps-modal-stories-steps-modal-core-stories",2508:"3_Typography-stories-mdx",2833:"components-spinner-stories-spinner-core-stories",3375:"components-textarea-stories-textarea-core-stories",3413:"architecture-decision-records-0000-why-design-system-stories-mdx",3545:"architecture-decision-records-0011-why-host-our-own-icon-library-and-cdn-stories-mdx",3637:"architecture-decision-records-0012-why-have-a-carousel-with-swiper-stories-mdx",3910:"architecture-decision-records-0005-why-nx-stories-mdx",3989:"1_Colors-stories-mdx",4019:"components-select-stories-select-core-stories",4173:"components-tooltip-stories-tooltip-core-stories",4183:"components-grid-stories-grid-core-stories",4185:"components-breadcrumb-stories-breadcrumb-core-stories",4269:"components-list-slider-stories-list-slider-core-stories",4575:"architecture-decision-records-0009-why-use-onclick-event-on-breadcrumb-component-event-undocumented-stories-mdx",4626:"1_1_React-stories-mdx",4715:"architecture-decision-records-0013-why-do-we-need-to-convert-carousel-item-stories-mdx",4762:"architecture-decision-records-0003-why-stencil-stories-mdx",4825:"components-modal-stories-modal-core-stories",4964:"6_Misc-stories-mdx",5217:"5_Grid-stories-mdx",5577:"components-container-stories-container-core-stories",5779:"architecture-decision-records-0014-why-use-popperjs-stories-mdx",5796:"architecture-decision-records-0006-why-that-component-creation-definition-stories-mdx",5905:"components-input-stories-input-core-stories",5961:"components-icon-stories-icon-core-stories",6379:"components-chip-stories-chip-core-stories",6679:"components-pagination-stories-pagination-core-stories",6696:"architecture-decision-records-0007-why-do-we-transpile-web-components-for-react-and-vue-stories-mdx",7020:"7_Elevation-stories-mdx",7147:"architecture-decision-records-0001-why-web-components-stories-mdx",7645:"components-tag-stories-tag-core-stories",7740:"1_2_Vue-stories-mdx",7841:"1_3_Tokens-stories-mdx",7960:"architecture-decision-records-0004-why-a-monorepo-stories-mdx",8359:"components-carousel-stories-carousel-core-stories",8629:"components-alert-stories-alert-core-stories",8690:"architecture-decision-records-0008-why-do-we-need-grids-stories-mdx",8831:"components-button-stories-button-core-stories",9293:"components-badge-stories-badge-core-stories",9401:"architecture-decision-records-0002-why-ionic-stories-mdx",9823:"1_0_Core-stories-mdx"}[chunkId]||chunkId)+"."+{80:"42223876",98:"1fed3e5e",158:"5e4c01a9",255:"be8ace2f",325:"51e4b632",392:"26b7574b",421:"5c50b426",423:"12904020",487:"e75d804a",535:"4fad81a8",705:"952e6507",751:"d9dada38",769:"8a7e792b",805:"72dd3e54",888:"782c70ef",890:"234aa679",936:"6f2d91d1",967:"f0ac12ea",1006:"ae58813a",1062:"0f687914",1148:"d9b44fb2",1259:"23bf1207",1296:"6e49adf0",1362:"0c212f2b",1391:"8ea370d3",1625:"c1065163",1628:"69df2c20",1687:"e21049d4",1800:"a3430ae9",1904:"3cf70ffb",1927:"6445574f",1934:"f58feee4",1992:"31a8747b",1994:"8cba9877",2033:"3ad6cff4",2075:"9f0e1596",2079:"04c99808",2117:"253349a1",2158:"43a40ecf",2239:"95ed3b28",2260:"7b698783",2468:"6cac3ba5",2508:"01d08650",2716:"a725457e",2833:"9b3286c5",2868:"e2cd34c5",2897:"ef6287eb",3017:"9c4c485c",3026:"ef48d348",3088:"e8486b8f",3227:"172665b3",3375:"06381a8c",3405:"da86ab15",3413:"1310d9aa",3545:"ea70e8bf",3550:"9d84fcbf",3635:"8cd1dc28",3637:"68525c2b",3671:"18906adf",3749:"c458b040",3761:"4a4d6e69",3885:"c88948de",3910:"2fdf53bb",3918:"54a21d44",3958:"6379beae",3989:"afd29592",4015:"c58e48ad",4019:"bebfc80d",4173:"71d3ade3",4183:"94a231e7",4185:"601a6971",4187:"ff3eaa28",4244:"b126f064",4269:"47ab1e39",4315:"65c46044",4385:"df1644d9",4495:"bdee728c",4513:"15efcf2b",4535:"f3b08e09",4575:"74f03fe1",4626:"eb6906ee",4715:"cb4ef8c2",4762:"a74c0513",4814:"f2ef898d",4825:"b9398b2a",4829:"c4bb591d",4880:"a769f196",4909:"8fd7a467",4964:"7d0c0bff",4972:"0c8e2211",5083:"1f42c22d",5217:"763eee3c",5231:"017476eb",5270:"11258f2f",5314:"04d4b79f",5359:"4c2fa975",5428:"11c8ebca",5458:"121324d3",5548:"b132e982",5577:"82dab5ce",5650:"e762ba8e",5706:"3157251d",5779:"f93ebda8",5796:"f9d1ec78",5905:"732d723f",5961:"1fcb66bb",5981:"67d3da74",6116:"ed2ccd33",6196:"d29e9f95",6250:"ed5af566",6276:"3213da26",6338:"2ec79722",6379:"d7f076ed",6390:"e3b5ca26",6394:"dfb9cfd6",6551:"762d8f5d",6554:"41c49486",6678:"af5784d6",6679:"fd3a4cee",6694:"1a32a936",6696:"543db6f2",6703:"529e4ebd",6707:"ca35ce10",6767:"f8c543a7",6781:"2d646158",6862:"cb6801fc",6984:"32882e46",7020:"7ecd1c23",7147:"ff9b0911",7154:"518a9a3a",7180:"5eed4867",7240:"2230a0b7",7291:"55d5f3e2",7399:"d18298bf",7501:"c38fcf87",7562:"bb22786b",7645:"ce03b7ce",7715:"652dc801",7740:"c3ff1566",7802:"fda2e757",7841:"c5bcc00b",7843:"2533e85b",7869:"70b14d27",7960:"3180f52d",8017:"5430a42e",8115:"55059955",8141:"b7bc440f",8359:"473184c5",8470:"ba454fb2",8559:"8c7eaedf",8615:"76cda511",8626:"6495e481",8629:"4d2c9be4",8690:"76bda27f",8831:"91f01224",8904:"29f9c804",8909:"f4fba086",8990:"c24ac0a2",9010:"0ec166a3",9059:"dbad5152",9224:"75f42d8a",9293:"8f817553",9384:"b0b0fe04",9401:"48371ed1",9553:"8c163c77",9615:"1b4b1b69",9626:"fd044e84",9823:"05f8b653",9943:"9f8f2ef8"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@atomium/docs:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@atomium/docs:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();
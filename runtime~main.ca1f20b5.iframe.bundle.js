(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({98:"0_Introduction-stories-mdx",769:"4_Screens-stories-mdx",1062:"2_Spacings-stories-mdx",1927:"architecture-decision-records-0010-why-do-we-need-react-fix-stories-mdx",1992:"1_4_Icons-stories-mdx",2508:"3_Typography-stories-mdx",3375:"components-textarea-stories-textarea-core-stories",3413:"architecture-decision-records-0000-why-design-system-stories-mdx",3545:"architecture-decision-records-0011-why-host-our-own-icon-library-and-cdn-stories-mdx",3637:"architecture-decision-records-0012-why-have-a-carousel-with-swiper-stories-mdx",3910:"architecture-decision-records-0005-why-nx-stories-mdx",3989:"1_Colors-stories-mdx",4019:"components-select-stories-select-core-stories",4183:"components-grid-stories-grid-core-stories",4185:"components-breadcrumb-stories-breadcrumb-core-stories",4269:"components-list-slider-stories-list-slider-core-stories",4575:"architecture-decision-records-0009-why-use-onclick-event-on-breadcrumb-component-event-undocumented-stories-mdx",4626:"1_1_React-stories-mdx",4715:"architecture-decision-records-0013-why-do-we-need-to-convert-carousel-item-stories-mdx",4762:"architecture-decision-records-0003-why-stencil-stories-mdx",4964:"6_Misc-stories-mdx",5217:"5_Grid-stories-mdx",5796:"architecture-decision-records-0006-why-that-component-creation-definition-stories-mdx",5905:"components-input-stories-input-core-stories",5961:"components-icon-stories-icon-core-stories",6379:"components-chip-stories-chip-core-stories",6696:"architecture-decision-records-0007-why-do-we-transpile-web-components-for-react-and-vue-stories-mdx",7020:"7_Elevation-stories-mdx",7147:"architecture-decision-records-0001-why-web-components-stories-mdx",7645:"components-tag-stories-tag-core-stories",7740:"1_2_Vue-stories-mdx",7841:"1_3_Tokens-stories-mdx",7960:"architecture-decision-records-0004-why-a-monorepo-stories-mdx",8359:"components-carousel-stories-carousel-core-stories",8629:"components-alert-stories-alert-core-stories",8690:"architecture-decision-records-0008-why-do-we-need-grids-stories-mdx",8831:"components-button-stories-button-core-stories",9293:"components-badge-stories-badge-core-stories",9401:"architecture-decision-records-0002-why-ionic-stories-mdx",9823:"1_0_Core-stories-mdx"}[chunkId]||chunkId)+"."+{21:"74e20dbb",80:"e9c2da4f",98:"1c90cdf3",158:"be92f8ac",392:"26b7574b",421:"00d4d6cb",423:"26576e4b",702:"dee1ffc8",769:"8a7e792b",805:"c8ed08dc",825:"3c7347bb",888:"782c70ef",936:"6f2d91d1",967:"b19112cc",1006:"71c3e90b",1034:"03f6b062",1062:"0f687914",1148:"97967abf",1210:"90aff8df",1259:"d8b9eb61",1296:"7350dd64",1320:"726660a1",1362:"92bc91a7",1628:"837b903c",1687:"0251fb39",1800:"0b055616",1899:"3097921f",1904:"8bcf30d6",1927:"6445574f",1961:"e8de5dc1",1992:"b0a32fd3",1994:"fdf7a287",2046:"f17e6641",2079:"72051333",2117:"9ebec699",2158:"605b45e7",2220:"31836202",2260:"7bbb414e",2468:"a32b91a1",2508:"d8dd69fa",2974:"006ebf82",3017:"1c17e6cb",3375:"d39113ed",3413:"1310d9aa",3545:"ea70e8bf",3550:"9d84fcbf",3635:"30ae3ee1",3637:"68525c2b",3671:"3629a278",3749:"878963b1",3761:"3bb2f5a3",3910:"2fdf53bb",3958:"0d27e8f6",3989:"afd29592",4015:"90e2a637",4019:"15a338ef",4124:"3840c826",4154:"e498ffb9",4173:"b2a21945",4183:"94a231e7",4185:"601a6971",4187:"303d79b0",4244:"6670be30",4269:"a345a68e",4315:"ebab6d32",4495:"4be1101e",4513:"4a4350a5",4535:"aa5fc419",4575:"74f03fe1",4626:"eb6906ee",4715:"cb4ef8c2",4762:"a74c0513",4814:"5031029a",4900:"32326bf4",4909:"ff458045",4964:"7d0c0bff",4972:"621d8d83",5083:"9535db72",5124:"2b096430",5217:"763eee3c",5231:"017476eb",5270:"a96a3379",5314:"8c5798f4",5359:"cf8f12b0",5361:"d489cdd2",5398:"df48b173",5458:"121324d3",5548:"b132e982",5650:"b4447945",5706:"f0b83e5d",5796:"f9d1ec78",5905:"f9e1bd25",5961:"40d592e1",5981:"b684dcd3",6116:"578bb1a2",6196:"89a56940",6205:"a53febb1",6250:"2124789c",6276:"725d67dd",6338:"0fe64fe5",6379:"d7f076ed",6390:"28cadd32",6396:"2bd185d5",6551:"e886639b",6678:"5bef18ec",6694:"f77340b3",6696:"543db6f2",6703:"419cf5e9",6707:"1969b6b3",6781:"d4d5b1df",6862:"1b6471d2",6960:"a5b11285",6984:"9a9e30ab",7012:"19803db3",7020:"7ecd1c23",7138:"0033ba77",7147:"ff9b0911",7154:"8d3a0dd6",7240:"2230a0b7",7291:"55d5f3e2",7399:"5abe0aa6",7499:"55f4c0f7",7501:"1c6efc5e",7562:"3cfe8f22",7645:"ce03b7ce",7715:"5ed5d54e",7740:"c3ff1566",7742:"018bf235",7783:"ad766da8",7841:"c5bcc00b",7843:"360a4611",7869:"b8cc4d4f",7960:"3180f52d",8017:"1afe80e9",8115:"07b2e9df",8141:"7694165f",8359:"97822469",8470:"cd0b096a",8559:"7ee06dae",8615:"0cf328cf",8626:"62935e5c",8629:"4d2c9be4",8690:"76bda27f",8831:"db96a3f8",8904:"128cf8ce",8909:"d6c47e1c",8990:"1bbf9ab0",9010:"74a687a2",9059:"063699a3",9224:"e95f0615",9293:"8f817553",9384:"c8e3f440",9401:"48371ed1",9597:"a3dfddfa",9626:"5a92b036",9823:"475be6a9",9864:"95170517"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@atomium/docs:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@atomium/docs:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();
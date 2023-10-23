(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({92:"architecture-decision-records-0011-why-host-our-own-icon-library-and-cdn-stories-mdx",245:"architecture-decision-records-0000-why-design-system-stories-mdx",281:"architecture-decision-records-0013-why-do-we-need-to-convert-carousel-item-stories-mdx",387:"5_Grid-stories-mdx",422:"architecture-decision-records-0006-why-that-component-creation-definition-stories-mdx",1138:"components-textarea-stories-textarea-core-stories",1342:"components-grid-stories-grid-core-stories",1552:"1_3_Tokens-stories-mdx",1942:"components-tag-stories-tag-core-stories",2e3:"1_2_Vue-stories-mdx",2132:"2_Spacings-stories-mdx",2287:"architecture-decision-records-0010-why-do-we-need-react-fix-stories-mdx",2746:"0_Introduction-stories-mdx",3088:"components-button-stories-button-core-stories",3371:"components-select-stories-select-core-stories",3752:"1_1_React-stories-mdx",3866:"architecture-decision-records-0009-why-use-onclick-event-on-breadcrumb-component-event-undocumented-stories-mdx",4602:"architecture-decision-records-0004-why-a-monorepo-stories-mdx",4671:"components-badge-stories-badge-core-stories",4995:"architecture-decision-records-0007-why-do-we-transpile-web-components-for-react-and-not-for-vue-stories-mdx",5419:"1_0_Core-stories-mdx",5422:"architecture-decision-records-0012-why-have-a-carousel-with-swiper-stories-mdx",5722:"4_Screens-stories-mdx",6449:"architecture-decision-records-0001-why-web-components-stories-mdx",6545:"architecture-decision-records-0005-why-nx-stories-mdx",6708:"components-carousel-stories-carousel-core-stories",6726:"architecture-decision-records-0002-why-ionic-stories-mdx",6938:"components-alert-stories-alert-core-stories",7177:"architecture-decision-records-0003-why-stencil-stories-mdx",7461:"6_Misc-stories-mdx",7906:"components-carousel-carousel-item-stories-carousel-item-core-stories-mdx",8508:"components-input-stories-input-core-stories",8906:"architecture-decision-records-0008-why-do-we-need-grids-stories-mdx",9107:"1_4_Icons-stories-mdx",9123:"components-icon-stories-icon-core-stories",9296:"3_Typography-stories-mdx",9351:"components-breadcrumb-stories-breadcrumb-core-stories",9371:"1_Colors-stories-mdx",9527:"7_Elevation-stories-mdx",9771:"components-chip-stories-chip-core-stories"}[chunkId]||chunkId)+"."+{21:"a659859d",32:"025b67b3",92:"641a85ab",115:"f68d08d1",162:"5f708736",244:"bee529eb",245:"a46236b8",281:"4dcc16c5",289:"50aa8bc6",314:"4baf2981",325:"29419aba",356:"898a06d8",369:"14d08550",387:"9172430b",420:"fe800336",422:"0ce7e7b9",476:"3b1377de",495:"c3f36338",691:"16f3b2e5",716:"e00ca3a0",901:"8455899b",974:"939d6942",1040:"ec08016f",1138:"c07817c7",1342:"eef55bdb",1467:"3759a1fe",1552:"951a6d24",1841:"759aad28",1855:"72b95226",1942:"9da4471b",1944:"1f36b0bf",2e3:"39722329",2004:"c9a28c2c",2067:"053e2f43",2132:"c1f7a307",2287:"36be2805",2367:"0082ef13",2392:"76c809e6",2653:"79ae4ad9",2746:"e1ced3ce",2819:"bf41fcd6",2871:"b68a7545",2996:"7e1c3e55",3088:"1da8c4e8",3258:"213ecff0",3347:"e17c2822",3371:"fc098fe7",3504:"4db1f9c0",3527:"570bc13e",3666:"08e29e2b",3673:"b7203aec",3718:"f233ffb6",3751:"b59a2a92",3752:"89981fb0",3831:"232fe934",3850:"2a3d0e14",3866:"ba5cd08e",3883:"424364d7",3928:"52c638f2",4005:"72288cba",4061:"97391b11",4162:"8f552adf",4193:"a5408737",4246:"7f6c9752",4324:"77b26d9f",4393:"f72ff9c6",4447:"42d8a8b1",4547:"32a3c3a6",4598:"5e749f8a",4602:"136b1a56",4624:"9918fd81",4629:"ce74c2b6",4671:"cfc89cc4",4780:"3c7379b4",4995:"55d26981",5105:"6faa603a",5169:"105b5eea",5347:"bda20d2d",5392:"a5883bd3",5419:"940f14a9",5422:"308e0623",5432:"d88b19d6",5548:"efcabbf1",5562:"b82663ce",5722:"a92c16e1",5892:"1cc048dc",5936:"1d26133f",5969:"5a2ec1dd",5975:"c24c482e",5984:"80c8b72c",6045:"5bd935a5",6157:"402c071e",6274:"9301165d",6367:"1db1a247",6442:"51c1af46",6449:"9174e461",6497:"c7f1d985",6545:"39f03674",6621:"d8f0f0b8",6650:"6877b281",6708:"ba7cebff",6713:"b5c766d1",6726:"e28c3832",6745:"714442ea",6938:"9c47af48",6944:"f329623d",7177:"c091db9d",7451:"2b9fce44",7460:"b90ca9c7",7461:"4df48c26",7484:"cc8a1efe",7644:"530b4d96",7664:"ce9fa926",7710:"81313a3f",7731:"30b58492",7806:"a90a11f6",7904:"0fb7344d",7906:"258a19e1",7923:"38320ac8",7933:"350472ef",7998:"ffeaed98",8080:"42294f99",8130:"f86a837c",8349:"2028f13f",8373:"ee97f338",8482:"2853ebfc",8508:"f1c02356",8641:"b26ebbed",8700:"19a1f99c",8708:"3b6f4124",8749:"e895dae6",8754:"d1368735",8879:"fa283724",8905:"adc2e82f",8906:"058e59f9",8926:"059a29b6",9046:"b01e416f",9050:"f9aa530d",9060:"76f1fc49",9107:"14bc4b9c",9116:"a0da0d8e",9123:"f8c8314f",9148:"6327b184",9271:"68c9470d",9296:"c6e54a94",9325:"3e7d4b0b",9351:"c74bbd38",9371:"ead70093",9440:"72c440a1",9454:"d5c281a0",9458:"021467ce",9527:"42c276e6",9555:"4b3516ab",9586:"013a4b67",9628:"57e5dcc7",9771:"15892cc4",9777:"45371bd3"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@atomium/docs:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@atomium/docs:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();
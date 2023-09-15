(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({92:"architecture-decision-records-0011-why-host-our-own-icon-library-and-cdn-stories-mdx",245:"architecture-decision-records-0000-why-design-system-stories-mdx",281:"architecture-decision-records-0013-why-do-we-need-to-convert-carousel-item-stories-mdx",387:"5_Grid-stories-mdx",422:"architecture-decision-records-0006-why-that-component-creation-definition-stories-mdx",1138:"components-textarea-stories-textarea-core-stories",1342:"components-grid-stories-grid-core-stories",1552:"1_3_Tokens-stories-mdx",1770:"components-carousel-carousel-item-stories-carousel-item-core-stories",2e3:"1_2_Vue-stories-mdx",2132:"2_Spacings-stories-mdx",2287:"architecture-decision-records-0010-why-do-we-need-react-fix-stories-mdx",2746:"0_Introduction-stories-mdx",3088:"components-button-stories-button-core-stories",3371:"components-select-stories-select-core-stories",3752:"1_1_React-stories-mdx",3866:"architecture-decision-records-0009-why-use-onclick-event-on-breadcrumb-component-event-undocumented-stories-mdx",4602:"architecture-decision-records-0004-why-a-monorepo-stories-mdx",4671:"components-badge-stories-badge-core-stories",4995:"architecture-decision-records-0007-why-do-we-transpile-web-components-for-react-and-not-for-vue-stories-mdx",5419:"1_0_Core-stories-mdx",5422:"architecture-decision-records-0012-why-have-a-carousel-with-swiper-stories-mdx",5722:"4_Screens-stories-mdx",6449:"architecture-decision-records-0001-why-web-components-stories-mdx",6545:"architecture-decision-records-0005-why-nx-stories-mdx",6708:"components-carousel-stories-carousel-core-stories",6726:"architecture-decision-records-0002-why-ionic-stories-mdx",6938:"components-alert-stories-alert-core-stories",7177:"architecture-decision-records-0003-why-stencil-stories-mdx",7461:"6_Misc-stories-mdx",8508:"components-input-stories-input-core-stories",8906:"architecture-decision-records-0008-why-do-we-need-grids-stories-mdx",9107:"1_4_Icons-stories-mdx",9123:"components-icon-stories-icon-core-stories",9296:"3_Typography-stories-mdx",9351:"components-breadcrumb-stories-breadcrumb-core-stories",9371:"1_Colors-stories-mdx",9527:"7_Elevation-stories-mdx",9771:"components-chip-stories-chip-core-stories"}[chunkId]||chunkId)+"."+{21:"02e76c13",32:"83a1045a",92:"641a85ab",115:"37268904",162:"3ac5181f",244:"62942785",245:"a46236b8",281:"c6cddc21",289:"5d56e8b7",314:"3e6d376f",325:"f3f1c958",356:"898a06d8",369:"077d414d",387:"9172430b",420:"2aff242e",422:"0ce7e7b9",476:"2ca0b107",495:"69b9defc",608:"2a71dd28",691:"741b7ace",716:"06c07343",901:"cfae7704",974:"242f0078",1040:"ec08016f",1138:"c07817c7",1342:"eef55bdb",1467:"55f6cb81",1552:"951a6d24",1770:"515cb52f",1841:"759aad28",1855:"72b95226",1944:"79649708",2e3:"39722329",2004:"f9c93afe",2067:"12af455a",2132:"c1f7a307",2287:"36be2805",2367:"16948226",2392:"a7bfa464",2515:"816fd16f",2653:"fcc16673",2746:"978fc9d2",2819:"c2c2ee97",2871:"89d41cce",2996:"223f2acd",3088:"1da8c4e8",3258:"359c67f3",3347:"080de46e",3371:"fc098fe7",3527:"05f1a899",3666:"ccbf9833",3673:"a041eeff",3718:"f233ffb6",3751:"dd6e02e2",3752:"89981fb0",3831:"ed595da5",3850:"6329b5d9",3866:"ba5cd08e",3883:"424364d7",3928:"3f3bd34e",4005:"f9a2b0f5",4061:"23dd92d0",4193:"a5408737",4246:"793363d5",4257:"84b5f045",4324:"4bbda8f1",4393:"8e4fe8aa",4447:"4a8578ea",4547:"1f85858b",4598:"67df6fae",4602:"136b1a56",4624:"4bde8233",4629:"80725a6d",4671:"cfc89cc4",4780:"c7e0d75c",4793:"d04f6076",4995:"55d26981",5105:"2fe9cbbc",5169:"631bdfd1",5392:"ef2a534d",5419:"e9417257",5422:"308e0623",5432:"161b80e3",5548:"efbdd2ca",5562:"b82663ce",5722:"a92c16e1",5892:"1cc048dc",5936:"1d26133f",5975:"7380b947",5984:"fcacbfc7",6045:"5bd935a5",6157:"010c548d",6274:"29ff20d8",6367:"2f081421",6442:"bf22bf92",6449:"9174e461",6497:"c7f1d985",6545:"39f03674",6621:"e1ecfe4d",6708:"ba7cebff",6713:"8ab7af8b",6726:"e28c3832",6745:"c7b800a4",6938:"9c47af48",6944:"6013993e",7177:"c091db9d",7196:"c6b1e664",7323:"b6eba75d",7451:"2b9fce44",7460:"63ce0137",7461:"4df48c26",7484:"33c22c9d",7664:"0247ad00",7710:"db41fea0",7731:"68bda057",7806:"a90a11f6",7904:"89b48037",7923:"7bcb42ed",7933:"c3bc3ae6",7998:"ffeaed98",8080:"46b07faf",8130:"455ebdcd",8349:"6062c9fc",8482:"8627d820",8508:"f1c02356",8641:"f46cb390",8708:"aea76157",8728:"c370505c",8749:"3319873a",8754:"bc987e1a",8879:"a5393290",8906:"058e59f9",8926:"059a29b6",9019:"d718d8a2",9046:"f876451f",9050:"99c37f91",9060:"c8120f1f",9107:"0f4ad512",9116:"8663e9ab",9123:"f8c8314f",9148:"f713443b",9271:"10908785",9296:"34d0eb6b",9325:"117e4062",9351:"c74bbd38",9371:"ead70093",9440:"72c440a1",9454:"78242cd0",9458:"44d8feed",9527:"42c276e6",9555:"3facc4c3",9586:"9f3f73e0",9628:"1101e63d",9771:"15892cc4",9777:"93afc05a"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@atomium/docs:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@atomium/docs:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();
(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({2132:"2_Spacings-stories-mdx",2746:"0_Introduction-stories-mdx",3088:"components-button-stories-button-core-stories",3752:"1_1_React-stories-mdx",5419:"1_0_Core-stories-mdx",5722:"4_Screens-stories-mdx",6188:"1_1_Tokens-stories-mdx",9296:"3_Typography-stories-mdx",9371:"1_Colors-stories-mdx"}[chunkId]||chunkId)+"."+{21:"e4ebfff0",32:"3cb53a43",115:"a8cfef73",162:"45e2ea55",244:"af5aa8f2",314:"ba346912",325:"cd7034a4",345:"bf676b64",369:"929877bf",420:"28e5cf05",476:"def42129",495:"27fce088",527:"354903a0",691:"5110cb03",716:"ce63fdcd",875:"b056f729",901:"23421e99",974:"69607310",1040:"ec08016f",1467:"2e42880a",1526:"13dad911",1849:"fa81721c",1944:"d2659add",2067:"ea401e8b",2132:"b5d62594",2206:"1216da61",2367:"cabb373f",2392:"2ab60cb2",2547:"fafa057c",2653:"9be7a6c3",2746:"e56a443e",2819:"4db98b27",2871:"3be54d97",2927:"6f45595f",2934:"480a93cd",2996:"dfe3c1a2",3088:"a72b6d03",3258:"66ad5acd",3347:"812e2193",3361:"f8eb4281",3527:"fd197497",3666:"0e3236ae",3673:"6bcf71a1",3751:"02a3ab7b",3752:"93ace08b",3771:"9601a6ef",3928:"18bf1094",3979:"f77a1883",4061:"d4861dfb",4180:"48dad3b6",4268:"89ae2157",4324:"300e001d",4335:"823c9d13",4393:"7461480c",4447:"5287efd1",4547:"10735cdd",4598:"bc073e11",4624:"6c134de6",4629:"021bfbbe",5169:"75a59551",5245:"03dd4746",5392:"498c1a55",5419:"ca35b449",5548:"b9cf9ca0",5559:"3b6d94f9",5722:"7d2fe86a",5892:"8882956f",5984:"2a0dbe75",6157:"6c03ff5a",6188:"e524a95c",6367:"c3e259f2",6381:"a9eb88ae",6442:"83a3707b",6497:"c7f1d985",6710:"e6e634cc",6745:"bae32169",6944:"2f1ae309",7085:"675b2f48",7460:"6e5a012b",7484:"3a0e7842",7582:"c45a8d4e",7664:"0efedd53",7710:"7a11e553",7806:"a90a11f6",7904:"80251f4f",7923:"06bd1215",7933:"4eb6b726",8001:"9d21493c",8080:"87d4970f",8130:"b5a7f5e7",8349:"d40e232f",8421:"86012610",8482:"7a9398f2",8641:"f72eb48c",8708:"567d2eae",8749:"3bc345de",8754:"f3fd0f25",8780:"8be8dcc4",8821:"2e4d8eb5",8879:"4fd084e1",8926:"059a29b6",9046:"ef4f1229",9050:"8c32c304",9060:"697edf8d",9116:"c696819a",9148:"91a4ed85",9271:"771d9b0f",9296:"0178ca2d",9325:"5a62b7dc",9371:"92de27ec",9454:"4f5ebb22",9458:"4b3e8b1b",9555:"18f4c58c",9568:"ac0cb5fa",9586:"fe62fe55",9625:"2484eca1",9628:"f57327b0",9777:"285f2be9",9828:"eda218b6"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@atomium/docs:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@atomium/docs:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();
(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({245:"architecture-decision-records-0000-why-design-system-stories-mdx",422:"architecture-decision-records-0006-why-that-component-creation-definition-stories-mdx",1138:"components-textarea-stories-textarea-core-stories",1342:"components-grid-stories-grid-core-stories",1469:"5_Misc-stories-mdx",1552:"1_3_Tokens-stories-mdx",2e3:"1_2_Vue-stories-mdx",2132:"2_Spacings-stories-mdx",2746:"0_Introduction-stories-mdx",3088:"components-button-stories-button-core-stories",3371:"components-select-stories-select-core-stories",3752:"1_1_React-stories-mdx",4602:"architecture-decision-records-0004-why-a-monorepo-stories-mdx",4995:"architecture-decision-records-0007-why-do-we-transpile-web-components-for-react-and-not-for-vue-stories-mdx",5419:"1_0_Core-stories-mdx",5722:"4_Screens-stories-mdx",6449:"architecture-decision-records-0001-why-web-components-stories-mdx",6545:"architecture-decision-records-0005-why-nx-stories-mdx",6726:"architecture-decision-records-0002-why-ionic-stories-mdx",7177:"architecture-decision-records-0003-why-stencil-stories-mdx",8508:"components-input-stories-input-core-stories",8906:"architecture-decision-records-0008-why-do-we-need-grids-stories-mdx",9123:"components-icon-stories-icon-core-stories",9296:"3_Typography-stories-mdx",9371:"1_Colors-stories-mdx",9771:"components-chip-stories-chip-core-stories"}[chunkId]||chunkId)+"."+{21:"a388e5f4",32:"978e2b35",115:"ad80f212",162:"b1c3bf6d",244:"c8510da0",245:"88ea69d4",289:"eb644dbe",314:"3af936d7",325:"61bea291",369:"6fbd86d6",420:"f0e44461",422:"98a3d602",476:"9d50d858",495:"c27d1910",691:"9e9661d1",716:"613689e2",875:"b056f729",901:"226a449c",974:"738a056d",1040:"ec08016f",1138:"cca4dcc1",1342:"54caf74f",1467:"ded30954",1469:"d2b64147",1552:"9746bce4",1607:"7bab2004",1849:"94b146e8",1944:"cd09185d",2e3:"fcc10e21",2067:"461e225e",2132:"b5d62594",2206:"a0dd209d",2218:"5e43502e",2226:"fcc8d96c",2367:"bd18258f",2392:"cb96ca6b",2547:"fafa057c",2653:"ddb894aa",2746:"4aeeb881",2819:"0b380ba0",2871:"54de47b8",2996:"7650109a",3088:"6ddfc4e4",3258:"f3e2b590",3347:"a6240a7c",3361:"f8eb4281",3371:"d61e9ad4",3527:"58f0ff92",3666:"e1a0a00c",3673:"f1bcfb2b",3751:"73fb120a",3752:"7061b363",3771:"9601a6ef",3776:"f663c16f",3928:"ed093da1",3974:"88268b62",4061:"5c8a0a13",4324:"5d63ea45",4335:"28cc7826",4393:"cf99d4bc",4447:"17cd01bc",4458:"7ed00ec0",4547:"d423a183",4598:"50489fea",4602:"6a1d30ed",4624:"c96e74c7",4629:"294614fb",4692:"ad19edac",4809:"ff5bba0c",4995:"a230a757",5088:"395deac3",5169:"72068cfb",5265:"9e2537f8",5392:"dcd7841c",5415:"f1d1e5e7",5419:"ca35b449",5548:"a7a28234",5691:"39b20a61",5722:"7d2fe86a",5858:"e9d613bc",5892:"8882956f",5984:"5ef9d191",6157:"4e02c1a0",6274:"dd3a5269",6367:"5346554e",6381:"a9eb88ae",6442:"871f3dd0",6449:"c05cb3de",6497:"c7f1d985",6545:"87e7f81b",6726:"4df2e3c0",6745:"df05af2a",6944:"ee349d67",7177:"bcca0a92",7460:"0d82ba55",7484:"e562ca8a",7582:"c45a8d4e",7664:"9688a057",7710:"953c18c3",7806:"a90a11f6",7904:"381f3c0e",7923:"300c1210",7933:"d482ba3b",8080:"4693207c",8130:"028f9bca",8284:"02d365e8",8349:"00e128cc",8421:"86012610",8482:"e75cc734",8508:"7ce1bf85",8641:"aafe89c9",8647:"34971a11",8708:"26275eb2",8749:"7253297e",8754:"288a120a",8879:"dd0ff68c",8906:"9abe4b0d",8926:"059a29b6",9046:"bd62de88",9050:"601950fa",9060:"b371a265",9116:"e837e2ea",9123:"7ce0882e",9148:"a8b933cf",9271:"c8e8a500",9296:"f3581326",9325:"abce948c",9371:"92de27ec",9454:"dd2ab230",9458:"17b0bbe5",9555:"a04be5c1",9586:"eb4a652a",9625:"2484eca1",9628:"82be805a",9771:"dcc1eeeb",9777:"0f0ffcf4",9932:"03a58c12",9979:"aaffcc00"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@atomium/docs:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@atomium/docs:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();
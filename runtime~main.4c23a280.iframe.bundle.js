(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({92:"architecture-decision-records-0011-why-host-our-own-icon-library-and-cdn-stories-mdx",245:"architecture-decision-records-0000-why-design-system-stories-mdx",387:"5_Grid-stories-mdx",422:"architecture-decision-records-0006-why-that-component-creation-definition-stories-mdx",1138:"components-textarea-stories-textarea-core-stories",1342:"components-grid-stories-grid-core-stories",1552:"1_3_Tokens-stories-mdx",2e3:"1_2_Vue-stories-mdx",2132:"2_Spacings-stories-mdx",2287:"architecture-decision-records-0010-why-do-we-need-react-fix-stories-mdx",2746:"0_Introduction-stories-mdx",3088:"components-button-stories-button-core-stories",3371:"components-select-stories-select-core-stories",3752:"1_1_React-stories-mdx",3866:"architecture-decision-records-0009-why-use-onclick-event-on-breadcrumb-component-event-undocumented-stories-mdx",4602:"architecture-decision-records-0004-why-a-monorepo-stories-mdx",4995:"architecture-decision-records-0007-why-do-we-transpile-web-components-for-react-and-not-for-vue-stories-mdx",5419:"1_0_Core-stories-mdx",5722:"4_Screens-stories-mdx",6449:"architecture-decision-records-0001-why-web-components-stories-mdx",6545:"architecture-decision-records-0005-why-nx-stories-mdx",6726:"architecture-decision-records-0002-why-ionic-stories-mdx",6938:"components-alert-stories-alert-core-stories",7177:"architecture-decision-records-0003-why-stencil-stories-mdx",7461:"6_Misc-stories-mdx",8508:"components-input-stories-input-core-stories",8906:"architecture-decision-records-0008-why-do-we-need-grids-stories-mdx",9107:"1_4_Icons-stories-mdx",9123:"components-icon-stories-icon-core-stories",9296:"3_Typography-stories-mdx",9351:"components-breadcrumb-stories-breadcrumb-core-stories",9371:"1_Colors-stories-mdx",9771:"components-chip-stories-chip-core-stories"}[chunkId]||chunkId)+"."+{21:"91eadb6d",32:"ff4349cc",92:"641a85ab",115:"055d7c58",162:"7af074e1",244:"3111093b",245:"a46236b8",289:"8b2b5aec",314:"d04d163e",325:"a029053f",369:"d9b86f1c",387:"9172430b",420:"e809eb98",422:"0ce7e7b9",424:"7a229646",476:"9bc711ba",495:"e1683473",691:"85c41ef5",703:"5dd7aec3",716:"d73e2a8a",901:"e2b0677e",974:"009f81f1",1040:"ec08016f",1138:"c07817c7",1342:"eef55bdb",1467:"808de46f",1552:"5be4998a",1682:"0a1cacbf",1815:"039e7da2",1944:"b7c6602f",2e3:"39722329",2004:"88d06a24",2067:"9d6290df",2132:"c1f7a307",2133:"e5604019",2287:"36be2805",2367:"682cd16b",2392:"5d186655",2653:"9d8bf644",2700:"1617a19f",2746:"9eb9b8b4",2819:"99a82bf0",2871:"a818e96c",2995:"7c946af6",2996:"e87b92d4",3088:"1da8c4e8",3258:"a9224d3c",3347:"dd729252",3371:"fc098fe7",3527:"dbc7c45a",3666:"5290065b",3673:"7554b758",3751:"61eb6048",3752:"89981fb0",3831:"ae7dc469",3850:"872e6424",3866:"ba5cd08e",3928:"e3bb3476",4005:"e774b983",4061:"ce00376f",4076:"875c41b1",4246:"9f53e94a",4324:"2c754eeb",4393:"594fa65b",4447:"fb5b6085",4547:"eed36601",4598:"380fe04f",4602:"136b1a56",4624:"768f2347",4629:"0fa1e01b",4746:"01b54544",4770:"6c989172",4780:"5ea9084c",4850:"0ec8b727",4995:"55d26981",5105:"9914b712",5169:"c9a4f015",5392:"44069da0",5419:"e9417257",5548:"3b8c03ae",5562:"b82663ce",5722:"a92c16e1",5892:"1cc048dc",5936:"1d26133f",5975:"a39aa4eb",5984:"1c1d2d25",6045:"5bd935a5",6157:"f7c19d29",6274:"4fba33fe",6367:"ddc92573",6442:"322a8d0c",6449:"9174e461",6497:"c7f1d985",6545:"39f03674",6726:"e28c3832",6745:"8cad919a",6938:"9c47af48",6944:"a4ea9dfa",7177:"c091db9d",7451:"2b9fce44",7460:"5cc9594b",7461:"f50077bc",7484:"8406bf16",7664:"b4adfba9",7710:"02380bf7",7731:"83206deb",7806:"a90a11f6",7904:"09c07b66",7923:"2465e0b5",7933:"d95f2e41",7998:"7373d387",8080:"e5641cdf",8130:"49ab8bef",8349:"ed815c1e",8482:"d57a5324",8508:"813b8c15",8641:"ac8e441d",8708:"03527934",8728:"c370505c",8749:"8836b590",8754:"395b95a6",8879:"e762999b",8906:"058e59f9",8926:"059a29b6",9019:"d718d8a2",9046:"3cd6b134",9050:"1fd0d0a6",9060:"24074dad",9107:"686a00de",9116:"46bd6f7b",9123:"f8c8314f",9148:"13c32cbe",9271:"ae14cd83",9296:"34d0eb6b",9325:"970a62ed",9351:"c74bbd38",9371:"ead70093",9440:"72c440a1",9454:"16e8e5d6",9458:"e5d153ef",9555:"5c98c9f8",9586:"65bd3ed7",9628:"24c2ead2",9637:"65d50dfe",9771:"15892cc4",9777:"e7172796"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@atomium/docs:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@atomium/docs:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();
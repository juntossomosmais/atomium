(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({245:"architecture-decision-records-0000-why-design-system-stories-mdx",387:"5_Grid-stories-mdx",422:"architecture-decision-records-0006-why-that-component-creation-definition-stories-mdx",1138:"components-textarea-stories-textarea-core-stories",1342:"components-grid-stories-grid-core-stories",1552:"1_3_Tokens-stories-mdx",2e3:"1_2_Vue-stories-mdx",2132:"2_Spacings-stories-mdx",2746:"0_Introduction-stories-mdx",3088:"components-button-stories-button-core-stories",3371:"components-select-stories-select-core-stories",3752:"1_1_React-stories-mdx",3866:"architecture-decision-records-0009-why-use-onclick-event-on-breadcrumb-component-event-undocumented-stories-mdx",4602:"architecture-decision-records-0004-why-a-monorepo-stories-mdx",4995:"architecture-decision-records-0007-why-do-we-transpile-web-components-for-react-and-not-for-vue-stories-mdx",5419:"1_0_Core-stories-mdx",5722:"4_Screens-stories-mdx",6449:"architecture-decision-records-0001-why-web-components-stories-mdx",6545:"architecture-decision-records-0005-why-nx-stories-mdx",6726:"architecture-decision-records-0002-why-ionic-stories-mdx",6938:"components-alert-stories-alert-core-stories",7177:"architecture-decision-records-0003-why-stencil-stories-mdx",7461:"6_Misc-stories-mdx",8508:"components-input-stories-input-core-stories",8906:"architecture-decision-records-0008-why-do-we-need-grids-stories-mdx",9123:"components-icon-stories-icon-core-stories",9296:"3_Typography-stories-mdx",9351:"components-breadcrumb-stories-breadcrumb-core-stories",9371:"1_Colors-stories-mdx",9771:"components-chip-stories-chip-core-stories"}[chunkId]||chunkId)+"."+{21:"685c5b7c",32:"ff4349cc",115:"055d7c58",162:"7af074e1",244:"3111093b",245:"f65e50c7",289:"8b2b5aec",314:"8cb3e23d",325:"4cd83bd8",369:"d9b86f1c",387:"9172430b",420:"e809eb98",422:"2a7e91a8",424:"7a229646",476:"9bc711ba",495:"e1683473",691:"a1e8c69e",703:"5dd7aec3",716:"a1be57be",901:"e2b0677e",974:"009f81f1",1040:"ec08016f",1138:"adfb2739",1342:"1ebc0a90",1467:"808de46f",1526:"400562da",1552:"38744366",1716:"4000e87f",1815:"039e7da2",1849:"120f33a7",1944:"b7c6602f",2e3:"bedd65fb",2004:"88d06a24",2067:"9d6290df",2132:"c1f7a307",2133:"e5604019",2211:"8338dbcd",2367:"682cd16b",2392:"5d186655",2653:"351fd0b6",2700:"1617a19f",2746:"6871449b",2819:"99a82bf0",2871:"a818e96c",2996:"e87b92d4",3088:"8f093e17",3258:"cd59394f",3347:"dd729252",3371:"f0c2b28e",3527:"dbc7c45a",3666:"5290065b",3673:"071517ca",3751:"61eb6048",3752:"007851e4",3831:"ae7dc469",3850:"62c0c7e8",3866:"382f41b0",3928:"e3bb3476",4005:"e774b983",4061:"ce00376f",4076:"875c41b1",4246:"57518e1b",4324:"2c754eeb",4393:"594fa65b",4447:"fb5b6085",4547:"eed36601",4598:"380fe04f",4602:"dcee8d13",4624:"bfddab4d",4629:"0fa1e01b",4746:"01b54544",4780:"0fb89a61",4995:"75463f8a",5105:"9914b712",5169:"c9a4f015",5392:"44069da0",5419:"05a02ae0",5548:"ff881167",5562:"b82663ce",5722:"a92c16e1",5892:"c36e7baf",5975:"a39aa4eb",5984:"1c1d2d25",6045:"5bd935a5",6145:"85fcdd92",6157:"f7c19d29",6274:"4fba33fe",6367:"ddc92573",6442:"322a8d0c",6449:"f03673c2",6497:"c7f1d985",6545:"fe8d2b87",6726:"526701dd",6745:"8cad919a",6938:"f7eadd20",6944:"a4ea9dfa",7177:"f8c01d2e",7460:"5cc9594b",7461:"f50077bc",7484:"8406bf16",7664:"d4db85e1",7710:"02380bf7",7717:"1bf6fe05",7731:"83206deb",7806:"a90a11f6",7904:"09c07b66",7923:"2465e0b5",7933:"d95f2e41",8001:"9d21493c",8080:"e5641cdf",8130:"49ab8bef",8321:"a4c82d38",8349:"ed815c1e",8482:"d57a5324",8508:"3825c839",8641:"ac8e441d",8708:"03527934",8749:"8836b590",8754:"395b95a6",8821:"2e4d8eb5",8879:"e762999b",8906:"ee46d461",8926:"059a29b6",9019:"d718d8a2",9046:"3cd6b134",9050:"bc36aadf",9060:"24074dad",9116:"46bd6f7b",9123:"f8c8314f",9148:"13c32cbe",9271:"ae14cd83",9296:"34d0eb6b",9325:"970a62ed",9351:"c74bbd38",9371:"ead70093",9440:"72c440a1",9454:"4e6109ed",9458:"e5d153ef",9555:"412f17c5",9586:"65bd3ed7",9628:"24c2ead2",9771:"f4eb6bde",9777:"c995c931"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@atomium/docs:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@atomium/docs:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();
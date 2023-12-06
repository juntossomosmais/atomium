(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({92:"architecture-decision-records-0011-why-host-our-own-icon-library-and-cdn-stories-mdx",245:"architecture-decision-records-0000-why-design-system-stories-mdx",281:"architecture-decision-records-0013-why-do-we-need-to-convert-carousel-item-stories-mdx",387:"5_Grid-stories-mdx",422:"architecture-decision-records-0006-why-that-component-creation-definition-stories-mdx",1138:"components-textarea-stories-textarea-core-stories",1342:"components-grid-stories-grid-core-stories",1552:"1_3_Tokens-stories-mdx",1942:"components-tag-stories-tag-core-stories",2e3:"1_2_Vue-stories-mdx",2132:"2_Spacings-stories-mdx",2287:"architecture-decision-records-0010-why-do-we-need-react-fix-stories-mdx",2746:"0_Introduction-stories-mdx",3088:"components-button-stories-button-core-stories",3371:"components-select-stories-select-core-stories",3752:"1_1_React-stories-mdx",3866:"architecture-decision-records-0009-why-use-onclick-event-on-breadcrumb-component-event-undocumented-stories-mdx",4602:"architecture-decision-records-0004-why-a-monorepo-stories-mdx",4671:"components-badge-stories-badge-core-stories",4995:"architecture-decision-records-0007-why-do-we-transpile-web-components-for-react-and-not-for-vue-stories-mdx",5419:"1_0_Core-stories-mdx",5422:"architecture-decision-records-0012-why-have-a-carousel-with-swiper-stories-mdx",5722:"4_Screens-stories-mdx",6449:"architecture-decision-records-0001-why-web-components-stories-mdx",6545:"architecture-decision-records-0005-why-nx-stories-mdx",6708:"components-carousel-stories-carousel-core-stories",6726:"architecture-decision-records-0002-why-ionic-stories-mdx",6938:"components-alert-stories-alert-core-stories",7177:"architecture-decision-records-0003-why-stencil-stories-mdx",7461:"6_Misc-stories-mdx",7906:"components-carousel-carousel-item-stories-carousel-item-core-stories-mdx",8508:"components-input-stories-input-core-stories",8906:"architecture-decision-records-0008-why-do-we-need-grids-stories-mdx",9107:"1_4_Icons-stories-mdx",9123:"components-icon-stories-icon-core-stories",9296:"3_Typography-stories-mdx",9351:"components-breadcrumb-stories-breadcrumb-core-stories",9371:"1_Colors-stories-mdx",9527:"7_Elevation-stories-mdx",9771:"components-chip-stories-chip-core-stories"}[chunkId]||chunkId)+"."+{92:"f17962ef",111:"fa6b1da3",212:"450b322a",245:"2b7d7fa6",278:"ece2c02a",281:"38a770c5",371:"38d62c8d",387:"c36465e6",422:"5f0b6db1",488:"d9652acf",491:"ceffcd85",539:"dade0ee3",650:"9a8d696a",656:"d11204c7",687:"f6ff7a9d",701:"61bf47f9",746:"cf52ffd7",765:"db0f5146",867:"d8d4acc5",933:"82e0ee20",1028:"89e7ee82",1040:"ec08016f",1069:"6f0d603b",1109:"976feb97",1138:"95319986",1145:"9c15cfcf",1169:"df36820d",1189:"f6c72bb2",1238:"aef92782",1266:"0876e60b",1342:"6aea1f40",1476:"4502d1f8",1552:"423d2eda",1565:"1a0271cc",1590:"55338b63",1631:"2b5c8695",1889:"1a541a6f",1896:"1180e0e6",1942:"33d1fa01",2e3:"b5482e16",2018:"a2a87fa3",2132:"532f1282",2287:"08abd8c2",2304:"3b1bf71f",2654:"bf082d20",2746:"cc00dfb3",2764:"461fb07f",2788:"c281790c",2868:"6a2bad4c",3088:"0d0a3a01",3174:"817af0cc",3214:"a7e16748",3371:"2294c515",3531:"c2204651",3558:"aabba943",3600:"0cb5c3ff",3624:"480a1902",3628:"97f8ae46",3676:"d13fa564",3728:"5590aa40",3752:"4316c417",3866:"e2774ee3",4045:"1fc84710",4155:"c840dd55",4285:"4d6bb41e",4373:"e81a4f99",4377:"2bfca975",4421:"83c58394",4485:"ebf5a870",4602:"92cae2e8",4605:"df5e665d",4617:"91c2c589",4667:"8164e2f4",4671:"cfc89cc4",4752:"718995b8",4982:"3188f0c0",4995:"5f4b2edc",5115:"aa1f2839",5144:"35ef1223",5225:"30c48c46",5419:"3dd3b80f",5422:"85366396",5562:"aaf3d478",5722:"100240fb",5819:"ead09d34",5876:"e92372b7",5881:"ae79fb84",5892:"1cc048dc",5981:"b9fec722",5984:"7f4b2215",6053:"4de6274d",6137:"63a09f96",6144:"77e5905b",6146:"bdec326b",6308:"62ba5d68",6318:"48eafdbb",6441:"ce219555",6449:"b09eca50",6481:"1e9552c5",6508:"551b5a26",6545:"eb0bfdd6",6569:"044db8dc",6667:"3046820b",6683:"6d3fc4d7",6708:"43cd582f",6726:"abb84feb",6738:"395fd2ab",6907:"39e6f3fd",6938:"30a4711d",6974:"5f4c7956",7037:"b43ecefd",7177:"7d7de050",7344:"d6acc430",7408:"6fd7b24f",7426:"e11c132c",7461:"aec5df2f",7618:"5bbc415a",7647:"e59aa180",7765:"65ed525c",7817:"6ce79f19",7881:"23d96552",7882:"b3eed4dc",7906:"daa0fbc8",7998:"7373d387",8021:"b5b4446f",8116:"c9549b33",8156:"832fce72",8222:"e05cb911",8225:"c5e80109",8246:"5f45807b",8270:"ddd9f961",8276:"4de73e0a",8288:"a3be901f",8290:"cf0bbceb",8303:"29805616",8454:"5eb88ad9",8508:"78300090",8569:"a6aa3a5e",8577:"2e352766",8707:"325f7f01",8906:"3d0e757a",8971:"fade40d1",9095:"2a9b63e2",9107:"077049c4",9123:"c3f639d3",9145:"5998ae73",9266:"908b3f45",9296:"2cc69c52",9351:"048020c1",9371:"1b3c3e0d",9527:"3d9ac468",9632:"45871342",9762:"8a911fc7",9771:"f2b78808",9855:"e85a3bdf"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@atomium/docs:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@atomium/docs:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();
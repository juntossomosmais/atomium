(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({92:"architecture-decision-records-0011-why-host-our-own-icon-library-and-cdn-stories-mdx",245:"architecture-decision-records-0000-why-design-system-stories-mdx",281:"architecture-decision-records-0013-why-do-we-need-to-convert-carousel-item-stories-mdx",387:"5_Grid-stories-mdx",422:"architecture-decision-records-0006-why-that-component-creation-definition-stories-mdx",1138:"components-textarea-stories-textarea-core-stories",1342:"components-grid-stories-grid-core-stories",1552:"1_3_Tokens-stories-mdx",1942:"components-tag-stories-tag-core-stories",2e3:"1_2_Vue-stories-mdx",2132:"2_Spacings-stories-mdx",2287:"architecture-decision-records-0010-why-do-we-need-react-fix-stories-mdx",2746:"0_Introduction-stories-mdx",3088:"components-button-stories-button-core-stories",3371:"components-select-stories-select-core-stories",3752:"1_1_React-stories-mdx",3866:"architecture-decision-records-0009-why-use-onclick-event-on-breadcrumb-component-event-undocumented-stories-mdx",4602:"architecture-decision-records-0004-why-a-monorepo-stories-mdx",4671:"components-badge-stories-badge-core-stories",4995:"architecture-decision-records-0007-why-do-we-transpile-web-components-for-react-and-not-for-vue-stories-mdx",5419:"1_0_Core-stories-mdx",5422:"architecture-decision-records-0012-why-have-a-carousel-with-swiper-stories-mdx",5722:"4_Screens-stories-mdx",6449:"architecture-decision-records-0001-why-web-components-stories-mdx",6545:"architecture-decision-records-0005-why-nx-stories-mdx",6708:"components-carousel-stories-carousel-core-stories",6726:"architecture-decision-records-0002-why-ionic-stories-mdx",6938:"components-alert-stories-alert-core-stories",7177:"architecture-decision-records-0003-why-stencil-stories-mdx",7461:"6_Misc-stories-mdx",7906:"components-carousel-carousel-item-stories-carousel-item-core-stories-mdx",8508:"components-input-stories-input-core-stories",8906:"architecture-decision-records-0008-why-do-we-need-grids-stories-mdx",9107:"1_4_Icons-stories-mdx",9123:"components-icon-stories-icon-core-stories",9296:"3_Typography-stories-mdx",9351:"components-breadcrumb-stories-breadcrumb-core-stories",9371:"1_Colors-stories-mdx",9527:"7_Elevation-stories-mdx",9771:"components-chip-stories-chip-core-stories"}[chunkId]||chunkId)+"."+{92:"f17962ef",111:"04977f6b",245:"2b7d7fa6",278:"5c3a83e8",281:"38a770c5",371:"38d48a25",387:"c36465e6",422:"5f0b6db1",488:"8f08913c",491:"a1d80097",539:"0e166d49",650:"100f0aff",656:"d11204c7",687:"f6ff7a9d",701:"a4ca360a",746:"2c291dd1",765:"2fd5a9ef",867:"923eba88",933:"fcfc65f5",1028:"38809b75",1040:"ec08016f",1069:"6f0d603b",1109:"976feb97",1138:"95319986",1169:"f18ffd4b",1189:"f6c72bb2",1238:"b9e7f419",1266:"e782e9e0",1342:"6aea1f40",1476:"2e44a6ab",1552:"423d2eda",1565:"080ed51f",1590:"3f5622bc",1631:"a13d0a42",1889:"d0b9dfce",1896:"3901b519",1942:"33d1fa01",2e3:"b5482e16",2018:"95958a4b",2132:"532f1282",2287:"08abd8c2",2304:"62f0502c",2654:"73bba3c0",2746:"cc00dfb3",2764:"74f2d093",2825:"fe6c3db3",2868:"ba834ec4",3088:"0d0a3a01",3174:"806b0d19",3214:"504d170a",3371:"2294c515",3531:"e681b1a2",3558:"b76d4736",3600:"46b8e170",3624:"fc83c481",3628:"0d874ea7",3676:"3b783c6a",3728:"34b27460",3752:"4316c417",3866:"e2774ee3",4045:"00a41271",4155:"c840dd55",4285:"72da24b4",4377:"4e61aeb1",4421:"83c58394",4485:"596a214a",4602:"92cae2e8",4603:"12d91f5b",4605:"df5e665d",4617:"80271d85",4667:"df1fd142",4671:"cfc89cc4",4752:"811cd795",4982:"0ad7cde0",4995:"5f4b2edc",5115:"8b38bf3f",5144:"d01412b0",5225:"7cf795cf",5419:"3dd3b80f",5422:"85366396",5562:"0ee092cc",5722:"100240fb",5801:"a07adf52",5819:"ead09d34",5876:"e92372b7",5881:"36809738",5892:"1cc048dc",5981:"267f8a7b",5984:"8b9166f3",6053:"45ced692",6144:"77e5905b",6146:"5ace9ccc",6308:"70e321d4",6318:"48eafdbb",6441:"ee50f197",6449:"b09eca50",6481:"670a65fe",6508:"551b5a26",6545:"eb0bfdd6",6569:"32dd5224",6667:"0a92949e",6683:"cbd6c785",6708:"abe6b367",6726:"abb84feb",6738:"f1ff5e46",6907:"3f38b46b",6938:"30a4711d",6974:"03998e98",7037:"c08b0589",7177:"7d7de050",7344:"e2253bb1",7408:"ccdb7951",7426:"6069bd09",7461:"aec5df2f",7618:"5bbc415a",7647:"e37d4834",7765:"3aa632f5",7817:"ce4f6e16",7881:"c075f183",7882:"afbba2aa",7906:"daa0fbc8",7998:"7373d387",8021:"76dc76af",8116:"c9549b33",8156:"ac308438",8222:"566b7bd6",8225:"964f7a22",8230:"6973ff5e",8246:"3000b44d",8270:"711c0717",8276:"7a0c9666",8288:"94c5583c",8290:"86a602f2",8303:"72371b84",8454:"c86a6018",8508:"78300090",8569:"2ae342d9",8577:"9b0d7112",8695:"323aed3a",8707:"8f538d12",8906:"3d0e757a",8971:"53cc7d33",9095:"67ceb45d",9107:"077049c4",9123:"c3f639d3",9145:"97eececb",9266:"4909d710",9296:"2cc69c52",9351:"048020c1",9371:"1b3c3e0d",9527:"3d9ac468",9632:"0b49b19c",9762:"c938307a",9771:"f2b78808",9855:"35bf5bec"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@atomium/docs:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@atomium/docs:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();
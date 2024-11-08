(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({98:"0_Introduction-stories-mdx",535:"components-link-stories-link-core-stories",769:"4_Screens-stories-mdx",1062:"2_Spacings-stories-mdx",1927:"architecture-decision-records-0010-why-do-we-need-react-fix-stories-mdx",1992:"1_4_Icons-stories-mdx",2033:"components-steps-modal-stories-steps-modal-core-stories",2508:"3_Typography-stories-mdx",3375:"components-textarea-stories-textarea-core-stories",3413:"architecture-decision-records-0000-why-design-system-stories-mdx",3545:"architecture-decision-records-0011-why-host-our-own-icon-library-and-cdn-stories-mdx",3637:"architecture-decision-records-0012-why-have-a-carousel-with-swiper-stories-mdx",3910:"architecture-decision-records-0005-why-nx-stories-mdx",3989:"1_Colors-stories-mdx",4019:"components-select-stories-select-core-stories",4183:"components-grid-stories-grid-core-stories",4185:"components-breadcrumb-stories-breadcrumb-core-stories",4269:"components-list-slider-stories-list-slider-core-stories",4575:"architecture-decision-records-0009-why-use-onclick-event-on-breadcrumb-component-event-undocumented-stories-mdx",4626:"1_1_React-stories-mdx",4715:"architecture-decision-records-0013-why-do-we-need-to-convert-carousel-item-stories-mdx",4762:"architecture-decision-records-0003-why-stencil-stories-mdx",4825:"components-modal-stories-modal-core-stories",4964:"6_Misc-stories-mdx",5217:"5_Grid-stories-mdx",5577:"components-container-stories-container-core-stories",5796:"architecture-decision-records-0006-why-that-component-creation-definition-stories-mdx",5905:"components-input-stories-input-core-stories",5961:"components-icon-stories-icon-core-stories",6379:"components-chip-stories-chip-core-stories",6696:"architecture-decision-records-0007-why-do-we-transpile-web-components-for-react-and-vue-stories-mdx",7020:"7_Elevation-stories-mdx",7147:"architecture-decision-records-0001-why-web-components-stories-mdx",7645:"components-tag-stories-tag-core-stories",7740:"1_2_Vue-stories-mdx",7841:"1_3_Tokens-stories-mdx",7960:"architecture-decision-records-0004-why-a-monorepo-stories-mdx",8359:"components-carousel-stories-carousel-core-stories",8629:"components-alert-stories-alert-core-stories",8690:"architecture-decision-records-0008-why-do-we-need-grids-stories-mdx",8831:"components-button-stories-button-core-stories",9293:"components-badge-stories-badge-core-stories",9401:"architecture-decision-records-0002-why-ionic-stories-mdx",9823:"1_0_Core-stories-mdx"}[chunkId]||chunkId)+"."+{21:"74e20dbb",80:"ae492200",98:"1fed3e5e",158:"4b2633ab",392:"26b7574b",421:"46bbef7d",423:"e63471d9",535:"4fad81a8",702:"dee1ffc8",769:"8a7e792b",805:"0791b00c",825:"7aa568af",888:"782c70ef",936:"6f2d91d1",967:"98267ee6",1006:"71c3e90b",1034:"436be18d",1062:"0f687914",1148:"0532d4c5",1210:"a33a4ddd",1259:"e2609ed6",1296:"1d6562b9",1320:"726660a1",1362:"2e45894b",1628:"287ddb44",1687:"20956c56",1800:"a6730df6",1899:"3097921f",1904:"d4ed3059",1927:"6445574f",1961:"e8de5dc1",1992:"ba3e5146",1994:"fdf7a287",2033:"f0a521b1",2079:"a3eb2eba",2117:"2d62e188",2158:"e81861fe",2260:"f167a810",2468:"d385baf3",2508:"01d08650",3017:"50c6c48f",3375:"d39113ed",3405:"8464923d",3413:"1310d9aa",3545:"ea70e8bf",3550:"9d84fcbf",3635:"30ae3ee1",3637:"68525c2b",3671:"53f51739",3749:"878963b1",3761:"92f26887",3910:"2fdf53bb",3958:"a0038260",3989:"afd29592",4015:"28b97982",4019:"bebfc80d",4124:"68dbb840",4154:"105532c3",4173:"b6119020",4183:"94a231e7",4185:"601a6971",4187:"3e09f097",4244:"73ecb71b",4269:"47ab1e39",4315:"2ec7e4e6",4495:"61532f0e",4513:"891e929e",4535:"7f0aee71",4575:"74f03fe1",4626:"eb6906ee",4715:"cb4ef8c2",4762:"a74c0513",4814:"0ec4d880",4825:"20775162",4880:"def25b0d",4909:"0afc2109",4964:"7d0c0bff",4972:"a0765e0d",5083:"3ec5bf2e",5124:"2b096430",5217:"763eee3c",5231:"017476eb",5270:"2056e8a8",5314:"053afdf5",5359:"3615847d",5361:"d489cdd2",5398:"df48b173",5458:"121324d3",5548:"b132e982",5577:"82dab5ce",5650:"b4447945",5706:"234971c6",5796:"f9d1ec78",5905:"f9e1bd25",5961:"1fcb66bb",5981:"5a88e1ea",6116:"526a9e3c",6196:"8002f5d0",6205:"a53febb1",6250:"542fb6da",6276:"ccd0fe99",6338:"46aeff6b",6379:"d7f076ed",6390:"826232f2",6396:"10735c05",6551:"4bfd0a68",6678:"f7ef1f2c",6694:"659a1abe",6696:"543db6f2",6703:"ccac3205",6707:"1969b6b3",6767:"c5e79bf2",6781:"d9c8ea64",6862:"1b6471d2",6886:"1033cbd6",6960:"25d92d51",6984:"c3565aa6",7012:"19803db3",7020:"7ecd1c23",7138:"0033ba77",7147:"ff9b0911",7154:"c5d9eadc",7180:"8544349b",7240:"2230a0b7",7291:"55d5f3e2",7399:"de93364b",7499:"55f4c0f7",7501:"5d4b4c2f",7645:"ce03b7ce",7715:"15cbcd19",7740:"c3ff1566",7742:"018bf235",7783:"267729c7",7841:"c5bcc00b",7843:"503200da",7869:"96659bfc",7960:"3180f52d",8017:"2ca0482c",8115:"e53d63b4",8141:"f2db8379",8334:"07a4e50e",8359:"473184c5",8470:"c1d94088",8559:"5498867b",8615:"f7e3125f",8626:"6460612c",8629:"4d2c9be4",8690:"76bda27f",8831:"2c1b3d84",8904:"99fde57a",8909:"fae75570",8990:"9542532d",9010:"a6ba7cbd",9059:"29d71279",9224:"fa52c2ed",9293:"8f817553",9384:"a045c395",9401:"48371ed1",9553:"b0f8c359",9597:"b48b85db",9626:"0ccdb789",9823:"05f8b653"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@atomium/docs:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@atomium/docs:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();
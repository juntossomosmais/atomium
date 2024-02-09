/*! For license information please see 8288.ccd2c6d6.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[8288],{"../../packages/core/dist/esm/helpers-67bf28d7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>componentOnReady,e:()=>renderHiddenInput,f:()=>clamp,g:()=>getElementRoot,h:()=>hasLazyBuild,i:()=>inheritAriaAttributes,j:()=>isEndSide,k:()=>focusElement,l:()=>assert,m:()=>debounceEvent,n:()=>getAriaLabel,o:()=>findItemLabel,p:()=>debounce,q:()=>hasShadowDom,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync,u:()=>now,v:()=>pointerCoord});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,findItemLabel=componentEl=>{const itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},focusElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},getAriaLabel=(componentEl,inputId)=>{let labelText;const labelledBy=componentEl.getAttribute("aria-labelledby"),componentId=componentEl.id;let labelId=null!==labelledBy&&""!==labelledBy.trim()?labelledBy:inputId+"-lbl",label=null!==labelledBy&&""!==labelledBy.trim()?document.getElementById(labelledBy):findItemLabel(componentEl);return label?(null===labelledBy&&(label.id=labelId),labelText=label.textContent,label.setAttribute("aria-hidden","true")):""!==componentId.trim()&&(label=document.querySelector(`label[for="${componentId}"]`),label&&(""!==label.id?labelId=label.id:label.id=labelId=`${componentId}-lbl`,labelText=label.textContent)),{label,labelId,labelText}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=ev=>ev.timeStamp||Date.now(),pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/ion-router.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_router:()=>Router});var _index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-66adf017.js"),_helpers_67bf28d7_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/core/dist/esm/helpers-67bf28d7.js");const generatePath=segments=>"/"+segments.filter((s=>s.length>0)).join("/"),writeSegments=(history,root,useHash,segments,direction,state,queryString)=>{const url=((segments,useHash,queryString)=>{let url=generatePath(segments);return useHash&&(url="#"+url),void 0!==queryString&&(url+="?"+queryString),url})([...parsePath(root).segments,...segments],useHash,queryString);"forward"===direction?history.pushState(state,"",url):history.replaceState(state,"",url)},parsePath=path=>{let queryString,segments=[""];if(null!=path){const qsStart=path.indexOf("?");qsStart>-1&&(queryString=path.substring(qsStart+1),path=path.substring(0,qsStart)),segments=path.split("/").map((s=>s.trim())).filter((s=>s.length>0)),0===segments.length&&(segments=[""])}return{segments,queryString}},writeNavState=async(root,chain,direction,index,changed=!1,animation)=>{try{const outlet=searchNavNode(root);if(index>=chain.length||!outlet)return changed;await new Promise((resolve=>(0,_helpers_67bf28d7_js__WEBPACK_IMPORTED_MODULE_1__.d)(outlet,resolve)));const route=chain[index],result=await outlet.setRouteId(route.id,route.params,direction,animation);return result.changed&&(direction="root",changed=!0),changed=await writeNavState(result.element,chain,direction,index+1,changed,animation),result.markVisible&&await result.markVisible(),changed}catch(e){return console.error(e),!1}},OUTLET_SELECTOR=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",searchNavNode=root=>{if(!root)return;if(root.matches(OUTLET_SELECTOR))return root;const outlet=root.querySelector(OUTLET_SELECTOR);return null!=outlet?outlet:void 0},findRouteRedirect=(segments,redirects)=>redirects.find((redirect=>((segments,redirect)=>{const{from,to}=redirect;if(void 0===to)return!1;if(from.length>segments.length)return!1;for(let i=0;i<from.length;i++){const expected=from[i];if("*"===expected)return!0;if(expected!==segments[i])return!1}return from.length===segments.length})(segments,redirect))),matchesIDs=(ids,chain)=>{const len=Math.min(ids.length,chain.length);let score=0;for(let i=0;i<len;i++){const routeId=ids[i],routeChain=chain[i];if(routeId.id.toLowerCase()!==routeChain.id)break;if(routeId.params){const routeIdParams=Object.keys(routeId.params);if(routeIdParams.length===routeChain.segments.length){const pathWithParams=routeIdParams.map((key=>`:${key}`));for(let j=0;j<pathWithParams.length&&pathWithParams[j].toLowerCase()===routeChain.segments[j];j++)score++}}score++}return score},matchesSegments=(segments,chain)=>{const inputSegments=new RouterSegments(segments);let allparams,matchesDefault=!1;for(let i=0;i<chain.length;i++){const chainSegments=chain[i].segments;if(""===chainSegments[0])matchesDefault=!0;else{for(const segment of chainSegments){const data=inputSegments.next();if(":"===segment[0]){if(""===data)return null;allparams=allparams||[];(allparams[i]||(allparams[i]={}))[segment.slice(1)]=data}else if(data!==segment)return null}matchesDefault=!1}}return!matchesDefault||matchesDefault===(""===inputSegments.next())?allparams?chain.map(((route,i)=>({id:route.id,segments:route.segments,params:mergeParams(route.params,allparams[i]),beforeEnter:route.beforeEnter,beforeLeave:route.beforeLeave}))):chain:null},mergeParams=(a,b)=>a||b?Object.assign(Object.assign({},a),b):void 0,findChainForSegments=(segments,chains)=>{let match=null,bestScore=0;for(const chain of chains){const matchedChain=matchesSegments(segments,chain);if(null!==matchedChain){const score=computePriority(matchedChain);score>bestScore&&(bestScore=score,match=matchedChain)}}return match},computePriority=chain=>{let score=1,level=1;for(const route of chain)for(const segment of route.segments)":"===segment[0]?score+=Math.pow(1,level):""!==segment&&(score+=Math.pow(2,level)),level++;return score};class RouterSegments{constructor(segments){this.segments=segments.slice()}next(){return this.segments.length>0?this.segments.shift():""}}const readProp=(el,prop)=>prop in el?el[prop]:el.hasAttribute(prop)?el.getAttribute(prop):null,readRedirects=root=>Array.from(root.children).filter((el=>"ION-ROUTE-REDIRECT"===el.tagName)).map((el=>{const to=readProp(el,"to");return{from:parsePath(readProp(el,"from")).segments,to:null==to?void 0:parsePath(to)}})),readRoutes=root=>flattenRouterTree(readRouteNodes(root)),readRouteNodes=node=>Array.from(node.children).filter((el=>"ION-ROUTE"===el.tagName&&el.component)).map((el=>{const component=readProp(el,"component");return{segments:parsePath(readProp(el,"url")).segments,id:component.toLowerCase(),params:el.componentProps,beforeLeave:el.beforeLeave,beforeEnter:el.beforeEnter,children:readRouteNodes(el)}})),flattenRouterTree=nodes=>{const chains=[];for(const node of nodes)flattenNode([],chains,node);return chains},flattenNode=(chain,chains,node)=>{if(chain=[...chain,{id:node.id,segments:node.segments,params:node.params,beforeLeave:node.beforeLeave,beforeEnter:node.beforeEnter}],0!==node.children.length)for(const child of node.children)flattenNode(chain,chains,child);else chains.push(chain)},Router=class{constructor(hostRef){(0,_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionRouteWillChange=(0,_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionRouteWillChange",7),this.ionRouteDidChange=(0,_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){await(searchNavNode(document.body)?Promise.resolve():new Promise((resolve=>{window.addEventListener("ionNavWillLoad",(()=>resolve()),{once:!0})})));const canProceed=await this.runGuards(this.getSegments());if(!0!==canProceed){if("object"==typeof canProceed){const{redirect}=canProceed,path=parsePath(redirect);this.setSegments(path.segments,"root",path.queryString),await this.writeNavStateRoot(path.segments,"root")}}else await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",(0,_helpers_67bf28d7_js__WEBPACK_IMPORTED_MODULE_1__.p)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",(0,_helpers_67bf28d7_js__WEBPACK_IMPORTED_MODULE_1__.p)(this.onRoutesChanged.bind(this),100))}async onPopState(){const direction=this.historyDirection();let segments=this.getSegments();const canProceed=await this.runGuards(segments);if(!0!==canProceed){if("object"!=typeof canProceed)return!1;segments=parsePath(canProceed.redirect).segments}return this.writeNavStateRoot(segments,direction)}onBackButton(ev){ev.detail.register(0,(processNextHandler=>{this.back(),processNextHandler()}))}async canTransition(){const canProceed=await this.runGuards();return!0===canProceed||"object"==typeof canProceed&&canProceed.redirect}async push(path,direction="forward",animation){var _a;if(path.startsWith(".")){const currentPath=null!==(_a=this.previousPath)&&void 0!==_a?_a:"/",url=new URL(path,`https://host/${currentPath}`);path=url.pathname+url.search}let parsedPath=parsePath(path);const canProceed=await this.runGuards(parsedPath.segments);if(!0!==canProceed){if("object"!=typeof canProceed)return!1;parsedPath=parsePath(canProceed.redirect)}return this.setSegments(parsedPath.segments,direction,parsedPath.queryString),this.writeNavStateRoot(parsedPath.segments,direction,animation)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){(routes=>{console.group(`[ion-core] ROUTES[${routes.length}]`);for(const chain of routes){const segments=[];chain.forEach((r=>segments.push(...r.segments)));const ids=chain.map((r=>r.id));console.debug(`%c ${generatePath(segments)}`,"font-weight: bold; padding-left: 20px","=>\t",`(${ids.join(", ")})`)}console.groupEnd()})(readRoutes(this.el)),(redirects=>{console.group(`[ion-core] REDIRECTS[${redirects.length}]`);for(const redirect of redirects)redirect.to&&console.debug("FROM: ",`$c ${generatePath(redirect.from)}`,"font-weight: bold"," TO: ",`$c ${generatePath(redirect.to.segments)}`,"font-weight: bold");console.groupEnd()})(readRedirects(this.el))}async navChanged(direction){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids,outlet}=await(async root=>{const ids=[];let outlet,node=root;for(;outlet=searchNavNode(node);){const id=await outlet.getRouteId();if(!id)break;node=id.element,id.element=void 0,ids.push(id)}return{ids,outlet}})(window.document.body),chain=((ids,chains)=>{let match=null,maxMatches=0;for(const chain of chains){const score=matchesIDs(ids,chain);score>maxMatches&&(match=chain,maxMatches=score)}return match?match.map(((route,i)=>{var _a;return{id:route.id,segments:route.segments,params:mergeParams(route.params,null===(_a=ids[i])||void 0===_a?void 0:_a.params)}})):null})(ids,readRoutes(this.el));if(!chain)return console.warn("[ion-router] no matching URL for ",ids.map((i=>i.id))),!1;const segments=(chain=>{const segments=[];for(const route of chain)for(const segment of route.segments)if(":"===segment[0]){const param=route.params&&route.params[segment.slice(1)];if(!param)return null;segments.push(param)}else""!==segment&&segments.push(segment);return segments})(chain);return segments?(this.setSegments(segments,direction),await this.safeWriteNavState(outlet,chain,"root",segments,null,ids.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const segments=this.getSegments();segments&&findRouteRedirect(segments,readRedirects(this.el))&&this.writeNavStateRoot(segments,"root")}onRoutesChanged(){return this.writeNavStateRoot(this.getSegments(),"root")}historyDirection(){var _a;const win=window;null===win.history.state&&(this.state++,win.history.replaceState(this.state,win.document.title,null===(_a=win.document.location)||void 0===_a?void 0:_a.href));const state=win.history.state,lastState=this.lastState;return this.lastState=state,state>lastState||state>=lastState&&lastState>0?"forward":state<lastState?"back":"root"}async writeNavStateRoot(segments,direction,animation){if(!segments)return console.error("[ion-router] URL is not part of the routing set"),!1;const redirects=readRedirects(this.el),redirect=findRouteRedirect(segments,redirects);let redirectFrom=null;if(redirect){const{segments:toSegments,queryString}=redirect.to;this.setSegments(toSegments,direction,queryString),redirectFrom=redirect.from,segments=toSegments}const routes=readRoutes(this.el),chain=findChainForSegments(segments,routes);return chain?this.safeWriteNavState(document.body,chain,direction,segments,redirectFrom,0,animation):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(node,chain,direction,segments,redirectFrom,index=0,animation){const unlock=await this.lock();let changed=!1;try{changed=await this.writeNavState(node,chain,direction,segments,redirectFrom,index,animation)}catch(e){console.error(e)}return unlock(),changed}async lock(){const p=this.waitPromise;let resolve;return this.waitPromise=new Promise((r=>resolve=r)),void 0!==p&&await p,resolve}async runGuards(to=this.getSegments(),from){if(void 0===from&&(from=parsePath(this.previousPath).segments),!to||!from)return!0;const routes=readRoutes(this.el),fromChain=findChainForSegments(from,routes),beforeLeaveHook=fromChain&&fromChain[fromChain.length-1].beforeLeave,canLeave=!beforeLeaveHook||await beforeLeaveHook();if(!1===canLeave||"object"==typeof canLeave)return canLeave;const toChain=findChainForSegments(to,routes),beforeEnterHook=toChain&&toChain[toChain.length-1].beforeEnter;return!beforeEnterHook||beforeEnterHook()}async writeNavState(node,chain,direction,segments,redirectFrom,index=0,animation){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const routeEvent=this.routeChangeEvent(segments,redirectFrom);routeEvent&&this.ionRouteWillChange.emit(routeEvent);const changed=await writeNavState(node,chain,direction,index,!1,animation);return this.busy=!1,routeEvent&&this.ionRouteDidChange.emit(routeEvent),changed}setSegments(segments,direction,queryString){this.state++,writeSegments(window.history,this.root,this.useHash,segments,direction,this.state,queryString)}getSegments(){return((loc,root,useHash)=>{const prefix=parsePath(root).segments,pathname=useHash?loc.hash.slice(1):loc.pathname;return((prefix,segments)=>{if(prefix.length>segments.length)return null;if(prefix.length<=1&&""===prefix[0])return segments;for(let i=0;i<prefix.length;i++)if(prefix[i]!==segments[i])return null;return segments.length===prefix.length?[""]:segments.slice(prefix.length)})(prefix,parsePath(pathname).segments)})(window.location,this.root,this.useHash)}routeChangeEvent(toSegments,redirectFromSegments){const from=this.previousPath,to=generatePath(toSegments);if(this.previousPath=to,to===from)return null;return{from,redirectedFrom:redirectFromSegments?generatePath(redirectFromSegments):null,to}}get el(){return(0,_index_66adf017_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}}}}]);
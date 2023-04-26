import{r as t,d as n,e}from"./p-ca167607.js";import{d as o,o as s}from"./p-0c75f9f6.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const r="root";const i="forward";const c="back";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const u=t=>{const n=t.filter((t=>t.length>0)).join("/");return"/"+n};const f=(t,n,e)=>{let o=u(t);if(n){o="#"+o}if(e!==undefined){o+="?"+e}return o};const a=(t,n,e,o,s,r,c)=>{const u=f([...w(n).segments,...o],e,c);if(s===i){t.pushState(r,"",u)}else{t.replaceState(r,"",u)}};const l=t=>{const n=[];for(const e of t){for(const t of e.segments){if(t[0]===":"){const o=e.params&&e.params[t.slice(1)];if(!o){return null}n.push(o)}else if(t!==""){n.push(t)}}}return n};const h=(t,n)=>{if(t.length>n.length){return null}if(t.length<=1&&t[0]===""){return n}for(let e=0;e<t.length;e++){if(t[e]!==n[e]){return null}}if(n.length===t.length){return[""]}return n.slice(t.length)};const d=(t,n,e)=>{const o=w(n).segments;const s=e?t.hash.slice(1):t.pathname;const r=w(s).segments;return h(o,r)};const w=t=>{let n=[""];let e;if(t!=null){const o=t.indexOf("?");if(o>-1){e=t.substring(o+1);t=t.substring(0,o)}n=t.split("/").map((t=>t.trim())).filter((t=>t.length>0));if(n.length===0){n=[""]}}return{segments:n,queryString:e}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const m=t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const n of t){const t=[];n.forEach((n=>t.push(...n.segments)));const e=n.map((t=>t.id));console.debug(`%c ${u(t)}`,"font-weight: bold; padding-left: 20px","=>\t",`(${e.join(", ")})`)}console.groupEnd()};const g=t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const n of t){if(n.to){console.debug("FROM: ",`$c ${u(n.from)}`,"font-weight: bold"," TO: ",`$c ${u(n.to.segments)}`,"font-weight: bold")}}console.groupEnd()};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const y=async(t,n,e,s,i=false,c)=>{try{const u=R(t);if(s>=n.length||!u){return i}await new Promise((t=>o(u,t)));const f=n[s];const a=await u.setRouteId(f.id,f.params,e,c);if(a.changed){e=r;i=true}i=await y(a.element,n,e,s+1,i,c);if(a.markVisible){await a.markVisible()}return i}catch(t){console.error(t);return false}};const b=async t=>{const n=[];let e;let o=t;while(e=R(o)){const t=await e.getRouteId();if(t){o=t.element;t.element=undefined;n.push(t)}else{break}}return{ids:n,outlet:e}};const p=()=>{if(R(document.body)){return Promise.resolve()}return new Promise((t=>{window.addEventListener("ionNavWillLoad",(()=>t()),{once:true})}))};const v=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";const R=t=>{if(!t){return undefined}if(t.matches(v)){return t}const n=t.querySelector(v);return n!==null&&n!==void 0?n:undefined};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const C=(t,n)=>{const{from:e,to:o}=n;if(o===undefined){return false}if(e.length>t.length){return false}for(let n=0;n<e.length;n++){const o=e[n];if(o==="*"){return true}if(o!==t[n]){return false}}return e.length===t.length};const E=(t,n)=>n.find((n=>C(t,n)));const j=(t,n)=>{const e=Math.min(t.length,n.length);let o=0;for(let s=0;s<e;s++){const e=t[s];const r=n[s];if(e.id.toLowerCase()!==r.id){break}if(e.params){const t=Object.keys(e.params);if(t.length===r.segments.length){const n=t.map((t=>`:${t}`));for(let t=0;t<n.length;t++){if(n[t].toLowerCase()!==r.segments[t]){break}o++}}}o++}return o};const O=(t,n)=>{const e=new D(t);let o=false;let s;for(let t=0;t<n.length;t++){const r=n[t].segments;if(r[0]===""){o=true}else{for(const n of r){const o=e.next();if(n[0]===":"){if(o===""){return null}s=s||[];const e=s[t]||(s[t]={});e[n.slice(1)]=o}else if(o!==n){return null}}o=false}}const r=o?o===(e.next()===""):true;if(!r){return null}if(s){return n.map(((t,n)=>({id:t.id,segments:t.segments,params:S(t.params,s[n]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave})))}return n};const S=(t,n)=>t||n?Object.assign(Object.assign({},t),n):undefined;const $=(t,n)=>{let e=null;let o=0;for(const s of n){const n=j(t,s);if(n>o){e=s;o=n}}if(e){return e.map(((n,e)=>{var o;return{id:n.id,segments:n.segments,params:S(n.params,(o=t[e])===null||o===void 0?void 0:o.params)}}))}return null};const L=(t,n)=>{let e=null;let o=0;for(const s of n){const n=O(t,s);if(n!==null){const t=k(n);if(t>o){o=t;e=n}}}return e};const k=t=>{let n=1;let e=1;for(const o of t){for(const t of o.segments){if(t[0]===":"){n+=Math.pow(1,e)}else if(t!==""){n+=Math.pow(2,e)}e++}}return n};class D{constructor(t){this.segments=t.slice()}next(){if(this.segments.length>0){return this.segments.shift()}return""}}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const T=(t,n)=>{if(n in t){return t[n]}if(t.hasAttribute(n)){return t.getAttribute(n)}return null};const N=t=>Array.from(t.children).filter((t=>t.tagName==="ION-ROUTE-REDIRECT")).map((t=>{const n=T(t,"to");return{from:w(T(t,"from")).segments,to:n==null?undefined:w(n)}}));const P=t=>I(U(t));const U=t=>Array.from(t.children).filter((t=>t.tagName==="ION-ROUTE"&&t.component)).map((t=>{const n=T(t,"component");return{segments:w(T(t,"url")).segments,id:n.toLowerCase(),params:t.componentProps,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter,children:U(t)}}));const I=t=>{const n=[];for(const e of t){M([],n,e)}return n};const M=(t,n,e)=>{t=[...t,{id:e.id,segments:e.segments,params:e.params,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter}];if(e.children.length===0){n.push(t);return}for(const o of e.children){M(t,n,o)}};const W=class{constructor(e){t(this,e);this.ionRouteWillChange=n(this,"ionRouteWillChange",7);this.ionRouteDidChange=n(this,"ionRouteDidChange",7);this.previousPath=null;this.busy=false;this.state=0;this.lastState=0;this.root="/";this.useHash=true}async componentWillLoad(){await p();const t=await this.runGuards(this.getSegments());if(t!==true){if(typeof t==="object"){const{redirect:n}=t;const e=w(n);this.setSegments(e.segments,r,e.queryString);await this.writeNavStateRoot(e.segments,r)}}else{await this.onRoutesChanged()}}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",s(this.onRedirectChanged.bind(this),10));window.addEventListener("ionRouteDataChanged",s(this.onRoutesChanged.bind(this),100))}async onPopState(){const t=this.historyDirection();let n=this.getSegments();const e=await this.runGuards(n);if(e!==true){if(typeof e==="object"){n=w(e.redirect).segments}else{return false}}return this.writeNavStateRoot(n,t)}onBackButton(t){t.detail.register(0,(t=>{this.back();t()}))}async canTransition(){const t=await this.runGuards();if(t!==true){if(typeof t==="object"){return t.redirect}else{return false}}return true}async push(t,n="forward",e){var o;if(t.startsWith(".")){const n=(o=this.previousPath)!==null&&o!==void 0?o:"/";const e=new URL(t,`https://host/${n}`);t=e.pathname+e.search}let s=w(t);const r=await this.runGuards(s.segments);if(r!==true){if(typeof r==="object"){s=w(r.redirect)}else{return false}}this.setSegments(s.segments,n,s.queryString);return this.writeNavStateRoot(s.segments,n,e)}back(){window.history.back();return Promise.resolve(this.waitPromise)}async printDebug(){m(P(this.el));g(N(this.el))}async navChanged(t){if(this.busy){console.warn("[ion-router] router is busy, navChanged was cancelled");return false}const{ids:n,outlet:e}=await b(window.document.body);const o=P(this.el);const s=$(n,o);if(!s){console.warn("[ion-router] no matching URL for ",n.map((t=>t.id)));return false}const i=l(s);if(!i){console.warn("[ion-router] router could not match path because some required param is missing");return false}this.setSegments(i,t);await this.safeWriteNavState(e,s,r,i,null,n.length);return true}onRedirectChanged(){const t=this.getSegments();if(t&&E(t,N(this.el))){this.writeNavStateRoot(t,r)}}onRoutesChanged(){return this.writeNavStateRoot(this.getSegments(),r)}historyDirection(){var t;const n=window;if(n.history.state===null){this.state++;n.history.replaceState(this.state,n.document.title,(t=n.document.location)===null||t===void 0?void 0:t.href)}const e=n.history.state;const o=this.lastState;this.lastState=e;if(e>o||e>=o&&o>0){return i}if(e<o){return c}return r}async writeNavStateRoot(t,n,e){if(!t){console.error("[ion-router] URL is not part of the routing set");return false}const o=N(this.el);const s=E(t,o);let r=null;if(s){const{segments:e,queryString:o}=s.to;this.setSegments(e,n,o);r=s.from;t=e}const i=P(this.el);const c=L(t,i);if(!c){console.error("[ion-router] the path does not match any route");return false}return this.safeWriteNavState(document.body,c,n,t,r,0,e)}async safeWriteNavState(t,n,e,o,s,r=0,i){const c=await this.lock();let u=false;try{u=await this.writeNavState(t,n,e,o,s,r,i)}catch(t){console.error(t)}c();return u}async lock(){const t=this.waitPromise;let n;this.waitPromise=new Promise((t=>n=t));if(t!==undefined){await t}return n}async runGuards(t=this.getSegments(),n){if(n===undefined){n=w(this.previousPath).segments}if(!t||!n){return true}const e=P(this.el);const o=L(n,e);const s=o&&o[o.length-1].beforeLeave;const r=s?await s():true;if(r===false||typeof r==="object"){return r}const i=L(t,e);const c=i&&i[i.length-1].beforeEnter;return c?c():true}async writeNavState(t,n,e,o,s,r=0,i){if(this.busy){console.warn("[ion-router] router is busy, transition was cancelled");return false}this.busy=true;const c=this.routeChangeEvent(o,s);if(c){this.ionRouteWillChange.emit(c)}const u=await y(t,n,e,r,false,i);this.busy=false;if(c){this.ionRouteDidChange.emit(c)}return u}setSegments(t,n,e){this.state++;a(window.history,this.root,this.useHash,t,n,this.state,e)}getSegments(){return d(window.location,this.root,this.useHash)}routeChangeEvent(t,n){const e=this.previousPath;const o=u(t);this.previousPath=o;if(o===e){return null}const s=n?u(n):null;return{from:e,redirectedFrom:s,to:o}}get el(){return e(this)}};export{W as ion_router};
//# sourceMappingURL=p-4f0707d8.entry.js.map
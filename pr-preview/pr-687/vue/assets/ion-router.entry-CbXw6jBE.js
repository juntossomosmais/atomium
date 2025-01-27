import{r as T,c as b,g as O}from"./index-DJ-OKiNv.js";import{m as v,e as k}from"./helpers-4047ce7f-B-sfu2GX.js";import"./vue.esm-bundler-D6ApT1Ci.js";import"./iframe-Ies5omKV.js";import"../sb-preview/runtime.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const h="root",y="forward",D="back";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const f=t=>"/"+t.filter(n=>n.length>0).join("/"),I=(t,e,n)=>{let r=f(t);return e&&(r="#"+r),n!==void 0&&(r+="?"+n),r},U=(t,e,n,r,s,i,o)=>{const a=I([...l(e).segments,...r],n,o);s===y?t.pushState(i,"",a):t.replaceState(i,"",a)},j=t=>{const e=[];for(const n of t)for(const r of n.segments)if(r[0]===":"){const s=n.params&&n.params[r.slice(1)];if(!s)return null;e.push(s)}else r!==""&&e.push(r);return e},W=(t,e)=>{if(t.length>e.length)return null;if(t.length<=1&&t[0]==="")return e;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)},_=(t,e,n)=>{const r=l(e).segments,s=n?t.hash.slice(1):t.pathname,i=l(s).segments;return W(r,i)},l=t=>{let e=[""],n;if(t!=null){const r=t.indexOf("?");r>-1&&(n=t.substring(r+1),t=t.substring(0,r)),e=t.split("/").map(s=>s.trim()).filter(s=>s.length>0),e.length===0&&(e=[""])}return{segments:e,queryString:n}};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const $=t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const e of t){const n=[];e.forEach(s=>n.push(...s.segments));const r=e.map(s=>s.id);console.debug(`%c ${f(n)}`,"font-weight: bold; padding-left: 20px","=>	",`(${r.join(", ")})`)}console.groupEnd()},q=t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const e of t)e.to&&console.debug("FROM: ",`$c ${f(e.from)}`,"font-weight: bold"," TO: ",`$c ${f(e.to.segments)}`,"font-weight: bold");console.groupEnd()};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const E=async(t,e,n,r,s=!1,i)=>{try{const o=p(t);if(r>=e.length||!o)return s;await new Promise(u=>k(o,u));const a=e[r],c=await o.setRouteId(a.id,a.params,n,i);return c.changed&&(n=h,s=!0),s=await E(c.element,e,n,r+1,s,i),c.markVisible&&await c.markVisible(),s}catch(o){return console.error(o),!1}},A=async t=>{const e=[];let n,r=t;for(;n=p(r);){const s=await n.getRouteId();if(s)r=s.element,s.element=void 0,e.push(s);else break}return{ids:e,outlet:n}},F=()=>p(document.body)?Promise.resolve():new Promise(t=>{window.addEventListener("ionNavWillLoad",()=>t(),{once:!0})}),R=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",p=t=>{if(!t)return;if(t.matches(R))return t;const e=t.querySelector(R);return e??void 0};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const G=(t,e)=>{const{from:n,to:r}=e;if(r===void 0||n.length>t.length)return!1;for(let s=0;s<n.length;s++){const i=n[s];if(i==="*")return!0;if(i!==t[s])return!1}return n.length===t.length},S=(t,e)=>e.find(n=>G(t,n)),H=(t,e)=>{const n=Math.min(t.length,e.length);let r=0;for(let s=0;s<n;s++){const i=t[s],o=e[s];if(i.id.toLowerCase()!==o.id)break;if(i.params){const a=Object.keys(i.params);if(a.length===o.segments.length){const c=a.map(u=>`:${u}`);for(let u=0;u<c.length&&c[u].toLowerCase()===o.segments[u];u++)r++}}r++}return r},M=(t,e)=>{const n=new V(t);let r=!1,s;for(let o=0;o<e.length;o++){const a=e[o].segments;if(a[0]==="")r=!0;else{for(const c of a){const u=n.next();if(c[0]===":"){if(u==="")return null;s=s||[];const L=s[o]||(s[o]={});L[c.slice(1)]=u}else if(u!==c)return null}r=!1}}return(r?r===(n.next()===""):!0)?s?e.map((o,a)=>({id:o.id,segments:o.segments,params:N(o.params,s[a]),beforeEnter:o.beforeEnter,beforeLeave:o.beforeLeave})):e:null},N=(t,e)=>t||e?Object.assign(Object.assign({},t),e):void 0,B=(t,e)=>{let n=null,r=0;for(const s of e){const i=H(t,s);i>r&&(n=s,r=i)}return n?n.map((s,i)=>{var o;return{id:s.id,segments:s.segments,params:N(s.params,(o=t[i])===null||o===void 0?void 0:o.params)}}):null},g=(t,e)=>{let n=null,r=0;for(const s of e){const i=M(t,s);if(i!==null){const o=x(i);o>r&&(r=o,n=i)}}return n},x=t=>{let e=1,n=1;for(const r of t)for(const s of r.segments)s[0]===":"?e+=Math.pow(1,n):s!==""&&(e+=Math.pow(2,n)),n++;return e};class V{constructor(e){this.segments=e.slice()}next(){return this.segments.length>0?this.segments.shift():""}}/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const d=(t,e)=>e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null,w=t=>Array.from(t.children).filter(e=>e.tagName==="ION-ROUTE-REDIRECT").map(e=>{const n=d(e,"to");return{from:l(d(e,"from")).segments,to:n==null?void 0:l(n)}}),m=t=>K(C(t)),C=t=>Array.from(t.children).filter(e=>e.tagName==="ION-ROUTE"&&e.component).map(e=>{const n=d(e,"component");return{segments:l(d(e,"url")).segments,id:n.toLowerCase(),params:e.componentProps,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter,children:C(e)}}),K=t=>{const e=[];for(const n of t)P([],e,n);return e},P=(t,e,n)=>{if(t=[...t,{id:n.id,segments:n.segments,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}],n.children.length===0){e.push(t);return}for(const r of n.children)P(t,e,r)},Z=class{constructor(t){T(this,t),this.ionRouteWillChange=b(this,"ionRouteWillChange",7),this.ionRouteDidChange=b(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){await F();const t=await this.runGuards(this.getSegments());if(t!==!0){if(typeof t=="object"){const{redirect:e}=t,n=l(e);this.setSegments(n.segments,h,n.queryString),await this.writeNavStateRoot(n.segments,h)}}else await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",v(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",v(this.onRoutesChanged.bind(this),100))}async onPopState(){const t=this.historyDirection();let e=this.getSegments();const n=await this.runGuards(e);if(n!==!0)if(typeof n=="object")e=l(n.redirect).segments;else return!1;return this.writeNavStateRoot(e,t)}onBackButton(t){t.detail.register(0,e=>{this.back(),e()})}async canTransition(){const t=await this.runGuards();return t!==!0?typeof t=="object"?t.redirect:!1:!0}async push(t,e="forward",n){var r;if(t.startsWith(".")){const o=(r=this.previousPath)!==null&&r!==void 0?r:"/",a=new URL(t,`https://host/${o}`);t=a.pathname+a.search}let s=l(t);const i=await this.runGuards(s.segments);if(i!==!0)if(typeof i=="object")s=l(i.redirect);else return!1;return this.setSegments(s.segments,e,s.queryString),this.writeNavStateRoot(s.segments,e,n)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){$(m(this.el)),q(w(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:e,outlet:n}=await A(window.document.body),r=m(this.el),s=B(e,r);if(!s)return console.warn("[ion-router] no matching URL for ",e.map(o=>o.id)),!1;const i=j(s);return i?(this.setSegments(i,t),await this.safeWriteNavState(n,s,h,i,null,e.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getSegments();t&&S(t,w(this.el))&&this.writeNavStateRoot(t,h)}onRoutesChanged(){return this.writeNavStateRoot(this.getSegments(),h)}historyDirection(){var t;const e=window;e.history.state===null&&(this.state++,e.history.replaceState(this.state,e.document.title,(t=e.document.location)===null||t===void 0?void 0:t.href));const n=e.history.state,r=this.lastState;return this.lastState=n,n>r||n>=r&&r>0?y:n<r?D:h}async writeNavStateRoot(t,e,n){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const r=w(this.el),s=S(t,r);let i=null;if(s){const{segments:c,queryString:u}=s.to;this.setSegments(c,e,u),i=s.from,t=c}const o=m(this.el),a=g(t,o);return a?this.safeWriteNavState(document.body,a,e,t,i,0,n):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,e,n,r,s,i=0,o){const a=await this.lock();let c=!1;try{c=await this.writeNavState(t,e,n,r,s,i,o)}catch(u){console.error(u)}return a(),c}async lock(){const t=this.waitPromise;let e;return this.waitPromise=new Promise(n=>e=n),t!==void 0&&await t,e}async runGuards(t=this.getSegments(),e){if(e===void 0&&(e=l(this.previousPath).segments),!t||!e)return!0;const n=m(this.el),r=g(e,n),s=r&&r[r.length-1].beforeLeave,i=s?await s():!0;if(i===!1||typeof i=="object")return i;const o=g(t,n),a=o&&o[o.length-1].beforeEnter;return a?a():!0}async writeNavState(t,e,n,r,s,i=0,o){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const a=this.routeChangeEvent(r,s);a&&this.ionRouteWillChange.emit(a);const c=await E(t,e,n,i,!1,o);return this.busy=!1,a&&this.ionRouteDidChange.emit(a),c}setSegments(t,e,n){this.state++,U(window.history,this.root,this.useHash,t,e,this.state,n)}getSegments(){return _(window.location,this.root,this.useHash)}routeChangeEvent(t,e){const n=this.previousPath,r=f(t);if(this.previousPath=r,r===n)return null;const s=e?f(e):null;return{from:n,redirectedFrom:s,to:r}}get el(){return O(this)}};export{Z as ion_router};
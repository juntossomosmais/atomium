const __vite__fileDeps=["./swipe-back-30dfe210-BvkJ2RBs.js","./helpers-079c01eb-D592YRe8.js","./dir-861e8ef7-ebPfiN6E.js","./index-8d9b57d7-PlsDOfno.js","./gesture-controller-5b8003e1-9dGIRWtU.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as V}from"./iframe-ZM0WHRJw.js";import{r as k,c as w,b as S,a as p,h as _,g as L}from"./index-DnFqSXHA.js";import{g as T}from"./cubic-bezier-c467eebb-B8nHoLJF.js";import{l,s as P}from"./helpers-079c01eb-D592YRe8.js";import{l as m,t as B,s as R,L as y,a as O,b as q}from"./index-ab9a4597-COFmIIzg.js";import{a as G}from"./framework-delegate-bec700a6-1EDJ8Ayl.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-DLYZ4EJx.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const A=1,C=2,g=3;class b{constructor(t,n){this.component=t,this.params=n,this.state=A}async init(t){if(this.state=C,!this.element){const n=this.component;this.element=await G(this.delegate,t,n,["ion-page","ion-page-invisible"],this.params)}}_destroy(){l(this.state!==g,"view state must be ATTACHED");const t=this.element;t&&(this.delegate?this.delegate.removeViewFromDom(t.parentElement,t):t.remove()),this.nav=void 0,this.state=g}}const E=(e,t,n)=>!e||e.component!==t?!1:P(e.params,n),I=(e,t)=>e?e instanceof b?e:new b(e,t):null,x=e=>e.map(t=>t instanceof b?t:"component"in t?I(t.component,t.componentProps===null?void 0:t.componentProps):I(t,void 0)).filter(t=>t!==null),D=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}",N=D,j=class{constructor(e){k(this,e),this.ionNavWillLoad=w(this,"ionNavWillLoad",7),this.ionNavWillChange=w(this,"ionNavWillChange",3),this.ionNavDidChange=w(this,"ionNavDidChange",3),this.transInstr=[],this.gestureOrAnimationInProgress=!1,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.didLoad=!1,this.delegate=void 0,this.swipeGesture=void 0,this.animated=!0,this.animation=void 0,this.rootParams=void 0,this.root=void 0}swipeGestureChanged(){this.gesture&&this.gesture.enable(this.swipeGesture===!0)}rootChanged(){this.root!==void 0&&this.didLoad!==!1&&(this.useRouter||this.root!==void 0&&this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=document.querySelector("ion-router")!==null&&this.el.closest("[no-router]")===null,this.swipeGesture===void 0){const e=S(this);this.swipeGesture=p.getBoolean("swipeBackEnabled",e==="ios")}this.ionNavWillLoad.emit()}async componentDidLoad(){this.didLoad=!0,this.rootChanged(),this.gesture=(await V(async()=>{const{createSwipeBackGesture:e}=await import("./swipe-back-30dfe210-BvkJ2RBs.js");return{createSwipeBackGesture:e}},__vite__mapDeps([0,1,2,3,4]),import.meta.url)).createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged()}connectedCallback(){this.destroyed=!1}disconnectedCallback(){for(const e of this.views)m(e.element,y),e._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=0,this.views.length=0,this.destroyed=!0}push(e,t,n,s){return this.insert(-1,e,t,n,s)}insert(e,t,n,s,i){return this.insertPages(e,[{component:t,componentProps:n}],s,i)}insertPages(e,t,n,s){return this.queueTrns({insertStart:e,insertViews:t,opts:n},s)}pop(e,t){return this.removeIndex(-1,1,e,t)}popTo(e,t,n){const s={removeStart:-1,removeCount:-1,opts:t};return typeof e=="object"&&e.component?(s.removeView=e,s.removeStart=1):typeof e=="number"&&(s.removeStart=e+1),this.queueTrns(s,n)}popToRoot(e,t){return this.removeIndex(1,-1,e,t)}removeIndex(e,t=1,n,s){return this.queueTrns({removeStart:e,removeCount:t,opts:n},s)}setRoot(e,t,n,s){return this.setPages([{component:e,componentProps:t}],n,s)}setPages(e,t,n){return t??(t={}),t.animated!==!0&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)}setRouteId(e,t,n,s){const i=this.getActiveSync();if(E(i,e,t))return Promise.resolve({changed:!1,element:i.element});let r;const o=new Promise(u=>r=u);let a;const h={updateURL:!1,viewIsReady:u=>{let c;const v=new Promise(d=>c=d);return r({changed:!0,element:u,markVisible:async()=>{c(),await a}}),v}};if(n==="root")a=this.setRoot(e,t,h);else{const u=this.views.find(c=>E(c,e,t));u?a=this.popTo(u,Object.assign(Object.assign({},h),{direction:"back",animationBuilder:s})):n==="forward"?a=this.push(e,t,Object.assign(Object.assign({},h),{animationBuilder:s})):n==="back"&&(a=this.setRoot(e,t,Object.assign(Object.assign({},h),{direction:"back",animated:!0,animationBuilder:s})))}return o}async getRouteId(){const e=this.getActiveSync();if(e)return{id:e.element.tagName,params:e.params,element:e.element}}async getActive(){return this.getActiveSync()}async getByIndex(e){return this.views[e]}async canGoBack(e){return this.canGoBackSync(e)}async getPrevious(e){return this.getPreviousSync(e)}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(e=this.getActiveSync()){return!!(e&&this.getPreviousSync(e))}getPreviousSync(e=this.getActiveSync()){if(!e)return;const t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}async queueTrns(e,t){var n,s;if(this.isTransitioning&&(!((n=e.opts)===null||n===void 0)&&n.skipIfBusy))return!1;const i=new Promise((r,o)=>{e.resolve=r,e.reject=o});if(e.done=t,e.opts&&e.opts.updateURL!==!1&&this.useRouter){const r=document.querySelector("ion-router");if(r){const o=await r.canTransition();if(o===!1)return!1;if(typeof o=="string")return r.push(o,e.opts.direction||"back"),!1}}return((s=e.insertViews)===null||s===void 0?void 0:s.length)===0&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),i}success(e,t){if(this.destroyed){this.fireError("nav controller was destroyed",t);return}if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),t.opts.updateURL!==!1&&this.useRouter){const n=document.querySelector("ion-router");if(n){const s=e.direction==="back"?"back":"forward";n.navChanged(s)}}}failed(e,t){if(this.destroyed){this.fireError("nav controller was destroyed",t);return}this.transInstr.length=0,this.fireError(e,t)}fireError(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const e=this.transInstr.shift();return e?(this.runTransition(e),!0):!1}async runTransition(e){try{this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e);const t=this.getActiveSync(),n=this.getEnteringView(e,t);if(!t&&!n)throw new Error("no views in the stack to be removed");n&&n.state===A&&await n.init(this.el),this.postViewInit(n,t,e);const s=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t;s&&e.opts&&t&&(e.opts.direction==="back"&&(e.opts.animationBuilder=e.opts.animationBuilder||(n==null?void 0:n.animationBuilder)),t.animationBuilder=e.opts.animationBuilder);let i;s?i=await this.transition(n,t,e):i={hasCompleted:!0,requiresTransition:!1},this.success(i,e),this.ionNavDidChange.emit()}catch(t){this.failed(t,e)}this.isTransitioning=!1,this.nextTrns()}prepareTI(e){var t,n,s;const i=this.views.length;if((t=e.opts)!==null&&t!==void 0||(e.opts={}),(n=(s=e.opts).delegate)!==null&&n!==void 0||(s.delegate=this.delegate),e.removeView!==void 0){l(e.removeStart!==void 0,"removeView needs removeStart"),l(e.removeCount!==void 0,"removeView needs removeCount");const a=this.views.indexOf(e.removeView);if(a<0)throw new Error("removeView was not found");e.removeStart+=a}e.removeStart!==void 0&&(e.removeStart<0&&(e.removeStart=i-1),e.removeCount<0&&(e.removeCount=i-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===i),e.insertViews&&((e.insertStart<0||e.insertStart>i)&&(e.insertStart=i),e.enteringRequiresTransition=e.insertStart===i);const r=e.insertViews;if(!r)return;l(r.length>0,"length can not be zero");const o=x(r);if(o.length===0)throw new Error("invalid views to insert");for(const a of o){a.delegate=e.opts.delegate;const h=a.nav;if(h&&h!==this)throw new Error("inserted view was already inserted");if(a.state===g)throw new Error("inserted view was already destroyed")}e.insertViews=o}getEnteringView(e,t){const n=e.insertViews;if(n!==void 0)return n[n.length-1];const s=e.removeStart;if(s!==void 0){const i=this.views,r=s+e.removeCount;for(let o=i.length-1;o>=0;o--){const a=i[o];if((o<s||o>=r)&&a!==t)return a}}}postViewInit(e,t,n){var s,i,r;l(t||e,"Both leavingView and enteringView are null"),l(n.resolve,"resolve must be valid"),l(n.reject,"reject must be valid");const o=n.opts,{insertViews:a,removeStart:h,removeCount:u}=n;let c;if(h!==void 0&&u!==void 0){l(h>=0,"removeStart can not be negative"),l(u>=0,"removeCount can not be negative"),c=[];for(let d=h;d<h+u;d++){const f=this.views[d];f!==void 0&&f!==e&&f!==t&&c.push(f)}(s=o.direction)!==null&&s!==void 0||(o.direction="back")}const v=this.views.length+((i=a==null?void 0:a.length)!==null&&i!==void 0?i:0)-(u??0);if(l(v>=0,"final balance can not be negative"),v===0)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(a){let d=n.insertStart;for(const f of a)this.insertViewAt(f,d),d++;n.enteringRequiresTransition&&((r=o.direction)!==null&&r!==void 0||(o.direction="forward"))}if(c&&c.length>0){for(const d of c)m(d.element,O),m(d.element,q),m(d.element,y);for(const d of c)this.destroyView(d)}}async transition(e,t,n){const s=n.opts,i=s.progressAnimation?c=>{c!==void 0&&!this.gestureOrAnimationInProgress?(this.gestureOrAnimationInProgress=!0,c.onFinish(()=>{this.gestureOrAnimationInProgress=!1},{oneTimeCallback:!0}),c.progressEnd(0,0,0)):this.sbAni=c}:void 0,r=S(this),o=e.element,a=t&&t.element,h=Object.assign(Object.assign({mode:r,showGoBack:this.canGoBackSync(e),baseEl:this.el,progressCallback:i,animated:this.animated&&p.getBoolean("animated",!0),enteringEl:o,leavingEl:a},s),{animationBuilder:s.animationBuilder||this.animation||p.get("navAnimation")}),{hasCompleted:u}=await B(h);return this.transitionFinish(u,e,t,s)}transitionFinish(e,t,n,s){const i=e?t:n;return i&&this.unmountInactiveViews(i),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:s.direction}}insertViewAt(e,t){const n=this.views,s=n.indexOf(e);s>-1?(l(e.nav===this,"view is not part of the nav"),n.splice(s,1),n.splice(t,0,e)):(l(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))}removeView(e){l(e.state===C||e.state===g,"view state should be loaded or destroyed");const t=this.views,n=t.indexOf(e);l(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)}destroyView(e){e._destroy(),this.removeView(e)}unmountInactiveViews(e){if(this.destroyed)return;const t=this.views,n=t.indexOf(e);for(let s=t.length-1;s>=0;s--){const i=t[s],r=i.element;r&&(s>n?(m(r,y),this.destroyView(i)):s<n&&R(r,!0))}}canStart(){return!this.gestureOrAnimationInProgress&&!!this.swipeGesture&&!this.isTransitioning&&this.transInstr.length===0&&this.canGoBackSync()}onStart(){this.gestureOrAnimationInProgress=!0,this.pop({direction:"back",progressAnimation:!0})}onMove(e){this.sbAni&&this.sbAni.progressStep(e)}onEnd(e,t,n){if(this.sbAni){this.sbAni.onFinish(()=>{this.gestureOrAnimationInProgress=!1},{oneTimeCallback:!0});let s=e?-.001:.001;e?s+=T([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),s+=T([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,s,n)}else this.gestureOrAnimationInProgress=!1}render(){return _("slot",{key:"6894eccc60e446294b01261477691ea1e88348ab"})}get el(){return L(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}};j.style=N;export{j as ion_nav};

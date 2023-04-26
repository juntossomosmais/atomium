import{r as t,d as e,h as i,e as s}from"./p-ca167607.js";import{g as n,c as r}from"./p-7a15c957.js";import{g as o}from"./p-bd52ae26.js";import{k as a,s as h}from"./p-0c75f9f6.js";import{l as c,t as f,s as u,L as d,a as l,b as v}from"./p-a70c517f.js";import{a as m}from"./p-573172d5.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const p=1;const w=2;const b=3;class g{constructor(t,e){this.component=t;this.params=e;this.state=p}async init(t){this.state=w;if(!this.element){const e=this.component;this.element=await m(this.delegate,t,e,["ion-page","ion-page-invisible"],this.params)}}_destroy(){a(this.state!==b,"view state must be ATTACHED");const t=this.element;if(t){if(this.delegate){this.delegate.removeViewFromDom(t.parentElement,t)}else{t.remove()}}this.nav=undefined;this.state=b}}const y=(t,e,i)=>{if(!t){return false}if(t.component!==e){return false}return h(t.params,i)};const k=(t,e)=>{if(!t){return null}if(t instanceof g){return t}return new g(t,e)};const C=t=>t.map((t=>{if(t instanceof g){return t}if("component"in t){return k(t.component,t.componentProps===null?undefined:t.componentProps)}return k(t,undefined)})).filter((t=>t!==null));const j=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";const V=class{constructor(i){t(this,i);this.ionNavWillLoad=e(this,"ionNavWillLoad",7);this.ionNavWillChange=e(this,"ionNavWillChange",3);this.ionNavDidChange=e(this,"ionNavDidChange",3);this.transInstr=[];this.animationEnabled=true;this.useRouter=false;this.isTransitioning=false;this.destroyed=false;this.views=[];this.delegate=undefined;this.swipeGesture=undefined;this.animated=true;this.animation=undefined;this.rootParams=undefined;this.root=undefined}swipeGestureChanged(){if(this.gesture){this.gesture.enable(this.swipeGesture===true)}}rootChanged(){if(this.root!==undefined){if(!this.useRouter){this.setRoot(this.root,this.rootParams)}}}componentWillLoad(){this.useRouter=document.querySelector("ion-router")!==null&&this.el.closest("[no-router]")===null;if(this.swipeGesture===undefined){const t=n(this);this.swipeGesture=r.getBoolean("swipeBackEnabled",t==="ios")}this.ionNavWillLoad.emit()}async componentDidLoad(){this.rootChanged();this.gesture=(await import("./p-a661c29d.js")).createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this));this.swipeGestureChanged()}connectedCallback(){this.destroyed=false}disconnectedCallback(){for(const t of this.views){c(t.element,d);t._destroy()}if(this.gesture){this.gesture.destroy();this.gesture=undefined}this.transInstr.length=0;this.views.length=0;this.destroyed=true}push(t,e,i,s){return this.insert(-1,t,e,i,s)}insert(t,e,i,s,n){return this.insertPages(t,[{component:e,componentProps:i}],s,n)}insertPages(t,e,i,s){return this.queueTrns({insertStart:t,insertViews:e,opts:i},s)}pop(t,e){return this.removeIndex(-1,1,t,e)}popTo(t,e,i){const s={removeStart:-1,removeCount:-1,opts:e};if(typeof t==="object"&&t.component){s.removeView=t;s.removeStart=1}else if(typeof t==="number"){s.removeStart=t+1}return this.queueTrns(s,i)}popToRoot(t,e){return this.removeIndex(1,-1,t,e)}removeIndex(t,e=1,i,s){return this.queueTrns({removeStart:t,removeCount:e,opts:i},s)}setRoot(t,e,i,s){return this.setPages([{component:t,componentProps:e}],i,s)}setPages(t,e,i){e!==null&&e!==void 0?e:e={};if(e.animated!==true){e.animated=false}return this.queueTrns({insertStart:0,insertViews:t,removeStart:0,removeCount:-1,opts:e},i)}setRouteId(t,e,i,s){const n=this.getActiveSync();if(y(n,t,e)){return Promise.resolve({changed:false,element:n.element})}let r;const o=new Promise((t=>r=t));let a;const h={updateURL:false,viewIsReady:t=>{let e;const i=new Promise((t=>e=t));r({changed:true,element:t,markVisible:async()=>{e();await a}});return i}};if(i==="root"){a=this.setRoot(t,e,h)}else{const n=this.views.find((i=>y(i,t,e)));if(n){a=this.popTo(n,Object.assign(Object.assign({},h),{direction:"back",animationBuilder:s}))}else if(i==="forward"){a=this.push(t,e,Object.assign(Object.assign({},h),{animationBuilder:s}))}else if(i==="back"){a=this.setRoot(t,e,Object.assign(Object.assign({},h),{direction:"back",animated:true,animationBuilder:s}))}}return o}async getRouteId(){const t=this.getActiveSync();if(t){return{id:t.element.tagName,params:t.params,element:t.element}}return undefined}async getActive(){return this.getActiveSync()}async getByIndex(t){return this.views[t]}async canGoBack(t){return this.canGoBackSync(t)}async getPrevious(t){return this.getPreviousSync(t)}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(t=this.getActiveSync()){return!!(t&&this.getPreviousSync(t))}getPreviousSync(t=this.getActiveSync()){if(!t){return undefined}const e=this.views;const i=e.indexOf(t);return i>0?e[i-1]:undefined}async queueTrns(t,e){var i,s;if(this.isTransitioning&&((i=t.opts)===null||i===void 0?void 0:i.skipIfBusy)){return false}const n=new Promise(((e,i)=>{t.resolve=e;t.reject=i}));t.done=e;if(t.opts&&t.opts.updateURL!==false&&this.useRouter){const e=document.querySelector("ion-router");if(e){const i=await e.canTransition();if(i===false){return false}if(typeof i==="string"){e.push(i,t.opts.direction||"back");return false}}}if(((s=t.insertViews)===null||s===void 0?void 0:s.length)===0){t.insertViews=undefined}this.transInstr.push(t);this.nextTrns();return n}success(t,e){if(this.destroyed){this.fireError("nav controller was destroyed",e);return}if(e.done){e.done(t.hasCompleted,t.requiresTransition,t.enteringView,t.leavingView,t.direction)}e.resolve(t.hasCompleted);if(e.opts.updateURL!==false&&this.useRouter){const e=document.querySelector("ion-router");if(e){const i=t.direction==="back"?"back":"forward";e.navChanged(i)}}}failed(t,e){if(this.destroyed){this.fireError("nav controller was destroyed",e);return}this.transInstr.length=0;this.fireError(t,e)}fireError(t,e){if(e.done){e.done(false,false,t)}if(e.reject&&!this.destroyed){e.reject(t)}else{e.resolve(false)}}nextTrns(){if(this.isTransitioning){return false}const t=this.transInstr.shift();if(!t){return false}this.runTransition(t);return true}async runTransition(t){try{this.ionNavWillChange.emit();this.isTransitioning=true;this.prepareTI(t);const e=this.getActiveSync();const i=this.getEnteringView(t,e);if(!e&&!i){throw new Error("no views in the stack to be removed")}if(i&&i.state===p){await i.init(this.el)}this.postViewInit(i,e,t);const s=(t.enteringRequiresTransition||t.leavingRequiresTransition)&&i!==e;if(s&&t.opts&&e){const s=t.opts.direction==="back";if(s){t.opts.animationBuilder=t.opts.animationBuilder||(i===null||i===void 0?void 0:i.animationBuilder)}e.animationBuilder=t.opts.animationBuilder}let n;if(s){n=await this.transition(i,e,t)}else{n={hasCompleted:true,requiresTransition:false}}this.success(n,t);this.ionNavDidChange.emit()}catch(e){this.failed(e,t)}this.isTransitioning=false;this.nextTrns()}prepareTI(t){var e,i;var s;const n=this.views.length;(e=t.opts)!==null&&e!==void 0?e:t.opts={};(i=(s=t.opts).delegate)!==null&&i!==void 0?i:s.delegate=this.delegate;if(t.removeView!==undefined){a(t.removeStart!==undefined,"removeView needs removeStart");a(t.removeCount!==undefined,"removeView needs removeCount");const e=this.views.indexOf(t.removeView);if(e<0){throw new Error("removeView was not found")}t.removeStart+=e}if(t.removeStart!==undefined){if(t.removeStart<0){t.removeStart=n-1}if(t.removeCount<0){t.removeCount=n-t.removeStart}t.leavingRequiresTransition=t.removeCount>0&&t.removeStart+t.removeCount===n}if(t.insertViews){if(t.insertStart<0||t.insertStart>n){t.insertStart=n}t.enteringRequiresTransition=t.insertStart===n}const r=t.insertViews;if(!r){return}a(r.length>0,"length can not be zero");const o=C(r);if(o.length===0){throw new Error("invalid views to insert")}for(const e of o){e.delegate=t.opts.delegate;const i=e.nav;if(i&&i!==this){throw new Error("inserted view was already inserted")}if(e.state===b){throw new Error("inserted view was already destroyed")}}t.insertViews=o}getEnteringView(t,e){const i=t.insertViews;if(i!==undefined){return i[i.length-1]}const s=t.removeStart;if(s!==undefined){const i=this.views;const n=s+t.removeCount;for(let t=i.length-1;t>=0;t--){const r=i[t];if((t<s||t>=n)&&r!==e){return r}}}return undefined}postViewInit(t,e,i){var s,n,r;a(e||t,"Both leavingView and enteringView are null");a(i.resolve,"resolve must be valid");a(i.reject,"reject must be valid");const o=i.opts;const{insertViews:h,removeStart:f,removeCount:u}=i;let m;if(f!==undefined&&u!==undefined){a(f>=0,"removeStart can not be negative");a(u>=0,"removeCount can not be negative");m=[];for(let i=f;i<f+u;i++){const s=this.views[i];if(s!==undefined&&s!==t&&s!==e){m.push(s)}}(s=o.direction)!==null&&s!==void 0?s:o.direction="back"}const p=this.views.length+((n=h===null||h===void 0?void 0:h.length)!==null&&n!==void 0?n:0)-(u!==null&&u!==void 0?u:0);a(p>=0,"final balance can not be negative");if(p===0){console.warn(`You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.`,this,this.el);throw new Error("navigation stack needs at least one root page")}if(h){let t=i.insertStart;for(const e of h){this.insertViewAt(e,t);t++}if(i.enteringRequiresTransition){(r=o.direction)!==null&&r!==void 0?r:o.direction="forward"}}if(m&&m.length>0){for(const t of m){c(t.element,l);c(t.element,v);c(t.element,d)}for(const t of m){this.destroyView(t)}}}async transition(t,e,i){const s=i.opts;const o=s.progressAnimation?t=>this.sbAni=t:undefined;const a=n(this);const h=t.element;const c=e&&e.element;const u=Object.assign(Object.assign({mode:a,showGoBack:this.canGoBackSync(t),baseEl:this.el,progressCallback:o,animated:this.animated&&r.getBoolean("animated",true),enteringEl:h,leavingEl:c},s),{animationBuilder:s.animationBuilder||this.animation||r.get("navAnimation")});const{hasCompleted:d}=await f(u);return this.transitionFinish(d,t,e,s)}transitionFinish(t,e,i,s){const n=t?e:i;if(n){this.unmountInactiveViews(n)}return{hasCompleted:t,requiresTransition:true,enteringView:e,leavingView:i,direction:s.direction}}insertViewAt(t,e){const i=this.views;const s=i.indexOf(t);if(s>-1){a(t.nav===this,"view is not part of the nav");i.splice(s,1);i.splice(e,0,t)}else{a(!t.nav,"nav is used");t.nav=this;i.splice(e,0,t)}}removeView(t){a(t.state===w||t.state===b,"view state should be loaded or destroyed");const e=this.views;const i=e.indexOf(t);a(i>-1,"view must be part of the stack");if(i>=0){e.splice(i,1)}}destroyView(t){t._destroy();this.removeView(t)}unmountInactiveViews(t){if(this.destroyed){return}const e=this.views;const i=e.indexOf(t);for(let t=e.length-1;t>=0;t--){const s=e[t];const n=s.element;if(n){if(t>i){c(n,d);this.destroyView(s)}else if(t<i){u(n,true)}}}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&this.transInstr.length===0&&this.animationEnabled&&this.canGoBackSync()}onStart(){this.pop({direction:"back",progressAnimation:true})}onMove(t){if(this.sbAni){this.sbAni.progressStep(t)}}onEnd(t,e,i){if(this.sbAni){this.animationEnabled=false;this.sbAni.onFinish((()=>{this.animationEnabled=true}),{oneTimeCallback:true});let s=t?-.001:.001;if(!t){this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)");s+=o([0,0],[1,0],[.68,.28],[1,1],e)[0]}else{s+=o([0,0],[.32,.72],[0,1],[1,1],e)[0]}this.sbAni.progressEnd(t?1:0,s,i)}}render(){return i("slot",null)}get el(){return s(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}};V.style=j;export{V as ion_nav};
//# sourceMappingURL=p-cb9201d6.entry.js.map
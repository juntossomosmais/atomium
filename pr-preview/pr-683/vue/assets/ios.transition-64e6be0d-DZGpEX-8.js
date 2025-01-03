import{c as i}from"./animation-aa17f0ca-d4Boy65i.js";import{g as Z}from"./index-f2baec95-DTygx0Jt.js";import"./index-CGLWQT_g.js";import"./index-d9a82e80-B2PaWDFh.js";import"./iframe-C3FYooTk.js";import"../sb-preview/runtime.js";import"./index-f5dbb989-By3l89LO.js";import"./helpers-b14eeb70-DAoIUSfU.js";import"./vue.esm-bundler-D6ApT1Ci.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const j=540,z=r=>document.querySelector(`${r}.ion-cloned-element`),I=r=>r.shadowRoot||r,P=r=>{const l=r.tagName==="ION-TABS"?r:r.querySelector("ion-tabs"),c="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(l!=null){const n=l.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return n!=null?n.querySelector(c):null}return r.querySelector(c)},D=(r,l)=>{const c=r.tagName==="ION-TABS"?r:r.querySelector("ion-tabs");let n=[];if(c!=null){const t=c.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");t!=null&&(n=t.querySelectorAll("ion-buttons"))}else n=r.querySelectorAll("ion-buttons");for(const t of n){const p=t.closest("ion-header"),e=p&&!p.classList.contains("header-collapse-condense-inactive"),C=t.querySelector("ion-back-button"),s=t.classList.contains("buttons-collapse"),g=t.slot==="start"||t.slot==="";if(C!==null&&g&&(s&&e&&l||!s))return C}return null},J=(r,l,c,n,t)=>{const p=D(n,c),e=P(t),C=P(n),s=D(t,c),g=p!==null&&e!==null&&!c,y=C!==null&&s!==null&&c;if(g){const S=e.getBoundingClientRect(),m=p.getBoundingClientRect(),d=I(p).querySelector(".button-text"),R=d==null?void 0:d.getBoundingClientRect(),A=I(e).querySelector(".toolbar-title").getBoundingClientRect();G(r,l,c,e,S,A,m,d,R),k(r,l,c,p,m,d,R,e,A)}else if(y){const S=C.getBoundingClientRect(),m=s.getBoundingClientRect(),d=I(s).querySelector(".button-text"),R=d==null?void 0:d.getBoundingClientRect(),A=I(C).querySelector(".toolbar-title").getBoundingClientRect();G(r,l,c,C,S,A,m,d,R),k(r,l,c,s,m,d,R,C,A)}return{forward:g,backward:y}},k=(r,l,c,n,t,p,e,C,s)=>{var g,y;const S=l?`calc(100% - ${t.right+4}px)`:`${t.left-4}px`,m=l?"right":"left",d=l?"left":"right",R=l?"right":"left";let L=1,A=1,T=`scale(${A})`;const X="scale(1)";if(p&&e){const Y=((g=p.textContent)===null||g===void 0?void 0:g.trim())===((y=C.textContent)===null||y===void 0?void 0:y.trim());L=s.width/e.width,A=(s.height-U)/e.height,T=Y?`scale(${L}, ${A})`:`scale(${A})`}const x=I(n).querySelector("ion-icon").getBoundingClientRect(),W=l?`${x.width/2-(x.right-t.right)}px`:`${t.left-x.width/2}px`,o=l?`-${window.innerWidth-t.right}px`:`${t.left}px`,E=`${s.top}px`,$=`${t.top}px`,v=[{offset:0,transform:`translate3d(${W}, ${E}, 0)`},{offset:1,transform:`translate3d(${o}, ${$}, 0)`}],a=[{offset:0,transform:`translate3d(${o}, ${$}, 0)`},{offset:1,transform:`translate3d(${W}, ${E}, 0)`}],f=c?a:v,q=c?[{offset:0,opacity:1,transform:X},{offset:1,opacity:0,transform:T}]:[{offset:0,opacity:0,transform:T},{offset:1,opacity:1,transform:X}],w=c?[{offset:0,opacity:1,transform:"scale(1)"},{offset:.2,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:0,transform:"scale(0.6)"}]:[{offset:0,opacity:0,transform:"scale(0.6)"},{offset:.6,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:1,transform:"scale(1)"}],b=i(),F=i(),B=i(),u=z("ion-back-button"),M=I(u).querySelector(".button-text"),H=I(u).querySelector("ion-icon");u.text=n.text,u.mode=n.mode,u.icon=n.icon,u.color=n.color,u.disabled=n.disabled,u.style.setProperty("display","block"),u.style.setProperty("position","fixed"),F.addElement(H),b.addElement(M),B.addElement(u),B.beforeStyles({position:"absolute",top:"0px",[R]:"0px"}).beforeAddWrite(()=>{n.style.setProperty("display","none"),u.style.setProperty(m,S)}).afterAddWrite(()=>{n.style.setProperty("display",""),u.style.setProperty("display","none"),u.style.removeProperty(m)}).keyframes(f),b.beforeStyles({"transform-origin":`${m} top`}).keyframes(q),F.beforeStyles({"transform-origin":`${d} center`}).keyframes(w),r.addAnimation([b,F,B])},G=(r,l,c,n,t,p,e,C,s)=>{var g,y;const S=l?"right":"left",m=l?`calc(100% - ${t.right}px)`:`${t.left}px`,d="0px",R=`${t.top}px`,L=8;let A=l?`-${window.innerWidth-e.right-L}px`:`${e.x+L}px`,T=.5;const X="scale(1)";let K=`scale(${T})`;if(C&&s){A=l?`-${window.innerWidth-s.right-L}px`:`${s.x-L}px`;const N=((g=C.textContent)===null||g===void 0?void 0:g.trim())===((y=n.textContent)===null||y===void 0?void 0:y.trim()),h=s.width/p.width;T=s.height/(p.height-U),K=N?`scale(${h}, ${T})`:`scale(${T})`}const x=e.top+e.height/2,W=t.height*T/2,o=`${x-W}px`,E=[{offset:0,opacity:0,transform:`translate3d(${A}, ${o}, 0) ${K}`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(${d}, ${R}, 0) ${X}`}],$=[{offset:0,opacity:.99,transform:`translate3d(${d}, ${R}, 0) ${X}`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${A}, ${o}, 0) ${K}`}],v=c?E:$,a=z("ion-title"),f=i();a.innerText=n.innerText,a.size=n.size,a.color=n.color,f.addElement(a),f.beforeStyles({"transform-origin":`${S} top`,height:`${t.height}px`,display:"",position:"relative",[S]:m}).beforeAddWrite(()=>{n.style.setProperty("opacity","0")}).afterAddWrite(()=>{n.style.setProperty("opacity",""),a.style.setProperty("display","none")}).keyframes(v),r.addAnimation(f)},it=(r,l)=>{var c;try{const n="cubic-bezier(0.32,0.72,0,1)",t="opacity",p="transform",e="0%",s=r.ownerDocument.dir==="rtl",g=s?"-99.5%":"99.5%",y=s?"33%":"-33%",S=l.enteringEl,m=l.leavingEl,d=l.direction==="back",R=S.querySelector(":scope > ion-content"),L=S.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),A=S.querySelectorAll(":scope > ion-header > ion-toolbar"),T=i(),X=i();if(T.addElement(S).duration(((c=l.duration)!==null&&c!==void 0?c:0)||j).easing(l.easing||n).fill("both").beforeRemoveClass("ion-page-invisible"),m&&r!==null&&r!==void 0){const o=i();o.addElement(r),T.addAnimation(o)}if(!R&&A.length===0&&L.length===0?X.addElement(S.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")):(X.addElement(R),X.addElement(L)),T.addAnimation(X),d?X.beforeClearStyles([t]).fromTo("transform",`translateX(${y})`,`translateX(${e})`).fromTo(t,.8,1):X.beforeClearStyles([t]).fromTo("transform",`translateX(${g})`,`translateX(${e})`),R){const o=I(R).querySelector(".transition-effect");if(o){const E=o.querySelector(".transition-cover"),$=o.querySelector(".transition-shadow"),v=i(),a=i(),f=i();v.addElement(o).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),a.addElement(E).beforeClearStyles([t]).fromTo(t,0,.1),f.addElement($).beforeClearStyles([t]).fromTo(t,.03,.7),v.addAnimation([a,f]),X.addAnimation([v])}}const K=S.querySelector("ion-header.header-collapse-condense"),{forward:x,backward:W}=J(T,s,d,S,m);if(A.forEach(o=>{const E=i();E.addElement(o),T.addAnimation(E);const $=i();$.addElement(o.querySelector("ion-title"));const v=i(),a=Array.from(o.querySelectorAll("ion-buttons,[menuToggle]")),f=o.closest("ion-header"),N=f==null?void 0:f.classList.contains("header-collapse-condense-inactive");let h;d?h=a.filter(b=>{const F=b.classList.contains("buttons-collapse");return F&&!N||!F}):h=a.filter(b=>!b.classList.contains("buttons-collapse")),v.addElement(h);const q=i();q.addElement(o.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const _=i();_.addElement(I(o).querySelector(".toolbar-background"));const O=i(),w=o.querySelector("ion-back-button");if(w&&O.addElement(w),E.addAnimation([$,v,q,_,O]),v.fromTo(t,.01,1),q.fromTo(t,.01,1),d)N||$.fromTo("transform",`translateX(${y})`,`translateX(${e})`).fromTo(t,.01,1),q.fromTo("transform",`translateX(${y})`,`translateX(${e})`),O.fromTo(t,.01,1);else if(K||$.fromTo("transform",`translateX(${g})`,`translateX(${e})`).fromTo(t,.01,1),q.fromTo("transform",`translateX(${g})`,`translateX(${e})`),_.beforeClearStyles([t,"transform"]),(f==null?void 0:f.translucent)?_.fromTo("transform",s?"translateX(-100%)":"translateX(100%)","translateX(0px)"):_.fromTo(t,.01,"var(--opacity)"),x||O.fromTo(t,.01,1),w&&!x){const F=i();F.addElement(I(w).querySelector(".button-text")).fromTo("transform",s?"translateX(-100px)":"translateX(100px)","translateX(0px)"),E.addAnimation(F)}}),m){const o=i(),E=m.querySelector(":scope > ion-content"),$=m.querySelectorAll(":scope > ion-header > ion-toolbar"),v=m.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(!E&&$.length===0&&v.length===0?o.addElement(m.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")):(o.addElement(E),o.addElement(v)),T.addAnimation(o),d){o.beforeClearStyles([t]).fromTo("transform",`translateX(${e})`,s?"translateX(-100%)":"translateX(100%)");const a=Z(m);T.afterAddWrite(()=>{T.getDirection()==="normal"&&a.style.setProperty("display","none")})}else o.fromTo("transform",`translateX(${e})`,`translateX(${y})`).fromTo(t,1,.8);if(E){const a=I(E).querySelector(".transition-effect");if(a){const f=a.querySelector(".transition-cover"),N=a.querySelector(".transition-shadow"),h=i(),q=i(),_=i();h.addElement(a).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),q.addElement(f).beforeClearStyles([t]).fromTo(t,.1,0),_.addElement(N).beforeClearStyles([t]).fromTo(t,.7,.03),h.addAnimation([q,_]),o.addAnimation([h])}}$.forEach(a=>{const f=i();f.addElement(a);const N=i();N.addElement(a.querySelector("ion-title"));const h=i(),q=a.querySelectorAll("ion-buttons,[menuToggle]"),_=a.closest("ion-header"),O=_==null?void 0:_.classList.contains("header-collapse-condense-inactive"),w=Array.from(q).filter(H=>{const Y=H.classList.contains("buttons-collapse");return Y&&!O||!Y});h.addElement(w);const b=i(),F=a.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");F.length>0&&b.addElement(F);const B=i();B.addElement(I(a).querySelector(".toolbar-background"));const u=i(),M=a.querySelector("ion-back-button");if(M&&u.addElement(M),f.addAnimation([N,h,b,u,B]),T.addAnimation(f),u.fromTo(t,.99,0),h.fromTo(t,.99,0),b.fromTo(t,.99,0),d){if(O||N.fromTo("transform",`translateX(${e})`,s?"translateX(-100%)":"translateX(100%)").fromTo(t,.99,0),b.fromTo("transform",`translateX(${e})`,s?"translateX(-100%)":"translateX(100%)"),B.beforeClearStyles([t,"transform"]),(_==null?void 0:_.translucent)?B.fromTo("transform","translateX(0px)",s?"translateX(-100%)":"translateX(100%)"):B.fromTo(t,"var(--opacity)",0),M&&!W){const Y=i();Y.addElement(I(M).querySelector(".button-text")).fromTo("transform",`translateX(${e})`,`translateX(${(s?-124:124)+"px"})`),f.addAnimation(Y)}}else O||N.fromTo("transform",`translateX(${e})`,`translateX(${y})`).fromTo(t,.99,0).afterClearStyles([p,t]),b.fromTo("transform",`translateX(${e})`,`translateX(${y})`).afterClearStyles([p,t]),u.afterClearStyles([t]),N.afterClearStyles([t]),h.afterClearStyles([t])})}return T}catch(n){throw n}},U=10;export{it as iosTransitionAnimation,I as shadow};

import{c as a}from"./animation-022a9434-BW6ZVdxK.js";import{g as Z}from"./index-ab9a4597-6ncDGWmK.js";import"./index-DkOFMlv7.js";import"./index-d9a82e80-B2PaWDFh.js";import"./helpers-079c01eb-D592YRe8.js";import"./iframe-PFBaJZ3G.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-Dk4JuX4g.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const j=540,z=o=>document.querySelector(`${o}.ion-cloned-element`),b=o=>o.shadowRoot||o,H=o=>{const s=o.tagName==="ION-TABS"?o:o.querySelector("ion-tabs"),c="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(s!=null){const e=s.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return e!=null?e.querySelector(c):null}return o.querySelector(c)},M=(o,s)=>{const c=o.tagName==="ION-TABS"?o:o.querySelector("ion-tabs");let e=[];if(c!=null){const t=c.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");t!=null&&(e=t.querySelectorAll("ion-buttons"))}else e=o.querySelectorAll("ion-buttons");for(const t of e){const S=t.closest("ion-header"),i=S&&!S.classList.contains("header-collapse-condense-inactive"),u=t.querySelector("ion-back-button"),l=t.classList.contains("buttons-collapse"),y=t.slot==="start"||t.slot==="";if(u!==null&&y&&(l&&i&&s||!l))return u}return null},J=(o,s,c,e,t)=>{const S=M(e,c),i=H(t),u=H(e),l=M(t,c),y=S!==null&&i!==null&&!c,E=u!==null&&l!==null&&c;if(y){const _=i.getBoundingClientRect(),f=S.getBoundingClientRect(),m=b(S).querySelector(".button-text"),R=m.getBoundingClientRect(),L=b(i).querySelector(".toolbar-title").getBoundingClientRect();G(o,s,c,i,_,L,m,R),k(o,s,c,S,f,m,R,i,L)}else if(E){const _=u.getBoundingClientRect(),f=l.getBoundingClientRect(),m=b(l).querySelector(".button-text"),R=m.getBoundingClientRect(),L=b(u).querySelector(".toolbar-title").getBoundingClientRect();G(o,s,c,u,_,L,m,R),k(o,s,c,l,f,m,R,u,L)}return{forward:y,backward:E}},k=(o,s,c,e,t,S,i,u,l)=>{var y,E;const _=s?`calc(100% - ${t.right+4}px)`:`${t.left-4}px`,f=s?"right":"left",m=s?"left":"right",R=s?"right":"left",q=((y=S.textContent)===null||y===void 0?void 0:y.trim())===((E=u.textContent)===null||E===void 0?void 0:E.trim()),L=l.width/i.width,g=(l.height-U)/i.height,v=q?`scale(${L}, ${g})`:`scale(${g})`,P="scale(1)",x=b(e).querySelector("ion-icon").getBoundingClientRect(),n=s?`${x.width/2-(x.right-t.right)}px`:`${t.left-x.width/2}px`,p=s?`-${window.innerWidth-t.right}px`:`${t.left}px`,h=`${l.top}px`,C=`${t.top}px`,r=[{offset:0,transform:`translate3d(${n}, ${h}, 0)`},{offset:1,transform:`translate3d(${p}, ${C}, 0)`}],d=[{offset:0,transform:`translate3d(${p}, ${C}, 0)`},{offset:1,transform:`translate3d(${n}, ${h}, 0)`}],X=c?d:r,A=c?[{offset:0,opacity:1,transform:P},{offset:1,opacity:0,transform:v}]:[{offset:0,opacity:0,transform:v},{offset:1,opacity:1,transform:P}],I=c?[{offset:0,opacity:1,transform:"scale(1)"},{offset:.2,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:0,transform:"scale(0.6)"}]:[{offset:0,opacity:0,transform:"scale(0.6)"},{offset:.6,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:1,transform:"scale(1)"}],N=a(),F=a(),w=a(),T=z("ion-back-button"),D=b(T).querySelector(".button-text"),K=b(T).querySelector("ion-icon");T.text=e.text,T.mode=e.mode,T.icon=e.icon,T.color=e.color,T.disabled=e.disabled,T.style.setProperty("display","block"),T.style.setProperty("position","fixed"),F.addElement(K),N.addElement(D),w.addElement(T),w.beforeStyles({position:"absolute",top:"0px",[R]:"0px"}).keyframes(X),N.beforeStyles({"transform-origin":`${f} top`}).beforeAddWrite(()=>{e.style.setProperty("display","none"),T.style.setProperty(f,_)}).afterAddWrite(()=>{e.style.setProperty("display",""),T.style.setProperty("display","none"),T.style.removeProperty(f)}).keyframes(A),F.beforeStyles({"transform-origin":`${m} center`}).keyframes(I),o.addAnimation([N,F,w])},G=(o,s,c,e,t,S,i,u)=>{var l,y;const E=s?"right":"left",_=s?`calc(100% - ${t.right}px)`:`${t.left}px`,f="0px",m=`${t.top}px`,R=8,q=s?`-${window.innerWidth-u.right-R}px`:`${u.x-R}px`,g=`${u.y-2}px`,v=((l=i.textContent)===null||l===void 0?void 0:l.trim())===((y=e.textContent)===null||y===void 0?void 0:y.trim()),P=u.width/S.width,W=u.height/(S.height-U),x="scale(1)",n=v?`scale(${P}, ${W})`:`scale(${W})`,p=[{offset:0,opacity:0,transform:`translate3d(${q}, ${g}, 0) ${n}`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(${f}, ${m}, 0) ${x}`}],h=[{offset:0,opacity:.99,transform:`translate3d(${f}, ${m}, 0) ${x}`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${q}, ${g}, 0) ${n}`}],C=c?p:h,r=z("ion-title"),d=a();r.innerText=e.innerText,r.size=e.size,r.color=e.color,d.addElement(r),d.beforeStyles({"transform-origin":`${E} top`,height:`${t.height}px`,display:"",position:"relative",[E]:_}).beforeAddWrite(()=>{e.style.setProperty("opacity","0")}).afterAddWrite(()=>{e.style.setProperty("opacity",""),r.style.setProperty("display","none")}).keyframes(C),o.addAnimation(d)},st=(o,s)=>{var c;try{const e="cubic-bezier(0.32,0.72,0,1)",t="opacity",S="transform",i="0%",l=o.ownerDocument.dir==="rtl",y=l?"-99.5%":"99.5%",E=l?"33%":"-33%",_=s.enteringEl,f=s.leavingEl,m=s.direction==="back",R=_.querySelector(":scope > ion-content"),q=_.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),L=_.querySelectorAll(":scope > ion-header > ion-toolbar"),g=a(),v=a();if(g.addElement(_).duration(((c=s.duration)!==null&&c!==void 0?c:0)||j).easing(s.easing||e).fill("both").beforeRemoveClass("ion-page-invisible"),f&&o!==null&&o!==void 0){const n=a();n.addElement(o),g.addAnimation(n)}if(!R&&L.length===0&&q.length===0?v.addElement(_.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")):(v.addElement(R),v.addElement(q)),g.addAnimation(v),m?v.beforeClearStyles([t]).fromTo("transform",`translateX(${E})`,`translateX(${i})`).fromTo(t,.8,1):v.beforeClearStyles([t]).fromTo("transform",`translateX(${y})`,`translateX(${i})`),R){const n=b(R).querySelector(".transition-effect");if(n){const p=n.querySelector(".transition-cover"),h=n.querySelector(".transition-shadow"),C=a(),r=a(),d=a();C.addElement(n).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),r.addElement(p).beforeClearStyles([t]).fromTo(t,0,.1),d.addElement(h).beforeClearStyles([t]).fromTo(t,.03,.7),C.addAnimation([r,d]),v.addAnimation([C])}}const P=_.querySelector("ion-header.header-collapse-condense"),{forward:W,backward:x}=J(g,l,m,_,f);if(L.forEach(n=>{const p=a();p.addElement(n),g.addAnimation(p);const h=a();h.addElement(n.querySelector("ion-title"));const C=a(),r=Array.from(n.querySelectorAll("ion-buttons,[menuToggle]")),d=n.closest("ion-header"),X=d==null?void 0:d.classList.contains("header-collapse-condense-inactive");let $;m?$=r.filter(I=>{const N=I.classList.contains("buttons-collapse");return N&&!X||!N}):$=r.filter(I=>!I.classList.contains("buttons-collapse")),C.addElement($);const B=a();B.addElement(n.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const A=a();A.addElement(b(n).querySelector(".toolbar-background"));const O=a(),Y=n.querySelector("ion-back-button");if(Y&&O.addElement(Y),p.addAnimation([h,C,B,A,O]),C.fromTo(t,.01,1),B.fromTo(t,.01,1),m)X||h.fromTo("transform",`translateX(${E})`,`translateX(${i})`).fromTo(t,.01,1),B.fromTo("transform",`translateX(${E})`,`translateX(${i})`),O.fromTo(t,.01,1);else if(P||h.fromTo("transform",`translateX(${y})`,`translateX(${i})`).fromTo(t,.01,1),B.fromTo("transform",`translateX(${y})`,`translateX(${i})`),A.beforeClearStyles([t,"transform"]),(d==null?void 0:d.translucent)?A.fromTo("transform",l?"translateX(-100%)":"translateX(100%)","translateX(0px)"):A.fromTo(t,.01,"var(--opacity)"),W||O.fromTo(t,.01,1),Y&&!W){const N=a();N.addElement(b(Y).querySelector(".button-text")).fromTo("transform",l?"translateX(-100px)":"translateX(100px)","translateX(0px)"),p.addAnimation(N)}}),f){const n=a(),p=f.querySelector(":scope > ion-content"),h=f.querySelectorAll(":scope > ion-header > ion-toolbar"),C=f.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(!p&&h.length===0&&C.length===0?n.addElement(f.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")):(n.addElement(p),n.addElement(C)),g.addAnimation(n),m){n.beforeClearStyles([t]).fromTo("transform",`translateX(${i})`,l?"translateX(-100%)":"translateX(100%)");const r=Z(f);g.afterAddWrite(()=>{g.getDirection()==="normal"&&r.style.setProperty("display","none")})}else n.fromTo("transform",`translateX(${i})`,`translateX(${E})`).fromTo(t,1,.8);if(p){const r=b(p).querySelector(".transition-effect");if(r){const d=r.querySelector(".transition-cover"),X=r.querySelector(".transition-shadow"),$=a(),B=a(),A=a();$.addElement(r).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),B.addElement(d).beforeClearStyles([t]).fromTo(t,.1,0),A.addElement(X).beforeClearStyles([t]).fromTo(t,.7,.03),$.addAnimation([B,A]),n.addAnimation([$])}}h.forEach(r=>{const d=a();d.addElement(r);const X=a();X.addElement(r.querySelector("ion-title"));const $=a(),B=r.querySelectorAll("ion-buttons,[menuToggle]"),A=r.closest("ion-header"),O=A==null?void 0:A.classList.contains("header-collapse-condense-inactive"),Y=Array.from(B).filter(D=>{const K=D.classList.contains("buttons-collapse");return K&&!O||!K});$.addElement(Y);const I=a(),N=r.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");N.length>0&&I.addElement(N);const F=a();F.addElement(b(r).querySelector(".toolbar-background"));const w=a(),T=r.querySelector("ion-back-button");if(T&&w.addElement(T),d.addAnimation([X,$,I,w,F]),g.addAnimation(d),w.fromTo(t,.99,0),$.fromTo(t,.99,0),I.fromTo(t,.99,0),m){if(O||X.fromTo("transform",`translateX(${i})`,l?"translateX(-100%)":"translateX(100%)").fromTo(t,.99,0),I.fromTo("transform",`translateX(${i})`,l?"translateX(-100%)":"translateX(100%)"),F.beforeClearStyles([t,"transform"]),(A==null?void 0:A.translucent)?F.fromTo("transform","translateX(0px)",l?"translateX(-100%)":"translateX(100%)"):F.fromTo(t,"var(--opacity)",0),T&&!x){const K=a();K.addElement(b(T).querySelector(".button-text")).fromTo("transform",`translateX(${i})`,`translateX(${(l?-124:124)+"px"})`),d.addAnimation(K)}}else O||X.fromTo("transform",`translateX(${i})`,`translateX(${E})`).fromTo(t,.99,0).afterClearStyles([S,t]),I.fromTo("transform",`translateX(${i})`,`translateX(${E})`).afterClearStyles([S,t]),w.afterClearStyles([t]),X.afterClearStyles([t]),$.afterClearStyles([t])})}return g}catch(e){throw e}},U=10;export{st as iosTransitionAnimation,b as shadow};

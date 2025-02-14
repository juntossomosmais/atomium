import{w as me}from"./index-d9a82e80-B2PaWDFh.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */let $;const sn=d=>{if($===void 0){const a=d.style.animationName!==void 0,p=d.style.webkitAnimationName!==void 0;$=!a&&p?"-webkit-":""}return $},j=(d,a,p)=>{const k=a.startsWith("animation")?sn(d):"";d.style.setProperty(k+a,p)},L=(d=[],a)=>{if(a!==void 0){const p=Array.isArray(a)?a:[a];return[...d,...p]}return d};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const cn=d=>{let a,p,k,O,U,z,i=[],V=[],M=[],y=!1,o,N={},q=[],B=[],G={},A=0,x=!1,P=!1,b,v,C,S=!0,w=!1,W=!0,t,T=!1;const ee=d,H=[],_=[],D=[],g=[],c=[],ne=[],te=[],re=[],se=[],oe=[],h=[],pe=typeof AnimationEffect=="function"||me!==void 0&&typeof me.AnimationEffect=="function",u=typeof Element=="function"&&typeof Element.prototype.animate=="function"&&pe,ie=()=>h,ge=e=>(c.forEach(n=>{n.destroy(e)}),ye(e),g.length=0,c.length=0,i.length=0,Ce(),y=!1,W=!0,t),ye=e=>{ae(),e&&Se()},Ee=()=>{x=!1,P=!1,W=!0,b=void 0,v=void 0,C=void 0,A=0,w=!1,S=!0,T=!1},Ae=()=>A!==0&&!T,fe=(e,n)=>{const r=n.findIndex(s=>s.c===e);r>-1&&n.splice(r,1)},be=(e,n)=>(D.push({c:e,o:n}),t),J=(e,n)=>((n!=null&&n.oneTimeCallback?_:H).push({c:e,o:n}),t),Ce=()=>(H.length=0,_.length=0,t),ae=()=>{u&&(h.forEach(e=>{e.cancel()}),h.length=0)},Se=()=>{ne.forEach(e=>{e!=null&&e.parentNode&&e.parentNode.removeChild(e)}),ne.length=0},Fe=e=>(te.push(e),t),ke=e=>(re.push(e),t),ve=e=>(se.push(e),t),we=e=>(oe.push(e),t),We=e=>(V=L(V,e),t),_e=e=>(M=L(M,e),t),Re=(e={})=>(N=e,t),xe=(e=[])=>{for(const n of e)N[n]="";return t},Pe=e=>(q=L(q,e),t),Te=e=>(B=L(B,e),t),De=(e={})=>(G=e,t),Ke=(e=[])=>{for(const n of e)G[n]="";return t},Q=()=>U!==void 0?U:o?o.getFill():"both",K=()=>b!==void 0?b:z!==void 0?z:o?o.getDirection():"normal",X=()=>x?"linear":k!==void 0?k:o?o.getEasing():"linear",F=()=>P?0:v!==void 0?v:p!==void 0?p:o?o.getDuration():0,Y=()=>O!==void 0?O:o?o.getIterations():1,Z=()=>C!==void 0?C:a!==void 0?a:o?o.getDelay():0,Ie=()=>i,Le=e=>(z=e,l(!0),t),Oe=e=>(U=e,l(!0),t),Ue=e=>(a=e,l(!0),t),ze=e=>(k=e,l(!0),t),Ve=e=>(!u&&e===0&&(e=1),p=e,l(!0),t),Me=e=>(O=e,l(!0),t),Ne=e=>(o=e,t),qe=e=>{if(e!=null)if(e.nodeType===1)g.push(e);else if(e.length>=0)for(let n=0;n<e.length;n++)g.push(e[n]);else console.error("Invalid addElement value");return t},Be=e=>{if(e!=null)if(Array.isArray(e))for(const n of e)n.parent(t),c.push(n);else e.parent(t),c.push(e);return t},Ge=e=>{const n=i!==e;return i=e,n&&He(i),t},He=e=>{u&&ie().forEach(n=>{const r=n.effect;if(r.setKeyframes)r.setKeyframes(e);else{const s=new KeyframeEffect(r.target,e,r.getTiming());n.effect=s}})},Je=()=>{te.forEach(s=>s()),re.forEach(s=>s());const e=V,n=M,r=N;g.forEach(s=>{const f=s.classList;e.forEach(m=>f.add(m)),n.forEach(m=>f.remove(m));for(const m in r)r.hasOwnProperty(m)&&j(s,m,r[m])})},Qe=()=>{se.forEach(f=>f()),oe.forEach(f=>f());const e=S?1:0,n=q,r=B,s=G;g.forEach(f=>{const m=f.classList;n.forEach(E=>m.add(E)),r.forEach(E=>m.remove(E));for(const E in s)s.hasOwnProperty(E)&&j(f,E,s[E])}),v=void 0,b=void 0,C=void 0,H.forEach(f=>f.c(e,t)),_.forEach(f=>f.c(e,t)),_.length=0,W=!0,S&&(w=!0),S=!0},I=()=>{A!==0&&(A--,A===0&&(Qe(),o&&o.animationFinish()))},Xe=()=>{g.forEach(e=>{const n=e.animate(i,{id:ee,delay:Z(),duration:F(),easing:X(),iterations:Y(),fill:Q(),direction:K()});n.pause(),h.push(n)}),h.length>0&&(h[0].onfinish=()=>{I()})},ce=()=>{Je(),i.length>0&&u&&Xe(),y=!0},R=e=>{e=Math.min(Math.max(e,0),.9999),u&&h.forEach(n=>{n.currentTime=n.effect.getComputedTiming().delay+F()*e,n.pause()})},le=e=>{h.forEach(n=>{n.effect.updateTiming({delay:Z(),duration:F(),easing:X(),iterations:Y(),fill:Q(),direction:K()})}),e!==void 0&&R(e)},l=(e=!1,n=!0,r)=>(e&&c.forEach(s=>{s.update(e,n,r)}),u&&le(r),t),Ye=(e=!1,n)=>(c.forEach(r=>{r.progressStart(e,n)}),ue(),x=e,y||ce(),l(!1,!0,n),t),Ze=e=>(c.forEach(n=>{n.progressStep(e)}),R(e),t),$e=(e,n,r)=>(x=!1,c.forEach(s=>{s.progressEnd(e,n,r)}),r!==void 0&&(v=r),w=!1,S=!0,e===0?(b=K()==="reverse"?"normal":"reverse",b==="reverse"&&(S=!1),u?(l(),R(1-n)):(C=(1-n)*F()*-1,l(!1,!1))):e===1&&(u?(l(),R(n)):(C=n*F()*-1,l(!1,!1))),e!==void 0&&!o&&de(),t),ue=()=>{y&&(u?h.forEach(e=>{e.pause()}):g.forEach(e=>{j(e,"animation-play-state","paused")}),T=!0)},je=()=>(c.forEach(e=>{e.pause()}),ue(),t),en=()=>{I()},nn=()=>{h.forEach(e=>{e.play()}),(i.length===0||g.length===0)&&I()},tn=()=>{u&&(R(0),le())},de=e=>new Promise(n=>{e!=null&&e.sync&&(P=!0,J(()=>P=!1,{oneTimeCallback:!0})),y||ce(),w&&(tn(),w=!1),W&&(A=c.length+1,W=!1);const r=()=>{fe(s,_),n()},s=()=>{fe(r,D),n()};J(s,{oneTimeCallback:!0}),be(r,{oneTimeCallback:!0}),c.forEach(f=>{f.play()}),u?nn():en(),T=!1}),rn=()=>{c.forEach(e=>{e.stop()}),y&&(ae(),y=!1),Ee(),D.forEach(e=>e.c(0,t)),D.length=0},he=(e,n)=>{const r=i[0];return r!==void 0&&(r.offset===void 0||r.offset===0)?r[e]=n:i=[{offset:0,[e]:n},...i],t};return t={parentAnimation:o,elements:g,childAnimations:c,id:ee,animationFinish:I,from:he,to:(e,n)=>{const r=i[i.length-1];return r!==void 0&&(r.offset===void 0||r.offset===1)?r[e]=n:i=[...i,{offset:1,[e]:n}],t},fromTo:(e,n,r)=>he(e,n).to(e,r),parent:Ne,play:de,pause:je,stop:rn,destroy:ge,keyframes:Ge,addAnimation:Be,addElement:qe,update:l,fill:Oe,direction:Le,iterations:Me,duration:Ve,easing:ze,delay:Ue,getWebAnimations:ie,getKeyframes:Ie,getFill:Q,getDirection:K,getDelay:Z,getIterations:Y,getEasing:X,getDuration:F,afterAddRead:ve,afterAddWrite:we,afterClearStyles:Ke,afterStyles:De,afterRemoveClass:Te,afterAddClass:Pe,beforeAddRead:Fe,beforeAddWrite:ke,beforeClearStyles:xe,beforeStyles:Re,beforeRemoveClass:_e,beforeAddClass:We,onFinish:J,isRunning:Ae,progressStart:Ye,progressStep:Ze,progressEnd:$e}};export{cn as c};

import{r as ue,c as Nt,h as U,H as ve,g as he}from"./index-DaWRerzu.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-BHdJA6A6.js";import"../sb-preview/runtime.js";var S="top",R="bottom",H="right",T="left",Ct="auto",lt=[S,R,H,T],Q="start",st="end",me="clippingParents",Qt="viewport",nt="popper",ge="reference",Vt=lt.reduce(function(t,e){return t.concat([e+"-"+Q,e+"-"+st])},[]),Zt=[].concat(lt,[Ct]).reduce(function(t,e){return t.concat([e,e+"-"+Q,e+"-"+st])},[]),be="beforeRead",ye="read",we="afterRead",xe="beforeMain",Oe="main",Ee="afterMain",ke="beforeWrite",Ae="write",Ce="afterWrite",Pe=[be,ye,we,xe,Oe,Ee,ke,Ae,Ce];function W(t){return t?(t.nodeName||"").toLowerCase():null}function D(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function J(t){var e=D(t).Element;return t instanceof e||t instanceof Element}function L(t){var e=D(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Pt(t){if(typeof ShadowRoot>"u")return!1;var e=D(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function je(t){var e=t.state;Object.keys(e.elements).forEach(function(o){var r=e.styles[o]||{},n=e.attributes[o]||{},i=e.elements[o];!L(i)||!W(i)||(Object.assign(i.style,r),Object.keys(n).forEach(function(l){var s=n[l];s===!1?i.removeAttribute(l):i.setAttribute(l,s===!0?"":s)}))})}function Se(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach(function(r){var n=e.elements[r],i=e.attributes[r]||{},l=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:o[r]),s=l.reduce(function(a,p){return a[p]="",a},{});!L(n)||!W(n)||(Object.assign(n.style,s),Object.keys(i).forEach(function(a){n.removeAttribute(a)}))})}}const Te={name:"applyStyles",enabled:!0,phase:"write",fn:je,effect:Se,requires:["computeStyles"]};function M(t){return t.split("-")[0]}var G=Math.max,bt=Math.min,Z=Math.round;function kt(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function te(){return!/^((?!chrome|android).)*safari/i.test(kt())}function tt(t,e,o){e===void 0&&(e=!1),o===void 0&&(o=!1);var r=t.getBoundingClientRect(),n=1,i=1;e&&L(t)&&(n=t.offsetWidth>0&&Z(r.width)/t.offsetWidth||1,i=t.offsetHeight>0&&Z(r.height)/t.offsetHeight||1);var l=J(t)?D(t):window,s=l.visualViewport,a=!te()&&o,p=(r.left+(a&&s?s.offsetLeft:0))/n,c=(r.top+(a&&s?s.offsetTop:0))/i,h=r.width/n,b=r.height/i;return{width:h,height:b,top:c,right:p+h,bottom:c+b,left:p,x:p,y:c}}function jt(t){var e=tt(t),o=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-o)<=1&&(o=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:o,height:r}}function ee(t,e){var o=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(o&&Pt(o)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function I(t){return D(t).getComputedStyle(t)}function _e(t){return["table","td","th"].indexOf(W(t))>=0}function N(t){return((J(t)?t.ownerDocument:t.document)||window.document).documentElement}function yt(t){return W(t)==="html"?t:t.assignedSlot||t.parentNode||(Pt(t)?t.host:null)||N(t)}function Ft(t){return!L(t)||I(t).position==="fixed"?null:t.offsetParent}function De(t){var e=/firefox/i.test(kt()),o=/Trident/i.test(kt());if(o&&L(t)){var r=I(t);if(r.position==="fixed")return null}var n=yt(t);for(Pt(n)&&(n=n.host);L(n)&&["html","body"].indexOf(W(n))<0;){var i=I(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function pt(t){for(var e=D(t),o=Ft(t);o&&_e(o)&&I(o).position==="static";)o=Ft(o);return o&&(W(o)==="html"||W(o)==="body"&&I(o).position==="static")?e:o||De(t)||e}function St(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function it(t,e,o){return G(t,bt(e,o))}function Le(t,e,o){var r=it(t,e,o);return r>o?o:r}function oe(){return{top:0,right:0,bottom:0,left:0}}function re(t){return Object.assign({},oe(),t)}function ne(t,e){return e.reduce(function(o,r){return o[r]=t,o},{})}var Re=function(e,o){return e=typeof e=="function"?e(Object.assign({},o.rects,{placement:o.placement})):e,re(typeof e!="number"?e:ne(e,lt))};function He(t){var e,o=t.state,r=t.name,n=t.options,i=o.elements.arrow,l=o.modifiersData.popperOffsets,s=M(o.placement),a=St(s),p=[T,H].indexOf(s)>=0,c=p?"height":"width";if(!(!i||!l)){var h=Re(n.padding,o),b=jt(i),d=a==="y"?S:T,w=a==="y"?R:H,v=o.rects.reference[c]+o.rects.reference[a]-l[a]-o.rects.popper[c],u=l[a]-o.rects.reference[a],y=pt(i),O=y?a==="y"?y.clientHeight||0:y.clientWidth||0:0,E=v/2-u/2,f=h[d],m=O-b[c]-h[w],g=O/2-b[c]/2+E,x=it(f,g,m),C=a;o.modifiersData[r]=(e={},e[C]=x,e.centerOffset=x-g,e)}}function Be(t){var e=t.state,o=t.options,r=o.element,n=r===void 0?"[data-popper-arrow]":r;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||ee(e.elements.popper,n)&&(e.elements.arrow=n))}const $e={name:"arrow",enabled:!0,phase:"main",fn:He,effect:Be,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function et(t){return t.split("-")[1]}var Me={top:"auto",right:"auto",bottom:"auto",left:"auto"};function We(t,e){var o=t.x,r=t.y,n=e.devicePixelRatio||1;return{x:Z(o*n)/n||0,y:Z(r*n)/n||0}}function zt(t){var e,o=t.popper,r=t.popperRect,n=t.placement,i=t.variation,l=t.offsets,s=t.position,a=t.gpuAcceleration,p=t.adaptive,c=t.roundOffsets,h=t.isFixed,b=l.x,d=b===void 0?0:b,w=l.y,v=w===void 0?0:w,u=typeof c=="function"?c({x:d,y:v}):{x:d,y:v};d=u.x,v=u.y;var y=l.hasOwnProperty("x"),O=l.hasOwnProperty("y"),E=T,f=S,m=window;if(p){var g=pt(o),x="clientHeight",C="clientWidth";if(g===D(o)&&(g=N(o),I(g).position!=="static"&&s==="absolute"&&(x="scrollHeight",C="scrollWidth")),g=g,n===S||(n===T||n===H)&&i===st){f=R;var A=h&&g===m&&m.visualViewport?m.visualViewport.height:g[x];v-=A-r.height,v*=a?1:-1}if(n===T||(n===S||n===R)&&i===st){E=H;var k=h&&g===m&&m.visualViewport?m.visualViewport.width:g[C];d-=k-r.width,d*=a?1:-1}}var P=Object.assign({position:s},p&&Me),B=c===!0?We({x:d,y:v},D(o)):{x:d,y:v};if(d=B.x,v=B.y,a){var j;return Object.assign({},P,(j={},j[f]=O?"0":"",j[E]=y?"0":"",j.transform=(m.devicePixelRatio||1)<=1?"translate("+d+"px, "+v+"px)":"translate3d("+d+"px, "+v+"px, 0)",j))}return Object.assign({},P,(e={},e[f]=O?v+"px":"",e[E]=y?d+"px":"",e.transform="",e))}function Ie(t){var e=t.state,o=t.options,r=o.gpuAcceleration,n=r===void 0?!0:r,i=o.adaptive,l=i===void 0?!0:i,s=o.roundOffsets,a=s===void 0?!0:s,p={placement:M(e.placement),variation:et(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,zt(Object.assign({},p,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:l,roundOffsets:a})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,zt(Object.assign({},p,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const qe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ie,data:{}};var mt={passive:!0};function Ne(t){var e=t.state,o=t.instance,r=t.options,n=r.scroll,i=n===void 0?!0:n,l=r.resize,s=l===void 0?!0:l,a=D(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&p.forEach(function(c){c.addEventListener("scroll",o.update,mt)}),s&&a.addEventListener("resize",o.update,mt),function(){i&&p.forEach(function(c){c.removeEventListener("scroll",o.update,mt)}),s&&a.removeEventListener("resize",o.update,mt)}}const Ve={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ne,data:{}};var Fe={left:"right",right:"left",bottom:"top",top:"bottom"};function gt(t){return t.replace(/left|right|bottom|top/g,function(e){return Fe[e]})}var ze={start:"end",end:"start"};function Xt(t){return t.replace(/start|end/g,function(e){return ze[e]})}function Tt(t){var e=D(t),o=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:o,scrollTop:r}}function _t(t){return tt(N(t)).left+Tt(t).scrollLeft}function Xe(t,e){var o=D(t),r=N(t),n=o.visualViewport,i=r.clientWidth,l=r.clientHeight,s=0,a=0;if(n){i=n.width,l=n.height;var p=te();(p||!p&&e==="fixed")&&(s=n.offsetLeft,a=n.offsetTop)}return{width:i,height:l,x:s+_t(t),y:a}}function Ye(t){var e,o=N(t),r=Tt(t),n=(e=t.ownerDocument)==null?void 0:e.body,i=G(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),l=G(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-r.scrollLeft+_t(t),a=-r.scrollTop;return I(n||o).direction==="rtl"&&(s+=G(o.clientWidth,n?n.clientWidth:0)-i),{width:i,height:l,x:s,y:a}}function Dt(t){var e=I(t),o=e.overflow,r=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function ie(t){return["html","body","#document"].indexOf(W(t))>=0?t.ownerDocument.body:L(t)&&Dt(t)?t:ie(yt(t))}function at(t,e){var o;e===void 0&&(e=[]);var r=ie(t),n=r===((o=t.ownerDocument)==null?void 0:o.body),i=D(r),l=n?[i].concat(i.visualViewport||[],Dt(r)?r:[]):r,s=e.concat(l);return n?s:s.concat(at(yt(l)))}function At(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Ue(t,e){var o=tt(t,!1,e==="fixed");return o.top=o.top+t.clientTop,o.left=o.left+t.clientLeft,o.bottom=o.top+t.clientHeight,o.right=o.left+t.clientWidth,o.width=t.clientWidth,o.height=t.clientHeight,o.x=o.left,o.y=o.top,o}function Yt(t,e,o){return e===Qt?At(Xe(t,o)):J(e)?Ue(e,o):At(Ye(N(t)))}function Ge(t){var e=at(yt(t)),o=["absolute","fixed"].indexOf(I(t).position)>=0,r=o&&L(t)?pt(t):t;return J(r)?e.filter(function(n){return J(n)&&ee(n,r)&&W(n)!=="body"}):[]}function Je(t,e,o,r){var n=e==="clippingParents"?Ge(t):[].concat(e),i=[].concat(n,[o]),l=i[0],s=i.reduce(function(a,p){var c=Yt(t,p,r);return a.top=G(c.top,a.top),a.right=bt(c.right,a.right),a.bottom=bt(c.bottom,a.bottom),a.left=G(c.left,a.left),a},Yt(t,l,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ae(t){var e=t.reference,o=t.element,r=t.placement,n=r?M(r):null,i=r?et(r):null,l=e.x+e.width/2-o.width/2,s=e.y+e.height/2-o.height/2,a;switch(n){case S:a={x:l,y:e.y-o.height};break;case R:a={x:l,y:e.y+e.height};break;case H:a={x:e.x+e.width,y:s};break;case T:a={x:e.x-o.width,y:s};break;default:a={x:e.x,y:e.y}}var p=n?St(n):null;if(p!=null){var c=p==="y"?"height":"width";switch(i){case Q:a[p]=a[p]-(e[c]/2-o[c]/2);break;case st:a[p]=a[p]+(e[c]/2-o[c]/2);break}}return a}function ct(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=r===void 0?t.placement:r,i=o.strategy,l=i===void 0?t.strategy:i,s=o.boundary,a=s===void 0?me:s,p=o.rootBoundary,c=p===void 0?Qt:p,h=o.elementContext,b=h===void 0?nt:h,d=o.altBoundary,w=d===void 0?!1:d,v=o.padding,u=v===void 0?0:v,y=re(typeof u!="number"?u:ne(u,lt)),O=b===nt?ge:nt,E=t.rects.popper,f=t.elements[w?O:b],m=Je(J(f)?f:f.contextElement||N(t.elements.popper),a,c,l),g=tt(t.elements.reference),x=ae({reference:g,element:E,strategy:"absolute",placement:n}),C=At(Object.assign({},E,x)),A=b===nt?C:g,k={top:m.top-A.top+y.top,bottom:A.bottom-m.bottom+y.bottom,left:m.left-A.left+y.left,right:A.right-m.right+y.right},P=t.modifiersData.offset;if(b===nt&&P){var B=P[n];Object.keys(k).forEach(function(j){var V=[H,R].indexOf(j)>=0?1:-1,F=[S,R].indexOf(j)>=0?"y":"x";k[j]+=B[F]*V})}return k}function Ke(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=o.boundary,i=o.rootBoundary,l=o.padding,s=o.flipVariations,a=o.allowedAutoPlacements,p=a===void 0?Zt:a,c=et(r),h=c?s?Vt:Vt.filter(function(w){return et(w)===c}):lt,b=h.filter(function(w){return p.indexOf(w)>=0});b.length===0&&(b=h);var d=b.reduce(function(w,v){return w[v]=ct(t,{placement:v,boundary:n,rootBoundary:i,padding:l})[M(v)],w},{});return Object.keys(d).sort(function(w,v){return d[w]-d[v]})}function Qe(t){if(M(t)===Ct)return[];var e=gt(t);return[Xt(t),e,Xt(e)]}function Ze(t){var e=t.state,o=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var n=o.mainAxis,i=n===void 0?!0:n,l=o.altAxis,s=l===void 0?!0:l,a=o.fallbackPlacements,p=o.padding,c=o.boundary,h=o.rootBoundary,b=o.altBoundary,d=o.flipVariations,w=d===void 0?!0:d,v=o.allowedAutoPlacements,u=e.options.placement,y=M(u),O=y===u,E=a||(O||!w?[gt(u)]:Qe(u)),f=[u].concat(E).reduce(function(K,q){return K.concat(M(q)===Ct?Ke(e,{placement:q,boundary:c,rootBoundary:h,padding:p,flipVariations:w,allowedAutoPlacements:v}):q)},[]),m=e.rects.reference,g=e.rects.popper,x=new Map,C=!0,A=f[0],k=0;k<f.length;k++){var P=f[k],B=M(P),j=et(P)===Q,V=[S,R].indexOf(B)>=0,F=V?"width":"height",_=ct(e,{placement:P,boundary:c,rootBoundary:h,altBoundary:b,padding:p}),$=V?j?H:T:j?R:S;m[F]>g[F]&&($=gt($));var dt=gt($),z=[];if(i&&z.push(_[B]<=0),s&&z.push(_[$]<=0,_[dt]<=0),z.every(function(K){return K})){A=P,C=!1;break}x.set(P,z)}if(C)for(var ft=w?3:1,wt=function(q){var rt=f.find(function(vt){var X=x.get(vt);if(X)return X.slice(0,q).every(function(xt){return xt})});if(rt)return A=rt,"break"},ot=ft;ot>0;ot--){var ut=wt(ot);if(ut==="break")break}e.placement!==A&&(e.modifiersData[r]._skip=!0,e.placement=A,e.reset=!0)}}const to={name:"flip",enabled:!0,phase:"main",fn:Ze,requiresIfExists:["offset"],data:{_skip:!1}};function Ut(t,e,o){return o===void 0&&(o={x:0,y:0}),{top:t.top-e.height-o.y,right:t.right-e.width+o.x,bottom:t.bottom-e.height+o.y,left:t.left-e.width-o.x}}function Gt(t){return[S,H,R,T].some(function(e){return t[e]>=0})}function eo(t){var e=t.state,o=t.name,r=e.rects.reference,n=e.rects.popper,i=e.modifiersData.preventOverflow,l=ct(e,{elementContext:"reference"}),s=ct(e,{altBoundary:!0}),a=Ut(l,r),p=Ut(s,n,i),c=Gt(a),h=Gt(p);e.modifiersData[o]={referenceClippingOffsets:a,popperEscapeOffsets:p,isReferenceHidden:c,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":h})}const oo={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:eo};function ro(t,e,o){var r=M(t),n=[T,S].indexOf(r)>=0?-1:1,i=typeof o=="function"?o(Object.assign({},e,{placement:t})):o,l=i[0],s=i[1];return l=l||0,s=(s||0)*n,[T,H].indexOf(r)>=0?{x:s,y:l}:{x:l,y:s}}function no(t){var e=t.state,o=t.options,r=t.name,n=o.offset,i=n===void 0?[0,0]:n,l=Zt.reduce(function(c,h){return c[h]=ro(h,e.rects,i),c},{}),s=l[e.placement],a=s.x,p=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=a,e.modifiersData.popperOffsets.y+=p),e.modifiersData[r]=l}const io={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:no};function ao(t){var e=t.state,o=t.name;e.modifiersData[o]=ae({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const so={name:"popperOffsets",enabled:!0,phase:"read",fn:ao,data:{}};function co(t){return t==="x"?"y":"x"}function lo(t){var e=t.state,o=t.options,r=t.name,n=o.mainAxis,i=n===void 0?!0:n,l=o.altAxis,s=l===void 0?!1:l,a=o.boundary,p=o.rootBoundary,c=o.altBoundary,h=o.padding,b=o.tether,d=b===void 0?!0:b,w=o.tetherOffset,v=w===void 0?0:w,u=ct(e,{boundary:a,rootBoundary:p,padding:h,altBoundary:c}),y=M(e.placement),O=et(e.placement),E=!O,f=St(y),m=co(f),g=e.modifiersData.popperOffsets,x=e.rects.reference,C=e.rects.popper,A=typeof v=="function"?v(Object.assign({},e.rects,{placement:e.placement})):v,k=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),P=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,B={x:0,y:0};if(g){if(i){var j,V=f==="y"?S:T,F=f==="y"?R:H,_=f==="y"?"height":"width",$=g[f],dt=$+u[V],z=$-u[F],ft=d?-C[_]/2:0,wt=O===Q?x[_]:C[_],ot=O===Q?-C[_]:-x[_],ut=e.elements.arrow,K=d&&ut?jt(ut):{width:0,height:0},q=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:oe(),rt=q[V],vt=q[F],X=it(0,x[_],K[_]),xt=E?x[_]/2-ft-X-rt-k.mainAxis:wt-X-rt-k.mainAxis,se=E?-x[_]/2+ft+X+vt+k.mainAxis:ot+X+vt+k.mainAxis,Ot=e.elements.arrow&&pt(e.elements.arrow),ce=Ot?f==="y"?Ot.clientTop||0:Ot.clientLeft||0:0,Lt=(j=P==null?void 0:P[f])!=null?j:0,le=$+xt-Lt-ce,pe=$+se-Lt,Rt=it(d?bt(dt,le):dt,$,d?G(z,pe):z);g[f]=Rt,B[f]=Rt-$}if(s){var Ht,de=f==="x"?S:T,fe=f==="x"?R:H,Y=g[m],ht=m==="y"?"height":"width",Bt=Y+u[de],$t=Y-u[fe],Et=[S,T].indexOf(y)!==-1,Mt=(Ht=P==null?void 0:P[m])!=null?Ht:0,Wt=Et?Bt:Y-x[ht]-C[ht]-Mt+k.altAxis,It=Et?Y+x[ht]+C[ht]-Mt-k.altAxis:$t,qt=d&&Et?Le(Wt,Y,It):it(d?Wt:Bt,Y,d?It:$t);g[m]=qt,B[m]=qt-Y}e.modifiersData[r]=B}}const po={name:"preventOverflow",enabled:!0,phase:"main",fn:lo,requiresIfExists:["offset"]};function fo(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function uo(t){return t===D(t)||!L(t)?Tt(t):fo(t)}function vo(t){var e=t.getBoundingClientRect(),o=Z(e.width)/t.offsetWidth||1,r=Z(e.height)/t.offsetHeight||1;return o!==1||r!==1}function ho(t,e,o){o===void 0&&(o=!1);var r=L(e),n=L(e)&&vo(e),i=N(e),l=tt(t,n,o),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(r||!r&&!o)&&((W(e)!=="body"||Dt(i))&&(s=uo(e)),L(e)?(a=tt(e,!0),a.x+=e.clientLeft,a.y+=e.clientTop):i&&(a.x=_t(i))),{x:l.left+s.scrollLeft-a.x,y:l.top+s.scrollTop-a.y,width:l.width,height:l.height}}function mo(t){var e=new Map,o=new Set,r=[];t.forEach(function(i){e.set(i.name,i)});function n(i){o.add(i.name);var l=[].concat(i.requires||[],i.requiresIfExists||[]);l.forEach(function(s){if(!o.has(s)){var a=e.get(s);a&&n(a)}}),r.push(i)}return t.forEach(function(i){o.has(i.name)||n(i)}),r}function go(t){var e=mo(t);return Pe.reduce(function(o,r){return o.concat(e.filter(function(n){return n.phase===r}))},[])}function bo(t){var e;return function(){return e||(e=new Promise(function(o){Promise.resolve().then(function(){e=void 0,o(t())})})),e}}function yo(t){var e=t.reduce(function(o,r){var n=o[r.name];return o[r.name]=n?Object.assign({},n,r,{options:Object.assign({},n.options,r.options),data:Object.assign({},n.data,r.data)}):r,o},{});return Object.keys(e).map(function(o){return e[o]})}var Jt={placement:"bottom",modifiers:[],strategy:"absolute"};function Kt(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function wo(t){t===void 0&&(t={});var e=t,o=e.defaultModifiers,r=o===void 0?[]:o,n=e.defaultOptions,i=n===void 0?Jt:n;return function(s,a,p){p===void 0&&(p=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Jt,i),modifiersData:{},elements:{reference:s,popper:a},attributes:{},styles:{}},h=[],b=!1,d={state:c,setOptions:function(y){var O=typeof y=="function"?y(c.options):y;v(),c.options=Object.assign({},i,c.options,O),c.scrollParents={reference:J(s)?at(s):s.contextElement?at(s.contextElement):[],popper:at(a)};var E=go(yo([].concat(r,c.options.modifiers)));return c.orderedModifiers=E.filter(function(f){return f.enabled}),w(),d.update()},forceUpdate:function(){if(!b){var y=c.elements,O=y.reference,E=y.popper;if(Kt(O,E)){c.rects={reference:ho(O,pt(E),c.options.strategy==="fixed"),popper:jt(E)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(k){return c.modifiersData[k.name]=Object.assign({},k.data)});for(var f=0;f<c.orderedModifiers.length;f++){if(c.reset===!0){c.reset=!1,f=-1;continue}var m=c.orderedModifiers[f],g=m.fn,x=m.options,C=x===void 0?{}:x,A=m.name;typeof g=="function"&&(c=g({state:c,options:C,name:A,instance:d})||c)}}}},update:bo(function(){return new Promise(function(u){d.forceUpdate(),u(c)})}),destroy:function(){v(),b=!0}};if(!Kt(s,a))return d;d.setOptions(p).then(function(u){!b&&p.onFirstUpdate&&p.onFirstUpdate(u)});function w(){c.orderedModifiers.forEach(function(u){var y=u.name,O=u.options,E=O===void 0?{}:O,f=u.effect;if(typeof f=="function"){var m=f({state:c,name:y,instance:d,options:E}),g=function(){};h.push(m||g)}})}function v(){h.forEach(function(u){return u()}),h=[]}return d}}var xo=[Ve,so,qe,Te,io,to,po,$e,oo],Oo=wo({defaultModifiers:xo});const Eo='html.ios{--ion-default-font:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}html.md{--ion-default-font:"Roboto", "Helvetica Neue", sans-serif}html{--ion-default-dynamic-font:-apple-system-body;--ion-font-family:var(--ion-default-font)}body{background:var(--ion-background-color)}body.backdrop-no-scroll{overflow:hidden}html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,html.ios ion-modal ion-footer ion-toolbar:first-of-type{padding-top:6px}html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type{padding-bottom:6px}html.ios ion-modal ion-toolbar{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){html.ios ion-modal.modal-card:first-of-type{--backdrop-opacity:0.18}}ion-modal.modal-default.show-modal~ion-modal.modal-default{--backdrop-opacity:0;--box-shadow:none}html.ios ion-modal.modal-card .ion-page{border-top-left-radius:var(--border-radius)}.ion-color-primary{--ion-color-base:var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255) !important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint:var(--ion-color-primary-tint, #4c8dff) !important}.ion-color-secondary{--ion-color-base:var(--ion-color-secondary, #3dc2ff) !important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 61, 194, 255) !important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-secondary-shade, #36abe0) !important;--ion-color-tint:var(--ion-color-secondary-tint, #50c8ff) !important}.ion-color-tertiary{--ion-color-base:var(--ion-color-tertiary, #5260ff) !important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 82, 96, 255) !important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-tertiary-shade, #4854e0) !important;--ion-color-tint:var(--ion-color-tertiary-tint, #6370ff) !important}.ion-color-success{--ion-color-base:var(--ion-color-success, #2dd36f) !important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 211, 111) !important;--ion-color-contrast:var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-success-shade, #28ba62) !important;--ion-color-tint:var(--ion-color-success-tint, #42d77d) !important}.ion-color-warning{--ion-color-base:var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast:var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22) !important}.ion-color-danger{--ion-color-base:var(--ion-color-danger, #eb445a) !important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 235, 68, 90) !important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-danger-shade, #cf3c4f) !important;--ion-color-tint:var(--ion-color-danger-tint, #ed576b) !important}.ion-color-light{--ion-color-base:var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast:var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium{--ion-color-base:var(--ion-color-medium, #92949c) !important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 146, 148, 156) !important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-medium-shade, #808289) !important;--ion-color-tint:var(--ion-color-medium-tint, #9d9fa6) !important}.ion-color-dark{--ion-color-base:var(--ion-color-dark, #222428) !important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e) !important}.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;z-index:0}ion-modal>.ion-page{position:relative;contain:layout style;height:100%}.split-pane-visible>.ion-page.split-pane-main{position:relative}ion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden{display:none !important}.ion-page-invisible{opacity:0}.can-go-back>ion-header ion-back-button{display:block}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding:20px}@supports (padding-top: 20px){html{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}ion-card.ion-color .ion-inherit-color,ion-card-header.ion-color .ion-inherit-color{color:inherit}.menu-content{transform:translate3d(0,  0,  0)}.menu-content-open{cursor:pointer;touch-action:manipulation;pointer-events:none;overflow-y:hidden}.menu-content-open ion-content{--overflow:hidden}.menu-content-open .ion-content-scroll-host{overflow:hidden}.ios .menu-content-reveal{box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-reveal{box-shadow:4px 0px 16px rgba(0,0,0,.18)}.md .menu-content-push{box-shadow:4px 0px 16px rgba(0,0,0,.18)}ion-accordion-group.accordion-group-expand-inset>ion-accordion:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}ion-accordion-group.accordion-group-expand-inset>ion-accordion:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}ion-accordion-group>ion-accordion:last-of-type ion-item[slot=header]{--border-width:0px}ion-accordion.accordion-animated>[slot=header] .ion-accordion-toggle-icon{transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1)}@media (prefers-reduced-motion: reduce){ion-accordion .ion-accordion-toggle-icon{transition:none !important}}ion-accordion.accordion-expanding>[slot=header] .ion-accordion-toggle-icon,ion-accordion.accordion-expanded>[slot=header] .ion-accordion-toggle-icon{transform:rotate(180deg)}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-previous ion-item[slot=header]{--border-width:0px;--inner-border-width:0px}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanding:first-of-type,ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanded:first-of-type{margin-top:0}ion-input input::-webkit-date-and-time-value{text-align:start}.ion-datetime-button-overlay{--width:fit-content;--height:fit-content}.ion-datetime-button-overlay ion-datetime.datetime-grid{width:320px;min-height:320px}.popover-viewport:has(>ion-content){overflow:hidden}@supports not selector(:has(> ion-content)){.popover-viewport{overflow:hidden}}:host .atom-tooltip{--arrow-width:10px;--arrow-height:8px;--arrow-square-range:-3px;background:var(--color-neutral-light-1);border-radius:var(--border-radius);color:var(--color-neutral-white);font:var(--text-body-small);letter-spacing:var(--text-body-small-letter);padding:var(--spacing-xsmall);transition:all 0.15s ease-in-out;transition-property:opacity, transform, visibility}:host .atom-tooltip[data-show]{opacity:1;visibility:visible}:host .atom-tooltip[data-hide]{opacity:0;visibility:hidden}:host .atom-tooltip[data-placement^=top][data-hide]{transform:translateY(10px)}:host .atom-tooltip[data-placement^=top] .atom-tooltip__arrow{bottom:var(--arrow-square-range)}:host .atom-tooltip[data-placement^=bottom][data-hide]{transform:translateY(-10px)}:host .atom-tooltip[data-placement^=bottom] .atom-tooltip__arrow{top:var(--arrow-square-range)}:host .atom-tooltip[data-placement^=left][data-hide]{transform:translateX(10px)}:host .atom-tooltip[data-placement^=left] .atom-tooltip__arrow{right:var(--arrow-square-range)}:host .atom-tooltip[data-placement^=right][data-hide]{transform:translateX(-10px)}:host .atom-tooltip[data-placement^=right] .atom-tooltip__arrow{left:var(--arrow-square-range)}:host .atom-tooltip__arrow{background:inherit;height:var(--arrow-height);position:absolute;visibility:hidden;width:var(--arrow-width)}:host .atom-tooltip__arrow::before{background:inherit;content:"";height:var(--arrow-height);position:absolute;transform:rotate(45deg);visibility:visible;width:var(--arrow-width)}:host .atom-tooltip__content{align-items:center;display:flex}:host .atom-tooltip__action--close{align-self:flex-start;background:none;border:none;color:currentColor;cursor:pointer;display:block;font-size:var(--spacing-large);height:1em;padding:0;padding-left:var(--spacing-base)}',ko=Eo,Ao=class{constructor(t){ue(this,t),this.atomClose=Nt(this,"atomClose",7),this.atomOpen=Nt(this,"atomOpen",7),this._popperInstance=null,this._eventsToShowClick=["click"],this._eventsToHideClick=[],this._eventsToShowHover=["mouseenter","focus"],this._eventsToHideHover=["mouseleave","blur"],this._elementSelector=null,this._arrowElement=null,this.addEventListeners=(e,o)=>{e.forEach(r=>this._elementSelector.addEventListener(r,o))},this.removeEventListeners=(e,o)=>{e.forEach(r=>this._elementSelector.removeEventListener(r,o))},this.attachEvents=()=>{const e=this.isMobile();this.action==="click"?(this.addEventListeners(this._eventsToShowClick,this.show),this.addEventListeners(this._eventsToHideClick,this.hide)):(this.addEventListeners(this._eventsToShowHover,this.show),this.addEventListeners(this._eventsToHideHover,this.hide),e&&(this.addEventListeners(this._eventsToShowClick,this.show),this.removeEventListeners(this._eventsToShowHover,this.show),this.removeEventListeners(this._eventsToHideHover,this.hide)))},this.untachEvents=()=>{const e=this._eventsToShowClick.concat(this._eventsToHideClick,this._eventsToShowHover,this._eventsToHideHover),o=Array.from(new Set(e));this.removeEventListeners(o,this.show),this.removeEventListeners(o,this.hide)},this.show=()=>{this.open=!0,this.atomOpen.emit(),this._popperInstance.setOptions(e=>Object.assign(Object.assign({},e),{modifiers:[...e.modifiers,{name:"eventListeners",enabled:!0}]})),this._popperInstance.update()},this.hide=()=>{this.open=!1,this.atomClose.emit(),this._popperInstance.setOptions(e=>Object.assign(Object.assign({},e),{modifiers:[...e.modifiers,{name:"eventListeners",enabled:!1}]})),this._popperInstance.update()},this.open=!1,this.element=void 0,this.placement="top",this.action="hover"}placementShouldUpdatePopperInstance(t){this._popperInstance.setOptions(e=>Object.assign(Object.assign({},e),{placement:t})),this._popperInstance.update()}updateEvents(){this.untachEvents(),this.attachEvents()}onResize(){this.attachEvents()}onClickCheckOutside(t){this.el.contains(t.target)||this._elementSelector===t.target||this.hide()}componentWillLoad(){const t=document.getElementById(this.element);this._elementSelector=t,this.attachEvents(),this._popperInstance=Oo(t,this.el,{placement:this.placement,modifiers:[{name:"offset",options:{offset:[0,4]}}]})}componentDidLoad(){this._arrowElement=this.el.shadowRoot.querySelector(".atom-tooltip__arrow"),this._popperInstance.setOptions(t=>Object.assign(Object.assign({},t),{modifiers:[...t.modifiers,{name:"arrow",options:{element:this._arrowElement,padding:16}}]})),this._popperInstance.update()}disconnectedCallback(){this.untachEvents(),this._popperInstance.destroy()}isMobile(){return window.matchMedia("(max-width: 768px)").matches}render(){return U(ve,{key:"57b906558692509b17e52e2a126643941149b0f1",style:{zIndex:this.open?"1":"-1"},role:this.isMobile()?"dialog":"tooltip"},U("div",{key:"ed297e030b7e64e4ed8edb8d5c897b6ceb8bd90b","data-placement":this.placement,"data-hide":!this.open,"data-show":this.open,class:{"atom-tooltip":!0}},U("div",{key:"bfcd6c2b0d2c032fc976f1bc23f90e942fd87c38",class:"atom-tooltip__content"},U("slot",{key:"111d4a9dc898b0e2f5c8c9df1fcd5f3b44c9661b"}),(this.action==="click"||this.isMobile())&&U("button",{key:"9c86f7f5587a84f71b440d312d507a4132fe3892",class:"atom-tooltip__action--close","aria-label":"Fechar",onClick:this.hide},U("atom-icon",{key:"0a7119cca4dece595a94086d74523c0604299e9b",icon:"close"}))),U("div",{key:"a0788d97baaa9d88fab20467e3509787fed81624",class:"atom-tooltip__arrow","aria-hidden":!0})))}get el(){return he(this)}static get watchers(){return{placement:["placementShouldUpdatePopperInstance"],action:["updateEvents"]}}};Ao.style=ko;export{Ao as atom_tooltip};
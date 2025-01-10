import{r as vo,c as Nt,h as U,H as ho,g as mo}from"./index-Bn8VUeGf.js";import"./vue.esm-bundler-D6ApT1Ci.js";import"./iframe-kzRv6wUM.js";import"../sb-preview/runtime.js";var S="top",R="bottom",H="right",T="left",Ct="auto",lt=[S,R,H,T],Q="start",st="end",go="clippingParents",Qt="viewport",nt="popper",bo="reference",Vt=lt.reduce(function(t,o){return t.concat([o+"-"+Q,o+"-"+st])},[]),Zt=[].concat(lt,[Ct]).reduce(function(t,o){return t.concat([o,o+"-"+Q,o+"-"+st])},[]),yo="beforeRead",wo="read",xo="afterRead",Oo="beforeMain",Eo="main",ko="afterMain",Ao="beforeWrite",Co="write",Po="afterWrite",jo=[yo,wo,xo,Oo,Eo,ko,Ao,Co,Po];function W(t){return t?(t.nodeName||"").toLowerCase():null}function D(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var o=t.ownerDocument;return o&&o.defaultView||window}return t}function J(t){var o=D(t).Element;return t instanceof o||t instanceof Element}function L(t){var o=D(t).HTMLElement;return t instanceof o||t instanceof HTMLElement}function Pt(t){if(typeof ShadowRoot>"u")return!1;var o=D(t).ShadowRoot;return t instanceof o||t instanceof ShadowRoot}function So(t){var o=t.state;Object.keys(o.elements).forEach(function(e){var r=o.styles[e]||{},n=o.attributes[e]||{},i=o.elements[e];!L(i)||!W(i)||(Object.assign(i.style,r),Object.keys(n).forEach(function(l){var s=n[l];s===!1?i.removeAttribute(l):i.setAttribute(l,s===!0?"":s)}))})}function To(t){var o=t.state,e={popper:{position:o.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(o.elements.popper.style,e.popper),o.styles=e,o.elements.arrow&&Object.assign(o.elements.arrow.style,e.arrow),function(){Object.keys(o.elements).forEach(function(r){var n=o.elements[r],i=o.attributes[r]||{},l=Object.keys(o.styles.hasOwnProperty(r)?o.styles[r]:e[r]),s=l.reduce(function(a,p){return a[p]="",a},{});!L(n)||!W(n)||(Object.assign(n.style,s),Object.keys(i).forEach(function(a){n.removeAttribute(a)}))})}}const _o={name:"applyStyles",enabled:!0,phase:"write",fn:So,effect:To,requires:["computeStyles"]};function M(t){return t.split("-")[0]}var G=Math.max,bt=Math.min,Z=Math.round;function kt(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(o){return o.brand+"/"+o.version}).join(" "):navigator.userAgent}function to(){return!/^((?!chrome|android).)*safari/i.test(kt())}function tt(t,o,e){o===void 0&&(o=!1),e===void 0&&(e=!1);var r=t.getBoundingClientRect(),n=1,i=1;o&&L(t)&&(n=t.offsetWidth>0&&Z(r.width)/t.offsetWidth||1,i=t.offsetHeight>0&&Z(r.height)/t.offsetHeight||1);var l=J(t)?D(t):window,s=l.visualViewport,a=!to()&&e,p=(r.left+(a&&s?s.offsetLeft:0))/n,c=(r.top+(a&&s?s.offsetTop:0))/i,h=r.width/n,b=r.height/i;return{width:h,height:b,top:c,right:p+h,bottom:c+b,left:p,x:p,y:c}}function jt(t){var o=tt(t),e=t.offsetWidth,r=t.offsetHeight;return Math.abs(o.width-e)<=1&&(e=o.width),Math.abs(o.height-r)<=1&&(r=o.height),{x:t.offsetLeft,y:t.offsetTop,width:e,height:r}}function oo(t,o){var e=o.getRootNode&&o.getRootNode();if(t.contains(o))return!0;if(e&&Pt(e)){var r=o;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function I(t){return D(t).getComputedStyle(t)}function Do(t){return["table","td","th"].indexOf(W(t))>=0}function N(t){return((J(t)?t.ownerDocument:t.document)||window.document).documentElement}function yt(t){return W(t)==="html"?t:t.assignedSlot||t.parentNode||(Pt(t)?t.host:null)||N(t)}function Ft(t){return!L(t)||I(t).position==="fixed"?null:t.offsetParent}function Lo(t){var o=/firefox/i.test(kt()),e=/Trident/i.test(kt());if(e&&L(t)){var r=I(t);if(r.position==="fixed")return null}var n=yt(t);for(Pt(n)&&(n=n.host);L(n)&&["html","body"].indexOf(W(n))<0;){var i=I(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||o&&i.willChange==="filter"||o&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function pt(t){for(var o=D(t),e=Ft(t);e&&Do(e)&&I(e).position==="static";)e=Ft(e);return e&&(W(e)==="html"||W(e)==="body"&&I(e).position==="static")?o:e||Lo(t)||o}function St(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function it(t,o,e){return G(t,bt(o,e))}function Ro(t,o,e){var r=it(t,o,e);return r>e?e:r}function eo(){return{top:0,right:0,bottom:0,left:0}}function ro(t){return Object.assign({},eo(),t)}function no(t,o){return o.reduce(function(e,r){return e[r]=t,e},{})}var Ho=function(o,e){return o=typeof o=="function"?o(Object.assign({},e.rects,{placement:e.placement})):o,ro(typeof o!="number"?o:no(o,lt))};function Bo(t){var o,e=t.state,r=t.name,n=t.options,i=e.elements.arrow,l=e.modifiersData.popperOffsets,s=M(e.placement),a=St(s),p=[T,H].indexOf(s)>=0,c=p?"height":"width";if(!(!i||!l)){var h=Ho(n.padding,e),b=jt(i),d=a==="y"?S:T,w=a==="y"?R:H,v=e.rects.reference[c]+e.rects.reference[a]-l[a]-e.rects.popper[c],u=l[a]-e.rects.reference[a],y=pt(i),O=y?a==="y"?y.clientHeight||0:y.clientWidth||0:0,E=v/2-u/2,f=h[d],m=O-b[c]-h[w],g=O/2-b[c]/2+E,x=it(f,g,m),C=a;e.modifiersData[r]=(o={},o[C]=x,o.centerOffset=x-g,o)}}function $o(t){var o=t.state,e=t.options,r=e.element,n=r===void 0?"[data-popper-arrow]":r;n!=null&&(typeof n=="string"&&(n=o.elements.popper.querySelector(n),!n)||oo(o.elements.popper,n)&&(o.elements.arrow=n))}const Mo={name:"arrow",enabled:!0,phase:"main",fn:Bo,effect:$o,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ot(t){return t.split("-")[1]}var Wo={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Io(t,o){var e=t.x,r=t.y,n=o.devicePixelRatio||1;return{x:Z(e*n)/n||0,y:Z(r*n)/n||0}}function zt(t){var o,e=t.popper,r=t.popperRect,n=t.placement,i=t.variation,l=t.offsets,s=t.position,a=t.gpuAcceleration,p=t.adaptive,c=t.roundOffsets,h=t.isFixed,b=l.x,d=b===void 0?0:b,w=l.y,v=w===void 0?0:w,u=typeof c=="function"?c({x:d,y:v}):{x:d,y:v};d=u.x,v=u.y;var y=l.hasOwnProperty("x"),O=l.hasOwnProperty("y"),E=T,f=S,m=window;if(p){var g=pt(e),x="clientHeight",C="clientWidth";if(g===D(e)&&(g=N(e),I(g).position!=="static"&&s==="absolute"&&(x="scrollHeight",C="scrollWidth")),g=g,n===S||(n===T||n===H)&&i===st){f=R;var A=h&&g===m&&m.visualViewport?m.visualViewport.height:g[x];v-=A-r.height,v*=a?1:-1}if(n===T||(n===S||n===R)&&i===st){E=H;var k=h&&g===m&&m.visualViewport?m.visualViewport.width:g[C];d-=k-r.width,d*=a?1:-1}}var P=Object.assign({position:s},p&&Wo),B=c===!0?Io({x:d,y:v},D(e)):{x:d,y:v};if(d=B.x,v=B.y,a){var j;return Object.assign({},P,(j={},j[f]=O?"0":"",j[E]=y?"0":"",j.transform=(m.devicePixelRatio||1)<=1?"translate("+d+"px, "+v+"px)":"translate3d("+d+"px, "+v+"px, 0)",j))}return Object.assign({},P,(o={},o[f]=O?v+"px":"",o[E]=y?d+"px":"",o.transform="",o))}function qo(t){var o=t.state,e=t.options,r=e.gpuAcceleration,n=r===void 0?!0:r,i=e.adaptive,l=i===void 0?!0:i,s=e.roundOffsets,a=s===void 0?!0:s,p={placement:M(o.placement),variation:ot(o.placement),popper:o.elements.popper,popperRect:o.rects.popper,gpuAcceleration:n,isFixed:o.options.strategy==="fixed"};o.modifiersData.popperOffsets!=null&&(o.styles.popper=Object.assign({},o.styles.popper,zt(Object.assign({},p,{offsets:o.modifiersData.popperOffsets,position:o.options.strategy,adaptive:l,roundOffsets:a})))),o.modifiersData.arrow!=null&&(o.styles.arrow=Object.assign({},o.styles.arrow,zt(Object.assign({},p,{offsets:o.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),o.attributes.popper=Object.assign({},o.attributes.popper,{"data-popper-placement":o.placement})}const No={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:qo,data:{}};var mt={passive:!0};function Vo(t){var o=t.state,e=t.instance,r=t.options,n=r.scroll,i=n===void 0?!0:n,l=r.resize,s=l===void 0?!0:l,a=D(o.elements.popper),p=[].concat(o.scrollParents.reference,o.scrollParents.popper);return i&&p.forEach(function(c){c.addEventListener("scroll",e.update,mt)}),s&&a.addEventListener("resize",e.update,mt),function(){i&&p.forEach(function(c){c.removeEventListener("scroll",e.update,mt)}),s&&a.removeEventListener("resize",e.update,mt)}}const Fo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Vo,data:{}};var zo={left:"right",right:"left",bottom:"top",top:"bottom"};function gt(t){return t.replace(/left|right|bottom|top/g,function(o){return zo[o]})}var Xo={start:"end",end:"start"};function Xt(t){return t.replace(/start|end/g,function(o){return Xo[o]})}function Tt(t){var o=D(t),e=o.pageXOffset,r=o.pageYOffset;return{scrollLeft:e,scrollTop:r}}function _t(t){return tt(N(t)).left+Tt(t).scrollLeft}function Yo(t,o){var e=D(t),r=N(t),n=e.visualViewport,i=r.clientWidth,l=r.clientHeight,s=0,a=0;if(n){i=n.width,l=n.height;var p=to();(p||!p&&o==="fixed")&&(s=n.offsetLeft,a=n.offsetTop)}return{width:i,height:l,x:s+_t(t),y:a}}function Uo(t){var o,e=N(t),r=Tt(t),n=(o=t.ownerDocument)==null?void 0:o.body,i=G(e.scrollWidth,e.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),l=G(e.scrollHeight,e.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-r.scrollLeft+_t(t),a=-r.scrollTop;return I(n||e).direction==="rtl"&&(s+=G(e.clientWidth,n?n.clientWidth:0)-i),{width:i,height:l,x:s,y:a}}function Dt(t){var o=I(t),e=o.overflow,r=o.overflowX,n=o.overflowY;return/auto|scroll|overlay|hidden/.test(e+n+r)}function io(t){return["html","body","#document"].indexOf(W(t))>=0?t.ownerDocument.body:L(t)&&Dt(t)?t:io(yt(t))}function at(t,o){var e;o===void 0&&(o=[]);var r=io(t),n=r===((e=t.ownerDocument)==null?void 0:e.body),i=D(r),l=n?[i].concat(i.visualViewport||[],Dt(r)?r:[]):r,s=o.concat(l);return n?s:s.concat(at(yt(l)))}function At(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Go(t,o){var e=tt(t,!1,o==="fixed");return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function Yt(t,o,e){return o===Qt?At(Yo(t,e)):J(o)?Go(o,e):At(Uo(N(t)))}function Jo(t){var o=at(yt(t)),e=["absolute","fixed"].indexOf(I(t).position)>=0,r=e&&L(t)?pt(t):t;return J(r)?o.filter(function(n){return J(n)&&oo(n,r)&&W(n)!=="body"}):[]}function Ko(t,o,e,r){var n=o==="clippingParents"?Jo(t):[].concat(o),i=[].concat(n,[e]),l=i[0],s=i.reduce(function(a,p){var c=Yt(t,p,r);return a.top=G(c.top,a.top),a.right=bt(c.right,a.right),a.bottom=bt(c.bottom,a.bottom),a.left=G(c.left,a.left),a},Yt(t,l,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ao(t){var o=t.reference,e=t.element,r=t.placement,n=r?M(r):null,i=r?ot(r):null,l=o.x+o.width/2-e.width/2,s=o.y+o.height/2-e.height/2,a;switch(n){case S:a={x:l,y:o.y-e.height};break;case R:a={x:l,y:o.y+o.height};break;case H:a={x:o.x+o.width,y:s};break;case T:a={x:o.x-e.width,y:s};break;default:a={x:o.x,y:o.y}}var p=n?St(n):null;if(p!=null){var c=p==="y"?"height":"width";switch(i){case Q:a[p]=a[p]-(o[c]/2-e[c]/2);break;case st:a[p]=a[p]+(o[c]/2-e[c]/2);break}}return a}function ct(t,o){o===void 0&&(o={});var e=o,r=e.placement,n=r===void 0?t.placement:r,i=e.strategy,l=i===void 0?t.strategy:i,s=e.boundary,a=s===void 0?go:s,p=e.rootBoundary,c=p===void 0?Qt:p,h=e.elementContext,b=h===void 0?nt:h,d=e.altBoundary,w=d===void 0?!1:d,v=e.padding,u=v===void 0?0:v,y=ro(typeof u!="number"?u:no(u,lt)),O=b===nt?bo:nt,E=t.rects.popper,f=t.elements[w?O:b],m=Ko(J(f)?f:f.contextElement||N(t.elements.popper),a,c,l),g=tt(t.elements.reference),x=ao({reference:g,element:E,strategy:"absolute",placement:n}),C=At(Object.assign({},E,x)),A=b===nt?C:g,k={top:m.top-A.top+y.top,bottom:A.bottom-m.bottom+y.bottom,left:m.left-A.left+y.left,right:A.right-m.right+y.right},P=t.modifiersData.offset;if(b===nt&&P){var B=P[n];Object.keys(k).forEach(function(j){var V=[H,R].indexOf(j)>=0?1:-1,F=[S,R].indexOf(j)>=0?"y":"x";k[j]+=B[F]*V})}return k}function Qo(t,o){o===void 0&&(o={});var e=o,r=e.placement,n=e.boundary,i=e.rootBoundary,l=e.padding,s=e.flipVariations,a=e.allowedAutoPlacements,p=a===void 0?Zt:a,c=ot(r),h=c?s?Vt:Vt.filter(function(w){return ot(w)===c}):lt,b=h.filter(function(w){return p.indexOf(w)>=0});b.length===0&&(b=h);var d=b.reduce(function(w,v){return w[v]=ct(t,{placement:v,boundary:n,rootBoundary:i,padding:l})[M(v)],w},{});return Object.keys(d).sort(function(w,v){return d[w]-d[v]})}function Zo(t){if(M(t)===Ct)return[];var o=gt(t);return[Xt(t),o,Xt(o)]}function te(t){var o=t.state,e=t.options,r=t.name;if(!o.modifiersData[r]._skip){for(var n=e.mainAxis,i=n===void 0?!0:n,l=e.altAxis,s=l===void 0?!0:l,a=e.fallbackPlacements,p=e.padding,c=e.boundary,h=e.rootBoundary,b=e.altBoundary,d=e.flipVariations,w=d===void 0?!0:d,v=e.allowedAutoPlacements,u=o.options.placement,y=M(u),O=y===u,E=a||(O||!w?[gt(u)]:Zo(u)),f=[u].concat(E).reduce(function(K,q){return K.concat(M(q)===Ct?Qo(o,{placement:q,boundary:c,rootBoundary:h,padding:p,flipVariations:w,allowedAutoPlacements:v}):q)},[]),m=o.rects.reference,g=o.rects.popper,x=new Map,C=!0,A=f[0],k=0;k<f.length;k++){var P=f[k],B=M(P),j=ot(P)===Q,V=[S,R].indexOf(B)>=0,F=V?"width":"height",_=ct(o,{placement:P,boundary:c,rootBoundary:h,altBoundary:b,padding:p}),$=V?j?H:T:j?R:S;m[F]>g[F]&&($=gt($));var dt=gt($),z=[];if(i&&z.push(_[B]<=0),s&&z.push(_[$]<=0,_[dt]<=0),z.every(function(K){return K})){A=P,C=!1;break}x.set(P,z)}if(C)for(var ft=w?3:1,wt=function(q){var rt=f.find(function(vt){var X=x.get(vt);if(X)return X.slice(0,q).every(function(xt){return xt})});if(rt)return A=rt,"break"},et=ft;et>0;et--){var ut=wt(et);if(ut==="break")break}o.placement!==A&&(o.modifiersData[r]._skip=!0,o.placement=A,o.reset=!0)}}const oe={name:"flip",enabled:!0,phase:"main",fn:te,requiresIfExists:["offset"],data:{_skip:!1}};function Ut(t,o,e){return e===void 0&&(e={x:0,y:0}),{top:t.top-o.height-e.y,right:t.right-o.width+e.x,bottom:t.bottom-o.height+e.y,left:t.left-o.width-e.x}}function Gt(t){return[S,H,R,T].some(function(o){return t[o]>=0})}function ee(t){var o=t.state,e=t.name,r=o.rects.reference,n=o.rects.popper,i=o.modifiersData.preventOverflow,l=ct(o,{elementContext:"reference"}),s=ct(o,{altBoundary:!0}),a=Ut(l,r),p=Ut(s,n,i),c=Gt(a),h=Gt(p);o.modifiersData[e]={referenceClippingOffsets:a,popperEscapeOffsets:p,isReferenceHidden:c,hasPopperEscaped:h},o.attributes.popper=Object.assign({},o.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":h})}const re={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ee};function ne(t,o,e){var r=M(t),n=[T,S].indexOf(r)>=0?-1:1,i=typeof e=="function"?e(Object.assign({},o,{placement:t})):e,l=i[0],s=i[1];return l=l||0,s=(s||0)*n,[T,H].indexOf(r)>=0?{x:s,y:l}:{x:l,y:s}}function ie(t){var o=t.state,e=t.options,r=t.name,n=e.offset,i=n===void 0?[0,0]:n,l=Zt.reduce(function(c,h){return c[h]=ne(h,o.rects,i),c},{}),s=l[o.placement],a=s.x,p=s.y;o.modifiersData.popperOffsets!=null&&(o.modifiersData.popperOffsets.x+=a,o.modifiersData.popperOffsets.y+=p),o.modifiersData[r]=l}const ae={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ie};function se(t){var o=t.state,e=t.name;o.modifiersData[e]=ao({reference:o.rects.reference,element:o.rects.popper,strategy:"absolute",placement:o.placement})}const ce={name:"popperOffsets",enabled:!0,phase:"read",fn:se,data:{}};function le(t){return t==="x"?"y":"x"}function pe(t){var o=t.state,e=t.options,r=t.name,n=e.mainAxis,i=n===void 0?!0:n,l=e.altAxis,s=l===void 0?!1:l,a=e.boundary,p=e.rootBoundary,c=e.altBoundary,h=e.padding,b=e.tether,d=b===void 0?!0:b,w=e.tetherOffset,v=w===void 0?0:w,u=ct(o,{boundary:a,rootBoundary:p,padding:h,altBoundary:c}),y=M(o.placement),O=ot(o.placement),E=!O,f=St(y),m=le(f),g=o.modifiersData.popperOffsets,x=o.rects.reference,C=o.rects.popper,A=typeof v=="function"?v(Object.assign({},o.rects,{placement:o.placement})):v,k=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),P=o.modifiersData.offset?o.modifiersData.offset[o.placement]:null,B={x:0,y:0};if(g){if(i){var j,V=f==="y"?S:T,F=f==="y"?R:H,_=f==="y"?"height":"width",$=g[f],dt=$+u[V],z=$-u[F],ft=d?-C[_]/2:0,wt=O===Q?x[_]:C[_],et=O===Q?-C[_]:-x[_],ut=o.elements.arrow,K=d&&ut?jt(ut):{width:0,height:0},q=o.modifiersData["arrow#persistent"]?o.modifiersData["arrow#persistent"].padding:eo(),rt=q[V],vt=q[F],X=it(0,x[_],K[_]),xt=E?x[_]/2-ft-X-rt-k.mainAxis:wt-X-rt-k.mainAxis,so=E?-x[_]/2+ft+X+vt+k.mainAxis:et+X+vt+k.mainAxis,Ot=o.elements.arrow&&pt(o.elements.arrow),co=Ot?f==="y"?Ot.clientTop||0:Ot.clientLeft||0:0,Lt=(j=P==null?void 0:P[f])!=null?j:0,lo=$+xt-Lt-co,po=$+so-Lt,Rt=it(d?bt(dt,lo):dt,$,d?G(z,po):z);g[f]=Rt,B[f]=Rt-$}if(s){var Ht,fo=f==="x"?S:T,uo=f==="x"?R:H,Y=g[m],ht=m==="y"?"height":"width",Bt=Y+u[fo],$t=Y-u[uo],Et=[S,T].indexOf(y)!==-1,Mt=(Ht=P==null?void 0:P[m])!=null?Ht:0,Wt=Et?Bt:Y-x[ht]-C[ht]-Mt+k.altAxis,It=Et?Y+x[ht]+C[ht]-Mt-k.altAxis:$t,qt=d&&Et?Ro(Wt,Y,It):it(d?Wt:Bt,Y,d?It:$t);g[m]=qt,B[m]=qt-Y}o.modifiersData[r]=B}}const de={name:"preventOverflow",enabled:!0,phase:"main",fn:pe,requiresIfExists:["offset"]};function fe(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function ue(t){return t===D(t)||!L(t)?Tt(t):fe(t)}function ve(t){var o=t.getBoundingClientRect(),e=Z(o.width)/t.offsetWidth||1,r=Z(o.height)/t.offsetHeight||1;return e!==1||r!==1}function he(t,o,e){e===void 0&&(e=!1);var r=L(o),n=L(o)&&ve(o),i=N(o),l=tt(t,n,e),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(r||!r&&!e)&&((W(o)!=="body"||Dt(i))&&(s=ue(o)),L(o)?(a=tt(o,!0),a.x+=o.clientLeft,a.y+=o.clientTop):i&&(a.x=_t(i))),{x:l.left+s.scrollLeft-a.x,y:l.top+s.scrollTop-a.y,width:l.width,height:l.height}}function me(t){var o=new Map,e=new Set,r=[];t.forEach(function(i){o.set(i.name,i)});function n(i){e.add(i.name);var l=[].concat(i.requires||[],i.requiresIfExists||[]);l.forEach(function(s){if(!e.has(s)){var a=o.get(s);a&&n(a)}}),r.push(i)}return t.forEach(function(i){e.has(i.name)||n(i)}),r}function ge(t){var o=me(t);return jo.reduce(function(e,r){return e.concat(o.filter(function(n){return n.phase===r}))},[])}function be(t){var o;return function(){return o||(o=new Promise(function(e){Promise.resolve().then(function(){o=void 0,e(t())})})),o}}function ye(t){var o=t.reduce(function(e,r){var n=e[r.name];return e[r.name]=n?Object.assign({},n,r,{options:Object.assign({},n.options,r.options),data:Object.assign({},n.data,r.data)}):r,e},{});return Object.keys(o).map(function(e){return o[e]})}var Jt={placement:"bottom",modifiers:[],strategy:"absolute"};function Kt(){for(var t=arguments.length,o=new Array(t),e=0;e<t;e++)o[e]=arguments[e];return!o.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function we(t){t===void 0&&(t={});var o=t,e=o.defaultModifiers,r=e===void 0?[]:e,n=o.defaultOptions,i=n===void 0?Jt:n;return function(s,a,p){p===void 0&&(p=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Jt,i),modifiersData:{},elements:{reference:s,popper:a},attributes:{},styles:{}},h=[],b=!1,d={state:c,setOptions:function(y){var O=typeof y=="function"?y(c.options):y;v(),c.options=Object.assign({},i,c.options,O),c.scrollParents={reference:J(s)?at(s):s.contextElement?at(s.contextElement):[],popper:at(a)};var E=ge(ye([].concat(r,c.options.modifiers)));return c.orderedModifiers=E.filter(function(f){return f.enabled}),w(),d.update()},forceUpdate:function(){if(!b){var y=c.elements,O=y.reference,E=y.popper;if(Kt(O,E)){c.rects={reference:he(O,pt(E),c.options.strategy==="fixed"),popper:jt(E)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(k){return c.modifiersData[k.name]=Object.assign({},k.data)});for(var f=0;f<c.orderedModifiers.length;f++){if(c.reset===!0){c.reset=!1,f=-1;continue}var m=c.orderedModifiers[f],g=m.fn,x=m.options,C=x===void 0?{}:x,A=m.name;typeof g=="function"&&(c=g({state:c,options:C,name:A,instance:d})||c)}}}},update:be(function(){return new Promise(function(u){d.forceUpdate(),u(c)})}),destroy:function(){v(),b=!0}};if(!Kt(s,a))return d;d.setOptions(p).then(function(u){!b&&p.onFirstUpdate&&p.onFirstUpdate(u)});function w(){c.orderedModifiers.forEach(function(u){var y=u.name,O=u.options,E=O===void 0?{}:O,f=u.effect;if(typeof f=="function"){var m=f({state:c,name:y,instance:d,options:E}),g=function(){};h.push(m||g)}})}function v(){h.forEach(function(u){return u()}),h=[]}return d}}var xe=[Fo,ce,No,_o,ae,oe,de,Mo,re],Oe=we({defaultModifiers:xe});const Ee=':root{--ion-color-primary:#0054e9;--ion-color-primary-rgb:0, 84, 233;--ion-color-primary-contrast:#fff;--ion-color-primary-contrast-rgb:255, 255, 255;--ion-color-primary-shade:#004acd;--ion-color-primary-tint:#1a65eb;--ion-color-secondary:#0163aa;--ion-color-secondary-rgb:1, 99, 170;--ion-color-secondary-contrast:#fff;--ion-color-secondary-contrast-rgb:255, 255, 255;--ion-color-secondary-shade:#015796;--ion-color-secondary-tint:#1a73b3;--ion-color-tertiary:#6030ff;--ion-color-tertiary-rgb:96, 48, 255;--ion-color-tertiary-contrast:#fff;--ion-color-tertiary-contrast-rgb:255, 255, 255;--ion-color-tertiary-shade:#542ae0;--ion-color-tertiary-tint:#7045ff;--ion-color-success:#2dd55b;--ion-color-success-rgb:45, 213, 91;--ion-color-success-contrast:#000;--ion-color-success-contrast-rgb:0, 0, 0;--ion-color-success-shade:#28bb50;--ion-color-success-tint:#42d96b;--ion-color-warning:#ffc409;--ion-color-warning-rgb:255, 196, 9;--ion-color-warning-contrast:#000;--ion-color-warning-contrast-rgb:0, 0, 0;--ion-color-warning-shade:#e0ac08;--ion-color-warning-tint:#ffca22;--ion-color-danger:#c5000f;--ion-color-danger-rgb:197, 0, 15;--ion-color-danger-contrast:#fff;--ion-color-danger-contrast-rgb:255, 255, 255;--ion-color-danger-shade:#ad000d;--ion-color-danger-tint:#cb1a27;--ion-color-light:#f4f5f8;--ion-color-light-rgb:244, 245, 248;--ion-color-light-contrast:#000;--ion-color-light-contrast-rgb:0, 0, 0;--ion-color-light-shade:#d7d8da;--ion-color-light-tint:#f5f6f9;--ion-color-medium:#636469;--ion-color-medium-rgb:99, 100, 105;--ion-color-medium-contrast:#fff;--ion-color-medium-contrast-rgb:255, 255, 255;--ion-color-medium-shade:#57585c;--ion-color-medium-tint:#737478;--ion-color-dark:#222428;--ion-color-dark-rgb:34, 36, 40;--ion-color-dark-contrast:#fff;--ion-color-dark-contrast-rgb:255, 255, 255;--ion-color-dark-shade:#1e2023;--ion-color-dark-tint:#383a3e}html.ios{--ion-default-font:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}html.md{--ion-default-font:"Roboto", "Helvetica Neue", sans-serif}html{--ion-dynamic-font:-apple-system-body;--ion-font-family:var(--ion-default-font)}body{background:var(--ion-background-color);color:var(--ion-text-color)}body.backdrop-no-scroll{overflow:hidden}html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,html.ios ion-modal ion-footer ion-toolbar:first-of-type{padding-top:6px}html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type{padding-bottom:6px}html.ios ion-modal ion-toolbar{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){html.ios ion-modal.modal-card:first-of-type{--backdrop-opacity:0.18}}ion-modal.modal-default.show-modal~ion-modal.modal-default{--backdrop-opacity:0;--box-shadow:none}html.ios ion-modal.modal-card .ion-page{border-top-left-radius:var(--border-radius)}.ion-color-primary{--ion-color-base:var(--ion-color-primary, #0054e9) !important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 0, 84, 233) !important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-primary-shade, #004acd) !important;--ion-color-tint:var(--ion-color-primary-tint, #1a65eb) !important}.ion-color-secondary{--ion-color-base:var(--ion-color-secondary, #0163aa) !important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 1, 99, 170) !important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-secondary-shade, #015796) !important;--ion-color-tint:var(--ion-color-secondary-tint, #1a73b3) !important}.ion-color-tertiary{--ion-color-base:var(--ion-color-tertiary, #6030ff) !important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 96, 48, 255) !important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-tertiary-shade, #542ae0) !important;--ion-color-tint:var(--ion-color-tertiary-tint, #7045ff) !important}.ion-color-success{--ion-color-base:var(--ion-color-success, #2dd55b) !important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 213, 91) !important;--ion-color-contrast:var(--ion-color-success-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-success-shade, #28bb50) !important;--ion-color-tint:var(--ion-color-success-tint, #42d96b) !important}.ion-color-warning{--ion-color-base:var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast:var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22) !important}.ion-color-danger{--ion-color-base:var(--ion-color-danger, #c5000f) !important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 197, 0, 15) !important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-danger-shade, #ad000d) !important;--ion-color-tint:var(--ion-color-danger-tint, #cb1a27) !important}.ion-color-light{--ion-color-base:var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast:var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium{--ion-color-base:var(--ion-color-medium, #636469) !important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 99, 100, 105) !important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-medium-shade, #57585c) !important;--ion-color-tint:var(--ion-color-medium-tint, #737478) !important}.ion-color-dark{--ion-color-base:var(--ion-color-dark, #222428) !important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e) !important}.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;z-index:0}ion-modal>.ion-page{position:relative;contain:layout style;height:100%}.split-pane-visible>.ion-page.split-pane-main{position:relative}ion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden{display:none !important}.ion-page-invisible{opacity:0}.can-go-back>ion-header ion-back-button{display:block}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding:20px}@supports (padding-top: 20px){html{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}ion-card.ion-color .ion-inherit-color,ion-card-header.ion-color .ion-inherit-color{color:inherit}.menu-content{transform:translate3d(0,  0,  0)}.menu-content-open{cursor:pointer;touch-action:manipulation;pointer-events:none;overflow-y:hidden}.menu-content-open ion-content{--overflow:hidden}.menu-content-open .ion-content-scroll-host{overflow:hidden}.ios .menu-content-reveal{box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-reveal{box-shadow:4px 0px 16px rgba(0,0,0,.18)}.md .menu-content-push{box-shadow:4px 0px 16px rgba(0,0,0,.18)}ion-accordion-group.accordion-group-expand-inset>ion-accordion:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}ion-accordion-group.accordion-group-expand-inset>ion-accordion:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}ion-accordion-group>ion-accordion:last-of-type ion-item[slot=header]{--border-width:0px}ion-accordion.accordion-animated>[slot=header] .ion-accordion-toggle-icon{transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1)}@media (prefers-reduced-motion: reduce){ion-accordion .ion-accordion-toggle-icon{transition:none !important}}ion-accordion.accordion-expanding>[slot=header] .ion-accordion-toggle-icon,ion-accordion.accordion-expanded>[slot=header] .ion-accordion-toggle-icon{transform:rotate(180deg)}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-previous ion-item[slot=header]{--border-width:0px;--inner-border-width:0px}ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanding:first-of-type,ion-accordion-group.accordion-group-expand-inset.md>ion-accordion.accordion-expanded:first-of-type{margin-top:0}ion-input input::-webkit-date-and-time-value{text-align:start}.ion-datetime-button-overlay{--width:fit-content;--height:fit-content}.ion-datetime-button-overlay ion-datetime.datetime-grid{width:320px;min-height:320px}[ion-last-focus],header[tabindex="-1"]:focus,[role=banner][tabindex="-1"]:focus,main[tabindex="-1"]:focus,[role=main][tabindex="-1"]:focus,h1[tabindex="-1"]:focus,[role=heading][aria-level="1"][tabindex="-1"]:focus{outline:none}.popover-viewport:has(>ion-content){overflow:hidden}@supports not selector(:has(> ion-content)){.popover-viewport{overflow:hidden}}:host .atom-tooltip{--arrow-width:10px;--arrow-height:8px;--arrow-square-range:-3px;background:var(--color-neutral-light-1);border-radius:var(--border-radius);color:var(--color-neutral-white);font:var(--text-body-small);letter-spacing:var(--text-body-small-letter);padding:var(--spacing-xsmall);transition:all 0.15s ease-in-out;transition-property:opacity, transform, visibility}:host .atom-tooltip[data-show]{opacity:1;visibility:visible}:host .atom-tooltip[data-hide]{opacity:0;visibility:hidden}:host .atom-tooltip[data-placement^=top][data-hide]{transform:translateY(10px)}:host .atom-tooltip[data-placement^=top] .atom-tooltip__arrow{bottom:var(--arrow-square-range)}:host .atom-tooltip[data-placement^=bottom][data-hide]{transform:translateY(-10px)}:host .atom-tooltip[data-placement^=bottom] .atom-tooltip__arrow{top:var(--arrow-square-range)}:host .atom-tooltip[data-placement^=left][data-hide]{transform:translateX(10px)}:host .atom-tooltip[data-placement^=left] .atom-tooltip__arrow{right:var(--arrow-square-range)}:host .atom-tooltip[data-placement^=right][data-hide]{transform:translateX(-10px)}:host .atom-tooltip[data-placement^=right] .atom-tooltip__arrow{left:var(--arrow-square-range)}:host .atom-tooltip__arrow{background:inherit;height:var(--arrow-height);position:absolute;visibility:hidden;width:var(--arrow-width)}:host .atom-tooltip__arrow::before{background:inherit;content:"";height:var(--arrow-height);position:absolute;transform:rotate(45deg);visibility:visible;width:var(--arrow-width)}:host .atom-tooltip__content{align-items:center;display:flex}:host .atom-tooltip__action--close{align-self:flex-start;background:none;border:none;color:currentColor;cursor:pointer;display:block;font-size:var(--spacing-large);height:1em;padding:0;padding-left:var(--spacing-base)}',ke=Ee,Ae=class{constructor(t){vo(this,t),this.atomClose=Nt(this,"atomClose",7),this.atomOpen=Nt(this,"atomOpen",7),this._popperInstance=null,this._eventsToShowClick=["click"],this._eventsToHideClick=[],this._eventsToShowHover=["mouseenter","focus"],this._eventsToHideHover=["mouseleave","blur"],this._elementSelector=null,this._arrowElement=null,this.addEventListeners=(o,e)=>{o.forEach(r=>this._elementSelector.addEventListener(r,e))},this.removeEventListeners=(o,e)=>{o.forEach(r=>this._elementSelector.removeEventListener(r,e))},this.attachEvents=()=>{const o=this.isMobile();this.action==="click"?(this.addEventListeners(this._eventsToShowClick,this.show),this.addEventListeners(this._eventsToHideClick,this.hide)):(this.addEventListeners(this._eventsToShowHover,this.show),this.addEventListeners(this._eventsToHideHover,this.hide),o&&(this.addEventListeners(this._eventsToShowClick,this.show),this.removeEventListeners(this._eventsToShowHover,this.show),this.removeEventListeners(this._eventsToHideHover,this.hide)))},this.untachEvents=()=>{const o=this._eventsToShowClick.concat(this._eventsToHideClick,this._eventsToShowHover,this._eventsToHideHover),e=Array.from(new Set(o));this.removeEventListeners(e,this.show),this.removeEventListeners(e,this.hide)},this.show=()=>{this.open=!0,this.atomOpen.emit(),this._popperInstance.setOptions(o=>Object.assign(Object.assign({},o),{modifiers:[...o.modifiers,{name:"eventListeners",enabled:!0}]})),this._popperInstance.update()},this.hide=()=>{this.open=!1,this.atomClose.emit(),this._popperInstance.setOptions(o=>Object.assign(Object.assign({},o),{modifiers:[...o.modifiers,{name:"eventListeners",enabled:!1}]})),this._popperInstance.update()},this.open=!1,this.element=void 0,this.placement="top",this.action="hover"}placementShouldUpdatePopperInstance(t){this._popperInstance.setOptions(o=>Object.assign(Object.assign({},o),{placement:t})),this._popperInstance.update()}updateEvents(){this.untachEvents(),this.attachEvents()}onResize(){this.attachEvents()}onClickCheckOutside(t){this.el.contains(t.target)||this._elementSelector===t.target||this.hide()}componentWillLoad(){const t=document.getElementById(this.element);this._elementSelector=t,this.attachEvents(),this._popperInstance=Oe(t,this.el,{placement:this.placement,modifiers:[{name:"offset",options:{offset:[0,4]}}]})}componentDidLoad(){this._arrowElement=this.el.shadowRoot.querySelector(".atom-tooltip__arrow"),this._popperInstance.setOptions(t=>Object.assign(Object.assign({},t),{modifiers:[...t.modifiers,{name:"arrow",options:{element:this._arrowElement,padding:16}}]})),this._popperInstance.update()}disconnectedCallback(){this.untachEvents(),this._popperInstance.destroy()}isMobile(){return window.matchMedia("(max-width: 768px)").matches}render(){return U(ho,{key:"4fcf6513faba044f628308dea256dce7b012b633",style:{zIndex:this.open?"1":"-1"},role:this.isMobile()?"dialog":"tooltip"},U("div",{key:"858815112b155b4cbdb2106905395526559e0ac0","data-placement":this.placement,"data-hide":!this.open,"data-show":this.open,class:{"atom-tooltip":!0}},U("div",{key:"ba54fd0fc1750a6fb3b74337174450f8161d6ac5",class:"atom-tooltip__content"},U("slot",{key:"0d578f7828353667d6091e1e0210506cf6d48d5a"}),(this.action==="click"||this.isMobile())&&U("button",{key:"b7f2abc7e84e392cbb9a14f2b1f0073cce32f04d",class:"atom-tooltip__action--close","aria-label":"Fechar",onClick:this.hide},U("atom-icon",{key:"0ca43a404109dcc5bd650f54e013b46059f153c7",icon:"close"}))),U("div",{key:"024224e0e9361598374b0ef94323babdce78131e",class:"atom-tooltip__arrow","aria-hidden":!0})))}get el(){return mo(this)}static get watchers(){return{placement:["placementShouldUpdatePopperInstance"],action:["updateEvents"]}}};Ae.style=ke;export{Ae as atom_tooltip};

import{f as D}from"./helpers-079c01eb-D592YRe8.js";import{i as h}from"./dir-861e8ef7-ebPfiN6E.js";import{createGesture as M}from"./index-8d9b57d7-PlsDOfno.js";import"./gesture-controller-5b8003e1-9dGIRWtU.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const z=(n,m,p,g,f)=>{const c=n.ownerDocument.defaultView;let o=h(n);const X=t=>{const{startX:e}=t;return o?e>=c.innerWidth-50:e<=50},a=t=>o?-t.deltaX:t.deltaX,w=t=>o?-t.velocityX:t.velocityX;return M({el:n,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:t=>(o=h(n),X(t)&&m()),onStart:p,onMove:t=>{const e=a(t)/c.innerWidth;g(e)},onEnd:t=>{const s=a(t),e=c.innerWidth,r=s/e,i=w(t),v=e/2,l=i>=0&&(i>.2||s>v),u=(l?1-r:r)*e;let d=0;if(u>5){const y=u/Math.abs(i);d=Math.min(y,540)}f(l,r<=0?.01:D(0,r,.9999),d)}})};export{z as createSwipeBackGesture};
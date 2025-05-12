/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const d=(n,o,e)=>{if(typeof MutationObserver>"u")return;const r=new MutationObserver(t=>{e(i(t,o))});return r.observe(n,{childList:!0,subtree:!0}),r},i=(n,o)=>{let e;return n.forEach(r=>{for(let t=0;t<r.addedNodes.length;t++)e=s(r.addedNodes[t],o)||e}),e},s=(n,o)=>{if(n.nodeType!==1)return;const e=n;return(e.tagName===o.toUpperCase()?[e]:Array.from(e.querySelectorAll(o))).find(t=>t.value===e.value)};export{d as w};

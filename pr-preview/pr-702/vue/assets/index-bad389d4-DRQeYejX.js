/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const b=!1;/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const g=e=>{try{if(e instanceof E)return e.value;if(!h()||typeof e!="string"||e==="")return e;if(e.includes("onload="))return"";const n=document.createDocumentFragment(),t=document.createElement("div");n.appendChild(t),t.innerHTML=e,v.forEach(i=>{const f=n.querySelectorAll(i);for(let a=f.length-1;a>=0;a--){const l=f[a];l.parentNode?l.parentNode.removeChild(l):n.removeChild(l);const m=u(l);for(let s=0;s<m.length;s++)d(m[s])}});const o=u(n);for(let i=0;i<o.length;i++)d(o[i]);const r=document.createElement("div");r.appendChild(n);const c=r.querySelector("div");return c!==null?c.innerHTML:r.innerHTML}catch(n){return console.error(n),""}},d=e=>{if(e.nodeType&&e.nodeType!==1)return;if(typeof NamedNodeMap<"u"&&!(e.attributes instanceof NamedNodeMap)){e.remove();return}for(let t=e.attributes.length-1;t>=0;t--){const o=e.attributes.item(t),r=o.name;if(!p.includes(r.toLowerCase())){e.removeAttribute(r);continue}const c=o.value,i=e[r];(c!=null&&c.toLowerCase().includes("javascript:")||i!=null&&i.toLowerCase().includes("javascript:"))&&e.removeAttribute(r)}const n=u(e);for(let t=0;t<n.length;t++)d(n[t])},u=e=>e.children!=null?e.children:e.childNodes,h=()=>{var e;const n=window,t=(e=n==null?void 0:n.Ionic)===null||e===void 0?void 0:e.config;return t?t.get?t.get("sanitizerEnabled",!0):t.sanitizerEnabled===!0||t.sanitizerEnabled===void 0:!0},p=["class","id","href","src","name","slot"],v=["script","style","iframe","meta","link","object","embed"];class E{constructor(n){this.value=n}}export{b as E,g as s};

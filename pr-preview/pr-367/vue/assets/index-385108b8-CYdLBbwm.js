import{d as x}from"./index-d9a82e80-B2PaWDFh.js";import{MENU_BACK_BUTTON_PRIORITY as k}from"./hardware-back-button-3e887a79-BjZZaRmb.js";import{p as T}from"./index-f5dbb989-By3l89LO.js";import{d as B}from"./helpers-079c01eb-D592YRe8.js";import{b as O}from"./index-Cb5LPqcs.js";import{c as u}from"./animation-022a9434-BW6ZVdxK.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const X=t=>u().duration(t?400:300);/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const P=t=>{let o,r;const c=t.width+8,a=u(),f=u();t.isEndSide?(o=c+"px",r="0px"):(o=-c+"px",r="0px"),a.addElement(t.menuInnerEl).fromTo("transform",`translateX(${o})`,`translateX(${r})`);const m=O(t)==="ios",y=m?.2:.25;return f.addElement(t.backdropEl).fromTo("opacity",.01,y),X(m).addAnimation([a,f])};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const q=t=>{let o,r;const c=O(t),a=t.width;t.isEndSide?(o=-a+"px",r=a+"px"):(o=a+"px",r=-a+"px");const f=u().addElement(t.menuInnerEl).fromTo("transform",`translateX(${r})`,"translateX(0px)"),w=u().addElement(t.contentEl).fromTo("transform","translateX(0px)",`translateX(${o})`),m=u().addElement(t.backdropEl).fromTo("opacity",.01,.32);return X(c==="ios").addAnimation([f,w,m])};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const U=t=>{const o=O(t),r=t.width*(t.isEndSide?-1:1)+"px",c=u().addElement(t.contentEl).fromTo("transform","translateX(0px)",`translateX(${r})`);return X(o==="ios").addAnimation(c)};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const D=()=>{const t=new Map,o=[],r=async n=>{const e=await l(n,!0);return e?e.open():!1},c=async n=>{const e=await(n!==void 0?l(n,!0):h());return e!==void 0?e.close():!1},a=async n=>{const e=await l(n,!0);return e?e.toggle():!1},f=async(n,e)=>{const s=await l(e);return s&&(s.disabled=!n),s},w=async(n,e)=>{const s=await l(e);return s&&(s.swipeGesture=n),s},m=async n=>{if(n!=null){const e=await l(n);return e!==void 0&&e.isOpen()}else return await h()!==void 0},y=async n=>{const e=await l(n);return e?!e.disabled:!1},l=async(n,e=!1)=>{if(await g(),n==="start"||n==="end"){const i=o.filter(d=>d.side===n&&!d.disabled);if(i.length>=1)return i.length>1&&e&&T(`menuController queried for a menu on the "${n}" side, but ${i.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`,i.map(d=>d.el)),i[0].el;const p=o.filter(d=>d.side===n);if(p.length>=1)return p.length>1&&e&&T(`menuController queried for a menu on the "${n}" side, but ${p.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`,p.map(d=>d.el)),p[0].el}else if(n!=null)return b(i=>i.menuId===n);const s=b(i=>!i.disabled);return s||(o.length>0?o[0].el:void 0)},h=async()=>(await g(),A()),_=async()=>(await g(),S()),v=async()=>(await g(),I()),E=(n,e)=>{t.set(n,e)},$=n=>{o.indexOf(n)<0&&o.push(n)},M=n=>{const e=o.indexOf(n);e>-1&&o.splice(e,1)},R=async(n,e,s)=>{if(I())return!1;if(e){const i=await h();i&&n.el!==i&&await i.setOpen(!1,!1)}return n._setOpen(e,s)},C=(n,e)=>{const s=t.get(n);if(!s)throw new Error("animation not registered");return s(e)},A=()=>b(n=>n._isOpen),S=()=>o.map(n=>n.el),I=()=>o.some(n=>n.isAnimating),b=n=>{const e=o.find(n);if(e!==void 0)return e.el},g=()=>Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(n=>new Promise(e=>B(n,e))));return E("reveal",U),E("push",q),E("overlay",P),x===null||x===void 0||x.addEventListener("ionBackButton",n=>{const e=A();e&&n.detail.register(k,()=>e.close())}),{registerAnimation:E,get:l,getMenus:_,getOpen:h,isEnabled:y,swipeGesture:w,isAnimating:v,isOpen:m,enable:f,toggle:a,close:c,open:r,_getOpenSync:A,_createAnimation:C,_register:$,_unregister:M,_setOpen:R}},j=D();export{j as m};

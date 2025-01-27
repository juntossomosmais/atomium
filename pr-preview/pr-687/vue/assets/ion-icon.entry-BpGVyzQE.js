import{r as v,h as l,H as w,g as C,e as I}from"./index-DJ-OKiNv.js";import"./vue.esm-bundler-D6ApT1Ci.js";import"./iframe-Ies5omKV.js";import"../sb-preview/runtime.js";let a;const y=()=>{if(typeof window>"u")return new Map;if(!a){const t=window;t.Ionicons=t.Ionicons||{},a=t.Ionicons.map=t.Ionicons.map||new Map}return a},L=t=>{let e=d(t.src);return e||(e=m(t.name,t.icon,t.mode,t.ios,t.md),e?A(e,t):t.icon&&(e=d(t.icon),e||(e=d(t.icon[t.mode]),e))?e:null)},A=(t,e)=>{const o=y().get(t);if(o)return o;try{return I(`svg/${t}.svg`)}catch{console.warn(`[Ionicons Warning]: Could not load icon with name "${t}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`,e)}},m=(t,e,o,i,n)=>(o=(o&&r(o))==="ios"?"ios":"md",i&&o==="ios"?t=r(i):n&&o==="md"?t=r(n):(!t&&e&&!p(e)&&(t=e),c(t)&&(t=r(t))),!c(t)||t.trim()===""||t.replace(/[a-z]|-|\d/gi,"")!==""?null:t),d=t=>c(t)&&(t=t.trim(),p(t))?t:null,p=t=>t.length>0&&/(\/|\.)/.test(t),c=t=>typeof t=="string",r=t=>t.toLowerCase(),k=(t,e=[])=>{const o={};return e.forEach(i=>{t.hasAttribute(i)&&(t.getAttribute(i)!==null&&(o[i]=t.getAttribute(i)),t.removeAttribute(i))}),o},x=t=>t&&t.dir!==""?t.dir.toLowerCase()==="rtl":(document==null?void 0:document.dir.toLowerCase())==="rtl",M=t=>{const e=document.createElement("div");e.innerHTML=t;for(let i=e.childNodes.length-1;i>=0;i--)e.childNodes[i].nodeName.toLowerCase()!=="svg"&&e.removeChild(e.childNodes[i]);const o=e.firstElementChild;if(o&&o.nodeName.toLowerCase()==="svg"){const i=o.getAttribute("class")||"";if(o.setAttribute("class",(i+" s-ion-icon").trim()),b(o))return e.innerHTML}return""},b=t=>{if(t.nodeType===1){if(t.nodeName.toLowerCase()==="script")return!1;for(let e=0;e<t.attributes.length;e++){const o=t.attributes[e].name;if(c(o)&&o.toLowerCase().indexOf("on")===0)return!1}for(let e=0;e<t.childNodes.length;e++)if(!b(t.childNodes[e]))return!1}return!0},z=t=>t.startsWith("data:image/svg+xml"),O=t=>t.indexOf(";utf8,")!==-1,s=new Map,g=new Map;let h;const S=(t,e)=>{let o=g.get(t);if(!o)if(typeof fetch<"u"&&typeof document<"u")if(z(t)&&O(t)){h||(h=new DOMParser);const n=h.parseFromString(t,"text/html").querySelector("svg");return n&&s.set(t,n.outerHTML),Promise.resolve()}else o=fetch(t).then(i=>{if(i.ok)return i.text().then(n=>{n&&e!==!1&&(n=M(n)),s.set(t,n||"")});s.set(t,"")}),g.set(t,o);else return s.set(t,""),Promise.resolve();return o},E=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}",H=E,V=class{constructor(t){v(this,t),this.iconName=null,this.inheritedAttributes={},this.didLoadIcon=!1,this.svgContent=void 0,this.isVisible=!1,this.mode=D(),this.color=void 0,this.ios=void 0,this.md=void 0,this.flipRtl=void 0,this.name=void 0,this.src=void 0,this.icon=void 0,this.size=void 0,this.lazy=!1,this.sanitize=!0}componentWillLoad(){this.inheritedAttributes=k(this.el,["aria-label"])}connectedCallback(){this.waitUntilVisible(this.el,"50px",()=>{this.isVisible=!0,this.loadIcon()})}componentDidLoad(){this.didLoadIcon||this.loadIcon()}disconnectedCallback(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(t,e,o){if(this.lazy&&typeof window<"u"&&window.IntersectionObserver){const i=this.io=new window.IntersectionObserver(n=>{n[0].isIntersecting&&(i.disconnect(),this.io=void 0,o())},{rootMargin:e});i.observe(t)}else o()}loadIcon(){if(this.isVisible){const t=L(this);t&&(s.has(t)?this.svgContent=s.get(t):S(t,this.sanitize).then(()=>this.svgContent=s.get(t)),this.didLoadIcon=!0)}this.iconName=m(this.name,this.icon,this.mode,this.ios,this.md)}render(){const{flipRtl:t,iconName:e,inheritedAttributes:o,el:i}=this,n=this.mode||"md",f=e?(e.includes("arrow")||e.includes("chevron"))&&t!==!1:!1,u=t||f;return l(w,Object.assign({role:"img",class:Object.assign(Object.assign({[n]:!0},T(this.color)),{[`icon-${this.size}`]:!!this.size,"flip-rtl":u,"icon-rtl":u&&x(i)})},o),this.svgContent?l("div",{class:"icon-inner",innerHTML:this.svgContent}):l("div",{class:"icon-inner"}))}static get assetsDirs(){return["svg"]}get el(){return C(this)}static get watchers(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"],ios:["loadIcon"],md:["loadIcon"]}}},D=()=>typeof document<"u"&&document.documentElement.getAttribute("mode")||"md",T=t=>t?{"ion-color":!0,[`ion-color-${t}`]:!0}:null;V.style=H;export{V as ion_icon};
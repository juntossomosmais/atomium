const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-Do_0Ps6P.js","./index-Buicu8MG.js","./index-Cykx6rHf.js","./iframe-Ct6Z6793.js","./_commonjsHelpers-Cpj98o6Y.js","./doctrine-Z_8G-UDG.js","./index-DrFu-skq.js"])))=>i.map(i=>d[i]);
import{_ as h}from"./iframe-Ct6Z6793.js";import{d as p,R as o,r as c,C as E,A as R,H as D,D as x}from"./index-Cykx6rHf.js";var u={},i=p;u.createRoot=i.createRoot,u.hydrateRoot=i.hydrateRoot;var n=new Map,y=({callback:e,children:t})=>{let r=c.useRef();return c.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},v=async(e,t)=>{let r=await _(t);return new Promise(s=>{r.render(o.createElement(y,{callback:()=>s(null)},e))})},w=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},_=async e=>{let t=n.get(e);return t||(t=u.createRoot(e),n.set(e,t)),t},f={code:E,a:R,...D},g=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},A=class{constructor(){this.render=async(e,t,r)=>{let s={...f,...t==null?void 0:t.components},m=x;return new Promise((l,d)=>{h(async()=>{const{MDXProvider:a}=await import("./index-Do_0Ps6P.js");return{MDXProvider:a}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(({MDXProvider:a})=>v(o.createElement(g,{showException:d,key:Math.random()},o.createElement(a,{components:s},o.createElement(m,{context:e,docsParameter:t}))),r)).then(()=>l())})},this.unmount=e=>{w(e)}}};export{A as D,f as d};

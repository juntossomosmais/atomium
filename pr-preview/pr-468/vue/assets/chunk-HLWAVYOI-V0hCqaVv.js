const __vite__fileDeps=["./index-CpwBQZBR.js","./index-BRHmfQAV.js","./index-B0M28HXi.js","./iframe-CQFnB7GW.js","./_commonjsHelpers-Cpj98o6Y.js","./doctrine-Z_8G-UDG.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as h}from"./iframe-CQFnB7GW.js";import{d as p,R as o,r as a,C as E,A as R,H as x,D}from"./index-B0M28HXi.js";var c={},u=p;c.createRoot=u.createRoot,c.hydrateRoot=u.hydrateRoot;var n=new Map,y=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},_=async(e,t)=>{let r=await w(t);return new Promise(s=>{r.render(o.createElement(y,{callback:()=>s(null)},e))})},v=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},w=async e=>{let t=n.get(e);return t||(t=c.createRoot(e),n.set(e,t)),t},f={code:E,a:R,...x},g=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},A=class{constructor(){this.render=async(e,t,r)=>{let s={...f,...t==null?void 0:t.components},m=D;return new Promise((i,l)=>{h(()=>import("./index-CpwBQZBR.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(({MDXProvider:d})=>_(o.createElement(g,{showException:l,key:Math.random()},o.createElement(d,{components:s},o.createElement(m,{context:e,docsParameter:t}))),r)).then(()=>i())})},this.unmount=e=>{v(e)}}};export{A as D,f as d};

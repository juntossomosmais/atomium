const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CFykMkt_.js","./index-Cdw31Kow.js","./index-BijNF8oD.js","./iframe-DqHqq9MF.js","./_commonjsHelpers-CqkleIqs.js","./index-DkDiOc0H.js","./index-DrFu-skq.js"])))=>i.map(i=>d[i]);
import{_ as h}from"./iframe-DqHqq9MF.js";import{as as E,am as a,at as d,au as R,av as v,ak as n,aw as w}from"./index-BijNF8oD.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DkDiOc0H.js";import"./index-DrFu-skq.js";var s={},m;function f(){if(m)return s;m=1;var e=E();return s.createRoot=e.createRoot,s.hydrateRoot=e.hydrateRoot,s}var _=f(),i=new Map;function y(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var x=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,t=null;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}});var C=async(e,t,r)=>{let o=await D(t,r);if(y()){o.render(e);return}let{promise:u,resolve:c}=Promise.withResolvers();return o.render(a.createElement(x,{callback:c},e)),u},g=(e,t)=>{let r=i.get(e);r&&(r.unmount(),i.delete(e))},D=async(e,t)=>{let r=i.get(e);return r||(r=_.createRoot(e,t),i.set(e,r)),r},M={code:d,a:R,...v},A=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:n.createElement(n.Fragment,null,t)}},S=class{constructor(){this.render=async(e,t,r)=>{let o={...M,...t==null?void 0:t.components},u=w;return new Promise((c,p)=>{h(async()=>{const{MDXProvider:l}=await import("./index-CFykMkt_.js");return{MDXProvider:l}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(({MDXProvider:l})=>C(n.createElement(A,{showException:p,key:Math.random()},n.createElement(l,{components:o},n.createElement(u,{context:e,docsParameter:t}))),r)).then(()=>c())})},this.unmount=e=>{g(e)}}};export{S as DocsRenderer,M as defaultComponents};

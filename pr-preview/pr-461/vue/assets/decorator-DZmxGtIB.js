import{I as v,v as A}from"./preview-errors-B42RpLod.js";const{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,{global:E}=__STORYBOOK_MODULE_GLOBAL__;var I="actions",w="storybook/actions",D=`${w}/action-event`,p={depth:10,clearOnStoryChange:!0,limit:50},f=(e,n)=>{let t=Object.getPrototypeOf(e);return!t||n(t)?t:f(t,n)},S=e=>!!(typeof e=="object"&&e&&f(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),j=e=>{if(S(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let t=Object.getOwnPropertyDescriptor(n,"view"),o=t==null?void 0:t.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...t,value:Object.create(o.constructor.prototype)}),n}return e},P=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?A():Date.now().toString(36)+Math.random().toString(36).substring(2);function B(e,n={}){let t={...p,...n},o=function(...i){var O,_;if(n.implicit){let h=(O="__STORYBOOK_PREVIEW__"in E?E.__STORYBOOK_PREVIEW__:void 0)==null?void 0:O.storyRenders.find(c=>c.phase==="playing"||c.phase==="rendering");if(h){let c=!((_=window==null?void 0:window.FEATURES)!=null&&_.disallowImplicitActionsInRenderV8),d=new v({phase:h.phase,name:e,deprecated:c});if(c)console.warn(d);else throw d}}let r=R.getChannel(),l=P(),s=5,a=i.map(j),m=i.length>1?a:a[0],b={id:l,count:0,data:{name:e,args:m},options:{...t,maxDepth:s+(t.depth||3),allowFunction:t.allowFunction||!1}};r.emit(D,b)};return o.isAction=!0,o}var L=(...e)=>{let n=p,t=e;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(n={...p,...t.pop()});let o=t[0];(t.length!==1||typeof o=="string")&&(o={},t.forEach(r=>{o[r]=r}));let i={};return Object.keys(o).forEach(r=>{i[r]=B(o[r],n)}),i};const{global:M}=__STORYBOOK_MODULE_GLOBAL__,{makeDecorator:T,useEffect:K}=__STORYBOOK_MODULE_PREVIEW_API__;var{document:g,Element:y}=M,V=/^(\S+)\s*(.*)$/,Y=y!=null&&!y.prototype.matches,N=Y?"msMatchesSelector":"matches",u=(e,n)=>{if(e[N](n))return!0;let t=e.parentElement;return t?u(t,n):!1},U=(e,...n)=>{let t=e(...n);return Object.entries(t).map(([o,i])=>{let[r,l,s]=o.match(V)||[];return{eventName:l,handler:a=>{(!s||u(a.target,s))&&i(a)}}})},W=(e,...n)=>{let t=g&&g.getElementById("storybook-root");K(()=>{if(t!=null){let o=U(e,...n);return o.forEach(({eventName:i,handler:r})=>t.addEventListener(i,r)),()=>o.forEach(({eventName:i,handler:r})=>t.removeEventListener(i,r))}},[t,e,n])},$=T({name:"withActions",parameterName:I,skipIfNoParametersOrOptions:!0,wrapper:(e,n,{parameters:t})=>(t!=null&&t.handles&&W(L,...t.handles),e(n))});export{$ as w};

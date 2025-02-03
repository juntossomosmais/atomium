import{M as _}from"./index-CA89Ne80.js";import"./vue.esm-bundler-cJVerQom.js";import"./iframe-BkSS-xgI.js";var E=Object.defineProperty,S=(e,a)=>{for(var r in a)E(e,r,{get:a[r],enumerable:!0})},V=e=>(e=typeof e,e==="object"||e==="function"),O={};S(O,{err:()=>k,map:()=>P,ok:()=>c,unwrap:()=>A,unwrapErr:()=>C});var c=e=>({isOk:!0,isErr:!1,value:e}),k=e=>({isOk:!1,isErr:!0,value:e});function P(e,a){if(e.isOk){const r=a(e.value);return r instanceof Promise?r.then(t=>c(t)):c(r)}if(e.isErr){const r=e.value;return k(r)}throw"should never get here"}var A=e=>{if(e.isOk)return e.value;throw e.value},C=e=>{if(e.isErr)return e.value;throw e.value},N=(e,a,...r)=>{let t=null,x=null,b=null,l=!1,p=!1;const n=[],m=d=>{for(let u=0;u<d.length;u++)t=d[u],Array.isArray(t)?m(t):t!=null&&typeof t!="boolean"&&((l=!V(t))&&(t=String(t)),l&&p?n[n.length-1].$text$+=t:n.push(l?f(null,t):t),p=l)};m(r);const o=f(e,null);return o.$attrs$=a,n.length>0&&(o.$children$=n),o.$key$=x,o.$name$=b,o},f=(e,a)=>{const r={$flags$:0,$tag$:e,$text$:a,$elm$:null,$children$:null};return r.$attrs$=null,r.$key$=null,r.$name$=null,r};const j={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Meter"}}},argTypes:{type:{control:"select",options:["neutral","success","warning","danger"],defaultValue:{summary:"neutral"},description:"Meter"},size:{control:"select",options:["large","small"],defaultValue:{summary:"large"},description:"Meter"},title:{control:"text",description:"Meter"},min:{control:"number",defaultValue:{summary:"0"},description:"Meter"},max:{control:"number",description:"Meter"},actual:{control:"number",defaultValue:{summary:"0"},description:"Meter"},content:{control:"text",description:"Meter",defaultValue:()=>N("div",null,"Valor atual: 0")}}},B={title:"Components/Meter",...j},w=e=>({components:{AtomMeter:_},setup(){return{args:e}},template:`
    <AtomMeter type="${e.type}" />
  `}),s={render:e=>w(e),args:{type:"primary",label:"Meter"}},i={render:e=>w(e),args:{...s.args,type:"secondary"}};var y,$,g;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    type: 'primary',
    label: 'Meter'
  }
}`,...(g=($=s.parameters)==null?void 0:$.docs)==null?void 0:g.source}}};var v,M,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => createMeter(args),
  args: {
    ...Primary.args,
    type: 'secondary'
  }
}`,...(h=(M=i.parameters)==null?void 0:M.docs)==null?void 0:h.source}}};const D=["Primary","Secondary"];export{s as Primary,i as Secondary,D as __namedExportsOrder,B as default};

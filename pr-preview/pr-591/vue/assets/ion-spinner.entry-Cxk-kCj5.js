import{r as d,a as c,b as p,h as o,H as h}from"./index-PAYI6mKm.js";import{c as m}from"./theme-516b22d6-DD5XIICl.js";import{S as f}from"./spinner-configs-0b650b20-Bd7CqIHQ.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-6IGL2jeF.js";import"../sb-preview/runtime.js";const u=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{transform-origin:center;position:absolute;top:0;left:0;width:100%;height:100%;transform:translateZ(0)}:host-context([dir=rtl]) svg{transform-origin:calc(100% - center)}[dir=rtl] svg{transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){svg:dir(rtl){transform-origin:calc(100% - center)}}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{animation:spinner-dots 1s linear infinite}:host(.spinner-circular) svg{animation:spinner-circular linear infinite}:host(.spinner-circular) circle{animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{animation-play-state:paused}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-scale-out{0%{transform:scale(1, 1)}100%{transform:scale(0, 0)}}@keyframes spinner-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes spinner-dots{0%{transform:scale(1, 1);opacity:0.9}50%{transform:scale(0.4, 0.4);opacity:0.3}100%{transform:scale(1, 1);opacity:0.9}}@keyframes spinner-circular{100%{transform:rotate(360deg)}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}",y=u,g=class{constructor(n){d(this,n),this.color=void 0,this.duration=void 0,this.name=void 0,this.paused=!1}getName(){const n=this.name||c.get("spinner"),e=p(this);return n||(e==="ios"?"lines":"circular")}render(){var n;const e=this,t=p(e),i=e.getName(),s=(n=f[i])!==null&&n!==void 0?n:f.lines,a=typeof e.duration=="number"&&e.duration>10?e.duration:s.dur,l=[];if(s.circles!==void 0)for(let r=0;r<s.circles;r++)l.push(k(s,a,r,s.circles));else if(s.lines!==void 0)for(let r=0;r<s.lines;r++)l.push(x(s,a,r,s.lines));return o(h,{key:"9e08bf306b28bdd76884d353dcaaf31c1bb591f2",class:m(e.color,{[t]:!0,[`spinner-${i}`]:!0,"spinner-paused":e.paused||c.getBoolean("_testing")}),role:"progressbar",style:s.elmDuration?{animationDuration:a+"ms"}:{}},l)}},k=(n,e,t,i)=>{const s=n.fn(e,t,i);return s.style["animation-duration"]=e+"ms",o("svg",{viewBox:s.viewBox||"0 0 64 64",style:s.style},o("circle",{transform:s.transform||"translate(32,32)",cx:s.cx,cy:s.cy,r:s.r,style:n.elmDuration?{animationDuration:e+"ms"}:{}}))},x=(n,e,t,i)=>{const s=n.fn(e,t,i);return s.style["animation-duration"]=e+"ms",o("svg",{viewBox:s.viewBox||"0 0 64 64",style:s.style},o("line",{transform:"translate(32,32)",y1:s.y1,y2:s.y2}))};g.style=y;export{g as ion_spinner};

import{r as v,j as w,w as I,e as x,h as A,H as R,a as k}from"./index-B5Z3Dd3z.js";import"./iframe-DTshtJ0Q.js";const E=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{transform:translate(var(--translate-end)) scale(var(--final-scale, 1));animation:150ms fadeOutAnimation forwards}@keyframes rippleAnimation{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(1)}to{transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes fadeInAnimation{from{animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeOutAnimation{from{animation-timing-function:linear;opacity:0.16}to{opacity:0}}",C=E,T=class{constructor(t){v(this,t),this.type="bounded"}async addRipple(t,d){return new Promise(p=>{w(()=>{const i=this.el.getBoundingClientRect(),n=i.width,o=i.height,f=Math.sqrt(n*n+o*o),l=Math.max(o,n),m=this.unbounded?l:f+M,s=Math.floor(l*P),u=m/s;let r=t-i.left,c=d-i.top;this.unbounded&&(r=n*.5,c=o*.5);const h=r-s*.5,y=c-s*.5,b=n*.5-r,g=o*.5-c;I(()=>{const a=document.createElement("div");a.classList.add("ripple-effect");const e=a.style;e.top=y+"px",e.left=h+"px",e.width=e.height=s+"px",e.setProperty("--final-scale",`${u}`),e.setProperty("--translate-end",`${b}px, ${g}px`),(this.el.shadowRoot||this.el).appendChild(a),setTimeout(()=>{p(()=>{L(a)})},325)})})})}get unbounded(){return this.type==="unbounded"}render(){const t=x(this);return A(R,{key:"7ae559bda5d2c1856a45bfa150c2cb4f83373f8e",role:"presentation",class:{[t]:!0,unbounded:this.unbounded}})}get el(){return k(this)}},L=t=>{t.classList.add("fade-out"),setTimeout(()=>{t.remove()},200)},M=10,P=.5;T.style=C;export{T as ion_ripple_effect};

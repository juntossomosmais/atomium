/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const l=(s,t,o,a,r)=>u(s[1],t[1],o[1],a[1],r).map(n=>i(s[0],t[0],o[0],a[0],n)),i=(s,t,o,a,r)=>{const n=3*t*Math.pow(r-1,2),e=-3*o*r+3*o+a*r,h=s*Math.pow(r-1,3);return r*(n+r*e)-h},u=(s,t,o,a,r)=>(s-=r,t-=r,o-=r,a-=r,w(a-3*o+3*t-s,3*o-6*t+3*s,3*t-3*s,s).filter(e=>e>=0&&e<=1)),q=(s,t,o)=>{const a=t*t-4*s*o;return a<0?[]:[(-t+Math.sqrt(a))/(2*s),(-t-Math.sqrt(a))/(2*s)]},w=(s,t,o,a)=>{if(s===0)return q(t,o,a);t/=s,o/=s,a/=s;const r=(3*o-t*t)/3,n=(2*t*t*t-9*t*o+27*a)/27;if(r===0)return[Math.pow(-n,.3333333333333333)];if(n===0)return[Math.sqrt(-r),-Math.sqrt(-r)];const e=Math.pow(n/2,2)+Math.pow(r/3,3);if(e===0)return[Math.pow(n/2,.5)-t/3];if(e>0)return[Math.pow(-(n/2)+Math.sqrt(e),.3333333333333333)-Math.pow(n/2+Math.sqrt(e),.3333333333333333)-t/3];const h=Math.sqrt(Math.pow(-(r/3),3)),M=Math.acos(-(n/(2*Math.sqrt(Math.pow(-(r/3),3))))),c=2*Math.pow(h,1/3);return[c*Math.cos(M/3)-t/3,c*Math.cos((M+2*Math.PI)/3)-t/3,c*Math.cos((M+4*Math.PI)/3)-t/3]};export{l as g};

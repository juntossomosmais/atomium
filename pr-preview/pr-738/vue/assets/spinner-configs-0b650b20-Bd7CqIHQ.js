/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const l={bubbles:{dur:1e3,circles:9,fn:(t,n,s)=>{const a=`${t*n/s-t}ms`,r=2*Math.PI*n/s;return{r:5,style:{top:`${32*Math.sin(r)}%`,left:`${32*Math.cos(r)}%`,"animation-delay":a}}}},circles:{dur:1e3,circles:8,fn:(t,n,s)=>{const a=n/s,r=`${t*a-t}ms`,e=2*Math.PI*a;return{r:5,style:{top:`${32*Math.sin(e)}%`,left:`${32*Math.cos(e)}%`,"animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,n)=>{const s=-(110*n)+"ms";return{r:6,style:{left:`${32-32*n}%`,"animation-delay":s}}}},lines:{dur:1e3,lines:8,fn:(t,n,s)=>{const a=`rotate(${360/s*n+(n<s/2?180:-180)}deg)`,r=`${t*n/s-t}ms`;return{y1:14,y2:26,style:{transform:a,"animation-delay":r}}}},"lines-small":{dur:1e3,lines:8,fn:(t,n,s)=>{const a=`rotate(${360/s*n+(n<s/2?180:-180)}deg)`,r=`${t*n/s-t}ms`;return{y1:12,y2:20,style:{transform:a,"animation-delay":r}}}},"lines-sharp":{dur:1e3,lines:12,fn:(t,n,s)=>{const a=`rotate(${30*n+(n<6?180:-180)}deg)`,r=`${t*n/s-t}ms`;return{y1:17,y2:29,style:{transform:a,"animation-delay":r}}}},"lines-sharp-small":{dur:1e3,lines:12,fn:(t,n,s)=>{const a=`rotate(${30*n+(n<6?180:-180)}deg)`,r=`${t*n/s-t}ms`;return{y1:12,y2:20,style:{transform:a,"animation-delay":r}}}}},o=l;export{o as S};

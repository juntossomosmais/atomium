import{r as a,c as i,h as e,b as h,H as c,g as l}from"./index-B98faGEg.js";import{c as g}from"./helpers-079c01eb-D592YRe8.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-C6swkjMP.js";import"../sb-preview/runtime.js";const m=":host{display:block;object-fit:contain}img{display:block;width:100%;height:100%;object-fit:inherit;object-position:inherit}",f=m,b=class{constructor(t){a(this,t),this.ionImgWillLoad=i(this,"ionImgWillLoad",7),this.ionImgDidLoad=i(this,"ionImgDidLoad",7),this.ionError=i(this,"ionError",7),this.inheritedAttributes={},this.onLoad=()=>{this.ionImgDidLoad.emit()},this.onError=()=>{this.ionError.emit()},this.loadSrc=void 0,this.loadError=void 0,this.alt=void 0,this.src=void 0}srcChanged(){this.addIO()}componentWillLoad(){this.inheritedAttributes=g(this.el,["draggable"])}componentDidLoad(){this.addIO()}addIO(){this.src!==void 0&&(typeof window<"u"&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver(t=>{t[t.length-1].isIntersecting&&(this.load(),this.removeIO())}),this.io.observe(this.el)):setTimeout(()=>this.load(),200))}load(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}render(){const{loadSrc:t,alt:r,onLoad:s,loadError:o,inheritedAttributes:n}=this,{draggable:d}=n;return e(c,{key:"efff4d1bd0e54dbeff140c137eb50b803a9f6f60",class:h(this)},e("img",{key:"3a1e0276ae67a7e40ec8c4ecd0061634573b2094",decoding:"async",src:t,alt:r,onLoad:s,onError:o,part:"image",draggable:u(d)}))}get el(){return l(this)}static get watchers(){return{src:["srcChanged"]}}},u=t=>{switch(t){case"true":return!0;case"false":return!1;default:return}};b.style=f;export{b as ion_img};

import{r as a,c as i,h as e,b as c,H as h,g as l}from"./index-c35f0206.js";import{c as g}from"./helpers-079c01eb-656b014e.js";import"./vue.esm-bundler-2231c3fa.js";import"./iframe-19df559e.js";import"../sb-preview/runtime.js";const m=":host{display:block;object-fit:contain}img{display:block;width:100%;height:100%;object-fit:inherit;object-position:inherit}",f=m,u=class{constructor(t){a(this,t),this.ionImgWillLoad=i(this,"ionImgWillLoad",7),this.ionImgDidLoad=i(this,"ionImgDidLoad",7),this.ionError=i(this,"ionError",7),this.inheritedAttributes={},this.onLoad=()=>{this.ionImgDidLoad.emit()},this.onError=()=>{this.ionError.emit()},this.loadSrc=void 0,this.loadError=void 0,this.alt=void 0,this.src=void 0}srcChanged(){this.addIO()}componentWillLoad(){this.inheritedAttributes=g(this.el,["draggable"])}componentDidLoad(){this.addIO()}addIO(){this.src!==void 0&&(typeof window<"u"&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver(t=>{t[t.length-1].isIntersecting&&(this.load(),this.removeIO())}),this.io.observe(this.el)):setTimeout(()=>this.load(),200))}load(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}render(){const{loadSrc:t,alt:r,onLoad:s,loadError:o,inheritedAttributes:n}=this,{draggable:d}=n;return e(h,{key:"212cb19b83defa47a677e44659eccc5e7e1bc5a2",class:c(this)},e("img",{key:"975230d5ef5f262c8e5f040eb59cd1033241f3c8",decoding:"async",src:t,alt:r,onLoad:s,onError:o,part:"image",draggable:b(d)}))}get el(){return l(this)}static get watchers(){return{src:["srcChanged"]}}},b=t=>{switch(t){case"true":return!0;case"false":return!1;default:return}};u.style=f;export{u as ion_img};

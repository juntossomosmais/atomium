import{r as a,c as i,h as e,e as h,H as c,a as l}from"./index-DZXQTcpR.js";import{c as g}from"./helpers-4047ce7f-ZS1Xs9E2.js";import"./iframe-8LX55Q3q.js";const m=":host{display:block;object-fit:contain}img{display:block;width:100%;height:100%;object-fit:inherit;object-position:inherit}",f=m,u=class{constructor(t){a(this,t),this.ionImgWillLoad=i(this,"ionImgWillLoad",7),this.ionImgDidLoad=i(this,"ionImgDidLoad",7),this.ionError=i(this,"ionError",7),this.inheritedAttributes={},this.onLoad=()=>{this.ionImgDidLoad.emit()},this.onError=()=>{this.ionError.emit()},this.loadSrc=void 0,this.loadError=void 0,this.alt=void 0,this.src=void 0}srcChanged(){this.addIO()}componentWillLoad(){this.inheritedAttributes=g(this.el,["draggable"])}componentDidLoad(){this.addIO()}addIO(){this.src!==void 0&&(typeof window<"u"&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver(t=>{t[t.length-1].isIntersecting&&(this.load(),this.removeIO())}),this.io.observe(this.el)):setTimeout(()=>this.load(),200))}load(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}render(){const{loadSrc:t,alt:r,onLoad:s,loadError:o,inheritedAttributes:n}=this,{draggable:d}=n;return e(c,{key:"da600442894427dee1974a28e545613afac69fca",class:h(this)},e("img",{key:"16df0c7069af86c0fa7ce5af598bc0f63b4eb71a",decoding:"async",src:t,alt:r,onLoad:s,onError:o,part:"image",draggable:I(d)}))}get el(){return l(this)}static get watchers(){return{src:["srcChanged"]}}},I=t=>{switch(t){case"true":return!0;case"false":return!1;default:return}};u.style=f;export{u as ion_img};

import{r as s,b as o,h as i,H as n}from"./index-Br9rU3PQ.js";import{m as r}from"./index-1fe4c732-BWfL2wyP.js";import{u as l}from"./menu-toggle-util-d7b5c45d-CFcpMdeE.js";import"./vue.esm-bundler-cJVerQom.js";import"./iframe-Bnke7yZc.js";import"./index-d9a82e80-B2PaWDFh.js";import"./hardware-back-button-90972cd5-BbvsN_M6.js";import"./index-1e38abc5-CfLTl0tl.js";import"./helpers-4047ce7f-ZS1Xs9E2.js";import"./animation-aa17f0ca-uhoxsK6h.js";const a=":host(.menu-toggle-hidden){display:none}",d=a,c=class{constructor(e){s(this,e),this.onClick=()=>r.toggle(this.menu),this.visible=!1,this.menu=void 0,this.autoHide=!0}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await l(this.menu)}render(){const e=o(this),t=this.autoHide&&!this.visible;return i(n,{key:"7c27ea5b0795676bf5cb33e1f83aa142c197f64e",onClick:this.onClick,"aria-hidden":t?"true":null,class:{[e]:!0,"menu-toggle-hidden":t}},i("slot",{key:"69f187becedc0fe34603d41d279f043cf0fdf776"}))}};c.style=d;export{c as ion_menu_toggle};

import{r as o,b as s,h as e,H as n}from"./index-Cf-FVlYa.js";import{m as r}from"./index-385108b8-CAJK63iv.js";import{u as a}from"./menu-toggle-util-87a52cc7-DGdWBlsF.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-C544D9n9.js";import"../sb-preview/runtime.js";import"./index-d9a82e80-B2PaWDFh.js";import"./hardware-back-button-3e887a79-VdrBz2M8.js";import"./index-f5dbb989-By3l89LO.js";import"./helpers-079c01eb-D592YRe8.js";import"./animation-022a9434-BW6ZVdxK.js";const l=":host(.menu-toggle-hidden){display:none}",c=l,d=class{constructor(t){o(this,t),this.onClick=()=>r.toggle(this.menu),this.visible=!1,this.menu=void 0,this.autoHide=!0}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await a(this.menu)}render(){const t=s(this),i=this.autoHide&&!this.visible;return e(n,{key:"94a0815a634c6fb1991854bfbcf5b2b4b61d7710",onClick:this.onClick,"aria-hidden":i?"true":null,class:{[t]:!0,"menu-toggle-hidden":i}},e("slot",{key:"f3ac6d17d5421390ab05f3f31ad00ec4f2ca5c7c"}))}};d.style=c;export{d as ion_menu_toggle};

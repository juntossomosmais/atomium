"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[2934],{"../../packages/core/dist/esm/atom-col.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{atom_col:()=>AtomCol});var index_a869d52d=__webpack_require__("../../packages/core/dist/esm/index-a869d52d.js");const AtomCol=class{constructor(hostRef){(0,index_a869d52d.r)(this,hostRef),this.size=void 0,this.sizeSm=void 0,this.sizeMd=void 0,this.sizeLg=void 0,this.offset=void 0,this.offsetSm=void 0,this.offsetMd=void 0,this.offsetLg=void 0,this.push=void 0,this.pull=void 0}componentDidLoad(){const ionCol=document.createElement("ion-col");Array.from(this.element.attributes).forEach((attr=>{ionCol.setAttribute(attr.name.replace("ato","ion"),attr.value)}));for(let i=this.element.childNodes.length-1;i>=0;i--){const child=this.element.removeChild(this.element.childNodes[i]);ionCol.appendChild(child)}this.element.parentNode.replaceChild(ionCol,this.element)}render(){return(0,index_a869d52d.h)(index_a869d52d.H,{size:this.size,sizeSm:this.sizeSm,sizeMd:this.sizeMd,sizeLg:this.sizeLg,offset:this.offset,offsetSm:this.offsetSm,offsetMd:this.offsetMd,offsetLg:this.offsetLg,push:this.push,pull:this.pull},(0,index_a869d52d.h)("slot",null))}get element(){return(0,index_a869d52d.e)(this)}}}}]);
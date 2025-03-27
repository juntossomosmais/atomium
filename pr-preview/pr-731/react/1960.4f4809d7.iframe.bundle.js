"use strict";(globalThis.webpackChunk_atomium_docs_react=globalThis.webpackChunk_atomium_docs_react||[]).push([[1960],{"../../packages/core/dist/esm/ion-icon.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_icon:()=>Icon});var _index_73621246_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-73621246.js");let CACHED_MAP;const getNamedUrl=(iconName,iconEl)=>{const url=(()=>{if("undefined"==typeof window)return new Map;if(!CACHED_MAP){const win=window;win.Ionicons=win.Ionicons||{},CACHED_MAP=win.Ionicons.map=win.Ionicons.map||new Map}return CACHED_MAP})().get(iconName);if(url)return url;try{return(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.j)(`svg/${iconName}.svg`)}catch(e){console.warn(`[Ionicons Warning]: Could not load icon with name "${iconName}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`,iconEl)}},getName=(iconName,icon,mode,ios,md)=>{if(mode="ios"===(mode&&toLower(mode))?"ios":"md",ios&&"ios"===mode?iconName=toLower(ios):md&&"md"===mode?iconName=toLower(md):(iconName||!icon||isSrc(icon)||(iconName=icon),isStr(iconName)&&(iconName=toLower(iconName))),!isStr(iconName)||""===iconName.trim())return null;return""!==iconName.replace(/[a-z]|-|\d/gi,"")?null:iconName},getSrc=src=>isStr(src)&&(src=src.trim(),isSrc(src))?src:null,isSrc=str=>str.length>0&&/(\/|\.)/.test(str),isStr=val=>"string"==typeof val,toLower=val=>val.toLowerCase(),isValid=elm=>{if(1===elm.nodeType){if("script"===elm.nodeName.toLowerCase())return!1;for(let i=0;i<elm.attributes.length;i++){const name=elm.attributes[i].name;if(isStr(name)&&0===name.toLowerCase().indexOf("on"))return!1}for(let i=0;i<elm.childNodes.length;i++)if(!isValid(elm.childNodes[i]))return!1}return!0},ioniconContent=new Map,requests=new Map;let parser;const getSvgContent=(url,sanitize)=>{let req=requests.get(url);if(!req){if("undefined"==typeof fetch||"undefined"==typeof document)return ioniconContent.set(url,""),Promise.resolve();if((url=>url.startsWith("data:image/svg+xml"))(url)&&(url=>-1!==url.indexOf(";utf8,"))(url)){parser||(parser=new DOMParser);const svg=parser.parseFromString(url,"text/html").querySelector("svg");return svg&&ioniconContent.set(url,svg.outerHTML),Promise.resolve()}req=fetch(url).then((rsp=>{if(rsp.ok)return rsp.text().then((svgContent=>{svgContent&&!1!==sanitize&&(svgContent=(svgContent=>{const div=document.createElement("div");div.innerHTML=svgContent;for(let i=div.childNodes.length-1;i>=0;i--)"svg"!==div.childNodes[i].nodeName.toLowerCase()&&div.removeChild(div.childNodes[i]);const svgElm=div.firstElementChild;if(svgElm&&"svg"===svgElm.nodeName.toLowerCase()){const svgClass=svgElm.getAttribute("class")||"";if(svgElm.setAttribute("class",(svgClass+" s-ion-icon").trim()),isValid(svgElm))return div.innerHTML}return""})(svgContent)),ioniconContent.set(url,svgContent||"")}));ioniconContent.set(url,"")})),requests.set(url,req)}return req},Icon=class{constructor(hostRef){(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.iconName=null,this.inheritedAttributes={},this.didLoadIcon=!1,this.svgContent=void 0,this.isVisible=!1,this.mode=getIonMode(),this.color=void 0,this.ios=void 0,this.md=void 0,this.flipRtl=void 0,this.name=void 0,this.src=void 0,this.icon=void 0,this.size=void 0,this.lazy=!1,this.sanitize=!0}componentWillLoad(){this.inheritedAttributes=((el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{el.hasAttribute(attr)&&(null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr))})),attributeObject})(this.el,["aria-label"])}connectedCallback(){this.waitUntilVisible(this.el,"50px",(()=>{this.isVisible=!0,this.loadIcon()}))}componentDidLoad(){this.didLoadIcon||this.loadIcon()}disconnectedCallback(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(el,rootMargin,cb){if(this.lazy&&"undefined"!=typeof window&&window.IntersectionObserver){const io=this.io=new window.IntersectionObserver((data=>{data[0].isIntersecting&&(io.disconnect(),this.io=void 0,cb())}),{rootMargin});io.observe(el)}else cb()}loadIcon(){if(this.isVisible){const url=(i=>{let url=getSrc(i.src);if(url)return url;if(url=getName(i.name,i.icon,i.mode,i.ios,i.md),url)return getNamedUrl(url,i);if(i.icon){if(url=getSrc(i.icon),url)return url;if(url=getSrc(i.icon[i.mode]),url)return url}return null})(this);url&&(ioniconContent.has(url)?this.svgContent=ioniconContent.get(url):getSvgContent(url,this.sanitize).then((()=>this.svgContent=ioniconContent.get(url))),this.didLoadIcon=!0)}this.iconName=getName(this.name,this.icon,this.mode,this.ios,this.md)}render(){const{flipRtl,iconName,inheritedAttributes,el}=this,mode=this.mode||"md",shouldAutoFlip=!!iconName&&((iconName.includes("arrow")||iconName.includes("chevron"))&&!1!==flipRtl),shouldBeFlippable=flipRtl||shouldAutoFlip;return(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.H,Object.assign({role:"img",class:Object.assign(Object.assign({[mode]:!0},createColorClasses(this.color)),{[`icon-${this.size}`]:!!this.size,"flip-rtl":shouldBeFlippable,"icon-rtl":shouldBeFlippable&&(hostEl=el,hostEl&&""!==hostEl.dir?"rtl"===hostEl.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase()))})},inheritedAttributes),this.svgContent?(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon-inner",innerHTML:this.svgContent}):(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon-inner"}));var hostEl}static get assetsDirs(){return["svg"]}get el(){return(0,_index_73621246_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}static get watchers(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"],ios:["loadIcon"],md:["loadIcon"]}}},getIonMode=()=>"undefined"!=typeof document&&document.documentElement.getAttribute("mode")||"md",createColorClasses=color=>color?{"ion-color":!0,[`ion-color-${color}`]:!0}:null;Icon.style=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"}}]);
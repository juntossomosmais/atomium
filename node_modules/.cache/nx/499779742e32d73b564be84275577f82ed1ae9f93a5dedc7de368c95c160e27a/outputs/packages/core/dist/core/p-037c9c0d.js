/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const n=n=>{const t=n;let r;const l=()=>{if(r===undefined){const n=t.label!==undefined||e(t);const l=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&t.shadowRoot===null;r=t.legacy===true||!n&&!l}return r};return{hasLegacyControl:l}};const e=n=>{const e=n.shadowRoot;if(e===null){return false}if(t.includes(n.tagName)&&n.querySelector('[slot="label"]')!==null){return true}if(r.includes(n.tagName)&&n.textContent!==""){return true}return false};const t=["ION-RANGE"];const r=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"];export{n as c};
//# sourceMappingURL=p-037c9c0d.js.map
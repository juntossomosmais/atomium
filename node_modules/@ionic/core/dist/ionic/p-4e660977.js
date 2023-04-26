/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const l=l=>{const e=l;let n;return{hasLegacyControl:()=>{if(void 0===n){const l=void 0!==e.label||a(e),o=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot;n=!0===e.legacy||!l&&!o}return n}}},a=l=>!!(null!==l.shadowRoot&&(e.includes(l.tagName)&&null!==l.querySelector('[slot="label"]')||n.includes(l.tagName)&&""!==l.textContent)),e=["ION-RANGE"],n=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"];export{l as c}
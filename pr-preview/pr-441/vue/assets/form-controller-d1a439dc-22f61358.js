import{o}from"./helpers-079c01eb-656b014e.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const O=t=>{const e=t;let a;return{hasLegacyControl:()=>{if(a===void 0){const l=e.label!==void 0||s(e),r=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&e.shadowRoot===null,n=o(e);a=e.legacy===!0||!l&&!r&&n!==null}return a}}},s=t=>!!(u.includes(t.tagName)&&t.querySelector('[slot="label"]')!==null||c.includes(t.tagName)&&t.textContent!==""),u=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],c=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"];export{O as c};

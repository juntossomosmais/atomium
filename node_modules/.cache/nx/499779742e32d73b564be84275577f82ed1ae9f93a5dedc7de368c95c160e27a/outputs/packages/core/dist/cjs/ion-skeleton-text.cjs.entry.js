'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');
const theme = require('./theme-8b3c3d2a.js');

const skeletonTextCss = ":host{--background:rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065);border-radius:var(--border-radius, inherit);display:block;width:100%;height:inherit;margin-top:4px;margin-bottom:4px;background:var(--background);line-height:10px;user-select:none;pointer-events:none}span{display:inline-block}:host(.in-media){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;height:100%}:host(.skeleton-text-animated){position:relative;background:linear-gradient(to right, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065) 8%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.135) 18%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065) 33%);background-size:800px 104px;animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:shimmer;animation-timing-function:linear}@keyframes shimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}";

const SkeletonText = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.animated = false;
  }
  render() {
    const animated = this.animated && ionicGlobal.config.getBoolean('animated', true);
    const inMedia = theme.hostContext('ion-avatar', this.el) || theme.hostContext('ion-thumbnail', this.el);
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { class: {
        [mode]: true,
        'skeleton-text-animated': animated,
        'in-media': inMedia,
      } }, index.h("span", null, "\u00A0")));
  }
  get el() { return index.getElement(this); }
};
SkeletonText.style = skeletonTextCss;

exports.ion_skeleton_text = SkeletonText;

//# sourceMappingURL=ion-skeleton-text.cjs.entry.js.map
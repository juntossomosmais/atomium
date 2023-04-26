'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');
const index$2 = require('./index-4e276396.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');
const index$1 = require('./index-fe818ab0.js');
const spinnerConfigs = require('./spinner-configs-e0491d9c.js');

const RefresherContent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.customHTMLEnabled = ionicGlobal.config.get('innerHTMLTemplatesEnabled', index$1.ENABLE_HTML_CONTENT_DEFAULT);
    this.pullingIcon = undefined;
    this.pullingText = undefined;
    this.refreshingSpinner = undefined;
    this.refreshingText = undefined;
  }
  componentWillLoad() {
    if (this.pullingIcon === undefined) {
      const mode = ionicGlobal.getIonMode(this);
      const overflowRefresher = this.el.style.webkitOverflowScrolling !== undefined ? 'lines' : index$2.arrowDown;
      this.pullingIcon = ionicGlobal.config.get('refreshingIcon', mode === 'ios' && ionicGlobal.isPlatform('mobile') ? ionicGlobal.config.get('spinner', overflowRefresher) : 'circular');
    }
    if (this.refreshingSpinner === undefined) {
      const mode = ionicGlobal.getIonMode(this);
      this.refreshingSpinner = ionicGlobal.config.get('refreshingSpinner', ionicGlobal.config.get('spinner', mode === 'ios' ? 'lines' : 'circular'));
    }
  }
  renderPullingText() {
    const { customHTMLEnabled, pullingText } = this;
    if (customHTMLEnabled) {
      return index.h("div", { class: "refresher-pulling-text", innerHTML: index$1.sanitizeDOMString(pullingText) });
    }
    return index.h("div", { class: "refresher-pulling-text" }, pullingText);
  }
  renderRefreshingText() {
    const { customHTMLEnabled, refreshingText } = this;
    if (customHTMLEnabled) {
      return index.h("div", { class: "refresher-refreshing-text", innerHTML: index$1.sanitizeDOMString(refreshingText) });
    }
    return index.h("div", { class: "refresher-refreshing-text" }, refreshingText);
  }
  render() {
    const pullingIcon = this.pullingIcon;
    const hasSpinner = pullingIcon != null && spinnerConfigs.SPINNERS[pullingIcon] !== undefined;
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { class: mode }, index.h("div", { class: "refresher-pulling" }, this.pullingIcon && hasSpinner && (index.h("div", { class: "refresher-pulling-icon" }, index.h("div", { class: "spinner-arrow-container" }, index.h("ion-spinner", { name: this.pullingIcon, paused: true }), mode === 'md' && this.pullingIcon === 'circular' && (index.h("div", { class: "arrow-container" }, index.h("ion-icon", { icon: index$2.caretBackSharp, "aria-hidden": "true" })))))), this.pullingIcon && !hasSpinner && (index.h("div", { class: "refresher-pulling-icon" }, index.h("ion-icon", { icon: this.pullingIcon, lazy: false, "aria-hidden": "true" }))), this.pullingText !== undefined && this.renderPullingText()), index.h("div", { class: "refresher-refreshing" }, this.refreshingSpinner && (index.h("div", { class: "refresher-refreshing-icon" }, index.h("ion-spinner", { name: this.refreshingSpinner }))), this.refreshingText !== undefined && this.renderRefreshingText())));
  }
  get el() { return index.getElement(this); }
};

exports.ion_refresher_content = RefresherContent;

//# sourceMappingURL=ion-refresher-content.cjs.entry.js.map
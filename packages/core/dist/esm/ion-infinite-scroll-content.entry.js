import { r as registerInstance, h, H as Host } from './index-a869d52d.js';
import { c as config, g as getIonMode } from './ionic-global-4a637317.js';
import { E as ENABLE_HTML_CONTENT_DEFAULT, s as sanitizeDOMString } from './index-9ebe46bd.js';

const infiniteScrollContentIosCss = "ion-infinite-scroll-content{display:flex;flex-direction:column;justify-content:center;min-height:84px;text-align:center;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}";

const infiniteScrollContentMdCss = "ion-infinite-scroll-content{display:flex;flex-direction:column;justify-content:center;min-height:84px;text-align:center;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}";

const InfiniteScrollContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.customHTMLEnabled = config.get('innerHTMLTemplatesEnabled', ENABLE_HTML_CONTENT_DEFAULT);
    this.loadingSpinner = undefined;
    this.loadingText = undefined;
  }
  componentDidLoad() {
    if (this.loadingSpinner === undefined) {
      const mode = getIonMode(this);
      this.loadingSpinner = config.get('infiniteLoadingSpinner', config.get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
    }
  }
  renderLoadingText() {
    const { customHTMLEnabled, loadingText } = this;
    if (customHTMLEnabled) {
      return h("div", { class: "infinite-loading-text", innerHTML: sanitizeDOMString(loadingText) });
    }
    return h("div", { class: "infinite-loading-text" }, this.loadingText);
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: {
        [mode]: true,
        [`infinite-scroll-content-${mode}`]: true,
      } }, h("div", { class: "infinite-loading" }, this.loadingSpinner && (h("div", { class: "infinite-loading-spinner" }, h("ion-spinner", { name: this.loadingSpinner }))), this.loadingText !== undefined && this.renderLoadingText())));
  }
};
InfiniteScrollContent.style = {
  ios: infiniteScrollContentIosCss,
  md: infiniteScrollContentMdCss
};

export { InfiniteScrollContent as ion_infinite_scroll_content };

//# sourceMappingURL=ion-infinite-scroll-content.entry.js.map
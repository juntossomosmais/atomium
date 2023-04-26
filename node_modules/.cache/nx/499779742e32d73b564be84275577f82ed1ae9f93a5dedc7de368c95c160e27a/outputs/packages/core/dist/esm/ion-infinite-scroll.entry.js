import { r as registerInstance, d as createEvent, w as writeTask, f as readTask, h, e as getElement, H as Host } from './index-a869d52d.js';
import { g as getIonMode } from './ionic-global-4a637317.js';
import { a as findClosestIonContent, p as printIonContentErrorMsg, g as getScrollElement } from './index-3eb0f075.js';
import './helpers-937ea457.js';
import './index-24e88bd3.js';

const infiniteScrollCss = "ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";

const InfiniteScroll = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionInfinite = createEvent(this, "ionInfinite", 7);
    this.thrPx = 0;
    this.thrPc = 0;
    this.didFire = false;
    this.isBusy = false;
    this.onScroll = () => {
      const scrollEl = this.scrollEl;
      if (!scrollEl || !this.canStart()) {
        return 1;
      }
      const infiniteHeight = this.el.offsetHeight;
      if (infiniteHeight === 0) {
        return 2;
      }
      const scrollTop = scrollEl.scrollTop;
      const scrollHeight = scrollEl.scrollHeight;
      const height = scrollEl.offsetHeight;
      const threshold = this.thrPc !== 0 ? height * this.thrPc : this.thrPx;
      const distanceFromInfinite = this.position === 'bottom'
        ? scrollHeight - infiniteHeight - scrollTop - threshold - height
        : scrollTop - infiniteHeight - threshold;
      if (distanceFromInfinite < 0) {
        if (!this.didFire) {
          this.isLoading = true;
          this.didFire = true;
          this.ionInfinite.emit();
          return 3;
        }
      }
      else {
        this.didFire = false;
      }
      return 4;
    };
    this.isLoading = false;
    this.threshold = '15%';
    this.disabled = false;
    this.position = 'bottom';
  }
  thresholdChanged() {
    const val = this.threshold;
    if (val.lastIndexOf('%') > -1) {
      this.thrPx = 0;
      this.thrPc = parseFloat(val) / 100;
    }
    else {
      this.thrPx = parseFloat(val);
      this.thrPc = 0;
    }
  }
  disabledChanged() {
    const disabled = this.disabled;
    if (disabled) {
      this.isLoading = false;
      this.isBusy = false;
    }
    this.enableScrollEvents(!disabled);
  }
  async connectedCallback() {
    const contentEl = findClosestIonContent(this.el);
    if (!contentEl) {
      printIonContentErrorMsg(this.el);
      return;
    }
    this.scrollEl = await getScrollElement(contentEl);
    this.thresholdChanged();
    this.disabledChanged();
    if (this.position === 'top') {
      writeTask(() => {
        if (this.scrollEl) {
          this.scrollEl.scrollTop = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
        }
      });
    }
  }
  disconnectedCallback() {
    this.enableScrollEvents(false);
    this.scrollEl = undefined;
  }
  async complete() {
    const scrollEl = this.scrollEl;
    if (!this.isLoading || !scrollEl) {
      return;
    }
    this.isLoading = false;
    if (this.position === 'top') {
      this.isBusy = true;
      const prev = scrollEl.scrollHeight - scrollEl.scrollTop;
      requestAnimationFrame(() => {
        readTask(() => {
          const scrollHeight = scrollEl.scrollHeight;
          const newScrollTop = scrollHeight - prev;
          requestAnimationFrame(() => {
            writeTask(() => {
              scrollEl.scrollTop = newScrollTop;
              this.isBusy = false;
            });
          });
        });
      });
    }
  }
  canStart() {
    return !this.disabled && !this.isBusy && !!this.scrollEl && !this.isLoading;
  }
  enableScrollEvents(shouldListen) {
    if (this.scrollEl) {
      if (shouldListen) {
        this.scrollEl.addEventListener('scroll', this.onScroll);
      }
      else {
        this.scrollEl.removeEventListener('scroll', this.onScroll);
      }
    }
  }
  render() {
    const mode = getIonMode(this);
    const disabled = this.disabled;
    return (h(Host, { class: {
        [mode]: true,
        'infinite-scroll-loading': this.isLoading,
        'infinite-scroll-enabled': !disabled,
      } }));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "threshold": ["thresholdChanged"],
    "disabled": ["disabledChanged"]
  }; }
};
InfiniteScroll.style = infiniteScrollCss;

export { InfiniteScroll as ion_infinite_scroll };

//# sourceMappingURL=ion-infinite-scroll.entry.js.map
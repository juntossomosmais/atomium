'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');
const index$1 = require('./index-ea0ba50e.js');
require('./helpers-a70e7454.js');
require('./index-aabf0f95.js');

const infiniteScrollCss = "ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";

const InfiniteScroll = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionInfinite = index.createEvent(this, "ionInfinite", 7);
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
    const contentEl = index$1.findClosestIonContent(this.el);
    if (!contentEl) {
      index$1.printIonContentErrorMsg(this.el);
      return;
    }
    this.scrollEl = await index$1.getScrollElement(contentEl);
    this.thresholdChanged();
    this.disabledChanged();
    if (this.position === 'top') {
      index.writeTask(() => {
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
        index.readTask(() => {
          const scrollHeight = scrollEl.scrollHeight;
          const newScrollTop = scrollHeight - prev;
          requestAnimationFrame(() => {
            index.writeTask(() => {
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
    const mode = ionicGlobal.getIonMode(this);
    const disabled = this.disabled;
    return (index.h(index.Host, { class: {
        [mode]: true,
        'infinite-scroll-loading': this.isLoading,
        'infinite-scroll-enabled': !disabled,
      } }));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "threshold": ["thresholdChanged"],
    "disabled": ["disabledChanged"]
  }; }
};
InfiniteScroll.style = infiniteScrollCss;

exports.ion_infinite_scroll = InfiniteScroll;

//# sourceMappingURL=ion-infinite-scroll.cjs.entry.js.map
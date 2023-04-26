import { r as registerInstance, d as createEvent, h, H as Host, e as getElement } from './index-a869d52d.js';
import { g as getIonMode } from './ionic-global-4a637317.js';
import { c as inheritAttributes } from './helpers-937ea457.js';

const imgCss = ":host{display:block;object-fit:contain}img{display:block;width:100%;height:100%;object-fit:inherit;object-position:inherit}";

const Img = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionImgWillLoad = createEvent(this, "ionImgWillLoad", 7);
    this.ionImgDidLoad = createEvent(this, "ionImgDidLoad", 7);
    this.ionError = createEvent(this, "ionError", 7);
    this.inheritedAttributes = {};
    this.onLoad = () => {
      this.ionImgDidLoad.emit();
    };
    this.onError = () => {
      this.ionError.emit();
    };
    this.loadSrc = undefined;
    this.loadError = undefined;
    this.alt = undefined;
    this.src = undefined;
  }
  srcChanged() {
    this.addIO();
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['draggable']);
  }
  componentDidLoad() {
    this.addIO();
  }
  addIO() {
    if (this.src === undefined) {
      return;
    }
    if (typeof window !== 'undefined' &&
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'isIntersecting' in window.IntersectionObserverEntry.prototype) {
      this.removeIO();
      this.io = new IntersectionObserver((data) => {
        if (data[data.length - 1].isIntersecting) {
          this.load();
          this.removeIO();
        }
      });
      this.io.observe(this.el);
    }
    else {
      setTimeout(() => this.load(), 200);
    }
  }
  load() {
    this.loadError = this.onError;
    this.loadSrc = this.src;
    this.ionImgWillLoad.emit();
  }
  removeIO() {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }
  render() {
    const { loadSrc, alt, onLoad, loadError, inheritedAttributes } = this;
    const { draggable } = inheritedAttributes;
    return (h(Host, { class: getIonMode(this) }, h("img", { decoding: "async", src: loadSrc, alt: alt, onLoad: onLoad, onError: loadError, part: "image", draggable: isDraggable(draggable) })));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "src": ["srcChanged"]
  }; }
};
const isDraggable = (draggable) => {
  switch (draggable) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return undefined;
  }
};
Img.style = imgCss;

export { Img as ion_img };

//# sourceMappingURL=ion-img.entry.js.map
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');
const helpers = require('./helpers-a70e7454.js');

const imgCss = ":host{display:block;object-fit:contain}img{display:block;width:100%;height:100%;object-fit:inherit;object-position:inherit}";

const Img = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionImgWillLoad = index.createEvent(this, "ionImgWillLoad", 7);
    this.ionImgDidLoad = index.createEvent(this, "ionImgDidLoad", 7);
    this.ionError = index.createEvent(this, "ionError", 7);
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
    this.inheritedAttributes = helpers.inheritAttributes(this.el, ['draggable']);
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
    return (index.h(index.Host, { class: ionicGlobal.getIonMode(this) }, index.h("img", { decoding: "async", src: loadSrc, alt: alt, onLoad: onLoad, onError: loadError, part: "image", draggable: isDraggable(draggable) })));
  }
  get el() { return index.getElement(this); }
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

exports.ion_img = Img;

//# sourceMappingURL=ion-img.cjs.entry.js.map
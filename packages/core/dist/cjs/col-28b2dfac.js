'use strict';

const index = require('./index-713eb84a.js');

const AtomCol = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.size = undefined;
    this.sizeSm = undefined;
    this.sizeMd = undefined;
    this.sizeLg = undefined;
    this.offset = undefined;
    this.offsetSm = undefined;
    this.offsetMd = undefined;
    this.offsetLg = undefined;
    this.push = undefined;
    this.pull = undefined;
  }
  componentDidLoad() {
    const ionCol = document.createElement('ion-col');
    Array.from(this.element.attributes).forEach((attr) => {
      ionCol.setAttribute(attr.name.replace('ato', 'ion'), attr.value);
    });
    for (let i = this.element.childNodes.length - 1; i >= 0; i--) {
      const child = this.element.removeChild(this.element.childNodes[i]);
      ionCol.appendChild(child);
    }
    this.element.parentNode.replaceChild(ionCol, this.element);
  }
  render() {
    return (index.h(index.Host, { size: this.size, sizeSm: this.sizeSm, sizeMd: this.sizeMd, sizeLg: this.sizeLg, offset: this.offset, offsetSm: this.offsetSm, offsetMd: this.offsetMd, offsetLg: this.offsetLg, push: this.push, pull: this.pull }, index.h("slot", null)));
  }
  get element() { return index.getElement(this); }
};

exports.AtomCol = AtomCol;

//# sourceMappingURL=col-28b2dfac.js.map
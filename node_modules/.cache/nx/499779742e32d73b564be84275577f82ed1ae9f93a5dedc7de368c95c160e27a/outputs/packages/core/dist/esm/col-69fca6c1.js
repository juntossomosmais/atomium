import { r as registerInstance, h, H as Host, e as getElement } from './index-a869d52d.js';

const AtomCol = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, { size: this.size, sizeSm: this.sizeSm, sizeMd: this.sizeMd, sizeLg: this.sizeLg, offset: this.offset, offsetSm: this.offsetSm, offsetMd: this.offsetMd, offsetLg: this.offsetLg, push: this.push, pull: this.pull }, h("slot", null)));
  }
  get element() { return getElement(this); }
};

export { AtomCol as A };

//# sourceMappingURL=col-69fca6c1.js.map
import { h, Host } from '@stencil/core';
export class AtomCol {
  constructor() {
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
  static get is() { return "atom-col"; }
  static get properties() {
    return {
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'auto' | string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "size",
        "reflect": false
      },
      "sizeSm": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "size-sm",
        "reflect": false
      },
      "sizeMd": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "size-md",
        "reflect": false
      },
      "sizeLg": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "size-lg",
        "reflect": false
      },
      "offset": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "offset",
        "reflect": false
      },
      "offsetSm": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "offset-sm",
        "reflect": false
      },
      "offsetMd": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "offset-md",
        "reflect": false
      },
      "offsetLg": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "offset-lg",
        "reflect": false
      },
      "push": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "push",
        "reflect": false
      },
      "pull": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "pull",
        "reflect": false
      }
    };
  }
  static get elementRef() { return "element"; }
}
//# sourceMappingURL=col.js.map

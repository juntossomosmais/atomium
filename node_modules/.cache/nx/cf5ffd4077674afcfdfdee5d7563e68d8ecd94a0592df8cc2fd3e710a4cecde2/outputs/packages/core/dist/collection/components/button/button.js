import { h } from '@stencil/core';
export class AtomButton {
  constructor() {
    this.handleClick = () => {
      this.atomClick.emit();
    };
    this.color = 'primary';
    this.fill = 'solid';
    this.size = 'default';
    this.expand = undefined;
    this.shape = undefined;
    this.disabled = undefined;
    this.type = 'button';
    this.mode = 'md';
  }
  render() {
    return (h("ion-button", { color: this.color, fill: this.fill, shape: this.shape, disabled: this.disabled, type: this.type, onClick: this.handleClick }, h("slot", null)));
  }
  static get is() { return "atom-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["button.css"]
    };
  }
  static get properties() {
    return {
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'primary' | 'secondary'",
          "resolved": "\"primary\" | \"secondary\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'primary'"
      },
      "fill": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'clear' | 'outline' | 'solid'",
          "resolved": "\"clear\" | \"outline\" | \"solid\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "fill",
        "reflect": false,
        "defaultValue": "'solid'"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'small' | 'default' | 'large'",
          "resolved": "\"default\" | \"large\" | \"small\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'default'"
      },
      "expand": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'block' | 'full'",
          "resolved": "\"block\" | \"full\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "expand",
        "reflect": false
      },
      "shape": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'round'",
          "resolved": "\"round\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "shape",
        "reflect": false
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "disabled",
        "reflect": false
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'submit' | 'reset' | 'button'",
          "resolved": "\"button\" | \"reset\" | \"submit\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'button'"
      },
      "mode": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Mode",
          "resolved": "\"ios\" | \"md\"",
          "references": {
            "Mode": {
              "location": "import",
              "path": "@ionic/core"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "mode",
        "reflect": false,
        "defaultValue": "'md'"
      }
    };
  }
  static get events() {
    return [{
        "method": "atomClick",
        "name": "atomClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
}
//# sourceMappingURL=button.js.map

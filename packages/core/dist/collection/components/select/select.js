import { h } from '@stencil/core';
export class AtomSelect {
  constructor() {
    this.handleChange = (event) => {
      this.atomChange.emit(event.detail.value);
    };
    this.handleCancel = () => {
      this.selectEl.removeEventListener('ionCancel', this.handleCancel);
      this.atomCancel.emit();
    };
    this.handleBlur = () => {
      this.selectEl.removeEventListener('ionBlur', this.handleBlur);
      this.atomBlur.emit();
    };
    this.handleFocus = () => {
      this.selectEl.removeEventListener('ionFocus', this.handleBlur);
      this.atomFocus.emit();
    };
    this.handleDimiss = () => {
      this.selectEl.removeEventListener('ionDimiss', this.handleDimiss);
      this.atomDimiss.emit();
    };
    this.color = undefined;
    this.name = undefined;
    this.interface = 'popover';
    this.placeholder = undefined;
    this.cancelText = undefined;
    this.okText = undefined;
    this.disabled = undefined;
    this.multiple = undefined;
    this.size = undefined;
    this.mode = 'md';
    this.overlayDismiss = undefined;
    this.label = undefined;
    this.labelPlacement = 'stacked';
    this.options = [];
  }
  componentDidLoad() {
    this.selectEl.addEventListener('ionChange', this.handleChange);
    this.selectEl.addEventListener('ionBlur', this.handleBlur);
    this.selectEl.addEventListener('ionFocus', this.handleFocus);
  }
  disconnectedCallback() {
    this.selectEl.removeEventListener('ionChange', this.handleChange);
    this.selectEl.removeEventListener('ionBlur', this.handleBlur);
    this.selectEl.removeEventListener('ionFocus', this.handleFocus);
  }
  render() {
    return (h("ion-item", null, h("ion-select", { name: this.name, label: this.label, "label-placement": this.labelPlacement, interface: this.interface, placeholder: this.placeholder, "cancel-text": this.cancelText, "ok-text": this.okText, disabled: this.disabled, multiple: this.multiple, color: this.color, mode: this.mode, "overlay-dismiss": this.overlayDismiss, onIonChange: this.handleChange, onIonBlur: this.handleBlur, onIonFocus: this.handleFocus }, this.options.map((option) => (h("ion-select-option", { value: option.value, disabled: option.disabled }, option.value))))));
  }
  static get is() { return "atom-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["select.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["select.css"]
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "color",
        "reflect": false
      },
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "name",
        "reflect": false
      },
      "interface": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'popover' | 'action-sheet'",
          "resolved": "\"action-sheet\" | \"popover\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "interface",
        "reflect": false,
        "defaultValue": "'popover'"
      },
      "placeholder": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "placeholder",
        "reflect": false
      },
      "cancelText": {
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
        "attribute": "cancel-text",
        "reflect": false
      },
      "okText": {
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
        "attribute": "ok-text",
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
      "multiple": {
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
        "attribute": "multiple",
        "reflect": false
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'small' | 'large'",
          "resolved": "\"large\" | \"small\"",
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
      },
      "overlayDismiss": {
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
        "attribute": "overlay-dismiss",
        "reflect": false
      },
      "label": {
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
        "attribute": "label",
        "reflect": false
      },
      "labelPlacement": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'fixed' | 'stacked'",
          "resolved": "\"fixed\" | \"stacked\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "label-placement",
        "reflect": false,
        "defaultValue": "'stacked'"
      },
      "options": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "Array<{\n    value: string\n    selected?: boolean\n    disabled?: boolean\n  }>",
          "resolved": "{ value: string; selected?: boolean; disabled?: boolean; }[]",
          "references": {
            "Array": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "defaultValue": "[]"
      }
    };
  }
  static get events() {
    return [{
        "method": "atomBlur",
        "name": "atomBlur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "atomCancel",
        "name": "atomCancel",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "atomChange",
        "name": "atomChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }, {
        "method": "atomDimiss",
        "name": "atomDimiss",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "atomFocus",
        "name": "atomFocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "selectEl"; }
}
//# sourceMappingURL=select.js.map

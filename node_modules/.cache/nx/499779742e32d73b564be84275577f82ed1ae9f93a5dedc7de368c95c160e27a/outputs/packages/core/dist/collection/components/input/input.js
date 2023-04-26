import { h } from '@stencil/core';
export class AtomInput {
  constructor() {
    this.handleChange = (event) => {
      this.atomChange.emit(event.detail.value);
    };
    this.handleBlur = () => {
      this.inputEl.removeEventListener('ionBlur', this.handleBlur);
      this.atomBlur.emit();
    };
    this.handleFocus = () => {
      this.inputEl.removeEventListener('ionFocus', this.handleFocus);
      this.atomFocus.emit();
    };
    this.color = undefined;
    this.value = undefined;
    this.type = 'text';
    this.placeholder = undefined;
    this.name = undefined;
    this.minlength = undefined;
    this.maxlength = undefined;
    this.disabled = false;
    this.required = false;
    this.mode = 'md';
    this.fill = 'outline';
    this.autofocus = false;
    this.pattern = undefined;
    this.accept = undefined;
    this.multiple = false;
    this.clearOnEdit = false;
    this.clearInput = false;
    this.inputmode = 'none';
    this.labelPlacement = 'floating';
    this.label = undefined;
  }
  componentDidLoad() {
    this.inputEl.addEventListener('ionChange', this.handleChange);
    this.inputEl.addEventListener('ionInput', this.handleChange);
    this.inputEl.addEventListener('ionBlur', this.handleBlur);
    this.inputEl.addEventListener('ionFocus', this.handleFocus);
  }
  disconnectedCallback() {
    this.inputEl.removeEventListener('ionChange', this.handleChange);
    this.inputEl.removeEventListener('ionInput', this.handleChange);
    this.inputEl.removeEventListener('ionBlur', this.handleBlur);
    this.inputEl.removeEventListener('ionFocus', this.handleFocus);
  }
  render() {
    return (h("ion-input", { class: "ion-input", label: this.label, labelPlacement: this.labelPlacement, value: this.value, type: this.type, placeholder: this.placeholder, name: this.name, minlength: this.minlength, maxlength: this.maxlength, disabled: this.disabled, required: this.required, color: this.color, mode: this.mode, fill: this.fill, autofocus: this.autofocus, pattern: this.pattern, inputmode: this.inputmode, multiple: this.multiple, clearInput: this.clearInput, clearOnEdit: this.clearOnEdit, onIonChange: this.handleChange, onIonInput: this.handleChange, onIonBlur: this.handleBlur, onIonFocus: this.handleFocus }));
  }
  static get is() { return "atom-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["input.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["input.css"]
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
      "value": {
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
        "attribute": "value",
        "reflect": false
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "TextFieldTypes",
          "resolved": "\"date\" | \"datetime-local\" | \"email\" | \"month\" | \"number\" | \"password\" | \"search\" | \"tel\" | \"text\" | \"time\" | \"url\" | \"week\"",
          "references": {
            "TextFieldTypes": {
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
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'text'"
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "placeholder",
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "name",
        "reflect": false
      },
      "minlength": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "minlength",
        "reflect": false
      },
      "maxlength": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "maxlength",
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "required": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "false"
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
      "fill": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'solid' | 'outline'",
          "resolved": "\"outline\" | \"solid\"",
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
        "defaultValue": "'outline'"
      },
      "autofocus": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "autofocus",
        "reflect": false,
        "defaultValue": "false"
      },
      "pattern": {
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
        "attribute": "pattern",
        "reflect": false
      },
      "accept": {
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
        "attribute": "accept",
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "multiple",
        "reflect": false,
        "defaultValue": "false"
      },
      "clearOnEdit": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "clear-on-edit",
        "reflect": false,
        "defaultValue": "false"
      },
      "clearInput": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "clear-input",
        "reflect": false,
        "defaultValue": "false"
      },
      "inputmode": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "| 'none'\n    | 'text'\n    | 'tel'\n    | 'url'\n    | 'email'\n    | 'numeric'\n    | 'decimal'\n    | 'search'",
          "resolved": "\"decimal\" | \"email\" | \"none\" | \"numeric\" | \"search\" | \"tel\" | \"text\" | \"url\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "inputmode",
        "reflect": false,
        "defaultValue": "'none'"
      },
      "labelPlacement": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'fixed' | 'stacked' | 'floating'",
          "resolved": "\"fixed\" | \"floating\" | \"stacked\"",
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
        "defaultValue": "'floating'"
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
      }
    };
  }
  static get events() {
    return [{
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
      }, {
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
      }];
  }
  static get elementRef() { return "inputEl"; }
}
//# sourceMappingURL=input.js.map

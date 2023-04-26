import { h } from '@stencil/core';
const CDN_URL = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/svg';
export class AtomIcon {
  constructor() {
    this.icon = undefined;
    this.color = undefined;
    this.size = undefined;
  }
  render() {
    return (h("ion-icon", { icon: `${CDN_URL}/${this.icon}.svg`, color: this.color, size: this.size }));
  }
  static get is() { return "atom-icon"; }
  static get encapsulation() { return "shadow"; }
  static get properties() {
    return {
      "icon": {
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
        "attribute": "icon",
        "reflect": false
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Color",
          "resolved": "\"danger\" | \"dark\" | \"light\" | \"medium\" | \"primary\" | \"secondary\" | \"success\" | \"tertiary\" | \"warning\" | string & Record<never, never>",
          "references": {
            "Color": {
              "location": "import",
              "path": "@ionic/core"
            }
          }
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
      }
    };
  }
}
//# sourceMappingURL=icon.js.map

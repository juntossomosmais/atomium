import { h } from '@stencil/core';
export class AtomGrid {
  constructor() {
    this.fixed = undefined;
  }
  render() {
    return (h("ion-grid", { fixed: this.fixed }, h("slot", null)));
  }
  static get is() { return "atom-grid"; }
  static get properties() {
    return {
      "fixed": {
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
        "attribute": "fixed",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=grid.js.map

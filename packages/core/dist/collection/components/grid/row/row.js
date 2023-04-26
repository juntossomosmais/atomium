import { h, Host } from '@stencil/core';
export class AtomRow {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "atom-row"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["row.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["row.css"]
    };
  }
}
//# sourceMappingURL=row.js.map

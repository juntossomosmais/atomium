import { r as registerInstance, h } from './index-a869d52d.js';

const AtomGrid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fixed = undefined;
  }
  render() {
    return (h("ion-grid", { fixed: this.fixed }, h("slot", null)));
  }
};

export { AtomGrid as A };

//# sourceMappingURL=grid-306fc591.js.map
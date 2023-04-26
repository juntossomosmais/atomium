'use strict';

const index = require('./index-713eb84a.js');

const AtomGrid = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.fixed = undefined;
  }
  render() {
    return (index.h("ion-grid", { fixed: this.fixed }, index.h("slot", null)));
  }
};

exports.AtomGrid = AtomGrid;

//# sourceMappingURL=grid-df834cf7.js.map
'use strict';

const index = require('./index-713eb84a.js');

const CDN_URL = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/svg';
const AtomIcon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.icon = undefined;
    this.color = undefined;
    this.size = undefined;
  }
  render() {
    return (index.h("ion-icon", { icon: `${CDN_URL}/${this.icon}.svg`, color: this.color, size: this.size }));
  }
};

exports.AtomIcon = AtomIcon;

//# sourceMappingURL=icon-eaa4f6b0.js.map
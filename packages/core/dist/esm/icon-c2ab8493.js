import { r as registerInstance, h } from './index-a869d52d.js';

const CDN_URL = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/svg';
const AtomIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.icon = undefined;
    this.color = undefined;
    this.size = undefined;
  }
  render() {
    return (h("ion-icon", { icon: `${CDN_URL}/${this.icon}.svg`, color: this.color, size: this.size }));
  }
};

export { AtomIcon as A };

//# sourceMappingURL=icon-c2ab8493.js.map
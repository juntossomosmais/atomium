import { r as registerInstance, h, H as Host } from './index-a869d52d.js';
import { g as getIonMode } from './ionic-global-4a637317.js';

const itemGroupIosCss = "ion-item-group{display:block}";

const itemGroupMdCss = "ion-item-group{display:block}";

const ItemGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { role: "group", class: {
        [mode]: true,
        [`item-group-${mode}`]: true,
        item: true,
      } }));
  }
};
ItemGroup.style = {
  ios: itemGroupIosCss,
  md: itemGroupMdCss
};

export { ItemGroup as ion_item_group };

//# sourceMappingURL=ion-item-group.entry.js.map
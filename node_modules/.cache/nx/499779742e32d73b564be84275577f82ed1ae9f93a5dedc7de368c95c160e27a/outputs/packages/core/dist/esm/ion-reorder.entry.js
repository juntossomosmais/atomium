import { r as registerInstance, h, H as Host, e as getElement } from './index-a869d52d.js';
import { r as reorderThreeOutline, n as reorderTwoSharp } from './index-3c3facbc.js';
import { g as getIonMode } from './ionic-global-4a637317.js';

const reorderIosCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}";

const reorderMdCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}";

const Reorder = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  onClick(ev) {
    const reorderGroup = this.el.closest('ion-reorder-group');
    ev.preventDefault();
    if (!reorderGroup || !reorderGroup.disabled) {
      ev.stopImmediatePropagation();
    }
  }
  render() {
    const mode = getIonMode(this);
    const reorderIcon = mode === 'ios' ? reorderThreeOutline : reorderTwoSharp;
    return (h(Host, { class: mode }, h("slot", null, h("ion-icon", { icon: reorderIcon, lazy: false, class: "reorder-icon", part: "icon", "aria-hidden": "true" }))));
  }
  get el() { return getElement(this); }
};
Reorder.style = {
  ios: reorderIosCss,
  md: reorderMdCss
};

export { Reorder as ion_reorder };

//# sourceMappingURL=ion-reorder.entry.js.map
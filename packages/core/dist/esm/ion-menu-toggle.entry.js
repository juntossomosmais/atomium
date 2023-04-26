import { r as registerInstance, h, H as Host } from './index-a869d52d.js';
import { g as getIonMode } from './ionic-global-4a637317.js';
import { m as menuController } from './index-2b91d84e.js';
import { u as updateVisibility } from './menu-toggle-util-d5063785.js';
import './hardware-back-button-b3a8b0cd.js';
import './helpers-937ea457.js';
import './animation-45b29945.js';
import './index-37371a87.js';

const menuToggleCss = ":host(.menu-toggle-hidden){display:none}";

const MenuToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onClick = () => {
      return menuController.toggle(this.menu);
    };
    this.visible = false;
    this.menu = undefined;
    this.autoHide = true;
  }
  connectedCallback() {
    this.visibilityChanged();
  }
  async visibilityChanged() {
    this.visible = await updateVisibility(this.menu);
  }
  render() {
    const mode = getIonMode(this);
    const hidden = this.autoHide && !this.visible;
    return (h(Host, { onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: {
        [mode]: true,
        'menu-toggle-hidden': hidden,
      } }, h("slot", null)));
  }
};
MenuToggle.style = menuToggleCss;

export { MenuToggle as ion_menu_toggle };

//# sourceMappingURL=ion-menu-toggle.entry.js.map
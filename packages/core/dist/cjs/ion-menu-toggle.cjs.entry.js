'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');
const index$1 = require('./index-5e8c9051.js');
const menuToggleUtil = require('./menu-toggle-util-d479d88d.js');
require('./hardware-back-button-d755e5e5.js');
require('./helpers-a70e7454.js');
require('./animation-95868096.js');
require('./index-0d44bb4a.js');

const menuToggleCss = ":host(.menu-toggle-hidden){display:none}";

const MenuToggle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onClick = () => {
      return index$1.menuController.toggle(this.menu);
    };
    this.visible = false;
    this.menu = undefined;
    this.autoHide = true;
  }
  connectedCallback() {
    this.visibilityChanged();
  }
  async visibilityChanged() {
    this.visible = await menuToggleUtil.updateVisibility(this.menu);
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    const hidden = this.autoHide && !this.visible;
    return (index.h(index.Host, { onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: {
        [mode]: true,
        'menu-toggle-hidden': hidden,
      } }, index.h("slot", null)));
  }
};
MenuToggle.style = menuToggleCss;

exports.ion_menu_toggle = MenuToggle;

//# sourceMappingURL=ion-menu-toggle.cjs.entry.js.map
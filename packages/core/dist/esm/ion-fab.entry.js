import { r as registerInstance, h, H as Host, e as getElement } from './index-a869d52d.js';
import { g as getIonMode } from './ionic-global-4a637317.js';

const fabCss = ":host{position:absolute;z-index:999}:host(.fab-horizontal-center){-webkit-margin-start:-28px;margin-inline-start:-28px}@supports (inset-inline-start: 0){:host(.fab-horizontal-center){inset-inline-start:50%}}@supports not (inset-inline-start: 0){:host(.fab-horizontal-center){left:50%}:host-context([dir=rtl]):host(.fab-horizontal-center),:host-context([dir=rtl]).fab-horizontal-center{left:unset;right:unset;right:50%}}@supports (inset-inline-start: 0){:host(.fab-horizontal-start){inset-inline-start:calc(10px + var(--ion-safe-area-left, 0px))}}@supports not (inset-inline-start: 0){:host(.fab-horizontal-start){left:calc(10px + var(--ion-safe-area-left, 0px))}:host-context([dir=rtl]):host(.fab-horizontal-start),:host-context([dir=rtl]).fab-horizontal-start{left:unset;right:unset;right:calc(10px + var(--ion-safe-area-left, 0px))}}@supports (inset-inline-start: 0){:host(.fab-horizontal-end){inset-inline-end:calc(10px + var(--ion-safe-area-right, 0px))}}@supports not (inset-inline-start: 0){:host(.fab-horizontal-end){right:calc(10px + var(--ion-safe-area-right, 0px))}:host-context([dir=rtl]):host(.fab-horizontal-end),:host-context([dir=rtl]).fab-horizontal-end{left:unset;right:unset;left:calc(10px + var(--ion-safe-area-right, 0px))}}:host(.fab-vertical-top){top:10px}:host(.fab-vertical-top.fab-edge){top:-28px}:host(.fab-vertical-bottom){bottom:10px}:host(.fab-vertical-bottom.fab-edge){bottom:-28px}:host(.fab-vertical-center){margin-top:-28px;top:50%}";

const Fab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.horizontal = undefined;
    this.vertical = undefined;
    this.edge = false;
    this.activated = false;
  }
  activatedChanged() {
    const activated = this.activated;
    const fab = this.getFab();
    if (fab) {
      fab.activated = activated;
    }
    Array.from(this.el.querySelectorAll('ion-fab-list')).forEach((list) => {
      list.activated = activated;
    });
  }
  componentDidLoad() {
    if (this.activated) {
      this.activatedChanged();
    }
  }
  async close() {
    this.activated = false;
  }
  getFab() {
    return this.el.querySelector('ion-fab-button');
  }
  async toggle() {
    const hasList = !!this.el.querySelector('ion-fab-list');
    if (hasList) {
      this.activated = !this.activated;
    }
  }
  render() {
    const { horizontal, vertical, edge } = this;
    const mode = getIonMode(this);
    return (h(Host, { class: {
        [mode]: true,
        [`fab-horizontal-${horizontal}`]: horizontal !== undefined,
        [`fab-vertical-${vertical}`]: vertical !== undefined,
        'fab-edge': edge,
      } }, h("slot", null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "activated": ["activatedChanged"]
  }; }
};
Fab.style = fabCss;

export { Fab as ion_fab };

//# sourceMappingURL=ion-fab.entry.js.map
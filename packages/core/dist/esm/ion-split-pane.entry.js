import { r as registerInstance, d as createEvent, h, H as Host, e as getElement } from './index-a869d52d.js';
import { g as getIonMode } from './ionic-global-4a637317.js';

const splitPaneIosCss = ":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:row;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;box-shadow:none !important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:flex;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){order:1}:host{--border:0.55px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}";

const splitPaneMdCss = ":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:row;flex-wrap:nowrap;contain:strict}::slotted(ion-menu.menu-pane-visible){flex:0 1 auto;width:var(--side-width);min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side),:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;box-shadow:none !important;z-index:0}:host(.split-pane-visible) ::slotted(.split-pane-main){flex:1}:host(.split-pane-visible) ::slotted(.split-pane-side:not(ion-menu)),:host(.split-pane-visible) ::slotted(ion-menu.split-pane-side.menu-enabled){display:flex;flex-shrink:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host(.split-pane-visible) ::slotted(.split-pane-side){order:-1}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){order:1}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--side-min-width:270px;--side-max-width:28%}:host(.split-pane-visible) ::slotted(.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.split-pane-visible) ::slotted(.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}";

const SPLIT_PANE_MAIN = 'split-pane-main';
const SPLIT_PANE_SIDE = 'split-pane-side';
const QUERY = {
  xs: '(min-width: 0px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  never: '',
};
const SplitPane = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionSplitPaneVisible = createEvent(this, "ionSplitPaneVisible", 7);
    this.visible = false;
    this.contentId = undefined;
    this.disabled = false;
    this.when = QUERY['lg'];
  }
  visibleChanged(visible) {
    const detail = { visible, isPane: this.isPane.bind(this) };
    this.ionSplitPaneVisible.emit(detail);
  }
  async connectedCallback() {
    if (typeof customElements !== 'undefined' && customElements != null) {
      await customElements.whenDefined('ion-split-pane');
    }
    this.styleChildren();
    this.updateState();
  }
  disconnectedCallback() {
    if (this.rmL) {
      this.rmL();
      this.rmL = undefined;
    }
  }
  updateState() {
    if (this.rmL) {
      this.rmL();
      this.rmL = undefined;
    }
    if (this.disabled) {
      this.visible = false;
      return;
    }
    const query = this.when;
    if (typeof query === 'boolean') {
      this.visible = query;
      return;
    }
    const mediaQuery = QUERY[query] || query;
    if (mediaQuery.length === 0) {
      this.visible = false;
      return;
    }
    if (window.matchMedia) {
      const callback = (q) => {
        this.visible = q.matches;
      };
      const mediaList = window.matchMedia(mediaQuery);
      mediaList.addListener(callback);
      this.rmL = () => mediaList.removeListener(callback);
      this.visible = mediaList.matches;
    }
  }
  isPane(element) {
    if (!this.visible) {
      return false;
    }
    return element.parentElement === this.el && element.classList.contains(SPLIT_PANE_SIDE);
  }
  styleChildren() {
    const contentId = this.contentId;
    const children = this.el.children;
    const nu = this.el.childElementCount;
    let foundMain = false;
    for (let i = 0; i < nu; i++) {
      const child = children[i];
      const isMain = contentId !== undefined && child.id === contentId;
      if (isMain) {
        if (foundMain) {
          console.warn('split pane cannot have more than one main node');
          return;
        }
        foundMain = true;
      }
      setPaneClass(child, isMain);
    }
    if (!foundMain) {
      console.warn('split pane does not have a specified main node');
    }
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: {
        [mode]: true,
        [`split-pane-${mode}`]: true,
        'split-pane-visible': this.visible,
      } }, h("slot", null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "visible": ["visibleChanged"],
    "disabled": ["updateState"],
    "when": ["updateState"]
  }; }
};
const setPaneClass = (el, isMain) => {
  let toAdd;
  let toRemove;
  if (isMain) {
    toAdd = SPLIT_PANE_MAIN;
    toRemove = SPLIT_PANE_SIDE;
  }
  else {
    toAdd = SPLIT_PANE_SIDE;
    toRemove = SPLIT_PANE_MAIN;
  }
  const classList = el.classList;
  classList.add(toAdd);
  classList.remove(toRemove);
};
SplitPane.style = {
  ios: splitPaneIosCss,
  md: splitPaneMdCss
};

export { SplitPane as ion_split_pane };

//# sourceMappingURL=ion-split-pane.entry.js.map
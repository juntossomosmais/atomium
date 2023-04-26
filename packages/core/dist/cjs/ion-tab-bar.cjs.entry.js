'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');
const keyboardController = require('./keyboard-controller-97c7afbc.js');
const theme = require('./theme-8b3c3d2a.js');
require('./index-0d44bb4a.js');

const tabBarIosCss = ":host{-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:flex;align-items:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom, 0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;user-select:none;z-index:10;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, #f7f7f7));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--color:var(--ion-tab-bar-color, var(--ion-color-step-400, #999999));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:50px}@supports (backdrop-filter: blur(0)){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}";

const tabBarMdCss = ":host{-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:flex;align-items:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom, 0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;user-select:none;z-index:10;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.07))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, #666666));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #3880ff));height:56px}";

const TabBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionTabBarChanged = index.createEvent(this, "ionTabBarChanged", 7);
    this.keyboardCtrl = null;
    this.keyboardVisible = false;
    this.color = undefined;
    this.selectedTab = undefined;
    this.translucent = false;
  }
  selectedTabChanged() {
    if (this.selectedTab !== undefined) {
      this.ionTabBarChanged.emit({
        tab: this.selectedTab,
      });
    }
  }
  componentWillLoad() {
    this.selectedTabChanged();
  }
  connectedCallback() {
    this.keyboardCtrl = keyboardController.createKeyboardController((keyboardOpen) => {
      this.keyboardVisible = keyboardOpen;
    });
  }
  disconnectedCallback() {
    if (this.keyboardCtrl) {
      this.keyboardCtrl.destroy();
    }
  }
  render() {
    const { color, translucent, keyboardVisible } = this;
    const mode = ionicGlobal.getIonMode(this);
    const shouldHide = keyboardVisible && this.el.getAttribute('slot') !== 'top';
    return (index.h(index.Host, { role: "tablist", "aria-hidden": shouldHide ? 'true' : null, class: theme.createColorClasses(color, {
        [mode]: true,
        'tab-bar-translucent': translucent,
        'tab-bar-hidden': shouldHide,
      }) }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "selectedTab": ["selectedTabChanged"]
  }; }
};
TabBar.style = {
  ios: tabBarIosCss,
  md: tabBarMdCss
};

exports.ion_tab_bar = TabBar;

//# sourceMappingURL=ion-tab-bar.cjs.entry.js.map
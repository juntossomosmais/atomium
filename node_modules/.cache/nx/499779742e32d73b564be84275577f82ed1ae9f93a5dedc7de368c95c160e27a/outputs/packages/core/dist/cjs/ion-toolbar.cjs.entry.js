'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');
const theme = require('./theme-8b3c3d2a.js');

const toolbarIosCss = ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;flex-direction:row;align-items:center;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{flex:1;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){order:2}::slotted([slot=secondary]){order:3}::slotted([slot=primary]){order:5;text-align:end}::slotted([slot=end]){order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{flex-wrap:wrap;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{flex:1;order:8;min-width:100%}";

const toolbarMdCss = ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;flex-direction:row;align-items:center;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{flex:1;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){-webkit-margin-start:4px;margin-inline-start:4px}::slotted(.buttons-last-slot){-webkit-margin-end:4px;margin-inline-end:4px}::slotted([slot=start]){order:2}::slotted([slot=secondary]){order:4}::slotted([slot=primary]){order:5;text-align:end}::slotted([slot=end]){order:6;text-align:end}";

const Toolbar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.childrenStyles = new Map();
    this.color = undefined;
  }
  componentWillLoad() {
    const buttons = Array.from(this.el.querySelectorAll('ion-buttons'));
    const firstButtons = buttons.find((button) => {
      return button.slot === 'start';
    });
    if (firstButtons) {
      firstButtons.classList.add('buttons-first-slot');
    }
    const buttonsReversed = buttons.reverse();
    const lastButtons = buttonsReversed.find((button) => button.slot === 'end') ||
      buttonsReversed.find((button) => button.slot === 'primary') ||
      buttonsReversed.find((button) => button.slot === 'secondary');
    if (lastButtons) {
      lastButtons.classList.add('buttons-last-slot');
    }
  }
  childrenStyle(ev) {
    ev.stopPropagation();
    const tagName = ev.target.tagName;
    const updatedStyles = ev.detail;
    const newStyles = {};
    const childStyles = this.childrenStyles.get(tagName) || {};
    let hasStyleChange = false;
    Object.keys(updatedStyles).forEach((key) => {
      const childKey = `toolbar-${key}`;
      const newValue = updatedStyles[key];
      if (newValue !== childStyles[childKey]) {
        hasStyleChange = true;
      }
      if (newValue) {
        newStyles[childKey] = true;
      }
    });
    if (hasStyleChange) {
      this.childrenStyles.set(tagName, newStyles);
      index.forceUpdate(this);
    }
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    const childStyles = {};
    this.childrenStyles.forEach((value) => {
      Object.assign(childStyles, value);
    });
    return (index.h(index.Host, { class: Object.assign(Object.assign({}, childStyles), theme.createColorClasses(this.color, {
        [mode]: true,
        'in-toolbar': theme.hostContext('ion-toolbar', this.el),
      })) }, index.h("div", { class: "toolbar-background" }), index.h("div", { class: "toolbar-container" }, index.h("slot", { name: "start" }), index.h("slot", { name: "secondary" }), index.h("div", { class: "toolbar-content" }, index.h("slot", null)), index.h("slot", { name: "primary" }), index.h("slot", { name: "end" }))));
  }
  get el() { return index.getElement(this); }
};
Toolbar.style = {
  ios: toolbarIosCss,
  md: toolbarMdCss
};

exports.ion_toolbar = Toolbar;

//# sourceMappingURL=ion-toolbar.cjs.entry.js.map
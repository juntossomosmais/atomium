'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');
const index$1 = require('./index-4e276396.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');
const helpers = require('./helpers-a70e7454.js');
const theme = require('./theme-8b3c3d2a.js');

const breadcrumbIosCss = ":host{display:flex;flex:0 0 auto;align-items:center;color:var(--color);font-size:16px;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:flex;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0;display:flex;flex:1 1 100%;align-items:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;appearance:none}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:22px}:host{--color:var(--ion-color-step-850, #2d4665);--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--color-active);--background-focused:var(--ion-color-step-50, rgba(233, 237, 243, 0.7))}:host(.breadcrumb-active){font-weight:600}.breadcrumb-native{border-radius:4px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:5px;padding-bottom:5px;border:1px solid transparent}:host(.ion-focused) .breadcrumb-native{border-radius:8px}:host(.in-breadcrumbs-color.ion-focused) .breadcrumb-native,:host(.ion-color.ion-focused) .breadcrumb-native{background:rgba(var(--ion-color-base-rgb), 0.1);color:var(--ion-color-base)}:host(.ion-focused) ::slotted(ion-icon),:host(.in-breadcrumbs-color.ion-focused) ::slotted(ion-icon),:host(.ion-color.ion-focused) ::slotted(ion-icon){color:var(--ion-color-step-750, #445b78)}.breadcrumb-separator{color:var(--ion-color-step-550, #73849a)}::slotted(ion-icon){color:var(--ion-color-step-400, #92a0b3);font-size:18px}::slotted(ion-icon[slot=start]){-webkit-margin-end:8px;margin-inline-end:8px}::slotted(ion-icon[slot=end]){-webkit-margin-start:8px;margin-inline-start:8px}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, #242d39)}.breadcrumbs-collapsed-indicator{border-radius:4px;background:var(--ion-color-step-100, #e9edf3);color:var(--ion-color-step-550, #73849a)}.breadcrumbs-collapsed-indicator:hover{opacity:0.45}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, #d9e0ea)}";

const breadcrumbMdCss = ":host{display:flex;flex:0 0 auto;align-items:center;color:var(--color);font-size:16px;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:flex;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0;display:flex;flex:1 1 100%;align-items:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;appearance:none}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:22px}:host{--color:var(--ion-color-step-600, #677483);--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--ion-color-step-800, #35404e);--background-focused:$breadcrumb-md-background-focused}:host(.breadcrumb-active){font-weight:500}.breadcrumb-native{-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px}.breadcrumb-separator{-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:-1px}:host(.ion-focused) .breadcrumb-native{border-radius:4px;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 8px rgba(0, 0, 0, 0.12)}.breadcrumb-separator{color:var(--ion-color-step-550, #73849a)}::slotted(ion-icon){color:var(--ion-color-step-550, #7d8894);font-size:18px}::slotted(ion-icon[slot=start]){-webkit-margin-end:8px;margin-inline-end:8px}::slotted(ion-icon[slot=end]){-webkit-margin-start:8px;margin-inline-start:8px}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, #222d3a)}.breadcrumbs-collapsed-indicator{border-radius:2px;background:var(--ion-color-step-100, #eef1f3);color:var(--ion-color-step-550, #73849a)}.breadcrumbs-collapsed-indicator:hover{opacity:0.7}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, #dfe5e8)}";

const Breadcrumb = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionFocus = index.createEvent(this, "ionFocus", 7);
    this.ionBlur = index.createEvent(this, "ionBlur", 7);
    this.collapsedClick = index.createEvent(this, "collapsedClick", 7);
    this.inheritedAttributes = {};
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.collapsedIndicatorClick = () => {
      this.collapsedClick.emit({ ionShadowTarget: this.collapsedRef });
    };
    this.collapsed = false;
    this.last = undefined;
    this.showCollapsedIndicator = undefined;
    this.color = undefined;
    this.active = false;
    this.disabled = false;
    this.download = undefined;
    this.href = undefined;
    this.rel = undefined;
    this.separator = undefined;
    this.target = undefined;
    this.routerDirection = 'forward';
    this.routerAnimation = undefined;
  }
  componentWillLoad() {
    this.inheritedAttributes = helpers.inheritAriaAttributes(this.el);
  }
  isClickable() {
    return this.href !== undefined;
  }
  render() {
    const { color, active, collapsed, disabled, download, el, inheritedAttributes, last, routerAnimation, routerDirection, separator, showCollapsedIndicator, target, } = this;
    const clickable = this.isClickable();
    const TagType = this.href === undefined ? 'span' : 'a';
    const href = disabled ? undefined : this.href;
    const mode = ionicGlobal.getIonMode(this);
    const attrs = TagType === 'span'
      ? {}
      : {
        download,
        href,
        target,
      };
    const showSeparator = last ? false : collapsed ? (showCollapsedIndicator && !last ? true : false) : separator;
    return (index.h(index.Host, { onClick: (ev) => theme.openURL(href, ev, routerDirection, routerAnimation), "aria-disabled": disabled ? 'true' : null, class: theme.createColorClasses(color, {
        [mode]: true,
        'breadcrumb-active': active,
        'breadcrumb-collapsed': collapsed,
        'breadcrumb-disabled': disabled,
        'in-breadcrumbs-color': theme.hostContext('ion-breadcrumbs[color]', el),
        'in-toolbar': theme.hostContext('ion-toolbar', this.el),
        'in-toolbar-color': theme.hostContext('ion-toolbar[color]', this.el),
        'ion-activatable': clickable,
        'ion-focusable': clickable,
      }) }, index.h(TagType, Object.assign({}, attrs, { class: "breadcrumb-native", part: "native", disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur }, inheritedAttributes), index.h("slot", { name: "start" }), index.h("slot", null), index.h("slot", { name: "end" })), showCollapsedIndicator && (index.h("button", { part: "collapsed-indicator", "aria-label": "Show more breadcrumbs", onClick: () => this.collapsedIndicatorClick(), ref: (collapsedEl) => (this.collapsedRef = collapsedEl), class: {
        'breadcrumbs-collapsed-indicator': true,
      } }, index.h("ion-icon", { "aria-hidden": "true", icon: index$1.ellipsisHorizontal, lazy: false }))), showSeparator && (index.h("span", { class: "breadcrumb-separator", part: "separator", "aria-hidden": "true" }, index.h("slot", { name: "separator" }, mode === 'ios' ? (index.h("ion-icon", { icon: index$1.chevronForwardOutline, lazy: false, "flip-rtl": true })) : (index.h("span", null, "/")))))));
  }
  get el() { return index.getElement(this); }
};
Breadcrumb.style = {
  ios: breadcrumbIosCss,
  md: breadcrumbMdCss
};

exports.ion_breadcrumb = Breadcrumb;

//# sourceMappingURL=ion-breadcrumb.cjs.entry.js.map
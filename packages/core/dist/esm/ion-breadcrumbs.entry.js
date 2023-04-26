import { r as registerInstance, d as createEvent, h, H as Host, e as getElement } from './index-a869d52d.js';
import { g as getIonMode } from './ionic-global-4a637317.js';
import { c as createColorClasses, h as hostContext } from './theme-bc7eaa70.js';

const breadcrumbsIosCss = ":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;flex-wrap:wrap;align-items:center}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator ion-icon{color:var(--ion-color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:rgba(var(--ion-color-contrast-rgb), 0.11)}:host(.in-toolbar){-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;justify-content:center}";

const breadcrumbsMdCss = ":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;flex-wrap:wrap;align-items:center}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator ion-icon{color:var(--ion-color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:rgba(var(--ion-color-contrast-rgb), 0.11)}:host(.in-toolbar){-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0}";

const Breadcrumbs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionCollapsedClick = createEvent(this, "ionCollapsedClick", 7);
    this.breadcrumbsInit = () => {
      this.setBreadcrumbSeparator();
      this.setMaxItems();
    };
    this.resetActiveBreadcrumb = () => {
      const breadcrumbs = this.getBreadcrumbs();
      const activeBreadcrumb = breadcrumbs.find((breadcrumb) => breadcrumb.active);
      if (activeBreadcrumb && this.activeChanged) {
        activeBreadcrumb.active = false;
      }
    };
    this.setMaxItems = () => {
      const { itemsAfterCollapse, itemsBeforeCollapse, maxItems } = this;
      const breadcrumbs = this.getBreadcrumbs();
      for (const breadcrumb of breadcrumbs) {
        breadcrumb.showCollapsedIndicator = false;
        breadcrumb.collapsed = false;
      }
      const shouldCollapse = maxItems !== undefined && breadcrumbs.length > maxItems && itemsBeforeCollapse + itemsAfterCollapse <= maxItems;
      if (shouldCollapse) {
        breadcrumbs.forEach((breadcrumb, index) => {
          if (index === itemsBeforeCollapse) {
            breadcrumb.showCollapsedIndicator = true;
          }
          if (index >= itemsBeforeCollapse && index < breadcrumbs.length - itemsAfterCollapse) {
            breadcrumb.collapsed = true;
          }
        });
      }
    };
    this.setBreadcrumbSeparator = () => {
      const { itemsAfterCollapse, itemsBeforeCollapse, maxItems } = this;
      const breadcrumbs = this.getBreadcrumbs();
      const active = breadcrumbs.find((breadcrumb) => breadcrumb.active);
      for (const breadcrumb of breadcrumbs) {
        const last = maxItems !== undefined && itemsAfterCollapse === 0
          ? breadcrumb === breadcrumbs[itemsBeforeCollapse]
          : breadcrumb === breadcrumbs[breadcrumbs.length - 1];
        breadcrumb.last = last;
        const separator = breadcrumb.separator !== undefined ? breadcrumb.separator : last ? undefined : true;
        breadcrumb.separator = separator;
        if (!active && last) {
          breadcrumb.active = true;
          this.activeChanged = true;
        }
      }
    };
    this.getBreadcrumbs = () => {
      return Array.from(this.el.querySelectorAll('ion-breadcrumb'));
    };
    this.slotChanged = () => {
      this.resetActiveBreadcrumb();
      this.breadcrumbsInit();
    };
    this.collapsed = undefined;
    this.activeChanged = undefined;
    this.color = undefined;
    this.maxItems = undefined;
    this.itemsBeforeCollapse = 1;
    this.itemsAfterCollapse = 1;
  }
  onCollapsedClick(ev) {
    const breadcrumbs = this.getBreadcrumbs();
    const collapsedBreadcrumbs = breadcrumbs.filter((breadcrumb) => breadcrumb.collapsed);
    this.ionCollapsedClick.emit(Object.assign(Object.assign({}, ev.detail), { collapsedBreadcrumbs }));
  }
  maxItemsChanged() {
    this.resetActiveBreadcrumb();
    this.breadcrumbsInit();
  }
  componentWillLoad() {
    this.breadcrumbsInit();
  }
  render() {
    const { color, collapsed } = this;
    const mode = getIonMode(this);
    return (h(Host, { class: createColorClasses(color, {
        [mode]: true,
        'in-toolbar': hostContext('ion-toolbar', this.el),
        'in-toolbar-color': hostContext('ion-toolbar[color]', this.el),
        'breadcrumbs-collapsed': collapsed,
      }) }, h("slot", { onSlotchange: this.slotChanged })));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "maxItems": ["maxItemsChanged"],
    "itemsBeforeCollapse": ["maxItemsChanged"],
    "itemsAfterCollapse": ["maxItemsChanged"]
  }; }
};
Breadcrumbs.style = {
  ios: breadcrumbsIosCss,
  md: breadcrumbsMdCss
};

export { Breadcrumbs as ion_breadcrumbs };

//# sourceMappingURL=ion-breadcrumbs.entry.js.map
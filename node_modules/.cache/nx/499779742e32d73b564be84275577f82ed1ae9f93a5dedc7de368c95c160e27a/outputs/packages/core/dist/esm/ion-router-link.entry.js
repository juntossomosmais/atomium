import { r as registerInstance, h, H as Host } from './index-a869d52d.js';
import { g as getIonMode } from './ionic-global-4a637317.js';
import { o as openURL, c as createColorClasses } from './theme-bc7eaa70.js';

const routerLinkCss = ":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";

const RouterLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onClick = (ev) => {
      openURL(this.href, ev, this.routerDirection, this.routerAnimation);
    };
    this.color = undefined;
    this.href = undefined;
    this.rel = undefined;
    this.routerDirection = 'forward';
    this.routerAnimation = undefined;
    this.target = undefined;
  }
  render() {
    const mode = getIonMode(this);
    const attrs = {
      href: this.href,
      rel: this.rel,
      target: this.target,
    };
    return (h(Host, { onClick: this.onClick, class: createColorClasses(this.color, {
        [mode]: true,
        'ion-activatable': true,
      }) }, h("a", Object.assign({}, attrs), h("slot", null))));
  }
};
RouterLink.style = routerLinkCss;

export { RouterLink as ion_router_link };

//# sourceMappingURL=ion-router-link.entry.js.map
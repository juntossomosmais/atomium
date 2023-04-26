'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');
const theme = require('./theme-8b3c3d2a.js');

const routerLinkCss = ":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";

const RouterLink = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onClick = (ev) => {
      theme.openURL(this.href, ev, this.routerDirection, this.routerAnimation);
    };
    this.color = undefined;
    this.href = undefined;
    this.rel = undefined;
    this.routerDirection = 'forward';
    this.routerAnimation = undefined;
    this.target = undefined;
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    const attrs = {
      href: this.href,
      rel: this.rel,
      target: this.target,
    };
    return (index.h(index.Host, { onClick: this.onClick, class: theme.createColorClasses(this.color, {
        [mode]: true,
        'ion-activatable': true,
      }) }, index.h("a", Object.assign({}, attrs), index.h("slot", null))));
  }
};
RouterLink.style = routerLinkCss;

exports.ion_router_link = RouterLink;

//# sourceMappingURL=ion-router-link.cjs.entry.js.map
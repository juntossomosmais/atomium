import { r as registerInstance, h, e as getElement, H as Host } from './index-a869d52d.js';

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const navLink = (el, routerDirection, component, componentProps, routerAnimation) => {
  const nav = el.closest('ion-nav');
  if (nav) {
    if (routerDirection === 'forward') {
      if (component !== undefined) {
        return nav.push(component, componentProps, { skipIfBusy: true, animationBuilder: routerAnimation });
      }
    }
    else if (routerDirection === 'root') {
      if (component !== undefined) {
        return nav.setRoot(component, componentProps, { skipIfBusy: true, animationBuilder: routerAnimation });
      }
    }
    else if (routerDirection === 'back') {
      return nav.pop({ skipIfBusy: true, animationBuilder: routerAnimation });
    }
  }
  return Promise.resolve(false);
};

const NavLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onClick = () => {
      return navLink(this.el, this.routerDirection, this.component, this.componentProps, this.routerAnimation);
    };
    this.component = undefined;
    this.componentProps = undefined;
    this.routerDirection = 'forward';
    this.routerAnimation = undefined;
  }
  render() {
    return h(Host, { onClick: this.onClick });
  }
  get el() { return getElement(this); }
};

export { NavLink as ion_nav_link };

//# sourceMappingURL=ion-nav-link.entry.js.map
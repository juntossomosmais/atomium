'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');

const RouteRedirect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionRouteRedirectChanged = index.createEvent(this, "ionRouteRedirectChanged", 7);
    this.from = undefined;
    this.to = undefined;
  }
  propDidChange() {
    this.ionRouteRedirectChanged.emit();
  }
  connectedCallback() {
    this.ionRouteRedirectChanged.emit();
  }
  static get watchers() { return {
    "from": ["propDidChange"],
    "to": ["propDidChange"]
  }; }
};

exports.ion_route_redirect = RouteRedirect;

//# sourceMappingURL=ion-route-redirect.cjs.entry.js.map
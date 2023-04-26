'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');

const Route = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionRouteDataChanged = index.createEvent(this, "ionRouteDataChanged", 7);
    this.url = '';
    this.component = undefined;
    this.componentProps = undefined;
    this.beforeLeave = undefined;
    this.beforeEnter = undefined;
  }
  onUpdate(newValue) {
    this.ionRouteDataChanged.emit(newValue);
  }
  onComponentProps(newValue, oldValue) {
    if (newValue === oldValue) {
      return;
    }
    const keys1 = newValue ? Object.keys(newValue) : [];
    const keys2 = oldValue ? Object.keys(oldValue) : [];
    if (keys1.length !== keys2.length) {
      this.onUpdate(newValue);
      return;
    }
    for (const key of keys1) {
      if (newValue[key] !== oldValue[key]) {
        this.onUpdate(newValue);
        return;
      }
    }
  }
  connectedCallback() {
    this.ionRouteDataChanged.emit();
  }
  static get watchers() { return {
    "url": ["onUpdate"],
    "component": ["onUpdate"],
    "componentProps": ["onComponentProps"]
  }; }
};

exports.ion_route = Route;

//# sourceMappingURL=ion-route.cjs.entry.js.map
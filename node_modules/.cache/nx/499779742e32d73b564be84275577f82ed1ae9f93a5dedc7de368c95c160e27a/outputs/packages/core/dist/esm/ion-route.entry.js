import { r as registerInstance, d as createEvent } from './index-a869d52d.js';

const Route = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionRouteDataChanged = createEvent(this, "ionRouteDataChanged", 7);
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

export { Route as ion_route };

//# sourceMappingURL=ion-route.entry.js.map
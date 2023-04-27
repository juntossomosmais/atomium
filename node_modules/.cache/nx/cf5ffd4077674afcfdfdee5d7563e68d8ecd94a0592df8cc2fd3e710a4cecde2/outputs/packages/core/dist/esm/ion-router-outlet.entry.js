import { r as registerInstance, d as createEvent, h, e as getElement } from './index-a869d52d.js';
import { g as getIonMode, c as config } from './ionic-global-4a637317.js';
import { g as getTimeGivenProgression } from './cubic-bezier-1aed87b5.js';
import { a as attachComponent, d as detachComponent } from './framework-delegate-abaf8026.js';
import { s as shallowEqualStringMap, l as hasLazyBuild } from './helpers-937ea457.js';
import { t as transition } from './index-aae540f5.js';

const routeOutletCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";

const RouterOutlet = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionNavWillLoad = createEvent(this, "ionNavWillLoad", 7);
    this.ionNavWillChange = createEvent(this, "ionNavWillChange", 3);
    this.ionNavDidChange = createEvent(this, "ionNavDidChange", 3);
    this.gestureOrAnimationInProgress = false;
    this.mode = getIonMode(this);
    this.delegate = undefined;
    this.animated = true;
    this.animation = undefined;
    this.swipeHandler = undefined;
  }
  swipeHandlerChanged() {
    if (this.gesture) {
      this.gesture.enable(this.swipeHandler !== undefined);
    }
  }
  async connectedCallback() {
    const onStart = () => {
      this.gestureOrAnimationInProgress = true;
      if (this.swipeHandler) {
        this.swipeHandler.onStart();
      }
    };
    this.gesture = (await import('./swipe-back-fe7ee8ee.js')).createSwipeBackGesture(this.el, () => !this.gestureOrAnimationInProgress && !!this.swipeHandler && this.swipeHandler.canStart(), () => onStart(), (step) => { var _a; return (_a = this.ani) === null || _a === void 0 ? void 0 : _a.progressStep(step); }, (shouldComplete, step, dur) => {
      if (this.ani) {
        this.ani.onFinish(() => {
          this.gestureOrAnimationInProgress = false;
          if (this.swipeHandler) {
            this.swipeHandler.onEnd(shouldComplete);
          }
        }, { oneTimeCallback: true });
        let newStepValue = shouldComplete ? -0.001 : 0.001;
        if (!shouldComplete) {
          this.ani.easing('cubic-bezier(1, 0, 0.68, 0.28)');
          newStepValue += getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], step)[0];
        }
        else {
          newStepValue += getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], step)[0];
        }
        this.ani.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
      }
      else {
        this.gestureOrAnimationInProgress = false;
      }
    });
    this.swipeHandlerChanged();
  }
  componentWillLoad() {
    this.ionNavWillLoad.emit();
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  async commit(enteringEl, leavingEl, opts) {
    const unlock = await this.lock();
    let changed = false;
    try {
      changed = await this.transition(enteringEl, leavingEl, opts);
    }
    catch (e) {
      console.error(e);
    }
    unlock();
    return changed;
  }
  async setRouteId(id, params, direction, animation) {
    const changed = await this.setRoot(id, params, {
      duration: direction === 'root' ? 0 : undefined,
      direction: direction === 'back' ? 'back' : 'forward',
      animationBuilder: animation,
    });
    return {
      changed,
      element: this.activeEl,
    };
  }
  async getRouteId() {
    const active = this.activeEl;
    return active
      ? {
        id: active.tagName,
        element: active,
        params: this.activeParams,
      }
      : undefined;
  }
  async setRoot(component, params, opts) {
    if (this.activeComponent === component && shallowEqualStringMap(params, this.activeParams)) {
      return false;
    }
    const leavingEl = this.activeEl;
    const enteringEl = await attachComponent(this.delegate, this.el, component, ['ion-page', 'ion-page-invisible'], params);
    this.activeComponent = component;
    this.activeEl = enteringEl;
    this.activeParams = params;
    await this.commit(enteringEl, leavingEl, opts);
    await detachComponent(this.delegate, leavingEl);
    return true;
  }
  async transition(enteringEl, leavingEl, opts = {}) {
    if (leavingEl === enteringEl) {
      return false;
    }
    this.ionNavWillChange.emit();
    const { el, mode } = this;
    const animated = this.animated && config.getBoolean('animated', true);
    const animationBuilder = opts.animationBuilder || this.animation || config.get('navAnimation');
    await transition(Object.assign(Object.assign({ mode,
      animated,
      enteringEl,
      leavingEl, baseEl: el,
      deepWait: hasLazyBuild(el), progressCallback: opts.progressAnimation
        ? (ani) => {
          if (ani !== undefined && !this.gestureOrAnimationInProgress) {
            this.gestureOrAnimationInProgress = true;
            ani.onFinish(() => {
              this.gestureOrAnimationInProgress = false;
              if (this.swipeHandler) {
                this.swipeHandler.onEnd(false);
              }
            }, { oneTimeCallback: true });
            ani.progressEnd(0, 0, 0);
          }
          else {
            this.ani = ani;
          }
        }
        : undefined }, opts), { animationBuilder }));
    this.ionNavDidChange.emit();
    return true;
  }
  async lock() {
    const p = this.waitPromise;
    let resolve;
    this.waitPromise = new Promise((r) => (resolve = r));
    if (p !== undefined) {
      await p;
    }
    return resolve;
  }
  render() {
    return h("slot", null);
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "swipeHandler": ["swipeHandlerChanged"]
  }; }
};
RouterOutlet.style = routeOutletCss;

export { RouterOutlet as ion_router_outlet };

//# sourceMappingURL=ion-router-outlet.entry.js.map
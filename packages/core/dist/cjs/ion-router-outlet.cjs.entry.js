'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');
const cubicBezier = require('./cubic-bezier-f7e0481f.js');
const frameworkDelegate = require('./framework-delegate-5f9a4002.js');
const helpers = require('./helpers-a70e7454.js');
const index$1 = require('./index-508fb197.js');

const routeOutletCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";

const RouterOutlet = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionNavWillLoad = index.createEvent(this, "ionNavWillLoad", 7);
    this.ionNavWillChange = index.createEvent(this, "ionNavWillChange", 3);
    this.ionNavDidChange = index.createEvent(this, "ionNavDidChange", 3);
    this.gestureOrAnimationInProgress = false;
    this.mode = ionicGlobal.getIonMode(this);
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
    this.gesture = (await Promise.resolve().then(function () { return require('./swipe-back-00a3b2e2.js'); })).createSwipeBackGesture(this.el, () => !this.gestureOrAnimationInProgress && !!this.swipeHandler && this.swipeHandler.canStart(), () => onStart(), (step) => { var _a; return (_a = this.ani) === null || _a === void 0 ? void 0 : _a.progressStep(step); }, (shouldComplete, step, dur) => {
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
          newStepValue += cubicBezier.getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], step)[0];
        }
        else {
          newStepValue += cubicBezier.getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], step)[0];
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
    if (this.activeComponent === component && helpers.shallowEqualStringMap(params, this.activeParams)) {
      return false;
    }
    const leavingEl = this.activeEl;
    const enteringEl = await frameworkDelegate.attachComponent(this.delegate, this.el, component, ['ion-page', 'ion-page-invisible'], params);
    this.activeComponent = component;
    this.activeEl = enteringEl;
    this.activeParams = params;
    await this.commit(enteringEl, leavingEl, opts);
    await frameworkDelegate.detachComponent(this.delegate, leavingEl);
    return true;
  }
  async transition(enteringEl, leavingEl, opts = {}) {
    if (leavingEl === enteringEl) {
      return false;
    }
    this.ionNavWillChange.emit();
    const { el, mode } = this;
    const animated = this.animated && ionicGlobal.config.getBoolean('animated', true);
    const animationBuilder = opts.animationBuilder || this.animation || ionicGlobal.config.get('navAnimation');
    await index$1.transition(Object.assign(Object.assign({ mode,
      animated,
      enteringEl,
      leavingEl, baseEl: el,
      deepWait: helpers.hasLazyBuild(el), progressCallback: opts.progressAnimation
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
    return index.h("slot", null);
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "swipeHandler": ["swipeHandlerChanged"]
  }; }
};
RouterOutlet.style = routeOutletCss;

exports.ion_router_outlet = RouterOutlet;

//# sourceMappingURL=ion-router-outlet.cjs.entry.js.map
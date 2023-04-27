'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');
const cubicBezier = require('./cubic-bezier-f7e0481f.js');
const helpers = require('./helpers-a70e7454.js');
const index$1 = require('./index-508fb197.js');
const frameworkDelegate = require('./framework-delegate-5f9a4002.js');

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const VIEW_STATE_NEW = 1;
const VIEW_STATE_ATTACHED = 2;
const VIEW_STATE_DESTROYED = 3;
// TODO(FW-2832): types
class ViewController {
  constructor(component, params) {
    this.component = component;
    this.params = params;
    this.state = VIEW_STATE_NEW;
  }
  async init(container) {
    this.state = VIEW_STATE_ATTACHED;
    if (!this.element) {
      const component = this.component;
      this.element = await frameworkDelegate.attachComponent(this.delegate, container, component, ['ion-page', 'ion-page-invisible'], this.params);
    }
  }
  /**
   * DOM WRITE
   */
  _destroy() {
    helpers.assert(this.state !== VIEW_STATE_DESTROYED, 'view state must be ATTACHED');
    const element = this.element;
    if (element) {
      if (this.delegate) {
        this.delegate.removeViewFromDom(element.parentElement, element);
      }
      else {
        element.remove();
      }
    }
    this.nav = undefined;
    this.state = VIEW_STATE_DESTROYED;
  }
}
const matches = (view, id, params) => {
  if (!view) {
    return false;
  }
  if (view.component !== id) {
    return false;
  }
  return helpers.shallowEqualStringMap(view.params, params);
};
const convertToView = (page, params) => {
  if (!page) {
    return null;
  }
  if (page instanceof ViewController) {
    return page;
  }
  return new ViewController(page, params);
};
const convertToViews = (pages) => {
  return pages
    .map((page) => {
    if (page instanceof ViewController) {
      return page;
    }
    if ('component' in page) {
      return convertToView(page.component, page.componentProps === null ? undefined : page.componentProps);
    }
    return convertToView(page, undefined);
  })
    .filter((v) => v !== null);
};

const navCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";

const Nav = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionNavWillLoad = index.createEvent(this, "ionNavWillLoad", 7);
    this.ionNavWillChange = index.createEvent(this, "ionNavWillChange", 3);
    this.ionNavDidChange = index.createEvent(this, "ionNavDidChange", 3);
    this.transInstr = [];
    this.animationEnabled = true;
    this.useRouter = false;
    this.isTransitioning = false;
    this.destroyed = false;
    this.views = [];
    this.delegate = undefined;
    this.swipeGesture = undefined;
    this.animated = true;
    this.animation = undefined;
    this.rootParams = undefined;
    this.root = undefined;
  }
  swipeGestureChanged() {
    if (this.gesture) {
      this.gesture.enable(this.swipeGesture === true);
    }
  }
  rootChanged() {
    if (this.root !== undefined) {
      if (!this.useRouter) {
        this.setRoot(this.root, this.rootParams);
      }
    }
  }
  componentWillLoad() {
    this.useRouter = document.querySelector('ion-router') !== null && this.el.closest('[no-router]') === null;
    if (this.swipeGesture === undefined) {
      const mode = ionicGlobal.getIonMode(this);
      this.swipeGesture = ionicGlobal.config.getBoolean('swipeBackEnabled', mode === 'ios');
    }
    this.ionNavWillLoad.emit();
  }
  async componentDidLoad() {
    this.rootChanged();
    this.gesture = (await Promise.resolve().then(function () { return require('./swipe-back-00a3b2e2.js'); })).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this));
    this.swipeGestureChanged();
  }
  connectedCallback() {
    this.destroyed = false;
  }
  disconnectedCallback() {
    for (const view of this.views) {
      index$1.lifecycle(view.element, index$1.LIFECYCLE_WILL_UNLOAD);
      view._destroy();
    }
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
    this.transInstr.length = 0;
    this.views.length = 0;
    this.destroyed = true;
  }
  push(component, componentProps, opts, done) {
    return this.insert(-1, component, componentProps, opts, done);
  }
  insert(insertIndex, component, componentProps, opts, done) {
    return this.insertPages(insertIndex, [{ component, componentProps }], opts, done);
  }
  insertPages(insertIndex, insertComponents, opts, done) {
    return this.queueTrns({
      insertStart: insertIndex,
      insertViews: insertComponents,
      opts,
    }, done);
  }
  pop(opts, done) {
    return this.removeIndex(-1, 1, opts, done);
  }
  popTo(indexOrViewCtrl, opts, done) {
    const ti = {
      removeStart: -1,
      removeCount: -1,
      opts,
    };
    if (typeof indexOrViewCtrl === 'object' && indexOrViewCtrl.component) {
      ti.removeView = indexOrViewCtrl;
      ti.removeStart = 1;
    }
    else if (typeof indexOrViewCtrl === 'number') {
      ti.removeStart = indexOrViewCtrl + 1;
    }
    return this.queueTrns(ti, done);
  }
  popToRoot(opts, done) {
    return this.removeIndex(1, -1, opts, done);
  }
  removeIndex(startIndex, removeCount = 1, opts, done) {
    return this.queueTrns({
      removeStart: startIndex,
      removeCount,
      opts,
    }, done);
  }
  setRoot(component, componentProps, opts, done) {
    return this.setPages([{ component, componentProps }], opts, done);
  }
  setPages(views, opts, done) {
    opts !== null && opts !== void 0 ? opts : (opts = {});
    if (opts.animated !== true) {
      opts.animated = false;
    }
    return this.queueTrns({
      insertStart: 0,
      insertViews: views,
      removeStart: 0,
      removeCount: -1,
      opts,
    }, done);
  }
  setRouteId(id, params, direction, animation) {
    const active = this.getActiveSync();
    if (matches(active, id, params)) {
      return Promise.resolve({
        changed: false,
        element: active.element,
      });
    }
    let resolve;
    const promise = new Promise((r) => (resolve = r));
    let finish;
    const commonOpts = {
      updateURL: false,
      viewIsReady: (enteringEl) => {
        let mark;
        const p = new Promise((r) => (mark = r));
        resolve({
          changed: true,
          element: enteringEl,
          markVisible: async () => {
            mark();
            await finish;
          },
        });
        return p;
      },
    };
    if (direction === 'root') {
      finish = this.setRoot(id, params, commonOpts);
    }
    else {
      const viewController = this.views.find((v) => matches(v, id, params));
      if (viewController) {
        finish = this.popTo(viewController, Object.assign(Object.assign({}, commonOpts), { direction: 'back', animationBuilder: animation }));
      }
      else if (direction === 'forward') {
        finish = this.push(id, params, Object.assign(Object.assign({}, commonOpts), { animationBuilder: animation }));
      }
      else if (direction === 'back') {
        finish = this.setRoot(id, params, Object.assign(Object.assign({}, commonOpts), { direction: 'back', animated: true, animationBuilder: animation }));
      }
    }
    return promise;
  }
  async getRouteId() {
    const active = this.getActiveSync();
    if (active) {
      return {
        id: active.element.tagName,
        params: active.params,
        element: active.element,
      };
    }
    return undefined;
  }
  async getActive() {
    return this.getActiveSync();
  }
  async getByIndex(index) {
    return this.views[index];
  }
  async canGoBack(view) {
    return this.canGoBackSync(view);
  }
  async getPrevious(view) {
    return this.getPreviousSync(view);
  }
  getLength() {
    return this.views.length;
  }
  getActiveSync() {
    return this.views[this.views.length - 1];
  }
  canGoBackSync(view = this.getActiveSync()) {
    return !!(view && this.getPreviousSync(view));
  }
  getPreviousSync(view = this.getActiveSync()) {
    if (!view) {
      return undefined;
    }
    const views = this.views;
    const index = views.indexOf(view);
    return index > 0 ? views[index - 1] : undefined;
  }
  async queueTrns(ti, done) {
    var _a, _b;
    if (this.isTransitioning && ((_a = ti.opts) === null || _a === void 0 ? void 0 : _a.skipIfBusy)) {
      return false;
    }
    const promise = new Promise((resolve, reject) => {
      ti.resolve = resolve;
      ti.reject = reject;
    });
    ti.done = done;
    if (ti.opts && ti.opts.updateURL !== false && this.useRouter) {
      const router = document.querySelector('ion-router');
      if (router) {
        const canTransition = await router.canTransition();
        if (canTransition === false) {
          return false;
        }
        if (typeof canTransition === 'string') {
          router.push(canTransition, ti.opts.direction || 'back');
          return false;
        }
      }
    }
    if (((_b = ti.insertViews) === null || _b === void 0 ? void 0 : _b.length) === 0) {
      ti.insertViews = undefined;
    }
    this.transInstr.push(ti);
    this.nextTrns();
    return promise;
  }
  success(result, ti) {
    if (this.destroyed) {
      this.fireError('nav controller was destroyed', ti);
      return;
    }
    if (ti.done) {
      ti.done(result.hasCompleted, result.requiresTransition, result.enteringView, result.leavingView, result.direction);
    }
    ti.resolve(result.hasCompleted);
    if (ti.opts.updateURL !== false && this.useRouter) {
      const router = document.querySelector('ion-router');
      if (router) {
        const direction = result.direction === 'back' ? 'back' : 'forward';
        router.navChanged(direction);
      }
    }
  }
  failed(rejectReason, ti) {
    if (this.destroyed) {
      this.fireError('nav controller was destroyed', ti);
      return;
    }
    this.transInstr.length = 0;
    this.fireError(rejectReason, ti);
  }
  fireError(rejectReason, ti) {
    if (ti.done) {
      ti.done(false, false, rejectReason);
    }
    if (ti.reject && !this.destroyed) {
      ti.reject(rejectReason);
    }
    else {
      ti.resolve(false);
    }
  }
  nextTrns() {
    if (this.isTransitioning) {
      return false;
    }
    const ti = this.transInstr.shift();
    if (!ti) {
      return false;
    }
    this.runTransition(ti);
    return true;
  }
  async runTransition(ti) {
    try {
      this.ionNavWillChange.emit();
      this.isTransitioning = true;
      this.prepareTI(ti);
      const leavingView = this.getActiveSync();
      const enteringView = this.getEnteringView(ti, leavingView);
      if (!leavingView && !enteringView) {
        throw new Error('no views in the stack to be removed');
      }
      if (enteringView && enteringView.state === VIEW_STATE_NEW) {
        await enteringView.init(this.el);
      }
      this.postViewInit(enteringView, leavingView, ti);
      const requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) && enteringView !== leavingView;
      if (requiresTransition && ti.opts && leavingView) {
        const isBackDirection = ti.opts.direction === 'back';
        if (isBackDirection) {
          ti.opts.animationBuilder = ti.opts.animationBuilder || (enteringView === null || enteringView === void 0 ? void 0 : enteringView.animationBuilder);
        }
        leavingView.animationBuilder = ti.opts.animationBuilder;
      }
      let result;
      if (requiresTransition) {
        result = await this.transition(enteringView, leavingView, ti);
      }
      else {
        result = {
          hasCompleted: true,
          requiresTransition: false,
        };
      }
      this.success(result, ti);
      this.ionNavDidChange.emit();
    }
    catch (rejectReason) {
      this.failed(rejectReason, ti);
    }
    this.isTransitioning = false;
    this.nextTrns();
  }
  prepareTI(ti) {
    var _a, _b;
    var _c;
    const viewsLength = this.views.length;
    (_a = ti.opts) !== null && _a !== void 0 ? _a : (ti.opts = {});
    (_b = (_c = ti.opts).delegate) !== null && _b !== void 0 ? _b : (_c.delegate = this.delegate);
    if (ti.removeView !== undefined) {
      helpers.assert(ti.removeStart !== undefined, 'removeView needs removeStart');
      helpers.assert(ti.removeCount !== undefined, 'removeView needs removeCount');
      const index = this.views.indexOf(ti.removeView);
      if (index < 0) {
        throw new Error('removeView was not found');
      }
      ti.removeStart += index;
    }
    if (ti.removeStart !== undefined) {
      if (ti.removeStart < 0) {
        ti.removeStart = viewsLength - 1;
      }
      if (ti.removeCount < 0) {
        ti.removeCount = viewsLength - ti.removeStart;
      }
      ti.leavingRequiresTransition = ti.removeCount > 0 && ti.removeStart + ti.removeCount === viewsLength;
    }
    if (ti.insertViews) {
      if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
        ti.insertStart = viewsLength;
      }
      ti.enteringRequiresTransition = ti.insertStart === viewsLength;
    }
    const insertViews = ti.insertViews;
    if (!insertViews) {
      return;
    }
    helpers.assert(insertViews.length > 0, 'length can not be zero');
    const viewControllers = convertToViews(insertViews);
    if (viewControllers.length === 0) {
      throw new Error('invalid views to insert');
    }
    for (const view of viewControllers) {
      view.delegate = ti.opts.delegate;
      const nav = view.nav;
      if (nav && nav !== this) {
        throw new Error('inserted view was already inserted');
      }
      if (view.state === VIEW_STATE_DESTROYED) {
        throw new Error('inserted view was already destroyed');
      }
    }
    ti.insertViews = viewControllers;
  }
  getEnteringView(ti, leavingView) {
    const insertViews = ti.insertViews;
    if (insertViews !== undefined) {
      return insertViews[insertViews.length - 1];
    }
    const removeStart = ti.removeStart;
    if (removeStart !== undefined) {
      const views = this.views;
      const removeEnd = removeStart + ti.removeCount;
      for (let i = views.length - 1; i >= 0; i--) {
        const view = views[i];
        if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
          return view;
        }
      }
    }
    return undefined;
  }
  postViewInit(enteringView, leavingView, ti) {
    var _a, _b, _c;
    helpers.assert(leavingView || enteringView, 'Both leavingView and enteringView are null');
    helpers.assert(ti.resolve, 'resolve must be valid');
    helpers.assert(ti.reject, 'reject must be valid');
    const opts = ti.opts;
    const { insertViews, removeStart, removeCount } = ti;
    let destroyQueue;
    if (removeStart !== undefined && removeCount !== undefined) {
      helpers.assert(removeStart >= 0, 'removeStart can not be negative');
      helpers.assert(removeCount >= 0, 'removeCount can not be negative');
      destroyQueue = [];
      for (let i = removeStart; i < removeStart + removeCount; i++) {
        const view = this.views[i];
        if (view !== undefined && view !== enteringView && view !== leavingView) {
          destroyQueue.push(view);
        }
      }
      (_a = opts.direction) !== null && _a !== void 0 ? _a : (opts.direction = 'back');
    }
    const finalNumViews = this.views.length + ((_b = insertViews === null || insertViews === void 0 ? void 0 : insertViews.length) !== null && _b !== void 0 ? _b : 0) - (removeCount !== null && removeCount !== void 0 ? removeCount : 0);
    helpers.assert(finalNumViews >= 0, 'final balance can not be negative');
    if (finalNumViews === 0) {
      console.warn(`You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.`, this, this.el);
      throw new Error('navigation stack needs at least one root page');
    }
    if (insertViews) {
      let insertIndex = ti.insertStart;
      for (const view of insertViews) {
        this.insertViewAt(view, insertIndex);
        insertIndex++;
      }
      if (ti.enteringRequiresTransition) {
        (_c = opts.direction) !== null && _c !== void 0 ? _c : (opts.direction = 'forward');
      }
    }
    if (destroyQueue && destroyQueue.length > 0) {
      for (const view of destroyQueue) {
        index$1.lifecycle(view.element, index$1.LIFECYCLE_WILL_LEAVE);
        index$1.lifecycle(view.element, index$1.LIFECYCLE_DID_LEAVE);
        index$1.lifecycle(view.element, index$1.LIFECYCLE_WILL_UNLOAD);
      }
      for (const view of destroyQueue) {
        this.destroyView(view);
      }
    }
  }
  async transition(enteringView, leavingView, ti) {
    const opts = ti.opts;
    const progressCallback = opts.progressAnimation ? (ani) => (this.sbAni = ani) : undefined;
    const mode = ionicGlobal.getIonMode(this);
    const enteringEl = enteringView.element;
    const leavingEl = leavingView && leavingView.element;
    const animationOpts = Object.assign(Object.assign({ mode, showGoBack: this.canGoBackSync(enteringView), baseEl: this.el, progressCallback, animated: this.animated && ionicGlobal.config.getBoolean('animated', true), enteringEl,
      leavingEl }, opts), { animationBuilder: opts.animationBuilder || this.animation || ionicGlobal.config.get('navAnimation') });
    const { hasCompleted } = await index$1.transition(animationOpts);
    return this.transitionFinish(hasCompleted, enteringView, leavingView, opts);
  }
  transitionFinish(hasCompleted, enteringView, leavingView, opts) {
    const activeView = hasCompleted ? enteringView : leavingView;
    if (activeView) {
      this.unmountInactiveViews(activeView);
    }
    return {
      hasCompleted,
      requiresTransition: true,
      enteringView,
      leavingView,
      direction: opts.direction,
    };
  }
  insertViewAt(view, index) {
    const views = this.views;
    const existingIndex = views.indexOf(view);
    if (existingIndex > -1) {
      helpers.assert(view.nav === this, 'view is not part of the nav');
      views.splice(existingIndex, 1);
      views.splice(index, 0, view);
    }
    else {
      helpers.assert(!view.nav, 'nav is used');
      view.nav = this;
      views.splice(index, 0, view);
    }
  }
  removeView(view) {
    helpers.assert(view.state === VIEW_STATE_ATTACHED || view.state === VIEW_STATE_DESTROYED, 'view state should be loaded or destroyed');
    const views = this.views;
    const index = views.indexOf(view);
    helpers.assert(index > -1, 'view must be part of the stack');
    if (index >= 0) {
      views.splice(index, 1);
    }
  }
  destroyView(view) {
    view._destroy();
    this.removeView(view);
  }
  unmountInactiveViews(activeView) {
    if (this.destroyed) {
      return;
    }
    const views = this.views;
    const activeViewIndex = views.indexOf(activeView);
    for (let i = views.length - 1; i >= 0; i--) {
      const view = views[i];
      const element = view.element;
      if (element) {
        if (i > activeViewIndex) {
          index$1.lifecycle(element, index$1.LIFECYCLE_WILL_UNLOAD);
          this.destroyView(view);
        }
        else if (i < activeViewIndex) {
          index$1.setPageHidden(element, true);
        }
      }
    }
  }
  canStart() {
    return (!!this.swipeGesture &&
      !this.isTransitioning &&
      this.transInstr.length === 0 &&
      this.animationEnabled &&
      this.canGoBackSync());
  }
  onStart() {
    this.pop({ direction: 'back', progressAnimation: true });
  }
  onMove(stepValue) {
    if (this.sbAni) {
      this.sbAni.progressStep(stepValue);
    }
  }
  onEnd(shouldComplete, stepValue, dur) {
    if (this.sbAni) {
      this.animationEnabled = false;
      this.sbAni.onFinish(() => {
        this.animationEnabled = true;
      }, { oneTimeCallback: true });
      let newStepValue = shouldComplete ? -0.001 : 0.001;
      if (!shouldComplete) {
        this.sbAni.easing('cubic-bezier(1, 0, 0.68, 0.28)');
        newStepValue += cubicBezier.getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], stepValue)[0];
      }
      else {
        newStepValue += cubicBezier.getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], stepValue)[0];
      }
      this.sbAni.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
    }
  }
  render() {
    return index.h("slot", null);
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "swipeGesture": ["swipeGestureChanged"],
    "root": ["rootChanged"]
  }; }
};
Nav.style = navCss;

exports.ion_nav = Nav;

//# sourceMappingURL=ion-nav.cjs.entry.js.map
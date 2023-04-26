'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');
const cubicBezier = require('./cubic-bezier-f7e0481f.js');
const gestureController = require('./gesture-controller-6c1fa0b6.js');
const helpers = require('./helpers-a70e7454.js');
const index$1 = require('./index-5e8c9051.js');
const overlays = require('./overlays-34180ef3.js');
require('./hardware-back-button-d755e5e5.js');
require('./animation-95868096.js');
require('./index-0d44bb4a.js');
require('./framework-delegate-5f9a4002.js');
require('./index-aabf0f95.js');

const menuIosCss = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{transform:translateX(-9999px);display:flex;position:absolute;flex-direction:column;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}@supports (inset-inline-start: 0){:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}}@supports not (inset-inline-start: 0){:host(.menu-side-start) .menu-inner{left:0;right:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{left:unset;right:unset;left:auto;right:0}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}@supports (inset-inline-start: 0){:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}}@supports not (inset-inline-start: 0){:host(.menu-side-end) .menu-inner{left:auto;right:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{left:unset;right:unset;left:0;right:auto}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;transform:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}";

const menuMdCss = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{transform:translateX(-9999px);display:flex;position:absolute;flex-direction:column;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}@supports (inset-inline-start: 0){:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}}@supports not (inset-inline-start: 0){:host(.menu-side-start) .menu-inner{left:0;right:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{left:unset;right:unset;left:auto;right:0}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}@supports (inset-inline-start: 0){:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}}@supports not (inset-inline-start: 0){:host(.menu-side-end) .menu-inner{left:auto;right:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{left:unset;right:unset;left:0;right:auto}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;transform:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}";

const iosEasing = 'cubic-bezier(0.32,0.72,0,1)';
const mdEasing = 'cubic-bezier(0.0,0.0,0.2,1)';
const iosEasingReverse = 'cubic-bezier(1, 0, 0.68, 0.28)';
const mdEasingReverse = 'cubic-bezier(0.4, 0, 0.6, 1)';
const focusableQueryString = '[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])';
const Menu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionWillOpen = index.createEvent(this, "ionWillOpen", 7);
    this.ionWillClose = index.createEvent(this, "ionWillClose", 7);
    this.ionDidOpen = index.createEvent(this, "ionDidOpen", 7);
    this.ionDidClose = index.createEvent(this, "ionDidClose", 7);
    this.ionMenuChange = index.createEvent(this, "ionMenuChange", 7);
    this.lastOnEnd = 0;
    this.blocker = gestureController.GESTURE_CONTROLLER.createBlocker({ disableScroll: true });
    this.isAnimating = false;
    this._isOpen = false;
    this.inheritedAttributes = {};
    this.handleFocus = (ev) => {
      const lastOverlay = overlays.getOverlay(document);
      if (lastOverlay && !lastOverlay.contains(this.el)) {
        return;
      }
      this.trapKeyboardFocus(ev, document);
    };
    this.isPaneVisible = false;
    this.isEndSide = false;
    this.contentId = undefined;
    this.menuId = undefined;
    this.type = undefined;
    this.disabled = false;
    this.side = 'start';
    this.swipeGesture = true;
    this.maxEdgeStart = 50;
  }
  typeChanged(type, oldType) {
    const contentEl = this.contentEl;
    if (contentEl) {
      if (oldType !== undefined) {
        contentEl.classList.remove(`menu-content-${oldType}`);
      }
      contentEl.classList.add(`menu-content-${type}`);
      contentEl.removeAttribute('style');
    }
    if (this.menuInnerEl) {
      this.menuInnerEl.removeAttribute('style');
    }
    this.animation = undefined;
  }
  disabledChanged() {
    this.updateState();
    this.ionMenuChange.emit({
      disabled: this.disabled,
      open: this._isOpen,
    });
  }
  sideChanged() {
    this.isEndSide = helpers.isEndSide(this.side);
    this.animation = undefined;
  }
  swipeGestureChanged() {
    this.updateState();
  }
  async connectedCallback() {
    if (typeof customElements !== 'undefined' && customElements != null) {
      await customElements.whenDefined('ion-menu');
    }
    if (this.type === undefined) {
      this.type = ionicGlobal.config.get('menuType', 'overlay');
    }
    const content = this.contentId !== undefined ? document.getElementById(this.contentId) : null;
    if (content === null) {
      console.error('Menu: must have a "content" element to listen for drag events on.');
      return;
    }
    if (this.el.contains(content)) {
      console.error(`Menu: "contentId" should refer to the main view's ion-content, not the ion-content inside of the ion-menu.`);
    }
    this.contentEl = content;
    content.classList.add('menu-content');
    this.typeChanged(this.type, undefined);
    this.sideChanged();
    index$1.menuController._register(this);
    this.gesture = (await Promise.resolve().then(function () { return require('./index-206cca84.js'); })).createGesture({
      el: document,
      gestureName: 'menu-swipe',
      gesturePriority: 30,
      threshold: 10,
      blurOnStart: true,
      canStart: (ev) => this.canStart(ev),
      onWillStart: () => this.onWillStart(),
      onStart: () => this.onStart(),
      onMove: (ev) => this.onMove(ev),
      onEnd: (ev) => this.onEnd(ev),
    });
    this.updateState();
  }
  componentWillLoad() {
    this.inheritedAttributes = helpers.inheritAriaAttributes(this.el);
  }
  async componentDidLoad() {
    this.ionMenuChange.emit({ disabled: this.disabled, open: this._isOpen });
    this.updateState();
  }
  disconnectedCallback() {
    this.blocker.destroy();
    index$1.menuController._unregister(this);
    if (this.animation) {
      this.animation.destroy();
    }
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
    this.animation = undefined;
    this.contentEl = this.backdropEl = this.menuInnerEl = undefined;
  }
  onSplitPaneChanged(ev) {
    this.isPaneVisible = ev.detail.isPane(this.el);
    this.updateState();
  }
  onBackdropClick(ev) {
    if (this._isOpen && this.lastOnEnd < ev.timeStamp - 100) {
      const shouldClose = ev.composedPath ? !ev.composedPath().includes(this.menuInnerEl) : false;
      if (shouldClose) {
        ev.preventDefault();
        ev.stopPropagation();
        this.close();
      }
    }
  }
  onKeydown(ev) {
    if (ev.key === 'Escape') {
      this.close();
    }
  }
  isOpen() {
    return Promise.resolve(this._isOpen);
  }
  isActive() {
    return Promise.resolve(this._isActive());
  }
  open(animated = true) {
    return this.setOpen(true, animated);
  }
  close(animated = true) {
    return this.setOpen(false, animated);
  }
  toggle(animated = true) {
    return this.setOpen(!this._isOpen, animated);
  }
  setOpen(shouldOpen, animated = true) {
    return index$1.menuController._setOpen(this, shouldOpen, animated);
  }
  focusFirstDescendant() {
    const { el } = this;
    const firstInput = el.querySelector(focusableQueryString);
    if (firstInput) {
      firstInput.focus();
    }
    else {
      el.focus();
    }
  }
  focusLastDescendant() {
    const { el } = this;
    const inputs = Array.from(el.querySelectorAll(focusableQueryString));
    const lastInput = inputs.length > 0 ? inputs[inputs.length - 1] : null;
    if (lastInput) {
      lastInput.focus();
    }
    else {
      el.focus();
    }
  }
  trapKeyboardFocus(ev, doc) {
    const target = ev.target;
    if (!target) {
      return;
    }
    if (this.el.contains(target)) {
      this.lastFocus = target;
    }
    else {
      this.focusFirstDescendant();
      if (this.lastFocus === doc.activeElement) {
        this.focusLastDescendant();
      }
    }
  }
  async _setOpen(shouldOpen, animated = true) {
    if (!this._isActive() || this.isAnimating || shouldOpen === this._isOpen) {
      return false;
    }
    this.beforeAnimation(shouldOpen);
    await this.loadAnimation();
    await this.startAnimation(shouldOpen, animated);
    this.afterAnimation(shouldOpen);
    return true;
  }
  async loadAnimation() {
    const width = this.menuInnerEl.offsetWidth;
    const isEndSide = helpers.isEndSide(this.side);
    if (width === this.width && this.animation !== undefined && isEndSide === this.isEndSide) {
      return;
    }
    this.width = width;
    this.isEndSide = isEndSide;
    if (this.animation) {
      this.animation.destroy();
      this.animation = undefined;
    }
    this.animation = await index$1.menuController._createAnimation(this.type, this);
    if (!ionicGlobal.config.getBoolean('animated', true)) {
      this.animation.duration(0);
    }
    this.animation.fill('both');
  }
  async startAnimation(shouldOpen, animated) {
    const isReversed = !shouldOpen;
    const mode = ionicGlobal.getIonMode(this);
    const easing = mode === 'ios' ? iosEasing : mdEasing;
    const easingReverse = mode === 'ios' ? iosEasingReverse : mdEasingReverse;
    const ani = this.animation
      .direction(isReversed ? 'reverse' : 'normal')
      .easing(isReversed ? easingReverse : easing)
      .onFinish(() => {
      if (ani.getDirection() === 'reverse') {
        ani.direction('normal');
      }
    });
    if (animated) {
      await ani.play();
    }
    else {
      ani.play({ sync: true });
    }
  }
  _isActive() {
    return !this.disabled && !this.isPaneVisible;
  }
  canSwipe() {
    return this.swipeGesture && !this.isAnimating && this._isActive();
  }
  canStart(detail) {
    const isModalPresented = !!document.querySelector('ion-modal.show-modal');
    if (isModalPresented || !this.canSwipe()) {
      return false;
    }
    if (this._isOpen) {
      return true;
    }
    else if (index$1.menuController._getOpenSync()) {
      return false;
    }
    return checkEdgeSide(window, detail.currentX, this.isEndSide, this.maxEdgeStart);
  }
  onWillStart() {
    this.beforeAnimation(!this._isOpen);
    return this.loadAnimation();
  }
  onStart() {
    if (!this.isAnimating || !this.animation) {
      helpers.assert(false, 'isAnimating has to be true');
      return;
    }
    this.animation.progressStart(true, this._isOpen ? 1 : 0);
  }
  onMove(detail) {
    if (!this.isAnimating || !this.animation) {
      helpers.assert(false, 'isAnimating has to be true');
      return;
    }
    const delta = computeDelta(detail.deltaX, this._isOpen, this.isEndSide);
    const stepValue = delta / this.width;
    this.animation.progressStep(this._isOpen ? 1 - stepValue : stepValue);
  }
  onEnd(detail) {
    if (!this.isAnimating || !this.animation) {
      helpers.assert(false, 'isAnimating has to be true');
      return;
    }
    const isOpen = this._isOpen;
    const isEndSide = this.isEndSide;
    const delta = computeDelta(detail.deltaX, isOpen, isEndSide);
    const width = this.width;
    const stepValue = delta / width;
    const velocity = detail.velocityX;
    const z = width / 2.0;
    const shouldCompleteRight = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
    const shouldCompleteLeft = velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
    const shouldComplete = isOpen
      ? isEndSide
        ? shouldCompleteRight
        : shouldCompleteLeft
      : isEndSide
        ? shouldCompleteLeft
        : shouldCompleteRight;
    let shouldOpen = !isOpen && shouldComplete;
    if (isOpen && !shouldComplete) {
      shouldOpen = true;
    }
    this.lastOnEnd = detail.currentTime;
    let newStepValue = shouldComplete ? 0.001 : -0.001;
    const adjustedStepValue = stepValue < 0 ? 0.01 : stepValue;
    newStepValue +=
      cubicBezier.getTimeGivenProgression([0, 0], [0.4, 0], [0.6, 1], [1, 1], helpers.clamp(0, adjustedStepValue, 0.9999))[0] || 0;
    const playTo = this._isOpen ? !shouldComplete : shouldComplete;
    this.animation
      .easing('cubic-bezier(0.4, 0.0, 0.6, 1)')
      .onFinish(() => this.afterAnimation(shouldOpen), { oneTimeCallback: true })
      .progressEnd(playTo ? 1 : 0, this._isOpen ? 1 - newStepValue : newStepValue, 300);
  }
  beforeAnimation(shouldOpen) {
    helpers.assert(!this.isAnimating, '_before() should not be called while animating');
    this.el.classList.add(SHOW_MENU);
    this.el.setAttribute('tabindex', '0');
    if (this.backdropEl) {
      this.backdropEl.classList.add(SHOW_BACKDROP);
    }
    if (this.contentEl) {
      this.contentEl.classList.add(MENU_CONTENT_OPEN);
      this.contentEl.setAttribute('aria-hidden', 'true');
    }
    this.blocker.block();
    this.isAnimating = true;
    if (shouldOpen) {
      this.ionWillOpen.emit();
    }
    else {
      this.ionWillClose.emit();
    }
  }
  afterAnimation(isOpen) {
    var _a;
    helpers.assert(this.isAnimating, '_before() should be called while animating');
    this._isOpen = isOpen;
    this.isAnimating = false;
    if (!this._isOpen) {
      this.blocker.unblock();
    }
    if (isOpen) {
      this.ionDidOpen.emit();
      const focusedMenu = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.closest('ion-menu');
      if (focusedMenu !== this.el) {
        this.el.focus();
      }
      document.addEventListener('focus', this.handleFocus, true);
    }
    else {
      this.el.classList.remove(SHOW_MENU);
      this.el.removeAttribute('tabindex');
      if (this.contentEl) {
        this.contentEl.classList.remove(MENU_CONTENT_OPEN);
        this.contentEl.removeAttribute('aria-hidden');
      }
      if (this.backdropEl) {
        this.backdropEl.classList.remove(SHOW_BACKDROP);
      }
      if (this.animation) {
        this.animation.stop();
      }
      this.ionDidClose.emit();
      document.removeEventListener('focus', this.handleFocus, true);
    }
  }
  updateState() {
    const isActive = this._isActive();
    if (this.gesture) {
      this.gesture.enable(isActive && this.swipeGesture);
    }
    if (!isActive && this._isOpen) {
      this.forceClosing();
    }
    if (!this.disabled) {
      index$1.menuController._setActiveMenu(this);
    }
    helpers.assert(!this.isAnimating, 'can not be animating');
  }
  forceClosing() {
    helpers.assert(this._isOpen, 'menu cannot be closed');
    this.isAnimating = true;
    const ani = this.animation.direction('reverse');
    ani.play({ sync: true });
    this.afterAnimation(false);
  }
  render() {
    const { type, disabled, isPaneVisible, inheritedAttributes, side } = this;
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { role: "navigation", "aria-label": inheritedAttributes['aria-label'] || 'menu', class: {
        [mode]: true,
        [`menu-type-${type}`]: true,
        'menu-enabled': !disabled,
        [`menu-side-${side}`]: true,
        'menu-pane-visible': isPaneVisible,
      } }, index.h("div", { class: "menu-inner", part: "container", ref: (el) => (this.menuInnerEl = el) }, index.h("slot", null)), index.h("ion-backdrop", { ref: (el) => (this.backdropEl = el), class: "menu-backdrop", tappable: false, stopPropagation: false, part: "backdrop" })));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "type": ["typeChanged"],
    "disabled": ["disabledChanged"],
    "side": ["sideChanged"],
    "swipeGesture": ["swipeGestureChanged"]
  }; }
};
const computeDelta = (deltaX, isOpen, isEndSide) => {
  return Math.max(0, isOpen !== isEndSide ? -deltaX : deltaX);
};
const checkEdgeSide = (win, posX, isEndSide, maxEdgeStart) => {
  if (isEndSide) {
    return posX >= win.innerWidth - maxEdgeStart;
  }
  else {
    return posX <= maxEdgeStart;
  }
};
const SHOW_MENU = 'show-menu';
const SHOW_BACKDROP = 'show-backdrop';
const MENU_CONTENT_OPEN = 'menu-content-open';
Menu.style = {
  ios: menuIosCss,
  md: menuMdCss
};

exports.ion_menu = Menu;

//# sourceMappingURL=ion-menu.cjs.entry.js.map
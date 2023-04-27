'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');
const cubicBezier = require('./cubic-bezier-f7e0481f.js');
const index$1 = require('./index-ea0ba50e.js');
const helpers = require('./helpers-a70e7454.js');
const haptic = require('./haptic-860f40ca.js');
const animation = require('./animation-95868096.js');
require('./index-aabf0f95.js');
require('./index-0d44bb4a.js');

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const getRefresherAnimationType = (contentEl) => {
  const previousSibling = contentEl.previousElementSibling;
  const hasHeader = previousSibling !== null && previousSibling.tagName === 'ION-HEADER';
  return hasHeader ? 'translate' : 'scale';
};
const createPullingAnimation = (type, pullingSpinner, refresherEl) => {
  return type === 'scale'
    ? createScaleAnimation(pullingSpinner, refresherEl)
    : createTranslateAnimation(pullingSpinner, refresherEl);
};
const createBaseAnimation = (pullingRefresherIcon) => {
  // TODO(FW-2832): add types/re-evaluate asserting so many things
  const spinner = pullingRefresherIcon.querySelector('ion-spinner');
  const circle = spinner.shadowRoot.querySelector('circle');
  const spinnerArrowContainer = pullingRefresherIcon.querySelector('.spinner-arrow-container');
  const arrowContainer = pullingRefresherIcon.querySelector('.arrow-container');
  const arrow = arrowContainer ? arrowContainer.querySelector('ion-icon') : null;
  const baseAnimation = animation.createAnimation().duration(1000).easing('ease-out');
  const spinnerArrowContainerAnimation = animation.createAnimation()
    .addElement(spinnerArrowContainer)
    .keyframes([
    { offset: 0, opacity: '0.3' },
    { offset: 0.45, opacity: '0.3' },
    { offset: 0.55, opacity: '1' },
    { offset: 1, opacity: '1' },
  ]);
  const circleInnerAnimation = animation.createAnimation()
    .addElement(circle)
    .keyframes([
    { offset: 0, strokeDasharray: '1px, 200px' },
    { offset: 0.2, strokeDasharray: '1px, 200px' },
    { offset: 0.55, strokeDasharray: '100px, 200px' },
    { offset: 1, strokeDasharray: '100px, 200px' },
  ]);
  const circleOuterAnimation = animation.createAnimation()
    .addElement(spinner)
    .keyframes([
    { offset: 0, transform: 'rotate(-90deg)' },
    { offset: 1, transform: 'rotate(210deg)' },
  ]);
  /**
   * Only add arrow animation if present
   * this allows users to customize the spinners
   * without errors being thrown
   */
  if (arrowContainer && arrow) {
    const arrowContainerAnimation = animation.createAnimation()
      .addElement(arrowContainer)
      .keyframes([
      { offset: 0, transform: 'rotate(0deg)' },
      { offset: 0.3, transform: 'rotate(0deg)' },
      { offset: 0.55, transform: 'rotate(280deg)' },
      { offset: 1, transform: 'rotate(400deg)' },
    ]);
    const arrowAnimation = animation.createAnimation()
      .addElement(arrow)
      .keyframes([
      { offset: 0, transform: 'translateX(2px) scale(0)' },
      { offset: 0.3, transform: 'translateX(2px) scale(0)' },
      { offset: 0.55, transform: 'translateX(-1.5px) scale(1)' },
      { offset: 1, transform: 'translateX(-1.5px) scale(1)' },
    ]);
    baseAnimation.addAnimation([arrowContainerAnimation, arrowAnimation]);
  }
  return baseAnimation.addAnimation([spinnerArrowContainerAnimation, circleInnerAnimation, circleOuterAnimation]);
};
const createScaleAnimation = (pullingRefresherIcon, refresherEl) => {
  /**
   * Do not take the height of the refresher icon
   * because at this point the DOM has not updated,
   * so the refresher icon is still hidden with
   * display: none.
   * The `ion-refresher` container height
   * is roughly the amount we need to offset
   * the icon by when pulling down.
   */
  const height = refresherEl.clientHeight;
  const spinnerAnimation = animation.createAnimation()
    .addElement(pullingRefresherIcon)
    .keyframes([
    { offset: 0, transform: `scale(0) translateY(-${height}px)` },
    { offset: 1, transform: 'scale(1) translateY(100px)' },
  ]);
  return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
};
const createTranslateAnimation = (pullingRefresherIcon, refresherEl) => {
  /**
   * Do not take the height of the refresher icon
   * because at this point the DOM has not updated,
   * so the refresher icon is still hidden with
   * display: none.
   * The `ion-refresher` container height
   * is roughly the amount we need to offset
   * the icon by when pulling down.
   */
  const height = refresherEl.clientHeight;
  const spinnerAnimation = animation.createAnimation()
    .addElement(pullingRefresherIcon)
    .keyframes([
    { offset: 0, transform: `translateY(-${height}px)` },
    { offset: 1, transform: 'translateY(100px)' },
  ]);
  return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
};
const createSnapBackAnimation = (pullingRefresherIcon) => {
  return animation.createAnimation()
    .duration(125)
    .addElement(pullingRefresherIcon)
    .fromTo('transform', 'translateY(var(--ion-pulling-refresher-translate, 100px))', 'translateY(0px)');
};
// iOS Native Refresher
// -----------------------------
const setSpinnerOpacity = (spinner, opacity) => {
  spinner.style.setProperty('opacity', opacity.toString());
};
const handleScrollWhilePulling = (ticks, numTicks, pullAmount) => {
  const max = 1;
  index.writeTask(() => {
    ticks.forEach((el, i) => {
      /**
       * Compute the opacity of each tick
       * mark as a percentage of the pullAmount
       * offset by max / numTicks so
       * the tick marks are shown staggered.
       */
      const min = i * (max / numTicks);
      const range = max - min;
      const start = pullAmount - min;
      const progression = helpers.clamp(0, start / range, 1);
      el.style.setProperty('opacity', progression.toString());
    });
  });
};
const handleScrollWhileRefreshing = (spinner, lastVelocityY) => {
  index.writeTask(() => {
    // If user pulls down quickly, the spinner should spin faster
    spinner.style.setProperty('--refreshing-rotation-duration', lastVelocityY >= 1.0 ? '0.5s' : '2s');
    spinner.style.setProperty('opacity', '1');
  });
};
const translateElement = (el, value, duration = 200) => {
  if (!el) {
    return Promise.resolve();
  }
  const trans = helpers.transitionEndAsync(el, duration);
  index.writeTask(() => {
    el.style.setProperty('transition', `${duration}ms all ease-out`);
    if (value === undefined) {
      el.style.removeProperty('transform');
    }
    else {
      el.style.setProperty('transform', `translate3d(0px, ${value}, 0px)`);
    }
  });
  return trans;
};
// Utils
// -----------------------------
const shouldUseNativeRefresher = async (referenceEl, mode) => {
  const refresherContent = referenceEl.querySelector('ion-refresher-content');
  if (!refresherContent) {
    return Promise.resolve(false);
  }
  await new Promise((resolve) => helpers.componentOnReady(refresherContent, resolve));
  const pullingSpinner = referenceEl.querySelector('ion-refresher-content .refresher-pulling ion-spinner');
  const refreshingSpinner = referenceEl.querySelector('ion-refresher-content .refresher-refreshing ion-spinner');
  return (pullingSpinner !== null &&
    refreshingSpinner !== null &&
    ((mode === 'ios' && ionicGlobal.isPlatform('mobile') && referenceEl.style.webkitOverflowScrolling !== undefined) ||
      mode === 'md'));
};

const refresherIosCss = "ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}@supports (inset-inline-start: 0){ion-refresher{inset-inline-start:0}}@supports not (inset-inline-start: 0){ion-refresher{left:0}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}}ion-refresher.refresher-active{display:block}ion-refresher-content{display:flex;flex-direction:column;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{transform-origin:center;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;animation:250ms linear refresher-pop forwards}.refresher-native ion-spinner{width:32px;height:32px;color:var(--ion-color-step-450, #747577)}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing-icon{transform:scale(0) rotate(180deg);transition:300ms}@keyframes refresher-pop{0%{transform:scale(1);animation-timing-function:ease-in}50%{transform:scale(1.2);animation-timing-function:ease-out}100%{transform:scale(1)}}@keyframes refresher-rotate{from{transform:rotate(0deg)}to{transform:rotate(180deg)}}";

const refresherMdCss = "ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}@supports (inset-inline-start: 0){ion-refresher{inset-inline-start:0}}@supports not (inset-inline-start: 0){ion-refresher{left:0}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}}ion-refresher.refresher-active{display:block}ion-refresher-content{display:flex;flex-direction:column;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{transform-origin:center;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:flex}ion-refresher.refresher-native .refresher-pulling-icon{transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;border-radius:100%;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;display:flex;border:1px solid var(--ion-color-step-200, #ececec);background:var(--ion-color-step-250, #ffffff);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}";

const Refresher = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionRefresh = index.createEvent(this, "ionRefresh", 7);
    this.ionPull = index.createEvent(this, "ionPull", 7);
    this.ionStart = index.createEvent(this, "ionStart", 7);
    this.appliedStyles = false;
    this.didStart = false;
    this.progress = 0;
    this.pointerDown = false;
    this.needsCompletion = false;
    this.didRefresh = false;
    this.lastVelocityY = 0;
    this.animations = [];
    this.nativeRefresher = false;
    this.state = 1;
    this.pullMin = 60;
    this.pullMax = this.pullMin + 60;
    this.closeDuration = '280ms';
    this.snapbackDuration = '280ms';
    this.pullFactor = 1;
    this.disabled = false;
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  async checkNativeRefresher() {
    const useNativeRefresher = await shouldUseNativeRefresher(this.el, ionicGlobal.getIonMode(this));
    if (useNativeRefresher && !this.nativeRefresher) {
      const contentEl = this.el.closest('ion-content');
      this.setupNativeRefresher(contentEl);
    }
    else if (!useNativeRefresher) {
      this.destroyNativeRefresher();
    }
  }
  destroyNativeRefresher() {
    if (this.scrollEl && this.scrollListenerCallback) {
      this.scrollEl.removeEventListener('scroll', this.scrollListenerCallback);
      this.scrollListenerCallback = undefined;
    }
    this.nativeRefresher = false;
  }
  async resetNativeRefresher(el, state) {
    this.state = state;
    if (ionicGlobal.getIonMode(this) === 'ios') {
      await translateElement(el, undefined, 300);
    }
    else {
      await helpers.transitionEndAsync(this.el.querySelector('.refresher-refreshing-icon'), 200);
    }
    this.didRefresh = false;
    this.needsCompletion = false;
    this.pointerDown = false;
    this.animations.forEach((ani) => ani.destroy());
    this.animations = [];
    this.progress = 0;
    this.state = 1;
  }
  async setupiOSNativeRefresher(pullingSpinner, refreshingSpinner) {
    this.elementToTransform = this.scrollEl;
    const ticks = pullingSpinner.shadowRoot.querySelectorAll('svg');
    let MAX_PULL = this.scrollEl.clientHeight * 0.16;
    const NUM_TICKS = ticks.length;
    index.writeTask(() => ticks.forEach((el) => el.style.setProperty('animation', 'none')));
    this.scrollListenerCallback = () => {
      if (!this.pointerDown && this.state === 1) {
        return;
      }
      index.readTask(() => {
        const scrollTop = this.scrollEl.scrollTop;
        const refresherHeight = this.el.clientHeight;
        if (scrollTop > 0) {
          if (this.state === 8) {
            const ratio = helpers.clamp(0, scrollTop / (refresherHeight * 0.5), 1);
            index.writeTask(() => setSpinnerOpacity(refreshingSpinner, 1 - ratio));
            return;
          }
          return;
        }
        if (this.pointerDown) {
          if (!this.didStart) {
            this.didStart = true;
            this.ionStart.emit();
          }
          if (this.pointerDown) {
            this.ionPull.emit();
          }
        }
        const offset = this.didStart ? 30 : 0;
        const pullAmount = (this.progress = helpers.clamp(0, (Math.abs(scrollTop) - offset) / MAX_PULL, 1));
        const shouldShowRefreshingSpinner = this.state === 8 || pullAmount === 1;
        if (shouldShowRefreshingSpinner) {
          if (this.pointerDown) {
            handleScrollWhileRefreshing(refreshingSpinner, this.lastVelocityY);
          }
          if (!this.didRefresh) {
            this.beginRefresh();
            this.didRefresh = true;
            haptic.hapticImpact({ style: 'light' });
            if (!this.pointerDown) {
              translateElement(this.elementToTransform, `${refresherHeight}px`);
            }
          }
        }
        else {
          this.state = 2;
          handleScrollWhilePulling(ticks, NUM_TICKS, pullAmount);
        }
      });
    };
    this.scrollEl.addEventListener('scroll', this.scrollListenerCallback);
    this.gesture = (await Promise.resolve().then(function () { return require('./index-206cca84.js'); })).createGesture({
      el: this.scrollEl,
      gestureName: 'refresher',
      gesturePriority: 31,
      direction: 'y',
      threshold: 5,
      onStart: () => {
        this.pointerDown = true;
        if (!this.didRefresh) {
          translateElement(this.elementToTransform, '0px');
        }
        if (MAX_PULL === 0) {
          MAX_PULL = this.scrollEl.clientHeight * 0.16;
        }
      },
      onMove: (ev) => {
        this.lastVelocityY = ev.velocityY;
      },
      onEnd: () => {
        this.pointerDown = false;
        this.didStart = false;
        if (this.needsCompletion) {
          this.resetNativeRefresher(this.elementToTransform, 32);
          this.needsCompletion = false;
        }
        else if (this.didRefresh) {
          index.readTask(() => translateElement(this.elementToTransform, `${this.el.clientHeight}px`));
        }
      },
    });
    this.disabledChanged();
  }
  async setupMDNativeRefresher(contentEl, pullingSpinner, refreshingSpinner) {
    const circle = helpers.getElementRoot(pullingSpinner).querySelector('circle');
    const pullingRefresherIcon = this.el.querySelector('ion-refresher-content .refresher-pulling-icon');
    const refreshingCircle = helpers.getElementRoot(refreshingSpinner).querySelector('circle');
    if (circle !== null && refreshingCircle !== null) {
      index.writeTask(() => {
        circle.style.setProperty('animation', 'none');
        refreshingSpinner.style.setProperty('animation-delay', '-655ms');
        refreshingCircle.style.setProperty('animation-delay', '-655ms');
      });
    }
    this.gesture = (await Promise.resolve().then(function () { return require('./index-206cca84.js'); })).createGesture({
      el: this.scrollEl,
      gestureName: 'refresher',
      gesturePriority: 31,
      direction: 'y',
      threshold: 5,
      canStart: () => this.state !== 8 &&
        this.state !== 32 &&
        this.scrollEl.scrollTop === 0,
      onStart: (ev) => {
        this.progress = 0;
        ev.data = { animation: undefined, didStart: false, cancelled: false };
      },
      onMove: (ev) => {
        if ((ev.velocityY < 0 && this.progress === 0 && !ev.data.didStart) || ev.data.cancelled) {
          ev.data.cancelled = true;
          return;
        }
        if (!ev.data.didStart) {
          ev.data.didStart = true;
          this.state = 2;
          const { scrollEl } = this;
          const overflowProperty = scrollEl.matches(index$1.ION_CONTENT_CLASS_SELECTOR) ? 'overflow' : '--overflow';
          index.writeTask(() => scrollEl.style.setProperty(overflowProperty, 'hidden'));
          const animationType = getRefresherAnimationType(contentEl);
          const animation = createPullingAnimation(animationType, pullingRefresherIcon, this.el);
          ev.data.animation = animation;
          animation.progressStart(false, 0);
          this.ionStart.emit();
          this.animations.push(animation);
          return;
        }
        this.progress = helpers.clamp(0, (ev.deltaY / 180) * 0.5, 1);
        ev.data.animation.progressStep(this.progress);
        this.ionPull.emit();
      },
      onEnd: (ev) => {
        if (!ev.data.didStart) {
          return;
        }
        this.gesture.enable(false);
        const { scrollEl } = this;
        const overflowProperty = scrollEl.matches(index$1.ION_CONTENT_CLASS_SELECTOR) ? 'overflow' : '--overflow';
        index.writeTask(() => scrollEl.style.removeProperty(overflowProperty));
        if (this.progress <= 0.4) {
          ev.data.animation.progressEnd(0, this.progress, 500).onFinish(() => {
            this.animations.forEach((ani) => ani.destroy());
            this.animations = [];
            this.gesture.enable(true);
            this.state = 1;
          });
          return;
        }
        const progress = cubicBezier.getTimeGivenProgression([0, 0], [0, 0], [1, 1], [1, 1], this.progress)[0];
        const snapBackAnimation = createSnapBackAnimation(pullingRefresherIcon);
        this.animations.push(snapBackAnimation);
        index.writeTask(async () => {
          pullingRefresherIcon.style.setProperty('--ion-pulling-refresher-translate', `${progress * 100}px`);
          ev.data.animation.progressEnd();
          await snapBackAnimation.play();
          this.beginRefresh();
          ev.data.animation.destroy();
          this.gesture.enable(true);
        });
      },
    });
    this.disabledChanged();
  }
  async setupNativeRefresher(contentEl) {
    if (this.scrollListenerCallback || !contentEl || this.nativeRefresher || !this.scrollEl) {
      return;
    }
    this.setCss(0, '', false, '');
    this.nativeRefresher = true;
    const pullingSpinner = this.el.querySelector('ion-refresher-content .refresher-pulling ion-spinner');
    const refreshingSpinner = this.el.querySelector('ion-refresher-content .refresher-refreshing ion-spinner');
    if (ionicGlobal.getIonMode(this) === 'ios') {
      this.setupiOSNativeRefresher(pullingSpinner, refreshingSpinner);
    }
    else {
      this.setupMDNativeRefresher(contentEl, pullingSpinner, refreshingSpinner);
    }
  }
  componentDidUpdate() {
    this.checkNativeRefresher();
  }
  async connectedCallback() {
    if (this.el.getAttribute('slot') !== 'fixed') {
      console.error('Make sure you use: <ion-refresher slot="fixed">');
      return;
    }
    const contentEl = this.el.closest(index$1.ION_CONTENT_ELEMENT_SELECTOR);
    if (!contentEl) {
      index$1.printIonContentErrorMsg(this.el);
      return;
    }
    helpers.componentOnReady(contentEl, async () => {
      const customScrollTarget = contentEl.querySelector(index$1.ION_CONTENT_CLASS_SELECTOR);
      this.scrollEl = await index$1.getScrollElement(customScrollTarget !== null && customScrollTarget !== void 0 ? customScrollTarget : contentEl);
      this.backgroundContentEl = await contentEl.getBackgroundElement();
      if (await shouldUseNativeRefresher(this.el, ionicGlobal.getIonMode(this))) {
        this.setupNativeRefresher(contentEl);
      }
      else {
        this.gesture = (await Promise.resolve().then(function () { return require('./index-206cca84.js'); })).createGesture({
          el: contentEl,
          gestureName: 'refresher',
          gesturePriority: 31,
          direction: 'y',
          threshold: 20,
          passive: false,
          canStart: () => this.canStart(),
          onStart: () => this.onStart(),
          onMove: (ev) => this.onMove(ev),
          onEnd: () => this.onEnd(),
        });
        this.disabledChanged();
      }
    });
  }
  disconnectedCallback() {
    this.destroyNativeRefresher();
    this.scrollEl = undefined;
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  async complete() {
    if (this.nativeRefresher) {
      this.needsCompletion = true;
      if (!this.pointerDown) {
        helpers.raf(() => helpers.raf(() => this.resetNativeRefresher(this.elementToTransform, 32)));
      }
    }
    else {
      this.close(32, '120ms');
    }
  }
  async cancel() {
    if (this.nativeRefresher) {
      if (!this.pointerDown) {
        helpers.raf(() => helpers.raf(() => this.resetNativeRefresher(this.elementToTransform, 16)));
      }
    }
    else {
      this.close(16, '');
    }
  }
  getProgress() {
    return Promise.resolve(this.progress);
  }
  canStart() {
    if (!this.scrollEl) {
      return false;
    }
    if (this.state !== 1) {
      return false;
    }
    if (this.scrollEl.scrollTop > 0) {
      return false;
    }
    return true;
  }
  onStart() {
    this.progress = 0;
    this.state = 1;
    this.memoizeOverflowStyle();
  }
  onMove(detail) {
    if (!this.scrollEl) {
      return;
    }
    const ev = detail.event;
    if (ev.touches !== undefined && ev.touches.length > 1) {
      return;
    }
    if ((this.state & 56) !== 0) {
      return;
    }
    const pullFactor = Number.isNaN(this.pullFactor) || this.pullFactor < 0 ? 1 : this.pullFactor;
    const deltaY = detail.deltaY * pullFactor;
    if (deltaY <= 0) {
      this.progress = 0;
      this.state = 1;
      if (this.appliedStyles) {
        this.setCss(0, '', false, '');
        return;
      }
      return;
    }
    if (this.state === 1) {
      const scrollHostScrollTop = this.scrollEl.scrollTop;
      if (scrollHostScrollTop > 0) {
        this.progress = 0;
        return;
      }
      this.state = 2;
    }
    if (ev.cancelable) {
      ev.preventDefault();
    }
    this.setCss(deltaY, '0ms', true, '');
    if (deltaY === 0) {
      this.progress = 0;
      return;
    }
    const pullMin = this.pullMin;
    this.progress = deltaY / pullMin;
    if (!this.didStart) {
      this.didStart = true;
      this.ionStart.emit();
    }
    this.ionPull.emit();
    if (deltaY < pullMin) {
      this.state = 2;
      return;
    }
    if (deltaY > this.pullMax) {
      this.beginRefresh();
      return;
    }
    this.state = 4;
    return;
  }
  onEnd() {
    if (this.state === 4) {
      this.beginRefresh();
    }
    else if (this.state === 2) {
      this.cancel();
    }
  }
  beginRefresh() {
    this.state = 8;
    this.setCss(this.pullMin, this.snapbackDuration, true, '');
    this.ionRefresh.emit({
      complete: this.complete.bind(this),
    });
  }
  close(state, delay) {
    setTimeout(() => {
      this.state = 1;
      this.progress = 0;
      this.didStart = false;
      this.setCss(0, '0ms', false, '');
    }, 600);
    this.state = state;
    this.setCss(0, this.closeDuration, true, delay);
  }
  setCss(y, duration, overflowVisible, delay) {
    if (this.nativeRefresher) {
      return;
    }
    this.appliedStyles = y > 0;
    index.writeTask(() => {
      if (this.scrollEl && this.backgroundContentEl) {
        const scrollStyle = this.scrollEl.style;
        const backgroundStyle = this.backgroundContentEl.style;
        scrollStyle.transform = backgroundStyle.transform = y > 0 ? `translateY(${y}px) translateZ(0px)` : '';
        scrollStyle.transitionDuration = backgroundStyle.transitionDuration = duration;
        scrollStyle.transitionDelay = backgroundStyle.transitionDelay = delay;
        if (overflowVisible) {
          scrollStyle.overflow = 'hidden';
        }
        else {
          this.restoreOverflowStyle();
        }
      }
    });
  }
  memoizeOverflowStyle() {
    if (this.scrollEl) {
      const { overflow, overflowX, overflowY } = this.scrollEl.style;
      this.overflowStyles = {
        overflow: overflow !== null && overflow !== void 0 ? overflow : '',
        overflowX: overflowX !== null && overflowX !== void 0 ? overflowX : '',
        overflowY: overflowY !== null && overflowY !== void 0 ? overflowY : '',
      };
    }
  }
  restoreOverflowStyle() {
    if (this.overflowStyles !== undefined && this.scrollEl !== undefined) {
      const { overflow, overflowX, overflowY } = this.overflowStyles;
      this.scrollEl.style.overflow = overflow;
      this.scrollEl.style.overflowX = overflowX;
      this.scrollEl.style.overflowY = overflowY;
      this.overflowStyles = undefined;
    }
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { slot: "fixed", class: {
        [mode]: true,
        [`refresher-${mode}`]: true,
        'refresher-native': this.nativeRefresher,
        'refresher-active': this.state !== 1,
        'refresher-pulling': this.state === 2,
        'refresher-ready': this.state === 4,
        'refresher-refreshing': this.state === 8,
        'refresher-cancelling': this.state === 16,
        'refresher-completing': this.state === 32,
      } }));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "disabled": ["disabledChanged"]
  }; }
};
Refresher.style = {
  ios: refresherIosCss,
  md: refresherMdCss
};

exports.ion_refresher = Refresher;

//# sourceMappingURL=ion-refresher.cjs.entry.js.map
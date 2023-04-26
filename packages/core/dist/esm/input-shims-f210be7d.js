import { g as getScrollElement, c as scrollByPoint, a as findClosestIonContent } from './index-3eb0f075.js';
import { a as addEventListener, b as removeEventListener, r as raf, d as componentOnReady } from './helpers-937ea457.js';
import { w as win } from './index-37371a87.js';
import './index-24e88bd3.js';

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var KeyboardResize;
(function (KeyboardResize) {
  KeyboardResize["Body"] = "body";
  KeyboardResize["Ionic"] = "ionic";
  KeyboardResize["Native"] = "native";
  KeyboardResize["None"] = "none";
})(KeyboardResize || (KeyboardResize = {}));
const Keyboard = {
  getEngine() {
    var _a;
    return ((_a = win === null || win === void 0 ? void 0 : win.Capacitor) === null || _a === void 0 ? void 0 : _a.isPluginAvailable('Keyboard')) && (win === null || win === void 0 ? void 0 : win.Capacitor.Plugins.Keyboard);
  },
  getResizeMode() {
    const engine = this.getEngine();
    if (!engine || !engine.getResizeMode) {
      return Promise.resolve(undefined);
    }
    return engine.getResizeMode();
  },
};

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const cloneMap = new WeakMap();
const relocateInput = (componentEl, inputEl, shouldRelocate, inputRelativeY = 0, disabledClonedInput = false) => {
  if (cloneMap.has(componentEl) === shouldRelocate) {
    return;
  }
  if (shouldRelocate) {
    addClone(componentEl, inputEl, inputRelativeY, disabledClonedInput);
  }
  else {
    removeClone(componentEl, inputEl);
  }
};
// TODO(FW-2832): type
const isFocused = (input) => {
  return input === input.getRootNode().activeElement;
};
const addClone = (componentEl, inputEl, inputRelativeY, disabledClonedInput = false) => {
  // this allows for the actual input to receive the focus from
  // the user's touch event, but before it receives focus, it
  // moves the actual input to a location that will not screw
  // up the app's layout, and does not allow the native browser
  // to attempt to scroll the input into place (messing up headers/footers)
  // the cloned input fills the area of where native input should be
  // while the native input fakes out the browser by relocating itself
  // before it receives the actual focus event
  // We hide the focused input (with the visible caret) invisible by making it scale(0),
  const parentEl = inputEl.parentNode;
  // DOM WRITES
  const clonedEl = inputEl.cloneNode(false);
  clonedEl.classList.add('cloned-input');
  clonedEl.tabIndex = -1;
  /**
   * Making the cloned input disabled prevents
   * Chrome for Android from still scrolling
   * the entire page since this cloned input
   * will briefly be hidden by the keyboard
   * even though it is not focused.
   *
   * This is not needed on iOS. While this
   * does not cause functional issues on iOS,
   * the input still appears slightly dimmed even
   * if we set opacity: 1.
   */
  if (disabledClonedInput) {
    clonedEl.disabled = true;
  }
  parentEl.appendChild(clonedEl);
  cloneMap.set(componentEl, clonedEl);
  const doc = componentEl.ownerDocument;
  const tx = doc.dir === 'rtl' ? 9999 : -9999;
  componentEl.style.pointerEvents = 'none';
  inputEl.style.transform = `translate3d(${tx}px,${inputRelativeY}px,0) scale(0)`;
};
const removeClone = (componentEl, inputEl) => {
  const clone = cloneMap.get(componentEl);
  if (clone) {
    cloneMap.delete(componentEl);
    clone.remove();
  }
  componentEl.style.pointerEvents = '';
  inputEl.style.transform = '';
};
/**
 * Factoring in 50px gives us some room
 * in case the keyboard shows password/autofill bars
 * asynchronously.
 */
const SCROLL_AMOUNT_PADDING = 50;

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const enableHideCaretOnScroll = (componentEl, inputEl, scrollEl) => {
  if (!scrollEl || !inputEl) {
    return () => {
      return;
    };
  }
  const scrollHideCaret = (shouldHideCaret) => {
    if (isFocused(inputEl)) {
      relocateInput(componentEl, inputEl, shouldHideCaret);
    }
  };
  const onBlur = () => relocateInput(componentEl, inputEl, false);
  const hideCaret = () => scrollHideCaret(true);
  const showCaret = () => scrollHideCaret(false);
  addEventListener(scrollEl, 'ionScrollStart', hideCaret);
  addEventListener(scrollEl, 'ionScrollEnd', showCaret);
  inputEl.addEventListener('blur', onBlur);
  return () => {
    removeEventListener(scrollEl, 'ionScrollStart', hideCaret);
    removeEventListener(scrollEl, 'ionScrollEnd', showCaret);
    inputEl.removeEventListener('blur', onBlur);
  };
};

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const SKIP_SELECTOR = 'input, textarea, [no-blur], [contenteditable]';
const enableInputBlurring = () => {
  let focused = true;
  let didScroll = false;
  const doc = document;
  const onScroll = () => {
    didScroll = true;
  };
  const onFocusin = () => {
    focused = true;
  };
  const onTouchend = (ev) => {
    // if app did scroll return early
    if (didScroll) {
      didScroll = false;
      return;
    }
    const active = doc.activeElement;
    if (!active) {
      return;
    }
    // only blur if the active element is a text-input or a textarea
    if (active.matches(SKIP_SELECTOR)) {
      return;
    }
    // if the selected target is the active element, do not blur
    const tapped = ev.target;
    if (tapped === active) {
      return;
    }
    if (tapped.matches(SKIP_SELECTOR) || tapped.closest(SKIP_SELECTOR)) {
      return;
    }
    focused = false;
    // TODO FW-2796: find a better way, why 50ms?
    setTimeout(() => {
      if (!focused) {
        active.blur();
      }
    }, 50);
  };
  addEventListener(doc, 'ionScrollStart', onScroll);
  doc.addEventListener('focusin', onFocusin, true);
  doc.addEventListener('touchend', onTouchend, false);
  return () => {
    removeEventListener(doc, 'ionScrollStart', onScroll, true);
    doc.removeEventListener('focusin', onFocusin, true);
    doc.removeEventListener('touchend', onTouchend, false);
  };
};

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const SCROLL_ASSIST_SPEED = 0.3;
const getScrollData = (componentEl, contentEl, keyboardHeight) => {
  var _a;
  const itemEl = (_a = componentEl.closest('ion-item,[ion-item]')) !== null && _a !== void 0 ? _a : componentEl;
  return calcScrollData(itemEl.getBoundingClientRect(), contentEl.getBoundingClientRect(), keyboardHeight, componentEl.ownerDocument.defaultView.innerHeight // TODO(FW-2832): type
  );
};
const calcScrollData = (inputRect, contentRect, keyboardHeight, platformHeight) => {
  // compute input's Y values relative to the body
  const inputTop = inputRect.top;
  const inputBottom = inputRect.bottom;
  // compute visible area
  const visibleAreaTop = contentRect.top;
  const visibleAreaBottom = Math.min(contentRect.bottom, platformHeight - keyboardHeight);
  // compute safe area
  const safeAreaTop = visibleAreaTop + 15;
  const safeAreaBottom = visibleAreaBottom - SCROLL_AMOUNT_PADDING;
  // figure out if each edge of the input is within the safe area
  const distanceToBottom = safeAreaBottom - inputBottom;
  const distanceToTop = safeAreaTop - inputTop;
  // desiredScrollAmount is the negated distance to the safe area according to our calculations.
  const desiredScrollAmount = Math.round(distanceToBottom < 0 ? -distanceToBottom : distanceToTop > 0 ? -distanceToTop : 0);
  // our calculations make some assumptions that aren't always true, like the keyboard being closed when an input
  // gets focus, so make sure we don't scroll the input above the visible area
  const scrollAmount = Math.min(desiredScrollAmount, inputTop - visibleAreaTop);
  const distance = Math.abs(scrollAmount);
  const duration = distance / SCROLL_ASSIST_SPEED;
  const scrollDuration = Math.min(400, Math.max(150, duration));
  return {
    scrollAmount,
    scrollDuration,
    scrollPadding: keyboardHeight,
    inputSafeY: -(inputTop - safeAreaTop) + 4,
  };
};

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const PADDING_TIMER_KEY = '$ionPaddingTimer';
/**
 * Scroll padding adds additional padding to the bottom
 * of ion-content so that there is enough scroll space
 * for an input to be scrolled above the keyboard. This
 * is needed in environments where the webview does not
 * resize when the keyboard opens.
 *
 * Example: If an input at the bottom of ion-content is
 * focused, there is no additional scrolling space below
 * it, so the input cannot be scrolled above the keyboard.
 * Scroll padding fixes this by adding padding equal to the
 * height of the keyboard to the bottom of the content.
 *
 * Common environments where this is needed:
 * - Mobile Safari: The keyboard overlays the content
 * - Capacitor/Cordova on iOS: The keyboard overlays the content
 * when the KeyboardResize mode is set to 'none'.
 */
const setScrollPadding = (contentEl, paddingAmount, clearCallback) => {
  const timer = contentEl[PADDING_TIMER_KEY];
  if (timer) {
    clearTimeout(timer);
  }
  if (paddingAmount > 0) {
    contentEl.style.setProperty('--keyboard-offset', `${paddingAmount}px`);
  }
  else {
    contentEl[PADDING_TIMER_KEY] = setTimeout(() => {
      contentEl.style.setProperty('--keyboard-offset', '0px');
      if (clearCallback) {
        clearCallback();
      }
    }, 120);
  }
};
/**
 * When an input is about to be focused,
 * set a timeout to clear any scroll padding
 * on the content. Note: The clearing
 * is done on a timeout so that if users
 * are moving focus from one input to the next
 * then re-adding scroll padding to the new
 * input with cancel the timeout to clear the
 * scroll padding.
 */
const setClearScrollPaddingListener = (inputEl, contentEl, doneCallback) => {
  const clearScrollPadding = () => {
    if (contentEl) {
      setScrollPadding(contentEl, 0, doneCallback);
    }
  };
  inputEl.addEventListener('focusout', clearScrollPadding, { once: true });
};

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
let currentPadding = 0;
const enableScrollAssist = (componentEl, inputEl, contentEl, footerEl, keyboardHeight, enableScrollPadding, keyboardResize, disableClonedInput = false) => {
  /**
   * Scroll padding should only be added if:
   * 1. The global scrollPadding config option
   * is set to true.
   * 2. The native keyboard resize mode is either "none"
   * (keyboard overlays webview) or undefined (resize
   * information unavailable)
   * Resize info is available on Capacitor 4+
   */
  const addScrollPadding = enableScrollPadding && (keyboardResize === undefined || keyboardResize.mode === KeyboardResize.None);
  /**
   * When the input is about to receive
   * focus, we need to move it to prevent
   * mobile Safari from adjusting the viewport.
   */
  const focusIn = async () => {
    jsSetFocus(componentEl, inputEl, contentEl, footerEl, keyboardHeight, addScrollPadding, disableClonedInput);
  };
  componentEl.addEventListener('focusin', focusIn, true);
  return () => {
    componentEl.removeEventListener('focusin', focusIn, true);
  };
};
const jsSetFocus = async (componentEl, inputEl, contentEl, footerEl, keyboardHeight, enableScrollPadding, disableClonedInput = false) => {
  if (!contentEl && !footerEl) {
    return;
  }
  const scrollData = getScrollData(componentEl, (contentEl || footerEl), keyboardHeight);
  if (contentEl && Math.abs(scrollData.scrollAmount) < 4) {
    // the text input is in a safe position that doesn't
    // require it to be scrolled into view, just set focus now
    inputEl.focus();
    /**
     * Even though the input does not need
     * scroll assist, we should preserve the
     * the scroll padding as users could be moving
     * focus from an input that needs scroll padding
     * to an input that does not need scroll padding.
     * If we remove the scroll padding now, users will
     * see the page jump.
     */
    if (enableScrollPadding && contentEl !== null) {
      currentPadding += scrollData.scrollPadding;
      setScrollPadding(contentEl, currentPadding);
      setClearScrollPaddingListener(inputEl, contentEl, () => (currentPadding = 0));
    }
    return;
  }
  // temporarily move the focus to the focus holder so the browser
  // doesn't freak out while it's trying to get the input in place
  // at this point the native text input still does not have focus
  relocateInput(componentEl, inputEl, true, scrollData.inputSafeY, disableClonedInput);
  inputEl.focus();
  /**
   * Relocating/Focusing input causes the
   * click event to be cancelled, so
   * manually fire one here.
   */
  raf(() => componentEl.click());
  /**
   * If enabled, we can add scroll padding to
   * the bottom of the content so that scroll assist
   * has enough room to scroll the input above
   * the keyboard.
   */
  if (enableScrollPadding && contentEl) {
    currentPadding += scrollData.scrollPadding;
    setScrollPadding(contentEl, currentPadding);
  }
  if (typeof window !== 'undefined') {
    let scrollContentTimeout;
    const scrollContent = async () => {
      // clean up listeners and timeouts
      if (scrollContentTimeout !== undefined) {
        clearTimeout(scrollContentTimeout);
      }
      window.removeEventListener('ionKeyboardDidShow', doubleKeyboardEventListener);
      window.removeEventListener('ionKeyboardDidShow', scrollContent);
      // scroll the input into place
      if (contentEl) {
        await scrollByPoint(contentEl, 0, scrollData.scrollAmount, scrollData.scrollDuration);
      }
      // the scroll view is in the correct position now
      // give the native text input focus
      relocateInput(componentEl, inputEl, false, scrollData.inputSafeY);
      // ensure this is the focused input
      inputEl.focus();
      /**
       * When the input is about to be blurred
       * we should set a timeout to remove
       * any scroll padding.
       */
      if (enableScrollPadding) {
        setClearScrollPaddingListener(inputEl, contentEl, () => (currentPadding = 0));
      }
    };
    const doubleKeyboardEventListener = () => {
      window.removeEventListener('ionKeyboardDidShow', doubleKeyboardEventListener);
      window.addEventListener('ionKeyboardDidShow', scrollContent);
    };
    if (contentEl) {
      const scrollEl = await getScrollElement(contentEl);
      /**
       * scrollData will only consider the amount we need
       * to scroll in order to properly bring the input
       * into view. It will not consider the amount
       * we can scroll in the content element.
       * As a result, scrollData may request a greater
       * scroll position than is currently available
       * in the DOM. If this is the case, we need to
       * wait for the webview to resize/the keyboard
       * to show in order for additional scroll
       * bandwidth to become available.
       */
      const totalScrollAmount = scrollEl.scrollHeight - scrollEl.clientHeight;
      if (scrollData.scrollAmount > totalScrollAmount - scrollEl.scrollTop) {
        /**
         * On iOS devices, the system will show a "Passwords" bar above the keyboard
         * after the initial keyboard is shown. This prevents the webview from resizing
         * until the "Passwords" bar is shown, so we need to wait for that to happen first.
         */
        if (inputEl.type === 'password') {
          // Add 50px to account for the "Passwords" bar
          scrollData.scrollAmount += SCROLL_AMOUNT_PADDING;
          window.addEventListener('ionKeyboardDidShow', doubleKeyboardEventListener);
        }
        else {
          window.addEventListener('ionKeyboardDidShow', scrollContent);
        }
        /**
         * This should only fire in 2 instances:
         * 1. The app is very slow.
         * 2. The app is running in a browser on an old OS
         * that does not support Ionic Keyboard Events
         */
        scrollContentTimeout = setTimeout(scrollContent, 1000);
        return;
      }
    }
    scrollContent();
  }
};

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const INPUT_BLURRING = true;
const startInputShims = async (config, platform) => {
  const doc = document;
  const isIOS = platform === 'ios';
  const isAndroid = platform === 'android';
  /**
   * Hide Caret and Input Blurring are needed on iOS.
   * Scroll Assist and Scroll Padding are needed on iOS and Android
   * with Chrome web browser (not Chrome webview).
   */
  const keyboardHeight = config.getNumber('keyboardHeight', 290);
  const scrollAssist = config.getBoolean('scrollAssist', true);
  const hideCaret = config.getBoolean('hideCaretOnScroll', isIOS);
  const inputBlurring = config.getBoolean('inputBlurring', isIOS);
  const scrollPadding = config.getBoolean('scrollPadding', true);
  const inputs = Array.from(doc.querySelectorAll('ion-input, ion-textarea'));
  const hideCaretMap = new WeakMap();
  const scrollAssistMap = new WeakMap();
  /**
   * Grab the native keyboard resize configuration
   * and pass it to scroll assist. Scroll assist requires
   * that we adjust the input right before the input
   * is about to be focused. If we called `Keyboard.getResizeMode`
   * on focusin in scroll assist, we could potentially adjust the
   * input too late since this call is async.
   */
  const keyboardResizeMode = await Keyboard.getResizeMode();
  const registerInput = async (componentEl) => {
    await new Promise((resolve) => componentOnReady(componentEl, resolve));
    const inputRoot = componentEl.shadowRoot || componentEl;
    const inputEl = inputRoot.querySelector('input') || inputRoot.querySelector('textarea');
    const scrollEl = findClosestIonContent(componentEl);
    const footerEl = !scrollEl ? componentEl.closest('ion-footer') : null;
    if (!inputEl) {
      return;
    }
    if (!!scrollEl && hideCaret && !hideCaretMap.has(componentEl)) {
      const rmFn = enableHideCaretOnScroll(componentEl, inputEl, scrollEl);
      hideCaretMap.set(componentEl, rmFn);
    }
    /**
     * date/datetime-locale inputs on mobile devices show date picker
     * overlays instead of keyboards. As a result, scroll assist is
     * not needed. This also works around a bug in iOS <16 where
     * scroll assist causes the browser to lock up. See FW-1997.
     */
    const isDateInput = inputEl.type === 'date' || inputEl.type === 'datetime-local';
    if (!isDateInput &&
      (!!scrollEl || !!footerEl) &&
      scrollAssist &&
      !scrollAssistMap.has(componentEl)) {
      const rmFn = enableScrollAssist(componentEl, inputEl, scrollEl, footerEl, keyboardHeight, scrollPadding, keyboardResizeMode, isAndroid);
      scrollAssistMap.set(componentEl, rmFn);
    }
  };
  const unregisterInput = (componentEl) => {
    if (hideCaret) {
      const fn = hideCaretMap.get(componentEl);
      if (fn) {
        fn();
      }
      hideCaretMap.delete(componentEl);
    }
    if (scrollAssist) {
      const fn = scrollAssistMap.get(componentEl);
      if (fn) {
        fn();
      }
      scrollAssistMap.delete(componentEl);
    }
  };
  if (inputBlurring && INPUT_BLURRING) {
    enableInputBlurring();
  }
  // Input might be already loaded in the DOM before ion-device-hacks did.
  // At this point we need to look for all of the inputs not registered yet
  // and register them.
  for (const input of inputs) {
    registerInput(input);
  }
  // TODO(FW-2832): types
  doc.addEventListener('ionInputDidLoad', ((ev) => {
    registerInput(ev.detail);
  }));
  doc.addEventListener('ionInputDidUnload', ((ev) => {
    unregisterInput(ev.detail);
  }));
};

export { startInputShims };

//# sourceMappingURL=input-shims-f210be7d.js.map
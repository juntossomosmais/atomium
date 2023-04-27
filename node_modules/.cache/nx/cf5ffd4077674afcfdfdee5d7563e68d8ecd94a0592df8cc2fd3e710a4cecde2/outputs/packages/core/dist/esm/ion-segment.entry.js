import { r as registerInstance, d as createEvent, w as writeTask, h, H as Host, e as getElement } from './index-a869d52d.js';
import { c as config, g as getIonMode } from './ionic-global-4a637317.js';
import { p as pointerCoord } from './helpers-937ea457.js';
import { i as isRTL } from './dir-81e2b9f7.js';
import { c as createColorClasses, h as hostContext } from './theme-bc7eaa70.js';

const segmentIosCss = ":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:stretch;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;user-select:none}:host(.segment-scrollable){justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.065)}:host(.in-toolbar){-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:auto}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb), 0.11)}";

const segmentMdCss = ":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:stretch;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;user-select:none}:host(.segment-scrollable){justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent}:host(.in-toolbar){min-height:var(--min-height)}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:auto}";

const Segment = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionSelect = createEvent(this, "ionSelect", 7);
    this.ionStyle = createEvent(this, "ionStyle", 7);
    this.onClick = (ev) => {
      const current = ev.target;
      const previous = this.checked;
      if (current.tagName === 'ION-SEGMENT') {
        return;
      }
      this.value = current.value;
      if (current !== previous) {
        this.emitValueChange();
      }
      if (this.scrollable || !this.swipeGesture) {
        if (previous) {
          this.checkButton(previous, current);
        }
        else {
          this.setCheckedClasses();
        }
      }
    };
    this.getSegmentButton = (selector) => {
      var _a, _b;
      const buttons = this.getButtons().filter((button) => !button.disabled);
      const currIndex = buttons.findIndex((button) => button === document.activeElement);
      switch (selector) {
        case 'first':
          return buttons[0];
        case 'last':
          return buttons[buttons.length - 1];
        case 'next':
          return (_a = buttons[currIndex + 1]) !== null && _a !== void 0 ? _a : buttons[0];
        case 'previous':
          return (_b = buttons[currIndex - 1]) !== null && _b !== void 0 ? _b : buttons[buttons.length - 1];
        default:
          return null;
      }
    };
    this.activated = false;
    this.color = undefined;
    this.disabled = false;
    this.scrollable = false;
    this.swipeGesture = true;
    this.value = undefined;
    this.selectOnFocus = false;
  }
  colorChanged(value, oldValue) {
    if ((oldValue === undefined && value !== undefined) || (oldValue !== undefined && value === undefined)) {
      this.emitStyle();
    }
  }
  swipeGestureChanged() {
    this.gestureChanged();
  }
  valueChanged(value) {
    this.ionSelect.emit({ value });
    if (this.scrollable) {
      const buttons = this.getButtons();
      const activeButton = buttons.find((button) => button.value === value);
      if (activeButton !== undefined) {
        activeButton.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }
  }
  disabledChanged() {
    this.gestureChanged();
    const buttons = this.getButtons();
    for (const button of buttons) {
      button.disabled = this.disabled;
    }
  }
  gestureChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.scrollable && !this.disabled && this.swipeGesture);
    }
  }
  connectedCallback() {
    this.emitStyle();
  }
  componentWillLoad() {
    this.emitStyle();
  }
  async componentDidLoad() {
    this.setCheckedClasses();
    this.gesture = (await import('./index-e65e72c8.js')).createGesture({
      el: this.el,
      gestureName: 'segment',
      gesturePriority: 100,
      threshold: 0,
      passive: false,
      onStart: (ev) => this.onStart(ev),
      onMove: (ev) => this.onMove(ev),
      onEnd: (ev) => this.onEnd(ev),
    });
    this.gestureChanged();
    if (this.disabled) {
      this.disabledChanged();
    }
  }
  onStart(detail) {
    this.valueBeforeGesture = this.value;
    this.activate(detail);
  }
  onMove(detail) {
    this.setNextIndex(detail);
  }
  onEnd(detail) {
    this.setActivated(false);
    const checkedValidButton = this.setNextIndex(detail, true);
    detail.event.stopImmediatePropagation();
    if (checkedValidButton) {
      this.addRipple(detail);
    }
    const value = this.value;
    if (value !== undefined) {
      if (this.valueBeforeGesture !== value) {
        this.emitValueChange();
      }
    }
    this.valueBeforeGesture = undefined;
  }
  emitValueChange() {
    const { value } = this;
    this.ionChange.emit({ value });
  }
  getButtons() {
    return Array.from(this.el.querySelectorAll('ion-segment-button'));
  }
  get checked() {
    return this.getButtons().find((button) => button.value === this.value);
  }
  addRipple(detail) {
    const useRippleEffect = config.getBoolean('animated', true) && config.getBoolean('rippleEffect', true);
    if (!useRippleEffect) {
      return;
    }
    const buttons = this.getButtons();
    const checked = buttons.find((button) => button.value === this.value);
    const root = checked.shadowRoot || checked;
    const ripple = root.querySelector('ion-ripple-effect');
    if (!ripple) {
      return;
    }
    const { x, y } = pointerCoord(detail.event);
    ripple.addRipple(x, y).then((remove) => remove());
  }
  setActivated(activated) {
    const buttons = this.getButtons();
    buttons.forEach((button) => {
      if (activated) {
        button.classList.add('segment-button-activated');
      }
      else {
        button.classList.remove('segment-button-activated');
      }
    });
    this.activated = activated;
  }
  activate(detail) {
    const clicked = detail.event.target;
    const buttons = this.getButtons();
    const checked = buttons.find((button) => button.value === this.value);
    if (clicked.tagName !== 'ION-SEGMENT-BUTTON') {
      return;
    }
    if (!checked) {
      this.value = clicked.value;
      this.setCheckedClasses();
    }
    if (this.value === clicked.value) {
      this.setActivated(true);
    }
  }
  getIndicator(button) {
    const root = button.shadowRoot || button;
    return root.querySelector('.segment-button-indicator');
  }
  checkButton(previous, current) {
    const previousIndicator = this.getIndicator(previous);
    const currentIndicator = this.getIndicator(current);
    if (previousIndicator === null || currentIndicator === null) {
      return;
    }
    const previousClientRect = previousIndicator.getBoundingClientRect();
    const currentClientRect = currentIndicator.getBoundingClientRect();
    const widthDelta = previousClientRect.width / currentClientRect.width;
    const xPosition = previousClientRect.left - currentClientRect.left;
    const transform = `translate3d(${xPosition}px, 0, 0) scaleX(${widthDelta})`;
    writeTask(() => {
      currentIndicator.classList.remove('segment-button-indicator-animated');
      currentIndicator.style.setProperty('transform', transform);
      currentIndicator.getBoundingClientRect();
      currentIndicator.classList.add('segment-button-indicator-animated');
      currentIndicator.style.setProperty('transform', '');
    });
    this.value = current.value;
    this.setCheckedClasses();
  }
  setCheckedClasses() {
    const buttons = this.getButtons();
    const index = buttons.findIndex((button) => button.value === this.value);
    const next = index + 1;
    for (const button of buttons) {
      button.classList.remove('segment-button-after-checked');
    }
    if (next < buttons.length) {
      buttons[next].classList.add('segment-button-after-checked');
    }
  }
  setNextIndex(detail, isEnd = false) {
    const rtl = isRTL(this.el);
    const activated = this.activated;
    const buttons = this.getButtons();
    const index = buttons.findIndex((button) => button.value === this.value);
    const previous = buttons[index];
    let current;
    let nextIndex;
    if (index === -1) {
      return;
    }
    const rect = previous.getBoundingClientRect();
    const left = rect.left;
    const width = rect.width;
    const currentX = detail.currentX;
    const previousY = rect.top + rect.height / 2;
    const root = this.el.getRootNode();
    const nextEl = root.elementFromPoint(currentX, previousY);
    const decreaseIndex = rtl ? currentX > left + width : currentX < left;
    const increaseIndex = rtl ? currentX < left : currentX > left + width;
    if (activated && !isEnd) {
      if (decreaseIndex) {
        const newIndex = index - 1;
        if (newIndex >= 0) {
          nextIndex = newIndex;
        }
      }
      else if (increaseIndex) {
        if (activated && !isEnd) {
          const newIndex = index + 1;
          if (newIndex < buttons.length) {
            nextIndex = newIndex;
          }
        }
      }
      if (nextIndex !== undefined && !buttons[nextIndex].disabled) {
        current = buttons[nextIndex];
      }
    }
    if (!activated && isEnd) {
      current = nextEl;
    }
    if (current != null) {
      if (current.tagName === 'ION-SEGMENT') {
        return false;
      }
      if (previous !== current) {
        this.checkButton(previous, current);
      }
    }
    return true;
  }
  emitStyle() {
    this.ionStyle.emit({
      segment: true,
    });
  }
  onKeyDown(ev) {
    const rtl = isRTL(this.el);
    let keyDownSelectsButton = this.selectOnFocus;
    let current;
    switch (ev.key) {
      case 'ArrowRight':
        ev.preventDefault();
        current = rtl ? this.getSegmentButton('previous') : this.getSegmentButton('next');
        break;
      case 'ArrowLeft':
        ev.preventDefault();
        current = rtl ? this.getSegmentButton('next') : this.getSegmentButton('previous');
        break;
      case 'Home':
        ev.preventDefault();
        current = this.getSegmentButton('first');
        break;
      case 'End':
        ev.preventDefault();
        current = this.getSegmentButton('last');
        break;
      case ' ':
      case 'Enter':
        ev.preventDefault();
        current = document.activeElement;
        keyDownSelectsButton = true;
    }
    if (!current) {
      return;
    }
    if (keyDownSelectsButton) {
      const previous = this.checked;
      this.checkButton(previous || current, current);
      if (current !== previous) {
        this.emitValueChange();
      }
    }
    current.setFocus();
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { role: "tablist", onClick: this.onClick, class: createColorClasses(this.color, {
        [mode]: true,
        'in-toolbar': hostContext('ion-toolbar', this.el),
        'in-toolbar-color': hostContext('ion-toolbar[color]', this.el),
        'segment-activated': this.activated,
        'segment-disabled': this.disabled,
        'segment-scrollable': this.scrollable,
      }) }, h("slot", null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "color": ["colorChanged"],
    "swipeGesture": ["swipeGestureChanged"],
    "value": ["valueChanged"],
    "disabled": ["disabledChanged"]
  }; }
};
Segment.style = {
  ios: segmentIosCss,
  md: segmentMdCss
};

export { Segment as ion_segment };

//# sourceMappingURL=ion-segment.entry.js.map
import { r as registerInstance, d as createEvent, h, H as Host, e as getElement } from './index-a869d52d.js';
import { g as getIonMode } from './ionic-global-4a637317.js';
import { f as clamp } from './helpers-937ea457.js';
import { b as hapticSelectionChanged, c as hapticSelectionEnd, a as hapticSelectionStart } from './haptic-4424aedf.js';
import { g as getClassMap } from './theme-bc7eaa70.js';

const pickerColumnIosCss = ".picker-col{display:flex;position:relative;flex:1;justify-content:center;height:100%;box-sizing:content-box;contain:content}.picker-opts{position:relative;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}@supports (inset-inline-start: 0){.picker-opt{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-opt{left:0}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{justify-content:flex-start}.picker-opts-right{justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:0;padding-bottom:0;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px;pointer-events:none}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;transform-origin:center center;height:46px;transform-style:preserve-3d;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:20px;line-height:42px;backface-visibility:hidden;pointer-events:auto}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{transform-origin:calc(100% - center) center}";

const pickerColumnMdCss = ".picker-col{display:flex;position:relative;flex:1;justify-content:center;height:100%;box-sizing:content-box;contain:content}.picker-opts{position:relative;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}@supports (inset-inline-start: 0){.picker-opt{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-opt{left:0}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{justify-content:flex-start}.picker-opts-right{justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;backface-visibility:hidden;pointer-events:auto}.picker-prefix,.picker-suffix,.picker-opt.picker-opt-selected{color:var(--ion-color-primary, #3880ff)}";

const PickerColumnCmp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionPickerColChange = createEvent(this, "ionPickerColChange", 7);
    this.optHeight = 0;
    this.rotateFactor = 0;
    this.scaleFactor = 1;
    this.velocity = 0;
    this.y = 0;
    this.noAnimate = true;
    this.col = undefined;
  }
  colChanged() {
    this.refresh();
  }
  async connectedCallback() {
    let pickerRotateFactor = 0;
    let pickerScaleFactor = 0.81;
    const mode = getIonMode(this);
    if (mode === 'ios') {
      pickerRotateFactor = -0.46;
      pickerScaleFactor = 1;
    }
    this.rotateFactor = pickerRotateFactor;
    this.scaleFactor = pickerScaleFactor;
    this.gesture = (await import('./index-e65e72c8.js')).createGesture({
      el: this.el,
      gestureName: 'picker-swipe',
      gesturePriority: 100,
      threshold: 0,
      passive: false,
      onStart: (ev) => this.onStart(ev),
      onMove: (ev) => this.onMove(ev),
      onEnd: (ev) => this.onEnd(ev),
    });
    this.gesture.enable();
    this.tmrId = setTimeout(() => {
      this.noAnimate = false;
      this.refresh(true);
    }, 250);
  }
  componentDidLoad() {
    const colEl = this.optsEl;
    if (colEl) {
      this.optHeight = colEl.firstElementChild ? colEl.firstElementChild.clientHeight : 0;
    }
    this.refresh();
  }
  disconnectedCallback() {
    if (this.rafId !== undefined)
      cancelAnimationFrame(this.rafId);
    if (this.tmrId)
      clearTimeout(this.tmrId);
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  emitColChange() {
    this.ionPickerColChange.emit(this.col);
  }
  setSelected(selectedIndex, duration) {
    const y = selectedIndex > -1 ? -(selectedIndex * this.optHeight) : 0;
    this.velocity = 0;
    if (this.rafId !== undefined)
      cancelAnimationFrame(this.rafId);
    this.update(y, duration, true);
    this.emitColChange();
  }
  update(y, duration, saveY) {
    if (!this.optsEl) {
      return;
    }
    let translateY = 0;
    let translateZ = 0;
    const { col, rotateFactor } = this;
    const selectedIndex = (col.selectedIndex = this.indexForY(-y));
    const durationStr = duration === 0 ? '' : duration + 'ms';
    const scaleStr = `scale(${this.scaleFactor})`;
    const children = this.optsEl.children;
    for (let i = 0; i < children.length; i++) {
      const button = children[i];
      const opt = col.options[i];
      const optOffset = i * this.optHeight + y;
      let transform = '';
      if (rotateFactor !== 0) {
        const rotateX = optOffset * rotateFactor;
        if (Math.abs(rotateX) <= 90) {
          translateY = 0;
          translateZ = 90;
          transform = `rotateX(${rotateX}deg) `;
        }
        else {
          translateY = -9999;
        }
      }
      else {
        translateZ = 0;
        translateY = optOffset;
      }
      const selected = selectedIndex === i;
      transform += `translate3d(0px,${translateY}px,${translateZ}px) `;
      if (this.scaleFactor !== 1 && !selected) {
        transform += scaleStr;
      }
      if (this.noAnimate) {
        opt.duration = 0;
        button.style.transitionDuration = '';
      }
      else if (duration !== opt.duration) {
        opt.duration = duration;
        button.style.transitionDuration = durationStr;
      }
      if (transform !== opt.transform) {
        opt.transform = transform;
      }
      button.style.transform = transform;
      opt.selected = selected;
      if (selected) {
        button.classList.add(PICKER_OPT_SELECTED);
      }
      else {
        button.classList.remove(PICKER_OPT_SELECTED);
      }
    }
    this.col.prevSelected = selectedIndex;
    if (saveY) {
      this.y = y;
    }
    if (this.lastIndex !== selectedIndex) {
      hapticSelectionChanged();
      this.lastIndex = selectedIndex;
    }
  }
  decelerate() {
    if (this.velocity !== 0) {
      this.velocity *= DECELERATION_FRICTION;
      this.velocity = this.velocity > 0 ? Math.max(this.velocity, 1) : Math.min(this.velocity, -1);
      let y = this.y + this.velocity;
      if (y > this.minY) {
        y = this.minY;
        this.velocity = 0;
      }
      else if (y < this.maxY) {
        y = this.maxY;
        this.velocity = 0;
      }
      this.update(y, 0, true);
      const notLockedIn = Math.round(y) % this.optHeight !== 0 || Math.abs(this.velocity) > 1;
      if (notLockedIn) {
        this.rafId = requestAnimationFrame(() => this.decelerate());
      }
      else {
        this.velocity = 0;
        this.emitColChange();
        hapticSelectionEnd();
      }
    }
    else if (this.y % this.optHeight !== 0) {
      const currentPos = Math.abs(this.y % this.optHeight);
      this.velocity = currentPos > this.optHeight / 2 ? 1 : -1;
      this.decelerate();
    }
  }
  indexForY(y) {
    return Math.min(Math.max(Math.abs(Math.round(y / this.optHeight)), 0), this.col.options.length - 1);
  }
  onStart(detail) {
    if (detail.event.cancelable) {
      detail.event.preventDefault();
    }
    detail.event.stopPropagation();
    hapticSelectionStart();
    if (this.rafId !== undefined)
      cancelAnimationFrame(this.rafId);
    const options = this.col.options;
    let minY = options.length - 1;
    let maxY = 0;
    for (let i = 0; i < options.length; i++) {
      if (!options[i].disabled) {
        minY = Math.min(minY, i);
        maxY = Math.max(maxY, i);
      }
    }
    this.minY = -(minY * this.optHeight);
    this.maxY = -(maxY * this.optHeight);
  }
  onMove(detail) {
    if (detail.event.cancelable) {
      detail.event.preventDefault();
    }
    detail.event.stopPropagation();
    let y = this.y + detail.deltaY;
    if (y > this.minY) {
      y = Math.pow(y, 0.8);
      this.bounceFrom = y;
    }
    else if (y < this.maxY) {
      y += Math.pow(this.maxY - y, 0.9);
      this.bounceFrom = y;
    }
    else {
      this.bounceFrom = 0;
    }
    this.update(y, 0, false);
  }
  onEnd(detail) {
    if (this.bounceFrom > 0) {
      this.update(this.minY, 100, true);
      this.emitColChange();
      return;
    }
    else if (this.bounceFrom < 0) {
      this.update(this.maxY, 100, true);
      this.emitColChange();
      return;
    }
    this.velocity = clamp(-MAX_PICKER_SPEED, detail.velocityY * 23, MAX_PICKER_SPEED);
    if (this.velocity === 0 && detail.deltaY === 0) {
      const opt = detail.event.target.closest('.picker-opt');
      if (opt === null || opt === void 0 ? void 0 : opt.hasAttribute('opt-index')) {
        this.setSelected(parseInt(opt.getAttribute('opt-index'), 10), TRANSITION_DURATION);
      }
    }
    else {
      this.y += detail.deltaY;
      if (Math.abs(detail.velocityY) < 0.05) {
        const isScrollingUp = detail.deltaY > 0;
        const optHeightFraction = (Math.abs(this.y) % this.optHeight) / this.optHeight;
        if (isScrollingUp && optHeightFraction > 0.5) {
          this.velocity = Math.abs(this.velocity) * -1;
        }
        else if (!isScrollingUp && optHeightFraction <= 0.5) {
          this.velocity = Math.abs(this.velocity);
        }
      }
      this.decelerate();
    }
  }
  refresh(forceRefresh) {
    var _a;
    let min = this.col.options.length - 1;
    let max = 0;
    const options = this.col.options;
    for (let i = 0; i < options.length; i++) {
      if (!options[i].disabled) {
        min = Math.min(min, i);
        max = Math.max(max, i);
      }
    }
    if (this.velocity !== 0) {
      return;
    }
    const selectedIndex = clamp(min, (_a = this.col.selectedIndex) !== null && _a !== void 0 ? _a : 0, max);
    if (this.col.prevSelected !== selectedIndex || forceRefresh) {
      const y = selectedIndex * this.optHeight * -1;
      this.velocity = 0;
      this.update(y, TRANSITION_DURATION, true);
    }
  }
  render() {
    const col = this.col;
    const mode = getIonMode(this);
    return (h(Host, { class: Object.assign({ [mode]: true, 'picker-col': true, 'picker-opts-left': this.col.align === 'left', 'picker-opts-right': this.col.align === 'right' }, getClassMap(col.cssClass)), style: {
        'max-width': this.col.columnWidth,
      } }, col.prefix && (h("div", { class: "picker-prefix", style: { width: col.prefixWidth } }, col.prefix)), h("div", { class: "picker-opts", style: { maxWidth: col.optionsWidth }, ref: (el) => (this.optsEl = el) }, col.options.map((o, index) => (h("button", { "aria-label": o.ariaLabel, class: { 'picker-opt': true, 'picker-opt-disabled': !!o.disabled }, "opt-index": index }, o.text)))), col.suffix && (h("div", { class: "picker-suffix", style: { width: col.suffixWidth } }, col.suffix))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "col": ["colChanged"]
  }; }
};
const PICKER_OPT_SELECTED = 'picker-opt-selected';
const DECELERATION_FRICTION = 0.97;
const MAX_PICKER_SPEED = 90;
const TRANSITION_DURATION = 150;
PickerColumnCmp.style = {
  ios: pickerColumnIosCss,
  md: pickerColumnMdCss
};

export { PickerColumnCmp as ion_picker_column };

//# sourceMappingURL=ion-picker-column.entry.js.map
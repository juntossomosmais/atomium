import { r as registerInstance, d as createEvent, i as forceUpdate, h, H as Host, e as getElement } from './index-a869d52d.js';
import { b as arrowBackSharp, o as closeCircle, p as closeSharp, s as searchOutline, q as searchSharp } from './index-3c3facbc.js';
import { c as config, g as getIonMode } from './ionic-global-4a637317.js';
import { m as debounceEvent, r as raf } from './helpers-937ea457.js';
import { i as isRTL } from './dir-81e2b9f7.js';
import { c as createColorClasses } from './theme-bc7eaa70.js';

const searchbarIosCss = ".sc-ion-searchbar-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:0.6;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);box-sizing:border-box}.ion-color.sc-ion-searchbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios,.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:inherit}.searchbar-search-icon.sc-ion-searchbar-ios{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-ios{display:block;position:relative;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;box-shadow:var(--box-shadow);box-sizing:border-box;appearance:none}.searchbar-input.sc-ion-searchbar-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-webkit-search-cancel-button,.searchbar-input.sc-ion-searchbar-ios::-ms-clear{display:none}.searchbar-cancel-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-ios>div.sc-ion-searchbar-ios{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);appearance:none}.searchbar-clear-button.sc-ion-searchbar-ios:focus{opacity:0.5}.searchbar-has-value.searchbar-should-show-clear.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios{display:block}.searchbar-disabled.sc-ion-searchbar-ios-h{cursor:default;opacity:0.4;pointer-events:none}.sc-ion-searchbar-ios-h{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.07);--border-radius:10px;--box-shadow:none;--cancel-button-color:var(--ion-color-primary, #3880ff);--clear-button-color:var(--ion-color-step-600, #666666);--color:var(--ion-text-color, #000);--icon-color:var(--ion-color-step-600, #666666);-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:12px;padding-bottom:12px;height:60px;contain:strict}.searchbar-input-container.sc-ion-searchbar-ios{height:36px}.searchbar-search-icon.sc-ion-searchbar-ios{-webkit-margin-start:calc(50% - 60px);margin-inline-start:calc(50% - 60px);top:0;position:absolute;width:22px;height:100%;contain:strict}@supports (inset-inline-start: 0){.searchbar-search-icon.sc-ion-searchbar-ios{inset-inline-start:5px}}@supports not (inset-inline-start: 0){.searchbar-search-icon.sc-ion-searchbar-ios{left:5px}[dir=rtl].sc-ion-searchbar-ios .searchbar-search-icon.sc-ion-searchbar-ios,[dir=rtl].sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,[dir=rtl] .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{left:unset;right:unset;right:5px}}.searchbar-input.sc-ion-searchbar-ios{-webkit-padding-start:28px;padding-inline-start:28px;-webkit-padding-end:28px;padding-inline-end:28px;padding-top:0;padding-bottom:0;height:100%;font-size:17px;font-weight:400;contain:strict}.searchbar-clear-button.sc-ion-searchbar-ios{top:0;background-position:center;position:absolute;width:30px;height:100%;border:0;background-color:transparent}@supports (inset-inline-start: 0){.searchbar-clear-button.sc-ion-searchbar-ios{inset-inline-end:0}}@supports not (inset-inline-start: 0){.searchbar-clear-button.sc-ion-searchbar-ios{right:0}[dir=rtl].sc-ion-searchbar-ios .searchbar-clear-button.sc-ion-searchbar-ios,[dir=rtl].sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios,[dir=rtl] .sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios{left:unset;right:unset;left:0}}.searchbar-clear-icon.sc-ion-searchbar-ios{width:18px;height:100%}.searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0;flex-shrink:0;background-color:transparent;font-size:16px}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{-webkit-margin-start:0;margin-inline-start:0}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{-webkit-padding-start:30px;padding-inline-start:30px}.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{display:block}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{transition:all 300ms ease}.searchbar-animated.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-animated.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{opacity:1;pointer-events:auto}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-margin-end:-100%;margin-inline-end:-100%;transform:translate3d(0,  0,  0);transition:all 300ms ease;opacity:0;pointer-events:none}.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios,.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{transition-duration:0ms}.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{color:var(--ion-color-base)}@media (any-hover: hover){.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios:hover{color:var(--ion-color-tint)}}ion-toolbar.sc-ion-searchbar-ios-h,ion-toolbar .sc-ion-searchbar-ios-h{padding-top:1px;padding-bottom:15px;height:52px}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color),ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color){color:inherit}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios{color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:currentColor;opacity:0.5}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios{background:rgba(var(--ion-color-contrast-rgb), 0.07);color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios{color:currentColor;opacity:0.5}";

const searchbarMdCss = ".sc-ion-searchbar-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:0.6;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);box-sizing:border-box}.ion-color.sc-ion-searchbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md,.ion-color.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,.ion-color.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{color:inherit}.searchbar-search-icon.sc-ion-searchbar-md{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-md{display:block;position:relative;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-md{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;box-shadow:var(--box-shadow);box-sizing:border-box;appearance:none}.searchbar-input.sc-ion-searchbar-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button,.searchbar-input.sc-ion-searchbar-md::-ms-clear{display:none}.searchbar-cancel-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-md>div.sc-ion-searchbar-md{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);appearance:none}.searchbar-clear-button.sc-ion-searchbar-md:focus{opacity:0.5}.searchbar-has-value.searchbar-should-show-clear.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{display:block}.searchbar-disabled.sc-ion-searchbar-md-h{cursor:default;opacity:0.4;pointer-events:none}.sc-ion-searchbar-md-h{--background:var(--ion-background-color, #fff);--border-radius:2px;--box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);--cancel-button-color:var(--ion-color-step-900, #1a1a1a);--clear-button-color:initial;--color:var(--ion-color-step-850, #262626);--icon-color:var(--ion-color-step-600, #666666);-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;background:inherit}.searchbar-search-icon.sc-ion-searchbar-md{top:11px;width:21px;height:21px}@supports (inset-inline-start: 0){.searchbar-search-icon.sc-ion-searchbar-md{inset-inline-start:16px}}@supports not (inset-inline-start: 0){.searchbar-search-icon.sc-ion-searchbar-md{left:16px}[dir=rtl].sc-ion-searchbar-md .searchbar-search-icon.sc-ion-searchbar-md,[dir=rtl].sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{left:unset;right:unset;right:16px}}.searchbar-cancel-button.sc-ion-searchbar-md{top:0;background-color:transparent;font-size:1.6em}@supports (inset-inline-start: 0){.searchbar-cancel-button.sc-ion-searchbar-md{inset-inline-start:5px}}@supports not (inset-inline-start: 0){.searchbar-cancel-button.sc-ion-searchbar-md{left:5px}[dir=rtl].sc-ion-searchbar-md .searchbar-cancel-button.sc-ion-searchbar-md,[dir=rtl].sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{left:unset;right:unset;right:5px}}.searchbar-search-icon.sc-ion-searchbar-md,.searchbar-cancel-button.sc-ion-searchbar-md{position:absolute}.searchbar-search-icon.ion-activated.sc-ion-searchbar-md,.searchbar-cancel-button.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-input.sc-ion-searchbar-md{-webkit-padding-start:55px;padding-inline-start:55px;-webkit-padding-end:55px;padding-inline-end:55px;padding-top:6px;padding-bottom:6px;background-position:left 8px center;height:auto;font-size:16px;font-weight:400;line-height:30px}[dir=rtl].sc-ion-searchbar-md .searchbar-input.sc-ion-searchbar-md,[dir=rtl].sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}.searchbar-clear-button.sc-ion-searchbar-md{top:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:absolute;height:100%;border:0;background-color:transparent}@supports (inset-inline-start: 0){.searchbar-clear-button.sc-ion-searchbar-md{inset-inline-end:13px}}@supports not (inset-inline-start: 0){.searchbar-clear-button.sc-ion-searchbar-md{right:13px}[dir=rtl].sc-ion-searchbar-md .searchbar-clear-button.sc-ion-searchbar-md,[dir=rtl].sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{left:unset;right:unset;left:13px}}.searchbar-clear-button.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-md{width:22px;height:100%}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,.searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md+.searchbar-search-icon.sc-ion-searchbar-md,.searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md+.searchbar-search-icon.sc-ion-searchbar-md{display:none}ion-toolbar.sc-ion-searchbar-md-h,ion-toolbar .sc-ion-searchbar-md-h{-webkit-padding-start:7px;padding-inline-start:7px;-webkit-padding-end:7px;padding-inline-end:7px;padding-top:3px;padding-bottom:3px}";

const Searchbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionInput = createEvent(this, "ionInput", 7);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionCancel = createEvent(this, "ionCancel", 7);
    this.ionClear = createEvent(this, "ionClear", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionStyle = createEvent(this, "ionStyle", 7);
    this.isCancelVisible = false;
    this.shouldAlignLeft = true;
    this.onClearInput = async (shouldFocus) => {
      this.ionClear.emit();
      return new Promise((resolve) => {
        setTimeout(() => {
          const value = this.getValue();
          if (value !== '') {
            this.value = '';
            this.emitInputChange();
            if (shouldFocus && !this.focused) {
              this.setFocus();
              this.focusedValue = value;
            }
          }
          resolve();
        }, 16 * 4);
      });
    };
    this.onCancelSearchbar = async (ev) => {
      if (ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      this.ionCancel.emit();
      const value = this.getValue();
      const focused = this.focused;
      await this.onClearInput();
      if (value && !focused) {
        this.emitValueChange(ev);
      }
      if (this.nativeInput) {
        this.nativeInput.blur();
      }
    };
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value;
      }
      this.emitInputChange(ev);
    };
    this.onChange = (ev) => {
      this.emitValueChange(ev);
    };
    this.onBlur = (ev) => {
      this.focused = false;
      this.ionBlur.emit();
      this.positionElements();
      if (this.focusedValue !== this.value) {
        this.emitValueChange(ev);
      }
      this.focusedValue = undefined;
    };
    this.onFocus = () => {
      this.focused = true;
      this.focusedValue = this.value;
      this.ionFocus.emit();
      this.positionElements();
    };
    this.focused = false;
    this.noAnimate = true;
    this.color = undefined;
    this.animated = false;
    this.autocomplete = 'off';
    this.autocorrect = 'off';
    this.cancelButtonIcon = config.get('backButtonIcon', arrowBackSharp);
    this.cancelButtonText = 'Cancel';
    this.clearIcon = undefined;
    this.debounce = undefined;
    this.disabled = false;
    this.inputmode = undefined;
    this.enterkeyhint = undefined;
    this.placeholder = 'Search';
    this.searchIcon = undefined;
    this.showCancelButton = 'never';
    this.showClearButton = 'always';
    this.spellcheck = false;
    this.type = 'search';
    this.value = '';
  }
  debounceChanged() {
    const { ionInput, debounce, originalIonInput } = this;
    this.ionInput = debounce === undefined ? originalIonInput !== null && originalIonInput !== void 0 ? originalIonInput : ionInput : debounceEvent(ionInput, debounce);
  }
  valueChanged() {
    const inputEl = this.nativeInput;
    const value = this.getValue();
    if (inputEl && inputEl.value !== value) {
      inputEl.value = value;
    }
  }
  showCancelButtonChanged() {
    requestAnimationFrame(() => {
      this.positionElements();
      forceUpdate(this);
    });
  }
  connectedCallback() {
    this.emitStyle();
  }
  componentDidLoad() {
    this.originalIonInput = this.ionInput;
    this.positionElements();
    this.debounceChanged();
    setTimeout(() => {
      this.noAnimate = false;
    }, 300);
  }
  emitStyle() {
    this.ionStyle.emit({
      searchbar: true,
    });
  }
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  emitValueChange(event) {
    const { value } = this;
    const newValue = value == null ? value : value.toString();
    this.focusedValue = newValue;
    this.ionChange.emit({ value: newValue, event });
  }
  emitInputChange(event) {
    const { value } = this;
    this.ionInput.emit({ value, event });
  }
  positionElements() {
    const value = this.getValue();
    const prevAlignLeft = this.shouldAlignLeft;
    const mode = getIonMode(this);
    const shouldAlignLeft = !this.animated || value.trim() !== '' || !!this.focused;
    this.shouldAlignLeft = shouldAlignLeft;
    if (mode !== 'ios') {
      return;
    }
    if (prevAlignLeft !== shouldAlignLeft) {
      this.positionPlaceholder();
    }
    if (this.animated) {
      this.positionCancelButton();
    }
  }
  positionPlaceholder() {
    const inputEl = this.nativeInput;
    if (!inputEl) {
      return;
    }
    const rtl = isRTL(this.el);
    const iconEl = (this.el.shadowRoot || this.el).querySelector('.searchbar-search-icon');
    if (this.shouldAlignLeft) {
      inputEl.removeAttribute('style');
      iconEl.removeAttribute('style');
    }
    else {
      const doc = document;
      const tempSpan = doc.createElement('span');
      tempSpan.innerText = this.placeholder || '';
      doc.body.appendChild(tempSpan);
      raf(() => {
        const textWidth = tempSpan.offsetWidth;
        tempSpan.remove();
        const inputLeft = 'calc(50% - ' + textWidth / 2 + 'px)';
        const iconLeft = 'calc(50% - ' + (textWidth / 2 + 30) + 'px)';
        if (rtl) {
          inputEl.style.paddingRight = inputLeft;
          iconEl.style.marginRight = iconLeft;
        }
        else {
          inputEl.style.paddingLeft = inputLeft;
          iconEl.style.marginLeft = iconLeft;
        }
      });
    }
  }
  positionCancelButton() {
    const rtl = isRTL(this.el);
    const cancelButton = (this.el.shadowRoot || this.el).querySelector('.searchbar-cancel-button');
    const shouldShowCancel = this.shouldShowCancelButton();
    if (cancelButton !== null && shouldShowCancel !== this.isCancelVisible) {
      const cancelStyle = cancelButton.style;
      this.isCancelVisible = shouldShowCancel;
      if (shouldShowCancel) {
        if (rtl) {
          cancelStyle.marginLeft = '0';
        }
        else {
          cancelStyle.marginRight = '0';
        }
      }
      else {
        const offset = cancelButton.offsetWidth;
        if (offset > 0) {
          if (rtl) {
            cancelStyle.marginLeft = -offset + 'px';
          }
          else {
            cancelStyle.marginRight = -offset + 'px';
          }
        }
      }
    }
  }
  getValue() {
    return this.value || '';
  }
  hasValue() {
    return this.getValue() !== '';
  }
  shouldShowCancelButton() {
    if (this.showCancelButton === 'never' || (this.showCancelButton === 'focus' && !this.focused)) {
      return false;
    }
    return true;
  }
  shouldShowClearButton() {
    if (this.showClearButton === 'never' || (this.showClearButton === 'focus' && !this.focused)) {
      return false;
    }
    return true;
  }
  render() {
    const { cancelButtonText } = this;
    const animated = this.animated && config.getBoolean('animated', true);
    const mode = getIonMode(this);
    const clearIcon = this.clearIcon || (mode === 'ios' ? closeCircle : closeSharp);
    const searchIcon = this.searchIcon || (mode === 'ios' ? searchOutline : searchSharp);
    const shouldShowCancelButton = this.shouldShowCancelButton();
    const cancelButton = this.showCancelButton !== 'never' && (h("button", { "aria-label": cancelButtonText, "aria-hidden": shouldShowCancelButton ? undefined : 'true', type: "button", tabIndex: mode === 'ios' && !shouldShowCancelButton ? -1 : undefined, onMouseDown: this.onCancelSearchbar, onTouchStart: this.onCancelSearchbar, class: "searchbar-cancel-button" }, h("div", { "aria-hidden": "true" }, mode === 'md' ? (h("ion-icon", { "aria-hidden": "true", mode: mode, icon: this.cancelButtonIcon, lazy: false })) : (cancelButtonText))));
    return (h(Host, { role: "search", "aria-disabled": this.disabled ? 'true' : null, class: createColorClasses(this.color, {
        [mode]: true,
        'searchbar-animated': animated,
        'searchbar-disabled': this.disabled,
        'searchbar-no-animate': animated && this.noAnimate,
        'searchbar-has-value': this.hasValue(),
        'searchbar-left-aligned': this.shouldAlignLeft,
        'searchbar-has-focus': this.focused,
        'searchbar-should-show-clear': this.shouldShowClearButton(),
        'searchbar-should-show-cancel': this.shouldShowCancelButton(),
      }) }, h("div", { class: "searchbar-input-container" }, h("input", { "aria-label": "search text", disabled: this.disabled, ref: (el) => (this.nativeInput = el), class: "searchbar-input", inputMode: this.inputmode, enterKeyHint: this.enterkeyhint, onInput: this.onInput, onChange: this.onChange, onBlur: this.onBlur, onFocus: this.onFocus, placeholder: this.placeholder, type: this.type, value: this.getValue(), autoComplete: this.autocomplete, autoCorrect: this.autocorrect, spellcheck: this.spellcheck }), mode === 'md' && cancelButton, h("ion-icon", { "aria-hidden": "true", mode: mode, icon: searchIcon, lazy: false, class: "searchbar-search-icon" }), h("button", { "aria-label": "reset", type: "button", "no-blur": true, class: "searchbar-clear-button", onPointerDown: (ev) => {
        ev.preventDefault();
      }, onClick: () => this.onClearInput(true) }, h("ion-icon", { "aria-hidden": "true", mode: mode, icon: clearIcon, lazy: false, class: "searchbar-clear-icon" }))), mode === 'ios' && cancelButton));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"],
    "value": ["valueChanged"],
    "showCancelButton": ["showCancelButtonChanged"]
  }; }
};
Searchbar.style = {
  ios: searchbarIosCss,
  md: searchbarMdCss
};

export { Searchbar as ion_searchbar };

//# sourceMappingURL=ion-searchbar.entry.js.map
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');
const helpers = require('./helpers-a70e7454.js');
const index$1 = require('./index-aabf0f95.js');
const theme = require('./theme-8b3c3d2a.js');
const data = require('./data-127bd962.js');

const iosDatetimeButtonCss = ":host{display:flex;align-items:center;justify-content:center}:host button{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;appearance:none;overflow:hidden}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}";

const mdDatetimeButtonCss = ":host{display:flex;align-items:center;justify-content:center}:host button{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;appearance:none;overflow:hidden}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}";

const DatetimeButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.datetimeEl = null;
    this.overlayEl = null;
    this.getParsedDateValues = (value) => {
      if (value === undefined || value === null) {
        return [];
      }
      if (Array.isArray(value)) {
        return value;
      }
      return [value];
    };
    this.setDateTimeText = () => {
      const { datetimeEl, datetimePresentation } = this;
      if (!datetimeEl) {
        return;
      }
      const { value, locale, hourCycle, preferWheel, multiple, titleSelectedDatesFormatter } = datetimeEl;
      const parsedValues = this.getParsedDateValues(value);
      const parsedDatetimes = data.parseDate(parsedValues.length > 0 ? parsedValues : [data.getToday()]);
      const firstParsedDatetime = parsedDatetimes[0];
      const use24Hour = data.is24Hour(locale, hourCycle);
      this.dateText = this.timeText = undefined;
      switch (datetimePresentation) {
        case 'date-time':
        case 'time-date':
          const dateText = data.getMonthDayAndYear(locale, firstParsedDatetime);
          const timeText = data.getLocalizedTime(locale, firstParsedDatetime, use24Hour);
          if (preferWheel) {
            this.dateText = `${dateText} ${timeText}`;
          }
          else {
            this.dateText = dateText;
            this.timeText = timeText;
          }
          break;
        case 'date':
          if (multiple && parsedValues.length !== 1) {
            let headerText = `${parsedValues.length} days`;
            if (titleSelectedDatesFormatter !== undefined) {
              try {
                headerText = titleSelectedDatesFormatter(parsedValues);
              }
              catch (e) {
                index$1.printIonError('Exception in provided `titleSelectedDatesFormatter`: ', e);
              }
            }
            this.dateText = headerText;
          }
          else {
            this.dateText = data.getMonthDayAndYear(locale, firstParsedDatetime);
          }
          break;
        case 'time':
          this.timeText = data.getLocalizedTime(locale, firstParsedDatetime, use24Hour);
          break;
        case 'month-year':
          this.dateText = data.getMonthAndYear(locale, firstParsedDatetime);
          break;
        case 'month':
          this.dateText = data.getLocalizedDateTime(locale, firstParsedDatetime, { month: 'long' });
          break;
        case 'year':
          this.dateText = data.getLocalizedDateTime(locale, firstParsedDatetime, { year: 'numeric' });
          break;
      }
    };
    this.waitForDatetimeChanges = async () => {
      const { datetimeEl } = this;
      if (!datetimeEl) {
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        helpers.addEventListener(datetimeEl, 'ionRender', resolve, { once: true });
      });
    };
    this.handleDateClick = async (ev) => {
      const { datetimeEl, datetimePresentation } = this;
      if (!datetimeEl) {
        return;
      }
      let needsPresentationChange = false;
      switch (datetimePresentation) {
        case 'date-time':
        case 'time-date':
          const needsChange = datetimeEl.presentation !== 'date';
          if (!datetimeEl.preferWheel && needsChange) {
            datetimeEl.presentation = 'date';
            needsPresentationChange = true;
          }
          break;
      }
      this.selectedButton = 'date';
      this.presentOverlay(ev, needsPresentationChange, this.dateTargetEl);
    };
    this.handleTimeClick = (ev) => {
      const { datetimeEl, datetimePresentation } = this;
      if (!datetimeEl) {
        return;
      }
      let needsPresentationChange = false;
      switch (datetimePresentation) {
        case 'date-time':
        case 'time-date':
          const needsChange = datetimeEl.presentation !== 'time';
          if (needsChange) {
            datetimeEl.presentation = 'time';
            needsPresentationChange = true;
          }
          break;
      }
      this.selectedButton = 'time';
      this.presentOverlay(ev, needsPresentationChange, this.timeTargetEl);
    };
    this.presentOverlay = async (ev, needsPresentationChange, triggerEl) => {
      const { overlayEl } = this;
      if (!overlayEl) {
        return;
      }
      if (overlayEl.tagName === 'ION-POPOVER') {
        if (needsPresentationChange) {
          await this.waitForDatetimeChanges();
        }
        overlayEl.present(Object.assign(Object.assign({}, ev), { detail: {
            ionShadowTarget: triggerEl,
          } }));
      }
      else {
        overlayEl.present();
      }
    };
    this.datetimePresentation = 'date-time';
    this.dateText = undefined;
    this.timeText = undefined;
    this.datetimeActive = false;
    this.selectedButton = undefined;
    this.color = 'primary';
    this.disabled = false;
    this.datetime = undefined;
  }
  async componentWillLoad() {
    const { datetime } = this;
    if (!datetime) {
      index$1.printIonError('An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.', this.el);
      return;
    }
    const datetimeEl = (this.datetimeEl = document.getElementById(datetime));
    if (!datetimeEl) {
      index$1.printIonError(`No ion-datetime instance found for ID '${datetime}'.`, this.el);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      const ev = entries[0];
      this.datetimeActive = ev.isIntersecting;
    }, {
      threshold: 0.01,
    });
    io.observe(datetimeEl);
    const overlayEl = (this.overlayEl = datetimeEl.closest('ion-modal, ion-popover'));
    if (overlayEl) {
      overlayEl.classList.add('ion-datetime-button-overlay');
    }
    helpers.componentOnReady(datetimeEl, () => {
      const datetimePresentation = (this.datetimePresentation = datetimeEl.presentation || 'date-time');
      this.setDateTimeText();
      helpers.addEventListener(datetimeEl, 'ionValueChange', this.setDateTimeText);
      switch (datetimePresentation) {
        case 'date-time':
        case 'date':
        case 'month-year':
        case 'month':
        case 'year':
          this.selectedButton = 'date';
          break;
        case 'time-date':
        case 'time':
          this.selectedButton = 'time';
          break;
      }
    });
  }
  render() {
    const { color, dateText, timeText, selectedButton, datetimeActive, disabled } = this;
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { class: theme.createColorClasses(color, {
        [mode]: true,
        [`${selectedButton}-active`]: datetimeActive,
        ['datetime-button-disabled']: disabled,
      }) }, dateText && (index.h("button", { class: "ion-activatable", id: "date-button", "aria-expanded": datetimeActive ? 'true' : 'false', onClick: this.handleDateClick, disabled: disabled, part: "native", ref: (el) => (this.dateTargetEl = el) }, index.h("slot", { name: "date-target" }, dateText), mode === 'md' && index.h("ion-ripple-effect", null))), timeText && (index.h("button", { class: "ion-activatable", id: "time-button", "aria-expanded": datetimeActive ? 'true' : 'false', onClick: this.handleTimeClick, disabled: disabled, part: "native", ref: (el) => (this.timeTargetEl = el) }, index.h("slot", { name: "time-target" }, timeText), mode === 'md' && index.h("ion-ripple-effect", null)))));
  }
  get el() { return index.getElement(this); }
};
DatetimeButton.style = {
  ios: iosDatetimeButtonCss,
  md: mdDatetimeButtonCss
};

exports.ion_datetime_button = DatetimeButton;

//# sourceMappingURL=ion-datetime-button.cjs.entry.js.map
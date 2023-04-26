'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index$1 = require('./index-713eb84a.js');
const index$2 = require('./index-4e276396.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');
const focusVisible = require('./focus-visible-7764c6ed.js');
const helpers = require('./helpers-a70e7454.js');
const index = require('./index-aabf0f95.js');
const dir = require('./dir-d210cd33.js');
const theme = require('./theme-8b3c3d2a.js');
const data = require('./data-127bd962.js');

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const isYearDisabled = (refYear, minParts, maxParts) => {
  if (minParts && minParts.year > refYear) {
    return true;
  }
  if (maxParts && maxParts.year < refYear) {
    return true;
  }
  return false;
};
/**
 * Returns true if a given day should
 * not be interactive according to its value,
 * or the max/min dates.
 */
const isDayDisabled = (refParts, minParts, maxParts, dayValues) => {
  /**
   * If this is a filler date (i.e. padding)
   * then the date is disabled.
   */
  if (refParts.day === null) {
    return true;
  }
  /**
   * If user passed in a list of acceptable day values
   * check to make sure that the date we are looking
   * at is in this array.
   */
  if (dayValues !== undefined && !dayValues.includes(refParts.day)) {
    return true;
  }
  /**
   * Given a min date, perform the following
   * checks. If any of them are true, then the
   * day should be disabled:
   * 1. Is the current year < the min allowed year?
   * 2. Is the current year === min allowed year,
   * but the current month < the min allowed month?
   * 3. Is the current year === min allowed year, the
   * current month === min allow month, but the current
   * day < the min allowed day?
   */
  if (minParts && data.isBefore(refParts, minParts)) {
    return true;
  }
  /**
   * Given a max date, perform the following
   * checks. If any of them are true, then the
   * day should be disabled:
   * 1. Is the current year > the max allowed year?
   * 2. Is the current year === max allowed year,
   * but the current month > the max allowed month?
   * 3. Is the current year === max allowed year, the
   * current month === max allow month, but the current
   * day > the max allowed day?
   */
  if (maxParts && data.isAfter(refParts, maxParts)) {
    return true;
  }
  /**
   * If none of these checks
   * passed then the date should
   * be interactive.
   */
  return false;
};
/**
 * Given a locale, a date, the selected date(s), and today's date,
 * generate the state for a given calendar day button.
 */
const getCalendarDayState = (locale, refParts, activeParts, todayParts, minParts, maxParts, dayValues) => {
  /**
   * activeParts signals what day(s) are currently selected in the datetime.
   * If multiple="true", this will be an array, but the logic in this util
   * is the same whether we have one selected day or many because we're only
   * calculating the state for one button. So, we treat a single activeParts value
   * the same as an array of length one.
   */
  const activePartsArray = Array.isArray(activeParts) ? activeParts : [activeParts];
  /**
   * The day button is active if it is selected, or in other words, if refParts
   * matches at least one selected date.
   */
  const isActive = activePartsArray.find((parts) => data.isSameDay(refParts, parts)) !== undefined;
  const isToday = data.isSameDay(refParts, todayParts);
  const disabled = isDayDisabled(refParts, minParts, maxParts, dayValues);
  /**
   * Note that we always return one object regardless of whether activeParts
   * was an array, since we pare down to one value for isActive.
   */
  return {
    disabled,
    isActive,
    isToday,
    ariaSelected: isActive ? 'true' : null,
    ariaLabel: data.generateDayAriaLabel(locale, isToday, refParts),
    text: refParts.day != null ? data.getDay(locale, refParts) : null,
  };
};
/**
 * Returns `true` if the month is disabled given the
 * current date value and min/max date constraints.
 */
const isMonthDisabled = (refParts, { minParts, maxParts, }) => {
  // If the year is disabled then the month is disabled.
  if (isYearDisabled(refParts.year, minParts, maxParts)) {
    return true;
  }
  // If the date value is before the min date, then the month is disabled.
  // If the date value is after the max date, then the month is disabled.
  if ((minParts && data.isBefore(refParts, minParts)) || (maxParts && data.isAfter(refParts, maxParts))) {
    return true;
  }
  return false;
};
/**
 * Given a working date, an optional minimum date range,
 * and an optional maximum date range; determine if the
 * previous navigation button is disabled.
 */
const isPrevMonthDisabled = (refParts, minParts, maxParts) => {
  const prevMonth = Object.assign(Object.assign({}, data.getPreviousMonth(refParts)), { day: null });
  return isMonthDisabled(prevMonth, {
    minParts,
    maxParts,
  });
};
/**
 * Given a working date and a maximum date range,
 * determine if the next navigation button is disabled.
 */
const isNextMonthDisabled = (refParts, maxParts) => {
  const nextMonth = Object.assign(Object.assign({}, data.getNextMonth(refParts)), { day: null });
  return isMonthDisabled(nextMonth, {
    maxParts,
  });
};
/**
 * Given the value of the highlightedDates property
 * and an ISO string, return the styles to use for
 * that date, or undefined if none are found.
 */
const getHighlightStyles = (highlightedDates, dateIsoString, el) => {
  if (Array.isArray(highlightedDates)) {
    const dateStringWithoutTime = dateIsoString.split('T')[0];
    const matchingHighlight = highlightedDates.find((hd) => hd.date === dateStringWithoutTime);
    if (matchingHighlight) {
      return {
        textColor: matchingHighlight.textColor,
        backgroundColor: matchingHighlight.backgroundColor,
      };
    }
  }
  else {
    /**
     * Wrap in a try-catch to prevent exceptions in the user's function
     * from interrupting the calendar's rendering.
     */
    try {
      return highlightedDates(dateIsoString);
    }
    catch (e) {
      index.printIonError('Exception thrown from provided `highlightedDates` callback. Please check your function and try again.', el, e);
    }
  }
  return undefined;
};

const datetimeIosCss = ":host{display:flex;flex-flow:column;background:var(--background);overflow:hidden}ion-picker-column-internal{min-width:26px}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{order:3;text-align:end}:host .wheel-order-year-first .month-column{order:2;text-align:end}:host .wheel-order-year-first .year-column{order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:flex;flex:1 1 auto;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:flex}@supports (background: -webkit-named-image(apple-pay-logo-black)) and (not (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{position:absolute;visibility:hidden;pointer-events:none}@supports (inset-inline-start: 0){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{inset-inline-start:-99999px}}@supports not (inset-inline-start: 0){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{left:-99999px}:host-context([dir=rtl]):host(.show-month-and-year) .calendar-next-prev,:host-context([dir=rtl]).show-month-and-year .calendar-next-prev,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-days-of-week,:host-context([dir=rtl]).show-month-and-year .calendar-days-of-week,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-body,:host-context([dir=rtl]).show-month-and-year .calendar-body,:host-context([dir=rtl]):host(.show-month-and-year) .datetime-time,:host-context([dir=rtl]).show-month-and-year .datetime-time{left:unset;right:unset;right:-99999px}}}@supports (not (background: -webkit-named-image(apple-pay-logo-black))) or ((background: -webkit-named-image(apple-pay-logo-black)) and (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-readonly),:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled){opacity:0.4}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:flex;justify-content:space-between}:host .calendar-action-buttons{display:flex;justify-content:space-between}:host .calendar-action-buttons ion-item,:host .calendar-action-buttons ion-button{--background:translucent}:host .calendar-action-buttons ion-item ion-label{display:flex;align-items:center}:host .calendar-action-buttons ion-item ion-icon{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}:host .calendar-body{display:flex;flex-grow:1;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{scroll-snap-align:start;scroll-snap-stop:always;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr)}:host .calendar-day{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:0px;margin-bottom:0px;display:flex;position:relative;align-items:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;font-family:var(--ion-font-family, inherit);cursor:pointer;appearance:none;z-index:0}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}.calendar-day-highlight{border-radius:32px;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:32px;height:32px;z-index:-1}:host .datetime-time{display:flex;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:flex;align-items:center}:host .time-body{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;display:flex;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;appearance:none}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons ion-item{--color:var(--ion-color-base)}:host{--background:var(--ion-color-light, #ffffff);--background-rgb:var(--ion-color-light-rgb);--title-color:var(--ion-color-step-600, #666666)}:host(.datetime-presentation-date-time:not(.datetime-prefer-wheel)),:host(.datetime-presentation-time-date:not(.datetime-prefer-wheel)),:host(.datetime-presentation-date:not(.datetime-prefer-wheel)){min-height:350px}:host .datetime-header{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:16px;padding-bottom:16px;border-bottom:0.55px solid var(--ion-color-step-200, #cccccc);font-size:14px}:host .datetime-header .datetime-title{color:var(--title-color)}:host .datetime-header .datetime-selected-date{margin-top:10px}:host .calendar-action-buttons ion-item{--padding-start:16px;--background-hover:transparent;--background-activated:transparent;font-size:16px;font-weight:600}:host .calendar-action-buttons ion-item ion-icon,:host .calendar-action-buttons ion-buttons ion-button{color:var(--ion-color-base)}:host .calendar-action-buttons ion-buttons{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:0}:host .calendar-action-buttons ion-buttons ion-button{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host .calendar-days-of-week{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0;color:var(--ion-color-step-300, #b3b3b3);font-size:12px;font-weight:600;line-height:24px;text-transform:uppercase}:host .calendar-body .calendar-month .calendar-month-grid{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;height:calc(100% - 16px)}:host .calendar-day{font-size:20px}.calendar-day:focus .calendar-day-highlight,.calendar-day.calendar-day-active .calendar-day-highlight{opacity:0.2}.calendar-day.calendar-day-active .calendar-day-highlight{background:var(--ion-color-base)}.calendar-day:focus .calendar-day-highlight{background:var(--ion-color-base) !important}:host .calendar-day.calendar-day-today{color:var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-base);font-weight:600}:host .calendar-day.calendar-day-today.calendar-day-active{color:var(--ion-color-contrast)}.calendar-day.calendar-day-today.calendar-day-active .calendar-day-highlight{background:var(--ion-color-base);opacity:1}:host .datetime-time{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:16px;font-size:16px}:host .datetime-time .time-header{font-weight:600}:host .datetime-buttons{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;border-top:0.55px solid var(--ion-color-step-200, #cccccc)}:host .datetime-buttons ::slotted(ion-buttons),:host .datetime-buttons ion-buttons{display:flex;align-items:center;justify-content:space-between}:host .datetime-action-buttons{width:100%}";

const datetimeMdCss = ":host{display:flex;flex-flow:column;background:var(--background);overflow:hidden}ion-picker-column-internal{min-width:26px}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{order:3;text-align:end}:host .wheel-order-year-first .month-column{order:2;text-align:end}:host .wheel-order-year-first .year-column{order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:flex;flex:1 1 auto;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:flex}@supports (background: -webkit-named-image(apple-pay-logo-black)) and (not (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{position:absolute;visibility:hidden;pointer-events:none}@supports (inset-inline-start: 0){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{inset-inline-start:-99999px}}@supports not (inset-inline-start: 0){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{left:-99999px}:host-context([dir=rtl]):host(.show-month-and-year) .calendar-next-prev,:host-context([dir=rtl]).show-month-and-year .calendar-next-prev,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-days-of-week,:host-context([dir=rtl]).show-month-and-year .calendar-days-of-week,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-body,:host-context([dir=rtl]).show-month-and-year .calendar-body,:host-context([dir=rtl]):host(.show-month-and-year) .datetime-time,:host-context([dir=rtl]).show-month-and-year .datetime-time{left:unset;right:unset;right:-99999px}}}@supports (not (background: -webkit-named-image(apple-pay-logo-black))) or ((background: -webkit-named-image(apple-pay-logo-black)) and (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-readonly),:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled){opacity:0.4}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:flex;justify-content:space-between}:host .calendar-action-buttons{display:flex;justify-content:space-between}:host .calendar-action-buttons ion-item,:host .calendar-action-buttons ion-button{--background:translucent}:host .calendar-action-buttons ion-item ion-label{display:flex;align-items:center}:host .calendar-action-buttons ion-item ion-icon{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}:host .calendar-body{display:flex;flex-grow:1;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{scroll-snap-align:start;scroll-snap-stop:always;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr)}:host .calendar-day{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:0px;margin-bottom:0px;display:flex;position:relative;align-items:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;font-family:var(--ion-font-family, inherit);cursor:pointer;appearance:none;z-index:0}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}.calendar-day-highlight{border-radius:32px;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:32px;height:32px;z-index:-1}:host .datetime-time{display:flex;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:flex;align-items:center}:host .time-body{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;display:flex;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;appearance:none}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons ion-item{--color:var(--ion-color-base)}:host{--background:var(--ion-color-step-100, #ffffff);--title-color:var(--ion-color-contrast)}:host .datetime-header{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:20px;background:var(--ion-color-base);color:var(--title-color)}:host .datetime-header .datetime-title{font-size:12px;text-transform:uppercase}:host .datetime-header .datetime-selected-date{margin-top:30px;font-size:34px}:host .datetime-calendar .calendar-action-buttons ion-item{--padding-start:20px}:host .calendar-action-buttons ion-item,:host .calendar-action-buttons ion-button{color:var(--ion-color-step-650, #595959)}:host .calendar-days-of-week{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:0px;padding-bottom:0px;color:var(--ion-color-step-500, gray);font-size:14px;line-height:36px}:host .calendar-body .calendar-month .calendar-month-grid{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:4px;padding-bottom:4px;grid-template-rows:repeat(6, 1fr)}:host .calendar-day{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0;padding-inline-end:0;padding-top:13px;padding-bottom:13px;font-size:14px}.calendar-day:focus .calendar-day-highlight{background:rgba(var(--ion-color-base-rgb), 0.2);box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2)}:host .calendar-day.calendar-day-today{color:var(--ion-color-base)}.calendar-day.calendar-day-today .calendar-day-highlight{border:1px solid var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-contrast)}.calendar-day.calendar-day-active .calendar-day-highlight{border:1px solid var(--ion-color-base);background:var(--ion-color-base)}:host .datetime-time{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:8px}:host .time-header{color:var(--ion-color-step-650, #595959)}:host(.datetime-presentation-month) .datetime-year,:host(.datetime-presentation-year) .datetime-year,:host(.datetime-presentation-month-year) .datetime-year{margin-top:20px;margin-bottom:20px}:host .datetime-buttons{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:10px;padding-bottom:10px;display:flex;align-items:center;justify-content:flex-end}:host .datetime-view-buttons ion-button{color:var(--ion-color-step-800, #333333)}";

const Datetime = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.ionCancel = index$1.createEvent(this, "ionCancel", 7);
    this.ionChange = index$1.createEvent(this, "ionChange", 7);
    this.ionValueChange = index$1.createEvent(this, "ionValueChange", 7);
    this.ionFocus = index$1.createEvent(this, "ionFocus", 7);
    this.ionBlur = index$1.createEvent(this, "ionBlur", 7);
    this.ionStyle = index$1.createEvent(this, "ionStyle", 7);
    this.ionRender = index$1.createEvent(this, "ionRender", 7);
    this.inputId = `ion-dt-${datetimeIds++}`;
    this.prevPresentation = null;
    this.activePartsClone = [];
    this.warnIfIncorrectValueUsage = () => {
      const { multiple, value } = this;
      if (!multiple && Array.isArray(value)) {
        index.printIonWarning(`ion-datetime was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".

  Value Passed: [${value.map((v) => `'${v}'`).join(', ')}]
`, this.el);
      }
    };
    this.setValue = (value) => {
      this.value = value;
      this.ionChange.emit({ value });
    };
    this.getActivePartsWithFallback = () => {
      var _a;
      const { defaultParts } = this;
      return (_a = this.getActivePart()) !== null && _a !== void 0 ? _a : defaultParts;
    };
    this.getActivePart = () => {
      const { activePartsClone } = this;
      return Array.isArray(activePartsClone) ? activePartsClone[0] : activePartsClone;
    };
    this.closeParentOverlay = () => {
      const popoverOrModal = this.el.closest('ion-modal, ion-popover');
      if (popoverOrModal) {
        popoverOrModal.dismiss();
      }
    };
    this.setWorkingParts = (parts) => {
      this.workingParts = Object.assign({}, parts);
    };
    this.setActiveParts = (parts, removeDate = false) => {
      const { multiple, minParts, maxParts, activePartsClone } = this;
      const validatedParts = data.validateParts(parts, minParts, maxParts);
      this.setWorkingParts(validatedParts);
      if (multiple) {
        const activePartsArray = Array.isArray(activePartsClone) ? activePartsClone : [activePartsClone];
        if (removeDate) {
          this.activeParts = activePartsArray.filter((p) => !data.isSameDay(p, validatedParts));
        }
        else {
          this.activeParts = [...activePartsArray, validatedParts];
        }
      }
      else {
        this.activeParts = Object.assign({}, validatedParts);
      }
      const hasSlottedButtons = this.el.querySelector('[slot="buttons"]') !== null;
      if (hasSlottedButtons || this.showDefaultButtons) {
        return;
      }
      this.confirm();
    };
    this.initializeKeyboardListeners = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const root = this.el.shadowRoot;
      const currentMonth = calendarBodyRef.querySelector('.calendar-month:nth-of-type(2)');
      const checkCalendarBodyFocus = (ev) => {
        var _a;
        const record = ev[0];
        if (((_a = record.oldValue) === null || _a === void 0 ? void 0 : _a.includes('ion-focused')) || !calendarBodyRef.classList.contains('ion-focused')) {
          return;
        }
        this.focusWorkingDay(currentMonth);
      };
      const mo = new MutationObserver(checkCalendarBodyFocus);
      mo.observe(calendarBodyRef, { attributeFilter: ['class'], attributeOldValue: true });
      this.destroyKeyboardMO = () => {
        mo === null || mo === void 0 ? void 0 : mo.disconnect();
      };
      calendarBodyRef.addEventListener('keydown', (ev) => {
        const activeElement = root.activeElement;
        if (!activeElement || !activeElement.classList.contains('calendar-day')) {
          return;
        }
        const parts = data.getPartsFromCalendarDay(activeElement);
        let partsToFocus;
        switch (ev.key) {
          case 'ArrowDown':
            ev.preventDefault();
            partsToFocus = data.getNextWeek(parts);
            break;
          case 'ArrowUp':
            ev.preventDefault();
            partsToFocus = data.getPreviousWeek(parts);
            break;
          case 'ArrowRight':
            ev.preventDefault();
            partsToFocus = data.getNextDay(parts);
            break;
          case 'ArrowLeft':
            ev.preventDefault();
            partsToFocus = data.getPreviousDay(parts);
            break;
          case 'Home':
            ev.preventDefault();
            partsToFocus = data.getStartOfWeek(parts);
            break;
          case 'End':
            ev.preventDefault();
            partsToFocus = data.getEndOfWeek(parts);
            break;
          case 'PageUp':
            ev.preventDefault();
            partsToFocus = ev.shiftKey ? data.getPreviousYear(parts) : data.getPreviousMonth(parts);
            break;
          case 'PageDown':
            ev.preventDefault();
            partsToFocus = ev.shiftKey ? data.getNextYear(parts) : data.getNextMonth(parts);
            break;
          default:
            return;
        }
        if (isDayDisabled(partsToFocus, this.minParts, this.maxParts)) {
          return;
        }
        this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), partsToFocus));
        requestAnimationFrame(() => this.focusWorkingDay(currentMonth));
      });
    };
    this.focusWorkingDay = (currentMonth) => {
      const padding = currentMonth.querySelectorAll('.calendar-day-padding');
      const { day } = this.workingParts;
      if (day === null) {
        return;
      }
      const dayEl = currentMonth.querySelector(`.calendar-day:nth-of-type(${padding.length + day})`);
      if (dayEl) {
        dayEl.focus();
      }
    };
    this.processMinParts = () => {
      const { min, defaultParts } = this;
      if (min === undefined) {
        this.minParts = undefined;
        return;
      }
      this.minParts = data.parseMinParts(min, defaultParts);
    };
    this.processMaxParts = () => {
      const { max, defaultParts } = this;
      if (max === undefined) {
        this.maxParts = undefined;
        return;
      }
      this.maxParts = data.parseMaxParts(max, defaultParts);
    };
    this.initializeCalendarListener = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const months = calendarBodyRef.querySelectorAll('.calendar-month');
      const startMonth = months[0];
      const workingMonth = months[1];
      const endMonth = months[2];
      const mode = ionicGlobal.getIonMode(this);
      const needsiOSRubberBandFix = mode === 'ios' && typeof navigator !== 'undefined' && navigator.maxTouchPoints > 1;
      index$1.writeTask(() => {
        calendarBodyRef.scrollLeft = startMonth.clientWidth * (dir.isRTL(this.el) ? -1 : 1);
        const getChangedMonth = (parts) => {
          const box = calendarBodyRef.getBoundingClientRect();
          const root = this.el.shadowRoot;
          const elementAtCenter = root.elementFromPoint(box.x + box.width / 2, box.y + box.height / 2);
          if (!elementAtCenter)
            return;
          const month = elementAtCenter.closest('.calendar-month');
          if (!month)
            return;
          const monthBox = month.getBoundingClientRect();
          if (Math.abs(monthBox.x - box.x) > 2)
            return;
          if (month === startMonth) {
            return data.getPreviousMonth(parts);
          }
          else if (month === endMonth) {
            return data.getNextMonth(parts);
          }
          else {
            return;
          }
        };
        const updateActiveMonth = () => {
          if (needsiOSRubberBandFix) {
            calendarBodyRef.style.removeProperty('pointer-events');
            appliediOSRubberBandFix = false;
          }
          const newDate = getChangedMonth(this.workingParts);
          if (!newDate)
            return;
          const { month, day, year } = newDate;
          if (isMonthDisabled({ month, year, day: null }, {
            minParts: Object.assign(Object.assign({}, this.minParts), { day: null }),
            maxParts: Object.assign(Object.assign({}, this.maxParts), { day: null }),
          })) {
            return;
          }
          calendarBodyRef.style.setProperty('overflow', 'hidden');
          index$1.writeTask(() => {
            this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), { month, day: day, year }));
            calendarBodyRef.scrollLeft = workingMonth.clientWidth * (dir.isRTL(this.el) ? -1 : 1);
            calendarBodyRef.style.removeProperty('overflow');
          });
        };
        let scrollTimeout;
        let appliediOSRubberBandFix = false;
        const scrollCallback = () => {
          if (scrollTimeout) {
            clearTimeout(scrollTimeout);
          }
          if (!appliediOSRubberBandFix && needsiOSRubberBandFix) {
            calendarBodyRef.style.setProperty('pointer-events', 'none');
            appliediOSRubberBandFix = true;
          }
          scrollTimeout = setTimeout(updateActiveMonth, 50);
        };
        calendarBodyRef.addEventListener('scroll', scrollCallback);
        this.destroyCalendarListener = () => {
          calendarBodyRef.removeEventListener('scroll', scrollCallback);
        };
      });
    };
    this.destroyInteractionListeners = () => {
      const { destroyCalendarListener, destroyKeyboardMO } = this;
      if (destroyCalendarListener !== undefined) {
        destroyCalendarListener();
      }
      if (destroyKeyboardMO !== undefined) {
        destroyKeyboardMO();
      }
    };
    this.processValue = (value) => {
      const hasValue = value !== null && value !== undefined;
      const valueToProcess = hasValue ? data.parseDate(value) : this.defaultParts;
      const { minParts, maxParts } = this;
      this.warnIfIncorrectValueUsage();
      if (hasValue) {
        data.warnIfValueOutOfBounds(valueToProcess, minParts, maxParts);
      }
      const singleValue = Array.isArray(valueToProcess) ? valueToProcess[0] : valueToProcess;
      const { month, day, year, hour, minute } = data.clampDate(singleValue, minParts, maxParts);
      const ampm = data.parseAmPm(hour);
      this.setWorkingParts({
        month,
        day,
        year,
        hour,
        minute,
        ampm,
      });
      if (hasValue) {
        if (Array.isArray(valueToProcess)) {
          this.activeParts = [...valueToProcess];
        }
        else {
          this.activeParts = {
            month,
            day,
            year,
            hour,
            minute,
            ampm,
          };
        }
      }
      else {
        this.activeParts = [];
      }
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.hasValue = () => {
      return this.value != null;
    };
    this.nextMonth = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const nextMonth = calendarBodyRef.querySelector('.calendar-month:last-of-type');
      if (!nextMonth) {
        return;
      }
      const left = nextMonth.offsetWidth * 2;
      calendarBodyRef.scrollTo({
        top: 0,
        left: left * (dir.isRTL(this.el) ? -1 : 1),
        behavior: 'smooth',
      });
    };
    this.prevMonth = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const prevMonth = calendarBodyRef.querySelector('.calendar-month:first-of-type');
      if (!prevMonth) {
        return;
      }
      calendarBodyRef.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
    this.toggleMonthAndYearView = () => {
      this.showMonthAndYear = !this.showMonthAndYear;
    };
    this.showMonthAndYear = false;
    this.activeParts = [];
    this.workingParts = {
      month: 5,
      day: 28,
      year: 2021,
      hour: 13,
      minute: 52,
      ampm: 'pm',
    };
    this.isPresented = false;
    this.isTimePopoverOpen = false;
    this.color = 'primary';
    this.name = this.inputId;
    this.disabled = false;
    this.readonly = false;
    this.isDateEnabled = undefined;
    this.min = undefined;
    this.max = undefined;
    this.presentation = 'date-time';
    this.cancelText = 'Cancel';
    this.doneText = 'Done';
    this.clearText = 'Clear';
    this.yearValues = undefined;
    this.monthValues = undefined;
    this.dayValues = undefined;
    this.hourValues = undefined;
    this.minuteValues = undefined;
    this.locale = 'default';
    this.firstDayOfWeek = 0;
    this.titleSelectedDatesFormatter = undefined;
    this.multiple = false;
    this.highlightedDates = undefined;
    this.value = undefined;
    this.showDefaultTitle = false;
    this.showDefaultButtons = false;
    this.showClearButton = false;
    this.showDefaultTimeLabel = true;
    this.hourCycle = undefined;
    this.size = 'fixed';
    this.preferWheel = false;
  }
  disabledChanged() {
    this.emitStyle();
  }
  minChanged() {
    this.processMinParts();
  }
  maxChanged() {
    this.processMaxParts();
  }
  yearValuesChanged() {
    this.parsedYearValues = data.convertToArrayOfNumbers(this.yearValues);
  }
  monthValuesChanged() {
    this.parsedMonthValues = data.convertToArrayOfNumbers(this.monthValues);
  }
  dayValuesChanged() {
    this.parsedDayValues = data.convertToArrayOfNumbers(this.dayValues);
  }
  hourValuesChanged() {
    this.parsedHourValues = data.convertToArrayOfNumbers(this.hourValues);
  }
  minuteValuesChanged() {
    this.parsedMinuteValues = data.convertToArrayOfNumbers(this.minuteValues);
  }
  activePartsChanged() {
    this.activePartsClone = this.activeParts;
  }
  valueChanged() {
    const { value, minParts, maxParts, workingParts } = this;
    if (this.hasValue()) {
      this.warnIfIncorrectValueUsage();
      const valueDateParts = data.parseDate(value);
      if (valueDateParts) {
        data.warnIfValueOutOfBounds(valueDateParts, minParts, maxParts);
        if (Array.isArray(valueDateParts)) {
          this.activePartsClone = [...valueDateParts];
        }
        else {
          const { month, day, year, hour, minute } = valueDateParts;
          const ampm = hour != null ? (hour >= 12 ? 'pm' : 'am') : undefined;
          this.activePartsClone = Object.assign(Object.assign({}, this.activeParts), { month,
            day,
            year,
            hour,
            minute,
            ampm });
          this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { ampm }));
        }
      }
      else {
        index.printIonWarning(`Unable to parse date string: ${value}. Please provide a valid ISO 8601 datetime string.`);
      }
    }
    this.emitStyle();
    this.ionValueChange.emit({ value });
  }
  async confirm(closeOverlay = false) {
    const { isCalendarPicker, activeParts } = this;
    if (activeParts !== undefined || !isCalendarPicker) {
      const activePartsIsArray = Array.isArray(activeParts);
      if (activePartsIsArray && activeParts.length === 0) {
        this.setValue(undefined);
      }
      else {
        this.setValue(data.convertDataToISO(activeParts));
      }
    }
    if (closeOverlay) {
      this.closeParentOverlay();
    }
  }
  async reset(startDate) {
    this.processValue(startDate);
  }
  async cancel(closeOverlay = false) {
    this.ionCancel.emit();
    if (closeOverlay) {
      this.closeParentOverlay();
    }
  }
  get isCalendarPicker() {
    const { presentation } = this;
    return presentation === 'date' || presentation === 'date-time' || presentation === 'time-date';
  }
  connectedCallback() {
    this.clearFocusVisible = focusVisible.startFocusVisible(this.el).destroy;
  }
  disconnectedCallback() {
    if (this.clearFocusVisible) {
      this.clearFocusVisible();
      this.clearFocusVisible = undefined;
    }
  }
  initializeListeners() {
    this.initializeCalendarListener();
    this.initializeKeyboardListeners();
  }
  componentDidLoad() {
    const visibleCallback = (entries) => {
      const ev = entries[0];
      if (!ev.isIntersecting) {
        return;
      }
      this.initializeListeners();
      index$1.writeTask(() => {
        this.el.classList.add('datetime-ready');
      });
    };
    const visibleIO = new IntersectionObserver(visibleCallback, { threshold: 0.01 });
    helpers.raf(() => visibleIO === null || visibleIO === void 0 ? void 0 : visibleIO.observe(this.el));
    const hiddenCallback = (entries) => {
      const ev = entries[0];
      if (ev.isIntersecting) {
        return;
      }
      this.destroyInteractionListeners();
      this.showMonthAndYear = false;
      index$1.writeTask(() => {
        this.el.classList.remove('datetime-ready');
      });
    };
    const hiddenIO = new IntersectionObserver(hiddenCallback, { threshold: 0 });
    helpers.raf(() => hiddenIO === null || hiddenIO === void 0 ? void 0 : hiddenIO.observe(this.el));
    const root = helpers.getElementRoot(this.el);
    root.addEventListener('ionFocus', (ev) => ev.stopPropagation());
    root.addEventListener('ionBlur', (ev) => ev.stopPropagation());
  }
  componentDidRender() {
    const { presentation, prevPresentation, calendarBodyRef, minParts, preferWheel } = this;
    const hasCalendarGrid = !preferWheel && ['date-time', 'time-date', 'date'].includes(presentation);
    if (minParts !== undefined && hasCalendarGrid && calendarBodyRef) {
      const workingMonth = calendarBodyRef.querySelector('.calendar-month:nth-of-type(1)');
      if (workingMonth) {
        calendarBodyRef.scrollLeft = workingMonth.clientWidth * (dir.isRTL(this.el) ? -1 : 1);
      }
    }
    if (prevPresentation === null) {
      this.prevPresentation = presentation;
      return;
    }
    if (presentation === prevPresentation) {
      return;
    }
    this.prevPresentation = presentation;
    this.destroyInteractionListeners();
    this.initializeListeners();
    this.showMonthAndYear = false;
    helpers.raf(() => {
      this.ionRender.emit();
    });
  }
  componentWillLoad() {
    const { el, highlightedDates, multiple, presentation, preferWheel } = this;
    if (multiple) {
      if (presentation !== 'date') {
        index.printIonWarning('Multiple date selection is only supported for presentation="date".', el);
      }
      if (preferWheel) {
        index.printIonWarning('Multiple date selection is not supported with preferWheel="true".', el);
      }
    }
    if (highlightedDates !== undefined) {
      if (presentation !== 'date' && presentation !== 'date-time' && presentation !== 'time-date') {
        index.printIonWarning('The highlightedDates property is only supported with the date, date-time, and time-date presentations.', el);
      }
      if (preferWheel) {
        index.printIonWarning('The highlightedDates property is not supported with preferWheel="true".', el);
      }
    }
    this.processMinParts();
    this.processMaxParts();
    const hourValues = (this.parsedHourValues = data.convertToArrayOfNumbers(this.hourValues));
    const minuteValues = (this.parsedMinuteValues = data.convertToArrayOfNumbers(this.minuteValues));
    const monthValues = (this.parsedMonthValues = data.convertToArrayOfNumbers(this.monthValues));
    const yearValues = (this.parsedYearValues = data.convertToArrayOfNumbers(this.yearValues));
    const dayValues = (this.parsedDayValues = data.convertToArrayOfNumbers(this.dayValues));
    const todayParts = (this.todayParts = data.parseDate(data.getToday()));
    this.defaultParts = data.getClosestValidDate(todayParts, monthValues, dayValues, yearValues, hourValues, minuteValues);
    this.processValue(this.value);
    this.emitStyle();
  }
  emitStyle() {
    this.ionStyle.emit({
      interactive: true,
      datetime: true,
      'interactive-disabled': this.disabled,
    });
  }
  renderFooter() {
    const { showDefaultButtons, showClearButton } = this;
    const hasSlottedButtons = this.el.querySelector('[slot="buttons"]') !== null;
    if (!hasSlottedButtons && !showDefaultButtons && !showClearButton) {
      return;
    }
    const clearButtonClick = () => {
      this.reset();
      this.setValue(undefined);
    };
    return (index$1.h("div", { class: "datetime-footer" }, index$1.h("div", { class: "datetime-buttons" }, index$1.h("div", { class: {
        ['datetime-action-buttons']: true,
        ['has-clear-button']: this.showClearButton,
      } }, index$1.h("slot", { name: "buttons" }, index$1.h("ion-buttons", null, showDefaultButtons && (index$1.h("ion-button", { id: "cancel-button", color: this.color, onClick: () => this.cancel(true) }, this.cancelText)), index$1.h("div", null, showClearButton && (index$1.h("ion-button", { id: "clear-button", color: this.color, onClick: () => clearButtonClick() }, this.clearText)), showDefaultButtons && (index$1.h("ion-button", { id: "confirm-button", color: this.color, onClick: () => this.confirm(true) }, this.doneText)))))))));
  }
  renderWheelPicker(forcePresentation = this.presentation) {
    const renderArray = forcePresentation === 'time-date'
      ? [this.renderTimePickerColumns(forcePresentation), this.renderDatePickerColumns(forcePresentation)]
      : [this.renderDatePickerColumns(forcePresentation), this.renderTimePickerColumns(forcePresentation)];
    return index$1.h("ion-picker-internal", null, renderArray);
  }
  renderDatePickerColumns(forcePresentation) {
    return forcePresentation === 'date-time' || forcePresentation === 'time-date'
      ? this.renderCombinedDatePickerColumn()
      : this.renderIndividualDatePickerColumns(forcePresentation);
  }
  renderCombinedDatePickerColumn() {
    const { defaultParts, workingParts, locale, minParts, maxParts, todayParts, isDateEnabled } = this;
    const activePart = this.getActivePartsWithFallback();
    const monthsToRender = data.generateMonths(workingParts);
    const lastMonth = monthsToRender[monthsToRender.length - 1];
    monthsToRender[0].day = 1;
    lastMonth.day = data.getNumDaysInMonth(lastMonth.month, lastMonth.year);
    const min = minParts !== undefined && data.isAfter(minParts, monthsToRender[0]) ? minParts : monthsToRender[0];
    const max = maxParts !== undefined && data.isBefore(maxParts, lastMonth) ? maxParts : lastMonth;
    const result = data.getCombinedDateColumnData(locale, todayParts, min, max, this.parsedDayValues, this.parsedMonthValues);
    let items = result.items;
    const parts = result.parts;
    if (isDateEnabled) {
      items = items.map((itemObject, index$1) => {
        const referenceParts = parts[index$1];
        let disabled;
        try {
          disabled = !isDateEnabled(data.convertDataToISO(referenceParts));
        }
        catch (e) {
          index.printIonError('Exception thrown from provided `isDateEnabled` function. Please check your function and try again.', e);
        }
        return Object.assign(Object.assign({}, itemObject), { disabled });
      });
    }
    const todayString = workingParts.day !== null
      ? `${workingParts.year}-${workingParts.month}-${workingParts.day}`
      : `${defaultParts.year}-${defaultParts.month}-${defaultParts.day}`;
    return (index$1.h("ion-picker-column-internal", { class: "date-column", color: this.color, items: items, value: todayString, onIonChange: (ev) => {
        if (this.destroyCalendarListener) {
          this.destroyCalendarListener();
        }
        const { value } = ev.detail;
        const findPart = parts.find(({ month, day, year }) => value === `${year}-${month}-${day}`);
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), findPart));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), findPart));
        this.initializeCalendarListener();
        ev.stopPropagation();
      } }));
  }
  renderIndividualDatePickerColumns(forcePresentation) {
    const { workingParts, isDateEnabled } = this;
    const shouldRenderMonths = forcePresentation !== 'year' && forcePresentation !== 'time';
    const months = shouldRenderMonths
      ? data.getMonthColumnData(this.locale, workingParts, this.minParts, this.maxParts, this.parsedMonthValues)
      : [];
    const shouldRenderDays = forcePresentation === 'date';
    let days = shouldRenderDays
      ? data.getDayColumnData(this.locale, workingParts, this.minParts, this.maxParts, this.parsedDayValues)
      : [];
    if (isDateEnabled) {
      days = days.map((dayObject) => {
        const { value } = dayObject;
        const valueNum = typeof value === 'string' ? parseInt(value) : value;
        const referenceParts = {
          month: workingParts.month,
          day: valueNum,
          year: workingParts.year,
        };
        let disabled;
        try {
          disabled = !isDateEnabled(data.convertDataToISO(referenceParts));
        }
        catch (e) {
          index.printIonError('Exception thrown from provided `isDateEnabled` function. Please check your function and try again.', e);
        }
        return Object.assign(Object.assign({}, dayObject), { disabled });
      });
    }
    const shouldRenderYears = forcePresentation !== 'month' && forcePresentation !== 'time';
    const years = shouldRenderYears
      ? data.getYearColumnData(this.locale, this.defaultParts, this.minParts, this.maxParts, this.parsedYearValues)
      : [];
    const showMonthFirst = data.isMonthFirstLocale(this.locale, { month: 'numeric', day: 'numeric' });
    let renderArray = [];
    if (showMonthFirst) {
      renderArray = [
        this.renderMonthPickerColumn(months),
        this.renderDayPickerColumn(days),
        this.renderYearPickerColumn(years),
      ];
    }
    else {
      renderArray = [
        this.renderDayPickerColumn(days),
        this.renderMonthPickerColumn(months),
        this.renderYearPickerColumn(years),
      ];
    }
    return renderArray;
  }
  renderDayPickerColumn(days) {
    var _a;
    if (days.length === 0) {
      return [];
    }
    const { workingParts } = this;
    const activePart = this.getActivePartsWithFallback();
    return (index$1.h("ion-picker-column-internal", { class: "day-column", color: this.color, items: days, value: (_a = (workingParts.day !== null ? workingParts.day : this.defaultParts.day)) !== null && _a !== void 0 ? _a : undefined, onIonChange: (ev) => {
        if (this.destroyCalendarListener) {
          this.destroyCalendarListener();
        }
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { day: ev.detail.value }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), { day: ev.detail.value }));
        this.initializeCalendarListener();
        ev.stopPropagation();
      } }));
  }
  renderMonthPickerColumn(months) {
    if (months.length === 0) {
      return [];
    }
    const { workingParts } = this;
    const activePart = this.getActivePartsWithFallback();
    return (index$1.h("ion-picker-column-internal", { class: "month-column", color: this.color, items: months, value: workingParts.month, onIonChange: (ev) => {
        if (this.destroyCalendarListener) {
          this.destroyCalendarListener();
        }
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { month: ev.detail.value }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), { month: ev.detail.value }));
        this.initializeCalendarListener();
        ev.stopPropagation();
      } }));
  }
  renderYearPickerColumn(years) {
    if (years.length === 0) {
      return [];
    }
    const { workingParts } = this;
    const activePart = this.getActivePartsWithFallback();
    return (index$1.h("ion-picker-column-internal", { class: "year-column", color: this.color, items: years, value: workingParts.year, onIonChange: (ev) => {
        if (this.destroyCalendarListener) {
          this.destroyCalendarListener();
        }
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { year: ev.detail.value }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), { year: ev.detail.value }));
        this.initializeCalendarListener();
        ev.stopPropagation();
      } }));
  }
  renderTimePickerColumns(forcePresentation) {
    if (['date', 'month', 'month-year', 'year'].includes(forcePresentation)) {
      return [];
    }
    const activePart = this.getActivePart();
    const userHasSelectedDate = activePart !== undefined;
    const { hoursData, minutesData, dayPeriodData } = data.getTimeColumnsData(this.locale, this.workingParts, this.hourCycle, userHasSelectedDate ? this.minParts : undefined, userHasSelectedDate ? this.maxParts : undefined, this.parsedHourValues, this.parsedMinuteValues);
    return [
      this.renderHourPickerColumn(hoursData),
      this.renderMinutePickerColumn(minutesData),
      this.renderDayPeriodPickerColumn(dayPeriodData),
    ];
  }
  renderHourPickerColumn(hoursData) {
    const { workingParts } = this;
    if (hoursData.length === 0)
      return [];
    const activePart = this.getActivePartsWithFallback();
    return (index$1.h("ion-picker-column-internal", { color: this.color, value: activePart.hour, items: hoursData, numericInput: true, onIonChange: (ev) => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { hour: ev.detail.value }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), { hour: ev.detail.value }));
        ev.stopPropagation();
      } }));
  }
  renderMinutePickerColumn(minutesData) {
    const { workingParts } = this;
    if (minutesData.length === 0)
      return [];
    const activePart = this.getActivePartsWithFallback();
    return (index$1.h("ion-picker-column-internal", { color: this.color, value: activePart.minute, items: minutesData, numericInput: true, onIonChange: (ev) => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { minute: ev.detail.value }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), { minute: ev.detail.value }));
        ev.stopPropagation();
      } }));
  }
  renderDayPeriodPickerColumn(dayPeriodData) {
    const { workingParts } = this;
    if (dayPeriodData.length === 0) {
      return [];
    }
    const activePart = this.getActivePartsWithFallback();
    const isDayPeriodRTL = data.isLocaleDayPeriodRTL(this.locale);
    return (index$1.h("ion-picker-column-internal", { style: isDayPeriodRTL ? { order: '-1' } : {}, color: this.color, value: activePart.ampm, items: dayPeriodData, onIonChange: (ev) => {
        const hour = data.calculateHourFromAMPM(workingParts, ev.detail.value);
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { ampm: ev.detail.value, hour }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), { ampm: ev.detail.value, hour }));
        ev.stopPropagation();
      } }));
  }
  renderWheelView(forcePresentation) {
    const { locale } = this;
    const showMonthFirst = data.isMonthFirstLocale(locale);
    const columnOrder = showMonthFirst ? 'month-first' : 'year-first';
    return (index$1.h("div", { class: {
        [`wheel-order-${columnOrder}`]: true,
      } }, this.renderWheelPicker(forcePresentation)));
  }
  renderCalendarHeader(mode) {
    const expandedIcon = mode === 'ios' ? index$2.chevronDown : index$2.caretUpSharp;
    const collapsedIcon = mode === 'ios' ? index$2.chevronForward : index$2.caretDownSharp;
    const prevMonthDisabled = isPrevMonthDisabled(this.workingParts, this.minParts, this.maxParts);
    const nextMonthDisabled = isNextMonthDisabled(this.workingParts, this.maxParts);
    const hostDir = this.el.getAttribute('dir') || undefined;
    return (index$1.h("div", { class: "calendar-header" }, index$1.h("div", { class: "calendar-action-buttons" }, index$1.h("div", { class: "calendar-month-year" }, index$1.h("ion-item", { ref: (el) => (this.monthYearToggleItemRef = el), button: true, "aria-label": "Show year picker", detail: false, lines: "none", onClick: () => {
        var _a;
        this.toggleMonthAndYearView();
        const { monthYearToggleItemRef } = this;
        if (monthYearToggleItemRef) {
          const btn = (_a = monthYearToggleItemRef.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.item-native');
          if (btn) {
            const monthYearAriaLabel = this.showMonthAndYear ? 'Hide year picker' : 'Show year picker';
            btn.setAttribute('aria-label', monthYearAriaLabel);
          }
        }
      } }, index$1.h("ion-label", null, data.getMonthAndYear(this.locale, this.workingParts), index$1.h("ion-icon", { "aria-hidden": "true", icon: this.showMonthAndYear ? expandedIcon : collapsedIcon, lazy: false, flipRtl: true })))), index$1.h("div", { class: "calendar-next-prev" }, index$1.h("ion-buttons", null, index$1.h("ion-button", { "aria-label": "Previous month", disabled: prevMonthDisabled, onClick: () => this.prevMonth() }, index$1.h("ion-icon", { dir: hostDir, "aria-hidden": "true", slot: "icon-only", icon: index$2.chevronBack, lazy: false, flipRtl: true })), index$1.h("ion-button", { "aria-label": "Next month", disabled: nextMonthDisabled, onClick: () => this.nextMonth() }, index$1.h("ion-icon", { dir: hostDir, "aria-hidden": "true", slot: "icon-only", icon: index$2.chevronForward, lazy: false, flipRtl: true }))))), index$1.h("div", { class: "calendar-days-of-week", "aria-hidden": "true" }, data.getDaysOfWeek(this.locale, mode, this.firstDayOfWeek % 7).map((d) => {
      return index$1.h("div", { class: "day-of-week" }, d);
    }))));
  }
  renderMonth(month, year) {
    const yearAllowed = this.parsedYearValues === undefined || this.parsedYearValues.includes(year);
    const monthAllowed = this.parsedMonthValues === undefined || this.parsedMonthValues.includes(month);
    const isCalMonthDisabled = !yearAllowed || !monthAllowed;
    const swipeDisabled = isMonthDisabled({
      month,
      year,
      day: null,
    }, {
      minParts: Object.assign(Object.assign({}, this.minParts), { day: null }),
      maxParts: Object.assign(Object.assign({}, this.maxParts), { day: null }),
    });
    const isWorkingMonth = this.workingParts.month === month && this.workingParts.year === year;
    const activePart = this.getActivePartsWithFallback();
    return (index$1.h("div", { "aria-hidden": !isWorkingMonth ? 'true' : null, class: {
        'calendar-month': true,
        'calendar-month-disabled': !isWorkingMonth && swipeDisabled,
      } }, index$1.h("div", { class: "calendar-month-grid" }, data.getDaysOfMonth(month, year, this.firstDayOfWeek % 7).map((dateObject, index$2) => {
      const { day, dayOfWeek } = dateObject;
      const { el, highlightedDates, isDateEnabled, multiple } = this;
      const referenceParts = { month, day, year };
      const isCalendarPadding = day === null;
      const { isActive, isToday, ariaLabel, ariaSelected, disabled, text } = getCalendarDayState(this.locale, referenceParts, this.activePartsClone, this.todayParts, this.minParts, this.maxParts, this.parsedDayValues);
      const dateIsoString = data.convertDataToISO(referenceParts);
      let isCalDayDisabled = isCalMonthDisabled || disabled;
      if (!isCalDayDisabled && isDateEnabled !== undefined) {
        try {
          isCalDayDisabled = !isDateEnabled(dateIsoString);
        }
        catch (e) {
          index.printIonError('Exception thrown from provided `isDateEnabled` function. Please check your function and try again.', el, e);
        }
      }
      let dateStyle = undefined;
      if (highlightedDates !== undefined && !isActive && day !== null) {
        dateStyle = getHighlightStyles(highlightedDates, dateIsoString, el);
      }
      return (index$1.h("button", { tabindex: "-1", "data-day": day, "data-month": month, "data-year": year, "data-index": index$2, "data-day-of-week": dayOfWeek, disabled: isCalDayDisabled, class: {
          'calendar-day-padding': isCalendarPadding,
          'calendar-day': true,
          'calendar-day-active': isActive,
          'calendar-day-today': isToday,
        }, style: dateStyle && {
          color: dateStyle.textColor,
        }, "aria-hidden": isCalendarPadding ? 'true' : null, "aria-selected": ariaSelected, "aria-label": ariaLabel, onClick: () => {
          if (isCalendarPadding) {
            return;
          }
          this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), { month,
            day,
            year }));
          if (multiple) {
            this.setActiveParts({
              month,
              day,
              year,
            }, isActive);
          }
          else {
            this.setActiveParts(Object.assign(Object.assign({}, activePart), { month,
              day,
              year }));
          }
        } }, index$1.h("div", { class: "calendar-day-highlight", style: {
          backgroundColor: dateStyle === null || dateStyle === void 0 ? void 0 : dateStyle.backgroundColor,
        } }), text));
    }))));
  }
  renderCalendarBody() {
    return (index$1.h("div", { class: "calendar-body ion-focusable", ref: (el) => (this.calendarBodyRef = el), tabindex: "0" }, data.generateMonths(this.workingParts).map(({ month, year }) => {
      return this.renderMonth(month, year);
    })));
  }
  renderCalendar(mode) {
    return (index$1.h("div", { class: "datetime-calendar", key: "datetime-calendar" }, this.renderCalendarHeader(mode), this.renderCalendarBody()));
  }
  renderTimeLabel() {
    const hasSlottedTimeLabel = this.el.querySelector('[slot="time-label"]') !== null;
    if (!hasSlottedTimeLabel && !this.showDefaultTimeLabel) {
      return;
    }
    return index$1.h("slot", { name: "time-label" }, "Time");
  }
  renderTimeOverlay() {
    const use24Hour = data.is24Hour(this.locale, this.hourCycle);
    const activePart = this.getActivePartsWithFallback();
    return [
      index$1.h("div", { class: "time-header" }, this.renderTimeLabel()),
      index$1.h("button", { class: {
          'time-body': true,
          'time-body-active': this.isTimePopoverOpen,
        }, "aria-expanded": "false", "aria-haspopup": "true", onClick: async (ev) => {
          const { popoverRef } = this;
          if (popoverRef) {
            this.isTimePopoverOpen = true;
            popoverRef.present(new CustomEvent('ionShadowTarget', {
              detail: {
                ionShadowTarget: ev.target,
              },
            }));
            await popoverRef.onWillDismiss();
            this.isTimePopoverOpen = false;
          }
        } }, data.getLocalizedTime(this.locale, activePart, use24Hour)),
      index$1.h("ion-popover", { alignment: "center", translucent: true, overlayIndex: 1, arrow: false, onWillPresent: (ev) => {
          const cols = ev.target.querySelectorAll('ion-picker-column-internal');
          cols.forEach((col) => col.scrollActiveItemIntoView());
        }, style: {
          '--offset-y': '-10px',
          '--min-width': 'fit-content',
        },
        keyboardEvents: true, ref: (el) => (this.popoverRef = el) }, this.renderWheelPicker('time')),
    ];
  }
  getHeaderSelectedDateText() {
    const { activeParts, multiple, titleSelectedDatesFormatter } = this;
    const isArray = Array.isArray(activeParts);
    let headerText;
    if (multiple && isArray && activeParts.length !== 1) {
      headerText = `${activeParts.length} days`;
      if (titleSelectedDatesFormatter !== undefined) {
        try {
          headerText = titleSelectedDatesFormatter(data.convertDataToISO(activeParts));
        }
        catch (e) {
          index.printIonError('Exception in provided `titleSelectedDatesFormatter`: ', e);
        }
      }
    }
    else {
      headerText = data.getMonthAndDay(this.locale, this.getActivePartsWithFallback());
    }
    return headerText;
  }
  renderHeader(showExpandedHeader = true) {
    const hasSlottedTitle = this.el.querySelector('[slot="title"]') !== null;
    if (!hasSlottedTitle && !this.showDefaultTitle) {
      return;
    }
    return (index$1.h("div", { class: "datetime-header" }, index$1.h("div", { class: "datetime-title" }, index$1.h("slot", { name: "title" }, "Select Date")), showExpandedHeader && index$1.h("div", { class: "datetime-selected-date" }, this.getHeaderSelectedDateText())));
  }
  renderTime() {
    const { presentation } = this;
    const timeOnlyPresentation = presentation === 'time';
    return (index$1.h("div", { class: "datetime-time" }, timeOnlyPresentation ? this.renderWheelPicker() : this.renderTimeOverlay()));
  }
  renderCalendarViewMonthYearPicker() {
    return index$1.h("div", { class: "datetime-year" }, this.renderWheelView('month-year'));
  }
  renderDatetime(mode) {
    const { presentation, preferWheel } = this;
    const hasWheelVariant = presentation === 'date' || presentation === 'date-time' || presentation === 'time-date';
    if (preferWheel && hasWheelVariant) {
      return [this.renderHeader(false), this.renderWheelView(), this.renderFooter()];
    }
    switch (presentation) {
      case 'date-time':
        return [
          this.renderHeader(),
          this.renderCalendar(mode),
          this.renderCalendarViewMonthYearPicker(),
          this.renderTime(),
          this.renderFooter(),
        ];
      case 'time-date':
        return [
          this.renderHeader(),
          this.renderTime(),
          this.renderCalendar(mode),
          this.renderCalendarViewMonthYearPicker(),
          this.renderFooter(),
        ];
      case 'time':
        return [this.renderHeader(false), this.renderTime(), this.renderFooter()];
      case 'month':
      case 'month-year':
      case 'year':
        return [this.renderHeader(false), this.renderWheelView(), this.renderFooter()];
      default:
        return [
          this.renderHeader(),
          this.renderCalendar(mode),
          this.renderCalendarViewMonthYearPicker(),
          this.renderFooter(),
        ];
    }
  }
  render() {
    const { name, value, disabled, el, color, isPresented, readonly, showMonthAndYear, preferWheel, presentation, size, } = this;
    const mode = ionicGlobal.getIonMode(this);
    const isMonthAndYearPresentation = presentation === 'year' || presentation === 'month' || presentation === 'month-year';
    const shouldShowMonthAndYear = showMonthAndYear || isMonthAndYearPresentation;
    const monthYearPickerOpen = showMonthAndYear && !isMonthAndYearPresentation;
    const hasDatePresentation = presentation === 'date' || presentation === 'date-time' || presentation === 'time-date';
    const hasWheelVariant = hasDatePresentation && preferWheel;
    const hasGrid = hasDatePresentation && !preferWheel;
    helpers.renderHiddenInput(true, el, name, data.formatValue(value), disabled);
    return (index$1.h(index$1.Host, { "aria-disabled": disabled ? 'true' : null, onFocus: this.onFocus, onBlur: this.onBlur, class: Object.assign({}, theme.createColorClasses(color, {
        [mode]: true,
        ['datetime-presented']: isPresented,
        ['datetime-readonly']: readonly,
        ['datetime-disabled']: disabled,
        'show-month-and-year': shouldShowMonthAndYear,
        'month-year-picker-open': monthYearPickerOpen,
        [`datetime-presentation-${presentation}`]: true,
        [`datetime-size-${size}`]: true,
        [`datetime-prefer-wheel`]: hasWheelVariant,
        [`datetime-grid`]: hasGrid,
      })) }, this.renderDatetime(mode)));
  }
  get el() { return index$1.getElement(this); }
  static get watchers() { return {
    "disabled": ["disabledChanged"],
    "min": ["minChanged"],
    "max": ["maxChanged"],
    "yearValues": ["yearValuesChanged"],
    "monthValues": ["monthValuesChanged"],
    "dayValues": ["dayValuesChanged"],
    "hourValues": ["hourValuesChanged"],
    "minuteValues": ["minuteValuesChanged"],
    "activeParts": ["activePartsChanged"],
    "value": ["valueChanged"]
  }; }
};
let datetimeIds = 0;
Datetime.style = {
  ios: datetimeIosCss,
  md: datetimeMdCss
};

exports.ion_datetime = Datetime;

//# sourceMappingURL=ion-datetime.cjs.entry.js.map
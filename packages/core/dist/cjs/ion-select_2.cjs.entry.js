'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');
const index$2 = require('./index-4e276396.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');
const formController = require('./form-controller-702885c5.js');
const helpers = require('./helpers-a70e7454.js');
const index$1 = require('./index-aabf0f95.js');
const overlays = require('./overlays-34180ef3.js');
const dir = require('./dir-d210cd33.js');
const theme = require('./theme-8b3c3d2a.js');
require('./framework-delegate-5f9a4002.js');
require('./hardware-back-button-d755e5e5.js');

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
// TODO(FW-2832): types
const watchForOptions = (containerEl, tagName, onChange) => {
  if (typeof MutationObserver === 'undefined') {
    return;
  }
  const mutation = new MutationObserver((mutationList) => {
    onChange(getSelectedOption(mutationList, tagName));
  });
  mutation.observe(containerEl, {
    childList: true,
    subtree: true,
  });
  return mutation;
};
const getSelectedOption = (mutationList, tagName) => {
  let newOption;
  mutationList.forEach((mut) => {
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < mut.addedNodes.length; i++) {
      newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
    }
  });
  return newOption;
};
const findCheckedOption = (el, tagName) => {
  if (el.nodeType !== 1) {
    return undefined;
  }
  const options = el.tagName === tagName.toUpperCase() ? [el] : Array.from(el.querySelectorAll(tagName));
  return options.find((o) => o.value === el.value);
};

const selectIosCss = ":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--placeholder-color:currentColor;--placeholder-opacity:0.6;--background:transparent;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);--highlight-color:var(--highlight-color-focused);display:block;position:relative;font-family:var(--ion-font-family, inherit);white-space:nowrap;cursor:pointer;z-index:2}:host(:not(.legacy-select)){width:100%}:host(.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.legacy-select){-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;align-items:center;overflow:hidden}:host(.in-item.legacy-select){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}:host(.in-item[slot=start]:not(.legacy-select)),:host(.in-item[slot=end]:not(.legacy-select)){width:auto}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}:host(.legacy-select) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-select) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-select) label{left:0}:host-context([dir=rtl]):host(.legacy-select) label,:host-context([dir=rtl]).legacy-select label{left:unset;right:unset;right:0}}:host(.legacy-select) label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0;position:relative}:host(.in-item-color) .select-icon{color:inherit}:host(.select-label-placement-stacked) .select-icon,:host(.select-label-placement-floating) .select-icon{position:absolute;height:100%}:host(.select-ltr.select-label-placement-stacked) .select-icon,:host(.select-ltr.select-label-placement-floating) .select-icon{right:var(--padding-end, 0)}:host(.select-rtl.select-label-placement-stacked) .select-icon,:host(.select-rtl.select-label-placement-floating) .select-icon{left:var(--padding-start, 0)}.select-text{flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:inherit;overflow:hidden}.select-wrapper{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;flex-grow:1;align-items:center;height:inherit;min-height:inherit;transition:background-color 15ms linear;background:var(--background);cursor:inherit;box-sizing:border-box}:host(.ion-touched.ion-invalid){--highlight-color:var(--highlight-color-invalid)}:host(.ion-valid){--highlight-color:var(--highlight-color-valid)}.label-text-wrapper{display:flex;align-items:center;max-width:200px;transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.native-wrapper{display:flex;align-items:center;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);overflow:hidden}:host(.select-justify-space-between) .select-wrapper{justify-content:space-between}:host(.select-justify-start) .select-wrapper{justify-content:start}:host(.select-justify-end) .select-wrapper{justify-content:end}:host(.select-label-placement-start) .select-wrapper{flex-direction:row}:host(.select-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:0;margin-bottom:0}:host(.select-label-placement-end) .select-wrapper{flex-direction:row-reverse}:host(.select-label-placement-end) .label-text-wrapper{-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.select-label-placement-stacked) .select-wrapper,:host(.select-label-placement-floating) .select-wrapper{flex-direction:column;align-items:start}:host(.select-label-placement-stacked) .label-text-wrapper,:host(.select-label-placement-floating) .label-text-wrapper{max-width:100%}:host(.select-ltr.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-label-placement-floating) .label-text-wrapper{transform-origin:left top}:host(.select-rtl.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-label-placement-floating) .label-text-wrapper{transform-origin:right top}:host(.select-label-placement-stacked) .native-wrapper,:host(.select-label-placement-floating) .native-wrapper{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0;flex-grow:1;width:100%}:host(.select-label-placement-floating) .label-text-wrapper{transform:translateY(100%) scale(1)}:host(.select-label-placement-floating:not(.has-placeholder)) .native-wrapper .select-text{opacity:0}:host(.select-expanded.select-label-placement-floating) .native-wrapper .select-text,:host(.has-value.select-label-placement-floating) .native-wrapper .select-text{opacity:1}:host(.select-label-placement-stacked) .label-text-wrapper,:host(.select-expanded.select-label-placement-floating) .label-text-wrapper,:host(.ion-focused.select-label-placement-floating) .label-text-wrapper,:host(.has-value.select-label-placement-floating) .label-text-wrapper,:host(.has-placeholder.select-label-placement-floating) .label-text-wrapper{transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}:host(.legacy-select){--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px}:host(:not(.legacy-select)){min-height:44px}:host(.select-label-placement-floating),:host(.select-label-placement-stacked){min-height:56px}.select-icon{width:18px;height:18px;color:var(--ion-color-step-650, #595959)}";

const selectMdCss = ":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--placeholder-color:currentColor;--placeholder-opacity:0.6;--background:transparent;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);--highlight-color:var(--highlight-color-focused);display:block;position:relative;font-family:var(--ion-font-family, inherit);white-space:nowrap;cursor:pointer;z-index:2}:host(:not(.legacy-select)){width:100%}:host(.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.legacy-select){-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;align-items:center;overflow:hidden}:host(.in-item.legacy-select){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}:host(.in-item[slot=start]:not(.legacy-select)),:host(.in-item[slot=end]:not(.legacy-select)){width:auto}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}:host(.legacy-select) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-select) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-select) label{left:0}:host-context([dir=rtl]):host(.legacy-select) label,:host-context([dir=rtl]).legacy-select label{left:unset;right:unset;right:0}}:host(.legacy-select) label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0;position:relative}:host(.in-item-color) .select-icon{color:inherit}:host(.select-label-placement-stacked) .select-icon,:host(.select-label-placement-floating) .select-icon{position:absolute;height:100%}:host(.select-ltr.select-label-placement-stacked) .select-icon,:host(.select-ltr.select-label-placement-floating) .select-icon{right:var(--padding-end, 0)}:host(.select-rtl.select-label-placement-stacked) .select-icon,:host(.select-rtl.select-label-placement-floating) .select-icon{left:var(--padding-start, 0)}.select-text{flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:inherit;overflow:hidden}.select-wrapper{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;flex-grow:1;align-items:center;height:inherit;min-height:inherit;transition:background-color 15ms linear;background:var(--background);cursor:inherit;box-sizing:border-box}:host(.ion-touched.ion-invalid){--highlight-color:var(--highlight-color-invalid)}:host(.ion-valid){--highlight-color:var(--highlight-color-valid)}.label-text-wrapper{display:flex;align-items:center;max-width:200px;transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.native-wrapper{display:flex;align-items:center;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);overflow:hidden}:host(.select-justify-space-between) .select-wrapper{justify-content:space-between}:host(.select-justify-start) .select-wrapper{justify-content:start}:host(.select-justify-end) .select-wrapper{justify-content:end}:host(.select-label-placement-start) .select-wrapper{flex-direction:row}:host(.select-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:0;margin-bottom:0}:host(.select-label-placement-end) .select-wrapper{flex-direction:row-reverse}:host(.select-label-placement-end) .label-text-wrapper{-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.select-label-placement-stacked) .select-wrapper,:host(.select-label-placement-floating) .select-wrapper{flex-direction:column;align-items:start}:host(.select-label-placement-stacked) .label-text-wrapper,:host(.select-label-placement-floating) .label-text-wrapper{max-width:100%}:host(.select-ltr.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-label-placement-floating) .label-text-wrapper{transform-origin:left top}:host(.select-rtl.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-label-placement-floating) .label-text-wrapper{transform-origin:right top}:host(.select-label-placement-stacked) .native-wrapper,:host(.select-label-placement-floating) .native-wrapper{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0;flex-grow:1;width:100%}:host(.select-label-placement-floating) .label-text-wrapper{transform:translateY(100%) scale(1)}:host(.select-label-placement-floating:not(.has-placeholder)) .native-wrapper .select-text{opacity:0}:host(.select-expanded.select-label-placement-floating) .native-wrapper .select-text,:host(.has-value.select-label-placement-floating) .native-wrapper .select-text{opacity:1}:host(.select-label-placement-stacked) .label-text-wrapper,:host(.select-expanded.select-label-placement-floating) .label-text-wrapper,:host(.ion-focused.select-label-placement-floating) .label-text-wrapper,:host(.has-value.select-label-placement-floating) .label-text-wrapper,:host(.has-placeholder.select-label-placement-floating) .label-text-wrapper{transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}:host(.select-fill-solid){--background:var(--ion-color-step-50, #f2f2f2);--border-color:var(--ion-color-step-500, gray);--border-radius:4px;--padding-start:16px;--padding-end:16px}:host(.select-fill-solid) .select-wrapper{border-bottom:var(--border-width) var(--border-style) var(--border-color)}:host(.has-focus.select-fill-solid.ion-valid),:host(.select-fill-solid.ion-touched.ion-invalid){--border-color:var(--highlight-color)}:host(.select-fill-solid) .select-bottom{border-top:none}@media (any-hover: hover){:host(.select-fill-solid:hover){--background:var(--ion-color-step-100, #e6e6e6);--border-color:var(--ion-color-step-750, #404040)}}:host(.select-fill-solid.select-expanded),:host(.select-fill-solid.ion-focused){--background:var(--ion-color-step-150, #d9d9d9);--border-color:var(--ion-color-step-750, #404040)}:host(.select-fill-solid) .select-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0px;border-bottom-left-radius:0px}:host-context([dir=rtl]):host(.select-fill-solid) .select-wrapper,:host-context([dir=rtl]).select-fill-solid .select-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0px;border-bottom-left-radius:0px}:host(.select-fill-solid.select-label-placement-stacked) .label-text-wrapper,:host(.select-expanded.select-fill-solid.select-label-placement-floating) .label-text-wrapper,:host(.ion-focused.select-fill-solid.select-label-placement-floating) .label-text-wrapper,:host(.has-value.select-fill-solid.select-label-placement-floating) .label-text-wrapper{max-width:calc(100% / 0.75)}:host(.select-fill-outline){--border-color:var(--ion-color-step-300, #b3b3b3);--border-radius:4px;--padding-start:16px;--padding-end:16px}:host(.select-fill-outline.select-shape-round){--border-radius:28px;--padding-start:32px;--padding-end:32px}:host(.has-focus.select-fill-outline.ion-valid),:host(.select-fill-outline.ion-touched.ion-invalid){--border-color:var(--highlight-color)}@media (any-hover: hover){:host(.select-fill-outline:hover){--border-color:var(--ion-color-step-750, #404040)}}:host(.select-fill-outline.select-expanded),:host(.select-fill-outline.ion-focused){--border-width:2px;--border-color:var(--highlight-color)}:host(.select-fill-outline) .select-bottom{border-top:none}:host(.select-fill-outline) .select-wrapper{border-bottom:none}:host(.select-ltr.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-fill-outline.select-label-placement-floating) .label-text-wrapper{transform-origin:left top}:host(.select-rtl.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-fill-outline.select-label-placement-floating) .label-text-wrapper{transform-origin:right top}:host(.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-fill-outline.select-label-placement-floating) .label-text-wrapper{position:absolute;max-width:calc(100% - var(--padding-start) - var(--padding-end))}:host(.select-fill-outline) .label-text-wrapper{position:relative;z-index:1}:host(.select-expanded.select-fill-outline.select-label-placement-floating) .label-text-wrapper,:host(.ion-focused.select-fill-outline.select-label-placement-floating) .label-text-wrapper,:host(.has-value.select-fill-outline.select-label-placement-floating) .label-text-wrapper,:host(.select-fill-outline.select-label-placement-stacked) .label-text-wrapper{transform:translateY(-32%) scale(0.75);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;max-width:calc((100% - var(--padding-start) - var(--padding-end) - 8px) / 0.75)}:host(.select-fill-outline.select-label-placement-stacked) select,:host(.select-fill-outline.select-label-placement-floating) select{margin-left:0;margin-right:0;margin-top:6px;margin-bottom:6px}:host(.select-fill-outline) .select-outline-container{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;width:100%;height:100%}:host(.select-fill-outline) .select-outline-start,:host(.select-fill-outline) .select-outline-end{pointer-events:none}:host(.select-fill-outline) .select-outline-start,:host(.select-fill-outline) .select-outline-notch,:host(.select-fill-outline) .select-outline-end{border-top:var(--border-width) var(--border-style) var(--border-color);border-bottom:var(--border-width) var(--border-style) var(--border-color);box-sizing:border-box}:host(.select-fill-outline) .select-outline-notch{max-width:calc(100% - var(--padding-start) - var(--padding-end))}:host(.select-fill-outline) .notch-spacer{-webkit-padding-end:8px;padding-inline-end:8px;font-size:calc(1em * 0.75);opacity:0;pointer-events:none}:host(.select-ltr.select-fill-outline) .select-outline-start{border-left:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius) 0px 0px var(--border-radius)}:host(.select-rtl.select-fill-outline) .select-outline-start{border-right:var(--border-width) var(--border-style) var(--border-color);border-radius:0px var(--border-radius) var(--border-radius) 0px}:host(.select-fill-outline) .select-outline-start{width:calc(var(--padding-start) - 4px)}:host(.select-ltr.select-fill-outline) .select-outline-end{border-right:var(--border-width) var(--border-style) var(--border-color);border-radius:0px var(--border-radius) var(--border-radius) 0px}:host(.select-rtl.select-fill-outline) .select-outline-end{border-left:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius) 0px 0px var(--border-radius)}:host(.select-fill-outline) .select-outline-end{flex-grow:1}:host(.select-expanded.select-fill-outline.select-label-placement-floating) .select-outline-notch,:host(.ion-focused.select-fill-outline.select-label-placement-floating) .select-outline-notch,:host(.has-value.select-fill-outline.select-label-placement-floating) .select-outline-notch,:host(.select-fill-outline.select-label-placement-stacked) .select-outline-notch{border-top:none}:host{--border-width:1px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))))}:host(.legacy-select){--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}:host(:not(.legacy-select)){min-height:56px}.select-icon{width:13px;transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);color:var(--ion-color-step-500, gray)}:host(.select-label-placement-floating.select-expanded) .label-text-wrapper,:host(.select-label-placement-floating.ion-focused) .label-text-wrapper,:host(.select-label-placement-stacked.select-expanded) .label-text-wrapper,:host(.select-label-placement-stacked.ion-focused) .label-text-wrapper{color:var(--highlight-color)}:host(.has-focus.select-label-placement-floating.ion-valid) .label-text-wrapper,:host(.select-label-placement-floating.ion-touched.ion-invalid) .label-text-wrapper,:host(.has-focus.select-label-placement-stacked.ion-valid) .label-text-wrapper,:host(.select-label-placement-stacked.ion-touched.ion-invalid) .label-text-wrapper{color:var(--highlight-color)}.select-highlight{bottom:-1px;position:absolute;width:100%;height:2px;transform:scale(0);transition:transform 200ms;background:var(--highlight-color)}@supports (inset-inline-start: 0){.select-highlight{inset-inline-start:0}}@supports not (inset-inline-start: 0){.select-highlight{left:0}[dir=rtl] .select-highlight,:host-context([dir=rtl]) .select-highlight{left:unset;right:unset;right:0}}:host(.select-expanded) .select-highlight,:host(.ion-focused) .select-highlight{transform:scale(1)}:host(.in-item) .select-highlight{bottom:0}@supports (inset-inline-start: 0){:host(.in-item) .select-highlight{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.in-item) .select-highlight{left:0}:host-context([dir=rtl]):host(.in-item) .select-highlight,:host-context([dir=rtl]).in-item .select-highlight{left:unset;right:unset;right:0}}:host(.select-expanded:not(.legacy-select)) .select-icon{transform:rotate(180deg)}:host(.select-expanded) .select-wrapper .select-icon,:host(.has-focus.ion-valid) .select-wrapper .select-icon,:host(.ion-touched.ion-invalid) .select-wrapper .select-icon,:host(.ion-focused) .select-wrapper .select-icon{color:var(--highlight-color)}:host-context(.item-label-stacked) .select-icon,:host-context(.item-label-floating:not(.item-fill-outline)) .select-icon,:host-context(.item-label-floating.item-fill-outline){transform:translate3d(0,  -9px,  0)}:host-context(.item-has-focus) .select-icon{transform:rotate(180deg)}:host-context(.item-has-focus.item-label-stacked) .select-icon,:host-context(.item-has-focus.item-label-floating:not(.item-fill-outline)) .select-icon{transform:translate3d(0,  -9px,  0) rotate(180deg)}:host(.select-shape-round){--border-radius:16px}";

const Select = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionChange = index.createEvent(this, "ionChange", 7);
    this.ionCancel = index.createEvent(this, "ionCancel", 7);
    this.ionDismiss = index.createEvent(this, "ionDismiss", 7);
    this.ionFocus = index.createEvent(this, "ionFocus", 7);
    this.ionBlur = index.createEvent(this, "ionBlur", 7);
    this.ionStyle = index.createEvent(this, "ionStyle", 7);
    this.inputId = `ion-sel-${selectIds++}`;
    this.inheritedAttributes = {};
    this.hasLoggedDeprecationWarning = false;
    this.onClick = (ev) => {
      this.setFocus();
      this.open(ev);
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.isExpanded = false;
    this.cancelText = 'Cancel';
    this.color = undefined;
    this.compareWith = undefined;
    this.disabled = false;
    this.fill = undefined;
    this.interface = 'alert';
    this.interfaceOptions = {};
    this.justify = 'space-between';
    this.label = undefined;
    this.labelPlacement = 'start';
    this.legacy = undefined;
    this.multiple = false;
    this.name = this.inputId;
    this.okText = 'OK';
    this.placeholder = undefined;
    this.selectedText = undefined;
    this.shape = undefined;
    this.value = undefined;
  }
  styleChanged() {
    this.emitStyle();
  }
  setValue(value) {
    this.value = value;
    this.ionChange.emit({ value });
  }
  componentWillLoad() {
    this.inheritedAttributes = helpers.inheritAttributes(this.el, ['aria-label']);
  }
  async connectedCallback() {
    const { el } = this;
    this.legacyFormController = formController.createLegacyFormController(el);
    this.updateOverlayOptions();
    this.emitStyle();
    this.mutationO = watchForOptions(this.el, 'ion-select-option', async () => {
      this.updateOverlayOptions();
      index.forceUpdate(this);
    });
  }
  disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect();
      this.mutationO = undefined;
    }
  }
  async open(event) {
    if (this.disabled || this.isExpanded) {
      return undefined;
    }
    this.isExpanded = true;
    const overlay = (this.overlay = await this.createOverlay(event));
    overlay.onDidDismiss().then(() => {
      this.overlay = undefined;
      this.isExpanded = false;
      this.ionDismiss.emit();
      this.setFocus();
    });
    await overlay.present();
    if (this.interface === 'popover') {
      let indexOfSelected = this.childOpts.map((o) => o.value).indexOf(this.value);
      indexOfSelected = indexOfSelected > -1 ? indexOfSelected : 0;
      const selectedItem = overlay.querySelector(`.select-interface-option:nth-child(${indexOfSelected + 1})`);
      if (selectedItem) {
        helpers.focusElement(selectedItem);
        const interactiveEl = selectedItem.querySelector('ion-radio, ion-checkbox');
        if (interactiveEl) {
          interactiveEl.focus();
        }
      }
    }
    return overlay;
  }
  createOverlay(ev) {
    let selectInterface = this.interface;
    if (selectInterface === 'action-sheet' && this.multiple) {
      console.warn(`Select interface cannot be "${selectInterface}" with a multi-value select. Using the "alert" interface instead.`);
      selectInterface = 'alert';
    }
    if (selectInterface === 'popover' && !ev) {
      console.warn(`Select interface cannot be a "${selectInterface}" without passing an event. Using the "alert" interface instead.`);
      selectInterface = 'alert';
    }
    if (selectInterface === 'action-sheet') {
      return this.openActionSheet();
    }
    if (selectInterface === 'popover') {
      return this.openPopover(ev);
    }
    return this.openAlert();
  }
  updateOverlayOptions() {
    const overlay = this.overlay;
    if (!overlay) {
      return;
    }
    const childOpts = this.childOpts;
    const value = this.value;
    switch (this.interface) {
      case 'action-sheet':
        overlay.buttons = this.createActionSheetButtons(childOpts, value);
        break;
      case 'popover':
        const popover = overlay.querySelector('ion-select-popover');
        if (popover) {
          popover.options = this.createPopoverOptions(childOpts, value);
        }
        break;
      case 'alert':
        const inputType = this.multiple ? 'checkbox' : 'radio';
        overlay.inputs = this.createAlertInputs(childOpts, inputType, value);
        break;
    }
  }
  createActionSheetButtons(data, selectValue) {
    const actionSheetButtons = data.map((option) => {
      const value = getOptionValue(option);
      const copyClasses = Array.from(option.classList)
        .filter((cls) => cls !== 'hydrated')
        .join(' ');
      const optClass = `${OPTION_CLASS} ${copyClasses}`;
      return {
        role: isOptionSelected(selectValue, value, this.compareWith) ? 'selected' : '',
        text: option.textContent,
        cssClass: optClass,
        handler: () => {
          this.setValue(value);
        },
      };
    });
    actionSheetButtons.push({
      text: this.cancelText,
      role: 'cancel',
      handler: () => {
        this.ionCancel.emit();
      },
    });
    return actionSheetButtons;
  }
  createAlertInputs(data, inputType, selectValue) {
    const alertInputs = data.map((option) => {
      const value = getOptionValue(option);
      const copyClasses = Array.from(option.classList)
        .filter((cls) => cls !== 'hydrated')
        .join(' ');
      const optClass = `${OPTION_CLASS} ${copyClasses}`;
      return {
        type: inputType,
        cssClass: optClass,
        label: option.textContent || '',
        value,
        checked: isOptionSelected(selectValue, value, this.compareWith),
        disabled: option.disabled,
      };
    });
    return alertInputs;
  }
  createPopoverOptions(data, selectValue) {
    const popoverOptions = data.map((option) => {
      const value = getOptionValue(option);
      const copyClasses = Array.from(option.classList)
        .filter((cls) => cls !== 'hydrated')
        .join(' ');
      const optClass = `${OPTION_CLASS} ${copyClasses}`;
      return {
        text: option.textContent || '',
        cssClass: optClass,
        value,
        checked: isOptionSelected(selectValue, value, this.compareWith),
        disabled: option.disabled,
        handler: (selected) => {
          this.setValue(selected);
          if (!this.multiple) {
            this.close();
          }
        },
      };
    });
    return popoverOptions;
  }
  async openPopover(ev) {
    const { fill, labelPlacement } = this;
    const interfaceOptions = this.interfaceOptions;
    const mode = ionicGlobal.getIonMode(this);
    const showBackdrop = mode === 'md' ? false : true;
    const multiple = this.multiple;
    const value = this.value;
    let event = ev;
    let size = 'auto';
    if (this.legacyFormController.hasLegacyControl()) {
      const item = this.el.closest('ion-item');
      if (item && (item.classList.contains('item-label-floating') || item.classList.contains('item-label-stacked'))) {
        event = Object.assign(Object.assign({}, ev), { detail: {
            ionShadowTarget: item,
          } });
        size = 'cover';
      }
    }
    else {
      const hasFloatingOrStackedLabel = labelPlacement === 'floating' || labelPlacement === 'stacked';
      if (hasFloatingOrStackedLabel || (mode === 'md' && fill !== undefined)) {
        size = 'cover';
      }
      else {
        event = Object.assign(Object.assign({}, ev), { detail: {
            ionShadowTarget: this.nativeWrapperEl,
          } });
      }
    }
    const popoverOpts = Object.assign(Object.assign({ mode,
      event, alignment: 'center', size,
      showBackdrop }, interfaceOptions), { component: 'ion-select-popover', cssClass: ['select-popover', interfaceOptions.cssClass], componentProps: {
        header: interfaceOptions.header,
        subHeader: interfaceOptions.subHeader,
        message: interfaceOptions.message,
        multiple,
        value,
        options: this.createPopoverOptions(this.childOpts, value),
      } });
    return overlays.popoverController.create(popoverOpts);
  }
  async openActionSheet() {
    const mode = ionicGlobal.getIonMode(this);
    const interfaceOptions = this.interfaceOptions;
    const actionSheetOpts = Object.assign(Object.assign({ mode }, interfaceOptions), { buttons: this.createActionSheetButtons(this.childOpts, this.value), cssClass: ['select-action-sheet', interfaceOptions.cssClass] });
    return overlays.actionSheetController.create(actionSheetOpts);
  }
  async openAlert() {
    let label;
    let labelText;
    if (this.legacyFormController.hasLegacyControl()) {
      label = this.getLabel();
      labelText = label ? label.textContent : null;
    }
    else {
      labelText = this.label;
    }
    const interfaceOptions = this.interfaceOptions;
    const inputType = this.multiple ? 'checkbox' : 'radio';
    const mode = ionicGlobal.getIonMode(this);
    const alertOpts = Object.assign(Object.assign({ mode }, interfaceOptions), { header: interfaceOptions.header ? interfaceOptions.header : labelText, inputs: this.createAlertInputs(this.childOpts, inputType, this.value), buttons: [
        {
          text: this.cancelText,
          role: 'cancel',
          handler: () => {
            this.ionCancel.emit();
          },
        },
        {
          text: this.okText,
          handler: (selectedValues) => {
            this.setValue(selectedValues);
          },
        },
      ], cssClass: [
        'select-alert',
        interfaceOptions.cssClass,
        this.multiple ? 'multiple-select-alert' : 'single-select-alert',
      ] });
    return overlays.alertController.create(alertOpts);
  }
  close() {
    if (!this.overlay) {
      return Promise.resolve(false);
    }
    return this.overlay.dismiss();
  }
  getLabel() {
    return helpers.findItemLabel(this.el);
  }
  hasValue() {
    return this.getText() !== '';
  }
  get childOpts() {
    return Array.from(this.el.querySelectorAll('ion-select-option'));
  }
  getText() {
    const selectedText = this.selectedText;
    if (selectedText != null && selectedText !== '') {
      return selectedText;
    }
    return generateText(this.childOpts, this.value, this.compareWith);
  }
  setFocus() {
    if (this.focusEl) {
      this.focusEl.focus();
    }
  }
  emitStyle() {
    const { disabled } = this;
    const style = {
      'interactive-disabled': disabled,
    };
    if (this.legacyFormController.hasLegacyControl()) {
      style['interactive'] = true;
      style['select'] = true;
      style['select-disabled'] = disabled;
      style['has-placeholder'] = this.placeholder !== undefined;
      style['has-value'] = this.hasValue();
      style['has-focus'] = this.isExpanded;
    }
    this.ionStyle.emit(style);
  }
  renderLabel() {
    const { label } = this;
    if (label === undefined) {
      return;
    }
    return (index.h("div", { class: "label-text-wrapper" }, index.h("div", { class: "label-text" }, this.label)));
  }
  renderLabelContainer() {
    const mode = ionicGlobal.getIonMode(this);
    const hasOutlineFill = mode === 'md' && this.fill === 'outline';
    if (hasOutlineFill) {
      return [
        index.h("div", { class: "select-outline-container" }, index.h("div", { class: "select-outline-start" }), index.h("div", { class: "select-outline-notch" }, index.h("div", { class: "notch-spacer", "aria-hidden": "true" }, this.label)), index.h("div", { class: "select-outline-end" })),
        this.renderLabel(),
      ];
    }
    return this.renderLabel();
  }
  renderSelect() {
    const { disabled, el, isExpanded, labelPlacement, justify, placeholder, fill, shape } = this;
    const mode = ionicGlobal.getIonMode(this);
    const hasFloatingOrStackedLabel = labelPlacement === 'floating' || labelPlacement === 'stacked';
    const justifyEnabled = !hasFloatingOrStackedLabel;
    const rtl = dir.isRTL(el) ? 'rtl' : 'ltr';
    const inItem = theme.hostContext('ion-item', this.el);
    const shouldRenderHighlight = mode === 'md' && fill !== 'outline' && !inItem;
    return (index.h(index.Host, { onClick: this.onClick, class: theme.createColorClasses(this.color, {
        [mode]: true,
        'in-item': inItem,
        'in-item-color': theme.hostContext('ion-item.ion-color', el),
        'select-disabled': disabled,
        'select-expanded': isExpanded,
        'has-value': this.hasValue(),
        'has-placeholder': placeholder !== undefined,
        'ion-focusable': true,
        [`select-${rtl}`]: true,
        [`select-fill-${fill}`]: fill !== undefined,
        [`select-justify-${justify}`]: justifyEnabled,
        [`select-shape-${shape}`]: shape !== undefined,
        [`select-label-placement-${labelPlacement}`]: true,
      }) }, index.h("label", { class: "select-wrapper", id: "select-label" }, this.renderLabelContainer(), index.h("div", { class: "native-wrapper", ref: (el) => (this.nativeWrapperEl = el) }, this.renderSelectText(), !hasFloatingOrStackedLabel && this.renderSelectIcon(), this.renderListbox()), hasFloatingOrStackedLabel && this.renderSelectIcon(), shouldRenderHighlight && index.h("div", { class: "select-highlight" }))));
  }
  renderLegacySelect() {
    if (!this.hasLoggedDeprecationWarning) {
      index$1.printIonWarning(`ion-select now requires providing a label with either the "label" property or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the "label" property or the "aria-label" attribute.

Example: <ion-select label="Favorite Color">...</ion-select>
Example with aria-label: <ion-select aria-label="Favorite Color">...</ion-select>

Developers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.`, this.el);
      if (this.legacy) {
        index$1.printIonWarning(`ion-select is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.
    Developers can dismiss this warning by removing their usage of the "legacy" property and using the new select syntax.`, this.el);
      }
      this.hasLoggedDeprecationWarning = true;
    }
    const { disabled, el, inputId, isExpanded, name, placeholder, value } = this;
    const mode = ionicGlobal.getIonMode(this);
    const { labelText, labelId } = helpers.getAriaLabel(el, inputId);
    helpers.renderHiddenInput(true, el, name, parseValue(value), disabled);
    const displayValue = this.getText();
    let selectText = displayValue;
    if (selectText === '' && placeholder !== undefined) {
      selectText = placeholder;
    }
    const displayLabel = labelText !== undefined ? (selectText !== '' ? `${selectText}, ${labelText}` : labelText) : selectText;
    return (index.h(index.Host, { onClick: this.onClick, role: "button", "aria-haspopup": "listbox", "aria-disabled": disabled ? 'true' : null, "aria-label": displayLabel, class: {
        [mode]: true,
        'in-item': theme.hostContext('ion-item', el),
        'in-item-color': theme.hostContext('ion-item.ion-color', el),
        'select-disabled': disabled,
        'select-expanded': isExpanded,
        'legacy-select': true,
      } }, this.renderSelectText(), this.renderSelectIcon(), index.h("label", { id: labelId }, displayLabel), this.renderListbox()));
  }
  renderSelectText() {
    const { placeholder } = this;
    const displayValue = this.getText();
    let addPlaceholderClass = false;
    let selectText = displayValue;
    if (selectText === '' && placeholder !== undefined) {
      selectText = placeholder;
      addPlaceholderClass = true;
    }
    const selectTextClasses = {
      'select-text': true,
      'select-placeholder': addPlaceholderClass,
    };
    const textPart = addPlaceholderClass ? 'placeholder' : 'text';
    return (index.h("div", { "aria-hidden": "true", class: selectTextClasses, part: textPart }, selectText));
  }
  renderSelectIcon() {
    const mode = ionicGlobal.getIonMode(this);
    const icon = mode === 'ios' ? index$2.chevronExpand : index$2.caretDownSharp;
    return index.h("ion-icon", { class: "select-icon", part: "icon", "aria-hidden": "true", icon: icon });
  }
  get ariaLabel() {
    var _a;
    const { placeholder, label, el, inputId, inheritedAttributes } = this;
    const displayValue = this.getText();
    const { labelText } = helpers.getAriaLabel(el, inputId);
    const definedLabel = (_a = label !== null && label !== void 0 ? label : inheritedAttributes['aria-label']) !== null && _a !== void 0 ? _a : labelText;
    let renderedLabel = displayValue;
    if (renderedLabel === '' && placeholder !== undefined) {
      renderedLabel = placeholder;
    }
    if (definedLabel !== undefined) {
      renderedLabel = renderedLabel === '' ? definedLabel : `${definedLabel}, ${renderedLabel}`;
    }
    return renderedLabel;
  }
  renderListbox() {
    const { disabled, inputId, isExpanded } = this;
    return (index.h("button", { disabled: disabled, id: inputId, "aria-label": this.ariaLabel, "aria-haspopup": "listbox", "aria-expanded": `${isExpanded}`, onFocus: this.onFocus, onBlur: this.onBlur, ref: (focusEl) => (this.focusEl = focusEl) }));
  }
  render() {
    const { legacyFormController } = this;
    return legacyFormController.hasLegacyControl() ? this.renderLegacySelect() : this.renderSelect();
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "disabled": ["styleChanged"],
    "isExpanded": ["styleChanged"],
    "placeholder": ["styleChanged"],
    "value": ["styleChanged"]
  }; }
};
const isOptionSelected = (currentValue, compareValue, compareWith) => {
  if (currentValue === undefined) {
    return false;
  }
  if (Array.isArray(currentValue)) {
    return currentValue.some((val) => compareOptions(val, compareValue, compareWith));
  }
  else {
    return compareOptions(currentValue, compareValue, compareWith);
  }
};
const getOptionValue = (el) => {
  const value = el.value;
  return value === undefined ? el.textContent || '' : value;
};
const parseValue = (value) => {
  if (value == null) {
    return undefined;
  }
  if (Array.isArray(value)) {
    return value.join(',');
  }
  return value.toString();
};
const compareOptions = (currentValue, compareValue, compareWith) => {
  if (typeof compareWith === 'function') {
    return compareWith(currentValue, compareValue);
  }
  else if (typeof compareWith === 'string') {
    return currentValue[compareWith] === compareValue[compareWith];
  }
  else {
    return Array.isArray(compareValue) ? compareValue.includes(currentValue) : currentValue === compareValue;
  }
};
const generateText = (opts, value, compareWith) => {
  if (value === undefined) {
    return '';
  }
  if (Array.isArray(value)) {
    return value
      .map((v) => textForValue(opts, v, compareWith))
      .filter((opt) => opt !== null)
      .join(', ');
  }
  else {
    return textForValue(opts, value, compareWith) || '';
  }
};
const textForValue = (opts, value, compareWith) => {
  const selectOpt = opts.find((opt) => {
    return compareOptions(value, getOptionValue(opt), compareWith);
  });
  return selectOpt ? selectOpt.textContent : null;
};
let selectIds = 0;
const OPTION_CLASS = 'select-interface-option';
Select.style = {
  ios: selectIosCss,
  md: selectMdCss
};

const selectOptionCss = ":host{display:none}";

const SelectOption = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.inputId = `ion-selopt-${selectOptionIds++}`;
    this.disabled = false;
    this.value = undefined;
  }
  render() {
    return index.h(index.Host, { role: "option", id: this.inputId, class: ionicGlobal.getIonMode(this) });
  }
  get el() { return index.getElement(this); }
};
let selectOptionIds = 0;
SelectOption.style = selectOptionCss;

exports.ion_select = Select;
exports.ion_select_option = SelectOption;

//# sourceMappingURL=ion-select_2.cjs.entry.js.map
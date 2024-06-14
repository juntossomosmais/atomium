import{r as E,c as b,b as g,h as o,H as y,g as A,f as D}from"./index-Dmbs_eUD.js";import{c as W}from"./form-controller-d1a439dc-yINrMp-s.js";import{c as B}from"./notch-controller-44697c32-DvI8f75G.js";import{i as v,c as q}from"./compare-with-utils-2488ca6a-BecRFW1v.js";import{c as _,k as O,o as H,e as S,n as I}from"./helpers-079c01eb-D592YRe8.js";import{p as L}from"./index-f5dbb989-By3l89LO.js";import{h as Y,j as M,k as N}from"./overlays-9c065d0d-DO7D1mVM.js";import{i as R}from"./dir-861e8ef7-ebPfiN6E.js";import{h as f,c as U}from"./theme-516b22d6-DD5XIICl.js";import{w as K}from"./watch-options-17e39348-Dd4F1RiG.js";import{w as G,f as J}from"./index-8812fc40-DRCohVk1.js";import"./vue.esm-bundler-Cotndkpi.js";import"./iframe-CQFnB7GW.js";import"../sb-preview/runtime.js";import"./index-d9a82e80-B2PaWDFh.js";import"./hardware-back-button-3e887a79--cH0iCom.js";import"./framework-delegate-bec700a6-1EDJ8Ayl.js";const Q=":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--placeholder-color:currentColor;--placeholder-opacity:0.6;--background:transparent;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);--highlight-color:var(--highlight-color-focused);display:block;position:relative;font-family:var(--ion-font-family, inherit);white-space:nowrap;cursor:pointer;z-index:2}:host(:not(.legacy-select)){width:100%;min-height:44px}:host(.select-label-placement-floating),:host(.select-label-placement-stacked){min-height:56px}:host(.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.legacy-select){-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;align-items:center;overflow:hidden}:host(.in-item:not(.legacy-select)){flex:1 1 0}:host(.in-item.legacy-select){position:static;max-width:45%}:host(.select-disabled){pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}:host([slot=start]:not(.legacy-select)),:host([slot=end]:not(.legacy-select)){width:auto}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}:host(.legacy-select) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-select) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-select) label{left:0}:host-context([dir=rtl]):host(.legacy-select) label,:host-context([dir=rtl]).legacy-select label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-select:dir(rtl)) label{left:unset;right:unset;right:0}}}:host(.legacy-select) label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0;position:relative;flex-shrink:0}:host(.in-item-color) .select-icon{color:inherit}:host(.select-label-placement-stacked) .select-icon,:host(.select-label-placement-floating) .select-icon{position:absolute;height:100%}:host(.select-ltr.select-label-placement-stacked) .select-icon,:host(.select-ltr.select-label-placement-floating) .select-icon{right:var(--padding-end, 0)}:host(.select-rtl.select-label-placement-stacked) .select-icon,:host(.select-rtl.select-label-placement-floating) .select-icon{left:var(--padding-start, 0)}.select-text{flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:inherit;overflow:hidden}.select-wrapper{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:flex;position:relative;flex-grow:1;align-items:center;height:inherit;min-height:inherit;transition:background-color 15ms linear;background:var(--background);line-height:normal;cursor:inherit;box-sizing:border-box}.select-wrapper .select-placeholder{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.select-wrapper-inner{display:flex;align-items:center;overflow:hidden}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{flex-grow:1}:host(.ion-touched.ion-invalid){--highlight-color:var(--highlight-color-invalid)}:host(.ion-valid){--highlight-color:var(--highlight-color-valid)}.label-text-wrapper{display:flex;align-items:center;max-width:200px;transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text,::slotted([slot=label]){text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden,.select-outline-notch-hidden{display:none}.native-wrapper{display:flex;align-items:center;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);overflow:hidden}:host(.select-justify-space-between) .select-wrapper{justify-content:space-between}:host(.select-justify-start) .select-wrapper{justify-content:start}:host(.select-justify-end) .select-wrapper{justify-content:end}:host(.select-label-placement-start) .select-wrapper{flex-direction:row}:host(.select-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-end) .select-wrapper{flex-direction:row-reverse}:host(.select-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.select-label-placement-stacked) .select-wrapper,:host(.select-label-placement-floating) .select-wrapper{flex-direction:column;align-items:start}:host(.select-label-placement-stacked) .label-text-wrapper,:host(.select-label-placement-floating) .label-text-wrapper{max-width:100%}:host(.select-ltr.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-label-placement-floating) .label-text-wrapper{transform-origin:left top}:host(.select-rtl.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-label-placement-floating) .label-text-wrapper{transform-origin:right top}:host(.select-label-placement-stacked) .native-wrapper,:host(.select-label-placement-floating) .native-wrapper{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0;flex-grow:1;width:100%}:host(.select-label-placement-floating) .label-text-wrapper{transform:translateY(100%) scale(1)}:host(.select-label-placement-floating:not(.label-floating)) .native-wrapper .select-placeholder{opacity:0}:host(.select-expanded.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.ion-focused.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.has-value.select-label-placement-floating) .native-wrapper .select-placeholder{opacity:1}:host(.label-floating) .label-text-wrapper{transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}::slotted([slot=start]),::slotted([slot=end]){flex-shrink:0}::slotted([slot=start]){margin-inline-end:16px;margin-inline-start:0}::slotted([slot=end]){margin-inline-start:16px;margin-inline-end:0}:host(.legacy-select){--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px}.select-icon{width:1.125rem;height:1.125rem;color:var(--ion-color-step-650, #595959)}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{width:calc(100% - 1.125rem - 4px)}:host(.select-disabled){opacity:0.3}::slotted(ion-button[slot=start].button-has-icon-only),::slotted(ion-button[slot=end].button-has-icon-only){--border-radius:50%;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;aspect-ratio:1}",X=Q,Z=":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--placeholder-color:currentColor;--placeholder-opacity:0.6;--background:transparent;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #2dd36f);--highlight-color-invalid:var(--ion-color-danger, #eb445a);--highlight-color:var(--highlight-color-focused);display:block;position:relative;font-family:var(--ion-font-family, inherit);white-space:nowrap;cursor:pointer;z-index:2}:host(:not(.legacy-select)){width:100%;min-height:44px}:host(.select-label-placement-floating),:host(.select-label-placement-stacked){min-height:56px}:host(.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.legacy-select){-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;align-items:center;overflow:hidden}:host(.in-item:not(.legacy-select)){flex:1 1 0}:host(.in-item.legacy-select){position:static;max-width:45%}:host(.select-disabled){pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}:host([slot=start]:not(.legacy-select)),:host([slot=end]:not(.legacy-select)){width:auto}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}:host(.legacy-select) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-select) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-select) label{left:0}:host-context([dir=rtl]):host(.legacy-select) label,:host-context([dir=rtl]).legacy-select label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-select:dir(rtl)) label{left:unset;right:unset;right:0}}}:host(.legacy-select) label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0;position:relative;flex-shrink:0}:host(.in-item-color) .select-icon{color:inherit}:host(.select-label-placement-stacked) .select-icon,:host(.select-label-placement-floating) .select-icon{position:absolute;height:100%}:host(.select-ltr.select-label-placement-stacked) .select-icon,:host(.select-ltr.select-label-placement-floating) .select-icon{right:var(--padding-end, 0)}:host(.select-rtl.select-label-placement-stacked) .select-icon,:host(.select-rtl.select-label-placement-floating) .select-icon{left:var(--padding-start, 0)}.select-text{flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:inherit;overflow:hidden}.select-wrapper{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:flex;position:relative;flex-grow:1;align-items:center;height:inherit;min-height:inherit;transition:background-color 15ms linear;background:var(--background);line-height:normal;cursor:inherit;box-sizing:border-box}.select-wrapper .select-placeholder{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.select-wrapper-inner{display:flex;align-items:center;overflow:hidden}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{flex-grow:1}:host(.ion-touched.ion-invalid){--highlight-color:var(--highlight-color-invalid)}:host(.ion-valid){--highlight-color:var(--highlight-color-valid)}.label-text-wrapper{display:flex;align-items:center;max-width:200px;transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text,::slotted([slot=label]){text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden,.select-outline-notch-hidden{display:none}.native-wrapper{display:flex;align-items:center;transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);overflow:hidden}:host(.select-justify-space-between) .select-wrapper{justify-content:space-between}:host(.select-justify-start) .select-wrapper{justify-content:start}:host(.select-justify-end) .select-wrapper{justify-content:end}:host(.select-label-placement-start) .select-wrapper{flex-direction:row}:host(.select-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-end) .select-wrapper{flex-direction:row-reverse}:host(.select-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.select-label-placement-stacked) .select-wrapper,:host(.select-label-placement-floating) .select-wrapper{flex-direction:column;align-items:start}:host(.select-label-placement-stacked) .label-text-wrapper,:host(.select-label-placement-floating) .label-text-wrapper{max-width:100%}:host(.select-ltr.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-label-placement-floating) .label-text-wrapper{transform-origin:left top}:host(.select-rtl.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-label-placement-floating) .label-text-wrapper{transform-origin:right top}:host(.select-label-placement-stacked) .native-wrapper,:host(.select-label-placement-floating) .native-wrapper{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0;flex-grow:1;width:100%}:host(.select-label-placement-floating) .label-text-wrapper{transform:translateY(100%) scale(1)}:host(.select-label-placement-floating:not(.label-floating)) .native-wrapper .select-placeholder{opacity:0}:host(.select-expanded.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.ion-focused.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.has-value.select-label-placement-floating) .native-wrapper .select-placeholder{opacity:1}:host(.label-floating) .label-text-wrapper{transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}::slotted([slot=start]),::slotted([slot=end]){flex-shrink:0}::slotted([slot=start]){margin-inline-end:16px;margin-inline-start:0}::slotted([slot=end]){margin-inline-start:16px;margin-inline-end:0}:host(.select-fill-solid){--background:var(--ion-color-step-50, #f2f2f2);--border-color:var(--ion-color-step-500, gray);--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}:host(.select-fill-solid) .select-wrapper{border-bottom:var(--border-width) var(--border-style) var(--border-color)}:host(.has-focus.select-fill-solid.ion-valid),:host(.select-fill-solid.ion-touched.ion-invalid){--border-color:var(--highlight-color)}:host(.select-fill-solid) .select-bottom{border-top:none}@media (any-hover: hover){:host(.select-fill-solid:hover){--background:var(--ion-color-step-100, #e6e6e6);--border-color:var(--ion-color-step-750, #404040)}}:host(.select-fill-solid.select-expanded),:host(.select-fill-solid.ion-focused){--background:var(--ion-color-step-150, #d9d9d9);--border-color:var(--ion-color-step-750, #404040)}:host(.select-fill-solid) .select-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0px;border-bottom-left-radius:0px}:host-context([dir=rtl]):host(.select-fill-solid) .select-wrapper,:host-context([dir=rtl]).select-fill-solid .select-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0px;border-bottom-left-radius:0px}@supports selector(:dir(rtl)){:host(.select-fill-solid:dir(rtl)) .select-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0px;border-bottom-left-radius:0px}}:host(.label-floating.select-fill-solid) .label-text-wrapper{max-width:calc(100% / 0.75)}:host(.select-fill-outline){--border-color:var(--ion-color-step-300, #b3b3b3);--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}:host(.select-fill-outline.select-shape-round){--border-radius:28px;--padding-start:32px;--padding-end:32px}:host(.has-focus.select-fill-outline.ion-valid),:host(.select-fill-outline.ion-touched.ion-invalid){--border-color:var(--highlight-color)}@media (any-hover: hover){:host(.select-fill-outline:hover){--border-color:var(--ion-color-step-750, #404040)}}:host(.select-fill-outline.select-expanded),:host(.select-fill-outline.ion-focused){--border-width:2px;--border-color:var(--highlight-color)}:host(.select-fill-outline) .select-bottom{border-top:none}:host(.select-fill-outline) .select-wrapper{border-bottom:none}:host(.select-ltr.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-fill-outline.select-label-placement-floating) .label-text-wrapper{transform-origin:left top}:host(.select-rtl.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-fill-outline.select-label-placement-floating) .label-text-wrapper{transform-origin:right top}:host(.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-fill-outline.select-label-placement-floating) .label-text-wrapper{position:absolute;max-width:calc(100% - var(--padding-start) - var(--padding-end))}:host(.select-fill-outline) .label-text-wrapper{position:relative;z-index:1}:host(.label-floating.select-fill-outline) .label-text-wrapper{transform:translateY(-32%) scale(0.75);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;max-width:calc((100% - var(--padding-start) - var(--padding-end) - 8px) / 0.75)}:host(.select-fill-outline.select-label-placement-stacked) select,:host(.select-fill-outline.select-label-placement-floating) select{margin-left:0;margin-right:0;margin-top:6px;margin-bottom:6px}:host(.select-fill-outline) .select-outline-container{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;width:100%;height:100%}:host(.select-fill-outline) .select-outline-start,:host(.select-fill-outline) .select-outline-end{pointer-events:none}:host(.select-fill-outline) .select-outline-start,:host(.select-fill-outline) .select-outline-notch,:host(.select-fill-outline) .select-outline-end{border-top:var(--border-width) var(--border-style) var(--border-color);border-bottom:var(--border-width) var(--border-style) var(--border-color);box-sizing:border-box}:host(.select-fill-outline) .select-outline-notch{max-width:calc(100% - var(--padding-start) - var(--padding-end))}:host(.select-fill-outline) .notch-spacer{-webkit-padding-end:8px;padding-inline-end:8px;font-size:calc(1em * 0.75);opacity:0;pointer-events:none}:host(.select-fill-outline) .select-outline-start{-webkit-border-start:var(--border-width) var(--border-style) var(--border-color);border-inline-start:var(--border-width) var(--border-style) var(--border-color)}:host(.select-ltr.select-fill-outline) .select-outline-start{border-radius:var(--border-radius) 0px 0px var(--border-radius)}:host(.select-rtl.select-fill-outline) .select-outline-start{border-radius:0px var(--border-radius) var(--border-radius) 0px}:host(.select-fill-outline) .select-outline-start{width:calc(var(--padding-start) - 4px)}:host(.select-fill-outline) .select-outline-end{-webkit-border-end:var(--border-width) var(--border-style) var(--border-color);border-inline-end:var(--border-width) var(--border-style) var(--border-color)}:host(.select-ltr.select-fill-outline) .select-outline-end{border-radius:0px var(--border-radius) var(--border-radius) 0px}:host(.select-rtl.select-fill-outline) .select-outline-end{border-radius:var(--border-radius) 0px 0px var(--border-radius)}:host(.select-fill-outline) .select-outline-end{flex-grow:1}:host(.label-floating.select-fill-outline) .select-outline-notch{border-top:none}:host{--border-width:1px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))))}:host(.legacy-select){--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:0.8125rem;transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);color:var(--ion-color-step-500, gray)}:host(.select-label-placement-floating.select-expanded) .label-text-wrapper,:host(.select-label-placement-floating.ion-focused) .label-text-wrapper,:host(.select-label-placement-stacked.select-expanded) .label-text-wrapper,:host(.select-label-placement-stacked.ion-focused) .label-text-wrapper{color:var(--highlight-color)}:host(.has-focus.select-label-placement-floating.ion-valid) .label-text-wrapper,:host(.select-label-placement-floating.ion-touched.ion-invalid) .label-text-wrapper,:host(.has-focus.select-label-placement-stacked.ion-valid) .label-text-wrapper,:host(.select-label-placement-stacked.ion-touched.ion-invalid) .label-text-wrapper{color:var(--highlight-color)}.select-highlight{bottom:-1px;position:absolute;width:100%;height:2px;transform:scale(0);transition:transform 200ms;background:var(--highlight-color)}@supports (inset-inline-start: 0){.select-highlight{inset-inline-start:0}}@supports not (inset-inline-start: 0){.select-highlight{left:0}:host-context([dir=rtl]) .select-highlight{left:unset;right:unset;right:0}[dir=rtl] .select-highlight{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.select-highlight:dir(rtl){left:unset;right:unset;right:0}}}:host(.select-expanded) .select-highlight,:host(.ion-focused) .select-highlight{transform:scale(1)}:host(.in-item) .select-highlight{bottom:0}@supports (inset-inline-start: 0){:host(.in-item) .select-highlight{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.in-item) .select-highlight{left:0}:host-context([dir=rtl]):host(.in-item) .select-highlight,:host-context([dir=rtl]).in-item .select-highlight{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.in-item:dir(rtl)) .select-highlight{left:unset;right:unset;right:0}}}:host(.select-expanded:not(.legacy-select):not(.has-expanded-icon)) .select-icon{transform:rotate(180deg)}:host(.select-expanded) .select-wrapper .select-icon,:host(.has-focus.ion-valid) .select-wrapper .select-icon,:host(.ion-touched.ion-invalid) .select-wrapper .select-icon,:host(.ion-focused) .select-wrapper .select-icon{color:var(--highlight-color)}:host-context(.item-label-stacked) .select-icon,:host-context(.item-label-floating:not(.item-fill-outline)) .select-icon,:host-context(.item-label-floating.item-fill-outline){transform:translate3d(0,  -9px,  0)}:host-context(.item-has-focus):host(:not(.has-expanded-icon)) .select-icon{transform:rotate(180deg)}:host-context(.item-has-focus.item-label-stacked):host(:not(.has-expanded-icon)) .select-icon,:host-context(.item-has-focus.item-label-floating:not(.item-fill-outline)):host(:not(.has-expanded-icon)) .select-icon{transform:translate3d(0,  -9px,  0) rotate(180deg)}:host(.select-shape-round){--border-radius:16px}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{width:calc(100% - 0.8125rem - 4px)}:host(.select-disabled){opacity:0.38}::slotted(ion-button[slot=start].button-has-icon-only),::slotted(ion-button[slot=end].button-has-icon-only){--border-radius:50%;--padding-start:8px;--padding-end:8px;--padding-top:8px;--padding-bottom:8px;aspect-ratio:1;min-height:40px}",ee=Z,te=class{constructor(e){E(this,e),this.ionChange=b(this,"ionChange",7),this.ionCancel=b(this,"ionCancel",7),this.ionDismiss=b(this,"ionDismiss",7),this.ionFocus=b(this,"ionFocus",7),this.ionBlur=b(this,"ionBlur",7),this.ionStyle=b(this,"ionStyle",7),this.inputId=`ion-sel-${ie++}`,this.inheritedAttributes={},this.hasLoggedDeprecationWarning=!1,this.onClick=t=>{const i=t.target,l=i.closest('[slot="start"], [slot="end"]');i===this.el||l===null?(this.setFocus(),this.open(t)):t.preventDefault()},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.isExpanded=!1,this.cancelText="Cancel",this.color=void 0,this.compareWith=void 0,this.disabled=!1,this.fill=void 0,this.interface="alert",this.interfaceOptions={},this.justify="space-between",this.label=void 0,this.labelPlacement="start",this.legacy=void 0,this.multiple=!1,this.name=this.inputId,this.okText="OK",this.placeholder=void 0,this.selectedText=void 0,this.toggleIcon=void 0,this.expandedIcon=void 0,this.shape=void 0,this.value=void 0}styleChanged(){this.emitStyle()}setValue(e){this.value=e,this.ionChange.emit({value:e})}componentWillLoad(){this.inheritedAttributes=_(this.el,["aria-label"])}async connectedCallback(){const{el:e}=this;this.legacyFormController=W(e),this.notchController=B(e,()=>this.notchSpacerEl,()=>this.labelSlot),this.updateOverlayOptions(),this.emitStyle(),this.mutationO=K(this.el,"ion-select-option",async()=>{this.updateOverlayOptions(),D(this)})}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0),this.notchController&&(this.notchController.destroy(),this.notchController=void 0)}async open(e){if(this.disabled||this.isExpanded)return;this.isExpanded=!0;const t=this.overlay=await this.createOverlay(e);if(t.onDidDismiss().then(()=>{this.overlay=void 0,this.isExpanded=!1,this.ionDismiss.emit(),this.setFocus()}),await t.present(),this.interface==="popover"){const i=this.childOpts.map(l=>l.value).indexOf(this.value);if(i>-1){const l=t.querySelector(`.select-interface-option:nth-child(${i+1})`);if(l){O(l);const s=l.querySelector("ion-radio, ion-checkbox");s&&s.focus()}}else{const l=t.querySelector("ion-radio:not(.radio-disabled), ion-checkbox:not(.checkbox-disabled)");l&&(O(l.closest("ion-item")),l.focus())}}return t}createOverlay(e){let t=this.interface;return t==="action-sheet"&&this.multiple&&(console.warn(`Select interface cannot be "${t}" with a multi-value select. Using the "alert" interface instead.`),t="alert"),t==="popover"&&!e&&(console.warn(`Select interface cannot be a "${t}" without passing an event. Using the "alert" interface instead.`),t="alert"),t==="action-sheet"?this.openActionSheet():t==="popover"?this.openPopover(e):this.openAlert()}updateOverlayOptions(){const e=this.overlay;if(!e)return;const t=this.childOpts,i=this.value;switch(this.interface){case"action-sheet":e.buttons=this.createActionSheetButtons(t,i);break;case"popover":const l=e.querySelector("ion-select-popover");l&&(l.options=this.createPopoverOptions(t,i));break;case"alert":const s=this.multiple?"checkbox":"radio";e.inputs=this.createAlertInputs(t,s,i);break}}createActionSheetButtons(e,t){const i=e.map(l=>{const s=x(l),a=Array.from(l.classList).filter(n=>n!=="hydrated").join(" "),r=`${w} ${a}`;return{role:v(t,s,this.compareWith)?"selected":"",text:l.textContent,cssClass:r,handler:()=>{this.setValue(s)}}});return i.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}}),i}createAlertInputs(e,t,i){return e.map(s=>{const a=x(s),r=Array.from(s.classList).filter(d=>d!=="hydrated").join(" "),n=`${w} ${r}`;return{type:t,cssClass:n,label:s.textContent||"",value:a,checked:v(i,a,this.compareWith),disabled:s.disabled}})}createPopoverOptions(e,t){return e.map(l=>{const s=x(l),a=Array.from(l.classList).filter(n=>n!=="hydrated").join(" "),r=`${w} ${a}`;return{text:l.textContent||"",cssClass:r,value:s,checked:v(t,s,this.compareWith),disabled:l.disabled,handler:n=>{this.setValue(n),this.multiple||this.close()}}})}async openPopover(e){const{fill:t,labelPlacement:i}=this,l=this.interfaceOptions,s=g(this),a=s!=="md",r=this.multiple,n=this.value;let d=e,c="auto";if(this.legacyFormController.hasLegacyControl()){const p=this.el.closest("ion-item");p&&(p.classList.contains("item-label-floating")||p.classList.contains("item-label-stacked"))&&(d=Object.assign(Object.assign({},e),{detail:{ionShadowTarget:p}}),c="cover")}else i==="floating"||i==="stacked"||s==="md"&&t!==void 0?c="cover":d=Object.assign(Object.assign({},e),{detail:{ionShadowTarget:this.nativeWrapperEl}});const u=Object.assign(Object.assign({mode:s,event:d,alignment:"center",size:c,showBackdrop:a},l),{component:"ion-select-popover",cssClass:["select-popover",l.cssClass],componentProps:{header:l.header,subHeader:l.subHeader,message:l.message,multiple:r,value:n,options:this.createPopoverOptions(this.childOpts,n)}});return Y.create(u)}async openActionSheet(){const e=g(this),t=this.interfaceOptions,i=Object.assign(Object.assign({mode:e},t),{buttons:this.createActionSheetButtons(this.childOpts,this.value),cssClass:["select-action-sheet",t.cssClass]});return M.create(i)}async openAlert(){let e,t;this.legacyFormController.hasLegacyControl()?(e=this.getLabel(),t=e?e.textContent:null):t=this.labelText;const i=this.interfaceOptions,l=this.multiple?"checkbox":"radio",s=g(this),a=Object.assign(Object.assign({mode:s},i),{header:i.header?i.header:t,inputs:this.createAlertInputs(this.childOpts,l,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}},{text:this.okText,handler:r=>{this.setValue(r)}}],cssClass:["select-alert",i.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return N.create(a)}close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}getLabel(){return H(this.el)}hasValue(){return this.getText()!==""}get childOpts(){return Array.from(this.el.querySelectorAll("ion-select-option"))}get labelText(){const{label:e}=this;if(e!==void 0)return e;const{labelSlot:t}=this;if(t!==null)return t.textContent}getText(){const e=this.selectedText;return e!=null&&e!==""?e:le(this.childOpts,this.value,this.compareWith)}setFocus(){this.focusEl&&this.focusEl.focus()}emitStyle(){const{disabled:e}=this,t={"interactive-disabled":e};this.legacyFormController.hasLegacyControl()&&(t.interactive=!0,t.select=!0,t["select-disabled"]=e,t["has-placeholder"]=this.placeholder!==void 0,t["has-value"]=this.hasValue(),t["has-focus"]=this.isExpanded,t.legacy=!!this.legacy),this.ionStyle.emit(t)}renderLabel(){const{label:e}=this;return o("div",{class:{"label-text-wrapper":!0,"label-text-wrapper-hidden":!this.hasLabel},part:"label"},e===void 0?o("slot",{name:"label"}):o("div",{class:"label-text"},e))}componentDidRender(){var e;(e=this.notchController)===null||e===void 0||e.calculateNotchWidth()}get labelSlot(){return this.el.querySelector('[slot="label"]')}get hasLabel(){return this.label!==void 0||this.labelSlot!==null}renderLabelContainer(){return g(this)==="md"&&this.fill==="outline"?[o("div",{class:"select-outline-container"},o("div",{class:"select-outline-start"}),o("div",{class:{"select-outline-notch":!0,"select-outline-notch-hidden":!this.hasLabel}},o("div",{class:"notch-spacer","aria-hidden":"true",ref:i=>this.notchSpacerEl=i},this.label)),o("div",{class:"select-outline-end"})),this.renderLabel()]:this.renderLabel()}renderSelect(){const{disabled:e,el:t,isExpanded:i,expandedIcon:l,labelPlacement:s,justify:a,placeholder:r,fill:n,shape:d,name:c,value:u}=this,p=g(this),h=s==="floating"||s==="stacked",m=!h,F=R(t)?"rtl":"ltr",k=f("ion-item",this.el),z=p==="md"&&n!=="outline"&&!k,C=this.hasValue(),$=t.querySelector('[slot="start"], [slot="end"]')!==null;S(!0,t,c,T(u),e);const V=s==="stacked"||s==="floating"&&(C||i||$);return o(y,{onClick:this.onClick,class:U(this.color,{[p]:!0,"in-item":k,"in-item-color":f("ion-item.ion-color",t),"select-disabled":e,"select-expanded":i,"has-expanded-icon":l!==void 0,"has-value":C,"label-floating":V,"has-placeholder":r!==void 0,"ion-focusable":!0,[`select-${F}`]:!0,[`select-fill-${n}`]:n!==void 0,[`select-justify-${a}`]:m,[`select-shape-${d}`]:d!==void 0,[`select-label-placement-${s}`]:!0})},o("label",{class:"select-wrapper",id:"select-label"},this.renderLabelContainer(),o("div",{class:"select-wrapper-inner"},o("slot",{name:"start"}),o("div",{class:"native-wrapper",ref:P=>this.nativeWrapperEl=P,part:"container"},this.renderSelectText(),this.renderListbox()),o("slot",{name:"end"}),!h&&this.renderSelectIcon()),h&&this.renderSelectIcon(),z&&o("div",{class:"select-highlight"})))}renderLegacySelect(){this.hasLoggedDeprecationWarning||(L(`ion-select now requires providing a label with either the "label" property or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the "label" property or the "aria-label" attribute.

Example: <ion-select label="Favorite Color">...</ion-select>
Example with aria-label: <ion-select aria-label="Favorite Color">...</ion-select>

Developers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.`,this.el),this.legacy&&L(`ion-select is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.
    Developers can dismiss this warning by removing their usage of the "legacy" property and using the new select syntax.`,this.el),this.hasLoggedDeprecationWarning=!0);const{disabled:e,el:t,inputId:i,isExpanded:l,expandedIcon:s,name:a,placeholder:r,value:n}=this,d=g(this),{labelText:c,labelId:u}=I(t,i);S(!0,t,a,T(n),e);let h=this.getText();h===""&&r!==void 0&&(h=r);const m=c!==void 0?h!==""?`${h}, ${c}`:c:h;return o(y,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":e?"true":null,"aria-label":m,class:{[d]:!0,"in-item":f("ion-item",t),"in-item-color":f("ion-item.ion-color",t),"select-disabled":e,"select-expanded":l,"has-expanded-icon":s!==void 0,"legacy-select":!0}},this.renderSelectText(),this.renderSelectIcon(),o("label",{id:u},m),this.renderListbox())}renderSelectText(){const{placeholder:e}=this,t=this.getText();let i=!1,l=t;return l===""&&e!==void 0&&(l=e,i=!0),o("div",{"aria-hidden":"true",class:{"select-text":!0,"select-placeholder":i},part:i?"placeholder":"text"},l)}renderSelectIcon(){const e=g(this),{isExpanded:t,toggleIcon:i,expandedIcon:l}=this;let s;return t&&l!==void 0?s=l:s=i??(e==="ios"?G:J),o("ion-icon",{class:"select-icon",part:"icon","aria-hidden":"true",icon:s})}get ariaLabel(){var e,t;const{placeholder:i,el:l,inputId:s,inheritedAttributes:a}=this,r=this.getText(),{labelText:n}=I(l,s),d=(t=(e=this.labelText)!==null&&e!==void 0?e:a["aria-label"])!==null&&t!==void 0?t:n;let c=r;return c===""&&i!==void 0&&(c=i),d!==void 0&&(c=c===""?d:`${d}, ${c}`),c}renderListbox(){const{disabled:e,inputId:t,isExpanded:i}=this;return o("button",{disabled:e,id:t,"aria-label":this.ariaLabel,"aria-haspopup":"dialog","aria-expanded":`${i}`,onFocus:this.onFocus,onBlur:this.onBlur,ref:l=>this.focusEl=l})}render(){const{legacyFormController:e}=this;return e.hasLegacyControl()?this.renderLegacySelect():this.renderSelect()}get el(){return A(this)}static get watchers(){return{disabled:["styleChanged"],isExpanded:["styleChanged"],placeholder:["styleChanged"],value:["styleChanged"]}}},x=e=>{const t=e.value;return t===void 0?e.textContent||"":t},T=e=>{if(e!=null)return Array.isArray(e)?e.join(","):e.toString()},le=(e,t,i)=>t===void 0?"":Array.isArray(t)?t.map(l=>j(e,l,i)).filter(l=>l!==null).join(", "):j(e,t,i)||"",j=(e,t,i)=>{const l=e.find(s=>q(t,x(s),i));return l?l.textContent:null};let ie=0;const w="select-interface-option";te.style={ios:X,md:ee};const se=":host{display:none}",oe=se,ae=class{constructor(e){E(this,e),this.inputId=`ion-selopt-${ne++}`,this.disabled=!1,this.value=void 0}render(){return o(y,{key:"abf6e85d60e815f59077910abec922826bf46eb2",role:"option",id:this.inputId,class:g(this)})}get el(){return A(this)}};let ne=0;ae.style=oe;export{te as ion_select,ae as ion_select_option};

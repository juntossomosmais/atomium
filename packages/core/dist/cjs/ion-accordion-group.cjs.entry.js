'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');
const index$1 = require('./index-aabf0f95.js');

const accordionGroupIosCss = ":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}";

const accordionGroupMdCss = ":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";

const AccordionGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionChange = index.createEvent(this, "ionChange", 7);
    this.ionValueChange = index.createEvent(this, "ionValueChange", 7);
    this.animated = true;
    this.multiple = undefined;
    this.value = undefined;
    this.disabled = false;
    this.readonly = false;
    this.expand = 'compact';
  }
  valueChanged() {
    const { value, multiple } = this;
    if (!multiple && Array.isArray(value)) {
      index$1.printIonWarning(`ion-accordion-group was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".

  Value Passed: [${value.map((v) => `'${v}'`).join(', ')}]
`, this.el);
    }
    this.ionValueChange.emit({ value: this.value });
  }
  async disabledChanged() {
    const { disabled } = this;
    const accordions = await this.getAccordions();
    for (const accordion of accordions) {
      accordion.disabled = disabled;
    }
  }
  async readonlyChanged() {
    const { readonly } = this;
    const accordions = await this.getAccordions();
    for (const accordion of accordions) {
      accordion.readonly = readonly;
    }
  }
  async onKeydown(ev) {
    const activeElement = document.activeElement;
    if (!activeElement) {
      return;
    }
    const activeAccordionHeader = activeElement.closest('ion-accordion [slot="header"]');
    if (!activeAccordionHeader) {
      return;
    }
    const accordionEl = activeElement.tagName === 'ION-ACCORDION' ? activeElement : activeElement.closest('ion-accordion');
    if (!accordionEl) {
      return;
    }
    const closestGroup = accordionEl.closest('ion-accordion-group');
    if (closestGroup !== this.el) {
      return;
    }
    const accordions = await this.getAccordions();
    const startingIndex = accordions.findIndex((a) => a === accordionEl);
    if (startingIndex === -1) {
      return;
    }
    let accordion;
    if (ev.key === 'ArrowDown') {
      accordion = this.findNextAccordion(accordions, startingIndex);
    }
    else if (ev.key === 'ArrowUp') {
      accordion = this.findPreviousAccordion(accordions, startingIndex);
    }
    else if (ev.key === 'Home') {
      accordion = accordions[0];
    }
    else if (ev.key === 'End') {
      accordion = accordions[accordions.length - 1];
    }
    if (accordion !== undefined && accordion !== activeElement) {
      accordion.focus();
    }
  }
  async componentDidLoad() {
    if (this.disabled) {
      this.disabledChanged();
    }
    if (this.readonly) {
      this.readonlyChanged();
    }
  }
  setValue(accordionValue) {
    const value = (this.value = accordionValue);
    this.ionChange.emit({ value });
  }
  async requestAccordionToggle(accordionValue, accordionExpand) {
    const { multiple, value, readonly, disabled } = this;
    if (readonly || disabled) {
      return;
    }
    if (accordionExpand) {
      if (multiple) {
        const groupValue = value !== null && value !== void 0 ? value : [];
        const processedValue = Array.isArray(groupValue) ? groupValue : [groupValue];
        const valueExists = processedValue.find((v) => v === accordionValue);
        if (valueExists === undefined && accordionValue !== undefined) {
          this.setValue([...processedValue, accordionValue]);
        }
      }
      else {
        this.setValue(accordionValue);
      }
    }
    else {
      if (multiple) {
        const groupValue = value !== null && value !== void 0 ? value : [];
        const processedValue = Array.isArray(groupValue) ? groupValue : [groupValue];
        this.setValue(processedValue.filter((v) => v !== accordionValue));
      }
      else {
        this.setValue(undefined);
      }
    }
  }
  findNextAccordion(accordions, startingIndex) {
    const nextAccordion = accordions[startingIndex + 1];
    if (nextAccordion === undefined) {
      return accordions[0];
    }
    return nextAccordion;
  }
  findPreviousAccordion(accordions, startingIndex) {
    const prevAccordion = accordions[startingIndex - 1];
    if (prevAccordion === undefined) {
      return accordions[accordions.length - 1];
    }
    return prevAccordion;
  }
  async getAccordions() {
    return Array.from(this.el.querySelectorAll(':scope > ion-accordion'));
  }
  render() {
    const { disabled, readonly, expand } = this;
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { class: {
        [mode]: true,
        'accordion-group-disabled': disabled,
        'accordion-group-readonly': readonly,
        [`accordion-group-expand-${expand}`]: true,
      }, role: "presentation" }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"],
    "disabled": ["disabledChanged"],
    "readonly": ["readonlyChanged"]
  }; }
};
AccordionGroup.style = {
  ios: accordionGroupIosCss,
  md: accordionGroupMdCss
};

exports.ion_accordion_group = AccordionGroup;

//# sourceMappingURL=ion-accordion-group.cjs.entry.js.map
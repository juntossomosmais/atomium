import { r as registerInstance, h, H as Host, e as getElement } from './index-a869d52d.js';
import { c as chevronDown } from './index-3c3facbc.js';
import { c as config, g as getIonMode } from './ionic-global-4a637317.js';
import { r as raf, a as addEventListener, b as removeEventListener, g as getElementRoot, t as transitionEndAsync } from './helpers-937ea457.js';

const accordionIosCss = ":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}";

const accordionMdCss = ":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{transition:none !important}}";

const Accordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.updateListener = () => this.updateState(false);
    this.setItemDefaults = () => {
      const ionItem = this.getSlottedHeaderIonItem();
      if (!ionItem) {
        return;
      }
      ionItem.button = true;
      ionItem.detail = false;
      if (ionItem.lines === undefined) {
        ionItem.lines = 'full';
      }
    };
    this.getSlottedHeaderIonItem = () => {
      const { headerEl } = this;
      if (!headerEl) {
        return;
      }
      const slot = headerEl.querySelector('slot');
      if (!slot) {
        return;
      }
      if (slot.assignedElements === undefined)
        return;
      return slot.assignedElements().find((el) => el.tagName === 'ION-ITEM');
    };
    this.setAria = (expanded = false) => {
      const ionItem = this.getSlottedHeaderIonItem();
      if (!ionItem) {
        return;
      }
      const root = getElementRoot(ionItem);
      const button = root.querySelector('button');
      if (!button) {
        return;
      }
      button.setAttribute('aria-expanded', `${expanded}`);
    };
    this.slotToggleIcon = () => {
      const ionItem = this.getSlottedHeaderIonItem();
      if (!ionItem) {
        return;
      }
      const { toggleIconSlot, toggleIcon } = this;
      const existingToggleIcon = ionItem.querySelector('.ion-accordion-toggle-icon');
      if (existingToggleIcon) {
        return;
      }
      const iconEl = document.createElement('ion-icon');
      iconEl.slot = toggleIconSlot;
      iconEl.lazy = false;
      iconEl.classList.add('ion-accordion-toggle-icon');
      iconEl.icon = toggleIcon;
      iconEl.setAttribute('aria-hidden', 'true');
      ionItem.appendChild(iconEl);
    };
    this.expandAccordion = (initialUpdate = false) => {
      const { contentEl, contentElWrapper } = this;
      if (initialUpdate || contentEl === undefined || contentElWrapper === undefined) {
        this.state = 4;
        return;
      }
      if (this.state === 4) {
        return;
      }
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (this.shouldAnimate()) {
        raf(() => {
          this.state = 8;
          this.currentRaf = raf(async () => {
            const contentHeight = contentElWrapper.offsetHeight;
            const waitForTransition = transitionEndAsync(contentEl, 2000);
            contentEl.style.setProperty('max-height', `${contentHeight}px`);
            await waitForTransition;
            this.state = 4;
            contentEl.style.removeProperty('max-height');
          });
        });
      }
      else {
        this.state = 4;
      }
    };
    this.collapseAccordion = (initialUpdate = false) => {
      const { contentEl } = this;
      if (initialUpdate || contentEl === undefined) {
        this.state = 1;
        return;
      }
      if (this.state === 1) {
        return;
      }
      if (this.currentRaf !== undefined) {
        cancelAnimationFrame(this.currentRaf);
      }
      if (this.shouldAnimate()) {
        this.currentRaf = raf(async () => {
          const contentHeight = contentEl.offsetHeight;
          contentEl.style.setProperty('max-height', `${contentHeight}px`);
          raf(async () => {
            const waitForTransition = transitionEndAsync(contentEl, 2000);
            this.state = 2;
            await waitForTransition;
            this.state = 1;
            contentEl.style.removeProperty('max-height');
          });
        });
      }
      else {
        this.state = 1;
      }
    };
    this.shouldAnimate = () => {
      if (typeof window === 'undefined') {
        return false;
      }
      const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return false;
      }
      const animated = config.get('animated', true);
      if (!animated) {
        return false;
      }
      if (this.accordionGroupEl && !this.accordionGroupEl.animated) {
        return false;
      }
      return true;
    };
    this.updateState = async (initialUpdate = false) => {
      const accordionGroup = this.accordionGroupEl;
      const accordionValue = this.value;
      if (!accordionGroup) {
        return;
      }
      const value = accordionGroup.value;
      const shouldExpand = Array.isArray(value) ? value.includes(accordionValue) : value === accordionValue;
      if (shouldExpand) {
        this.expandAccordion(initialUpdate);
        this.isNext = this.isPrevious = false;
      }
      else {
        this.collapseAccordion(initialUpdate);
        const nextAccordion = this.getNextSibling();
        const nextAccordionValue = nextAccordion === null || nextAccordion === void 0 ? void 0 : nextAccordion.value;
        if (nextAccordionValue !== undefined) {
          this.isPrevious = Array.isArray(value) ? value.includes(nextAccordionValue) : value === nextAccordionValue;
        }
        const previousAccordion = this.getPreviousSibling();
        const previousAccordionValue = previousAccordion === null || previousAccordion === void 0 ? void 0 : previousAccordion.value;
        if (previousAccordionValue !== undefined) {
          this.isNext = Array.isArray(value) ? value.includes(previousAccordionValue) : value === previousAccordionValue;
        }
      }
    };
    this.getNextSibling = () => {
      if (!this.el) {
        return;
      }
      const nextSibling = this.el.nextElementSibling;
      if ((nextSibling === null || nextSibling === void 0 ? void 0 : nextSibling.tagName) !== 'ION-ACCORDION') {
        return;
      }
      return nextSibling;
    };
    this.getPreviousSibling = () => {
      if (!this.el) {
        return;
      }
      const previousSibling = this.el.previousElementSibling;
      if ((previousSibling === null || previousSibling === void 0 ? void 0 : previousSibling.tagName) !== 'ION-ACCORDION') {
        return;
      }
      return previousSibling;
    };
    this.state = 1;
    this.isNext = false;
    this.isPrevious = false;
    this.value = `ion-accordion-${accordionIds++}`;
    this.disabled = false;
    this.readonly = false;
    this.toggleIcon = chevronDown;
    this.toggleIconSlot = 'end';
  }
  connectedCallback() {
    var _a;
    const accordionGroupEl = (this.accordionGroupEl = (_a = this.el) === null || _a === void 0 ? void 0 : _a.closest('ion-accordion-group'));
    if (accordionGroupEl) {
      this.updateState(true);
      addEventListener(accordionGroupEl, 'ionValueChange', this.updateListener);
    }
  }
  disconnectedCallback() {
    const accordionGroupEl = this.accordionGroupEl;
    if (accordionGroupEl) {
      removeEventListener(accordionGroupEl, 'ionValueChange', this.updateListener);
    }
  }
  componentDidLoad() {
    this.setItemDefaults();
    this.slotToggleIcon();
    raf(() => {
      const expanded = this.state === 4 || this.state === 8;
      this.setAria(expanded);
    });
  }
  toggleExpanded() {
    const { accordionGroupEl, value, state } = this;
    if (accordionGroupEl) {
      const expand = state === 1 || state === 2;
      accordionGroupEl.requestAccordionToggle(value, expand);
    }
  }
  render() {
    const { disabled, readonly } = this;
    const mode = getIonMode(this);
    const expanded = this.state === 4 || this.state === 8;
    const headerPart = expanded ? 'header expanded' : 'header';
    const contentPart = expanded ? 'content expanded' : 'content';
    this.setAria(expanded);
    return (h(Host, { class: {
        [mode]: true,
        'accordion-expanding': this.state === 8,
        'accordion-expanded': this.state === 4,
        'accordion-collapsing': this.state === 2,
        'accordion-collapsed': this.state === 1,
        'accordion-next': this.isNext,
        'accordion-previous': this.isPrevious,
        'accordion-disabled': disabled,
        'accordion-readonly': readonly,
        'accordion-animated': config.getBoolean('animated', true),
      } }, h("div", { onClick: () => this.toggleExpanded(), id: "header", part: headerPart, "aria-controls": "content", ref: (headerEl) => (this.headerEl = headerEl) }, h("slot", { name: "header" })), h("div", { id: "content", part: contentPart, role: "region", "aria-labelledby": "header", ref: (contentEl) => (this.contentEl = contentEl) }, h("div", { id: "content-wrapper", ref: (contentElWrapper) => (this.contentElWrapper = contentElWrapper) }, h("slot", { name: "content" })))));
  }
  static get delegatesFocus() { return true; }
  get el() { return getElement(this); }
};
let accordionIds = 0;
Accordion.style = {
  ios: accordionIosCss,
  md: accordionMdCss
};

export { Accordion as ion_accordion };

//# sourceMappingURL=ion-accordion.entry.js.map
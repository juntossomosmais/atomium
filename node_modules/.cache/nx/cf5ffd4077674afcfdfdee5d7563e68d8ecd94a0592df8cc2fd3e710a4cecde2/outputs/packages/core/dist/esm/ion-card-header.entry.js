import { r as registerInstance, h, H as Host } from './index-a869d52d.js';
import { g as getIonMode } from './ionic-global-4a637317.js';
import { c as createColorClasses } from './theme-bc7eaa70.js';

const cardHeaderIosCss = ":host{--background:transparent;--color:inherit;display:flex;position:relative;flex-direction:column;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:16px;flex-direction:column-reverse}@supports (backdrop-filter: blur(0)){:host(.card-header-translucent){background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);backdrop-filter:saturate(180%) blur(30px)}}";

const cardHeaderMdCss = ":host{--background:transparent;--color:inherit;display:flex;position:relative;flex-direction:column;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:16px;padding-bottom:16px}::slotted(ion-card-title:not(:first-child)),::slotted(ion-card-subtitle:not(:first-child)){margin-top:8px}";

const CardHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.color = undefined;
    this.translucent = false;
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: createColorClasses(this.color, {
        'card-header-translucent': this.translucent,
        'ion-inherit-color': true,
        [mode]: true,
      }) }, h("slot", null)));
  }
};
CardHeader.style = {
  ios: cardHeaderIosCss,
  md: cardHeaderMdCss
};

export { CardHeader as ion_card_header };

//# sourceMappingURL=ion-card-header.entry.js.map
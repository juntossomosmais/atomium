'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');
const gestureController = require('./gesture-controller-6c1fa0b6.js');

const backdropIosCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";

const backdropMdCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";

const Backdrop = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionBackdropTap = index.createEvent(this, "ionBackdropTap", 7);
    this.blocker = gestureController.GESTURE_CONTROLLER.createBlocker({
      disableScroll: true,
    });
    this.visible = true;
    this.tappable = true;
    this.stopPropagation = true;
  }
  connectedCallback() {
    if (this.stopPropagation) {
      this.blocker.block();
    }
  }
  disconnectedCallback() {
    this.blocker.unblock();
  }
  onMouseDown(ev) {
    this.emitTap(ev);
  }
  emitTap(ev) {
    if (this.stopPropagation) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    if (this.tappable) {
      this.ionBackdropTap.emit();
    }
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { tabindex: "-1", "aria-hidden": "true", class: {
        [mode]: true,
        'backdrop-hide': !this.visible,
        'backdrop-no-tappable': !this.tappable,
      } }));
  }
};
Backdrop.style = {
  ios: backdropIosCss,
  md: backdropMdCss
};

exports.ion_backdrop = Backdrop;

//# sourceMappingURL=ion-backdrop.cjs.entry.js.map
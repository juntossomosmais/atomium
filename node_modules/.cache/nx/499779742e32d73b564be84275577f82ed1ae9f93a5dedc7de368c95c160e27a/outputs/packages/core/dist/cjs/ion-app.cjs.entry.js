'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');

const appCss = "html.plt-mobile ion-app{user-select:none}html.plt-mobile ion-app [contenteditable]{user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";

const App = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentDidLoad() {
    {
      rIC(async () => {
        const isHybrid = ionicGlobal.isPlatform(window, 'hybrid');
        if (!ionicGlobal.config.getBoolean('_testing')) {
          Promise.resolve().then(function () { return require('./index-ef8d146b.js'); }).then((module) => module.startTapClick(ionicGlobal.config));
        }
        if (ionicGlobal.config.getBoolean('statusTap', isHybrid)) {
          Promise.resolve().then(function () { return require('./status-tap-2bb1c9ee.js'); }).then((module) => module.startStatusTap());
        }
        if (ionicGlobal.config.getBoolean('inputShims', needInputShims())) {
          const platform = ionicGlobal.isPlatform(window, 'ios') ? 'ios' : 'android';
          Promise.resolve().then(function () { return require('./input-shims-c63ccf76.js'); }).then((module) => module.startInputShims(ionicGlobal.config, platform));
        }
        const hardwareBackButtonModule = await Promise.resolve().then(function () { return require('./hardware-back-button-d755e5e5.js'); });
        if (ionicGlobal.config.getBoolean('hardwareBackButton', isHybrid)) {
          hardwareBackButtonModule.startHardwareBackButton();
        }
        else {
          hardwareBackButtonModule.blockHardwareBackButton();
        }
        if (typeof window !== 'undefined') {
          Promise.resolve().then(function () { return require('./keyboard-46759881.js'); }).then((module) => module.startKeyboardAssist(window));
        }
        Promise.resolve().then(function () { return require('./focus-visible-7764c6ed.js'); }).then((module) => (this.focusVisible = module.startFocusVisible()));
      });
    }
  }
  async setFocus(elements) {
    if (this.focusVisible) {
      this.focusVisible.setFocus(elements);
    }
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { class: {
        [mode]: true,
        'ion-page': true,
        'force-statusbar-padding': ionicGlobal.config.getBoolean('_forceStatusbarPadding'),
      } }));
  }
  get el() { return index.getElement(this); }
};
const needInputShims = () => {
  const needsShimsIOS = ionicGlobal.isPlatform(window, 'ios') && ionicGlobal.isPlatform(window, 'mobile');
  if (needsShimsIOS) {
    return true;
  }
  const isAndroidMobileWeb = ionicGlobal.isPlatform(window, 'android') && ionicGlobal.isPlatform(window, 'mobileweb');
  if (isAndroidMobileWeb) {
    return true;
  }
  return false;
};
const rIC = (callback) => {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback);
  }
  else {
    setTimeout(callback, 32);
  }
};
App.style = appCss;

exports.ion_app = App;

//# sourceMappingURL=ion-app.cjs.entry.js.map
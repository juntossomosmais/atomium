import { r as registerInstance, h, H as Host, e as getElement } from './index-a869d52d.js';
import { g as getIonMode, c as config, a as isPlatform } from './ionic-global-4a637317.js';

const appCss = "html.plt-mobile ion-app{user-select:none}html.plt-mobile ion-app [contenteditable]{user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";

const App = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    {
      rIC(async () => {
        const isHybrid = isPlatform(window, 'hybrid');
        if (!config.getBoolean('_testing')) {
          import('./index-8e82a3fb.js').then((module) => module.startTapClick(config));
        }
        if (config.getBoolean('statusTap', isHybrid)) {
          import('./status-tap-e83dd448.js').then((module) => module.startStatusTap());
        }
        if (config.getBoolean('inputShims', needInputShims())) {
          const platform = isPlatform(window, 'ios') ? 'ios' : 'android';
          import('./input-shims-f210be7d.js').then((module) => module.startInputShims(config, platform));
        }
        const hardwareBackButtonModule = await import('./hardware-back-button-b3a8b0cd.js');
        if (config.getBoolean('hardwareBackButton', isHybrid)) {
          hardwareBackButtonModule.startHardwareBackButton();
        }
        else {
          hardwareBackButtonModule.blockHardwareBackButton();
        }
        if (typeof window !== 'undefined') {
          import('./keyboard-7c59b832.js').then((module) => module.startKeyboardAssist(window));
        }
        import('./focus-visible-b5105107.js').then((module) => (this.focusVisible = module.startFocusVisible()));
      });
    }
  }
  async setFocus(elements) {
    if (this.focusVisible) {
      this.focusVisible.setFocus(elements);
    }
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: {
        [mode]: true,
        'ion-page': true,
        'force-statusbar-padding': config.getBoolean('_forceStatusbarPadding'),
      } }));
  }
  get el() { return getElement(this); }
};
const needInputShims = () => {
  const needsShimsIOS = isPlatform(window, 'ios') && isPlatform(window, 'mobile');
  if (needsShimsIOS) {
    return true;
  }
  const isAndroidMobileWeb = isPlatform(window, 'android') && isPlatform(window, 'mobileweb');
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

export { App as ion_app };

//# sourceMappingURL=ion-app.entry.js.map
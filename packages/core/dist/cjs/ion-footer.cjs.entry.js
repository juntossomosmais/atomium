'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');
const index$1 = require('./index-ea0ba50e.js');
const keyboardController = require('./keyboard-controller-97c7afbc.js');
const helpers = require('./helpers-a70e7454.js');
require('./index-aabf0f95.js');
require('./index-0d44bb4a.js');

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const handleFooterFade = (scrollEl, baseEl) => {
  index.readTask(() => {
    const scrollTop = scrollEl.scrollTop;
    const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;
    /**
     * Toolbar background will fade
     * out over fadeDuration in pixels.
     */
    const fadeDuration = 10;
    /**
     * Begin fading out maxScroll - 30px
     * from the bottom of the content.
     * Also determine how close we are
     * to starting the fade. If we are
     * before the starting point, the
     * scale value will get clamped to 0.
     * If we are after the maxScroll (rubber
     * band scrolling), the scale value will
     * get clamped to 1.
     */
    const fadeStart = maxScroll - fadeDuration;
    const distanceToStart = scrollTop - fadeStart;
    const scale = helpers.clamp(0, 1 - distanceToStart / fadeDuration, 1);
    index.writeTask(() => {
      baseEl.style.setProperty('--opacity-scale', scale.toString());
    });
  });
};

const footerIosCss = "ion-footer{display:block;position:relative;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-ios ion-toolbar:first-of-type{--border-width:0.55px 0 0}@supports (backdrop-filter: blur(0)){.footer-background{left:0;right:0;top:0;bottom:0;position:absolute;backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8}}.footer-ios.ion-no-border ion-toolbar:first-of-type{--border-width:0}.footer-collapse-fade ion-toolbar{--opacity-scale:inherit}";

const footerMdCss = "ion-footer{display:block;position:relative;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-md::before{top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==\");background-repeat:repeat-x;content:\"\"}@supports (inset-inline-start: 0){.footer-md::before{inset-inline-start:0}}@supports not (inset-inline-start: 0){.footer-md::before{left:0}[dir=rtl] .footer-md::before,:host-context([dir=rtl]) .footer-md::before{left:unset;right:unset;right:0}}[dir=rtl] .footer-md::before,:host-context([dir=rtl]) .footer-md::before{background-position:right 0 top 0}.footer-md.ion-no-border::before{display:none}";

const Footer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.keyboardCtrl = null;
    this.checkCollapsibleFooter = () => {
      const mode = ionicGlobal.getIonMode(this);
      if (mode !== 'ios') {
        return;
      }
      const { collapse } = this;
      const hasFade = collapse === 'fade';
      this.destroyCollapsibleFooter();
      if (hasFade) {
        const pageEl = this.el.closest('ion-app,ion-page,.ion-page,page-inner');
        const contentEl = pageEl ? index$1.findIonContent(pageEl) : null;
        if (!contentEl) {
          index$1.printIonContentErrorMsg(this.el);
          return;
        }
        this.setupFadeFooter(contentEl);
      }
    };
    this.setupFadeFooter = async (contentEl) => {
      const scrollEl = (this.scrollEl = await index$1.getScrollElement(contentEl));
      this.contentScrollCallback = () => {
        handleFooterFade(scrollEl, this.el);
      };
      scrollEl.addEventListener('scroll', this.contentScrollCallback);
      handleFooterFade(scrollEl, this.el);
    };
    this.keyboardVisible = false;
    this.collapse = undefined;
    this.translucent = false;
  }
  componentDidLoad() {
    this.checkCollapsibleFooter();
  }
  componentDidUpdate() {
    this.checkCollapsibleFooter();
  }
  connectedCallback() {
    this.keyboardCtrl = keyboardController.createKeyboardController((keyboardOpen) => {
      this.keyboardVisible = keyboardOpen;
    });
  }
  disconnectedCallback() {
    if (this.keyboardCtrl) {
      this.keyboardCtrl.destroy();
    }
  }
  destroyCollapsibleFooter() {
    if (this.scrollEl && this.contentScrollCallback) {
      this.scrollEl.removeEventListener('scroll', this.contentScrollCallback);
      this.contentScrollCallback = undefined;
    }
  }
  render() {
    const { translucent, collapse } = this;
    const mode = ionicGlobal.getIonMode(this);
    const tabs = this.el.closest('ion-tabs');
    const tabBar = tabs === null || tabs === void 0 ? void 0 : tabs.querySelector(':scope > ion-tab-bar');
    return (index.h(index.Host, { role: "contentinfo", class: {
        [mode]: true,
        [`footer-${mode}`]: true,
        [`footer-translucent`]: translucent,
        [`footer-translucent-${mode}`]: translucent,
        ['footer-toolbar-padding']: !this.keyboardVisible && (!tabBar || tabBar.slot !== 'bottom'),
        [`footer-collapse-${collapse}`]: collapse !== undefined,
      } }, mode === 'ios' && translucent && index.h("div", { class: "footer-background" }), index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
Footer.style = {
  ios: footerIosCss,
  md: footerMdCss
};

exports.ion_footer = Footer;

//# sourceMappingURL=ion-footer.cjs.entry.js.map
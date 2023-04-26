'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');
const index$1 = require('./index-ea0ba50e.js');
const helpers = require('./helpers-a70e7454.js');
const theme = require('./theme-8b3c3d2a.js');
require('./index-aabf0f95.js');

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const TRANSITION = 'all 0.2s ease-in-out';
const cloneElement = (tagName) => {
  const getCachedEl = document.querySelector(`${tagName}.ion-cloned-element`);
  if (getCachedEl !== null) {
    return getCachedEl;
  }
  const clonedEl = document.createElement(tagName);
  clonedEl.classList.add('ion-cloned-element');
  clonedEl.style.setProperty('display', 'none');
  document.body.appendChild(clonedEl);
  return clonedEl;
};
const createHeaderIndex = (headerEl) => {
  if (!headerEl) {
    return;
  }
  const toolbars = headerEl.querySelectorAll('ion-toolbar');
  return {
    el: headerEl,
    toolbars: Array.from(toolbars).map((toolbar) => {
      const ionTitleEl = toolbar.querySelector('ion-title');
      return {
        el: toolbar,
        background: toolbar.shadowRoot.querySelector('.toolbar-background'),
        ionTitleEl,
        innerTitleEl: ionTitleEl ? ionTitleEl.shadowRoot.querySelector('.toolbar-title') : null,
        ionButtonsEl: Array.from(toolbar.querySelectorAll('ion-buttons')),
      };
    }),
  };
};
const handleContentScroll = (scrollEl, scrollHeaderIndex, contentEl) => {
  index.readTask(() => {
    const scrollTop = scrollEl.scrollTop;
    const scale = helpers.clamp(1, 1 + -scrollTop / 500, 1.1);
    // Native refresher should not cause titles to scale
    const nativeRefresher = contentEl.querySelector('ion-refresher.refresher-native');
    if (nativeRefresher === null) {
      index.writeTask(() => {
        scaleLargeTitles(scrollHeaderIndex.toolbars, scale);
      });
    }
  });
};
const setToolbarBackgroundOpacity = (headerEl, opacity) => {
  /**
   * Fading in the backdrop opacity
   * should happen after the large title
   * has collapsed, so it is handled
   * by handleHeaderFade()
   */
  if (headerEl.collapse === 'fade') {
    return;
  }
  if (opacity === undefined) {
    headerEl.style.removeProperty('--opacity-scale');
  }
  else {
    headerEl.style.setProperty('--opacity-scale', opacity.toString());
  }
};
const handleToolbarBorderIntersection = (ev, mainHeaderIndex, scrollTop) => {
  if (!ev[0].isIntersecting) {
    return;
  }
  /**
   * There is a bug in Safari where overflow scrolling on a non-body element
   * does not always reset the scrollTop position to 0 when letting go. It will
   * set to 1 once the rubber band effect has ended. This causes the background to
   * appear slightly on certain app setups.
   *
   * Additionally, we check if user is rubber banding (scrolling is negative)
   * as this can mean they are using pull to refresh. Once the refresher starts,
   * the content is transformed which can cause the intersection observer to erroneously
   * fire here as well.
   */
  const scale = ev[0].intersectionRatio > 0.9 || scrollTop <= 0 ? 0 : ((1 - ev[0].intersectionRatio) * 100) / 75;
  setToolbarBackgroundOpacity(mainHeaderIndex.el, scale === 1 ? undefined : scale);
};
/**
 * If toolbars are intersecting, hide the scrollable toolbar content
 * and show the primary toolbar content. If the toolbars are not intersecting,
 * hide the primary toolbar content and show the scrollable toolbar content
 */
const handleToolbarIntersection = (ev, // TODO(FW-2832): type (IntersectionObserverEntry[] triggers errors which should be sorted)
mainHeaderIndex, scrollHeaderIndex, scrollEl) => {
  index.writeTask(() => {
    const scrollTop = scrollEl.scrollTop;
    handleToolbarBorderIntersection(ev, mainHeaderIndex, scrollTop);
    const event = ev[0];
    const intersection = event.intersectionRect;
    const intersectionArea = intersection.width * intersection.height;
    const rootArea = event.rootBounds.width * event.rootBounds.height;
    const isPageHidden = intersectionArea === 0 && rootArea === 0;
    const leftDiff = Math.abs(intersection.left - event.boundingClientRect.left);
    const rightDiff = Math.abs(intersection.right - event.boundingClientRect.right);
    const isPageTransitioning = intersectionArea > 0 && (leftDiff >= 5 || rightDiff >= 5);
    if (isPageHidden || isPageTransitioning) {
      return;
    }
    if (event.isIntersecting) {
      setHeaderActive(mainHeaderIndex, false);
      setHeaderActive(scrollHeaderIndex);
    }
    else {
      /**
       * There is a bug with IntersectionObserver on Safari
       * where `event.isIntersecting === false` when cancelling
       * a swipe to go back gesture. Checking the intersection
       * x, y, width, and height provides a workaround. This bug
       * does not happen when using Safari + Web Animations,
       * only Safari + CSS Animations.
       */
      const hasValidIntersection = (intersection.x === 0 && intersection.y === 0) || (intersection.width !== 0 && intersection.height !== 0);
      if (hasValidIntersection && scrollTop > 0) {
        setHeaderActive(mainHeaderIndex);
        setHeaderActive(scrollHeaderIndex, false);
        setToolbarBackgroundOpacity(mainHeaderIndex.el);
      }
    }
  });
};
const setHeaderActive = (headerIndex, active = true) => {
  const headerEl = headerIndex.el;
  if (active) {
    headerEl.classList.remove('header-collapse-condense-inactive');
    headerEl.removeAttribute('aria-hidden');
  }
  else {
    headerEl.classList.add('header-collapse-condense-inactive');
    headerEl.setAttribute('aria-hidden', 'true');
  }
};
const scaleLargeTitles = (toolbars = [], scale = 1, transition = false) => {
  toolbars.forEach((toolbar) => {
    const ionTitle = toolbar.ionTitleEl;
    const titleDiv = toolbar.innerTitleEl;
    if (!ionTitle || ionTitle.size !== 'large') {
      return;
    }
    titleDiv.style.transition = transition ? TRANSITION : '';
    titleDiv.style.transform = `scale3d(${scale}, ${scale}, 1)`;
  });
};
const handleHeaderFade = (scrollEl, baseEl, condenseHeader) => {
  index.readTask(() => {
    const scrollTop = scrollEl.scrollTop;
    const baseElHeight = baseEl.clientHeight;
    const fadeStart = condenseHeader ? condenseHeader.clientHeight : 0;
    /**
     * If we are using fade header with a condense
     * header, then the toolbar backgrounds should
     * not begin to fade in until the condense
     * header has fully collapsed.
     *
     * Additionally, the main content should not
     * overflow out of the container until the
     * condense header has fully collapsed. When
     * using just the condense header the content
     * should overflow out of the container.
     */
    if (condenseHeader !== null && scrollTop < fadeStart) {
      baseEl.style.setProperty('--opacity-scale', '0');
      scrollEl.style.setProperty('clip-path', `inset(${baseElHeight}px 0px 0px 0px)`);
      return;
    }
    const distanceToStart = scrollTop - fadeStart;
    const fadeDuration = 10;
    const scale = helpers.clamp(0, distanceToStart / fadeDuration, 1);
    index.writeTask(() => {
      scrollEl.style.removeProperty('clip-path');
      baseEl.style.setProperty('--opacity-scale', scale.toString());
    });
  });
};

const headerIosCss = "ion-header{display:block;position:relative;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports (backdrop-filter: blur(0)){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}";

const headerMdCss = "ion-header{display:block;position:relative;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md::after{bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:\"\"}@supports (inset-inline-start: 0){.header-md::after{inset-inline-start:0}}@supports not (inset-inline-start: 0){.header-md::after{left:0}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{left:unset;right:unset;right:0}}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{background-position:right 0 top -2px}.header-collapse-condense{display:none}.header-md.ion-no-border::after{display:none}";

const Header = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.inheritedAttributes = {};
    this.setupFadeHeader = async (contentEl, condenseHeader) => {
      const scrollEl = (this.scrollEl = await index$1.getScrollElement(contentEl));
      this.contentScrollCallback = () => {
        handleHeaderFade(this.scrollEl, this.el, condenseHeader);
      };
      scrollEl.addEventListener('scroll', this.contentScrollCallback);
      handleHeaderFade(this.scrollEl, this.el, condenseHeader);
    };
    this.collapse = undefined;
    this.translucent = false;
  }
  componentWillLoad() {
    this.inheritedAttributes = helpers.inheritAriaAttributes(this.el);
  }
  componentDidLoad() {
    this.checkCollapsibleHeader();
  }
  componentDidUpdate() {
    this.checkCollapsibleHeader();
  }
  disconnectedCallback() {
    this.destroyCollapsibleHeader();
  }
  async checkCollapsibleHeader() {
    const mode = ionicGlobal.getIonMode(this);
    if (mode !== 'ios') {
      return;
    }
    const { collapse } = this;
    const hasCondense = collapse === 'condense';
    const hasFade = collapse === 'fade';
    this.destroyCollapsibleHeader();
    if (hasCondense) {
      const pageEl = this.el.closest('ion-app,ion-page,.ion-page,page-inner');
      const contentEl = pageEl ? index$1.findIonContent(pageEl) : null;
      index.writeTask(() => {
        const title = cloneElement('ion-title');
        title.size = 'large';
        cloneElement('ion-back-button');
      });
      await this.setupCondenseHeader(contentEl, pageEl);
    }
    else if (hasFade) {
      const pageEl = this.el.closest('ion-app,ion-page,.ion-page,page-inner');
      const contentEl = pageEl ? index$1.findIonContent(pageEl) : null;
      if (!contentEl) {
        index$1.printIonContentErrorMsg(this.el);
        return;
      }
      const condenseHeader = contentEl.querySelector('ion-header[collapse="condense"]');
      await this.setupFadeHeader(contentEl, condenseHeader);
    }
  }
  destroyCollapsibleHeader() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = undefined;
    }
    if (this.scrollEl && this.contentScrollCallback) {
      this.scrollEl.removeEventListener('scroll', this.contentScrollCallback);
      this.contentScrollCallback = undefined;
    }
    if (this.collapsibleMainHeader) {
      this.collapsibleMainHeader.classList.remove('header-collapse-main');
      this.collapsibleMainHeader = undefined;
    }
  }
  async setupCondenseHeader(contentEl, pageEl) {
    if (!contentEl || !pageEl) {
      index$1.printIonContentErrorMsg(this.el);
      return;
    }
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }
    this.scrollEl = await index$1.getScrollElement(contentEl);
    const headers = pageEl.querySelectorAll('ion-header');
    this.collapsibleMainHeader = Array.from(headers).find((header) => header.collapse !== 'condense');
    if (!this.collapsibleMainHeader) {
      return;
    }
    const mainHeaderIndex = createHeaderIndex(this.collapsibleMainHeader);
    const scrollHeaderIndex = createHeaderIndex(this.el);
    if (!mainHeaderIndex || !scrollHeaderIndex) {
      return;
    }
    setHeaderActive(mainHeaderIndex, false);
    setToolbarBackgroundOpacity(mainHeaderIndex.el, 0);
    const toolbarIntersection = (ev) => {
      handleToolbarIntersection(ev, mainHeaderIndex, scrollHeaderIndex, this.scrollEl);
    };
    this.intersectionObserver = new IntersectionObserver(toolbarIntersection, {
      root: contentEl,
      threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    });
    this.intersectionObserver.observe(scrollHeaderIndex.toolbars[scrollHeaderIndex.toolbars.length - 1].el);
    this.contentScrollCallback = () => {
      handleContentScroll(this.scrollEl, scrollHeaderIndex, contentEl);
    };
    this.scrollEl.addEventListener('scroll', this.contentScrollCallback);
    index.writeTask(() => {
      if (this.collapsibleMainHeader !== undefined) {
        this.collapsibleMainHeader.classList.add('header-collapse-main');
      }
    });
  }
  render() {
    const { translucent, inheritedAttributes } = this;
    const mode = ionicGlobal.getIonMode(this);
    const collapse = this.collapse || 'none';
    const roleType = theme.hostContext('ion-menu', this.el) ? 'none' : 'banner';
    return (index.h(index.Host, Object.assign({ role: roleType, class: {
        [mode]: true,
        [`header-${mode}`]: true,
        [`header-translucent`]: this.translucent,
        [`header-collapse-${collapse}`]: true,
        [`header-translucent-${mode}`]: this.translucent,
      } }, inheritedAttributes), mode === 'ios' && translucent && index.h("div", { class: "header-background" }), index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
Header.style = {
  ios: headerIosCss,
  md: headerMdCss
};

exports.ion_header = Header;

//# sourceMappingURL=ion-header.cjs.entry.js.map
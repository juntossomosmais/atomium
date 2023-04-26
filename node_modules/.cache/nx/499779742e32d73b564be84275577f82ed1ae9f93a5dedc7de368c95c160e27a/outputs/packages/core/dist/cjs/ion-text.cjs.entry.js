'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-713eb84a.js');
const ionicGlobal = require('./ionic-global-be2bfad8.js');
const theme = require('./theme-8b3c3d2a.js');

const textCss = ":host(.ion-color){color:var(--ion-color-base)}";

const Text = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.color = undefined;
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { class: theme.createColorClasses(this.color, {
        [mode]: true,
      }) }, index.h("slot", null)));
  }
};
Text.style = textCss;

exports.ion_text = Text;

//# sourceMappingURL=ion-text.cjs.entry.js.map
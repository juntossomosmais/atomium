import { r as registerInstance, h, H as Host } from './index-a869d52d.js';
import { c as config, g as getIonMode } from './ionic-global-4a637317.js';
import { c as createColorClasses } from './theme-bc7eaa70.js';
import { S as SPINNERS } from './spinner-configs-b2a6843e.js';

const spinnerCss = ":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{transform-origin:center;position:absolute;top:0;left:0;width:100%;height:100%;transform:translateZ(0)}[dir=rtl] svg,:host-context([dir=rtl]) svg{transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{animation:spinner-dots 1s linear infinite}:host(.spinner-circular) svg{animation:spinner-circular linear infinite}:host(.spinner-circular) circle{animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{animation-play-state:paused}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-scale-out{0%{transform:scale(1, 1)}100%{transform:scale(0, 0)}}@keyframes spinner-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes spinner-dots{0%{transform:scale(1, 1);opacity:0.9}50%{transform:scale(0.4, 0.4);opacity:0.3}100%{transform:scale(1, 1);opacity:0.9}}@keyframes spinner-circular{100%{transform:rotate(360deg)}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}";

const Spinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.color = undefined;
    this.duration = undefined;
    this.name = undefined;
    this.paused = false;
  }
  getName() {
    const spinnerName = this.name || config.get('spinner');
    const mode = getIonMode(this);
    if (spinnerName) {
      return spinnerName;
    }
    return mode === 'ios' ? 'lines' : 'circular';
  }
  render() {
    var _a;
    const self = this;
    const mode = getIonMode(self);
    const spinnerName = self.getName();
    const spinner = (_a = SPINNERS[spinnerName]) !== null && _a !== void 0 ? _a : SPINNERS['lines'];
    const duration = typeof self.duration === 'number' && self.duration > 10 ? self.duration : spinner.dur;
    const svgs = [];
    if (spinner.circles !== undefined) {
      for (let i = 0; i < spinner.circles; i++) {
        svgs.push(buildCircle(spinner, duration, i, spinner.circles));
      }
    }
    else if (spinner.lines !== undefined) {
      for (let i = 0; i < spinner.lines; i++) {
        svgs.push(buildLine(spinner, duration, i, spinner.lines));
      }
    }
    return (h(Host, { class: createColorClasses(self.color, {
        [mode]: true,
        [`spinner-${spinnerName}`]: true,
        'spinner-paused': self.paused || config.getBoolean('_testing'),
      }), role: "progressbar", style: spinner.elmDuration ? { animationDuration: duration + 'ms' } : {} }, svgs));
  }
};
const buildCircle = (spinner, duration, index, total) => {
  const data = spinner.fn(duration, index, total);
  data.style['animation-duration'] = duration + 'ms';
  return (h("svg", { viewBox: data.viewBox || '0 0 64 64', style: data.style }, h("circle", { transform: data.transform || 'translate(32,32)', cx: data.cx, cy: data.cy, r: data.r, style: spinner.elmDuration ? { animationDuration: duration + 'ms' } : {} })));
};
const buildLine = (spinner, duration, index, total) => {
  const data = spinner.fn(duration, index, total);
  data.style['animation-duration'] = duration + 'ms';
  return (h("svg", { viewBox: data.viewBox || '0 0 64 64', style: data.style }, h("line", { transform: "translate(32,32)", y1: data.y1, y2: data.y2 })));
};
Spinner.style = spinnerCss;

export { Spinner as ion_spinner };

//# sourceMappingURL=ion-spinner.entry.js.map
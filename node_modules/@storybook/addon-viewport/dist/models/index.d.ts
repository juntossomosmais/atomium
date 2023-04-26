import { V as ViewportMap } from '../Viewport-f0912abf.js';
export { S as Styles, a as Viewport, b as ViewportStyles } from '../Viewport-f0912abf.js';

interface ViewportAddonParameter {
    disable?: boolean;
    defaultOrientation?: 'portrait' | 'landscape';
    defaultViewport?: string;
    viewports?: ViewportMap;
}

export { ViewportAddonParameter, ViewportMap };

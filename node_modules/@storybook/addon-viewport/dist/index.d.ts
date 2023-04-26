export { D as DEFAULT_VIEWPORT, I as INITIAL_VIEWPORTS, M as MINIMAL_VIEWPORTS } from './defaults-f41a8663.js';
import { API } from '@storybook/manager-api';
import './Viewport-f0912abf.js';

declare const ADDON_ID = "storybook/viewport";
declare const PARAM_KEY = "viewport";
declare const UPDATE: string;
declare const CONFIGURE: string;
declare const SET: string;
declare const CHANGED: string;

declare const registerShortcuts: (api: API, setState: any, viewportsKeys: string[]) => Promise<void>;

export { ADDON_ID, CHANGED, CONFIGURE, PARAM_KEY, SET, UPDATE, registerShortcuts };

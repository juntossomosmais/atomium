import type { Config, OutputTargetCustom } from '@stencil/core/internal';
import type { OutputTargetVue } from './types';
export declare const vueOutputTarget: (outputTarget: OutputTargetVue) => OutputTargetCustom;
export declare function normalizeOutputTarget(config: Config, outputTarget: any): OutputTargetVue;

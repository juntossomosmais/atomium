import type { Config, OutputTargetCustom } from '@stencil/core/internal';
import type { OutputTargetReact } from './types';
/**
 * Creates an output target for binding Stencil components to be used in a React context
 * @param outputTarget the user-defined output target defined in a Stencil configuration file
 * @returns an output target that can be used by the Stencil compiler
 */
export declare const reactOutputTarget: (outputTarget: OutputTargetReact) => OutputTargetCustom;
/**
 * Normalizes the structure of a provided output target and verifies a Stencil configuration
 * associated with the wrapper is valid
 * @param config the configuration to validate
 * @param outputTarget the output target to normalize
 * @returns an output target that's been normalized
 */
export declare function normalizeOutputTarget(config: Config, outputTarget: any): OutputTargetReact;

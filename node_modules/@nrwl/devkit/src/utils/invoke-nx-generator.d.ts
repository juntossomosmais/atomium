import type { Generator } from 'nx/src/config/misc-interfaces';
/**
 * Convert an Nx Generator into an Angular Devkit Schematic.
 * @param generator The Nx generator to convert to an Angular Devkit Schematic.
 */
export declare function convertNxGenerator<T = any>(generator: Generator<T>, skipWritingConfigInOldFormat?: boolean): (generatorOptions: T) => (tree: any, context: any) => Promise<any>;

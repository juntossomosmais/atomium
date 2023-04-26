import type { OutputTargetReact, PackageJSON } from './types';
import type { CompilerCtx, ComponentCompilerMeta, Config } from '@stencil/core/internal';
/**
 * Generate and write the Stencil-React bindings to disc
 * @param config the Stencil configuration associated with the project
 * @param compilerCtx the compiler context of the current Stencil build
 * @param outputTarget the output target configuration for generating the React wrapper
 * @param components the components to generate the bindings for
 */
export declare function reactProxyOutput(config: Config, compilerCtx: CompilerCtx, outputTarget: OutputTargetReact, components: ReadonlyArray<ComponentCompilerMeta>): Promise<void>;
/**
 * Generate the code that will be responsible for creating the Stencil-React bindings
 * @param config the Stencil configuration associated with the project
 * @param components the Stencil components to generate wrappers for
 * @param pkgData `package.json` data for the Stencil project
 * @param outputTarget the output target configuration used to generate the Stencil-React bindings
 * @param rootDir the directory of the Stencil project
 * @returns the generated code to create the Stencil-React bindings
 */
export declare function generateProxies(config: Config, components: ReadonlyArray<ComponentCompilerMeta>, pkgData: PackageJSON, outputTarget: OutputTargetReact, rootDir: string): string;
/**
 * Defines the React component that developers will import to use in their applications.
 * @param cmpMeta Meta data for a single Web Component
 * @param includeCustomElement If `true`, the Web Component instance will be passed in to createReactComponent to be
 * registered with the Custom Elements Registry.
 * @returns An array where each entry is a string version of the React component definition.
 */
export declare function createComponentDefinition(cmpMeta: ComponentCompilerMeta, includeCustomElement?: boolean): ReadonlyArray<string>;
/**
 * Derive the path to the loader
 * @param config the Stencil configuration for the project
 * @param outputTarget the output target used for generating the Stencil-React bindings
 * @returns the derived loader path
 */
export declare function getPathToCorePackageLoader(config: Config, outputTarget: OutputTargetReact): string;
export declare const GENERATED_DTS = "components.d.ts";

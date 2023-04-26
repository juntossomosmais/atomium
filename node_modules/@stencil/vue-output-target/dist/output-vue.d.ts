import type { OutputTargetVue, PackageJSON } from './types';
import type { CompilerCtx, ComponentCompilerMeta, Config } from '@stencil/core/internal';
export declare function vueProxyOutput(config: Config, compilerCtx: CompilerCtx, outputTarget: OutputTargetVue, components: ComponentCompilerMeta[]): Promise<void>;
export declare function generateProxies(config: Config, components: ComponentCompilerMeta[], pkgData: PackageJSON, outputTarget: OutputTargetVue, rootDir: string): string;
export declare function getPathToCorePackageLoader(config: Config, outputTarget: OutputTargetVue): string;
export declare const GENERATED_DTS = "components.d.ts";

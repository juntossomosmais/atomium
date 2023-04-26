import type { TypeScriptVueExtensionOptions } from './type-script-vue-extension-options';
interface TypeScriptVueExtensionConfig {
    enabled: boolean;
    compiler: string;
}
declare function createTypeScriptVueExtensionConfig(options: TypeScriptVueExtensionOptions | undefined): TypeScriptVueExtensionConfig;
export { TypeScriptVueExtensionConfig, createTypeScriptVueExtensionConfig };

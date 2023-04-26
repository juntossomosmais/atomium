import { normalizePath } from './utils';
import { vueProxyOutput } from './output-vue';
import path from 'path';
export const vueOutputTarget = (outputTarget) => ({
    type: 'custom',
    name: 'vue-library',
    validate(config) {
        return normalizeOutputTarget(config, outputTarget);
    },
    async generator(config, compilerCtx, buildCtx) {
        const timespan = buildCtx.createTimeSpan(`generate vue started`, true);
        await vueProxyOutput(config, compilerCtx, outputTarget, buildCtx.components);
        timespan.finish(`generate vue finished`);
    },
});
export function normalizeOutputTarget(config, outputTarget) {
    var _a, _b;
    const results = Object.assign(Object.assign({}, outputTarget), { excludeComponents: outputTarget.excludeComponents || [], componentModels: outputTarget.componentModels || [], includePolyfills: (_a = outputTarget.includePolyfills) !== null && _a !== void 0 ? _a : true, includeDefineCustomElements: (_b = outputTarget.includeDefineCustomElements) !== null && _b !== void 0 ? _b : true });
    if (config.rootDir == null) {
        throw new Error('rootDir is not set and it should be set by stencil itself');
    }
    if (outputTarget.proxiesFile == null) {
        throw new Error('proxiesFile is required');
    }
    if (outputTarget.includeDefineCustomElements && outputTarget.includeImportCustomElements) {
        throw new Error('includeDefineCustomElements cannot be used at the same time as includeImportCustomElements since includeDefineCustomElements is used for lazy loading components. Set `includeDefineCustomElements: false` in your Vue output target config to resolve this.');
    }
    if (outputTarget.includeImportCustomElements && outputTarget.includePolyfills) {
        throw new Error('includePolyfills cannot be used at the same time as includeImportCustomElements. Set `includePolyfills: false` in your Vue output target config to resolve this.');
    }
    if (outputTarget.directivesProxyFile && !path.isAbsolute(outputTarget.directivesProxyFile)) {
        results.proxiesFile = normalizePath(path.join(config.rootDir, outputTarget.proxiesFile));
    }
    return results;
}

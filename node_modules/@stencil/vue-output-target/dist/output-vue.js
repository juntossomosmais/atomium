import path from 'path';
import { createComponentDefinition } from './generate-vue-component';
import { normalizePath, readPackageJson, relativeImport, sortBy, dashToPascalCase } from './utils';
export async function vueProxyOutput(config, compilerCtx, outputTarget, components) {
    const filteredComponents = getFilteredComponents(outputTarget.excludeComponents, components);
    const rootDir = config.rootDir;
    const pkgData = await readPackageJson(rootDir);
    const finalText = generateProxies(config, filteredComponents, pkgData, outputTarget, rootDir);
    await compilerCtx.fs.writeFile(outputTarget.proxiesFile, finalText);
    await copyResources(config, outputTarget);
}
function getFilteredComponents(excludeComponents = [], cmps) {
    return sortBy(cmps, (cmp) => cmp.tagName).filter((c) => !excludeComponents.includes(c.tagName) && !c.internal);
}
export function generateProxies(config, components, pkgData, outputTarget, rootDir) {
    const distTypesDir = path.dirname(pkgData.types);
    const dtsFilePath = path.join(rootDir, distTypesDir, GENERATED_DTS);
    const componentsTypeFile = relativeImport(outputTarget.proxiesFile, dtsFilePath, '.d.ts');
    const pathToCorePackageLoader = getPathToCorePackageLoader(config, outputTarget);
    const imports = `/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from './vue-component-lib/utils';\n`;
    const generateTypeImports = () => {
        if (outputTarget.componentCorePackage !== undefined) {
            const dirPath = outputTarget.includeImportCustomElements
                ? `/${outputTarget.customElementsDir || 'components'}`
                : '';
            return `import type { ${IMPORT_TYPES} } from '${normalizePath(outputTarget.componentCorePackage)}${dirPath}';\n`;
        }
        return `import type { ${IMPORT_TYPES} } from '${normalizePath(componentsTypeFile)}';\n`;
    };
    const typeImports = generateTypeImports();
    let sourceImports = '';
    let registerCustomElements = '';
    if (outputTarget.includeImportCustomElements && outputTarget.componentCorePackage !== undefined) {
        const cmpImports = components.map((component) => {
            const pascalImport = dashToPascalCase(component.tagName);
            return `import { defineCustomElement as define${pascalImport} } from '${normalizePath(outputTarget.componentCorePackage)}/${outputTarget.customElementsDir || 'components'}/${component.tagName}.js';`;
        });
        sourceImports = cmpImports.join('\n');
    }
    else if (outputTarget.includePolyfills && outputTarget.includeDefineCustomElements) {
        sourceImports = `import { ${APPLY_POLYFILLS}, ${REGISTER_CUSTOM_ELEMENTS} } from '${pathToCorePackageLoader}';\n`;
        registerCustomElements = `${APPLY_POLYFILLS}().then(() => ${REGISTER_CUSTOM_ELEMENTS}());`;
    }
    else if (!outputTarget.includePolyfills && outputTarget.includeDefineCustomElements) {
        sourceImports = `import { ${REGISTER_CUSTOM_ELEMENTS} } from '${pathToCorePackageLoader}';\n`;
        registerCustomElements = `${REGISTER_CUSTOM_ELEMENTS}();`;
    }
    const final = [
        imports,
        typeImports,
        sourceImports,
        registerCustomElements,
        components
            .map(createComponentDefinition(IMPORT_TYPES, outputTarget.componentModels, outputTarget.includeImportCustomElements))
            .join('\n'),
    ];
    return final.join('\n') + '\n';
}
async function copyResources(config, outputTarget) {
    if (!config.sys || !config.sys.copy || !config.sys.glob) {
        throw new Error('stencil is not properly initialized at this step. Notify the developer');
    }
    const srcDirectory = path.join(__dirname, '..', 'vue-component-lib');
    const destDirectory = path.join(path.dirname(outputTarget.proxiesFile), 'vue-component-lib');
    return config.sys.copy([
        {
            src: srcDirectory,
            dest: destDirectory,
            keepDirStructure: false,
            warn: false,
        },
    ], srcDirectory);
}
export function getPathToCorePackageLoader(config, outputTarget) {
    var _a;
    const basePkg = outputTarget.componentCorePackage || '';
    const distOutputTarget = (_a = config.outputTargets) === null || _a === void 0 ? void 0 : _a.find((o) => o.type === 'dist');
    const distAbsEsmLoaderPath = (distOutputTarget === null || distOutputTarget === void 0 ? void 0 : distOutputTarget.esmLoaderPath) && path.isAbsolute(distOutputTarget.esmLoaderPath)
        ? distOutputTarget.esmLoaderPath
        : null;
    const distRelEsmLoaderPath = config.rootDir && distAbsEsmLoaderPath ? path.relative(config.rootDir, distAbsEsmLoaderPath) : null;
    const loaderDir = outputTarget.loaderDir || distRelEsmLoaderPath || DEFAULT_LOADER_DIR;
    return normalizePath(path.join(basePkg, loaderDir));
}
export const GENERATED_DTS = 'components.d.ts';
const IMPORT_TYPES = 'JSX';
const REGISTER_CUSTOM_ELEMENTS = 'defineCustomElements';
const APPLY_POLYFILLS = 'applyPolyfills';
const DEFAULT_LOADER_DIR = '/dist/loader';

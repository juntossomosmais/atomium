"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const typescript_1 = require("typescript");
const path_1 = require("path");
const cypress_version_1 = require("../../utils/cypress-version");
function removeTypescriptPlugin(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const cypressVersion = (0, cypress_version_1.installedCypressVersion)();
        if (cypressVersion < 7) {
            console.warn(`Cypress v${cypressVersion} is installed. This migration was skipped. Please rerun this migration after updating to Cypress 7.`);
            return;
        }
        for (const [_, proj] of (0, devkit_1.getProjects)(tree)) {
            const cypressTargets = getCypressTargets(proj);
            if (cypressTargets.length <= 0) {
                continue;
            }
            for (const target of cypressTargets) {
                const cypressConfigs = getCypressConfigs(target);
                for (const config of cypressConfigs) {
                    const cypressConfig = (0, devkit_1.readJson)(tree, config);
                    if (cypressConfig.pluginsFile) {
                        let pluginPath = (0, path_1.join)((0, path_1.dirname)(config), cypressConfig.pluginsFile);
                        if (!tree.exists(pluginPath)) {
                            pluginPath = ['.js', '.ts']
                                .map((ext) => pluginPath + ext)
                                .find((path) => tree.exists(path));
                        }
                        removePreprocessor(tree, pluginPath);
                    }
                }
            }
        }
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.default = removeTypescriptPlugin;
function removePreprocessor(tree, pluginPath) {
    const pluginContents = tree.read(pluginPath, 'utf-8');
    const sourceFile = (0, typescript_1.createSourceFile)(pluginPath, pluginContents, typescript_1.ScriptTarget.ESNext, true);
    const deletions = [];
    const callback = (node) => {
        // Look for the invocation of preprocessTypescript
        if ((0, typescript_1.isCallExpression)(node) &&
            (0, typescript_1.isIdentifier)(node.expression) &&
            node.expression.getText(sourceFile) === 'preprocessTypescript' &&
            node.arguments.length < 2) {
            // Get the Statement that the function call belongs to
            let n = node.parent;
            while (!(0, typescript_1.isExpressionStatement)(n) && n === sourceFile) {
                n = n.parent;
            }
            deletions.push({
                type: devkit_1.ChangeType.Delete,
                start: n.getStart(),
                length: n.getWidth() +
                    (pluginContents[n.getStart() + n.getWidth()] === ';' ? 1 : 0),
            });
        }
    };
    // Call the callback for every node in the file
    sourceFile.forEachChild(recurse);
    function recurse(node) {
        callback(node);
        node.forEachChild((child) => recurse(child));
    }
    // Remove the preprocessor from the file
    tree.write(pluginPath, (0, devkit_1.applyChangesToString)(pluginContents, deletions));
}
function getCypressConfigs(target) {
    if (!target.configurations && !target.options.cypressConfig) {
        return [];
    }
    else if (!target.configurations && target.options.cypressConfig) {
        return [target.options.cypressConfig];
    }
    return [target.options, Object.values(target.configurations)]
        .filter((options) => !!options.cypressConfig)
        .map((options) => options.cypressConfig);
}
function getCypressTargets(proj) {
    if (!proj.targets) {
        return [];
    }
    return Object.values(proj.targets).filter((target) => target.executor === '@nrwl/cypress:cypress');
}
//# sourceMappingURL=remove-typescript-plugin.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCompilerHost = void 0;
const extensions_1 = require("../extensions");
const system_1 = require("../system");
const typescript_1 = require("../typescript");
function createCompilerHost(parsedConfig) {
    const baseCompilerHost = typescript_1.typescript.createCompilerHost(parsedConfig.options);
    let controlledCompilerHost = Object.assign(Object.assign({}, baseCompilerHost), { fileExists: system_1.system.fileExists, readFile: system_1.system.readFile, directoryExists: system_1.system.directoryExists, getDirectories: system_1.system.getDirectories, realpath: system_1.system.realpath });
    extensions_1.extensions.forEach((extension) => {
        if (extension.extendCompilerHost) {
            controlledCompilerHost = extension.extendCompilerHost(controlledCompilerHost, parsedConfig);
        }
    });
    return controlledCompilerHost;
}
exports.createCompilerHost = createCompilerHost;

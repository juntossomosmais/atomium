"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filePathPrefix = exports.getE2eProjectName = exports.getUnscopedLibName = void 0;
const devkit_1 = require("@nrwl/devkit");
function getUnscopedLibName(libRoot) {
    return libRoot.slice(libRoot.lastIndexOf('/') + 1);
}
exports.getUnscopedLibName = getUnscopedLibName;
function getE2eProjectName(targetProjectName, targetLibRoot, cypressDirectory) {
    if (cypressDirectory) {
        return `${filePathPrefix(cypressDirectory)}-${getUnscopedLibName(targetLibRoot)}-e2e`;
    }
    return `${targetProjectName}-e2e`;
}
exports.getE2eProjectName = getE2eProjectName;
function filePathPrefix(directory) {
    return `${(0, devkit_1.names)(directory).fileName}`.replace(new RegExp('/', 'g'), '-');
}
exports.filePathPrefix = filePathPrefix;
//# sourceMappingURL=project-name.js.map
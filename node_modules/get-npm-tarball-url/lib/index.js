"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(pkgName, pkgVersion, opts) {
    let registry;
    if (opts === null || opts === void 0 ? void 0 : opts.registry) {
        registry = opts.registry.endsWith('/') ? opts.registry : `${opts.registry}/`;
    }
    else {
        registry = 'https://registry.npmjs.org/';
    }
    const scopelessName = getScopelessName(pkgName);
    return `${registry}${pkgName}/-/${scopelessName}-${removeBuildMetadataFromVersion(pkgVersion)}.tgz`;
}
exports.default = default_1;
function removeBuildMetadataFromVersion(version) {
    const plusPos = version.indexOf('+');
    if (plusPos === -1)
        return version;
    return version.substring(0, plusPos);
}
function getScopelessName(name) {
    if (name[0] !== '@') {
        return name;
    }
    return name.split('/')[1];
}
//# sourceMappingURL=index.js.map
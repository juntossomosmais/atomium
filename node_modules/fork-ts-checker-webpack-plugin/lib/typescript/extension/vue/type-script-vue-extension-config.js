"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTypeScriptVueExtensionConfig = void 0;
function createTypeScriptVueExtensionConfig(options) {
    return Object.assign({ enabled: options === true, compiler: 'vue-template-compiler' }, (typeof options === 'object' ? options : {}));
}
exports.createTypeScriptVueExtensionConfig = createTypeScriptVueExtensionConfig;

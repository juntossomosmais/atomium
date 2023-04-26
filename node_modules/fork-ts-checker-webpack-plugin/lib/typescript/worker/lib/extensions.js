"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.extensions = void 0;
const type_script_vue_extension_1 = require("../../extension/vue/type-script-vue-extension");
const worker_config_1 = require("./worker-config");
const extensions = [];
exports.extensions = extensions;
if ((_b = (_a = worker_config_1.config.extensions) === null || _a === void 0 ? void 0 : _a.vue) === null || _b === void 0 ? void 0 : _b.enabled) {
    extensions.push((0, type_script_vue_extension_1.createTypeScriptVueExtension)(worker_config_1.config.extensions.vue));
}

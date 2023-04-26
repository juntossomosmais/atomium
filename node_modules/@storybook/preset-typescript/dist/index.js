"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var processConfig_1 = require("./helpers/processConfig");
var isCompatible_1 = require("./helpers/isCompatible");
var babelPresetTypeScript = require.resolve('@babel/preset-typescript');
var babelPresetVueTypeScript = require.resolve('babel-preset-typescript-vue');
exports.babel = function (config, options) {
    if (!isCompatible_1.isCompatible(options, true))
        return config;
    var _a = config.presets, presets = _a === void 0 ? [] : _a;
    var preset = options.framework === 'vue'
        ? babelPresetVueTypeScript
        : babelPresetTypeScript;
    return __assign(__assign({}, config), { presets: __spread(presets, [preset]) });
};
exports.managerBabel = function (config, options) {
    if (!isCompatible_1.isCompatible(options))
        return config;
    var _a = config.presets, presets = _a === void 0 ? [] : _a;
    return __assign(__assign({}, config), { presets: __spread(presets, [babelPresetTypeScript]) });
};
exports.managerWebpack = function (webpackConfig, options) {
    if (webpackConfig === void 0) { webpackConfig = {}; }
    if (!isCompatible_1.isCompatible(options))
        return webpackConfig;
    var transpileManager = options.transpileManager;
    if (!transpileManager)
        return webpackConfig;
    return processConfig_1.processConfig(webpackConfig, options);
};
exports.webpack = function (webpackConfig, options) {
    if (webpackConfig === void 0) { webpackConfig = {}; }
    var _a, _b;
    if (!isCompatible_1.isCompatible(options))
        return webpackConfig;
    if (options.framework === 'vue') {
        var updatedOptions = __assign(__assign({}, options), { forkTsCheckerWebpackPluginOptions: __assign(__assign({}, options.forkTsCheckerWebpackPluginOptions), { vue: (_b = (_a = options.forkTsCheckerWebpackPluginOptions) === null || _a === void 0 ? void 0 : _a.vue) !== null && _b !== void 0 ? _b : true }) });
        return processConfig_1.processConfig(webpackConfig, updatedOptions);
    }
    return processConfig_1.processConfig(webpackConfig, options);
};
//# sourceMappingURL=index.js.map
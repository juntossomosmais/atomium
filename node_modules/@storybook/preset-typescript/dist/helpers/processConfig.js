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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fork_ts_checker_webpack_plugin_1 = __importDefault(require("fork-ts-checker-webpack-plugin"));
var isLoader = function (ruleSetUse) {
    return typeof ruleSetUse === 'object';
};
var tsExtensions = ['.ts', '.tsx'];
exports.processConfig = function (webpackConfig, options) {
    if (webpackConfig === void 0) { webpackConfig = {}; }
    var _a = webpackConfig.resolve, resolve = _a === void 0 ? {} : _a, _b = webpackConfig.plugins, plugins = _b === void 0 ? [] : _b, module = webpackConfig.module;
    var forkTsCheckerWebpackPluginOptions = options.forkTsCheckerWebpackPluginOptions, _c = options.include, include = _c === void 0 ? [] : _c;
    var rules = module === null || module === void 0 ? void 0 : module.rules.map(function (rule) {
        // Find the rule containing 'babel-loader'
        var isBabelRule = Array.isArray(rule.use) &&
            rule.use.find(function (use) { var _a; return isLoader(use) && ((_a = use.loader) === null || _a === void 0 ? void 0 : _a.includes('babel-loader')); });
        // If this is the
        if (isBabelRule) {
            return __assign(__assign({}, rule), { include: __spread((rule.include || []), include), test: new RegExp("\\.(" + __spread(['mjs', 'js', 'jsx'], tsExtensions).join('|')
                    .replace(/\./g, '') + ")$") });
        }
        return rule;
    });
    return __assign(__assign({}, webpackConfig), { module: __assign(__assign({}, module), { rules: rules || [] }), plugins: __spread(plugins, [
            new fork_ts_checker_webpack_plugin_1.default(forkTsCheckerWebpackPluginOptions),
        ]), resolve: __assign(__assign({}, resolve), { extensions: __spread((resolve.extensions || []), tsExtensions) }) });
};
//# sourceMappingURL=processConfig.js.map
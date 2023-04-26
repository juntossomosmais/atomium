"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_logger_1 = require("@storybook/node-logger");
exports.isCompatible = function (_a, shouldLog) {
    var framework = _a.framework;
    if (shouldLog === void 0) { shouldLog = false; }
    if (framework === 'angular') {
        if (shouldLog) {
            node_logger_1.logger.warn("`@storybook/preset-typescript` is not needed when using Storybook for Angular. No changes will be made");
        }
        return false;
    }
    return true;
};
//# sourceMappingURL=isCompatible.js.map
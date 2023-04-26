"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storybookVersion = exports.cypressProjectGenerator = exports.configurationGenerator = void 0;
var configuration_1 = require("./src/generators/configuration/configuration");
Object.defineProperty(exports, "configurationGenerator", { enumerable: true, get: function () { return configuration_1.configurationGenerator; } });
var cypress_project_1 = require("./src/generators/cypress-project/cypress-project");
Object.defineProperty(exports, "cypressProjectGenerator", { enumerable: true, get: function () { return cypress_project_1.cypressProjectGenerator; } });
var versions_1 = require("./src/utils/versions");
Object.defineProperty(exports, "storybookVersion", { enumerable: true, get: function () { return versions_1.storybookVersion; } });
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const migrate_defaults_5_to_6_1 = require("./migrate-defaults-5-to-6/migrate-defaults-5-to-6");
const migrate_stories_to_6_2_1 = require("./migrate-stories-to-6-2/migrate-stories-to-6-2");
function migrateToStorybook6(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        (0, migrate_stories_to_6_2_1.migrateStoriesTo62Generator)(tree);
        return (0, migrate_defaults_5_to_6_1.migrateDefaultsGenerator)(tree);
    });
}
exports.default = migrateToStorybook6;
//# sourceMappingURL=migrate-to-storybook-6.js.map
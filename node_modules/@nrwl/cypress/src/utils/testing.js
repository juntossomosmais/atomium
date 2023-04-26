"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runMigration = exports.callRule = exports.runSchematic = void 0;
const path_1 = require("path");
const testing_1 = require("@angular-devkit/schematics/testing");
const testRunner = new testing_1.SchematicTestRunner('@nrwl/cypress', (0, path_1.join)(__dirname, '../../generators.json'));
const migrationRunner = new testing_1.SchematicTestRunner('@nrwl/cypress/migrations', (0, path_1.join)(__dirname, '../../migrations.json'));
function runSchematic(schematicName, options, tree) {
    return testRunner.runSchematicAsync(schematicName, options, tree).toPromise();
}
exports.runSchematic = runSchematic;
function callRule(rule, tree) {
    return testRunner.callRule(rule, tree).toPromise();
}
exports.callRule = callRule;
function runMigration(migrationName, options, tree) {
    return migrationRunner
        .runSchematicAsync(migrationName, options, tree)
        .toPromise();
}
exports.runMigration = runMigration;
//# sourceMappingURL=testing.js.map
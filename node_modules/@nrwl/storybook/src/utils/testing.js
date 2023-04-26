"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNewConfigurationAndCreateNew = exports.createTestUILib = exports.createTestUILibNoNgDevkit = exports.runMigration = exports.callRule = exports.runExternalSchematic = exports.runSchematic = void 0;
const tslib_1 = require("tslib");
const path_1 = require("path");
const schematics_1 = require("@angular-devkit/schematics");
const testing_1 = require("@angular-devkit/schematics/testing");
const testing_2 = require("@nrwl/workspace/testing");
const library_1 = require("@nrwl/workspace/src/generators/library/library");
const linter_1 = require("@nrwl/linter");
const testRunner = new testing_1.SchematicTestRunner('@nrwl/storybook', (0, path_1.join)(__dirname, '../../generators.json'));
['angular', 'react', 'jest', 'cypress'].forEach((collection) => testRunner.registerCollection(`@nrwl/${collection}`, (0, path_1.join)(__dirname, `../../../${collection}/generators.json`)));
const migrationRunner = new testing_1.SchematicTestRunner('@nrwl/storybook/migrations', (0, path_1.join)(__dirname, '../../migrations.json'));
function runSchematic(schematicName, options, tree) {
    return testRunner.runSchematicAsync(schematicName, options, tree).toPromise();
}
exports.runSchematic = runSchematic;
function runExternalSchematic(collectionName, schematicName, options, tree) {
    return testRunner
        .runExternalSchematicAsync(collectionName, schematicName, options, tree)
        .toPromise();
}
exports.runExternalSchematic = runExternalSchematic;
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
function createTestUILibNoNgDevkit(appTree, libName) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, library_1.default)(appTree, {
            linter: linter_1.Linter.EsLint,
            skipFormat: true,
            skipTsConfig: false,
            unitTestRunner: 'none',
            name: libName,
            standaloneConfig: false,
        });
        return appTree;
    });
}
exports.createTestUILibNoNgDevkit = createTestUILibNoNgDevkit;
function createTestUILib(libName, collectionName, options = {}) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let appTree = schematics_1.Tree.empty();
        appTree = (0, testing_2.createEmptyWorkspace)(appTree);
        appTree = yield callRule((0, schematics_1.externalSchematic)(collectionName, 'library', Object.assign({ name: libName }, options)), appTree);
        appTree = yield callRule((0, schematics_1.externalSchematic)(collectionName, 'component', {
            name: 'test-button',
            project: libName,
        }), appTree);
        if (collectionName === '@nrwl/angular') {
            updateAngularComponent(appTree);
        }
        if (collectionName === '@nrwl/react') {
            // @TODO
        }
        appTree = yield callRule((0, schematics_1.externalSchematic)(collectionName, 'component', {
            name: 'test-other',
            project: libName,
        }), appTree);
        return appTree;
        function updateAngularComponent(appTree) {
            appTree.overwrite(`libs/${libName}/src/lib/test-button/test-button.component.ts`, `
import { Component, OnInit, Input } from '@angular/core';
import { tmpdir } from 'os';
import { mkdtempSync } from 'fs';

export type ButtonStyle = 'default' | 'primary' | 'accent';

@Component({
  selector: 'proj-test-button',
  templateUrl: './test-button.component.html',
  styleUrls: ['./test-button.component.css']
})
export class TestButtonComponent implements OnInit {
  @Input('buttonType') type = 'button';
  @Input() style: ButtonStyle = 'default';
  @Input() age: number;
  @Input() isOn = false;

  constructor() { }

  ngOnInit() {
  }

}
`);
            appTree.overwrite(`libs/${libName}/src/lib/test-button/test-button.component.html`, `<button [attr.type]="type" [ngClass]="style"></button>`);
        }
    });
}
exports.createTestUILib = createTestUILib;
function deleteNewConfigurationAndCreateNew(appTree, projectStorybookRoot) {
    // Remove new Storybook configuration
    appTree.delete(`.storybook/main.js`);
    appTree.delete(`.storybook/tsconfig.json`);
    appTree.delete(`${projectStorybookRoot}/main.js`);
    appTree.delete(`${projectStorybookRoot}/preview.js`);
    appTree.delete(`${projectStorybookRoot}/tsconfig.json`);
    // Create old Storybook configuration
    appTree.write(`.storybook/addons.js`, 'console.log("hello")');
    appTree.write(`.storybook/webpack.config.js`, 'console.log("hello")');
    appTree.write(`.storybook/tsconfig.json`, '{"test": "hello"}');
    appTree.write(`${projectStorybookRoot}/config.js`, 'console.log("hello")');
    appTree.write(`${projectStorybookRoot}/addons.js`, 'console.log("hello")');
    appTree.write(`${projectStorybookRoot}/webpack.config.js`, 'console.log("hello")');
    appTree.write(`${projectStorybookRoot}/tsconfig.json`, '{"test": "hello"}');
    return appTree;
}
exports.deleteNewConfigurationAndCreateNew = deleteNewConfigurationAndCreateNew;
//# sourceMappingURL=testing.js.map
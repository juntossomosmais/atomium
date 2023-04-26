import { Rule, Tree } from '@angular-devkit/schematics';
import { Tree as NrwlTree } from '@nrwl/devkit';
export declare function runSchematic(schematicName: string, options: any, tree: Tree): Promise<import("@angular-devkit/schematics/testing").UnitTestTree>;
export declare function runExternalSchematic(collectionName: string, schematicName: string, options: any, tree: Tree): Promise<import("@angular-devkit/schematics/testing").UnitTestTree>;
export declare function callRule(rule: Rule, tree: Tree): Promise<import("@angular-devkit/schematics/src/tree/interface").Tree>;
export declare function runMigration(migrationName: string, options: any, tree: Tree): Promise<import("@angular-devkit/schematics/testing").UnitTestTree>;
export declare function createTestUILibNoNgDevkit(appTree: NrwlTree, libName: string): Promise<NrwlTree>;
export declare function createTestUILib(libName: string, collectionName: '@nrwl/angular' | '@nrwl/react', options?: any): Promise<Tree>;
export declare function deleteNewConfigurationAndCreateNew(appTree: NrwlTree, projectStorybookRoot: string): NrwlTree;

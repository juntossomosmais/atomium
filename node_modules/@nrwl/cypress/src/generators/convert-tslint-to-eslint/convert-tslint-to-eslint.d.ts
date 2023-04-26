import { Tree } from '@nrwl/devkit';
import { ConvertTSLintToESLintSchema } from '@nrwl/linter';
export declare function conversionGenerator(host: Tree, options: ConvertTSLintToESLintSchema): Promise<() => Promise<void>>;
export declare const conversionSchematic: (generatorOptions: ConvertTSLintToESLintSchema) => (tree: any, context: any) => Promise<any>;

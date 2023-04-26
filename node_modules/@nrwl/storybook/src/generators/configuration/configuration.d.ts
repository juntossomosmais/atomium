import { GeneratorCallback, Tree } from '@nrwl/devkit';
import { StorybookConfigureSchema } from './schema';
export declare function configurationGenerator(tree: Tree, rawSchema: StorybookConfigureSchema): Promise<GeneratorCallback>;
export default configurationGenerator;
export declare const configurationSchematic: (generatorOptions: StorybookConfigureSchema) => (tree: any, context: any) => Promise<any>;

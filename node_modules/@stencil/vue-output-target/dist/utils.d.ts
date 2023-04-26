import type { PackageJSON } from './types';
export declare const toLowerCase: (str: string) => string;
export declare const dashToPascalCase: (str: string) => string;
export declare function sortBy<T>(array: T[], prop: (item: T) => string): T[];
export declare function normalizePath(str: string): string;
export declare function relativeImport(pathFrom: string, pathTo: string, ext?: string): string;
export declare function readPackageJson(rootDir: string): Promise<PackageJSON>;

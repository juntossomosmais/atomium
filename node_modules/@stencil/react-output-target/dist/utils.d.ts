import type { PackageJSON } from './types';
/**
 * Send a string to lowercase
 * @param str the string to lowercase
 * @returns the lowercased string
 */
export declare const toLowerCase: (str: string) => string;
/**
 * Convert a string using dash-case to PascalCase
 * @param str the string to convert to PascalCase
 * @returns the PascalCased string
 */
export declare const dashToPascalCase: (str: string) => string;
/**
 * Sorts a provided array by a property belonging to an item that exists on each item in the array
 * @param array the array to sort
 * @param prop a function to look up a field on an entry in the provided array
 * @returns a shallow copy of the array, sorted by the property resolved by `prop`
 */
export declare function sortBy<T>(array: ReadonlyArray<T>, prop: (item: T) => string): ReadonlyArray<T>;
/**
 * Normalize a path
 * @param str the path to normalize
 * @returns the normalized path
 */
export declare function normalizePath(str: string): string;
/**
 * Generate the relative import from `pathFrom` to `pathTo`
 * @param pathFrom the path that shall be used as the origin in determining the relative path
 * @param pathTo the path that shall be used as the destination in determining the relative path
 * @param ext an extension to remove from the final path
 * @returns the derived relative import
 */
export declare function relativeImport(pathFrom: string, pathTo: string, ext?: string): string;
/**
 * Attempts to read a `package.json` file at the provided directory.
 * @param rootDir the directory to search for the `package.json` file to read
 * @returns the read and parsed `package.json` file
 */
export declare function readPackageJson(rootDir: string): Promise<PackageJSON>;

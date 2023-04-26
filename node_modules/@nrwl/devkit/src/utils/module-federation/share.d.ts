import type { SharedLibraryConfig, SharedWorkspaceLibraryConfig, WorkspaceLibrary } from './models';
import { AdditionalSharedConfig, SharedFunction } from './models';
import type { ProjectGraph } from 'nx/src/config/project-graph';
/**
 * Build an object of functions to be used with the ModuleFederationPlugin to
 * share Nx Workspace Libraries between Hosts and Remotes.
 *
 * @param libraries - The Nx Workspace Libraries to share
 * @param tsConfigPath - The path to TS Config File that contains the Path Mappings for the Libraries
 */
export declare function shareWorkspaceLibraries(libraries: WorkspaceLibrary[], tsConfigPath?: string): SharedWorkspaceLibraryConfig;
/**
 * Build the Module Federation Share Config for a specific package and the
 * specified version of that package.
 * @param pkgName - Name of the package to share
 * @param version - Version of the package to require by other apps in the Module Federation setup
 */
export declare function getNpmPackageSharedConfig(pkgName: string, version: string): SharedLibraryConfig | undefined;
/**
 * Create a dictionary of packages and their Module Federation Shared Config
 * from an array of package names.
 *
 * Lookup the versions of the packages from the root package.json file in the
 * workspace.
 * @param packages - Array of package names as strings
 */
export declare function sharePackages(packages: string[]): Record<string, SharedLibraryConfig>;
/**
 * Apply a custom function provided by the user that will modify the Shared Config
 * of the dependencies for the Module Federation build.
 *
 * @param sharedConfig - The original Shared Config to be modified
 * @param sharedFn - The custom function to run
 */
export declare function applySharedFunction(sharedConfig: Record<string, SharedLibraryConfig>, sharedFn: SharedFunction | undefined): void;
/**
 * Add additional dependencies to the shared package that may not have been
 * discovered by the project graph.
 *
 * This can be useful for applications that use a Dependency Injection system
 * that expects certain Singleton values to be present in the shared injection
 * hierarchy.
 *
 * @param sharedConfig - The original Shared Config
 * @param additionalShared - The additional dependencies to add
 * @param projectGraph - The Nx project graph
 */
export declare function applyAdditionalShared(sharedConfig: Record<string, SharedLibraryConfig>, additionalShared: AdditionalSharedConfig | undefined, projectGraph: ProjectGraph): void;

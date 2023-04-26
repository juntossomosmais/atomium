import type { NxJsonConfiguration } from '../../config/nx-json';
import { ProjectsConfigurations } from '../../config/workspace-json-project-json';
import type { Tree } from '../tree';
/**
 * @deprecated using NxJsonConfiguration
 */
export type WorkspaceConfiguration = Omit<ProjectsConfigurations, 'projects'> & Partial<NxJsonConfiguration>;
/**
 * Update general workspace configuration such as the default project or cli settings.
 *
 * This does _not_ update projects configuration, use {@link updateProjectConfiguration} or {@link addProjectConfiguration} instead.
 *
 * @deprecated use updateNxJson
 */
export declare function updateWorkspaceConfiguration(tree: Tree, workspaceConfig: WorkspaceConfiguration): void;
/**
 * Returns if a project has a standalone configuration (project.json).
 *
 * @param tree - the file system tree
 * @param project - the project name
 *
 * @deprecated non-standalone projects were deprecated
 */
export declare function isStandaloneProject(tree: Tree, project: string): boolean;
/**
 * Read general workspace configuration such as the default project or cli settings
 *
 * This does _not_ provide projects configuration, use {@link readProjectConfiguration} instead.
 * @deprecated use readNxJson
 */
export declare function readWorkspaceConfiguration(tree: Tree): WorkspaceConfiguration;
/**
 * @deprecated all projects are configured using project.json
 */
export declare function getWorkspacePath(tree: Tree): "angular.json" | "workspace.json";

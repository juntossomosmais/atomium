import type { ProjectGraph } from 'nx/src/config/project-graph';
import type { WorkspaceLibrary } from './models';
export declare function getDependentPackagesForProject(projectGraph: ProjectGraph, name: string): {
    workspaceLibraries: WorkspaceLibrary[];
    npmPackages: string[];
};

import { DependencyType, ProjectFileMap, ProjectGraph } from '../../../../config/project-graph';
export type ExplicitDependency = {
    sourceProjectName: string;
    targetProjectName: string;
    sourceProjectFile: string;
    type?: DependencyType.static | DependencyType.dynamic;
};
export declare function buildExplicitTypeScriptDependencies(graph: ProjectGraph, filesToProcess: ProjectFileMap): ExplicitDependency[];

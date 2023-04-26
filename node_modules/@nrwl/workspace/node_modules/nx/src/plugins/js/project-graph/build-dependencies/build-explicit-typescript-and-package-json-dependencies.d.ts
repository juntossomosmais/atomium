import { ExplicitDependency } from './explicit-project-dependencies';
import { ProjectFileMap, ProjectGraph } from '../../../../config/project-graph';
import { ProjectsConfigurations } from '../../../../config/workspace-json-project-json';
import { NxJsonConfiguration } from '../../../../config/nx-json';
export declare function buildExplicitTypescriptAndPackageJsonDependencies(jsPluginConfig: {
    analyzeSourceFiles?: boolean;
    analyzePackageJson?: boolean;
}, nxJsonConfiguration: NxJsonConfiguration, projectsConfigurations: ProjectsConfigurations, projectGraph: ProjectGraph, filesToProcess: ProjectFileMap): ExplicitDependency[];

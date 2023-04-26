import { ProjectFileMap, ProjectGraph } from '../../../../config/project-graph';
import { ProjectsConfigurations } from '../../../../config/workspace-json-project-json';
import { NxJsonConfiguration } from '../../../../config/nx-json';
export declare function buildExplicitPackageJsonDependencies(nxJsonConfiguration: NxJsonConfiguration, projectsConfigurations: ProjectsConfigurations, graph: ProjectGraph, filesToProcess: ProjectFileMap): any;

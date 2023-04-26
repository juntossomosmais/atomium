import { ProjectGraphProcessorContext } from '../../../../config/project-graph';
import { ProjectGraphBuilder } from '../../../../project-graph/project-graph-builder';
export declare function buildExplicitDependencies(jsPluginConfig: {
    analyzeSourceFiles?: boolean;
    analyzePackageJson?: boolean;
}, ctx: ProjectGraphProcessorContext, builder: ProjectGraphBuilder): void | Promise<unknown>;

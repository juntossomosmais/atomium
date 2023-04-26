import { ProjectGraphBuilder } from '../../../project-graph/project-graph-builder';
import { NormalizedPackageJson } from './utils/package-json';
import { ProjectGraph } from '../../../config/project-graph';
export declare function parseYarnLockfile(lockFileContent: string, builder: ProjectGraphBuilder): void;
export declare function stringifyYarnLockfile(graph: ProjectGraph, rootLockFileContent: string, packageJson: NormalizedPackageJson): string;

import { NormalizedPackageJson } from './utils/package-json';
import { ProjectGraphBuilder } from '../../../project-graph/project-graph-builder';
import { ProjectGraph } from '../../../config/project-graph';
export declare function parsePnpmLockfile(lockFileContent: string, builder: ProjectGraphBuilder): void;
export declare function stringifyPnpmLockfile(graph: ProjectGraph, rootLockFileContent: string, packageJson: NormalizedPackageJson): string;
